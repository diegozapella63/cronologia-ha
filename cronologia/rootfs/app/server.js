// CronologIA app server.
// - Serves the agenda UI through Home Assistant ingress.
// - Relays ONLY calendar commands (calendar.* entities) from the UI to Home
//   Assistant, with the Supervisor token.
// - Keeps how each calendar looks (name, color, hidden) in /data.
// - Finds events in pasted messages and photos with the AI configured in
//   Home Assistant, and exports calendars as .ics.
// - Models (remédio, conta, rotina, manutenção): doses taken, chores done,
//   phone alerts for doses, sensors, and the bills of the GerencIA app.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { acceptUpgrade } from "./lib/ws.js";
import { HAClient } from "./lib/ha.js";
import { Store } from "./lib/store.js";
import { AI } from "./lib/ai.js";
import { AiUsage } from "./lib/usage.js";
import { normalizeApiEvent, toICS, toHAEvent } from "./lib/events.js";
import { parseKind } from "./lib/kinds.js";
import { Home } from "./lib/home.js";
import { Gerencia } from "./lib/gerencia.js";
import { Todos } from "./lib/todos.js";
import { Mirror } from "./lib/mirror.js";
import { appData, eventsCSV, backupZip, parseImport, Backups, listVersions, readVersion, fileStamp } from "./lib/data.js";

const VERSION = "1.16.5";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const WWW = path.join(HERE, "www");
const DEV = process.env.CRONOLOGIA_DEV === "1";
const PORT = Number(process.env.PORT || 8099);
const HA_URL = process.env.HA_WS_URL || "ws://supervisor/core/websocket";
const HA_REST = process.env.HA_REST_URL || "http://supervisor/core/api";
const TOKEN = process.env.SUPERVISOR_TOKEN || process.env.HA_TOKEN || "";
const DATA_DIR = process.env.DATA_DIR || "/data";
const MEDIA_DIR = process.env.MEDIA_DIR || "/media";
const SHARE_DIR = process.env.SHARE_DIR || "/share";
const INGRESS_IPS = new Set(["172.30.32.2"]);
const MAX_UPLOAD = 30 * 1024 * 1024;
const MAX_RANGE_DAYS = 800;

const stamp = () => new Date().toISOString().replace("T", " ").slice(0, 19);
const log = {
  info: (m) => console.log(`${stamp()} INFO ${m}`),
  warn: (m) => console.warn(`${stamp()} WARNING ${m}`),
  error: (m) => console.error(`${stamp()} ERROR ${m}`),
};
if (!TOKEN) log.error("Sem SUPERVISOR_TOKEN. O homeassistant_api está ligado no app?");

const store = new Store(DATA_DIR, log);
store.trimVersions(); // Versões anteriores: only the 3 newest (older installs kept up to 60)
// Mais › Integrações: the ResolvIA and the GerencIA are off until turned on there
const resolviaOn = () => store.data.app.resolvia_on === true;
const gerenciaOn = () => store.data.app.gerencia_on === true;
// dev only (tests written before 1.16.0): start with both on
if (DEV && process.env.CRONOLOGIA_DEV_INTEGRATIONS === "1" && store.data.app.resolvia_on == null && store.data.app.gerencia_on == null) store.setApp({ resolvia_on: true, gerencia_on: true });
const ha = new HAClient(HA_URL, TOKEN, log);
const usage = new AiUsage({ dir: DATA_DIR, sensor: "sensor.cronologia_ia_hoje", label: "CronologIA", rest: HA_REST, token: TOKEN, log });
const ai = new AI({ ha, log, mediaDir: MEDIA_DIR, selected: () => store.data.app.ai_entity || "", usage });
const calStates = new Map();
const calWatchers = new Set(); // {session, id}
const prefWatchers = new Set();
const homeWatchers = new Set();
let registryCache = null;

