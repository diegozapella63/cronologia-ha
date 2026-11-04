// home.js: the models seen from the server — Feito / Pular / Desfazer of routines,
// maintenance done and undone, phone alerts of doses, points from the ResolvIA and
// automations, the placar (rollover), people and pets, Trazer do ResolvIA.
// Driven with a fake Home Assistant, a real Store in a temp folder, and mocked time.
import { at, makeLog, tmpDir, flushPromises } from "./helpers.mjs";
import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import { Home } from "../cronologia/rootfs/app/lib/home.js";
import { Store } from "../cronologia/rootfs/app/lib/store.js";
import { Todos } from "../cronologia/rootfs/app/lib/todos.js";
import { parseKind, occurrenceKey, buildDescription } from "../cronologia/rootfs/app/lib/kinds.js";
import { asActor } from "../cronologia/rootfs/app/lib/actor.js";

const NOW = at(2026, 11, 2, 14, 0).getTime(); // Monday
const CAL = "calendar.casa";
const hashOf = (key) => crypto.createHash("sha1").update(key).digest("hex").slice(0, 10);
let dir;

beforeEach(() => {
  mock.timers.enable({ apis: ["setTimeout", "setInterval", "Date"], now: NOW });
  dir = tmpDir("cronologia-home-");
});
afterEach(() => {
  mock.timers.reset();
  fs.rmSync(dir, { recursive: true, force: true });
});

function fakeHA() {
  const ha = { ready: true, sent: [], fail: null, reply: null };
  ha.send = async (msg) => {
    ha.sent.push(msg);
    if (ha.fail && ha.fail(msg)) throw Object.assign(new Error("falhou"), { code: "failed" });
    return ha.reply ? ha.reply(msg) : null;
  };
  ha.subscribe = () => ({ unsubscribe() {} });
  ha.on = () => {};
  return ha;
}

const SCORE = { enabled: true, participants: ["Diego", "Andressa"], period: "semana" };

/** A Home with the given calendars' events, app settings and HA persons. */
function setup({ app = { score: SCORE }, events = {}, features = 7, persons = [], targets = [], todos = null } = {}) {
  const store = new Store(dir, makeLog());
  store.setApp(app);
  const ha = fakeHA();
  const log = makeLog();
  const calStates = new Map(Object.keys({ [CAL]: 1, ...events }).map((id) => [id, { state: "off", attributes: { supported_features: typeof features === "object" ? features[id] ?? 7 : features } }]));
  const changes = [];
  const home = new Home({ ha, store, log, rest: "http://ha/api", token: "", calState: () => calStates, gerencia: { state: { ligado: false } }, todos, onChange: (ix) => changes.push(ix) });
  for (const [cal, evs] of Object.entries({ [CAL]: [], ...events })) home.tracked.set(cal, { sub: null, poll: null, events: evs, day: "2026-11-02" });
  for (const p of persons) home.persons.set(p.id, p);
  home.targets = new Set(targets);
  return { home, store, ha, log, changes };
}
const sentOf = (ha, type) => ha.sent.filter((m) => m.type === type);
const notifications = (ha) => ha.sent.filter((m) => m.type === "call_service" && m.domain === "notify");

// ------------------------------------------------------------------ events

const AFTER = "#rotina\nQuem faz: Diego\nPontos: 10\nVolta: 2 dias depois de feita\nFeito em: 30/10/2026\nDobrar o edredom";
const cama = (extra = {}) => ({ uid: "cama", summary: "Arrumar a cama", start: "2026-11-02", end: "2026-11-03", description: AFTER, ...extra });
const lixo = (day = "2026-11-02") => ({ uid: "lixo", summary: "Tirar o lixo", start: day, end: day.replace(/\d+$/, (d) => String(+d + 1).padStart(2, "0")), description: "#rotina\nQuem faz: Andressa\nPontos: 5", rrule: "FREQ=DAILY", recurrence_id: day.replace(/-/g, "") });
const MAINT = "#manutenção\nQuem faz: Diego\nA cada: 6 meses\nAvisar: 7 dias antes\nFeito em: 07/05/2026\nPontos: 30\nCômodo: Cozinha";
const filtro = (extra = {}) => ({ uid: "filtro", summary: "Trocar o filtro", start: "2026-11-07", end: "2026-11-08", description: MAINT, location: "Cozinha", ...extra });
const dose = (h, m, extra = {}) => {
  const s = at(2026, 11, 2, h, m);
  const iso = (d) => `2026-11-02T${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:00-03:00`;
  return { uid: `dose-${h}${m}`, summary: "Sertralina", start: iso(s), end: iso(new Date(s.getTime() + 15 * 60000)), description: "#remédio\nDose: 1 comprimido\nQuem toma: Andressa", ...extra };
};
const keyOf = (raw, cal = CAL) => occurrenceKey(cal, raw);

describe("Home: people", () => {
  const persons = [
    { id: "person.diego", name: "Diego Zapella", user_id: "u-diego", trackers: ["device_tracker.pixel_8"] },
    { id: "person.andressa", name: "Andressa", user_id: "u-andressa", trackers: ["device_tracker.galaxy_s23", "device_tracker.tablet"] },
  ];
  it("personOfUser: by Home Assistant user, else by first name, else the first word given", () => {
    const { home } = setup({ persons });
    assert.equal(home.personOfUser("u-andressa", "whatever"), "Andressa");
    assert.equal(home.personOfUser("u-x", "diego silva"), "Diego Zapella");
    assert.equal(home.personOfUser("", "  Maria   Clara "), "Maria");
    assert.equal(home.personOfUser("", ""), "");
  });
  it("targetFor: the phone chosen in Mais › Avisos (accents ignored), else the person's tracker", () => {
    const { home } = setup({ persons, targets: ["mobile_app_pixel_8", "mobile_app_galaxy_s23"], app: { people: { Andréssa: { notify: "mobile_app_tablet_x" } } } });
    assert.equal(home.targetFor("Andressa"), "mobile_app_tablet_x");
    assert.equal(home.targetFor("diego"), "mobile_app_pixel_8", "first name of the person entity");
    assert.equal(home.targetFor("Mimi"), null);
    assert.equal(home.targetFor(""), null);
    assert.equal(home.autoTarget("Andressa"), "mobile_app_galaxy_s23");
  });
  it("a tracker without a mobile app gives no phone", () => {
    const { home } = setup({ persons, targets: [] });
    assert.equal(home.autoTarget("Diego"), null);
  });
  it("isPet and peopleInfo: HA persons, people of the app, names of the models; phones with their owner", () => {
    const { home } = setup({ persons, targets: ["mobile_app_pixel_8", "mobile_app_galaxy_s23", "mobile_app_tablet_x"], app: { people: { Mimi: { notify: "mobile_app_galaxy_s23", pet: true }, Vó: { notify: null } } } });
    assert.equal(home.isPet("mimi"), true);
    assert.equal(home.isPet("Diego"), false);
    const info = home.peopleInfo(["Andressa", "Zeca", ""]);
    assert.deepEqual(
      info.list.map((p) => [p.name, p.person, p.pet, p.notify]),
      [
        ["Andressa", "person.andressa", false, "mobile_app_galaxy_s23"],
        ["Diego Zapella", "person.diego", false, "mobile_app_pixel_8"],
        ["Mimi", null, true, "mobile_app_galaxy_s23"],
        ["Vó", null, false, null],
        ["Zeca", null, false, null],
      ],
    );
    assert.deepEqual(info.targets, [
      { id: "mobile_app_galaxy_s23", name: "Galaxy S23", owner: "Andressa" },
      { id: "mobile_app_pixel_8", name: "Pixel 8", owner: "Diego Zapella" },
      { id: "mobile_app_tablet_x", name: "Tablet X", owner: null },
    ]);
  });
  it("loadPeople reads person.* and the mobile_app notify services", async () => {
    const { home, ha } = setup();
    ha.reply = (m) =>
      m.type === "get_states"
        ? [{ entity_id: "person.ana", attributes: { friendly_name: "Ana", user_id: "u1", device_trackers: ["device_tracker.ana"] } }, { entity_id: "light.x", attributes: {} }, { entity_id: "person.sem_nome", attributes: {} }]
        : { notify: { mobile_app_ana: {}, persistent_notification: {}, "mobile_app_Bad-Name": {} } };
    await home.loadPeople();
    assert.deepEqual([...home.persons.keys()], ["person.ana", "person.sem_nome"]);
    assert.equal(home.persons.get("person.sem_nome").name, "sem_nome");
    assert.deepEqual([...home.targets], ["mobile_app_ana"]);
    assert.equal(home.targetFor("Ana"), "mobile_app_ana");
  });
  it("participant: only with the placar on; by name or first name, accents ignored", () => {
    const { home, store } = setup({ app: { score: { enabled: true, participants: ["Diego Zapella", "Andréssa"] } } });
    assert.equal(home.participant("andressa"), "Andréssa");
    assert.equal(home.participant("Diego"), "Diego Zapella");
    assert.equal(home.participant("Diego Silva"), "Diego Zapella", "the first name is enough");
    assert.equal(home.participant("Zeca"), "");
    assert.equal(home.participant(""), "");
    store.setApp({ score: { enabled: false, participants: ["Diego Zapella"] } });
    assert.equal(home.participant("Diego"), "");
  });
});

