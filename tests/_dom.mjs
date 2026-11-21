// A tiny DOM without a browser (not a test file: the runner only picks *.test.mjs), for the windows the app opens
// by hand (whenpick.js): elements that keep their classes, attributes, style properties, children and listeners, a
// document with a body, a history that calls popstate, requestAnimationFrame and getComputedStyle.
//
// Lit draws into an element through its part (element._$litPart$): here the part only keeps the view it was asked
// to draw (element.view), and the test reads it with render()/click() of _lit.mjs, like any other screen.
//
// Import it BEFORE _lit.mjs and before the module under test: installDom() puts the names on globalThis.

export class El {
  constructor(tag = "div") {
    this.tag = tag;
    this.children = [];
    this.attrs = {};
    this.listeners = {};
    this.parent = null;
    this.removed = false;
    this.focused = 0;
    this.textContent = "";
    this.id = "";
    const cls = new Set();
    this.classes = cls;
    this.classList = { add: (c) => cls.add(c), remove: (c) => cls.delete(c), contains: (c) => cls.has(c) };
    const props = {};
    this.style = { props, setProperty: (k, v) => (props[k] = v) };
    this.view = null;
    this._$litPart$ = { _$AI: (v) => (this.view = v) };
    this.inside = {}; // what querySelector finds: {selector: element}
  }
  set className(v) {
    this.classes.clear();
    for (const c of String(v).split(/\s+/).filter(Boolean)) this.classes.add(c);
  }
  get className() {
    return [...this.classes].join(" ");
  }
  setAttribute(k, v) {
    this.attrs[k] = String(v);
  }
  getAttribute(k) {
    return k in this.attrs ? this.attrs[k] : null;
  }
  appendChild(el) {
    el.parent = this;
    this.children.push(el);
    return el;
  }
  append(...els) {
    els.forEach((e) => this.appendChild(e));
  }
  remove() {
    if (this.parent) this.parent.children = this.parent.children.filter((c) => c !== this);
    this.parent = null;
    this.removed = true;
  }
  addEventListener(type, fn) {
    (this.listeners[type] ||= []).push(fn);
  }
  /** Runs the listeners of an event; the event gets preventDefault and stopPropagation that count the calls. */
  fire(type, ev = {}) {
    const e = { type, prevented: 0, stopped: 0, preventDefault() { this.prevented++; }, stopPropagation() { this.stopped++; }, stopImmediatePropagation() { this.stopped++; }, ...ev };
    (this.listeners[type] || []).forEach((fn) => fn(e));
    return e;
  }
  querySelector(sel) {
    return this.inside[sel] || null;
  }
  scrollIntoView() {
    this.scrolled = true;
  }
  focus() {
    this.focused++;
  }
  /** All the elements under this one (itself first). */
  all() {
    return [this, ...this.children.flatMap((c) => c.all())];
  }
}

/**
 * Puts a document, a window with listeners, a history and the frame/style functions on globalThis.
 * css: {"--rv-bg": "#101418", …} are the custom properties getComputedStyle answers; font: its fontFamily.
 * Returns {doc, win, hist, frames, css}: hist.back() calls popstate (unless hist.silent); frames() runs what
 * requestAnimationFrame was given.
 */
export function installDom({ css = {}, font = "Inter, sans-serif", readyState = "complete", dark = false } = {}) {
  const win = new El("window");
  const doc = new El("document");
  doc.body = doc.appendChild(new El("body"));
  doc.head = doc.appendChild(new El("head"));
  doc.documentElement = doc;
  doc.readyState = readyState;
  doc.createElement = (tag) => new El(tag);
  doc.createTreeWalker = () => ({});
  doc.createComment = () => ({});
  doc.importNode = () => ({});
  doc.getElementById = (id) => doc.all().find((e) => e.id === id) || null;
  const hist = { state: { tela: "agora" }, pushed: 0, backs: 0, silent: false, throws: false };
  hist.pushState = () => {
    if (hist.throws) throw new Error("no history here");
    hist.pushed++;
  };
  hist.back = () => {
    hist.backs++;
    if (!hist.silent) win.fire("popstate");
  };
  const pending = [];
  const state = { css, font, dark };
  globalThis.window = globalThis;
  globalThis.addEventListener = (t, fn) => win.addEventListener(t, fn);
  globalThis.document = doc;
  globalThis.history = hist;
  globalThis.requestAnimationFrame = (fn) => pending.push(fn);
  globalThis.getComputedStyle = () => ({ getPropertyValue: (n) => state.css[n] || "", fontFamily: state.font });
  globalThis.matchMedia = () => ({ matches: state.dark });
  globalThis.HTMLElement ??= class {};
  globalThis.customElements ??= { define() {}, get() {} };
  return { doc, win, hist, state, frames: () => pending.splice(0).forEach((fn) => fn()) };
}
