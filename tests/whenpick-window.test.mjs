// frontend/src/whenpick.js, the window: the hours and the minutes, or the month with its days, opened from a field. No
// browser: a tiny DOM (tests/_dom.mjs) keeps what the window puts on the page, and the view Lit was asked to draw is
// read and clicked like any other screen (tests/_lit.mjs). The fields and the values are in frontend-pickers.test.mjs.
import { El, installDom } from "./_dom.mjs";
const dom = installDom({ css: { "--rv-bg": "#101418", "--rv-accent": "#b99bff", "--rv-surface": "#1c1c1c", "--rv-on-accent": "#141414" } });
const { render, text, click, controls } = await import("./_lit.mjs");
const { describe, it, beforeEach } = await import("node:test");
const assert = (await import("node:assert/strict")).default;
const { pickTime, pickDate, timeField, dateField } = await import("../frontend/src/whenpick.js");
const { ymd, addDays } = await import("../frontend/src/util.js");

const wait = (ms = 0) => new Promise((r) => setTimeout(r, ms));
/** The window on the page (the last one put on the body), its sheet and the view drawn in it. */
const win = () => dom.doc.body.children.filter((c) => c.classes.has("wp")).pop() || null;
const sheet = () => win().children[1];
const view = () => sheet().view;
/** The cells of a group of the time window: [[text, pressed]]. */
const cells = (cls) => [...render(view()).html.matchAll(new RegExp(`<div class="wp-grid ${cls}"[\\s\\S]*?</div>`, "g"))][0][0].match(/aria-pressed="(true|false)"[^>]*>(\d\d)</g).map((s) => [s.slice(-3, -1), s.includes('"true"')]);

beforeEach(async () => {
  // a window left open by a test that failed: closed, so the next one opens
  if (window.__whenPick.isOpen()) {
    window.__whenPick.close();
    await wait(5);
  }
  dom.hist.silent = false;
  dom.hist.throws = false;
});

describe("whenpick: the window is set up once, with its style and the Back of the phone", () => {
  it("the style goes to the page once; window.__whenPick says if it is open and closes it", () => {
    const st = dom.doc.all().filter((e) => e.id === "wp-css");
    assert.equal(st.length, 1);
    assert.equal(st[0].tag, "style");
    assert.match(st[0].textContent, /\.wp-cell\{/);
    assert.equal(window.__whenPick.isOpen(), false);
    assert.equal(dom.win.listeners.popstate.length, 1, "one listener of the Back, before the app's");
    assert.equal(dom.win.fire("popstate").stopped, 0, "with no window open, the Back goes on to the app");
  });
});

describe("whenpick: the time window", () => {
  it("opens with the hour and the minute of the field, in the colors of the app, and takes the focus", async () => {
    const anchor = new El("button");
    const p = pickTime(anchor, { value: "14:30", title: "Horário do remédio" });
    const w = win();
    assert.deepEqual([...w.classes], ["ss-wrap", "wp"]);
    assert.deepEqual([w.children[0].className, sheet().className], ["ss-back", "ss-sheet"]);
    assert.deepEqual([sheet().attrs.role, sheet().attrs["aria-modal"], sheet().attrs["aria-label"]], ["dialog", "true", "Horário do remédio"]);
    // dark (the background of the app is dark): the accent, the surface and the text over the accent of the app
    assert.equal(w.style.props["--ss-a"], "#b99bff");
    assert.equal(w.style.props["--ss-bg"], "#1c1c1c");
    assert.equal(w.style.props["--ss-fg"], "#e8edf3", "no text color in the app: the one of the dark theme");
    assert.equal(w.style.props["--ss-soft"], "rgba(185,155,255,0.22)");
    assert.equal(w.style.props["--wp-on-a"], "#141414");
    assert.equal(w.style.props["--wp-ink"], "#b99bff", "no ink of the accent: the accent");
    assert.equal(w.style.props["--ss-font"], "Inter, sans-serif");
    assert.equal(dom.hist.pushed > 0, true, "an entry in the history: the Back closes only this");
    assert.match(text(view()), /^Horário do remédio 14:30 Hora 00 01 /);
    assert.equal(cells("wp-h").length, 24);
    assert.deepEqual(cells("wp-h").filter((c) => c[1]), [["14", true]]);
    assert.deepEqual(cells("wp-m").map((c) => c[0]), ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]);
    assert.deepEqual(cells("wp-m").filter((c) => c[1]), [["30", true]]);
    // the frame after: the window comes in and the hour chosen takes the focus
    const on = new El("button");
    sheet().inside[".wp-h .wp-cell.on"] = on;
    dom.frames();
    assert.equal(w.classes.has("in"), true);
    assert.deepEqual([on.focused, on.scrolled], [1, true]);
    assert.equal(window.__whenPick.isOpen(), true);
    click(view(), "Fechar");
    assert.equal(await p, null, "the X: nothing chosen");
    assert.equal(anchor.focused, 1, "the focus goes back to the field");
    assert.deepEqual([w.classes.has("in"), w.classes.has("out")], [false, true]);
    await wait(260);
    assert.equal(w.removed, true, "and the window leaves the page");
  });

  it("an hour only marks it; a minute chooses; Pronto chooses what is marked", async () => {
    let p = pickTime(new El(), { value: "09:05" });
    assert.equal(sheet().attrs["aria-label"], "Horário");
    click(view(), "17");
    assert.match(text(view()), /^Horário 17:05 /, "the hour changes on the window, which stays open");
    assert.equal(window.__whenPick.isOpen(), true);
    click(view(), "45");
    assert.equal(await p, "17:45");
    p = pickTime(new El(), { value: "bobagem" });
    assert.match(text(view()), /^Horário 09:00 /, "no time: opens at 09:00");
    dom.frames(); // no hour marked found by the fake page: the X takes the focus
    click(view(), "07");
    click(view(), "Pronto");
    assert.equal(await p, "07:00");
    p = pickTime(null);
    assert.deepEqual(win().style.props, {}, "without a field to look at, the colors of the sheet");
    click(view(), "Pronto");
    assert.equal(await p, "09:00");
  });

  it("only one window at a time", async () => {
    const p = pickTime(new El(), { value: "10:00" });
    const n = dom.doc.body.children.length;
    assert.equal(await pickDate(new El(), { value: "2026-12-09" }), null, "a second one does not open");
    assert.equal(dom.doc.body.children.length, n);
    click(view(), "Pronto");
    assert.equal(await p, "10:00");
  });
});

