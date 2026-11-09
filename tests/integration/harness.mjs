// Starts the repo's fake Home Assistant (dev/fake-ha.mjs) and the CronologIA server
// (cronologia/rootfs/app/server.js) as child processes on free ports, with temp
// data/media/share folders, and drives the server over its WebSocket API.
// Not a test file itself: each *.test.mjs starts its own stack and stops it in after().
process.env.TZ = "America/Sao_Paulo";

import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const pad = (n) => String(n).padStart(2, "0");
export const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
/** Local day `n` days from today, as YYYY-MM-DD (the fake calendars are relative to today too). */
export const day = (n = 0) => {
  const d = new Date();
  return ymd(new Date(d.getFullYear(), d.getMonth(), d.getDate() + n));
};
export const isoAt = (n, h, m = 0) => {
  const t = new Date();
  const d = new Date(t.getFullYear(), t.getMonth(), t.getDate() + n, h, m);
  const off = -d.getTimezoneOffset();
  return `${ymd(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}:00${off >= 0 ? "+" : "-"}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
};
export const hashOf = (key) => crypto.createHash("sha1").update(key).digest("hex").slice(0, 10);

export const freePort = () =>
  new Promise((resolve, reject) => {
    const s = net.createServer();
    s.unref();
    s.on("error", reject);
    s.listen(0, "127.0.0.1", () => {
      const { port } = s.address();
      s.close(() => resolve(port));
    });
  });

/** Polls `fn` until it returns something truthy (or throws after `timeout` ms). */
export async function waitFor(fn, { timeout = 8000, every = 40, what = "condition" } = {}) {
  const end = Date.now() + timeout;
  let last;
  for (;;) {
    try {
      last = await fn();
      if (last) return last;
    } catch (err) {
      last = err;
    }
    if (Date.now() > end) throw new Error(`Timed out waiting for ${what}${last instanceof Error ? `: ${last.message}` : ""}`);
    await new Promise((r) => setTimeout(r, every));
  }
}

function launch(name, file, env) {
  const child = spawn(process.execPath, [file], { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"] });
  child.lines = [];
  const take = (buf) => {
    for (const line of String(buf).split("\n")) if (line.trim()) child.lines.push(line);
  };
  child.stdout.on("data", take);
  child.stderr.on("data", take);
  child.exited = new Promise((r) => child.on("exit", r));
  child.label = name;
  return child;
}

/** A WebSocket client of the server's API ({id, type} -> result / event). */
export class Client {
  constructor(url) {
    this.url = url;
    this.nextId = 1;
    this.pending = new Map();
    this.handlers = new Map();
  }
  open() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.url);
      this.ws.onopen = () => resolve(this);
      this.ws.onerror = (e) => reject(new Error(`WebSocket error: ${e.message || "connection failed"}`));
      this.ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data);
        if (msg.type === "event") {
          const h = this.handlers.get(msg.id);
          if (h) h(msg.event);
          return;
        }
        const p = this.pending.get(msg.id);
        if (!p) return;
        this.pending.delete(msg.id);
        if (msg.type === "pong") p.resolve("pong");
        else if (msg.success) p.resolve(msg.result);
        else p.reject(Object.assign(new Error(msg.error.message), { code: msg.error.code }));
      };
    });
  }
  /** Sends a command and waits for its result (rejects with {code, message} on an error). */
  call(type, payload = {}, { timeout = 15000 } = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`No answer to ${type}`));
      }, timeout);
      this.pending.set(id, {
        resolve: (v) => (clearTimeout(t), resolve(v)),
        reject: (e) => (clearTimeout(t), reject(e)),
      });
      this.ws.send(JSON.stringify({ id, type, ...payload }));
    });
  }
  /** A subscription: every event goes to onEvent; resolves with its id. */
  async subscribe(type, payload, onEvent) {
    const id = this.nextId;
    this.handlers.set(id, onEvent);
    await this.call(type, payload);
    return id;
  }
  close() {
    try {
      this.ws.close();
    } catch (e) {
      /* already closed */
    }
  }
}

/**
 * The fake HA and the server, ready (connected, calendars found).
 * `share` can pre-write files of the share folder ({"resolvia/integracao.json": {...}}).
 * `ready`: the line of the server's log that says it is up (the calendars were read).
 */
export async function startStack({ env = {}, fakeEnv = {}, share = {}, data = null, ready = /calendários encontrados/ } = {}) {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), "cronologia-it-"));
  const dirs = { base, data: path.join(base, "data"), media: path.join(base, "media"), share: path.join(base, "share") };
  for (const d of [dirs.data, dirs.media, dirs.share]) fs.mkdirSync(d, { recursive: true });
  for (const [rel, content] of Object.entries(share)) {
    fs.mkdirSync(path.dirname(path.join(dirs.share, rel)), { recursive: true });
    fs.writeFileSync(path.join(dirs.share, rel), typeof content === "string" ? content : JSON.stringify(content));
  }
  if (data) fs.writeFileSync(path.join(dirs.data, "cronologia.json"), JSON.stringify(data));
  const haPort = await freePort();
  const appPort = await freePort();
  const clean = { ...process.env };
  for (const k of ["SUPERVISOR_TOKEN", "HA_TOKEN", "NODE_TEST_CONTEXT", "NODE_OPTIONS"]) delete clean[k];
  const fake = launch("fake-ha", path.join(ROOT, "dev", "fake-ha.mjs"), { ...clean, TZ: "America/Sao_Paulo", FAKE_HA_PORT: String(haPort), FAKE_MEDIA_DIR: dirs.media, ...fakeEnv });
  const stack = { dirs, haPort, appPort, fake, app: null, clients: [] };
  stack.stop = async () => {
    for (const c of stack.clients) c.close();
    for (const p of [stack.app, fake]) if (p && p.exitCode == null) p.kill(p === stack.app ? "SIGTERM" : "SIGKILL");
    await Promise.race([Promise.all([stack.app && stack.app.exited, fake.exited]), new Promise((r) => setTimeout(r, 3000))]);
    for (const p of [stack.app, fake]) if (p && p.exitCode == null) p.kill("SIGKILL");
    fs.rmSync(base, { recursive: true, force: true });
  };
  stack.logs = () => [...fake.lines.map((l) => `[ha] ${l}`), ...(stack.app ? stack.app.lines.map((l) => `[app] ${l}`) : [])].join("\n");
  try {
    await waitFor(() => fake.lines.some((l) => l.includes("fake Home Assistant on")) || (fake.exitCode != null && Promise.reject(new Error("fake HA exited"))), { what: "the fake Home Assistant" });
    stack.app = launch("app", path.join(ROOT, "cronologia", "rootfs", "app", "server.js"), {
      ...clean,
      TZ: "America/Sao_Paulo",
      PORT: String(appPort),
      CRONOLOGIA_DEV: "1",
      CRONOLOGIA_DEV_INTEGRATIONS: "1",
      CRONOLOGIA_DEV_USER_ID: "u-davi",
      CRONOLOGIA_DEV_USER_NAME: "Davi",
      HA_WS_URL: `ws://127.0.0.1:${haPort}/api/websocket`,
      HA_REST_URL: `http://127.0.0.1:${haPort}/api`,
      HA_TOKEN: "dev",
      DATA_DIR: dirs.data,
      MEDIA_DIR: dirs.media,
      SHARE_DIR: dirs.share,
      ...env,
    });
    await waitFor(() => stack.app.lines.some((l) => ready.test(l)) || (stack.app.exitCode != null && Promise.reject(new Error("server exited"))), { what: "the server to load the calendars", timeout: 15000 });
  } catch (err) {
    const logs = stack.logs();
    await stack.stop();
    throw new Error(`${err.message}\n${logs}`);
  }
  stack.url = `http://127.0.0.1:${appPort}`;
  stack.ha = `http://127.0.0.1:${haPort}`;
  /** A connected WebSocket client (closed by stop()). */
  stack.client = async () => {
    const c = await new Client(`ws://127.0.0.1:${appPort}/ws`).open();
    stack.clients.push(c);
    return c;
  };
  /** Subscribes to the Agora index; .latest is the newest, .wait(pred) waits for one. */
  stack.home = async (client) => {
    const h = { latest: null, count: 0 };
    await client.subscribe("cronologia/home/subscribe", {}, (ix) => {
      h.latest = ix;
      h.count++;
    });
    h.wait = (pred, what = "the index", timeout = 8000) => waitFor(() => h.latest && pred(h.latest) && h.latest, { what, timeout });
    return h;
  };
  /** The fake HA's test helpers. */
  stack.fire = (event_type, data) => fetch(`${stack.ha}/dev/fire`, { method: "POST", body: JSON.stringify({ event_type, data }) }).then((r) => r.json());
  stack.notifications = () => fetch(`${stack.ha}/dev/notifications`).then((r) => r.json());
  stack.todoItems = (id) => fetch(`${stack.ha}/dev/todo?entity_id=${id}`).then((r) => r.json());
  stack.todoChange = (entity_id, service, data) => fetch(`${stack.ha}/dev/todo`, { method: "POST", body: JSON.stringify({ entity_id, service, data }) }).then((r) => r.json());
  stack.state = (entity) => fetch(`${stack.ha}/api/states/${entity}`, { headers: { authorization: "Bearer dev" } });
  /** Events of a calendar in the fake HA (REST, normalized like the server does). */
  stack.events = async (cal, from = -30, to = 400) => {
    const c = stack.clients[0] || (await stack.client());
    const res = await c.call("cronologia/events/list", { entity_id: cal, start: isoAt(from, 0), end: isoAt(to, 0) });
    return res.events;
  };
  return stack;
}
