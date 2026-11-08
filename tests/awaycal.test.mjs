// lib/awaycal.js (1.59.0): Modo férias nos calendários que avisam no celular (Google…): the days of the vacation out of
// each repeating routine (the series ends the day before and a new one starts on its first day after), what waits for
// its Feito to the day back, and everything back when the vacation ends early, is cancelled or moves.
import { at, ymd, isoLocal, makeLog } from "./helpers.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createCalendars } from "../frontend/preview/fake-calendars.js";
import { AwayCal, window, onDay, dayOf, pausable, waiting } from "../cronologia/rootfs/app/lib/awaycal.js";

const G = "calendar.familia"; // Google: creates and deletes
const L = "calendar.casa_local"; // the Home Assistant's own
const NOW = at(2026, 11, 8, 6, 30); // Sunday
const ROT = (extra = "") => `#rotina\nPontos: 10${extra}`;

/** A fake Home Assistant with the calendars of the fake model; tracked() reads them again on every call. */
function setup({ away = null, events = [], local = [] } = {}) {
  const model = createCalendars();
  for (const id of Object.keys(model.calendars)) delete model.calendars[id];
  model.calendars[G] = { name: "Família", platform: "google", features: 3, events: [] };
  model.calendars[L] = { name: "Casa", platform: "local_calendar", features: 7, events: [] };
  for (const e of events) model.create(G, e);
  for (const e of local) model.create(L, e);
  const sent = [];
  const ha = {
    async send(msg) {
      sent.push(msg);
      const ev = msg.event ? (({ dtstart, dtend, ...rest }) => ({ ...rest, start: dtstart, end: dtend }))(msg.event) : null;
      if (msg.type === "calendar/event/create") return model.create(msg.entity_id, ev);
      if (msg.type === "calendar/event/delete") return model.remove(msg.entity_id, msg);
      if (msg.type === "calendar/event/update") return model.update(msg.entity_id, { ...msg, event: ev });
      throw new Error(`unexpected ${msg.type}`);
    },
  };
  const store = { data: { app: { away }, away_cal: { splits: [], moved: [] } }, saved: 0, save() { this.saved++; } };
  const from = at(2026, 4, 1).getTime();
  const to = at(2028, 12, 31).getTime();
  const tracked = () => new Map(Object.keys(model.calendars).map((id) => [id, { events: model.occurrences(id, from, to) }]));
  const later = [];
  const ac = new AwayCal({ ha, store, tracked, features: (id) => model.calendars[id].features, platform: async (id) => model.calendars[id].platform, log: makeLog(), later: (fn) => later.push(fn) });
  const days = (summary, cal = G) => tracked().get(cal).events.filter((e) => e.summary === summary).map((e) => dayOf(e.start));
  const uids = (summary, cal = G) => [...new Set(tracked().get(cal).events.filter((e) => e.summary === summary).map((e) => e.uid))];
  const run = (now = NOW) => {
    ac.recent.clear(); // (a fake calendar answers at once)
    return ac.syncNow(now);
  };
  return { model, ac, store, sent, days, uids, run, later };
}
const daily = (summary, startDay, extra = {}) => ({ summary, start: startDay, end: ymd(new Date(new Date(`${startDay}T12:00:00`).getTime() + 86400000)), rrule: "FREQ=DAILY", description: ROT(), ...extra });
const span = (from, to) => {
  const out = [];
  for (let d = new Date(`${from}T12:00:00`); ymd(d) <= to; d.setDate(d.getDate() + 1)) out.push(ymd(d));
  return out;
};
const between = (list, a, b) => list.filter((d) => d >= a && d <= b);

describe("awaycal: the pieces", () => {
  it("window: from where days are taken out (not before today) and the day back; none when the vacation is over", () => {
    assert.deepEqual(window({ from: "2026-11-01", to: "2026-11-11" }, "2026-11-08"), { from: "2026-11-01", cut: "2026-11-08", back: "2026-11-12" });
    assert.deepEqual(window({ from: "2026-11-20", to: "2026-11-22" }, "2026-11-08"), { from: "2026-11-20", cut: "2026-11-20", back: "2026-11-23" });
    assert.equal(window({ from: "2026-11-01", to: "2026-11-07" }, "2026-11-08"), null);
    assert.equal(window(null, "2026-11-08"), null);
  });
  it("onDay: the same time and length on another day; all-day stays all-day", () => {
    assert.deepEqual(onDay("2026-11-05", "2026-11-06", "2026-11-12"), { start: "2026-11-12", end: "2026-11-13" });
    assert.deepEqual(onDay(isoLocal(at(2026, 11, 5, 19)), isoLocal(at(2026, 11, 5, 19, 15)), "2026-11-12"), { start: isoLocal(at(2026, 11, 12, 19)), end: isoLocal(at(2026, 11, 12, 19, 15)) });
  });
  it("what can be paused: repeating routines and maintenance (not a number of times, not medicines); what waits for its Feito", () => {
    assert.equal(pausable({ rrule: "FREQ=DAILY", description: ROT() }), true);
    assert.equal(pausable({ rrule: "FREQ=DAILY;COUNT=5", description: ROT() }), false);
    assert.equal(pausable({ rrule: "FREQ=DAILY", description: "#remédio\nDose: 1" }), false);
    assert.equal(pausable({ rrule: "FREQ=DAILY", description: "Natação" }), false);
    assert.equal(waiting({ description: ROT("\nVolta: 1 dia depois de feita") }), true);
    assert.equal(waiting({ description: "#manutenção\nA cada: 6 meses" }), true);
    assert.equal(waiting({ description: ROT() }), false);
  });
});

