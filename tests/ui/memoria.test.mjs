// tests/ui: Agora › MemorIA (1.61.0) — the sheet of now (block, since when, the text folded with Ver mais, the boxes
// ticked struck through), drawn like a sheet of the MemorIA (1.62.0: its paper and letters), and only it: nothing now,
// no card; nothing when off, not found, failing or empty; and Mais › Configurações › Integrações › MemorIA › Trechos no
// Agora (off by default) with how it is going.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, render, fire, click, fakeApi, hostOf } from "../_lit.mjs";
import { MemoriaMixin, memoLong, memoNextChange } from "../../frontend/src/memoria-card.js";

const NOW = at(2026, 11, 8, 20, 50);
const T = (inicio, extra = {}) => ({ inicio, agora: false, ontem: false, amanha: false, bloco: "Diário", bloco_id: "b1", cor: "lilas", folha_id: `f${inicio}`, titulo: "Noite", texto: "Noite\n☐ Ler 20 páginas\n☑ Conferir a agenda", tipo: "trecho", outros: 0, ...extra });
const OK = (trechos, extra = {}) => ({ ligado: true, encontrado: true, erro: null, versao: "1.13.0", painel: "/app/a1b2c3d4_memoria", pessoa: "Ana", trechos, ...extra });
const THREE = [T("18:00", { agora: true }), T("07:00", { amanha: true, titulo: "Manhã" }), T("12:00", { amanha: true, bloco: "Cozinha", cor: "framboesa", titulo: "" , tipo: "periodo", periodo: "Tarde" })];

class App extends hostOf(MemoriaMixin) {
  constructor({ app = { memoria_on: true }, memo = undefined, answer = OK(THREE) } = {}) {
    super(fakeApi({ memoriaNow: answer, setAppPrefs: (p) => p }));
    this._app_ = { ...app };
    this._memo = memo;
    this._now = NOW.getTime();
    this._dark = false;
    this._ready = true;
    this.view = "now";
  }
  _accent() {
    return { id: "turquesa", fill: "#3CCBDA", ink: "#0B7285" };
  }
  _view() {
    return { name: this.view };
  }
}

