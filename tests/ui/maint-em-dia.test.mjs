// tests/ui: Agora › Rotina da casa (1.81.1): com as rotinas de hoje feitas e a manutenção em dia, nada na tela Agora
// (antes, "Manutenção da casa em dia · 3 itens"); com uma manutenção perto de vencer, o card volta, com Todas as
// manutenções. Nomes e datas inventados.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, render, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";

const m = (uid, summary, state, days) => ({ cal: "calendar.casa", uid, summary, state, days, due: "2027-05-11", every: { n: 6, unit: "meses" }, points: 0, progress: 0.1 });

class App extends hostOf(ModelsMixin, RewardsMixin) {
  constructor(maint, routines = []) {
    super(fakeApi());
    this._home = { meds: [], routines, bills: [], maint, checks: {}, people: [], caregivers: [], score: null };
    this._app_ = {};
    this._now = at(2026, 11, 11, 21).getTime();
    this._dark = false;
  }
}

describe("Agora › Rotina da casa: a manutenção em dia", () => {
  it("nothing to do today and every maintenance in dia: nothing on Agora", () => {
    const app = new App([m("a", "Limpar filtros", "ok", 54), m("b", "Limpar paredes", "ok", 181), m("c", "Limpar portas", "ok", 181)]);
    assert.equal(render(app._renderHomePanel()).html.trim(), "");
  });
  it("one close to its date: the card comes back, with Todas as manutenções", () => {
    const app = new App([m("a", "Limpar filtros", "perto", 2), m("b", "Limpar paredes", "ok", 181)]);
    const t = text(app._renderHomePanel());
    assert.match(t, /Limpar filtros/);
    assert.match(t, /Todas as manutenções \(2\)/);
    assert.doesNotMatch(t, /em dia/);
  });
});
