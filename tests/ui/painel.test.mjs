// tests/ui: 1.94.0, the Tela cheia as the panel of the house (painel.js): what has a time goes to A seguir (the next
// time, everything at that minute, from every calendar and app) and Depois (the rest of today, then Amanhã cedo); what
// has no time goes to Tarefas do dia, by when (Atrasadas, the parts of the day, Qualquer hora, Contas a pagar); the
// placar under the tasks; the sheet of the MemorIA on the right. Names, medicines and bills invented.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { html, nothing } from "../../frontend/vendor/lit-all.min.js";
import { text, render, fakeApi, hostOf } from "../_lit.mjs";
import { PainelMixin, painelPlan, periodsAhead, whatAt } from "../../frontend/src/painel.js";
import { ModelsMixin } from "../../frontend/src/models.js";
import { TasksMixin } from "../../frontend/src/tasks.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";

const NOW = at(2026, 11, 17, 17, 20);
const ev = (summary, h, m, h2, m2, over = {}) => ({ summary, cal: over.cal || "calendar.davi", uid: `u-${summary}`, start: at(2026, 11, over.day || 17, h, m), end: at(2026, 11, over.day || 17, h2, m2), allDay: false, kind: null, todo: null, ...over });
const iso = (h, m = 0, day = 17) => at(2026, 11, day, h, m).toISOString();
const dose = (summary, h, m, over = {}) => ({ key: `d|${summary}`, cal: "calendar.saude", summary, who: "Ana", dose: "1", time: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`, start: iso(h, m), allDay: false, taken: null, state: "depois", late_min: 0, ...over });
const chore = (summary, over = {}) => ({ key: `r|${summary}`, cal: "calendar.casa", kind: "rotina", summary, points: 10, period: "", time: "", after: null, late: 0, yesterday: false, done: null, part: null, who: "", ...over });
const todo = (summary, over = {}) => ({ key: `t|${summary}`, list: "todo.casa", uid: `t-${summary}`, summary, listName: "Casa", allDay: true, due: "2026-11-17", days: 0, overdue: false, done: false, undated: false, points: 0, ...over });
const maint = (summary, days, over = {}) => ({ key: `m|${summary}`, cal: "calendar.casa", uid: `m-${summary}`, summary, days, state: days < 0 ? "vencida" : "perto", due: "2026-11-17", canMove: true, points: 20, who: "", rooms: [], equips: [], ...over });
const bill = (title, due, over = {}) => ({ id: `b|${title}`, source: "gerencia", title, value: 245.9, due, paid: false, overdue: false, sub: "", ...over });

const EVENTS = [
  ev("Treino", 18, 0, 19, 30),
  ev("Dentista", 18, 0, 19, 0, { cal: "calendar.ana" }),
  ev("Reunião da escola", 19, 30, 20, 30, { cal: "calendar.familia" }),
  ev("Plantão", 16, 0, 18, 30),
  ev("Café da manhã", 7, 0, 8, 0),
  ev("Revisão do carro", 8, 30, 9, 30, { day: 18 }),
  ev("Viagem", 0, 0, 0, 0, { allDay: true, start: at(2026, 11, 17), end: at(2026, 11, 19) }),
  ev("Feito já", 21, 0, 22, 0),
];
const MEDS = [
  dose("Losartana", 8, 0, { state: "atrasado", late_min: 560 }),
  dose("Gardenal", 17, 15, { state: "agora", who: "Luna" }),
  dose("Vitamina D", 20, 0),
  dose("Ômega 3", 12, 0, { state: "tomado", taken: { at: iso(12, 5) } }),
  dose("Probiótico", 0, 0, { allDay: true, time: "" }),
];
const ROUTINES = [
  chore("Banheiro da manhã", { period: "manha" }),
  chore("Banheiro da tarde", { period: "tarde" }),
  chore("Louça", { period: "noite" }),
  chore("Lixo", { time: "21:30" }),
  chore("Camas"),
  chore("Plantas", { yesterday: true }),
  chore("Varrer", { done: { by: "Ana" } }),
];
const TODOS = [
  todo("Ração da Luna"),
  todo("Pagar o IPVA", { overdue: true, days: -2 }),
  todo("Ligar para o banco", { allDay: false, due: iso(19, 0) }),
  todo("Levar o lixo reciclável", { allDay: false, due: iso(9, 0, 18), days: 1 }),
  todo("Sem prazo", { undated: true }),
];
const MAINT = [maint("Filtro do ar", 0), maint("Calhas", -3), maint("Caixa d'água", 12)];
const BILLS = [bill("Conta de luz", "2026-11-17"), bill("Internet", "2026-11-15", { overdue: true }), bill("Aluguel", "2026-11-25"), bill("Água", "2026-11-17", { paid: true })];
const plan = () => painelPlan({ events: EVENTS, meds: MEDS, routines: ROUTINES, maint: MAINT, todos: TODOS, bills: BILLS, now: NOW, isDone: (e) => e.summary === "Feito já" });
const names = (list) => list.map((x) => x.ref.summary);

describe("painelPlan", () => {
  it("A seguir: the next time and everything at that minute, from every calendar", () => {
    const p = plan();
    assert.deepEqual(names(p.next), ["Treino", "Dentista"]);
    assert.equal(whatAt(p.next), "2 compromissos");
  });
  it("Depois: the rest of today in order, of every kind; Amanhã cedo: tomorrow before noon", () => {
    const p = plan();
    assert.deepEqual(names(p.later), ["Ligar para o banco", "Reunião da escola", "Vitamina D", "Lixo"]);
    assert.deepEqual(names(p.soon), ["Revisão do carro", "Levar o lixo reciclável"]);
  });
  it("Agora: what goes on and the dose whose time came; not what is over or done", () => {
    const p = plan();
    assert.deepEqual(names(p.current), ["Plantão", "Gardenal"]);
    for (const x of [...p.next, ...p.later, ...p.current]) assert.ok(!["Café da manhã", "Feito já", "Ômega 3", "Varrer"].includes(x.ref.summary));
    assert.deepEqual(p.allDay.map((e) => e.summary), ["Viagem"]);
  });
  it("Tarefas do dia: late, the part of the day of now and the next, any time; the bills not paid, up to 3 days", () => {
    const p = plan();
    assert.deepEqual(names(p.late), ["Losartana", "Banheiro da manhã", "Plantas", "Pagar o IPVA", "Calhas"]);
    assert.deepEqual(names(p.groups.tarde), ["Banheiro da tarde"]);
    assert.deepEqual(names(p.groups.noite), ["Louça"]);
    assert.deepEqual(names(p.groups.dia), ["Probiótico", "Camas", "Ração da Luna", "Filtro do ar"]);
    assert.deepEqual(p.contas.map((b) => b.title), ["Conta de luz", "Internet"]);
  });
  it("nothing: nothing anywhere", () => {
    const p = painelPlan({ now: NOW });
    assert.deepEqual([p.next, p.later, p.current, p.late, p.contas], [[], [], [], [], []]);
  });
});

describe("periodsAhead and whatAt", () => {
  it("the part of the day of now (until when, how long is left) and the next ones", () => {
    const [t, n] = periodsAhead(at(2026, 11, 17, 14, 20));
    assert.deepEqual([t.id, t.now, t.end, t.left], ["tarde", true, "18:00", 220 * 60000]);
    assert.deepEqual([n.id, n.now, n.span], ["noite", false, "18:00 às 24:00"]);
    assert.deepEqual(periodsAhead(at(2026, 11, 17, 9)).map((x) => x.id), ["manha", "tarde", "noite"]);
    const [night] = periodsAhead(at(2026, 11, 17, 2));
    assert.deepEqual([night.id, night.end], ["noite", "05:00"]);
  });
  it("what is at a time, in words", () => {
    assert.equal(whatAt([{ kind: "remedio" }]), "1 remédio");
    assert.equal(whatAt([{ kind: "evento" }, { kind: "remedio" }]), "2 itens");
  });
});

class App extends hostOf(PainelMixin, TasksMixin, RewardsMixin, ModelsMixin) {
  constructor() {
    super(fakeApi());
    this._home = { meds: MEDS, routines: ROUTINES, bills: [], maint: MAINT, checks: {}, people: [{ name: "Luna", pet: true }], caregivers: [], gerencia: { ligado: false, contas: [] }, score: { enabled: true, participants: ["Ana", "Davi"], rows: [], entries: [] } };
    this._now = NOW.getTime();
    this._dark = true;
    this._user = { person: "Ana" };
  }
  _todos() {
    return { items: TODOS };
  }
  _billsList() {
    return BILLS;
  }
  _cals() {
    return [];
  }
  _cal(id) {
    return { "calendar.davi": { name: "Pessoal (Davi)" }, "calendar.ana": { name: "Pessoal (Ana)" }, "calendar.familia": { name: "Família" } }[id] || null;
  }
  _colorOfEvent() {
    return { id: "verde", fill: "#8BD45F", ink: "#3F7A17" };
  }
  _checkOf(e) {
    return e.summary === "Feito já";
  }
  _clock() {
    return html`<svg></svg>`;
  }
  _ticket(e, o) {
    return html`<div class="hero-ev ticket">${o.label} ${e.summary}</div>`;
  }
}

describe("the panel on the screen", () => {
  const view = () => new App()._renderPainel({ head: html`<h1>Hoje</h1>`, events: EVENTS, memo: html`<div class="panel memo">Folha</div>`, placar: html`<div class="panel board" id="placar-agora">Placar</div>` });
  it("A seguir first, with both at 18:00; Agora under it; Depois in order with the times", () => {
    const t = text(view());
    const i = (s) => t.indexOf(s);
    assert.ok(i("A seguir") < i("Agora") && i("Agora") < i("Depois"), "A seguir first");
    assert.ok(i("Treino") < i("Dentista") && i("Dentista") < i("Agora"), "both at 18:00 in A seguir");
    assert.match(t, /18:00\s*2 compromissos/);
    assert.ok(i("Ligar para o banco") < i("Reunião da escola") && i("Reunião da escola") < i("Vitamina D") && i("Vitamina D") < i("Lixo"));
    assert.ok(i("Amanhã cedo") < i("Revisão do carro"));
    assert.match(t, /O dia todo[\s\S]*Viagem/);
  });
  it("Tarefas do dia by when, the bills last, then the placar; the sheet on the right", () => {
    const h = render(view()).html;
    const t = text(view());
    const i = (s) => t.indexOf(s);
    assert.ok(i("Tarefas do dia") < i("Atrasadas") && i("Atrasadas") < i("Tarde") && i("Tarde") < i("Noite") && i("Noite") < i("Qualquer hora") && i("Qualquer hora") < i("Contas a pagar") && i("Contas a pagar") < i("Placar"));
    assert.match(t, /até 18:00 · faltam 40 min/);
    assert.match(t, /Conta de luz · R\$\s*245,90/);
    assert.match(t, /GerencIA/);
    assert.doesNotMatch(t, /Aluguel|Sem prazo|Caixa d'água|Varrer|Ômega 3/);
    assert.match(h, /class="full-cols pn-cols three"/);
    assert.ok(h.indexOf("pn-day") < h.indexOf("full-memo"), "the sheet on the right");
  });
  it("the buttons: Tomei for whoever uses it, Tomado for a pet, Paguei, the initials of who did it", () => {
    const app = new App();
    app._app_ = { who_pick: true };
    const h = render(app._renderPainel({ head: nothing, events: EVENTS, memo: nothing })).html;
    assert.match(h, /class="full-cols pn-cols two"/, "no sheet now: two columns");
    assert.match(h, /aria-label="Luna tomou: Gardenal"/);
    assert.match(h, /aria-label="Tomei: Vitamina D"/);
    assert.match(h, /Paguei/);
    assert.match(h, /aria-label="Davi fez Camas \(\+10\)"/);
  });
});
