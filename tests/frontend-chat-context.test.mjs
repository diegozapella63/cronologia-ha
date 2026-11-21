// frontend/src/chat-panel.js: what goes to the AI of the Conversa is what the screen shows (1.101.0, after the AI of the
// InventarIA answered with values different from the screen's): the agenda without the routines, tasks and bills of the
// GerencIA (they go apart), today's routines and doses, the unpaid bills, the scoreboard only when on, the pending
// tasks of the ResolvIA (also without a deadline) and how many there are when a list is cut. And what the cards do.
import "./_lit.mjs";
import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { fakeApi, hostOf, labels, click, fire, controls, render } from "./_lit.mjs";
import { ChatMixin } from "../frontend/src/chat-panel.js";
import { Recorder, micError, VOICE_MAX_S } from "../frontend/src/voice.js";
import { nothing } from "../frontend/vendor/lit-all.min.js";

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
  it("1.102.0: the agenda of the next month, in order, without what goes apart (routines, tasks, GerencIA)", () => {
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
    assert.equal(Math.round((p.asked[1] - p.asked[0]) / 86400000), 31, "a month from today");
    assert.equal(c.criar, true);
    assert.equal(new Panel({ cal: null })._chatContext().criar, false, "no calendar to create: no cards to create");
  });

  it("1.102.0: who uses the app, whose each appointment is (the person of the calendar), the place and the notes", () => {
    const p = new Panel({ events: [
      ev("Pilates", 19, 7, { cal: "calendar.ana", location: "Studio Centro", description: "Levar\n tapete" }),
      ev("Dentista", 20, 15),
      ev("Feira", 21, 9, { cal: "calendar.casa_toda" }),
    ] });
    p._user = { name: "Beto Exemplo", person: "Beto" };
    p._peopleCals = () => [{ name: "Beto", cal: "calendar.casa" }, { name: "Ana", cal: "calendar.ana" }];
    p.o.ix = { people: [{ name: "Beto" }, { name: "Ana" }, { name: "Bolinha", pet: true }] };
    const c = p._chatContext();
    assert.equal(c.eu, "Beto");
    assert.deepEqual(c.agenda.map((e) => [e.titulo, e.de, e.local, e.notas]), [["Pilates", "Ana", "Studio Centro", "Levar tapete"], ["Dentista", "Beto", "", ""], ["Feira", "", "", ""]]);
    assert.deepEqual(c.pessoas, [{ nome: "Beto", pet: false, calendario: "Casa" }, { nome: "Ana", pet: false, calendario: "" }, { nome: "Bolinha", pet: true, calendario: "" }]);
  });

  it("1.102.0: the catalog (all the routines, doses, bills and maintenance, not only today's) and the rewards in full", () => {
    const p = new Panel({ scoreOn: true, score: { rows: [{ name: "Ana", points: 30 }], current: { label: "Novembro", reward: "Pizza" },
      log: [{ at: "2026-11-18T08:10:00", who: "Ana", points: 5, title: "Arrumar a cama" }] }, ix: { catalog: [
      { kind: "rotina", summary: "Regar as plantas", who: "Ana", period: "manha", rrule: "FREQ=WEEKLY;BYDAY=MO,TH", next: "2026-11-19" },
      { kind: "remedio", summary: "Vitamina D", who: "Beto", dose: "1 cp", time: "08:00", rrule: "FREQ=DAILY", next: "2026-11-19" },
      { kind: "manutencao", summary: "Trocar o filtro", every: { n: 6, unit: "meses" }, next: "2026-12-01", late: false },
      { kind: "conta", summary: "Internet", value: 120, next: "2026-11-25" },
    ] } });
    p._demerits = () => [{ title: "Bagunça", points: 3 }];
    const c = p._chatContext();
    assert.deepEqual(c.cadastros.map((x) => [x.nome, x.tipo, x.quem]), [["Regar as plantas", "rotina", "Ana"], ["Vitamina D", "remedio", "Beto"], ["Trocar o filtro", "manutencao", ""], ["Internet", "conta", ""]]);
    assert.equal(c.cadastros[1].dose, "1 cp");
    assert.equal(c.cadastros[3].valor, 120);
    assert.match(c.cadastros[2].repete, /^a cada /);
    assert.equal(c.cadastros_total, 4);
    assert.deepEqual(c.recompensas, { periodo: "Novembro", premio: "Pizza", extrato: [{ quando: "2026-11-18 08:10", pessoa: "Ana", pontos: 5, o_que: "Arrumar a cama" }], demeritos: [{ nome: "Bagunça", pontos: 3 }] });
    assert.equal(new Panel({ scoreOn: false })._chatContext().recompensas, null, "the scoreboard off: nothing of it");
  });

  it("on the Calendário, the days from the one on screen (when it is ahead)", () => {
    const p = new Panel({ view: { name: "calendar" }, cursor: at(25, 12) });
    const c = p._chatContext();
    assert.equal(p.asked[0].getTime(), at(25).getTime());
    assert.equal(c.tela, "Calendário, no dia 25/11");
  });

  it("a long agenda goes cut, with how many there are", () => {
    const events = Array.from({ length: 170 }, (_, i) => ev(`Compromisso ${i}`, 19, 8));
    const c = new Panel({ events })._chatContext();
    assert.equal(c.agenda.length, 150);
    assert.equal(c.agenda_total, 170);
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
    assert.deepEqual(new Panel({ view: { name: "rewards" }, scoreOn: true })._chatExamples().slice(0, 2), ["Quem está ganhando o placar?", "O que ainda dá pontos hoje?"]);
    assert.equal(new Panel({ view: { name: "calendar" } })._chatExamples()[0], "O que tenho esta semana?");
  });

  it("1.102.0: 6 ready questions at hand and 20 more models in Editar perguntas, the scoreboard only with it on", () => {
    for (const o of [{}, { scoreOn: true }, { view: { name: "calendar" } }, { view: { name: "rewards" }, scoreOn: true }]) {
      const p = new Panel(o);
      const at = p._chatExamples(), more = p._chatModels();
      assert.equal(at.length, 6, JSON.stringify(o));
      assert.equal(more.length, 20, JSON.stringify(o));
      assert.equal(new Set([...at, ...more]).size, 26, "no question twice");
    }
    const off = [...new Panel()._chatExamples(), ...new Panel()._chatModels()].join("\n");
    assert.doesNotMatch(off, /placar|pontos|prêmio/, "scoreboard off: none of its questions");
    assert.match([...new Panel({ scoreOn: true })._chatModels()].join("\n"), /pontos/);
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

  it("Fazer todas does each card not done yet, in order", async () => {
    const api = fakeApi({ setCheck: () => ({}) });
    const p = new Panel({ api });
    p._setChat({ messages: [{ role: "ia", text: "", actions: [{ tipo: "feito", id: "k1", nome: "Regar", state: "done" }, { tipo: "feito", id: "k2", nome: "Varrer", state: "todo" }, { tipo: "tomei", id: "m1", nome: "Vitamina", state: "failed" }] }] });
    await p._chatDoAll(0);
    assert.deepEqual(api.calls.map((c) => c.slice(1)), [["k2", true, "rotina"], ["m1", true, "remedio"]]);
    assert.deepEqual(p._chatState().messages[0].actions.map((a) => a.state), ["done", "done", "done"]);
    await p._chatDoAll(7); // a message that is not there: nothing
    assert.equal(api.calls.length, 2);
  });

  it("without a calendar to create, the card says why", async () => {
    const p = new Panel({ cal: null, api: fakeApi({ createEvent: () => ({}) }) });
    p._setChat({ messages: [{ role: "ia", text: "", actions: [{ tipo: "evento", titulo: "X", data: "2026-11-20", state: "todo" }] }] });
    await p._chatDo(0, 0);
    assert.deepEqual([p._chatState().messages[0].actions[0].state, p._chatState().messages[0].actions[0].note], ["failed", "Nenhum calendário para criar eventos."]);
  });
});

