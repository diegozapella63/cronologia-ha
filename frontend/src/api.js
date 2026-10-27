// Connection to the MemorIA app server (/ws) plus helpers to talk to the
// Home Assistant frontend around us (theme, user, haptics, navigation).

class AppConnection {
  constructor(url, onStatus) {
    this.url = url;
    this.onStatus = onStatus;
    this.nextId = 1;
    this.pending = new Map();
    this.subs = new Set();
    this.byId = new Map();
    this.queue = [];
    this.open = false;
    this.everOpened = false;
    this.backoff = 1000;
    this.reconnectHandlers = [];
    this._connect();
  }

  _connect() {
    const ws = new WebSocket(this.url);
    this.ws = ws;
    ws.onopen = () => {
      this.open = true;
      this.backoff = 1000;
      const again = this.everOpened;
      this.everOpened = true;
      for (const sub of this.subs) this._startSub(sub);
      for (const q of this.queue.splice(0)) ws.send(q);
      if (this.onStatus) this.onStatus(true);
      if (again) for (const f of this.reconnectHandlers) f();
    };
    ws.onmessage = (ev) => {
      let msg;
      try {
        msg = JSON.parse(ev.data);
      } catch (e) {
        return;
      }
      if (msg.type === "result") {
        const p = this.pending.get(msg.id);
        if (!p) return;
        this.pending.delete(msg.id);
        if (msg.success) p.resolve(msg.result);
        else {
          const err = new Error((msg.error && msg.error.message) || "Falhou");
          err.code = msg.error && msg.error.code;
          if (msg.error && msg.error.page) err.page = msg.error.page;
          p.reject(err);
        }
      } else if (msg.type === "event") {
        const sub = this.byId.get(msg.id);
        if (sub) sub.cb(msg.event);
      }
    };
    ws.onclose = () => {
      const was = this.open;
      this.open = false;
      this.byId.clear();
      for (const [, p] of this.pending) {
        const err = new Error("Sem conexão com o CronologIA");
        err.code = "disconnected";
        p.reject(err);
      }
      this.pending.clear();
      if (was && this.onStatus) this.onStatus(false);
      setTimeout(() => this._connect(), this.backoff);
      this.backoff = Math.min(this.backoff * 2, 15000);
    };
  }

  onReconnect(fn) {
    this.reconnectHandlers.push(fn);
  }

  _send(obj) {
    const text = JSON.stringify(obj);
    if (this.open) this.ws.send(text);
    else this.queue.push(text);
  }

  sendMessagePromise(msg) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this._send({ ...msg, id });
    });
  }

  subscribeMessage(cb, msg) {
    const sub = { cb, msg, id: null, first: null };
    this.subs.add(sub);
    const ready = new Promise((resolve, reject) => {
      sub.first = { resolve, reject };
    });
    if (this.open) this._startSub(sub);
    return ready.then(() => async () => {
      this.subs.delete(sub);
      if (sub.id != null) {
        this.byId.delete(sub.id);
        if (this.open) this.sendMessagePromise({ type: "unsubscribe_events", subscription: sub.id }).catch(() => {});
      }
    });
  }

  _startSub(sub) {
    const id = this.nextId++;
    sub.id = id;
    this.byId.set(id, sub);
    this.pending.set(id, {
      resolve: () => {
        if (sub.first) sub.first.resolve();
        sub.first = null;
      },
      reject: (err) => {
        if (err.code === "disconnected") return; // retried after reconnect
        this.byId.delete(id);
        this.subs.delete(sub);
        if (sub.first) sub.first.reject(err);
        sub.first = null;
      },
    });
    this.ws.send(JSON.stringify({ ...sub.msg, id }));
  }
}

/** The Home Assistant frontend around us (same origin under ingress), if reachable. */
function parentHass() {
  try {
    if (window.parent === window) return null;
    const el = window.parent.document.querySelector("home-assistant");
    return (el && el.hass) || null;
  } catch (e) {
    return null;
  }
}

const mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

function detectDark() {
  const p = parentHass();
  if (p && p.themes && typeof p.themes.darkMode === "boolean") return p.themes.darkMode;
  return !!(mql && mql.matches);
}

export function appEnv() {
  const embedded = window.parent !== window;
  return {
    topbar: !embedded,
    haptic(type) {
      try {
        const p = window.parent;
        if (p !== window) p.dispatchEvent(new p.CustomEvent("haptic", { detail: type }));
      } catch (e) {
        /* not same origin */
      }
    },
    openInHA(path) {
      try {
        const p = window.parent;
        if (p !== window && p.document) {
          p.history.pushState(null, "", path);
          p.dispatchEvent(new p.CustomEvent("location-changed", { detail: { replace: false } }));
          return;
        }
      } catch (e) {
        /* fall through */
      }
      window.open(path, "_top");
    },
  };
}

export { parentHass, detectDark };

/** Live API used by the agenda screens. */
export class Api {
  constructor() {
    const url = new URL("ws", location.href);
    url.protocol = location.protocol === "https:" ? "wss:" : "ws:";
    this.statusHandlers = [];
    this.conn = new AppConnection(url.href, (up) => this.statusHandlers.forEach((f) => f(up)));
  }

  onStatus(fn) {
    this.statusHandlers.push(fn);
  }

  onReconnect(fn) {
    this.conn.onReconnect(fn);
  }

  call(type, payload = {}) {
    return this.conn.sendMessagePromise({ type, ...payload });
  }

  bootstrap() {
    return this.call("cronologia/bootstrap");
  }

  registry() {
    return this.call("cronologia/registry");
  }

  /** cb({entity_id, new_state}) whenever a calendar entity changes. */
  subscribeCalendars(cb) {
    return this.conn.subscribeMessage(cb, { type: "cronologia/subscribe_calendars" });
  }

