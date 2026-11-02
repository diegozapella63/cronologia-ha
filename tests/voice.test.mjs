// lib/voice.js (Falar): the speech-to-text engines of Home Assistant, the
// language asked of each, and the request itself (header spelling matters).
import { makeLog, flushPromises } from "./helpers.mjs";
import { describe, it, mock, afterEach, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { EventEmitter } from "node:events";
import { Voice, readRaw, VOICE_RATE, MAX_VOICE_BYTES } from "../cronologia/rootfs/app/lib/voice.js";

afterEach(() => {
  mock.restoreAll();
  mock.timers.reset();
});

const STATES = [
  { entity_id: "stt.home_assistant_cloud", attributes: { friendly_name: "Home Assistant Cloud" } },
  { entity_id: "stt.faster_whisper", attributes: { friendly_name: "faster-whisper" } },
  { entity_id: "stt.faster_whisper", attributes: { friendly_name: "dup" } },
  { entity_id: "light.sala", attributes: {} },
];
const PIPES = {
  pipelines: [
    { id: "p0", name: "Sem fala", language: "pt" },
    { id: "p1", name: "Home Assistant", language: "pt", stt_engine: "stt.home_assistant_cloud", stt_language: "pt-BR" },
    { id: "p2", name: "Local", language: "pt", stt_engine: "whisper_addon" },
  ],
  preferred_pipeline: "p1",
};

function fakeHA({ states = STATES, pipes = PIPES, failPipes = false, failStates = false } = {}) {
  const ha = { sent: [] };
  ha.send = async (msg) => {
    ha.sent.push(msg.type);
    if (msg.type === "assist_pipeline/pipeline/list") {
      if (failPipes) throw new Error("unknown command");
      return pipes;
    }
    if (msg.type === "get_states") {
      if (failStates) throw new Error("timeout");
      return states;
    }
    throw new Error(`unexpected ${msg.type}`);
  };
  return ha;
}
/** fetch for GET /api/stt/<engine>: the languages each engine names. */
function fakeFetch(langs = {}, status = 200) {
  return mock.method(globalThis, "fetch", async (url, opts) => {
    const engine = decodeURIComponent(String(url).split("/stt/")[1]);
    assert.equal(opts.headers.authorization, "Bearer tok");
    if (langs[engine] instanceof Error) throw langs[engine];
    return { ok: status === 200, status, json: async () => ({ languages: langs[engine] || [] }) };
  });
}
const make = (opts = {}, pick = () => "") => new Voice({ ha: fakeHA(opts), rest: "http://ha/api", token: "tok", log: makeLog(), pick });

describe("Voice.options", () => {
  it("lists the stt.* entities and the engines of the voice assistants; auto is the preferred one", async () => {
    const o = await make().options();
    assert.deepEqual(o.list, [
      { id: "stt.home_assistant_cloud", name: "Home Assistant Cloud", language: "pt-BR" },
      { id: "stt.faster_whisper", name: "faster-whisper", language: null },
      { id: "whisper_addon", name: "Local (assistente de voz)", language: "pt" },
    ]);
    assert.deepEqual(o.auto, { engine: "stt.home_assistant_cloud", language: "pt-BR", name: "Home Assistant Cloud" });
  });
  it("without a preferred pipeline the first with an engine is auto (named by the pipeline when the engine has no entity)", async () => {
    const o = await make({ pipes: { pipelines: [PIPES.pipelines[2]], preferred_pipeline: null } }).options();
    assert.deepEqual(o.auto, { engine: "whisper_addon", language: "pt", name: "Local" });
  });
  it("without pipelines (or failing) the first stt entity is auto", async () => {
    const v = make({ failPipes: true });
    const o = await v.options();
    assert.deepEqual(o.auto, { engine: "stt.home_assistant_cloud", language: null, name: "Home Assistant Cloud" });
    assert.equal(v.log.lines[0][0], "warn");
  });
  it("nothing at all: no auto", async () => {
    const o = await make({ states: [], pipes: { pipelines: [] } }).options();
    assert.deepEqual(o, { list: [], auto: null });
    const o2 = await make({ failStates: true, failPipes: true }).options();
    assert.deepEqual(o2, { list: [], auto: null });
  });
  it("is kept a minute; forget() drops it", async () => {
    mock.timers.enable({ apis: ["Date"], now: 1_000_000 });
    const v = make();
    await v.options();
    await v.options();
    assert.equal(v.ha.sent.length, 2);
    mock.timers.tick(60001);
    await v.options();
    assert.equal(v.ha.sent.length, 4);
    v.forget();
    await v.options();
    assert.equal(v.ha.sent.length, 6);
  });
});

describe("Voice.languageFor", () => {
  it("Portuguese as the engine names it: pt-BR, else pt, else pt-*; cached", async () => {
    const f = fakeFetch({ a: ["en-US", "pt-PT", "pt_BR"], b: ["en", "es", "pt"], c: ["en", "pt-PT"], d: ["en", "es"] });
    const v = make();
    assert.equal(await v.languageFor("a"), "pt_BR");
    assert.equal(await v.languageFor("b"), "pt");
    assert.equal(await v.languageFor("c"), "pt-PT");
    assert.equal(await v.languageFor("d"), "pt-BR", "no Portuguese listed: ask for pt-BR");
    assert.equal(await v.languageFor("a"), "pt_BR");
    assert.equal(f.mock.callCount(), 4);
  });
  it("an error answer or a failure gives pt-BR and is not cached", async () => {
    const f = fakeFetch({}, 500);
    const v = make();
    assert.equal(await v.languageFor("x"), "pt-BR");
    await v.languageFor("x");
    assert.equal(f.mock.callCount(), 2);
    mock.restoreAll();
    fakeFetch({ y: new Error("offline") });
    assert.equal(await v.languageFor("y"), "pt-BR");
    assert.equal(v.log.lines.at(-1)[0], "warn");
  });
  it("the engine id is encoded in the URL", async () => {
    const f = fakeFetch({});
    await make().languageFor("stt.a b");
    assert.equal(f.mock.calls[0].arguments[0], "http://ha/api/stt/stt.a%20b");
  });
});

describe("Voice.engine / status", () => {
  it("automatic: the voice assistant's engine and language", async () => {
    fakeFetch({});
    const v = make();
    assert.deepEqual(await v.engine(), { engine: "stt.home_assistant_cloud", language: "pt-BR", name: "Home Assistant Cloud", chosen: false });
    const st = await v.status();
    assert.deepEqual(st, {
      ready: true,
      engine: "stt.home_assistant_cloud",
      language: "pt-BR",
      name: "Home Assistant Cloud",
      chosen: false,
      selected: "",
      missing: false,
      options: [
        { id: "stt.home_assistant_cloud", name: "Home Assistant Cloud" },
        { id: "stt.faster_whisper", name: "faster-whisper" },
        { id: "whisper_addon", name: "Local (assistente de voz)" },
      ],
      auto: { engine: "stt.home_assistant_cloud", name: "Home Assistant Cloud" },
    });
  });
  it("chosen in the app: that engine, with the language it names", async () => {
    fakeFetch({ "stt.faster_whisper": ["en", "es", "pt"] });
    const v = make({}, () => "stt.faster_whisper");
    assert.deepEqual(await v.engine(), { engine: "stt.faster_whisper", language: "pt", name: "faster-whisper", chosen: true });
    const st = await v.status();
    assert.equal(st.selected, "stt.faster_whisper");
    assert.equal(st.missing, false);
    assert.equal(st.chosen, true);
  });
  it("a chosen engine that is gone: missing, and the automatic one is used", async () => {
    fakeFetch({});
    const st = await make({}, () => "stt.removido").status();
    assert.equal(st.missing, true);
    assert.equal(st.engine, "stt.home_assistant_cloud");
    assert.equal(st.chosen, false);
  });
  it("auto without a language asks the engine", async () => {
    const f = fakeFetch({ "stt.home_assistant_cloud": ["pt-BR"] });
    const v = make({ failPipes: true });
    assert.equal((await v.engine()).language, "pt-BR");
    assert.equal(f.mock.callCount(), 1);
  });
  it("no engine: not ready, with the reason", async () => {
    const st = await make({ states: [], pipes: { pipelines: [] } }).status();
    assert.equal(st.ready, false);
    assert.match(st.reason, /assistente de voz/);
    assert.deepEqual(st.options, []);
    assert.equal(st.auto, null);
  });
  it("the engine is kept a minute for the same choice; a new choice looks again", async () => {
    mock.timers.enable({ apis: ["Date"], now: 1_000_000 });
    fakeFetch({});
    let want = "";
    const v = make({}, () => want);
    const a = await v.engine();
    want = "stt.faster_whisper";
    const b = await v.engine();
    assert.notDeepEqual(a, b);
    assert.equal(b.engine, "stt.faster_whisper");
  });
});

describe("Voice.text", () => {
  let server;
  let base;
  let last;
  let reply;
  before(async () => {
    server = http.createServer((req, res) => {
      const chunks = [];
      req.on("data", (c) => chunks.push(c));
      req.on("end", () => {
        last = { method: req.method, url: req.url, rawHeaders: req.rawHeaders, bytes: Buffer.concat(chunks).length };
        res.writeHead(reply.status, { "content-type": "application/json" }).end(reply.body);
      });
    });
    await new Promise((r) => server.listen(0, "127.0.0.1", r));
    base = `http://127.0.0.1:${server.address().port}/api`;
  });
  after(() => server.close());
  const voice = (ha = fakeHA()) => {
    const v = new Voice({ ha, rest: base, token: "tok", log: makeLog() });
    v.languageFor = async () => "pt-BR";
    return v;
  };
  const pcm = (seconds) => Buffer.alloc(Math.round(VOICE_RATE * 2 * seconds));
  const code = async (p) => {
    try {
      await p;
    } catch (e) {
      return e.code;
    }
    return null;
  };

  it("posts the PCM with X-Speech-Content spelled exactly so (the Supervisor proxy needs it)", async () => {
    reply = { status: 200, body: JSON.stringify({ text: "  Dentista quinta às 15h ", result: "success" }) };
    const out = await voice().text(pcm(1));
    assert.deepEqual(out, { text: "Dentista quinta às 15h", engine: "stt.home_assistant_cloud", name: "Home Assistant Cloud" });
    assert.equal(last.method, "POST");
    assert.equal(last.url, "/api/stt/stt.home_assistant_cloud");
    assert.equal(last.bytes, 32000);
    const i = last.rawHeaders.indexOf("X-Speech-Content");
    assert.ok(i >= 0, `header names sent: ${last.rawHeaders.filter((_, k) => k % 2 === 0).join(", ")}`);
    assert.equal(last.rawHeaders[i + 1], "format=wav; codec=pcm; sample_rate=16000; bit_rate=16; channel=1; language=pt-BR");
    assert.equal(last.rawHeaders[last.rawHeaders.indexOf("Authorization") + 1], "Bearer tok");
  });
  it("too short or too long audio is refused before sending", async () => {
    const v = voice();
    last = null;
    assert.equal(await code(v.text(pcm(0.3))), "invalid_format");
    assert.equal(await code(v.text(null)), "invalid_format");
    assert.equal(await code(v.text(Buffer.alloc(MAX_VOICE_BYTES + 1))), "invalid_format");
    assert.equal(last, null);
  });
  it("not understood, a refused format and a failure have their own codes", async () => {
    reply = { status: 200, body: JSON.stringify({ text: null, result: "error" }) };
    assert.equal(await code(voice().text(pcm(1))), "not_understood");
    reply = { status: 200, body: "not json" };
    assert.equal(await code(voice().text(pcm(1))), "not_understood");
    reply = { status: 415, body: "Unsupported" };
    const v = voice();
    let err;
    try {
      await v.text(pcm(1));
    } catch (e) {
      err = e;
    }
    assert.equal(err.code, "failed");
    assert.match(err.message, /não aceitou o áudio \(Unsupported\)/);
    assert.equal(v.optCache, null, "a failure forgets the engine (it may have changed)");
    reply = { status: 500, body: "" };
    assert.match((await voice().text(pcm(1)).catch((e) => e)).message, /falhou \(500\)/);
  });
  it("no engine: no_stt with the reason", async () => {
    const v = voice(fakeHA({ states: [], pipes: { pipelines: [] } }));
    const e = await v.text(pcm(1)).catch((x) => x);
    assert.equal(e.code, "no_stt");
    assert.match(e.message, /assistente de voz/);
  });
});

describe("readRaw", () => {
  const req = () => {
    const r = new EventEmitter();
    r.destroyed = false;
    r.destroy = () => (r.destroyed = true);
    return r;
  };
  it("joins the chunks", async () => {
    const r = req();
    const p = readRaw(r, 10);
    r.emit("data", Buffer.from("abc"));
    r.emit("data", Buffer.from("def"));
    r.emit("end");
    assert.equal((await p).toString(), "abcdef");
  });
  it("too big: reads to the end (so the 413 reaches the browser) and rejects with too_big", async () => {
    const r = req();
    const p = readRaw(r, 4);
    r.emit("data", Buffer.from("abc"));
    r.emit("data", Buffer.from("def"));
    assert.equal(r.destroyed, false, "not cut in the middle of the upload");
    r.emit("end");
    const e = await p.catch((x) => x);
    assert.equal(e.code, "too_big");
  });
  it("far too big (over 4 times the limit): the request is closed", async () => {
    const r = req();
    const p = readRaw(r, 4).catch((x) => x);
    r.emit("data", Buffer.alloc(10));
    assert.equal(r.destroyed, false);
    r.emit("data", Buffer.alloc(10));
    assert.equal(r.destroyed, true);
    r.emit("end");
    assert.equal((await p).code, "too_big");
  });
  it("an error of the request rejects", async () => {
    const r = req();
    const p = readRaw(r, 4);
    r.emit("error", new Error("reset"));
    assert.equal((await p.catch((x) => x)).message, "reset");
    await flushPromises();
  });
});