describe("chat: the microphone", () => {
  it("Pronto sends what was understood; too short or a failure says so", async () => {
    const api = fakeApi({ voiceText: () => ({ text: "o que tem hoje" }), call: () => ({ reply: "ok" }) });
    const p = new Panel({ api });
    p._chatRec = { stop: () => new Int16Array(16000) };
    p._setChat({ rec: "on" });
    await p._chatMic();
    await new Promise((r) => setTimeout(r, 0));
    assert.equal(p._chatState().messages[0].text, "o que tem hoje");
    assert.equal(p._chatState().rec, null);
    p._chatRec = { stop: () => new Int16Array(10) };
    p._setChat({ rec: "on" });
    await p._chatMic();
    assert.equal(p._chatState().error, "Não ouvi nada. Toque no microfone e fale.");
    const q = new Panel({ api: fakeApi({ voiceText: new Error("Sem fala para texto.") }) });
    q._chatRec = { stop: () => new Int16Array(16000) };
    q._setChat({ rec: "on" });
    await q._chatMic();
    assert.deepEqual([q._chatState().error, q._chatState().busy], ["Sem fala para texto.", false]);
    q._chatRec = null;
    q._setChat({ rec: "on" });
    await q._chatMic();
    assert.equal(q._chatState().rec, null, "on without a recorder: just off");
    q._setChat({ rec: "starting" });
    await q._chatMic();
    assert.equal(q._chatState().rec, "starting", "while it opens, a second tap does nothing");
  });

  it("1.105.0: Cancelar while listening: the microphone stops, nothing is transcribed or sent", async () => {
    const api = fakeApi({ voiceText: () => ({ text: "não era para ir" }) });
    const p = new Panel({ api });
    const rec = { cancel() { this.cancelled = true; }, stop: () => new Int16Array(16000) };
    p._chatRec = rec;
    p._setChat({ rec: "on", error: "antes" });
    p._chatMicCancel();
    await new Promise((r) => setTimeout(r, 0));
    assert.equal(rec.cancelled, true);
    assert.deepEqual([p._chatRec, p._chatState().rec, p._chatState().error, api.calls.length, p._chatState().messages.length], [null, null, "", 0, 0]);
    p._chatMicCancel(); // with nothing listening: nothing happens
    assert.equal(p._chatState().rec, null);
  });

  it("leaving the chat stops the microphone", () => {
    const p = new Panel();
    const rec = { cancel() { this.cancelled = true; } };
    p._chatRec = rec;
    p._setChat({ rec: "on" });
    p._chatStop();
    assert.deepEqual([rec.cancelled, p._chatRec, p._chatState().rec], [true, null, null]);
    p._chatStop();
    assert.equal(p._chatState().rec, null);
  });
});

