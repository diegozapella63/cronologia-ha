// Integration: calendar events and what each calendar allows — the scopes of a
// repeating event (only this one, this and the next ones, the whole series), the
// integrations that allow less (CalDAV, Google, an Outlook without editing), the
// calendar states pushed to the screens, and the server's guards (bad messages,
// uploads too big, only the Supervisor's ingress outside dev, a Home Assistant in
// another time zone or whose registry, config, calendars or share folder fail).
import { startStack, day, isoAt, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const P = "calendar.pessoal";

describe("a repeating event: Editar and Apagar with each scope", () => {
  let stack;
  let c;
  before(async () => {
    stack = await startStack();
    c = await stack.client();
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  const series = async (name) => (await stack.events(P, 0, 12)).filter((e) => e.summary.startsWith(name));

  it("Só este evento (edit): that day changes, the others stay; the changed one no longer repeats", async () => {
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Inglês", start: isoAt(1, 18), end: isoAt(1, 19), rrule: "FREQ=DAILY;COUNT=5" } });
    const occ = await series("Inglês");
    assert.equal(occ.length, 5);
    await c.call("calendar/event/update", { entity_id: P, uid: occ[1].uid, recurrence_id: occ[1].recurrence_id, event: { summary: "Inglês (reposição)", start: isoAt(2, 20), end: isoAt(2, 21) } });
    const now = await series("Inglês");
    assert.deepEqual(
      now.map((e) => [e.summary, e.start]),
      [
        ["Inglês", isoAt(1, 18)],
        ["Inglês (reposição)", isoAt(2, 20)],
        ["Inglês", isoAt(3, 18)],
        ["Inglês", isoAt(4, 18)],
        ["Inglês", isoAt(5, 18)],
      ],
    );
    assert.equal(now[1].rrule, undefined, "the one changed is a plain event now");
  });
  it("Este e os próximos (edit): the earlier ones keep the old name, a new series from that day", async () => {
    const occ = (await series("Inglês")).filter((e) => e.summary === "Inglês");
    const third = occ.find((e) => e.start === isoAt(3, 18));
    await c.call("calendar/event/update", { entity_id: P, uid: third.uid, recurrence_id: third.recurrence_id, recurrence_range: "THISANDFUTURE", event: { summary: "Inglês avançado", start: isoAt(3, 19), end: isoAt(3, 20), rrule: "FREQ=DAILY;COUNT=3" } });
    const now = await series("Inglês");
    assert.deepEqual(
      now.map((e) => [e.summary, e.start]),
      [
        ["Inglês", isoAt(1, 18)],
        ["Inglês (reposição)", isoAt(2, 20)],
        ["Inglês avançado", isoAt(3, 19)],
        ["Inglês avançado", isoAt(4, 19)],
        ["Inglês avançado", isoAt(5, 19)],
      ],
    );
    assert.notEqual(now[2].uid, third.uid, "a new series");
    assert.match(now[0].rrule, /UNTIL=/, "the old one ends the day before");
  });
  it("Apagar › Só este evento: only that day leaves", async () => {
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Violão", start: isoAt(1, 7), end: isoAt(1, 8), rrule: "FREQ=DAILY;COUNT=6" } });
    const occ = await series("Violão");
    await c.call("calendar/event/delete", { entity_id: P, uid: occ[2].uid, recurrence_id: occ[2].recurrence_id });
    assert.deepEqual(
      (await series("Violão")).map((e) => e.start.slice(0, 10)),
      [day(1), day(2), day(4), day(5), day(6)],
    );
  });
  it("Apagar › Este e os próximos: the ones before stay", async () => {
    const occ = await series("Violão");
    const fourth = occ.find((e) => e.start.startsWith(day(4)));
    await c.call("calendar/event/delete", { entity_id: P, uid: fourth.uid, recurrence_id: fourth.recurrence_id, recurrence_range: "THISANDFUTURE" });
    assert.deepEqual(
      (await series("Violão")).map((e) => e.start.slice(0, 10)),
      [day(1), day(2)],
    );
  });
  it("Apagar › Toda a série: no recurrence id, every repetition goes", async () => {
    const occ = await series("Violão");
    await c.call("calendar/event/delete", { entity_id: P, uid: occ[1].uid });
    assert.deepEqual(await series("Violão"), []);
  });
  it("this and the next ones from the first day is the whole series", async () => {
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Yoga", start: day(1), end: day(2), rrule: "FREQ=WEEKLY" } });
    const [first] = await series("Yoga");
    await c.call("calendar/event/delete", { entity_id: P, uid: first.uid, recurrence_id: first.recurrence_id, recurrence_range: "THISANDFUTURE" });
    assert.deepEqual(await series("Yoga"), []);
  });
  it("an occurrence that does not exist is refused (and nothing changes)", async () => {
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Dança", start: isoAt(1, 21), end: isoAt(1, 22), rrule: "FREQ=DAILY;COUNT=2" } });
    const [first] = await series("Dança");
    await assert.rejects(c.call("calendar/event/delete", { entity_id: P, uid: first.uid, recurrence_id: "19990101T210000" }), { code: "not_found" });
    await assert.rejects(c.call("calendar/event/delete", { entity_id: P, uid: "nao-existe" }), { code: "not_found" });
    assert.equal((await series("Dança")).length, 2);
  });
});

describe("what each calendar allows (CalDAV, Google, Outlook without editing)", () => {
  let stack;
  let c;
  before(async () => {
    stack = await startStack({ fakeEnv: { FAKE_EXTRA_CALENDARS: "1", FAKE_FEATURES: "calendar.trabalho=7" } });
    c = await stack.client();
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  it("bootstrap: the features and the integration of each calendar", async () => {
    const b = await c.call("cronologia/bootstrap");
    const f = (id) => b.states[id].attributes.supported_features;
    assert.deepEqual([f("calendar.pessoal"), f("calendar.nextcloud"), f("calendar.familia"), f("calendar.outlook_leitura"), f("calendar.trabalho"), f("calendar.feriados")], [7, 1, 3, 0, 7, 0]);
    assert.equal(b.entities["calendar.nextcloud"].platform, "caldav");
    assert.equal(b.entities["calendar.familia"].platform, "google");
    assert.equal(b.entities["calendar.outlook_leitura"].platform, "ms365_calendar");
  });
  it("CalDAV creates, but does not change nor delete", async () => {
    await c.call("calendar/event/create", { entity_id: "calendar.nextcloud", event: { summary: "Feira", start: isoAt(2, 8), end: isoAt(2, 9) } });
    const ev = (await stack.events("calendar.nextcloud", 0, 5)).find((e) => e.summary === "Feira");
    assert.ok(ev);
    await assert.rejects(c.call("calendar/event/update", { entity_id: "calendar.nextcloud", uid: ev.uid, event: { summary: "Feira livre", start: isoAt(2, 8), end: isoAt(2, 9) } }), { code: "not_supported" });
    await assert.rejects(c.call("calendar/event/delete", { entity_id: "calendar.nextcloud", uid: ev.uid }), { code: "not_supported" });
  });
  it("Google creates and deletes (so the app edits by deleting and creating), but does not update", async () => {
    const ev = (await stack.events("calendar.familia", 0, 3)).find((e) => e.summary === "Consulta do Theo");
    await assert.rejects(c.call("calendar/event/update", { entity_id: "calendar.familia", uid: ev.uid, event: { summary: "Consulta", start: isoAt(0, 16), end: isoAt(0, 17) } }), { code: "not_supported" });
    await c.call("calendar/event/delete", { entity_id: "calendar.familia", uid: ev.uid });
    await c.call("calendar/event/create", { entity_id: "calendar.familia", event: { summary: "Consulta do Theo (pediatra)", start: isoAt(0, 16), end: isoAt(0, 17), description: "Levar a carteirinha" } });
    const now = (await stack.events("calendar.familia", 0, 3)).filter((e) => e.summary.startsWith("Consulta do Theo"));
    assert.deepEqual(
      now.map((e) => [e.summary, e.description]),
      [["Consulta do Theo (pediatra)", "Levar a carteirinha"]],
    );
  });
  it("Google: a repeating one edited is the whole series starting on that day", async () => {
    const occ = (await stack.events("calendar.familia", -15, 15)).filter((e) => e.summary === "Natação");
    assert.ok(occ.length >= 4);
    await c.call("calendar/event/delete", { entity_id: "calendar.familia", uid: occ[0].uid });
    await c.call("calendar/event/create", { entity_id: "calendar.familia", event: { summary: "Natação (piscina nova)", start: isoAt(1, 7), end: isoAt(1, 8), rrule: "FREQ=WEEKLY" } });
    const now = (await stack.events("calendar.familia", -15, 15)).filter((e) => e.summary.startsWith("Natação"));
    assert.ok(now.every((e) => e.summary === "Natação (piscina nova)"));
    assert.equal(now[0].start, isoAt(1, 7), "nothing before the day edited");
  });
  it("Outlook without the edit option (and holidays) only read", async () => {
    const ev = (await stack.events("calendar.outlook_leitura", 0, 2)).find((e) => e.summary === "Treinamento de vendas");
    assert.ok(ev);
    await assert.rejects(c.call("calendar/event/create", { entity_id: "calendar.outlook_leitura", event: { summary: "x", start: day(1), end: day(2) } }), { code: "not_supported" });
    await assert.rejects(c.call("calendar/event/delete", { entity_id: "calendar.outlook_leitura", uid: ev.uid }), { code: "not_supported" });
  });
});

describe("the server's pushes and guards", () => {
  let stack;
  let c;
  before(async () => {
    stack = await startStack({ fakeEnv: { FAKE_HA_TIME_ZONE: "America/Manaus" }, ready: /Fuso horário/ });
    c = await stack.client();
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  it("a Home Assistant in another time zone: the app takes it", async () => {
    await waitFor(() => stack.app.lines.some((l) => /calendários encontrados/.test(l)), { what: "the calendars" });
    assert.ok(stack.app.lines.some((l) => /Fuso horário: America\/Manaus/.test(l)));
    const b = await c.call("cronologia/bootstrap");
    assert.equal(b.time_zone, "America/Manaus");
  });
  it("cronologia/subscribe_calendars: every screen hears a calendar change", async () => {
    const got = [];
    await c.subscribe("cronologia/subscribe_calendars", {}, (ev) => got.push(ev));
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Muda o estado", start: isoAt(1, 9), end: isoAt(1, 10) } });
    const ev = await waitFor(() => got.find((e) => e.entity_id === P), { what: "the state of the calendar" });
    assert.equal(ev.new_state.entity_id, P);
    assert.equal(ev.new_state.attributes.friendly_name, "Pessoal");
  });
  it("a message that is not JSON, or has no id, is ignored; the connection goes on", async () => {
    c.ws.send("isto não é json");
    c.ws.send(JSON.stringify({ type: "ping" }));
    c.ws.send(JSON.stringify({ id: "1", type: "ping" }));
    c.ws.send(JSON.stringify(null));
    assert.equal(await c.call("ping"), "pong");
  });
  it("an upload too big is refused with 413 (import and Ler com IA)", async () => {
    const big = Buffer.alloc(30 * 1024 * 1024 + 10, 32);
    for (const url of ["/api/import", "/api/extract"]) {
      const res = await fetch(`${stack.url}${url}`, { method: "POST", body: big });
      assert.equal(res.status, 413, url);
      assert.equal((await res.json()).error, "Arquivo grande demais");
    }
    assert.equal(await c.call("ping"), "pong", "still up");
  });
  it("import with a file name that is not valid URI encoding: imported, named 'arquivo'", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { accent: "rosa" } });
    const backup = await (await fetch(`${stack.url}/api/export/json`)).text();
    await c.call("cronologia/prefs/set_app", { prefs: { accent: "azul" } });
    const res = await fetch(`${stack.url}/api/import`, { method: "POST", body: backup, headers: { "x-file-name": "%E0%A4%A" } });
    assert.equal(res.status, 200);
    assert.ok(stack.app.lines.some((l) => /importado de arquivo/.test(l)));
    assert.equal((await c.call("cronologia/bootstrap")).prefs.app.accent, "rosa");
    const bad = await fetch(`${stack.url}/api/extract`, { method: "POST", body: "{nada" });
    assert.equal(bad.status, 400);
  });
});

describe("a Home Assistant whose registry, config and one calendar fail", () => {
  let stack;
  let c;
  before(async () => {
    stack = await startStack({ fakeEnv: { FAKE_FAIL: "get_config,config/entity_registry/list_for_display", FAKE_FAIL_REST: "calendar.giveaways" } });
    c = await stack.client();
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  it("without get_config the app keeps its own time zone", async () => {
    assert.ok(stack.app.lines.some((l) => /get_config falhou/.test(l)));
    const b = await c.call("cronologia/bootstrap");
    assert.equal(b.time_zone, "America/Sao_Paulo");
  });
  it("without the registry the calendars still come, only without their integration", async () => {
    const b = await c.call("cronologia/bootstrap");
    assert.ok(b.states["calendar.pessoal"]);
    assert.deepEqual(b.entities, {});
    assert.deepEqual(b.devices, {});
    assert.ok(stack.app.lines.some((l) => /Registro de entidades indisponível/.test(l)));
  });
  it("the backup leaves out the calendar that did not answer, and says so", async () => {
    const res = await fetch(`${stack.url}/api/export/csv`);
    assert.equal(res.status, 200);
    const csv = await res.text();
    assert.match(csv, /Pilates/);
    assert.doesNotMatch(csv, /Giveaway/);
    assert.ok(stack.app.lines.some((l) => /Backup: calendar\.giveaways ficou de fora/.test(l)));
    const ics = await fetch(`${stack.url}/api/export/ics?calendars=calendar.giveaways&start=${encodeURIComponent(isoAt(0, 0))}&end=${encodeURIComponent(isoAt(5, 0))}`);
    assert.equal(ics.status, 502, "the .ics of only that calendar fails");
  });
});

describe("a Home Assistant whose calendars can't be read", () => {
  let stack;
  let c;
  before(async () => {
    stack = await startStack({ fakeEnv: { FAKE_FAIL: "get_states" }, ready: /Não consegui ler os calendários/ });
    c = await stack.client();
  });
  after(async () => {
    if (stack) await stack.stop();
  });
  it("the server stays up and the screens get no calendars", async () => {
    const b = await c.call("cronologia/bootstrap");
    assert.deepEqual(b.states, {});
    assert.equal(await c.call("ping"), "pong");
  });
});

describe("outside dev: only the Supervisor's ingress talks to the app; a share folder that can't be written", () => {
  let stack;
  let base;
  before(async () => {
    base = fs.mkdtempSync(path.join(os.tmpdir(), "cronologia-it-share-"));
    fs.writeFileSync(path.join(base, "arquivo"), "não é uma pasta");
    stack = await startStack({ env: { CRONOLOGIA_DEV: "", SHARE_DIR: path.join(base, "arquivo") } });
  });
  after(async () => {
    if (stack) await stack.stop();
    fs.rmSync(base, { recursive: true, force: true });
  });
  it("HTTP from anywhere else: 403", async () => {
    const res = await fetch(`${stack.url}/`);
    assert.equal(res.status, 403);
    assert.equal(await res.text(), "Forbidden");
    assert.equal((await fetch(`${stack.url}/api/export/json`)).status, 403);
  });
  it("the WebSocket too", async () => {
    const ws = new WebSocket(`ws://127.0.0.1:${stack.appPort}/ws`);
    const outcome = await new Promise((r) => {
      ws.onopen = () => r("open");
      ws.onerror = () => r("error");
    });
    assert.equal(outcome, "error");
  });
  it("the integration file for the other apps can't be written: one warning, the app goes on", async () => {
    const warns = stack.app.lines.filter((l) => /Não consegui gravar share\/cronologia\/integracao\.json/.test(l));
    assert.equal(warns.length, 1);
    assert.ok(stack.app.lines.some((l) => /calendários encontrados/.test(l)));
  });
});
