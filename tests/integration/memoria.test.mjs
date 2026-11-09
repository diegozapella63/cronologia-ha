// Integration: Agora › MemorIA (1.61.0) — the real server against a MemorIA of mentira (an HTTP server that answers
// /api/integracao/agora like the MemorIA 1.13.0): off asks nothing; on, the trechos of the person of the screen
// (the Home Assistant user and the person go along, with the key); a refused key is a reason, not trechos.
import { startStack, freePort, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";

let stack;
let c;
let fake;
const asked = [];
let key = "segredo";
const T = (inicio, extra = {}) => ({ inicio, agora: false, ontem: false, amanha: false, bloco: "Diário", bloco_id: "b1", cor: "lilas", folha_id: `f${inicio}`, titulo: "Noite", texto: "Noite\n☐ Ler 20 páginas", tipo: "trecho", outros: 0, ...extra });

before(async () => {
  const port = await freePort();
  fake = http.createServer((req, res) => {
    asked.push({ url: req.url, auth: req.headers.authorization, app: req.headers["x-app"] });
    if (req.headers.authorization !== `Bearer ${key}`) {
      res.writeHead(401, { "content-type": "application/json" });
      return res.end(JSON.stringify({ erro: "Chave inválida." }));
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ versao: "1.13.0", pessoa: "Diego", trechos: [T("18:00", { agora: true }), T("07:00", { amanha: true }), T("12:00", { amanha: true, bloco: "Cozinha" })] }));
  });
  await new Promise((r) => fake.listen(port, "127.0.0.1", r));
  const info = { app: "memoria", nome: "MemorIA", url: `http://127.0.0.1:${port}`, ip_url: null, chave: "segredo", versao: "1.13.0", agora: "/api/integracao/agora", painel: "/app/a1b2c3d4_memoria" };
  stack = await startStack({ share: { "memoria/integracao.json": info } });
  c = await stack.client();
});
after(async () => {
  if (stack) await stack.stop();
  if (fake) fake.close();
});

describe("MemorIA", () => {
  it("off by default: found, but nothing is asked", async () => {
    const out = await c.call("cronologia/memoria/agora", {});
    assert.deepEqual(out, { ligado: false, encontrado: true, erro: null, trechos: [] });
    assert.equal(asked.length, 0);
  });
  it("on: the trechos of the person of this screen, with the key, the user and the person", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { memoria_on: true } });
    const out = await c.call("cronologia/memoria/agora", {});
    assert.equal(out.ligado, true);
    assert.equal(out.erro, null);
    assert.equal(out.painel, "/app/a1b2c3d4_memoria");
    assert.deepEqual(out.trechos.map((t) => [t.inicio, t.agora, t.amanha, t.bloco]), [["18:00", true, false, "Diário"], ["07:00", false, true, "Diário"], ["12:00", false, true, "Cozinha"]]);
    assert.equal(asked.length, 1);
    assert.equal(asked[0].url, "/api/integracao/agora?usuario=u-diego&pessoa=Diego");
    assert.equal(asked[0].auth, "Bearer segredo");
    assert.equal(asked[0].app, "CronologIA");
    await c.call("cronologia/memoria/agora", {});
    assert.equal(asked.length, 1, "the same person within the minute: from the cache");
    await c.call("cronologia/memoria/agora", { fresh: true });
    assert.equal(asked.length, 2, "Configurações asks fresh");
    await waitFor(() => JSON.parse(fs.readFileSync(path.join(stack.dirs.data, "cronologia.json"), "utf8")).app.memoria_on === true, { what: "the switch kept in cronologia.json" });
  });
  it("a refused key: the reason, no trechos; off again: nothing asked", async () => {
    key = "outra";
    const out = await c.call("cronologia/memoria/agora", { fresh: true });
    assert.equal(out.erro, "O MemorIA recusou a chave.");
    assert.deepEqual(out.trechos, []);
    assert.match(stack.app.lines.join("\n"), /MemorIA: O MemorIA recusou a chave\./);
    await c.call("cronologia/prefs/set_app", { prefs: { memoria_on: false } });
    const n = asked.length;
    assert.equal((await c.call("cronologia/memoria/agora", { fresh: true })).ligado, false);
    assert.equal(asked.length, n);
  });
  it("not installed (the file gone): not found, nothing asked", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { memoria_on: true } });
    fs.rmSync(path.join(stack.dirs.share, "memoria", "integracao.json"));
    const n = asked.length;
    const out = await c.call("cronologia/memoria/agora", {});
    assert.deepEqual(out, { ligado: true, encontrado: false, erro: null, trechos: [] });
    assert.equal(asked.length, n);
  });
});