describe("chat: the button, the window and what is kept", () => {
  const store = () => {
    const kept = {};
    globalThis.sessionStorage = { getItem: (k) => (k in kept ? kept[k] : null), setItem: (k, v) => (kept[k] = v) };
    return kept;
  };
  const ready = (o = {}) => Object.assign(new Panel(o), { _aiOn: () => true, _ai: { ready: true }, _voice: { ready: true }, _isHaAndroid: () => false, renderRoot: { querySelector: () => null }, updateComplete: Promise.resolve() });

  it("the conversation is kept in this tab (the last 30 messages) and comes back; private mode does not break", () => {
    const kept = store();
    const p = new Panel();
    p._setChat({ messages: Array.from({ length: 34 }, (_, i) => ({ role: "user", text: `m${i}` })) });
    const saved = JSON.parse(kept["cronologia-conversa"]);
    assert.deepEqual([saved.length, saved[0].text, saved[29].text], [30, "m4", "m33"]);
    p._setChat({ draft: "oi" });
    assert.equal(JSON.parse(kept["cronologia-conversa"]).length, 30, "only the messages are kept, when they change");
    assert.deepEqual(new Panel()._chatState().messages.map((m) => m.text).slice(0, 2), ["m4", "m5"], "another opening of the app in this tab: the same conversation");
    kept["cronologia-conversa"] = '{"não":"lista"}';
    assert.deepEqual(new Panel()._chatState().messages, [], "something else kept there: an empty conversation");
    globalThis.sessionStorage = { getItem() { throw new Error("private"); }, setItem() { throw new Error("private"); } };
    const q = new Panel();
    assert.deepEqual(q._chatState().messages, []);
    assert.doesNotThrow(() => q._setChat({ messages: [{ role: "user", text: "oi" }] }));
    assert.equal(q._chatState().messages.length, 1);
    store();
  });

  it("the button beside the microphone only with Usar IA on and an AI ready; it opens the window", async () => {
    store();
    const p = ready();
    assert.equal(new Panel()._aiOn, undefined);
    assert.equal(Object.assign(new Panel(), { _aiOn: () => false, _ai: { ready: true } })._renderChatBtn(), nothing);
    assert.equal(Object.assign(new Panel(), { _aiOn: () => true, _ai: null })._renderChatBtn(), nothing);
    assert.equal(Object.assign(new Panel(), { _aiOn: () => true, _ai: { ready: false } })._renderChatBtn(), nothing);
    const btn = p._renderChatBtn();
    assert.deepEqual(labels(btn), ["Conversar com a IA"]);
    // on a computer (a mouse), the box takes the focus; on a phone the keyboard does not jump up
    const ta = { focused: 0, focus() { this.focused++; } };
    p.renderRoot = { querySelector: (q) => (q === ".chat-input textarea" ? ta : null) };
    globalThis.window.matchMedia = (q) => ({ matches: /pointer: fine/.test(q) });
    click(btn, "Conversar com a IA");
    await p.updateComplete;
    assert.deepEqual([p._sheet, p._chatScroll, ta.focused], ["chat", true, 1]);
    globalThis.window.matchMedia = () => ({ matches: false });
    p._openChat();
    await p.updateComplete;
    assert.equal(ta.focused, 1, "a phone: no focus");
    p.renderRoot = { querySelector: () => null };
    p._openChat(); // the box is not drawn yet: no error
    await p.updateComplete;
    delete globalThis.window.matchMedia;
    p._openChat();
    await p.updateComplete;
    assert.equal(ta.focused, 1);
  });

  it("the window: the 6 questions, the draft, Nova conversa, the X, and the microphone only where the browser has one", () => {
    store();
    const p = ready();
    Object.defineProperty(globalThis, "navigator", { value: { mediaDevices: { getUserMedia() {} } }, configurable: true });
    let v = p._renderChatSheet();
    assert.ok(labels(v).includes("Falar"), "a fala para texto ready and a microphone: Falar");
    assert.equal((render(v).html.match(/class="pick"/g) || []).length, 6, "the 6 ready questions");
    fire(v, "Mensagem para a IA", "input", { target: { value: "o que tem hoje" } });
    assert.equal(p._chatState().draft, "o que tem hoje");
    p._setChat({ messages: [{ role: "user", text: "oi" }], error: "falhou", draft: "" });
    v = p._renderChatSheet();
    click(v, "Nova conversa");
    assert.deepEqual([p._chatState().messages, p._chatState().error], [[], ""]);
    const n = p.updates;
    click(p._renderChatSheet(), "Editar perguntas"); // the panel of the questions asks the app to draw again
    assert.ok(p.updates > n);
    click(p._renderChatSheet(), "Pronto");
    p._sheet = "chat";
    click(p._renderChatSheet(), "Fechar");
    assert.equal(p._sheet, null);
    // no microphone in this browser (http): no Falar, the box only sends
    Object.defineProperty(globalThis, "navigator", { value: {}, configurable: true });
    assert.ok(!labels(p._renderChatSheet()).includes("Falar"));
    p._voice = null;
    assert.ok(!labels(p._renderChatSheet()).includes("Falar"));
  });

  it("the microphone of the window: listening, Pronto and Cancelar reach the app", async () => {
    store();
    const p = ready();
    Object.defineProperty(globalThis, "navigator", { value: { mediaDevices: { getUserMedia() {} } }, configurable: true });
    const got = [];
    p._chatMic = () => got.push("mic");
    p._chatMicCancel = () => got.push("cancel");
    p._chatSend = (t) => got.push(["send", t]);
    p._chatDo = (k, j) => got.push(["do", k, j]);
    p._chatDoAll = (k) => got.push(["all", k]);
    p._setChat({ rec: "on" });
    const v = p._renderChatSheet();
    click(v, "Pronto: enviar o que falei");
    click(v, "Cancelar: não enviar o que falei");
    assert.deepEqual(got, ["mic", "cancel"]);
    p._setChat({ rec: null, draft: "oi", messages: [{ role: "ia", text: "", actions: [{ label: "A", state: "todo" }, { label: "B", state: "todo" }] }] });
    const w = p._renderChatSheet();
    fire(w, "Mensagem para a IA", "keydown", { key: "Enter", preventDefault() {} });
    click(w, "Fazer todas (2)");
    controls(w).filter((c) => c.text === "Fazer")[1].on.click();
    assert.deepEqual(got.slice(2), [["send", "oi"], ["all", 0], ["do", 0, 1]]);
  });
});

