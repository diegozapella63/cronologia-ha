// frontend/src/tasks.js, mounted: the tasks of the ResolvIA in the CronologIA. Whose each list is (a list of a person
// only shows to them), the tasks as entries of the calendar, the card of the Agora (late and today in a tag, the quick
// buttons of who did it), the sheet of a task, Adicionar › Tarefa (the list, the deadline, the room and the notes),
// the settings in Mais › Configurações › Integrações (the lists, Levar para o ResolvIA) and Trazer uma lista.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { html, nothing } from "../../frontend/vendor/lit-all.min.js";
import { text, render, click, fire, labels, controls, fakeApi, hostOf } from "../_lit.mjs";
import { TasksMixin, dueTone } from "../../frontend/src/tasks.js";
import { PALETTE } from "../../frontend/src/util.js";

const NOW = at(2026, 11, 6, 10);
const TF = { CREATE: 1, UPDATE: 4, DUE_DATE: 16, DUE_DATETIME: 32, DESCRIPTION: 64 };
const ALL = TF.CREATE | TF.UPDATE | TF.DUE_DATE | TF.DUE_DATETIME | TF.DESCRIPTION;
const ANA = { name: "Ana", person: "person.ana" };
const BETO = { name: "Beto", person: "person.beto" };
const REX = { name: "Rex", pet: true };

const list = (id, name, over = {}) => ({ id, name, features: ALL, hidden: false, unavailable: false, due: 0, overdue: 0, open: 0, ...over });
const task = (summary, over = {}) => ({ key: `todo.casa|${summary}`, list: "todo.casa", uid: `u-${summary}`, summary, description: "", listName: "Casa", allDay: true, due: "2026-11-06", days: 0, undated: false, done: false, overdue: false, points: 0, every: 0, ...over });

class App extends hostOf(TasksMixin) {
  constructor({ todos = {}, people = [ANA, BETO], me = "Ana", app = {}, form = {}, score = null, mirror = null, api = fakeApi(), away = false, full = false, writable = [] } = {}) {
    super(api);
    this.todos = { lists: [], items: [], ...todos };
    this.people = people;
    this.me = me;
    this._app_ = { ...app };
    this._form = form;
    this.score = score;
    this.mirror = mirror;
    this.away = away;
    this.full = full;
    this.writable = writable;
    this._now = NOW.getTime();
    this._dark = false;
    this.asked = [];
    this.done = [];
    this.renderRoot = { querySelector: () => null };
    this.updateComplete = Promise.resolve();
    this._folds = {};
  }
  _ix() {
    return { todos: this.todos, people: this.people, ...(this.mirror ? { mirror: this.mirror } : {}) };
  }
  _me() {
    return this.me;
  }
  _score() {
    return this.score;
  }
  _scoreOn() {
    return !!this.score;
  }
  _pColor() {
    return PALETTE[0];
  }
  _accent() {
    return PALETTE[1];
  }
  _awayNow() {
    return this.away;
  }
  _awayDay(d) {
    return this.away && d.getDate() === 7;
  }
  _fullOn() {
    return this.full;
  }
  _panelHead(ic, color, title, small) {
    return html`<div class="panel-head"><h2>${title}</h2><small>${small}</small></div>`;
  }
  _sheetHead(t) {
    return html`<h3>${t}</h3>`;
  }
  _renderModelChips(kind) {
    return html`<div class="models" data-kind=${kind}></div>`;
  }
  _dateField(label, value, onPick, bid) {
    return html`<button class="date" id=${bid} @click=${() => onPick("2026-12-01")}>${label}: ${value}</button>`;
  }
  _withWho(points, summary, run) {
    this.asked.push([points, summary]);
    return run("Beto");
  }
  _doneToast(t, who, points, o) {
    this.done.push([t.summary, who, points, o]);
  }
  _writable() {
    return this.writable;
  }
  _cal(id) {
    return this.writable.find((c) => c.id === id) || null;
  }
  _kindCal() {
    return (this.writable[0] || {}).id || null;
  }
  async _closeSheet() {
    this._sheet = null;
  }
}

const store = () => {
  const kept = {};
  globalThis.localStorage = { getItem: (k) => (k in kept ? kept[k] : null), setItem: (k, v) => (kept[k] = v) };
  return kept;
};
beforeEach(() => store());

describe("tasks: whose each list is", () => {
  const todos = { lists: [list("todo.casa", "Casa"), list("todo.ana", "Ana"), list("todo.beto", "Beto")], items: [task("Regar"), task("Estudar", { list: "todo.ana" }), task("Treinar", { list: "todo.beto" })] };

  it("with no owners, or on a device of nobody of the house (a shared tablet), everything shows", () => {
    const plain = new App({ todos });
    assert.equal(plain._todos(), plain.todos, "the very same data: nothing to filter");
    assert.deepEqual(new App()._todosAll(), { lists: [], items: [] });
    const a = new App({ todos, app: { todo_owner: { "todo.beto": "Beto" } }, me: "Visita" });
    assert.equal(a._todos().items.length, 3);
    assert.equal(new App({ todos, app: { todo_owner: { "todo.beto": "Beto" } }, me: "" })._todos().items.length, 3);
    assert.equal(new App({ todos, app: { todo_owner: { "todo.beto": "Beto" } }, me: "Rex", people: [ANA, REX] })._todos().items.length, 3, "a pet is not a person of the house");
  });

  it("a list of another person does not show; theirs and everyone's do (accents and case aside), and the view is kept", () => {
    const a = new App({ todos, app: { todo_owner: { "todo.beto": "BETO", "todo.ana": "ána" } } });
    const v = a._todos();
    assert.deepEqual([v.lists.map((l) => l.id), v.items.map((i) => i.summary)], [["todo.casa", "todo.ana"], ["Regar", "Estudar"]]);
    assert.equal(a._todos(), v, "the same data, person and owners: the same view (the caches of the screens hold)");
    a.me = "Beto";
    assert.deepEqual(a._todos().items.map((i) => i.summary), ["Regar", "Treinar"]);
    a._app_.todo_owner = { "todo.beto": "Ana" };
    assert.deepEqual(a._todos().items.map((i) => i.summary), ["Regar", "Estudar"], "the owners changed: a new view");
    assert.equal(a._otherOwner("todo.beto"), "Ana");
    assert.equal(a._otherOwner("todo.casa"), null);
    a.me = "Ana";
    assert.equal(a._otherOwner("todo.beto"), null, "her own list");
    a.me = "";
    assert.equal(a._otherOwner("todo.beto"), "Ana", "nobody on this device: the list is of someone else");
  });

  it("the owners come from the ResolvIA when it sends them (2.42.0+); who can be an owner: the people of the house and of the scoreboard", () => {
    const a = new App({ todos: { ...todos, app: { donos: { "todo.ana": "Ana" } } }, app: { todo_owner: { "todo.beto": "Beto" } }, people: [ANA, BETO, REX], score: { participants: ["Beto", "Caio"] } });
    assert.deepEqual(a._listOwners(), { "todo.ana": "Ana" }, "those of the ResolvIA win over the ones chosen here before");
    assert.equal(a._ownersFromResolvia(), true);
    assert.deepEqual(a._todoOwners(), ["Ana", "Beto", "Caio"]);
    const b = new App({ todos, people: [ANA] });
    assert.deepEqual([b._listOwners(), b._ownersFromResolvia(), b._todoOwners()], [{}, false, ["Ana"]]);
    assert.deepEqual(Object.assign(new App({ todos }), { _ix: () => ({ todos }) })._todoOwners(), []);
  });
});