describe("Home: Feito / Desfazer of a calendar routine", () => {
  it("done by a participant: the check and the points go to them", () => {
    const raw = lixo();
    const { home, store, changes } = setup({ events: { [CAL]: [raw] } });
    home.check(keyOf(raw), true, "Diego (app)", "rotina", "andressa");
    assert.equal(store.data.checks[keyOf(raw)].by, "Andressa");
    assert.equal(store.data.checks[keyOf(raw)].kind, "rotina");
    const e = store.pointsByKey(keyOf(raw));
    assert.deepEqual({ who: e.who, points: e.points, title: e.title, kind: e.kind }, { who: "Andressa", points: 5, title: "Tirar o lixo", kind: "rotina" });
    mock.timers.tick(120);
    assert.equal(changes.length, 1, "the screens get the new index");
    assert.deepEqual(changes[0].routines[0].done.by, "Andressa");
  });
  it("done by someone who is not on the placar: done, no points", () => {
    const raw = lixo();
    const { home, store } = setup({ events: { [CAL]: [raw] } });
    home.check(keyOf(raw), true, "App", "rotina", "Visita");
    assert.equal(store.data.checks[keyOf(raw)].by, "Visita");
    assert.equal(store.pointsByKey(keyOf(raw)), null);
  });
  it("Desfazer removes the check and the points", () => {
    const raw = lixo();
    const { home, store } = setup({ events: { [CAL]: [raw] } });
    home.check(keyOf(raw), true, "x", "rotina", "Diego");
    home.check(keyOf(raw), false, "x", "rotina");
    assert.equal(keyOf(raw) in store.data.checks, false);
    assert.equal(store.pointsByKey(keyOf(raw)), null);
    assert.deepEqual(
      store.data.score.log.map((l) => l.type),
      ["ganhou", "desmarcou"],
    );
  });
  it("Tomei of a dose clears its alert on every phone that got it", async () => {
    const raw = dose(9, 0);
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    store.markSent(keyOf(raw), "on", ["mobile_app_a", "mobile_app_b"]);
    home.check(keyOf(raw), true, "Andressa", "remedio");
    await flushPromises();
    assert.deepEqual(
      notifications(ha).map((n) => [n.service, n.service_data]),
      [
        ["mobile_app_a", { message: "clear_notification", data: { tag: `cronologia-${hashOf(keyOf(raw))}` } }],
        ["mobile_app_b", { message: "clear_notification", data: { tag: `cronologia-${hashOf(keyOf(raw))}` } }],
      ],
    );
  });
});

describe("Home: routines that come back N days after done", () => {
  it("Feito moves the event to today + N with today in its history, keeps where it was, gives the points", async () => {
    const raw = cama();
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    const key = keyOf(raw);
    const out = await home.check(key, true, "Diego (app)", "rotina", "Diego");
    assert.deepEqual(out, { moved: true, next: "2026-11-04" });
    const [upd] = sentOf(ha, "calendar/event/update");
    assert.equal(upd.entity_id, CAL);
    assert.equal(upd.uid, "cama");
    assert.equal(upd.event.dtstart, "2026-11-04");
    assert.equal(upd.event.dtend, "2026-11-05");
    assert.equal("start" in upd.event, false, "Home Assistant takes dtstart/dtend");
    const k = parseKind(upd.event.description);
    assert.deepEqual(k.history, ["2026-11-02", "2026-10-30"]);
    assert.equal(k.notes, "Dobrar o edredom");
    const c = store.data.checks[key];
    assert.deepEqual(c.moved, { cal: CAL, uid: "cama", start: "2026-11-02", end: "2026-11-03", day: "2026-11-02", summary: "Arrumar a cama" });
    assert.equal(c.by, "Diego");
    assert.equal(store.pointsByKey(key).points, 10);
  });
  it("Feito again the same day (the moved event marked from the calendar) does nothing", async () => {
    const raw = cama();
    const { home, ha } = setup({ events: { [CAL]: [raw] } });
    await home.check(keyOf(raw), true, "x", "rotina", "Diego");
    const moved = { ...raw, start: "2026-11-04", end: "2026-11-05" };
    home.tracked.get(CAL).events = [moved];
    const out = await home.check(keyOf(moved), true, "x", "rotina", "Diego");
    assert.deepEqual(out, { moved: false });
    assert.equal(sentOf(ha, "calendar/event/update").length, 1);
  });
  it("Desfazer moves it back without today in its history and takes the points", async () => {
    const raw = cama();
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    const key = keyOf(raw);
    await home.check(key, true, "x", "rotina", "Diego");
    const upd = sentOf(ha, "calendar/event/update")[0].event;
    home.tracked.get(CAL).events = [{ ...raw, start: upd.dtstart, end: upd.dtend, description: upd.description }];
    const out = await home.check(key, false, "x", "rotina");
    assert.deepEqual(out, { moved: false });
    const back = sentOf(ha, "calendar/event/update")[1];
    assert.equal(back.uid, "cama");
    assert.equal(back.event.dtstart, "2026-11-02");
    assert.equal(back.event.dtend, "2026-11-03");
    assert.deepEqual(parseKind(back.event.description).history, ["2026-10-30"]);
    assert.equal(key in store.data.checks, false);
    assert.equal(store.pointsByKey(key), null);
  });
  it("Quem fez? answered later only changes who gets the points", async () => {
    const raw = cama();
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    const key = keyOf(raw);
    await home.check(key, true, "App", "rotina", "");
    assert.equal(store.pointsByKey(key), null, "nobody said who: no points yet");
    home.check(key, true, "App", "rotina", "Andressa");
    assert.equal(store.data.checks[key].by, "Andressa");
    assert.equal(store.pointsByKey(key).who, "Andressa");
    assert.equal(store.pointsByKey(key).points, 10);
    home.check(key, true, "App", "rotina", "Diego");
    assert.equal(store.pointsByKey(key).who, "Diego");
    assert.equal(store.data.score.log.at(-1).type, "trocou");
    assert.equal(sentOf(ha, "calendar/event/update").length, 1, "the event is not moved again");
  });
  it("a calendar that can't change events (Google): the old one deleted, a new one created", async () => {
    const raw = cama();
    const { home, store, ha } = setup({ events: { [CAL]: [raw] }, features: 3 });
    await home.check(keyOf(raw), true, "x", "rotina", "Diego");
    assert.deepEqual(
      ha.sent.map((m) => m.type),
      ["calendar/event/delete", "calendar/event/create"],
    );
    assert.equal(ha.sent[1].event.dtstart, "2026-11-04");
    assert.equal(store.data.checks[keyOf(raw)].moved.recreated, true);
  });
  it("recreated: Desfazer finds the new event by its name and recreates the old date", async () => {
    const raw = cama();
    const { home, store, ha } = setup({ events: { [CAL]: [raw] }, features: 3 });
    const key = keyOf(raw);
    await home.check(key, true, "x", "rotina", "Diego");
    const created = ha.sent[1].event;
    home.tracked.get(CAL).events = [{ uid: "novo-uid", summary: raw.summary, start: created.dtstart, end: created.dtend, description: created.description }];
    ha.sent.length = 0;
    await home.check(key, false, "x", "rotina");
    assert.deepEqual(
      ha.sent.map((m) => [m.type, m.uid || m.event.dtstart]),
      [
        ["calendar/event/delete", "novo-uid"],
        ["calendar/event/create", "2026-11-02"],
      ],
    );
    assert.equal(key in store.data.checks, false);
  });
  it("recreate: a copy already on the new date is reused; a failed create brings the old one back", async () => {
    const raw = cama();
    const twin = { uid: "twin", summary: raw.summary, start: "2026-11-04", end: "2026-11-05", description: AFTER };
    const a = setup({ events: { [CAL]: [raw, twin] }, features: 3 });
    await a.home.check(keyOf(raw), true, "x", "rotina", "Diego");
    assert.deepEqual(
      a.ha.sent.map((m) => m.type),
      ["calendar/event/delete"],
    );
    const b = setup({ events: { [CAL]: [raw] }, features: 3 });
    let creates = 0;
    b.ha.fail = (m) => m.type === "calendar/event/create" && ++creates === 1;
    await assert.rejects(b.home.check(keyOf(raw), true, "x", "rotina", "Diego"));
    assert.deepEqual(
      b.ha.sent.map((m) => [m.type, m.event ? m.event.dtstart : m.uid]),
      [
        ["calendar/event/delete", "cama"],
        ["calendar/event/create", "2026-11-04"],
        ["calendar/event/create", "2026-11-02"],
      ],
    );
    assert.equal(keyOf(raw) in b.store.data.checks, false, "not marked done");
  });
  it("a read-only calendar refuses", async () => {
    const raw = cama();
    const { home } = setup({ events: { [CAL]: [raw] }, features: 1 });
    await assert.rejects(home.check(keyOf(raw), true, "x", "rotina", "Diego"), { code: "not_supported" });
  });
});

