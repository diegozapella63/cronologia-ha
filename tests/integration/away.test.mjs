// Integration: Modo férias. Set in Mais › Opções (cronologia/prefs/set_app {away}), the Agora index
// has no routines at once and the maintenance sensor rests; the doses go on; turned off, all is back.
import { startStack, day } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";

let stack;
let c;
let h;
before(async () => {
  stack = await startStack();
  c = await stack.client();
  h = await stack.home(c);
  await h.wait((x) => x.tracked.length >= 2 && x.meds.length >= 5 && x.routines.length >= 2, "the fake calendars in the index");
});
after(async () => {
  if (stack) await stack.stop();
});

describe("Modo férias", () => {
  it("on from today: no routines, the doses stay, the index says until when", async () => {
    const meds = h.latest.meds.length;
    await c.call("cronologia/prefs/set_app", { prefs: { away: { from: day(0), to: day(4) } } });
    const ix = await h.wait((x) => x.away && x.routines.length === 0, "routines paused");
    assert.deepEqual(ix.away, { from: day(0), to: day(4) });
    assert.equal(ix.meds.length, meds, "the medicines go on");
  });
  it("the bad dates are refused and change nothing", async () => {
    await assert.rejects(c.call("cronologia/prefs/set_app", { prefs: { away: { from: day(4), to: day(0) } } }), /Datas das férias inválidas/);
    assert.ok(h.latest.away);
  });
  it("still ahead: today as usual", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { away: { from: day(2), to: day(6) } } });
    const ix = await h.wait((x) => !x.away && x.routines.length >= 2, "today as usual");
    assert.equal(ix.away, null);
  });
  it("off: the routines are back", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { away: { from: day(0), to: day(1) } } });
    await h.wait((x) => x.away && x.routines.length === 0, "paused again");
    await c.call("cronologia/prefs/set_app", { prefs: { away: null } });
    const ix = await h.wait((x) => !x.away && x.routines.length >= 2, "back");
    assert.ok(ix.routines.length >= 2);
  });
});