describe("chat: the clip (Tirar foto, Escolher fotos, Escolher arquivo)", () => {
  /** A page where the app creates the hidden <input type=file>: what it was given and its change listener. */
  const page = () => {
    const made = [];
    globalThis.document = {
      ...globalThis.document,
      createElement: (tag) => {
        const el = { tag, style: {}, files: [], clicked: 0, removed: 0, on: {}, addEventListener(t, fn) { this.on[t] = fn; }, click() { this.clicked++; }, remove() { this.removed++; } };
        made.push(el);
        return el;
      },
      body: { appended: [], appendChild(el) { this.appended.push(el); } },
    };
    return made;
  };
  const panel = (android = false) => Object.assign(new Panel(), { _isHaAndroid: () => android, cams: [], _openCamera(o) { this.cams.push(o); } });

  it("Tirar foto opens the camera of the app, for the Conversa", () => {
    const p = panel();
    p._chatAttach("camera");
    assert.deepEqual(p.cams, [{ chat: true }]);
  });

  it("Escolher fotos: the gallery, several at once (one at a time in the Home Assistant app on Android); Escolher arquivo: a photo or a PDF", () => {
    const made = page();
    const p = panel();
    const added = [];
    p._chatAddFiles = (l) => added.push(l);
    p._chatAttach("fotos");
    const inp = made[0];
    assert.deepEqual([inp.tag, inp.type, inp.accept, inp.multiple, inp.style.display, inp.clicked], ["input", "file", "image/*", true, "none", 1]);
    assert.deepEqual(globalThis.document.body.appended, [inp]);
    inp.files = [{ name: "a.jpg" }, { name: "b.jpg" }];
    inp.on.change();
    assert.deepEqual([inp.removed, added], [1, [[{ name: "a.jpg" }, { name: "b.jpg" }]]]);
    panel(true)._chatAttach("fotos");
    assert.equal(made[1].multiple, false, "the Home Assistant app on Android drops what multiple chose");
    p._chatAttach("arquivo");
    assert.deepEqual([made[2].accept, made[2].multiple], ["image/*,application/pdf", false]);
    made[2].files = null;
    made[2].on.change();
    assert.deepEqual([made[2].removed, added.length], [1, 1], "nothing chosen: the field leaves the page and nothing is added");
  });

  it("the files chosen go to the conversation, with what could not be read said; the photos of the camera too", async () => {
    const p = panel();
    p._setChat({ files: [{ nome: "nota.pdf", pdf: true }] });
    await p._chatAddFiles([{ name: "planilha.xlsx", type: "application/vnd.ms-excel", size: 10 }]);
    assert.deepEqual(p._chatState().files.map((f) => f.nome), ["nota.pdf"]);
    assert.match(p._chatState().error, /foto ou.*PDF|PDF/i);
    assert.equal(p._chatScroll, true);
    // the camera (Pronto): the PDF gives way to the photos, numbered, up to 4; the Conversa opens if it was closed
    p._openChat = function () { this.opened = (this.opened || 0) + 1; };
    p._chatAddShots([{ data: "AAA", url: "blob:1" }, { data: "BBB", url: "blob:2", mime: "image/png" }]);
    assert.deepEqual(p._chatState().files, [{ nome: "Foto 1.jpg", pdf: false, mime: "image/jpeg", data: "AAA", url: "blob:1" }, { nome: "Foto 2.jpg", pdf: false, mime: "image/png", data: "BBB", url: "blob:2" }]);
    assert.deepEqual([p._chatState().error, p.opened], ["", 1]);
    p._sheet = "chat";
    p._chatAddShots([{ data: "C" }, { data: "D" }, { data: "E" }]);
    assert.deepEqual([p._chatState().files.map((f) => f.nome), p.opened], [["Foto 1.jpg", "Foto 2.jpg", "Foto 3.jpg", "Foto 4.jpg"], 1], "4 at most; already in the Conversa: it stays");
    // ✕ on a file of the window takes it out
    Object.assign(p, { _voice: null, _aiOn: () => true });
    click(p._renderChatSheet(), "Tirar Foto 2.jpg");
    assert.deepEqual(p._chatState().files.map((f) => f.nome), ["Foto 1.jpg", "Foto 3.jpg", "Foto 4.jpg"]);
    const before = p.cams.length;
    click(p._renderChatSheet(), "Anexar");
    click(p._renderChatSheet(), "Tirar foto");
    assert.equal(p.cams.length, before + 1, "the clip of the window reaches the app");
  });
});