describe("Home: Pular", () => {
  it("a calendar routine: skipped, no points, nothing else", async () => {
    const raw = lixo();
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    home.check(keyOf(raw), true, "x", "rotina", "Andressa");
    const out = await home.skip(keyOf(raw), "Diego");
    assert.deepEqual(out, { skipped: true });
    assert.equal(store.data.checks[keyOf(raw)].skipped, true);
    assert.equal(store.pointsByKey(keyOf(raw)), null);
    assert.equal(ha.sent.length, 0);
  });
  it("one that comes back after done goes to due + N (never before today); history untouched; Desfazer keeps the description", async () => {
    const raw = cama({ start: "2026-10-31", end: "2026-11-01" });
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    const key = keyOf(raw);
    const out = await home.skip(key, "Diego");
    assert.deepEqual(out, { skipped: true, moved: true, next: "2026-11-02" });
    const upd = sentOf(ha, "calendar/event/update")[0];
    assert.equal(upd.event.dtstart, "2026-11-02");
    assert.equal(upd.event.description, AFTER, "no Feito em for a skip");
    const c = store.data.checks[key];
    assert.equal(c.skipped, true);
    assert.equal(c.moved.start, "2026-10-31");
    // Desfazer: back to the 31st with the same description
    home.tracked.get(CAL).events = [{ ...raw, start: "2026-11-02", end: "2026-11-03" }];
    await home.check(key, false, "x", "rotina");
    const back = sentOf(ha, "calendar/event/update")[1];
    assert.equal(back.event.dtstart, "2026-10-31");
    assert.equal(back.event.description, AFTER);
    assert.equal(key in store.data.checks, false);
  });
  it("Pular on a calendar that can't change events (Google): recreated on the next date; a read-only one refuses", async () => {
    const raw = cama({ start: "2026-10-31", end: "2026-11-01" });
    const g = setup({ events: { [CAL]: [raw] }, features: 3 });
    const out = await g.home.skip(keyOf(raw), "Diego");
    assert.deepEqual(out, { skipped: true, moved: true, next: "2026-11-02" });
    assert.deepEqual(
      g.ha.sent.map((m) => [m.type, m.uid || m.event.dtstart]),
      [
        ["calendar/event/delete", "cama"],
        ["calendar/event/create", "2026-11-02"],
      ],
    );
    assert.equal(g.store.data.checks[keyOf(raw)].moved.recreated, true);
    const ro = setup({ events: { [CAL]: [raw] }, features: 1 });
    await assert.rejects(ro.home.skip(keyOf(raw), "Diego"), { code: "not_supported" });
    assert.equal(keyOf(raw) in ro.store.data.checks, false, "not marked skipped");
  });
  it("only routines can be skipped", async () => {
    const raw = dose(9, 0);
    const { home } = setup({ events: { [CAL]: [raw] } });
    await assert.rejects(home.skip(keyOf(raw), "x"), { code: "not_found" });
    await assert.rejects(home.skip("nada", "x"), { code: "not_found" });
  });
});

describe("Home: maintenance", () => {
  it("done: moves to today + interval, keeps the location, points by the day, undo possible", async () => {
    const raw = filtro();
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    const out = await home.maintDone(CAL, "filtro", "App", "Diego");
    const day = new Date(NOW).toISOString().slice(0, 10);
    assert.deepEqual(out, { moved: true, next: "2027-05-02", undo: true, key: `maint|${CAL}|filtro|${day}` });
    const [upd] = sentOf(ha, "calendar/event/update");
    assert.equal(upd.event.dtstart, "2027-05-02");
    assert.equal(upd.event.location, "Cozinha");
    const k = parseKind(upd.event.description);
    assert.deepEqual(k.history, ["2026-11-02", "2026-05-07"]);
    assert.equal(k.room, "Cozinha");
    assert.equal(store.pointsByKey(out.key).points, 30);
    // Desfazer
    await home.maintUndo(CAL, "filtro");
    const back = sentOf(ha, "calendar/event/update")[1];
    assert.deepEqual(back.event, { summary: "Trocar o filtro", description: MAINT, location: "Cozinha", dtstart: "2026-11-07", dtend: "2026-11-08" });
    assert.equal(store.pointsByKey(out.key), null);
    await assert.rejects(home.maintUndo(CAL, "filtro"), { code: "not_found" });
  });
  it("undo is only possible for 30 minutes", async () => {
    const { home } = setup({ events: { [CAL]: [filtro()] } });
    await home.maintDone(CAL, "filtro", "App", "Diego");
    mock.timers.tick(30 * 60000 + 1);
    await assert.rejects(home.maintUndo(CAL, "filtro"), { code: "not_found" });
  });
  it("without a participant: moved, no points", async () => {
    const { home, store } = setup({ events: { [CAL]: [filtro()] } });
    const out = await home.maintDone(CAL, "filtro", "App", "Visita");
    assert.equal(out.key, null);
    assert.equal(store.data.score.entries.length, 0);
  });
  it("a repeating maintenance is marked done (not moved)", async () => {
    const raw = filtro({ rrule: "FREQ=MONTHLY", recurrence_id: "20261107" });
    const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
    const out = await home.maintDone(CAL, "filtro", "App", "Diego");
    assert.deepEqual(out, { moved: false, key: keyOf(raw) });
    assert.equal(store.data.checks[keyOf(raw)].kind, "manutencao");
    assert.equal(store.pointsByKey(keyOf(raw)).points, 30);
    assert.equal(sentOf(ha, "calendar/event/update").length, 0);
  });
  it("errors: not found, not a maintenance, read-only calendar", async () => {
    const { home } = setup({ events: { [CAL]: [cama(), filtro()] }, features: 1 });
    await assert.rejects(home.maintDone(CAL, "nada", "x"), { code: "not_found" });
    await assert.rejects(home.maintDone(CAL, "cama", "x"), { code: "invalid_format" });
    await assert.rejects(home.maintDone(CAL, "filtro", "x"), { code: "not_supported" });
  });
  it("Google-like calendar: recreated, no undo", async () => {
    const { home, ha } = setup({ events: { [CAL]: [filtro()] }, features: 3 });
    const out = await home.maintDone(CAL, "filtro", "App", "Diego");
    assert.equal(out.undo, false);
    assert.deepEqual(
      ha.sent.map((m) => m.type),
      ["calendar/event/delete", "calendar/event/create"],
    );
  });
  it(
    "points of a maintenance done on two different days are two entries (late evening, then next morning)",
    async () => {
      mock.timers.setTime(at(2026, 11, 2, 22, 0).getTime());
      const daily = "#manutenção\nQuem faz: Diego\nA cada: 1 dia\nPontos: 5";
      const raw = { uid: "agua", summary: "Trocar a água do pet", start: "2026-11-02", end: "2026-11-03", description: daily };
      const { home, store, ha } = setup({ events: { [CAL]: [raw] } });
      await home.maintDone(CAL, "agua", "App", "Diego");
      const upd = sentOf(ha, "calendar/event/update")[0].event;
      home.tracked.get(CAL).events = [{ ...raw, start: upd.dtstart, end: upd.dtend, description: upd.description }];
      mock.timers.setTime(at(2026, 11, 3, 9, 0).getTime());
      await home.maintDone(CAL, "agua", "App", "Diego");
      assert.equal(store.data.score.entries.length, 2);
      assert.equal(store.data.score.entries.reduce((s, e) => s + e.points, 0), 10);
    },
  );
});

