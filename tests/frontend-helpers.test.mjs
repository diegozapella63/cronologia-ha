// frontend/src: the pure helpers of models.js (the second line of a routine, its part
// of the day, late, today's order), usage-panel.js (kTokens) and swipe.js (when a touch
// changes the tab). models.js and usage-panel.js load the bundled lit, so a few DOM
// names are stubbed before importing them (each test file runs in its own process).
import { at } from "./helpers.mjs";
import { describe, it, afterEach } from "node:test";
import assert from "node:assert/strict";

globalThis.window = globalThis.window || globalThis;
globalThis.HTMLElement = globalThis.HTMLElement || class {};
globalThis.customElements = globalThis.customElements || { define() {}, get() {} };
globalThis.document = globalThis.document || { createTreeWalker: () => ({}), createComment: () => ({}), createElement: () => ({}), createTextNode: () => ({}), adoptedStyleSheets: [] };
const quiet = console.warn;
console.warn = () => {}; // lit says it was loaded from the "all" bundle
const { KIND_UI, afterSub, routineSub, periodOf, routineLate, byPeriod } = await import("../frontend/src/models.js");
const { kTokens } = await import("../frontend/src/usage-panel.js");
const { swipeStart, swipeEnd, slideIn } = await import("../frontend/src/swipe.js");
console.warn = quiet;

const NOW = at(2026, 11, 2, 14, 0); // Monday, in the afternoon

// ------------------------------------------------------------------ models.js

describe("models: KIND_UI", () => {
  it("each model has its label, icon, verb and done word", () => {
    assert.deepEqual(Object.keys(KIND_UI), ["", "evento", "tarefa", "remedio", "conta", "rotina", "manutencao"]);
    assert.deepEqual([KIND_UI.remedio.verb, KIND_UI.remedio.done], ["Tomei", "tomado"]);
    assert.deepEqual([KIND_UI.conta.verb, KIND_UI.conta.done], ["Paguei", "paga"]);
    assert.deepEqual([KIND_UI.manutencao.label, KIND_UI.manutencao.done], ["Manutenção", "feita"]);
    assert.equal(KIND_UI[""].verb, undefined, "a plain event has no verb");
  });
});

describe("models: afterSub (a routine that comes back N days after done)", () => {
  const r = (extra = {}) => ({ after: { n: 2, unit: "dias" }, ...extra });
  it("to do today: the time or the part of the day, who, when it comes back", () => {
    assert.equal(afterSub(r({ who: "Davi" }), NOW), "hoje · Davi · volta 2 dias depois");
    assert.equal(afterSub(r({ time: "19:30" }), NOW), "19:30 · volta 2 dias depois");
    assert.equal(afterSub(r({ period: "noite" }), NOW), "à noite · volta 2 dias depois");
    assert.equal(afterSub(r({ after: { n: 1, unit: "semanas" } }), NOW), "hoje · volta 1 semana depois");
  });
  it("late: yesterday, or how many days", () => {
    assert.equal(afterSub(r({ late: 1, who: "Ana" }), NOW), "venceu ontem · Ana · volta 2 dias depois");
    assert.equal(afterSub(r({ late: 3 }), NOW), "atrasada há 3 dias · volta 2 dias depois");
  });
  it("done: by whom (or skipped) and the next day", () => {
    assert.equal(afterSub(r({ done: { by: "Aurora" }, next: "2026-11-04" }), NOW), "feito por Aurora · volta quarta, 4 de nov");
    assert.equal(afterSub(r({ done: { by: "" }, next: "2026-11-03" }), NOW), "feito por alguém · volta amanhã");
    assert.equal(afterSub(r({ done: { skipped: true } }), NOW), "pulada · volta em 2 dias");
  });
});

