// frontend/src: usage-panel.js (Uso da IA), look.js (Aparência), swipe.js (arrastar para trocar de aba)
// (iguais no ResolvIA) and datapanel.js (Mais › Dados).
import "./_lit.mjs";
import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import { html } from "../frontend/vendor/lit-all.min.js";
import { text, click, labels, controls, render, fakeApi, hostOf } from "./_lit.mjs";
import { usagePanel, kTokens, usageStyles } from "../frontend/src/usage-panel.js";
import { themePicker, colorPicker, lookStyles, colorOfDay } from "../frontend/src/look.js";
import { swipeStart, swipeEnd, slideIn } from "../frontend/src/swipe.js";
import { DataMixin } from "../frontend/src/datapanel.js";
import { at as local } from "./helpers.mjs";

const NOW = local(2026, 11, 2, 15, 30); // a Monday
const icon = (n) => html`<i data-icon=${n}></i>`;

// ------------------------------------------------------------------ usage-panel.js

describe("usage panel", () => {
  beforeEach(() => mock.timers.enable({ apis: ["Date"], now: NOW }));
  afterEach(() => mock.timers.reset());
  const days = [
    { dia: "2026-10-27", chamadas: 0 },
    { dia: "2026-10-28", chamadas: 4, erros: 1 },
    { dia: "2026-10-29", chamadas: 2, cota: 2 },
    { dia: "2026-10-30", chamadas: 0 },
    { dia: "2026-10-31", chamadas: 1 },
    { dia: "2026-11-01", chamadas: 0 },
    { dia: "2026-11-02", chamadas: 8 },
  ];
  const U = (over = {}) => ({
    hoje: { chamadas: 8, tokens: 950 },
    semana: { chamadas: 15, tokens: 12345, erros: 1, tipos: { fotos: 3, mensagem: 10, outra: 2 }, ias: { "ai_task.google_ai_task": 15 } },
    mes: { chamadas: 40, tokens: 50000, cota: 2, ias: {} },
    dias: days,
    ultimas: [
      { tipo: "fotos", ia: "ai_task.google_ai_task", resultado: "ok", segundos: 3.25, tokens: 1500, imagens: 2, quando: "2026-11-02T14:05:00-03:00" },
      { tipo: "mensagem", ia: "ai_task.meu_ollama", resultado: "cota", segundos: 0.4, tokens: 0, quando: "2026-10-30T09:07:00-03:00" },
      { tipo: "sugestao", ia: "", resultado: "formato", segundos: 1, tokens: 800, imagens: 1, quando: "não é data" },
    ],
    ...over,
  });
  it("kTokens: up to 999 as is, then in thousands with a comma", () => {
    assert.deepEqual([0, 849.6, 999, 1000, 1250, 12345, undefined].map(kTokens), ["0", "850", "999", "1 mil", "1,3 mil", "12,3 mil", "0"]);
  });
  it("loading while there is no summary", () => {
    assert.equal(text(usagePanel({ u: null, head: html`<h2>Uso</h2>` })), "Uso Carregando…");
    assert.equal(text(usagePanel({ u: {}, head: "" })), "Carregando…");
  });
  it("today, 7 days and the month: tokens, errors or the quota", () => {
    const t = text(usagePanel({ u: U(), head: "", app: "ResolvIA" }));
    assert.match(t, /^Hoje 8 ≈ 950 tokens 7 dias 15 1 com erro Este mês 40 2 vezes sem cota/);
  });
  it("a bar per day, today chosen; tapping another says that day", () => {
    let picked = null;
    const v = usagePanel({ u: U(), onDay: (d) => (picked = d), head: "" });
    assert.deepEqual(labels(v), ["ter: 0 chamadas", "qua: 4 chamadas", "qui: 2 chamadas", "sex: 0 chamadas", "sáb: 1 chamada", "dom: 0 chamadas", "hoje: 8 chamadas"]);
    const bars = controls(v);
    assert.match(bars[6].attrs, /aria-pressed="true"/);
    assert.match(bars[6].attrs, /class="uso-bar today"/);
    assert.match(render(v).html, /<i style="height:50%"><\/i>/, "4 of 8 calls: half the height");
    assert.match(render(v).html, /<i style="height:0%"><\/i>/);
    assert.match(text(v), /Hoje: 8 chamadas\./);
    click(v, "qua: 4 chamadas");
    assert.equal(picked, "2026-10-28");
    assert.match(text(usagePanel({ u: U(), day: "2026-10-28", head: "" })), /qua, 28\/10: 4 chamadas, 1 com erro\./);
    assert.match(text(usagePanel({ u: U(), day: "2026-10-29", head: "" })), /qui, 29\/10: 2 chamadas, 2 sem cota\./);
  });
  it("the kinds, most used first (unknown kinds by their key)", () => {
    assert.match(text(usagePanel({ u: U(), head: "" })), /Mensagens 10 Fotos 3 outra 2/);
    assert.doesNotMatch(render(usagePanel({ u: U({ semana: { chamadas: 0 } }), head: "" })).html, /uso-kinds/, "no kinds this week: no row");
  });
  it("the last calls: kind, AI (friendly name or from the id), result, seconds, tokens, images, when", () => {
    const t = text(usagePanel({ u: U(), head: "", names: { "ai_task.google_ai_task": "Google AI Task" } }));
    assert.match(t, /Fotos Google AI Task 3,3 s · ≈ 1,5 mil tokens · 2 imagens · hoje 14:05/);
    assert.match(t, /Mensagens meu ollama sem cota 0,4 s · ≈ 0 tokens · 30\/10 09:07/);
    assert.match(t, /sugestao padrão do Home Assistant resposta fora do formato 1 s · ≈ 800 tokens · 1 imagem ·/);
    assert.match(text(usagePanel({ u: U({ ultimas: [] }), head: "" })), /Nenhuma chamada ainda\./);
  });
  it("where to see the exact use: the provider of the AI in use", () => {
    const note = (using, ias = {}) => text(usagePanel({ u: U({ semana: { chamadas: 0, ias }, mes: { chamadas: 0 } }), head: "", using })).split("Últimas chamadas")[1];
    assert.match(note("ai_task.google_generative_ai"), /Google Cloud Console/);
    assert.match(note("", { "ai_task.openai_ai_task": 1 }), /platform\.openai\.com\/usage/);
    assert.match(note("ai_task.claude"), /Claude Console/);
    assert.match(note("ai_task.ollama"), /O consumo exato fica no painel do provedor da IA\./);
  });
  it("the styles are plain CSS", () => {
    assert.match(usageStyles, /\.uso-tiles \{/);
    assert.match(lookStyles, /\.tag-swatches \{/);
  });
});

// ------------------------------------------------------------------ look.js

describe("look: Aparência", () => {
  it("three themes, the chosen one marked; a tap says which", () => {
    let got = null;
    const v = themePicker({ theme: "dark", onTheme: (k) => (got = k), icon });
    assert.deepEqual(labels(v), ["Automático", "Claro", "Escuro"]);
    const c = controls(v);
    assert.deepEqual(c.map((x) => /aria-checked="true"/.test(x.attrs)), [false, false, true]);
    assert.match(c[2].attrs, /class="on"/);
    click(v, "Claro");
    assert.equal(got, "light");
    assert.match(render(v).html, /data-icon="smartphone".*data-icon="sun".*data-icon="moon"/s);
  });
  it("the colors as tags with their names; the chosen one checked", () => {
    let got = null;
    const palette = [
      { id: "vermelho", label: "Vermelho", fill: "#FF5A4F" },
      { id: "azul", label: "Azul", fill: "#2D8CFF" },
    ];
    const v = colorPicker({ palette, value: "azul", onPick: (id) => (got = id) });
    assert.deepEqual(labels(v), ["Vermelho", "Azul"]);
    const c = controls(v);
    assert.match(c[0].attrs, /style="--a:#FF5A4F"/);
    assert.match(c[1].attrs, /class="tsw on"/);
    assert.match(c[1].attrs, /aria-checked="true"/);
    click(v, "Vermelho");
    assert.equal(got, "vermelho");
  });
  describe("Cor do dia", () => {
    const palette = ["vermelho", "rosa", "grafite", "azul", "menta"].map((id) => ({ id }));
    const day = (y, m, d, h = 12, min = 0) => colorOfDay(palette, new Date(y, m - 1, d, h, min)).id;
    it("the same color all day, the next one tomorrow, round and round", () => {
      assert.equal(day(2026, 11, 3, 0, 0), day(2026, 11, 3, 23, 59));
      const week = [3, 4, 5, 6, 7, 8, 9].map((d) => day(2026, 11, d));
      const order = ["vermelho", "rosa", "azul", "menta"];
      const start = order.indexOf(week[0]);
      assert.deepEqual(week, week.map((_, i) => order[(start + i) % 4]));
      assert.notEqual(day(2026, 11, 3, 23, 59), day(2026, 11, 4, 0, 0), "it changes at midnight");
    });
    it("never the gray one, also across months, years and before 1970", () => {
      for (const [y, m, d] of [[2026, 12, 31], [2027, 1, 1], [2028, 2, 29], [1969, 12, 31], [1960, 1, 1]]) assert.notEqual(day(y, m, d), "grafite");
      const seen = new Set();
      for (let i = 0; i < 8; i++) seen.add(colorOfDay(palette, new Date(2026, 10, 28 + i)).id);
      assert.deepEqual([...seen].sort(), ["azul", "menta", "rosa", "vermelho"]);
    });
    it("a known day (the same on every device: by the local date only)", () => {
      // 2026-11-03 is day 20760 since 1970-01-01; 20760 % 4 = 0
      assert.equal(day(2026, 11, 3), "vermelho");
      assert.equal(day(2026, 11, 4), "rosa");
      assert.equal(colorOfDay(palette).id.length > 0, true, "today by default");
    });
  });
});

// ------------------------------------------------------------------ swipe.js

describe("swipe", () => {
  class El {
    constructor(matches = false, overflow = "visible", sw = 0, cw = 0) {
      Object.assign(this, { m: matches, st: { overflowX: overflow }, scrollWidth: sw, clientWidth: cw });
    }
    matches() {
      return this.m;
    }
  }
  const root = {};
  const touch = (x, y, path = []) => ({ touches: [{ clientX: x, clientY: y }], composedPath: () => [...path, root], currentTarget: root });
  beforeEach(() => {
    globalThis.Element = El;
    globalThis.getComputedStyle = (el) => el.st;
    globalThis.window.innerWidth = 390;
    globalThis.window.matchMedia = () => ({ matches: false });
    mock.timers.enable({ apis: ["Date"], now: 1000000 });
  });
  afterEach(() => {
    mock.timers.reset();
    delete globalThis.window.matchMedia;
  });
  it("starts with one finger away from the edges, on the phone", () => {
    assert.deepEqual(swipeStart(touch(200, 300)), { x: 200, y: 300, at: 1000000 });
    assert.equal(swipeStart({ touches: [{}, {}] }), null, "two fingers: zoom");
    assert.equal(swipeStart({}), null);
    assert.equal(swipeStart(touch(10, 300)), null, "left edge: the menu of the Home Assistant");
    assert.equal(swipeStart(touch(380, 300)), null, "right edge: Voltar of the phone");
    window.matchMedia = (q) => ({ matches: /min-width: 1000px/.test(q) });
    assert.equal(swipeStart(touch(200, 300)), null, "the computer has the side bar");
  });
  it("not on fields, the grip, data-noswipe, what was asked to skip, or a row that scrolls sideways", () => {
    assert.equal(swipeStart(touch(200, 300, [new El(true)])), null);
    assert.equal(swipeStart(touch(200, 300, [new El(false, "auto", 800, 390)])), null);
    assert.ok(swipeStart(touch(200, 300, [new El(false, "auto", 391, 390)])), "2 px of scroll don't count");
    assert.ok(swipeStart(touch(200, 300, [new El(false, "hidden", 800, 390), { not: "an element" }])));
    let asked = "";
    const el = new El();
    el.matches = (sel) => ((asked = sel), false);
    swipeStart(touch(200, 300, [el]), ".mes-grid");
    assert.match(asked, /input, textarea, select, \[contenteditable\], \.grip, \[data-noswipe\], \.mes-grid$/);
  });
  it("ends: 70 px sideways, mostly sideways, in under 0.8 s", () => {
    const s = { x: 200, y: 300, at: 1000000 };
    const end = (x, y) => swipeEnd({ changedTouches: [{ clientX: x, clientY: y }] }, s);
    assert.equal(end(100, 310), 1, "to the left: the next tab");
    assert.equal(end(290, 300), -1);
    assert.equal(end(150, 300), 0, "50 px is not a swipe");
    assert.equal(end(100, 360), 0, "too diagonal");
    assert.equal(swipeEnd({ changedTouches: [] }, s), 0);
    assert.equal(swipeEnd({ changedTouches: [{ clientX: 0, clientY: 300 }] }, null), 0);
    mock.timers.tick(900);
    assert.equal(end(100, 300), 0, "too slow");
  });
  it("slideIn: the new page comes from the side of the finger (unless motion is reduced)", async () => {
    const anims = [];
    const page = { animate: (k, o) => anims.push([k, o]) };
    const host = { _view: () => ({ name: "lista" }), updateComplete: Promise.resolve(), renderRoot: { querySelector: () => page } };
    await slideIn(host, "lista", 1);
    await slideIn(host, "lista", -1);
    assert.deepEqual(anims.map(([k]) => k[0].transform), ["translateX(40px)", "translateX(-40px)"]);
    assert.equal(anims[0][1].duration, 280);
    window.matchMedia = (q) => ({ matches: /reduce/.test(q) });
    await slideIn(host, "lista", 1);
    assert.equal(anims.length, 2);
    await slideIn({ ...host, renderRoot: { querySelector: () => null } }, "lista", 1);
  });
});

// ------------------------------------------------------------------ datapanel.js

describe("data panel: Mais › Dados", () => {
  class Base extends hostOf(DataMixin) {
    constructor(api) {
      super(api);
      this.input = { value: "x", clicks: 0, click() { this.clicks++; } };
      this.renderRoot = { querySelector: (s) => (s === "#cr-data-import" ? this.input : null) };
      this.opened = [];
    }
    _writable() {
      return this.writable || [];
    }
    _sheetHead(t) {
      return html`<h3>${t}</h3>`;
    }
    _openExport() {
      this.opened.push("export");
    }
    _openImport(k) {
      this.opened.push(k);
    }
  }
  const api = (over = {}) => fakeApi({
    dataUrl: (fmt) => `/api/export/${fmt}`,
    backups: { available: true, backups: [{ name: "cronologia-2026-11-01.zip", date: local(2026, 11, 1, 9, 5).getTime(), size: 3 * 1048576 }] },
    createBackup: { folder: "share/cronologia", name: "cronologia-novo.zip" },
    importData: { calendars: 2, points: 1 },
    restoreBackup: {},
    versions: [{ name: "v1", when: local(2026, 11, 2, 8, 0).getTime(), calendars: 1, points: 3, reason: "antes-de-restaurar" }],
    restoreVersion: {},
    ...over,
  });
  // dataUrl is synchronous in the app: the fake answers with a promise, so give it a plain function
  const P = (over = {}) => {
    const a = api(over);
    const url = "dataUrl" in over ? over.dataUrl : (fmt) => `/api/export/${fmt}`;
    return new Base(new Proxy(a, { get: (t, k) => (k === "dataUrl" ? url : t[k]) }));
  };

  it("exports, Agenda (.ics) opens its sheet, backups, import and versions", async () => {
    const p = P();
    await p._loadBackups();
    const v = p._renderDataPanel();
    assert.match(text(v), /Eventos \(CSV\).*Baixar CSV.*Agenda \(\.ics\).*Escolher.*Baixar JSON.*Baixar ZIP/);
    assert.match(text(v), /01\/11\/2026 às 09:05 3,0 MB · cronologia-2026-11-01\.zip Restaurar/);
    // Versões anteriores says when the copies are made, like the InventarIA (store.js: every 10 min of use, before import/restore, 3 kept)
    assert.match(text(v), /Versões anteriores Uma cópia a cada 10 minutos de uso e antes de importar ou restaurar\. Ficam as 3 mais recentes\./);
    click(v, "Escolher");
    assert.deepEqual(p.opened, ["export"]);
    assert.match(controls(v).find((c) => c.text === "Escolher .ics").attrs, /disabled/, "no calendar to write to: Importar eventos off");
    p.writable = ["calendar.casa"];
    click(p._renderDataPanel(), "Escolher .ics");
    assert.deepEqual(p.opened, ["export", "ics"]);
  });
  it("a download in the app says it is gathering the events (except the JSON); in the preview, that it doesn't download", () => {
    const p = P();
    click(p._renderDataPanel(), "Baixar ZIP");
    click(p._renderDataPanel(), "Baixar JSON");
    assert.deepEqual(p.toasts, ["Juntando os eventos de todos os calendários…"]);
    const q = P({ dataUrl: () => "" });
    let prevented = false;
    click(q._renderDataPanel(), "Baixar CSV", { preventDefault: () => (prevented = true) });
    assert.deepEqual([prevented, q.toasts], [true, ["Na prévia os arquivos não são baixados."]]);
  });
  it("backups: none in the preview, an error, create (and a failure)", async () => {
    const none = new Base(fakeApi({}));
    await none._loadBackups();
    assert.equal(none._backups, undefined);
    const bad = P({ backups: new Error("sem share") });
    await bad._loadBackups();
    assert.match(text(bad._renderDataPanel()), /A pasta share não está disponível para o app\./);
    const p = P();
    const run = click(p._renderDataPanel(), "Criar backup");
    assert.match(text(p._renderDataPanel()), /Criando…/);
    await run;
    assert.deepEqual([p.toasts[0], p.haptics, p._busy], ["Backup salvo em share/cronologia/cronologia-novo.zip", ["success"], null]);
    const q = P({ createBackup: new Error("disco cheio") });
    await q._createBackup();
    assert.deepEqual(q.toasts, ["Não consegui criar o backup. disco cheio"]);
  });
  it("import: asks first, then says how many calendars and points; a failure says why", async () => {
    const p = P();
    click(p._renderDataPanel(), "Escolher arquivo");
    assert.deepEqual([p.input.value, p.input.clicks], ["", 1]);
    p._onDataImport({ target: { files: [{ name: "agenda.zip" }], value: "x" } });
    assert.match(p._form.text, /passam a ser os de “agenda\.zip”\. Os eventos dos calendários não mudam\./);
    await p._form.run();
    assert.deepEqual(p.toasts, ["Importado: 2 agendas e 1 ponto registrado"]);
    const q = P({ importData: new Error("arquivo inválido") });
    q._onDataImport({ target: { files: [{ name: "x.json" }] } });
    await q._form.run();
    assert.deepEqual(q.toasts, ["Não consegui importar. arquivo inválido"]);
    P()._onDataImport({ target: { files: [] } });
  });
  it("restore a backup or a version: asks first; errors show", async () => {
    const p = P();
    p._confirmRestoreBackup({ name: "b.zip", date: local(2026, 11, 1, 9, 5).getTime() });
    assert.match(p._form.text, /backup de 01\/11\/2026 às 09:05/);
    await p._form.run();
    p._confirmRestoreVersion({ name: "v1", when: local(2026, 11, 2, 8, 0).getTime() });
    await p._form.run();
    assert.deepEqual(p.toasts, ["Backup restaurado", "Versão restaurada"]);
    const q = P({ restoreBackup: new Error("corrompido"), restoreVersion: new Error("sumiu") });
    q._confirmRestoreBackup({ name: "b", date: 0 });
    await q._form.run();
    q._confirmRestoreVersion({ name: "v", when: 0 });
    await q._form.run();
    assert.deepEqual(q.toasts, ["corrompido", "sumiu"]);
  });
  it("versions: loading, the list, none, an error", async () => {
    const p = P();
    const loading = p._openVersions();
    assert.match(text(p._renderVersions()), /Versões anteriores Carregando…/);
    await loading;
    assert.match(text(p._renderVersions()), /02\/11\/2026 às 08:00 1 agenda · 3 pontos · antes de restaurar Restaurar/);
    const none = P({ versions: [] });
    await none._openVersions();
    assert.match(text(none._renderVersions()), /Ainda não há versões anteriores/);
    const bad = P({ versions: new Error("sem dados") });
    await bad._openVersions();
    assert.match(text(bad._renderVersions()), /sem dados/);
  });
});

// ------------------------------------------------------------------ about.js (Mais › Sobre)

describe("about: Mais › Sobre", async () => {
  const { aboutPage, aboutStyles, PRODUCTS, GITHUB } = await import("../frontend/src/about.js");
  const page = () => render(aboutPage({ app: "CronologIA", version: "1.51.0" })).html;

  it("the seven apps of the family (CorrerIA since 1.60.1), each with its repository, an icon and one short line", () => {
    assert.deepEqual(PRODUCTS.map(([n]) => n), ["CronologIA", "ResolvIA", "GerencIA", "InventarIA", "EconomIA", "MemorIA", "CorrerIA"]);
    assert.equal(new Set(PRODUCTS.map(([, r]) => r)).size, PRODUCTS.length);
    for (const [name, repo, ic, line] of PRODUCTS) {
      assert.match(repo, /^[a-z]+-ha$/, name);
      assert.ok(ic && line.length <= 55 && line.endsWith("."), `${name}: ${line}`);
    }
    assert.equal(GITHUB, "https://github.com/diegozapella63");
    assert.ok(aboutStyles.cssText.includes(".about-hero"));
  });

  it("CorrerIA Code, the joke of the name, each app linking to its GitHub and this app marked", () => {
    const h = page();
    const t = h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    assert.match(t, /Correr IA Code/);
    assert.match(t, /desenvolvimento de softwares/);
    assert.match(t, /programador sem tempo: vivo na correria\. Então eu uso a IA para rodar tudo isso aqui\./);
    for (const [, repo] of PRODUCTS) assert.ok(h.includes(`href="${GITHUB}/${repo}" target="_blank" rel="noopener"`), repo);
    assert.equal((h.match(/Este app · v1\.51\.0/g) || []).length, 1);
    assert.match(h, /class="ab-row here"[^>]*>[\s\S]*?<span class="ab-wm">Cronolog<span>IA<\/span><\/span>/);
    assert.match(h, new RegExp(`href="${GITHUB}" target="_blank" rel="noopener"[^>]*>[\\s\\S]*Meu GitHub`));
  });
});

// ------------------------------------------------------------------ place-tags.js (Todos os cômodos)

describe("place-tags: every room of the house is one tag", async () => {
  const { placeTags, roomsShown, isAllRooms, ALL_ROOMS } = await import("../frontend/src/place-tags.js");
  const house = ["Cozinha", "Garagem", "Sala"];
  const txt = (v) => render(v).html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  it("isAllRooms: all of them (2 or more in the house), in any order", () => {
    assert.equal(isAllRooms(["Sala", "Cozinha", "Garagem"], house), true);
    assert.equal(isAllRooms(["Sala", "Cozinha"], house), false);
    assert.equal(isAllRooms(["Sala"], ["Sala"]), false, "a house of one room: just its name");
    assert.equal(isAllRooms(["Sala"], []), false, "without the list of the house: never");
  });

  it("roomsShown: Todos os cômodos, or the names", () => {
    assert.deepEqual(roomsShown(["Garagem", "Sala", "Cozinha"], house), [ALL_ROOMS]);
    assert.deepEqual(roomsShown(["Garagem", "", null], house), ["Garagem"]);
    assert.equal(ALL_ROOMS, "Todos os cômodos");
  });

  it("placeTags: one tag for the whole house (with the equipment), the rooms otherwise", () => {
    assert.equal(txt(placeTags(house, [], house)), "Todos os cômodos");
    assert.equal(txt(placeTags(house, ["Fogão"], house)), "Todos os cômodos Fogão");
    assert.equal(txt(placeTags(["Cozinha", "Sala"], [], house)), "Vários cômodos", "1.60.4: more than one room, one tag");
    assert.equal(txt(placeTags(["Cozinha"], ["Fogão"], house)), "Cozinha Fogão", "one room and one equipment: their names");
    assert.equal(txt(placeTags(house, ["Fogão", "Carro"], house)), "Vários equipamentos", "several equipments: one tag, no rooms");
    assert.equal(txt(placeTags(house, [])), "Vários cômodos", "without the list of the house: Vários cômodos");
  });

  it("1.60.3: the whole name (the grid ends it in …); 1.60.4: Vários with the names in the title", () => {
    const h = render(placeTags(["Banheiro de visitas"], ["Ar-condicionado Samsung WindFree"], house)).html;
    assert.equal((h.match(/class="tag room"/g) || []).length, 2);
    assert.match(h, /<span class="tt">Banheiro de visitas<\/span>/, "not cut in the text: the CSS ends it in …");
    assert.match(h, /<span class="tt">Ar-condicionado Samsung WindFree<\/span>/);
    const r = render(placeTags(["Cozinha", "Sala"], ["Fogão"], house)).html;
    assert.match(r, /title="Cozinha, Sala"/);
    const e = render(placeTags([], ["Ar-condicionado", "Fogão", "Carro"], house)).html;
    assert.equal((e.match(/class="tag room"/g) || []).length, 1, "several equipments: one tag");
    assert.match(e, /title="Ar-condicionado, Fogão, Carro"/);
  });
});