describe("Home: index and phone alerts of doses", () => {
  const people = { Andressa: { notify: "mobile_app_galaxy_s23" } };
  it("rebuild builds the Agora index (doses, routines, maintenance, score) and tells the screens only on a change", () => {
    const { home, changes } = setup({ events: { [CAL]: [dose(9, 0), dose(20, 0), lixo(), filtro()] }, app: { score: SCORE, people } });
    home.rebuild();
    assert.equal(changes.length, 1);
    const ix = changes[0];
    assert.deepEqual(
      ix.meds.map((m) => [m.time, m.state, m.notify]),
      [
        ["09:00", "atrasado", "mobile_app_galaxy_s23"],
        ["20:00", "depois", "mobile_app_galaxy_s23"],
      ],
    );
    assert.equal(ix.routines.length, 1);
    assert.equal(ix.maint[0].summary, "Trocar o filtro");
    assert.deepEqual(ix.tracked, [CAL]);
    assert.equal(ix.score.enabled, true);
    assert.deepEqual(ix.todos, { lists: [], items: [] });
    assert.ok(ix.people.some((p) => p.name === "Andressa"));
    assert.equal("names" in ix, false);
    home.rebuild();
    assert.equal(changes.length, 1, "nothing changed");
    mock.timers.tick(5 * 60000);
    home.rebuild();
    assert.equal(changes.length, 2, "the late minutes of a dose moved");
  });
  it("sends the alert at the time to the person's phone, then the late one to her and the caregivers", async () => {
    const raw = dose(14, 0);
    const { home, store, ha } = setup({ events: { [CAL]: [raw] }, app: { score: SCORE, people, alerts: { late: 30, caregivers: ["mobile_app_pixel_8"] } } });
    const key = keyOf(raw);
    home.rebuild();
    await home.sendAlerts();
    let n = notifications(ha);
    assert.equal(n.length, 1);
    assert.equal(n[0].service, "mobile_app_galaxy_s23");
    assert.equal(n[0].service_data.title, "💊 Sertralina");
    assert.equal(n[0].service_data.message, "Andressa · 1 comprimido · 14:00");
    assert.deepEqual(n[0].service_data.data.actions, [
      { action: `CRONOLOGIA_TOMEI_${hashOf(key)}`, title: "Tomei" },
      { action: `CRONOLOGIA_ADIAR_${hashOf(key)}`, title: "Adiar 15 min" },
    ]);
    assert.equal(n[0].service_data.data.tag, `cronologia-${hashOf(key)}`);
    assert.ok(store.data.sent[key].on);
    // a minute later: nothing new
    mock.timers.tick(60000);
    home.rebuild();
    await home.sendAlerts();
    assert.equal(notifications(ha).length, 1);
    // 30 minutes after: late, to her and the caregiver
    mock.timers.tick(29 * 60000);
    home.rebuild();
    await home.sendAlerts();
    n = notifications(ha);
    assert.deepEqual(
      n.slice(1).map((x) => x.service),
      ["mobile_app_galaxy_s23", "mobile_app_pixel_8"],
    );
    assert.equal(n[1].service_data.title, "⚠️ Sertralina atrasado");
    assert.equal(n[1].service_data.message, "Andressa ainda não tomou o das 14:00 (30 min). Dose: 1 comprimido.");
    assert.deepEqual(store.data.sent[key].targets.sort(), ["mobile_app_galaxy_s23", "mobile_app_pixel_8"]);
    // and never again
    mock.timers.tick(60 * 60000);
    home.rebuild();
    await home.sendAlerts();
    assert.equal(notifications(ha).length, 3);
  });
  it("without the person's phone the caregivers get it; no phone at all: marked, nothing sent", async () => {
    const a = setup({ events: { [CAL]: [dose(14, 0)] }, app: { alerts: { caregivers: ["mobile_app_pixel_8"] } } });
    a.home.rebuild();
    await a.home.sendAlerts();
    assert.deepEqual(
      notifications(a.ha).map((n) => n.service),
      ["mobile_app_pixel_8"],
    );
    const b = setup({ events: { [CAL]: [dose(14, 0)] }, app: {} });
    b.home.rebuild();
    await b.home.sendAlerts();
    assert.equal(notifications(b.ha).length, 0);
    assert.ok(b.store.data.sent[keyOf(dose(14, 0))].on);
  });
  it("no alerts: taken doses, alert off in the model, alerts off in Mais › Avisos, disconnected", async () => {
    const off = dose(14, 0, { uid: "off", description: "#remédio\nQuem toma: Andressa\nAviso no celular: não" });
    const taken = dose(14, 0, { uid: "taken" });
    const a = setup({ events: { [CAL]: [off, taken] }, app: { people } });
    a.store.setCheck(keyOf(taken), { by: "Andressa" });
    a.home.rebuild();
    await a.home.sendAlerts();
    assert.equal(notifications(a.ha).length, 0);
    const b = setup({ events: { [CAL]: [dose(14, 0)] }, app: { people, alerts: { meds: false } } });
    b.home.rebuild();
    await b.home.sendAlerts();
    assert.equal(notifications(b.ha).length, 0);
    const c = setup({ events: { [CAL]: [dose(14, 0)] }, app: { people } });
    c.ha.ready = false;
    c.home.rebuild();
    await c.home.sendAlerts();
    assert.equal(c.ha.sent.length, 0);
  });
  it("late 0: no late alert", async () => {
    const { home, ha } = setup({ events: { [CAL]: [dose(14, 0)] }, app: { people, alerts: { late: 0 } } });
    home.rebuild();
    await home.sendAlerts();
    mock.timers.tick(45 * 60000);
    home.rebuild();
    await home.sendAlerts();
    assert.equal(notifications(ha).length, 1);
  });
  it("the phone buttons: Tomei marks the dose; Adiar sends it again 15 min later", async () => {
    const raw = dose(14, 0);
    const key = keyOf(raw);
    const { home, store, ha } = setup({ events: { [CAL]: [raw] }, app: { people } });
    home.rebuild();
    await home.sendAlerts();
    home.onAction({ action: `CRONOLOGIA_ADIAR_${hashOf(key)}` });
    assert.equal(store.data.sent[key].snooze_until, new Date(NOW + 15 * 60000).toISOString());
    mock.timers.tick(14 * 60000);
    home.rebuild();
    await home.sendAlerts();
    assert.equal(notifications(ha).length, 1);
    mock.timers.tick(60000);
    home.rebuild();
    await home.sendAlerts();
    assert.equal(notifications(ha).length, 2);
    assert.equal(notifications(ha)[1].service_data.title, "💊 Sertralina");
    assert.ok(store.data.sent[key].snoozed);
    assert.equal("snooze_until" in store.data.sent[key], false);
    home.onAction({ action: `CRONOLOGIA_TOMEI_${hashOf(key)}` });
    assert.equal(store.data.checks[key].by, "Andressa (celular)");
    assert.equal(store.data.checks[key].kind, "remedio");
  });
  for (const late of [15, 60]) {
    it(`Avisar de novo ${late} min: the late alert after exactly ${late} minutes, to her and the caregivers`, async () => {
      const raw = dose(14, 0);
      const { home, ha } = setup({ events: { [CAL]: [raw] }, app: { people, alerts: { late, caregivers: ["mobile_app_pixel_8"] } } });
      home.rebuild();
      await home.sendAlerts();
      mock.timers.tick((late - 1) * 60000);
      home.rebuild();
      await home.sendAlerts();
      assert.equal(notifications(ha).length, 1, "only the one at the time");
      mock.timers.tick(60000);
      home.rebuild();
      await home.sendAlerts();
      const n = notifications(ha).slice(1);
      assert.deepEqual(
        n.map((x) => x.service),
        ["mobile_app_galaxy_s23", "mobile_app_pixel_8"],
      );
      assert.match(n[0].service_data.message, new RegExp(`\\(${late} min\\)`));
    });
  }
  it("a dose more than 3 hours past its late alert time gets no alert (an old one, e.g. after a restart)", async () => {
    const raw = dose(9, 0);
    const { home, ha, store } = setup({ events: { [CAL]: [raw] }, app: { people, alerts: { late: 30, caregivers: ["mobile_app_pixel_8"] } } });
    home.rebuild();
    await home.sendAlerts();
    assert.equal(notifications(ha).length, 0, "14:00: five hours after 09:00");
    assert.equal(store.data.sent[keyOf(raw)], undefined);
  });
  it("Adiar for someone without a phone: the alert comes back to the caregivers", async () => {
    const raw = dose(14, 0, { description: "#remédio\nDose: 1/4\nQuem toma: Mimi" });
    const key = keyOf(raw);
    const { home, ha } = setup({ events: { [CAL]: [raw] }, app: { people: { Mimi: { notify: null, pet: true } }, alerts: { late: 0, caregivers: ["mobile_app_pixel_8", "mobile_app_galaxy_s23"] } } });
    home.rebuild();
    await home.sendAlerts();
    assert.deepEqual(
      notifications(ha).map((n) => n.service),
      ["mobile_app_pixel_8", "mobile_app_galaxy_s23"],
    );
    home.onAction({ action: `CRONOLOGIA_ADIAR_${hashOf(key)}` });
    mock.timers.tick(15 * 60000);
    home.rebuild();
    await home.sendAlerts();
    assert.deepEqual(
      notifications(ha)
        .slice(2)
        .map((n) => [n.service, n.service_data.title]),
      [
        ["mobile_app_pixel_8", "💊 Sertralina"],
        ["mobile_app_galaxy_s23", "💊 Sertralina"],
      ],
    );
  });
  it("a phone that fails does not stop the others; the alert counts as sent", async () => {
    const raw = dose(14, 0);
    const { home, ha, store, log } = setup({ events: { [CAL]: [raw] }, app: { people, alerts: { late: 30, caregivers: ["mobile_app_pixel_8"] } } });
    ha.fail = (m) => m.service === "mobile_app_galaxy_s23";
    home.rebuild();
    await home.sendAlerts();
    mock.timers.tick(30 * 60000);
    home.rebuild();
    await home.sendAlerts();
    assert.deepEqual(
      ha.sent.filter((m) => m.domain === "notify").map((m) => m.service),
      ["mobile_app_galaxy_s23", "mobile_app_galaxy_s23", "mobile_app_pixel_8"],
    );
    assert.equal(log.lines.filter(([lv, m]) => lv === "warn" && /Aviso para mobile_app_galaxy_s23 falhou/.test(m)).length, 2);
    assert.ok(store.data.sent[keyOf(raw)].on && store.data.sent[keyOf(raw)].late);
  });
  it("the test alert's Adiar: the phone is told it works; a failed confirmation only warns", async () => {
    const { home, ha, log } = setup();
    await home.onAction({ action: "CRONOLOGIA_TESTE_ADIAR_mobile_app_galaxy_s23" });
    assert.deepEqual(home.lastTest, { target: "mobile_app_galaxy_s23", action: "adiar", at: NOW });
    assert.equal(ha.sent[0].service_data.message, "O botão Adiar chegou ao CronologIA. Num aviso de verdade, ele avisa de novo em 15 minutos.");
    ha.fail = () => true;
    await home.onAction({ action: "CRONOLOGIA_TESTE_TOMEI_mobile_app_pixel_8" });
    assert.equal(home.lastTest.action, "tomei");
    assert.match(log.lines.at(-1)[1], /Confirmação do teste para mobile_app_pixel_8 falhou/);
  });
  it("a button for a dose not found (or a stranger action) is ignored", () => {
    const { home, store, log } = setup();
    home.onAction({ action: "CRONOLOGIA_TOMEI_0123456789" });
    home.onAction({ action: "OUTRA_COISA" });
    home.onAction(null);
    assert.deepEqual(store.data.checks, {});
    assert.equal(log.lines.filter((l) => l[0] === "warn").length, 1);
  });
  it("the test alert round trip: buttons come back and the phone gets a confirmation", async () => {
    const { home, ha } = setup();
    await home.testAlert("mobile_app_pixel_8");
    assert.equal(ha.sent[0].service, "mobile_app_pixel_8");
    assert.deepEqual(
      ha.sent[0].service_data.data.actions.map((a) => a.action),
      ["CRONOLOGIA_TESTE_TOMEI_mobile_app_pixel_8", "CRONOLOGIA_TESTE_ADIAR_mobile_app_pixel_8"],
    );
    await home.onAction({ action: "CRONOLOGIA_TESTE_TOMEI_mobile_app_pixel_8" });
    assert.deepEqual(home.lastTest, { target: "mobile_app_pixel_8", action: "tomei", at: NOW });
    assert.equal(ha.sent[1].service_data.title, "✅ Funcionou");
    await assert.rejects(home.testAlert("notify.x"), { code: "invalid_format" });
  });
});

