// Integration: Mais › Dados (export JSON/CSV/ZIP, import, backups in share, versions),
// Falar (speech-to-text engines and /api/voice) and Ler com IA (/api/extract, Uso da IA).
import { startStack, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { readZip, makeZip } from "../../cronologia/rootfs/app/lib/zip.js";
import { parseICS } from "../../frontend/src/ics.js";

let stack;
let c;
before(async () => {
  stack = await startStack({
    // the app's saved data is read at start (as after a restart)
    data: { app: { accent: "verde", score: { enabled: true, participants: ["Davi"], period: "semana" } }, calendars: { "calendar.casa": { name: "Nossa casa" } }, checks: { "calendar.casa|x|2026-01-01": { at: new Date().toISOString(), by: "Davi" } } },
    fakeEnv: { FAKE_STT_TEXT: "Dentista quinta às 15 horas" },
  });
  c = await stack.client();
});
after(async () => {
  if (stack) await stack.stop();
});

const post = (p, body, headers = {}) => fetch(`${stack.url}${p}`, { method: "POST", body, headers });

describe("the saved data", () => {
  it("is read at start", async () => {
    const b = await c.call("cronologia/bootstrap");
    assert.equal(b.prefs.app.accent, "verde");
    assert.equal(b.prefs.calendars["calendar.casa"].name, "Nossa casa");
  });
});

describe("Mais › Dados: export", () => {
  it("JSON: the app data without the alerts sent", async () => {
    const res = await fetch(`${stack.url}/api/export/json`);
    assert.equal(res.status, 200);
    assert.match(res.headers.get("content-disposition"), /attachment; filename="cronologia-\d{4}-\d{2}-\d{2}-\d{4}\.json"/);
    const j = await res.json();
    assert.equal(j.app_name, "CronologIA");
    assert.equal(j.app.accent, "verde");
    assert.equal("sent" in j, false);
    assert.equal("mirror" in j, false);
  });
  it("CSV: every event of every calendar, for Excel", async () => {
    const res = await fetch(`${stack.url}/api/export/csv`);
    const text = Buffer.from(await res.arrayBuffer()).toString("utf8");
    assert.equal(text.charCodeAt(0), 0xfeff);
    const lines = text.slice(1).split("\r\n");
    assert.equal(lines[0], "Calendário;Título;Início;Fim;Dia todo;Local;Repete;Modelo;Notas");
    assert.ok(lines.some((l) => l.startsWith("Nossa casa;Trocar o filtro de água;") && l.includes(";Manutenção;")), "the calendar's own name and the model");
    assert.ok(lines.some((l) => l.startsWith("Trabalho;Reunião de planejamento;")));
  });
  it("ZIP: app data, CSVs and one .ics per calendar that the import screen reads", async () => {
    const res = await fetch(`${stack.url}/api/export/zip`);
    assert.equal(res.headers.get("content-type"), "application/zip");
    const files = readZip(Buffer.from(await res.arrayBuffer()));
    const names = files.map((f) => f.name);
    for (const n of ["cronologia.json", "eventos.csv", "pontos.csv", "calendarios/Nossa casa.ics", "calendarios/Remédios.ics", "calendarios/Feriados Brasil.ics", "LEIA-ME.txt"]) assert.ok(names.includes(n), n);
    const ics = parseICS(files.find((f) => f.name === "calendarios/Feriados Brasil.ics").data.toString());
    assert.ok(ics.some((e) => e.title === "Natal"));
    assert.equal(JSON.parse(files.find((f) => f.name === "cronologia.json").data.toString()).app.accent, "verde");
  });
});

describe("Mais › Dados: import, versions, backups", () => {
  it("import a .json: everything swapped, a version of before kept, restore brings it back", async () => {
    const exported = await (await fetch(`${stack.url}/api/export/json`)).json();
    const changed = { ...exported, app: { ...exported.app, accent: "rosa", view: "nope" }, calendars: { "calendar.pessoal": { name: "Eu", color: "azul" } } };
    const pushed = [];
    await c.subscribe("cronologia/prefs/subscribe", {}, (p) => pushed.push(p));
    const res = await post("/api/import", JSON.stringify(changed), { "x-file-name": encodeURIComponent("meu backup.json") });
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { calendars: 1, points: 0, checks: 1 });
    await waitFor(() => pushed.length, { what: "the new settings pushed" });
    const b = await c.call("cronologia/bootstrap");
    assert.equal(b.prefs.app.accent, "rosa");
    assert.equal("view" in b.prefs.app, false, "imports are checked like the screens");
    assert.deepEqual(b.prefs.calendars, { "calendar.pessoal": { name: "Eu", color: "azul" } });
    const versions = await c.call("cronologia/versions/list");
    const v = versions.find((x) => x.reason === "antes-de-importar");
    assert.ok(v, JSON.stringify(versions));
    assert.equal(v.calendars, 1);
    await c.call("cronologia/versions/restore", { name: v.name });
    const back = await c.call("cronologia/bootstrap");
    assert.equal(back.prefs.app.accent, "verde");
    assert.equal(back.prefs.calendars["calendar.casa"].name, "Nossa casa");
    await assert.rejects(c.call("cronologia/versions/restore", { name: "../../etc/passwd" }), { code: "invalid_format" });
  });
  it("import a .zip backup (also re-packed by macOS)", async () => {
    const backup = Buffer.from(await (await fetch(`${stack.url}/api/export/zip`)).arrayBuffer());
    const json = readZip(backup).find((f) => f.name === "cronologia.json").data.toString();
    const mac = makeZip([
      { name: "__MACOSX/Backup/._cronologia.json", data: "junk" },
      { name: "Backup/cronologia.json", data: json.replace('"verde"', '"lilas"') },
    ]);
    const res = await post("/api/import", mac, { "x-file-name": "Backup.zip" });
    assert.equal(res.status, 200);
    assert.equal((await c.call("cronologia/bootstrap")).prefs.app.accent, "lilas");
  });
  it("refuses what is not a CronologIA backup", async () => {
    for (const body of ["{oops", JSON.stringify({ outro: 1 }), makeZip([{ name: "a.txt", data: "x" }])]) {
      const res = await post("/api/import", body);
      assert.equal(res.status, 400);
      assert.equal((await res.json()).code, "invalid_format");
    }
  });
  it("backups in share/cronologia: create, list, restore", async () => {
    const made = await c.call("cronologia/backups/create");
    assert.match(made.name, /^cronologia-\d{4}-\d{2}-\d{2}-\d{4}\.zip$/);
    assert.equal(made.folder, "share/cronologia");
    assert.ok(fs.existsSync(path.join(stack.dirs.share, "cronologia", made.name)));
    const list = await c.call("cronologia/backups/list");
    assert.equal(list.available, true);
    assert.equal(list.backups[0].name, made.name);
    assert.ok(list.backups[0].size > 1000);
    await c.call("cronologia/prefs/set_app", { prefs: { accent: "ouro" } });
    const counts = await c.call("cronologia/backups/restore", { name: made.name });
    assert.equal(typeof counts.checks, "number");
    assert.equal((await c.call("cronologia/bootstrap")).prefs.app.accent, "lilas");
    await assert.rejects(c.call("cronologia/backups/restore", { name: "cronologia-1999-01-01-0000.zip" }), { code: "not_found" });
    await assert.rejects(c.call("cronologia/backups/restore", { name: "x.zip" }), { code: "invalid_format" });
  });
  it("Começar do zero (1.64.0): the marks and the placar go, the settings stay, a version of before kept", async () => {
    await c.call("cronologia/score/extra", { who: "Davi", points: 7, title: "Lavou o carro" });
    const before = await c.call("cronologia/bootstrap");
    const pushed = [];
    await c.subscribe("cronologia/prefs/subscribe", {}, (p) => pushed.push(p));
    const counts = await c.call("cronologia/data/reset");
    assert.deepEqual([counts.points, counts.checks], [0, 0]);
    await waitFor(() => pushed.length, { what: "the screens get the news" });
    const after = await c.call("cronologia/bootstrap");
    assert.equal(after.prefs.app.accent, before.prefs.app.accent, "the settings stay");
    assert.deepEqual(after.prefs.app.score.participants, ["Davi"], "who plays stays");
    const exported = await (await fetch(`${stack.url}/api/export/json`)).json();
    assert.deepEqual([exported.checks, exported.score.entries], [{}, []]);
    const v = (await c.call("cronologia/versions/list")).find((x) => x.reason === "antes-de-zerar");
    assert.ok(v && v.points >= 1, "the copy of before has the points");
  });
});

