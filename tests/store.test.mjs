// store.js: /data/cronologia.json — calendar and app settings (validated), checks,
// alerts sent, the Recompensas points and Extrato, versions and imports.
import { at, makeLog, tmpDir } from "./helpers.mjs";
import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { Store, COLORS } from "../cronologia/rootfs/app/lib/store.js";
import { asActor } from "../cronologia/rootfs/app/lib/actor.js";

const NOW = at(2026, 11, 2, 14, 0).getTime();
const DAY = 86400000;
let dir;
let log;

beforeEach(() => {
  mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
  dir = tmpDir("cronologia-store-");
  log = makeLog();
});
afterEach(() => {
  mock.timers.reset();
  fs.rmSync(dir, { recursive: true, force: true });
});

const fresh = () => new Store(dir, log);
const file = () => path.join(dir, "cronologia.json");
const onDisk = () => JSON.parse(fs.readFileSync(file(), "utf8"));
const writeRaw = (obj) => fs.writeFileSync(file(), JSON.stringify(obj));
const code = (fn) => {
  try {
    fn();
  } catch (e) {
    return e.code;
  }
  return null;
};

describe("Store: loading and saving", () => {
  it("starts empty when there is no file (and creates the folder)", () => {
    const sub = path.join(dir, "a", "b");
    const s = new Store(sub, log);
    assert.ok(fs.existsSync(sub));
    assert.deepEqual(s.data.calendars, {});
    assert.deepEqual(s.data.app, {});
    assert.deepEqual(s.data.checks, {});
    assert.deepEqual(s.data.kind_cals, []);
    assert.deepEqual(s.data.score.entries, []);
    assert.equal(s.data.score.current, null);
    assert.equal(log.lines.length, 0, "a missing file is not a warning");
  });
  it("a broken file is a warning, and the app starts empty", () => {
    fs.writeFileSync(file(), "{not json");
    const s = fresh();
    assert.deepEqual(s.data.app, {});
    assert.equal(log.lines[0][0], "warn");
  });
  it("save() writes 400 ms later, once, atomically; a new Store reads it back", () => {
    const s = fresh();
    s.setApp({ accent: "azul" });
    s.setApp({ view: "semana" });
    assert.equal(fs.existsSync(file()), false, "not written yet");
    mock.timers.tick(399);
    assert.equal(fs.existsSync(file()), false);
    mock.timers.tick(1);
    assert.deepEqual(onDisk().app, { accent: "azul", view: "semana" });
    assert.equal(fs.existsSync(`${file()}.tmp`), false);
    const again = fresh();
    assert.deepEqual(again.prefs.app, { accent: "azul", view: "semana" });
  });
  it("prefs is {calendars, app}", () => {
    const s = fresh();
    s.setCalendar("calendar.casa", { color: "verde" });
    assert.deepEqual(s.prefs, { calendars: { "calendar.casa": { color: "verde" } }, app: {} });
  });
});

describe("Store: calendar settings", () => {
  it("name trimmed and cut, color from the palette, hidden only when true", () => {
    const s = fresh();
    s.setCalendar("calendar.casa", { name: `  ${"x".repeat(80)}  `, color: "verde", hidden: 1 });
    const c = s.data.calendars["calendar.casa"];
    assert.equal(c.name.length, 60);
    assert.equal(c.color, "verde");
    assert.equal(c.hidden, true);
  });
  it("null or an invalid value clears a field; nothing left removes the calendar", () => {
    const s = fresh();
    s.setCalendar("calendar.casa", { name: "Casa", color: "verde", hidden: true });
    s.setCalendar("calendar.casa", { color: "roxo-neon", hidden: false });
    assert.deepEqual(s.data.calendars["calendar.casa"], { name: "Casa" });
    s.setCalendar("calendar.casa", { name: "   " });
    assert.equal("calendar.casa" in s.data.calendars, false);
  });
  it("fields not sent are kept", () => {
    const s = fresh();
    s.setCalendar("calendar.casa", { name: "Casa", color: "azul" });
    s.setCalendar("calendar.casa", { hidden: true });
    assert.deepEqual(s.data.calendars["calendar.casa"], { name: "Casa", color: "azul", hidden: true });
  });
  it("refuses what is not a calendar or not an object", () => {
    const s = fresh();
    assert.equal(code(() => s.setCalendar("light.sala", { name: "x" })), "invalid_format");
    assert.equal(code(() => s.setCalendar("calendar.Casa", { name: "x" })), "invalid_format");
    assert.equal(code(() => s.setCalendar("calendar.casa", null)), "invalid_format");
  });
  it("every color of the palette is accepted", () => {
    const s = fresh();
    for (const c of COLORS) {
      s.setCalendar("calendar.casa", { color: c });
      assert.equal(s.data.calendars["calendar.casa"].color, c);
    }
  });
});