describe("Home: points from the ResolvIA and automations", () => {
  const key = "resolvia|todo.casa|t1|2026-11-02";
  it("ignored while the ResolvIA integration is off", () => {
    const { home, store } = setup();
    home.onPoints({ chave: key, quem: "Diego", pontos: 10 });
    assert.equal(store.data.score.entries.length, 0);
  });
  it("somar, a repeated somar, trocar and desfazer", () => {
    const { home, store } = setup({ app: { score: SCORE, resolvia_on: true } });
    home.onPoints({ chave: key, quem: "diego", pontos: 10, titulo: "  Passar pano " });
    home.onPoints({ chave: key, quem: "Andressa", pontos: 50 });
    let e = store.pointsByKey(key);
    assert.deepEqual({ who: e.who, points: e.points, title: e.title, kind: e.kind }, { who: "Diego", points: 10, title: "Passar pano", kind: "tarefa" });
    home.onPoints({ acao: "trocar", chave: key, quem: "Andressa" });
    assert.equal(store.pointsByKey(key).who, "Andressa");
    home.onPoints({ acao: "desfazer", chave: key });
    assert.equal(store.pointsByKey(key), null);
  });
  it("refuses bad keys, people off the placar and points out of range", () => {
    const { home, store, log } = setup({ app: { score: SCORE, resolvia_on: true } });
    home.onPoints({ chave: "resolvia|todo.casa|t1", quem: "Diego", pontos: 10 });
    home.onPoints({ chave: key, quem: "Visita", pontos: 10 });
    home.onPoints({ chave: key, quem: "Diego", pontos: 0 });
    home.onPoints({ chave: key, quem: "Diego", pontos: 1001 });
    home.onPoints({ chave: key, quem: "Diego" });
    assert.equal(store.data.score.entries.length, 0);
    assert.equal(log.lines.filter((l) => l[0] === "warn").length, 2);
  });
  it("espelho keys go to Levar para o ResolvIA with the participant's name", async () => {
    const { home } = setup({ app: { score: SCORE, resolvia_on: true } });
    const calls = [];
    home.mirror = { onPoints: async (...a) => calls.push(a) };
    home.onPoints({ chave: "espelho|todo.casa|t9", quem: "andressa" });
    home.onPoints({ acao: "desfazer", chave: "espelho|todo.casa|t9" });
    home.onPoints({ chave: "espelho|todo.casa|t9", quem: "Visita" });
    assert.deepEqual(calls, [
      ["somar", "todo.casa", "t9", "Andressa"],
      ["desfazer", "todo.casa", "t9", ""],
    ]);
  });
  it("the Extrato says it came from the ResolvIA and who", () => {
    const { home, store } = setup({ app: { score: SCORE, resolvia_on: true } });
    asActor({ by: "Diego", via: "ResolvIA" }, () => home.onPoints({ chave: key, quem: "Diego", pontos: 10 }));
    assert.equal(store.data.score.log[0].via, "ResolvIA");
    assert.equal(store.data.score.log[0].by, "Diego");
  });
  it("todoPoints: a task marked here uses the same key as the ResolvIA (local day)", () => {
    const { home, store } = setup();
    const out = home.todoPoints("todo.casa", "t1", "Passar pano", 15, true, "Andressa");
    assert.deepEqual(out, { key, who: "Andressa", points: 15 });
    assert.equal(home.todoPoints("todo.casa", "t1", "Passar pano", 15, true, "Andressa"), null, "once a day");
    assert.equal(home.todoPoints("todo.casa", "t2", "x", 0, true, "Andressa"), null);
    assert.equal(home.todoPoints("todo.casa", "t2", "x", 5, true, "Visita"), null);
    home.todoPoints("todo.casa", "t1", "Passar pano", 15, false, "Andressa");
    assert.equal(store.pointsByKey(key), null);
  });
  it("cronologia_feito: a maintenance by its name is done", async () => {
    const { home, ha } = setup({ events: { [CAL]: [filtro()] } });
    await home.onFeito({ nome: "trocar o FILTRO", quem: "Diego" });
    assert.equal(sentOf(ha, "calendar/event/update")[0].uid, "filtro");
  });
  it("cronologia_feito: the open one of today closest to now, the person's own first", () => {
    const morning = { uid: "m", summary: "Regar", start: "2026-11-02T08:00:00-03:00", end: "2026-11-02T08:30:00-03:00", description: "#rotina\nQuem faz: Diego" };
    const afternoon = { uid: "a", summary: "Regar", start: "2026-11-02T15:00:00-03:00", end: "2026-11-02T15:30:00-03:00", description: "#rotina\nQuem faz: Diego" };
    const hers = { uid: "h", summary: "Regar", start: "2026-11-02T08:00:00-03:00", end: "2026-11-02T08:30:00-03:00", description: "#rotina\nQuem faz: Andressa" };
    const tomorrow = { uid: "t", summary: "Regar", start: "2026-11-03T14:00:00-03:00", end: "2026-11-03T14:30:00-03:00", description: "#rotina\nQuem faz: Diego" };
    const { home, store } = setup({ events: { [CAL]: [morning, afternoon, hers, tomorrow] } });
    home.onFeito({ nome: "Regar" });
    assert.deepEqual(Object.keys(store.data.checks), [keyOf(afternoon)]);
    home.onFeito({ nome: "Regar", quem: "Andressa" });
    assert.ok(keyOf(hers) in store.data.checks);
    assert.equal(store.data.checks[keyOf(hers)].by, "Andressa");
    home.onFeito({ nome: "Regar" });
    assert.ok(keyOf(morning) in store.data.checks);
    home.onFeito({ nome: "Regar" });
    assert.equal(Object.keys(store.data.checks).length, 3, "nothing open left today");
  });
  it("cronologia_feito with an unknown or empty name only warns", () => {
    const { home, store, log } = setup({ events: { [CAL]: [lixo()] } });
    home.onFeito({ nome: "Nada disso" });
    home.onFeito({});
    assert.deepEqual(store.data.checks, {});
    assert.equal(log.lines.length, 1);
  });
});

