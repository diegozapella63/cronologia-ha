// frontend/src/rewards.js, mounted: the tab Recompensas (the board, the result of the last period, the prize, Para
// pontuar hoje, the deméritos, the Extrato and the Histórico), who did it (the person of the app, a button of a person,
// or the question), done and done in part, the maintenance, and Mais › Recompensas (the settings and the daily
// reminder). The people, the colors and the lines of the Extrato in words are in frontend-rewards.test.mjs.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { html, nothing } from "../../frontend/vendor/lit-all.min.js";
import { text, render, click, fire, labels, controls, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { TasksMixin } from "../../frontend/src/tasks.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";

const NOW = at(2026, 11, 18, 19);
const row = (name, points, count = 0, demerits = 0) => ({ name, points, count, demerits });
const SCORE = (over = {}) => ({
  enabled: true, period: "semana", manual: true, notify: true, anchor: "2026-11-16", participants: ["Ana", "Davi"], leader: "Ana",
  current: { key: "2026-11-16", label: "16 a 22/11", start: "2026-11-16", end: "2026-11-22", reward: "", prizes: {} },
  next: { key: "2026-11-23", label: "23 a 29/11", start: "2026-11-23", end: "2026-11-29", reward: "", prizes: {} },
  rows: [row("Ana", 40, 4), row("Davi", 25, 3, 1)], entries: [], log: [], log_count: 0, history: [], ...over,
});
const ANA = { name: "Ana", person: "person.ana", pet: false, reach: true };
const DAVI = { name: "Davi", person: "person.davi", pet: false, reach: false };
const REX = { name: "Rex", pet: true };
const pano = (over = {}) => ({ key: "k-pano", cal: "calendar.casa", uid: "u-pano", kind: "rotina", summary: "Passar pano", points: 20, period: "", time: "", after: null, history: [], next: "2026-11-18", late: 0, yesterday: false, done: null, part: null, who: "", ...over });
const filtro = (over = {}) => ({ key: "k-filtro", cal: "calendar.casa", uid: "u-filtro", kind: "manutencao", summary: "Trocar o filtro", points: 15, state: "due", days: 0, ...over });
const tarefa = (summary, over = {}) => ({ key: `todo.casa|${summary}`, list: "todo.casa", uid: `u-${summary}`, summary, listName: "Casa", allDay: true, due: "2026-11-18", days: 0, undated: false, done: false, overdue: false, points: 5, every: 0, ...over });

class App extends hostOf(ModelsMixin, TasksMixin, RewardsMixin) {
  constructor({ score = SCORE(), home = {}, app = {}, api = fakeApi(), me = "Ana", view = "rewards", away = null, full = false, form = {} } = {}) {
    super(api);
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [ANA, DAVI], caregivers: [], gerencia: { ligado: false, contas: [] }, catalog: [], todos: { lists: [], items: [] }, score, ...home };
    this._app_ = { ...app };
    this._form = form;
    this._user = me ? { person: me } : null;
    this._now = NOW.getTime();
    this._dark = false;
    this.view = view;
    this.away = away;
    this.full = full;
    this.opened = [];
    this.updateComplete = Promise.resolve();
  }
  _view() {
    return { name: this.view };
  }
  _fullOn() {
    return this.full;
  }
  _cals() {
    return [];
  }
  _away() {
    return this.away;
  }
  _awayNow() {
    return !!this.away;
  }
  _sheetHead(t) {
    return html`<h3>${t}</h3>`;
  }
  _renderHead(title, { text: sub } = {}) {
    return html`<header><h1>${title}</h1><p>${sub}</p></header>`;
  }
  _renderRoutinesTab() {
    return html`<section class="routines-tab">Rotinas</section>`;
  }
  _openIndexItem(x) {
    this.opened.push(["item", x.summary]);
  }
  _openKindForm(o) {
    this.opened.push(["form", o.kind]);
  }
  async _closeSheet() {
    this._sheet = null;
  }
}
const tick = () => new Promise((r) => setImmediate(r));

describe("Recompensas: who did it", () => {
  it("a button of a person says who; else the person of the app, when on the board; else it asks", async () => {
    const got = [];
    const a = new App();
    a._withWho(10, "Regar", (w) => got.push(w), "Davi");
    a._withWho(10, "Regar", (w) => got.push(w));
    assert.deepEqual(got, ["Davi", "Ana"]);
    const visit = new App({ me: "Visita" });
    visit._withWho(10, "Regar", (w) => got.push(w));
    assert.deepEqual([visit._sheet, visit._form.points, visit._form.title], ["who", 10, "Regar"]);
    const sheet = visit._renderWhoSheet();
    assert.equal(text(sheet), "Quem fez? Regar · +10 pontos A Ana D Davi Ninguém do placar (sem pontos)");
    click(sheet, /Davi/);
    click(sheet, "Ninguém do placar (sem pontos)");
    assert.deepEqual(got.slice(2), ["Davi", ""]);
    // no points, or the board off: nobody to ask
    a._withWho(0, "Regar", (w) => got.push(w));
    new App({ score: SCORE({ enabled: false }) })._withWho(10, "Regar", (w) => got.push(w));
    assert.deepEqual(got.slice(4), ["", ""]);
    const empty = new App({ score: null, form: { title: "", points: 0, run() {} } });
    assert.equal(text(empty._renderWhoSheet()), "Quem fez? Ninguém do placar (sem pontos)");
  });

  it("the initials beside a task (up to 4 people), and the buttons of the sheet of an event", () => {
    const got = [];
    const a = new App({ score: SCORE({ participants: ["Ana", "Davi", "Caio", "Duda", "Edu"] }) });
    const q = a._renderQuickWho("Regar", 5, (p) => got.push(p));
    assert.deepEqual(controls(q).map((c) => [c.text, c.aria]), [["A", "Ana fez Regar (+5)"], ["D", "Davi fez Regar (+5)"], ["C", "Caio fez Regar (+5)"], ["D", "Duda fez Regar (+5)"]]);
    click(q, "Caio fez Regar (+5)");
    assert.deepEqual(controls(a._renderQuickWho("Regar", 0, () => {})).map((c) => c.aria)[0], "Ana fez Regar", "no points: only who");
    const w = a._renderWhoButtons(8, (p) => got.push(p));
    assert.match(text(w), /^Quem fez\? \+8 A Ana D Davi C Caio D Duda E Edu$/);
    click(w, /Edu/);
    assert.deepEqual(got, ["Caio", "Edu"]);
    assert.equal(text(a._renderWhoButtons(0, () => {})).startsWith("Quem fez? A Ana"), true);
    assert.equal(text(new App({ score: null })._renderWhoButtons(0, () => {})), "Quem fez?");
    assert.deepEqual(controls(new App({ score: null })._renderQuickWho("Regar", 5, () => {})), []);
  });
});