describe("Store: app settings", () => {
  const set = (changes) => {
    const s = fresh();
    s.setApp(changes);
    return s.data.app;
  };
  it("Modo férias: two real days, the first not after the last; null clears; anything else is refused", () => {
    assert.deepEqual(set({ away: { from: "2026-11-03", to: "2026-11-07", extra: 1 } }).away, { from: "2026-11-03", to: "2026-11-07" });
    const s = fresh();
    s.setApp({ away: { from: "2026-11-03", to: "2026-11-07" } });
    s.setApp({ away: null });
    assert.equal(s.data.app.away, undefined);
    for (const away of [{ from: "2026-11-07", to: "2026-11-03" }, { from: "2026-02-30", to: "2026-03-01" }, { from: "2026-01-01", to: "2027-06-01" }, "sim"]) {
      assert.throws(() => fresh().setApp({ away }), /Datas das férias inválidas/, JSON.stringify(away));
    }
  });
  it("Cor do dia: on unless turned off (only false is kept)", () => {
    const s = fresh();
    s.setApp({ accent_daily: false });
    assert.equal(s.data.app.accent_daily, false);
    s.setApp({ accent: "azul", accent_daily: true });
    assert.deepEqual(s.data.app, { accent: "azul" }, "on is the default: nothing kept");
    s.setApp({ accent_daily: false });
    s.setApp({ accent_daily: null });
    assert.equal("accent_daily" in s.data.app, false);
    s.setApp({ accent_daily: "não" });
    assert.equal("accent_daily" in s.data.app, false);
  });
  it("simple choices are validated", () => {
    assert.deepEqual(set({ accent: "rosa", week_start: 0, view: "lista" }), { accent: "rosa", week_start: 0, view: "lista" });
    assert.deepEqual(set({ accent: "pink", week_start: 3, view: "ano" }), {});
    assert.deepEqual(set({ week_start: 1 }), { week_start: 1 });
    assert.deepEqual(set({ week_start: "1" }), {}, "only numbers");
  });
  it("entities: AI, default calendar, voice engine", () => {
    assert.deepEqual(set({ ai_entity: "ai_task.google_ai_task", default_calendar: "calendar.casa", voice_engine: "stt.home_assistant_cloud" }), {
      ai_entity: "ai_task.google_ai_task",
      default_calendar: "calendar.casa",
      voice_engine: "stt.home_assistant_cloud",
    });
    assert.deepEqual(set({ ai_entity: "conversation.x", default_calendar: "todo.x", voice_engine: "STT Cloud!" }), {});
    assert.deepEqual(set({ voice_engine: "" }), {}, "empty = the voice assistant's");
  });
  it("on/off switches are true or removed", () => {
    const keys = ["hide_past", "gerencia_hidden", "event_details", "resolvia_on", "gerencia_on", "todo_off_calendar", "todo_undated", "todo_create_any", "who_pick", "ai_off", "sensors_on"];
    const on = set(Object.fromEntries(keys.map((k) => [k, 1])));
    for (const k of keys) assert.equal(on[k], true, k);
    const s = fresh();
    s.setApp(Object.fromEntries(keys.map((k) => [k, true])));
    s.setApp(Object.fromEntries(keys.map((k) => [k, false])));
    assert.deepEqual(s.data.app, {});
  });
  it("todo_hidden: only todo ids, no repeats, at most 100", () => {
    assert.deepEqual(set({ todo_hidden: ["todo.casa", "todo.casa", "calendar.x", "todo.Bad", "todo.lista_2"] }).todo_hidden, ["todo.casa", "todo.lista_2"]);
    assert.equal(set({ todo_hidden: Array.from({ length: 150 }, (_, i) => `todo.l${i}`) }).todo_hidden.length, 100);
    assert.deepEqual(set({ todo_hidden: [] }), {});
    assert.deepEqual(set({ todo_hidden: "todo.casa" }), {});
  });
  it("todo_owner: list -> person name", () => {
    assert.deepEqual(set({ todo_owner: { "todo.tarefas_dessa": "  Andressa ", "todo.x": "", "light.y": "Diego" } }).todo_owner, { "todo.tarefas_dessa": "Andressa" });
    assert.deepEqual(set({ todo_owner: null }), {});
  });
  it("mirror: the list of the maintenance and the one of the routines (1.59.0; the old shape becomes the new one)", () => {
    assert.deepEqual(set({ mirror: { maint_list: "todo.casa", routine_list: "todo.rotinas" } }).mirror, { maint_list: "todo.casa", routine_list: "todo.rotinas" });
    assert.deepEqual(set({ mirror: { maint_list: "todo.casa", routine_list: "calendar.x" } }).mirror, { maint_list: "todo.casa", routine_list: null });
    assert.deepEqual(set({ mirror: { list: "todo.casa", maint: 1, routine: 0 } }).mirror, { maint_list: "todo.casa", routine_list: null });
    assert.deepEqual(set({ mirror: { list: "calendar.x", maint: true } }), {});
    assert.deepEqual(set({ mirror: { list: "bad" } }), {});
    assert.deepEqual(set({ mirror: null }), {});
  });
  it("people: pets, the person who gets the alerts of one without a phone, names trimmed; a phone of before 1.54.0 kept until migrated", () => {
    const people = set({ people: { " Andressa ": { notify: "mobile_app_galaxy_s23" }, Mimi: { care: " Andressa ", pet: true }, Diego: { notify: "notify.x", care: 3 }, "": {}, Rex: { pet: "yes" } } }).people;
    assert.deepEqual(people, {
      Andressa: { notify: "mobile_app_galaxy_s23" },
      Mimi: { care: "Andressa", pet: true },
      Diego: {},
      Rex: {},
    });
    assert.deepEqual(set({ people: {} }), {});
  });
  it("score: participants, period, anchor, notify (on by default), manual", () => {
    const sc = set({ score: { enabled: 1, participants: [" Diego ", "Andressa", "Diego", "", ...Array.from({ length: 12 }, (_, i) => `P${i}`)], period: "quinzena", anchor: "2026-10-26", manual: 1 } }).score;
    assert.equal(sc.enabled, true);
    assert.equal(sc.participants.length, 10);
    assert.deepEqual(sc.participants.slice(0, 3), ["Diego", "Andressa", "P0"]);
    assert.equal(sc.period, "quinzena");
    assert.equal(sc.anchor, "2026-10-26");
    assert.equal(sc.notify, true);
    assert.equal(sc.manual, true);
    const d = set({ score: { period: "ano", anchor: "26/10/2026", notify: false } }).score;
    assert.deepEqual(d, { enabled: false, participants: [], period: "semana", anchor: null, notify: false, manual: false, remind: null });
  });
  it("demerits: title, points 1..1000 (sign dropped), stable ids, no repeated ids", () => {
    const list = set({
      demerits: [
        { id: "toalha1", title: " Toalha molhada na cama ", points: -5 },
        { id: "toalha1", title: "Repetido", points: 3 },
        { title: "Sem id", points: 2.6 },
        { title: "", points: 5 },
        { title: "Zero", points: 0 },
        { title: "Demais", points: 1001 },
        null,
      ],
    }).demerits;
    assert.equal(list.length, 2);
    assert.deepEqual(list[0], { id: "toalha1", title: "Toalha molhada na cama", points: 5 });
    assert.equal(list[1].title, "Sem id");
    assert.equal(list[1].points, 3);
    assert.match(list[1].id, /^[a-z0-9]{4,16}$/);
  });
  it("alerts: meds on by default, late from the list, caregivers are people (a phone of before 1.54.0 kept until migrated)", () => {
    assert.deepEqual(set({ alerts: { late: 45, caregivers: [" Ana ", "Ana", "mobile_app_pixel_8", "", 7] } }).alerts, { meds: true, late: 45, caregivers: ["Ana", "mobile_app_pixel_8"] });
    assert.deepEqual(set({ alerts: { meds: false, late: 17 } }).alerts, { meds: false, late: 30, caregivers: [] });
    assert.equal(set({ alerts: { late: "0" } }).alerts.late, 0);
  });
  it("unknown keys are ignored; null removes a key; not an object is refused", () => {
    const s = fresh();
    s.setApp({ accent: "azul", hacker: "x" });
    assert.deepEqual(s.data.app, { accent: "azul" });
    s.setApp({ accent: null });
    assert.deepEqual(s.data.app, {});
    assert.equal(code(() => s.setApp(null)), "invalid_format");
    assert.equal(code(() => s.setApp("x")), "invalid_format");
  });
});