describe("whenpick: closing", () => {
  it("the Back of the phone, a tap outside and Esc close only this window, with nothing chosen", async () => {
    let p = pickTime(new El(), { value: "10:00" });
    const back = dom.win.fire("popstate");
    assert.equal(back.stopped, 1, "the app does not see this Back");
    assert.equal(await p, null);

    const backs = dom.hist.backs;
    p = pickTime(new El(), { value: "10:00" });
    win().children[0].fire("click"); // the scrim
    assert.equal(await p, null);
    assert.equal(dom.hist.backs, backs + 1, "closing by hand takes the entry of the history back");

    p = pickTime(new El(), { value: "10:00" });
    const w = win();
    assert.equal(w.fire("keydown", { key: "a" }).prevented, 0, "another key: nothing");
    assert.equal(window.__whenPick.isOpen(), true);
    const esc = w.fire("keydown", { key: "Escape" });
    assert.deepEqual([esc.prevented, esc.stopped], [1, 1], "the window under it does not close too");
    assert.equal(await p, null);
  });

  it("a history that does not answer (no popstate): the window closes anyway, a little later", async () => {
    dom.hist.silent = true;
    dom.hist.throws = true; // and pushState that fails does not stop the window from opening
    const p = pickTime(null, { value: "08:00" });
    assert.ok(win());
    click(view(), "Pronto");
    click(view(), "Pronto"); // a second tap while it closes: nothing
    assert.equal(window.__whenPick.isOpen(), true, "waiting for the history");
    assert.equal(await p, "08:00");
    assert.equal(window.__whenPick.isOpen(), false);
    // the field left the page while the window was open: closing does not break
    dom.hist.silent = false;
    const q = pickTime({ focus() { throw new Error("gone"); } }, { value: "08:00" });
    window.__whenPick.close();
    assert.equal(await q, null);
    await wait(420); // the late timer of the first one finds another state and does nothing
    assert.equal(window.__whenPick.isOpen(), false);
  });

  it("the Back while it is already closing only finishes it", async () => {
    dom.hist.silent = true;
    const p = pickTime(new El(), { value: "11:15" });
    click(view(), "Pronto"); // closing: asked the history to go back, no answer yet
    assert.equal(dom.win.fire("popstate").stopped, 1);
    assert.equal(await p, "11:15");
    assert.equal(dom.win.fire("popstate").stopped, 0, "closed: the next Back is the app's");
  });
});

