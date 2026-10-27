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
import { parseKind, occurrenceKey, maintDone, foldText, buildIndex, buildDescription, isoWithOffset } from "./kinds.js";
import { toHAEvent } from "./events.js";
import { scoreSettings, periodOf, tally, winnerOf } from "./score.js";
import { asActor } from "./actor.js";

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
  constructor({ ha, store, log, rest, token, calState, gerencia, todos, onChange }) {
    this.ha = ha;
    this.store = store;
    this.log = log;
    this.rest = rest;
    this.token = token;
    this.calState = calState; // id -> HA state (features, name)
    this.gerencia = gerencia;
    this.todos = todos;
    this.onChange = onChange;
    this.tracked = new Map(); // cal -> {sub, events, day, poll}
    this.persons = new Map(); // person.x -> {id, name, trackers}
    this.targets = new Set(); // mobile_app_x
    this.byHash = new Map(); // alert hash -> occurrence
    this.undo = new Map(); // cal|uid -> previous event (maintenance)
    this.index = null;
    this.lastTest = null; // {target, action, at}: a button tapped on the test alert
    this.indexJson = "";
    this.sensorsJson = "";
    this.sensorsAt = 0;
    this.timer = null;
    this.dirty = null;
  }

  // ---------------------------------------------------------------- start

  start() {
    this.ha.subscribe({ type: "subscribe_events", event_type: "mobile_app_notification_action" }, (ev) => this.onAction(ev && ev.data));
    // the Extrato says where these came from
    this.ha.subscribe({ type: "subscribe_events", event_type: "cronologia_feito" }, (ev) => asActor({ by: this.participant(String((ev && ev.data && ev.data.quem) || "")), via: "Automação" }, () => this.onFeito(ev && ev.data, ev && ev.context)));
    this.ha.subscribe({ type: "subscribe_events", event_type: "cronologia_pontos" }, (ev) => asActor({ by: this.participant(String((ev && ev.data && ev.data.quem) || "")), via: "ResolvIA" }, () => this.onPoints(ev && ev.data)));
    this.ha.subscribe({ type: "subscribe_events", event_type: "cronologia_demerito" }, (ev) => asActor({ via: "Automação" }, () => this.onDemerit(ev && ev.data)));
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
      this.persons.set(st.entity_id, { id: st.entity_id, name: a.friendly_name || st.entity_id.slice(7), user_id: a.user_id || null, trackers: Array.isArray(a.device_trackers) ? a.device_trackers : [] });
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

  /** Name of the person using the app (by the Home Assistant user behind ingress). */
  personOfUser(userId, displayName) {
    const byId = userId && [...this.persons.values()].find((p) => p.user_id === userId);
    if (byId) return byId.name;
    const first = foldText(displayName).split(" ")[0];
    const byName = first && [...this.persons.values()].find((p) => foldText(p.name).split(" ")[0] === first);
    return byName ? byName.name : (displayName || "").trim().split(/\s+/)[0] || "";
  }

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
    this.index = { ...out, people: people.list, targets: people.targets, caregivers, tracked: [...this.tracked.keys()], gerencia: this.gerencia.state, score: this.scoreIndex(now), todos: this.todos && this.store.data.app.resolvia_on === true ? this.todos.index(now, this.store.data.app.todo_hidden || [], { undated: !!this.store.data.app.todo_undated, exclude: this.mirror ? this.mirror.uids() : null }) : { lists: [], items: [] }, mirror: this.mirror ? this.mirror.status() : null, test: this.lastTest };
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
    this.rollover().catch((err) => this.log.warn(`Placar: ${err.message}`));
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

  /**
   * The test alert looks like a real one, buttons included. Tapping a button
   * comes back here (mobile_app_notification_action) and the phone gets a
   * confirmation, so the whole round trip is tested.
   */
  async testAlert(target) {
    if (!/^mobile_app_[a-z0-9_]+$/.test(target || "")) throw coded("invalid_format", "Celular inválido");
    const url = ingressUrl();
    await this.ha.send({
      type: "call_service",
      domain: "notify",
      service: target,
      service_data: {
        title: "💊 Teste do CronologIA",
        message: "Assim chega o aviso do remédio. Toque em Tomei para conferir se o botão chega ao app.",
        data: {
          tag: "cronologia-teste",
          channel: "Remédios",
          importance: "high",
          priority: "high",
          ttl: 0,
          actions: [
            { action: `CRONOLOGIA_TESTE_TOMEI_${target}`, title: "Tomei" },
            { action: `CRONOLOGIA_TESTE_ADIAR_${target}`, title: `Adiar ${SNOOZE_MIN} min` },
          ],
          push: { "interruption-level": "time-sensitive" },
          ...(url ? { url, clickAction: url } : {}),
        },
      },
    });
  }

  /** A button of the test alert was tapped: confirm on that phone and on the app screen. */
  async onTestAction(kind, target) {
    this.log.info(`Teste do aviso: botão ${kind === "TOMEI" ? "Tomei" : "Adiar"} tocado em ${target}`);
    this.lastTest = { target, action: kind === "TOMEI" ? "tomei" : "adiar", at: Date.now() };
    this.changed();
    const message =
      kind === "TOMEI"
        ? "O botão Tomei chegou ao CronologIA. Os avisos de remédio estão prontos neste celular."
        : `O botão Adiar chegou ao CronologIA. Num aviso de verdade, ele avisa de novo em ${SNOOZE_MIN} minutos.`;
    await this.ha
      .send({ type: "call_service", domain: "notify", service: target, service_data: { title: "✅ Funcionou", message, data: { tag: "cronologia-teste", channel: "Remédios", ttl: 0 } } })
      .catch((err) => this.log.warn(`Confirmação do teste para ${target} falhou: ${err.message}`));
  }

  onAction(data) {
    const t = /^CRONOLOGIA_TESTE_(TOMEI|ADIAR)_(mobile_app_[a-z0-9_]+)$/.exec((data && data.action) || "");
    if (t) return this.onTestAction(t[1], t[2]);
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

  /**
   * What the other apps (ResolvIA) need to give points: whether the scoreboard
   * is on, who plays, and which Home Assistant user is which player.
   */
  placarInfo() {
    const st = scoreSettings(this.store.data.app);
    const on = !!st.enabled && st.participants.length > 0;
    const usuarios = {};
    if (on) {
      for (const p of this.persons.values()) {
        const who = p.user_id && this.participant(p.name);
        if (who) usuarios[p.user_id] = who;
      }
    }
    return { ativo: on, periodo: st.period, participantes: on ? st.participants : [], usuarios };
  }

  /**
   * Points for a to-do task, from the ResolvIA (event cronologia_pontos):
   * {acao: somar | desfazer | trocar, chave: "resolvia|todo.x|uid|YYYY-MM-DD",
   *  quem, pontos, titulo}. The same task on the same day counts once, even
   * if it was marked here too.
   */
  onPoints(data) {
    const d = data || {};
    // Mais › Integrações › Tarefas do ResolvIA off: nothing from there counts
    if (this.store.data.app.resolvia_on !== true) return;
    const key = String(d.chave || "");
    // a maintenance or routine taken to the ResolvIA list (Levar para o ResolvIA)
    const esp = /^espelho\|(todo\.[a-z0-9_]+)\|([^|]{1,300})$/.exec(key);
    if (esp) {
      if (!this.mirror) return;
      const acao = String(d.acao || "somar");
      const who = acao === "desfazer" ? "" : this.participant(String(d.quem || ""));
      if (acao !== "desfazer" && !who) return this.log.warn(`Feito pelo ResolvIA por quem não está no placar: ${String(d.quem || "").slice(0, 40)}`);
      this.mirror.onPoints(acao, esp[1], esp[2], who).catch((err) => this.log.warn(`Levar para o ResolvIA: ${err.message}`));
      return;
    }
    if (!/^resolvia\|todo\.[a-z0-9_]+\|[^|]{1,300}\|\d{4}-\d{2}-\d{2}$/.test(key)) return this.log.warn(`Pontos com chave inválida: ${key.slice(0, 80)}`);
    const acao = String(d.acao || "somar");
    if (acao === "desfazer") {
      if (this.store.removePoints(key)) this.changed();
      return;
    }
    const who = this.participant(String(d.quem || ""));
    if (!who) return this.log.warn(`Pontos para quem não está no placar: ${String(d.quem || "").slice(0, 40)}`);
    if (acao === "trocar") {
      const e = this.store.pointsByKey(key);
      if (e) {
        this.store.addPoints({ ...e, who });
        this.changed();
      }
      return;
    }
    const n = Math.round(Number(d.pontos) || 0);
    if (n < 1 || n > 1000 || this.store.pointsByKey(key)) return;
    const title = String(d.titulo || "Tarefa").trim().slice(0, 120) || "Tarefa";
    this.store.addPoints({ key, who, points: n, title, kind: "tarefa" });
    this.log.info(`+${n} para ${who}: ${title} (ResolvIA)`);
    this.changed();
  }

  /** A to-do task marked here (Tarefas com prazo): its ResolvIA points, same key as there. */
  todoPoints(list, uid, summary, points, done, who) {
    const key = `resolvia|${list}|${uid}|${ymd(new Date())}`;
    if (!done) {
      if (this.store.removePoints(key)) this.changed();
      return null;
    }
    const person = this.participant(who);
    if (!(points > 0) || !person || this.store.pointsByKey(key)) return null;
    this.store.addPoints({ key, who: person, points, title: String(summary || "Tarefa").slice(0, 120), kind: "tarefa" });
    this.changed();
    return { key, who: person, points };
  }

  /** cronologia_feito {nome: "Filtro de água"} from an automation or an NFC tag. */
  onFeito(data) {
    const name = foldText((data && (data.nome || data.tarefa || data.remedio || data.item)) || "");
    if (!name) return;
    const who = foldText((data && data.quem) || "");
    const now = Date.now();
    // "quem" is who did it (the points go to them); with two items of the same name, theirs comes first
    const mine = (o) => (who && foldText(o.k.who) === who ? 0 : 1);
    const list = [...this.occurrences()].filter((o) => foldText(o.raw.summary) === name).sort((a, b) => mine(a) - mine(b));
    const maint = list.find((o) => o.k.kind === "manutencao" && !o.raw.rrule);
    if (maint) {
      return this.maintDone(maint.cal, maint.raw.uid, "Automação", data.quem || "").catch((err) => this.log.warn(`cronologia_feito: ${err.message}`));
    }
    // Doses and chores: the one of today closest to now that is still open.
    const t0 = startOfDay(new Date()).getTime();
    const open = list
      .filter((o) => ["remedio", "rotina", "manutencao"].includes(o.k.kind) && o.start < t0 + DAY && (o.end > t0 || (o.k.after && !o.raw.rrule)) && !this.store.data.checks[o.key])
      .sort((a, b) => mine(a) - mine(b) || Math.abs(a.start - now) - Math.abs(b.start - now))[0];
    if (!open) return this.log.warn(`cronologia_feito: nada aberto hoje com o nome "${data.nome || data.tarefa || data.remedio || data.item}"`);
    Promise.resolve(this.check(open.key, true, "Automação", open.k.kind, data.quem || "")).catch((err) => this.log.warn(`cronologia_feito: ${err.message}`));
  }

  // ---------------------------------------------------------------- actions

  /**
   * Marks (or unmarks) an occurrence as done. `who` is the person who did it:
   * a chore or maintenance with points gives them to that person.
   */
  check(key, done, by, kind, who = "") {
    const c = this.store.data.checks[key];
    if (c && c.moved) {
      // a routine that already moved to its next date: Desfazer moves it back; a late "Quem fez?" only changes who
      if (!done) return this.afterUndo(key, c);
      return this.afterWho(key, who, by);
    }
    if (done) {
      const o = this.findOccurrence(key);
      if (o && o.k.kind === "rotina" && o.k.after && !o.raw.rrule) return this.afterDone(o, key, by, who);
    }
    const person = this.participant(who);
    this.store.setCheck(key, done ? { by: person || who || by, kind } : null);
    if (done) {
      this.clearAlert(key).catch(() => {});
      const o = this.findOccurrence(key);
      const points = o && o.k.points;
      if (points > 0 && person) this.store.addPoints({ key, who: person, points, title: o.raw.summary, kind: o.k.kind });
      else this.store.removePoints(key);
    } else this.store.removePoints(key);
    this.changed();
  }

  findOccurrence(key) {
    for (const o of this.occurrences()) if (o.key === key) return o;
    return null;
  }

  // ---------------------------------------------------------------- Recompensas

  /** The participant with this name (accents and case ignored), or "". */
  participant(name) {
    const st = scoreSettings(this.store.data.app);
    if (!st.enabled || !name) return "";
    return st.participants.find((p) => foldText(p) === foldText(name) || foldText(p).split(" ")[0] === foldText(name).split(" ")[0]) || "";
  }

  /** Gives a point entry to someone else ("Foi a Andressa"). */
  reassign(key, who) {
    const person = this.participant(who);
    if (!person) throw coded("invalid_format", "Essa pessoa não está no placar");
    const e = this.store.pointsByKey(key);
    if (e) this.store.addPoints({ ...e, who: person });
    const c = this.store.data.checks[key];
    if (c) this.store.setCheck(key, { ...c, by: person });
    this.changed();
  }

  /** Points for something that is not in the calendar ("lavou o carro"). */
  extraPoints(who, points, title) {
    const person = this.participant(who);
    if (!person) throw coded("invalid_format", "Escolha quem fez");
    const n = Math.round(Number(points) || 0);
    if (!n || Math.abs(n) > 1000) throw coded("invalid_format", "Pontos inválidos");
    const t = String(title || "").trim();
    if (!t) throw coded("invalid_format", "Diga o que foi feito");
    this.store.addPoints({ key: `extra|${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, who: person, points: n, title: t, kind: "extra" });
    this.changed();
  }

  /** Recompensas › Deméritos: one of the list, against someone. */
  demerit(id, who) {
    const d = (this.store.data.app.demerits || []).find((x) => x.id === id);
    if (!d) throw coded("not_found", "Esse demérito não existe mais");
    const person = this.participant(who);
    if (!person) throw coded("invalid_format", "Escolha quem foi");
    const key = `demerito|${d.id}|${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
    this.store.addPoints({ key, who: person, points: -d.points, title: d.title, kind: "demerito" });
    this.log.info(`-${d.points} para ${person}: ${d.title}`);
    this.changed();
    return { key, who: person, points: -d.points };
  }

  /** cronologia_demerito {nome: "Toalha molhada na cama", quem: "Diego"} from an automation, Alexa routine or NFC tag. */
  onDemerit(data) {
    const name = foldText((data && (data.nome || data.demerito)) || "");
    const d = name && (this.store.data.app.demerits || []).find((x) => foldText(x.title) === name);
    if (!d) return this.log.warn(`Demérito não encontrado: ${String((data && data.nome) || "").slice(0, 60)}`);
    try {
      this.demerit(d.id, String((data && data.quem) || ""));
    } catch (err) {
      this.log.warn(`Demérito "${d.title}": ${err.message}`);
    }
  }

  /**
   * Recompensas › Pontos: takes an entry off the placar (a wrong score). What was done stays
   * done; only the points go. The entry is kept for a while so Desfazer can bring it back.
   */
  removePoints(key) {
    const e = this.store.pointsByKey(key);
    if (!e) throw coded("not_found", "Esse registro não existe mais");
    this.removed = this.removed || new Map();
    const now = Date.now();
    for (const [k, v] of this.removed) if (now - v.t > 10 * 60000) this.removed.delete(k);
    this.removed.set(key, { e: { ...e }, t: now });
    this.store.removePoints(key, "tirou");
    this.log.info(`Pontos tirados: ${e.title} (${e.who}, ${e.points > 0 ? "+" : ""}${e.points})`);
    this.changed();
  }

  /** Desfazer of removePoints: the same entry, with its date, back on the placar. */
  restorePoints(key) {
    const r = this.removed && this.removed.get(key);
    if (!r || Date.now() - r.t > 10 * 60000) throw coded("not_found", "Já não dá para desfazer");
    this.removed.delete(key);
    if (!this.store.pointsByKey(key)) this.store.addPoints(r.e, "voltou");
    this.changed();
  }

  /** Extrato: older lines (Ver mais). */
  scoreLog(beforeId, limit) {
    return this.store.logPage(Number(beforeId) || 0, Math.max(1, Math.min(100, Number(limit) || 40)));
  }

  /** What the Recompensas screen shows. */
  scoreIndex(now = Date.now()) {
    const st = scoreSettings(this.store.data.app);
    const sc = this.store.data.score;
    const cur = periodOf(new Date(now), st);
    const next = periodOf(new Date(Date.parse(`${cur.end}T12:00:00`)), st);
    const rows = tally(sc.entries, st.participants, cur.start, cur.end);
    const t0 = new Date(`${cur.start}T00:00:00`).getTime();
    const t1 = new Date(`${cur.end}T00:00:00`).getTime();
    const entries = sc.entries
      .filter((e) => Date.parse(e.at) >= t0 && Date.parse(e.at) < t1)
      .sort((a, b) => Date.parse(b.at) - Date.parse(a.at))
      .slice(0, 80);
    return {
      ...st,
      current: { ...cur, reward: sc.rewards[cur.key] || "", prizes: sc.prizes[cur.key] || {} },
      next: { ...next, reward: sc.rewards[next.key] || "", prizes: sc.prizes[next.key] || {} },
      rows,
      leader: winnerOf(rows),
      entries,
      history: sc.history.slice(0, 26),
      // Extrato: the newest changes; Ver mais asks for the older ones
      log: this.store.logPage(0, 20),
      log_count: sc.log.length,
    };
  }

  resetPeriod() {
    const st = scoreSettings(this.store.data.app);
    const cur = periodOf(new Date(), st);
    const c = this.store.data.score.current;
    if (!c || c.key !== cur.key || c.end !== cur.end) this.store.setCurrentPeriod({ key: cur.key, start: cur.start, end: cur.end });
  }

  /** A new period started: the last one goes to the history and the result to the phones. */
  async rollover() {
    const st = scoreSettings(this.store.data.app);
    if (!st.enabled) return;
    const sc = this.store.data.score;
    const cur = periodOf(new Date(), st);
    if (!sc.current) return this.store.setCurrentPeriod({ key: cur.key, start: cur.start, end: cur.end });
    if (sc.current.key === cur.key) return;
    const prev = sc.current;
    const rows = tally(sc.entries, st.participants, prev.start, prev.end);
    const winner = winnerOf(rows);
    // the winner's own prize, else the one for whoever wins
    const reward = winner ? this.store.prizeOf(prev.key, winner) : sc.rewards[prev.key] || "";
    const totals = Object.fromEntries(rows.map((r) => [r.name, r.points]));
    this.store.closePeriod({ key: prev.key, start: prev.start, end: prev.end, totals, winner, reward, delivered: false }, { key: cur.key, start: cur.start, end: cur.end });
    this.log.info(`Placar fechado (${prev.start}): ${rows.map((r) => `${r.name} ${r.points}`).join(" × ")}${winner ? `, ${winner} venceu` : ", empate"}`);
    if (!st.notify) return;
    const score = rows.map((r) => r.points).join(" × ");
    const per = sc.prizes[cur.key] || {};
    const nextReward = Object.keys(per).length ? st.participants.map((n) => `${n}: ${per[n] || sc.rewards[cur.key] || "livre"}`).join(" · ") : sc.rewards[cur.key];
    const message = `${winner ? `${winner} venceu: ${score}.` : rows.some((r) => r.points > 0) ? `Empate: ${score}.` : "Ninguém pontuou."}${winner && reward ? ` Prêmio: ${reward}.` : ""}${nextReward ? ` Prêmio agora: ${nextReward}.` : ""}`;
    const targets = [...new Set(st.participants.map((n) => this.targetFor(n)).filter(Boolean))];
    for (const target of targets) {
      await this.ha
        .send({ type: "call_service", domain: "notify", service: target, service_data: { title: "🏆 Placar fechado", message, data: { tag: "cronologia-placar", group: "cronologia-placar" } } })
        .catch((err) => this.log.warn(`Resultado para ${target}: ${err.message}`));
    }
  }

  findRaw(cal, uid) {
    const t = this.tracked.get(cal);
    return t && t.events.find((e) => e.uid === uid);
  }

  /** Maintenance done today: the event moves to today + interval, with today in its history. */
  async maintDone(cal, uid, by, who = "") {
    const raw = this.findRaw(cal, uid);
    if (!raw) throw coded("not_found", "Não achei essa manutenção no calendário");
    const k = parseKind(raw.description);
    if (!k || k.kind !== "manutencao") throw coded("invalid_format", "Não é uma manutenção");
    if (raw.rrule) {
      const key = occurrenceKey(cal, raw);
      this.check(key, true, by, "manutencao", who);
      return { moved: false, key };
    }
    const event = maintDone(raw, k, new Date());
    const before = { summary: raw.summary, start: raw.start, end: raw.end, description: raw.description || "", ...(raw.location ? { location: raw.location } : {}) };
    const feat = this.features(cal);
    if (feat & F.UPDATE) {
      await this.ha.send({ type: "calendar/event/update", entity_id: cal, uid, event: toHAEvent(event) });
      this.undo.set(`${cal}|${uid}`, { before, at: Date.now() });
    } else if (feat & F.CREATE && feat & F.DELETE) {
      await this.recreate(cal, raw, event);
    } else throw coded("not_supported", "Esse calendário não deixa mudar eventos");
    // points: one entry per maintenance done (the event moves, so the key carries the day)
    const person = this.participant(who);
    const key = `maint|${cal}|${uid}|${new Date().toISOString().slice(0, 10)}`;
    if (k.points > 0 && person) this.store.addPoints({ key, who: person, points: k.points, title: raw.summary, kind: "manutencao" });
    if (feat & F.UPDATE) this.undo.set(`${cal}|${uid}`, { ...this.undo.get(`${cal}|${uid}`), key });
    this.log.info(`Manutenção feita: ${raw.summary} (${person || who || by}); próxima em ${event.start.slice(0, 10)}`);
    this.refreshCalendar(cal);
    this.changed();
    return { moved: true, next: event.start.slice(0, 10), undo: !!(feat & F.UPDATE), key: k.points > 0 && person ? key : null };
  }

  /**
   * A routine that comes back N days after being done ("Volta: 2 dias depois de feita"):
   * the event moves to today + N (only the next one is ever in the calendar), with today
   * in its history; the check keeps where it was, for Desfazer.
   */
  async afterDone(o, key, by, who = "") {
    const { cal, raw, k } = o;
    const today = new Date();
    // already done today (the moved event marked again from the calendar): nothing to do
    const same = (v) => v && v.moved && v.moved.cal === cal && v.moved.day === ymd(today) && (v.moved.uid === raw.uid || (v.moved.recreated && v.moved.summary === raw.summary));
    if (Object.values(this.store.data.checks).some(same)) return { moved: false };
    const event = maintDone(raw, { ...k, every: k.after }, today);
    const feat = this.features(cal);
    // a calendar that can't change events (Google): a new event on the next date, the old one deleted
    let recreated = false;
    if (feat & F.UPDATE) await this.ha.send({ type: "calendar/event/update", entity_id: cal, uid: raw.uid, event: toHAEvent(event) });
    else if (feat & F.CREATE && feat & F.DELETE) {
      await this.recreate(cal, raw, event);
      recreated = true;
    } else throw coded("not_supported", "Esse calendário não deixa mudar eventos");
    const person = this.participant(who);
    this.store.setCheck(key, { by: person || who || by, kind: "rotina", moved: { cal, uid: raw.uid, start: raw.start, end: raw.end, day: ymd(today), ...(recreated ? { recreated: true, summary: raw.summary } : {}) } });
    if (k.points > 0 && person) this.store.addPoints({ key, who: person, points: k.points, title: raw.summary, kind: "rotina" });
    else this.store.removePoints(key);
    this.log.info(`Rotina feita: ${raw.summary} (${person || who || by}); volta em ${event.start.slice(0, 10)}`);
    this.refreshCalendar(cal);
    this.changed();
    return { moved: true, next: event.start.slice(0, 10) };
  }

  /**
   * Moves an event on a calendar that can't change events (Google): the old one is deleted
   * first, so a failure never leaves two; if the new one can't be created, the old one comes
   * back. A copy already on the new date (left by an earlier try) is reused, not doubled.
   */
  async recreate(cal, raw, event) {
    const t = this.tracked.get(cal);
    const twin = t && t.events.find((e) => e.uid !== raw.uid && e.summary === raw.summary && !e.rrule && String(e.start).slice(0, 10) === String(event.start).slice(0, 10));
    await this.ha.send({ type: "calendar/event/delete", entity_id: cal, uid: raw.uid });
    if (twin) return;
    try {
      await this.ha.send({ type: "calendar/event/create", entity_id: cal, event: toHAEvent(event) });
    } catch (err) {
      const back = { summary: raw.summary, start: raw.start, end: raw.end, description: raw.description || "", ...(raw.location ? { location: raw.location } : {}) };
      await this.ha.send({ type: "calendar/event/create", entity_id: cal, event: toHAEvent(back) }).catch(() => {});
      throw err;
    }
  }

  /** The event of a routine that moved (a recreated one has a new uid: found by its name). */
  movedRaw(m) {
    const raw = this.findRaw(m.cal, m.uid);
    if (raw || !m.recreated) return raw;
    const t = this.tracked.get(m.cal);
    return (t && t.events.find((e) => e.summary === m.summary && !e.rrule && (parseKind(e.description) || {}).after)) || null;
  }

  /** Desfazer of a routine that moved: back to where it was, without today in its history. */
  async afterUndo(key, c) {
    const m = c.moved;
    const raw = this.movedRaw(m);
    if (raw) {
      const k = parseKind(raw.description);
      const description = k && k.kind === "rotina" ? buildDescription({ ...k, history: (k.history || []).filter((d) => d !== m.day) }) : raw.description || "";
      const event = { summary: raw.summary, start: m.start, end: m.end, description, ...(raw.location ? { location: raw.location } : {}) };
      if (m.recreated) await this.recreate(m.cal, raw, event);
      else await this.ha.send({ type: "calendar/event/update", entity_id: m.cal, uid: raw.uid, event: toHAEvent(event) });
      this.refreshCalendar(m.cal);
    }
    this.store.setCheck(key, null);
    this.store.removePoints(key);
    this.changed();
    return { moved: false };
  }

  /** "Quem fez?" answered after a routine already moved: only who (and the points) change. */
  afterWho(key, who, by) {
    const person = this.participant(who);
    const c = this.store.data.checks[key];
    if (!c || !person) return null;
    this.store.setCheck(key, { ...c, by: person });
    const raw = this.movedRaw(c.moved);
    const k = raw && parseKind(raw.description);
    const e = this.store.pointsByKey(key);
    if (e) this.store.addPoints({ ...e, who: person });
    else if (k && k.points > 0) this.store.addPoints({ key, who: person, points: k.points, title: raw.summary, kind: "rotina" });
    this.changed();
    return null;
  }

  // ---------------------------------------------------------------- Trazer do ResolvIA

  /**
   * The tasks of a to-do list as routines would come out of them (Mais › Integrações ›
   * Trazer uma lista): points and repetition from the ResolvIA, the first date, and
   * whether a routine with that name already exists here.
   */
  bringPreview(entityId) {
    if (this.store.data.app.resolvia_on !== true) throw coded("resolvia_off", "A integração com o ResolvIA está desligada em Mais › Integrações.");
    const todos = this.todos;
    const st = todos && todos.states.get(entityId);
    if (!st) throw coded("not_found", "Essa lista não existe mais");
    const f = Number((st.attributes && st.attributes.supported_features) || 0);
    const app = todos.app();
    const every = (uid) => {
      const n = Number(app && app.repete && app.repete[entityId] && app.repete[entityId][uid]);
      return Number.isFinite(n) && n > 0 ? Math.min(365, Math.round(n)) : null;
    };
    const today = new Date();
    const t0 = ymd(today);
    const existing = new Set([...this.occurrences()].filter((o) => o.k.kind === "rotina").map((o) => foldText(o.raw.summary)));
    const datesAreDeadlines = !!(f & (16 | 32)) && !(app && (app.semPrazo || []).includes(entityId));
    const out = [];
    for (const i of todos.items.get(entityId) || []) {
      if (!i.uid || !String(i.summary || "").trim()) continue;
      if (/\[cr:[0-9a-f]{8}\]/.test(i.description || "")) continue; // a maintenance/routine of this app (Levar para o ResolvIA)
      const n = every(i.uid);
      const done = i.status === "completed";
      if (done && !n) continue; // finished and doesn't come back: nothing to bring
      let date = t0;
      let time = null;
      if (done) {
        const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + n);
        date = ymd(d);
      } else if (datesAreDeadlines && i.due) {
        const due = String(i.due);
        const day = due.slice(0, 10);
        // a late task that repeats stays late (it shows in red); a one-off one starts today
        date = n || day >= t0 ? day : t0;
        if (due.length > 10) {
          const d = new Date(due);
          if (Number.isFinite(d.getTime())) time = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
        }
      }
      out.push({ uid: i.uid, summary: String(i.summary).trim().slice(0, 200), notes: String(i.description || "").trim().slice(0, 2000), points: todos.pointsOf(entityId, i.summary, app), every: n, date, time, done, exists: existing.has(foldText(i.summary)) });
    }
    out.sort((a, b) => (a.every || 999) - (b.every || 999) || a.summary.localeCompare(b.summary, "pt-BR"));
    return { entity_id: entityId, name: (st.attributes && st.attributes.friendly_name) || entityId, canDelete: !!(f & 2), items: out };
  }

  /**
   * Creates one Rotina da casa per chosen task ("Depois de feita" N days when it repeats in
   * the ResolvIA, "Só uma vez" otherwise) and takes the tasks out of the list.
   */
  async bring({ entity_id, calendar, uids, remove = true }) {
    const preview = this.bringPreview(entity_id);
    const feat = this.features(calendar);
    if (!/^calendar\.[a-z0-9_]+$/.test(calendar || "") || !(feat & F.CREATE)) throw coded("not_supported", "Esse calendário não aceita eventos novos");
    const want = new Set(Array.isArray(uids) ? uids : []);
    const chosen = preview.items.filter((i) => want.has(i.uid));
    if (!chosen.length) throw coded("invalid_format", "Escolha ao menos uma tarefa");
    const created = [];
    for (const it of chosen) {
      const k = { kind: "rotina", who: "", points: it.points || 0, notes: it.notes, after: it.every ? { n: it.every, unit: "dias" } : null, history: [] };
      const event = { summary: it.summary, description: buildDescription(k) };
      const [y, m, d] = it.date.split("-").map(Number);
      if (it.time) {
        const [h, mi] = it.time.split(":").map(Number);
        const s = new Date(y, m - 1, d, h, mi);
        event.start = isoWithOffset(s);
        event.end = isoWithOffset(new Date(s.getTime() + 30 * 60000));
      } else {
        event.start = it.date;
        event.end = ymd(new Date(y, m - 1, d + 1));
      }
      await this.ha.send({ type: "calendar/event/create", entity_id: calendar, event: toHAEvent(event) });
      created.push(it);
    }
    this.refreshCalendar(calendar);
    let removed = 0;
    if (remove && preview.canDelete) {
      // a done task that repeats would be created again by the ResolvIA: open it first, then delete it
      const done = created.filter((i) => i.done);
      for (const i of done) await this.todos.setDone(entity_id, i.uid, false).catch(() => {});
      if (done.length) await new Promise((r) => setTimeout(r, 1200));
      await this.ha.send({ type: "call_service", domain: "todo", service: "remove_item", service_data: { item: created.map((i) => i.uid) }, target: { entity_id } });
      removed = created.length;
      // and tell the ResolvIA (2.10.2+) to forget their repetition and points
      await this.ha.send({ type: "fire_event", event_type: "resolvia_esquecer", event_data: { entity_id, uids: created.map((i) => i.uid), tarefas: created.map((i) => i.summary), origem: "CronologIA" } }).catch(() => {});
      this.todos.refresh(entity_id);
    }
    this.log.info(`Trazidas do ResolvIA (${preview.name}): ${created.length} rotinas em ${calendar}${removed ? ", tiradas da lista" : ""}`);
    this.changed();
    return { created: created.length, removed, calendar };
  }

  /** Points of a maintenance done from the ResolvIA when the name came late (Quem fez?). */
  lateMaintPoints(key, cal, uid, title, who) {
    const person = this.participant(who);
    if (!person || !key || this.store.pointsByKey(key)) return;
    const raw = this.findRaw(cal, uid);
    const k = raw && parseKind(raw.description);
    if (!k || !(k.points > 0)) return;
    this.store.addPoints({ key, who: person, points: k.points, title: title || raw.summary, kind: "manutencao" });
    this.changed();
  }

  async maintUndo(cal, uid) {
    const u = this.undo.get(`${cal}|${uid}`);
    if (!u || Date.now() - u.at > 30 * 60000) throw coded("not_found", "Não dá mais para desfazer");
    await this.ha.send({ type: "calendar/event/update", entity_id: cal, uid, event: toHAEvent(u.before) });
    this.undo.delete(`${cal}|${uid}`);
    if (u.key) this.store.removePoints(u.key);
    this.changed();
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
    const sc = ix.score;
    if (sc && sc.enabled) {
      sensors["sensor.cronologia_placar"] = {
        state: sc.leader || (sc.rows.some((r) => r.points > 0) ? "Empate" : "Ninguém"),
        attributes: { friendly_name: "CronologIA Placar", icon: "mdi:trophy", pontos: Object.fromEntries(sc.rows.map((r) => [r.name, r.points])), premio: sc.current.reward || (Object.keys(sc.current.prizes).length ? Object.entries(sc.current.prizes).map(([n, t]) => `${n}: ${t}`).join(" · ") : null), premios: sc.current.prizes, periodo: sc.current.label, termina: sc.current.end },
      };
    }
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
