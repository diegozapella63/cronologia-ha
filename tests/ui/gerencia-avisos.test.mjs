// tests/ui: Agora › Avisos do GerencIA (1.79.0): the alerts of the Início of the GerencIA (bills that came by e-mail,
// investments that end, benefits to use…), each one opening the GerencIA there; nothing when the integration is off,
// failing or with nothing to say. The bills themselves stay in Contas a pagar. Names and values invented.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, render, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";

const AVISOS = [
  { id: "email:a1", tipo: "email", titulo: "Fatura Banco Azul", texto: "Por e-mail · 3 lançamentos", valor: 312.4, caminho: "/agora" },
  { id: "inv:vence", tipo: "vence", titulo: "Vence amanhã", texto: "CDB Lilás · decida para onde vai o dinheiro", dias: 1, caminho: "/agora" },
  { id: "inv:vencidos", tipo: "venceu", titulo: "Um investimento venceu", texto: "LCI Verde", caminho: "/agora" },
  { id: "ben:usar", tipo: "beneficio", titulo: "Benefício para usar", texto: "Sala VIP (2) até 30/11", caminho: "/beneficios" },
];

class App extends hostOf(ModelsMixin, RewardsMixin) {
  constructor(gerencia) {
    super(fakeApi());
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [], caregivers: [], gerencia, score: null };
    this._app_ = {};
    this._now = at(2026, 11, 11, 9).getTime();
    this._dark = false;
  }
}

describe("Agora › Avisos do GerencIA", () => {
  it("each alert with its text and value; a touch opens the GerencIA where it is", () => {
    const view = new App({ ligado: true, contas: [], avisos: AVISOS, painel: "/app/a1b2c3d4_gerencia" })._renderGerenciaAvisos();
    const t = text(view);
    assert.match(t, /Avisos do GerencIA/);
    assert.match(t, /Fatura Banco Azul/);
    assert.match(t, /Por e-mail · 3 lançamentos/);
    assert.match(t, /R\$\s?312/);
    assert.match(t, /Vence amanhã/);
    assert.match(t, /1\s*dia\b/, "one day, singular");
    assert.match(t, /Sala VIP \(2\) até 30\/11/);
    const h = render(view).html;
    assert.equal((h.match(/href="\/app\/a1b2c3d4_gerencia\/agora"/g) || []).length, 3);
    assert.equal((h.match(/href="\/app\/a1b2c3d4_gerencia\/beneficios"/g) || []).length, 1);
    assert.equal((h.match(/target="_top"/g) || []).length, 4);
    assert.equal((h.match(/class="bill gav alerta"/g) || []).length, 1, "what went wrong in red: the investment that ended");
  });
  it("outside Home Assistant (no painel): the alerts, without links", () => {
    const h = render(new App({ ligado: true, contas: [], avisos: AVISOS.slice(0, 1), painel: null })._renderGerenciaAvisos()).html;
    assert.match(h, /Fatura Banco Azul/);
    assert.doesNotMatch(h, /href=|gav-chev/);
  });
  it("nothing when off, failing, of an older GerencIA (no avisos) or with nothing to say", () => {
    for (const g of [{ ligado: false, contas: [] }, { ligado: true, erro: "sem resposta", contas: [], avisos: AVISOS }, { ligado: true, contas: [] }, { ligado: true, contas: [], avisos: [] }]) {
      assert.equal(render(new App(g)._renderGerenciaAvisos()).html.trim(), "", JSON.stringify(g));
    }
  });
});