describe("whenpick: the look of the app where the field is", () => {
  const colors = async (css, opts = {}) => {
    Object.assign(dom.state, { css, font: "font" in opts ? opts.font : "Inter", dark: !!opts.dark });
    const p = pickTime(new El(), {});
    const props = { ...win().style.props };
    window.__whenPick.close();
    await p;
    return props;
  };
  it("light: by the background of the app (hex or rgb); with none, by the theme of the phone", async () => {
    let c = await colors({ "--rv-bg": "rgb(250, 250, 250)", "--rv-accent": "rgba(98, 181, 255, 1)", "--rv-text": "#111111", "--rv-muted": "#555555", "--rv-scrim": "rgba(0,0,0,.6)", "--rv-accent-ink": "#0b67a8", "--rv-display": "Barlow" });
    assert.deepEqual([c["--ss-bg"], c["--ss-fg"], c["--ss-mut"], c["--ss-line2"], c["--ss-soft2"]], ["#ffffff", "#111111", "#555555", "rgba(0,0,0,.14)", "rgba(0,0,0,.05)"]);
    assert.deepEqual([c["--ss-soft"], c["--ss-scrim"], c["--wp-ink"], c["--wp-display"], c["--wp-on-a"]], ["rgba(98,181,255,0.16)", "rgba(0,0,0,.6)", "#0b67a8", "Barlow", "#ffffff"]);
    c = await colors({}, { dark: true });
    assert.deepEqual([c["--ss-bg"], c["--ss-mut"], c["--ss-a"], c["--ss-soft"], c["--ss-scrim"]], ["#1b2229", "#9aa6b4", "#64b5f6", "rgba(100,181,246,0.22)", "rgba(0,0,0,.45)"]);
    c = await colors({ "--rv-accent": "lilás" }, { dark: false, font: "" });
    assert.deepEqual([c["--ss-bg"], c["--ss-fg"], c["--ss-mut"]], ["#ffffff", "#141a22", "#5b6573"]);
    assert.equal(c["--ss-soft"], "rgba(100,160,240,0.16)", "an accent that is not a color: a blue");
    assert.deepEqual([c["--ss-font"], c["--wp-display"]], ["system-ui, sans-serif", "system-ui, sans-serif"]);
    const mm = globalThis.matchMedia;
    globalThis.matchMedia = undefined; // an old browser: light
    c = await colors({});
    globalThis.matchMedia = mm;
    assert.equal(c["--ss-bg"], "#ffffff");
  });
});

