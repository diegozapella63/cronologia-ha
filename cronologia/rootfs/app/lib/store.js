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
const MAX_VERSIONS = 60;
const VERSION_EVERY = 10 * 60 * 1000;
const stamp = (d = new Date()) => {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
};
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
  // Agora also lists the pending tasks without a due date
  if ("todo_undated" in raw) out.todo_undated = raw.todo_undated ? true : null;
  // Mais › Integrações › Usar IA: off hides the AI import (and the server refuses to read with AI)
  if ("ai_off" in raw) out.ai_off = raw.ai_off ? true : null;
  // Levar para o ResolvIA: maintenance and routines as tasks in a to-do list
  if ("mirror" in raw) {
    const m = raw.mirror && typeof raw.mirror === "object" ? raw.mirror : {};
    const list = /^todo\.[a-z0-9_]+$/.test(m.list || "") ? m.list : null;
    out.mirror = list || m.maint || m.routine ? { list, maint: !!m.maint, routine: !!m.routine } : null;
  }
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
      // Para pontuar hoje in Recompensas: mark tasks and give points by hand there
      manual: !!a.manual,
    };
  }
  if ("demerits" in raw) {
    // Recompensas › Deméritos: what costs points ("Toalha molhada na cama", 5)
    const list = [];
    for (const d of (Array.isArray(raw.demerits) ? raw.demerits : []).slice(0, 40)) {
      if (!d || typeof d !== "object") continue;
      const title = String(d.title || "").trim().slice(0, 80);
      const points = Math.round(Math.abs(Number(d.points) || 0));
      if (!title || points < 1 || points > 1000) continue;
      const id = /^[a-z0-9]{4,16}$/.test(d.id || "") ? d.id : Math.random().toString(36).slice(2, 10);
      if (!list.some((x) => x.id === id)) list.push({ id, title, points });
    }
    out.demerits = list.length ? list : null;
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

const empty = () => ({ version: 1, calendars: {}, app: {}, checks: {}, sent: {}, mirror: {}, kind_cals: [], score: { entries: [], history: [], rewards: {}, prizes: {}, current: null } });

/**
 * The saved data, checked field by field. `strict` (imports) also runs the
 * calendar and app settings through the same checks as the screens.
 */
function normalize(raw, strict = false) {
  const out = empty();
  if (!raw || typeof raw !== "object") return out;
  const obj = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v : {});
  if (strict) {
    for (const [id, v] of Object.entries(obj(raw.calendars))) {
      if (!CAL_RE.test(id)) continue;
      try {
        const c = merge({}, cleanCalendar(v));
        if (Object.keys(c).length) out.calendars[id] = c;
      } catch (e) {
        /* skip */
      }
    }
    try {
      out.app = merge({}, cleanApp(obj(raw.app)));
    } catch (e) {
      out.app = {};
    }
  } else {
    out.calendars = obj(raw.calendars);
    out.app = obj(raw.app);
  }
  for (const k of ["checks", "sent", "mirror"]) out[k] = obj(raw[k]);
  for (const [k, v] of Object.entries(out.checks)) if (!v || typeof v !== "object" || !Number.isFinite(Date.parse(v.at))) delete out.checks[k];
  out.kind_cals = Array.isArray(raw.kind_cals) ? raw.kind_cals.filter((id) => CAL_RE.test(id)) : [];
  const sc = obj(raw.score);
  out.score = {
    entries: Array.isArray(sc.entries) ? sc.entries.filter((e) => e && e.key && Number.isFinite(Date.parse(e.at)) && typeof e.who === "string") : [],
    history: Array.isArray(sc.history) ? sc.history.filter((h) => h && YMD_RE.test(h.key || "")) : [],
    rewards: obj(sc.rewards),
    // a prize for each person: {period key: {"Diego": "Jantar fora", "Andressa": "Massagem"}}
    prizes: Object.fromEntries(
      Object.entries(obj(sc.prizes))
        .filter(([k, v]) => YMD_RE.test(k) && v && typeof v === "object")
        .map(([k, v]) => [k, Object.fromEntries(Object.entries(v).filter(([n, t]) => typeof t === "string" && t.trim()).map(([n, t]) => [String(n).slice(0, 40), t.trim().slice(0, 200)]))])
        .filter(([, v]) => Object.keys(v).length),
    ),
    current: sc.current && YMD_RE.test(sc.current.key || "") ? sc.current : null,
  };
  return out;
}