const pushHome = (index) => {
  for (const w of homeWatchers) w.session.event(w.id, index);
  publishPresence(); // people or scoreboard may have changed (writes only on a change)
  mirror.schedule();
};
const gerencia = new Gerencia({ shareDir: SHARE_DIR, log, onChange: () => home.changed(), enabled: gerenciaOn });
const todos = new Todos({ ha, log, onChange: () => (home.changed(), mirror.schedule()), readApp: () => JSON.parse(fs.readFileSync(path.join(SHARE_DIR, "resolvia", "integracao.json"), "utf8")) });
const backups = new Backups({ dir: path.join(SHARE_DIR, "cronologia") });
const home = new Home({ ha, store, log, rest: HA_REST, token: TOKEN, calState: () => calStates, gerencia, todos, onChange: pushHome });
// Levar para o ResolvIA: maintenance and routines as tasks in a to-do list
const mirror = new Mirror({ ha, store, todos, home, log, onChange: () => home.changed(), enabled: resolviaOn });
home.mirror = mirror;

const isCal = (id) => typeof id === "string" && /^calendar\.[a-z0-9_]+$/.test(id);
const coded = (code, message) => Object.assign(new Error(message), { code });

// ------------------------------------------------------------------ Home Assistant side

function setCalState(entityId, state) {
  if (state) calStates.set(entityId, state);
  else calStates.delete(entityId);
  for (const w of calWatchers) w.session.event(w.id, { entity_id: entityId, new_state: state || null });
}

async function loadStates() {
  const states = await ha.send({ type: "get_states" });
  const seen = new Set();
  const seenTodo = new Set();
  for (const st of states) {
    if (/^todo\.[a-z0-9_]+$/.test(st.entity_id)) {
      seenTodo.add(st.entity_id);
      todos.setState(st.entity_id, st);
    }
    if (!isCal(st.entity_id)) continue;
    seen.add(st.entity_id);
    setCalState(st.entity_id, st);
  }
  for (const id of [...calStates.keys()]) if (!seen.has(id)) setCalState(id, null);
  for (const id of [...todos.states.keys()]) if (!seenTodo.has(id)) todos.setState(id, null);
}

ha.subscribe({ type: "subscribe_events", event_type: "state_changed" }, (ev) => {
  const id = ev && ev.data && ev.data.entity_id;
  if (/^todo\.[a-z0-9_]+$/.test(id || "")) return todos.setState(id, ev.data.new_state);
  if (!isCal(id)) return;
  // A new calendar (or one removed) changes the groups too.
  if (!calStates.has(id) || !ev.data.new_state) registryCache = null;
  setCalState(id, ev.data.new_state);
});

ha.on("ready", async () => {
  registryCache = null;
  try {
    const config = await ha.send({ type: "get_config" });
    if (config && config.time_zone && process.env.TZ !== config.time_zone) {
      process.env.TZ = config.time_zone;
      log.info(`Fuso horário: ${config.time_zone}`);
    }
  } catch (err) {
    log.warn(`get_config falhou: ${err.message}`);
  }
  try {
    await loadStates();
    log.info(`${calStates.size} calendários encontrados`);
    home.discover().catch((err) => log.warn(`Procurando modelos: ${err.message}`));
  } catch (err) {
    log.error(`Não consegui ler os calendários: ${err.message}`);
  }
});

/** Names, integration and device of each calendar, for grouping. */
async function registry() {
  if (registryCache && Date.now() - registryCache.at < 15000) return registryCache;
  const entities = {};
  const devices = {};
  try {
    const [ents, devs] = await Promise.all([ha.send({ type: "config/entity_registry/list_for_display" }), ha.send({ type: "config/device_registry/list" })]);
    const need = new Set();
    for (const e of (ents && ents.entities) || []) {
      if (!isCal(e.ei)) continue;
      entities[e.ei] = { entity_id: e.ei, platform: e.pl || null, device_id: e.di || null, name: e.en || null };
      if (e.di) need.add(e.di);
    }
    for (const d of devs || []) if (need.has(d.id)) devices[d.id] = { id: d.id, name: d.name, name_by_user: d.name_by_user || null };
  } catch (err) {
    log.warn(`Registro de entidades indisponível: ${err.message}`);
  }
  registryCache = { at: Date.now(), entities, devices };
  return registryCache;
}

