// Keeps the events of every visible calendar for the ranges the screens show.
// Each range ("window") holds one live subscription per calendar
// (calendar/event/subscribe); when Home Assistant is older and has no such
// command, it falls back to reading the events every few minutes.
import { parseWhen, addDays, startOfDay, isoLocal } from "./util.js";
import { parseKind, occurrenceKey } from "../../cronologia/rootfs/app/lib/kinds.js";

const MAX_WINDOWS = 4;
const POLL_MS = 5 * 60 * 1000;

/** Event as the screens use it. */
export function toEvent(cal, raw) {
  const start = parseWhen(raw.start);
  const end = parseWhen(raw.end);
  const allDay = raw.all_day != null ? !!raw.all_day : /^\d{4}-\d{2}-\d{2}$/.test(raw.start);
  return {
    key: occurrenceKey(cal, raw),
    kind: parseKind(raw.description),
    cal,
    uid: raw.uid || null,
    rid: raw.recurrence_id || null,
    rrule: raw.rrule || null,
    summary: raw.summary || "(sem título)",
    description: raw.description || "",
    location: raw.location || "",
    allDay,
    start,
    end: end > start ? end : addDays(start, allDay ? 1 : 0),
    raw,
  };
}

export class EventStore {
  constructor(api, onChange) {
    this.api = api;
    this.onChange = onChange;
    this.windows = [];
    this.calendars = [];
    this.noSubscribe = false;
    this.version = 0;
  }

  /** The calendars that should be loaded (the visible ones). */
  setCalendars(ids) {
    const next = [...new Set(ids)].sort();
    if (next.join() === this.calendars.join()) return;
    this.calendars = next;
    for (const w of this.windows) this._syncWindow(w);
  }

  /** Make sure [start, end) is loaded; returns true when it already was. */
  ensure(start, end) {
    const w = this._covering(start, end);
    if (w) {
      w.used = Date.now();
      return w.cals.size > 0 && [...w.cals.values()].every((c) => c.loaded);
    }
    const ws = {
      start: addDays(startOfDay(start), -7),
      end: addDays(startOfDay(end), 8),
      cals: new Map(),
      used: Date.now(),
    };
    this.windows.push(ws);
    this._syncWindow(ws);
    this._gc();
    return false;
  }

  /** Events overlapping [start, end) from the loaded ranges. */
  query(start, end, ids = this.calendars) {
    const w = this._covering(start, end);
    const out = [];
    if (!w) return out;
    for (const id of ids) {
      const c = w.cals.get(id);
      if (!c) continue;
      for (const e of c.events) if (e.start < end && e.end > start) out.push(e);
    }
    return out.sort((a, b) => a.start - b.start || Number(b.allDay) - Number(a.allDay) || a.summary.localeCompare(b.summary, "pt-BR"));
  }

  loading(start, end) {
    const w = this._covering(start, end);
    return !w || [...w.cals.values()].some((c) => !c.loaded);
  }

  errors() {
    const out = new Map();
    for (const w of this.windows) for (const [id, c] of w.cals) if (c.error) out.set(id, c.error);
    return out;
  }

  /** After a change made here, refresh calendars that are read by polling. */
  refresh(entityId) {
    for (const w of this.windows) {
      const c = w.cals.get(entityId);
      if (c && c.poll) this._fetch(w, entityId, c);
    }
  }

  /** After reconnecting: the subscriptions come back on their own; polled ones are read again. */
  reloadAll() {
    for (const w of this.windows) for (const [id, c] of w.cals) if (c.poll) this._fetch(w, id, c);
  }

  dispose() {
    for (const w of this.windows) for (const [id] of w.cals) this._drop(w, id);
    this.windows = [];
  }

  // ---------------------------------------------------------------- internals

  _covering(start, end) {
    let best = null;
    for (const w of this.windows) if (w.start <= start && w.end >= end && (!best || w.end - w.start < best.end - best.start)) best = w;
    return best;
  }

  _changed() {
    this.version++;
    this.onChange();
  }