describe("Recompensas: done, and the message after", () => {
  it("a routine done: the points to who did it; with one other person, Foi <ela> gives them the points", async () => {
    const api = fakeApi({ setCheck: null, scoreReassign: null });
    const a = new App({ api, view: "now" });
    await a._markDone(pano(), "rotina");
    assert.deepEqual(api.calls[0], ["setCheck", "k-pano", true, "rotina", "Ana"]);
    assert.deepEqual([a.toasts[0], a.undos[0].label, a.haptics, a._choresHold], ["Feito por Ana · +20", "Foi Davi", ["success"], true]);
    await a.undos[0].run();
    assert.deepEqual([api.calls[1], a.toasts[1]], [["scoreReassign", "k-pano", "Davi"], "Pontos para Davi"]);
    const bad = new App({ api: fakeApi({ setCheck: null, scoreReassign: new Error("sem conexão") }) });
    await bad._markDone(pano(), "rotina");
    await bad.undos[0].run();
    await tick();
    assert.equal(bad.toasts[1], "sem conexão");
    assert.equal(bad._choresHold, undefined, "out of the Agora: nothing to hold");
  });

  it("with more people: Trocar asks who; without points (or the board off): Desfazer; a failure says why", async () => {
    const api = fakeApi({ setCheck: null, scoreReassign: null });
    const a = new App({ api, score: SCORE({ participants: ["Ana", "Davi", "Caio"] }) });
    await a._markDone(pano(), "rotina");
    assert.equal(a.undos[0].label, "Trocar");
    a.undos[0].run();
    assert.deepEqual([a._sheet, a._form.title, a._form.points], ["who", "Passar pano", 20]);
    await a._form.run("Caio");
    assert.deepEqual([api.calls.at(-1), a._sheet], [["scoreReassign", "k-pano", "Caio"], null]);
    const plain = new App({ api: fakeApi({ setCheck: null }), score: SCORE({ enabled: false }) });
    await plain._markDone(pano({ summary: "Passar pano na casa inteira hoje", points: 0 }), "rotina");
    assert.deepEqual([plain.toasts[0], plain.undos[0].label], ["Passar pano na casa intei…: feito", "Desfazer"]);
    await plain.undos[0].run();
    assert.deepEqual(plain.api.calls.at(-1), ["setCheck", "k-pano", false, "rotina"]);
    const flaky = new App({ api: fakeApi({ setCheck: (k, done) => { if (!done) throw new Error("não desfez"); } }), score: null });
    await flaky._markDone(pano({ points: undefined }), "rotina");
    await flaky.undos[0].run();
    assert.equal(flaky.toasts[1], "não desfez");
    const bad = new App({ api: fakeApi({ setCheck: new Error("fora do ar") }), me: "Visita" });
    bad._sheet = "who";
    await bad._markDone(pano(), "rotina", "Davi");
    assert.deepEqual([bad.toasts, bad._sheet], [["Não consegui marcar: fora do ar"], null]);
    a._doneToast(pano(), "", 20, {});
    assert.deepEqual([a.toasts.at(-1), a.undos.at(-1)], ["Passar pano: feito", null], "nobody got the points: only that it is done");
  });

  it("done in part: O resto amanhã or Concluir com a parte; what is left or more is all done", async () => {
    const api = fakeApi({ checkPart: { points: 10 }, setCheck: null });
    const a = new App({ api, view: "now" });
    click(a._renderPartPick(), "50%");
    assert.deepEqual([a._partFrac(), a.updates > 0], [0.5, true]);
    assert.match(render(a._renderPartPick()).html, /class="part-opt on" aria-pressed="true"[^>]*><span class="pie" style="--f:50%"/);
    await a._markDone(pano(), "rotina", "Davi");
    assert.deepEqual([a._sheet, a._form.frac, a._form.by], ["parte", 0.5, "Davi"]);
    const sheet = a._renderPartSheet();
    assert.equal(text(sheet), "Feito em parte Passar pano · 50% por Davi · +10 O resto amanhã Concluir com 50%");
    click(sheet, "Concluir com 50%");
    await tick();
    assert.deepEqual(api.calls[0], ["setCheck", "k-pano", true, "rotina", "Davi", 0.5]);
    assert.deepEqual([a.toasts[0], a.undos[0].label, a._partFrac(), a._choresHold], ["Feito por Davi · +10", "Foi Ana", 1, true]);
    // the rest of a routine half done, with 75% chosen: all done, nothing asked
    a._part = 0.75;
    await a._markDone(pano({ part: { done: 0.5 } }), "rotina");
    assert.deepEqual(api.calls.at(-1), ["setCheck", "k-pano", true, "rotina", "Ana"]);
    assert.equal(a._partFrac(), 1);
    // without who and without points: the sheet says only how much
    const b = new App({ score: SCORE({ enabled: false }), form: { it: pano({ points: 0 }), frac: 0.25, by: null } });
    assert.equal(text(b._renderPartSheet()), "Feito em parte Passar pano · 25% O resto amanhã Concluir com 25%");
  });

  it("O resto amanhã: the part now (with Desfazer); Concluir com a parte with nobody on the board; the failures", async () => {
    const a = new App({ api: fakeApi({ checkPart: {}, setCheck: null }), score: SCORE({ enabled: false }), view: "now" });
    await a._markPart(pano({ points: 0 }), 0.25);
    assert.deepEqual([a.api.calls[0], a.toasts[0], a._choresHold], [["checkPart", "k-pano", 0.25, ""], "Passar pano: 25% · o resto amanhã", true]);
    await a.undos[0].run();
    assert.deepEqual(a.api.calls[1], ["setCheck", "k-pano", false, "rotina"]);
    await a._finishPart(pano({ points: 0 }), 0.5);
    assert.deepEqual([a.api.calls[2], a.toasts[1], a.undos[1].label], [["setCheck", "k-pano", true, "rotina", "", 0.5], "Passar pano: feito", "Desfazer"]);
    await a.undos[1].run();
    assert.deepEqual(a.api.calls[3], ["setCheck", "k-pano", false, "rotina"]);
    // each thing that can fail says so
    const bad = new App({ api: fakeApi({ checkPart: new Error("fora do ar"), setCheck: new Error("fora do ar") }), me: "Visita" });
    bad._sheet = "who";
    await bad._markPart(pano(), 0.5, "Ana");
    bad._sheet = "who";
    await bad._finishPart(pano(), 0.5, "Ana");
    assert.deepEqual([bad.toasts, bad._sheet], [["Não consegui marcar: fora do ar", "Não consegui marcar: fora do ar"], null]);
    const undo = new App({ api: fakeApi({ checkPart: {}, setCheck: new Error("não desfez") }) });
    await undo._markPart(pano(), 0.5);
    await undo.undos[0].run();
    const fin = new App({ api: fakeApi({ setCheck: (k, done) => { if (!done) throw new Error("não desfez"); } }), score: null });
    await fin._finishPart(pano(), 0.5);
    await fin.undos[0].run();
    assert.deepEqual([undo.toasts[1], fin.toasts[1]], ["não desfez", "não desfez"]);
  });

  it("a maintenance done: the next date, the points, Desfazer when there is something to undo", async () => {
    const a = new App({ api: fakeApi({ maintDone: { next: "2027-02-18", key: "m|1" } }) });
    a._sheet = "event";
    await a._maintDone(filtro());
    assert.deepEqual([a.api.calls[0], a._sheet, a.toasts[0], a.undos[0].label], [["maintDone", "calendar.casa", "u-filtro", "Ana"], null, "Feito por Ana · +15", "Foi Davi"]);
    const b = new App({ api: fakeApi({ maintDone: { next: "2027-02-18", undo: true }, maintUndo: null }), score: null });
    b._sheet = "event";
    await b._maintDone(filtro({ points: 0 }), null, true);
    assert.deepEqual([b._sheet, b.toasts[0], b.undos[0].label], ["event", "Feito. Próxima em 18 fev 2027", "Desfazer"], "the sheet asked to stay stays");
    await b.undos[0].run();
    assert.deepEqual(b.api.calls[1], ["maintUndo", "calendar.casa", "u-filtro"]);
    const c = new App({ api: fakeApi({ maintDone: null }), score: null });
    await c._maintDone(filtro({ points: undefined }));
    assert.deepEqual([c.toasts, c.undos], [["Feito"], [null]]);
    const who = new App({ api: fakeApi({ maintDone: {} }), me: "Visita" });
    who._sheet = "who";
    await who._maintDone(filtro(), "Davi", true);
    assert.equal(who._sheet, null, "the question of who always closes");
    const bad = new App({ api: fakeApi({ maintDone: new Error("fora do ar") }) });
    await bad._maintDone(filtro());
    assert.deepEqual(bad.toasts, ["Não consegui: fora do ar"]);
    const flaky = new App({ api: fakeApi({ maintDone: { undo: true }, maintUndo: new Error("não desfez") }), score: null });
    await flaky._maintDone(filtro());
    await flaky.undos[0].run();
    assert.equal(flaky.toasts[1], "não desfez");
  });

  it("Pular a maintenance: to the next one, with no points; Desfazer by what the server gave", async () => {
    const a = new App({ api: fakeApi({ maintSkip: { next: "2027-02-18", undo: true }, maintUndo: null }) });
    a._sheet = "event";
    await a._maintSkip(filtro());
    assert.deepEqual([a._sheet, a.haptics, a.toasts[0], a.undos[0].label], [null, ["light"], "Trocar o filtro: pulada, próxima em 18 fev 2027", "Desfazer"]);
    await a.undos[0].run();
    assert.deepEqual(a.api.calls[1], ["maintUndo", "calendar.casa", "u-filtro"]);
    const b = new App({ api: fakeApi({ maintSkip: { key: "k-filtro|2026-11-18" }, setCheck: new Error("não desfez") }) });
    await b._maintSkip(filtro());
    assert.equal(b.toasts[0], "Trocar o filtro: pulada");
    await b.undos[0].run();
    await tick();
    assert.deepEqual([b.api.calls.at(-1), b.toasts[1]], [["setCheck", "k-filtro|2026-11-18", false, "manutencao"], "não desfez"]);
    const c = new App({ api: fakeApi({ maintSkip: null }) });
    await c._maintSkip(filtro());
    assert.deepEqual(c.undos, [null], "nothing to undo");
    const bad = new App({ api: fakeApi({ maintSkip: new Error("fora do ar") }) });
    await bad._maintSkip(filtro());
    assert.deepEqual(bad.toasts, ["Não consegui: fora do ar"]);
  });
});

