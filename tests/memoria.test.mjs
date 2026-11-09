// memoria.js: the trechos of the MemorIA (its integration file and GET /api/integracao/agora), with fetch replaced
// by a fake and the file in a temp share folder: off asks nothing, the person goes along, the answer is checked
// (it is another app's data) and kept until the next start time.
import { at, makeLog, tmpDir } from "./helpers.mjs";
import { describe, it, mock, afterEach, beforeEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { Memoria, cleanTrecho, nextChange } from "../cronologia/rootfs/app/lib/memoria.js";

let share;
beforeEach(() => {
  share = tmpDir("cronologia-share-");
});
afterEach(() => {
  mock.restoreAll();
  mock.timers.reset();
  fs.rmSync(share, { recursive: true, force: true });
});
const writeInfo = (info) => {
  fs.mkdirSync(path.join(share, "memoria"), { recursive: true });
  fs.writeFileSync(path.join(share, "memoria", "integracao.json"), JSON.stringify(info));
};
const INFO = { app: "memoria", nome: "MemorIA", url: "http://a1b2c3d4-memoria:8099", ip_url: "http://172.30.33.9:8099", chave: "segredo", versao: "1.13.0", agora: "/api/integracao/agora", painel: "/app/a1b2c3d4_memoria" };
const reply = (status, body) => ({ ok: status >= 200 && status < 300, status, json: async () => body });
const T = (inicio, extra = {}) => ({ inicio, agora: false, ontem: false, amanha: false, bloco: "Diário", bloco_id: "b1", cor: "lilas", folha_id: `f${inicio}`, titulo: "Noite", texto: "Noite\n☐ Ler", tipo: "trecho", outros: 0, ...extra });
const ANSWER = { versao: "1.13.0", pessoa: "Ana", trechos: [T("18:00", { agora: true }), T("07:00", { amanha: true }), T("12:00", { amanha: true, bloco: "Cozinha", cor: "laranja" })] };

describe("Memoria", () => {
  it("off: nothing is asked (says whether it is installed)", async () => {
    const f = mock.method(globalThis, "fetch", async () => reply(200, ANSWER));
    const m = new Memoria({ shareDir: share, log: makeLog(), enabled: () => false });
    assert.deepEqual(await m.agora({ usuario: "u1" }), { ligado: false, encontrado: false, erro: null, trechos: [] });
    writeInfo(INFO);
    assert.equal((await m.agora({ usuario: "u1" })).encontrado, true);
    assert.equal(f.mock.callCount(), 0);
  });
  it("on, not installed (no file, or a file without the key): not found, nothing asked", async () => {
    const f = mock.method(globalThis, "fetch", async () => reply(200, ANSWER));
    const m = new Memoria({ shareDir: share, log: makeLog(), enabled: () => true });
    assert.deepEqual(await m.agora(), { ligado: true, encontrado: false, erro: null, trechos: [] });
    writeInfo({ url: "http://x:8099" });
    assert.equal((await m.agora()).encontrado, false);
    assert.equal(f.mock.callCount(), 0);
  });
  it("on: asks with the key, the user and the person; the answer and the address of the app", async () => {
    writeInfo(INFO);
    const f = mock.method(globalThis, "fetch", async () => reply(200, ANSWER));
    const m = new Memoria({ shareDir: share, log: makeLog(), enabled: () => true });
    const out = await m.agora({ usuario: "u-ana", pessoa: "Ana" });
    const [url, opts] = f.mock.calls[0].arguments;
    assert.equal(url, "http://a1b2c3d4-memoria:8099/api/integracao/agora?usuario=u-ana&pessoa=Ana");
    assert.equal(opts.headers.authorization, "Bearer segredo");
    assert.equal(opts.headers["x-app"], "CronologIA");
    assert.equal(out.ligado, true);
    assert.equal(out.encontrado, true);
    assert.equal(out.erro, null);
    assert.equal(out.versao, "1.13.0");
    assert.equal(out.painel, "/app/a1b2c3d4_memoria");
    assert.equal(out.pessoa, "Ana");
    assert.deepEqual(out.trechos.map((t) => [t.inicio, t.agora, t.amanha, t.bloco]), [["18:00", true, false, "Diário"], ["07:00", false, true, "Diário"], ["12:00", false, true, "Cozinha"]]);
  });
  it("without a person: no query", async () => {
    writeInfo(INFO);
    const f = mock.method(globalThis, "fetch", async () => reply(200, { trechos: [] }));
    const m = new Memoria({ shareDir: share, log: makeLog(), enabled: () => true });
    assert.deepEqual((await m.agora()).trechos, []);
    assert.equal(f.mock.calls[0].arguments[0], "http://a1b2c3d4-memoria:8099/api/integracao/agora");
  });
  it("a painel that is not /app/<slug> is not a link; an odd route falls back to the known one", async () => {
    writeInfo({ ...INFO, painel: "javascript:alert(1)", agora: "https://outro.site/x" });
    const f = mock.method(globalThis, "fetch", async () => reply(200, ANSWER));
    const m = new Memoria({ shareDir: share, log: makeLog(), enabled: () => true });
    assert.equal((await m.agora({ usuario: "u1" })).painel, null);
    assert.match(f.mock.calls[0].arguments[0], /^http:\/\/a1b2c3d4-memoria:8099\/api\/integracao\/agora\?/);
  });
  it("kept per person until the next start time (at most the ttl); fresh asks again", async () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 8, 6, 59, 30).getTime() });
    writeInfo(INFO);
    const ans = { trechos: [T("18:00", { agora: true, ontem: true }), T("07:00"), T("12:00")] };
    const f = mock.method(globalThis, "fetch", async () => reply(200, ans));
    const m = new Memoria({ shareDir: share, log: makeLog(), enabled: () => true });
    await m.agora({ usuario: "u1" });
    await m.agora({ usuario: "u1" });
    assert.equal(f.mock.callCount(), 1, "the same person within the minute: from the cache");
    await m.agora({ usuario: "u2" });
    assert.equal(f.mock.callCount(), 2, "another person asks on its own");
    mock.timers.tick(31000); // 07:00:01: the trecho of 07:00 starts, before the ttl
    await m.agora({ usuario: "u1" });
    assert.equal(f.mock.callCount(), 3, "at the next start time it asks again");
    await m.agora({ usuario: "u1" }, { fresh: true });
    assert.equal(f.mock.callCount(), 4, "fresh: past the cache");
    m.forget();
    await m.agora({ usuario: "u1" });
    assert.equal(f.mock.callCount(), 5, "forget (the switch): asks again");
  });
  it("two screens of the same person at once: one request", async () => {
    writeInfo(INFO);
    let release;
    const f = mock.method(globalThis, "fetch", () => new Promise((r) => (release = () => r(reply(200, ANSWER)))));
    const m = new Memoria({ shareDir: share, log: makeLog(), enabled: () => true });
    const a = m.agora({ usuario: "u1" });
    const b = m.agora({ usuario: "u1" });
    await new Promise((r) => setImmediate(r));
    release();
    assert.deepEqual(await a, await b);
    assert.equal(f.mock.callCount(), 1);
  });
  it("a refused key, an error or no answer: the reason, no trechos; the second address only when the first does not answer", async () => {
    writeInfo(INFO);
    const log = makeLog();
    let f = mock.method(globalThis, "fetch", async () => reply(401, { erro: "Chave inválida." }));
    const m = new Memoria({ shareDir: share, log, enabled: () => true });
    let out = await m.agora({ usuario: "u1" });
    assert.equal(out.erro, "O MemorIA recusou a chave.");
    assert.deepEqual(out.trechos, []);
    assert.equal(f.mock.callCount(), 1, "it answered: no second address");
    mock.restoreAll();
    f = mock.method(globalThis, "fetch", async (url) => {
      if (url.startsWith("http://a1b2c3d4")) throw Object.assign(new Error("getaddrinfo ENOTFOUND"), { name: "TypeError" });
      return reply(200, ANSWER);
    });
    out = await m.agora({ usuario: "u1" }, { fresh: true });
    assert.equal(out.erro, null);
    assert.equal(f.mock.calls[1].arguments[0].startsWith("http://172.30.33.9:8099/api/integracao/agora"), true);
    mock.restoreAll();
    mock.method(globalThis, "fetch", async () => {
      throw Object.assign(new Error("The operation was aborted due to timeout"), { name: "TimeoutError" });
    });
    out = await m.agora({ usuario: "u1" }, { fresh: true });
    assert.equal(out.erro, "O MemorIA não respondeu.");
    assert.ok(log.lines.some((l) => /MemorIA: O MemorIA recusou a chave\./.test(l)));
  });
});

