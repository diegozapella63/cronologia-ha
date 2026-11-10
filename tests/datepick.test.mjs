// CronologIA 1.67.0: the date field of the family (frontend/src/datepick.js), the model being the Prazo of the ResolvIA:
// the shortcuts in buttons and Outra data, which opens the month right under them (calendar.js, the same file as in the
// ResolvIA), never the date window of the phone. Drawn without a browser (the template), as the other screen tests.
import "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, render, click, labels, controls } from "./_lit.mjs";
import { DatePick, datePickField, otherLabel } from "../frontend/src/datepick.js";
import { ymd } from "../frontend/src/util.js";
import { quickPicks, longDate, monthTitle } from "../frontend/src/calendar.js";
const dateText = (v) => otherLabel(v);

// dates of this year (the label of a date of another year has the year: the tests do not depend on the clock)
const Y = new Date().getFullYear();
const XMAS = `${Y}-12-24`;

/** A <date-pick> without the DOM: its properties, and what it sends (pick). */
function field(props = {}) {
  const sent = [];
  const dp = Object.assign(Object.create(DatePick.prototype), { value: "", kind: "futuro", min: "", max: "", weekStart: 1, bid: "", none: "", label: "Data", _month: null, _months: false }, props);
  dp.dispatchEvent = (e) => sent.push(e.detail.value);
  return { dp, sent, view: () => dp.render() };
}

describe("<date-pick>: the shortcuts and Outra data", () => {
  it("futuro: Hoje, Amanhã, Sábado, Próx. semana (those of calendar.js) and Outra data; today marked", () => {
    const today = ymd(new Date());
    const { view } = field({ value: today });
    const want = quickPicks("futuro").map((q) => q.label);
    assert.deepEqual(labels(view()), [...want, "Outra data"]);
    const on = controls(view()).filter((c) => /aria-pressed="true"/.test(c.attrs));
    assert.deepEqual(on.map((c) => c.text), ["Hoje"]);
  });
  it("a shortcut picks its date and closes the month", () => {
    const { dp, sent, view } = field({ _month: "2026-11" });
    click(view(), "Amanhã");
    assert.deepEqual(sent, [quickPicks("futuro")[1].date]);
    assert.equal(dp._month, null);
  });
  it("passado: Hoje and Ontem; nenhum: only Outra data; none: the button for no date, marked when there is none", () => {
    assert.deepEqual(labels(field({ kind: "passado" }).view()), ["Hoje", "Ontem", "Outra data"]);
    assert.deepEqual(labels(field({ kind: "nenhum" }).view()), ["Outra data"]);
    const { sent, view } = field({ kind: "nenhum", none: "Um dia", value: XMAS });
    assert.deepEqual(labels(view()), ["Um dia", dateText(XMAS)], "the date chosen, in Outra data");
    const on = controls(view()).filter((c) => /aria-pressed="true"/.test(c.attrs));
    assert.deepEqual(on.map((c) => c.text), [dateText(XMAS)]);
    click(view(), "Um dia");
    assert.deepEqual(sent, [""]);
    const empty = field({ kind: "nenhum", none: "Um dia" }).view();
    assert.deepEqual(controls(empty).filter((c) => /aria-pressed="true"/.test(c.attrs)).map((c) => c.text), ["Um dia"]);
  });
  it("min and max leave out the shortcuts beyond them", () => {
    const today = ymd(new Date());
    assert.deepEqual(labels(field({ kind: "passado", max: today, min: today }).view()), ["Hoje", "Outra data"]);
  });
  it("Outra data: the id and the date for the tests, and the month opens under it on the month of the date", () => {
    const { dp, view } = field({ value: XMAS, bid: "cr-date" });
    const other = controls(view()).find((c) => c.text === dateText(XMAS));
    assert.match(other.attrs, /id="cr-date"/);
    assert.match(other.attrs, new RegExp(`data-value="${XMAS}"`));
    assert.match(other.attrs, /aria-expanded="false"/);
    click(view(), dateText(XMAS));
    assert.equal(dp._month, `${Y}-12`);
    assert.match(text(view()), new RegExp(`Dezembro de ${Y} S T Q Q S S D`), "the week from Monday (weekStart 1)");
    click(view(), longDate(`${Y}-12-31`));
    assert.equal(dp._month, null, "a day picks it and closes");
  });
  it("Outra data with no date opens on the month of the min (a date that can not be before it)", () => {
    const { dp, view } = field({ kind: "nenhum", min: "2027-03-10" });
    click(view(), "Outra data");
    assert.equal(dp._month, "2027-03");
    const days = controls(view()).filter((c) => /cal-day/.test(c.attrs));
    assert.equal(days.filter((c) => / disabled/.test(c.attrs)).length, 9, "1 to 9 March can not be picked");
    click(view(), "Outra data");
    assert.equal(dp._month, null, "Outra data again closes");
  });
  it("Outra data with no date and a max before today opens on the month of the max", () => {
    const { dp, view } = field({ kind: "nenhum", max: "2020-05-01" });
    click(view(), "Outra data");
    assert.equal(dp._month, "2020-05");
  });
  it("the name of the month shows the months of the year; a month goes back to its days", () => {
    const { dp, view } = field({ value: XMAS, _month: `${Y}-12` });
    click(view(), monthTitle(`${Y}-12`));
    assert.equal(dp._months, true);
    assert.match(text(view()), new RegExp(`${Y} jan fev mar abr mai jun jul ago set out nov dez$`));
    click(view(), "Próximo ano");
    assert.equal(dp._month, `${Y + 1}-12`);
    controls(view()).find((c) => c.text === "mar").on.click({});
    assert.deepEqual([dp._month, dp._months], [`${Y + 1}-03`, false]);
  });
  it("datePickField: the name of the field above, as the other fields", () => {
    const got = [];
    const v = datePickField("Prazo", "2026-11-20", (x) => got.push(x), { bid: "td-date", kind: "futuro" });
    const h = render(v).html;
    assert.match(h, /<div class="field dp-field">\s*<span class="flabel">Prazo<\/span>/);
    assert.match(h, /<date-pick value="2026-11-20" kind="futuro" min="" max="" weekStart="1" bid="td-date" none="" label="Prazo"/);
  });
});