describe("Recompensas: the tab", () => {
  it("off (or nobody on the board): Rotinas in its place", () => {
    assert.equal(text(new App({ score: null })._renderRewards()), "Rotinas");
    assert.equal(text(new App({ score: SCORE({ enabled: false }) })._renderRewards()), "Rotinas");
    assert.equal(text(new App({ score: SCORE({ participants: [] }) })._renderRewards()), "Rotinas");
  });

  it("two people: the duel, who is ahead and by how much, when the period closes", () => {
    const a = new App({ score: SCORE({ manual: false }) });
    const t = text(a._renderRewards());
    assert.match(t, /^Recompensas Semana de 16 a 22\/11 · fecha em 4 dias A Ana 40 4 tarefas × D Davi 25 3 tarefas · 1 demérito Ana na frente por 15 pontos /);
    assert.match(render(a._renderRewards()).html, /role="img" aria-label="Ana 40 pontos, Davi 25 pontos">\s*<span style="width:61\.5%">/);
    assert.doesNotMatch(t, /Para pontuar hoje/, "without Marcar pontos em Recompensas: no card");
    const last = new App({ score: SCORE({ current: { ...SCORE().current, end: "2026-11-18" } }) });
    assert.match(text(last._renderRewards()), /fecha hoje à meia-noite/);
  });

  it("a tie, nobody yet, someone below zero, and one of the two with no line yet", () => {
    const foot = (s) => text(new App({ score: s })._boardFoot(s, s.rows.reduce((n, r) => n + r.points, 0)));
    assert.equal(foot(SCORE({ leader: null, rows: [row("Ana", 10), row("Davi", 10)] })), "Empatados");
    assert.equal(foot(SCORE({ leader: null, rows: [row("Ana", 0), row("Davi", 0)] })), "Ninguém pontuou ainda");
    assert.equal(foot(SCORE({ leader: "Ana", rows: [row("Ana", 1)] })), "Ana na frente");
    const neg = SCORE({ leader: "Ana", rows: [row("Ana", 10), row("Davi", -10)] });
    assert.match(render(new App({ score: neg })._renderDuel(neg, 0)).html, /<span style="width:100\.0%">/, "measured from the lowest");
    const zero = SCORE({ leader: null, rows: [row("Ana", 0)] });
    const h = render(new App({ score: zero })._renderDuel(zero, 0)).html;
    assert.match(h, /<span style="width:50\.0%">/);
    assert.match(text(new App({ score: zero })._renderDuel(zero, 0)), /D Davi 0 0 tarefas$/, "who has nothing yet: zero");
  });

  it("three or more: the ranking, each with a bar by the points", () => {
    const s = SCORE({ participants: ["Ana", "Davi", "Caio"], rows: [row("Ana", 40), row("Davi", 20), row("Caio", -5)] });
    const a = new App({ score: s });
    assert.match(text(a._renderRewards()), /1 A Ana 40 2 D Davi 20 3 C Caio -5 Ana na frente por 20 pontos/);
    const h = render(a._renderRanking(s)).html;
    assert.deepEqual([...h.matchAll(/<i style="width:([\d.]+)%">/g)].map((m) => m[1]), ["100.0", "50.0", "0.0"]);
    assert.match(h, /class="rank-row lead"/);
  });

  it("the placar on the Agora only on the Tela cheia, with the board on and the option not turned off", () => {
    assert.match(text(new App({ full: true })._renderPlacarNow()), /^Placar 16 a 22\/11 A Ana 40/);
    const three = SCORE({ participants: ["Ana", "Davi", "Caio"], rows: [row("Ana", 3), row("Davi", 2), row("Caio", 1)] });
    assert.match(render(new App({ full: true, score: three })._renderPlacarNow()).html, /rank-row/);
    assert.equal(new App()._renderPlacarNow(), nothing);
    assert.equal(new App({ full: true, score: null })._renderPlacarNow(), nothing);
    assert.equal(new App({ full: true, app: { placar_cheia: false } })._renderPlacarNow(), nothing);
    assert.equal(Object.assign(new App(), { _fullOn: undefined })._renderPlacarNow(), nothing);
  });
});

describe("Recompensas: the result of the last period", () => {
  const h = (over = {}) => ({ key: "2026-11-09", start: "2026-11-09", end: "2026-11-15", winner: "Davi", totals: { Ana: 30, Davi: 45 }, reward: "Escolher o filme", delivered: false, ...over });
  it("who won, the score and the prize, with Entregue; a tie has the prize still in play", async () => {
    const api = fakeApi({ scoreDelivered: null });
    const a = new App({ api, score: SCORE({ history: [h()] }) });
    const v = a._renderLastResult(a._score());
    assert.equal(text(v), "Semana passada · 9 a 14 de nov Davi venceu 30 × 45 Prêmio: Escolher o filme Entregue");
    click(v, "Entregue");
    await tick();
    assert.deepEqual([api.calls[0], a.haptics], [["scoreDelivered", "2026-11-09", true], ["success"]]);
    const tie = new App({ api, score: SCORE({ history: [h({ winner: null })] }) });
    const w = tie._renderLastResult(tie._score());
    assert.equal(text(w), "Semana passada · 9 a 14 de nov Empate 30 × 45 Prêmio em jogo: Escolher o filme");
    assert.deepEqual(labels(w), ["Fechar"], "no prize to deliver: only the X");
    assert.match(render(w).html, /class="result-card tie"/);
    const noPrize = new App({ score: SCORE({ history: [h({ reward: "", totals: undefined })] }) });
    assert.equal(text(noPrize._renderLastResult(noPrize._score())), "Semana passada · 9 a 14 de nov Davi venceu");
  });
  it("delivered, older than two weeks, or no history: nothing; a failure to mark says why", async () => {
    const none = (s) => new App({ score: s })._renderLastResult(s);
    assert.equal(none(SCORE()), nothing);
    assert.equal(none(SCORE({ history: undefined })), nothing);
    assert.equal(none(SCORE({ history: [h({ delivered: true })] })), nothing);
    assert.equal(none(SCORE({ history: [h({ start: "2026-10-26", end: "2026-11-01" })] })), nothing);
    const bad = new App({ api: fakeApi({ scoreDelivered: new Error("fora do ar") }) });
    await bad._setDelivered("k", false);
    assert.deepEqual([bad.toasts, bad.haptics], [["fora do ar"], []]);
    const off = new App({ api: fakeApi({ scoreDelivered: null }) });
    await off._setDelivered("k", false);
    assert.deepEqual(off.haptics, [], "unmarking does not buzz");
  });
});

