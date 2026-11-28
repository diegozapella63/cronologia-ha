// frontend/src/models.js, mounted: the models (remédio, conta, rotina, manutenção) on the screens. The bills of the
// Agora (the GerencIA ones and the #conta events), the maintenance, Mais › Rotinas, the facts and the button of the
// sheet of an event, the form of each model (as events of the Home Assistant, and saving), Mais › Avisos and the
// GerencIA and CorrerIA cards. The doses, the routines of the day and Feito em parte are in parte.test.mjs,
// tela-cheia.test.mjs and volta-depois.test.mjs.
import { at, isoLocal } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import { nothing } from "../../frontend/vendor/lit-all.min.js";
import { text, render, click, fire, labels, controls, fakeApi } from "../_lit.mjs";
import { toEvent } from "../../frontend/src/events.js";
import { App, NOW, CASA, SAUDE, LEITURA, ANA, DAVI, REX, SCORE, tick } from "./_h_models.mjs";

// the forms start from today: the clock of the tests is Wednesday, 18 Nov 2026, 10:00
beforeEach(() => mock.timers.enable({ apis: ["Date"], now: NOW.getTime() }));
afterEach(() => mock.timers.reset());

const conta = (id, over = {}) => ({ id, descricao: `Conta ${id}`, valor: 100, vencimento: "2026-11-18", pago: false, atrasada: false, tipo: "conta", categoria: "Casa", ...over });
const GER = () => ({
  ligado: true,
  versao: "1.81.0",
  contas: [
    conta("luz", { descricao: "Luz", valor: 180.5, vencimento: "2026-11-15", atrasada: true }),
    conta("net", { descricao: "Internet", vencimento: "2026-11-17", atrasada: true }),
    conta("fat", { descricao: "Cartão Azul", tipo: "fatura", itens: 12, categoria: "" }),
    conta("agua", { descricao: "Água", vencimento: "2026-11-19" }),
    conta("gas", { descricao: "Gás", vencimento: "2026-11-25" }),
    conta("paga", { descricao: "Aluguel", pago: true, tipo: "fixo", conta: "Banco Azul" }),
    conta("longe", { descricao: "IPTU", vencimento: "2026-12-20" }),
    conta("velha", { descricao: "Paga antes", pago: true, vencimento: "2026-11-01" }),
  ],
});
const COND = { key: "calendar.casa|u-cond|", cal: "calendar.casa", uid: "u-cond", summary: "Condomínio", value: 450, due: "2026-11-20", paid: false, overdue: false, start: "2026-11-20", end: "2026-11-21", description: "#conta\nValor: R$ 450,00" };
const SEGURO = { key: "k-seg", cal: "calendar.x", uid: "u-seg", summary: "Seguro", value: null, due: "2026-11-18", paid: true, overdue: false, start: "2026-11-18", end: "2026-11-19", description: "#conta" };
const MAINT = () => [
  { key: "m1", cal: "calendar.casa", uid: "u1", summary: "Trocar o filtro", state: "vencida", days: -3, due: "2026-11-15", every: { n: 6, unit: "meses" }, who: "Ana", points: 15, progress: 1.1, canMove: true, rooms: ["Cozinha"], equips: ["Purificador"], start: "2026-11-15", end: "2026-11-16", description: "#manutencao" },
  { key: "m2", cal: "calendar.casa", uid: "u2", summary: "Calha", state: "perto", days: 1, due: "2026-11-19", every: { n: 1, unit: "anos" }, canMove: true, progress: 0.9 },
  { key: "m3", cal: "calendar.casa", uid: "u3", summary: "Caixa d'água", state: "ok", days: 90, due: "2027-02-16", every: { n: 6, unit: "meses" }, progress: 0.2, canMove: false },
  { key: "m4", cal: "calendar.casa", uid: "u4", summary: "Ralo", state: "vencida", days: -1, due: "2026-11-17", every: { n: 1, unit: "meses" }, canMove: true },
  { key: "m5", cal: "calendar.casa", uid: "u5", summary: "Lâmpadas", state: "perto", days: 0, due: "2026-11-18", every: { n: 2, unit: "semanas" }, canMove: true },
  { key: "m6", cal: "calendar.casa", uid: "u6", summary: "Extintor", state: "perto", days: 30, due: "2026-12-18", every: { n: 1, unit: "meses" }, canMove: true },
];
const med = (over = {}) => toEvent("calendar.saude", { start: isoLocal(at(2026, 11, 18, 8)), end: isoLocal(at(2026, 11, 18, 8, 15)), summary: "Losartana", description: "#remedio\nDose: 1 comprimido\nQuem toma: Ana", uid: "u-los", ...over });
const MAN = () => toEvent("calendar.casa", { start: "2026-11-15", end: "2026-11-16", summary: "Trocar o filtro", description: "#manutencao\nQuem faz: Ana\nA cada: 6 meses\nAvisar: 7 dias antes\nFeito em: 15/05/2026\nPontos: 15\nCômodo: Cozinha\nEquipamento: Purificador\nfiltro modelo X", uid: "u1" });
const ROT = (over = {}) => toEvent("calendar.casa", { start: "2026-11-18", end: "2026-11-19", summary: "Passar pano", description: "#rotina\nQuem faz: Davi\nPontos: 20\nPeríodo: Manhã\nVolta: 3 dias depois de feita\nFeito em: 15/11/2026, 12/11/2026\nCômodo: Sala", uid: "u-pano", ...over });
const CONTA = (over = {}) => toEvent("calendar.casa", { start: "2026-11-18", end: "2026-11-19", summary: "Condomínio", description: "#conta\nValor: R$ 450,00", uid: "u-cond", rrule: "FREQ=MONTHLY", ...over });
const INV = { comodos: [{ id: "coz", nome: "Cozinha" }, { id: "sala", nome: "Sala" }, { id: "area", nome: "Área" }], equipamentos: [{ id: "pur", nome: "Purificador", comodo: "Cozinha" }, { id: "pur2", nome: "Purificador", comodo: "Área" }, { id: "tv", nome: "TV", comodo: "Sala" }] };
const withInv = (over = {}) => ({ todos: { lists: [], items: [], app: INV }, ...over });

describe("models: what the calendar shows that is not an event of it", () => {
  it("the bills of the GerencIA as all-day entries, on the day they are due (off or hidden: none)", () => {
    const a = new App({ home: { gerencia: GER() } });
    const day = a._gerenciaEvents(at(2026, 11, 18), at(2026, 11, 19));
    assert.deepEqual(day.map((e) => [e.key, e.summary, e.allDay, e.kind, e.cal]), [["gerencia|fat", "Cartão Azul", true, { kind: "conta", value: 100 }, "gerencia"], ["gerencia|paga", "Aluguel", true, { kind: "conta", value: 100 }, "gerencia"]]);
    assert.equal(a._gerenciaEvents(at(2026, 11, 18), at(2026, 11, 19))[0], day[0], "made once for the same answer of the GerencIA");
    assert.equal(a._gerenciaEvents(at(2026, 11, 1), at(2026, 12, 31)).length, 8);
    assert.deepEqual(new App()._gerenciaEvents(at(2026, 11, 1), at(2026, 12, 31)), []);
    assert.deepEqual(new App({ home: { gerencia: GER() }, app: { gerencia_hidden: true } })._gerenciaEvents(at(2026, 11, 1), at(2026, 12, 31)), []);
    assert.deepEqual(new App({ home: { gerencia: { ligado: true } } })._gerenciaEvents(at(2026, 11, 1), at(2026, 12, 31)), []);
    assert.deepEqual(Object.assign(new App(), { _home: null })._gerenciaEvents(at(2026, 11, 1), at(2026, 12, 31)), []);
  });

  it("a routine that moved to its next date stays, done, on the day it was done; a skipped one, on the day it was due", () => {
    const checks = {
      "k-pano": { by: "Ana", moved: { day: "2026-11-18", cal: "calendar.casa", summary: "Passar pano", start: "2026-11-18" } },
      "k-regar": { moved: { day: "2026-11-17", cal: "calendar.casa", summary: "Regar", start: isoLocal(at(2026, 11, 17, 19)), end: isoLocal(at(2026, 11, 17, 19, 30)) } },
      "k-varrer": { skipped: true, moved: { day: "2026-11-18", cal: "calendar.casa", summary: "Varrer", start: "2026-11-17" } },
      "k-lixo": { skipped: true, moved: { day: "2026-11-18", cal: "calendar.casa", summary: "Lixo", start: isoLocal(at(2026, 11, 16, 7)) } },
      "k-velha": { moved: { day: "2026-10-01", summary: "Velha" } },
      "k-sem-nome": { moved: { day: "2026-11-18" } },
      "k-sem-dia": { moved: {} },
      "k-comum": { at: "2026-11-18T09:00:00", by: "Ana" },
      "k-nada": null,
    };
    const a = new App({ home: { checks, routines: [{ key: "k-pano", summary: "Passar pano na sala", points: 20, who: "Davi" }] } });
    const got = a._movedDoneEvents(at(2026, 11, 16), at(2026, 11, 19));
    assert.deepEqual(got.map((e) => [e.key, e.summary, e.allDay, isoLocal(e.start).slice(0, 16), isoLocal(e.end).slice(0, 16)]), [
      ["k-pano", "Passar pano na sala", true, "2026-11-18T00:00", "2026-11-19T00:00"],
      ["k-regar", "Regar", false, "2026-11-17T19:00", "2026-11-17T19:30"],
      ["k-varrer", "Varrer", true, "2026-11-17T00:00", "2026-11-18T00:00"],
      ["k-lixo", "Lixo", false, "2026-11-16T07:00", "2026-11-16T07:15"],
    ]);
    assert.deepEqual([got[0].kind, got[0].movedDone.by, got[0].movedDone.day, got[0].movedDone.item.points], [{ kind: "rotina", points: 20, who: "Davi" }, "Ana", "2026-11-18", 20]);
    assert.deepEqual([got[1].kind, got[1].movedDone], [{ kind: "rotina", points: 0, who: "" }, { item: null, by: "", day: "2026-11-17" }]);
    assert.deepEqual(new App({ home: { checks: undefined } })._movedDoneEvents(at(2026, 11, 16), at(2026, 11, 19)), []);
  });

  it("an item of the lists opens as the event it is; the icon of each model before the name", () => {
    const a = new App();
    a._openIndexItem(COND);
    assert.deepEqual([a.opened[0].summary, a.opened[0].kind, a.opened[0].cal, a.opened[0].allDay], ["Condomínio", { kind: "conta", notes: "", value: 450 }, "calendar.casa", true]);
    assert.match(render(a._kindIcon(med())).html, /^<span class="kind-ic"><svg/);
    assert.match(render(a._kindIcon({ kind: null })).html, /kind-ic/);
    assert.match(render(a._kindIcon({ kind: { kind: "outro" } })).html, /kind-ic/);
  });
});