describe("chat: starting to listen, and the newest message in view", () => {
  it("the microphone opens (starting, then on) and stops alone at the limit; blocked, it says why", async () => {
    const start = Recorder.prototype.start;
    const cancel = Recorder.prototype.cancel;
    const cancelled = [];
    Recorder.prototype.cancel = function () { cancelled.push(this); };
    const seen = [];
    Recorder.prototype.start = async function () { seen.push(this); };
    mock.timers.enable({ apis: ["setTimeout"] });
    try {
      const p = new Panel({ api: fakeApi({ voiceText: () => ({ text: "" }) }) });
      const going = p._chatMic();
      assert.equal(p._chatState().rec, "starting");
      await going;
      assert.deepEqual([p._chatState().rec, p._chatRec === seen[0]], ["on", true]);
      // at the limit of a recording, it finishes by itself (as a tap on Pronto)
      let auto = 0;
      p._chatRec = { stop: () => (auto++, new Int16Array(10)) };
      mock.timers.tick(VOICE_MAX_S * 1000);
      assert.equal(auto, 1);
      // the person left while the microphone was opening: this recorder is dropped
      const q = new Panel();
      Recorder.prototype.start = async function () { q._chatRec = null; };
      await q._chatMic();
      assert.equal(cancelled.length, 1);
      assert.notEqual(q._chatState().rec, "on");
      // the browser says no: the reason, in words
      const r = new Panel();
      Recorder.prototype.start = async () => { throw Object.assign(new Error("x"), { name: "NotAllowedError" }); };
      await r._chatMic();
      assert.deepEqual([r._chatState().rec, r._chatRec, r._chatState().error], [null, null, micError({ name: "NotAllowedError" })]);
      assert.equal(cancelled.length, 2);
    } finally {
      mock.timers.reset();
      Recorder.prototype.start = start;
      Recorder.prototype.cancel = cancel;
    }
  });

  it("after a draw, the Conversa scrolls to the newest message, once", () => {
    const p = new Panel();
    const log = { scrollTop: 0, scrollHeight: 900 };
    p.renderRoot = { querySelector: (q) => (q === ".chat-log" ? log : null) };
    p._chatScroll = true;
    p._chatAfterRender();
    assert.equal(log.scrollTop, 0, "another window open: nothing");
    p._sheet = "chat";
    p._chatAfterRender();
    assert.deepEqual([log.scrollTop, p._chatScroll], [900, false]);
    log.scrollHeight = 1500;
    p._chatAfterRender();
    assert.equal(log.scrollTop, 900, "only when something new was said");
    p._chatScroll = true;
    p.renderRoot = { querySelector: () => null };
    assert.doesNotThrow(() => p._chatAfterRender());
  });
});

