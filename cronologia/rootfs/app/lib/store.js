// CronologIA keeps in /data/cronologia.json how the calendars look (name,
// color, hidden), the app settings (people and phone alerts too), which
// doses/chores/bills were marked done, and what was already sent to phones.
// Events stay in Home Assistant.
import fs from "node:fs";
import path from "node:path";

export const COLORS = ["vermelho", "coral", "laranja", "ouro", "verde", "menta", "turquesa", "azul", "indigo", "lilas", "rosa", "grafite"];
const CAL_RE = /^calendar\.[a-z0-9_]+$/;
const AI_RE = /^ai_task\.[a-z0-9_]+$/;
const VIEWS = ["mes", "semana", "lista"];
const NOTIFY_RE = /^mobile_app_[a-z0-9_]+$/;
const LATE = [0, 15, 30, 45, 60, 90, 120];
const KEEP_CHECKS_DAYS = 120;
const KEEP_POINTS_DAYS = 400;
const SCORE_PERIODS = ["semana", "quinzena", "mes"];
const YMD_RE = /^\d{4}-\d{2}-\d{2}$/;

const fail = (message) => {
  const err = new Error(message);
  err.code = "invalid_format";
  throw err;
};

/** Validated changes for one calendar ({name, color, hidden}); null clears a field. */
function cleanCalendar(raw) {
  if (!raw || typeof raw !== "object") fail("ajustes inválidos");
  const out = {};
  if ("name" in raw) out.name = raw.name == null ? null : String(raw.name).trim().slice(0, 60) || null;
  if ("color" in raw) out.color = COLORS.includes(raw.color) ? raw.color : null;
  if ("hidden" in raw) out.hidden = raw.hidden ? true : null;
  return out;
}

function cleanApp(raw) {
  if (!raw || typeof raw !== "object") fail("ajustes inválidos");
  const out = {};
  if ("accent" in raw) out.accent = COLORS.includes(raw.accent) ? raw.accent : null;
  if ("week_start" in raw) out.week_start = raw.week_start === 1 ? 1 : raw.week_start === 0 ? 0 : null;
  if ("view" in raw) out.view = VIEWS.includes(raw.view) ? raw.view : null;
  if ("ai_entity" in raw) out.ai_entity = AI_RE.test(raw.ai_entity || "") ? raw.ai_entity : null;
  if ("default_calendar" in raw) out.default_calendar = CAL_RE.test(raw.default_calendar || "") ? raw.default_calendar : null;
  if ("hide_past" in raw) out.hide_past = raw.hide_past ? true : null;
  if ("gerencia_hidden" in raw) out.gerencia_hidden = raw.gerencia_hidden ? true : null;
  if ("todo_hidden" in raw) {
    // to-do lists left out of the agenda (ResolvIA lists)
    const ids = [...new Set((Array.isArray(raw.todo_hidden) ? raw.todo_hidden : []).filter((id) => /^todo\.[a-z0-9_]+$/.test(id)))].slice(0, 100);
    out.todo_hidden = ids.length ? ids : null;
  }
  if ("todo_off_calendar" in raw) out.todo_off_calendar = raw.todo_off_calendar ? true : null;
  if ("people" in raw) {
    // {"Andressa": {notify: "mobile_app_galaxy_s23"}}: whose phone gets the alerts of each person
    const people = {};
    for (const [name, v] of Object.entries(raw.people && typeof raw.people === "object" ? raw.people : {}).slice(0, 40)) {
      const n = String(name).trim().slice(0, 40);
      if (!n) continue;
      people[n] = { notify: v && NOTIFY_RE.test(v.notify || "") ? v.notify : null };
    }
    out.people = Object.keys(people).length ? people : null;
  }
  if ("score" in raw) {
    // Recompensas: who competes, how long a period is, and whether the result goes to the phones
    const a = raw.score && typeof raw.score === "object" ? raw.score : {};
    const participants = [...new Set((Array.isArray(a.participants) ? a.participants : []).map((n) => String(n).trim().slice(0, 40)).filter(Boolean))].slice(0, 10);
    out.score = {
      enabled: !!a.enabled,
      participants,
      period: SCORE_PERIODS.includes(a.period) ? a.period : "semana",
      anchor: YMD_RE.test(a.anchor || "") ? a.anchor : null,
      notify: a.notify !== false,
    };
  }
  if ("alerts" in raw) {
    const a = raw.alerts && typeof raw.alerts === "object" ? raw.alerts : {};
    out.alerts = {
      meds: a.meds !== false,
      late: LATE.includes(Number(a.late)) ? Number(a.late) : 30,
      caregivers: [...new Set((Array.isArray(a.caregivers) ? a.caregivers : []).filter((t) => NOTIFY_RE.test(t)))].slice(0, 10),
    };
  }
  return out;
}

const merge = (target, changes) => {
  const next = { ...target };
  for (const [k, v] of Object.entries(changes)) {
    if (v === null || v === undefined) delete next[k];
    else next[k] = v;
  }
  return next;
};

