// frontend/src: events.js (EventStore, eventsOfDay, layoutDay), equip-picker.js
// (searchEquips and the picker's output) and voice.js (Recorder with a fake microphone, micError).
import { at, isoLocal, flushPromises } from "./helpers.mjs";
import { describe, it, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import { toEvent, EventStore, eventsOfDay, layoutDay } from "../frontend/src/events.js";
import { searchEquips, renderEquipPicker } from "../frontend/src/equip-picker.js";
import { Recorder, micError, VOICE_RATE, VOICE_MAX_S } from "../frontend/src/voice.js";

afterEach(() => {
  mock.timers.reset();
  delete globalThis.window;
});

// ------------------------------------------------------------------ events.js

describe("events: toEvent", () => {
  it("reads the model, keys and dates", () => {
    const e = toEvent("calendar.casa", { uid: "u", summary: "Lixo", start: "2026-11-02T19:00:00-03:00", end: "2026-11-02T19:15:00-03:00", description: "#rotina\nPontos: 5", rrule: "FREQ=DAILY", recurrence_id: "r1" });
    assert.equal(e.key, "calendar.casa|u|r1");
    assert.equal(e.kind.kind, "rotina");
    assert.equal(e.kind.points, 5);
    assert.deepEqual(e.start, at(2026, 11, 2, 19));
    assert.deepEqual(e.end, at(2026, 11, 2, 19, 15));
    assert.equal(e.allDay, false);
    assert.equal(e.rrule, "FREQ=DAILY");
    assert.equal(e.rid, "r1");
  });
  it("defaults: no title, no model; an end not after the start is fixed", () => {
    const a = toEvent("c", { start: "2026-11-02", end: "2026-11-02" });
    assert.equal(a.summary, "(sem título)");
    assert.equal(a.kind, null);
    assert.equal(a.allDay, true);
    assert.deepEqual(a.end, at(2026, 11, 3), "all-day: one day");
    const b = toEvent("c", { start: "2026-11-02T10:00:00-03:00", end: "2026-11-02T09:00:00-03:00" });
    assert.deepEqual(b.end, b.start, "timed: zero length");
    assert.equal(toEvent("c", { start: "2026-11-02", end: "2026-11-03", all_day: false }).allDay, false, "all_day from HA wins");
  });
});

describe("events: eventsOfDay / layoutDay", () => {
  const ev = (summary, s, e, allDay = false) => ({ summary, start: s, end: e, allDay });
  it("eventsOfDay: what touches the day (all-day end exclusive)", () => {
    const list = [ev("ontem", at(2026, 11, 1), at(2026, 11, 2), true), ev("hoje", at(2026, 11, 2), at(2026, 11, 3), true), ev("noite", at(2026, 11, 1, 23), at(2026, 11, 2, 1)), ev("amanhã", at(2026, 11, 3), at(2026, 11, 4), true)];
    assert.deepEqual(
      eventsOfDay(list, at(2026, 11, 2, 15)).map((e) => e.summary),
      ["hoje", "noite"],
    );
  });
  it("layoutDay: overlapping events side by side, short ones at least half an hour, clipped to the day", () => {
    const day = at(2026, 11, 2);
    const A = ev("A", at(2026, 11, 2, 9), at(2026, 11, 2, 10));
    const B = ev("B", at(2026, 11, 2, 9, 30), at(2026, 11, 2, 10, 30));
    const C = ev("C", at(2026, 11, 2, 10), at(2026, 11, 2, 11));
    const D = ev("D", at(2026, 11, 2, 12), at(2026, 11, 2, 12, 15));
    const N = ev("N", at(2026, 11, 1, 22), at(2026, 11, 2, 1));
    const T = ev("T", at(2026, 11, 2, 23), at(2026, 11, 3, 2));
    const all = ev("all", at(2026, 11, 2), at(2026, 11, 3), true);
    const out = Object.fromEntries(layoutDay([C, D, all, A, B, N, T], day).map((x) => [x.event.summary, x]));
    assert.equal("all" in out, false, "all-day events are not on the grid");
    assert.deepEqual([out.A.lane, out.B.lane, out.C.lane], [0, 1, 0], "C takes A's column back");
    assert.deepEqual([out.A.lanes, out.B.lanes, out.C.lanes], [2, 2, 2]);
    assert.deepEqual([out.D.top, out.D.height, out.D.lanes], [12, 0.5, 1]);
    assert.deepEqual([out.N.top, out.N.height], [0, 1]);
    assert.deepEqual([out.T.top, out.T.height], [23, 1]);
    assert.deepEqual([out.A.top, out.A.height], [9, 1]);
  });
  it("layoutDay: a long event keeps the cluster open", () => {
    const L = ev("L", at(2026, 11, 2, 8), at(2026, 11, 2, 18));
    const a = ev("a", at(2026, 11, 2, 9), at(2026, 11, 2, 10));
    const b = ev("b", at(2026, 11, 2, 15), at(2026, 11, 2, 16));
    const out = layoutDay([a, b, L], at(2026, 11, 2));
    assert.ok(out.every((x) => x.lanes === 2));
    assert.deepEqual(
      out.map((x) => [x.event.summary, x.lane]),
      [
        ["L", 0],
        ["a", 1],
        ["b", 1],
      ],
    );
  });
});

describe("events: EventStore", () => {
  /** A fake api: subscriptions resolve to an unsubscribe function; events pushed by the test. */
  function fakeApi({ refuse = null } = {}) {
    const api = { subs: [], lists: [], unsubs: 0 };
    api.subscribeEvents = (id, start, end, cb) => {
      const sub = { id, start, end, cb };
      api.subs.push(sub);
      if (refuse) return Promise.reject(refuse);
      return Promise.resolve(() => api.unsubs++);
    };
    api.listEvents = async (id, start, end) => {
      api.lists.push({ id, start, end });
      if (api.listFail) throw new Error("offline");
      return { events: api.data?.[id] || [] };
    };
    return api;
  }
  const raw = (summary, s, e, extra = {}) => ({ uid: summary, summary, start: isoLocal(s), end: isoLocal(e), ...extra });

  it("ensure subscribes each calendar for the range with a week around; query returns what overlaps, sorted", async () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2, 14).getTime() });
    const api = fakeApi();
    let changes = 0;
    const s = new EventStore(api, () => changes++);
    s.setCalendars(["calendar.b", "calendar.a", "calendar.a"]);
    assert.deepEqual(s.calendars, ["calendar.a", "calendar.b"]);
    const from = at(2026, 11, 2);
    const to = at(2026, 11, 9);
    assert.equal(s.ensure(from, to), false);
    assert.equal(api.subs.length, 2);
    assert.equal(api.subs[0].start, "2026-10-26T00:00:00-03:00");
    assert.equal(api.subs[0].end, "2026-11-17T00:00:00-03:00");
    assert.equal(s.loading(from, to), true);
    api.subs[0].cb({ events: [raw("Z depois", at(2026, 11, 3, 9), at(2026, 11, 3, 10)), raw("Fora", at(2026, 10, 27, 9), at(2026, 10, 27, 10))] });
    api.subs[1].cb({ events: [{ uid: "dia", summary: "Dia todo", start: "2026-11-03", end: "2026-11-04" }, raw("A antes", at(2026, 11, 3, 9), at(2026, 11, 3, 9, 30))] });
    assert.equal(changes, 2);
    assert.equal(s.version, 2);
    assert.equal(s.loading(from, to), false);
    assert.equal(s.ensure(from, to), true, "already loaded");
    assert.equal(api.subs.length, 2, "no new subscription for a covered range");
    assert.deepEqual(
      s.query(from, to).map((e) => e.summary),
      ["Dia todo", "A antes", "Z depois"],
    );
    assert.deepEqual(
      s.query(from, to, ["calendar.b"]).map((e) => e.summary),
      ["Dia todo", "A antes"],
    );
    assert.deepEqual(s.query(at(2027, 1, 1), at(2027, 1, 2)), [], "not covered");
  });
  it("a bad answer or a refused subscription is an error of that calendar", async () => {
    const api = fakeApi({ refuse: { code: "not_found", message: "Calendário sumiu" } });
    const s = new EventStore(api, () => {});
    s.setCalendars(["calendar.a"]);
    s.ensure(at(2026, 11, 2), at(2026, 11, 3));
    await flushPromises();
    assert.deepEqual([...s.errors()], [["calendar.a", "Calendário sumiu"]]);
    assert.equal(s.loading(at(2026, 11, 2), at(2026, 11, 3)), false);
    const api2 = fakeApi();
    const s2 = new EventStore(api2, () => {});
    s2.setCalendars(["calendar.a"]);
    s2.ensure(at(2026, 11, 2), at(2026, 11, 3));
    api2.subs[0].cb({ nope: 1 });
    assert.equal(s2.errors().get("calendar.a"), "Não deu para ler os eventos agora");
  });
  it("older Home Assistant (unknown_command): reads every 5 minutes instead, also for new calendars", async () => {
    mock.timers.enable({ apis: ["setInterval", "Date"], now: at(2026, 11, 2, 14).getTime() });
    const api = fakeApi({ refuse: { code: "unknown_command" } });
    api.data = { "calendar.a": [raw("Lido", at(2026, 11, 2, 15), at(2026, 11, 2, 16))] };
    const s = new EventStore(api, () => {});
    s.setCalendars(["calendar.a"]);
    s.ensure(at(2026, 11, 2), at(2026, 11, 3));
    await flushPromises();
    assert.equal(s.noSubscribe, true);
    assert.equal(api.lists.length, 1);
    assert.deepEqual(
      s.query(at(2026, 11, 2), at(2026, 11, 3)).map((e) => e.summary),
      ["Lido"],
    );
    mock.timers.tick(5 * 60000);
    await flushPromises();
    assert.equal(api.lists.length, 2);
    s.refresh("calendar.a");
    await flushPromises();
    assert.equal(api.lists.length, 3);
    s.setCalendars(["calendar.a", "calendar.b"]);
    await flushPromises();
    assert.equal(api.subs.length, 1, "no subscription tried anymore");
    assert.equal(api.lists.at(-1).id, "calendar.b");
    api.listFail = true;
    s.reloadAll();
    await flushPromises();
    assert.equal(s.errors().get("calendar.a"), "offline");
    s.dispose();
    const n = api.lists.length;
    mock.timers.tick(30 * 60000);
    await flushPromises();
    assert.equal(api.lists.length, n, "polling stopped");
  });
  it("hiding a calendar drops its subscription (unsubscribe called)", async () => {
    const api = fakeApi();
    const s = new EventStore(api, () => {});
    s.setCalendars(["calendar.a", "calendar.b"]);
    s.ensure(at(2026, 11, 2), at(2026, 11, 3));
    s.setCalendars(["calendar.a"]);
    await flushPromises();
    assert.equal(api.unsubs, 1);
    api.subs[1].cb({ events: [raw("tarde", at(2026, 11, 2, 9), at(2026, 11, 2, 10))] });
    assert.deepEqual(s.query(at(2026, 11, 2), at(2026, 11, 3), ["calendar.b"]), [], "events of a dropped calendar are ignored");
  });
  it("keeps at most 4 ranges, the least recently used goes", async () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2).getTime() });
    const api = fakeApi();
    const s = new EventStore(api, () => {});
    s.setCalendars(["calendar.a"]);
    for (let m = 0; m < 5; m++) {
      mock.timers.tick(1000);
      s.ensure(at(2026, 1 + m * 2, 1), at(2026, 1 + m * 2, 2));
    }
    assert.equal(s.windows.length, 4);
    await flushPromises();
    assert.equal(api.unsubs, 1);
    assert.equal(s.loading(at(2026, 1, 1), at(2026, 1, 2)), true, "the first range was dropped");
  });
});