describe("Store: checks, alerts sent, calendars with models", () => {
  it("setCheck keeps at/by/kind, Pular (skipped) and where a routine was (moved)", () => {
    const s = fresh();
    s.setCheck("k1", { by: "Diego", kind: "rotina", skipped: true, moved: { cal: "calendar.casa", uid: "u1", start: "2026-11-02", end: "2026-11-03", day: "2026-11-02", summary: "Cama", recreated: true, extra: "x" } });
    assert.deepEqual(s.data.checks.k1, {
      at: new Date(NOW).toISOString(),
      by: "Diego",
      kind: "rotina",
      skipped: true,
      moved: { cal: "calendar.casa", uid: "u1", start: "2026-11-02", end: "2026-11-03", day: "2026-11-02", summary: "Cama", recreated: true },
    });
  });
  it("setCheck without skipped/moved has none; a given time is kept; long values are cut", () => {
    const s = fresh();
    s.setCheck("k", { at: "2026-11-01T10:00:00.000Z", by: "x".repeat(100), kind: "remedio-muito-longo-mesmo" });
    const c = s.data.checks.k;
    assert.equal(c.at, "2026-11-01T10:00:00.000Z");
    assert.equal(c.by.length, 60);
    assert.equal(c.kind.length, 20);
    assert.equal("skipped" in c, false);
    assert.equal("moved" in c, false);
  });
  it("setCheck(null) removes it; bad keys are refused", () => {
    const s = fresh();
    s.setCheck("k", { by: "x" });
    s.setCheck("k", null);
    assert.equal("k" in s.data.checks, false);
    assert.equal(code(() => s.setCheck("", { by: "x" })), "invalid_format");
    assert.equal(code(() => s.setCheck(5, { by: "x" })), "invalid_format");
    assert.equal(code(() => s.setCheck("k".repeat(601), { by: "x" })), "invalid_format");
  });
  it("markSent adds the stage time and merges the phones", () => {
    const s = fresh();
    s.markSent("dose", "on", ["mobile_app_a"]);
    mock.timers.tick(60000);
    s.markSent("dose", "late", ["mobile_app_a", "mobile_app_b"]);
    assert.deepEqual(s.data.sent.dose, { targets: ["mobile_app_a", "mobile_app_b"], on: new Date(NOW).toISOString(), late: new Date(NOW + 60000).toISOString() });
  });
  it("addKindCalendar once per valid calendar", () => {
    const s = fresh();
    assert.equal(s.addKindCalendar("calendar.casa"), true);
    assert.equal(s.addKindCalendar("calendar.casa"), false);
    assert.equal(s.addKindCalendar("todo.casa"), false);
    assert.deepEqual(s.data.kind_cals, ["calendar.casa"]);
  });
});

