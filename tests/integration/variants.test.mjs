// Integration: other Home Assistants — a calendar that can't change events (like
// Google: moved by deleting and creating), an older Home Assistant without live
// subscriptions (polling), and one without speech-to-text nor AI.
import { startStack, day, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { parseKind } from "../../cronologia/rootfs/app/lib/kinds.js";

const routine = (ix, summary, pred = () => true) => ix.routines.find((r) => r.summary === summary && pred(r));

describe("a calendar that can't change events (Google-like)", () => {
  let stack;
  let c;
  let h;
  const CASA = "calendar.casa";
  before(async () => {
    stack = await startStack({ fakeEnv: { FAKE_NO_UPDATE: CASA } });
    c = await stack.client();
    h = await stack.home(c);
    await h.wait((x) => x.maint.length >= 4, "the index");
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  const toalhas = async () => (await stack.events(CASA, -5, 10)).filter((e) => e.summary === "Trocar a toalha");

  it("Feito: the old event deleted, a new one on the next date; still shown as done today", async () => {
    await c.call("calendar/event/create", { entity_id: CASA, event: { summary: "Trocar a toalha", start: day(0), end: day(1), description: "#rotina\nVolta: 2 dias depois de feita" } });
    const r = routine(await h.wait((x) => routine(x, "Trocar a toalha"), "the routine"), "Trocar a toalha");
    const out = await c.call("cronologia/check/set", { key: r.key, done: true, kind: "rotina" });
    assert.equal(out, null);
    const evs = await waitFor(async () => {
      const e = await toalhas();
      return e.length === 1 && e[0].start === day(2) && e;
    }, { what: "one event, on the next date" });
    assert.notEqual(evs[0].uid, r.uid, "a new event");
    assert.deepEqual(parseKind(evs[0].description).history, [day(0)]);
    const ix = await h.wait((x) => routine(x, "Trocar a toalha", (y) => y.done), "shown as done (found by its name)");
    const done = routine(ix, "Trocar a toalha");
    assert.equal(done.key, r.key);
    assert.equal(done.done.moved.recreated, true);
  });
  it("Desfazer: back on the old date, one event only, without today in its history", async () => {
    const r = routine(h.latest, "Trocar a toalha");
    await c.call("cronologia/check/set", { key: r.key, done: false, kind: "rotina" });
    const evs = await waitFor(async () => {
      const e = await toalhas();
      return e.length === 1 && e[0].start === day(0) && e;
    }, { what: "one event, back today" });
    assert.deepEqual(parseKind(evs[0].description).history, []);
    await h.wait((x) => routine(x, "Trocar a toalha", (y) => !y.done), "pending again");
  });
  it("maintenance done is recreated too; there is no undo", async () => {
    const m = h.latest.maint.find((x) => x.summary === "Dedetização");
    const out = await c.call("cronologia/maint/done", { entity_id: CASA, uid: m.uid });
    assert.equal(out.moved, true);
    assert.equal(out.undo, false);
    const evs = await waitFor(async () => {
      const e = (await stack.events(CASA, -5, 400)).filter((x) => x.summary === "Dedetização");
      return e.length === 1 && e[0].start === out.next && e;
    }, { what: "the maintenance recreated" });
    assert.equal(parseKind(evs[0].description).history[0], day(0));
    await assert.rejects(c.call("cronologia/maint/undo", { entity_id: CASA, uid: evs[0].uid }), { code: "not_found" });
  });
  it("a calendar that can do nothing (holidays) refuses", async () => {
    await assert.rejects(c.call("calendar/event/update", { entity_id: "calendar.feriados", uid: "x", event: { summary: "x", start: day(1), end: day(2) } }), { code: "not_supported" });
  });
});

describe("an older Home Assistant (no live subscriptions: polling)", () => {
  let stack;
  let c;
  let h;
  before(async () => {
    stack = await startStack({ fakeEnv: { FAKE_HA_OLD: "1" } });
    c = await stack.client();
    h = await stack.home(c);
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  it("the index is built by reading the calendars and the lists", async () => {
    const ix = await h.wait((x) => x.meds.length >= 5 && x.maint.length >= 4 && x.todos.lists.length === 4 && x.todos.items.length > 0, "the index from the REST API", 15000);
    assert.ok(routine(ix, "Regar as plantas"));
    assert.ok(ix.todos.items.some((i) => i.summary === "Pagar o IPVA"));
  });
  it("a routine that comes back after done still moves and shows done (the calendar is read again)", async () => {
    await c.call("calendar/event/create", { entity_id: "calendar.casa", event: { summary: "Trocar a toalha", start: day(0), end: day(1), description: "#rotina\nVolta: 3 dias depois de feita" } });
    const r = routine(await h.wait((x) => routine(x, "Trocar a toalha"), "the new routine (read again after the change)", 15000), "Trocar a toalha");
    await c.call("cronologia/check/set", { key: r.key, done: true, kind: "rotina" });
    const ix = await h.wait((x) => routine(x, "Trocar a toalha", (y) => y.done && y.next === day(3)), "moved and done", 15000);
    assert.ok(ix);
  });
  it("a task marked done is read again from the list", async () => {
    await c.call("cronologia/todo/set", { entity_id: "todo.casa", uid: "todo-4", done: true });
    await h.wait((x) => x.todos.items.some((i) => i.uid === "todo-4" && i.done), "the task done", 15000);
  });
  it("the screens' live calendar subscription is refused with unknown_command (they fall back to reading)", async () => {
    await assert.rejects(c.call("calendar/event/subscribe", { entity_id: "calendar.casa", start: `${day(0)}T00:00:00-03:00`, end: `${day(7)}T00:00:00-03:00` }), { code: "unknown_command" });
    const list = await c.call("cronologia/events/list", { entity_id: "calendar.casa", start: `${day(0)}T00:00:00-03:00`, end: `${day(7)}T00:00:00-03:00` });
    assert.ok(list.events.length > 0);
  });
});

describe("a Home Assistant without speech-to-text nor AI", () => {
  let stack;
  let c;
  before(async () => {
    stack = await startStack({ fakeEnv: { FAKE_NO_STT: "1", FAKE_HA_NO_AI: "1" } });
    c = await stack.client();
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  it("Falar is not ready and says why; /api/voice is 409", async () => {
    const st = await c.call("cronologia/voice/status");
    assert.equal(st.ready, false);
    assert.match(st.reason, /assistente de voz/);
    assert.deepEqual(st.options, []);
    const res = await fetch(`${stack.url}/api/voice`, { method: "POST", body: Buffer.alloc(32000) });
    assert.equal(res.status, 409);
    assert.equal((await res.json()).code, "no_stt");
  });
  it("Ler com IA is not ready; /api/extract is 409 no_ai", async () => {
    const b = await c.call("cronologia/bootstrap");
    assert.equal(b.ai.ready, false);
    assert.match(b.ai.reason, /Nenhuma IA/);
    const res = await fetch(`${stack.url}/api/extract`, { method: "POST", body: JSON.stringify({ text: "Dentista amanhã" }) });
    assert.equal(res.status, 409);
    assert.equal((await res.json()).code, "no_ai");
  });
});
