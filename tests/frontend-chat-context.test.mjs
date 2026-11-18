// frontend/src/chat-panel.js: what goes to the AI of the Conversa is what the screen shows (1.101.0, after the AI of the
// InventarIA answered with values different from the screen's): the agenda without the routines, tasks and bills of the
// GerencIA (they go apart), today's routines and doses, the unpaid bills, the scoreboard only when on, the pending
// tasks of the ResolvIA (also without a deadline) and how many there are when a list is cut. And what the cards do.
import "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fakeApi, hostOf } from "./_lit.mjs";
import { ChatMixin } from "../frontend/src/chat-panel.js";

const NOW = new Date(2026, 10, 18, 9, 0).getTime();
const at = (d, h = 0, m = 0) => new Date(2026, 10, d, h, m);
const ev = (summary, d, h, extra = {}) => ({ summary, start: at(d, h), end: at(d, h + 1), cal: "calendar.casa", ...extra });

class Panel extends hostOf(ChatMixin) {
  constructor(o = {}) {
    super(o.api || fakeApi());
    this.o = { view: { name: "home" }, events: [], todos: [], bills: [], ix: {}, cal: "calendar.casa", ...o };
    this._now = NOW;
    this._cursor = o.cursor || null;
  }
  _view() {
    return this.o.view;
  }
  _ix() {
    return { routines: [], meds: [], maint: [], ...this.o.ix };
  }
  _cal(id) {
    return { "calendar.casa": { name: "Casa" } }[id] || null;
  }
  _events(a, b) {
    this.asked = [a, b];
    return this.o.events;
  }
  _score() {
    return this.o.score || null;
  }
  _scoreOn() {
    return !!this.o.scoreOn;
  }
  _todos() {
    return { items: this.o.todos };
  }
  _away() {
    return this.o.away || null;
  }
  _awayNow() {
    return !!this.o.awayNow;
  }
  _billsList() {
    return this.o.bills;
  }
  _defaultCal() {
    return this.o.cal;
  }
  _eventFromForm(f) {
    return { summary: f.title, date: f.date, start: f.start, end: f.end, allDay: f.allDay };
  }
}

describe("chat context: the same as the screen", () => {
  it("the agenda of the next 8 days, in order, without what goes apart (routines, tasks, GerencIA)", () => {
    const p = new Panel({
      events: [
        ev("Dentista", 20, 15),
        ev("Reunião", 19, 10),
        ev("Arrumar a cama", 18, 8, { kind: "rotina" }),
        ev("Pagar a luz", 18, 0, { todo: true }),
        ev("Fatura", 18, 0, { gerencia: true }),
        { summary: "Feriado", start: at(21), end: at(22), allDay: true, cal: "calendar.outro" },
      ],
    });
    const c = p._chatContext();
    assert.deepEqual(
      c.agenda.map((e) => [e.titulo, e.data, e.inicio, e.calendario]),
      [["Reunião", "2026-11-19", "10:00", "Casa"], ["Dentista", "2026-11-20", "15:00", "Casa"], ["Feriado", "2026-11-21", null, ""]],
    );
    assert.equal(c.agenda_total, 3);
    assert.equal(p.asked[1] - p.asked[0], 8 * 86400000, "8 days from today");
    assert.equal(c.criar, true);
    assert.equal(new Panel({ cal: null })._chatContext().criar, false, "no calendar to create: no cards to create");
  });

  it("on the Calendário, the days from the one on screen (when it is ahead)", () => {
    const p = new Panel({ view: { name: "calendar" }, cursor: at(25, 12) });
    const c = p._chatContext();
    assert.equal(p.asked[0].getTime(), at(25).getTime());
    assert.equal(c.tela, "Calendário, no dia 25/11");
  });

  it("a long agenda goes cut, with how many there are", () => {
    const events = Array.from({ length: 95 }, (_, i) => ev(`Compromisso ${i}`, 19, 8));
    const c = new Panel({ events })._chatContext();
    assert.equal(c.agenda.length, 80);
    assert.equal(c.agenda_total, 95);
  });

  it("today's routines, doses and the unpaid bills, as on screen", () => {
    const c = new Panel({
      ix: {
        routines: [
          { key: "k1", summary: "Regar", done: null, late: 1, period: "manha", who: "Ana", points: 5 },
          { key: "k2", summary: "Varrer", done: { skipped: true } },
        ],
        meds: [{ key: "m1", summary: "Vitamina", time: "08:00", who: "Beto", dose: "1 cp", state: "tomado" }],
        maint: [{ summary: "Filtro", due: "2026-11-30", state: "em dia" }],
      },
      bills: [
        { title: "Luz", value: "230.5", due: "2026-11-20", paid: false },
        { title: "Água", value: 80, due: "2026-11-10", paid: true },
        { title: "Internet", value: null, due: "2026-11-15", overdue: true },
      ],
    })._chatContext();
    assert.deepEqual(c.rotinas.map((r) => [r.nome, r.feito, r.pulada, r.atrasada, r.quem, r.pontos]), [["Regar", false, false, true, "Ana", 5], ["Varrer", true, true, false, "", 0]]);
    assert.deepEqual(c.remedios, [{ id: "m1", nome: "Vitamina", hora: "08:00", quem: "Beto", dose: "1 cp", estado: "tomado" }]);
    assert.deepEqual(c.contas, [{ nome: "Luz", valor: 230.5, vence: "2026-11-20", atrasada: false }, { nome: "Internet", valor: null, vence: "2026-11-15", atrasada: true }], "the paid bill stays out; the value as a number");
    assert.deepEqual(c.manutencao, [{ nome: "Filtro", vence: "2026-11-30", estado: "em dia" }]);
  });

  it("the scoreboard only when on", () => {
    const score = { rows: [{ name: "Ana", points: 30 }, { name: "Beto", points: 12 }] };
    assert.deepEqual(new Panel({ score, scoreOn: false })._chatContext().placar, []);
    assert.deepEqual(new Panel({ score, scoreOn: true })._chatContext().placar, [{ pessoa: "Ana", pontos: 30 }, { pessoa: "Beto", pontos: 12 }]);
  });

  it("the pending tasks of the ResolvIA, also without a deadline, with how many there are", () => {
    const todos = [
      { summary: "Pagar o IPVA", listName: "Casa", due: "2026-11-20T00:00", overdue: false },
      { summary: "Lavar o carro", listName: "Casa" },
      { summary: "Sem data", listName: "Casa", due: "2026-11-25", undated: true },
      { summary: "Feita", done: true },
      ...Array.from({ length: 70 }, (_, i) => ({ summary: `Tarefa ${i}` })),
    ];
    const c = new Panel({ todos })._chatContext();
    assert.deepEqual(c.tarefas.slice(0, 3), [
      { nome: "Pagar o IPVA", lista: "Casa", prazo: "2026-11-20", atrasada: false },
      { nome: "Lavar o carro", lista: "Casa", prazo: null, atrasada: false },
      { nome: "Sem data", lista: "Casa", prazo: null, atrasada: false },
    ]);
    assert.equal(c.tarefas.length, 60);
    assert.equal(c.tarefas_total, 73, "the done one does not count");
  });

  it("on vacation, the AI knows the routines rest", () => {
    assert.match(new Panel({ away: { to: "2026-11-30" }, awayNow: true })._chatContext().tela, /de férias até 2026-11-30/);
    assert.doesNotMatch(new Panel({ away: { to: "2026-11-30" }, awayNow: false })._chatContext().tela, /férias/);
  });

  it("the screen in words and the ready questions of each screen", () => {
    assert.equal(new Panel({ view: { name: "rewards" } })._chatScreen(), "Recompensas (placar, prêmios e extrato)");
    assert.match(new Panel({ view: { name: "routines" } })._chatScreen(), /^Rotinas/);
    assert.match(new Panel()._chatScreen(), /^Agora/);
    assert.deepEqual(new Panel({ view: { name: "rewards" } })._chatExamples(), ["Quem está ganhando?", "O que ainda dá pontos hoje?"]);
    assert.equal(new Panel({ view: { name: "calendar" } })._chatExamples()[0], "O que tenho esta semana?");
  });
});

