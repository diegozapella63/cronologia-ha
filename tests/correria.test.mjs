// lib/correria.js: the connection with the CorrerIA — share/cronologia/correria.json (600, atomic; removed when off),
// the own key in /data/correria.key (600, made once), the key compared in constant time (nothing works while off) and
// the last use (who used it), kept across restarts.
import { makeLog, tmpDir } from "./helpers.mjs";
import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { Correria, ROTA, ipOf } from "../cronologia/rootfs/app/lib/correria.js";

let dir;
beforeEach(() => {
  dir = tmpDir("cronologia-correria-");
});
afterEach(() => fs.rmSync(dir, { recursive: true, force: true }));

function make(over = {}) {
  let on = over.on ?? true;
  const log = makeLog();
  const uses = [];
  const c = new Correria({ dataDir: path.join(dir, "data"), shareDir: path.join(dir, "share"), port: 8099, version: "1.60.0", log, enabled: () => on, host: () => "a1b2c3d4-cronologia", ip: () => "172.30.33.5", url: "", onUse: () => uses.push(1), ...over });
  return { c, log, uses, set: (v) => (on = v), file: path.join(dir, "share", "cronologia", "correria.json"), keyFile: path.join(dir, "data", "correria.key") };
}
const mode = (f) => fs.statSync(f).mode & 0o777;

