// Integration: the server against the fake Home Assistant — HTTP, bootstrap,
// settings, and plain calendar events through the WebSocket API.
import { startStack, day, isoAt, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { parseICS } from "../../frontend/src/ics.js";

let stack;
let c;
before(async () => {
  stack = await startStack();
  c = await stack.client();
});
after(async () => {
  if (stack) await stack.stop();
});

describe("HTTP", () => {
  it("serves the app page and its script; anything else is 404", async () => {
    const page = await fetch(`${stack.url}/`);
    assert.equal(page.status, 200);
    assert.match(page.headers.get("content-type"), /text\/html/);
    const etag = page.headers.get("etag");
    assert.ok(etag);
    const again = await fetch(`${stack.url}/index.html`, { headers: { "if-none-match": etag } });
    assert.equal(again.status, 304);
    const js = await fetch(`${stack.url}/cronologia.js`, { method: "HEAD" });
    assert.equal(js.status, 200);
    assert.match(js.headers.get("content-type"), /javascript/);
    assert.equal((await fetch(`${stack.url}/server.js`)).status, 404);
    assert.equal((await fetch(`${stack.url}/../server.js`)).status, 404);
    assert.equal((await fetch(`${stack.url}/`, { method: "POST" })).status, 404);
    assert.equal((await fetch(`${stack.url}/fonts/barlow-400.woff2`)).status, 200);
    assert.equal((await fetch(`${stack.url}/fonts/nada.woff2`)).status, 404);
  });
  it("the WebSocket only on /ws", async () => {
    const ws = new WebSocket(`ws://127.0.0.1:${stack.appPort}/outro`);
    const outcome = await new Promise((r) => {
      ws.onopen = () => r("open");
      ws.onerror = () => r("error");
    });
    assert.equal(outcome, "error");
  });
});

describe("bootstrap and basics", () => {
  it("ping, and an unknown command is an error", async () => {
    assert.equal(await c.call("ping"), "pong");
    await assert.rejects(c.call("cronologia/nada"), { code: "unknown_command" });
  });
  it("bootstrap: version, the person of the HA user, time zone, calendars, registry, AI", async () => {
    const b = await c.call("cronologia/bootstrap");
    assert.match(b.version, /^\d+\.\d+\.\d+$/);
    assert.equal(b.user.id, "u-diego");
    assert.equal(b.user.person, "Diego");
    assert.equal(b.time_zone, "America/Sao_Paulo");
    assert.deepEqual(Object.keys(b.states).sort(), ["calendar.casa", "calendar.feriados", "calendar.giveaways", "calendar.pessoal", "calendar.remedios", "calendar.trabalho"]);
    assert.equal(b.states["calendar.casa"].attributes.supported_features, 7);
    assert.equal(b.entities["calendar.trabalho"].platform, "ms365_calendar");
    assert.equal(b.devices.dev_ms365.name, "Diego (Outlook)");
    assert.equal(b.ai.ready, true);
    assert.equal(b.ai.using.id, "ai_task.google_ai_task");
    assert.deepEqual(b.prefs.app, { resolvia_on: true, gerencia_on: true });
  });
  it("the calendars with models were found and are followed", async () => {
    const h = await stack.home(c);
    const ix = await h.wait((x) => x.tracked.length >= 2, "the calendars with models");
    assert.deepEqual([...ix.tracked].sort(), ["calendar.casa", "calendar.remedios"]);
  });
});

describe("settings", () => {
  it("set_calendar validates and every open screen gets the new settings", async () => {
    const other = await stack.client();
    const pushed = [];
    await other.subscribe("cronologia/prefs/subscribe", {}, (p) => pushed.push(p));
    const prefs = await c.call("cronologia/prefs/set_calendar", { entity_id: "calendar.pessoal", prefs: { name: "  Minha agenda ", color: "rosa", hidden: true } });
    assert.deepEqual(prefs.calendars["calendar.pessoal"], { name: "Minha agenda", color: "rosa", hidden: true });
    await waitFor(() => pushed.length, { what: "the prefs pushed" });
    assert.deepEqual(pushed[0].calendars["calendar.pessoal"], { name: "Minha agenda", color: "rosa", hidden: true });
    await c.call("cronologia/prefs/set_calendar", { entity_id: "calendar.pessoal", prefs: { name: null, color: "nope", hidden: false } });
    const b = await c.call("cronologia/bootstrap");
    assert.equal("calendar.pessoal" in b.prefs.calendars, false);
    await assert.rejects(c.call("cronologia/prefs/set_calendar", { entity_id: "light.sala", prefs: {} }), { code: "invalid_format" });
  });
  it("set_app keeps only valid values", async () => {
    const p = await c.call("cronologia/prefs/set_app", { prefs: { accent: "azul", view: "ano", week_start: 0, default_calendar: "calendar.pessoal", hacker: true } });
    assert.equal(p.app.accent, "azul");
    assert.equal(p.app.week_start, 0);
    assert.equal(p.app.default_calendar, "calendar.pessoal");
    assert.equal("view" in p.app, false);
    assert.equal("hacker" in p.app, false);
    await assert.rejects(c.call("cronologia/prefs/set_app", { prefs: null }), { code: "invalid_format" });
  });
});

describe("calendar events through the server", () => {
  it("create, read, update and delete a plain event", async () => {
    await c.call("calendar/event/create", { entity_id: "calendar.pessoal", event: { summary: "Teste integração", start: isoAt(2, 10), end: isoAt(2, 11), location: "Sala 2", description: "Levar o notebook", extra: "ignored" } });
    let evs = await stack.events("calendar.pessoal", 0, 5);
    const ev = evs.find((e) => e.summary === "Teste integração");
    assert.ok(ev, "created");
    assert.equal(ev.location, "Sala 2");
    assert.equal(ev.start, isoAt(2, 10));
    assert.equal(ev.all_day, false);
    await c.call("calendar/event/update", { entity_id: "calendar.pessoal", uid: ev.uid, event: { summary: "Teste alterado", start: day(3), end: day(4) } });
    evs = await stack.events("calendar.pessoal", 0, 5);
    const up = evs.find((e) => e.uid === ev.uid);
    assert.equal(up.summary, "Teste alterado");
    assert.equal(up.start, day(3));
    assert.equal(up.all_day, true);
    await c.call("calendar/event/delete", { entity_id: "calendar.pessoal", uid: ev.uid });
    evs = await stack.events("calendar.pessoal", 0, 5);
    assert.equal(evs.some((e) => e.uid === ev.uid), false);
  });
  it("a repeating event: change one occurrence only", async () => {
    await c.call("calendar/event/create", { entity_id: "calendar.pessoal", event: { summary: "Aula", start: isoAt(1, 18), end: isoAt(1, 19), rrule: "FREQ=DAILY;COUNT=3" } });
    const occ = (await stack.events("calendar.pessoal", 0, 6)).filter((e) => e.summary === "Aula");
    assert.equal(occ.length, 3);
    assert.equal(occ[0].rrule, "FREQ=DAILY;COUNT=3");
    await c.call("calendar/event/delete", { entity_id: "calendar.pessoal", uid: occ[1].uid, recurrence_id: occ[1].recurrence_id });
    const left = (await stack.events("calendar.pessoal", 0, 6)).filter((e) => e.summary === "Aula");
    assert.deepEqual(
      left.map((e) => e.start.slice(0, 10)),
      [day(1), day(3)],
    );
  });
  it("refuses bad events, ids and ranges", async () => {
    await assert.rejects(c.call("calendar/event/create", { entity_id: "calendar.pessoal", event: { summary: "", start: day(1), end: day(2) } }), { code: "invalid_format" });
    await assert.rejects(c.call("calendar/event/create", { entity_id: "calendar.pessoal", event: { summary: "x", start: 5, end: day(2) } }), { code: "invalid_format" });
    await assert.rejects(c.call("calendar/event/create", { entity_id: "todo.casa", event: { summary: "x", start: day(1), end: day(2) } }), { code: "invalid_format" });
    await assert.rejects(c.call("calendar/event/update", { entity_id: "calendar.pessoal", uid: "", event: {} }), { code: "invalid_format" });
    await assert.rejects(c.call("calendar/event/create", { entity_id: "calendar.feriados", event: { summary: "x", start: day(1), end: day(2) } }), { code: "not_supported" });
    await assert.rejects(c.call("cronologia/events/list", { entity_id: "calendar.pessoal", start: isoAt(2, 0), end: isoAt(1, 0) }), { code: "invalid_format" });
    await assert.rejects(c.call("cronologia/events/list", { entity_id: "calendar.pessoal", start: isoAt(0, 0), end: isoAt(900, 0) }), { code: "invalid_format", message: "Período grande demais" });
  });
  it("live subscription of a calendar: the events, then the changes", async () => {
    const got = [];
    const id = await c.subscribe("calendar/event/subscribe", { entity_id: "calendar.trabalho", start: isoAt(0, 0), end: isoAt(10, 0) }, (ev) => got.push(ev));
    await waitFor(() => got.length, { what: "the first events" });
    assert.ok(got[0].events.some((e) => e.summary === "Reunião de planejamento"));
    await c.call("calendar/event/create", { entity_id: "calendar.trabalho", event: { summary: "Nova reunião", start: isoAt(1, 15), end: isoAt(1, 16) } });
    await waitFor(() => got.at(-1).events.some((e) => e.summary === "Nova reunião"), { what: "the change" });
    await c.call("unsubscribe_events", { subscription: id });
    await assert.rejects(c.call("unsubscribe_events", { subscription: id }), { code: "not_found" });
  });
  it("the .ics export is read back by the import screen", async () => {
    const res = await fetch(`${stack.url}/api/export/ics?calendars=calendar.trabalho,light.x&start=${encodeURIComponent(isoAt(0, 0))}&end=${encodeURIComponent(isoAt(10, 0))}`);
    assert.equal(res.status, 200);
    assert.match(res.headers.get("content-type"), /text\/calendar/);
    assert.match(res.headers.get("content-disposition"), new RegExp(`cronologia-${day(0)}\\.ics`));
    const events = parseICS(await res.text());
    const r = events.find((e) => e.title === "Reunião de planejamento");
    assert.deepEqual([r.date, r.start, r.end, r.location], [day(1), "10:00", "11:00", "Microsoft Teams"]);
    const bad = await fetch(`${stack.url}/api/export/ics?calendars=light.x&start=a&end=b`);
    assert.equal(bad.status, 400);
  });
  it("registry and the AI status", async () => {
    const reg = await c.call("cronologia/registry");
    assert.equal(reg.entities["calendar.feriados"].platform, "holiday");
    const ai = await c.call("cronologia/ai/status");
    assert.equal(ai.ready, true);
    assert.equal(ai.images, true);
  });
});
