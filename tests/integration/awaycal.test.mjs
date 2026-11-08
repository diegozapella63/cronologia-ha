// Integration (1.59.0): Modo férias in a Google calendar (it alerts on the phone by itself): set the vacation and the
// daily routine has no day of it, the same routine comes back on the day back; cancelled, every day is back. The
// Home Assistant's own calendar is not touched.
import { startStack, day, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";

let stack;
let c;
let h;
before(async () => {
  stack = await startStack({ fakeEnv: { FAKE_EXTRA_CALENDARS: "1" } });
  c = await stack.client();
  h = await stack.home(c);
  await c.call("calendar/event/create", { entity_id: "calendar.familia", event: { summary: "Limpar banheiro pets", start: day(-5), end: day(-4), rrule: "FREQ=DAILY", description: "#rotina\nPontos: 10" } });
  await h.wait((x) => x.tracked.includes("calendar.familia"), "the Google calendar followed");
});
after(async () => {
  if (stack) await stack.stop();
});
const daysOf = async (cal, summary) => (await stack.events(cal, -2, 12)).filter((e) => e.summary === summary).map((e) => e.start.slice(0, 10));

describe("Modo férias in a calendar that alerts on the phone", () => {
  it("on: the days away out of the routine of the Google calendar; the local one as it was", async () => {
    const local = (await daysOf("calendar.casa", "Lavar a louça")).length;
    await c.call("cronologia/prefs/set_app", { prefs: { away: { from: day(2), to: day(4) } } });
    await waitFor(async () => {
      const d = await daysOf("calendar.familia", "Limpar banheiro pets");
      return !d.includes(day(2)) && !d.includes(day(4)) && d.includes(day(5)) && d.includes(day(1));
    }, { what: "the days away out, back on the day after", timeout: 10000 });
    assert.equal((await daysOf("calendar.casa", "Lavar a louça")).length, local, "the local calendar untouched");
  });
  it("off: every day back", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { away: null } });
    await waitFor(async () => {
      const d = await daysOf("calendar.familia", "Limpar banheiro pets");
      return [1, 2, 3, 4, 5].every((n) => d.includes(day(n)));
    }, { what: "every day back", timeout: 10000 });
    const d = await daysOf("calendar.familia", "Limpar banheiro pets");
    assert.equal(d.filter((x) => x === day(5)).length, 1, "once a day, not twice");
  });
});
