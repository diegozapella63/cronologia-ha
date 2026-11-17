// tests/ui: 1.96.0, a routine that comes back N days after done whose event stayed on the day it was done (the calendar
// did not move it): Agora says "venceu ontem", so the calendar shows it on that day too, to do; done today, it is done
// there. Names invented.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";

const NOW = at(2026, 11, 17, 18);
// Esvaziar lixos: done on the 15th (its "Feito em"), back 1 day after; the event stayed on the 15th
const lixo = (over = {}) => ({
  key: "calendar.casa|u-lixo|2026-11-15", cal: "calendar.casa", uid: "u-lixo", summary: "Esvaziar lixos", allDay: true,
  start: at(2026, 11, 15), end: at(2026, 11, 16), rrule: null,
  raw: { start: "2026-11-15", end: "2026-11-16", summary: "Esvaziar lixos" },
  kind: { kind: "rotina", after: { n: 1, unit: "dias" }, history: ["2026-11-15"], points: 5 }, ...over,
});

class App extends hostOf(ModelsMixin) {
  constructor(routines = []) {
    super(fakeApi());
    this._home = { meds: [], routines, bills: [], maint: [], checks: {}, people: [], caregivers: [], gerencia: { ligado: false, contas: [] } };
    this._now = NOW.getTime();
  }
}
const query = (list) => (a, b) => list.filter((e) => e.start < b && e.end > a);
const day = (d) => [at(2026, 11, d), at(2026, 11, d + 1)];

describe("Calendário › a routine that comes back N days after done, stuck on the day it was done", () => {
  it("shows on the day it is due (yesterday, as Agora's venceu ontem), to do; not on the other days", () => {
    const app = new App([{ key: "calendar.casa|u-lixo|2026-11-15", cal: "calendar.casa", uid: "u-lixo", summary: "Esvaziar lixos", after: { n: 1, unit: "dias" }, done: null, late: 1 }]);
    const [a, b] = day(16);
    const out = app._afterDueEvents(a, b, query([lixo()]));
    assert.equal(out.length, 1);
    assert.equal(out[0].summary, "Esvaziar lixos");
    assert.equal(out[0].start.getDate(), 16);
    assert.equal(out[0].afterDue, true);
    assert.equal(app._checkOf(out[0]), null, "to do");
    assert.equal(app._afterDueEvents(...day(15), query([lixo()])).length, 0, "the day it was done has the event itself");
    assert.equal(app._afterDueEvents(...day(17), query([lixo()])).length, 0);
  });
  it("a timed one keeps its time; one the calendar moved (not stuck) is left alone", () => {
    const app = new App();
    const timed = lixo({ allDay: false, start: at(2026, 11, 15, 20), end: at(2026, 11, 15, 20, 30), raw: { start: at(2026, 11, 15, 20).toISOString(), summary: "Esvaziar lixos" } });
    const [e] = app._afterDueEvents(...day(16), query([timed]));
    assert.deepEqual([e.start.getDate(), e.start.getHours(), e.end - e.start], [16, 20, 30 * 60000]);
    const moved = lixo({ start: at(2026, 11, 16), end: at(2026, 11, 17), raw: { start: "2026-11-16", summary: "Esvaziar lixos" } });
    assert.equal(app._afterDueEvents(...day(16), query([moved])).length, 0);
  });
  it("done today in Agora: done there too", () => {
    const done = { by: "Ana", at: NOW.toISOString() };
    const app = new App([{ key: "k", cal: "calendar.casa", summary: "Esvaziar lixos", after: { n: 1, unit: "dias" }, done }]);
    const [e] = app._afterDueEvents(...day(16), query([lixo()]));
    assert.equal(app._checkOf(e), done);
  });
});