describe("awaycal: going on vacation", () => {
  it("a daily routine on Google: none in the days away, the same every day from the day back; the local calendar untouched", async () => {
    const t = setup({ away: { from: "2026-11-08", to: "2026-11-11" }, events: [daily("Limpar banheiro pets", "2026-10-01")], local: [daily("Regar as plantas", "2026-10-01")] });
    assert.equal(await t.run(), true);
    const d = t.days("Limpar banheiro pets");
    assert.deepEqual(between(d, "2026-11-06", "2026-11-14"), ["2026-11-06", "2026-11-07", "2026-11-12", "2026-11-13", "2026-11-14"]);
    assert.equal(t.uids("Limpar banheiro pets").length, 2, "the old series (until the 7th) and the new one");
    assert.deepEqual(between(t.days("Regar as plantas", L), "2026-11-08", "2026-11-11"), span("2026-11-08", "2026-11-11"), "the local calendar doesn't alert: as it was");
    const s = t.store.data.away_cal.splits;
    assert.equal(s.length, 1);
    assert.deepEqual(s[0].starts, span("2026-11-08", "2026-11-11"));
    assert.equal(dayOf(s[0].next), "2026-11-12");
    assert.equal(t.store.saved, 1);
    // again: nothing more to do
    assert.equal(await t.run(), false);
    assert.equal(t.store.data.away_cal.splits.length, 1);
  });
  it("a weekly routine at a time: the next one after the day back, at its time; one that ended in the vacation is not made again", async () => {
    const start = at(2026, 10, 5, 19); // Mondays and Thursdays at 19:00
    const t = setup({
      away: { from: "2026-11-08", to: "2026-11-17" },
      events: [
        { summary: "Tirar o lixo", start: isoLocal(start), end: isoLocal(at(2026, 10, 5, 19, 15)), rrule: "FREQ=WEEKLY;BYDAY=MO,TH", description: ROT() },
        { ...daily("Aguar a horta", "2026-11-01"), rrule: "FREQ=DAILY;UNTIL=20261110" },
      ],
    });
    await t.run();
    const lixo = t.model.occurrences(G, at(2026, 11, 1).getTime(), at(2026, 12, 1).getTime()).filter((e) => e.summary === "Tirar o lixo");
    assert.deepEqual(lixo.map((e) => dayOf(e.start)), ["2026-11-02", "2026-11-05", "2026-11-19", "2026-11-23", "2026-11-26", "2026-11-30"]);
    assert.ok(lixo.every((e) => e.start.includes("T19:00:00")), "at its time");
    assert.deepEqual(between(t.days("Aguar a horta"), "2026-11-01", "2026-11-30"), span("2026-11-01", "2026-11-07"));
    const s = t.store.data.away_cal.splits.find((x) => x.summary === "Aguar a horta");
    assert.equal(s.next, null, "nothing after the vacation");
  });
  it("a routine that comes back N days after done and a maintenance of one event due in the vacation go to the day back", async () => {
    const t = setup({
      away: { from: "2026-11-08", to: "2026-11-11" },
      events: [
        { summary: "Trocar a água do filtro", start: "2026-11-09", end: "2026-11-10", description: ROT("\nVolta: 1 dia depois de feita") },
        { summary: "Limpar o ar-condicionado", start: "2026-11-10", end: "2026-11-11", description: "#manutenção\nA cada: 6 meses" },
        { summary: "Consulta", start: "2026-11-09", end: "2026-11-10" },
      ],
    });
    await t.run();
    assert.deepEqual(t.days("Trocar a água do filtro"), ["2026-11-12"]);
    assert.deepEqual(t.days("Limpar o ar-condicionado"), ["2026-11-12"]);
    assert.deepEqual(t.days("Consulta"), ["2026-11-09"], "a plain event stays");
    assert.deepEqual(t.store.data.away_cal.moved.map((m) => [m.summary, m.from]), [["Trocar a água do filtro", "2026-11-09"], ["Limpar o ar-condicionado", "2026-11-10"]]);
  });
  it("a vacation already going on: only from today on (the days before are past)", async () => {
    const t = setup({ away: { from: "2026-11-05", to: "2026-11-11" }, events: [daily("Lavar a louça", "2026-10-01")] });
    await t.run();
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-04", "2026-11-13"), ["2026-11-04", "2026-11-05", "2026-11-06", "2026-11-07", "2026-11-12", "2026-11-13"]);
  });
  it("a calendar that can't take events off (CalDAV) or of an unknown integration: untouched", async () => {
    const t = setup({ away: { from: "2026-11-08", to: "2026-11-11" }, events: [daily("Lavar a louça", "2026-10-01")] });
    t.model.calendars[G].features = 1;
    assert.equal(await t.run(), false);
    t.model.calendars[G].features = 3;
    t.model.calendars[G].platform = null;
    assert.equal(await t.run(), false);
    assert.equal(t.sent.length, 0);
  });
});