export class Store {
  constructor(dir, log) {
    this.file = path.join(dir, "cronologia.json");
    this.versionsDir = path.join(dir, "versoes");
    this.log = log;
    this.timer = null;
    this.lastVersion = 0;
    this.data = empty();
    fs.mkdirSync(dir, { recursive: true });
    try {
      this.data = normalize(JSON.parse(fs.readFileSync(this.file, "utf8")));
      this.prune();
    } catch (err) {
      if (err.code !== "ENOENT") this.log.warn(`Não consegui ler ${this.file}: ${err.message}`);
    }
  }

  /** Swaps everything for `raw` (import, restore), keeping a copy of what was there. */
  replaceAll(raw, reason) {
    const next = normalize(raw, true);
    next.sent = this.data.sent; // alerts already sent today stay sent
    next.mirror = this.data.mirror; // the tasks already in the ResolvIA list stay linked
    if (this.timer) this.flush({ version: false });
    this.version(reason, true);
    this.data = next;
    this.prune();
    this.flush({ version: false });
    return this.data;
  }

  /** Copies the file as it is now to /data/versoes (at most every 10 min unless forced). */
  version(reason = "auto", force = false) {
    if (!force && Date.now() - this.lastVersion < VERSION_EVERY) return null;
    if (!fs.existsSync(this.file)) return null;
    try {
      fs.mkdirSync(this.versionsDir, { recursive: true });
      const name = `cronologia-${stamp()}-${reason}.json`;
      fs.copyFileSync(this.file, path.join(this.versionsDir, name));
      this.lastVersion = Date.now();
      const all = fs.readdirSync(this.versionsDir).filter((f) => /^cronologia-.*\.json$/.test(f)).sort();
      for (const old of all.slice(0, Math.max(0, all.length - MAX_VERSIONS))) fs.rmSync(path.join(this.versionsDir, old), { force: true });
      return name;
    } catch (err) {
      this.log.warn(`Não consegui guardar uma versão: ${err.message}`);
      return null;
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
    if (value) {
      const c = { at: value.at || new Date().toISOString(), by: String(value.by || "").slice(0, 60), kind: String(value.kind || "").slice(0, 20) };
      // a routine that comes back N days after done: where the event was before "Feito" (for Desfazer)
      const m = value.moved;
      if (m && typeof m === "object") c.moved = { cal: String(m.cal || "").slice(0, 200), uid: String(m.uid || "").slice(0, 300), start: String(m.start || "").slice(0, 40), end: String(m.end || "").slice(0, 40), day: String(m.day || "").slice(0, 10) };
      this.data.checks[key] = c;
    }
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

  /**
   * The prizes of a period at once: `shared` for whoever wins, or `per`
   * {person: prize} (the winner gets theirs; a person without one gets the
   * shared one). The history follows when the period is already closed.
   */
  setPrizes(periodKey, shared, per) {
    if (!YMD_RE.test(periodKey || "")) fail("Período inválido");
    const sc = this.data.score;
    const t = String(shared || "").trim().slice(0, 200);
    if (t) sc.rewards[periodKey] = t;
    else delete sc.rewards[periodKey];
    const map = {};
    for (const [name, text] of Object.entries(per && typeof per === "object" ? per : {}).slice(0, 10)) {
      const n = String(name).trim().slice(0, 40);
      const v = String(text || "").trim().slice(0, 200);
      if (n && v) map[n] = v;
    }
    if (Object.keys(map).length) sc.prizes[periodKey] = map;
    else delete sc.prizes[periodKey];
    for (const h of sc.history) if (h.key === periodKey) h.reward = (h.winner && map[h.winner]) || t;
    this.save();
  }

  /** What `who` wins if they win the period (their own prize, else the shared one). */
  prizeOf(periodKey, who) {
    const sc = this.data.score;
    return (who && sc.prizes[periodKey] && sc.prizes[periodKey][who]) || sc.rewards[periodKey] || "";
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
    for (const k of Object.keys(sc.prizes)) if (k < oldest) delete sc.prizes[k];
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

  flush({ version = true } = {}) {
    clearTimeout(this.timer);
    this.timer = null;
    if (version) this.version("auto");
    const tmp = `${this.file}.tmp`;
    try {
      fs.writeFileSync(tmp, JSON.stringify(this.data, null, 1));
      fs.renameSync(tmp, this.file);
    } catch (err) {
      this.log.error(`Não consegui salvar ${this.file}: ${err.message}`);
    }
  }
}