describe("Falar", () => {
  const pcm = (s) => Buffer.alloc(Math.round(16000 * 2 * s));
  it("status: the voice assistant's engine (Home Assistant Cloud, pt-BR) and the engines to choose from", async () => {
    const st = await c.call("cronologia/voice/status", { fresh: true });
    assert.equal(st.ready, true);
    assert.equal(st.engine, "stt.home_assistant_cloud");
    assert.equal(st.language, "pt-BR");
    assert.equal(st.chosen, false);
    assert.deepEqual(
      st.options.map((o) => o.id),
      ["stt.home_assistant_cloud", "stt.faster_whisper"],
    );
  });
  it("speech to text with the automatic engine", async () => {
    const res = await post("/api/voice", pcm(1));
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { text: "Dentista quinta às 15 horas", engine: "stt.home_assistant_cloud", name: "Home Assistant Cloud" });
  });
  it("another engine chosen in the app, asked for Portuguese as it names it (pt)", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { voice_engine: "stt.faster_whisper" } });
    const st = await c.call("cronologia/voice/status", { fresh: true });
    assert.deepEqual([st.engine, st.language, st.chosen, st.selected], ["stt.faster_whisper", "pt", true, "stt.faster_whisper"]);
    const res = await post("/api/voice", pcm(0.5));
    assert.equal(res.status, 200, "the fake STT refuses any language but 'pt' for whisper");
    assert.equal((await res.json()).engine, "stt.faster_whisper");
    await c.call("cronologia/prefs/set_app", { prefs: { voice_engine: "stt.removido" } });
    const gone = await c.call("cronologia/voice/status", { fresh: true });
    assert.equal(gone.missing, true);
    assert.equal(gone.engine, "stt.home_assistant_cloud");
    await c.call("cronologia/prefs/set_app", { prefs: { voice_engine: null } });
  });
  it("too short is 422", async () => {
    const short = await post("/api/voice", pcm(0.2));
    assert.equal(short.status, 422);
    assert.equal((await short.json()).code, "invalid_format");
  });
  it("too long is 413 with the message", async () => {
    const long = await post("/api/voice", pcm(130));
    assert.equal(long.status, 413);
    assert.equal((await long.json()).code, "too_big");
  });
});