// ------------------------------------------------------------------ equip-picker.js

const ITEMS = [
  { id: "fogao", nome: "Fogão Brastemp", zona: "Bancada", roomId: "coz", roomName: "Cozinha" },
  { id: "geladeira", nome: "Geladeira", zona: "", roomId: "coz", roomName: "Cozinha" },
  { id: "filtro", nome: "Filtro de água", zona: "Pia", roomId: "coz", roomName: "Cozinha" },
  { id: "ar-sala", nome: "Ar-condicionado", zona: "Parede", roomId: "sala", roomName: "Sala" },
  { id: "tv", nome: "TV", zona: "Rack do fogão a lenha", roomId: "sala", roomName: "Sala" },
  { id: "ar-quarto", nome: "Ar-condicionado Split", zona: "", roomId: "quarto", roomName: "Quarto" },
  { id: "aquecedor", nome: "Aquecedor", zona: "", roomId: "banho", roomName: "Banheiro" },
];
const names = (list) => list.map((i) => i.id);

describe("equip-picker: searchEquips", () => {
  it("no room, no search: nothing listed (the picker asks to choose or search)", () => {
    assert.deepEqual(searchEquips(ITEMS), { inRoom: [], others: [] });
  });
  it("a room without a search: its items by name, nothing from other rooms", () => {
    const r = searchEquips(ITEMS, { room: "coz" });
    assert.deepEqual(names(r.inRoom), ["filtro", "fogao", "geladeira"]);
    assert.deepEqual(r.others, []);
  });
  it("search ignores accents and case, looks at name, zone and room", () => {
    assert.deepEqual(names(searchEquips(ITEMS, { query: "FOGAO" }).others), ["fogao", "tv"]);
    assert.deepEqual(names(searchEquips(ITEMS, { query: "agua" }).others), ["filtro"]);
    assert.deepEqual(names(searchEquips(ITEMS, { query: "banheiro" }).others), ["aquecedor"]);
  });
  it("ranking: the name starting with the search, then the name having it, then zone/room", () => {
    const items = [
      { id: "sofa", nome: "Sofá", zona: "Área externa", roomId: "x", roomName: "Varanda" },
      { id: "lamp", nome: "Lâmpada do armário", zona: "", roomId: "x", roomName: "Quarto" },
      { id: "arm", nome: "Armário", zona: "", roomId: "x", roomName: "Quarto" },
      { id: "aran", nome: "Arandela", zona: "", roomId: "x", roomName: "Sala" },
      { id: "mesa", nome: "Mesa", zona: "", roomId: "x", roomName: "Cozinha" },
    ];
    assert.deepEqual(names(searchEquips(items, { query: "ár" }).others), ["aran", "arm", "lamp", "sofa"]);
    // the zone or the room only (rank 2) never comes before a name match
    assert.deepEqual(names(searchEquips(ITEMS, { query: "ar" }).others).slice(0, 2), ["ar-sala", "ar-quarto"]);
  });
  it("every word must match (name, zone or room)", () => {
    assert.deepEqual(names(searchEquips(ITEMS, { query: "ar quarto" }).others), ["ar-quarto"]);
    assert.deepEqual(names(searchEquips(ITEMS, { query: "filtro cozinha" }).others), ["filtro"]);
    assert.deepEqual(names(searchEquips(ITEMS, { query: "filtro sala" }).others), []);
  });
  it("with a room: the room's matches first, the ones found elsewhere apart", () => {
    const r = searchEquips(ITEMS, { room: "sala", query: "ar" });
    assert.deepEqual(names(r.inRoom), ["ar-sala"]);
    assert.ok(names(r.others).includes("ar-quarto"));
    assert.ok(!names(r.others).includes("ar-sala"));
    assert.deepEqual(searchEquips(ITEMS, { room: "sala", query: "  " }).others, [], "spaces are no search");
  });
});

