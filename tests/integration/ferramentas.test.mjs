// Integration (1.60.0): the CorrerIA (the WhatsApp, the Claude and the Gemini) through /api/integracao/ferramentas —
// Mais › Configurações › Integrações › CorrerIA writes and removes share/cronologia/correria.json (600), the key of the
// file opens the route (401 off or with a wrong key), the list, a reading and the writings land in the fake Home
// Assistant and on the Agora index (with the last use for the screen), wrong arguments are 400 and an unknown tool 404.
// The route answers outside ingress too (the other apps come through the network of the apps), the rest doesn't.
import { startStack, day, waitFor, ROOT } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROUTE = "/api/integracao/ferramentas";
// the version expected comes from config.yaml
const VERSION = /^version:\s*"([^"]+)"/m.exec(fs.readFileSync(path.join(ROOT, "cronologia", "config.yaml"), "utf8"))[1];
const ANA = { id: "person.ana", nome: "Ana" };

describe("CorrerIA: the switch, the file and the key", () => {
  let stack;
  let c;
  let h;
  let key = "";
  const file = () => path.join(stack.dirs.share, "cronologia", "correria.json");
  const get = (k = key) => fetch(stack.url + ROUTE, { headers: { authorization: `Bearer ${k}`, "x-app": "CorrerIA" } });
  const post = (body, k = key) => fetch(stack.url + ROUTE, { method: "POST", headers: { authorization: `Bearer ${k}`, "x-app": "CorrerIA", "content-type": "application/json" }, body: typeof body === "string" ? body : JSON.stringify(body) });
  const tool = async (nome, argumentos = {}, cliente = "Claude") => {
    const res = await post({ nome, argumentos, pessoa: ANA, cliente });
    return { status: res.status, body: await res.json() };
  };

  before(async () => {
    stack = await startStack();
    c = await stack.client();
    h = await stack.home(c);
    await h.wait((x) => x.tracked.length >= 2 && x.routines.length >= 4, "the fake calendars in the index");
    await c.call("cronologia/prefs/set_app", { prefs: { score: { enabled: true, participants: ["Ana", "Beto"], period: "semana" } } });
  });
  after(async () => {
    if (stack) await stack.stop();
  });

  it("off by default: no file, no key works", async () => {
    assert.ok(!fs.existsSync(file()));
    assert.equal((await get("qualquer")).status, 401);
    assert.equal(h.latest.correria.ultimo, null);
  });

  it("on: the file of the contract (600) with its own key in /data/correria.key (600)", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { correria_on: true } });
    await waitFor(() => fs.existsSync(file()), { what: "share/cronologia/correria.json" });
    const j = JSON.parse(fs.readFileSync(file(), "utf8"));
    assert.equal(j.app, "cronologia");
    assert.equal(j.nome, "CronologIA");
    assert.equal(j.ferramentas, ROUTE);
    assert.equal(j.versao, VERSION);
    assert.match(j.url, /^http:\/\/.+:\d+$/);
    assert.equal(fs.statSync(file()).mode & 0o777, 0o600);
    const keyFile = path.join(stack.dirs.data, "correria.key");
    assert.equal(fs.readFileSync(keyFile, "utf8"), j.chave);
    assert.equal(fs.statSync(keyFile).mode & 0o777, 0o600);
    key = j.chave;
  });

  it("GET with the key: the instructions and the tools; a wrong key or none is 401", async () => {
    const res = await get();
    assert.equal(res.status, 200);
    const j = await res.json();
    assert.match(j.instrucoes, /cronologia_resumo/);
    assert.deepEqual(j.ferramentas.map((f) => f.nome), ["resumo", "agenda", "cadastros", "placar", "criar_compromisso", "editar_compromisso", "apagar_compromisso", "marcar_feito", "pular", "dar_pontos"]);
    assert.equal((await get("errada")).status, 401);
    const none = await fetch(stack.url + ROUTE);
    assert.equal(none.status, 401);
    assert.match((await none.json()).erro, /Chave inválida ou CorrerIA desligado/);
    assert.equal((await post({ nome: "resumo" }, "errada")).status, 401);
    assert.equal((await fetch(stack.url + ROUTE, { method: "PUT", headers: { authorization: `Bearer ${key}` } })).status, 405);
  });

  it("resumo: today's doses, chores, bills and maintenance with the ids", async () => {
    const r = await tool("resumo");
    assert.equal(r.status, 200);
    const j = JSON.parse(r.body.texto);
    assert.ok(j.remedios_hoje.some((m) => m.nome === "Sertralina" && m.id.startsWith("calendar.remedios|")));
    assert.ok(j.rotinas_hoje.some((x) => x.nome === "Tirar o lixo" && x.pontos === 10));
    assert.ok(j.contas.some((x) => x.nome === "Conta de luz" && x.vence === day(3)));
    assert.ok(j.manutencao.some((x) => x.nome === "Limpar o ar-condicionado" && x.situacao === "vencida há 4 dias"));
    assert.ok(j.compromissos.amanha.some((e) => e.titulo === "Almoço com a família"));
    assert.deepEqual(j.placar.pontos, { Ana: 0, Beto: 0 });
  });

  it("marcar_feito: the chore is done on the screen, with the points of who did it; the screen gets the last use", async () => {
    const lixo = h.latest.routines.find((x) => x.summary === "Tirar o lixo" && !x.yesterday);
    const r = await tool("marcar_feito", { id: lixo.key, quem: "Beto" }, "WhatsApp");
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal(r.body.texto, "Feita por Beto: Tirar o lixo; +10 pontos para Beto.");
    const ix = await h.wait((x) => x.checks[lixo.key] && x.correria.ultimo && x.correria.ultimo.cliente === "WhatsApp", "the chore done and the last use");
    assert.equal(ix.score.rows.find((x) => x.name === "Beto").points, 10);
    assert.equal(ix.score.log[0].via, "WhatsApp");
    assert.equal(ix.score.log[0].by, "Ana");
  });

  it("criar_compromisso: the event in the calendar of Home Assistant, with its id; then edited and deleted by it", async () => {
    let r = await tool("criar_compromisso", { titulo: "Reunião da escola", data: day(2), inicio: "18:30", calendario: "Pessoal", local: "Escola" });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    const id = /id: (\S+)$/.exec(r.body.texto)[1];
    assert.match(id, /^calendar\.pessoal\|.+\|.+T18:30:00/);
    let evs = await stack.events("calendar.pessoal", 0, 5);
    const ev = evs.find((e) => e.summary === "Reunião da escola");
    assert.ok(ev && ev.location === "Escola" && ev.start.startsWith(`${day(2)}T18:30`));
    r = await tool("editar_compromisso", { id, inicio: "19:00" });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    const id2 = /id: (\S+)$/.exec(r.body.texto)[1];
    evs = await stack.events("calendar.pessoal", 0, 5);
    assert.ok(evs.find((e) => e.summary === "Reunião da escola").start.startsWith(`${day(2)}T19:00`));
    r = await tool("apagar_compromisso", { id: id2 });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    evs = await stack.events("calendar.pessoal", 0, 5);
    assert.ok(!evs.some((e) => e.summary === "Reunião da escola"));
  });

  it("a medicine created through the tools: the app follows that calendar (the dose shows on Agora tomorrow)", async () => {
    const r = await tool("criar_compromisso", { titulo: "Vitamina C", tipo: "remedio", data: day(1), inicio: "08:00", repete: "nao", calendario: "Trabalho", dose: "1 comprimido", quem: "Beto" });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    await h.wait((x) => x.tracked.includes("calendar.trabalho"), "the calendar followed");
    const ag = JSON.parse((await tool("agenda", { de: day(1), ate: day(1), busca: "vitamina" })).body.texto);
    assert.deepEqual(ag.eventos.map((e) => [e.titulo, e.modelo, e.dose, e.quem]), [["Vitamina C", "Remédio", "1 comprimido", "Beto"]]);
  });

  it("wrong arguments are 400 with what is valid; an unknown tool 404; a body that isn't JSON 400", async () => {
    let r = await tool("criar_compromisso", { titulo: "x", calendario: "Feriados Brasil" });
    assert.equal(r.status, 400);
    assert.match(r.body.erro, /não aceita eventos novos\. Os que aceitam: /);
    r = await tool("marcar_feito", { id: "calendar.casa|nada|2026-01-01" });
    assert.equal(r.status, 400);
    r = await tool("voar");
    assert.equal(r.status, 404);
    assert.equal(r.body.erro, "Ferramenta desconhecida: voar.");
    let res = await post("{nao é json");
    assert.equal(res.status, 400);
    res = await post("[1]");
    assert.equal(res.status, 400);
    res = await post("x".repeat(300 * 1024));
    assert.equal(res.status, 413);
  });

  it("off again: the file goes away and the same key stops working", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { correria_on: null } });
    await waitFor(() => !fs.existsSync(file()), { what: "the file removed" });
    assert.equal((await get()).status, 401);
    assert.equal((await post({ nome: "resumo" })).status, 401);
    // on again: the same key (kept in /data)
    await c.call("cronologia/prefs/set_app", { prefs: { correria_on: true } });
    await waitFor(() => fs.existsSync(file()), { what: "the file again" });
    assert.equal(JSON.parse(fs.readFileSync(file(), "utf8")).chave, key);
  });
});

describe("CorrerIA outside ingress (not in dev mode)", () => {
  let stack;
  before(async () => {
    stack = await startStack({ env: { CRONOLOGIA_DEV: "0", CRONOLOGIA_URL_INTERNA: "http://cronologia.local:8099" }, data: { app: { correria_on: true } } });
  });
  after(async () => {
    if (stack) await stack.stop();
  });

  it("the file is written at start; the route opens with the key, the screen and its socket stay closed to the network", async () => {
    const file = path.join(stack.dirs.share, "cronologia", "correria.json");
    await waitFor(() => fs.existsSync(file), { what: "the file at start" });
    const j = JSON.parse(fs.readFileSync(file, "utf8"));
    assert.equal(j.url, "http://cronologia.local:8099");
    assert.equal(j.ip_url, null);
    const res = await fetch(`${stack.url}${ROUTE}?x=1`, { headers: { authorization: `Bearer ${j.chave}` } });
    assert.equal(res.status, 200);
    assert.equal((await fetch(`${stack.url}/`)).status, 403);
    assert.equal((await fetch(`${stack.url}/api/export/json`)).status, 403);
  });
});