describe("models: routineSub (today's lists)", () => {
  it("who and when; nothing known says hoje", () => {
    assert.equal(routineSub({ who: "Davi", time: "08:00" }, NOW), "08:00 · Davi");
    assert.equal(routineSub({ period: "manha", who: "Ana" }, NOW), "de manhã · Ana");
    assert.equal(routineSub({}, NOW), "hoje");
  });
  it("left from yesterday; done (by someone or skipped) hides the part of the day", () => {
    assert.equal(routineSub({ yesterday: true, who: "Ana" }, NOW), "ficou de ontem · Ana");
    assert.equal(routineSub({ period: "tarde", done: { by: "Davi" } }, NOW), "feito por Davi");
    assert.equal(routineSub({ done: {} }, NOW), "feito");
    assert.equal(routineSub({ done: { skipped: true }, who: "Ana" }, NOW), "pulada");
  });
  it("one that comes back after done uses afterSub", () => {
    assert.equal(routineSub({ after: { n: 3, unit: "dias" }, who: "Davi" }, NOW), "hoje · Davi · volta 3 dias depois");
  });
});

describe("models: the part of the day, late, today's order", () => {
  it("periodOf: the one chosen, else the one of its time, else none", () => {
    assert.equal(periodOf({ period: "noite", time: "08:00" }), "noite");
    assert.equal(periodOf({ time: "08:00" }), "manha");
    assert.equal(periodOf({ time: "13:15" }), "tarde");
    assert.equal(periodOf({ time: "22:00" }), "noite");
    assert.equal(periodOf({ time: "03:00" }), "noite", "the small hours are still the night");
    assert.equal(periodOf({}), "");
  });
  it("routineLate: from an earlier day, or its part of the day passed; never when done", () => {
    assert.equal(routineLate({ late: 2 }, NOW), true);
    assert.equal(routineLate({ period: "manha" }, NOW), true, "the morning one, in the afternoon");
    assert.equal(routineLate({ period: "tarde" }, NOW), false, "the one of now");
    assert.equal(routineLate({ period: "noite" }, NOW), false, "still to come");
    assert.equal(routineLate({ period: "manha", done: { by: "Ana" } }, NOW), false);
    assert.equal(routineLate({}, NOW), false);
  });
  it("byPeriod: now, then what passed, then any time, then later (stable otherwise)", () => {
    const list = [{ s: "a", period: "noite" }, { s: "b" }, { s: "c", period: "manha" }, { s: "d", time: "15:00" }, { s: "e", period: "tarde" }, { s: "f" }];
    assert.deepEqual(
      byPeriod(list, NOW).map((x) => x.s),
      ["d", "e", "c", "b", "f", "a"],
    );
    // early in the morning nothing has passed: the night is the last
    assert.deepEqual(
      byPeriod(list, at(2026, 11, 2, 6)).map((x) => x.s),
      ["c", "b", "f", "d", "e", "a"],
    );
    // a custom reader of the period
    assert.deepEqual(
      byPeriod([{ p: "noite" }, { p: "tarde" }], NOW, (x) => x.p).map((x) => x.p),
      ["tarde", "noite"],
    );
  });
});

// ------------------------------------------------------------------ usage-panel.js

describe("usage-panel: kTokens", () => {
  it("under a thousand as is, then in thousands with a comma", () => {
    assert.equal(kTokens(0), "0");
    assert.equal(kTokens(undefined), "0");
    assert.equal(kTokens(849.6), "850");
    assert.equal(kTokens(1000), "1 mil");
    assert.equal(kTokens(1250), "1,3 mil");
    assert.equal(kTokens(48210), "48,2 mil");
  });
});

// ------------------------------------------------------------------ swipe.js

