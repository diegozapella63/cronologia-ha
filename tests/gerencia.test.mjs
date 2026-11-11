// gerencia.js: the bills of the GerencIA app, through its integration file and API
// (fetch replaced by a fake; the file lives in a temp share folder).
import { at, makeLog, tmpDir } from "./helpers.mjs";
import { describe, it, mock, afterEach, beforeEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { Gerencia } from "../cronologia/rootfs/app/lib/gerencia.js";

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
  fs.mkdirSync(path.join(share, "gerencia"), { recursive: true });
  fs.writeFileSync(path.join(share, "gerencia", "integracao.json"), JSON.stringify(info));
};
const make = (enabled = true) => {
  let changes = 0;
  const g = new Gerencia({ shareDir: share, log: makeLog(), onChange: () => changes++, enabled: () => enabled });
  return { g, changes: () => changes };
};
const reply = (status, body) => ({ ok: status >= 200 && status < 300, status, json: async () => body });

describe("Gerencia", () => {
  it("info: only a file with url and key", () => {
    const { g } = make();
    assert.equal(g.info(), null);
    writeInfo({ url: "http://gerencia:8099" });
    assert.equal(g.info(), null);
    writeInfo({ url: "http://gerencia:8099", chave: "k" });
    assert.deepEqual(g.info(), { url: "http://gerencia:8099", chave: "k" });
  });
  it("refresh reads 2 months back and 4 ahead with the key; tells the screens only on a change", async () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2, 14).getTime() });
    writeInfo({ url: "http://gerencia:8099", chave: "segredo" });
    const f = mock.method(globalThis, "fetch", async () => reply(200, { contas: [{ id: "c1", descricao: "Luz", valor: 231.4 }], categorias: ["Casa"], versao: "3.1.0" }));
    const { g, changes } = make();
    await g.refresh();
    const [url, opts] = f.mock.calls[0].arguments;
    assert.equal(url, "http://gerencia:8099/api/integracao/contas?de=2026-09-01&ate=2027-03-06");
    assert.equal(opts.method, "GET");
    assert.equal(opts.headers.authorization, "Bearer segredo");
    assert.equal(opts.headers["x-app"], "CronologIA");
    assert.equal(g.state.ligado, true);
    assert.equal(g.state.contas.length, 1);
    assert.equal(g.state.versao, "3.1.0");
    assert.equal(g.state.erro, null);
    assert.equal(changes(), 1);
    mock.timers.tick(60000);
    await g.refresh();
    assert.equal(changes(), 1, "same bills: no change (the time does not count)");
  });
  it("1.79.0: the alerts of the GerencIA and its address in Home Assistant come with the bills (an older one: none)", async () => {
    writeInfo({ url: "http://gerencia:8099", chave: "k" });
    const avisos = [{ id: "inv:vence", tipo: "vence", titulo: "Vence hoje", texto: "CDB Azul", dias: 0, caminho: "/agora" }];
    let body = { contas: [], avisos, painel: "/app/a1b2c3d4_gerencia" };
    mock.method(globalThis, "fetch", async () => reply(200, body));
    const { g, changes } = make();
    await g.refresh();
    assert.deepEqual([g.state.avisos, g.state.painel], [avisos, "/app/a1b2c3d4_gerencia"]);
    body = { contas: [], avisos: "x", painel: "javascript:alert(1)" };
    await g.refresh();
    assert.deepEqual([g.state.avisos, g.state.painel], [[], null], "only a list, and only an address of an app");
    assert.equal(changes(), 2, "the alerts changing is a change");
  });
  it("tries the second address when the first does not answer; not when it answered with an error", async () => {
    writeInfo({ url: "http://gerencia:8099", ip_url: "http://172.30.33.5:8099", chave: "k" });
    let calls = [];
    mock.method(globalThis, "fetch", async (url) => {
      calls.push(url);
      if (url.startsWith("http://gerencia")) throw new Error("ENOTFOUND");
      return reply(200, { contas: [] });
    });
    const { g } = make();
    await g.refresh();
    assert.equal(calls.length, 2);
    assert.equal(g.state.ligado, true);
    assert.equal(g.state.erro, null);
    mock.restoreAll();
    calls = [];
    mock.method(globalThis, "fetch", async (url) => {
      calls.push(url);
      return reply(401, { erro: "Chave inválida" });
    });
    await assert.rejects(g.request("GET", "/x"), { code: "gerencia_off", message: "Chave inválida" });
    assert.equal(calls.length, 1);
  });
  it("an error keeps the last bills and says what happened (logged once)", async () => {
    writeInfo({ url: "http://g", chave: "k" });
    mock.method(globalThis, "fetch", async () => reply(500, {}));
    const { g } = make();
    g.state.contas = [{ id: "velha" }];
    await g.refresh();
    await g.refresh();
    assert.equal(g.state.erro, "O GerencIA respondeu 500");
    assert.deepEqual(g.state.contas, [{ id: "velha" }]);
    assert.equal(g.log.lines.filter((l) => l[0] === "warn").length, 1);
  });
  it("turned off here: nothing is read; desligado and encontrado tell the screen why", async () => {
    writeInfo({ url: "http://g", chave: "k" });
    const f = mock.method(globalThis, "fetch", async () => reply(200, {}));
    const { g } = make(false);
    await g.refresh();
    assert.equal(f.mock.callCount(), 0);
    assert.deepEqual(g.state, { ligado: false, desligado: true, encontrado: true, contas: [], categorias: [], erro: null, versao: null, at: null });
    await assert.rejects(g.request("GET", "/x"), { code: "gerencia_off" });
  });
  it("not installed: not connected, and requests say so", async () => {
    const { g } = make();
    await g.refresh();
    assert.equal(g.state.ligado, false);
    await assert.rejects(g.act("pagar", { id: "c1" }), { code: "no_gerencia" });
  });
  it("act posts the action and reads the bills again", async () => {
    writeInfo({ url: "http://g", chave: "k" });
    const f = mock.method(globalThis, "fetch", async (url) => reply(200, url.includes("/pagar") ? { ok: true } : { contas: [] }));
    const { g } = make();
    assert.deepEqual(await g.act("pagar", { id: "c1", valor: 10 }), { ok: true });
    const [url, opts] = f.mock.calls[0].arguments;
    assert.equal(url, "http://g/api/integracao/pagar");
    assert.equal(opts.method, "POST");
    assert.equal(opts.body, JSON.stringify({ id: "c1", valor: 10 }));
    assert.equal(opts.headers["content-type"], "application/json");
    assert.match(f.mock.calls[1].arguments[0], /\/api\/integracao\/contas\?/);
  });
  it("two refreshes at once share one request", async () => {
    writeInfo({ url: "http://g", chave: "k" });
    const f = mock.method(globalThis, "fetch", async () => reply(200, { contas: [] }));
    const { g } = make();
    await Promise.all([g.refresh(), g.refresh()]);
    assert.equal(f.mock.callCount(), 1);
  });
});