describe("Store: points and the Extrato", () => {
  const entry = (extra = {}) => ({ key: "k1", who: "Diego", points: 10, title: "Regar", kind: "rotina", ...extra });
  const types = (s) => s.data.score.log.map((l) => l.type);

  it("new points: ganhou (or perdeu when negative), with an increasing id", () => {
    const s = fresh();
    s.addPoints(entry());
    s.addPoints(entry({ key: "k2", points: -5, title: "Toalha", kind: "demerito" }));
    assert.deepEqual(types(s), ["ganhou", "perdeu"]);
    assert.deepEqual(
      s.data.score.log.map((l) => l.id),
      [1, 2],
    );
    assert.equal(s.data.score.log_seq, 2);
    assert.equal(s.data.score.log[1].points, -5);
    assert.equal(s.data.score.entries.length, 2);
  });
  it("the same key replaces: trocou (other person), ajuste (other value), nothing when equal", () => {
    const s = fresh();
    s.addPoints(entry());
    s.addPoints(entry());
    s.addPoints(entry({ who: "Andressa" }));
    s.addPoints(entry({ who: "Andressa", points: 15 }));
    assert.deepEqual(types(s), ["ganhou", "trocou", "ajuste"]);
    assert.equal(s.data.score.log[1].from, "Diego");
    assert.equal(s.data.score.log[2].points, 5, "ajuste logs the difference");
    assert.equal(s.data.score.entries.length, 1);
    assert.equal(s.pointsByKey("k1").who, "Andressa");
  });
  it("points are rounded and kept within ±1000; texts are cut", () => {
    const s = fresh();
    s.addPoints(entry({ points: 5000, title: "t".repeat(200) }));
    s.addPoints(entry({ key: "k2", points: -3000 }));
    s.addPoints(entry({ key: "k3", points: 2.6 }));
    s.addPoints(entry({ key: "k4", points: "abc" }));
    assert.deepEqual(
      s.data.score.entries.map((e) => e.points),
      [1000, -1000, 3, 0],
    );
    assert.equal(s.pointsByKey("k1").title.length, 120);
  });
  it("removePoints: desmarcou by default, tirou from the ×, negative points; false when missing", () => {
    const s = fresh();
    s.addPoints(entry());
    s.addPoints(entry({ key: "k2" }));
    assert.equal(s.removePoints("k1"), true);
    assert.equal(s.removePoints("k2", "tirou"), true);
    assert.equal(s.removePoints("k2"), false);
    assert.deepEqual(types(s), ["ganhou", "ganhou", "desmarcou", "tirou"]);
    assert.equal(s.data.score.log[2].points, -10);
    assert.equal(s.data.score.entries.length, 0);
    assert.equal(s.pointsByKey("k1"), null);
  });
  it("voltou: Desfazer of a removal keeps the original date", () => {
    const s = fresh();
    s.addPoints(entry({ at: "2026-10-30T12:00:00.000Z" }), "voltou");
    assert.deepEqual(types(s), ["voltou"]);
    assert.equal(s.pointsByKey("k1").at, "2026-10-30T12:00:00.000Z");
  });
  it("each line says who did it (asActor) and through what", () => {
    const s = fresh();
    asActor({ by: "Andressa", via: "ResolvIA" }, () => s.addPoints(entry()));
    s.addPoints(entry({ key: "k2" }));
    assert.equal(s.data.score.log[0].by, "Andressa");
    assert.equal(s.data.score.log[0].via, "ResolvIA");
    assert.equal("by" in s.data.score.log[1], false);
    assert.equal("via" in s.data.score.log[1], false);
  });
  it("logPage: newest first, before an id, within [from, to), without the period closes", () => {
    const s = fresh();
    for (let i = 1; i <= 5; i++) {
      s.addPoints(entry({ key: `k${i}` }));
      mock.timers.tick(DAY);
    }
    s.closePeriod({ key: "2026-11-02", start: "2026-11-02", end: "2026-11-09", totals: {}, winner: "" }, null);
    const all = s.logPage(0, 40);
    assert.deepEqual(
      all.map((l) => l.id),
      [5, 4, 3, 2, 1],
    );
    assert.deepEqual(
      s.logPage(4, 2).map((l) => l.id),
      [3, 2],
    );
    const from = NOW + DAY; // the 2nd line on
    const to = NOW + 3 * DAY; // before the 4th
    assert.deepEqual(
      s.logPage(0, 40, from, to).map((l) => l.id),
      [3, 2],
    );
    assert.equal(s.logCount(), 5);
    assert.equal(s.logCount(from, to), 2);
    assert.equal(s.data.score.log.at(-1).type, "fechou");
  });
  it("the Extrato keeps at most 3000 lines", () => {
    const s = fresh();
    for (let i = 0; i < 3005; i++) s.logPoints({ type: "ganhou", points: 1 });
    assert.equal(s.data.score.log.length, 3000);
    assert.equal(s.data.score.log[0].id, 6);
  });
});

