// frontend/src/rewards.js (Recompensas): who is who in the scoreboard, their colors, deméritos, and the
// lines of the extrato for every kind of entry.
import "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, fakeApi, hostOf } from "./_lit.mjs";
import { RewardsMixin } from "../frontend/src/rewards.js";
import { colorById } from "../frontend/src/util.js";

class Base extends hostOf(RewardsMixin) {
  constructor({ score = null, cals = [], api = fakeApi(), user = null } = {}) {
    super(api);
    this.score = score;
    this.cals = cals;
    this._user = user;
    this._dark = false;
  }
  _ix() {
    return { score: this.score };
  }
  _cals() {
    return this.cals;
  }
}
const SCORE = (over = {}) => ({ enabled: true, participants: ["Ana Souza", "Beto", "Caio"], entries: [{ key: "k1", who: "Beto" }], ...over });
const cal = (name, color, hidden = false) => ({ name, color: colorById(color), hidden });

describe("rewards: the scoreboard and its people", () => {
  it("on only when enabled and with someone in it", () => {
    assert.equal(new Base({ score: SCORE() })._scoreOn(), true);
    assert.equal(new Base({ score: SCORE({ enabled: false }) })._scoreOn(), false);
    assert.equal(new Base({ score: SCORE({ participants: [] }) })._scoreOn(), false);
    assert.equal(new Base()._scoreOn(), false);
  });
  it("_participant finds the person by the name or the first name, without accents or case", () => {
    const r = new Base({ score: SCORE() });
    assert.equal(r._participant("ana"), "Ana Souza");
    assert.equal(r._participant("ANA LIMA"), "Ana Souza", "same first name");
    assert.equal(r._participant("Béto"), "Beto");
    assert.equal(r._participant("Duda"), "");
    assert.equal(r._participant(""), "");
    assert.equal(new Base()._participant("Ana"), "");
  });
  it("_pointsWho: who got the points of an entry, else who marked it (if in the scoreboard)", () => {
    const r = new Base({ score: SCORE() });
    assert.equal(r._pointsWho("k1", "Ana"), "Beto", "after a Foi Beto, the entry says Beto");
    assert.equal(r._pointsWho("k2", "caio"), "Caio");
    assert.equal(r._pointsWho("k2", "Visita"), "");
    assert.equal(r._pointsWho("k2"), "");
  });
  it("_me: the person of this Home Assistant user", () => {
    assert.equal(new Base({ user: { person: "Beto" } })._me(), "Beto");
    assert.equal(new Base()._me(), "");
  });
});

describe("rewards: the colors of the people", () => {
  it("a calendar named after the person gives its color; the others get the next free ones", () => {
    const r = new Base({ score: SCORE(), cals: [cal("Agenda da Ana", "rosa"), cal("Casa", "azul")] });
    assert.equal(r._pColor("Ana Souza").id, "rosa");
    assert.equal(r._pColor("Beto").id, "turquesa");
    assert.equal(r._pColor("Caio").id, "laranja", "rosa is taken by Ana: skip it");
    assert.equal(r._pColor("beto").id, "turquesa", "without case");
  });
  it("only when exactly one visible calendar has the first name as a word", () => {
    assert.equal(new Base({ cals: [cal("Ana", "rosa"), cal("Trabalho da Ana", "verde")] })._personCal("Ana"), null, "two: none");
    assert.equal(new Base({ cals: [cal("Ana", "rosa", true)] })._personCal("Ana"), null, "hidden");
    assert.equal(new Base({ cals: [cal("Banana", "rosa")] })._personCal("Ana"), null, "inside another word");
    assert.equal(new Base({ cals: [cal("Pessoal (Ana)", "rosa")] })._personCal("Ana Souza").name, "Pessoal (Ana)");
    assert.equal(new Base({ cals: [cal("Ana", "rosa")] })._personCal(""), null);
  });
  it("someone outside the scoreboard: the color of their calendar, else the first one", () => {
    const r = new Base({ score: SCORE(), cals: [cal("Duda", "verde")] });
    assert.equal(r._pColor("Duda").id, "verde");
    assert.equal(r._pColor("Visita").id, "turquesa");
  });
  it("the map is kept while the calendars and the people don't change", () => {
    const r = new Base({ score: SCORE() });
    const m = r._pColors();
    assert.equal(r._pColors(), m);
    r.score = SCORE({ participants: ["Ana Souza", "Beto"] });
    assert.notEqual(r._pColors(), m);
  });
  it("_renderWon: the initial of who won, in their color, and the points", () => {
    const r = new Base({ score: SCORE() });
    assert.equal(text(r._renderWon("Beto", 10)), "B +10");
    assert.equal(text(r._renderWon("", 5)), "+5");
  });
});