describe("Agora › MemorIA", () => {
  it("the sheet of now: the block, since when and the text, and only it (1.62.0); it opens the MemorIA", () => {
    const view = new App({ memo: OK(THREE) })._renderMemoriaPanel();
    const t = text(view);
    assert.match(t, /MemorIA/);
    assert.match(t, /desde 18:00/);
    assert.match(t, /Diário/);
    assert.match(t, /Ler 20 páginas/);
    assert.doesNotMatch(t, /amanhã|07:00|Cozinha|Manhã/, "not the next ones");
    const h = render(view).html;
    assert.equal((h.match(/href="\/app\/a1b2c3d4_memoria"/g) || []).length, 1, "the sheet opens the MemorIA");
    assert.match(h, /target="_top"/);
    assert.match(h, /class="ck done"/, "a ticked box is struck through");
    assert.match(h, /class="memo-leaf pautado"/, "like the MemorIA: the paper of the block");
    assert.match(h, /class="memo-spiral"/, "and the spiral");
    assert.doesNotMatch(t, /Ver mais/, "a short text is not folded");
    const raspberry = render(new App({ memo: OK([T("12:00", { agora: true, bloco: "Cozinha", cor: "framboesa" })]) })._renderMemoriaPanel()).html;
    assert.match(raspberry, /#E8508A/i, "framboesa: the MemorIA color, not the accent");
  });
  it("1.62.0: the paper and the letters of the MemorIA (Letra de mão off: the letters of the app)", () => {
    const h = render(new App({ memo: OK([T("12:00", { agora: true, papel: "quadriculado", letra: "normal" })]) })._renderMemoriaPanel()).html;
    assert.match(h, /class="memo-leaf quadriculado"/);
    assert.match(h, /class="memo-ink normal\s*"/);
    assert.match(render(new App({ memo: OK([T("12:00", { agora: true })]) })._renderMemoriaPanel()).html, /class="memo-ink\s+"/, "by hand: no class normal");
  });
  it("started yesterday: desde ontem às; another block at the same time: +1; no painel: no links", () => {
    const view = new App({ memo: OK([T("22:00", { agora: true, ontem: true, outros: 1 })], { painel: null }) })._renderMemoriaPanel();
    const t = text(view);
    assert.match(t, /desde ontem às 22:00/);
    assert.match(t, /\+1/);
    assert.doesNotMatch(render(view).html, /href=/);
  });
  it("a long text is folded: Ver mais opens it, Ver menos closes it", () => {
    const long = Array.from({ length: 10 }, (_, i) => `☐ Item ${i + 1}`).join("\n");
    const app = new App({ memo: OK([T("18:00", { agora: true, texto: long })]) });
    assert.match(render(app._renderMemoriaPanel()).html, /class="memo-ink\s+"/);
    click(app._renderMemoriaPanel(), "Ver mais");
    assert.match(render(app._renderMemoriaPanel()).html, /class="memo-ink\s+open"/);
    click(app._renderMemoriaPanel(), "Ver menos");
    assert.doesNotMatch(render(app._renderMemoriaPanel()).html, /memo-ink\s+open/);
  });
  it("an empty sheet: Folha em branco", () => {
    assert.match(text(new App({ memo: OK([T("18:00", { agora: true, texto: "", titulo: "", folha_id: null })]) })._renderMemoriaPanel()), /Folha em branco\./);
  });
  it("nothing when off, before the answer, not found, failing or with nothing at a set time", () => {
    const empty = (o) => assert.equal(render(new App(o)._renderMemoriaPanel()).html.trim(), "");
    empty({ app: {}, memo: OK(THREE) });
    empty({ memo: undefined });
    empty({ memo: { ligado: true, encontrado: false, erro: null, trechos: [] } });
    empty({ memo: OK([], { erro: "O MemorIA não respondeu." }) });
    empty({ memo: OK([]) });
    empty({ memo: OK([T("07:00", { amanha: true }), T("12:00", { amanha: true })]) }, "nothing holds now: no card (1.62.0)");
  });
  it("asks once a minute while Agora is open, again when the next one starts; not elsewhere nor off", async () => {
    const app = new App();
    app._memoriaTick();
    await new Promise((r) => setImmediate(r));
    assert.equal(app.api.calls.length, 1);
    assert.equal(app._memo.trechos.length, 3);
    app._memoriaTick();
    assert.equal(app.api.calls.length, 1, "within the minute: no new ask");
    app._memoUntil = Date.now() - 1; // the next one started
    app._memoriaTick();
    await new Promise((r) => setImmediate(r));
    assert.equal(app.api.calls.length, 2);
    app._memoAt = 0;
    app.view = "calendar";
    app._memoriaTick();
    app.view = "now";
    app._app_ = {};
    app._memoriaTick();
    assert.equal(app.api.calls.length, 2, "another screen, or off: nothing");
  });
  it("a failed ask keeps the reason (for Configurações) and shows nothing", async () => {
    const app = new App({ answer: new Error("Sem conexão") });
    await app._loadMemoria();
    assert.equal(app._memo.erro, "Sem conexão");
    assert.equal(render(app._renderMemoriaPanel()).html.trim(), "");
  });
});

describe("Integrações › MemorIA", () => {
  it("off by default: the switch and Desligado, nothing else", () => {
    const t = text(new App({ app: {} })._renderMemoriaSettings());
    assert.match(t, /MemorIA/);
    assert.match(t, /Trechos no Agora/);
    assert.match(t, /Desligado\./);
    assert.doesNotMatch(t, /Conectado|não encontrado/);
  });
  it("the switch saves true / null and asks the MemorIA at once", async () => {
    const app = new App({ app: {} });
    await fire(app._renderMemoriaSettings(), "Trechos do MemorIA no Agora", "change", { target: { checked: true } });
    assert.deepEqual(app.prefs.at(-1), { memoria_on: true });
    assert.deepEqual(app.api.calls.at(-1), ["memoriaNow", true]);
    const t = text(app._renderMemoriaSettings());
    assert.match(t, /A folha de agora, de cada pessoa\./);
    assert.match(t, /Conectado ao MemorIA 1\.13\.0/);
    assert.match(t, /Agora: Diário, desde 18:00\./);
    await fire(app._renderMemoriaSettings(), "Trechos do MemorIA no Agora", "change", { target: { checked: false } });
    assert.deepEqual(app.prefs.at(-1), { memoria_on: null });
    assert.equal(app._memo, null);
  });
  it("not found, failing, or nothing at a set time", () => {
    const st = (memo) => text(new App({ memo })._renderMemoriaSettings());
    assert.match(st({ ligado: true, encontrado: false, erro: null, trechos: [] }), /MemorIA não encontrado.*Instale o MemorIA 1\.13\.0 ou mais novo no mesmo Home Assistant\./s);
    assert.match(st(OK([], { erro: "O MemorIA recusou a chave." })), /Não consegui falar com o MemorIA.*O MemorIA recusou a chave\./s);
    assert.match(st(OK([])), /Nada agora\./);
  });
});

describe("helpers", () => {
  it("memoLong: more than six lines on a phone", () => {
    assert.equal(memoLong("a\nb\nc"), false);
    assert.equal(memoLong(Array(7).fill("x").join("\n")), true);
    assert.equal(memoLong("x".repeat(36 * 6)), false);
    assert.equal(memoLong("x".repeat(36 * 6 + 1)), true);
    assert.equal(memoLong(""), false);
  });
  it("memoNextChange: the next start, today or tomorrow", () => {
    assert.equal(memoNextChange(THREE, NOW), at(2026, 11, 9, 7).getTime());
    assert.equal(memoNextChange([T("07:00", { agora: true })], NOW), Infinity);
    assert.equal(memoNextChange(null, NOW), Infinity);
  });
  it("MemorIA 1.14.0: until when (fim), and nothing now: no card (1.62.0); it changes when the one of now ends", () => {
    let view = new App({ memo: OK([T("18:00", { agora: true, fim: "22:00" }), T("07:00", { amanha: true })]) })._renderMemoriaPanel();
    assert.match(text(view), /desde 18:00 até 22:00/);
    assert.equal(memoNextChange([T("18:00", { agora: true, fim: "22:00" }), T("07:00", { amanha: true })], NOW), at(2026, 11, 8, 22).getTime(), "the end comes before the next");
    const none = [T("07:00", { amanha: true, titulo: "Manhã" }), T("12:00", { amanha: true }), T("18:00", { amanha: true })];
    view = new App({ memo: OK(none) })._renderMemoriaPanel();
    assert.equal(render(view).html.trim(), "", "nothing now: no card, not the next ones");
    assert.equal(memoNextChange(none, NOW), at(2026, 11, 9, 7).getTime(), "but it asks again when the next one starts");
    const st = new App({ memo: OK(none) })._renderMemoriaSettings();
    assert.match(text(st), /Nada agora\./);
  });
});
