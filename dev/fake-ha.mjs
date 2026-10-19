// A small fake of Home Assistant for developing and testing CronologIA without
// a real Home Assistant: calendar entities (local, "Outlook", holidays, a
// read-only remote calendar), the calendar websocket commands (subscribe,
// create, update, delete, with simple recurrence), the REST events API, the
// entity registry and an AI Task.
//   TZ=America/Sao_Paulo node dev/fake-ha.mjs
//   (ws://127.0.0.1:8123/api/websocket and http://127.0.0.1:8123/api, token "dev")
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { acceptUpgrade } from "../cronologia/rootfs/app/lib/ws.js";
import { createCalendars } from "../frontend/preview/fake-calendars.js";

const PORT = Number(process.env.FAKE_HA_PORT || 8123);
const TOKEN = process.env.FAKE_HA_TOKEN || "dev";
const MEDIA_DIR = process.env.FAKE_MEDIA_DIR || process.env.MEDIA_DIR || "./.data/media";
const WITH_AI = process.env.FAKE_HA_NO_AI !== "1";

const model = createCalendars();

function fail(code, message) {
  const e = new Error(message);
  e.code = code;
  throw e;
}

// ------------------------------------------------------------------ websocket

const conns = new Set();

function changed(id) {
  for (const c of conns) {
    for (const [sid, sub] of c.subs) {
      if (sub.type === "events" && sub.entity_id === id) c.event(sid, { events: model.occurrences(id, sub.from, sub.to) });
      if (sub.type === "state") c.event(sid, { event_type: "state_changed", data: { entity_id: id, new_state: model.stateOf(id) } });
    }
  }
}

// Pretend AI: checks the attachments exist where Home Assistant would look for them.
function fakeAI(msg) {
  if (!WITH_AI) fail("not_found", "Service not found");
  if (!msg.return_response) fail("service_validation_error", "return_response required");
  const d = msg.service_data || {};
  const files = (d.attachments || []).map((a) => {
    const prefix = "media-source://media_source/local/";
    if (!a.media_content_id.startsWith(prefix)) fail("service_validation_error", "bad media id");
    const p = path.join(MEDIA_DIR, a.media_content_id.slice(prefix.length));
    if (!fs.existsSync(p)) fail("service_validation_error", `attachment not found: ${p}`);
    return { path: p, bytes: fs.statSync(p).size };
  });
  if (files.length && d.entity_id === "ai_task.ollama_ai_task") fail("home_assistant_error", "This entity does not support attachments");
  console.log("fake AI call", JSON.stringify({ entity_id: d.entity_id, files }));
  const text = ((d.instructions || "").split('"""')[1] || "").trim();
  const events = model.aiEvents({ photos: files.length > 0, text });
  // No "structure": Home Assistant gives back the text, here with a code fence like real models do.
  return { context: { id: "ctx" }, response: { conversation_id: "c1", data: "```json\n" + JSON.stringify({ events }) + "\n```" } };
}

