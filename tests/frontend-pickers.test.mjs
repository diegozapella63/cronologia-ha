// frontend/src/whenpick.js (horário e data no visual do app) and offfold.js (inativos no fim, recolhidos), and a
// look at every screen's source: no box, time or date of the phone (1.63.0).
import "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { text, render, click } from "./_lit.mjs";
import { normTime, dateText, monthDays, timeField, dateField } from "../frontend/src/whenpick.js";
import { offFold } from "../frontend/src/offfold.js";
import { at } from "./helpers.mjs";

describe("whenpick: the values", () => {
  it("normTime: 24 hours, always HH:MM", () => {
    assert.equal(normTime("9:05"), "09:05");
    assert.equal(normTime("21:30:00"), "21:30");
    assert.equal(normTime("00:00"), "00:00");
    for (const bad of ["", null, "24:00", "12:60", "meio-dia", "7 PM"]) assert.equal(normTime(bad), "", String(bad));
  });
  it("dateText: the weekday and the day in Portuguese, the year only when it is not this one", () => {
    const now = at(2026, 11, 6);
    assert.equal(dateText("2026-12-09", now), "Qua, 9 dez");
    assert.equal(dateText("2026-11-07", now), "Sáb, 7 nov");
    assert.equal(dateText("2027-01-04", now), "Seg, 4 jan 2027");
    assert.equal(dateText("", now), "");
    assert.equal(dateText("09/12/2026", now), "");
  });
  it("monthDays: whole weeks from the week start, 5 or 6 of them", () => {
    const nov = monthDays(new Date(2026, 10, 1), 1); // November 2026 starts on a Sunday
    assert.equal(nov.length, 42);
    assert.equal(nov[0].getDay(), 1, "a Monday first");
    assert.deepEqual([nov[0].getDate(), nov[6].getDate(), nov[41].getDate()], [26, 1, 6]);
    const sun = monthDays(new Date(2026, 1, 1), 0); // February 2026: Sunday the 1st, four weeks and one more
    assert.equal(sun[0].getDate(), 1);
    assert.equal(sun.length, 35);
  });
});

describe("whenpick: the fields", () => {
  it("timeField: the time, a clock, its name and value for the screen reader", () => {
    const h = render(timeField("7:30", () => {}, { label: "Começa" })).html;
    assert.match(h, /<button type="button" class="pickf t " data-value="07:30" aria-label="Começa: 07:30"/);
    assert.equal(text(timeField("", () => {}, { label: "Termina" })), "--:--");
  });
  it("dateField: the date in Portuguese, never mm/dd/yyyy", () => {
    const v = dateField("2026-12-09", () => {}, { label: "Até" });
    assert.match(render(v).html, /class="pickf d " data-value="2026-12-09" aria-label="Até: Qua, 9 dez/);
    assert.doesNotMatch(text(v), /\d\/\d/);
    assert.equal(text(dateField("", () => {}, { label: "Até" })), "Escolher");
  });
});

describe("offFold: the section of the off ones", () => {
  const host = () => ({ updates: 0, requestUpdate() { this.updates++; } });
  it("nothing off: nothing", () => {
    assert.equal(render(offFold(host(), "x", "Ocultos", 0, () => "linhas")).html, "");
  });
  it("closed: its name and how many; a tap opens it, another closes", () => {
    const h = host();
    const view = () => offFold(h, "cals", "Ocultos", 2, () => "Trabalho Pessoal");
    assert.equal(text(view()), "Ocultos (2)");
    assert.match(render(view()).html, /data-fold="cals" aria-expanded="false"/);
    click(view(), "Ocultos (2)");
    assert.equal(text(view()), "Ocultos (2) Trabalho Pessoal");
    assert.equal(h.updates, 1);
    click(view(), "Ocultos (2)");
    assert.equal(text(view()), "Ocultos (2)");
  });
});

describe("no box, time or date of the phone in the screens", () => {
  const dir = new URL("../frontend/src/", import.meta.url);
  const files = readdirSync(dir).filter((f) => f.endsWith(".js") && !/styles\.js$/.test(f) && f !== "whenpick.js" && f !== "selectsheet.js");
  const src = files.map((f) => [f, readFileSync(new URL(f, dir), "utf8")]);
  it("no <datalist>, <input type=time|date|datetime-local|month|week> nor showPicker", () => {
    for (const [f, s] of src) {
      assert.doesNotMatch(s, /<datalist|\blist=\$\{|type="(time|date|datetime-local|month|week)"|showPicker/, f);
    }
  });
  it("every <select> has the look of the app (class select) and opens the sheet of selectsheet.js", () => {
    let n = 0;
    for (const [f, s] of src) {
      for (const m of s.matchAll(/<select\b[^>]*>/g)) {
        n++;
        assert.match(m[0], /class="select\b/, `${f}: ${m[0]}`);
        assert.doesNotMatch(m[0], /\bmultiple\b/, `${f}: a multiple box doesn't open the sheet`);
      }
    }
    assert.ok(n >= 5, `${n} boxes`);
    const css = readFileSync(new URL("styles.js", dir), "utf8");
    assert.match(css, /select:not\(\[multiple\]\) \{\s*pointer-events: none;/, "inside the shadow root, the tap never reaches the box");
    const main = readFileSync(new URL("main.js", dir), "utf8");
    assert.ok(main.indexOf("selectsheet.js") < main.indexOf("whenpick.js") && main.indexOf("whenpick.js") < main.indexOf("cronologia-app.js"), "their Back before the app's");
  });
});