describe("Home: extra points, demerits, removing and restoring", () => {
  it("extraPoints validates who, points and what", () => {
    const { home, store } = setup();
    home.extraPoints("diego", "12", " Lavou o carro ");
    const e = store.data.score.entries[0];
    assert.deepEqual({ who: e.who, points: e.points, title: e.title, kind: e.kind }, { who: "Diego", points: 12, title: "Lavou o carro", kind: "extra" });
    assert.match(e.key, /^extra\|/);
    assert.throws(() => home.extraPoints("Visita", 5, "x"), { code: "invalid_format" });
    assert.throws(() => home.extraPoints("Diego", 0, "x"), { code: "invalid_format" });
    assert.throws(() => home.extraPoints("Diego", 1001, "x"), { code: "invalid_format" });
    assert.throws(() => home.extraPoints("Diego", 5, "  "), { code: "invalid_format" });
  });
  it("demerit from the list, by id or by its name (cronologia_demerito)", () => {
    const { home, store, log } = setup({ app: { score: SCORE, demerits: [{ id: "toalha", title: "Toalha molhada na cama", points: 5 }] } });
    const out = home.demerit("toalha", "Andressa");
    assert.equal(out.points, -5);
    assert.equal(store.pointsByKey(out.key).kind, "demerito");
    home.onDemerit({ nome: "toalha molhada na CAMA", quem: "diego" });
    assert.equal(store.data.score.entries.filter((e) => e.who === "Diego")[0].points, -5);
    home.onDemerit({ nome: "Outro" });
    home.onDemerit({ nome: "Toalha molhada na cama", quem: "Visita" });
    assert.equal(store.data.score.entries.length, 2);
    assert.equal(log.lines.filter((l) => l[0] === "warn").length, 2);
    assert.throws(() => home.demerit("nada", "Diego"), { code: "not_found" });
  });
  it("on vacation (Modo férias) the deméritos are paused: from the app and from an automation", () => {
    const { home, store, log } = setup({ app: { score: SCORE, demerits: [{ id: "toalha", title: "Toalha molhada na cama", points: 5 }], away: { from: "2026-11-01", to: "2026-11-05" } } });
    assert.throws(() => home.demerit("toalha", "Andressa"), { code: "away", message: /De férias/ });
    home.onDemerit({ nome: "Toalha molhada na cama", quem: "Diego" });
    assert.equal(store.data.score.entries.length, 0);
    assert.match(log.lines.at(-1)[1], /De férias/);
    assert.throws(() => home.extraPoints("Diego", 10, "Lavou o carro"), { code: "away" }, "no points by hand either");
    // after the vacation, again
    store.setApp({ away: { from: "2026-10-20", to: "2026-11-01" } });
    assert.equal(home.demerit("toalha", "Andressa").points, -5);
    home.extraPoints("Diego", 10, "Lavou o carro");
  });
  it("removePoints keeps the entry 10 minutes for Desfazer (with its date)", () => {
    const { home, store } = setup();
    home.extraPoints("Diego", 7, "Ajudou");
    const e = store.data.score.entries[0];
    home.removePoints(e.key);
    assert.equal(store.pointsByKey(e.key), null);
    assert.equal(store.data.score.log.at(-1).type, "tirou");
    mock.timers.tick(5 * 60000);
    home.restorePoints(e.key);
    assert.deepEqual(store.pointsByKey(e.key), e);
    assert.equal(store.data.score.log.at(-1).type, "voltou");
    assert.throws(() => home.restorePoints(e.key), { code: "not_found" }, "only once");
    home.removePoints(e.key);
    mock.timers.tick(10 * 60000 + 1);
    assert.throws(() => home.restorePoints(e.key), { code: "not_found" });
    assert.throws(() => home.removePoints("nada"), { code: "not_found" });
  });
  it("reassign moves the points and the check to another participant", () => {
    const raw = lixo();
    const { home, store } = setup({ events: { [CAL]: [raw] } });
    home.check(keyOf(raw), true, "x", "rotina", "Diego");
    home.reassign(keyOf(raw), "andressa");
    assert.equal(store.pointsByKey(keyOf(raw)).who, "Andressa");
    assert.equal(store.data.checks[keyOf(raw)].by, "Andressa");
    assert.throws(() => home.reassign(keyOf(raw), "Visita"), { code: "invalid_format" });
  });
});

describe("Home: the placar", () => {
  const app = { score: { ...SCORE, notify: true }, people: { Diego: { notify: "mobile_app_pixel_8" }, Andressa: { notify: "mobile_app_galaxy_s23" } } };
  const put = (store, who, points, when) => store.addPoints({ key: `k${Math.random()}`, who, points, title: "t", kind: "extra", at: when.toISOString() });

  it("the first time only starts the current period", async () => {
    const { home, store } = setup({ app });
    await home.rollover();
    assert.deepEqual(store.data.score.current, { key: "2026-11-02", start: "2026-11-02", end: "2026-11-09" });
    assert.equal(store.data.score.history.length, 0);
  });
  it("a new week closes the last one: winner, the winner's own prize, phones told", async () => {
    const { home, store, ha } = setup({ app });
    store.setCurrentPeriod({ key: "2026-10-26", start: "2026-10-26", end: "2026-11-02" });
    put(store, "Diego", 30, at(2026, 10, 28));
    put(store, "Andressa", 10, at(2026, 10, 29));
    put(store, "Andressa", 100, at(2026, 11, 2, 9)); // this week already
    store.setPrizes("2026-10-26", "Pizza", { Diego: "Cinema" });
    store.setPrizes("2026-11-02", "Sorvete", { Andressa: "Massagem" });
    await home.rollover();
    const h = store.data.score.history[0];
    assert.deepEqual(h, { key: "2026-10-26", start: "2026-10-26", end: "2026-11-02", totals: { Diego: 30, Andressa: 10 }, winner: "Diego", reward: "Cinema", delivered: false });
    assert.equal(store.data.score.current.key, "2026-11-02");
    const n = notifications(ha);
    assert.deepEqual(
      n.map((x) => x.service),
      ["mobile_app_pixel_8", "mobile_app_galaxy_s23"],
    );
    assert.equal(n[0].service_data.title, "🏆 Placar fechado");
    assert.equal(n[0].service_data.message, "Diego venceu: 30 × 10. Prêmio: Cinema. Prêmio agora: Diego: Sorvete · Andressa: Massagem.");
    await home.rollover();
    assert.equal(store.data.score.history.length, 1, "closed once");
  });
  it("a tie and a week nobody scored", async () => {
    const a = setup({ app });
    a.store.setCurrentPeriod({ key: "2026-10-26", start: "2026-10-26", end: "2026-11-02" });
    put(a.store, "Diego", 10, at(2026, 10, 28));
    put(a.store, "Andressa", 10, at(2026, 10, 29));
    await a.home.rollover();
    assert.equal(a.store.data.score.history[0].winner, null);
    assert.equal(notifications(a.ha)[0].service_data.message, "Empate: 10 × 10.");
    const b = setup({ app: { ...app, score: { ...SCORE, notify: false } } });
    b.store.setCurrentPeriod({ key: "2026-10-26", start: "2026-10-26", end: "2026-11-02" });
    await b.home.rollover();
    assert.equal(b.store.data.score.history.length, 1);
    assert.equal(notifications(b.ha).length, 0, "notify off");
  });
  it("nothing when the placar is off", async () => {
    const { home, store } = setup({ app: {} });
    await home.rollover();
    assert.equal(store.data.score.current, null);
  });
  it("scoreIndex: this period's rows, leader, entries, Extrato and the next period's prize", () => {
    const { home, store } = setup({ app });
    put(store, "Diego", 5, at(2026, 11, 2, 9));
    put(store, "Andressa", 8, at(2026, 11, 2, 10));
    put(store, "Andressa", 50, at(2026, 10, 30));
    store.setPrizes("2026-11-09", "Praia", {});
    const s = home.scoreIndex(NOW);
    assert.equal(s.current.key, "2026-11-02");
    assert.equal(s.next.key, "2026-11-09");
    assert.equal(s.next.reward, "Praia");
    assert.deepEqual(
      s.rows.map((r) => [r.name, r.points]),
      [
        ["Andressa", 8],
        ["Diego", 5],
      ],
    );
    assert.equal(s.leader, "Andressa");
    assert.equal(s.entries.length, 2);
    assert.equal(s.entries[0].who, "Andressa", "newest first");
    assert.equal(s.log_count, 3, "the Extrato is by when the change happened (all three today)");
  });
  it("resetPeriod sets the current period from the settings", () => {
    const { home, store } = setup({ app: { score: { ...SCORE, period: "mes" } } });
    home.resetPeriod();
    assert.deepEqual(store.data.score.current, { key: "2026-11-01", start: "2026-11-01", end: "2026-12-01" });
  });
  it("placarInfo: on, who plays and which HA user is which player", () => {
    const { home } = setup({ app, persons: [{ id: "person.diego", name: "Diego", user_id: "u-diego", trackers: [] }, { id: "person.zeca", name: "Zeca", user_id: "u-zeca", trackers: [] }] });
    assert.deepEqual(home.placarInfo(), { ativo: true, periodo: "semana", participantes: ["Diego", "Andressa"], usuarios: { "u-diego": "Diego" } });
    const off = setup({ app: {} });
    assert.deepEqual(off.home.placarInfo(), { ativo: false, periodo: "semana", participantes: [], usuarios: {} });
  });
  it("scoreLog: from/to as days, limits", () => {
    const { home, store } = setup();
    for (let i = 0; i < 5; i++) home.extraPoints("Diego", 1, `x${i}`);
    assert.equal(home.scoreLog(0, 2).length, 2);
    assert.equal(home.scoreLog(0, 500).length, 5);
    assert.equal(home.scoreLog(0, 40, "2026-11-03", "2026-11-10").length, 0);
    assert.equal(home.scoreLog(0, 40, "2026-11-02", "2026-11-03").length, 5);
    assert.equal(home.scoreLog(0, 40, "bad", "bad").length, 5);
    assert.equal(home.scoreLog(store.data.score.log[2].id, 40).length, 2);
  });
});