describe("Store: prizes, periods", () => {
  it("setPrizes: shared and per person; prizeOf picks the winner's own, else the shared one", () => {
    const s = fresh();
    s.setPrizes("2026-11-02", " Pizza ", { Diego: "Jantar fora", Andressa: " Massagem ", "": "x", Ninguem: "" });
    assert.equal(s.data.score.rewards["2026-11-02"], "Pizza");
    assert.deepEqual(s.data.score.prizes["2026-11-02"], { Diego: "Jantar fora", Andressa: "Massagem" });
    assert.equal(s.prizeOf("2026-11-02", "Diego"), "Jantar fora");
    assert.equal(s.prizeOf("2026-11-02", "Outro"), "Pizza");
    assert.equal(s.prizeOf("2026-11-02", ""), "Pizza");
    assert.equal(s.prizeOf("2026-11-09", "Diego"), "");
    s.setPrizes("2026-11-02", "", {});
    assert.equal("2026-11-02" in s.data.score.rewards, false);
    assert.equal("2026-11-02" in s.data.score.prizes, false);
  });
  it("setPrizes updates the reward of a closed period (the winner's own)", () => {
    const s = fresh();
    s.closePeriod({ key: "2026-10-26", start: "2026-10-26", end: "2026-11-02", totals: { Diego: 30 }, winner: "Diego", reward: "" }, { key: "2026-11-02", start: "2026-11-02", end: "2026-11-09" });
    s.setPrizes("2026-10-26", "Pizza", { Diego: "Cinema" });
    assert.equal(s.data.score.history[0].reward, "Cinema");
    s.setPrizes("2026-10-26", "Pizza", {});
    assert.equal(s.data.score.history[0].reward, "Pizza");
  });
  it("setReward / setDelivered", () => {
    const s = fresh();
    s.closePeriod({ key: "2026-10-26", start: "2026-10-26", end: "2026-11-02", totals: {}, winner: "" }, null);
    s.setReward("2026-10-26", "  Sorvete ");
    assert.equal(s.data.score.history[0].reward, "Sorvete");
    s.setDelivered("2026-10-26", 1);
    assert.equal(s.data.score.history[0].delivered, true);
    assert.equal(code(() => s.setDelivered("2026-01-01", true)), "invalid_format");
    assert.equal(code(() => s.setReward("26/10", "x")), "invalid_format");
    assert.equal(code(() => s.setPrizes("x", "y")), "invalid_format");
  });
  it("setReward with no text removes the prize (this period and the closed one)", () => {
    const s = fresh();
    s.setReward("2026-11-02", "Cinema");
    assert.equal(s.data.score.rewards["2026-11-02"], "Cinema");
    s.setReward("2026-11-02", "   ");
    assert.equal("2026-11-02" in s.data.score.rewards, false);
    s.closePeriod({ key: "2026-10-26", start: "2026-10-26", end: "2026-11-02", totals: {}, winner: "Ana", reward: "Pizza" }, null);
    s.setReward("2026-10-26", "");
    assert.equal(s.data.score.history[0].reward, "");
  });
  it("closePeriod: newest first, the same key replaced, at most 104; logs fechou", () => {
    const s = fresh();
    for (let i = 0; i < 110; i++) s.closePeriod({ key: `2026-01-${String((i % 28) + 1).padStart(2, "0")}`, start: "x", end: "y", totals: {}, winner: "" }, null);
    assert.equal(s.data.score.history.length, 28, "same keys replaced");
    const t = fresh();
    for (let i = 0; i < 110; i++) {
      const d = new Date(2024, 0, 1 + i * 7);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      t.closePeriod({ key, start: key, end: key, totals: {}, winner: "" }, { key: "next" });
    }
    assert.equal(t.data.score.history.length, 104);
    assert.ok(t.data.score.history[0].key > t.data.score.history[1].key);
    assert.deepEqual(t.data.score.current, { key: "next" });
    const last = t.data.score.log.at(-1);
    assert.equal(last.type, "fechou");
    assert.equal(last.points, 0);
  });
});

