// Dados: exports (JSON, CSV, ZIP), backups in the share folder, imports and
// the list of automatic versions, the same set the other apps offer.
// The events themselves live in the calendars; the ZIP carries a copy of them
// (.ics per calendar and a CSV) next to the app data (cronologia.json).
import fs from "node:fs";
import path from "node:path";
import { makeZip, readZip } from "./zip.js";
import { toICS } from "./events.js";
import { parseKind, KINDS } from "./kinds.js";

const pad = (n) => String(n).padStart(2, "0");
const BACKUP_RE = /^cronologia-[\w-]+\.zip$/;
export const VERSION_RE = /^cronologia-(\d{8})-(\d{6})-?([\w-]*)\.json$/;

/** "2026-10-19-0020", for file names. */
export const fileStamp = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
const dateTime = (ms) => {
  const d = new Date(ms);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
const csvCell = (v) => {
  const s = String(v == null ? "" : v);
  return /[";\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = (rows) => Buffer.from("﻿" + rows.map((r) => r.map(csvCell).join(";")).join("\r\n") + "\r\n", "utf8");

/** What the app keeps (without the alerts already sent). */
export function appData(store, version) {
  const { sent, mirror, ...rest } = store.data;
  return { app_name: "CronologIA", app_version: version, exported_at: new Date().toISOString(), ...rest };
}

const when = (s, allDay) => {
  if (!s) return "";
  if (allDay) return `${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(0, 4)}`;
  return dateTime(Date.parse(s));
};

/** Events for Excel: ";" separated, with BOM, one row per occurrence. */
export function eventsCSV(calendars) {
  const rows = [["Calendário", "Título", "Início", "Fim", "Dia todo", "Local", "Repete", "Modelo", "Notas"]];
  for (const cal of calendars) {
    for (const e of cal.events) {
      const k = parseKind(e.description);
      rows.push([cal.name, e.summary, when(e.start, e.all_day), when(e.end, e.all_day), e.all_day ? "sim" : "", e.location || "", e.rrule || "", k ? KINDS[k.kind].label : "", e.description || ""]);
    }
  }
  return csv(rows);
}

/** Points of the Recompensas, for Excel. */
export function pointsCSV(data) {
  const rows = [["Quando", "Quem", "Pontos", "O que", "Tipo"]];
  const kinds = { rotina: "rotina", manutencao: "manutenção", extra: "avulso", tarefa: "tarefa do ResolvIA", demerito: "demérito" };
  for (const e of [...(data.score && data.score.entries) || []].sort((a, b) => Date.parse(a.at) - Date.parse(b.at))) rows.push([dateTime(Date.parse(e.at)), e.who, e.points, e.title, kinds[e.kind] || e.kind]);
  return csv(rows);
}

const safeName = (name) =>
  (name || "Calendário")
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60) || "Calendário";

/** The full backup: app data, the events of every calendar (.ics + CSV), the points. */
export function backupZip(data, calendars, version, range) {
  const files = [
    { name: "cronologia.json", data: JSON.stringify(data, null, 1) },
    { name: "eventos.csv", data: eventsCSV(calendars) },
    { name: "pontos.csv", data: pointsCSV(data) },
  ];
  const used = new Set();
  for (const cal of calendars) {
    let base = safeName(cal.name);
    for (let n = 2; used.has(base.toLowerCase()); n++) base = `${safeName(cal.name)} ${n}`;
    used.add(base.toLowerCase());
    files.push({ name: `calendarios/${base}.ics`, data: toICS([cal]) });
  }
  files.push({
    name: "LEIA-ME.txt",
    data:
      `Backup do CronologIA ${version} criado em ${dateTime(Date.now())}.\n` +
      "cronologia.json tem os dados do app: nome e cor das agendas, preferências, pessoas e avisos,\n" +
      "o placar das Recompensas e as marcações de Tomei, Paguei e Feito.\n" +
      `A pasta calendarios tem os eventos de cada calendário (${range}) em .ics, que abrem no Google Agenda,\n` +
      "no Outlook e no iPhone; eventos.csv e pontos.csv abrem no Excel.\n" +
      "Para restaurar os dados do app: Mais > Dados > Importar backup, e escolha este .zip.\n" +
      "Para trazer os eventos de volta: Mais > Dados > Importar .ics, um calendário de cada vez.\n",
  });
  return makeZip(files);
}

/** A .zip backup or a .json file -> the raw app data (normalized later by the store). */
export function parseImport(buf, fileName = "") {
  let text;
  const isZip = buf.length > 3 && buf[0] === 0x50 && buf[1] === 0x4b;
  if (isZip || /\.zip$/i.test(fileName)) {
    const entries = readZip(buf).filter((e) => !e.name.startsWith("__MACOSX/") && !path.basename(e.name).startsWith("._"));
    const entry = entries.find((e) => path.basename(e.name) === "cronologia.json") || entries.find((e) => /\.json$/i.test(e.name));
    if (!entry) throw Object.assign(new Error("O .zip não tem o arquivo cronologia.json."), { code: "invalid_format" });
    text = entry.data.toString("utf8");
  } else {
    text = buf.toString("utf8");
  }
  let raw;
  try {
    raw = JSON.parse(text.replace(/^﻿/, ""));
  } catch (e) {
    throw Object.assign(new Error("O arquivo não é um backup do CronologIA (.zip) nem um .json válido."), { code: "invalid_format" });
  }
  if (!raw || typeof raw !== "object" || !("calendars" in raw || "app" in raw || "score" in raw)) {
    throw Object.assign(new Error("Esse .json não é do CronologIA."), { code: "invalid_format" });
  }
  return raw;
}

// ------------------------------------------------------------------ share folder

export class Backups {
  constructor({ dir, folderLabel = "share/cronologia" }) {
    this.dir = dir;
    this.folderLabel = folderLabel;
  }

  available() {
    try {
      fs.mkdirSync(this.dir, { recursive: true });
      fs.accessSync(this.dir, fs.constants.W_OK);
      return true;
    } catch (e) {
      return false;
    }
  }

  list() {
    if (!this.available()) return { available: false, folder: this.folderLabel, backups: [] };
    const backups = fs
      .readdirSync(this.dir)
      .filter((f) => BACKUP_RE.test(f))
      .map((name) => {
        const st = fs.statSync(path.join(this.dir, name));
        return { name, size: st.size, date: st.mtimeMs };
      })
      .sort((a, b) => b.date - a.date);
    return { available: true, folder: this.folderLabel, backups };
  }

  save(zip) {
    if (!this.available()) throw Object.assign(new Error("A pasta share não está disponível para o app."), { code: "no_share" });
    let name = `cronologia-${fileStamp()}.zip`;
    for (let n = 2; fs.existsSync(path.join(this.dir, name)); n++) name = `cronologia-${fileStamp()}-${n}.zip`;
    fs.writeFileSync(path.join(this.dir, name), zip);
    return { name, folder: this.folderLabel };
  }

  read(name) {
    if (!BACKUP_RE.test(name || "")) throw Object.assign(new Error("Backup inválido."), { code: "invalid_format" });
    const full = path.join(this.dir, name);
    if (!fs.existsSync(full)) throw Object.assign(new Error("Esse backup não existe mais."), { code: "not_found" });
    return parseImport(fs.readFileSync(full), name);
  }
}

// ------------------------------------------------------------------ versions

/** What a copy holds, for the list: calendars customized, points, marks. */
export function summarize(d) {
  return {
    calendars: Object.keys(d.calendars || {}).length,
    points: ((d.score && d.score.entries) || []).length,
    checks: Object.keys(d.checks || {}).length,
  };
}

export function listVersions(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const name of fs.readdirSync(dir).sort().reverse()) {
    const m = VERSION_RE.exec(name);
    if (!m) continue;
    try {
      const d = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
      const [, ymd, hms, reason] = m;
      const at = new Date(+ymd.slice(0, 4), +ymd.slice(4, 6) - 1, +ymd.slice(6, 8), +hms.slice(0, 2), +hms.slice(2, 4), +hms.slice(4, 6)).getTime();
      out.push({ name, when: at, reason: reason || "auto", ...summarize(d) });
    } catch (e) {
      /* skip broken file */
    }
  }
  return out;
}

export function readVersion(dir, name) {
  if (!VERSION_RE.test(name || "")) throw Object.assign(new Error("Versão inválida."), { code: "invalid_format" });
  const full = path.join(dir, name);
  if (!fs.existsSync(full)) throw Object.assign(new Error("Essa versão não existe mais."), { code: "not_found" });
  return JSON.parse(fs.readFileSync(full, "utf8"));
}
