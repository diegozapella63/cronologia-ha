// CronologIA 1.99.2: in the card of the tasks of the ResolvIA, what is late or due today goes in a tag (red, yellow),
// as in the ResolvIA itself.
import { at } from "./helpers.mjs";
import "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { dueTone } from "../frontend/src/tasks.js";

const NOW = at(2026, 11, 17, 20, 30);
describe("dueTone", () => {
  it("late: red; today (all day or at a time still to come): yellow; else nothing", () => {
    assert.equal(dueTone({ overdue: true, allDay: true, due: "2026-11-16" }, NOW), "late");
    assert.equal(dueTone({ allDay: true, due: "2026-11-17" }, NOW), "today");
    assert.equal(dueTone({ allDay: false, due: at(2026, 11, 17, 21, 30).toISOString() }, NOW), "today");
    assert.equal(dueTone({ allDay: true, due: "2026-11-18" }, NOW), "");
    assert.equal(dueTone({ done: true, allDay: true, due: "2026-11-17" }, NOW), "");
    assert.equal(dueTone({ undated: true }, NOW), "");
  });
});