  subscribePrefs(cb) {
    return this.conn.subscribeMessage(cb, { type: "cronologia/prefs/subscribe" });
  }

  /** cb({events}) now and on every change. Resolves to an unsubscribe function. */
  subscribeEvents(entityId, start, end, cb) {
    return this.conn.subscribeMessage(cb, { type: "calendar/event/subscribe", entity_id: entityId, start, end });
  }

  listEvents(entityId, start, end) {
    return this.call("cronologia/events/list", { entity_id: entityId, start, end });
  }

  createEvent(entityId, event) {
    return this.call("calendar/event/create", { entity_id: entityId, event });
  }

  updateEvent(entityId, uid, event, { recurrenceId, range } = {}) {
    const msg = { entity_id: entityId, uid, event };
    if (recurrenceId) msg.recurrence_id = recurrenceId;
    if (range) msg.recurrence_range = range;
    return this.call("calendar/event/update", msg);
  }

  deleteEvent(entityId, uid, { recurrenceId, range } = {}) {
    const msg = { entity_id: entityId, uid };
    if (recurrenceId) msg.recurrence_id = recurrenceId;
    if (range) msg.recurrence_range = range;
    return this.call("calendar/event/delete", msg);
  }

  setCalendarPrefs(entityId, prefs) {
    return this.call("cronologia/prefs/set_calendar", { entity_id: entityId, prefs });
  }

  setAppPrefs(prefs) {
    return this.call("cronologia/prefs/set_app", { prefs });
  }

  aiStatus() {
    return this.call("cronologia/ai/status");
  }

  // ---- models: doses, chores, bills, maintenance (see lib/home.js on the server)

  /** cb(index) now and whenever today's doses, chores, bills or maintenance change. */
  subscribeHome(cb) {
    return this.conn.subscribeMessage(cb, { type: "cronologia/home/subscribe" });
  }

  setCheck(key, done, kind, who) {
    return this.call("cronologia/check/set", { key, done, kind, ...(who ? { who } : {}) });
  }

  maintDone(entityId, uid, who) {
    return this.call("cronologia/maint/done", { entity_id: entityId, uid, ...(who ? { who } : {}) });
  }

  // ---- Recompensas
  scoreReassign(key, who) {
    return this.call("cronologia/score/reassign", { key, who });
  }

  scoreExtra(who, points, title) {
    return this.call("cronologia/score/extra", { who, points, title });
  }

  scoreDemerit(id, who) {
    return this.call("cronologia/score/demerit", { demerit: id, who });
  }

  scoreRemove(key) {
    return this.call("cronologia/score/remove", { key });
  }

  scoreLog(before, limit, from, to) {
    return this.call("cronologia/score/log", { before, limit, ...(from ? { from, to } : {}) });
  }

  scoreRestore(key) {
    return this.call("cronologia/score/restore", { key });
  }

  scorePrizes(period, shared, per) {
    return this.call("cronologia/score/prizes", { period, shared, per });
  }

  scoreReward(period, text) {
    return this.call("cronologia/score/reward", { period, text });
  }

  scoreDelivered(period, delivered) {
    return this.call("cronologia/score/delivered", { period, delivered });
  }

  maintUndo(entityId, uid) {
    return this.call("cronologia/maint/undo", { entity_id: entityId, uid });
  }

  payBill(id, valor) {
    return this.call("cronologia/contas/pagar", { conta: id, ...(valor ? { valor } : {}) });
  }

  unpayBill(id) {
    return this.call("cronologia/contas/desfazer", { conta: id });
  }

  newBill(conta) {
    return this.call("cronologia/contas/nova", { conta });
  }

  // ---- Dados: exports, backups, import, versions
  dataUrl(fmt) {
    return new URL(`api/export/${fmt}`, location.href).href;
  }

  async importData(file) {
    const res = await fetch(new URL("api/import", location.href), {
      method: "POST",
      headers: { "content-type": "application/octet-stream", "x-file-name": encodeURIComponent(file.name || "") },
      body: file,
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || `Erro ${res.status}`);
    return body;
  }

  versions() {
    return this.call("cronologia/versions/list");
  }

  restoreVersion(name) {
    return this.call("cronologia/versions/restore", { name });
  }

  backups() {
    return this.call("cronologia/backups/list");
  }

  createBackup() {
    return this.call("cronologia/backups/create");
  }

  restoreBackup(name) {
    return this.call("cronologia/backups/restore", { name });
  }

  addTodo(entityId, task) {
    return this.call("cronologia/todo/add", { entity_id: entityId, task });
  }

  /** Mais › Integrações › Uso da IA. */
  aiUsage() {
    return this.call("cronologia/ai/usage");
  }

  /** Trazer uma lista do ResolvIA: what each task would become, then create the routines. */
  bringPreview(entityId) {
    return this.call("cronologia/todo/bring_preview", { entity_id: entityId });
  }

  bring(entityId, calendar, uids, remove = true) {
    return this.call("cronologia/todo/bring", { entity_id: entityId, calendar, uids, remove });
  }

  setTodo(entityId, uid, done, who = "") {
    return this.call("cronologia/todo/set", { entity_id: entityId, uid, done, who });
  }

  testAlert(target) {
    return this.call("cronologia/notify/test", { target });
  }

  exportUrl({ calendars, start, end }) {
    const u = new URL("api/export/ics", location.href);
    u.searchParams.set("calendars", calendars.join(","));
    u.searchParams.set("start", start);
    u.searchParams.set("end", end);
    return u.href;
  }

  async extract(payload) {
    const res = await fetch(new URL("api/extract", location.href), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(body.error || `Erro ${res.status}`);
      err.code = body.code;
      throw err;
    }
    return body;
  }
}