describe("equip-picker: renderEquipPicker (with a tiny fake of lit)", () => {
  const nothing = Symbol("nothing");
  const html = (strings, ...values) => ({ strings, values });
  const text = (t) => {
    if (t === nothing || t == null || typeof t === "function" || typeof t === "boolean") return "";
    if (Array.isArray(t)) return t.map(text).join("");
    if (typeof t === "object" && t.strings) return t.strings.reduce((s, part, i) => s + part + (i < t.values.length ? text(t.values[i]) : ""), "");
    return String(t);
  };
  const render = (opts) => text(renderEquipPicker({ lit: { html, nothing }, icon: (n) => `[${n}]`, items: ITEMS, onQuery() {}, onPick() {}, onMore() {}, ...opts })).replace(/\s+/g, " ");

  it("the first search word is marked in the name, accents ignored, original text kept", () => {
    const out = render({ query: "fogao" });
    assert.match(out, /<mark>Fogão<\/mark> Brastemp/);
    assert.doesNotMatch(out, /<mark>[^<]*lenha/, "only names are marked, not the zone");
  });
  it("an emoji or an accent before the match never shifts the mark", () => {
    const items = [{ id: "x", nome: "🔥 Fogão à lenha", zona: "", roomId: "a", roomName: "Área" }];
    assert.match(render({ items, query: "fogao" }), /<b>🔥 <mark>Fogão<\/mark> à lenha<\/b>/);
    assert.match(render({ items, query: "LENHA" }), /<b>🔥 Fogão à <mark>lenha<\/mark><\/b>/);
  });
  it("with a room: its items, then 'Em outros cômodos' with the room names", () => {
    const out = render({ room: "sala", roomName: "Sala", query: "ar" });
    assert.match(out, /Em outros cômodos/);
    assert.match(out, /Split<\/b><small>Quarto<\/small>/);
    assert.match(out, /placeholder=/);
  });
  it("6 at first, then Mostrar mais N", () => {
    const out = render({ query: "a" });
    const total = searchEquips(ITEMS, { query: "a" }).others.length;
    assert.ok(total > 6);
    assert.match(out, new RegExp(`Mostrar mais ${total - 6}`));
    assert.doesNotMatch(render({ query: "a", more: true }), /Mostrar mais/);
  });
  it("hints: choose a room or search; nothing in the room; nothing found", () => {
    assert.match(render({}), /Escolha o cômodo ou busque entre 7 equipamentos\./);
    assert.match(render({ items: [ITEMS[0]], query: "" }).replace(/\s+/g, " "), /entre 1 equipamento\./);
    assert.match(render({ room: "garagem", roomName: "Garagem" }), /Nenhum equipamento em Garagem\./);
    assert.match(render({ query: "piano" }), /Nada com “piano”\./);
  });
  it("a chosen item becomes a card with its zone and room", () => {
    const out = render({ value: "fogao" });
    assert.match(out, /<b>Fogão Brastemp<\/b><small>Bancada · Cozinha<\/small>/);
    assert.match(out, /Tirar o equipamento/);
    assert.match(render({ value: "geladeira", items: [{ ...ITEMS[1], roomName: "" }] }), /Sem cômodo/);
  });
});

