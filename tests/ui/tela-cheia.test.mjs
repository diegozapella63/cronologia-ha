// tests/ui: Agora na Tela cheia (1.89.0): a dose shows from 1 h before its time (the late ones, the ones of now and the
// ones of the whole day stay; whoever took all is one line); no Tomados (n) and no line about who takes care; nothing
// near: no card. Out of it, the day's list as always. And the tasks: only the ones with a due date (1.88.0).
// Names and medicines invented.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { html, nothing } from "../../frontend/vendor/lit-all.min.js";
import { text, render, fire, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { TasksMixin } from "../../frontend/src/tasks.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";

const NOW = at(2026, 11, 16, 12);
const DAVI = { name: "Davi", person: "person.davi", pet: false, phone: false, care: null, reach: false };
const ANA = { name: "Ana", person: "person.ana", pet: false, phone: true, care: null, reach: true };

class App extends hostOf(ModelsMixin, TasksMixin, RewardsMixin) {
  constructor({ meds = [], full = true, todos = [], score = null, app = {} } = {}) {
    super(fakeApi());
    this._home = { meds, routines: [], bills: [], maint: [], checks: {}, people: [ANA, DAVI], caregivers: [], gerencia: { ligado: false, contas: [] }, score };
    this._app_ = { ...app };
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
  it("1.93.0: only the doses to take (no line of whoever took all); nothing to take near: no card", () => {
    const tookAll = [dose("Losartana", 8, 0, { state: "tomado", taken: { at: iso(8, 5), by: "Ana" } }), dose("Gardenal", 12, 30, { who: "Davi" })];
    const t = text(new App({ meds: tookAll })._renderMedsPanel());
    assert.match(t, /Gardenal/);
    assert.match(t, /1 de 2 tomados/, "the count of the day stays");
    assert.doesNotMatch(t, /tomou todos|Losartana/);
    const later = [dose("Losartana", 8, 0, { state: "tomado", taken: { at: iso(8, 5), by: "Ana" } }), dose("Melatonina", 21, 0, { who: "Davi" })];
    assert.equal(new App({ meds: later })._renderMedsPanel(), nothing, "Ana took all and Davi's is at 21:00: no card");
    assert.equal(new App({ meds: [dose("Melatonina", 21, 0)] })._renderMedsPanel(), nothing);
    assert.match(text(new App({ meds: later, full: false })._renderMedsPanel()), /tomou todos/, "out of the Tela cheia, as always");
  });
  it("out of the Tela cheia: the whole day, as always", () => {
    const t = text(new App({ meds: MEDS, full: false })._renderMedsPanel());
    for (const n of ["Sinvastatina", "Melatonina", "Gardenal"]) assert.match(t, new RegExp(n), n);
  });
});

// 1.90.0: the placar in the Tela cheia (Mais › Recompensas › Na tela cheia da Agora, on unless turned off)
const SCORE = {
  enabled: true, period: "semana", participants: ["Ana", "Davi"], leader: "Ana", current: { label: "16 a 22/11", start: "2026-11-16", end: "2026-11-22" },
  rows: [{ name: "Ana", points: 40, count: 4, demerits: 0 }, { name: "Davi", points: 25, count: 3, demerits: 0 }], entries: [],
};
describe("Tela cheia › Placar", () => {
  it("the points of the week and who is ahead", () => {
    const t = text(new App({ score: SCORE })._renderPlacarNow());
    assert.match(t, /Placar/);
    assert.match(t, /16 a 22\/11/);
    assert.match(t, /Ana/);
    assert.match(t, /40/);
    assert.match(t, /Davi/);
    assert.match(t, /25/);
    assert.match(t, /Ana na frente por 15 pontos/);
  });
  it("three or more: the ranking; a tie and nobody yet", () => {
    const three = { ...SCORE, participants: ["Ana", "Davi", "Bia"], rows: [...SCORE.rows, { name: "Bia", points: 10, count: 1, demerits: 0 }] };
    assert.match(render(new App({ score: three })._renderPlacarNow()).html, /rank-row/);
    assert.match(text(new App({ score: { ...SCORE, leader: null, rows: [{ name: "Ana", points: 0, count: 0, demerits: 0 }, { name: "Davi", points: 0, count: 0, demerits: 0 }] } })._renderPlacarNow()), /Ninguém pontuou ainda/);
  });
  it("not out of the Tela cheia, not with the placar off, not turned off in Mais › Recompensas", () => {
    assert.equal(new App({ score: SCORE, full: false })._renderPlacarNow(), nothing);
    assert.equal(new App({ score: { ...SCORE, enabled: false } })._renderPlacarNow(), nothing);
    assert.equal(new App({ score: null })._renderPlacarNow(), nothing);
    assert.equal(new App({ score: SCORE, app: { placar_cheia: false } })._renderPlacarNow(), nothing);
  });
  it("the switch in Mais › Recompensas: on to begin with; off saves false, on removes it", async () => {
    const app = new App({ score: SCORE });
    const view = app._renderScoreSettings();
    assert.match(text(view), /Na tela cheia da Agora/);
    assert.match(text(view), /Os pontos e quem está ganhando\./);
    await fire(view, "Placar na tela cheia da Agora", "change", { target: { checked: false } });
    assert.deepEqual(app.prefs.at(-1), { placar_cheia: false });
    await fire(view, "Placar na tela cheia da Agora", "change", { target: { checked: true } });
    assert.deepEqual(app.prefs.at(-1), { placar_cheia: null });
  });
});