describe("Contas do GerencIA (a fake GerencIA in the test process)", () => {
  let server;
  const calls = [];
  let status = 200;
  before(async () => {
    const http = await import("node:http");
    server = http.createServer((req, res) => {
      const chunks = [];
      req.on("data", (x) => chunks.push(x));
      req.on("end", () => {
        calls.push({ method: req.method, url: req.url, auth: req.headers.authorization, app: req.headers["x-app"], body: chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : null });
        res.writeHead(status, { "content-type": "application/json" });
        if (status !== 200) return res.end(JSON.stringify({ erro: "Chave recusada" }));
        if (req.url.startsWith("/api/integracao/contas")) return res.end(JSON.stringify({ versao: "4.2.0", contas: [{ id: "c1", descricao: "Aluguel", valor: 2500, vencimento: "2026-11-10", paga: false }], categorias: ["Moradia"] }));
        res.end(JSON.stringify({ ok: true }));
      });
    });
    await new Promise((r) => server.listen(0, "127.0.0.1", r));
    fs.mkdirSync(path.join(stack.dirs.share, "gerencia"), { recursive: true });
    fs.writeFileSync(path.join(stack.dirs.share, "gerencia", "integracao.json"), JSON.stringify({ url: `http://127.0.0.1:${server.address().port}`, chave: "segredo" }));
  });
  after(() => server && server.close());

  it("the bills come into the Agora index", async () => {
    const h = await stack.home(c);
    const ix = await h.wait((x) => x.gerencia && x.gerencia.ligado && x.gerencia.contas.length === 1, "the GerencIA bills");
    assert.equal(ix.gerencia.versao, "4.2.0");
    assert.equal(ix.gerencia.contas[0].descricao, "Aluguel");
    const read = calls.find((x) => x.url.startsWith("/api/integracao/contas"));
    assert.equal(read.auth, "Bearer segredo");
    assert.equal(read.app, "CronologIA");
  });
  it("pagar, desfazer and nova go to the GerencIA (only valid fields)", async () => {
    calls.length = 0;
    assert.deepEqual(await c.call("cronologia/contas/pagar", { conta: "c1", valor: "2500.5" }), { ok: true });
    await c.call("cronologia/contas/desfazer", { conta: "c1", valor: -1 });
    await c.call("cronologia/contas/nova", { conta: { descricao: "IPTU", valor: 300, vencimento: "2026-12-01", repete: "semanal", categoria: "Moradia", extra: 1 } });
    const posts = calls.filter((x) => x.method === "POST");
    assert.deepEqual(
      posts.map((x) => [x.url, x.body]),
      [
        ["/api/integracao/pagar", { id: "c1", valor: 2500.5 }],
        ["/api/integracao/desfazer", { id: "c1" }],
        ["/api/integracao/nova", { descricao: "IPTU", valor: 300, vencimento: "2026-12-01", repete: "nao", categoria: "Moradia" }],
      ],
    );
    await assert.rejects(c.call("cronologia/contas/pagar", { conta: "" }), { code: "invalid_format" });
  });
  it("a refused key says the integration is off; turned off here, nothing is called", async () => {
    status = 401;
    await assert.rejects(c.call("cronologia/contas/pagar", { conta: "c1" }), { code: "gerencia_off", message: "Chave recusada" });
    status = 200;
    await c.call("cronologia/prefs/set_app", { prefs: { gerencia_on: false } });
    calls.length = 0;
    await assert.rejects(c.call("cronologia/contas/pagar", { conta: "c1" }), { code: "gerencia_off" });
    assert.equal(calls.length, 0);
  });
});