describe("Recompensas: the prize", () => {
  it("none yet: Definir for this period and for the next", () => {
    const a = new App();
    const v = a._renderPrize(a._score());
    assert.equal(text(v), "Prêmio desta semana Ainda sem prêmio. Pode ser um para todos ou um para cada pessoa. Definir Prêmio da próxima semana ainda livre Definir");
    controls(v)[0].on.click();
    assert.deepEqual([a._sheet, a._form], ["prize", { which: "current", key: "2026-11-16", label: "16 a 22/11", mode: "todos", shared: "", per: { Ana: "", Davi: "" } }]);
    controls(v)[1].on.click();
    assert.deepEqual([a._form.which, a._form.key], ["next", "2026-11-23"]);
  });

  it("one for all, or one for each (who is ahead with the crown); Mudar opens with what is set", () => {
    const s = SCORE({ current: { ...SCORE().current, reward: "Jantar fora" }, next: { ...SCORE().next, prizes: { Ana: "Massagem" } } });
    const a = new App({ score: s });
    const t = text(a._renderPrize(s));
    assert.equal(t, "Prêmio desta semana Jantar fora Mudar Próxima semana: Ana: Massagem · Davi: livre Mudar");
    controls(a._renderPrize(s))[0].on.click();
    assert.deepEqual([a._form.mode, a._form.shared, a._form.per], ["todos", "Jantar fora", { Ana: "Jantar fora", Davi: "Jantar fora" }]);
    controls(a._renderPrize(s))[1].on.click();
    assert.deepEqual([a._form.mode, a._form.per], ["cada", { Ana: "Massagem", Davi: "" }]);
    const each = SCORE({ current: { ...SCORE().current, prizes: { Ana: "Massagem" } }, next: { ...SCORE().next, reward: "Folga da louça" } });
    const b = new App({ score: each });
    assert.equal(text(b._renderPrize(each)), "Prêmios desta semana Mudar A Se Ana vencer Massagem D Se Davi vencer ainda livre Prêmio da próxima semana: Folga da louça Mudar");
    assert.match(render(b._renderPrize(each)).html, /class="prize-person lead"[\s\S]*?class="pp-lead"/);
    const old = SCORE({ current: { key: "k", label: "x" }, next: { key: "n", label: "y" } });
    assert.match(text(new App({ score: old })._renderPrize(old)), /Ainda sem prêmio/, "a period without the fields of the prizes");
  });

  it("the sheet: the same for all or one for each, Enter does not break the line", () => {
    const a = new App({ form: { which: "current", key: "2026-11-16", label: "16 a 22/11", mode: "todos", shared: "", per: { Ana: "", Davi: "" } } });
    let v = a._renderPrizeSheet();
    assert.match(text(v), /^Prêmio desta semana 16 a 22\/11 O mesmo para todos Um para cada pessoa Quem fizer mais pontos ganha Cancelar Salvar$/);
    const ta = controls(v).find((c) => c.tag === "textarea");
    ta.on.input({ target: { value: "Jantar fora" } });
    assert.equal(a._form.shared, "Jantar fora");
    const enter = { key: "Enter", n: 0, preventDefault() { this.n++; } };
    ta.on.keydown(enter);
    ta.on.keydown({ key: "Enter", shiftKey: true, preventDefault() { enter.n += 10; } });
    ta.on.keydown({ key: "a", preventDefault() { enter.n += 10; } });
    assert.equal(enter.n, 1);
    click(v, "Um para cada pessoa");
    v = a._renderPrizeSheet();
    assert.match(text(v), /Se Ana vencer Se Davi vencer Quem vencer ganha o seu prêmio\. Empate: ninguém leva\./);
    const boxes = controls(v).filter((c) => c.tag === "textarea");
    boxes[1].on.input({ target: { value: "Massagem" } });
    assert.deepEqual(a._form.per, { Ana: "", Davi: "Massagem" });
    click(v, "O mesmo para todos");
    assert.equal(a._form.mode, "todos");
    a._sheet = "prize";
    click(a._renderPrizeSheet(), "Cancelar");
    assert.equal(a._sheet, null);
    const next = new App({ form: { which: "next", mode: "cada" } });
    assert.match(text(next._renderPrizeSheet()), /^Prêmio da próxima semana O mesmo/);
  });

  it("saving: the prize, the prizes, or the prize taken off; a failure says why", async () => {
    const save = async (form, api = fakeApi({ scorePrizes: null })) => {
      const a = new App({ api, form: { key: "2026-11-16", ...form } });
      a._sheet = "prize";
      click(a._renderPrizeSheet(), "Salvar");
      await tick();
      return [a.api.calls[0], a.toasts[0], a._sheet];
    };
    assert.deepEqual(await save({ mode: "todos", shared: "  Jantar fora ", per: { Ana: "x" } }), [["scorePrizes", "2026-11-16", "Jantar fora", {}], "Prêmio salvo", null]);
    assert.deepEqual(await save({ mode: "cada", shared: "x", per: { Ana: " Massagem ", Davi: "  " } }), [["scorePrizes", "2026-11-16", "", { Ana: "Massagem" }], "Prêmios salvos", null]);
    assert.deepEqual((await save({ mode: "todos", shared: "" }))[1], "Prêmio tirado");
    assert.deepEqual((await save({ mode: "cada" }))[1], "Prêmio tirado");
    assert.deepEqual((await save({ mode: "todos", shared: "x" }, fakeApi({ scorePrizes: new Error("fora do ar") })))[1], "Não consegui salvar: fora do ar");
  });
});

describe("Recompensas: Para pontuar hoje", () => {
  const home = (over = {}) => ({ routines: [pano(), pano({ key: "k-louca", uid: "u-louca", summary: "Lavar a louça", points: 10, done: { by: "Davi", at: NOW.toISOString() } }), pano({ key: "k-sem", summary: "Sem pontos", points: 0 })], maint: [filtro(), filtro({ key: "k-ok", summary: "Em dia", state: "ok" }), filtro({ key: "k-late", summary: "Limpar a calha", days: -3, state: "late", points: 8 }), filtro({ key: "k-soon", summary: "Revisar o carro", days: 4, state: "soon", points: 30 })], todos: { lists: [], items: [tarefa("Levar o lixo"), tarefa("Atrasada", { overdue: true, days: -2 }), tarefa("Um dia", { undated: true, due: null }), tarefa("Feita", { done: true }), tarefa("Feita ontem", { done: true, days: -1 }), tarefa("Amanhã", { days: 1 }), tarefa("Sem pontos", { points: 0 })] }, ...over });

  it("what still gives points (routines, tasks and maintenance), the count, and the done of today folded", () => {
    const a = new App({ home: home() });
    const t = text(a._renderToScore());
    assert.match(t, /^Para pontuar hoje 2 de 6 25% 50% 75% Tudo Passar pano /);
    assert.match(t, /Levar o lixo hoje · Casa · ResolvIA \+5 Atrasada atrasada · Casa · ResolvIA \+5 Um dia sem prazo · Casa · ResolvIA \+5/);
    assert.match(t, /Trocar o filtro é hoje · manutenção \+15 Limpar a calha venceu há 3 dias · manutenção \+8 Revisar o carro em 4 dias · manutenção \+30/);
    assert.match(t, /Concluídas \(2\) Tarefa com pontos Pontos avulsos$/);
    assert.doesNotMatch(t, /Em dia|Sem pontos|Feita ontem|Amanhã|Lavar a louça/);
    click(a._renderToScore(), "Concluídas (2)");
    assert.match(text(a._renderToScore()), /Concluídas \(2\) Lavar a louça .* Feita concluída · Casa · ResolvIA \+5/);
  });

  it("each line does its thing: the square concludes, the text opens, the points of a maintenance mark it", () => {
    const got = [];
    const a = new App({ home: home() });
    a._todoDone = (t, done, by) => got.push(["todo", t.summary, done, by]);
    a._maintDone = (m, by) => got.push(["maint", m.summary, by]);
    a._markDone = (r, kind, by) => got.push(["done", r.summary, kind, by]);
    a._scoreDoneOpen = true;
    const v = a._renderToScore();
    click(v, "Concluir Levar o lixo");
    click(v, "Reabrir Feita");
    click(v, "+15");
    const byText = (re) => controls(v).find((c) => re.test(c.text) && /chore-tx/.test(c.attrs)).on.click();
    byText(/^Passar pano/);
    byText(/^Levar o lixo/);
    byText(/^Feita concluída/);
    byText(/^Trocar o filtro/);
    assert.deepEqual(got, [["todo", "Levar o lixo", true, undefined], ["todo", "Feita", false, undefined], ["maint", "Trocar o filtro", undefined]]);
    assert.deepEqual(a.opened, [["item", "Passar pano"], ["item", "Trocar o filtro"]]);
    assert.deepEqual([a._sheet, a._form], ["todo", { key: "todo.casa|Feita" }]);
    click(v, "Tarefa com pontos");
    click(v, "Pontos avulsos");
    assert.deepEqual([a.opened.at(-1), a._sheet, a._form], [["form", "rotina"], "extra", { who: "Ana", points: 10, title: "" }]);
    const visit = new App({ home: home(), me: "Visita" });
    click(visit._renderToScore(), "Pontos avulsos");
    assert.equal(visit._form.who, "", "who is not on the board starts with nobody chosen");
  });

  it("Marcar por outras pessoas: the initials on each line give the points to that person", () => {
    const got = [];
    const a = new App({ home: home(), app: { who_pick: true } });
    a._todoDone = (t, done, by) => got.push(["todo", t.summary, by]);
    a._maintDone = (m, by) => got.push(["maint", m.summary, by]);
    a._markDone = (r, kind, by) => got.push(["done", r.summary, by]);
    const v = a._renderToScore();
    assert.match(text(v), /Passar pano \+20 · /);
    assert.match(text(v), /Levar o lixo \+5 · hoje · Casa · ResolvIA A D/);
    assert.match(text(v), /Trocar o filtro \+15 · é hoje · manutenção A D/);
    click(v, "Davi fez Passar pano (+20)");
    click(v, "Ana fez Levar o lixo (+5)");
    click(v, "Davi fez Trocar o filtro (+15)");
    assert.deepEqual(got, [["done", "Passar pano", "Davi"], ["todo", "Levar o lixo", "Ana"], ["maint", "Trocar o filtro", "Davi"]]);
  });

  it("all scored today; nothing with points (and where to give them); on vacation, paused", () => {
    const done = new App({ home: { routines: [pano({ done: { by: "Ana", at: NOW.toISOString() } })] } });
    assert.match(text(done._renderToScore()), /^Para pontuar hoje 1 de 1 Tudo pontuado hoje\. Concluídas \(1\)/);
    assert.equal(text(new App()._renderToScore()), "Para pontuar hoje Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em Adicionar › Rotina ou Manutenção. Tarefa com pontos Pontos avulsos");
    assert.match(text(new App({ app: { resolvia_on: true } })._renderToScore()), /ou Manutenção, ou a uma tarefa no ResolvIA\./);
    const away = new App({ home: home(), away: { from: "2026-11-17", to: "2026-11-20" } });
    const t = text(away._renderToScore());
    assert.match(t, /De férias até sexta, 20 de nov: rotinas, tarefas e manutenção pausadas\.$/);
    assert.doesNotMatch(t, /manutenção \+|ResolvIA|Pontos avulsos/);
    assert.match(text(Object.assign(new App({ home: home() }), { _awayNow: undefined })._renderToScore()), /Pontos avulsos$/);
  });

  it("Próximas rotinas (n), folded: the ones with points for another day, to do earlier and score now", () => {
    const cat = (summary, next, over = {}) => ({ key: `c|${summary}`, cal: "calendar.casa", uid: `u-${summary}`, kind: "rotina", summary, points: 6, next, late: 0, who: "", after: null, ...over });
    const catalog = [cat("Varrer a varanda", "2026-11-20", { after: { n: 3, unit: "dias" }, who: "Davi" }), cat("Aspirar", "2026-11-19"), cat("Banheiro", "2026-11-19"), cat("Hoje", "2026-11-18"), cat("Atrasada", "2026-11-25", { late: 2 }), cat("Sem pontos", "2026-11-25", { points: 0 }), cat("Remédio", "2026-11-25", { kind: "remedio" }), { ...cat("Passar pano", "2026-11-25"), uid: "u-pano" }, cat("Já feita", "2026-11-25")];
    const a = new App({ home: { routines: [pano()], catalog, checks: { "c|Já feita": { done: true } } } });
    const got = [];
    a._markDone = (r, kind, by) => got.push([r, kind, by]);
    assert.match(text(a._renderToScore()), /Próximas rotinas \(3\) Tarefa com pontos/);
    click(a._renderToScore(), "Próximas rotinas (3)");
    const t = text(a._renderToScore());
    assert.match(t, /Próximas rotinas \(3\) Fez antes do dia\? Marque aqui\. Aspirar amanhã \+6 Banheiro amanhã \+6 Varrer a varanda sexta, 20 de nov · volta 3 dias depois · Davi \+6/);
    click(a._renderToScore(), "Marcar Aspirar como feita hoje");
    assert.deepEqual(got, [[{ key: "c|Aspirar", summary: "Aspirar", points: 6 }, "rotina", undefined]]);
    controls(a._renderToScore()).find((c) => /^Banheiro/.test(c.text)).on.click();
    assert.deepEqual(a.opened, [["item", "Banheiro"]]);
    a._app_.who_pick = true;
    assert.match(text(a._renderToScore()), /Aspirar \+6 · amanhã A D/);
    click(a._renderToScore(), "Davi fez Aspirar (+6)");
    assert.equal(got[1][2], "Davi");
    click(a._renderToScore(), "Próximas rotinas (3)");
    assert.equal(a._futureOpen, false);
    assert.equal(new App()._renderFutureScore([], new Date(NOW), false), nothing);
  });
});

