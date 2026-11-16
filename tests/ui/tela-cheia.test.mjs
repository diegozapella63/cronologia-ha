// tests/ui: Agora na Tela cheia (1.89.0): a dose shows from 1 h before its time (the late ones, the ones of now and the
// ones of the whole day stay; whoever took all is one line); no Tomados (n) and no line about who takes care; nothing
// near: no card. Out of it, the day's list as always. And the tasks: only the ones with a due date (1.88.0).
// Names and medicines invented.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { html, nothing } from "../../frontend/vendor/lit-all.min.js";
import { text, render, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { TasksMixin } from "../../frontend/src/tasks.js";

const NOW = at(2026, 11, 16, 12);
const DAVI = { name: "Davi", person: "person.davi", pet: false, phone: false, care: null, reach: false };
const ANA = { name: "Ana", person: "person.ana", pet: false, phone: true, care: null, reach: true };

class App extends hostOf(ModelsMixin, TasksMixin) {
  constructor({ meds = [], full = true, todos = [] } = {}) {
    super(fakeApi());
    this._home = { meds, routines: [], bills: [], maint: [], checks: {}, people: [ANA, DAVI], caregivers: [], gerencia: { ligado: false, contas: [] }, score: null };
    this._app_ = {};
    this._user = { person: "Ana" };
    this._now = NOW.getTime();
    this._dark = false;
    this._full = full;
    this._todosList = todos;
  }
  _fullOn() {
    return this._full;
  }
  _todos() {
    return { items: this._todosList };
  }
  _cals() {
    return [];
  }
  _sheetHead(t) {
    return html`<h3>${t}</h3>`;
  }
}

const iso = (h, m = 0) => at(2026, 11, 16, h, m).toISOString();
const dose = (summary, h, m, over = {}) => ({ key: `d|${over.who || "Ana"}|${summary}`, summary, who: "Ana", dose: "1", time: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`, start: iso(h, m), allDay: false, taken: null, state: "depois", late_min: 0, alert: true, phone: true, ...over });
const MEDS = [
  dose("Losartana", 8, 0, { state: "atrasado", late_min: 240 }),
  dose("Vitamina D", 12, 0, { state: "agora" }),
  dose("Ômega 3", 12, 50),
  dose("Sinvastatina", 13, 1),
  dose("Melatonina", 21, 0),
  dose("Probiótico", 0, 0, { allDay: true, time: "", start: "2026-11-16" }),
  dose("Gardenal", 21, 0, { who: "Davi", alert: true, phone: false }),
];

describe("Tela cheia › Remédios de hoje: from 1 h before", () => {
  it("the late one, the one of now, the next hour and the whole day; not the ones after 13:00", () => {
    const t = text(new App({ meds: MEDS })._renderMedsPanel());
    for (const n of ["Losartana", "Vitamina D", "Ômega 3", "Probiótico"]) assert.match(t, new RegExp(n), n);
    for (const n of ["Sinvastatina", "Melatonina", "Gardenal"]) assert.doesNotMatch(t, new RegExp(n), n);
    assert.match(t, /0 de 7 tomados/, "the count of the day stays");
    assert.doesNotMatch(t, /Davi/, "Davi has nothing in the next hour: no line of him");
  });
  it("no Tomados (n), no line about who takes care", () => {
    const meds = [dose("Losartana", 8, 0, { state: "tomado", taken: { at: iso(8, 5), by: "Ana" } }), ...MEDS.slice(1)];
    const h = render(new App({ meds })._renderMedsPanel()).html;
    assert.doesNotMatch(h, /Tomados \(1\)|done-fold/);
    assert.doesNotMatch(h, /panel-foot/, "Sem celular para Davi: not on the Tela cheia");
    const out = render(new App({ meds, full: false })._renderMedsPanel()).html;
    assert.match(out, /Tomados \(1\)/);
    assert.match(out, /Sem celular para Davi/);
  });
  it("whoever took all is still one line; nothing near and nothing taken: no card", () => {
    const tookAll = [dose("Losartana", 8, 0, { state: "tomado", taken: { at: iso(8, 5), by: "Ana" } }), dose("Melatonina", 21, 0, { who: "Davi" })];
    const t = text(new App({ meds: tookAll })._renderMedsPanel());
    assert.match(t, /Ana/);
    assert.match(t, /tomou todos/);
    assert.doesNotMatch(t, /Melatonina/);
    assert.equal(new App({ meds: [dose("Melatonina", 21, 0)] })._renderMedsPanel(), nothing);
  });
  it("out of the Tela cheia: the whole day, as always", () => {
    const t = text(new App({ meds: MEDS, full: false })._renderMedsPanel());
    for (const n of ["Sinvastatina", "Melatonina", "Gardenal"]) assert.match(t, new RegExp(n), n);
  });
});