describe("Ler com IA", () => {
  it("a message: the events found, and the call counted in Uso da IA", async () => {
    const res = await post("/api/extract", JSON.stringify({ text: "Reunião com o João na quinta às 15h" }));
    assert.equal(res.status, 200);
    const out = await res.json();
    assert.equal(out.provider, "Google AI Task");
    assert.deepEqual(
      out.events.map((e) => [e.title, e.start]),
      [
        ["Reunião com o João na quinta às 15h", "15:00"],
        ["Levar documentos", ""],
      ],
    );
    const u = await c.call("cronologia/ai/usage");
    assert.equal(u.hoje.chamadas, 1);
    assert.equal(u.hoje.tipos.mensagem, 1);
  });
  it("photos go through the media folder and come back as events", async () => {
    const img = Buffer.from("not really a jpeg").toString("base64");
    const res = await post("/api/extract", JSON.stringify({ images: [{ data: img, mime: "image/jpeg" }] }));
    assert.equal(res.status, 200);
    const out = await res.json();
    assert.equal(out.events[0].title, "Oftalmologista");
    await waitFor(() => fs.readdirSync(path.join(stack.dirs.media, "cronologia", "ia-temp")).length === 0, { what: "the photo removed" });
  });
  it("an AI that can't read photos, and the AI turned off, are 409", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { ai_entity: "ai_task.ollama_ai_task" } });
    const img = Buffer.from("x").toString("base64");
    const res = await post("/api/extract", JSON.stringify({ images: [{ data: img }] }));
    assert.equal(res.status, 409);
    assert.equal((await res.json()).code, "no_vision");
    await c.call("cronologia/prefs/set_app", { prefs: { ai_off: true } });
    const off = await post("/api/extract", JSON.stringify({ text: "x" }));
    assert.equal(off.status, 409);
    assert.equal((await off.json()).code, "ai_off");
    const bad = await post("/api/extract", "{not json");
    assert.equal(bad.status, 400);
  });
});