describe("whenpick: the date window", () => {
  const month = () => /data-month="([\d-]+)"/.exec(render(view()).html)[1];
  const days = () => [...render(view()).html.matchAll(/<button type="button" class="wp-day ([^"]*)" data-d="([\d-]+)" aria-label="([^"]*)" aria-pressed="(true|false)"( disabled)?/g)].map((m) => ({ cls: m[1].trim().split(/\s+/).filter(Boolean), d: m[2], label: m[3], on: m[4] === "true", off: !!m[5] }));
  const nav = (label) => controls(view()).find((c) => c.aria === label);

  it("the month of the date, the day marked, the weekdays from Monday; a day chooses", async () => {
    const p = pickDate(new El(), { value: "2026-12-09", title: "Data da consulta" });
    assert.equal(sheet().attrs["aria-label"], "Data da consulta");
    assert.equal(month(), "2026-12");
    assert.match(text(view()), /^Data da consulta Dezembro de 2026 S T Q Q S S D 30 1 2 /);
    const ds = days();
    assert.equal(ds.length % 7, 0);
    assert.deepEqual(ds.filter((x) => x.on).map((x) => x.d), ["2026-12-09"]);
    assert.deepEqual([ds[0].d, ds[0].cls.includes("out")], ["2026-11-30", true], "the days of the month before, dimmed");
    assert.equal(ds.some((x) => x.off), false, "no limit: every day can be chosen");
    const d15 = controls(view()).find((c) => / data-d="2026-12-15"/.test(c.attrs));
    d15.on.click();
    assert.equal(await p, "2026-12-15");
  });

  it("‹ and › go to the other months, on the same window; the week from Sunday when asked", async () => {
    const p = pickDate(new El(), { value: "2026-12-09", weekStart: 0 });
    assert.match(text(view()), /Dezembro de 2026 D S T Q Q S S 29 30 1 /);
    nav("Próximo mês").on.click();
    assert.equal(month(), "2027-01");
    assert.match(text(view()), /Janeiro de 2027/);
    nav("Mês anterior").on.click();
    nav("Mês anterior").on.click();
    assert.equal(month(), "2026-11");
    assert.deepEqual(days().filter((x) => x.on), [], "the day chosen is in another month");
    assert.equal(window.__whenPick.isOpen(), true);
    window.__whenPick.close();
    assert.equal(await p, null);
  });

  it("with no date: this month, today marked; with a minimum ahead, its month", async () => {
    const today = ymd(new Date());
    let p = pickDate(new El(), {});
    assert.equal(sheet().attrs["aria-label"], "Data");
    assert.equal(month(), today.slice(0, 7));
    assert.deepEqual(days().filter((x) => x.cls.includes("today")).map((x) => x.d), [today]);
    assert.deepEqual(days().filter((x) => x.on), []);
    window.__whenPick.close();
    await p;
    const far = ymd(addDays(new Date(), 75));
    p = pickDate(new El(), { value: "não é data", min: far });
    assert.equal(month(), far.slice(0, 7), "the first month with a day to choose");
    window.__whenPick.close();
    await p;
    p = pickDate(new El(), { min: "2020-01-01" }); // a minimum in the past: this month
    assert.equal(month(), today.slice(0, 7));
    window.__whenPick.close();
    await p;
  });

  it("min and max: the days out of them are off, and ‹ › stop at the months with nothing to choose", async () => {
    const p = pickDate(new El(), { value: "2026-12-09", min: "2026-12-05", max: "2026-12-20" });
    const ds = days();
    assert.deepEqual(ds.filter((x) => !x.off).map((x) => x.d).slice(0, 2), ["2026-12-05", "2026-12-06"]);
    assert.equal(ds.filter((x) => !x.off).pop().d, "2026-12-20");
    assert.match(nav("Mês anterior").attrs, / disabled/);
    assert.match(nav("Próximo mês").attrs, / disabled/);
    window.__whenPick.close();
    await p;
    const q = pickDate(new El(), { value: "2026-12-09", min: "2026-11-10", max: "2027-01-10" });
    assert.doesNotMatch(nav("Mês anterior").attrs, / disabled/);
    assert.doesNotMatch(nav("Próximo mês").attrs, / disabled/);
    window.__whenPick.close();
    await q;
  });
});

describe("whenpick: the fields open the window and give what was chosen", () => {
  it("the time field: a tap opens the window with its value; the choice goes to onPick, a cancel does not", async () => {
    const got = [];
    const f = timeField("8:05", (v) => got.push(v), { label: "Começa" });
    const btn = controls(f)[0];
    btn.on.click({ currentTarget: new El("button") });
    assert.equal(sheet().attrs["aria-label"], "Começa");
    assert.match(text(view()), /^Começa 08:05 /);
    click(view(), "35");
    await wait();
    assert.deepEqual(got, ["08:35"]);
    controls(f)[0].on.click({ currentTarget: new El("button") });
    click(view(), "Fechar");
    await wait();
    assert.deepEqual(got, ["08:35"], "closed with nothing: onPick is not called");
  });

  it("the date field: the limits and the first day of the week go to the window", async () => {
    const got = [];
    const f = dateField("2026-12-09", (v) => got.push(v), { label: "Até", min: "2026-12-08", max: "2026-12-10", weekStart: 0 });
    controls(f)[0].on.click({ currentTarget: new El("button") });
    assert.equal(sheet().attrs["aria-label"], "Até");
    assert.match(text(view()), /Dezembro de 2026 D S T Q Q S S/);
    const open = controls(view()).filter((c) => / data-d=/.test(c.attrs) && !/ disabled/.test(c.attrs));
    assert.deepEqual(open.map((c) => /data-d="([\d-]+)"/.exec(c.attrs)[1]), ["2026-12-08", "2026-12-09", "2026-12-10"]);
    open[2].on.click();
    await wait();
    assert.deepEqual(got, ["2026-12-10"]);
  });
});