describe("Store: pruning old data", () => {
  it("drops old points, Extrato lines, prizes, checks and alerts sent", () => {
    const iso = (ms) => new Date(ms).toISOString();
    writeRaw({
      checks: { recent: { at: iso(NOW - 10 * DAY) }, old: { at: iso(NOW - 121 * DAY) }, broken: { at: "never" }, nul: null },
      sent: { fresh: { on: iso(NOW - DAY), targets: [] }, stale: { on: iso(NOW - 4 * DAY), targets: [] }, snoozed: { on: iso(NOW - 5 * DAY), snooze_until: iso(NOW - 2 * DAY) }, none: { targets: [] } },
      score: {
        entries: [
          { key: "a", at: iso(NOW - 399 * DAY), who: "Diego", points: 1 },
          { key: "b", at: iso(NOW - 401 * DAY), who: "Diego", points: 1 },
        ],
        log: [
          { id: 1, type: "ganhou", at: iso(NOW - 401 * DAY), key: "b" },
          { id: 2, type: "ganhou", at: iso(NOW - 399 * DAY), key: "a" },
        ],
        log_seq: 2,
        rewards: { "2024-10-01": "velho", "2025-12-01": "novo" },
        prizes: { "2024-10-01": { Diego: "x" }, "2025-12-01": { Diego: "y" } },
      },
    });
    const s = fresh();
    assert.deepEqual(Object.keys(s.data.checks), ["recent"]);
    assert.deepEqual(Object.keys(s.data.sent).sort(), ["fresh", "snoozed"]);
    assert.deepEqual(
      s.data.score.entries.map((e) => e.key),
      ["a"],
    );
    assert.deepEqual(
      s.data.score.log.map((l) => l.id),
      [2],
    );
    assert.equal(s.data.score.log_seq, 2, "the sequence never goes back");
    assert.deepEqual(Object.keys(s.data.score.rewards), ["2025-12-01"]);
    assert.deepEqual(Object.keys(s.data.score.prizes), ["2025-12-01"]);
  });
});