describe("Recompensas: the deméritos on the tab", () => {
  const dm = [{ id: "d1", title: "Toalha molhada na cama", points: 5 }, { id: "d2", title: "Luz acesa", points: 2 }];
  it("each with a button for each person; how many times this period, by whom", async () => {
    const s = SCORE({ entries: [{ key: "demerito|d1|1", kind: "demerito", who: "Davi" }, { key: "demerito|d1|2", kind: "demerito", who: "Davi" }, { key: "demerito|d1|3", kind: "demerito", who: "Ana" }, { key: "k", kind: "rotina", who: "Ana" }] });
    const a = new App({ score: s, app: { demerits: dm }, api: fakeApi({ scoreDemerit: { key: "demerito|d2|9" }, scoreRemove: null }) });
    const v = a._renderDemerits(s);
    assert.equal(text(v), "Deméritos 3 vezes nesta semana Toque em quem foi para descontar. Toalha molhada na cama Davi 2× · Ana 1× nesta semana −5 A Ana D Davi Luz acesa −2 A Ana D Davi");
    click(v, "Luz acesa: descontar de Davi");
    await tick();
    assert.deepEqual([a.api.calls[0], a.haptics, a.toasts[0], a.undos[0].label], [["scoreDemerit", "d2", "Davi"], ["warning"], "−2 para Davi: Luz acesa", "Desfazer"]);
    const none = new App({ app: { demerits: dm } });
    assert.match(text(none._renderDemerits(none._score())), /^Deméritos tiram pontos Toque/);
    const one = SCORE({ entries: [{ key: "demerito|d1|1", kind: "demerito", who: "Davi" }] });
    assert.match(text(new App({ score: one, app: { demerits: dm } })._renderDemerits(one)), /^Deméritos 1 vez nesta semana/);
  });
  it("none set up: no card; on vacation: paused", () => {
    assert.equal(new App()._renderDemerits(SCORE()), nothing);
    const s = SCORE({ entries: [{ key: "demerito|d1|1", kind: "demerito", who: "Davi" }] });
    assert.equal(text(new App({ score: s, app: { demerits: dm }, away: { to: "2026-11-20" } })._renderDemerits(s)), "Deméritos 1 vez nesta semana Pausados nas férias.");
    assert.equal(text(new App({ app: { demerits: dm }, away: { to: "2026-11-20" } })._renderDemerits(SCORE())), "Deméritos tiram pontos Pausados nas férias.");
    assert.match(text(Object.assign(new App({ app: { demerits: dm } }), { _awayNow: undefined })._renderDemerits(SCORE())), /Toque em quem foi/);
  });
});

describe("Mais › Recompensas: the deméritos to set up", () => {
  it("none yet: ideas to add in a tap, and Novo demérito; the ones set open to change", async () => {
    const a = new App();
    const v = a._renderDemeritsSettings();
    assert.equal(text(v), "Deméritos O que tira pontos de quem fizer. Toalha molhada na cama −5 Louça suja na pia −5 Roupa no chão −3 Luz acesa sem ninguém −2 Novo demérito");
    click(v, "Roupa no chão −3");
    await tick();
    assert.deepEqual([a.prefs[0].demerits.map((d) => [d.title, d.points]), a.toasts[0]], [[["Roupa no chão", 3]], "Demérito criado: Roupa no chão · −3"]);
    assert.match(a.prefs[0].demerits[0].id, /^[a-z0-9]{8}$/);
    click(v, "Novo demérito");
    assert.deepEqual([a._sheet, a._form], ["demerit", { id: null, title: "", points: 5, mode: "add" }]);
    const w = a._renderDemeritsSettings();
    assert.match(text(w), /^Deméritos O que tira pontos de quem fizer\. Roupa no chão −3 Novo demérito$/);
    click(w, /Roupa no chão/);
    assert.deepEqual([a._form.mode, a._form.title, a._form.points], ["edit", "Roupa no chão", 3]);
  });

  it("the sheet: what it was, how many points (the usual ones or another), Criar only with both", () => {
    const a = new App({ form: { id: null, title: "", points: 5, mode: "add" } });
    let v = a._renderDemeritSheet();
    assert.match(text(v), /^Novo demérito O que foi Quantos pontos tira −2 −3 −5 −10 −20 Outro Cancelar Criar$/);
    assert.match(render(v).html, /<button class="btn primary" disabled /);
    const ta = controls(v).find((c) => c.tag === "textarea");
    ta.on.input({ target: { value: "Sapato na sala" } });
    const enter = { key: "Enter", n: 0, preventDefault() { this.n++; } };
    ta.on.keydown(enter);
    click(v, "−10");
    assert.deepEqual([a._form.title, a._form.points, a._form.custom, enter.n], ["Sapato na sala", 10, false, 1]);
    click(a._renderDemeritSheet(), "Outro");
    v = a._renderDemeritSheet();
    const num = controls(v).find((c) => c.tag === "input");
    num.on.input({ target: { value: "7" } });
    num.on.input({ target: { value: "5000" } });
    assert.equal(a._form.points, 1000, "up to 1000");
    num.on.input({ target: { value: "abc" } });
    assert.equal(a._form.points, 0);
    assert.match(render(a._renderDemeritSheet()).html, /<button class="btn primary" disabled /, "0 points: Criar waits");
    a._sheet = "demerit";
    click(a._renderDemeritSheet(), "Cancelar");
    assert.equal(a._sheet, null);
    const edit = new App({ form: { id: "d1", title: "Louça", points: 7, mode: "edit" } });
    assert.match(text(edit._renderDemeritSheet()), /^Editar demérito .* Outro pontos Apagar Salvar$/, "7 is not one of the usual: Outro, with the number");
    edit._deleteDemerit = function () { this.asked = true; };
    click(edit._renderDemeritSheet(), "Apagar");
    edit._saveDemeritForm = function () { this.saved = true; };
    click(edit._renderDemeritSheet(), "Salvar");
    assert.deepEqual([edit.asked, edit.saved], [true, true]);
  });
});