// ------------------------------------------------------------------ voice.js

describe("voice (frontend): Recorder.stop gives Int16 PCM at 16 kHz", () => {
  const rec = (rate, chunks) => {
    const r = new Recorder(() => {});
    r.rate = rate;
    r.chunks = chunks.map((c) => Float32Array.from(c));
    r.length = chunks.reduce((n, c) => n + c.length, 0);
    return r;
  };
  it("at 16 kHz: sample by sample, clipped to the Int16 range", () => {
    const out = rec(16000, [
      [0, 0.5, -0.5],
      [1, -1, 2, -3],
    ]).stop();
    assert.ok(out instanceof Int16Array);
    assert.deepEqual([...out], [0, 16383, -16384, 32767, -32768, 32767, -32768]);
  });
  it("at 48 kHz: one sample per 3, the average of each window", () => {
    const r = rec(48000, [Array.from({ length: 4800 }, (_, i) => (i % 3 === 0 ? 0.9 : 0.3))]);
    assert.equal(r.seconds(), 0.1);
    const out = r.stop();
    assert.equal(out.length, 1600);
    assert.ok(out.every((v) => v === Math.trunc(0.5 * 0x7fff)));
    assert.deepEqual(r.chunks, [], "the audio is released");
  });
  it("at 44.1 kHz: the length follows the ratio", () => {
    const out = rec(44100, [new Array(44100).fill(0.25)]).stop();
    assert.equal(out.length, 16000);
    assert.ok(out.every((v) => Math.abs(v - 0.25 * 0x7fff) <= 1));
  });
  it("cancel drops everything; stop and cancel close the stream and the audio context", () => {
    const r = rec(16000, [[0.1, 0.2]]);
    let stopped = 0;
    let closed = 0;
    let disconnected = 0;
    r.stream = { getTracks: () => [{ stop: () => stopped++ }, { stop: () => stopped++ }] };
    r.ctx = { state: "running", close: async () => closed++ };
    r.src = { disconnect: () => disconnected++ };
    r.node = { onaudioprocess: () => {}, disconnect: () => disconnected++ };
    r.cancel();
    assert.equal(r.length, 0);
    assert.deepEqual(r.chunks, []);
    assert.deepEqual([stopped, closed, disconnected], [2, 1, 2]);
    assert.equal(r.stream, null);
    assert.equal(r.node, null);
  });
  it("start without a microphone API fails with NoApi", async () => {
    await assert.rejects(new Recorder().start(), { name: "NoApi" });
  });
  it("constants", () => {
    assert.equal(VOICE_RATE, 16000);
    assert.equal(VOICE_MAX_S, 120);
  });
});