describe("chat: sending and the cards", () => {
  it("sends the conversation and the context, and the answer comes with its cards", async () => {
    const api = fakeApi({ call: () => ({ reply: "Pronto.", actions: [{ tipo: "evento", titulo: "Dentista", data: "2026-11-20", inicio: "15:00" }, { tipo: "feito", id: "k1", nome: "Regar" }] }) });
    const p = new Panel({ api });
    await p._chatSend("marca o dentista");
    const [name, cmd, payload] = api.calls[0];
    assert.equal(name, "call");
    assert.equal(cmd, "cronologia/ai/chat");
    assert.deepEqual(payload.messages, [{ role: "user", text: "marca o dentista" }]);
    assert.ok(payload.context.agenda && "tarefas_total" in payload.context);
    const ia = p._chatState().messages[1];
    assert.equal(ia.text, "Pronto.");
    assert.deepEqual(ia.actions.map((a) => a.label), ['Marcar "Dentista" · 20/11 às 15:00', '"Regar" feita']);
  });

  it("a failure keeps the conversation and says so", async () => {
    const p = new Panel({ api: fakeApi({ call: new Error("A IA está fora do ar.") }) });
    await p._chatSend("oi");
    assert.equal(p._chatState().error, "A IA está fora do ar.");
    assert.equal(p._chatState().busy, false);
  });

  it("a card creates the event in the calendar of Novo, or marks the routine", async () => {
    const api = fakeApi({ createEvent: () => ({}), setCheck: () => ({}) });
    const p = new Panel({ api });
    p._setChat({ messages: [{ role: "ia", text: "", actions: [{ tipo: "evento", titulo: "Dentista", data: "2026-11-20", inicio: "15:00", state: "todo" }, { tipo: "tomei", id: "m1", nome: "Vitamina", state: "todo" }] }] });
    await p._chatDo(0, 0);
    await p._chatDo(0, 1);
    assert.deepEqual(api.calls.map((c) => c[0]), ["createEvent", "setCheck"]);
    assert.equal(api.calls[0][1], "calendar.casa");
    assert.equal(api.calls[0][2].end, "16:00", "without the end, one hour");
    assert.deepEqual(api.calls[1].slice(1), ["m1", true, "remedio"]);
    assert.deepEqual(p._chatState().messages[0].actions.map((a) => [a.state, a.note]), [["done", "Casa"], ["done", ""]]);
    await p._chatDo(0, 0);
    assert.equal(api.calls.length, 2, "a card done is not done twice");
  });

  it("without a calendar to create, the card says why", async () => {
    const p = new Panel({ cal: null, api: fakeApi({ createEvent: () => ({}) }) });
    p._setChat({ messages: [{ role: "ia", text: "", actions: [{ tipo: "evento", titulo: "X", data: "2026-11-20", state: "todo" }] }] });
    await p._chatDo(0, 0);
    assert.deepEqual([p._chatState().messages[0].actions[0].state, p._chatState().messages[0].actions[0].note], ["failed", "Nenhum calendário para criar eventos."]);
  });
});
