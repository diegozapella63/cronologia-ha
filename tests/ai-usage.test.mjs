// ai.js (reading events with the AI of Home Assistant) and usage.js (Uso da IA).
import { at, makeLog, tmpDir } from "./helpers.mjs";
import { describe, it, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { instructions, extractJson, cleanEvents, AI } from "../cronologia/rootfs/app/lib/ai.js";
import { resultOf, AiUsage } from "../cronologia/rootfs/app/lib/usage.js";

const dirs = [];
afterEach(() => {
  mock.timers.reset();
  mock.restoreAll();
  while (dirs.length) fs.rmSync(dirs.pop(), { recursive: true, force: true });
});
const newDir = () => {
  const d = tmpDir("cronologia-ai-");
  dirs.push(d);
  return d;
};

describe("ai: instructions", () => {
  it("says today's date, weekday, time and zone, and the message", () => {
    const p = instructions({ text: "Dentista quinta 15h", now: at(2026, 11, 2, 9, 5), tz: "America/Sao_Paulo" });
    assert.match(p, /Hoje é segunda-feira, 02\/11\/2026, 09:05 \(fuso America\/Sao_Paulo\)/);
    assert.match(p, /Leia a mensagem abaixo/);
    assert.match(p, /Mensagem:\n"""\nDentista quinta 15h\n"""/);
    assert.match(p, /\{"events":\[/);
  });
  it("photos instead of a message; no zone", () => {
    assert.match(instructions({ images: 1, now: at(2026, 11, 7) }), /Leia esta foto/);
    const p = instructions({ images: 3, now: at(2026, 11, 7) });
    assert.match(p, /Leia estas fotos/);
    assert.match(p, /Hoje é sábado, 07\/11\/2026, 00:00\. /);
    assert.doesNotMatch(p, /Mensagem:/);
  });
  it("a long message is cut at 20000 characters", () => {
    const p = instructions({ text: "x".repeat(30000), now: at(2026, 11, 2) });
    assert.equal(p.match(/x+/g).sort((a, b) => b.length - a.length)[0].length, 20000);
  });
});

describe("ai: extractJson", () => {
  it("objects pass through; plain and fenced JSON", () => {
    const o = { events: [] };
    assert.equal(extractJson(o), o);
    assert.deepEqual(extractJson('{"events":[1]}'), { events: [1] });
    assert.deepEqual(extractJson('```json\n{"events":[2]}\n```'), { events: [2] });
    assert.deepEqual(extractJson("```\n[1,2]\n```"), [1, 2]);
  });
  it("finds the JSON inside text around it (the outermost one)", () => {
    assert.deepEqual(extractJson('Claro! Aqui está: {"events":[{"title":"A"}]} Espero ter ajudado.'), { events: [{ title: "A" }] });
    assert.deepEqual(extractJson('Lista: [{"title":"A"},{"title":"B"}] fim'), [{ title: "A" }, { title: "B" }]);
    assert.deepEqual(extractJson('Objeto {"a":[1,2]} depois'), { a: [1, 2] });
  });
  it("when the first kind of brackets is broken, the other one is tried", () => {
    assert.deepEqual(extractJson('Veja [nota] e o resultado: {"events":[]}'), { events: [] }, "[nota] is not JSON");
    assert.deepEqual(extractJson('Resposta {quase json} e depois [1, 2]'), [1, 2], "{quase json} is not JSON");
  });
  it("null when there is nothing to read", () => {
    assert.equal(extractJson("sem json"), null);
    assert.equal(extractJson("{quebrado"), null);
    assert.equal(extractJson(42), null);
    assert.equal(extractJson(null), null);
  });
});

describe("ai: cleanEvents", () => {
  it("keeps valid events with normalized fields", () => {
    const out = cleanEvents({
      events: [{ title: "  Dentista ", date: "2026-11-05", start: "9h30", end: "10:00", end_date: "", location: " Clínica ", notes: "Levar exame", repeat: "weekly" }],
    });
    assert.deepEqual(out, [{ title: "Dentista", date: "2026-11-05", start: "09:30", end: "10:00", end_date: "", location: "Clínica", notes: "Levar exame", repeat: "weekly" }]);
  });
  it("accepts the other names models use (summary, start_date, start_time, description) and a plain array", () => {
    const out = cleanEvents(JSON.stringify([{ summary: "Reunião", start_date: "2026-11-06", start_time: "14:00", end_time: "15:30", description: "Pauta" }]));
    assert.deepEqual(out, [{ title: "Reunião", date: "2026-11-06", start: "14:00", end: "15:30", end_date: "", location: "", notes: "Pauta", repeat: "" }]);
  });
  it("drops events without a title or a real date; bad times and repeats become empty", () => {
    const out = cleanEvents({
      events: [
        { title: "", date: "2026-11-05" },
        { title: "Sem data" },
        { title: "Dia inválido", date: "2026-02-30" },
        { title: "Formato BR", date: "05/11/2026" },
        { title: "Hora ruim", date: "2026-11-05", start: "25:00", end: "10:61", repeat: "hourly" },
        "texto",
        null,
      ],
    });
    assert.deepEqual(out, [{ title: "Hora ruim", date: "2026-11-05", start: "", end: "", end_date: "", location: "", notes: "", repeat: "" }]);
  });
  it("end_date only when after the start date", () => {
    const [a, b] = cleanEvents({
      events: [
        { title: "Viagem", date: "2026-12-20", end_date: "2026-12-27" },
        { title: "Mesmo dia", date: "2026-12-20", end_date: "2026-12-20" },
      ],
    });
    assert.equal(a.end_date, "2026-12-27");
    assert.equal(b.end_date, "");
  });
  it("at most 50 events; long texts are cut", () => {
    const many = Array.from({ length: 70 }, (_, i) => ({ title: `E${i}`, date: "2026-11-05", notes: "n".repeat(3000), location: "l".repeat(400) }));
    const out = cleanEvents({ events: many });
    assert.equal(out.length, 50);
    assert.equal(out[0].notes.length, 2000);
    assert.equal(out[0].location.length, 300);
  });
  it("garbage gives no events", () => {
    assert.deepEqual(cleanEvents("nada"), []);
    assert.deepEqual(cleanEvents({ eventos: [] }), []);
  });
});

describe("ai: AI (with a fake Home Assistant)", () => {
  const ENTS = [
    { entity_id: "ai_task.ollama", state: "unknown", attributes: { friendly_name: "Ollama", supported_features: 1 } },
    { entity_id: "ai_task.google", state: "unknown", attributes: { friendly_name: "Google AI", supported_features: 3 } },
    { entity_id: "ai_task.down", state: "unavailable", attributes: { friendly_name: "Desligada", supported_features: 3 } },
    { entity_id: "ai_task.attach_only", state: "unknown", attributes: { friendly_name: "Só anexos", supported_features: 2 } },
    { entity_id: "light.sala", state: "on", attributes: {} },
  ];
  const fakeHA = ({ states = ENTS, preferred = null, answer = null, ready = true } = {}) => {
    const ha = { ready, calls: [] };
    ha.send = async (msg) => {
      ha.calls.push(msg);
      if (msg.type === "get_states") return states;
      if (msg.type === "ai_task/preferences/get") {
        if (preferred instanceof Error) throw preferred;
        return { gen_data_entity_id: preferred };
      }
      if (msg.type === "call_service") {
        if (answer instanceof Error) throw answer;
        // the photos must be in /media while the AI reads them
        for (const a of msg.service_data.attachments || []) ha.seenFiles = (ha.seenFiles || []).concat(a.media_content_id);
        return { response: { data: answer } };
      }
      throw new Error("unexpected");
    };
    return ha;
  };
  const errCode = async (p) => (await p.catch((e) => e)).code;

  it("entities: only the ones that generate data, the ones that read photos first", async () => {
    const ai = new AI({ ha: fakeHA(), log: makeLog(), mediaDir: newDir() });
    assert.deepEqual(
      (await ai.entities()).map((e) => [e.id, e.images, e.available]),
      [
        ["ai_task.down", true, false],
        ["ai_task.google", true, true],
        ["ai_task.ollama", false, true],
      ],
    );
  });
  it("resolve: Home Assistant's preferred AI, else the first available that can do the job", async () => {
    const pref = new AI({ ha: fakeHA({ preferred: "ai_task.ollama" }), log: makeLog(), mediaDir: newDir() });
    assert.equal((await pref.resolve(false)).id, "ai_task.ollama");
    assert.equal((await pref.resolve(true)).id, "ai_task.google", "the preferred one can't read photos");
    const old = new AI({ ha: fakeHA({ preferred: new Error("unknown command") }), log: makeLog(), mediaDir: newDir() });
    assert.equal((await old.resolve(false)).id, "ai_task.google");
  });
  it("resolve: the AI chosen in the app, with clear errors", async () => {
    const mk = (sel, states) => new AI({ ha: fakeHA({ states }), log: makeLog(), mediaDir: newDir(), selected: () => sel });
    assert.equal((await mk("ai_task.ollama").resolve(false)).id, "ai_task.ollama");
    assert.equal(await errCode(mk("ai_task.ollama").resolve(true)), "no_vision");
    assert.equal(await errCode(mk("ai_task.down").resolve(false)), "unavailable");
    assert.equal(await errCode(mk("ai_task.removida").resolve(false)), "gone");
    assert.equal(await errCode(mk("", []).resolve(false)), "no_ai");
    assert.equal(await errCode(mk("", [ENTS[0]]).resolve(true)), "no_vision");
    assert.equal(await errCode(mk("", [ENTS[2]]).resolve(false)), "unavailable");
  });
  it("status: ready, which AI reads messages and which reads photos", async () => {
    const st = await new AI({ ha: fakeHA({ preferred: "ai_task.ollama" }), log: makeLog(), mediaDir: newDir() }).status();
    assert.equal(st.ready, true);
    assert.equal(st.images, true);
    assert.deepEqual(st.using, { id: "ai_task.ollama", name: "Ollama" });
    assert.deepEqual(st.photos, { id: "ai_task.google", name: "Google AI" });
    assert.equal(st.reason, null);
    assert.equal(st.entities.length, 3);
    const off = await new AI({ ha: fakeHA({ ready: false }), log: makeLog(), mediaDir: newDir() }).status();
    assert.equal(off.ready, false);
    assert.match(off.reason, /Sem conexão/);
    const text = await new AI({ ha: fakeHA({ states: [ENTS[0]] }), log: makeLog(), mediaDir: newDir() }).status();
    assert.equal(text.ready, true);
    assert.equal(text.images, false);
    assert.match(text.reason, /lê fotos/);
  });
  it("status: Home Assistant can't be asked for the AIs (says why)", async () => {
    const ha = fakeHA();
    const send = ha.send;
    ha.send = async (msg) => {
      if (msg.type === "get_states") throw new Error("timeout");
      return send(msg);
    };
    const st = await new AI({ ha, log: makeLog(), mediaDir: newDir() }).status();
    assert.equal(st.ready, false);
    assert.deepEqual(st.entities, []);
    assert.equal(st.reason, "Não deu para consultar o Home Assistant: timeout");
  });
  it("status: a media folder that can't be written turns the photos off", async () => {
    const base = newDir();
    fs.writeFileSync(path.join(base, "media"), "a file, not a folder");
    const st = await new AI({ ha: fakeHA(), log: makeLog(), mediaDir: path.join(base, "media") }).status();
    assert.equal(st.ready, true);
    assert.equal(st.images, false);
    assert.match(st.reason, /pasta media/);
  });
  it("extract a message: calls ai_task.generate_data and counts the call", async () => {
    const records = [];
    const ha = fakeHA({ answer: '```json\n{"events":[{"title":"Dentista","date":"2026-11-05","start":"15:00"}]}\n```' });
    const ai = new AI({ ha, log: makeLog(), mediaDir: newDir(), usage: { record: (r) => records.push(r) } });
    const out = await ai.extract({ text: "  Dentista quinta 15h " });
    assert.equal(out.provider, "Google AI");
    assert.equal(out.entity, "ai_task.google");
    assert.equal(out.events[0].title, "Dentista");
    const call = ha.calls.find((c) => c.type === "call_service");
    assert.equal(call.domain, "ai_task");
    assert.equal(call.service, "generate_data");
    assert.equal(call.return_response, true);
    assert.equal(call.service_data.entity_id, "ai_task.google");
    assert.match(call.service_data.instructions, /"""\nDentista quinta 15h\n"""/);
    assert.equal("attachments" in call.service_data, false);
    assert.equal(records.length, 1);
    assert.equal(records[0].kind, "mensagem");
    assert.equal(records[0].result, "ok");
    assert.ok(records[0].output > 0);
  });
  it("extract: an answer that can't be measured counts 0 characters out (the call is still counted)", async () => {
    const records = [];
    const answer = { events: [] };
    answer.self = answer; // circular: JSON.stringify throws
    const ai = new AI({ ha: fakeHA({ answer }), log: makeLog(), mediaDir: newDir(), usage: { record: (r) => records.push(r) } });
    const out = await ai.extract({ text: "nada" });
    assert.deepEqual(out.events, []);
    assert.equal(records.length, 1);
    assert.equal(records[0].output, 0);
    assert.equal(records[0].result, "ok");
  });
  it("extract photos: written to media while read, then removed", async () => {
    const media = newDir();
    const ha = fakeHA({ answer: { events: [{ title: "Oftalmo", date: "2026-11-10" }] } });
    const ai = new AI({ ha, log: makeLog(), mediaDir: media });
    const img = Buffer.from("fake image bytes").toString("base64");
    const out = await ai.extract({ images: [{ data: img, mime: "image/png" }, { data: img }] });
    assert.equal(out.events[0].title, "Oftalmo");
    assert.equal(ha.seenFiles.length, 2);
    assert.match(ha.seenFiles[0], /^media-source:\/\/media_source\/local\/cronologia\/ia-temp\/foto-[0-9a-f]{12}\.png$/);
    assert.match(ha.seenFiles[1], /\.jpg$/);
    // removed with an async fs.rm: wait for it (up to 3 s)
    const tmp = path.join(media, "cronologia", "ia-temp");
    for (let i = 0; i < 300 && fs.readdirSync(tmp).length; i++) await new Promise((r) => setTimeout(r, 10));
    assert.deepEqual(fs.readdirSync(tmp), []);
  });
  it("extract: nothing to read, no connection, an AI failure (counted as cota)", async () => {
    const ai = new AI({ ha: fakeHA(), log: makeLog(), mediaDir: newDir() });
    assert.deepEqual(await ai.extract({ text: "   " }), { events: [], provider: null });
    const off = new AI({ ha: fakeHA({ ready: false }), log: makeLog(), mediaDir: newDir() });
    assert.equal(await errCode(off.extract({ text: "x" })), "no_ai");
    const records = [];
    const failing = new AI({ ha: fakeHA({ answer: Object.assign(new Error("429 Too Many Requests"), { code: "home_assistant_error" }) }), log: makeLog(), mediaDir: newDir(), usage: { record: (r) => records.push(r) } });
    await assert.rejects(failing.extract({ text: "x" }), /429/);
    assert.equal(records[0].result, "cota");
    assert.equal(records[0].output, 0);
  });
});

describe("usage: resultOf", () => {
  it("classifies failures", () => {
    assert.equal(resultOf(null), "ok");
    assert.equal(resultOf(new Error("429 Too Many Requests")), "cota");
    assert.equal(resultOf(new Error("Quota exceeded")), "cota");
    assert.equal(resultOf({ code: "RESOURCE_EXHAUSTED" }), "cota");
    assert.equal(resultOf(new Error("rate limit reached")), "cota");
    assert.equal(resultOf(new Error("Unexpected token < in JSON")), "formato");
    assert.equal(resultOf(new Error("timeout")), "erro");
  });
});

describe("usage: AiUsage", () => {
  const make = (enabled = false) => new AiUsage({ dir: newDir(), sensor: "sensor.cronologia_ia_hoje", label: "CronologIA", rest: "", token: "", log: makeLog(), enabled: () => enabled });
  it("record + summary: today, the week, the month, the last calls", () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 10, 30, 10).getTime() });
    const u = make();
    u.record({ kind: "mensagem", entity: "ai_task.google", input: 4000, output: 400, seconds: 2.34 });
    mock.timers.setTime(at(2026, 11, 1, 10).getTime());
    u.record({ kind: "fotos", entity: "ai_task.google", input: 400, output: 0, images: 2, seconds: 5, result: "erro" });
    mock.timers.setTime(at(2026, 11, 2, 10).getTime());
    u.record({ kind: "mensagem", entity: "", input: 40, output: 0, result: "cota" });
    u.record({ kind: "mensagem", input: 4, output: 4 });
    const s = u.summary(at(2026, 11, 2, 15));
    assert.deepEqual(
      { chamadas: s.hoje.chamadas, erros: s.hoje.erros, cota: s.hoje.cota, tokens: s.hoje.tokens },
      { chamadas: 2, erros: 0, cota: 1, tokens: 12 },
    );
    assert.deepEqual(s.hoje.ias, { "padrão do Home Assistant": 2 });
    assert.equal(s.semana.chamadas, 4);
    assert.equal(s.semana.tokens, 1100 + 100 + 12);
    assert.equal(s.semana.imagens, 2);
    assert.equal(s.semana.segundos, 7.3);
    assert.deepEqual(s.semana.tipos, { mensagem: 3, fotos: 1 });
    assert.equal(s.mes.chamadas, 3, "November only");
    assert.deepEqual(
      s.dias.map((d) => [d.dia, d.chamadas]),
      [
        ["2026-10-27", 0],
        ["2026-10-28", 0],
        ["2026-10-29", 0],
        ["2026-10-30", 1],
        ["2026-10-31", 0],
        ["2026-11-01", 1],
        ["2026-11-02", 2],
      ],
    );
    assert.equal(s.ultimas.length, 4);
    assert.equal(s.ultimas[0].tipo, "mensagem", "newest first");
    assert.equal(s.ultimas[1].resultado, "cota");
    assert.equal(s.desde, "2026-10-30");
    assert.equal(s.sensor, "sensor.cronologia_ia_hoje");
    assert.equal(s.sensor_on, false);
  });
  it("keeps 120 days and the last 40 calls", () => {
    const u = make();
    const dias = {};
    for (let i = 0; i < 130; i++) dias[new Date(2026, 0, 1 + i).toISOString().slice(0, 10)] = { chamadas: 1 };
    fs.writeFileSync(u.file, JSON.stringify({ dias, ultimas: Array.from({ length: 45 }, () => ({})) }));
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2).getTime() });
    u.record({ kind: "x" });
    const saved = JSON.parse(fs.readFileSync(u.file, "utf8"));
    assert.equal(Object.keys(saved.dias).length, 120);
    assert.ok("2026-11-02" in saved.dias);
    assert.equal(saved.ultimas.length, 40);
  });
  it("a broken file reads as empty", () => {
    const u = make();
    fs.writeFileSync(u.file, "{oops");
    assert.equal(u.summary(at(2026, 11, 2)).hoje.chamadas, 0);
  });
  it("publish/remove do nothing without a token, or with the sensors off", async () => {
    const f = mock.method(globalThis, "fetch", async () => ({ ok: true }));
    await make(true).publish();
    await make(true).remove();
    const off = new AiUsage({ dir: newDir(), sensor: "sensor.x", label: "X", rest: "http://ha/api", token: "t", log: makeLog(), enabled: () => false });
    await off.publish();
    assert.equal(f.mock.callCount(), 0);
  });
  it("publish posts today's calls as the sensor state; remove deletes it", async () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2, 10).getTime() });
    const f = mock.method(globalThis, "fetch", async () => ({ ok: true, status: 200 }));
    const u = new AiUsage({ dir: newDir(), sensor: "sensor.cronologia_ia_hoje", label: "CronologIA", rest: "http://ha/api", token: "t", log: makeLog(), enabled: () => true });
    u.record({ kind: "mensagem", entity: "ai_task.google", input: 40, output: 40 });
    await new Promise((r) => setImmediate(r));
    const [url, opts] = f.mock.calls[0].arguments;
    assert.equal(url, "http://ha/api/states/sensor.cronologia_ia_hoje");
    assert.equal(opts.method, "POST");
    const body = JSON.parse(opts.body);
    assert.equal(body.state, 1);
    assert.equal(body.attributes.tokens_texto_estimados, 20);
    assert.equal(body.attributes.friendly_name, "CronologIA: chamadas de IA hoje");
    await u.remove();
    assert.equal(f.mock.calls[1].arguments[1].method, "DELETE");
  });
  it("a call that can't be written down only warns (the app goes on)", () => {
    const base = newDir();
    fs.writeFileSync(path.join(base, "arquivo"), "x");
    const log = makeLog();
    const u = new AiUsage({ dir: path.join(base, "arquivo", "dentro"), sensor: "sensor.x", label: "X", rest: "", token: "", log, enabled: () => false });
    assert.doesNotThrow(() => u.record({ kind: "mensagem", input: 4, output: 4 }));
    assert.equal(log.lines[0][0], "warn");
    assert.match(log.lines[0][1], /^Uso da IA: /);
  });
  it("remove with Home Assistant offline does not fail", async () => {
    const f = mock.method(globalThis, "fetch", async () => {
      throw new Error("ECONNREFUSED");
    });
    const u = new AiUsage({ dir: newDir(), sensor: "sensor.x", label: "X", rest: "http://ha/api", token: "t", log: makeLog(), enabled: () => true });
    await u.remove();
    assert.equal(f.mock.callCount(), 1);
    assert.equal(f.mock.calls[0].arguments[1].method, "DELETE");
  });
  it("a sensor failure is logged once per day", async () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2, 10).getTime() });
    mock.method(globalThis, "fetch", async () => ({ ok: false, status: 500 }));
    const u = new AiUsage({ dir: newDir(), sensor: "sensor.x", label: "X", rest: "http://ha/api", token: "t", log: makeLog(), enabled: () => true });
    await u.publish();
    await u.publish();
    assert.equal(u.log.lines.length, 1);
    assert.match(u.log.lines[0][1], /HTTP 500/);
  });
});
