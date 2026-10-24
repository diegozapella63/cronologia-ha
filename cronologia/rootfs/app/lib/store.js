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
    this.data = { version: 1, calendars: {}, app: {}, checks: {}, sent: {}, kind_cals: [] };
    fs.mkdirSync(dir, { recursive: true });
    try {
      const raw = JSON.parse(fs.readFileSync(this.file, "utf8"));
      if (raw && typeof raw === "object") {
        this.data.calendars = raw.calendars && typeof raw.calendars === "object" ? raw.calendars : {};
        this.data.app = raw.app && typeof raw.app === "object" ? raw.app : {};
        for (const k of ["checks", "sent"]) this.data[k] = raw[k] && typeof raw[k] === "object" ? raw[k] : {};
        this.data.kind_cals = Array.isArray(raw.kind_cals) ? raw.kind_cals.filter((id) => CAL_RE.test(id)) : [];
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

  prune() {
    const now = Date.now();
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