describe("share/cronologia/correria.json", () => {
  it("on: the contract (app, nome, assunto, url, ip_url, chave, versao, ferramentas, gravado_em), 600, no temp file left", () => {
    const { c, file, keyFile } = make();
    assert.equal(c.publish(), true);
    const j = JSON.parse(fs.readFileSync(file, "utf8"));
    assert.deepEqual(Object.keys(j), ["app", "nome", "assunto", "url", "ip_url", "chave", "versao", "ferramentas", "gravado_em"]);
    assert.equal(j.app, "cronologia");
    assert.equal(j.nome, "CronologIA");
    assert.match(j.assunto, /agenda da família/);
    assert.equal(j.url, "http://a1b2c3d4-cronologia:8099");
    assert.equal(j.ip_url, "http://172.30.33.5:8099");
    assert.equal(j.versao, "1.60.0");
    assert.equal(j.ferramentas, ROTA);
    assert.equal(ROTA, "/api/integracao/ferramentas");
    assert.match(j.gravado_em, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
    assert.equal(j.rota, undefined, "only the GerencIA talks (rota, anexos)");
    assert.ok(j.chave.length >= 43);
    assert.equal(fs.readFileSync(keyFile, "utf8"), j.chave);
    assert.equal(mode(file), 0o600);
    assert.equal(mode(keyFile), 0o600);
    assert.deepEqual(fs.readdirSync(path.dirname(file)), ["correria.json"]);
  });
  it("off: removed (and nothing written); ensure() writes it again only while on", () => {
    const { c, file, set } = make();
    c.publish();
    set(false);
    assert.equal(c.publish(), false);
    assert.ok(!fs.existsSync(file));
    c.ensure();
    assert.ok(!fs.existsSync(file));
    set(true);
    c.ensure();
    assert.ok(fs.existsSync(file));
    const before = fs.statSync(file).mtimeMs;
    c.ensure();
    assert.equal(fs.statSync(file).mtimeMs, before);
  });
  it("CRONOLOGIA_URL_INTERNA (tests, dev): that address and no IP; without an IP, ip_url is null", () => {
    let { c, file } = make({ url: "http://127.0.0.1:18099/" });
    c.publish();
    let j = JSON.parse(fs.readFileSync(file, "utf8"));
    assert.deepEqual([j.url, j.ip_url], ["http://127.0.0.1:18099", null]);
    ({ c, file } = make({ ip: () => null }));
    c.publish();
    j = JSON.parse(fs.readFileSync(file, "utf8"));
    assert.equal(j.ip_url, null);
  });
  it("a share folder that can't be written: one warning, not one per try", () => {
    fs.writeFileSync(path.join(dir, "share"), "not a folder");
    const { c, log } = make();
    assert.equal(c.publish(), false);
    assert.equal(c.publish(), false);
    assert.equal(log.lines.filter((l) => l[0] === "warn").length, 1);
    assert.match(log.lines[0][1], /CorrerIA: não consegui gravar/);
  });
  it("ipOf: the first IPv4 that is not the loopback", () => {
    assert.equal(ipOf({ lo: [{ family: "IPv4", address: "127.0.0.1", internal: true }], eth0: [{ family: "IPv6", address: "fe80::1", internal: false }, { family: "IPv4", address: "172.30.33.5", internal: false }] }), "172.30.33.5");
    assert.equal(ipOf({ lo: [{ family: 4, address: "127.0.0.1", internal: true }] }), null);
    assert.equal(ipOf(null), null);
    assert.equal(typeof ipOf(), typeof ipOf()); // the real interfaces don't throw
  });
});

describe("the defaults", () => {
  it("off unless turned on; the host name and the IP of this container", () => {
    const c = new Correria({ dataDir: path.join(dir, "data"), shareDir: path.join(dir, "share"), port: 8099, version: "1.60.0", log: makeLog() });
    assert.equal(c.publish(), false);
    assert.equal(c.authorized({ authorization: "Bearer x" }), false);
    const a = c.address();
    assert.match(a.url, /^http:\/\/.+:8099$/);
    assert.ok(a.ip_url === null || /^http:\/\/[\d.]+:8099$/.test(a.ip_url));
    c.used("Claude");
    assert.equal(c.state().ultimo.cliente, "Claude");
  });
});

describe("the key", () => {
  it("made once and kept (a restart reads the same one); a short or empty one is made again", () => {
    const a = make();
    const k = a.c.chave();
    assert.equal(make().c.chave(), k);
    fs.writeFileSync(a.keyFile, "curta");
    const k2 = make().c.chave();
    assert.notEqual(k2, "curta");
    assert.ok(k2.length >= 43);
  });
  it("Bearer <key> in constant time; a wrong key, another scheme or nothing is refused; off, not even the right key", () => {
    const { c, set } = make();
    const k = c.chave();
    assert.equal(c.authorized({ authorization: `Bearer ${k}` }), true);
    assert.equal(c.authorized({ authorization: `Bearer  ${k} ` }), true);
    assert.equal(c.authorized({ authorization: `Bearer ${k}x` }), false);
    assert.equal(c.authorized({ authorization: `Bearer ${k.slice(0, -1)}` }), false);
    assert.equal(c.authorized({ authorization: `Basic ${k}` }), false);
    assert.equal(c.authorized({}), false);
    assert.equal(c.authorized(null), false);
    set(false);
    assert.equal(c.authorized({ authorization: `Bearer ${k}` }), false);
  });
});

describe("the last use", () => {
  it("who used it and when, for the screen; kept in /data and read back after a restart", () => {
    const { c, uses } = make();
    assert.deepEqual(c.state(), { ultimo: null });
    c.used("Claude", "resumo");
    assert.equal(uses.length, 1);
    const s = c.state();
    assert.equal(s.ultimo.cliente, "Claude");
    assert.ok(Number.isFinite(Date.parse(s.ultimo.em)));
    assert.deepEqual(make().c.state(), s);
    c.used("", "x");
    assert.equal(c.state().ultimo.cliente, "CorrerIA");
    c.used("  Um   nome de cliente bem comprido demais para caber aqui  ");
    assert.equal(c.state().ultimo.cliente.length, 40);
  });
  it("a broken file of the last use is ignored", () => {
    fs.mkdirSync(path.join(dir, "data"), { recursive: true });
    fs.writeFileSync(path.join(dir, "data", "correria-uso.json"), "{");
    assert.deepEqual(make().c.state(), { ultimo: null });
    fs.writeFileSync(path.join(dir, "data", "correria-uso.json"), JSON.stringify({ cliente: "Gemini", em: "ontem" }));
    assert.deepEqual(make().c.state(), { ultimo: null });
  });
  it("a data folder that can't be written still updates the screen", () => {
    fs.writeFileSync(path.join(dir, "arquivo"), "not a folder");
    const { c, uses } = make({ dataDir: path.join(dir, "arquivo", "data") });
    c.used("WhatsApp");
    assert.equal(c.state().ultimo.cliente, "WhatsApp");
    assert.equal(uses.length, 1);
  });
});