  _syncWindow(w) {
    for (const id of this.calendars) if (!w.cals.has(id)) this._add(w, id);
    for (const id of [...w.cals.keys()]) if (!this.calendars.includes(id)) this._drop(w, id);
  }

  _add(w, id) {
    const c = { events: [], loaded: false, error: null, unsub: null, poll: null };
    w.cals.set(id, c);
    const start = isoLocal(w.start);
    const end = isoLocal(w.end);
    if (this.noSubscribe) return this._startPolling(w, id, c);
    c.unsub = this.api
      .subscribeEvents(id, start, end, (ev) => {
        if (!w.cals.has(id)) return;
        if (ev && Array.isArray(ev.events)) {
          c.events = ev.events.map((raw) => toEvent(id, raw));
          c.error = null;
        } else c.error = "Não deu para ler os eventos agora";
        c.loaded = true;
        this._changed();
      })
      .catch((err) => {
        if (err && err.code === "unknown_command") {
          // Home Assistant without live calendar updates: read every few minutes.
          this.noSubscribe = true;
          return this._startPolling(w, id, c);
        }
        c.loaded = true;
        c.error = (err && err.message) || "Não deu para ler este calendário";
        this._changed();
        return null;
      });
  }

  _startPolling(w, id, c) {
    this._fetch(w, id, c);
    c.poll = setInterval(() => this._fetch(w, id, c), POLL_MS);
    return null;
  }

  async _fetch(w, id, c) {
    try {
      const res = await this.api.listEvents(id, isoLocal(w.start), isoLocal(w.end));
      if (!w.cals.has(id)) return;
      c.events = (res.events || []).map((raw) => toEvent(id, raw));
      c.error = null;
    } catch (err) {
      c.error = err.message;
    }
    c.loaded = true;
    this._changed();
  }

  _drop(w, id) {
    const c = w.cals.get(id);
    if (!c) return;
    w.cals.delete(id);
    if (c.poll) clearInterval(c.poll);
    if (c.unsub) Promise.resolve(c.unsub).then((f) => typeof f === "function" && f()).catch(() => {});
  }

  _gc() {
    if (this.windows.length <= MAX_WINDOWS) return;
    this.windows.sort((a, b) => b.used - a.used);
    for (const w of this.windows.splice(MAX_WINDOWS)) for (const [id] of w.cals) this._drop(w, id);
  }
}

/** Events that touch the day `d` (all-day end is exclusive). */
export function eventsOfDay(events, d) {
  const a = startOfDay(d);
  const b = addDays(a, 1);
  return events.filter((e) => e.start < b && e.end > a);
}

/** Side-by-side columns for overlapping timed events of one day. */
export function layoutDay(events, day) {
  const a = startOfDay(day).getTime();
  const b = a + 86400000;
  const items = events
    .filter((e) => !e.allDay)
    .map((e) => ({ e, s: Math.max(e.start.getTime(), a), t: Math.min(Math.max(e.end.getTime(), e.start.getTime() + 15 * 60000), b) }))
    .sort((x, y) => x.s - y.s || y.t - x.t);
  const out = [];
  let cluster = [];
  let clusterEnd = -1;
  const flush = () => {
    const lanes = [];
    for (const it of cluster) {
      let lane = lanes.findIndex((end) => end <= it.s);
      if (lane < 0) {
        lane = lanes.length;
        lanes.push(it.t);
      } else lanes[lane] = it.t;
      it.lane = lane;
    }
    for (const it of cluster) out.push({ ...it, lanes: lanes.length });
    cluster = [];
  };
  for (const it of items) {
    if (cluster.length && it.s >= clusterEnd) flush();
    cluster.push(it);
    clusterEnd = Math.max(clusterEnd, it.t);
  }
  if (cluster.length) flush();
  return out.map((it) => ({ event: it.e, top: (it.s - a) / 3600000, height: (it.t - it.s) / 3600000, lane: it.lane, lanes: it.lanes }));
}