/** Events through the REST API (older Home Assistant, and the .ics export). */
async function fetchEvents(entityId, start, end) {
  const url = `${HA_REST}/calendars/${entityId}?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`;
  const res = await fetch(url, { headers: { authorization: `Bearer ${TOKEN}` }, signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw coded("ha_error", `O Home Assistant respondeu ${res.status} para ${entityId}`);
  const list = await res.json();
  return (Array.isArray(list) ? list : []).map(normalizeApiEvent);
}

function checkRange(start, end) {
  const a = Date.parse(start);
  const b = Date.parse(end);
  if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) throw coded("invalid_format", "Período inválido");
  if (b - a > MAX_RANGE_DAYS * 86400000) throw coded("invalid_format", "Período grande demais");
}

// Only these event fields go to Home Assistant.
const EVENT_KEYS = ["start", "end", "summary", "description", "location", "rrule"];
function cleanEvent(ev) {
  if (!ev || typeof ev !== "object") throw coded("invalid_format", "Evento inválido");
  const out = {};
  for (const k of EVENT_KEYS) {
    if (ev[k] == null || ev[k] === "") continue;
    if (typeof ev[k] !== "string") throw coded("invalid_format", `${k} inválido`);
    out[k] = ev[k].slice(0, k === "description" ? 8000 : 500);
  }
  if (!out.summary || !out.start || !out.end) throw coded("invalid_format", "O evento precisa de título, início e fim");
  return out;
}

const pushPrefs = () => {
  for (const w of prefWatchers) w.session.event(w.id, store.prefs);
};

// ------------------------------------------------------------------ browser side

class Session {
  constructor(ws, headers) {
    this.ws = ws;
    this.subs = new Map(); // client subscription id -> {unsubscribe}
    this.user = { id: headers["x-remote-user-id"] || "", name: headers["x-remote-user-display-name"] || headers["x-remote-user-name"] || "" };
    // dev only (tests): the browser can't send the ingress headers on a WebSocket
    if (DEV && !this.user.id && process.env.CRONOLOGIA_DEV_USER_ID) this.user = { id: process.env.CRONOLOGIA_DEV_USER_ID, name: process.env.CRONOLOGIA_DEV_USER_NAME || "" };
    ws.on("message", (text) => this.onMessage(text));
    ws.on("close", () => this.dispose());
  }

  send(obj) {
    this.ws.send(JSON.stringify(obj));
  }
  result(id, result = null) {
    this.send({ id, type: "result", success: true, result });
  }
  error(id, code, message) {
    this.send({ id, type: "result", success: false, error: { code, message } });
  }
  event(id, event) {
    this.send({ id, type: "event", event });
  }

  dispose() {
    for (const [, sub] of this.subs) sub.unsubscribe();
    this.subs.clear();
    for (const set of [calWatchers, prefWatchers, homeWatchers]) for (const w of set) if (w.session === this) set.delete(w);
  }

  watch(set, id) {
    const w = { session: this, id };
    set.add(w);
    this.subs.set(id, { unsubscribe: () => set.delete(w) });
  }

  async onMessage(text) {
    let msg;
    try {
      msg = JSON.parse(text);
    } catch (e) {
      return;
    }
    const { id, type } = msg || {};
    if (!Number.isInteger(id)) return;
    try {
      await this.handle(id, type, msg);
    } catch (err) {
      this.error(id, err.code || "failed", err.message || String(err));
    }
  }

  async handle(id, type, msg) {
    switch (type) {
      case "ping":
        return this.send({ id, type: "pong" });

      case "cronologia/bootstrap": {
        await ha.whenReady();
        if (!calStates.size) await loadStates().catch(() => {});
        const [reg, aiStatus] = await Promise.all([registry(), ai.status().catch((err) => ({ ready: false, images: false, entities: [], reason: err.message }))]);
        return this.result(id, {
          version: VERSION,
          user: { ...this.user, person: home.personOfUser(this.user.id, this.user.name) },
          time_zone: process.env.TZ || null,
          ai: aiStatus,
          prefs: store.prefs,
          states: Object.fromEntries(calStates),
          entities: reg.entities,
          devices: reg.devices,
        });
      }

      case "cronologia/home/subscribe":
        this.watch(homeWatchers, id);
        this.result(id);
        if (home.index) this.event(id, home.index);
        else home.changed();
        gerencia.refresh().catch(() => {});
        return;

      case "cronologia/check/set": {
        if (typeof msg.key !== "string" || !msg.key) return this.error(id, "invalid_format", "Item inválido");
        await home.check(msg.key, !!msg.done, this.user.name || "", String(msg.kind || ""), String(msg.who || home.personOfUser(this.user.id, this.user.name) || ""));
        return this.result(id);
      }

      case "cronologia/maint/done": {
        if (!isCal(msg.entity_id) || typeof msg.uid !== "string") return this.error(id, "invalid_format", "Item inválido");
        return this.result(id, await home.maintDone(msg.entity_id, msg.uid, this.user.name || "", String(msg.who || home.personOfUser(this.user.id, this.user.name) || "")));
      }

      case "cronologia/maint/undo": {
        if (!isCal(msg.entity_id) || typeof msg.uid !== "string") return this.error(id, "invalid_format", "Item inválido");
        await home.maintUndo(msg.entity_id, msg.uid);
        return this.result(id);
      }

      case "cronologia/contas/pagar":
      case "cronologia/contas/desfazer": {
        if (typeof msg.conta !== "string" || !msg.conta) return this.error(id, "invalid_format", "Conta inválida");
        const body = { id: msg.conta };
        if (Number(msg.valor) > 0) body.valor = Number(msg.valor);
        return this.result(id, await gerencia.act(type.endsWith("pagar") ? "pagar" : "desfazer", body));
      }

      case "cronologia/contas/nova": {
        const c = msg.conta || {};
        const body = { descricao: String(c.descricao || "").slice(0, 120), valor: Number(c.valor), vencimento: String(c.vencimento || ""), repete: ["nao", "mensal", "anual"].includes(c.repete) ? c.repete : "nao" };
        if (c.categoria) body.categoria = String(c.categoria).slice(0, 60);
        return this.result(id, await gerencia.act("nova", body));
      }

      case "cronologia/score/reassign":
        home.reassign(String(msg.key || ""), String(msg.who || ""));
        return this.result(id);

      case "cronologia/score/extra":
        home.extraPoints(String(msg.who || ""), msg.points, msg.title);
        return this.result(id);

      case "cronologia/score/demerit":
        return this.result(id, home.demerit(String(msg.demerit || ""), String(msg.who || "")));

      case "cronologia/score/remove":
        home.removePoints(String(msg.key || ""));
        return this.result(id);

      case "cronologia/score/prizes":
        store.setPrizes(String(msg.period || ""), msg.shared, msg.per);
        home.changed();
        return this.result(id);

      case "cronologia/score/reward":
        store.setReward(String(msg.period || ""), msg.text);
        home.changed();
        return this.result(id);

      case "cronologia/score/delivered":
        store.setDelivered(String(msg.period || ""), !!msg.delivered);
        home.changed();
        return this.result(id);

      case "cronologia/todo/add": {
        if (!resolviaOn()) return this.error(id, "resolvia_off", "A integração com o ResolvIA está desligada em Mais › Integrações.");
        const t = msg.task || {};
        await todos.add(String(msg.entity_id || ""), { summary: t.summary, date: t.date, time: t.time, description: t.description });
        return this.result(id);
      }

      // Mais › Integrações › Trazer uma lista do ResolvIA: preview, then create the routines
      case "cronologia/todo/bring_preview":
        return this.result(id, home.bringPreview(String(msg.entity_id || "")));

      case "cronologia/todo/bring":
        if (!resolviaOn()) return this.error(id, "resolvia_off", "A integração com o ResolvIA está desligada em Mais › Integrações.");
        return this.result(id, await home.bring({ entity_id: String(msg.entity_id || ""), calendar: String(msg.calendar || ""), uids: msg.uids, remove: msg.remove !== false }));

      case "cronologia/todo/set": {
        if (!resolviaOn()) return this.error(id, "resolvia_off", "A integração com o ResolvIA está desligada em Mais › Integrações.");
        await todos.setDone(msg.entity_id, msg.uid, !!msg.done);
        const summary = todos.summaryOf(msg.entity_id, msg.uid);
        const points = todos.pointsOf(msg.entity_id, summary);
        const who = String(msg.who || home.personOfUser(this.user.id, this.user.name) || "");
        return this.result(id, points ? home.todoPoints(msg.entity_id, msg.uid, summary, points, !!msg.done, who) : null);
      }

      // ---- Dados: versions, backups in share/cronologia
      case "cronologia/versions/list":
        return this.result(id, listVersions(store.versionsDir));

      case "cronologia/versions/restore": {
        const raw = readVersion(store.versionsDir, String(msg.name || ""));
        replaced(store.replaceAll(raw, "antes-de-restaurar"), `versão ${msg.name}`);
        return this.result(id, counts());
      }

      case "cronologia/backups/list":
        return this.result(id, backups.list());

      case "cronologia/backups/create": {
        const { cals, range } = await allEvents();
        const out = backups.save(backupZip(appData(store, VERSION), cals, VERSION, range));
        log.info(`Backup criado em ${out.folder}/${out.name} (${cals.length} calendários)`);
        return this.result(id, out);
      }

      case "cronologia/backups/restore": {
        const raw = backups.read(String(msg.name || ""));
        replaced(store.replaceAll(raw, "antes-de-restaurar"), `backup ${msg.name}`);
        return this.result(id, counts());
      }

      case "cronologia/notify/test":
        await home.testAlert(msg.target);
        return this.result(id);

      case "cronologia/registry":
        registryCache = null;
        return this.result(id, await registry());

      case "cronologia/ai/status":
        return this.result(id, await ai.status());

      // Mais › Integrações › Uso da IA
      case "cronologia/ai/usage":
        return this.result(id, usage.summary());

      case "cronologia/subscribe_calendars":
        this.watch(calWatchers, id);
        return this.result(id);

      case "cronologia/prefs/subscribe":
        this.watch(prefWatchers, id);
        return this.result(id);

      case "cronologia/prefs/set_calendar": {
        const prefs = store.setCalendar(msg.entity_id, msg.prefs);
        this.result(id, prefs);
        return pushPrefs();
      }

      case "cronologia/prefs/set_app": {
        const prefs = store.setApp(msg.prefs);
        this.result(id, prefs);
        if (msg.prefs && "gerencia_on" in msg.prefs) gerencia.refresh().catch(() => {});
        if (msg.prefs && ("people" in msg.prefs || "alerts" in msg.prefs || "score" in msg.prefs || "week_start" in msg.prefs || "todo_hidden" in msg.prefs || "todo_undated" in msg.prefs || "mirror" in msg.prefs || "resolvia_on" in msg.prefs)) {
          if ("mirror" in msg.prefs || "resolvia_on" in msg.prefs) mirror.schedule(0);
          if ("resolvia_on" in msg.prefs) publishPresence();
          // a new setup (or a different period length) starts counting from the current period, without closing one
          if ("score" in msg.prefs || "week_start" in msg.prefs) {
            home.resetPeriod();
            publishPresence();
          }
          home.changed();
        }
        return pushPrefs();
      }

      case "calendar/event/subscribe": {
        if (!isCal(msg.entity_id)) return this.error(id, "invalid_format", "Não é um calendário");
        checkRange(msg.start, msg.end);
        const sub = ha.subscribe(
          { type, entity_id: msg.entity_id, start: msg.start, end: msg.end },
          (ev) => this.event(id, ev),
          () => this.subs.delete(id),
        );
        this.subs.set(id, sub);
        await sub.ready;
        return this.result(id);
      }

      case "cronologia/events/list": {
        if (!isCal(msg.entity_id)) return this.error(id, "invalid_format", "Não é um calendário");
        checkRange(msg.start, msg.end);
        return this.result(id, { events: await fetchEvents(msg.entity_id, msg.start, msg.end) });
      }

      case "unsubscribe_events": {
        const sub = this.subs.get(msg.subscription);
        if (!sub) return this.error(id, "not_found", "Subscription not found.");
        sub.unsubscribe();
        this.subs.delete(msg.subscription);
        return this.result(id);
      }

      case "calendar/event/create": {
        if (!isCal(msg.entity_id)) return this.error(id, "invalid_format", "Não é um calendário");
        const event = cleanEvent(msg.event);
        const out = await ha.send({ type, entity_id: msg.entity_id, event: toHAEvent(event) });
        if (parseKind(event.description)) home.noteCalendar(msg.entity_id);
        home.refreshCalendar(msg.entity_id);
        return this.result(id, out);
      }

      case "calendar/event/update":
      case "calendar/event/delete": {
        if (!isCal(msg.entity_id)) return this.error(id, "invalid_format", "Não é um calendário");
        if (typeof msg.uid !== "string" || !msg.uid) return this.error(id, "invalid_format", "Evento sem identificador");
        const out = { type, entity_id: msg.entity_id, uid: msg.uid };
        if (typeof msg.recurrence_id === "string" && msg.recurrence_id) out.recurrence_id = msg.recurrence_id;
        if (msg.recurrence_range === "THISANDFUTURE") out.recurrence_range = "THISANDFUTURE";
        const event = type === "calendar/event/update" ? cleanEvent(msg.event) : null;
        if (event) out.event = toHAEvent(event);
        const res = await ha.send(out);
        if (event && parseKind(event.description)) home.noteCalendar(msg.entity_id);
        home.refreshCalendar(msg.entity_id);
        return this.result(id, res);
      }

      default:
        return this.error(id, "unknown_command", `Comando desconhecido: ${type}`);
    }
  }
}

// ------------------------------------------------------------------ Dados

const counts = () => ({ calendars: Object.keys(store.data.calendars).length, points: store.data.score.entries.length, checks: Object.keys(store.data.checks).length });

/** Everything changed at once (import, restore): every screen gets the new settings. */
function replaced(data, what) {
  log.info(`Dados do app trocados (${what})`);
  pushPrefs();
  home.resetPeriod();
  home.changed();
}

/** The events of every calendar from a year back to 400 days ahead (for the CSV and the ZIP). */
async function allEvents() {
  const t = new Date();
  const start = new Date(t.getFullYear() - 1, t.getMonth(), t.getDate()).toISOString();
  const end = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 400).toISOString();
  const cals = [];
  for (const [id, st] of calStates) {
    if (!st || st.state === "unavailable") continue;
    const p = store.data.calendars[id] || {};
    try {
      cals.push({ entity_id: id, name: p.name || (st.attributes && st.attributes.friendly_name) || id, events: await fetchEvents(id, start, end) });
    } catch (err) {
      log.warn(`Backup: ${id} ficou de fora (${err.message})`);
    }
  }
  return { cals, range: "do último ano aos próximos 13 meses" };
}