describe("Recompensas: points apart, and a wrong score taken off", () => {
  it("Pontos avulsos: what, who and how many; Dar only with the three", async () => {
    const a = new App({ api: fakeApi({ scoreExtra: null }), form: { who: "", points: 10, title: "" } });
    let v = a._renderExtraSheet();
    assert.match(text(v), /^Pontos avulsos Para o que não está na agenda\. O que foi feito Quem fez A Ana D Davi Pontos \+5 \+10 \+20 \+30 \+50 Cancelar Dar 10 pontos$/);
    assert.match(render(v).html, /<button class="btn primary" disabled /);
    const ta = controls(v).find((c) => c.tag === "textarea");
    ta.on.input({ target: { value: " Lavou o carro " } });
    ta.on.keydown({ key: "a", preventDefault() {} });
    click(v, /Davi/);
    click(v, "+30");
    assert.deepEqual([a._form.who, a._form.points], ["Davi", 30]);
    fire(a._renderExtraSheet(), "Outro valor", "input", { target: { value: "45" } });
    v = a._renderExtraSheet();
    assert.match(text(v), /Dar 45 pontos$/);
    a._sheet = "extra";
    click(v, "Dar 45 pontos");
    await tick();
    assert.deepEqual([a.api.calls[0], a.toasts, a._sheet, a.haptics], [["scoreExtra", "Davi", 45, "Lavou o carro"], ["+45 para Davi"], null, ["success"]]);
    a._sheet = "extra";
    click(a._renderExtraSheet(), "Cancelar");
    assert.equal(a._sheet, null);
    const bad = new App({ api: fakeApi({ scoreExtra: new Error("fora do ar") }), form: { who: "Ana", points: "x", title: "y" } });
    assert.match(text(bad._renderExtraSheet()), /Dar 0 pontos$/);
    await bad._saveExtra();
    assert.deepEqual(bad.toasts, ["fora do ar"]);
    assert.equal(text(new App({ score: null, form: { who: "", points: 5, title: "" } })._renderExtraSheet()).includes("Quem fez Pontos"), true, "nobody on the board: no people to pick");
  });

  it("taking points (or a demérito) off the board, with Desfazer; the failures say why", async () => {
    const a = new App({ api: fakeApi({ scoreRemove: null, scoreRestore: null }) });
    await a._removePoints({ key: "k1", title: "Passar pano na casa toda de novo", who: "Ana Souza", points: 20 });
    await a._removePoints({ key: "d1", title: "Toalha", who: "Davi", points: -5 });
    assert.deepEqual(a.toasts, ["Passar pano na casa toda…: pontos de Ana tirados", "Toalha: demérito tirado"]);
    await a.undos[0].run();
    assert.deepEqual(a.api.calls.at(-1), ["scoreRestore", "k1"]);
    const bad = new App({ api: fakeApi({ scoreRemove: new Error("fora do ar") }) });
    await bad._removePoints({ key: "k1", title: "x", who: "Ana", points: 1 });
    const half = new App({ api: fakeApi({ scoreRemove: null, scoreRestore: new Error("não voltou") }) });
    await half._removePoints({ key: "k1", title: "x", who: "Ana", points: 1 });
    await half.undos[0].run();
    assert.deepEqual([bad.toasts, half.toasts[1]], [["fora do ar"], "não voltou"]);
    const dm = new App({ api: fakeApi({ scoreDemerit: new Error("de férias") }) });
    await dm._markDemerit({ id: "d1", title: "Toalha", points: 5 }, "Ana");
    const und = new App({ api: fakeApi({ scoreDemerit: { key: "k" }, scoreRemove: new Error("não desfez") }) });
    await und._markDemerit({ id: "d1", title: "Toalha", points: 5 }, "Ana");
    await und.undos[0].run();
    await tick();
    assert.deepEqual([dm.toasts, und.toasts[1]], [["de férias"], "não desfez"]);
  });
});

describe("Recompensas: the Histórico and the Extrato of a past period", () => {
  const hist = [
    { key: "h1", start: "2026-11-09", end: "2026-11-15", winner: "Davi", totals: { Ana: 30, Davi: 45 }, reward: "Escolher o filme", delivered: false },
    { key: "h2", start: "2026-11-02", end: "2026-11-08", winner: null, totals: { Ana: 20, Davi: 20 }, reward: "Pizza", delivered: false },
    { key: "h3", start: "2026-10-26", end: "2026-11-01", winner: "Davi", totals: undefined, reward: "", delivered: true },
    { key: "h4", start: "2026-10-19", end: "2026-10-25", winner: "Ana", totals: { Ana: 9, Davi: 1 }, reward: "Massagem", delivered: true },
  ];
  it("each period with who won, the score, the prize and whether it was delivered; the wins counted", async () => {
    const s = SCORE({ history: hist });
    const a = new App({ score: s, api: fakeApi({ scoreDelivered: null, scoreLog: [] }) });
    const v = a._renderHistory(s);
    assert.equal(text(v), "Histórico Davi 2 · Ana 1 D Davi venceu · 30 × 45 9 a 14 de nov · Escolher o filme = Empate · 20 × 20 2 a 7 de nov · Pizza D Davi venceu · 26 a 31 de out A Ana venceu · 9 × 1 19 a 24 de out · Massagem");
    click(v, "Marcar prêmio como entregue");
    click(v, "Prêmio entregue");
    await tick();
    assert.deepEqual(a.api.calls.slice(0, 2), [["scoreDelivered", "h1", true], ["scoreDelivered", "h4", false]]);
    assert.equal(new App()._renderHistory(SCORE()), nothing);
    assert.equal(new App()._renderHistory(SCORE({ history: undefined })), nothing);
    const many = SCORE({ history: Array.from({ length: 12 }, (_, i) => ({ ...hist[0], key: `k${i}` })) });
    assert.equal(controls(new App({ score: many })._renderHistory(many)).filter((c) => /hist-open/.test(c.attrs)).length, 10, "the last 10");
  });

  it("a tap opens the Extrato of that period: its result and its lines, with Ver mais while there are more", async () => {
    const lines = (n, from = 100) => Array.from({ length: n }, (_, i) => ({ id: from - i, type: "ganhou", who: "Ana", points: 5, title: `Tarefa ${i}`, at: at(2026, 11, 10, 9).toISOString(), key: `k${from - i}` }));
    let n = 0;
    const api = fakeApi({ scoreLog: () => (n++ ? lines(3, 40) : lines(60)) });
    const a = new App({ score: SCORE({ history: hist }), api });
    click(a._renderHistory(a._score()), "Extrato de 9 a 14 de nov");
    assert.equal(text(a._renderPeriodLogSheet()), "Extrato · 9 a 14 de nov D Davi venceu Ana 30 × Davi 45 · Escolher o filme Carregando…");
    await tick();
    await tick();
    assert.deepEqual([a._sheet, api.calls[0], a._form.lines.length, a._form.end, a._form.busy], ["periodlog", ["scoreLog", 0, 60, "2026-11-09", "2026-11-15"], 60, false, false]);
    const t = text(a._renderPeriodLogSheet());
    assert.match(t, /Terça, 10 nov A Ana ganhou 5 pontos Tarefa 0 · 09:00 \+5/);
    assert.match(t, /Ver mais$/);
    assert.doesNotMatch(render(a._renderPeriodLogSheet()).html, /Tirar os pontos|ext-x-gap/, "a closed period: no × on the lines");
    click(a._renderPeriodLogSheet(), "Ver mais");
    assert.match(text(a._renderPeriodLogSheet()), /Carregando…$/);
    await tick();
    assert.deepEqual([api.calls[1], a._form.lines.length, a._form.end], [["scoreLog", 41, 60, "2026-11-09", "2026-11-15"], 63, true]);
    assert.doesNotMatch(text(a._renderPeriodLogSheet()), /Ver mais/);
    const tie = new App({ score: SCORE({ history: hist }), form: { period: hist[1], lines: [], end: true } });
    assert.equal(text(tie._renderPeriodLogSheet()), "Extrato · 2 a 7 de nov = Empate Ana 20 × Davi 20 · Pizza Nada registrado nesse período.");
    const bare = new App({ score: null, form: { period: hist[2], lines: [], end: true } });
    assert.match(text(bare._renderPeriodLogSheet()), /D Davi venceu Nada registrado/);
  });

  it("a failure keeps what was read; the window closed or changed meanwhile drops the answer", async () => {
    const bad = new App({ api: fakeApi({ scoreLog: new Error("fora do ar") }), form: { period: hist[0], lines: null } });
    await bad._morePeriodLog();
    assert.deepEqual([bad._form.lines, bad._form.end, bad._form.busy, bad.toasts], [[], true, false, ["fora do ar"]]);
    const gone = new App({ api: fakeApi({ scoreLog: new Error("fora do ar") }), form: { period: hist[0], lines: null } });
    const p = gone._morePeriodLog();
    gone._form = { period: hist[1] };
    await p;
    assert.deepEqual([gone._form, gone.toasts], [{ period: hist[1] }, ["fora do ar"]]);
    const other = new App({ api: fakeApi({ scoreLog: [{ id: 1 }] }), form: { period: hist[0], lines: null } });
    const q = other._morePeriodLog();
    other._form = null;
    await q;
    assert.equal(other._form, null);
    const none = new App({ form: {} });
    await none._morePeriodLog();
    assert.deepEqual(none._form, {});
  });
});