describe("cleanTrecho", () => {
  it("keeps only the known fields, with their sizes", () => {
    const t = cleanTrecho({ ...T("18:00", { agora: true }), texto: "x".repeat(3000), bloco: "  ", cor: "Lilás!", tipo: "outro", outros: 3.5, extra: "não" });
    assert.equal(t.texto.length, 1500);
    assert.equal(t.bloco, "Bloco");
    assert.equal(t.cor, "");
    assert.equal(t.tipo, "trecho");
    assert.equal(t.outros, 0);
    assert.equal("extra" in t, false);
    assert.equal(cleanTrecho({ ...T("25:00") }), null);
    assert.equal(cleanTrecho(null), null);
    assert.equal(cleanTrecho(T("18:00", { tipo: "periodo", periodo: "Noite" })).periodo, "Noite");
    assert.equal("periodo" in cleanTrecho(T("18:00")), false);
  });
});

describe("nextChange", () => {
  it("the start of the next trecho, today or tomorrow; none: never", () => {
    const now = at(2026, 11, 8, 20, 50);
    assert.equal(nextChange([T("18:00", { agora: true }), T("07:00", { amanha: true })], now), at(2026, 11, 9, 7).getTime());
    assert.equal(nextChange([T("07:00", { agora: true }), T("12:00")], at(2026, 11, 8, 9)), at(2026, 11, 8, 12).getTime());
    assert.equal(nextChange([T("07:00", { agora: true })], now), Infinity);
  });
});
