// sensor.cronologia_proximo (1.78.0): the next appointment of the visible calendars.
import { describe, it, afterEach } from "node:test";
import assert from "node:assert/strict";
import { at } from "./helpers.mjs";
import { nextState, NextSensor, NEXT_ID } from "../cronologia/rootfs/app/lib/proximo.js";
import { occurrenceKey } from "../cronologia/rootfs/app/lib/kinds.js";

const NOW = at(2026, 11, 2, 14, 0).getTime();
const CASA = { id: "calendar.casa", nome: "Casa" };
const ESCOLA = { id: "calendar.escola", nome: "Escola" };
const iso = (ms) => {
  const d = new Date(ms);
  const p = (n) => String(n).padStart(2, "0");
  const off = -d.getTimezoneOffset();
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:00${off >= 0 ? "+" : "-"}${p(Math.floor(Math.abs(off) / 60))}:${p(Math.abs(off) % 60)}`;
};
const ev = (cal, summary, h, m, mins = 60, extra = {}) => {
  const s = at(2026, 11, 2, h, m).getTime();
  return { cal, e: { uid: summary, summary, start: iso(s), end: iso(s + mins * 60000), ...extra }, s, f: s + mins * 60000 };
};
const day = (cal, summary) => ({ cal, e: { uid: summary, summary, start: "2026-11-02", end: "2026-11-03" }, s: at(2026, 11, 2, 0, 0).getTime(), f: at(2026, 11, 3, 0, 0).getTime() });

describe("proximo: what the sensor says", () => {
  const list = [day(CASA, "Feriado"), ev(CASA, "Reunião", 13, 30, 60), ev(ESCOLA, "Natação", 16, 0, 45, { location: "Clube" }), ev(CASA, "Dentista", 15, 0, 30)];
  it("the next one that starts, with the title, the end, the place and what is happening now; the whole day stays out", () => {
    const s = nextState(list, {}, NOW);
    assert.equal(s.state, iso(at(2026, 11, 2, 15, 0).getTime()));
    assert.deepEqual(
      { ...s.attributes, fim: s.attributes.fim === iso(at(2026, 11, 2, 15, 30).getTime()) },
      { friendly_name: "CronologIA Próximo compromisso", icon: "mdi:calendar-clock", device_class: "timestamp", titulo: "Dentista", fim: true, local: null, calendario: "Casa", minutos: 60, agora: "Reunião" },
    );
  });
  it("a dose of medicine stays out (it has its own sensor)", () => {
    const dose = ev(CASA, "Vitamina", 14, 30, 15, { description: "#remédio\nDose: 1 comprimido" });
    assert.equal(nextState([dose, ...list], {}, NOW).attributes.titulo, "Dentista");
  });
  it("one marked Feito stays out; nothing ahead: unknown", () => {
    const checks = { [occurrenceKey(CASA.id, list[3].e)]: { by: "Ana" } };
    const s = nextState(list, checks, NOW);
    assert.deepEqual([s.attributes.titulo, s.attributes.local, s.attributes.calendario], ["Natação", "Clube", "Escola"]);
    const none = nextState([day(CASA, "Feriado"), ev(CASA, "Reunião", 13, 30, 60)], {}, NOW);
    assert.deepEqual([none.state, none.attributes.titulo, none.attributes.agora], ["unknown", null, "Reunião"]);
    assert.equal(nextState([], {}, NOW).attributes.agora, null);
  });
  it("more than 2 days ahead: not yet", () => {
    const far = { ...ev(CASA, "Viagem", 9, 0), s: NOW + 3 * 86400000, f: NOW + 3 * 86400000 + 3600000 };
    assert.equal(nextState([far], {}, NOW).state, "unknown");
  });
});

describe("proximo: publishing", () => {
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });
  const make = (calls, { ok = true, on = true, lista = [ev(CASA, "Dentista", 15, 0, 30)] } = {}) => {
    const warns = [];
    globalThis.fetch = async (url, opts) => {
      calls.push([opts.method, url.split("/states/")[1], opts.body ? JSON.parse(opts.body) : null]);
      if (ok === "throw") throw new Error("offline");
      return { ok, status: ok ? 200 : 500 };
    };
    const s = new NextSensor({ rest: "http://ha/api", token: "t", log: { warn: (m) => warns.push(m) }, enabled: () => on, events: async () => ({ lista }), checks: () => ({}) });
    return { s, warns };
  };
  it("sends it; the same thing a minute later: not again; 5 minutes later: again (the minutes)", async () => {
    const calls = [];
    const { s } = make(calls);
    await s.publish(NOW);
    assert.deepEqual(calls.map((c) => c.slice(0, 2)), [["POST", NEXT_ID]]);
    assert.equal(calls[0][2].attributes.minutos, 60);
    await s.publish(NOW + 60000);
    assert.equal(calls.length, 1);
    await s.publish(NOW + 5 * 60000);
    assert.equal(calls.length, 2);
    assert.equal(calls[1][2].attributes.minutos, 55);
    await s.remove();
    assert.deepEqual(calls[2].slice(0, 2), ["DELETE", NEXT_ID]);
  });
  it("Sensores off: nothing; refused or offline: one warning and it tries again", async () => {
    const calls = [];
    await make(calls, { on: false }).s.publish(NOW);
    assert.equal(calls.length, 0);
    const { s, warns } = make(calls, { ok: false });
    await s.publish(NOW);
    await s.publish(NOW);
    assert.equal(calls.length, 2, "nothing kept as sent");
    assert.deepEqual(warns, [`Sensor ${NEXT_ID}: HTTP 500`]);
    const off = make(calls, { ok: "throw" }).s;
    await off.remove();
    assert.equal(calls.at(-1)[0], "DELETE", "removing offline does not fail");
  });
  it("schedule: one publish 2 seconds after the changes; off: none", (t) => {
    t.mock.timers.enable({ apis: ["setTimeout"] });
    const { s } = make([]);
    let n = 0;
    s.publish = async () => n++;
    s.schedule();
    s.schedule();
    t.mock.timers.tick(2000);
    assert.equal(n, 1);
    const off = make([], { on: false }).s;
    off.publish = async () => n++;
    off.schedule();
    t.mock.timers.tick(2000);
    assert.equal(n, 1);
  });
  it("without Home Assistant (no token): nothing", async () => {
    const calls = [];
    make(calls);
    const s = new NextSensor({ rest: "", token: "", log: { warn() {} }, enabled: () => true, events: async () => ({ lista: [] }), checks: () => ({}) });
    await s.publish(NOW);
    await s.remove();
    assert.equal(calls.length, 0);
  });
});