// ------------------------------------------------------------------ HTTP

const FILES = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/cronologia.js": ["cronologia.js", "text/javascript; charset=utf-8"],
};

function allowed(req) {
  if (DEV) return true;
  const ip = (req.socket.remoteAddress || "").replace(/^::ffff:/, "");
  return INGRESS_IPS.has(ip);
}

function sendJson(res, status, obj) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(obj));
}

/** POST /api/extract {text?, images?: [{data(base64), mime}]} -> {events, provider} */
function handleExtract(req, res) {
  const chunks = [];
  let size = 0;
  let aborted = false;
  req.on("data", (c) => {
    size += c.length;
    if (size > MAX_UPLOAD) {
      aborted = true;
      sendJson(res, 413, { error: "Arquivo grande demais" });
      req.destroy();
      return;
    }
    chunks.push(c);
  });
  req.on("end", async () => {
    if (aborted) return;
    let body;
    try {
      body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch (e) {
      return sendJson(res, 400, { error: "JSON inválido" });
    }
    if (store.data.app.ai_off) return sendJson(res, 409, { error: "A IA está desligada em Mais › Integrações", code: "ai_off" });
    const started = Date.now();
    try {
      const out = await ai.extract({ text: body.text, images: body.images });
      log.info(`Leitura por IA via ${out.provider}: ${out.events.length} eventos em ${((Date.now() - started) / 1000).toFixed(1)}s`);
      sendJson(res, 200, out);
    } catch (err) {
      log.warn(`Leitura por IA falhou: ${err.message}`);
      const setup = ["no_ai", "no_vision", "gone", "unavailable", "no_media"].includes(err.code);
      sendJson(res, setup ? 409 : 502, { error: err.message, code: err.code || "failed" });
    }
  });
}

/** GET /api/export/ics?calendars=a,b&start=ISO&end=ISO -> .ics file */
function download(res, body, type, name) {
  res.writeHead(200, { "Content-Type": type, "Content-Length": body.length, "Content-Disposition": `attachment; filename="${name}"`, "Cache-Control": "no-store" });
  res.end(body);
}

/** GET /api/export/json | csv | zip */
async function handleData(fmt, res) {
  const name = `cronologia-${fileStamp()}`;
  try {
    if (fmt === "json") return download(res, Buffer.from(JSON.stringify(appData(store, VERSION), null, 1)), "application/json; charset=utf-8", `${name}.json`);
    const { cals, range } = await allEvents();
    if (fmt === "csv") return download(res, eventsCSV(cals), "text/csv; charset=utf-8", `${name}.csv`);
    return download(res, backupZip(appData(store, VERSION), cals, VERSION, range), "application/zip", `${name}.zip`);
  } catch (err) {
    sendJson(res, 502, { error: err.message });
  }
}

/** POST /api/import (body = the .zip or .json file, header x-file-name). */
function handleImport(req, res) {
  const chunks = [];
  let size = 0;
  let aborted = false;
  req.on("data", (c) => {
    size += c.length;
    if (size > MAX_UPLOAD) {
      aborted = true;
      sendJson(res, 413, { error: "Arquivo grande demais" });
      req.destroy();
      return;
    }
    chunks.push(c);
  });
  req.on("end", () => {
    if (aborted) return;
    let name = "";
    try {
      name = decodeURIComponent(req.headers["x-file-name"] || "");
    } catch (e) {
      /* keep empty */
    }
    try {
      const raw = parseImport(Buffer.concat(chunks), name);
      replaced(store.replaceAll(raw, "antes-de-importar"), `importado de ${name || "arquivo"}`);
      sendJson(res, 200, counts());
    } catch (err) {
      log.warn(`Importação falhou: ${err.message}`);
      sendJson(res, 400, { error: err.message, code: err.code || "failed" });
    }
  });
}

async function handleExport(url, res) {
  try {
    const ids = (url.searchParams.get("calendars") || "").split(",").filter(isCal);
    if (!ids.length) throw coded("invalid_format", "Escolha pelo menos um calendário");
    const start = url.searchParams.get("start");
    const end = url.searchParams.get("end");
    checkRange(start, end);
    const prefs = store.data.calendars;
    const cals = [];
    for (const id of ids) {
      const st = calStates.get(id);
      const name = (prefs[id] && prefs[id].name) || (st && st.attributes && st.attributes.friendly_name) || id;
      cals.push({ entity_id: id, name, events: await fetchEvents(id, start, end) });
    }
    const body = Buffer.from(toICS(cals), "utf8");
    const t = new Date();
    const day = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
    res.writeHead(200, {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Length": body.length,
      "Content-Disposition": `attachment; filename="cronologia-${day}.ics"`,
      "Cache-Control": "no-store",
    });
    res.end(body);
    log.info(`Exportado .ics: ${cals.map((c) => `${c.entity_id} (${c.events.length})`).join(", ")}`);
  } catch (err) {
    sendJson(res, err.code === "invalid_format" ? 400 : 502, { error: err.message });
  }
}

const server = http.createServer((req, res) => {
  if (!allowed(req)) {
    res.writeHead(403).end("Forbidden");
    return;
  }
  const url = new URL(req.url, "http://x");
  if (url.pathname === "/api/extract" && req.method === "POST") return handleExtract(req, res);
  if (url.pathname === "/api/export/ics" && req.method === "GET") return handleExport(url, res);
  const exp = url.pathname.match(/^\/api\/export\/(json|csv|zip)$/);
  if (exp && req.method === "GET") return handleData(exp[1], res);
  if (url.pathname === "/api/import" && req.method === "POST") return handleImport(req, res);
  const font = url.pathname.match(/^\/fonts\/([a-z0-9-]+\.woff2)$/);
  const file = font ? [`fonts/${font[1]}`, "font/woff2", true] : FILES[url.pathname];
  if (!file || (req.method !== "GET" && req.method !== "HEAD")) {
    res.writeHead(404).end("Not found");
    return;
  }
  const full = path.join(WWW, file[0]);
  fs.stat(full, (err, st) => {
    if (err) {
      res.writeHead(404).end("Not found");
      return;
    }
    const etag = `"${st.size.toString(16)}-${st.mtimeMs.toString(16)}"`;
    const headers = {
      "Content-Type": file[1],
      "Cache-Control": file[2] ? "public, max-age=604800" : "no-cache",
      ETag: etag,
      "X-Content-Type-Options": "nosniff",
    };
    if (req.headers["if-none-match"] === etag) {
      res.writeHead(304, headers).end();
      return;
    }
    res.writeHead(200, { ...headers, "Content-Length": st.size });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(full).pipe(res);
  });
});

server.on("upgrade", (req, socket, head) => {
  const pathname = new URL(req.url, "http://x").pathname;
  if (!allowed(req) || pathname !== "/ws") {
    socket.end("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n");
    return;
  }
  const ws = acceptUpgrade(req, socket, head);
  if (ws) new Session(ws, req.headers);
});

/**
 * Tells the other apps (ResolvIA) that the CronologIA runs here and how its
 * scoreboard is set up: share/cronologia/integracao.json. Rewritten when the
 * scoreboard or the people change, and every 15 minutes. No key: the points
 * come back as the cronologia_pontos event.
 */
let presenceLast = "";
let presenceAt = 0;
let presenceWarned = false;
function publishPresence() {
  const placar = home.placarInfo();
  const espelho = mirror.published();
  // resolvia: Mais › Integrações › Tarefas do ResolvIA (false: the ResolvIA gives no points and shows why)
  const resolvia = resolviaOn();
  const body = JSON.stringify({ placar, espelho, resolvia });
  if (body === presenceLast && Date.now() - presenceAt < 15 * 60 * 1000) return;
  try {
    const dir = path.join(SHARE_DIR, "cronologia");
    fs.mkdirSync(dir, { recursive: true });
    const tmp = path.join(dir, ".integracao.json.tmp");
    // espelho: the maintenance and routines taken to a ResolvIA list ({list: {uid: {pontos, tipo}}})
    fs.writeFileSync(tmp, JSON.stringify({ app: "CronologIA", versao: VERSION, gravado_em: new Date().toISOString(), resolvia, placar, espelho }, null, 1));
    fs.renameSync(tmp, path.join(dir, "integracao.json"));
    presenceLast = body;
    presenceAt = Date.now();
    presenceWarned = false;
  } catch (err) {
    if (!presenceWarned) log.warn(`Não consegui gravar share/cronologia/integracao.json: ${err.message}`);
    presenceWarned = true;
  }
}
publishPresence();
setInterval(publishPresence, 30 * 1000);

server.listen(PORT, () => log.info(`CronologIA ${VERSION} ouvindo na porta ${PORT}${DEV ? " (modo dev)" : ""}`));
home.start();
mirror.start();
gerencia.start(() => homeWatchers.size > 0);
ha.start();

const shutdown = () => {
  log.info("Encerrando…");
  store.flush();
  ha.stop();
  server.close();
  setTimeout(() => process.exit(0), 300);
};
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