describe("Recompensas: the Extrato of this period", () => {
  const line = (id, over = {}) => ({ id, type: "ganhou", who: "Ana", points: 5, title: `Tarefa ${id}`, at: at(2026, 11, 18, 9).toISOString(), key: `k${id}`, ...over });
  it("nothing yet; the newest 5, then Ver mais opens the rest, and Ver menos goes back", async () => {
    assert.equal(text(new App()._renderExtrato(SCORE())), "Extrato desta semana Nada mexeu nos pontos nesta semana ainda.");
    const log = [9, 8, 7, 6, 5, 4, 3].map((i) => line(i, i === 8 ? { at: at(2026, 11, 17, 21).toISOString() } : i < 8 ? { at: at(2026, 11, 14, 8).toISOString() } : {}));
    const s = SCORE({ log, log_count: 7, entries: [{ key: "k9", title: "Tarefa 9", points: 5, who: "Ana" }] });
    const a = new App({ score: s });
    let t = text(a._renderExtrato(s));
    assert.match(t, /^Extrato desta semana 7 mudanças Hoje A Ana ganhou 5 pontos Tarefa 9 · 09:00 \+5 Ontem A Ana ganhou 5 pontos Tarefa 8 · 21:00 \+5 Sábado, 14 nov A Ana ganhou 5 pontos Tarefa 7 · 08:00 \+5/);
    assert.match(t, /Tarefa 5 · 08:00 \+5 Ver mais \(2\)$/);
    assert.equal(labels(a._renderExtrato(s)).filter((l) => /Tirar os pontos/.test(l)).length, 1, "the × only on what is still on the board");
    click(a._renderExtrato(s), "Ver mais (2)");
    t = text(a._renderExtrato(s));
    assert.match(t, /Tarefa 3 · 08:00 \+5 Ver menos$/, "all of it; nothing more to ask the server");
    const panel = { top: -40, seen: null, getBoundingClientRect() { return { top: this.top }; }, scrollIntoView(o) { this.seen = o; } };
    controls(a._renderExtrato(s)).find((c) => c.text === "Ver menos").on.click({ currentTarget: { closest: () => panel } });
    await a.updateComplete;
    assert.deepEqual([a._extOpen, panel.seen], [false, { block: "start", behavior: "smooth" }], "back to the head of the Extrato");
    a._extOpen = true;
    panel.top = 20;
    panel.seen = null;
    a._closeExtrato({ currentTarget: { closest: () => panel } });
    a._closeExtrato({ currentTarget: { closest: () => null } });
    await a.updateComplete;
    assert.equal(panel.seen, null, "already in view: no scroll");
  });

  it("more on the server: Ver mais reads the older ones (once each), until there are none; a new period starts over", async () => {
    const log = [50, 49, 48, 47, 46, 45].map((i) => line(i));
    const s = SCORE({ log, log_count: 60 });
    let n = 0;
    const older = Array.from({ length: 40 }, (_, i) => line(44 - i));
    const api = fakeApi({ scoreLog: () => (n++ ? [line(5), line(4), line(3)] : older) });
    const a = new App({ score: s, api });
    click(a._renderExtrato(s), "Ver mais (55)");
    assert.match(text(a._renderExtrato(s)), /Ver mais \(54\) Ver menos$/);
    const going = controls(a._renderExtrato(s)).find((c) => /^Ver mais/.test(c.text)).on.click();
    assert.match(text(a._renderExtrato(s)), /Carregando… Ver menos$/);
    await going;
    assert.deepEqual([api.calls[0], a._extMore.length, a._extEnd, a._extBusy], [["scoreLog", 45, 40, "2026-11-16", "2026-11-22"], 40, false, false]);
    assert.match(text(a._renderExtrato(s)), /Ver mais \(14\) Ver menos$/);
    await a._loadExtrato(5, s.current);
    assert.deepEqual([api.calls[1][1], a._extMore.length, a._extEnd], [5, 42, true], "line 5 came again: once only");
    assert.doesNotMatch(text(a._renderExtrato(s)), /Ver mais/);
    const next = SCORE({ current: { ...s.current, key: "2026-11-23" }, log: [line(99)], log_count: 1 });
    assert.match(text(a._renderExtrato(next)), /1 mudança Hoje A Ana ganhou 5 pontos Tarefa 99/);
    assert.deepEqual([a._extMore, a._extEnd, a._extOpen], [[], false, false], "another period: what was read belongs to the old one");
    const bad = new App({ score: s, api: fakeApi({ scoreLog: new Error("fora do ar") }) });
    await bad._loadExtrato(45, s.current);
    assert.deepEqual([bad.toasts, bad._extBusy], [["fora do ar"], false]);
    const empty = new App({ score: s, api: fakeApi({ scoreLog: null }) });
    await empty._loadExtrato(45, s.current);
    assert.equal(empty._extEnd, true);
  });

  it("each kind of line: the period closed, points that changed hands, a demérito; the × takes the points off", async () => {
    const s = SCORE({ entries: [{ key: "k1", title: "Passar pano", points: 20, who: "Ana" }, { key: "d1", title: "Toalha", points: -5, who: "Davi" }] });
    const a = new App({ score: s, api: fakeApi({ scoreRemove: null }) });
    const rows = a._extRows([
      line(9, { key: "k1", title: "Passar pano", points: 20 }),
      line(8, { key: "k1", type: "desmarcou", points: -20, title: "Passar pano" }),
      line(7, { key: "d1", type: "perdeu", who: "Davi", points: -5, title: "Toalha", kind: "demerito" }),
      line(6, { key: "k6", type: "trocou", who: "Davi", from: "Ana", points: 10 }),
      line(5, { key: null, type: "ajuste", points: 0 }),
      line(4, { type: "fechou", winner: "Davi", totals: { Ana: 30, Davi: 45 }, reward: "Filme", period: { start: "2026-11-09", end: "2026-11-15" } }),
      line(3, { type: "fechou", winner: null, reward: "Filme" }),
    ], s, new Map(s.entries.map((e) => [e.key, e])));
    const t = text(rows);
    assert.match(t, /^Hoje A Ana ganhou 20 pontos Passar pano · 09:00 \+20 A Ana perdeu 20 pontos Desmarcado: Passar pano · 09:00 −20 D Davi perdeu 5 pontos Demérito: Toalha · 09:00 −5/);
    assert.match(t, /D 10 pontos passaram de Ana para Davi Tarefa 6 · 09:00 10/);
    assert.match(t, /Davi venceu · 30 × 45 Fechou: 9 a 14 de nov · Filme · 09:00 Empate Fechou: · 09:00$/);
    const xs = controls(rows).map((c) => c.aria);
    assert.deepEqual(xs, ["Tirar os pontos: Passar pano", "Cancelar o demérito: Toalha"], "the × on the newest line of each entry still on the board");
    assert.match(render(rows).html, /<span class="pts swap" title="Passaram de Ana para Davi">/);
    assert.equal((render(rows).html.match(/class="ext-x-gap"/g) || []).length, 3, "this period: the lines without × keep its place");
    click(rows, "Cancelar o demérito: Toalha");
    await tick();
    assert.deepEqual(a.api.calls[0], ["scoreRemove", "d1"]);
    assert.match(render(a._renderExtLine(line(1, { points: 0 }), s, null, false)).html, /<span class="pts got">0<\/span>\s*<\/div>/, "a closed period: no gap");
  });
});

