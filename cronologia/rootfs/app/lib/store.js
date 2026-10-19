// CronologIA keeps only how the calendars look in /data/cronologia.json
// (name, color, hidden) plus app settings. Events stay in Home Assistant.
import fs from "node:fs";
import path from "node:path";

export const COLORS = ["vermelho", "coral", "laranja", "ouro", "verde", "menta", "turquesa", "azul", "indigo", "lilas", "rosa", "grafite"];
const CAL_RE = /^calendar\.[a-z0-9_]+$/;
const AI_RE = /^ai_task\.[a-z0-9_]+$/;
const VIEWS = ["mes", "semana", "lista"];

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
    this.data = { version: 1, calendars: {}, app: {} };
    fs.mkdirSync(dir, { recursive: true });
    try {
      const raw = JSON.parse(fs.readFileSync(this.file, "utf8"));
      if (raw && typeof raw === "object") {
        this.data.calendars = raw.calendars && typeof raw.calendars === "object" ? raw.calendars : {};
        this.data.app = raw.app && typeof raw.app === "object" ? raw.app : {};
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