describe("models: Contas a pagar on the Agora", () => {
  it("the open ones up to 8 days ahead and the late ones, late first; the paid of these days after; the sum of the open", () => {
    const a = new App({ home: { gerencia: GER(), bills: [COND, SEGURO] } });
    assert.deepEqual(a._billsList().map((b) => [b.title, b.due, b.paid, b.overdue, b.sub, b.source]), [
      ["Luz", "2026-11-15", false, true, "Casa", "gerencia"],
      ["Internet", "2026-11-17", false, true, "Casa", "gerencia"],
      ["Cartão Azul", "2026-11-18", false, false, "12 compras", "gerencia"],
      ["Água", "2026-11-19", false, false, "Casa", "gerencia"],
      ["Condomínio", "2026-11-20", false, false, "Casa", "cal"],
      ["Gás", "2026-11-25", false, false, "Casa", "gerencia"],
      ["Aluguel", "2026-11-18", true, false, "Casa", "gerencia"],
      ["Seguro", "2026-11-18", true, false, "", "cal"],
    ]);
    const v = a._renderBillsPanel();
    assert.equal(text(v), "Contas a pagar R$ 1.031 2 atrasadas 15 nov Luz R$ 180,50 · venceu há 3 dias · Casa Paguei 17 nov Internet R$ 100,00 · venceu ontem · Casa Paguei 18 nov Cartão Azul R$ 100,00 · vence hoje · 12 compras Paguei 19 nov Água R$ 100,00 · vence amanhã · Casa Paguei 20 nov Condomínio R$ 450,00 · vence em 2 dias · Casa Paguei Mais 3 Contas do GerencIA: o Paguei daqui dá baixa lá");
    assert.match(render(v).html, /class="panel bills alert"[\s\S]*class="bill late"[\s\S]*class="bill today"[\s\S]*class="dose-btn agora"/);
    click(v, "Mais 3");
    assert.match(text(a._renderBillsPanel()), /25 nov Gás R\$ 100,00 · vence em 7 dias · Casa Paguei 18 nov Aluguel R\$ 100,00 · paga · Casa 18 nov Seguro paga Mostrar menos/);
    click(a._renderBillsPanel(), "Mostrar menos");
    assert.equal(a._billsAll, false);
    assert.equal(new App()._renderBillsPanel(), nothing);
  });

  it("nothing late: próximos 8 dias; all paid: tudo pago; the GerencIA out of reach says so", () => {
    const one = new App({ home: { bills: [COND] } });
    assert.equal(text(one._renderBillsPanel()), "Contas a pagar R$ 450 próximos 8 dias 20 nov Condomínio R$ 450,00 · vence em 2 dias · Casa Paguei");
    const paid = new App({ home: { bills: [SEGURO], gerencia: { ligado: true, erro: "sem resposta", contas: [] } } });
    assert.equal(text(paid._renderBillsPanel()), "Contas a pagar tudo pago 18 nov Seguro paga GerencIA: sem resposta");
    const noG = new App({ home: { bills: [SEGURO], gerencia: undefined } });
    assert.match(text(noG._renderBillsPanel()), /tudo pago/);
    const fat = new App({ home: { gerencia: { ligado: true, contas: [conta("f", { tipo: "fatura", categoria: "x" })] } } });
    assert.match(text(fat._renderBillsPanel()), /0 compras/);
  });

  it("a tap opens the bill (the sheet of the GerencIA one, the event of the other); Paguei and the undo of each", async () => {
    const api = fakeApi({ payBill: null, unpayBill: null, setCheck: null });
    const a = new App({ home: { gerencia: GER(), bills: [COND, SEGURO] }, api });
    a._billsAll = true;
    const v = a._renderBillsPanel();
    click(v, /^15 nov Luz/);
    assert.deepEqual([a._sheet, a._form.b.id], ["bill", "luz"]);
    click(v, /^20 nov Condomínio/);
    assert.equal(a.opened[0].summary, "Condomínio");
    const pay = controls(v).filter((c) => c.text === "Paguei");
    await pay[0].on.click();
    assert.deepEqual([api.calls[0], a.toasts[0], a.undos[0].label, a.haptics, a.updates > 0, a._paidNow.has("luz")], [["payBill", "luz"], "Luz: paga no GerencIA", "Desfazer", ["success"], true, true]);
    await a.undos[0].run();
    assert.deepEqual(api.calls[1], ["unpayBill", "luz"]);
    await pay[4].on.click();
    assert.deepEqual([api.calls[2], a.toasts[1]], [["setCheck", "calendar.casa|u-cond|", true, "conta"], "Condomínio: paga"]);
    await click(v, "Desfazer pagamento de Aluguel");
    assert.deepEqual([api.calls[3], a.toasts[2]], [["unpayBill", "paga"], "Aluguel: volta para a pagar"]);
    await click(v, "Desfazer pagamento de Seguro");
    assert.deepEqual([api.calls[4], a.toasts[3], a.undos[3].label], [["setCheck", "k-seg", false, "conta"], "Seguro: desmarcado", "Refazer"]);
    // paid here a moment ago: it stays on the list, even out of the days shown
    const g = GER();
    g.contas[7].vencimento = "2026-10-01";
    const kept = new App({ home: { gerencia: g } });
    kept._paidNow = new Set(["velha"]);
    assert.ok(kept._billsList().some((b) => b.id === "velha"));
    assert.ok(!new App({ home: { gerencia: g } })._billsList().some((b) => b.id === "velha"));
  });

  it("each thing that fails says why", async () => {
    const bad = new App({ api: fakeApi({ payBill: new Error("fora do ar"), unpayBill: new Error("fora do ar") }) });
    await bad._pay({ id: "luz", title: "Luz", source: "gerencia" });
    await bad._unpay({ id: "luz", title: "Luz", source: "gerencia" });
    assert.deepEqual(bad.toasts, ["O GerencIA não deu baixa: fora do ar", "Não consegui: fora do ar"]);
    const undo = new App({ api: fakeApi({ payBill: null, unpayBill: new Error("não desfez") }) });
    await undo._pay({ id: "luz", title: "Luz", source: "gerencia" });
    await undo.undos[0].run();
    assert.equal(undo.toasts[1], "não desfez");
  });

  it("the sheet of a bill of the GerencIA: the value, when, the category and the account; Paguei or Desfazer pagamento", async () => {
    const api = fakeApi({ payBill: null, unpayBill: null });
    const a = new App({ home: { gerencia: GER() }, form: { b: { id: "fat" } }, api });
    a._sheet = "bill";
    const v = a._renderBillSheet();
    assert.equal(text(v), "Cartão Azul GerencIA · vence hoje R$ 100,00 · 12 compras na fatura Vence hoje Paguei marca todas as compras desta fatura como pagas no GerencIA. Paguei");
    await click(v, "Paguei");
    assert.deepEqual([api.calls[0], a._sheet], [["payBill", "fat"], null]);
    const paid = new App({ home: { gerencia: GER() }, form: { b: { id: "paga" } }, api });
    paid._sheet = "bill";
    assert.equal(text(paid._renderBillSheet()), "Aluguel GerencIA · paga R$ 100,00 · fixo do mês Vence hoje Casa Banco Azul Já está paga no GerencIA. Desfazer pagamento");
    await click(paid._renderBillSheet(), "Desfazer pagamento");
    assert.deepEqual([api.calls[1], paid._sheet], [["unpayBill", "paga"], null]);
    // gone from the list meanwhile: the one the sheet opened with
    const gone = new App({ home: { gerencia: undefined }, form: { b: { id: "x", c: conta("x", { vencimento: "2026-11-10", categoria: "", tipo: "fatura", itens: 0 }) } } });
    gone._sheet = "bill";
    assert.equal(text(gone._renderBillSheet()), "Conta x GerencIA · venceu há 8 dias R$ 100,00 · 0 compras na fatura Venceu terça, 10 de novembro Paguei marca todas as compras desta fatura como pagas no GerencIA. Paguei");
    const plain = new App({ form: { b: { id: "y", c: conta("y", { vencimento: "2026-11-25" }) } } });
    assert.match(text(plain._renderBillSheet()), /vence em 7 dias R\$ 100,00 Vence quarta, 25 de novembro Casa Paguei dá baixa no GerencIA, como o Paguei de lá\. Paguei$/);
    click(gone._renderBillSheet(), "Fechar");
    assert.equal(gone._sheet, null);
  });
});

describe("models: Tomei, Pular, Amanhã and their undo", () => {
  it("Tomei holds the doses on the card and says it, with Desfazer; a failure says why", async () => {
    const api = fakeApi({ setCheck: null });
    const a = new App({ api });
    await a._check({ key: "k1", summary: "Losartana potássica 50 mg comprimido" }, "remedio");
    assert.deepEqual([a._medsHold, api.calls[0], a.toasts[0], a.undos[0].label, a.haptics], [true, ["setCheck", "k1", true, "remedio"], "Losartana potássica 50 mg…: tomado", "Desfazer", ["success"]]);
    await a.undos[0].run();
    assert.deepEqual(api.calls[1], ["setCheck", "k1", false, "remedio"]);
    const flaky = new App({ api: fakeApi({ setCheck: (k, on) => { if (!on) throw new Error("não desfez"); } }) });
    await flaky._check({ key: "k1", summary: "Conta" }, "conta");
    await flaky.undos[0].run();
    await tick();
    assert.deepEqual([flaky._medsHold, flaky.toasts], [undefined, ["Conta: paga", "não desfez"]]);
    const bad = new App({ api: fakeApi({ setCheck: new Error("fora do ar") }) });
    await bad._check({ key: "k1", summary: "x" }, "rotina");
    await bad._undoCheck({ key: "k1", summary: "x" }, "rotina");
    assert.deepEqual(bad.toasts, ["Não consegui marcar: fora do ar", "Não consegui: fora do ar"]);
  });

  it("Desmarcar, with Refazer; Pular says when it comes back; Amanhã leaves it for tomorrow", async () => {
    const api = fakeApi({ setCheck: null, skipCheck: { next: "2026-11-20" }, toTomorrow: { undo: true }, maintUndo: null });
    const a = new App({ api });
    await a._undoCheck({ key: "k1", summary: "Regar" }, "rotina");
    await a.undos[0].run();
    assert.deepEqual([a.toasts[0], a.undos[0].label, api.calls[1], a.haptics], ["Regar: desmarcado", "Refazer", ["setCheck", "k1", true, "rotina"], ["light"]]);
    await a._skip({ key: "k1", summary: "Regar" });
    await a._skip({ key: "k2", summary: "Colírio" }, "remedio");
    assert.deepEqual(a.toasts.slice(1), ["Regar: pulada, volta sexta, 20 de nov", "Colírio: pulado, volta sexta, 20 de nov"]);
    await a.undos[2].run();
    assert.deepEqual(api.calls.at(-1), ["setCheck", "k2", false, "remedio"]);
    a._sheet = "event";
    await a._toTomorrow({ cal: "calendar.casa", uid: "u-pano", summary: "Passar pano" });
    assert.deepEqual([a._sheet, api.calls.at(-1), a.toasts.at(-1), a.undos.at(-1).label], [null, ["toTomorrow", "calendar.casa", "u-pano"], "Passar pano: fica para amanhã", "Desfazer"]);
    await a.undos.at(-1).run();
    assert.deepEqual(api.calls.at(-1), ["maintUndo", "calendar.casa", "u-pano"]);
    // 1.122.0: Hoje (a late one comes to today)
    await a._toTomorrow({ cal: "calendar.casa", uid: "u-pano", summary: "Passar pano" }, true);
    assert.deepEqual([api.calls.at(-1), a.toasts.at(-1)], [["toTomorrow", "calendar.casa", "u-pano", true], "Passar pano: fica para hoje"]);
    // nothing more known of the next time, nothing to undo, and what fails
    const plain = new App({ api: fakeApi({ skipCheck: null, toTomorrow: null, setCheck: new Error("x") }) });
    await plain._skip({ key: "k1", summary: "Regar" });
    await plain.undos[0].run();
    await plain._toTomorrow({ cal: "c", uid: "u", summary: "Regar" });
    assert.deepEqual([plain.toasts, plain.undos[1]], [["Regar: pulada", "Regar: fica para amanhã"], null]);
    const bad = new App({ api: fakeApi({ skipCheck: new Error("fora do ar"), toTomorrow: new Error("fora do ar"), refazer: null }) });
    await bad._skip({ key: "k1", summary: "Regar" });
    await bad._toTomorrow({ cal: "c", uid: "u", summary: "Regar" });
    assert.deepEqual(bad.toasts, ["Não consegui: fora do ar", "Não consegui: fora do ar"]);
    const half = new App({ api: fakeApi({ toTomorrow: { undo: true }, maintUndo: new Error("não voltou"), setCheck: (k, on) => { if (on) throw new Error("x"); } }) });
    await half._toTomorrow({ cal: "c", uid: "u", summary: "Regar" });
    await half.undos[0].run();
    await half._undoCheck({ key: "k", summary: "Regar" }, "rotina");
    await half.undos[2].run();
    assert.deepEqual(half.toasts, ["Regar: fica para amanhã", "não voltou", "Regar: desmarcado"], "a Refazer that fails stays quiet");
  });

  it("the test alert says whose phone got it; the warning of the card goes to Mais › Avisos", async () => {
    const a = new App({ home: { people: [ANA, DAVI, REX] }, api: fakeApi({ testAlert: null }) });
    await a._testAlert("Ana", true);
    await a._testAlert("Rex");
    await a._testAlert("Davi");
    assert.deepEqual(a.toasts, ["Aviso de teste enviado para o seu celular. Toque em Tomei nele para conferir o botão.", "Aviso de teste enviado para o celular de Ana. Toque em Tomei nele para conferir o botão.", "Aviso de teste enviado para o celular de Davi. Toque em Tomei nele para conferir o botão."]);
    const bad = new App({ api: fakeApi({ testAlert: new Error("sem celular") }) });
    await bad._testAlert("Ana");
    assert.deepEqual(bad.toasts, ["Não foi: sem celular"]);
    let seen = null;
    a.found = { scrollIntoView: (o) => (seen = o) };
    a._goAlerts();
    await tick();
    assert.deepEqual([a.went, a.asked, seen], [["/mais/avisos"], "#avisos", { block: "start" }]);
    a.found = null;
    a._goAlerts();
    await tick();
    assert.equal(a.went.length, 2);
  });
});