describe("swipe: swipeStart, swipeEnd, slideIn", () => {
  class Element {
    constructor(sel = "", style = {}, sw = 0, cw = 0) {
      this.sel = sel;
      this.style = style;
      this.scrollWidth = sw;
      this.clientWidth = cw;
    }
    matches(stop) {
      return !!this.sel && stop.split(", ").includes(this.sel);
    }
  }
  const host = { host: true };
  let desk = false;
  const setup = () => {
    globalThis.Element = Element;
    globalThis.window.innerWidth = 390;
    globalThis.window.matchMedia = () => ({ matches: desk });
    globalThis.getComputedStyle = (el) => ({ overflowX: el.style.overflowX || "visible" });
  };
  afterEach(() => {
    desk = false;
  });
  const touch = (x, y, path = [], n = 1) => ({ touches: Array.from({ length: n }, () => ({ clientX: x, clientY: y })), composedPath: () => [...path, host], currentTarget: host });
  it("a single finger away from the edges, on plain content: where it went down", () => {
    setup();
    const s = swipeStart(touch(200, 300, [new Element("div"), "text"]));
    assert.deepEqual({ x: s.x, y: s.y }, { x: 200, y: 300 });
    assert.ok(Math.abs(s.at - Date.now()) < 1000);
  });
  it("not for changing tabs: two fingers, the edges, a field, a skip selector, a row that scrolls sideways, a computer", () => {
    setup();
    assert.equal(swipeStart(touch(200, 300, [], 2)), null);
    assert.equal(swipeStart({ composedPath: () => [] }), null);
    assert.equal(swipeStart(touch(10, 300)), null, "the left edge is the phone's Voltar");
    assert.equal(swipeStart(touch(380, 300)), null, "the right edge too");
    assert.equal(swipeStart(touch(200, 300, [new Element("input")])), null);
    assert.equal(swipeStart(touch(200, 300, [new Element("[data-noswipe]")])), null);
    assert.equal(swipeStart(touch(200, 300, [new Element(".month")]), ".month"), null);
    assert.ok(swipeStart(touch(200, 300, [new Element(".month")])), "only skipped when asked");
    assert.equal(swipeStart(touch(200, 300, [new Element("div", { overflowX: "auto" }, 800, 390)])), null);
    assert.ok(swipeStart(touch(200, 300, [new Element("div", { overflowX: "auto" }, 390, 390)])), "a row that fits does not scroll");
    desk = true;
    assert.equal(swipeStart(touch(200, 300)), null, "the computer has the sidebar");
  });
  it("swipeEnd: far enough, mostly sideways and quick; the direction", () => {
    const s = { x: 300, y: 400, at: Date.now() };
    const end = (x, y) => ({ changedTouches: [{ clientX: x, clientY: y }] });
    assert.equal(swipeEnd(end(200, 410), s), 1, "finger to the left: the next tab");
    assert.equal(swipeEnd(end(400, 390), s), -1, "to the right: the previous one");
    assert.equal(swipeEnd(end(250, 400), s), 0, "too short");
    assert.equal(swipeEnd(end(200, 470), s), 0, "too much down");
    assert.equal(swipeEnd(end(200, 400), { ...s, at: Date.now() - 900 }), 0, "too slow");
    assert.equal(swipeEnd(end(200, 400), null), 0);
    assert.equal(swipeEnd({ changedTouches: [] }, s), 0);
  });
  it("slideIn waits for the new tab and animates it from the side of the finger (not with reduced motion)", async () => {
    setup();
    const anim = [];
    const page = { animate: (frames, opts) => anim.push([frames[0].transform, opts.duration]) };
    let views = 0;
    const hostEl = { _view: () => ({ name: ++views > 2 ? "calendar" : "now" }), updateComplete: Promise.resolve(), renderRoot: { querySelector: () => page } };
    await slideIn(hostEl, "calendar", 1);
    assert.deepEqual(anim, [["translateX(40px)", 280]]);
    await slideIn({ ...hostEl, _view: () => ({ name: "now" }) }, "now", -1);
    assert.deepEqual(anim[1], ["translateX(-40px)", 280]);
    globalThis.window.matchMedia = (q) => ({ matches: /reduce/.test(q) });
    await slideIn({ ...hostEl, _view: () => ({ name: "now" }) }, "now", 1);
    assert.equal(anim.length, 2, "reduced motion: no animation");
    await slideIn({ ...hostEl, _view: () => ({ name: "now" }), renderRoot: { querySelector: () => null } }, "now", 1);
    assert.equal(anim.length, 2, "no page: nothing");
  });
});
