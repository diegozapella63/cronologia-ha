// ws.js (the app's own WebSocket server, frame by frame over a fake socket) and
// ha.js (the client of Home Assistant's websocket API, with a fake connection).
import { makeLog, flushPromises } from "./helpers.mjs";
import { describe, it, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { EventEmitter } from "node:events";
import { acceptUpgrade, WsConnection } from "../cronologia/rootfs/app/lib/ws.js";
import { HAClient } from "../cronologia/rootfs/app/lib/ha.js";

afterEach(() => mock.timers.reset());

// ------------------------------------------------------------------ ws.js

function fakeSocket() {
  const s = new EventEmitter();
  s.written = [];
  s.ended = [];
  s.destroyed = false;
  s.setNoDelay = () => {};
  s.setKeepAlive = () => {};
  s.write = (b) => s.written.push(Buffer.isBuffer(b) ? b : Buffer.from(b));
  s.end = (b) => {
    if (b) s.ended.push(String(b));
    s.destroyed = true;
  };
  return s;
}
/** A client frame (always masked). */
function frame(opcode, payload, { fin = true, mask = true } = {}) {
  const data = Buffer.from(payload);
  const len = data.length;
  const head = len < 126 ? Buffer.from([(fin ? 0x80 : 0) | opcode, (mask ? 0x80 : 0) | len]) : len < 65536 ? Buffer.from([(fin ? 0x80 : 0) | opcode, (mask ? 0x80 : 0) | 126, len >> 8, len & 255]) : null;
  let full = head;
  if (!head) {
    full = Buffer.alloc(10);
    full[0] = (fin ? 0x80 : 0) | opcode;
    full[1] = (mask ? 0x80 : 0) | 127;
    full.writeBigUInt64BE(BigInt(len), 2);
  }
  if (!mask) return Buffer.concat([full, data]);
  const key = Buffer.from([1, 2, 3, 4]);
  const masked = Buffer.from(data.map((b, i) => b ^ key[i & 3]));
  return Buffer.concat([full, key, masked]);
}
/** Server frames written to the socket: [{opcode, payload}]. */
function serverFrames(buf) {
  const out = [];
  let p = 0;
  while (p < buf.length) {
    const opcode = buf[p] & 0x0f;
    let len = buf[p + 1] & 0x7f;
    let off = p + 2;
    assert.equal(buf[p + 1] & 0x80, 0, "server frames are not masked");
    if (len === 126) {
      len = buf.readUInt16BE(p + 2);
      off = p + 4;
    } else if (len === 127) {
      len = Number(buf.readBigUInt64BE(p + 2));
      off = p + 10;
    }
    out.push({ opcode, payload: buf.subarray(off, off + len) });
    p = off + len;
  }
  return out;
}

describe("ws: handshake", () => {
  it("answers 101 with the RFC 6455 accept key", () => {
    mock.timers.enable({ apis: ["setInterval"] });
    const s = fakeSocket();
    const ws = acceptUpgrade({ headers: { "sec-websocket-key": "dGhlIHNhbXBsZSBub25jZQ==", upgrade: "WebSocket", "sec-websocket-version": "13" } }, s, Buffer.alloc(0));
    assert.ok(ws instanceof WsConnection);
    const head = s.written[0].toString();
    assert.match(head, /^HTTP\/1\.1 101 Switching Protocols\r\n/);
    assert.match(head, /Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK\+xOo=\r\n\r\n$/);
    ws.close();
  });
  it("refuses a request that is not a websocket upgrade", () => {
    for (const headers of [{ upgrade: "h2c", "sec-websocket-key": "x", "sec-websocket-version": "13" }, { upgrade: "websocket", "sec-websocket-version": "13" }, { upgrade: "websocket", "sec-websocket-key": "x", "sec-websocket-version": "8" }]) {
      const s = fakeSocket();
      assert.equal(acceptUpgrade({ headers }, s, null), null);
      assert.match(s.ended[0], /^HTTP\/1\.1 400 Bad Request/);
    }
  });
});

describe("ws: frames", () => {
  const open = () => {
    mock.timers.reset();
    mock.timers.enable({ apis: ["setInterval", "setImmediate"] });
    const s = fakeSocket();
    const ws = new WsConnection(s, null);
    const got = [];
    ws.on("message", (m) => got.push(m));
    return { s, ws, got };
  };
  it("a masked text frame is a message (UTF-8)", () => {
    const { s, got, ws } = open();
    s.emit("data", frame(1, '{"id":1,"type":"ping","x":"ção"}'));
    assert.deepEqual(got, ['{"id":1,"type":"ping","x":"ção"}']);
    ws.close();
  });
  it("frames split across chunks and several frames in one chunk", () => {
    const { s, got, ws } = open();
    const a = frame(1, "primeira");
    const b = frame(1, "segunda");
    const all = Buffer.concat([a, b]);
    s.emit("data", all.subarray(0, 3));
    s.emit("data", all.subarray(3, a.length + 4));
    assert.deepEqual(got, ["primeira"]);
    s.emit("data", all.subarray(a.length + 4));
    assert.deepEqual(got, ["primeira", "segunda"]);
    ws.close();
  });
  it("16-bit and 64-bit lengths", () => {
    const { s, got, ws } = open();
    s.emit("data", frame(1, "x".repeat(300)));
    s.emit("data", frame(1, "y".repeat(70000)));
    assert.deepEqual(
      got.map((m) => m.length),
      [300, 70000],
    );
    ws.close();
  });
  it("fragmented messages are joined", () => {
    const { s, got, ws } = open();
    s.emit("data", frame(1, "olá, ", { fin: false }));
    s.emit("data", frame(0, "mun", { fin: false }));
    assert.deepEqual(got, []);
    s.emit("data", frame(0, "do"));
    assert.deepEqual(got, ["olá, mundo"]);
    ws.close();
  });
  it("the head bytes given with the upgrade are read too", () => {
    mock.timers.enable({ apis: ["setInterval", "setImmediate"] });
    const s = fakeSocket();
    const ws = new WsConnection(s, frame(1, "cedo"));
    const got = [];
    ws.on("message", (m) => got.push(m));
    mock.timers.runAll();
    assert.deepEqual(got, ["cedo"]);
    ws.close();
  });
  it("ping gets a pong with the same data; pong is ignored", () => {
    const { s, ws } = open();
    s.emit("data", frame(9, "hb"));
    s.emit("data", frame(10, "x"));
    const f = serverFrames(Buffer.concat(s.written));
    assert.deepEqual(
      f.map((x) => [x.opcode, x.payload.toString()]),
      [[10, "hb"]],
    );
    ws.close();
  });
  it("an unmasked frame closes with 1002; a close frame is echoed and the connection ends", () => {
    const a = open();
    let closed = 0;
    a.ws.on("close", () => closed++);
    a.s.emit("data", frame(1, "x", { mask: false }));
    const f = serverFrames(Buffer.concat(a.s.written));
    assert.equal(f[0].opcode, 8);
    assert.equal(f[0].payload.readUInt16BE(0), 1002);
    assert.equal(a.ws.closed, true);
    assert.equal(closed, 1);
    const b = open();
    const code = Buffer.alloc(2);
    code.writeUInt16BE(1000);
    b.s.emit("data", frame(8, code));
    const g = serverFrames(Buffer.concat(b.s.written));
    assert.deepEqual([g[0].opcode, g[0].payload.readUInt16BE(0)], [8, 1000]);
    assert.equal(b.s.destroyed, true);
    assert.equal(b.ws.closed, true);
  });
  it("data that arrives after the close is discarded (RFC 6455 §1.4)", () => {
    const b = open();
    const code = Buffer.alloc(2);
    code.writeUInt16BE(1000);
    b.s.emit("data", frame(8, code));
    b.s.emit("data", frame(1, '{"id":9,"type":"cronologia/check/set"}'));
    assert.deepEqual(b.got, []);
  });
  it("too big a message closes with 1009", () => {
    const { s, ws } = open();
    const head = Buffer.alloc(14);
    head[0] = 0x81;
    head[1] = 0x80 | 127;
    head.writeBigUInt64BE(BigInt(5 * 1024 * 1024), 2);
    s.emit("data", head);
    const f = serverFrames(Buffer.concat(s.written));
    assert.equal(f[0].payload.readUInt16BE(0), 1009);
    assert.equal(ws.closed, true);
  });
  it("send() writes text frames of every size; nothing after close", () => {
    const { s, ws } = open();
    ws.send("oi");
    ws.send("z".repeat(200));
    ws.send("w".repeat(70000));
    const f = serverFrames(Buffer.concat(s.written));
    assert.deepEqual(
      f.map((x) => [x.opcode, x.payload.length]),
      [
        [1, 2],
        [1, 200],
        [1, 70000],
      ],
    );
    ws.close();
    const n = s.written.length;
    ws.send("depois");
    assert.equal(s.written.length, n);
  });
  it("a ping every 25 s keeps proxies from dropping the connection; stops when closed", () => {
    const { s, ws } = open();
    mock.timers.tick(25000);
    mock.timers.tick(25000);
    assert.deepEqual(
      serverFrames(Buffer.concat(s.written)).map((x) => x.opcode),
      [9, 9],
    );
    s.emit("close");
    mock.timers.tick(100000);
    assert.equal(serverFrames(Buffer.concat(s.written)).length, 2);
    assert.equal(ws.closed, true);
  });
});

// ------------------------------------------------------------------ ha.js

function client() {
  // the 30 s answer timeouts of unanswered messages must not keep the test process alive
  mock.timers.reset();
  mock.timers.enable({ apis: ["setTimeout"] });
  const c = new HAClient("ws://ha/api/websocket", "tok", makeLog());
  c.out = [];
  c.ws = { send: (t) => c.out.push(JSON.parse(t)), close: () => c._onClose() };
  c._scheduleReconnect = () => (c.reconnects = (c.reconnects || 0) + 1);
  return c;
}
const authed = () => {
  const c = client();
  c._onMessage({ type: "auth_required" });
  c._onMessage({ type: "auth_ok", ha_version: "2026.10.2" });
  return c;
};

describe("ha: HAClient", () => {
  it("authenticates with the token and becomes ready (waiters and 'ready' listeners)", async () => {
    const c = client();
    let ready = 0;
    c.on("ready", () => ready++);
    const waiting = c.whenReady();
    c._onMessage({ type: "auth_required" });
    assert.deepEqual(c.out, [{ type: "auth", access_token: "tok" }]);
    c._onMessage({ type: "auth_ok", ha_version: "2026.10.2" });
    await waiting;
    assert.equal(c.ready, true);
    assert.equal(ready, 1);
    assert.match(c.log.lines[0][1], /2026\.10\.2/);
  });
  it("auth_invalid logs and closes", () => {
    const c = client();
    c._onMessage({ type: "auth_invalid", message: "bad token" });
    assert.equal(c.log.lines[0][0], "error");
    assert.equal(c.reconnects, 1);
  });
  it("send: ids grow; results resolve, errors reject with the code", async () => {
    const c = authed();
    const a = c.send({ type: "get_states" });
    const b = c.send({ type: "call_service", domain: "x" });
    await flushPromises();
    assert.deepEqual(
      c.out.slice(1).map((m) => [m.id, m.type]),
      [
        [1, "get_states"],
        [2, "call_service"],
      ],
    );
    c._onMessage({ id: 1, type: "result", success: true, result: [{ entity_id: "a" }] });
    c._onMessage({ id: 2, type: "result", success: false, error: { code: "not_found", message: "Service not found" } });
    assert.deepEqual(await a, [{ entity_id: "a" }]);
    await assert.rejects(b, { code: "not_found", message: "Service not found" });
    c._onMessage({ id: 99, type: "result", success: true });
  });
  it("send waits for the connection; sendNow fails right away when disconnected", async () => {
    const c = client();
    await assert.rejects(c.sendNow({ type: "ping" }), { code: "disconnected" });
    const p = c.send({ type: "get_config" });
    await flushPromises();
    assert.equal(c.out.length, 0);
    c._onMessage({ type: "auth_ok" });
    await flushPromises();
    assert.equal(c.out[0].type, "get_config");
    c._onMessage({ id: c.out[0].id, type: "result", success: true, result: { ok: 1 } });
    assert.deepEqual(await p, { ok: 1 });
  });
  it("an answer that never comes times out", async () => {
    const c = authed();
    const p = c.sendNow({ type: "slow" }, 5000);
    mock.timers.tick(5000);
    await assert.rejects(p, { code: "timeout" });
    assert.equal(c.pending.size, 0);
  });
  it("losing the connection rejects what was pending and retries", async () => {
    const c = authed();
    let lost = 0;
    c.on("disconnected", () => lost++);
    const p = c.sendNow({ type: "x" });
    c._onClose();
    await assert.rejects(p, { code: "disconnected" });
    assert.equal(c.ready, false);
    assert.equal(lost, 1);
    assert.equal(c.reconnects, 1);
  });
  it("subscriptions: events reach the callback, survive a reconnect, unsubscribe tells HA", async () => {
    const c = authed();
    const got = [];
    const sub = c.subscribe({ type: "subscribe_events", event_type: "cronologia_feito" }, (ev) => got.push(ev));
    const first = c.out.at(-1);
    assert.equal(first.type, "subscribe_events");
    c._onMessage({ id: first.id, type: "result", success: true });
    await sub.ready;
    c._onMessage({ id: first.id, type: "event", event: { data: { nome: "Filtro" } } });
    assert.deepEqual(got, [{ data: { nome: "Filtro" } }]);
    // reconnect: subscribed again with a new id
    c._onClose();
    c.ws = { send: (t) => c.out.push(JSON.parse(t)), close: () => c._onClose() };
    c._onMessage({ type: "auth_ok" });
    const again = c.out.at(-1);
    assert.equal(again.type, "subscribe_events");
    assert.notEqual(again.id, first.id);
    c._onMessage({ id: first.id, type: "event", event: { old: true } });
    c._onMessage({ id: again.id, type: "event", event: { data: { nome: "Lixo" } } });
    assert.deepEqual(got.at(-1), { data: { nome: "Lixo" } });
    assert.equal(got.length, 2);
    sub.unsubscribe();
    assert.deepEqual(c.out.at(-1), { type: "unsubscribe_events", subscription: again.id, id: c.out.at(-1).id });
    c._onMessage({ id: again.id, type: "event", event: { late: true } });
    assert.equal(got.length, 2);
    sub.unsubscribe();
  });
  it("a refused subscription calls onError and is not retried", async () => {
    const c = authed();
    let error = null;
    const sub = c.subscribe({ type: "calendar/event/subscribe", entity_id: "calendar.x" }, () => {}, (e) => (error = e));
    const msg = c.out.at(-1);
    c._onMessage({ id: msg.id, type: "result", success: false, error: { code: "unknown_command", message: "Unknown command." } });
    await assert.rejects(sub.ready, { code: "unknown_command" });
    assert.equal(error.code, "unknown_command");
    c._onClose();
    c.ws = { send: (t) => c.out.push(JSON.parse(t)), close: () => c._onClose() };
    const n = c.out.length;
    c._onMessage({ type: "auth_ok" });
    assert.equal(c.out.length, n, "not subscribed again");
  });
  it("a subscription made before the connection starts when it is ready", () => {
    const c = client();
    c.subscribe({ type: "subscribe_events" }, () => {});
    assert.equal(c.out.length, 0);
    c._onMessage({ type: "auth_ok" });
    assert.equal(c.out[0].type, "subscribe_events");
  });
  it("start() needs a global WebSocket (Node 22)", () => {
    assert.equal(typeof WebSocket, "function");
  });
  it("the accept key helper of the tests matches node's crypto", () => {
    assert.equal(crypto.createHash("sha1").update("dGhlIHNhbXBsZSBub25jZQ==258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64"), "s3pPLMBiTxaQ9kYGzzhZRbK+xOo=");
  });
});