describe("Mais › Recompensas: the settings", () => {
  it("off: only the switch; turning it on starts with who played before, else the people of the house (no pets)", () => {
    const a = new App({ score: null, home: { people: [ANA, DAVI, REX, { name: "Sem pessoa" }] } });
    const v = a._renderScoreSettings();
    assert.equal(text(v), "Placar Usar recompensas Placar da casa, prêmio e deméritos.");
    fire(v, "Usar recompensas", "change", { target: { checked: true } });
    const p = a.prefs[0].score;
    assert.deepEqual([p.enabled, p.participants, p.period, p.notify, p.manual, p.remind, p.remind_to], [true, ["Ana", "Davi"], "semana", true, false, null, null]);
    assert.match(p.anchor, /^\d{4}-\d\d-\d\d$/);
    const before = new App({ score: SCORE({ enabled: false, participants: ["Caio"] }) });
    fire(before._renderScoreSettings(), "Usar recompensas", "change", { target: { checked: true } });
    assert.deepEqual(before.prefs[0].score.participants, ["Caio"]);
    const nobody = new App({ score: null, home: { people: [REX] } });
    assert.equal(text(nobody._renderScoreSettings()), "Placar Usar recompensas Sem pessoas no Home Assistant.");
    assert.match(render(nobody._renderScoreSettings()).html, /role="switch" checked="false" disabled /);
    assert.equal(text(Object.assign(new App({ score: null }), { _ix: () => ({}) })._renderScoreSettings()), "Placar Usar recompensas Sem pessoas no Home Assistant.");
  });

  it("on: who plays, when it closes, each switch, and the deméritos after", () => {
    const a = new App({ home: { people: [ANA, DAVI, REX, { name: "Caio", pet: false }] } });
    const v = a._renderScoreSettings();
    const t = text(v);
    assert.match(t, /^Placar Usar recompensas Placar da casa, prêmio e deméritos\. Quem participa A Ana D Davi C Caio O placar fecha /);
    assert.match(t, /A semana começa na segunda\. Marcar pontos em Recompensas O card Para pontuar hoje\. Marcar por outras pessoas As iniciais de cada pessoa ao lado das tarefas\. Resultado no celular Quem venceu, quando o período fecha\. Na tela cheia da Agora Os pontos e quem está ganhando\. Lembrete diário Os pontos e quem está ganhando, no celular\. Deméritos /);
    const turn = (label, checked) => fire(v, label, "change", { target: { checked } });
    click(v, /Caio/);
    click(v, /Davi/);
    turn("Usar recompensas", false);
    turn("Marcar pontos em Recompensas", false);
    turn("Marcar por outras pessoas", true);
    turn("Marcar por outras pessoas", false);
    turn("Resultado no celular", false);
    turn("Placar na tela cheia da Agora", false);
    turn("Placar na tela cheia da Agora", true);
    turn("Lembrete diário", true);
    turn("Lembrete diário", false);
    const sc = a.prefs.filter((p) => p.score).map((p) => p.score);
    assert.deepEqual([sc[0].participants, sc[1].participants, sc[2].enabled, sc[3].manual, sc[4].notify, sc[5].remind, sc[6].remind], [["Ana", "Davi", "Caio"], ["Ana"], false, false, false, "20:00", null]);
    assert.deepEqual(a.prefs.filter((p) => !p.score), [{ who_pick: true }, { who_pick: null }, { placar_cheia: false }, { placar_cheia: null }]);
    // the period: a tap on each, counted from today
    const segs = controls(v).filter((c) => c.tag === "button" && !/class="pick/.test(c.attrs) && !/role=/.test(c.attrs));
    segs[segs.length - 1].on.click();
    assert.match(a.prefs.at(-1).score.anchor, /^\d{4}-\d\d-\d\d$/);
    assert.ok(["semana", "quinzena", "mes"].includes(a.prefs.at(-1).score.period));
    const mes = new App({ score: SCORE({ period: "mes" }) });
    assert.match(text(mes._renderScoreSettings()), /No primeiro dia de cada mês\./);
    assert.match(text(new App({ app: { week_start: 0 } })._renderScoreSettings()), /A semana começa no domingo\./);
    const old = new App({ score: { enabled: true, participants: ["Ana"] } });
    fire(old._renderScoreSettings(), "Resultado no celular", "change", { target: { checked: true } });
    const o = old.prefs[0].score;
    assert.deepEqual([o.period, o.manual, o.remind, o.remind_to, o.notify], ["semana", false, null, null, true], "a board of before: what is missing gets its default");
    assert.match(o.anchor, /^\d{4}-\d\d-\d\d$/);
    const none = new App({ score: null });
    none._scorePrefs({ enabled: false });
    assert.deepEqual([none.prefs[0].score.enabled, none.prefs[0].score.participants], [false, []]);
  });

  it("the daily reminder: when, who receives (and who has no phone), Testar no meu celular", async () => {
    const s = SCORE({ remind: "20:00" });
    const a = new App({ score: s, api: fakeApi({ testScoreReminder: null }) });
    const v = a._renderScoreSettings();
    const t = text(v);
    assert.match(t, /Quando Manhã Tarde Noite .*Quem recebe Ana Davi sem celular Sem celular para Davi: ligue o celular à pessoa no Home Assistant\. Testar no meu celular/);
    click(v, "Manhã");
    assert.match(a.prefs[0].score.remind, /^\d\d:\d\d$/);
    assert.notEqual(a.prefs[0].score.remind, "20:00");
    controls(v).find((c) => c.aria === "Horário do lembrete: 20:00");
    const quem = (view) => controls(view).filter((c) => /quem-p/.test(c.attrs));
    quem(v)[1].on.click();
    assert.deepEqual(a.prefs[1].score.remind_to, ["Ana"], "Davi out");
    click(v, "Testar no meu celular");
    await tick();
    assert.deepEqual([a.api.calls[0], a.toasts], [["testScoreReminder"], ["Lembrete enviado para o seu celular. Toque nele para abrir Recompensas."]]);
    // only Ana receives: Davi back makes it everyone (nothing kept); Ana out: nobody, and it says to choose
    const only = new App({ score: SCORE({ remind: "07:30", remind_to: ["Ana"] }) });
    const w = only._renderScoreRemind(only._score());
    assert.doesNotMatch(text(w), /Sem celular para/);
    quem(w)[1].on.click();
    assert.equal(only.prefs[0].score.remind_to, null);
    quem(w)[0].on.click();
    assert.deepEqual(only.prefs[1].score.remind_to, []);
    const nobody = new App({ score: SCORE({ remind: "13:00", remind_to: [] }) });
    assert.match(text(nobody._renderScoreRemind(nobody._score())), /Escolha quem recebe\./);
    // several without a phone, and the person of this device without one: Testar waits, with the reason
    const many = new App({ score: SCORE({ remind: "20:00", participants: ["Ana", "Davi", "Caio", "Duda"] }), me: "Davi", home: { people: [ANA, DAVI] } });
    const m = many._renderScoreRemind(many._score());
    assert.match(text(m), /Sem celular para Davi, Caio e Duda:/);
    assert.match(render(m).html, /class="btn outline remind-test" disabled title="Sem celular ligado a você no Home Assistant"/);
    const noMe = Object.assign(new App({ score: s }), { _me: undefined, _ix: () => ({ score: s }) });
    assert.match(render(noMe._renderScoreRemind(s)).html, /remind-test" disabled /);
    const bad = new App({ score: s, api: fakeApi({ testScoreReminder: new Error("sem celular") }) });
    await bad._testScoreReminder();
    assert.deepEqual(bad.toasts, ["Não foi: sem celular"]);
  });

  it("the time of the reminder: the field of the app saves what was picked", () => {
    const a = new App({ score: SCORE({ remind: "20:00" }) });
    const field = controls(a._renderScoreRemind(a._score())).find((c) => /remind-time/.test(c.attrs));
    assert.equal(field.aria, "Horário do lembrete: 20:00");
  });
});