describe("Store: reading a saved file (normalize)", () => {
  it("drops invalid parts and keeps the rest as is", () => {
    writeRaw({
      calendars: { "calendar.casa": { color: "whatever-was-saved" } },
      app: { anything: 1 },
      kind_cals: ["calendar.casa", "todo.x", 5],
      checks: [],
      score: {
        entries: [{ key: "a", at: new Date(NOW).toISOString(), who: "Diego", points: 5 }, { key: "", at: "x", who: "D" }, { key: "c", at: new Date(NOW).toISOString(), who: 5 }],
        history: [{ key: "2026-10-26" }, { key: "bad" }],
        current: { key: "2026-11-02", start: "2026-11-02", end: "2026-11-09" },
        prizes: { "2026-11-02": { Diego: "  Jantar ", Andressa: "", Num: 5 }, bad: { Diego: "x" }, "2026-11-09": {} },
        log: [],
      },
    });
    const s = fresh();
    // not strict: what was saved by the app itself is trusted
    assert.deepEqual(s.data.calendars, { "calendar.casa": { color: "whatever-was-saved" } });
    assert.deepEqual(s.data.app, { anything: 1 });
    assert.deepEqual(s.data.kind_cals, ["calendar.casa"]);
    assert.deepEqual(s.data.checks, {});
    assert.deepEqual(
      s.data.score.entries.map((e) => e.key),
      ["a"],
    );
    assert.deepEqual(
      s.data.score.history.map((h) => h.key),
      ["2026-10-26"],
    );
    assert.equal(s.data.score.current.key, "2026-11-02");
    assert.deepEqual(s.data.score.prizes, { "2026-11-02": { Diego: "Jantar" } });
  });
  it("before the Extrato (no log): it starts with the points already on the placar, oldest first", () => {
    const iso = (h) => new Date(NOW - h * 3600000).toISOString();
    writeRaw({ score: { entries: [{ key: "b", at: iso(1), who: "Diego", points: -3, title: "Toalha" }, { key: "a", at: iso(5), who: "Andressa", points: 10, title: "Lixo", kind: "rotina" }] } });
    const s = fresh();
    assert.deepEqual(
      s.data.score.log.map((l) => [l.id, l.type, l.key, l.who, l.points]),
      [
        [1, "ganhou", "a", "Andressa", 10],
        [2, "perdeu", "b", "Diego", -3],
      ],
    );
    assert.equal(s.data.score.log_seq, 2);
  });
  it("1.19.0 lines without a key get the key of the entry with the same person, title and time", () => {
    const t = new Date(NOW - 3600000).toISOString();
    const t2 = new Date(NOW - 3600000 + 2000).toISOString();
    writeRaw({
      score: {
        entries: [{ key: "rot|1", at: t, who: "Diego", points: 5, title: "Regar" }],
        log: [
          { id: 7, type: "ganhou", at: t2, who: "Diego", title: "Regar", points: 5 },
          { id: 8, type: "ganhou", at: t2, who: "Andressa", title: "Regar", points: 5 },
          { id: 9, type: "fechou", at: t2, points: 0 },
          { id: "x", type: "ganhou", at: t2 },
          { id: 10, type: "inventado", at: t2 },
        ],
        log_seq: 3,
      },
    });
    const s = fresh();
    assert.deepEqual(
      s.data.score.log.map((l) => [l.id, l.key || null]),
      [
        [7, "rot|1"],
        [8, null],
        [9, null],
      ],
    );
    assert.equal(s.data.score.log_seq, 9, "never behind the newest line");
  });
});