describe("voice (frontend): Recorder.start with a fake microphone", () => {
  let nav;
  const useNavigator = (v) => {
    nav = Object.getOwnPropertyDescriptor(globalThis, "navigator");
    Object.defineProperty(globalThis, "navigator", { value: v, configurable: true });
  };
  afterEach(() => {
    if (nav) Object.defineProperty(globalThis, "navigator", nav);
    nav = null;
  });
  /** A fake AudioContext; `refuseRate`: like browsers that only record at their own rate. */
  const fakeAudio = ({ refuseRate = false, state = "running" } = {}) => {
    const made = [];
    class AC {
      constructor(opts) {
        if (opts && refuseRate) throw new Error("NotSupportedError");
        this.sampleRate = opts ? opts.sampleRate : 48000;
        this.state = state;
        this.destination = { dest: true };
        this.closed = 0;
        made.push(this);
      }
      resume() {
        this.state = "running";
        return Promise.resolve();
      }
      close() {
        this.closed++;
        this.state = "closed";
        return Promise.resolve();
      }
      createMediaStreamSource(stream) {
        this.src = { stream, to: null, connect: (n) => (this.src.to = n), disconnect: () => (this.src.to = null) };
        return this.src;
      }
      createScriptProcessor(size, ins, outs) {
        this.node = { size, ins, outs, to: null, connect: (d) => (this.node.to = d), disconnect: () => (this.node.to = null) };
        return this.node;
      }
    }
    return { AC, made };
  };
  const mic = () => {
    const asked = [];
    const tracks = [
      {
        stopped: 0,
        stop() {
          this.stopped++;
        },
      },
    ];
    return { asked, tracks, mediaDevices: { getUserMedia: async (c) => (asked.push(c), { getTracks: () => tracks }) } };
  };
  it("asks for one channel with echo and noise cancelling, records at 16 kHz and reports the level", async () => {
    const m = mic();
    useNavigator({ mediaDevices: m.mediaDevices });
    const { AC, made } = fakeAudio({ state: "suspended" });
    globalThis.window = { AudioContext: AC };
    const levels = [];
    const r = new Recorder((l) => levels.push(l));
    await r.start();
    assert.deepEqual(m.asked, [{ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true } }]);
    const ctx = made[0];
    assert.equal(ctx.state, "running", "a suspended context is resumed");
    assert.equal(r.rate, VOICE_RATE);
    assert.deepEqual([ctx.node.size, ctx.node.ins, ctx.node.outs], [4096, 1, 1]);
    assert.equal(ctx.src.to, ctx.node, "the microphone goes to the processor");
    assert.equal(ctx.node.to, ctx.destination, "which keeps running into the (silent) output");
    ctx.node.onaudioprocess({ inputBuffer: { getChannelData: () => Float32Array.from([0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]) } });
    ctx.node.onaudioprocess({ inputBuffer: { getChannelData: () => Float32Array.from([0.5, 0, 0, 0]) } });
    assert.equal(r.length, 12);
    assert.equal(r.chunks.length, 2);
    assert.ok(Math.abs(levels[0] - 0.5) < 1e-6, `level ${levels[0]}`);
    assert.equal(levels[1], 1, "the level stays within 0..1");
    const pcm = r.stop();
    assert.equal(pcm.length, 12);
    assert.equal(m.tracks[0].stopped, 1, "the microphone is released");
    assert.equal(ctx.closed, 1);
    assert.equal(r.node, null);
  });
  it("a browser that only records at its own rate (webkit prefix too): its rate, resampled at the end", async () => {
    useNavigator({ mediaDevices: mic().mediaDevices });
    const { AC, made } = fakeAudio({ refuseRate: true });
    globalThis.window = { webkitAudioContext: AC };
    const r = new Recorder(null);
    await r.start();
    assert.equal(made.length, 1);
    assert.equal(r.rate, 48000);
    made[0].node.onaudioprocess({ inputBuffer: { getChannelData: () => new Float32Array(4800).fill(0.25) } });
    assert.equal(r.seconds(), 0.1);
    assert.equal(r.stop().length, 1600);
  });
  it("closing never throws, even when the audio graph is already gone", () => {
    const r = new Recorder();
    let stopped = 0;
    r.stream = { getTracks: () => [{ stop: () => stopped++ }] };
    r.src = {
      disconnect: () => {
        throw new Error("InvalidAccessError");
      },
    };
    r.node = { onaudioprocess: () => {}, disconnect: () => {} };
    r.ctx = { state: "closed", close: () => assert.fail("not closed twice") };
    r.cancel();
    assert.equal(stopped, 1);
    assert.equal(r.src, null);
  });
});

describe("voice (frontend): micError", () => {
  it("explains each failure", () => {
    assert.match(micError({ name: "NotAllowedError" }), /bloqueado/);
    assert.match(micError({ name: "SecurityError" }), /bloqueado/);
    assert.match(micError({ name: "NotFoundError" }), /Não achei um microfone/);
    assert.match(micError({ name: "OverconstrainedError" }), /Não achei um microfone/);
    assert.match(micError({ name: "NotReadableError" }), /outro app/);
    assert.equal(micError({ name: "AbortError", message: "x" }), "Não consegui abrir o microfone (x).");
    assert.equal(micError(null), "Não consegui abrir o microfone (erro).");
  });
  it("no API: https is needed on an insecure page", () => {
    globalThis.window = { isSecureContext: false };
    assert.match(micError({ name: "NoApi" }), /endereço seguro \(https\)/);
    globalThis.window = { isSecureContext: true };
    assert.equal(micError({ name: "NoApi" }), "Este navegador não deixa usar o microfone aqui.");
  });
});