class Conn {
  constructor(ws) {
    this.ws = ws;
    this.auth = false;
    this.subs = new Map();
    ws.on("message", (t) => this.onMessage(JSON.parse(t)));
    ws.on("close", () => conns.delete(this));
    this.send({ type: "auth_required", ha_version: "2026.10.2" });
  }
  send(o) {
    this.ws.send(JSON.stringify(o));
  }
  event(id, event) {
    this.send({ id, type: "event", event });
  }
  onMessage(msg) {
    if (!this.auth) {
      if (msg.type === "auth" && msg.access_token === TOKEN) {
        this.auth = true;
        conns.add(this);
        return this.send({ type: "auth_ok", ha_version: "2026.10.2" });
      }
      this.send({ type: "auth_invalid", message: "Invalid access token" });
      return this.ws.close();
    }
    const ok = (result = null) => this.send({ id: msg.id, type: "result", success: true, result });
    try {
      switch (msg.type) {
        case "ping":
          return this.send({ id: msg.id, type: "pong" });
        case "get_states":
          return ok([
            ...model.ids().map(model.stateOf),
            { entity_id: "light.sala", state: "on", attributes: {} },
            ...(WITH_AI
              ? [
                  { entity_id: "ai_task.google_ai_task", state: "unknown", attributes: { friendly_name: "Google AI Task", supported_features: 3 } },
                  { entity_id: "ai_task.ollama_ai_task", state: "unknown", attributes: { friendly_name: "Ollama AI Task", supported_features: 1 } },
                ]
              : []),
          ]);
        case "ai_task/preferences/get":
          return ok({ gen_data_entity_id: WITH_AI ? "ai_task.google_ai_task" : null });
        case "get_config":
          return ok({ time_zone: process.env.TZ || "America/Sao_Paulo", version: "2026.10.2" });
        case "config/entity_registry/list_for_display":
          return ok({
            entity_categories: {},
            entities: [...model.registry(), { ei: "light.sala", pl: "hue" }],
          });
        case "config/device_registry/list":
          return ok(model.devices);
        case "subscribe_events":
          this.subs.set(msg.id, { type: "state" });
          return ok();
        case "unsubscribe_events":
          if (!this.subs.delete(msg.subscription)) fail("not_found", "Subscription not found.");
          return ok();
        case "calendar/event/subscribe": {
          if (process.env.FAKE_HA_OLD === "1") fail("unknown_command", "Unknown command.");
          const from = Date.parse(msg.start);
          const to = Date.parse(msg.end);
          if (!(to > from)) fail("invalid_format", "Start must be before end");
          const events = model.occurrences(msg.entity_id, from, to);
          this.subs.set(msg.id, { type: "events", entity_id: msg.entity_id, from, to });
          ok();
          return this.event(msg.id, { events });
        }
        case "calendar/event/create": {
          model.create(msg.entity_id, msg.event);
          console.log("event created", msg.entity_id, JSON.stringify(msg.event));
          ok();
          return changed(msg.entity_id);
        }
        case "calendar/event/update": {
          model.update(msg.entity_id, msg);
          console.log("event updated", msg.entity_id, msg.uid, msg.recurrence_id || "", msg.recurrence_range || "");
          ok();
          return changed(msg.entity_id);
        }
        case "calendar/event/delete": {
          model.remove(msg.entity_id, msg);
          console.log("event deleted", msg.entity_id, msg.uid, msg.recurrence_id || "", msg.recurrence_range || "");
          ok();
          return changed(msg.entity_id);
        }
        case "call_service":
          if (msg.domain === "ai_task") return ok(fakeAI(msg));
          fail("not_found", "Service not found");
          break;
        default:
          fail("unknown_command", `Unknown command ${msg.type}`);
      }
    } catch (err) {
      this.send({ id: msg.id, type: "result", success: false, error: { code: err.code || "error", message: err.message } });
    }
  }
}

// ------------------------------------------------------------------ REST

const server = http.createServer((req, res) => {
  if (req.headers.authorization !== `Bearer ${TOKEN}`) return res.writeHead(401).end("401: Unauthorized");
  const url = new URL(req.url, "http://x");
  const m = url.pathname.match(/^\/api\/calendars\/(calendar\.[a-z0-9_]+)$/);
  if (m && req.method === "GET") {
    if (!model.calendars[m[1]]) return res.writeHead(400).end();
    const from = Date.parse(url.searchParams.get("start"));
    const to = Date.parse(url.searchParams.get("end"));
    if (!(to > from)) return res.writeHead(400).end();
    const api = model.occurrences(m[1], from, to).map((e) => ({
      ...e,
      start: e.all_day ? { date: e.start } : { dateTime: e.start },
      end: e.all_day ? { date: e.end } : { dateTime: e.end },
      all_day: undefined,
    }));
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(api));
  }
  res.writeHead(404).end();
});
server.on("upgrade", (req, socket, head) => {
  const ws = acceptUpgrade(req, socket, head);
  if (ws) new Conn(ws);
});
server.listen(PORT, () => console.log(`fake Home Assistant on http://127.0.0.1:${PORT} (token "${TOKEN}"), ${model.ids().length} calendars`));
