// Where each screen lives (frontend/src/routes.js): Mais is a menu (Calendários, Rotinas, Avisos,
// Placar and, last, Configurações with its tabs), and the old addresses still land on the right screen.
import { hostOf } from "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { MENU, CONFIG_TABS, viewOf, pathOf, canonPath, underMore, moreTitle, moreName } from "../frontend/src/routes.js";
import { ChatMixin } from "../frontend/src/chat-panel.js";

describe("routes: the menu of Mais", () => {
  it("Calendários, Rotinas, Avisos, Placar and, last, Configurações; each with an icon and a short line", () => {
    assert.deepEqual(
      MENU.map(([, , title]) => title),
      ["Calendários", "Rotinas", "Avisos", "Placar", "Configurações"],
    );
    assert.deepEqual(
      MENU.map(([, path]) => path),
      ["/mais/calendarios", "/mais/rotinas", "/mais/avisos", "/mais/placar", "/config"],
    );
    for (const [, , title, ic, lead] of MENU) {
      assert.ok(ic, `${title}: icon`);
      assert.ok(lead.length <= 60 && lead.endsWith("."), `${title}: one short line (${lead})`);
    }
  });

  it("Configurações has the tabs that are settings: Integrações, Dados, Aparência, Opções", () => {
    assert.deepEqual(
      CONFIG_TABS.map(([, label]) => label),
      ["Integrações", "Dados", "Aparência", "Opções"],
    );
  });

  it("each row opens its own screen, under Mais", () => {
    for (const [k, path, title] of MENU) {
      const v = viewOf(path);
      assert.equal(v.name, "more", path);
      assert.equal(underMore(v), true, path);
      assert.equal(moreTitle(v), title, path);
      assert.equal(pathOf(v), path, path);
      if (k === "config") assert.deepEqual(v, { name: "more", tab: "integracoes", config: true });
      else assert.deepEqual(v, { name: "more", tab: k });
    }
  });
});

describe("routes: viewOf / pathOf", () => {
  it("the tabs of the bottom bar", () => {
    assert.deepEqual(viewOf(""), { name: "now" });
    assert.deepEqual(viewOf("/calendario"), { name: "calendar" });
    assert.deepEqual(viewOf("/calendario/"), { name: "calendar" });
    assert.deepEqual(viewOf("/recompensas"), { name: "rewards" });
    assert.deepEqual(viewOf("/mais"), { name: "more", tab: "menu" });
    assert.equal(underMore(viewOf("/mais")), false, "the menu itself has no ‹ Mais");
    assert.equal(underMore(viewOf("/calendario")), false);
    assert.deepEqual(viewOf("/qualquer"), { name: "now" });
    assert.deepEqual(viewOf(null), { name: "now" });
  });

  it("the tabs of Configurações: /config is the first (Integrações), /config/<tab> the others", () => {
    assert.deepEqual(viewOf("/config"), { name: "more", tab: "integracoes", config: true });
    for (const [k] of CONFIG_TABS) {
      const v = viewOf(`/config/${k}`);
      assert.deepEqual(v, { name: "more", tab: k, config: true });
      assert.equal(moreTitle(v), "Configurações");
      assert.equal(pathOf(v), k === "integracoes" ? "/config" : `/config/${k}`);
    }
    assert.deepEqual(viewOf("/config/xyz"), { name: "more", tab: "integracoes", config: true }, "an unknown tab: the first one");
  });

  it("pathOf of the other screens", () => {
    assert.equal(pathOf({ name: "now" }), "");
    assert.equal(pathOf({ name: "calendar" }), "/calendario");
    assert.equal(pathOf({ name: "rewards" }), "/recompensas");
    assert.equal(pathOf({ name: "more", tab: "menu" }), "/mais");
  });
});

describe("routes: old addresses land on the new place", () => {
  it("/mais/<tab> of the settings goes to Configurações", () => {
    assert.equal(canonPath("/mais/integracoes"), "/config");
    assert.equal(canonPath("/mais/dados"), "/config/dados");
    assert.equal(canonPath("/mais/aparencia"), "/config/aparencia");
    assert.equal(canonPath("/mais/opcoes"), "/config/opcoes");
    assert.equal(canonPath("/config/integracoes"), "/config");
  });

  it("/mais/<tab> of the functions stays, /agendas goes to Calendários, an unknown one to the menu", () => {
    for (const k of ["calendarios", "rotinas", "avisos", "placar"]) assert.equal(canonPath(`/mais/${k}`), `/mais/${k}`);
    assert.equal(canonPath("/agendas"), "/mais/calendarios");
    assert.equal(canonPath("/mais/xyz"), "/mais");
    assert.equal(canonPath("/mais/"), "/mais");
    assert.equal(canonPath("/recompensas/"), "/recompensas");
    assert.equal(canonPath("/nada"), "");
  });
});

describe("routes: the screen in words (Conversa)", () => {
  it("moreName says the path, with Configurações in it", () => {
    assert.equal(moreName(viewOf("/mais")), "Mais (o menu)");
    assert.equal(moreName(viewOf("/mais/calendarios")), "Mais › Calendários");
    assert.equal(moreName(viewOf("/mais/placar")), "Mais › Placar");
    assert.equal(moreName(viewOf("/config")), "Mais › Configurações › Integrações");
    assert.equal(moreName(viewOf("/mais/dados")), "Mais › Configurações › Dados");
  });

  it("the Conversa tells the AI where the person is", () => {
    class Chat extends hostOf(ChatMixin) {
      _view() {
        return viewOf(this.path);
      }
    }
    const c = new Chat();
    c.path = "/config/opcoes";
    assert.equal(c._chatScreen(), "Mais › Configurações › Opções");
    c.path = "/mais/rotinas";
    assert.equal(c._chatScreen(), "Mais › Rotinas");
    c.path = "/recompensas";
    assert.match(c._chatScreen(), /^Recompensas/);
  });
});