describe("tasks: on the calendar", () => {
  const todos = {
    lists: [list("todo.casa", "Casa")],
    items: [task("Dia todo", { due: "2026-11-06" }), task("Com hora", { allDay: false, due: at(2026, 11, 7, 15).toISOString(), description: "levar o cartão" }), task("Sem prazo", { undated: true, due: null })],
  };
  it("each task with a deadline is an entry on its day (30 minutes with a time); none without a deadline; kept until the tasks change", () => {
    const a = new App({ todos });
    const evs = a._todoEvents(at(2026, 11, 1), at(2026, 11, 30));
    assert.deepEqual(evs.map((e) => [e.summary, e.allDay, e.cal]), [["Dia todo", true, "todo"], ["Com hora", false, "todo"]]);
    assert.equal(evs[0].end - evs[0].start, 86400000);
    assert.equal(evs[1].end - evs[1].start, 30 * 60000);
    assert.equal(evs[1].description, "levar o cartão");
    assert.equal(a._todoEvents(at(2026, 11, 1), at(2026, 11, 30))[0], evs[0], "the same entries while the tasks do not change");
    assert.deepEqual(a._todoEvents(at(2026, 11, 7), at(2026, 11, 8)).map((e) => e.summary), ["Com hora"], "only the ones in the days asked");
    assert.deepEqual(a._todoEvents(at(2026, 12, 1), at(2026, 12, 2)), []);
  });
  it("Mostrar no calendário off: none; on vacation, none on the days away", () => {
    assert.deepEqual(new App({ todos, app: { todo_off_calendar: true } })._todoEvents(at(2026, 11, 1), at(2026, 11, 30)), []);
    assert.deepEqual(new App({ todos, away: true })._todoEvents(at(2026, 11, 1), at(2026, 11, 30)).map((e) => e.summary), ["Dia todo"]);
    const plain = Object.assign(new App({ todos }), { _awayDay: undefined });
    assert.equal(plain._todoEvents(at(2026, 11, 1), at(2026, 11, 30)).length, 2);
  });
});

describe("tasks: concluding", () => {
  it("without points: done at once, with Desfazer; reopening too; a failure says why", async () => {
    const api = fakeApi({ setTodo: () => ({}) });
    const a = new App({ api });
    await a._todoDone(task("Regar as plantas do quintal todo dia"), true);
    assert.deepEqual(api.calls[0], ["setTodo", "todo.casa", "u-Regar as plantas do quintal todo dia", true, ""]);
    assert.deepEqual([a.toasts[0], a.haptics[0], a.undos[0].label], ["Regar as plantas do quintal…: concluída", "success", "Desfazer"]);
    await a.undos[0].run();
    assert.deepEqual(api.calls[1].slice(3), [false], "Desfazer reopens it");
    await a._todoDone(task("Regar"), false);
    assert.deepEqual([a.toasts[1], a.haptics[1]], ["Regar: reaberta", "light"]);
    const bad = new App({ api: fakeApi({ setTodo: new Error("lista fora do ar") }) });
    await bad._todoDone(task("Regar"), true);
    assert.deepEqual(bad.toasts, ["Não consegui: lista fora do ar"]);
    // Desfazer that fails says so too
    let n = 0;
    const flaky = new App({ api: fakeApi({ setTodo: () => { if (n++) throw new Error("sem conexão"); return {}; } }) });
    await flaky._todoDone(task("Regar"), true);
    await flaky.undos[0].run();
    assert.equal(flaky.toasts[1], "sem conexão");
  });

  it("with points: asks who did it (or takes the one of the quick button), and the points go to them", async () => {
    const api = fakeApi({ setTodo: (l, u, d, who) => ({ points: 5, who, key: "k9" }) });
    const a = new App({ api });
    a._sheet = "who";
    await a._todoDone(task("Lavar o carro", { points: 5 }), true);
    assert.deepEqual(a.asked, [[5, "Lavar o carro"]]);
    assert.equal(a._sheet, null, "the window of who closes first");
    assert.deepEqual(a.done, [["Lavar o carro", "Beto", 5, { reassignKey: "k9" }]]);
    await a._todoDone(task("Lavar o carro", { points: 5 }), true, "Ana");
    assert.equal(a.asked.length, 1, "the quick button already says who");
    assert.equal(a.done[1][1], "Ana");
    await a._todoDone(task("Lavar o carro", { points: 5 }), false);
    assert.equal(a.asked.length, 1, "reopening asks nobody");
  });
});

