// tests/ui: Mais › Configurações › Integrações › CorrerIA (1.60.0) — the switch Usar com o CorrerIA (off by default, apart
// from Usar IA), what it says on and off, and the last use (Claude usou hoje às 9:41) or how to start.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, fire, render, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";

const NOW = at(2026, 11, 8, 10);

class App extends hostOf(ModelsMixin) {
  constructor({ app = {}, correria = undefined } = {}) {
    super(fakeApi());
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [], caregivers: [], gerencia: { ligado: false, contas: [] }, ...(correria !== undefined ? { correria } : {}) };
    this._app_ = { ...app };
    this._now = NOW.getTime();
  }
}

describe("Integrações › CorrerIA", () => {
  it("off by default: the title, what it is and the switch, nothing else (even with the AI off)", () => {
    const view = new App({ app: { ai_off: true } })._renderCorreriaPanel();
    const t = text(view);
    assert.match(t, /CorrerIA/);
    assert.match(t, /O CorrerIA junta os apps da casa no WhatsApp, no Claude e no Gemini\./);
    assert.match(t, /Usar com o CorrerIA/);
    assert.match(t, /Desligado\./);
    assert.doesNotMatch(t, /usou|Nenhum uso/);
    assert.match(render(view).html, /checked="false"/);
  });
  it("the switch turns it on and off (true / null)", async () => {
    const app = new App();
    await fire(app._renderCorreriaPanel(), "Usar com o CorrerIA", "change", { target: { checked: true } });
    assert.deepEqual(app.prefs.at(-1), { correria_on: true });
    assert.match(text(app._renderCorreriaPanel()), /Ligado: pelo WhatsApp, o Claude e o Gemini leem e mudam a agenda\./);
    await fire(app._renderCorreriaPanel(), "Usar com o CorrerIA", "change", { target: { checked: false } });
    assert.deepEqual(app.prefs.at(-1), { correria_on: null });
  });
  it("on, never used: how to start", () => {
    const t = text(new App({ app: { correria_on: true }, correria: { ultimo: null } })._renderCorreriaPanel());
    assert.match(t, /Nenhum uso ainda/);
    assert.match(t, /Conecte no app CorrerIA\./);
  });
  it("on, used: who and when (today, yesterday, another day)", () => {
    const used = (em) => text(new App({ app: { correria_on: true }, correria: { ultimo: { cliente: "Claude", em } } })._renderCorreriaPanel());
    assert.match(used(at(2026, 11, 8, 9, 41).toISOString()), /Claude usou hoje às 09:41\./);
    assert.match(used(at(2026, 11, 7, 22, 5).toISOString()), /Claude usou ontem às 22:05\./);
    assert.match(used(at(2026, 10, 30, 8, 0).toISOString()), /Claude usou em 30 out às 08:00\./);
    assert.match(used("quando?"), /Nenhum uso ainda/);
  });
  it("an old index without the field: on and never used", () => {
    assert.match(text(new App({ app: { correria_on: true } })._renderCorreriaPanel()), /Nenhum uso ainda/);
  });
});