describe("Store: versions and replaceAll (import, restore)", () => {
  const versions = () => fs.readdirSync(path.join(dir, "versoes")).sort();

  it("the first save copies the previous file to versoes, then at most every 10 minutes", () => {
    const s = fresh();
    s.setApp({ accent: "azul" });
    mock.timers.tick(400); // first write: nothing to copy yet
    assert.equal(fs.existsSync(path.join(dir, "versoes")), false);
    s.setApp({ accent: "rosa" });
    mock.timers.tick(400);
    assert.equal(versions().length, 1);
    assert.match(versions()[0], /^cronologia-20261102-1400\d\d-auto\.json$/);
    assert.equal(JSON.parse(fs.readFileSync(path.join(dir, "versoes", versions()[0]), "utf8")).app.accent, "azul");
    s.setApp({ accent: "verde" });
    mock.timers.tick(400);
    assert.equal(versions().length, 1, "not again within 10 minutes");
    mock.timers.tick(10 * 60000);
    s.setApp({ accent: "lilas" });
    mock.timers.tick(400);
    assert.equal(versions().length, 2);
  });
  it("only the 3 newest versions are kept", () => {
    const s = fresh();
    s.setApp({ accent: "azul" });
    s.flush();
    for (let i = 0; i < 5; i++) {
      mock.timers.tick(1000);
      assert.ok(s.version(`r${i}`, true));
    }
    assert.deepEqual(
      versions().map((n) => n.replace(/^cronologia-\d{8}-\d{6}-/, "")),
      ["r2.json", "r3.json", "r4.json"],
    );
  });
  it("a version that can't be copied (versoes is not a folder): warned, null, and the save still happens", () => {
    const s = fresh();
    s.setApp({ accent: "azul" });
    s.flush();
    fs.writeFileSync(path.join(dir, "versoes"), "um arquivo no lugar da pasta");
    assert.equal(s.version("manual", true), null);
    assert.match(log.lines.at(-1)[1], /Não consegui guardar uma versão/);
    s.setApp({ accent: "rosa" });
    s.flush();
    assert.equal(onDisk().app.accent, "rosa");
  });
  it("a save that fails (the folder is gone) is logged as an error, and the data stays in memory", () => {
    const s = fresh();
    s.setApp({ accent: "azul" });
    fs.rmSync(dir, { recursive: true, force: true });
    s.flush({ version: false });
    assert.equal(log.lines.at(-1)[0], "error");
    assert.match(log.lines.at(-1)[1], /Não consegui salvar .*cronologia\.json/);
    assert.equal(s.data.app.accent, "azul");
    fs.mkdirSync(dir, { recursive: true });
    s.flush({ version: false });
    assert.equal(onDisk().app.accent, "azul", "the next save works again");
  });
  it("version() without a file gives null", () => {
    assert.equal(fresh().version("x", true), null);
  });
  it("replaceAll: strict checks, keeps the alerts sent and the ResolvIA links, copies the old file first", () => {
    const s = fresh();
    s.setApp({ accent: "azul" });
    s.markSent("dose", "on", ["mobile_app_a"]);
    s.data.mirror = { "maint|calendar.casa|u1": { list: "todo.casa", uid: "t1" } };
    s.flush();
    const out = s.replaceAll(
      {
        calendars: { "calendar.casa": { name: "Casa", color: "laranja", junk: 1 }, "calendar.bad": "x", "light.x": { name: "L" }, "calendar.vazio": { color: "nope" } },
        app: { accent: "rosa", view: "nope", people: { Ana: { notify: "mobile_app_x" } } },
        checks: { k: { at: new Date(NOW).toISOString(), by: "Ana" } },
        sent: { other: { on: new Date(NOW).toISOString() } },
        mirror: {},
        score: { entries: [{ key: "a", at: new Date(NOW).toISOString(), who: "Ana", points: 3 }] },
      },
      "antes-de-importar",
    );
    assert.equal(out, s.data);
    assert.deepEqual(s.data.calendars, { "calendar.casa": { name: "Casa", color: "laranja" } });
    assert.deepEqual(s.data.app, { accent: "rosa", people: { Ana: { notify: "mobile_app_x" } } });
    assert.deepEqual(Object.keys(s.data.sent), ["dose"], "alerts already sent stay sent");
    assert.deepEqual(Object.keys(s.data.mirror), ["maint|calendar.casa|u1"]);
    assert.equal(s.data.score.entries.length, 1);
    assert.equal(onDisk().app.accent, "rosa", "written right away");
    const v = versions();
    assert.equal(v.length, 1);
    assert.match(v[0], /-antes-de-importar\.json$/);
    assert.equal(JSON.parse(fs.readFileSync(path.join(dir, "versoes", v[0]), "utf8")).app.accent, "azul");
  });
  it("replaceAll with garbage gives an empty app (but never throws)", () => {
    const s = fresh();
    s.setApp({ accent: "azul" });
    s.flush();
    s.replaceAll({ calendars: [], app: "x", score: 5 }, "restore");
    assert.deepEqual(s.data.app, {});
    assert.deepEqual(s.data.calendars, {});
  });
});