describe("tasks: the card of the Agora", () => {
  const items = [
    task("Pagar o IPTU", { overdue: true, days: -3, due: "2026-11-03", every: 30 }),
    task("Venceu hoje cedo", { overdue: true, days: 0, allDay: false, due: at(2026, 11, 6, 8).toISOString() }),
    task("Ontem", { overdue: true, days: -1, due: "2026-11-05" }),
    task("Regar", { points: 3, every: 1, rooms: [{ nome: "Varanda" }], equips: [{ nome: "Regador" }] }),
    task("Reunião", { allDay: false, due: at(2026, 11, 6, 15, 30).toISOString(), every: 7 }),
    task("Amanhã cedo", { days: 1, allDay: false, due: at(2026, 11, 7, 9).toISOString(), every: 14, room: { nome: "Sala" }, equip: { nome: "TV" } }),
    task("Feita hoje", { done: true, points: 2 }),
    task("Feita ontem", { done: true, days: -1, due: "2026-11-05" }),
    task("Semana que vem", { days: 6, due: "2026-11-12" }),
    task("Um dia", { undated: true, due: null, every: 5 }),
  ];
  it("late, today and tomorrow (the done of today stay); late and today in a tag; the repetition and the list after", () => {
    const a = new App({ todos: { items } });
    const t = text(a._renderTodosPanel());
    assert.match(t, /^Tarefas 3 atrasadas /, "with some without a deadline: Tarefas; the late ones counted");
    assert.match(t, /Pagar o IPTU venceu há 3 dias · todo mês · Casa/);
    assert.match(t, /Venceu hoje cedo venceu hoje às 08:00 · Casa/);
    assert.match(t, /Ontem venceu ontem · Casa/);
    assert.match(t, /Regar vence hoje · todo dia · Casa/);
    assert.match(t, /Reunião hoje às 15:30 · toda semana · Casa/);
    assert.match(t, /Regar vence hoje · todo dia · Casa Varanda Regador/, "where it is done, after");
    assert.match(t, /Amanhã cedo amanhã às 09:00 · a cada 2 semanas · Casa Sala TV/);
    assert.doesNotMatch(t, /Semana que vem|Feita ontem/);
    assert.doesNotMatch(t, /Feita hoje|Um dia/, "more than 6: the rest under Mais");
    assert.match(t, /Mais 2 Das listas do ResolvIA\. Escolha quais aparecem em Mais › Configurações › Integrações\.$/);
    const h = render(a._renderTodosPanel()).html;
    assert.equal((h.match(/class="due-tag late"/g) || []).length, 3);
    assert.equal((h.match(/class="due-tag today"/g) || []).length, 2);
    assert.match(h, /class="panel todos alert" id="tarefas"/);
    click(a._renderTodosPanel(), "Mais 2");
    const all = text(a._renderTodosPanel());
    assert.match(all, /Feita hoje concluída · Casa/);
    assert.match(all, /Sem prazo Um dia a cada 5 dias · Casa Mostrar menos/, "the ones without a deadline last, under their own title");
    click(a._renderTodosPanel(), "Mostrar menos");
    assert.equal(a._todosOpen, false);
  });

  it("a tap on the square concludes (or reopens); on the text opens the task", () => {
    const got = [];
    const a = new App({ todos: { items: [task("Regar"), task("Feita", { done: true })] } });
    a._todoDone = (t, done, by) => got.push([t.summary, done, by]);
    const v = a._renderTodosPanel();
    assert.match(text(v), /^Tarefas com prazo 1 para fazer /, "all with a deadline: Tarefas com prazo");
    click(v, "Concluir Regar");
    click(v, "Reabrir Feita");
    assert.deepEqual(got, [["Regar", true, undefined], ["Feita", false, undefined]]);
    controls(v).find((c) => c.text.startsWith("Regar")).on.click();
    assert.deepEqual([a._sheet, a._form], ["todo", { key: "todo.casa|Regar" }]);
    const done = new App({ todos: { items: [task("Feita", { done: true })] } });
    assert.match(text(done._renderTodosPanel()), /^Tarefas com prazo tudo feito /);
  });

  it("worth points, with the scoreboard on: a button for each person (up to 3) concludes and gives them the points", () => {
    const got = [];
    const pts = [task("Lavar o carro", { points: 5 }), task("Feita", { done: true, points: 2 })];
    const a = new App({ todos: { items: pts }, score: { participants: ["Ana", "Beto"] } });
    a._todoDone = (t, done, by) => got.push([t.summary, done, by]);
    const v = a._renderTodosPanel();
    const quick = (view) => controls(view).filter((c) => / fez /.test(c.aria)).map((c) => [c.text, c.aria]);
    assert.deepEqual(quick(v), [["A", "Ana fez Lavar o carro (+5)"], ["B", "Beto fez Lavar o carro (+5)"]], "the initial on the button, the whole of it for who does not see");
    assert.match(text(v), /Lavar o carro \+5 · vence hoje/);
    click(v, "Beto fez Lavar o carro (+5)");
    assert.deepEqual(got, [["Lavar o carro", true, "Beto"]]);
    assert.match(render(v).html, /<span class="pts got">\+2<\/span>/, "done: the points it gave, no buttons");
    const many = new App({ todos: { items: pts }, score: { participants: ["Ana", "Beto", "Caio", "Davi"] } });
    assert.deepEqual(quick(many._renderTodosPanel()), [], "more than 3 people: no quick buttons");
    assert.match(render(many._renderTodosPanel()).html, /<span class="pts ">\+5<\/span>/);
    assert.doesNotMatch(render(new App({ todos: { items: pts } })._renderTodosPanel()).html, /class="pts/, "scoreboard off: no points");
  });

  it("nothing to show, or on vacation: no card; on the Tela cheia, all with a deadline and no notes", () => {
    assert.equal(new App()._renderTodosPanel(), nothing);
    assert.equal(new App({ todos: { items: [task("Semana que vem", { days: 6 })] } })._renderTodosPanel(), nothing);
    assert.equal(new App({ todos: { items }, away: true })._renderTodosPanel(), nothing);
    const full = text(new App({ todos: { items }, full: true })._renderTodosPanel());
    assert.match(full, /^Tarefas com prazo 3 atrasadas /);
    assert.match(full, /Amanhã cedo/);
    assert.doesNotMatch(full, /Um dia|Mais \d|Das listas do ResolvIA/);
    const noHooks = Object.assign(new App({ todos: { items: [task("Regar")] } }), { _awayNow: undefined, _fullOn: undefined });
    assert.match(text(noHooks._renderTodosPanel()), /Regar/);
  });

  it("the tone of the deadline: late, today or none", () => {
    const now = new Date(NOW);
    assert.equal(dueTone(task("a", { overdue: true }), now), "late");
    assert.equal(dueTone(task("a"), now), "today");
    assert.equal(dueTone(task("a", { due: "2026-11-09" }), now), "");
    assert.equal(dueTone(task("a", { done: true }), now), "");
    assert.equal(dueTone(task("a", { undated: true }), now), "");
  });
});

describe("tasks: the sheet of a task", () => {
  const t = task("Trocar o filtro", { allDay: false, due: at(2026, 11, 8, 14).toISOString(), days: 2, points: 4, every: 30, description: "Modelo em https://exemplo.com/filtro e no manual", rooms: [{ nome: "Cozinha" }], equips: [{ nome: "Purificador", comodo: "Cozinha" }] });
  it("the deadline, the list, the room, the equipment, the repetition, the points and the notes with the links", () => {
    const a = new App({ todos: { items: [t], app: { comodos: [{ id: "c", nome: "Cozinha" }] } }, form: { key: t.key }, score: { participants: ["Ana"] } });
    const v = a._renderTodoSheet();
    const s = text(v);
    assert.match(s, /^Trocar o filtro Casa · domingo, 8 de nov às 14:00 /);
    assert.match(s, /Prazo: Domingo, 8 de novembro às 14:00 Lista Casa \(ResolvIA\) Cozinha Purificador \(Cozinha\) Volta todo mês depois de concluída 4 pontos para quem concluir Modelo em https:\/\/exemplo\.com\/filtro e no manual/);
    assert.match(render(v).html, /<a href="https:\/\/exemplo\.com\/filtro" target="_blank" rel="noopener noreferrer">/);
    assert.match(s, /O prazo, as notas e a repetição se mudam no ResolvIA\. Concluir · \+4$/);
  });
  it("Concluir and Reabrir close the sheet and do it; the X only closes; a task that left the list says so", async () => {
    const got = [];
    const a = new App({ todos: { items: [task("Regar"), task("Sem prazo", { undated: true, due: null, done: true, room: { nome: "Sala" }, equip: { nome: "TV", comodo: "Sala" } })] }, form: { key: "todo.casa|Regar" } });
    a._todoDone = (x, done) => got.push([x.summary, done]);
    a._sheet = "todo";
    const v = a._renderTodoSheet();
    assert.match(text(v), /Concluir$/, "no points (or the scoreboard off): only Concluir");
    click(v, "Concluir");
    await Promise.resolve();
    assert.deepEqual([got, a._sheet], [[["Regar", true]], null]);
    a._form = { key: "todo.casa|Sem prazo" };
    const w = a._renderTodoSheet();
    assert.match(text(w), /Sem prazo Casa · sem prazo Sem prazo Lista Casa \(ResolvIA\) Sala TV /, "the room of the task: the one of the equipment is not repeated");
    click(w, "Reabrir");
    await Promise.resolve();
    assert.deepEqual(got[1], ["Sem prazo", false]);
    a._sheet = "todo";
    click(w, "Fechar");
    assert.equal(a._sheet, null);
    a._form = { key: "não existe" };
    assert.equal(text(a._renderTodoSheet()), "Tarefa Essa tarefa não está mais na lista.");
  });
});

describe("tasks: Adicionar › Tarefa", () => {
  const lists = [list("todo.casa", "Casa"), list("todo.beto", "Tarefas do Beto"), list("todo.simples", "Compras", { features: TF.CREATE }), list("todo.fora", "Fora do ar", { unavailable: true }), list("todo.leitura", "Só leitura", { features: 0 }), list("todo.oculta", "Oculta", { hidden: true })];
  const todos = { lists, items: [] };
  const owner = { todo_owner: { "todo.beto": "Beto" } };

  it("the lists offered: this person's and everyone's that accept a new task; the others' only when asked", () => {
    assert.deepEqual(new App({ todos, app: owner })._todoLists().map((l) => l.id), ["todo.casa", "todo.simples", "todo.oculta"]);
    assert.deepEqual(new App({ todos, app: { ...owner, todo_create_any: true } })._todoLists().map((l) => l.id), ["todo.casa", "todo.beto", "todo.simples", "todo.oculta"]);
  });

  it("opens on the last list used, else on one of this person that takes a deadline; today, with no time; the name takes the focus", async () => {
    const kept = store();
    const ta = { n: 0, focus() { this.n++; } };
    const a = new App({ todos, app: { ...owner, todo_create_any: true } });
    a.renderRoot = { querySelector: (q) => (q === ".sheet .ev-title-input" ? ta : null) };
    a._openTodoForm();
    await a.updateComplete;
    assert.deepEqual([a._sheet, ta.n], ["form", 1]);
    const { date, ...rest } = a._form;
    assert.deepEqual(rest, { mode: "add", kind: "tarefa", title: "", list: "todo.casa", noDue: false, timed: false, time: "09:00", notes: "" });
    assert.match(date, /^\d{4}-\d\d-\d\d$/, "today");
    kept["cronologia.todo_list"] = '"todo.simples"';
    a.renderRoot = { querySelector: () => null };
    a._openTodoForm({ date: at(2026, 12, 24, 18) });
    await a.updateComplete;
    assert.deepEqual([a._form.list, a._form.date], ["todo.simples", "2026-12-24"], "the last list used, and the day of the calendar");
    // only lists of the others or hidden: the first that is not of another person, then any
    const b = new App({ todos: { lists: [lists[1], lists[5]], items: [] }, app: { ...owner, todo_create_any: true } });
    b._openTodoForm();
    assert.equal(b._form.list, "todo.oculta");
    const c = new App({ todos: { lists: [lists[1]], items: [] }, app: { ...owner, todo_create_any: true } });
    c._openTodoForm();
    assert.equal(c._form.list, "todo.beto");
    const none = new App();
    globalThis.localStorage = { getItem() { throw new Error("private"); } };
    none._openTodoForm();
    assert.equal(none._form.list, "", "no list at all, and a browser that keeps nothing: an empty choice");
  });

  it("the form: the name, the list (of whom, and its name in the Home Assistant), the deadline, the time, the notes", () => {
    const a = new App({ todos: { lists: [list("todo.tarefas_casa", "Tarefas de casa Geral"), list("todo.tarefas_beto", "Tarefas de casa Beto"), list("todo.simples", "Compras", { features: TF.CREATE })], items: [] }, app: { todo_owner: { "todo.tarefas_beto": "Beto" }, todo_create_any: true, event_details: true }, form: { title: "", list: "todo.tarefas_beto", date: "2026-11-06", noDue: false, timed: false, time: "09:00", notes: "" } });
    let v = a._renderTodoForm();
    assert.match(text(v), /^Adicionar Tarefa Lista do ResolvIA /);
    assert.match(text(v), /Lista de Beto: a tarefa aparece no CronologIA de Beto\./);
    assert.match(text(v), /Lista do ResolvIA Geral Beto Compras No Home Assistant: Tarefas de casa Beto/, "the short name on the button, the whole one under it");
    assert.match(render(v).html, /<button class="btn primary" disabled /, "with no name: Criar tarefa waits");
    fire(v, "", "input", { target: { value: "Levar o carro" } });
    assert.equal(a._form.title, "Levar o carro");
    click(v, "Prazo: 2026-11-06");
    assert.equal(a._form.date, "2026-12-01");
    click(a._renderTodoForm(), "Com horário");
    assert.equal(a._form.timed, true);
    v = a._renderTodoForm();
    assert.ok(controls(v).some((c) => c.aria === "Horário: 09:00"), "with a time: the field of the app");
    fire(v, "Notas", "input", { target: { value: "trocar o óleo\ne o filtro" } });
    assert.match(text(a._renderTodoForm()), /Notas · trocar o óleo/, "the first line of the notes beside the title");
    click(a._renderTodoForm(), "Sem prazo");
    v = a._renderTodoForm();
    assert.deepEqual([a._form.noDue, labels(v).includes("Com horário"), labels(v).some((l) => l.startsWith("Prazo"))], [true, false, false]);
    // another list: by a tap
    controls(v).find((c) => c.tag === "button" && / title="Compras"/.test(c.attrs)).on.click();
    assert.equal(a._form.list, "todo.simples");
    assert.match(text(a._renderTodoForm()), /Essa lista não aceita prazo\./);
    assert.doesNotMatch(text(a._renderTodoForm()), /Notas/, "a list without notes: no field");
    click(a._renderTodoForm(), "Cancelar");
    assert.equal(a._sheet, null);
  });

  it("Enter in the name creates; Shift+Enter is a new line", () => {
    const a = new App({ todos, form: { title: "x", list: "todo.casa" } });
    let saved = 0;
    a._saveTodoForm = () => saved++;
    const ev = (o) => ({ key: "Enter", prevented: 0, preventDefault() { this.prevented++; }, ...o });
    const on = controls(a._renderTodoForm()).find((c) => c.tag === "textarea").on.keydown;
    const shift = ev({ shiftKey: true });
    on(shift);
    on(ev({ key: "a" }));
    assert.deepEqual([saved, shift.prevented], [0, 0]);
    const enter = ev();
    on(enter);
    assert.deepEqual([saved, enter.prevented], [1, 1]);
  });

  it("a deadline kept by the ResolvIA (the list takes none), and the deadlines off there", () => {
    const due = new App({ todos: { lists: [list("todo.x", "X", { appDue: true })], items: [] }, form: { title: "a", list: "todo.x", date: "2026-11-06" } });
    assert.match(text(due._renderTodoForm()), /Guardado no ResolvIA: a lista não aceita data\./);
    const off = new App({ todos: { lists: [list("todo.x", "X")], items: [], app: { prazos: false } }, form: { title: "a", list: "todo.x" } });
    assert.equal(off._todoDueOk(), false);
    assert.match(text(off._renderTodoForm()), /Os prazos estão desligados no ResolvIA\./);
    assert.match(text(new App({ form: { title: "a", list: "" } })._renderTodoForm()), /Essa lista não aceita prazo\./, "no list chosen");
  });

  it("creating: with the deadline and the time the list takes, the room or the equipment; the list is remembered", async () => {
    const kept = store();
    const api = fakeApi({ addTodo: () => ({}) });
    const a = new App({ todos, api, form: { title: "  Levar o carro  ", list: "todo.casa", date: "2026-11-10", noDue: false, timed: true, time: "14:30", notes: "revisão", equips: ["carro"], rooms: ["a", "b"], room: "a" } });
    a._sheet = "form";
    await a._saveTodoForm();
    assert.deepEqual(api.calls[0], ["addTodo", "todo.casa", { summary: "Levar o carro", date: "2026-11-10", time: "14:30", description: "revisão", equips: ["carro"] }]);
    assert.deepEqual([kept["cronologia.todo_list"], a.haptics, a._sheet, a.toasts], ['"todo.casa"', ["success"], null, ["Tarefa criada em Casa"]]);
    const run = async (form, lists2 = lists, app = {}) => {
      const x = new App({ todos: { lists: lists2, items: [] }, api: fakeApi({ addTodo: () => ({}) }), app, form: { title: "T", date: "2026-11-10", time: "14:30", ...form } });
      await x._saveTodoForm();
      return [x.api.calls[0] && x.api.calls[0][2], x.toasts[0]];
    };
    assert.deepEqual((await run({ list: "todo.casa", rooms: ["a", "b"], room: "a" }))[0], { summary: "T", date: "2026-11-10", time: "", description: "", rooms: ["a", "b"] }, "several rooms");
    assert.deepEqual((await run({ list: "todo.casa", room: "a", rooms: ["a"] }))[0], { summary: "T", date: "2026-11-10", time: "", description: "", room: "a" }, "one room");
    assert.deepEqual((await run({ list: "todo.casa", noDue: true, timed: true }))[0], { summary: "T", date: "", time: "", description: "" }, "Sem prazo: no date");
    assert.deepEqual((await run({ list: "todo.simples", timed: true }))[0], { summary: "T", date: "", time: "", description: "" }, "a list that takes no deadline");
    const onlyTime = [list("todo.hora", "Só com hora", { features: TF.CREATE | TF.DUE_DATETIME })];
    assert.deepEqual((await run({ list: "todo.hora" }, onlyTime))[0], { summary: "T", date: "2026-11-10", time: "09:00", description: "" }, "a list that only takes date and time: 09:00");
    assert.equal((await run({ list: "todo.oculta" }))[1], "Tarefa criada em Oculta (lista oculta aqui)");
    // the list of another person: said in the toast, and not remembered for the next task
    const k2 = store();
    assert.equal((await run({ list: "todo.beto" }, lists, { todo_owner: { "todo.beto": "Beto" }, todo_create_any: true }))[1], "Tarefa criada em Tarefas do Beto (lista de Beto)");
    assert.equal("cronologia.todo_list" in k2, false);
    globalThis.localStorage = { getItem: () => null, setItem() { throw new Error("private"); } };
    assert.equal((await run({ list: "todo.casa" }))[1], "Tarefa criada em Casa", "a browser that keeps nothing: created all the same");
  });

  it("no list, no name, or a failure: says what", async () => {
    const a = new App({ todos, form: { title: "x", list: "nenhuma" } });
    await a._saveTodoForm();
    const b = new App({ todos, form: { title: "  ", list: "todo.casa" } });
    await b._saveTodoForm();
    assert.deepEqual([a.toasts, b.toasts], [["Escolha a lista"], ["Dê um nome à tarefa"]]);
    const c = new App({ todos, api: fakeApi({ addTodo: new Error("sem conexão") }), form: { title: "x", list: "todo.casa", date: "2026-11-10" } });
    c._sheet = "form";
    await c._saveTodoForm();
    assert.deepEqual([c.toasts, c._form.saving, c._sheet], [["Não consegui criar: sem conexão"], false, "form"]);
    const d = new App({ todos, api: fakeApi({ addTodo: new Error("sem conexão") }), form: { title: "x", list: "todo.casa" } });
    d._sheet = null; // the person closed the window meanwhile
    await d._saveTodoForm();
    assert.equal(d._form.saving, true);
    const saving = new App({ todos, form: { title: "x", list: "todo.casa", saving: true } });
    assert.match(text(saving._renderTodoForm()), /Salvando…$/);
  });
});

describe("tasks: the room and the equipment of the InventarIA (by the ResolvIA)", () => {
  const inv = { comodos: [{ id: "coz", nome: "Cozinha" }, { id: "sala", nome: "Sala" }], equipamentos: [{ id: "gel", nome: "Geladeira", comodo: "Cozinha" }, { id: "tv", nome: "TV", comodo: "Sala" }, { id: "solto", nome: "Escada", comodo: "" }] };
  const app = (form, over = {}) => new App({ todos: { lists: [], items: [], app: { ...inv, ...over } }, form: { room: null, rooms: [], equips: [], ...form } });

  it("the rooms and the items, each item with the room it is in", () => {
    const a = app({});
    assert.deepEqual(a._invLists().items, [{ id: "gel", nome: "Geladeira", zona: "", roomId: "coz", roomName: "Cozinha" }, { id: "tv", nome: "TV", zona: "", roomId: "sala", roomName: "Sala" }, { id: "solto", nome: "Escada", zona: "", roomId: null, roomName: "" }]);
    assert.deepEqual(a._roomNamesAll(), ["Cozinha", "Sala"]);
    assert.deepEqual(new App()._invLists(), { rooms: [], items: [] });
    assert.equal(new App()._renderRoomEquipFields({}), nothing, "without the InventarIA: no fields");
  });

  it("a routine: one room only, a second tap takes it off; no equipment", () => {
    const a = app({});
    const view = () => a._renderRoomEquipFields(a._form, { equips: false });
    assert.deepEqual(labels(view()), ["Nenhum", "Cozinha", "Sala"]);
    assert.doesNotMatch(text(view()), /Equipamento/);
    click(view(), "Cozinha");
    assert.equal(a._form.room, "coz");
    click(view(), "Sala");
    assert.equal(a._form.room, "sala");
    click(view(), "Sala");
    assert.equal(a._form.room, null);
    assert.equal(new App({ todos: { lists: [], items: [], app: { equipamentos: inv.equipamentos } } })._renderRoomEquipFields({}, { equips: false }), nothing, "no rooms, and the items do not count for a routine");
  });

  it("a task: several rooms, Todos is the whole house (and none again), Nenhum clears", () => {
    const a = app({});
    const view = () => a._renderRoomEquipFields(a._form, { multiRoom: true });
    click(view(), "Cozinha");
    click(view(), "Sala");
    assert.deepEqual([a._form.rooms, a._form.room], [["coz", "sala"], "coz"]);
    assert.match(text(view()), /^Cômodos /, "more than one: Cômodos");
    assert.match(render(view()).html, /class="pick all-rooms on" aria-pressed="true"/, "all marked: Todos is on");
    click(view(), "Todos");
    assert.deepEqual([a._form.rooms, a._form.room], [[], null]);
    click(view(), "Todos");
    assert.deepEqual(a._form.rooms, ["coz", "sala"]);
    click(view(), "Cozinha");
    assert.deepEqual([a._form.rooms, a._form.room], [["sala"], "sala"]);
    click(view(), "Nenhum");
    assert.deepEqual([a._form.rooms, a._form.room], [[], null]);
    a._form = { room: "sala", equips: [] }; // an older form, with only one room
    assert.deepEqual(controls(view()).filter((c) => /aria-pressed="true"/.test(c.attrs)).map((c) => c.text), ["Sala"]);
  });

  it("with an equipment, the room is its own and locked; the last one out frees the room again", () => {
    const a = app({ equips: ["gel"] });
    const view = () => a._renderRoomEquipFields(a._form, { multiRoom: true });
    assert.match(text(view()), /Vem do equipamento\./);
    assert.equal((render(view()).html.match(/<button class="pick[^>]* disabled/g) || []).length, 4, "Nenhum, Todos and the rooms: locked");
    a._form = { ...a._form, equips: ["gel", "tv"] };
    assert.match(text(view()), /^Cômodos .*Vem dos equipamentos\..*Equipamentos/);
    click(view(), "Tirar TV");
    assert.deepEqual(a._form.equips, ["gel"]);
    click(view(), "Tirar Geladeira");
    assert.deepEqual([a._form.equips, a._form.room, a._form.rooms], [[], "coz", ["coz"]], "free again, from the room it had");
    const one = app({ equips: ["tv"], room: "sala" });
    click(one._renderRoomEquipFields(one._form), "Tirar TV");
    assert.deepEqual([one._form.equips, one._form.room, "rooms" in one._form && one._form.rooms], [[], "sala", []], "one room only: the room stays");
  });

  it("searching and picking an equipment; Outro equipamento for one more; Mostrar mais when they are many", () => {
    const a = app({});
    const view = () => a._renderRoomEquipFields(a._form, { multiRoom: true });
    assert.match(text(view()), /Equipamento Escolha o cômodo ou busque entre 3 equipamentos\.$/);
    fire(view(), "Buscar equipamento", "input", { target: { value: "gela" } });
    assert.deepEqual([a._form.equipQ, a._form.equipMore], ["gela", false]);
    click(view(), /Geladeira/);
    assert.deepEqual([a._form.equips, a._form.equipAdding, a._form.equipQ], [["gel"], false, ""]);
    click(view(), "Outro equipamento");
    assert.deepEqual([a._form.equipAdding, a._form.equipQ, a._form.equipMore], [true, "", false]);
    const many = app({ equipQ: "item" }, { equipamentos: Array.from({ length: 9 }, (_, i) => ({ id: `i${i}`, nome: `Item ${i}`, comodo: "Sala" })) });
    click(many._renderRoomEquipFields(many._form, { multiRoom: true }), "Mostrar mais 3");
    assert.equal(many._form.equipMore, true);
  });

  it("Casa ou Bens: an equipment of Bens out, the area is still Bens", () => {
    const bens = { comodos: [...inv.comodos, { id: "bens", nome: "Bens", tipo: "bens" }], equipamentos: [...inv.equipamentos, { id: "carro", nome: "Carro", comodo: "Bens" }] };
    const a = app({ equips: ["carro"] }, bens);
    const view = () => a._renderRoomEquipFields(a._form, { multiRoom: true });
    assert.match(text(view()), /^Onde Nenhum Casa Bens Bem /);
    click(view(), "Bens"); // already there: nothing changes
    assert.deepEqual(a._form.equips, ["carro"]);
    click(view(), "Tirar Carro");
    assert.deepEqual([a._form.equips, a._form.where], [[], "bens"]);
    const two = app({ equips: ["carro", "carro2"] }, { ...bens, equipamentos: [...bens.equipamentos, { id: "carro2", nome: "Moto", comodo: "Bens" }] });
    assert.match(text(two._renderRoomEquipFields(two._form, { multiRoom: true })), /^Onde Nenhum Casa Bens Bens /, "several: Bens");
  });
});

describe("tasks: Mais › Configurações › Integrações › Tarefas do ResolvIA", () => {
  const lists = [
    list("todo.casa", "Casa", { due: 3, overdue: 1, open: 5 }),
    list("todo.compras", "Compras", { features: TF.CREATE | TF.UPDATE, info: "integracao", open: 2 }),
    list("todo.semprazo", "Ideias", { info: "resolvia" }),
    list("todo.vazia", "Vazia"),
    list("todo.oculta", "Guardada", { hidden: true, due: 2 }),
  ];
  const on = { resolvia_on: true };

  it("off (the start): only the switch; it turns the integration on", () => {
    const a = new App({ todos: { lists, items: [] } });
    assert.equal(a._resolviaOn(), false);
    const v = a._renderTodosSettings();
    assert.equal(text(v), "Tarefas do ResolvIA Usar a integração Desligada.");
    fire(v, "Usar a integração com o ResolvIA", "change", { target: { checked: true } });
    assert.deepEqual(a.prefs, [{ resolvia_on: true }]);
    fire(v, "Usar a integração com o ResolvIA", "change", { target: { checked: false } });
    assert.deepEqual(a.prefs[1], { resolvia_on: null });
  });

  it("on, connected to the ResolvIA: the count, each list with its hint, the hidden ones last and folded", () => {
    const a = new App({ todos: { lists, items: [], app: { versao: "2.77.0" } }, app: on, people: [] });
    const t = text(a._renderTodosSettings());
    assert.match(t, /Usar a integração Ligada\. Conectado ao ResolvIA 2\.77\.0 5 listas · 3 tarefas com prazo, 1 atrasada\. Concluir aqui conclui lá, e a repetição do ResolvIA continua valendo\./);
    assert.match(t, /Mostrar no calendário No dia do prazo\. Tarefas sem prazo na Agora Depois das que têm prazo\. Listas /);
    assert.match(t, /Casa 3 tarefas com prazo · 1 atrasada/);
    assert.match(t, /Compras não aceita prazo \(as datas são da integração\)/);
    assert.match(t, /Ideias prazos desligados no ResolvIA/);
    assert.match(t, /Ocultas \(1\)/);
    assert.doesNotMatch(t.split("Levar para o ResolvIA")[0], /Guardada/, "folded");
    assert.doesNotMatch(t, /Criar tarefas nas listas dos outros|De quem é/, "nobody to be an owner");
    click(a._renderTodosSettings(), "Ocultas (1)");
    assert.match(text(a._renderTodosSettings()).split("Levar para o ResolvIA")[0], /Guardada 2 tarefas com prazo/);
  });

  it("without the ResolvIA (any to-do list of the Home Assistant), with no list, and with the deadlines off there", () => {
    assert.match(text(new App({ todos: { lists, items: [] }, app: on })._renderTodosSettings()), /Lendo as listas de tarefas do Home Assistant 5 listas · 3 tarefas com prazo, 1 atrasada\. Concluir aqui conclui lá\./);
    const none = text(new App({ app: on })._renderTodosSettings());
    assert.match(none, /Nenhuma lista de tarefas encontrada .* Nada a configurar\.$/);
    assert.doesNotMatch(none, /Mostrar no calendário|Levar para o ResolvIA/);
    const off = text(new App({ todos: { lists: [lists[3]], items: [], app: { prazos: false } }, app: on })._renderTodosSettings());
    assert.match(off, /Conectado ao ResolvIA 1 lista · prazos desligados no ResolvIA\./);
    assert.match(off, /Tarefas na Agora/);
    assert.doesNotMatch(off, /Mostrar no calendário|Depois das que têm prazo/);
  });

  it("the switches: on the calendar, without a deadline on the Agora, in the lists of the others, and each list", () => {
    const a = new App({ todos: { lists, items: [] }, app: { ...on, todo_hidden: ["todo.x"] } });
    const v = a._renderTodosSettings();
    const turn = (label, checked) => fire(v, label, "change", { target: { checked } });
    turn("Tarefas no calendário", false);
    turn("Tarefas no calendário", true);
    turn("Tarefas sem prazo na Agora", true);
    turn("Tarefas sem prazo na Agora", false);
    turn("Criar tarefas nas listas dos outros", true);
    turn("Criar tarefas nas listas dos outros", false);
    turn("Mostrar Casa", false);
    assert.deepEqual(a.prefs, [{ todo_off_calendar: true }, { todo_off_calendar: null }, { todo_undated: true }, { todo_undated: null }, { todo_create_any: true }, { todo_create_any: null }, { todo_hidden: ["todo.x", "todo.casa"] }]);
    a._folds = { "todo-lists": true };
    a._app_.todo_hidden = ["todo.x", "todo.oculta"];
    fire(a._renderTodosSettings(), "Mostrar Guardada", "change", { target: { checked: true } });
    assert.deepEqual(a.prefs.at(-1), { todo_hidden: ["todo.x"] });
  });

  it("De quem é: chosen here with an older ResolvIA (Todos takes the owner off); only shown when the ResolvIA sends it", () => {
    const a = new App({ todos: { lists: lists.slice(0, 2), items: [] }, app: { ...on, todo_owner: { "todo.casa": "Ana" } } });
    const v = a._renderTodosSettings();
    assert.match(text(v), /Escolha quais listas entram e, se quiser, de quem é cada uma/);
    const radios = controls(v).filter((c) => /role="radio"/.test(c.attrs));
    assert.deepEqual(radios.map((c) => [c.text, /aria-checked="true"/.test(c.attrs)]), [["Todos", false], ["Ana", true], ["Beto", false], ["Todos", true], ["Ana", false], ["Beto", false]]);
    radios[5].on.click();
    assert.deepEqual(a.prefs[0], { todo_owner: { "todo.casa": "Ana", "todo.compras": "Beto" } });
    radios[0].on.click();
    assert.deepEqual(a.prefs[1], { todo_owner: null }, "the last owner out: nothing kept");
    const b = new App({ todos: { lists: [lists[0], lists[1], lists[4]], items: [], app: { donos: { "todo.casa": "Ana", "todo.oculta": "Beto" } } }, app: on });
    b._folds = { "todo-lists": true };
    const t = text(b._renderTodosSettings());
    assert.match(t, /De quem é cada uma se escolhe no ResolvIA \(⋯ › Personalizar\)/);
    assert.match(t, /Casa 3 tarefas com prazo · 1 atrasada De Ana/);
    assert.doesNotMatch(t, /De Beto/, "a hidden list: no owner shown");
    assert.equal(controls(b._renderTodosSettings()).filter((c) => /role="radio"/.test(c.attrs)).length, 0);
  });

  it("Trazer uma lista para o CronologIA: only with a calendar to write to", () => {
    const cal = { id: "calendar.casa", name: "Casa", color: PALETTE[2] };
    const a = new App({ todos: { lists, items: [] }, app: on, writable: [cal] });
    click(a._renderTodosSettings(), /Trazer uma lista para o CronologIA/);
    assert.deepEqual([a._sheet, a._form], ["bring", { step: "pick", listId: null, preview: null, chosen: [], cal: "calendar.casa", error: null, busy: false }]);
    assert.doesNotMatch(text(new App({ todos: { lists, items: [] }, app: on })._renderTodosSettings()), /Trazer uma lista/);
  });
});

describe("tasks: Levar para o ResolvIA (the maintenance and the routines as tasks)", () => {
  const lists = [list("todo.casa", "Casa"), list("todo.compras", "Compras", { features: TF.CREATE | TF.UPDATE }), list("todo.leitura", "Só leitura", { features: TF.CREATE }), list("todo.fora", "Fora", { unavailable: true })];
  it("a list for each (the ones that take new and changed tasks); none: not taken", () => {
    const a = new App();
    const v = a._renderMirrorSettings(lists);
    assert.match(text(v), /^Levar para o ResolvIA Cada manutenção e cada rotina da casa vira uma tarefa numa lista do ResolvIA, com a próxima data\. Concluir lá vale como feito aqui e a tarefa volta com a data seguinte\. Manutenções Nenhuma \(não levar\) Casa Compras \(sem prazo\) Rotina da casa Nenhuma \(não levar\) Casa Compras \(sem prazo\)$/);
    fire(v, "Lista: Manutenções", "change", { target: { value: "todo.casa" } });
    fire(v, "Lista: Rotina da casa", "change", { target: { value: "" } });
    assert.deepEqual(a.prefs.map((p) => [p.mirror.maint_list, p.mirror.routine_list]), [["todo.casa", null], [null, null]]);
  });
  it("with the scoreboard, the points go too; how many tasks were taken; a list that is gone; a problem", () => {
    const one = new App({ app: { mirror: { maint_list: "todo.casa", routine_list: "todo.casa" } }, score: { participants: ["Ana"] }, mirror: { count: 1 } });
    const t = text(one._renderMirrorSettings(lists));
    assert.match(t, /com a próxima data e os pontos\. Concluir lá vale como feito aqui \(os pontos vão para quem concluiu\)/);
    assert.match(t, /1 tarefa na lista\. Elas não se repetem no card de Tarefas daqui\.$/);
    const two = new App({ app: { mirror: { maint_list: "todo.casa", routine_list: "todo.sumiu" } }, mirror: { count: 7 } });
    const s = text(two._renderMirrorSettings(lists));
    assert.match(s, /todo\.sumiu \(não encontrada\)/);
    assert.match(s, /7 tarefas nas listas\./);
    assert.match(text(new App({ app: { mirror: { routine_list: "todo.casa" } } })._renderMirrorSettings(lists)), /0 tarefas na lista\./);
    const bad = new App({ app: { mirror: { maint_list: "todo.casa" } }, mirror: { problem: "A lista Casa não aceita prazo." } });
    assert.match(text(bad._renderMirrorSettings(lists)), /A lista Casa não aceita prazo\.$/);
  });
});

describe("tasks: Trazer uma lista do ResolvIA (each task becomes a Rotina da casa)", () => {
  const lists = [list("todo.casa", "Casa", { open: 3 }), list("todo.uma", "Uma", { open: 1 }), list("todo.fora", "Fora", { unavailable: true })];
  const preview = {
    name: "Casa",
    canDelete: true,
    items: [
      { uid: "a", summary: "Regar", date: "2026-11-06", time: "", every: 2, points: 3, exists: false },
      { uid: "b", summary: "Lavar o carro", date: "2026-11-09", time: "10:00", every: 0, points: 0, exists: false },
      { uid: "c", summary: "Varrer", date: "2026-11-10", time: "", every: 1, points: 0, exists: true },
    ],
  };
  const CALS = [{ id: "calendar.casa", name: "Casa", color: PALETTE[2] }, { id: "calendar.familia", name: "Família", color: PALETTE[3] }];

  it("choose the list, then what comes: the ones that already exist start unmarked", async () => {
    const api = fakeApi({ bringPreview: () => preview });
    const a = new App({ todos: { lists, items: [] }, api, writable: CALS });
    a._openBring();
    let v = a._renderBringSheet();
    assert.equal(text(v), "Trazer do ResolvIA Escolha a lista. Casa 3 tarefas pendentes Uma 1 tarefa pendente");
    const going = controls(v).find((c) => c.text.startsWith("Casa")).on.click();
    assert.equal(text(a._renderBringSheet()), "Trazer do ResolvIA Lendo a lista…");
    await going;
    assert.deepEqual([a._form.step, a._form.chosen, api.calls[0]], ["review", ["a", "b"], ["bringPreview", "todo.casa"]]);
    v = a._renderBringSheet();
    const t = text(v);
    assert.match(t, /^Casa Cada tarefa marcada vira uma Rotina da casa\. Depois, ela sai do ResolvIA\. /);
    assert.match(t, /Regar \+3 · volta 2 dias depois de feita · a partir de hoje/);
    assert.match(t, /Lavar o carro só uma vez · segunda, 9 de nov às 10:00/);
    assert.match(t, /Varrer volta 1 dia depois de feita · a partir de terça, 10 de nov · já existe uma rotina com esse nome/);
    assert.match(t, /Marcar todas Calendário das rotinas Casa Família Trazer 2 tarefas$/);
    assert.deepEqual(controls(v).filter((c) => /role="checkbox"/.test(c.attrs)).map((c) => /aria-checked="true"/.test(c.attrs)), [true, true, false]);
  });

  it("marking, all or none, the calendar, and back to the lists", () => {
    const a = new App({ todos: { lists, items: [] }, writable: CALS, form: { step: "review", listId: "todo.casa", preview, chosen: ["a", "b"], cal: "calendar.casa", error: null, busy: false } });
    const rows = () => controls(a._renderBringSheet()).filter((c) => /role="checkbox"/.test(c.attrs));
    rows()[2].on.click();
    assert.deepEqual(a._form.chosen, ["a", "b", "c"]);
    assert.match(text(a._renderBringSheet()), /Desmarcar todas .* Trazer 3 tarefas$/);
    click(a._renderBringSheet(), "Desmarcar todas");
    assert.deepEqual(a._form.chosen, []);
    assert.match(text(a._renderBringSheet()), /Nenhuma marcada$/);
    assert.match(render(a._renderBringSheet()).html, /<button class="btn primary" disabled /);
    click(a._renderBringSheet(), "Marcar todas");
    rows()[0].on.click();
    assert.deepEqual(a._form.chosen, ["b", "c"]);
    click(a._renderBringSheet(), "Família");
    assert.equal(a._form.cal, "calendar.familia");
    click(a._renderBringSheet(), "Voltar");
    assert.deepEqual([a._form.step, a._form.preview], ["pick", null]);
    a._sheet = "bring";
    click(a._renderBringSheet(), "Fechar");
    assert.equal(a._sheet, null);
  });

  it("an empty list, one task and one calendar: no Marcar todas, no choice of calendar, and nothing said about leaving the ResolvIA", () => {
    const empty = new App({ form: { step: "review", preview: { name: "Vazia", canDelete: false, items: [] }, chosen: [], cal: null } });
    assert.equal(text(empty._renderBringSheet()), "Vazia Cada tarefa marcada vira uma Rotina da casa. Nenhuma tarefa para trazer nessa lista. Nenhuma marcada");
    const one = new App({ writable: [CALS[0]], form: { step: "review", preview: { name: "Uma", items: [preview.items[1]] }, chosen: ["b"], cal: "calendar.casa", busy: true } });
    const t = text(one._renderBringSheet());
    assert.doesNotMatch(t, /Marcar todas|Calendário das rotinas/);
    assert.match(t, /Trazendo…$/);
  });

  it("bringing: the routines created, said with the calendar (and that they left the ResolvIA)", async () => {
    const api = fakeApi({ bring: () => ({ created: 2, calendar: "calendar.casa", removed: true }) });
    const a = new App({ api, writable: CALS, form: { step: "review", listId: "todo.casa", preview, chosen: ["a", "b"], cal: "calendar.casa", error: null, busy: false } });
    a._sheet = "bring";
    await a._bringRun();
    assert.deepEqual(api.calls[0], ["bring", "todo.casa", "calendar.casa", ["a", "b"], true]);
    assert.deepEqual([a._sheet, a.haptics, a.toasts], [null, ["success"], ["2 rotinas criadas em Casa · tiradas do ResolvIA"]]);
    const b = new App({ api: fakeApi({ bring: () => ({ created: 1, calendar: "calendar.sumiu", removed: false }) }), form: { listId: "todo.casa", chosen: ["a"], cal: "calendar.sumiu" } });
    await b._bringRun();
    assert.deepEqual(b.toasts, ["1 rotina criada"]);
  });

  it("nothing marked or already going: nothing; a failure stays on the window, said; the list that does not read goes back", async () => {
    const api = fakeApi({ bring: new Error("o calendário não aceita") , bringPreview: new Error("lista fora do ar") });
    const a = new App({ api, form: { chosen: [], busy: false } });
    await a._bringRun();
    a._form = { chosen: ["a"], busy: true };
    await a._bringRun();
    assert.equal(api.calls.length, 0);
    a._form = { step: "review", preview, listId: "todo.casa", chosen: ["a"], cal: "calendar.casa", busy: false };
    a._sheet = "bring";
    await a._bringRun();
    assert.deepEqual([a._form.busy, a._form.error], [false, "o calendário não aceita"]);
    assert.match(text(a._renderBringSheet()), /o calendário não aceita Trazer 1 tarefa$/);
    a._sheet = null; // closed meanwhile: the form is left as it was
    a._form = { chosen: ["a"], busy: false };
    await a._bringRun();
    assert.equal(a._form.busy, true);
    const b = new App({ api, todos: { lists, items: [] } });
    b._openBring();
    await b._bringLoad("todo.casa");
    assert.deepEqual([b._form.step, b._form.error], ["pick", "lista fora do ar"]);
    assert.match(text(b._renderBringSheet()), /lista fora do ar$/);
    // the answer comes after the person left the window: dropped
    const c = new App({ api: fakeApi({ bringPreview: () => preview }) });
    c._openBring();
    const p = c._bringLoad("todo.casa");
    c._sheet = null;
    await p;
    assert.equal(c._form.step, "loading");
  });
});
