// mirror.js: Levar para o ResolvIA — maintenance and routines kept as tasks in a
// to-do list, with a tiny fake Home Assistant, store, todos and home.
import { at, isoLocal, makeLog, flushPromises } from "./helpers.mjs";
import { describe, it, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { Mirror, MARK_RE } from "../cronologia/rootfs/app/lib/mirror.js";

const NOW = at(2026, 11, 2, 14, 0).getTime();
const ALL = 127;
const LIST = "todo.casa";
const tagOf = (src) => crypto.createHash("sha1").update(src).digest("hex").slice(0, 8);
afterEach(() => mock.timers.reset());

const maintItem = (extra = {}) => ({ key: "calendar.casa|filtro|2026-11-07", cal: "calendar.casa", uid: "filtro", summary: "Trocar o filtro", due: "2026-11-07", points: 30, notes: "Refil X", repeating: false, room: "Cozinha", equip: "Filtro de água", ...extra });
/** An occurrence as Home.occurrences() yields it. */
const occ = (summary, start, k, extra = {}) => {
  const allDay = typeof start === "string";
  const raw = { uid: extra.uid || `u-${summary}`, summary, start: allDay ? start : isoLocal(start), ...extra.raw };
  const ms = allDay ? new Date(`${start}T00:00:00`).getTime() : start.getTime();
  return { cal: "calendar.casa", raw, k: { kind: "rotina", points: 0, notes: "", ...k }, key: extra.key || `calendar.casa|${raw.uid}|${raw.recurrence_id || raw.start}`, start: ms, allDay };
};

function setup({ mirror = { list: LIST, maint: true, routine: true }, features = ALL, items = [], maint = [], occurrences = [], checks = {}, enabled = true, app = null, points = {} } = {}) {
  const store = {
    data: { app: { mirror }, mirror: {}, checks },
    saves: 0,
    save() {
      this.saves++;
    },
    pointsByKey: (k) => points[k] || null,
  };
  const todos = {
    states: new Map(features == null ? [] : [[LIST, { attributes: { supported_features: features } }]]),
    items: new Map(items == null ? [] : [[LIST, items]]),
    app: () => app,
    refreshed: 0,
    refresh() {
      this.refreshed++;
    },
  };
  const home = {
    index: { maint },
    occurrences: () => occurrences,
    calls: [],
    maintResult: { moved: true },
    check(...a) {
      this.calls.push(["check", ...a]);
    },
    async maintDone(...a) {
      this.calls.push(["maintDone", ...a]);
      return this.maintResult;
    },
    async maintUndo(...a) {
      this.calls.push(["maintUndo", ...a]);
    },
    lateMaintPoints(...a) {
      this.calls.push(["lateMaintPoints", ...a]);
    },
    reassign(...a) {
      this.calls.push(["reassign", ...a]);
    },
  };
  const ha = {
    sent: [],
    async send(m) {
      this.sent.push(m);
      return null;
    },
  };
  let changes = 0;
  const m = new Mirror({ ha, store, todos, home, log: makeLog(), onChange: () => changes++, enabled: () => enabled });
  m.scheduled = [];
  m.schedule = (ms) => m.scheduled.push(ms); // no timers: the tests call sync() themselves
  return { m, ha, store, todos, home, changes: () => changes };
}
const services = (ha) => ha.sent.filter((s) => s.type === "call_service").map((s) => [s.service, s.service_data]);

describe("Mirror: settings and what should be in the list", () => {
  it("settings come from the app; off: nothing is wanted", () => {
    const { m } = setup({ enabled: false });
    assert.deepEqual(m.settings(), { list: LIST, maint: true, routine: true });
    assert.deepEqual(m.active(), { list: null, maint: false, routine: false });
    assert.deepEqual(setup({ mirror: null }).m.settings(), { list: null, maint: false, routine: false });
  });
  it("desired: one per maintenance (all-day, at its due) and per routine series", () => {
    const daily = (day) => occ("Regar", day, { who: "Diego", points: 5, notes: "Só as da varanda" }, { uid: "regar", raw: { rrule: "FREQ=DAILY", recurrence_id: day.replace(/-/g, "") } });
    const { m } = setup({
      maint: [maintItem(), maintItem({ uid: null }), maintItem({ uid: "x", due: "" })],
      occurrences: [daily("2026-11-01"), daily("2026-11-02"), daily("2026-11-03"), occ("Lixo", at(2026, 11, 4, 19), { points: 10 }, { uid: "lixo" })],
      checks: { "calendar.casa|regar|20261102": { at: "x" } },
    });
    const want = m.desired(NOW);
    assert.deepEqual([...want.keys()].sort(), ["maint|calendar.casa|filtro", "rotina|calendar.casa|lixo", "rotina|calendar.casa|regar"]);
    const f = want.get("maint|calendar.casa|filtro");
    assert.deepEqual(f, { src: "maint|calendar.casa|filtro", type: "manutencao", cal: "calendar.casa", evUid: "filtro", summary: "Trocar o filtro", dueKey: "2026-11-07", allDay: true, points: 30, notes: "Refil X", occKey: "calendar.casa|filtro|2026-11-07", rrule: false, room: "Cozinha", equip: "Filtro de água" });
    const r = want.get("rotina|calendar.casa|regar");
    assert.equal(r.dueKey, "2026-11-03", "today's is done: the next one not done");
    assert.equal(r.points, 5);
    assert.equal(r.notes, "Só as da varanda");
    assert.equal(want.get("rotina|calendar.casa|lixo").dueKey, "2026-11-04 19:00");
    assert.equal(want.get("rotina|calendar.casa|lixo").allDay, false);
  });
  it("desired: a routine that comes back after done is one task even when late; repeating ones only from today to 60 days", () => {
    const { m } = setup({
      occurrences: [occ("Cama", "2026-10-28", { after: { n: 2, unit: "dias" } }, { uid: "cama" }), occ("Longe", "2027-02-01", {}, { uid: "longe", raw: { rrule: "FREQ=YEARLY" } }), occ("Sem uid", "2026-11-03", {}, { uid: "", raw: { uid: undefined } })],
    });
    const want = m.desired(NOW);
    assert.deepEqual([...want.keys()], ["rotina|calendar.casa|cama"]);
    assert.equal(want.get("rotina|calendar.casa|cama").dueKey, "2026-10-28");
  });
  it("desired: only what was chosen (maint / routine) and only with a list", () => {
    const opts = { maint: [maintItem()], occurrences: [occ("Lixo", "2026-11-03", {}, { uid: "lixo" })] };
    assert.deepEqual([...setup({ ...opts, mirror: { list: LIST, maint: true, routine: false } }).m.desired(NOW).keys()], ["maint|calendar.casa|filtro"]);
    assert.deepEqual([...setup({ ...opts, mirror: { list: LIST, maint: false, routine: true } }).m.desired(NOW).keys()], ["rotina|calendar.casa|lixo"]);
    assert.equal(setup({ ...opts, mirror: { list: null, maint: true, routine: true } }).m.desired(NOW).size, 0);
    assert.equal(setup({ ...opts, enabled: false }).m.desired(NOW).size, 0);
  });
});

describe("Mirror: fields written to the task", () => {
  const { m } = setup();
  const d = { type: "manutencao", dueKey: "2026-11-07", allDay: true, points: 30, notes: "Refil X", summary: "Filtro", occKey: "k" };
  it("all-day: due_date; notes, kind, points and the marker in the description", () => {
    assert.deepEqual(m.fields(d, ALL, "abcd1234"), { due_date: "2026-11-07", description: "Refil X\n\nManutenção do CronologIA · +30 pontos [cr:abcd1234]" });
  });
  it("timed routine: due_datetime when the list takes it, else the day", () => {
    const r = { type: "rotina", dueKey: "2026-11-04 19:00", allDay: false, points: 0, notes: "" };
    assert.deepEqual(m.fields(r, ALL, "t"), { due_datetime: "2026-11-04 19:00:00", description: "Rotina da casa do CronologIA [cr:t]" });
    assert.deepEqual(m.fields(r, 1 | 4 | 16, "t"), { due_date: "2026-11-04" });
    assert.deepEqual(m.fields(r, 1 | 4, "t"), {});
  });
  it("written(): what the item looks like after writing", () => {
    assert.deepEqual(m.written(d, ALL, "abcd1234"), { summary: "Filtro", dueKey: "2026-11-07", description: "Refil X\n\nManutenção do CronologIA · +30 pontos [cr:abcd1234]", occKey: "k", points: 30, type: "manutencao" });
    assert.equal(m.written(d, 1 | 4, "t").dueKey, "");
    assert.equal(m.written(d, 1 | 4, "t").description, null);
  });
  it("the marker is found again by MARK_RE", () => {
    assert.equal(MARK_RE.exec(m.fields(d, ALL, "0a1b2c3d").description)[1], "0a1b2c3d");
  });
});

describe("Mirror: sync", () => {
  const src = "maint|calendar.casa|filtro";
  const tag = tagOf(src);
  const marked = (extra = {}) => ({ uid: "t1", summary: "Trocar o filtro", status: "needs_action", due: "2026-11-07", description: `Refil X\n\nManutenção do CronologIA · +30 pontos [cr:${tag}]`, ...extra });

  it("adds the task once, then links it by its marker; nothing else when it is the same", async () => {
    mock.timers.enable({ apis: ["Date"], now: NOW });
    const s = setup({ maint: [maintItem()] });
    await s.m.sync();
    assert.deepEqual(services(s.ha), [["add_item", { item: "Trocar o filtro", due_date: "2026-11-07", description: `Refil X\n\nManutenção do CronologIA · +30 pontos [cr:${tag}]` }]]);
    const r = s.store.data.mirror[src];
    assert.equal(r.tag, tag);
    assert.equal(r.uid, null);
    assert.equal(r.adding, NOW);
    assert.equal(s.todos.refreshed, 1);
    assert.ok(s.store.saves >= 1);
    assert.equal(s.changes(), 1);
    // the list has not shown it yet: no second add within 15 s
    await s.m.sync();
    assert.equal(services(s.ha).length, 1);
    // it shows up: linked, nothing to change
    s.todos.items.set(LIST, [marked()]);
    await s.m.sync();
    assert.equal(services(s.ha).length, 1);
    assert.equal(r.uid, "t1");
    assert.equal("adding" in r, false);
    assert.deepEqual(s.m.uids(), new Set([`${LIST}|t1`]));
    assert.deepEqual(s.m.published(), { [LIST]: { t1: { pontos: 30, tipo: "manutencao" } } });
    assert.deepEqual(s.m.status(), { list: LIST, maint: true, routine: true, count: 1, problem: null });
  });
  it("adds again after 15 s if the list never showed it", async () => {
    mock.timers.enable({ apis: ["Date"], now: NOW });
    const s = setup({ maint: [maintItem()] });
    await s.m.sync();
    mock.timers.tick(15001);
    await s.m.sync();
    assert.equal(services(s.ha).filter(([sv]) => sv === "add_item").length, 2);
  });
  it("a new date (or name) updates the task and reopens it", async () => {
    const s = setup({ maint: [maintItem({ due: "2027-05-02", summary: "Trocar o filtro de água" })], items: [marked()] });
    s.store.data.mirror[src] = { list: LIST, uid: "t1", tag, type: "manutencao", cal: "calendar.casa", evUid: "filtro" };
    await s.m.sync();
    assert.deepEqual(services(s.ha), [["update_item", { item: "t1", status: "needs_action", due_date: "2027-05-02", description: `Refil X\n\nManutenção do CronologIA · +30 pontos [cr:${tag}]`, rename: "Trocar o filtro de água" }]]);
    assert.equal(s.store.data.mirror[src].written.dueKey, "2027-05-02");
  });
  it("a timed task with the same time (in HA's ISO form) is the same", async () => {
    const o = occ("Lixo", at(2026, 11, 4, 19), { points: 10 }, { uid: "lixo" });
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    const rsrc = "rotina|calendar.casa|lixo";
    const rtag = tagOf(rsrc);
    s.todos.items.set(LIST, [{ uid: "t9", summary: "Lixo", status: "needs_action", due: "2026-11-04T19:00:00-03:00", description: `Rotina da casa do CronologIA · +10 pontos [cr:${rtag}]` }]);
    await s.m.sync();
    assert.deepEqual(services(s.ha), []);
    assert.equal(s.store.data.mirror[rsrc].uid, "t9");
    assert.equal(s.store.data.mirror[rsrc].written.occKey, o.key);
  });
  it("deleted in the list: respected until the next date", async () => {
    const s = setup({ maint: [maintItem()], items: [] });
    s.store.data.mirror[src] = { list: LIST, uid: "t1", tag, type: "manutencao", cal: "calendar.casa", evUid: "filtro" };
    await s.m.sync();
    assert.equal(s.store.data.mirror[src].gone, "2026-11-07");
    assert.equal(s.store.data.mirror[src].uid, null);
    await s.m.sync();
    assert.deepEqual(services(s.ha), [], "not added back for the same date");
    s.home.index.maint = [maintItem({ due: "2027-05-07" })];
    await s.m.sync();
    assert.equal(services(s.ha)[0][0], "add_item");
    assert.equal("gone" in s.store.data.mirror[src], false);
  });
  it("what is not wanted anymore (or another list) leaves the list", async () => {
    const s = setup({ maint: [], items: [marked()] });
    s.store.data.mirror[src] = { list: LIST, uid: "t1", tag, type: "manutencao" };
    s.store.data.mirror.other = { list: "todo.velha", uid: "z", tag: "x" };
    s.todos.states.set("todo.velha", { attributes: { supported_features: 1 } }); // can't delete there
    await s.m.sync();
    assert.deepEqual(services(s.ha), [["remove_item", { item: ["t1"] }]]);
    assert.deepEqual(s.store.data.mirror, {});
  });
  it("integration off: every task leaves", async () => {
    const s = setup({ maint: [maintItem()], items: [marked()], enabled: false });
    s.store.data.mirror[src] = { list: LIST, uid: "t1", tag, type: "manutencao", written: { points: 30 } };
    assert.deepEqual(s.m.published(), {});
    await s.m.sync();
    assert.deepEqual(services(s.ha), [["remove_item", { item: ["t1"] }]]);
  });
  it("problems: a list that does not exist, or that can't create and edit", async () => {
    const gone = setup({ maint: [maintItem()], features: null, items: null });
    await gone.m.sync();
    assert.match(gone.m.problem, /não existe mais/);
    const ro = setup({ maint: [maintItem()], features: 1 | 2 });
    await ro.m.sync();
    assert.match(ro.m.problem, /não deixa criar e editar/);
    assert.equal(ro.ha.sent.length, 0);
    assert.match(ro.m.status().problem, /não deixa/);
  });
  it("a list without descriptions: the task is found by its name while adding", async () => {
    mock.timers.enable({ apis: ["Date"], now: NOW });
    const s = setup({ maint: [maintItem()], features: 1 | 2 | 4 | 16 });
    await s.m.sync();
    assert.deepEqual(services(s.ha), [["add_item", { item: "Trocar o filtro", due_date: "2026-11-07" }]]);
    s.todos.items.set(LIST, [{ uid: "other", summary: "Trocar o filtro", status: "completed" }, { uid: "t5", summary: "Trocar o filtro", status: "needs_action", due: "2026-11-07" }]);
    await s.m.sync();
    assert.equal(s.store.data.mirror[src].uid, "t5");
    assert.equal(services(s.ha).length, 1);
  });
  it("a sync while another runs is done again afterwards", async () => {
    const s = setup({ maint: [maintItem()] });
    let release;
    s.ha.send = (msg) => {
      s.ha.sent.push(msg);
      return new Promise((r) => (release = r));
    };
    const first = s.m.sync();
    await flushPromises();
    await s.m.sync();
    assert.equal(s.m.again, true);
    release();
    await first;
    assert.deepEqual(s.m.scheduled, [300]);
    assert.equal(s.m.again, false);
  });
});

describe("Mirror: the room and the equipment go to the ResolvIA", () => {
  const app = {
    comodos: { lista: [{ id: "coz", nome: "Cozinha" }, { id: "sala", nome: "Sala" }] },
    equipamentos: {
      lista: [
        { id: "f-sala", nome: "Filtro de água", comodo: "Sala" },
        { id: "f-coz", nome: "Filtro de agua", comodo: "Cozinha" },
      ],
    },
  };
  it("fires resolvia_comodo with the ids (accents ignored, the item of that room), once per change", async () => {
    const s = setup({ maint: [maintItem()], app });
    const r = {};
    const d = s.m.desired(NOW).get("maint|calendar.casa|filtro");
    await s.m.shareLinks(LIST, d, r);
    await s.m.shareLinks(LIST, d, r);
    const fired = s.ha.sent.filter((x) => x.type === "fire_event");
    assert.equal(fired.length, 1);
    assert.deepEqual(fired[0], { type: "fire_event", event_type: "resolvia_comodo", event_data: { entity_id: LIST, tarefa: "Trocar o filtro", origem: "CronologIA", comodo: "coz", equipamento: "f-coz" } });
    assert.equal(r.links, "coz|f-coz|Trocar o filtro");
  });
  it("a room or equipment that is not there goes as null (to clear it); routines never send", async () => {
    const s = setup({ maint: [maintItem({ room: "Garagem", equip: "Bicicleta" })], app });
    const d = s.m.desired(NOW).get("maint|calendar.casa|filtro");
    await s.m.shareLinks(LIST, d, {});
    assert.deepEqual(s.ha.sent[0].event_data, { entity_id: LIST, tarefa: "Trocar o filtro", origem: "CronologIA", comodo: null, equipamento: null });
    await s.m.shareLinks(LIST, { ...d, type: "rotina" }, {});
    assert.equal(s.ha.sent.length, 1);
  });
  it("equipment of another room is used when none matches the room", async () => {
    const s = setup({ maint: [maintItem({ room: "Garagem", equip: "Filtro de água" })], app });
    await s.m.shareLinks(LIST, s.m.desired(NOW).get("maint|calendar.casa|filtro"), {});
    assert.equal(s.ha.sent[0].event_data.equipamento, "f-sala");
  });
  it("without the InventarIA lists nothing is sent", async () => {
    const s = setup({ maint: [maintItem()], app: { comodos: null, equipamentos: null } });
    await s.m.shareLinks(LIST, s.m.desired(NOW).get("maint|calendar.casa|filtro"), {});
    assert.equal(s.ha.sent.length, 0);
  });
});

describe("Mirror: concluded in the list", () => {
  const rsrc = "rotina|calendar.casa|cama";
  const routine = () => occ("Arrumar a cama", "2026-11-02", { after: { n: 2, unit: "dias" }, points: 10 }, { uid: "cama" });
  const linked = (s, o) => {
    s.store.data.mirror[rsrc] = { list: LIST, uid: "t1", tag: tagOf(rsrc), type: "rotina", cal: "calendar.casa", evUid: "cama", written: { occKey: o.key, summary: "Arrumar a cama", points: 10 } };
    s.todos.items.set(LIST, [{ uid: "t1", summary: "Arrumar a cama", status: "completed", due: "2026-11-02" }]);
  };

  it("waits 3 s for who did it, then marks it done here with no one", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    await s.m.sync();
    assert.equal(s.m.pending.has(rsrc), true);
    assert.equal(s.home.calls.length, 0);
    mock.timers.tick(3000);
    await flushPromises();
    assert.deepEqual(s.home.calls, [["check", o.key, true, "ResolvIA", "rotina", ""]]);
    const ld = s.store.data.mirror[rsrc].lastDone;
    assert.equal(ld.occKey, o.key);
    assert.equal(ld.pointsKey, o.key);
    assert.equal(ld.who, null);
    assert.deepEqual(s.m.scheduled.at(-1), 500);
  });
  it("the name arriving while waiting (cronologia_pontos somar) is used right away", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    await s.m.sync();
    await s.m.onPoints("somar", LIST, "t1", "Andressa");
    assert.deepEqual(s.home.calls, [["check", o.key, true, "ResolvIA", "rotina", "Andressa"]]);
    assert.equal(s.m.pending.size, 0);
    mock.timers.tick(5000);
    await flushPromises();
    assert.equal(s.home.calls.length, 1, "the 3 s timer was cancelled");
  });
  it("the name arriving before the completion is seen (a hint) is used when it is seen", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    s.todos.items.set(LIST, [{ uid: "t1", summary: "Arrumar a cama", status: "needs_action", due: "2026-11-02" }]);
    await s.m.sync();
    await s.m.onPoints("somar", LIST, "t1", "Diego");
    assert.equal(s.home.calls.length, 0);
    s.todos.items.set(LIST, [{ uid: "t1", summary: "Arrumar a cama", status: "completed", due: "2026-11-02" }]);
    await s.m.sync();
    await flushPromises();
    assert.deepEqual(s.home.calls, [["check", o.key, true, "ResolvIA", "rotina", "Diego"]]);
  });
  it("a hint older than a minute is ignored", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    s.m.hints.set(`${LIST}|t1`, { who: "Diego", at: NOW - 61000 });
    await s.m.sync();
    assert.equal(s.m.pending.has(rsrc), true);
  });
  it("the name arriving after it was processed gives the points then (Quem fez? took a while)", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    await s.m.sync();
    mock.timers.tick(3000);
    await flushPromises();
    mock.timers.tick(60000);
    await s.m.onPoints("somar", LIST, "t1", "Andressa");
    assert.deepEqual(s.home.calls.at(-1), ["check", o.key, true, "ResolvIA", "rotina", "Andressa"]);
    assert.equal(s.store.data.mirror[rsrc].lastDone.who, "Andressa");
  });
  it("Desfazer in the ResolvIA: before processing cancels; after, unchecks here", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    await s.m.sync();
    await s.m.onPoints("desfazer", LIST, "t1", "");
    mock.timers.tick(5000);
    await flushPromises();
    assert.equal(s.home.calls.length, 0);
    // again, now processed first
    await s.m.sync();
    mock.timers.tick(3000);
    await flushPromises();
    await s.m.onPoints("desfazer", LIST, "t1", "");
    assert.deepEqual(s.home.calls.at(-1), ["check", o.key, false, "ResolvIA", "rotina", ""]);
    assert.equal(s.store.data.mirror[rsrc].lastDone, null);
  });
  it("processing when the task is no longer concluded does nothing (and syncs again)", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    await s.m.sync();
    s.todos.items.set(LIST, [{ uid: "t1", summary: "Arrumar a cama", status: "needs_action", due: "2026-11-02" }]);
    mock.timers.tick(3000);
    await flushPromises();
    assert.equal(s.home.calls.length, 0);
    assert.deepEqual(s.m.scheduled.at(-1), 0);
  });
  it("a maintenance concluded there is done here (maintDone) with the points key of the day", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const src = "maint|calendar.casa|filtro";
    const s = setup({ mirror: { list: LIST, maint: true, routine: false }, maint: [maintItem()] });
    s.store.data.mirror[src] = { list: LIST, uid: "t1", tag: tagOf(src), type: "manutencao", cal: "calendar.casa", evUid: "filtro", written: { occKey: maintItem().key, summary: "Trocar o filtro", points: 30 } };
    s.todos.items.set(LIST, [{ uid: "t1", summary: "Trocar o filtro", status: "completed", due: "2026-11-07" }]);
    await s.m.sync();
    await s.m.onPoints("somar", LIST, "t1", "Diego");
    assert.deepEqual(s.home.calls, [["maintDone", "calendar.casa", "filtro", "ResolvIA", "Diego"]]);
    const ld = s.store.data.mirror[src].lastDone;
    assert.equal(ld.pointsKey, `maint|calendar.casa|filtro|${new Date(NOW).toISOString().slice(0, 10)}`);
    // Foi outra pessoa (trocar): the points go to her
    s.store.pointsByKey = () => ({ key: ld.pointsKey });
    await s.m.onPoints("trocar", LIST, "t1", "Andressa");
    assert.deepEqual(s.home.calls.at(-1), ["reassign", ld.pointsKey, "Andressa"]);
    assert.equal(ld.who, "Andressa");
    // and Desfazer brings the maintenance back
    await s.m.onPoints("desfazer", LIST, "t1", "");
    assert.deepEqual(s.home.calls.at(-1), ["maintUndo", "calendar.casa", "filtro"]);
  });
  it("Desfazer in the ResolvIA that fails here (the calendar refuses): warned, and not tried again", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const src = "maint|calendar.casa|filtro";
    const s = setup({ mirror: { list: LIST, maint: true, routine: false }, maint: [maintItem()] });
    s.store.data.mirror[src] = { list: LIST, uid: "t1", tag: tagOf(src), type: "manutencao", cal: "calendar.casa", evUid: "filtro", written: { occKey: maintItem().key, summary: "Trocar o filtro", points: 30 } };
    s.todos.items.set(LIST, [{ uid: "t1", summary: "Trocar o filtro", status: "completed", due: "2026-11-07" }]);
    await s.m.sync();
    await s.m.onPoints("somar", LIST, "t1", "Diego");
    s.home.maintUndo = async () => {
      throw new Error("Esse calendário não deixa mudar eventos");
    };
    await s.m.onPoints("desfazer", LIST, "t1", "");
    assert.match(s.m.log.lines.at(-1)[1], /Desfazer pelo ResolvIA: Esse calendário não deixa mudar eventos/);
    assert.equal(s.store.data.mirror[src].lastDone, null, "forgotten: a second Desfazer does nothing");
    s.home.maintUndo = async () => assert.fail("not again");
    await s.m.onPoints("desfazer", LIST, "t1", "");
  });
  it("Desfazer more than 30 minutes later does nothing", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const o = routine();
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [o] });
    linked(s, o);
    await s.m.sync();
    mock.timers.tick(3000);
    await flushPromises();
    const n = s.home.calls.length;
    mock.timers.tick(31 * 60000);
    await s.m.onPoints("desfazer", LIST, "t1", "");
    assert.equal(s.home.calls.length, n);
  });
  it("a failure to mark it done is kept (no points later for it)", async () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: NOW });
    const src = "maint|calendar.casa|filtro";
    const s = setup({ mirror: { list: LIST, maint: true, routine: false }, maint: [maintItem()] });
    s.home.maintDone = async () => {
      throw new Error("calendário fora");
    };
    s.store.data.mirror[src] = { list: LIST, uid: "t1", tag: tagOf(src), type: "manutencao", cal: "calendar.casa", evUid: "filtro", written: { occKey: maintItem().key, summary: "Trocar o filtro", points: 30 } };
    s.todos.items.set(LIST, [{ uid: "t1", summary: "Trocar o filtro", status: "completed", due: "2026-11-07" }]);
    await s.m.sync();
    await s.m.onPoints("somar", LIST, "t1", "Diego");
    assert.equal(s.store.data.mirror[src].lastDone.failed, "calendário fora");
    await s.m.onPoints("somar", LIST, "t1", "Diego");
    assert.equal(s.home.calls.length, 0);
  });
  it("after it was done here, a still-concluded task is brought back with the next date", async () => {
    const o = routine();
    const moved = occ("Arrumar a cama", "2026-11-04", { after: { n: 2, unit: "dias" }, points: 10 }, { uid: "cama" });
    const s = setup({ mirror: { list: LIST, maint: false, routine: true }, occurrences: [moved] });
    linked(s, o);
    s.store.data.mirror[rsrc].lastDone = { occKey: o.key, at: NOW };
    await s.m.sync();
    const [sv, data] = services(s.ha)[0];
    assert.equal(sv, "update_item");
    assert.equal(data.status, "needs_action");
    assert.equal(data.due_date, "2026-11-04");
  });
  it("onPoints for a task that is not the mirror's only keeps a hint for somar", async () => {
    mock.timers.enable({ apis: ["Date"], now: NOW });
    const s = setup();
    await s.m.onPoints("somar", LIST, "zz", "Diego");
    await s.m.onPoints("desfazer", LIST, "yy", "");
    assert.deepEqual([...s.m.hints.keys()], [`${LIST}|zz`]);
  });
  it("find() returns the record of a list item", () => {
    const s = setup();
    s.store.data.mirror.a = { list: LIST, uid: "t1" };
    assert.deepEqual(s.m.find(LIST, "t1"), ["a", { list: LIST, uid: "t1" }]);
    assert.deepEqual(s.m.find(LIST, "t2"), [null, null]);
  });
});