describe("Home: Trazer do ResolvIA", () => {
  const makeTodos = (items, app = {}) => {
    const t = new Todos({ ha: { subscribe: () => ({ unsubscribe() {} }), send: async () => null }, log: makeLog(), onChange: () => {}, readApp: () => ({ app: "ResolvIA", gravado_em: new Date(NOW).toISOString(), ...app }) });
    t.states.set("todo.casa", { attributes: { friendly_name: "Casa", supported_features: 127 } });
    t.items.set("todo.casa", items);
    t.setDone = async (...a) => (t.reopened = (t.reopened || []).concat([a]));
    t.refresh = () => (t.refreshed = true);
    return t;
  };
  const items = [
    { uid: "a", summary: "Passar pano", status: "needs_action", due: "2026-10-30", description: "Com cera" },
    { uid: "b", summary: "Pagar conta", status: "needs_action", due: "2026-10-30" },
    { uid: "c", summary: "Regar", status: "completed" },
    { uid: "d", summary: "Concluída sem repetir", status: "completed" },
    { uid: "e", summary: "Ligar", status: "needs_action", due: "2026-11-05T09:30:00-03:00" },
    { uid: "f", summary: "Tirar o lixo", status: "needs_action" },
    { uid: "g", summary: "Do espelho", status: "needs_action", description: "x [cr:0a1b2c3d]" },
    { uid: "h", summary: "  ", status: "needs_action" },
  ];
  const app = { pontos: { "todo.casa": { "passar pano": 15 } }, repete: { "todo.casa": { a: 7, c: 2, f: 400 } } };

  it("bringPreview: the routines that would come out, with points, repetition and first date", () => {
    const todos = makeTodos(items, app);
    const { home } = setup({ app: { score: SCORE, resolvia_on: true }, todos, events: { [CAL]: [lixo()] } });
    const p = home.bringPreview("todo.casa");
    assert.equal(p.name, "Casa");
    assert.equal(p.canDelete, true);
    assert.deepEqual(
      p.items.map((i) => [i.uid, i.every, i.date, i.time, i.done, i.exists, i.points]),
      [
        ["c", 2, "2026-11-04", null, true, false, 0],
        ["a", 7, "2026-10-30", null, false, false, 15],
        ["f", 365, "2026-11-02", null, false, true, 0],
        ["e", null, "2026-11-05", "09:30", false, false, 0],
        ["b", null, "2026-11-02", null, false, false, 0],
      ],
    );
    assert.equal(p.items[1].notes, "Com cera");
  });
  it("bringPreview needs the integration on and the list", () => {
    assert.throws(() => setup({ todos: makeTodos(items) }).home.bringPreview("todo.casa"), { code: "resolvia_off" });
    assert.throws(() => setup({ app: { resolvia_on: true }, todos: makeTodos(items) }).home.bringPreview("todo.nada"), { code: "not_found" });
  });
  it("bring: one routine per chosen task, then the tasks leave the list (done ones reopened first)", async () => {
    const todos = makeTodos(items, app);
    const { home, ha } = setup({ app: { score: SCORE, resolvia_on: true }, todos });
    const p = home.bring({ entity_id: "todo.casa", calendar: CAL, uids: ["a", "c", "e", "zzz"] });
    await flushPromises(20);
    mock.timers.tick(1200);
    const out = await p;
    assert.deepEqual(out, { created: 3, removed: 3, calendar: CAL });
    const created = sentOf(ha, "calendar/event/create").map((m) => m.event);
    assert.deepEqual(
      created.map((e) => [e.summary, e.dtstart, e.dtend]),
      [
        ["Regar", "2026-11-04", "2026-11-05"],
        ["Passar pano", "2026-10-30", "2026-10-31"],
        ["Ligar", "2026-11-05T09:30:00-03:00", "2026-11-05T10:00:00-03:00"],
      ],
    );
    assert.deepEqual(parseKind(created[1].description), { kind: "rotina", notes: "Com cera", who: "", points: 15, period: "", after: { n: 7, unit: "dias" }, history: [], rooms: [], equips: [], room: "", equip: "" });
    assert.equal(parseKind(created[2].description).after, null, "a task that doesn't repeat: only once");
    assert.deepEqual(todos.reopened, [["todo.casa", "c", false]]);
    const rm = ha.sent.find((m) => m.service === "remove_item");
    assert.deepEqual(rm.service_data, { item: ["c", "a", "e"] });
    const forget = ha.sent.find((m) => m.type === "fire_event");
    assert.equal(forget.event_type, "resolvia_esquecer");
    assert.deepEqual(forget.event_data.uids, ["c", "a", "e"]);
    assert.equal(todos.refreshed, true);
  });
  it("bring refuses a calendar that can't create, or no task chosen", async () => {
    const todos = makeTodos(items, app);
    const { home } = setup({ app: { resolvia_on: true }, todos, events: { "calendar.ro": [] }, features: { [CAL]: 7, "calendar.ro": 0 } });
    await assert.rejects(home.bring({ entity_id: "todo.casa", calendar: "calendar.ro", uids: ["a"] }), { code: "not_supported" });
    await assert.rejects(home.bring({ entity_id: "todo.casa", calendar: CAL, uids: [] }), { code: "invalid_format" });
  });
  it("bring with remove false keeps the tasks", async () => {
    const todos = makeTodos(items, app);
    const { home, ha } = setup({ app: { resolvia_on: true }, todos });
    const out = await home.bring({ entity_id: "todo.casa", calendar: CAL, uids: ["b"], remove: false });
    assert.deepEqual(out, { created: 1, removed: 0, calendar: CAL });
    assert.equal(ha.sent.some((m) => m.service === "remove_item"), false);
  });
});

