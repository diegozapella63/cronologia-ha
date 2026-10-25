// "Casa": the models (remédio, conta, rotina, manutenção) seen from the server.
// - Follows the calendars that have model events (live subscription, about
//   200 days back and 800 ahead) and builds what the Agora screen shows:
//   today's doses, today's chores, bills, maintenance.
// - Sends the phone alerts for doses (at the time, again when late) and takes
//   the "Tomei" / "Adiar 15 min" buttons of those alerts.
// - Publishes sensors in Home Assistant and takes the event cronologia_feito
//   (from automations and NFC tags).
import crypto from "node:crypto";
import os from "node:os";
import { parseKind, occurrenceKey, maintDone, foldText, buildIndex } from "./kinds.js";
import { toHAEvent } from "./events.js";

const DAY = 86400000;
const BACK_DAYS = 200;
const AHEAD_DAYS = 800;
const SNOOZE_MIN = 15;
const F = { CREATE: 1, DELETE: 2, UPDATE: 4 };
const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const msOf = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(s) ? new Date(...s.split("-").map((x, i) => Number(x) - (i === 1 ? 1 : 0))).getTime() : Date.parse(s));
const hm = (ms) => {
  const d = new Date(ms);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
const hashOf = (key) => crypto.createHash("sha1").update(key).digest("hex").slice(0, 10);
const coded = (code, message) => Object.assign(new Error(message), { code });

/** Ingress path of this app, for the alert's "open" (hostname a1b2c3d4-cronologia -> slug a1b2c3d4_cronologia). */
function ingressUrl() {
  const h = os.hostname();
  return /^[a-z0-9]+-cronologia$/.test(h) ? `/hassio/ingress/${h.replace("-", "_")}` : null;
}

export class Home {
  constructor({ ha, store, log, rest, token, calState, gerencia, onChange }) {
    this.ha = ha;
    this.store = store;
    this.log = log;
    this.rest = rest;
    this.token = token;
    this.calState = calState; // id -> HA state (features, name)
    this.gerencia = gerencia;
    this.onChange = onChange;
    this.tracked = new Map(); // cal -> {sub, events, day, poll}
    this.persons = new Map(); // person.x -> {id, name, trackers}
    this.targets = new Set(); // mobile_app_x
    this.byHash = new Map(); // alert hash -> occurrence
    this.undo = new Map(); // cal|uid -> previous event (maintenance)
    this.index = null;
    this.indexJson = "";
    this.sensorsJson = "";
    this.sensorsAt = 0;
    this.timer = null;
    this.dirty = null;
  }

  // ---------------------------------------------------------------- start

  start() {
    this.ha.subscribe({ type: "subscribe_events", event_type: "mobile_app_notification_action" }, (ev) => this.onAction(ev && ev.data));
    this.ha.subscribe({ type: "subscribe_events", event_type: "cronologia_feito" }, (ev) => this.onFeito(ev && ev.data, ev && ev.context));
    this.ha.on("ready", () => {
      this.loadPeople().catch((err) => this.log.warn(`Pessoas: ${err.message}`));
      for (const id of this.store.data.kind_cals) this.track(id);
      setTimeout(() => this.tick(), 4000);
    });
    this.timer = setInterval(() => this.tick(), 20000);
    setInterval(() => this.discover().catch(() => {}), 6 * 3600 * 1000);
    setInterval(() => this.loadPeople().catch(() => {}), 10 * 60 * 1000);
  }

  /** People (person.*) and the phones that can get alerts (notify.mobile_app_*). */
  async loadPeople() {
    const [states, services] = await Promise.all([this.ha.send({ type: "get_states" }), this.ha.send({ type: "get_services" })]);
    this.persons.clear();
    for (const st of states || []) {
      if (!/^person\.[a-z0-9_]+$/.test(st.entity_id)) continue;
      const a = st.attributes || {};
      this.persons.set(st.entity_id, { id: st.entity_id, name: a.friendly_name || st.entity_id.slice(7), trackers: Array.isArray(a.device_trackers) ? a.device_trackers : [] });
    }
    this.targets = new Set(Object.keys((services && services.notify) || {}).filter((s) => /^mobile_app_[a-z0-9_]+$/.test(s)));
    this.changed();
  }

  /** Looks for model events in every calendar (a few days back, two months ahead). */
  async discover() {
    const from = addDays(new Date(), -3).toISOString();
    const to = addDays(new Date(), 60).toISOString();
    for (const [id, st] of this.calState()) {
      if (this.tracked.has(id) || !st || st.state === "unavailable") continue;
      try {
        const url = `${this.rest}/calendars/${id}?start=${encodeURIComponent(from)}&end=${encodeURIComponent(to)}`;
        const res = await fetch(url, { headers: { authorization: `Bearer ${this.token}` }, signal: AbortSignal.timeout(30000) });
        if (!res.ok) continue;
        const list = await res.json();
        if ((Array.isArray(list) ? list : []).some((e) => parseKind(e.description))) this.noteCalendar(id);
      } catch (err) {
        /* calendar offline: try again later */
      }
    }
  }

  /** A model event was saved in this calendar: follow it from now on. */
  noteCalendar(id) {
    if (this.store.addKindCalendar(id)) this.log.info(`Modelos encontrados em ${id}`);
    if (!this.tracked.has(id)) this.track(id);
  }

  track(id) {
    const old = this.tracked.get(id);
    if (old && old.sub) old.sub.unsubscribe();
    if (old && old.poll) clearInterval(old.poll);
    const today = startOfDay(new Date());
    const t = { sub: null, poll: null, events: (old && old.events) || [], day: ymd(today) };
    this.tracked.set(id, t);
    const start = addDays(today, -BACK_DAYS).toISOString();
    const end = addDays(today, AHEAD_DAYS).toISOString();
    t.sub = this.ha.subscribe(
      { type: "calendar/event/subscribe", entity_id: id, start, end },
      (ev) => {
        t.events = (ev && ev.events) || [];
        this.changed();
      },
      (err) => {
        // Older Home Assistant (no live subscription): read every 2 minutes.
        if (err && err.code === "unknown_command" && !t.poll) {
          const read = () => this.fetchRange(id, start, end).then((evs) => {
            t.events = evs;
            this.changed();
          }).catch(() => {});
          read();
          t.poll = setInterval(read, 120000);
        }
      },
    );
  }

  async fetchRange(id, start, end) {
    const url = `${this.rest}/calendars/${id}?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`;
    const res = await fetch(url, { headers: { authorization: `Bearer ${this.token}` }, signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const pick = (v) => (v && typeof v === "object" ? v.dateTime || v.date : v);
    return (await res.json()).map((e) => ({ ...e, start: pick(e.start), end: pick(e.end) }));
  }

  /** After a change made through the app on a polled calendar. */
  refreshCalendar(id) {
    const t = this.tracked.get(id);
    if (t && t.poll) this.track(id);
  }

  // ---------------------------------------------------------------- people

  /** Phone of a person: chosen in Mais, or the one from their person entity's tracker. */
  targetFor(name) {
    if (!name) return null;
    const people = this.store.data.app.people || {};
    const key = Object.keys(people).find((n) => foldText(n) === foldText(name));
    if (key && people[key].notify) return people[key].notify;
    return this.autoTarget(name);
  }

  /** The phone of the person entity with this name (its device tracker is a mobile app). */
  autoTarget(name) {
    const p = [...this.persons.values()].find((x) => foldText(x.name) === foldText(name) || foldText(x.name).split(" ")[0] === foldText(name));
    if (!p) return null;
    for (const t of p.trackers) {
      const svc = `mobile_app_${String(t).replace(/^device_tracker\./, "")}`;
      if (this.targets.has(svc)) return svc;
    }
    return null;
  }

  peopleInfo(names) {
    const all = new Map();
    for (const p of this.persons.values()) all.set(foldText(p.name), { name: p.name, person: p.id });
    for (const n of Object.keys(this.store.data.app.people || {})) if (!all.has(foldText(n))) all.set(foldText(n), { name: n, person: null });
    for (const n of names) if (n && !all.has(foldText(n))) all.set(foldText(n), { name: n, person: null });
    return {
      list: [...all.values()].map((p) => ({ ...p, notify: this.targetFor(p.name), auto: this.autoTarget(p.name) })).sort((a, b) => a.name.localeCompare(b.name, "pt-BR")),
      targets: [...this.targets].sort().map((id) => ({ id, name: id.replace(/^mobile_app_/, "").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) })),
    };
  }

  // ---------------------------------------------------------------- index

  changed() {
    clearTimeout(this.dirty);
    this.dirty = setTimeout(() => this.rebuild(), 120);
  }

  settings() {
    const a = this.store.data.app.alerts || {};
    return { meds: a.meds !== false, late: a.late == null ? 30 : a.late, caregivers: a.caregivers || [] };
  }

  /** All model occurrences of the followed calendars. */
  *occurrences() {
    for (const [cal, t] of this.tracked) {
      for (const raw of t.events) {
        const k = parseKind(raw.description);
        if (!k) continue;
        yield { cal, raw, k, key: occurrenceKey(cal, raw), start: msOf(raw.start), end: msOf(raw.end), allDay: /^\d{4}-\d{2}-\d{2}$/.test(raw.start) };
      }
    }
  }

  rebuild() {
    const now = Date.now();
    const { late, meds: alertsOn, caregivers } = this.settings();
    const occs = [...this.occurrences()];
    const out = buildIndex({ occurrences: occs, checks: this.store.data.checks, late, alertsOn, features: (cal) => this.features(cal), targetFor: (n) => this.targetFor(n), now });
    // Alert buttons find their dose by a short hash (doses of yesterday, today and tomorrow).
    this.byHash.clear();
    const t0 = startOfDay(new Date(now)).getTime();
    for (const o of occs) if (o.k.kind === "remedio" && o.start >= t0 - DAY && o.start < t0 + 2 * DAY) this.byHash.set(hashOf(o.key), { key: o.key, summary: o.raw.summary, start: o.raw.start, k: o.k });
    const people = this.peopleInfo(out.names);
    delete out.names;
    this.index = { ...out, people: people.list, targets: people.targets, caregivers, tracked: [...this.tracked.keys()], gerencia: this.gerencia.state };
    const json = JSON.stringify({ ...this.index, at: null, meds: this.index.meds.map((m) => ({ ...m, late_min: Math.floor(m.late_min / 5) })) });
    if (json !== this.indexJson) {
      this.indexJson = json;
      this.onChange(this.index);
    }
    this.publishSensors().catch(() => {});
  }

  features(cal) {
    const st = this.calState().get(cal);
    return Number((st && st.attributes && st.attributes.supported_features) || 0);
  }

  // ---------------------------------------------------------------- alerts

  tick() {
    // A new day: move the followed window.
    const day = ymd(new Date());
    for (const [id, t] of this.tracked) if (t.day !== day) this.track(id);
    this.rebuild();
    this.sendAlerts().catch((err) => this.log.warn(`Avisos: ${err.message}`));
  }

  async sendAlerts() {
    if (!this.index || !this.ha.ready) return;
    const { meds: on, late, caregivers } = this.settings();
    if (!on) return;
    const now = Date.now();
    for (const m of this.index.meds) {
      if (m.taken || !m.alert) continue;
      const start = msOf(m.start);
      const sent = this.store.data.sent[m.key] || {};
      const own = m.notify ? [m.notify] : [];
      const lateMs = late * 60000;
      if (!sent.on && now >= start && now - start < Math.max(lateMs, 30 * 60000)) {
        await this.notify(m, own.length ? own : caregivers, "on");
      } else if (sent.snooze_until && now >= Date.parse(sent.snooze_until)) {
        delete sent.snooze_until;
        await this.notify(m, own.length ? own : caregivers, "snoozed");
      } else if (late > 0 && !sent.late && !sent.snooze_until && now >= start + lateMs && now - start < lateMs + 3 * 3600 * 1000) {
        await this.notify(m, [...new Set([...own, ...caregivers])], "late");
      }
    }
  }

  async notify(m, targets, stage) {
    this.store.markSent(m.key, stage, targets);
    if (!targets.length) return;
    const h = hashOf(m.key);
    const late = stage === "late";
    const who = m.who ? `${m.who} · ` : "";
    const title = late ? `⚠️ ${m.summary} atrasado` : `💊 ${m.summary}`;
    const message = late
      ? `${m.who || "Alguém"} ainda não tomou o das ${m.time} (${Math.max(1, Math.floor((Date.now() - msOf(m.start)) / 60000))} min).${m.dose ? ` Dose: ${m.dose}.` : ""}`
      : `${who}${m.dose ? `${m.dose} · ` : ""}${m.time}`;
    const url = ingressUrl();
    const data = {
      tag: `cronologia-${h}`,
      group: "cronologia-remedios",
      channel: "Remédios",
      importance: "high",
      priority: "high",
      ttl: 0,
      sticky: "true",
      actions: [
        { action: `CRONOLOGIA_TOMEI_${h}`, title: "Tomei" },
        { action: `CRONOLOGIA_ADIAR_${h}`, title: `Adiar ${SNOOZE_MIN} min` },
      ],
      push: { "interruption-level": "time-sensitive" },
      ...(url ? { url, clickAction: url } : {}),
    };
    for (const target of targets) {
      try {
        await this.ha.send({ type: "call_service", domain: "notify", service: target, service_data: { title, message, data } });
        this.log.info(`Aviso (${stage}) de ${m.summary} ${m.time} para ${target}`);
      } catch (err) {
        this.log.warn(`Aviso para ${target} falhou: ${err.message}`);
      }
    }
  }

  /** Removes the alert of a dose from every phone that got it. */
  async clearAlert(key) {
    const sent = this.store.data.sent[key];
    if (!sent || !sent.targets || !sent.targets.length) return;
    const tag = `cronologia-${hashOf(key)}`;
    for (const target of sent.targets) {
      await this.ha.send({ type: "call_service", domain: "notify", service: target, service_data: { message: "clear_notification", data: { tag } } }).catch(() => {});
    }
  }

  async testAlert(target) {
    if (!/^mobile_app_[a-z0-9_]+$/.test(target || "")) throw coded("invalid_format", "Celular inválido");
    await this.ha.send({
      type: "call_service",
      domain: "notify",
      service: target,
      service_data: { title: "💊 CronologIA", message: "Teste: assim chega o aviso do remédio.", data: { tag: "cronologia-teste", channel: "Remédios", importance: "high", priority: "high", ttl: 0 } },
    });
  }

  onAction(data) {
    const m = /^CRONOLOGIA_(TOMEI|ADIAR)_([a-f0-9]{10})$/.exec((data && data.action) || "");
    if (!m) return;
    const occ = this.byHash.get(m[2]);
    if (!occ) return this.log.warn(`Botão do aviso para um remédio que não achei (${m[2]})`);
    if (m[1] === "TOMEI") {
      this.log.info(`Tomei pelo celular: ${occ.summary} ${hm(msOf(occ.start))}`);
      this.check(occ.key, true, `${occ.k.who || "Celular"} (celular)`, "remedio");
    } else {
      const s = this.store.data.sent[occ.key] || (this.store.data.sent[occ.key] = { targets: [] });
      s.snooze_until = new Date(Date.now() + SNOOZE_MIN * 60000).toISOString();
      this.store.save();
      this.log.info(`Adiado ${SNOOZE_MIN} min: ${occ.summary}`);
    }
  }

  /** cronologia_feito {nome: "Filtro de água"} from an automation or an NFC tag. */
  onFeito(data) {
    const name = foldText((data && (data.nome || data.tarefa || data.remedio || data.item)) || "");
    if (!name) return;
    const who = foldText((data && data.quem) || "");
    const now = Date.now();
    const match = (o) => foldText(o.raw.summary) === name && (!who || foldText(o.k.who) === who || !o.k.who);
    const list = [...this.occurrences()].filter(match);
    const maint = list.find((o) => o.k.kind === "manutencao" && !o.raw.rrule);
    if (maint) {
      return this.maintDone(maint.cal, maint.raw.uid, "Automação").catch((err) => this.log.warn(`cronologia_feito: ${err.message}`));
    }
    // Doses and chores: the one of today closest to now that is still open.
    const t0 = startOfDay(new Date()).getTime();
    const open = list
      .filter((o) => ["remedio", "rotina", "manutencao"].includes(o.k.kind) && o.start < t0 + DAY && o.end > t0 && !this.store.data.checks[o.key])
      .sort((a, b) => Math.abs(a.start - now) - Math.abs(b.start - now))[0];
    if (!open) return this.log.warn(`cronologia_feito: nada aberto hoje com o nome "${data.nome || data.tarefa || data.remedio || data.item}"`);
    this.check(open.key, true, "Automação", open.k.kind);
  }

  // ---------------------------------------------------------------- actions

  check(key, done, by, kind) {
    this.store.setCheck(key, done ? { by, kind } : null);
    if (done) this.clearAlert(key).catch(() => {});
    this.changed();
  }

  findRaw(cal, uid) {
    const t = this.tracked.get(cal);
    return t && t.events.find((e) => e.uid === uid);
  }

  /** Maintenance done today: the event moves to today + interval, with today in its history. */
  async maintDone(cal, uid, by) {
    const raw = this.findRaw(cal, uid);
    if (!raw) throw coded("not_found", "Não achei essa manutenção no calendário");
    const k = parseKind(raw.description);
    if (!k || k.kind !== "manutencao") throw coded("invalid_format", "Não é uma manutenção");
    if (raw.rrule) {
      this.check(occurrenceKey(cal, raw), true, by, "manutencao");
      return { moved: false };
    }
    const event = maintDone(raw, k, new Date());
    const before = { summary: raw.summary, start: raw.start, end: raw.end, description: raw.description || "", ...(raw.location ? { location: raw.location } : {}) };
    const feat = this.features(cal);
    if (feat & F.UPDATE) {
      await this.ha.send({ type: "calendar/event/update", entity_id: cal, uid, event: toHAEvent(event) });
      this.undo.set(`${cal}|${uid}`, { before, at: Date.now() });
    } else if (feat & F.CREATE && feat & F.DELETE) {
      await this.ha.send({ type: "calendar/event/create", entity_id: cal, event: toHAEvent(event) });
      await this.ha.send({ type: "calendar/event/delete", entity_id: cal, uid });
    } else throw coded("not_supported", "Esse calendário não deixa mudar eventos");
    this.log.info(`Manutenção feita: ${raw.summary} (${by}); próxima em ${event.start.slice(0, 10)}`);
    this.refreshCalendar(cal);
    return { moved: true, next: event.start.slice(0, 10), undo: !!(feat & F.UPDATE) };
  }

  async maintUndo(cal, uid) {
    const u = this.undo.get(`${cal}|${uid}`);
    if (!u || Date.now() - u.at > 30 * 60000) throw coded("not_found", "Não dá mais para desfazer");
    await this.ha.send({ type: "calendar/event/update", entity_id: cal, uid, event: toHAEvent(u.before) });
    this.undo.delete(`${cal}|${uid}`);
    this.refreshCalendar(cal);
  }

  // ---------------------------------------------------------------- sensors

  async publishSensors() {
    if (!this.index || !this.token) return;
    const ix = this.index;
    const pending = ix.meds.filter((m) => !m.taken);
    const late = ix.meds.filter((m) => m.state === "atrasado");
    const next = pending.find((m) => m.state === "depois");
    const desc = (m) => `${m.time ? `${m.time} ` : ""}${m.summary}${m.who ? ` (${m.who})` : ""}`;
    const overdue = ix.maint.filter((m) => m.state === "vencida");
    const soon = ix.maint.filter((m) => m.state === "perto");
    const sensors = {
      "sensor.cronologia_remedios_hoje": {
        state: pending.length,
        attributes: { friendly_name: "CronologIA Remédios a tomar hoje", icon: "mdi:pill", unit_of_measurement: "doses", tomados: ix.meds.length - pending.length, total: ix.meds.length, atrasados: late.map(desc), proximo: next ? desc(next) : null, pendentes: pending.map(desc) },
      },
      "binary_sensor.cronologia_remedio_atrasado": {
        state: late.length ? "on" : "off",
        attributes: { friendly_name: "CronologIA Remédio atrasado", device_class: "problem", icon: "mdi:pill-off", atrasados: late.map(desc) },
      },
      "sensor.cronologia_manutencoes_vencidas": {
        state: overdue.length,
        attributes: { friendly_name: "CronologIA Manutenções vencidas", icon: "mdi:wrench-clock", unit_of_measurement: "itens", vencidas: overdue.map((m) => `${m.summary} (${m.due})`), proximas: soon.map((m) => `${m.summary} (${m.due})`) },
      },
    };
    const json = JSON.stringify(sensors);
    if (json === this.sensorsJson && Date.now() - this.sensorsAt < 10 * 60000) return;
    this.sensorsJson = json;
    this.sensorsAt = Date.now();
    for (const [entity, body] of Object.entries(sensors)) {
      try {
        const res = await fetch(`${this.rest}/states/${entity}`, {
          method: "POST",
          headers: { authorization: `Bearer ${this.token}`, "content-type": "application/json" },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(10000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } catch (err) {
        this.sensorsJson = "";
        return this.log.warn(`Sensor ${entity}: ${err.message}`);
      }
    }
  }
}
