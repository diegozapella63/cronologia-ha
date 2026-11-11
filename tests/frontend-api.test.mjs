// frontend/src/api.js: the app's connection (/ws) with reconnection, queued messages and subscriptions,
// every call the screens make, and the fetch calls (Importar, Falar, IA).
import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";

class FakeWS {
  static all = [];
  constructor(url) {
    this.url = url;
    this.sent = [];
    FakeWS.all.push(this);
  }
  send(t) {
    this.sent.push(JSON.parse(t));
  }
  open() {
    this.onopen();
  }
  reply(o) {
    this.onmessage({ data: typeof o === "string" ? o : JSON.stringify(o) });
  }
  ok(id, result) {
    this.reply({ type: "result", id, success: true, result });
  }
  drop() {
    this.onclose();
  }
  last(type) {
    return [...this.sent].reverse().find((m) => m.type === type);
  }
}
globalThis.window = globalThis;
globalThis.location = { href: "https://casa.example/api/hassio_ingress/xyz/", protocol: "https:" };
globalThis.WebSocket = FakeWS;
const { Api, appEnv, parentHass, detectDark } = await import("../frontend/src/api.js");

const strip = ({ id, ...m }) => m;
function up() {
  const api = new Api();
  const ws = FakeWS.all.at(-1);
  const status = [];
  api.onStatus((s) => status.push(s));
  ws.open();
  return { api, ws, status };
}

beforeEach(() => {
  FakeWS.all = [];
  window.parent = window;
  mock.timers.enable({ apis: ["setTimeout"] });
});
afterEach(() => {
  mock.timers.reset();
  delete globalThis.fetch;
});