export class Store {
  constructor(dir, log) {
    this.file = path.join(dir, "cronologia.json");
    this.log = log;
    this.timer = null;
    this.data = { version: 1, calendars: {}, app: {}, checks: {}, sent: {}, kind_cals: [], score: { entries: [], history: [], rewards: {}, current: null } };
    fs.mkdirSync(dir, { recursive: true });
    try {
      const raw = JSON.parse(fs.readFileSync(this.file, "utf8"));
      if (raw && typeof raw === "object") {
        this.data.calendars = raw.calendars && typeof raw.calendars === "object" ? raw.calendars : {};
        this.data.app = raw.app && typeof raw.app === "object" ? raw.app : {};
        for (const k of ["checks", "sent"]) this.data[k] = raw[k] && typeof raw[k] === "object" ? raw[k] : {};
        this.data.kind_cals = Array.isArray(raw.kind_cals) ? raw.kind_cals.filter((id) => CAL_RE.test(id)) : [];
        const sc = raw.score && typeof raw.score === "object" ? raw.score : {};
        this.data.score = {
          entries: Array.isArray(sc.entries) ? sc.entries.filter((e) => e && e.key && e.at) : [],
          history: Array.isArray(sc.history) ? sc.history.filter((h) => h && h.key) : [],
          rewards: sc.rewards && typeof sc.rewards === "object" ? sc.rewards : {},
          current: sc.current && sc.current.key ? sc.current : null,
        };
        this.prune();
      }
    } catch (err) {
      if (err.code !== "ENOENT") this.log.warn(`Não consegui ler ${this.file}: ${err.message}`);
    }
  }

  get prefs() {
    return { calendars: this.data.calendars, app: this.data.app };
  }

  setCalendar(entityId, changes) {
    if (!CAL_RE.test(entityId || "")) fail("Não é um calendário");
    const next = merge(this.data.calendars[entityId] || {}, cleanCalendar(changes));
    if (Object.keys(next).length) this.data.calendars[entityId] = next;
    else delete this.data.calendars[entityId];
    this.save();
    return this.prefs;
  }

  setApp(changes) {
    this.data.app = merge(this.data.app, cleanApp(changes));
    this.save();
    return this.prefs;
  }

  /** Doses taken, chores done, bills paid: {key: {at, by, kind}}. */
  setCheck(key, value) {
    if (typeof key !== "string" || !key || key.length > 600) fail("item inválido");
    if (value) this.data.checks[key] = { at: value.at || new Date().toISOString(), by: String(value.by || "").slice(0, 60), kind: String(value.kind || "").slice(0, 20) };
    else delete this.data.checks[key];
    this.save();
  }

  /** Phone alerts already sent for an occurrence (so a restart does not send them again). */
  markSent(key, stage, targets) {
    const s = this.data.sent[key] || (this.data.sent[key] = { targets: [] });
    s[stage] = new Date().toISOString();
    s.targets = [...new Set([...(s.targets || []), ...targets])];
    this.save();
  }

  addKindCalendar(id) {
    if (!CAL_RE.test(id || "") || this.data.kind_cals.includes(id)) return false;
    this.data.kind_cals.push(id);
    this.save();
    return true;
  }

  // ---------------------------------------------------------------- Recompensas

  /** A point entry {key, at, who, points, title, kind}; the same key replaces the old one. */
  addPoints(entry) {
    const sc = this.data.score;
    sc.entries = sc.entries.filter((e) => e.key !== entry.key);
    sc.entries.push({ key: String(entry.key).slice(0, 600), at: entry.at || new Date().toISOString(), who: String(entry.who).slice(0, 40), points: Math.max(-1000, Math.min(1000, Math.round(Number(entry.points) || 0))), title: String(entry.title || "").slice(0, 120), kind: String(entry.kind || "").slice(0, 20) });
    this.save();
  }

  removePoints(key) {
    const sc = this.data.score;
    const before = sc.entries.length;
    sc.entries = sc.entries.filter((e) => e.key !== key);
    if (sc.entries.length !== before) this.save();
    return sc.entries.length !== before;
  }

  pointsByKey(key) {
    return this.data.score.entries.find((e) => e.key === key) || null;
  }

  setReward(periodKey, text) {
    if (!YMD_RE.test(periodKey || "")) fail("Período inválido");
    const t = String(text || "").trim().slice(0, 200);
    if (t) this.data.score.rewards[periodKey] = t;
    else delete this.data.score.rewards[periodKey];
    for (const h of this.data.score.history) if (h.key === periodKey) h.reward = t;
    this.save();
  }

  setDelivered(periodKey, delivered) {
    const h = this.data.score.history.find((x) => x.key === periodKey);
    if (!h) fail("Período não encontrado");
    h.delivered = !!delivered;
    this.save();
  }

  /** Closes a period: its result goes to the history (newest first). */
  closePeriod(record, next) {
    const sc = this.data.score;
    sc.history = [record, ...sc.history.filter((h) => h.key !== record.key)].slice(0, 104);
    sc.current = next;
    this.save();
  }

  setCurrentPeriod(p) {
    this.data.score.current = p;
    this.save();
  }

  prune() {
    const now = Date.now();
    const sc = this.data.score;
    sc.entries = sc.entries.filter((e) => now - Date.parse(e.at) < KEEP_POINTS_DAYS * 86400000);
    const oldest = new Date(now - 2 * 365 * 86400000).toISOString().slice(0, 10);
    for (const k of Object.keys(sc.rewards)) if (k < oldest) delete sc.rewards[k];
    for (const [k, v] of Object.entries(this.data.checks)) if (!(now - Date.parse(v && v.at) < KEEP_CHECKS_DAYS * 86400000)) delete this.data.checks[k];
    for (const [k, v] of Object.entries(this.data.sent)) {
      const last = Math.max(...["on", "late", "snoozed", "snooze_until"].map((s) => Date.parse(v && v[s]) || 0));
      if (now - last > 3 * 86400000) delete this.data.sent[k];
    }
  }

  save() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), 400);
  }

  flush() {
    clearTimeout(this.timer);
    this.timer = null;
    const tmp = `${this.file}.tmp`;
    try {
      fs.writeFileSync(tmp, JSON.stringify(this.data, null, 1));
      fs.renameSync(tmp, this.file);
    } catch (err) {
      this.log.error(`Não consegui salvar ${this.file}: ${err.message}`);
    }
  }
}