describe("models: Manutenção da casa", () => {
  it("on the Agora, what is due or near (how long, how often, who, the points, where), with Feito; all of them in a sheet", () => {
    const got = [];
    const a = new App({ home: { maint: MAINT(), score: SCORE } });
    a._maintDone = (m, by) => got.push([m.summary, by]);
    const v = a._renderHomePanel();
    assert.equal(text(v), "Manutenção da casa Trocar o filtro venceu há 3 dias · a cada 6 meses · Ana · +15 Cozinha Purificador Feito Calha amanhã · a cada 1 ano Feito Ralo venceu ontem · a cada 1 mês Feito Lâmpadas é hoje · a cada 2 semanas Feito Extintor em 30 dias · a cada 1 mês Feito Todas as manutenções (6)");
    controls(v).filter((c) => c.text === "Feito")[0].on.click();
    click(v, /^Calha/);
    click(v, "Todas as manutenções (6)");
    assert.deepEqual([got, a.opened[0].summary, a._sheet], [[["Trocar o filtro", undefined]], "Calha", "maint"]);
    const sheet = a._renderMaintSheet();
    assert.match(text(sheet), /^Manutenção da casa Trocar o filtro .* Caixa d'água em 16 fev 2027 · a cada 6 meses Ralo .* Nova manutenção$/);
    assert.match(render(sheet).html, /class="dose-btn atrasado"[\s\S]*class="dose-btn agora"/);
    click(sheet, "Nova manutenção");
    assert.deepEqual([a._sheet, a._form.kind, a._form.points], ["form", "manutencao", 30]);
    assert.equal(text(new App()._renderMaintSheet()), "Manutenção da casa Nenhuma manutenção ainda. Nova manutenção");
    assert.equal(text(new App({ home: { maint: undefined } })._renderMaintSheet()), "Manutenção da casa Nenhuma manutenção ainda. Nova manutenção");
  });

  it("Marcar por outras pessoas: the initials in the place of Feito give the points to that person", () => {
    const got = [];
    const a = new App({ home: { maint: MAINT(), score: SCORE }, app: { who_pick: true } });
    a._maintDone = (m, by) => got.push([m.summary, by]);
    click(a._renderHomePanel(), "Davi fez Trocar o filtro (+15)");
    click(a._renderHomePanel(), "Ana fez Calha");
    assert.deepEqual(got, [["Trocar o filtro", "Davi"], ["Calha", "Ana"]]);
  });
});

describe("models: Mais › Rotinas", () => {
  const cat = (kind, summary, over = {}) => ({ key: `c|${summary}`, cal: "calendar.casa", uid: `u-${summary}`, kind, summary, next: "2026-11-20", late: 0, who: "", dose: "", location: "", start: "2026-11-20", end: "2026-11-21", description: `#${kind}`, ...over });
  const catalog = () => [
    cat("rotina", "Regar", { rrule: "FREQ=DAILY", who: "Ana", period: "manha", points: 5, rooms: ["Varanda"], next: "2026-11-18" }),
    cat("rotina", "Varrer", { after: { n: 3, unit: "dias" }, late: 2, next: "2026-11-16", time: "19:00" }),
    cat("rotina", "Lavar o carro", {}),
    cat("remedio", "Losartana", { who: "Ana", dose: "1 cp", time: "20:00", rrule: "FREQ=DAILY" }),
    cat("remedio", "Losartana", { key: "c|L2", who: "Ana", dose: "1 cp", time: "08:00", rrule: "FREQ=DAILY", next: "2026-11-19", alert: false }),
    cat("remedio", "Losartana", { key: "c|L3", who: "Ana", dose: "1 cp", time: "06:00", rrule: "FREQ=DAILY", next: "2026-11-19" }),
    cat("remedio", "Losartana", { key: "c|L4", who: "Ana", dose: "1 cp", time: "20:00", rrule: "FREQ=DAILY", next: "2026-11-22" }),
    cat("remedio", "Vitamina", { who: "Rex", next: "2026-11-25", rrule: "FREQ=WEEKLY;BYDAY=MO", time: "" }),
    cat("manutencao", "Filtro", { every: { n: 6, unit: "meses" }, who: "Davi", points: 15, next: "2026-11-17", equips: ["Purificador"] }),
    cat("conta", "Condomínio", { value: 450, rrule: "FREQ=MONTHLY", next: "2026-11-19" }),
    cat("conta", "Seguro", { value: null, next: "2026-11-10" }),
  ];

  it("each section with its lines (a medicine once, with all its times), when each is next, and its Novo", () => {
    const a = new App({ home: { catalog: catalog(), score: SCORE, gerencia: { ligado: true, contas: [] } } });
    assert.equal(a._catalogCount(), 8);
    assert.equal(new App({ home: { catalog: undefined } })._catalogCount(), 0);
    const v = a._renderCatalog();
    assert.equal(text(v), "Agrupar por Tipo Quem faz Cômodo Frequência 8 cadastros Selecionar Rotina da casa 3 Regar Ana · todo dia · de manhã · +5 Varanda Varrer volta 3 dias depois de feita · 19:00 · atrasada há 2 dias Lavar o carro uma vez · próxima sexta, 20 de nov Nova rotina Remédios 2 Losartana 1 cp · Ana · 06:00, 08:00, 20:00 · todo dia Vitamina Rex · toda semana (seg) Novo remédio Manutenção da casa 1 Filtro a cada 6 meses · Davi · +15 · venceu ontem Purificador Nova manutenção Contas a pagar 2 Condomínio R$ 450,00 · todo mês · vence amanhã Seguro uma vez · venceu há 8 dias As contas do GerencIA ficam no GerencIA. Nova conta");
    click(v, /^Varrer/);
    assert.equal(a.opened[0].summary, "Varrer");
    click(v, "Nova conta");
    assert.deepEqual([a._sheet, a._form.kind, a._form.dest], ["form", "conta", "gerencia"]);
    const late = cat("rotina", "Ontem", { late: 1, next: "2026-11-17" });
    assert.match(text(new App({ home: { catalog: [late, cat("remedio", "Sem aviso", { alert: false })] } })._renderCatalog()), /Ontem uma vez · atrasada ontem Nova rotina Remédios 1 Sem aviso uma vez · sem aviso Novo remédio Manutenção da casa Nenhuma manutenção cadastrada\. Nova manutenção Contas a pagar Nenhuma conta cadastrada aqui\. Nova conta$/);
  });

  it("the search by the name, who, the dose or the place; nothing found says so; the X clears", () => {
    const a = new App({ home: { catalog: catalog(), score: SCORE } });
    fire(a._renderCatalog(), "Buscar nos cadastros", "input", { target: { value: " losar " } });
    assert.equal(text(a._renderCatalog()), "Agrupar por Tipo Quem faz Cômodo Frequência 1 cadastro Selecionar Remédios 1 Losartana 1 cp · Ana · 06:00, 08:00, 20:00 · todo dia");
    a._catQ = "purific";
    assert.equal(text(a._renderCatalog()), "Agrupar por Tipo Quem faz Cômodo Frequência 1 cadastro Selecionar Manutenção da casa 1 Filtro a cada 6 meses · Davi · +15 · venceu ontem Purificador");
    a._catQ = "zzz";
    assert.equal(text(a._renderCatalog()), "Nada encontrado Nenhum cadastro com “zzz”.");
    click(a._renderCatalog(), "Limpar");
    assert.deepEqual([a._catQ, a.updates > 1], ["", true]);
  });

  it("on vacation, the routines and the maintenance that fall in it rest: Pausadas (n), folded, at the end", () => {
    globalThis.localStorage = { getItem: () => null, setItem() {} };
    const a = new App({ home: { catalog: [...catalog(), cat("rotina", "Depois das férias", { next: "2026-11-30" })], score: SCORE }, away: { from: "2026-11-17", to: "2026-11-22" } });
    const t = text(a._renderCatalog());
    assert.match(t, /^Agrupar por Tipo Quem faz Cômodo Frequência 9 cadastros Selecionar Rotina da casa 4 Depois das férias uma vez · próxima segunda, 30 de nov Pausadas \(3\) Nova rotina Remédios 2 Losartana/);
    assert.match(t, /Manutenção da casa 1 Pausadas \(1\) Nova manutenção Contas a pagar 2 Condomínio/);
  });

  it("1.116.0: Agrupar por Quem faz, Cômodo e Frequência; as pausadas no fim; o título fecha o bloco; o aparelho lembra", () => {
    const kept = {};
    globalThis.localStorage = { getItem: (k) => (k in kept ? kept[k] : null), setItem: (k, v) => (kept[k] = v) };
    const a = new App({ home: { catalog: catalog(), score: SCORE } });
    click(a._renderCatalog(), "Quem faz");
    assert.equal(kept["cronologia-rotinas-agrupar"], '"quem"');
    let t = text(a._renderCatalog());
    assert.match(t, /^Agrupar por Tipo Quem faz Cômodo Frequência 8 cadastros Selecionar Ana 2 Regar .* Losartana .* Davi 1 Filtro .* Rex 1 Vitamina .* Sem quem faz 4 Varrer .* Lavar o carro .* Condomínio .* Seguro /);
    click(a._renderCatalog(), "Cômodo");
    t = text(a._renderCatalog());
    assert.match(t, /Selecionar Varanda 1 Regar .* Sem cômodo 7 Varrer/);
    click(a._renderCatalog(), "Frequência");
    t = text(a._renderCatalog());
    assert.match(t, /Selecionar Todo dia 2 Regar .* Losartana .* Até uma semana 2 Varrer .* Vitamina .* Até um mês 1 Condomínio .* Mais de um mês 1 Filtro .* Uma vez 2 Lavar o carro .* Seguro /);
    click(a._renderCatalog(), "Agrupar por");
    assert.equal(kept["cronologia-rotinas-agrupar-fechado"], "true");
    assert.match(text(a._renderCatalog()), /^Agrupar por · Frequência \d+ cadastros? Selecionar Todo dia 2/);
    // de férias: as pausadas num cartão só, no fim, recolhidas
    const f = new App({ home: { catalog: catalog(), score: SCORE }, away: { from: "2026-11-17", to: "2026-11-22" } });
    assert.match(text(f._renderCatalog()), /Pausadas \(\d+\)$/);
    // uma escolha que não vale mais volta ao Tipo
    kept["cronologia-rotinas-agrupar"] = '"comodo"';
    const s = new App({ home: { catalog: [cat("rotina", "Varrer", {})], score: SCORE } });
    assert.match(text(s._renderCatalog()), /^Agrupar por · Tipo \d+ cadastros? Selecionar Rotina da casa 1 Varrer/);
    globalThis.localStorage = { getItem() { throw new Error("private"); }, setItem() { throw new Error("private"); } };
    const p = new App({ home: { catalog: catalog(), score: SCORE } });
    assert.match(text(p._renderCatalog()), /^Agrupar por Tipo Quem faz Cômodo Frequência \d+ cadastros? Selecionar Rotina da casa 3/);
    click(p._renderCatalog(), "Quem faz");
    assert.ok(p.updates > 0);
  });
});

describe("models: Mais › Rotinas › Selecionar (1.114.0)", () => {
  const cat = (kind, summary, over = {}) => ({ key: `c|${summary}`, cal: "calendar.casa", uid: `u-${summary}`, kind, summary, next: "2026-11-20", late: 0, who: "", dose: "", location: "", start: "2026-11-20", end: "2026-11-21", description: `#${kind}`, ...over });
  const catalog = () => [
    cat("rotina", "Regar", { who: "Ana", points: 5, rooms: ["Sala"] }),
    cat("rotina", "Varrer", {}),
    cat("remedio", "Losartana", { who: "Ana", time: "08:00" }),
    cat("remedio", "Losartana", { key: "c|L2", who: "Ana", time: "20:00" }),
    cat("conta", "Seguro", { value: 90 }),
  ];
  it("marca de um tipo só, Todos e Nenhum; um remédio de vários horários leva todos; o X sai", () => {
    const a = new App({ home: { catalog: catalog(), score: SCORE } });
    click(a._renderCatalog(), "Selecionar");
    assert.ok(a._cselOn());
    let v = a._renderCatalog();
    assert.match(text(v), /^Toque nos cadastros Rotina da casa 2 Regar/);
    assert.doesNotMatch(text(v), /Nova rotina/, "sem os Novo… enquanto seleciona");
    click(v, /^Losartana/);
    v = a._renderCatalog();
    assert.match(text(v), /^1 selecionado Nenhum /, "o único remédio: já são todos");
    assert.deepEqual(a._cselPicked().map((r) => r.keys), [["c|Losartana", "c|L2"]], "os horários do remédio juntos");
    click(v, "Nenhum");
    assert.equal(a._csel.kind, "", "nada marcado: o tipo solta");
    click(a._renderCatalog(), /^Regar/);
    click(a._renderCatalog(), "Todos");
    v = a._renderCatalog();
    assert.match(text(v), /2 selecionados.* Apagar Alterar 2$/);
    click(v, "Cancelar seleção");
    assert.equal(a._csel, null);
  });
  it("Alterar: cada campo em Manter; Salvar manda quem, pontos e cômodos dos marcados; o Desfazer manda o de antes", async () => {
    const api = fakeApi({ catalogBulk: (acao, itens) => ({ feitos: itens.length, falhas: [], desfazer: [{ id: "c|Regar", campos: { quem: "Ana" } }] }) });
    const a = new App({ api, home: withInv({ catalog: catalog(), score: SCORE }) });
    a._cselStart("rotina", "c|Regar");
    a._renderCatalog();
    a._cselAlter();
    assert.deepEqual([a._sheet, a._form.kind], ["catbulk", "rotina"]);
    let v = a._renderCatBulkSheet();
    assert.match(text(v), /^Alterar 1 rotina Quem faz Manter Ninguém .*Pontos para quem fizer Manter Sem pontos \+5 .*Cômodos Manter Nenhum Todos Cozinha Sala Área Cancelar Salvar$/);
    click(v, "D Davi");
    click(a._renderCatBulkSheet(), "+20");
    click(a._renderCatBulkSheet(), "Cozinha");
    await click(a._renderCatBulkSheet(), "Salvar");
    await tick();
    assert.deepEqual(api.calls[0], ["catalogBulk", "alterar", [{ id: "c|Regar", campos: { quem: "Davi", pontos: 20, comodos: ["Cozinha"] } }]]);
    assert.deepEqual([a._sheet, a._csel, a.toasts.at(-1)], [null, null, "1 cadastro alterado"]);
    await a.undos.at(-1).run();
    assert.deepEqual(api.calls[1], ["catalogBulk", "alterar", [{ id: "c|Regar", campos: { quem: "Ana" } }]]);
  });
  it("Apagar pede a confirmação e apaga deste em diante; o que o calendário recusa é dito", async () => {
    const api = fakeApi({ catalogBulk: () => ({ feitos: 1, falhas: [{ nome: "Losartana", erro: "O calendário não deixa." }], desfazer: [] }) });
    const a = new App({ api, home: { catalog: catalog(), score: SCORE } });
    a._cselStart("remedio", "calendar.casa|losartana|ana|");
    a._renderCatalog();
    a._csel.ids = new Set([...a._cselRows.keys()].filter((k) => a._cselRows.get(k).kind === "remedio"));
    a._cselDelete();
    assert.deepEqual([a._sheet, a._form.title, a._form.label], ["confirm", "Apagar “Losartana”?", "Apagar"]);
    await a._form.run();
    assert.deepEqual(api.calls[0], ["catalogBulk", "apagar", ["c|Losartana", "c|L2"]]);
    assert.equal(a.toasts.at(-1), "1 cadastro apagado. Não deu em Losartana: O calendário não deixa.");
  });
});

describe("models: the sheet of an event of a model", () => {
  it("a medicine: the dose, who takes it, whose phone gets the alert; Tomei closes the sheet, Pular too", async () => {
    const api = fakeApi({ setCheck: null, skipCheck: null });
    const a = new App({ api });
    a._sheet = "event";
    const v = a._renderKindFacts(med());
    assert.equal(text(v), "Dose: 1 comprimido Quem toma: Ana Aviso no celular de Ana Tomei Pular");
    await click(v, "Tomei");
    assert.deepEqual([api.calls[0].slice(0, 1), api.calls[0].slice(2), a._sheet, a.toasts], [["setCheck"], [true, "remedio"], null, ["Losartana: tomado"]]);
    await click(v, "Pular");
    await tick();
    assert.deepEqual([api.calls[1][0], a.toasts[1]], ["skipCheck", "Losartana: pulado"]);
    const fact = (ev, o = {}) => text(new App(o)._renderKindFacts(ev)).replace(/ (Tomei|Tomado|Davi tomou|Rex tomou) Pular$/, "");
    assert.equal(fact(med({ description: "#remedio\nQuem toma: Davi\nAviso: não\ntomar em jejum" })), "Quem toma: Davi Sem aviso no celular tomar em jejum");
    assert.equal(fact(med(), { app: { alerts: { meds: false } } }), "Dose: 1 comprimido Quem toma: Ana Avisos no celular desligados");
    assert.equal(fact(med({ description: "#remedio\nQuem toma: Davi" }), { app: { alerts: { caregivers: ["Ana"] } } }), "Quem toma: Davi Aviso no celular de quem cuida");
    assert.equal(fact(med({ description: "#remedio\nQuem toma: Davi" })), "Quem toma: Davi Sem celular: escolha quem cuida em Mais › Avisos");
    assert.equal(fact(med({ description: "#remedio\nQuem toma: Rex" }), { home: { people: [ANA, REX] } }), "Quem toma: Rex Aviso no celular de Ana");
  });

  it("a bill: the value and Paguei; a maintenance: all about it, Feito hoje, Pular and Amanhã", async () => {
    const api = fakeApi({ setCheck: null });
    const a = new App({ api });
    a._sheet = "event";
    const v = a._renderKindFacts(CONTA());
    assert.equal(text(v), "R$ 450,00 Paguei");
    await click(v, "Paguei");
    assert.deepEqual([api.calls[0][0], api.calls[0][3], a._sheet], ["setCheck", "conta", null]);
    assert.equal(text(a._renderKindFacts(CONTA({ description: "#conta" }))), "Paguei");
    const got = [];
    const m = new App({ home: { maint: MAINT(), score: SCORE } });
    Object.assign(m, { _maintDone: (x, by) => got.push(["feito", x.summary, by]), _maintSkip: (x) => got.push(["pular", x.summary]), _toTomorrow: (e, hoje) => got.push([hoje ? "hoje" : "amanhã", e.summary]) });
    const f = m._renderKindFacts(MAN());
    assert.equal(text(f), "15 pontos para quem fizer A cada 6 meses, contando da última vez Quem faz: Ana Cozinha Purificador Aparece na tela inicial 7 dias antes Feito em 15 mai filtro modelo X Feito hoje Pular Hoje Amanhã", "late: Hoje beside Amanhã (1.122.0)");
    click(f, "Feito hoje");
    click(f, "Pular");
    click(f, "Amanhã");
    click(f, "Hoje");
    const pick = new App({ home: { maint: MAINT(), score: SCORE }, app: { who_pick: true } });
    pick._maintDone = (x, by) => got.push(["feito", x.summary, by]);
    click(pick._renderKindFacts(MAN()), /Davi/);
    assert.deepEqual(got, [["feito", "Trocar o filtro", undefined], ["pular", "Trocar o filtro"], ["amanhã", "Trocar o filtro"], ["hoje", "Trocar o filtro"], ["feito", "Trocar o filtro", "Davi"]]);
    assert.deepEqual(labels(new App()._renderKindFacts(MAN())), [], "not on the list of the maintenance: nothing to mark");
  });

  it("a routine: who, where, the points, the part of the day, when it comes back; Feito (or who did it), Pular, Amanhã", async () => {
    const got = [];
    const a = new App({ home: { score: SCORE }, api: fakeApi({ skipCheck: null }) });
    Object.assign(a, { _markDone: (it, kind, by) => got.push([it.key, it.points, kind, by]), _toTomorrow: (e) => got.push(["amanhã", e.summary]) });
    const v = a._renderKindFacts(ROT());
    assert.equal(text(v), "Quem faz: Davi Sala 20 pontos para quem fizer De manhã Volta 3 dias depois de feita (na agenda, só a próxima vez) Feito em 15 nov, 12 nov Feito · +20 Pular Amanhã");
    await click(v, "Feito · +20");
    await click(v, "Pular");
    click(v, "Amanhã");
    await tick();
    assert.deepEqual([got, a.toasts], [[["calendar.casa|u-pano|2026-11-18", 20, "rotina", undefined], ["amanhã", "Passar pano"]], ["Passar pano: pulada"]]);
    const pick = new App({ home: { score: SCORE }, app: { who_pick: true } });
    pick._markDone = (it, kind, by) => got.push([it.summary, kind, by]);
    await click(pick._renderKindFacts(ROT()), /Ana/);
    assert.deepEqual(got.at(-1), ["Passar pano", "rotina", "Ana"]);
    // a routine of the calendar that repeats, for another day: no Amanhã, and no button far ahead
    const far = ROT({ start: "2026-11-25", end: "2026-11-26", rrule: "FREQ=WEEKLY", description: "#rotina" });
    assert.equal(text(new App()._renderKindFacts(far)), "");
  });

  it("done, skipped or done in part: how it is, with Desfazer", async () => {
    const api = fakeApi({ setCheck: null });
    const key = "calendar.casa|u-pano|2026-11-18";
    const state = (chk, ev = ROT({ description: "#rotina\nPontos: 20" }), o = {}) => new App({ home: { checks: { [key]: chk }, score: SCORE, ...o }, api });
    const done = state({ at: isoLocal(at(2026, 11, 18, 9, 30)), by: "Ana" });
    const v = done._renderKindFacts(ROT({ description: "#rotina\nPontos: 20" }));
    assert.equal(text(v), "20 pontos para quem fizer Feito hoje às 09:30 · Ana Desfazer");
    await click(v, "Desfazer");
    assert.deepEqual(api.calls[0], ["setCheck", key, false, "rotina"]);
    const skipped = state({ skipped: true, at: isoLocal(at(2026, 11, 17, 21)) });
    assert.equal(text(skipped._renderKindFacts(ROT({ description: "#rotina" }))), "Pulada 17 nov às 21:00 Desfazer");
    await click(skipped._renderKindFacts(ROT({ description: "#rotina" })), "Desfazer");
    assert.equal(text(state({ skipped: true })._renderKindFacts(ROT({ description: "#rotina" }))), "Pulada Desfazer");
    // a part done today: the rest is for tomorrow; a part of another day: Feito for what is left
    const part = state({ part: { frac: 0.5 }, at: isoLocal(at(2026, 11, 18, 9)), by: "Ana" });
    assert.equal(text(part._renderKindFacts(ROT({ description: "#rotina\nPontos: 20" }))), "20 pontos para quem fizer 50% feito hoje às 09:00 · Ana · o resto amanhã Desfazer");
    await click(part._renderKindFacts(ROT({ description: "#rotina\nPontos: 20" })), "Desfazer");
    const got = [];
    const old = state({ part: { frac: 0.25 }, at: isoLocal(at(2026, 11, 17, 9)) });
    old._markDone = (it, kind, by) => got.push([it.points, kind, by]);
    const ov = old._renderKindFacts(ROT({ description: "#rotina\nPontos: 20" }));
    assert.equal(text(ov), "20 pontos para quem fizer 25% feito 17 nov às 09:00 · falta 75% Desfazer Feito · +15");
    await click(ov, "Feito · +15");
    const oldPick = state({ part: { frac: 0.25 }, at: isoLocal(at(2026, 11, 17, 9)) });
    oldPick._app_.who_pick = true;
    oldPick._markDone = (it, kind, by) => got.push([it.points, kind, by]);
    await click(oldPick._renderKindFacts(ROT({ description: "#rotina\nPontos: 20" })), /Davi/);
    assert.deepEqual(got, [[20, "rotina", undefined], [20, "rotina", "Davi"]]);
    assert.equal(api.calls.length, 3);
  });
});

describe("models: Adicionar a model", () => {
  it("the calendar of a model: one named like it that takes changes, else the default one, else the first", () => {
    const a = new App({ cals: [LEITURA, CASA, SAUDE], def: "calendar.saude" });
    assert.deepEqual(["remedio", "conta", "rotina", "manutencao"].map((k) => a._kindCal(k)), ["calendar.saude", "calendar.saude", "calendar.casa", "calendar.casa"]);
    assert.equal(new App({ cals: [LEITURA, CASA] })._kindCal("conta"), "calendar.feriados", "no default: the first");
    assert.equal(new App({ cals: [] })._kindCal("remedio"), null);
  });

  it("no calendar to write on: it says so (a bill can still go to the GerencIA, and an event can still be seen)", () => {
    const none = new App({ cals: [] });
    none._openKindForm({ kind: "remedio" });
    assert.equal(none._sheet, "nocal");
    const bill = new App({ cals: [], home: { gerencia: { ligado: true, contas: [] } } });
    bill._openKindForm({ kind: "conta" });
    assert.deepEqual([bill._sheet, bill._form.dest, bill._form.cal], ["form", "gerencia", null]);
    const edit = new App({ cals: [] });
    edit._openKindForm({ ev: med() });
    assert.deepEqual([edit._sheet, edit._form.mode], ["form", "edit"]);
    const copy = new App({ cals: [] });
    copy._openKindForm({ ev: med(), copy: true });
    assert.equal(copy._sheet, "nocal");
  });

  it("each model starts with its own: the times, the points (with the placar), the day asked, and the name focused", async () => {
    const start = (kind, o = {}) => {
      const a = new App({ home: { score: SCORE }, ...o });
      a.found = { focus: () => (a.focused = true) };
      a._openKindForm({ kind, date: at(2026, 11, 20, 15) });
      return a;
    };
    const r = start("remedio");
    await tick();
    assert.deepEqual([r._form.mode, r._form.cal, r._form.date, r._form.times, r._form.allDay, r._form.freq, r._form.points, r._form.last, r.focused, r.asked], ["add", "calendar.saude", "2026-11-20", ["08:00"], false, "diario", 0, "2026-11-18", true, ".sheet .ev-title-input"]);
    assert.deepEqual([start("rotina")._form.times, start("rotina")._form.points, start("rotina")._form.allDay], [["19:00"], 10, true]);
    assert.deepEqual([start("manutencao")._form.points, start("manutencao")._form.every, start("manutencao")._form.warn], [30, { n: 6, unit: "meses" }, 7]);
    assert.deepEqual([start("conta")._form.freq, start("conta")._form.repeat, start("conta")._form.dest], ["uma", "mensal", "cal"]);
    assert.equal(start("rotina", { home: { score: null } })._form.points, 0);
    const today = new App();
    today.found = null;
    today._openKindForm();
    await tick();
    assert.deepEqual([today._form.kind, today._form.date], ["remedio", "2026-11-18"]);
  });

  it("editing: the form as the event is (the repetition, the value, where, the day done last)", () => {
    const open = (ev, o = {}, arg = {}) => {
      const a = new App(o);
      a._openKindForm({ ev, ...arg });
      return a._form;
    };
    const m = open(med({ rrule: "FREQ=WEEKLY;BYDAY=MO,WE;UNTIL=20261231T025959Z", recurrence_id: "20261118T110000Z" }));
    assert.deepEqual([m.mode, m.freq, m.byday, m.dur, m.until, m.times, m.rid, m.dose, m.who, m.alert, m.origCal, m.wasAfter], ["edit", "semana", [1, 3], "ate", "2026-12-30", ["08:00"], "20261118T110000Z", "1 comprimido", "Ana", true, "calendar.saude", false]);
    assert.equal(m.before.rrule, "FREQ=WEEKLY;BYDAY=MO,WE;UNTIL=20261231T025959Z");
    const freq = (rrule) => { const f = open(med({ rrule })); return [f.freq, f.interval, f.byday, f.dur, f.until]; };
    assert.deepEqual(freq("FREQ=DAILY"), ["diario", 3, [3], "sempre", "2026-12-18"]);
    assert.deepEqual(freq("RRULE:FREQ=DAILY;INTERVAL=2"), ["alternado", 3, [3], "sempre", "2026-12-18"]);
    assert.deepEqual(freq("FREQ=DAILY;INTERVAL=5;UNTIL=20261130"), ["intervalo", 5, [3], "ate", "2026-11-30"]);
    assert.deepEqual(freq("FREQ=WEEKLY"), ["semana", 3, [3], "sempre", "2026-12-18"]);
    assert.deepEqual(freq("FREQ=WEEKLY;BYDAY=1MO,XX"), ["semana", 3, [1], "sempre", "2026-12-18"]);
    assert.deepEqual(freq("FREQ=MONTHLY"), ["mensal", 3, [3], "sempre", "2026-12-18"]);
    assert.deepEqual(freq("FREQ=YEARLY"), ["anual", 3, [3], "sempre", "2026-12-18"]);
    const c = open(CONTA());
    assert.deepEqual([c.kind, c.value, c.repeat, c.dest, c.allDay, c.times], ["conta", "450,00", "mensal", "cal", true, ["09:00"]]);
    assert.deepEqual([open(CONTA({ rrule: "FREQ=YEARLY" })).repeat, open(CONTA({ rrule: null })).repeat], ["anual", "nao"]);
    const bad = open(CONTA({ description: "#conta" }));
    assert.deepEqual([bad.value, bad.before], ["", null], "a bill without its value: nothing to put back");
    // a maintenance of an equipment: the item of that name in its room; the rooms by their names
    const man = open(MAN(), { home: withInv() });
    assert.deepEqual([man.every, man.warn, man.history, man.last, man.points, man.notes, man.roomNames, man.equipNames, man.equips, man.rooms, man.room], [{ n: 6, unit: "meses" }, 7, ["2026-05-15"], "2026-05-15", 15, "filtro modelo X", ["Cozinha"], ["Purificador"], ["pur"], ["coz"], "coz"]);
    const elsewhere = toEvent("calendar.casa", { start: "2026-11-15", end: "2026-11-16", summary: "x", description: "#manutencao\nA cada: 1 ano\nCômodos: Sala; Área\nEquipamentos: Purificador; Sumiu", uid: "u9" });
    assert.deepEqual([open(elsewhere, { home: withInv() }).equips, open(elsewhere, { home: withInv() }).rooms], [["pur2"], ["sala", "area"]], "not in the first room: in one of its rooms");
    const any = toEvent("calendar.casa", { start: "2026-11-15", end: "2026-11-16", summary: "x", description: "#manutencao\nA cada: 1 ano\nEquipamento: TV", uid: "u9" });
    assert.deepEqual([open(any, { home: withInv() }).equips, open(any, { home: withInv() }).room, open(any).equips], [["tv"], null, []]);
    // a routine that comes back N days after done
    const r = open(ROT());
    assert.deepEqual([r.freq, r.afterN, r.wasAfter, r.period, r.history, r.points], ["depois", 3, true, "manha", ["2026-11-15", "2026-11-12"], 20]);
    assert.equal(open(ROT({ description: "#rotina\nVolta: 2 semanas depois de feita" })).afterN, 14);
    assert.equal(open(ROT({ start: isoLocal(at(2026, 11, 18, 7)), end: isoLocal(at(2026, 11, 18, 7, 30)), description: "#rotina\nPeríodo: Manhã" })).period, "", "at a time: no part of the day");
    // a copy: a new one, on the same calendar when it takes new events
    const copy = open(med({ recurrence_id: "r1" }), {}, { copy: true });
    assert.deepEqual([copy.mode, copy.cal, copy.rid, copy.before], ["add", "calendar.saude", null, undefined]);
    assert.equal(open(toEvent("calendar.fora", { start: "2026-11-18", summary: "x", description: "#remedio" }), {}, { copy: true }).cal, "calendar.saude");
  });
});

describe("models: the form as events of the Home Assistant", () => {
  const form = (kind, over = {}, o = {}) => {
    const a = new App(o);
    a._openKindForm({ kind });
    Object.assign(a._form, { title: "Nome", ...over });
    return a;
  };
  const evs = (kind, over, o, opt) => form(kind, over, o)._kindEvents(form(kind, over, o)._form, opt);

  it("a medicine: one event per time, 15 minutes; a time of today already past starts on the next day of the rule", () => {
    assert.deepEqual(evs("remedio", { dose: "1 cp", who: "Ana", times: ["20:00", "08:00", "20:00", "x"], location: " Cozinha " }), [
      { summary: "Nome", description: "#remédio\nDose: 1 cp\nQuem toma: Ana", location: "Cozinha", start: isoLocal(at(2026, 11, 19, 8)), end: isoLocal(at(2026, 11, 19, 8, 15)), rrule: "FREQ=DAILY" },
      { summary: "Nome", description: "#remédio\nDose: 1 cp\nQuem toma: Ana", location: "Cozinha", start: isoLocal(at(2026, 11, 18, 20)), end: isoLocal(at(2026, 11, 18, 20, 15)), rrule: "FREQ=DAILY" },
    ]);
    const next = (over) => evs("remedio", { times: ["08:00"], ...over })[0].start.slice(0, 10);
    assert.deepEqual([next({ freq: "alternado" }), next({ freq: "intervalo", interval: 5 }), next({ freq: "intervalo", interval: "x" }), next({ freq: "mensal" }), next({ freq: "semana", byday: [3, 5] }), next({ freq: "semana", byday: [3] }), next({ freq: "uma" })], ["2026-11-20", "2026-11-23", "2026-11-21", "2026-12-18", "2026-11-20", "2026-11-25", "2026-11-18"]);
    assert.equal(evs("remedio", { freq: "semana", byday: [5, 1], date: "2026-11-19", times: ["08:00"] })[0].start.slice(0, 10), "2026-11-20", "the first of the days of the week chosen");
    assert.equal(evs("remedio", { alert: false, notes: "em jejum" })[0].description, "#remédio\nAviso no celular: não\nem jejum");
    assert.equal(evs("remedio", {}, {}, { keepRrule: false })[0].rrule, undefined);
    const fails = (kind, over, o) => { try { evs(kind, over, o); } catch (err) { return err.message; } return ""; };
    assert.deepEqual([fails("remedio", { title: " " }), fails("rotina", { title: "" }), fails("remedio", { times: ["8h"] }), fails("remedio", { times: undefined }), fails("remedio", { freq: "semana", byday: [] }), fails("conta", { value: "" }), fails("manutencao", { every: { n: 0, unit: "meses" } }), fails("manutencao", { every: null })], ["Qual é o remédio?", "Dê um nome", "Escolha o horário", "Escolha o horário", "Escolha os dias da semana", "Coloque o valor", "Escolha de quanto em quanto tempo", "Escolha de quanto em quanto tempo"]);
  });

  it("the repetition as the calendar writes it, and until when", () => {
    const a = new App();
    const day = at(2026, 11, 18);
    const rule = (f, allDay = true) => a._kindRrule({ byday: [3, 1], interval: 3, dur: "sempre", ...f }, allDay, day);
    assert.deepEqual([rule({ freq: "diario" }), rule({ freq: "alternado" }), rule({ freq: "intervalo", interval: 5 }), rule({ freq: "intervalo", interval: 1 }), rule({ freq: "intervalo", interval: "x" }), rule({ freq: "intervalo", interval: 900 }), rule({ freq: "semana" }), rule({ freq: "mensal" }), rule({ freq: "uma" }), rule({ freq: "depois" })], ["FREQ=DAILY", "FREQ=DAILY;INTERVAL=2", "FREQ=DAILY;INTERVAL=5", "FREQ=DAILY;INTERVAL=2", "FREQ=DAILY;INTERVAL=3", "FREQ=DAILY;INTERVAL=365", "FREQ=WEEKLY;BYDAY=MO,WE", "FREQ=MONTHLY", null, null]);
    assert.equal(rule({ freq: "diario", dur: "ate", until: "2026-12-24" }), "FREQ=DAILY;UNTIL=20261224");
    assert.equal(rule({ freq: "diario", dur: "dias", days: 7 }), "FREQ=DAILY;UNTIL=20261124");
    assert.equal(rule({ freq: "diario", dur: "dias", days: "x" }), "FREQ=DAILY;UNTIL=20261118");
    assert.equal(rule({ freq: "diario", dur: "ate", until: "2026-12-24" }, false), `FREQ=DAILY;UNTIL=${at(2026, 12, 24, 23, 59, 59).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`);
    assert.throws(() => rule({ freq: "diario", dur: "ate", until: "2026-11-01" }), /A data final é antes do começo/);
  });

  it("a routine: all day (with its part of the day) or at a time, its points and rooms; one that comes back after done", () => {
    assert.deepEqual(evs("rotina", { who: "Davi", points: "20.4", period: "manha" }), [{ summary: "Nome", description: "#rotina\nQuem faz: Davi\nPontos: 20\nPeríodo: Manhã", start: "2026-11-18", end: "2026-11-19", rrule: "FREQ=DAILY" }]);
    assert.deepEqual(evs("rotina", { allDay: false, period: "manha", times: ["07:00"], points: -3 }), [{ summary: "Nome", description: "#rotina", start: isoLocal(at(2026, 11, 19, 7)), end: isoLocal(at(2026, 11, 19, 7, 30)), rrule: "FREQ=DAILY" }]);
    assert.deepEqual(evs("rotina", { freq: "depois", afterN: "4", points: 0, history: ["2026-11-01"] }), [{ summary: "Nome", description: "#rotina\nVolta: 4 dias depois de feita", start: "2026-11-18", end: "2026-11-19" }]);
    assert.match(evs("rotina", { freq: "depois", afterN: "x", points: 0, mode: "edit", history: ["2026-11-01"] })[0].description, /Volta: 2 dias depois de feita\nFeito em: 01\/11\/2026/);
    assert.match(evs("rotina", { freq: "depois", afterN: 900, points: 0, mode: "edit", history: undefined })[0].description, /Volta: 365 dias depois de feita$/);
    assert.equal(evs("rotina", { freq: "depois", allDay: false, times: ["07:00"], points: 0 })[0].start, isoLocal(at(2026, 11, 18, 7)), "one event: the day asked, even with the time past");
    // the rooms by their names; without the lists of the ResolvIA, what it had stays
    const inv = { home: withInv() };
    assert.match(evs("rotina", { points: 0, rooms: ["sala", "coz", "sumiu"], equipNames: ["TV"] }, inv)[0].description, /Cômodos: Sala; Cozinha\nEquipamento: TV$/);
    assert.match(evs("rotina", { points: 0, room: "coz" }, inv)[0].description, /Cômodo: Cozinha$/);
    assert.equal(evs("rotina", { points: 0, roomNames: ["Varanda"] }, inv)[0].description, "#rotina", "the room taken off");
    assert.match(evs("rotina", { points: 0, roomNames: ["Varanda"] })[0].description, /Cômodo: Varanda$/);
  });

  it("a bill: the day it is due, every month or every year; a maintenance: due after its time, from the last time", () => {
    assert.deepEqual(evs("conta", { value: "1.234,50" }), [{ summary: "Nome", description: "#conta\nValor: R$\u00a01.234,50", start: "2026-11-18", end: "2026-11-19", rrule: "FREQ=MONTHLY" }]);
    assert.deepEqual([evs("conta", { value: "10", repeat: "anual" })[0].rrule, evs("conta", { value: "10", repeat: "nao" })[0].rrule, evs("conta", { value: "10" }, {}, { keepRrule: false })[0].rrule], ["FREQ=YEARLY", undefined, undefined]);
    assert.deepEqual(evs("manutencao", { who: "Ana", last: "2026-08-10", every: { n: 3, unit: "meses" }, warn: 15, points: "30" }), [{ summary: "Nome", description: "#manutenção\nQuem faz: Ana\nA cada: 3 meses\nAvisar: 15 dias antes\nFeito em: 10/08/2026\nPontos: 30", start: "2026-11-10", end: "2026-11-11" }]);
    assert.deepEqual([evs("manutencao", { last: "" })[0].start, evs("manutencao", { last: "" })[0].description], ["2027-05-18", "#manutenção\nA cada: 6 meses\nAvisar: 7 dias antes"]);
    assert.deepEqual(evs("manutencao", { mode: "edit", date: "2026-12-01", history: ["2026-06-01"], points: "x" })[0], { summary: "Nome", description: "#manutenção\nA cada: 6 meses\nAvisar: 7 dias antes\nFeito em: 01/06/2026", start: "2026-12-01", end: "2026-12-02" });
    // with equipments, the rooms are theirs; else the rooms chosen
    const inv = { home: withInv() };
    assert.match(evs("manutencao", { equips: ["pur", "tv", "sumiu"], rooms: ["area"] }, inv)[0].description, /Cômodos: Cozinha; Sala\nEquipamentos: Purificador; TV$/);
    assert.match(evs("manutencao", { rooms: ["area", "sala"], equipNames: ["Velho"] }, inv)[0].description, /Cômodos: Área; Sala$/);
    assert.match(evs("manutencao", { room: "sala" }, inv)[0].description, /Cômodo: Sala$/);
    assert.doesNotMatch(evs("manutencao", { roomNames: ["Varanda"] }, inv)[0].description, /Cômodo/);
    assert.match(evs("manutencao", { roomNames: ["Varanda"], equipNames: ["Velho"] })[0].description, /Cômodo: Varanda\nEquipamento: Velho$/);
  });
});

describe("models: saving the form", () => {
  const ready = (kind, over = {}, o = {}) => {
    const a = new App({ api: fakeApi({ createEvent: null, deleteEvent: null, newBill: null }), ...o });
    a._openKindForm({ kind });
    Object.assign(a._form, { title: "Nome", ...over });
    return a;
  };

  it("new: one event per time on the calendar chosen, and it says where", async () => {
    const one = ready("rotina");
    await one._saveKindForm();
    assert.deepEqual([one.api.calls.map((c) => [c[0], c[1], c[2].start]), one.dones, one.toasts], [[["createEvent", "calendar.casa", "2026-11-18"]], [["Rotina criada em Casa", "calendar.casa", "2026-11-18"]], []]);
    const two = ready("remedio", { times: ["12:00", "20:00"] });
    await two._saveKindForm();
    assert.deepEqual([two.api.calls.length, two.dones[0][0]], [2, "Remédio criado: 2 horários em Saúde"]);
    const man = ready("manutencao");
    await man._saveKindForm();
    assert.equal(man.dones[0][0], "Manutenção criada em Casa");
  });

  it("what is missing is said, and nothing is saved", async () => {
    const noName = ready("remedio", { title: "" });
    await noName._saveKindForm();
    const noCal = ready("rotina", { cal: "calendar.sumiu" });
    await noCal._saveKindForm();
    assert.deepEqual([noName.toasts, noCal.toasts, noName.api.calls.length + noCal.api.calls.length], [["Qual é o remédio?"], ["Escolha o calendário"], 0]);
    const bad = ready("rotina", {}, { api: fakeApi({ createEvent: new Error("sem permissão") }) });
    bad._sheet = "form";
    await bad._saveKindForm();
    assert.deepEqual([bad.toasts, bad._form.saving], [["Não consegui salvar: sem permissão"], false]);
    const closed = ready("rotina", {}, { api: fakeApi({ createEvent: new Error("sem permissão") }) });
    closed._sheet = null;
    await closed._saveKindForm();
    assert.equal(closed._form.saving, true, "the sheet closed meanwhile: left as it is");
  });

  it("a bill to the GerencIA: created there (its name and value first)", async () => {
    const g = { home: { gerencia: { ligado: true, contas: [] } } };
    const a = ready("conta", { title: " Luz ", value: "180,50", categoria: "c1" }, g);
    a._sheet = "form";
    await a._saveKindForm();
    assert.deepEqual([a.api.calls, a.toasts, a.haptics, a._sheet], [[["newBill", { descricao: "Luz", valor: 180.5, vencimento: "2026-11-18", repete: "mensal", categoria: "c1" }]], ["Conta criada no GerencIA"], ["success"], null]);
    const noName = ready("conta", { title: " ", value: "10" }, g);
    await noName._saveKindForm();
    const noValue = ready("conta", { value: "" }, g);
    await noValue._saveKindForm();
    assert.deepEqual([noName.toasts, noValue.toasts], [["Dê um nome à conta"], ["Coloque o valor"]]);
    const bad = ready("conta", { value: "10", categoria: undefined }, { ...g, api: fakeApi({ newBill: new Error("fora do ar") }) });
    bad._sheet = "form";
    await bad._saveKindForm();
    assert.deepEqual([bad.api.calls[0][1].categoria, bad.toasts, bad._form.saving], ["", ["O GerencIA não criou: fora do ar"], false]);
    const gone = ready("conta", { value: "10" }, { ...g, api: fakeApi({ newBill: new Error("fora do ar") }) });
    gone._sheet = null;
    await gone._saveKindForm();
    assert.equal(gone._form.saving, true);
    const cal = ready("conta", { value: "10", dest: "cal" }, g);
    await cal._saveKindForm();
    assert.deepEqual([cal.api.calls[0][0], cal.dones[0][0]], ["createEvent", "Conta criada em Casa"]);
  });

  it("editing: in place, to another calendar, or (one of a series) asking which ones", async () => {
    const edit = (ev, over = {}, o = {}) => {
      const a = new App({ api: fakeApi({ createEvent: null, deleteEvent: null }), ...o });
      a._openKindForm({ ev });
      Object.assign(a._form, over);
      return a;
    };
    const a = edit(MAN(), { title: "Trocar o filtro da pia" });
    await a._saveKindForm();
    assert.deepEqual([a.saved.map((s) => [s[0], s[1].summary]), a.dones[0]], [[["u1", "Trocar o filtro da pia"]], ["Manutenção salva", "calendar.casa", "2026-11-15"]]);
    const moved = edit(med(), { cal: "calendar.casa" });
    await moved._saveKindForm();
    assert.deepEqual([moved.api.calls.map((c) => c.slice(0, 2)), moved.api.calls[1][2], moved.refreshed, moved.dones[0][0]], [[["createEvent", "calendar.casa"], ["deleteEvent", "calendar.saude"]], "u-los", ["calendar.saude"], "Remédio movido para Casa"]);
    const series = edit(med({ rrule: "FREQ=DAILY", recurrence_id: "r1" }));
    await series._saveKindForm();
    assert.deepEqual([series._sheet, series._form.action, series._form.event.summary, series.saved], ["scope", "edit", "Losartana", []]);
    // a series on a calendar that can't change events: it starts again on this day
    const ro = { ...SAUDE, canUpdate: false };
    const again = edit(med({ rrule: "FREQ=DAILY", recurrence_id: "r1" }), {}, { cals: [CASA, ro] });
    await again._saveKindForm();
    assert.equal(again.dones[0][0], "Remédio salvo · a série recomeça neste dia");
  });

  it("a task of the ResolvIA is saved by its own form", () => {
    const a = new App({ form: { kind: "tarefa" } });
    a._saveTodoForm = () => "tarefa";
    a._renderTodoForm = () => "form da tarefa";
    assert.deepEqual([a._saveKindForm() instanceof Promise, a._renderKindForm()], [true, "form da tarefa"]);
  });
});

describe("models: the fields of the form", () => {
  const open = (kind, over = {}, o = {}) => {
    const a = new App({ home: { score: SCORE }, ...o });
    a._openKindForm({ kind });
    Object.assign(a._form, over);
    return a;
  };

  it("Tipo: the models (Tarefa with a list of the ResolvIA); another one opens its form on the same day", () => {
    const a = open("remedio", { date: "2026-11-20" });
    const got = [];
    Object.assign(a, { _openTodoForm: (o) => got.push(["tarefa", o.date.getDate()]), _openKindForm: (o) => got.push([o.kind, o.date && o.date.getDate()]), _openForm: (o) => got.push(["evento", o.date.getDate()]) });
    const v = a._renderModelChips("remedio");
    assert.equal(text(v), "Tipo · Remédio Evento Remédio Conta Rotina Manutenção");
    click(v, "Remédio");
    click(v, "Conta");
    click(v, "Evento");
    a._form.date = "";
    click(v, "Rotina");
    assert.deepEqual(got, [["conta", 20], ["evento", 20], ["rotina", null]], "the one already chosen does nothing");
    const lists = new App({ home: { todos: { lists: [{ id: "todo.casa", name: "Casa", features: 127 }], items: [] } }, form: { date: "2026-11-20" } });
    lists._openTodoForm = (o) => got.push(["tarefa", o.date.getDate()]);
    assert.equal(text(lists._renderModelChips("x")), "Tipo · Evento Evento Tarefa Remédio Conta Rotina Manutenção");
    click(lists._renderModelChips(""), "Tarefa");
    assert.deepEqual(got.at(-1), ["tarefa", 20]);
  });

  it("a medicine: the dose, who takes it (pets too), the times, how often, until when, the calendar and the alert", () => {
    const a = open("remedio", {}, { home: { people: [ANA, DAVI, REX] } });
    const view = () => a._renderKindForm();
    assert.equal(text(view()), "Adicionar Tipo · Remédio Evento Remédio Conta Rotina Manutenção Remédio Dose Quem toma A Ana D Davi Rex Outra pessoa ou um pet: adicione em Mais › Avisos. Horários 1x ao dia 2x 3x De 8 em 8 h 08:00 Horário Frequência Todo dia Dia sim, dia não Dias da semana A cada… Só uma vez Começa Por quanto tempo Uso contínuo Por alguns dias Até uma data Calendário Casa Saúde Observações Cancelar Criar remédio");
    assert.match(render(view()).html, /<button class="btn primary" disabled /, "no name yet");
    const [title, notes] = controls(view()).filter((c) => c.tag === "textarea");
    title.on.input({ target: { value: "Losartana" } });
    notes.on.input({ target: { value: "em jejum\ncom água" } });
    controls(view()).find((c) => c.tag === "input" && c.on.input).on.input({ target: { value: "1 cp" } });
    click(view(), "3x");
    assert.deepEqual([a._form.title, a._form.dose, a._form.times], ["Losartana", "1 cp", ["08:00", "14:00", "20:00"]]);
    controls(view()).filter((c) => c.aria === "Tirar horário")[1].on.click();
    click(view(), "Horário");
    assert.deepEqual(a._form.times, ["08:00", "20:00", "12:00"]);
    a._form.times = Array(8).fill("08:00");
    assert.ok(!labels(view()).includes("Horário"), "8 times at most");
    a._form.times = ["08:00"];
    assert.ok(!labels(view()).includes("Tirar horário"));
    click(view(), /Rex/);
    // 1.117.2 (o dono: "tirar aviso no celular daqui, já está configurado nas configurações"): sem a chave do aviso
    assert.match(text(view()), /Saúde Observações · em jejum Cancelar Criar remédio$/);
    assert.doesNotMatch(text(view()), /Aviso no celular/);
    click(view(), /Rex/);
    assert.equal(a._form.who, "");
    // the calendar, the day and until when
    click(view(), "Casa");
    controls(view()).find((c) => c.tag === "date-pick").on.pick({ detail: { value: "2026-12-01" } });
    controls(view()).find((c) => c.tag === "date-pick").on.pick({ detail: { value: "" } });
    click(view(), "Por alguns dias");
    controls(view()).find((c) => c.tag === "input" && /min="1" max="365"/.test(c.attrs)).on.input({ target: { value: "10" } });
    assert.deepEqual([a._form.cal, a._form.date, a._form.dur, a._form.days], ["calendar.casa", "2026-12-01", "dias", "10"]);
    click(view(), "Até uma data");
    const until = controls(view()).filter((c) => c.tag === "date-pick")[1];
    until.on.pick({ detail: { value: "2026-12-24" } });
    until.on.pick({ detail: {} });
    assert.equal(a._form.until, "2026-12-24");
    click(view(), "Só uma vez");
    assert.doesNotMatch(text(view()), /Por quanto tempo/);
    a._sheet = "form";
    click(view(), "Cancelar");
    assert.equal(a._sheet, null);
    a._saveKindForm = () => (a.asked = "salvar");
    click(view(), "Criar remédio");
    assert.equal(a.asked, "salvar");
    assert.doesNotMatch(text(open("remedio", { who: "Ana" }, { app: { alerts: { late: 0 } } })._renderKindForm()), /Aviso no celular/);
    assert.match(text(open("remedio", { saving: true, title: "x" })._renderKindForm()), /Salvando…$/);
  });

  it("how often: the days of the week, every N days, N days after done (a routine)", () => {
    const a = open("rotina");
    const view = () => a._freqField("Repete");
    assert.equal(text(view()), "Repete Todo dia Dia sim, dia não Dias da semana A cada… Todo mês Depois de feita Só uma vez");
    click(view(), "Dias da semana");
    assert.match(text(view()), /Só uma vez D S T Q Q S S$/);
    click(view(), "seg");
    click(view(), "qua");
    assert.deepEqual(a._form.byday, [1]);
    click(view(), "A cada…");
    controls(view()).find((c) => c.tag === "input").on.input({ target: { value: "5" } });
    assert.match(text(view()), /A cada dias$/);
    click(view(), "Depois de feita");
    assert.match(text(view()), /Volta dias depois de feita Feita hoje, volta daqui a 2 dias\.$/);
    fire(view(), "Dias depois de feita", "input", { target: { value: "1" } });
    assert.match(text(view()), /Volta dia depois de feita Feita hoje, volta amanhã\.$/);
    a._form.afterN = "x";
    assert.match(text(view()), /volta daqui a 2 dias\.$/);
    assert.deepEqual([a._form.interval, a._form.freq], ["5", "depois"]);
    // editing a routine: one that comes back after done stays one; a series can't become one
    const opts = (over) => labels(Object.assign(new App({ form: { kind: "rotina", mode: "edit", freq: "uma", byday: [], ...over } }))._freqField("Repete"));
    assert.deepEqual(opts({ wasAfter: true, freq: "depois" }), ["Depois de feita"]);
    assert.deepEqual(opts({ rid: "r1" }), ["Todo dia", "Dia sim, dia não", "Dias da semana", "A cada…", "Todo mês", "Só uma vez"]);
    assert.deepEqual(opts({ freq: "diario" }).includes("Depois de feita"), false);
    assert.deepEqual(opts({}).length, 7);
    assert.match(render(Object.assign(new App({ form: { kind: "remedio", mode: "add", freq: "uma", byday: [] } }))._freqField("x")).html, /grid-template-columns:repeat\(3,1fr\)[\s\S]*grid-column:span 2/, "5 options: 3 + 2, the last one fills the line");
  });

  it("a bill: the value, when, whether it repeats; with the GerencIA, it goes there (1.117.2: no Onde guardar), the category in buttons", () => {
    const a = open("conta", {}, { home: { gerencia: { ligado: true, contas: [], categorias: [{ id: "c1", nome: "Casa", cor: "#62B5FF" }] } } });
    const view = () => a._renderKindForm();
    assert.equal(text(view()), "Adicionar Tipo · Conta Evento Remédio Conta Rotina Manutenção Conta Valor R$ Primeiro vencimento Repete Não Todo mês Todo ano Categoria Sem categoria Casa Cancelar Criar no GerencIA");
    assert.equal(a._form.dest, "gerencia", "a conta vai para o GerencIA");
    controls(view()).find((c) => c.tag === "input").on.input({ target: { value: "180,50" } });
    click(view(), "Casa");
    controls(view()).find((c) => c.tag === "date-pick").on.pick({ detail: { value: "2026-12-05" } });
    click(view(), "Não");
    assert.deepEqual([a._form.value, a._form.categoria, a._form.date, a._form.repeat], ["180,50", "c1", "2026-12-05", "nao"]);
    assert.doesNotMatch(render(view()).html, /<select/, "a categoria em botões, sem a caixa de seleção");
    assert.match(render(view()).html, /class="pick list on"[^>]*title="Casa"/, "Casa marcada, na cor dela");
    assert.match(text(view()), /R\$ Vence Repete/);
    click(view(), "Sem categoria");
    assert.equal(a._form.categoria, "");
    assert.match(text(open("conta")._renderKindForm()), /Todo ano Calendário Casa Saúde Observações Cancelar Criar conta$/, "without the GerencIA: the calendar");
    const edit = new App({ home: { gerencia: { ligado: true, contas: [] } } });
    edit._openKindForm({ ev: CONTA({ recurrence_id: "r1" }) });
    assert.match(text(edit._renderKindForm()), /^Editar conta Conta Valor R\$ Primeiro vencimento Repete Não Todo mês Todo ano Observações Este item se repete\. Cancelar Salvar$/);
  });

  it("a routine: who does it, any time, a part of the day or a time, the points and when it starts", () => {
    const a = open("rotina");
    const view = () => a._renderKindForm();
    assert.equal(text(view()), "Adicionar Tipo · Rotina Evento Remédio Conta Rotina Manutenção Tarefa Quem faz A Ana D Davi Outra pessoa: adicione em Mais › Avisos. Horário Qualquer hora Num horário Manhã Tarde Noite Pontos para quem fizer Sem pontos +5 +10 +20 +30 +50 Repete Todo dia Dia sim, dia não Dias da semana A cada… Todo mês Depois de feita Só uma vez Começa Até quando Sem data para acabar Até uma data Calendário Casa Saúde Observações Cancelar Criar rotina");
    click(view(), "Tarde");
    assert.deepEqual([a._form.allDay, a._form.period], [true, "tarde"]);
    click(view(), "Num horário");
    assert.deepEqual([a._form.allDay, a._form.period], [false, ""]);
    assert.match(text(view()), /Num horário 19:00 Manhã/);
    a._form.times = [];
    assert.match(text(view()), /Num horário 19:00 Manhã/);
    click(view(), "Qualquer hora");
    assert.equal(a._form.allDay, true);
    click(view(), "+20");
    fire(view(), "Outro valor de pontos", "input", { target: { value: "45" } });
    click(view(), "Sem pontos");
    assert.equal(a._form.points, 0);
    click(view(), "Depois de feita");
    assert.match(text(view()), /volta daqui a 2 dias\. Primeira vez Calendário/, "no Até quando for one that comes back");
    controls(view()).find((c) => c.tag === "date-pick").on.pick({ detail: { value: "2026-11-25" } });
    assert.equal(a._form.date, "2026-11-25");
    const edit = new App();
    edit._openKindForm({ ev: ROT() });
    assert.match(text(edit._renderKindForm()), /^Editar rotina .* Depois de feita Volta dias depois de feita Feita hoje, volta daqui a 3 dias\. Próxima vez Calendário \(mover\) Casa Saúde Observações Cancelar Salvar$/);
    assert.match(text(edit._pointsField()), /O placar está desligado \(aba Recompensas ?\)\./);
    const daily = new App();
    daily._openKindForm({ ev: ROT({ description: "#rotina", rrule: "FREQ=DAILY" }) });
    assert.match(text(daily._renderKindForm()), / Data Até quando /);
  });

  it("a maintenance: how often, the last time (or the next), the points and how long before it shows", () => {
    const a = open("manutencao");
    const view = () => a._renderKindForm();
    assert.equal(text(view()), "Adicionar Tipo · Manutenção Evento Remédio Conta Rotina Manutenção O que fazer Quem faz A Ana D Davi Outra pessoa: adicione em Mais › Avisos. A cada · 6 meses 1 mês 3 meses 6 meses 1 ano dias semanas meses anos Feito hoje, volta em 6 meses. Feito pela última vez Próxima: Terça, 18 de mai de 2027 · em 181 dias Pontos para quem fizer Sem pontos +5 +10 +20 +30 +50 Mostrar na tela inicial, antes da data 1 dia 3 dias 7 dias 15 dias 30 dias Calendário Casa Saúde Observações Cancelar Criar manutenção");
    click(view(), "1 ano");
    fire(view(), "Quantidade", "input", { target: { value: "2" } });
    click(view(), "semanas");
    assert.deepEqual(a._form.every, { n: 2, unit: "semanas" });
    fire(view(), "Quantidade", "input", { target: { value: "x" } });
    assert.equal(a._form.every.n, 1);
    click(view(), "15 dias");
    controls(view()).find((c) => c.tag === "date-pick").on.pick({ detail: { value: "2026-11-17" } });
    assert.deepEqual([a._form.warn, a._form.last], [15, "2026-11-17"]);
    assert.match(text(view()), /Feito hoje, volta em 1 semana\. Feito pela última vez Próxima: Terça, 24 de nov · em 6 dias Pontos/);
    a._form.last = "";
    a._form.every = { n: 1, unit: "dias" };
    assert.match(text(view()), /Próxima: Amanhã Pontos/);
    const edit = new App();
    edit._openKindForm({ ev: MAN() });
    assert.match(text(edit._renderKindForm()), /^Editar manutenção O que fazer .* Próxima vez Próxima: Domingo, 15 de nov Pontos .* Observações · filtro modelo X Cancelar Salvar$/);
    controls(edit._renderKindForm()).find((c) => c.tag === "date-pick").on.pick({ detail: { value: "2026-12-01" } });
    assert.equal(edit._form.date, "2026-12-01");
  });

  it("the calendar to move to: only where the event can leave from; one of a series stays", () => {
    const field = (form, cals = [CASA, SAUDE, LEITURA]) => labels(new App({ cals, form })._calField());
    assert.deepEqual(field({ mode: "add", cal: "calendar.casa" }), ["Casa", "Saúde", "Feriados"]);
    assert.deepEqual(field({ mode: "edit", cal: "calendar.casa", origCal: "calendar.casa" }), ["Casa", "Saúde", "Feriados"]);
    assert.deepEqual(field({ mode: "edit", cal: "calendar.feriados", origCal: "calendar.feriados" }), [], "it can't be taken from there");
    assert.deepEqual(field({ mode: "edit", cal: "calendar.casa", origCal: "calendar.casa", rid: "r1" }), []);
    assert.deepEqual(field({ mode: "edit", cal: "calendar.x", origCal: "calendar.sumiu" }), []);
    assert.deepEqual(field({ mode: "add" }, [CASA]), []);
  });
});

describe("Mais › Avisos", () => {
  const BIA = { name: "Bia", person: "person.bia", phone: true, reach: true };
  const TIO = { name: "Tio", pet: false, phone: false, reach: false };
  const house = (o = {}) => new App({ home: { people: [ANA, DAVI, REX, BIA, TIO], score: { ...SCORE, participants: ["Ana", "Davi", "Tio"] } }, app: { people: { Rex: { pet: true, care: "Ana" }, Tio: {} }, alerts: { caregivers: ["Bia"] } }, ...o });

  it("the switch, Avisar de novo, Quem cuida (people with a phone), and each person with whose phone and calendar", () => {
    const a = house();
    const v = a._renderAlertsPanel();
    assert.equal(text(v), "Avisos de remédio no celular Na hora da dose, com Tomei e Adiar 15 min. Avisar no celular Dá para desligar em cada remédio. Avisar de novo se não tomar Não 15 min depois 30 min 1 hora Quem cuida Ana Bia Recebe os atrasos de todos. Testar no meu celular Pessoas e pets A Ana Pessoa do Home Assistant Sem calendário Calendário: Casa Calendário: Saúde D Davi Pessoa do Home Assistant, sem celular No celular de quem cuida No celular de Ana No celular de Bia Sem calendário Calendário: Casa Calendário: Saúde Rex Pet No celular de quem cuida No celular de Ana No celular de Bia B Bia Pessoa do Home Assistant Sem calendário Calendário: Casa Calendário: Saúde T Tio Só no CronologIA No celular de quem cuida No celular de Ana No celular de Bia Sem calendário Calendário: Casa Calendário: Saúde Adicionar pessoa ou pet Vai para o celular ligado a cada pessoa no Home Assistant. Sem celular (pet ou criança): para quem você escolher.");
    fire(v, "Avisar no celular", "change", { target: { checked: false } });
    click(v, "15 min depois");
    click(v, "Ana");
    click(v, "Bia");
    assert.deepEqual(a.prefs.map((p) => p.alerts), [{ meds: false, late: 30, caregivers: ["Bia"] }, { meds: true, late: 15, caregivers: ["Bia"] }, { meds: true, late: 30, caregivers: ["Bia", "Ana"] }, { meds: true, late: 30, caregivers: [] }]);
    assert.match(text(house({ app: { alerts: { late: 0 } } })._renderAlertsPanel()), /Recebe os avisos de quem está sem celular\./);
  });

  it("off: only the people; nobody with a phone says where to tie one", () => {
    assert.equal(text(new App({ app: { alerts: { meds: false } }, home: { people: [] } })._renderAlertsPanel()), "Avisos de remédio no celular Na hora da dose, com Tomei e Adiar 15 min. Avisar no celular Dá para desligar em cada remédio. Pessoas e pets As pessoas do Home Assistant aparecem aqui. Adicionar pessoa ou pet");
    const none = new App({ home: { people: [DAVI] }, me: "Davi", cals: [] });
    const t = text(none._renderAlertsPanel());
    assert.match(t, /Avisar de novo se não tomar Não 15 min depois 30 min 1 hora Testar no meu celular Pessoas e pets D Davi Pessoa do Home Assistant, sem celular Adicionar pessoa ou pet Ninguém tem celular ligado no Home Assistant \(Configurações › Pessoas\)\.$/);
    assert.match(render(none._renderAlertsPanel()).html, /aviso-test" disabled title="Sem celular ligado a você no Home Assistant"/);
    assert.match(render(Object.assign(new App(), { _me: undefined, _writable: undefined, _score: undefined })._renderAlertsPanel()).html, /aviso-test" disabled /);
    assert.match(text(new App({ home: { people: undefined } })._renderAlertsPanel()), /As pessoas do Home Assistant aparecem aqui\./);
  });

  it("whose phone gets the alerts of one without a phone, and the calendar of each person", () => {
    const a = house();
    const v = a._renderAlertsPanel();
    fire(v, "Quem recebe os avisos de Davi", "change", { target: { value: "Bia" } });
    assert.deepEqual(a.prefs[0], { people: { Rex: { pet: true, care: "Ana" }, Tio: {}, Davi: { care: "Bia" } } });
    fire(a._renderAlertsPanel(), "Quem recebe os avisos de Rex", "change", { target: { value: "" } });
    assert.deepEqual(a.prefs[1].people.Rex, { pet: true }, "back to Quem cuida");
    fire(a._renderAlertsPanel(), "Calendário de Ana", "change", { target: { value: "calendar.saude" } });
    fire(a._renderAlertsPanel(), "Calendário de Davi", "change", { target: { value: "" } });
    assert.deepEqual([a.prefs[2].people.Ana, a.prefs[3].people.Davi], [{ cal: "calendar.saude" }, { care: "Bia", cal: false }]);
    assert.match(render(a._renderAlertsPanel()).html, /aria-label="Calendário de Ana"[^>]*>\s*<option value="" >Sem calendário<\/option>\s*<option value="calendar.casa" >Calendário: Casa<\/option><option value="calendar.saude" selected>/);
    assert.match(render(a._renderAlertsPanel()).html, /aria-label="Calendário de Davi"[^>]*>\s*<option value="" selected>/);
    // who was chosen has no phone anymore: still said, to change
    const gone = house({ home: { people: [ANA, { ...REX, care: "Tio" }] } });
    assert.match(text(gone._renderAlertsPanel()), /Rex Pet No celular de quem cuida No celular de Ana Tio \(sem celular\)/);
  });

  it("the test of each person and of my phone; a pet leaves the placar; one of the app can be taken off", async () => {
    const a = house({ api: fakeApi({ testAlert: null }) });
    const v = a._renderAlertsPanel();
    await click(v, "Testar no meu celular");
    await click(v, "Testar aviso para Rex");
    assert.deepEqual([a.api.calls, a.toasts.map((t) => t.split(". ")[0])], [[["testAlert", "Ana"], ["testAlert", "Rex"]], ["Aviso de teste enviado para o seu celular", "Aviso de teste enviado para o celular de Ana"]]);
    click(v, "Tio é um pet");
    assert.deepEqual([a.prefs[0].score.participants, a.prefs[1].people.Tio], [["Ana", "Davi"], { pet: true }]);
    click(a._renderAlertsPanel(), "Rex é um pet");
    assert.deepEqual([a.prefs.length, a.prefs[2].people.Rex], [3, { care: "Ana" }], "not a pet anymore: nothing changes on the placar");
    click(a._renderAlertsPanel(), "Tirar Tio");
    assert.deepEqual(Object.keys(a.prefs[3].people), ["Rex"]);
    const last = new App({ home: { people: [{ name: "Tio" }] }, app: { people: { Tio: {} } } });
    click(last._renderAlertsPanel(), "Tio é um pet");
    click(last._renderAlertsPanel(), "Tirar Tio");
    assert.deepEqual([last.prefs.length, last.prefs[1]], [2, { people: null }], "nobody of the app left");
  });

  it("Adicionar pessoa ou pet: the name (once in the list), a person or a pet, Enter adds", async () => {
    const a = house();
    a.found = { focus: () => (a.focused = true) };
    click(a._renderAlertsPanel(), "Adicionar pessoa ou pet");
    await tick();
    assert.deepEqual([a._newPerson, a.focused, a.asked], [{ name: "", pet: false }, true, ".person-add input"]);
    const view = () => a._renderAlertsPanel();
    assert.match(text(view()), /Pessoa Pet Cancelar Adicionar Vai para/);
    assert.match(render(view()).html, /<button class="btn primary sm" disabled /);
    click(view(), "Adicionar");
    assert.equal(a.prefs.length, 0, "no name: nothing");
    const name = () => controls(view()).find((c) => c.aria === "Nome da pessoa ou pet");
    name().on.input({ target: { value: "  ana " } });
    name().on.keydown({ key: "a" });
    name().on.keydown({ key: "Enter" });
    assert.deepEqual([a.toasts, a.prefs.length], [["ana já está na lista"], 0]);
    name().on.input({ target: { value: " Mel   da  Silva " } });
    click(view(), "Pet");
    assert.match(render(view()).html, /<button class="on" data-on-click="\d+"><svg[^>]*><svg\/><\/svg>Pet/);
    click(view(), "Pessoa");
    click(view(), "Pet");
    click(view(), "Adicionar");
    assert.deepEqual([a.prefs[0].people["Mel da Silva"], a._newPerson], [{ pet: true }, null]);
    click(view(), "Adicionar pessoa ou pet");
    a.found = null;
    await tick();
    name().on.input({ target: { value: "Caio" } });
    name().on.keydown({ key: "Enter" });
    assert.deepEqual(a.prefs[1].people.Caio, {});
    click(view(), "Adicionar pessoa ou pet");
    click(view(), "Cancelar");
    assert.equal(a._newPerson, null);
    a._newPerson = {};
    assert.match(render(view()).html, /placeholder="Nome \(pessoa ou pet\)"/);
  });
});

describe("Mais › Configurações › Integrações: the GerencIA and the CorrerIA", () => {
  it("the GerencIA: off, on and found (how many bills, Mostrar no calendário), not found, out of reach", () => {
    const off = new App();
    assert.equal(text(off._renderGerenciaPanel()), "Contas do GerencIA Usar a integração Desligada.");
    fire(off._renderGerenciaPanel(), "Usar a integração com o GerencIA", "change", { target: { checked: true } });
    const on = new App({ app: { gerencia_on: true }, home: { gerencia: GER() } });
    const v = on._renderGerenciaPanel();
    assert.equal(text(v), "Contas do GerencIA Usar a integração Ligada. Conectado ao GerencIA 1.81.0 6 contas a pagar entre os últimos 2 meses e os próximos 4. O Paguei daqui dá baixa lá. Mostrar no calendário No dia do vencimento.");
    fire(v, "Usar a integração com o GerencIA", "change", { target: { checked: false } });
    fire(v, "Mostrar contas no calendário", "change", { target: { checked: false } });
    fire(v, "Mostrar contas no calendário", "change", { target: { checked: true } });
    assert.deepEqual([off.prefs, on.prefs], [[{ gerencia_on: true }], [{ gerencia_on: null }, { gerencia_hidden: true }, { gerencia_hidden: null }]]);
    assert.equal(text(new App({ app: { gerencia_on: true } })._renderGerenciaPanel()), "Contas do GerencIA Usar a integração Ligada. GerencIA não encontrado Com o GerencIA (o app de finanças) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar.");
    assert.equal(text(new App({ app: { gerencia_on: true }, home: { gerencia: { ligado: true, erro: "sem resposta" } } })._renderGerenciaPanel()), "Contas do GerencIA Usar a integração Ligada. Não consegui falar com o GerencIA sem resposta Mostrar no calendário No dia do vencimento.");
    assert.match(text(new App({ app: { gerencia_on: true }, home: { gerencia: undefined } })._renderGerenciaPanel()), /GerencIA não encontrado/);
    assert.match(text(new App({ app: { gerencia_on: true }, home: { gerencia: { ligado: true, contas: [conta("a")] } } })._renderGerenciaPanel()), /Conectado ao GerencIA 1 conta a pagar/);
  });

  it("the CorrerIA: off, on with no use yet, and who used it last and when", () => {
    const used = (em, cliente = "Claude") => text(new App({ app: { correria_on: true }, home: { correria: { ultimo: { cliente, em } } } })._renderCorreriaPanel()).split("agenda. ")[1];
    assert.equal(used(at(2026, 11, 17, 21, 5).toISOString()), "Claude usou ontem às 21:05.");
    assert.equal(used(at(2026, 11, 18, 9).toISOString(), "WhatsApp"), "WhatsApp usou hoje às 09:00.");
    assert.equal(used(at(2026, 11, 2, 7, 30).toISOString(), "Gemini"), "Gemini usou em 2 nov às 07:30.");
    assert.equal(used("quando?"), "Nenhum uso ainda Conecte no app CorrerIA.");
    const on = new App({ app: { correria_on: true } });
    assert.equal(text(on._renderCorreriaPanel()), "CorrerIA O CorrerIA junta os apps da casa no WhatsApp, no Claude e no Gemini. Usar com o CorrerIA Ligado: pelo WhatsApp, o Claude e o Gemini leem e mudam a agenda. Nenhum uso ainda Conecte no app CorrerIA.");
    fire(on._renderCorreriaPanel(), "Usar com o CorrerIA", "change", { target: { checked: false } });
    const off = new App({ home: { correria: { ultimo: { cliente: "Claude", em: at(2026, 11, 17, 21).toISOString() } } } });
    assert.equal(text(off._renderCorreriaPanel()), "CorrerIA O CorrerIA junta os apps da casa no WhatsApp, no Claude e no Gemini. Usar com o CorrerIA Desligado.");
    fire(off._renderCorreriaPanel(), "Usar com o CorrerIA", "change", { target: { checked: true } });
    assert.deepEqual([on.prefs, off.prefs], [[{ correria_on: null }], [{ correria_on: true }]]);
    const noClock = Object.assign(new App({ app: { correria_on: true }, home: { correria: { ultimo: { cliente: "Claude", em: at(2026, 11, 18, 9).toISOString() } } } }), { _now: 0 });
    assert.match(text(noClock._renderCorreriaPanel()), /Claude usou hoje às 09:00\./);
  });
});