describe("rewards: deméritos", () => {
  it("create, mark someone (with Desfazer) and a failure", async () => {
    const api = fakeApi({ scoreDemerit: { key: "e9" }, scoreRemove: {} });
    const r = new Base({ score: SCORE(), api });
    await r._addDemerit("Deixou a louça na pia", 5);
    const d = r._demerits()[0];
    assert.deepEqual([d.title, d.points, d.id.length], ["Deixou a louça na pia", 5, 8]);
    assert.equal(r.toasts[0], "Demérito criado: Deixou a louça na pia · −5");
    await r._markDemerit(d, "Beto");
    assert.equal(r.toasts[1], "−5 para Beto: Deixou a louça na pia");
    assert.deepEqual(api.calls[0], ["scoreDemerit", d.id, "Beto"]);
    await r.undos[1].run();
    assert.deepEqual(api.calls[1], ["scoreRemove", "e9"]);
    const bad = new Base({ api: fakeApi({ scoreDemerit: new Error("Placar desligado") }) });
    await bad._markDemerit(d, "Ana");
    assert.deepEqual(bad.toasts, ["Placar desligado"]);
  });
  it("the form: add, edit, and nothing without a title or with 0 points", async () => {
    const r = new Base({ score: SCORE() });
    r._openDemeritForm();
    assert.deepEqual([r._sheet, r._form.mode, r._form.points], ["demerit", "add", 5]);
    r._setForm({ title: "  Bagunça  ", points: "-3.6" });
    await r._saveDemeritForm();
    const d = r._demerits()[0];
    assert.deepEqual([d.title, d.points], ["Bagunça", 4], "trimmed, positive and whole");
    r._openDemeritForm(d);
    r._setForm({ title: "Bagunça no quarto", points: 10 });
    await r._saveDemeritForm();
    assert.deepEqual(r._demerits().map((x) => [x.id, x.title, x.points]), [[d.id, "Bagunça no quarto", 10]]);
    assert.equal(r.toasts.at(-1), "Demérito salvo");
    for (const f of [{ title: "", points: 5 }, { title: "x", points: 0 }]) {
      r._openDemeritForm();
      r._setForm(f);
      await r._saveDemeritForm();
    }
    assert.equal(r._demerits().length, 1);
  });
  it("deleting asks first; the last one gone saves nothing (the default)", async () => {
    const r = new Base({ score: SCORE() });
    await r._addDemerit("Atraso", 2);
    r._openDemeritForm(r._demerits()[0]);
    r._deleteDemerit();
    assert.equal(r._sheet, "confirm");
    assert.match(r._form.text, /“Atraso” sai da lista\. Os pontos já descontados continuam no placar/);
    await r._form.run();
    assert.deepEqual([r._demerits(), r.prefs.at(-1), r.toasts.at(-1)], [[], { demerits: null }, "Demérito apagado"]);
  });
});