describe("awaycal: the vacation changes", () => {
  it("ended early (Encerrar): the series again from today, the moved one back to its day (or today)", async () => {
    const t = setup({
      away: { from: "2026-11-08", to: "2026-11-15" },
      events: [daily("Lavar a louça", "2026-10-01"), { summary: "Trocar a água do filtro", start: "2026-11-13", end: "2026-11-14", description: ROT("\nVolta: 1 dia depois de feita") }],
    });
    await t.run();
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-08", "2026-11-17"), ["2026-11-16", "2026-11-17"]);
    // on the 10th, Encerrar
    t.store.data.app.away = null;
    await t.run(at(2026, 11, 10, 9));
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-06", "2026-11-17"), ["2026-11-06", "2026-11-07", ...span("2026-11-10", "2026-11-17")]);
    assert.equal(t.uids("Lavar a louça").length, 2, "the old one and the one from today (the one from the day back is gone)");
    assert.deepEqual(t.days("Trocar a água do filtro"), ["2026-11-13"], "back to its own day");
    assert.deepEqual(t.store.data.away_cal, { splits: [], moved: [] }, "nothing left to bring back");
  });
  it("cancelled before it starts: everything as it was", async () => {
    const t = setup({ away: { from: "2026-11-20", to: "2026-11-22" }, events: [daily("Lavar a louça", "2026-10-01")] });
    await t.run();
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-19", "2026-11-24"), ["2026-11-19", "2026-11-23", "2026-11-24"]);
    t.store.data.app.away = null;
    await t.run();
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-01", "2026-11-30"), span("2026-11-01", "2026-11-30"));
    assert.equal(t.store.data.away_cal.splits.length, 0);
  });
  it("made longer: the days added out too; shorter: the days given back come back", async () => {
    const t = setup({ away: { from: "2026-11-08", to: "2026-11-11" }, events: [daily("Lavar a louça", "2026-10-01")] });
    await t.run();
    t.store.data.app.away = { from: "2026-11-08", to: "2026-11-14" };
    await t.run();
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-07", "2026-11-16"), ["2026-11-07", "2026-11-15", "2026-11-16"]);
    assert.equal(t.store.data.away_cal.splits.length, 1, "one note for the routine");
    assert.deepEqual(t.store.data.away_cal.splits[0].starts, span("2026-11-08", "2026-11-14"));
    t.store.data.app.away = { from: "2026-11-08", to: "2026-11-09" };
    await t.run();
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-07", "2026-11-16"), ["2026-11-07", ...span("2026-11-10", "2026-11-16")]);
    // and when it is over, the note goes
    t.store.data.app.away = { from: "2026-11-08", to: "2026-11-09" };
    await t.run(at(2026, 11, 10, 8));
    assert.equal(t.store.data.away_cal.splits.length, 0);
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-07", "2026-11-16"), ["2026-11-07", ...span("2026-11-10", "2026-11-16")], "nothing changed at the end");
  });
  it("moved later: the days that are no longer of the vacation come back, then the new ones go out (on the next run)", async () => {
    const t = setup({ away: { from: "2026-11-10", to: "2026-11-12" }, events: [daily("Lavar a louça", "2026-10-01")] });
    await t.run();
    t.store.data.app.away = { from: "2026-11-12", to: "2026-11-14" };
    await t.run();
    assert.equal(t.later.length, 1, "another run in a moment");
    await t.run();
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-08", "2026-11-16"), ["2026-11-08", "2026-11-09", "2026-11-10", "2026-11-11", "2026-11-15", "2026-11-16"]);
  });
  it("a series taken off by hand in the calendar meanwhile: not brought back", async () => {
    const t = setup({ away: { from: "2026-11-08", to: "2026-11-11" }, events: [daily("Lavar a louça", "2026-10-01")] });
    await t.run();
    const fresh = t.uids("Lavar a louça").find((u) => t.days("Lavar a louça").length && t.model.calendars[G].events.find((e) => e.uid === u && !/UNTIL/.test(e.rrule)));
    t.model.remove(G, { uid: fresh });
    t.store.data.app.away = null;
    await t.run(at(2026, 11, 9, 8));
    assert.deepEqual(between(t.days("Lavar a louça"), "2026-11-08", "2026-11-20"), [], "still gone");
    assert.equal(t.store.data.away_cal.splits.length, 0);
  });
});