describe("api: connection", () => {
  it("opens wss next to the page (ws on http)", () => {
    assert.equal(up().ws.url, "wss://casa.example/api/hassio_ingress/xyz/ws");
    location.protocol = "http:";
    new Api();
    location.protocol = "https:";
    assert.match(FakeWS.all.at(-1).url, /^ws:\/\//);
  });
  it("results resolve; errors reject with the message, the code and the page", async () => {
    const { api, ws } = up();
    const a = api.bootstrap();
    ws.ok(ws.last("cronologia/bootstrap").id, { version: "1.37.2" });
    assert.deepEqual(await a, { version: "1.37.2" });
    const b = api.call("x");
    ws.reply({ type: "result", id: ws.last("x").id, success: false, error: { code: "ai_quota", message: "Sem cota", page: "https://exemplo.com" } });
    await assert.rejects(b, (e) => e.message === "Sem cota" && e.code === "ai_quota" && e.page === "https://exemplo.com");
    const c = api.call("y");
    ws.reply({ type: "result", id: ws.last("y").id, success: false });
    await assert.rejects(c, /Falhou/);
    ws.reply("{ruim");
    ws.reply({ type: "result", id: 999, success: true });
  });
  it("messages sent before opening wait, then go in order", () => {
    const api = new Api();
    const ws = FakeWS.all.at(-1);
    api.registry();
    api.aiStatus();
    assert.equal(ws.sent.length, 0);
    ws.open();
    assert.deepEqual(ws.sent.map((m) => m.type), ["cronologia/registry", "cronologia/ai/status"]);
  });
  it("a drop rejects what waits, says offline and retries (1 s, 2 s, 4 s… 15 s); back online resubscribes and tells the screens", async () => {
    const { api, ws, status } = up();
    const again = [];
    api.onReconnect(() => again.push(1));
    const got = [];
    const subP = api.subscribeHome((ev) => got.push(ev));
    ws.ok(ws.last("cronologia/home/subscribe").id, null);
    await subP;
    const waiting = api.call("lento");
    ws.drop();
    await assert.rejects(waiting, (e) => e.code === "disconnected" && e.message === "Sem conexão com o CronologIA");
    assert.deepEqual(status, [true, false]);
    mock.timers.tick(1000);
    const ws2 = FakeWS.all.at(-1);
    assert.notEqual(ws2, ws);
    ws2.drop();
    mock.timers.tick(1999);
    assert.equal(FakeWS.all.length, 2);
    mock.timers.tick(1);
    const ws3 = FakeWS.all.at(-1);
    api.call("na-fila");
    ws3.open();
    assert.deepEqual(ws3.sent.map((m) => m.type), ["cronologia/home/subscribe", "na-fila"]);
    assert.deepEqual([status.at(-1), again.length], [true, 1]);
    ws3.reply({ type: "event", id: ws3.last("cronologia/home/subscribe").id, event: { hoje: 1 } });
    assert.deepEqual(got, [{ hoje: 1 }]);
  });
  it("the wait between tries stops growing at 15 s", () => {
    up().ws.drop();
    const waits = [];
    for (let k = 0; k < 6; k++) {
      const n = FakeWS.all.length;
      let t = 0;
      while (FakeWS.all.length === n) {
        mock.timers.tick(500);
        t += 500;
      }
      waits.push(t);
      FakeWS.all.at(-1).drop();
    }
    assert.deepEqual(waits, [1000, 2000, 4000, 8000, 15000, 15000]);
  });
  it("subscriptions: events while subscribed, unsubscribe tells the server, a refused one rejects", async () => {
    const { api, ws } = up();
    const got = [];
    const p = api.subscribeEvents("calendar.casa", "2026-11-01", "2026-11-30", (e) => got.push(e));
    const m = ws.last("calendar/event/subscribe");
    assert.deepEqual(strip(m), { type: "calendar/event/subscribe", entity_id: "calendar.casa", start: "2026-11-01", end: "2026-11-30" });
    ws.ok(m.id, null);
    const unsub = await p;
    ws.reply({ type: "event", id: m.id, event: { events: [1] } });
    await unsub();
    ws.reply({ type: "event", id: m.id, event: { events: [2] } });
    assert.deepEqual(got, [{ events: [1] }]);
    assert.equal(ws.last("unsubscribe_events").subscription, m.id);
    const bad = api.subscribePrefs(() => {});
    ws.reply({ type: "result", id: ws.last("cronologia/prefs/subscribe").id, success: false, error: { message: "Não" } });
    await assert.rejects(bad, /Não/);
    api.subscribeCalendars(() => {});
    assert.ok(ws.last("cronologia/subscribe_calendars"));
  });
});

describe("api: what each call sends", () => {
  it("events, prefs, checks, maintenance, score, bills, data, todos, voice", () => {
    const { api, ws } = up();
    api.listEvents("calendar.a", "s", "e");
    api.createEvent("calendar.a", { summary: "X" });
    api.updateEvent("calendar.a", "u1", { summary: "Y" });
    api.updateEvent("calendar.a", "u1", { summary: "Y" }, { recurrenceId: "r1", range: "THISANDFUTURE" });
    api.deleteEvent("calendar.a", "u1");
    api.deleteEvent("calendar.a", "u1", { recurrenceId: "r1", range: "THISANDFUTURE" });
    api.setCalendarPrefs("calendar.a", { cor: "azul" });
    api.setAppPrefs({ tema: "dark" });
    api.skipCheck("k1");
    api.setCheck("k1", true, "remedio");
    api.setCheck("k1", false, "rotina", "Ana");
    api.maintDone("calendar.a", "u2");
    api.maintDone("calendar.a", "u2", "Beto");
    api.maintUndo("calendar.a", "u2");
    api.maintSkip("calendar.a", "u2");
    api.scoreReassign("k", "Ana");
    api.scoreExtra("Ana", 10, "Ajudou");
    api.scoreDemerit("d1", "Beto");
    api.scoreRemove("k");
    api.scoreLog(100, 20);
    api.scoreLog(100, 20, "2026-11-01", "2026-11-30");
    api.scoreRestore("k");
    api.scorePrizes("semana", true, { Ana: "Sorvete" });
    api.scoreReward("semana", "Cinema");
    api.scoreDelivered("semana", true);
    api.payBill("c1");
    api.payBill("c1", 99.9);
    api.unpayBill("c1");
    api.newBill({ descricao: "Luz" });
    api.versions();
    api.restoreVersion("v1");
    api.backups();
    api.createBackup();
    api.restoreBackup("b.zip");
    api.addTodo("todo.casa", { summary: "Varrer" });
    api.aiUsage();
    api.bringPreview("todo.casa");
    api.bring("todo.casa", "calendar.a", ["u1"]);
    api.bring("todo.casa", "calendar.a", ["u1"], false);
    api.setTodo("todo.casa", "u1", true);
    api.testAlert("Aurora");
    api.testScoreReminder();
    api.voiceStatus();
    api.voiceStatus(true);
    assert.deepEqual(ws.sent.map(strip), [
      { type: "cronologia/events/list", entity_id: "calendar.a", start: "s", end: "e" },
      { type: "calendar/event/create", entity_id: "calendar.a", event: { summary: "X" } },
      { type: "calendar/event/update", entity_id: "calendar.a", uid: "u1", event: { summary: "Y" } },
      { type: "calendar/event/update", entity_id: "calendar.a", uid: "u1", event: { summary: "Y" }, recurrence_id: "r1", recurrence_range: "THISANDFUTURE" },
      { type: "calendar/event/delete", entity_id: "calendar.a", uid: "u1" },
      { type: "calendar/event/delete", entity_id: "calendar.a", uid: "u1", recurrence_id: "r1", recurrence_range: "THISANDFUTURE" },
      { type: "cronologia/prefs/set_calendar", entity_id: "calendar.a", prefs: { cor: "azul" } },
      { type: "cronologia/prefs/set_app", prefs: { tema: "dark" } },
      { type: "cronologia/check/set", key: "k1", done: true, kind: "rotina", skip: true },
      { type: "cronologia/check/set", key: "k1", done: true, kind: "remedio" },
      { type: "cronologia/check/set", key: "k1", done: false, kind: "rotina", who: "Ana" },
      { type: "cronologia/maint/done", entity_id: "calendar.a", uid: "u2" },
      { type: "cronologia/maint/done", entity_id: "calendar.a", uid: "u2", who: "Beto" },
      { type: "cronologia/maint/undo", entity_id: "calendar.a", uid: "u2" },
      { type: "cronologia/maint/skip", entity_id: "calendar.a", uid: "u2" },
      { type: "cronologia/score/reassign", key: "k", who: "Ana" },
      { type: "cronologia/score/extra", who: "Ana", points: 10, title: "Ajudou" },
      { type: "cronologia/score/demerit", demerit: "d1", who: "Beto" },
      { type: "cronologia/score/remove", key: "k" },
      { type: "cronologia/score/log", before: 100, limit: 20 },
      { type: "cronologia/score/log", before: 100, limit: 20, from: "2026-11-01", to: "2026-11-30" },
      { type: "cronologia/score/restore", key: "k" },
      { type: "cronologia/score/prizes", period: "semana", shared: true, per: { Ana: "Sorvete" } },
      { type: "cronologia/score/reward", period: "semana", text: "Cinema" },
      { type: "cronologia/score/delivered", period: "semana", delivered: true },
      { type: "cronologia/contas/pagar", conta: "c1" },
      { type: "cronologia/contas/pagar", conta: "c1", valor: 99.9 },
      { type: "cronologia/contas/desfazer", conta: "c1" },
      { type: "cronologia/contas/nova", conta: { descricao: "Luz" } },
      { type: "cronologia/versions/list" },
      { type: "cronologia/versions/restore", name: "v1" },
      { type: "cronologia/backups/list" },
      { type: "cronologia/backups/create" },
      { type: "cronologia/backups/restore", name: "b.zip" },
      { type: "cronologia/todo/add", entity_id: "todo.casa", task: { summary: "Varrer" } },
      { type: "cronologia/ai/usage" },
      { type: "cronologia/todo/bring_preview", entity_id: "todo.casa" },
      { type: "cronologia/todo/bring", entity_id: "todo.casa", calendar: "calendar.a", uids: ["u1"], remove: true },
      { type: "cronologia/todo/bring", entity_id: "todo.casa", calendar: "calendar.a", uids: ["u1"], remove: false },
      { type: "cronologia/todo/set", entity_id: "todo.casa", uid: "u1", done: true, who: "" },
      { type: "cronologia/notify/test", person: "Aurora" },
      { type: "cronologia/score/remind_test" },
      { type: "cronologia/voice/status" },
      { type: "cronologia/voice/status", fresh: true },
    ]);
  });
  it("the urls of the files", () => {
    const { api } = up();
    assert.equal(api.dataUrl("zip"), "https://casa.example/api/hassio_ingress/xyz/api/export/zip");
    const u = new URL(api.exportUrl({ calendars: ["calendar.a", "calendar.b"], start: "2026-11-01", end: "2026-12-01" }));
    assert.equal(u.pathname, "/api/hassio_ingress/xyz/api/export/ics");
    assert.deepEqual(Object.fromEntries(u.searchParams), { calendars: "calendar.a,calendar.b", start: "2026-11-01", end: "2026-12-01" });
  });
});

describe("api: fetch calls", () => {
  const reply = (status, body) => async (url, opts) => {
    reply.last = { url: String(url), opts };
    return { ok: status < 400, status, json: async () => (body === undefined ? Promise.reject(new Error("no json")) : body) };
  };
  it("importData sends the file with its name; errors say why", async () => {
    const { api } = up();
    globalThis.fetch = reply(200, { added: 3 });
    assert.deepEqual(await api.importData({ name: "agenda de casa.zip" }), { added: 3 });
    assert.equal(reply.last.url, "https://casa.example/api/hassio_ingress/xyz/api/import");
    assert.equal(reply.last.opts.headers["x-file-name"], "agenda%20de%20casa.zip");
    globalThis.fetch = reply(400, { error: "Arquivo inválido" });
    await assert.rejects(api.importData({}), /Arquivo inválido/);
    globalThis.fetch = reply(500);
    await assert.rejects(api.importData({}), /Erro 500/);
  });
  it("voiceText posts only the samples of the view; extract posts JSON; both carry the error code", async () => {
    const { api } = up();
    globalThis.fetch = reply(200, { text: "dentista amanhã às 9" });
    const pcm = new Int16Array([9, 1, 2, 9]).subarray(1, 3);
    assert.deepEqual(await api.voiceText(pcm), { text: "dentista amanhã às 9" });
    assert.deepEqual([...new Int16Array(reply.last.opts.body)], [1, 2]);
    globalThis.fetch = reply(413, { error: "Fale até 2 minutos de cada vez.", code: "too_big" });
    await assert.rejects(api.voiceText(pcm), (e) => e.code === "too_big");
    globalThis.fetch = reply(502);
    await assert.rejects(api.voiceText(pcm), /Erro 502/);
    globalThis.fetch = reply(200, { events: [] });
    await api.extract({ text: "x" });
    assert.equal(reply.last.opts.body, '{"text":"x"}');
    globalThis.fetch = reply(429, { error: "Sem cota", code: "quota" });
    await assert.rejects(api.extract({}), (e) => e.code === "quota" && e.message === "Sem cota");
    globalThis.fetch = reply(503);
    await assert.rejects(api.extract({}), /Erro 503/);
  });
});

describe("api: the Home Assistant around", () => {
  const parent = (hass) => {
    const p = { events: [], pushed: [], document: { querySelector: () => ({ hass }) }, history: { pushState: (...a) => p.pushed.push(a) }, dispatchEvent: (e) => p.events.push(e), CustomEvent: class { constructor(t, o) { this.type = t; this.detail = o.detail; } } };
    return p;
  };
  it("parentHass and detectDark read the Home Assistant around (or nothing)", () => {
    assert.equal(parentHass(), null);
    assert.equal(detectDark(), false);
    window.parent = parent({ themes: { darkMode: true } });
    assert.equal(detectDark(), true);
    window.parent = parent({ themes: {} });
    assert.equal(detectDark(), false);
    window.parent = { get document() { throw new Error("cross-origin"); } };
    assert.equal(parentHass(), null);
  });
  it("appEnv: haptics and navigation go to the Home Assistant; alone, a top bar and links on top", () => {
    const p = parent({});
    window.parent = p;
    const env = appEnv();
    env.haptic("success");
    env.openInHA("/resolvia");
    assert.equal(env.topbar, false);
    assert.deepEqual(p.events.map((e) => e.type), ["haptic", "location-changed"]);
    assert.deepEqual(p.pushed, [[null, "", "/resolvia"]]);
    window.parent = window;
    const opened = [];
    window.open = (...a) => opened.push(a);
    assert.equal(appEnv().topbar, true);
    appEnv().haptic("x");
    appEnv().openInHA("/config");
    assert.deepEqual(opened, [["/config", "_top"]]);
  });
});