describe("rewards: the lines of the extrato", () => {
  const r = new Base({ score: SCORE() });
  const t = (l) => r._extText({ points: 5, title: "Lavar louça", ...l });
  it("ganhou and perdeu (by someone else, by automation, in the ResolvIA)", () => {
    assert.deepEqual(t({ type: "ganhou", who: "Ana" }), ["Ana ganhou 5 pontos", "Lavar louça"]);
    assert.deepEqual(t({ type: "ganhou", who: "Ana", by: "Beto", via: "ResolvIA", kind: "tarefa" }), ["Ana ganhou 5 pontos, marcado por Beto no ResolvIA", "Tarefa do ResolvIA: Lavar louça"]);
    assert.deepEqual(t({ type: "ganhou", who: "Ana Souza", by: "ana", points: 1 }), ["Ana Souza ganhou 1 ponto", "Lavar louça"], "marked by herself: no 'marcado por'");
    assert.deepEqual(t({ type: "perdeu", who: "Caio", by: "Ana", kind: "demerito", points: -3 }), ["Ana tirou 3 pontos de Caio", "Demérito: Lavar louça"]);
    assert.deepEqual(t({ type: "perdeu", who: "Caio", via: "Automação", kind: "extra" }), ["Caio perdeu 5 pontos por automação", "Avulso: Lavar louça"]);
  });
  it("through the CorrerIA (1.60.0): pelo Claude, pelo WhatsApp…", () => {
    assert.deepEqual(t({ type: "ganhou", who: "Beto", by: "Ana", via: "WhatsApp" }), ["Beto ganhou 5 pontos, marcado por Ana pelo WhatsApp", "Lavar louça"]);
    assert.deepEqual(t({ type: "perdeu", who: "Beto", by: "Ana", via: "Claude", kind: "demerito", points: -5 }), ["Ana tirou 5 pontos de Beto pelo Claude", "Demérito: Lavar louça"]);
    assert.deepEqual(t({ type: "ganhou", who: "Ana", by: "Ana", via: "Gemini", kind: "extra" }), ["Ana ganhou 5 pontos pelo Gemini", "Avulso: Lavar louça"]);
    assert.deepEqual(t({ type: "ganhou", who: "Ana", via: "Outro" }), ["Ana ganhou 5 pontos", "Lavar louça"], "an unknown source says nothing");
  });
  it("tirou: a demérito cancelled gives back; points cancelled take away", () => {
    assert.deepEqual(t({ type: "tirou", who: "Beto", by: "Ana" }), ["Ana devolveu 5 pontos para Beto", "Demérito cancelado: Lavar louça"]);
    assert.deepEqual(t({ type: "tirou", who: "Beto" }), ["Beto recebeu 5 pontos de volta", "Demérito cancelado: Lavar louça"]);
    assert.deepEqual(t({ type: "tirou", who: "Beto", by: "Ana", points: -5 }), ["Ana tirou 5 pontos de Beto", "Pontos cancelados: Lavar louça"]);
    assert.deepEqual(t({ type: "tirou", who: "Beto", by: "beto", points: -5 }), ["Beto tirou os próprios 5 pontos", "Pontos cancelados: Lavar louça"]);
    assert.deepEqual(t({ type: "tirou", who: "Beto", points: -5 }), ["Beto perdeu 5 pontos", "Pontos cancelados: Lavar louça"]);
  });
  it("desmarcou, trocou, voltou, ajuste and anything else", () => {
    assert.deepEqual(t({ type: "desmarcou", who: "Ana", by: "Beto", points: -5 }), ["Ana perdeu 5 pontos, desmarcado por Beto", "Desmarcado: Lavar louça"]);
    assert.deepEqual(t({ type: "desmarcou", who: "Ana", by: "Ana", points: -5 }), ["Ana perdeu 5 pontos ao desmarcar", "Desmarcado: Lavar louça"]);
    assert.deepEqual(t({ type: "desmarcou", who: "Ana", via: "ResolvIA", points: -5 }), ["Ana perdeu 5 pontos, reaberto no ResolvIA", "Desmarcado: Lavar louça"]);
    assert.deepEqual(t({ type: "desmarcou", who: "Ana" }), ["Ana recebeu de volta 5 pontos", "Desmarcado: Lavar louça"]);
    assert.deepEqual(t({ type: "trocou", who: "Beto", from: "Ana", by: "Caio" }), ["5 pontos passaram de Ana para Beto, por Caio", "Lavar louça"]);
    assert.deepEqual(t({ type: "trocou", who: "Beto" }), ["5 pontos passaram de ? para Beto", "Lavar louça"]);
    assert.deepEqual(t({ type: "voltou", who: "Ana", by: "Beto" }), ["Beto desfez: 5 pontos voltaram para Ana", "Desfeito: Lavar louça"]);
    assert.deepEqual(t({ type: "voltou", who: "Ana" }), ["5 pontos voltaram para Ana", "Desfeito: Lavar louça"]);
    assert.deepEqual(t({ type: "voltou", who: "Ana", by: "Beto", points: -5 }), ["Ana perdeu 5 pontos de novo, Beto desfez", "Desfeito: Lavar louça"]);
    assert.deepEqual(t({ type: "ajuste", who: "Ana", by: "Beto" }), ["Ana ganhou mais 5 pontos, por Beto", "Pontos mudaram: Lavar louça"]);
    assert.deepEqual(t({ type: "ajuste", who: "Ana", points: -2 }), ["Ana perdeu 2 pontos", "Pontos mudaram: Lavar louça"]);
    assert.deepEqual(t({ type: "x", who: "Ana", kind: "manutencao", points: -1 }), ["Ana perdeu 1 ponto", "Lavar louça"]);
    assert.deepEqual(t({ who: "Ana" }), ["Ana ganhou 5 pontos", "Lavar louça"]);
  });
});