describe("Home: sensors and finding calendars with models (fetch stubbed)", () => {
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });
  it("a sensor Home Assistant refuses: warned, and sent again next time", async () => {
    const { home, log } = setup({ events: { [CAL]: [dose(15, 0)] }, app: { sensors_on: true } });
    home.token = "t";
    const posts = [];
    globalThis.fetch = async (url, opts) => (posts.push([url, opts.method]), { ok: false, status: 500 });
    home.rebuild();
    await flushPromises(10);
    assert.deepEqual(posts[0], ["http://ha/api/states/sensor.cronologia_remedios_hoje", "POST"]);
    assert.equal(posts.length, 1, "stops at the first failure");
    assert.match(log.lines.find(([lv]) => lv === "warn")[1], /Sensor sensor\.cronologia_remedios_hoje: HTTP 500/);
    assert.equal(home.sensorsJson, "");
    globalThis.fetch = async (url, opts) => (posts.push([url, opts.method]), { ok: true });
    await home.publishSensors();
    assert.equal(posts.length, 1 + 3, "all three sent the next time");
  });
  it("removing the sensors with Home Assistant offline does not fail", async () => {
    const { home } = setup();
    home.token = "t";
    home.sensorsJson = "{}";
    const deletes = [];
    globalThis.fetch = async (url, opts) => {
      deletes.push([url.split("/").pop(), opts.method]);
      throw new Error("ECONNREFUSED");
    };
    await home.removeSensors();
    assert.deepEqual(
      deletes.map((d) => d[0]),
      ["sensor.cronologia_remedios_hoje", "binary_sensor.cronologia_remedio_atrasado", "sensor.cronologia_manutencoes_vencidas", "sensor.cronologia_placar"],
    );
    assert.ok(deletes.every((d) => d[1] === "DELETE"));
    assert.equal(home.sensorsJson, "");
  });
  it("discover: a calendar offline or refusing is skipped; one with a model starts being followed", async () => {
    const { home, store } = setup({ events: { "calendar.offline": [], "calendar.erro": [], "calendar.modelos": [], "calendar.vazio": [] } });
    for (const id of ["calendar.offline", "calendar.erro", "calendar.modelos", "calendar.vazio"]) home.tracked.delete(id);
    globalThis.fetch = async (url) => {
      if (url.includes("calendar.offline")) throw new Error("timeout");
      if (url.includes("calendar.erro")) return { ok: false, status: 500 };
      const list = url.includes("calendar.modelos") ? [{ summary: "Regar", description: "#rotina\nPontos: 5" }] : [{ summary: "Festa" }];
      return { ok: true, json: async () => list };
    };
    await home.discover();
    assert.deepEqual(store.data.kind_cals, ["calendar.modelos"]);
    assert.ok(home.tracked.has("calendar.modelos"));
    assert.equal(home.tracked.has("calendar.offline") || home.tracked.has("calendar.erro") || home.tracked.has("calendar.vazio"), false);
  });
});

describe("Home: occurrences and lookups", () => {
  it("occurrences yields only model events, with key, start and allDay", () => {
    const { home } = setup({ events: { [CAL]: [cama(), { uid: "p", summary: "Plain", start: "2026-11-02", end: "2026-11-03" }, dose(9, 0)] } });
    const occs = [...home.occurrences()];
    assert.deepEqual(
      occs.map((o) => [o.raw.uid, o.allDay, o.k.kind]),
      [
        ["cama", true, "rotina"],
        ["dose-90", false, "remedio"],
      ],
    );
    assert.equal(occs[0].key, `${CAL}|cama|2026-11-02`);
    assert.equal(occs[0].start, at(2026, 11, 2).getTime());
    assert.equal(occs[1].start, at(2026, 11, 2, 9).getTime());
    assert.equal(home.findOccurrence(occs[1].key).raw.uid, "dose-90");
    assert.equal(home.findOccurrence("nada"), null);
  });
  it("noteCalendar follows a calendar with models once and remembers it", () => {
    const { home, store, ha } = setup();
    let subs = 0;
    ha.subscribe = () => (subs++, { unsubscribe() {} });
    home.noteCalendar("calendar.novo");
    home.noteCalendar("calendar.novo");
    assert.equal(subs, 1);
    assert.deepEqual(store.data.kind_cals, ["calendar.novo"]);
    assert.ok(home.tracked.has("calendar.novo"));
  });
  it("lateMaintPoints: points of a maintenance done from the ResolvIA when the name came late", () => {
    const { home, store } = setup({ events: { [CAL]: [filtro()] } });
    home.lateMaintPoints("maint|k", CAL, "filtro", "", "Diego");
    assert.equal(store.pointsByKey("maint|k").points, 30);
    assert.equal(store.pointsByKey("maint|k").title, "Trocar o filtro");
    home.lateMaintPoints("maint|k", CAL, "filtro", "", "Andressa");
    assert.equal(store.pointsByKey("maint|k").who, "Diego", "only once");
    home.lateMaintPoints("maint|z", CAL, "filtro", "", "Visita");
    assert.equal(store.pointsByKey("maint|z"), null);
  });
  it("buildDescription is what Trazer writes (sanity of the shared model)", () => {
    assert.equal(buildDescription({ kind: "rotina", who: "", points: 15, notes: "x", after: { n: 7, unit: "dias" }, history: [] }), "#rotina\nPontos: 15\nVolta: 7 dias depois de feita\nx");
  });
});

// ------------------------------------------------------------------ Lembrete do placar (1.48)

describe("Home: the daily reminder of the placar", () => {
  const people = { Diego: { notify: "mobile_app_pixel_8" }, Andressa: { notify: "mobile_app_galaxy_s23" } };
  const app = (extra = {}) => ({ score: { ...SCORE, remind: "20:00", ...extra }, people });
  const put = (store, who, points, when = at(2026, 11, 2, 9)) => store.addPoints({ key: `k${Math.random()}`, who, points, title: "t", kind: "extra", at: when.toISOString() });

  it("once a day at the time, to everyone who plays; tapping it opens Recompensas (same tag/group/channel)", async () => {
    const { home, store, ha } = setup({ app: app() });
    put(store, "Diego", 135);
    put(store, "Andressa", 125);
    await home.scoreReminder(at(2026, 11, 2, 19, 59));
    assert.equal(notifications(ha).length, 0, "not before the time");
    await home.scoreReminder(at(2026, 11, 2, 20, 0));
    const n = notifications(ha);
    assert.deepEqual(n.map((x) => x.service), ["mobile_app_pixel_8", "mobile_app_galaxy_s23"]);
    assert.equal(n[0].service_data.title, "🏆 Placar");
    assert.equal(n[0].service_data.message, "Diego na frente por 10 pontos: Diego 135 × Andressa 125. Fecha em 7 dias.");
    assert.deepEqual([n[0].service_data.data.tag, n[0].service_data.data.group, n[0].service_data.data.channel], ["cronologia-placar-lembrete", "cronologia-placar", "Placar"]);
    await home.scoreReminder(at(2026, 11, 2, 20, 30));
    assert.equal(notifications(ha).length, 2, "once a day");
    await home.scoreReminder(at(2026, 11, 3, 20, 1));
    assert.equal(notifications(ha).length, 4, "and again the next day");
  });
  it("up to 2 h late (a restart), not later; off, no placar or on vacation: nothing", async () => {
    const a = setup({ app: app() });
    await a.home.scoreReminder(at(2026, 11, 2, 22, 30));
    assert.equal(notifications(a.ha).length, 0, "too late today");
    await a.home.scoreReminder(at(2026, 11, 2, 21, 50));
    assert.equal(notifications(a.ha).length, 2, "late, but within 2 h");
    for (const extra of [{ remind: null }, { enabled: false }]) {
      const b = setup({ app: app(extra) });
      await b.home.scoreReminder(at(2026, 11, 2, 20, 5));
      assert.equal(notifications(b.ha).length, 0);
    }
    const c = setup({ app: { ...app(), away: { from: "2026-11-01", to: "2026-11-05" } } });
    await c.home.scoreReminder(at(2026, 11, 2, 20, 5));
    assert.equal(notifications(c.ha).length, 0, "the points rest on vacation");
  });
  it("the words: a tie, nobody yet, one player, closing today", () => {
    const a = setup({ app: app() });
    assert.equal(a.home.scoreReminderText(at(2026, 11, 2, 20)).message, "Ninguém pontuou ainda. Fecha em 7 dias.");
    put(a.store, "Diego", 10);
    put(a.store, "Andressa", 10);
    assert.equal(a.home.scoreReminderText(at(2026, 11, 2, 20)).message, "Empate: Diego 10 × Andressa 10. Fecha em 7 dias.");
    put(a.store, "Andressa", 1);
    assert.equal(a.home.scoreReminderText(at(2026, 11, 8, 20)).message, "Andressa na frente por 1 ponto: Andressa 11 × Diego 10. Fecha hoje à meia-noite.");
    const b = setup({ app: app({ participants: ["Diego"] }) });
    put(b.store, "Diego", 5);
    assert.equal(b.home.scoreReminderText(at(2026, 11, 2, 20)).message, "Diego: 5 pontos. Fecha em 7 dias.");
  });
  it("Testar: now, to one phone (a valid one)", async () => {
    const { home, ha } = setup({ app: app() });
    await home.testScoreReminder("mobile_app_pixel_8");
    const n = notifications(ha);
    assert.deepEqual([n.length, n[0].service, n[0].service_data.data.tag], [1, "mobile_app_pixel_8", "cronologia-placar-teste"]);
    await assert.rejects(home.testScoreReminder("notify.algo; rm"), { code: "invalid_format" });
  });
  it("the placar keeps the time (HH:MM), anything else turns it off", () => {
    const { store } = setup({ app: app() });
    assert.equal(store.data.app.score.remind, "20:00");
    store.setApp({ score: { ...SCORE, remind: "25:00" } });
    assert.equal(store.data.app.score.remind, null);
    store.setApp({ score: { ...SCORE, remind: "07:30" } });
    assert.equal(store.data.app.score.remind, "07:30");
  });
});
