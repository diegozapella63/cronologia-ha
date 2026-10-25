// Modelos de compromisso: remédio, conta a pagar, rotina da casa e manutenção.
// The model and its fields live in the event description, so they travel with
// the event (Google, Outlook, the HA calendar card all show them as text) and
// every screen of CronologIA reads them back:
//
//   #remédio
//   Dose: 1 comprimido
//   Quem toma: Andressa
//   Tomar em jejum            <- anything after the fields is a note
//
// Shared by the server (lib/) and the UI (bundled from frontend/src).

export const KINDS = {
  remedio: { tag: "#remédio", label: "Remédio", fields: { dose: "Dose", who: "Quem toma", alert: "Aviso no celular" } },
  conta: { tag: "#conta", label: "Conta a pagar", fields: { value: "Valor" } },
  rotina: { tag: "#rotina", label: "Rotina da casa", fields: { who: "Quem faz", points: "Pontos", after: "Volta", history: "Feito em" } },
  manutencao: { tag: "#manutenção", label: "Manutenção", fields: { who: "Quem faz", every: "A cada", warn: "Avisar", history: "Feito em", points: "Pontos" } },
};

const TAGS = { remedio: "remedio", conta: "conta", rotina: "rotina", manutencao: "manutencao" };
export const UNITS = { dias: [1, "dia", "dias"], semanas: [7, "semana", "semanas"], meses: [30, "mês", "meses"], anos: [365, "ano", "anos"] };

export const foldText = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

const pad = (n) => String(n).padStart(2, "0");
const ymdOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const dateOf = (s) => {
  const [y, m, d] = String(s).slice(0, 10).split("-").map(Number);
  return new Date(y, m - 1, d);
};

/** The same key for an occurrence everywhere: calendar, event and which repetition. */
export const occurrenceKey = (cal, raw) => `${cal}|${raw.uid || raw.summary}|${raw.recurrence_id || raw.start}`;

// ------------------------------------------------------------------ values

/** "R$ 1.234,56", "1234.5", "89,90" -> number (or null). */
export function parseMoney(text) {
  let s = String(text || "").replace(/[^\d.,-]/g, "");
  if (!s) return null;
  if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
  else if (/\.\d{3}$/.test(s) && !/\.\d{1,2}$/.test(s)) s = s.replace(/\./g, "");
  const n = Number(s);
  return Number.isFinite(n) && n > 0 ? Math.round(n * 100) / 100 : null;
}

export const formatMoney = (n, cents = true) =>
  n == null ? "" : n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });

/** "6 meses", "1 ano", "90 dias" -> {n, unit} (unit is a key of UNITS). */
export function parseEvery(text) {
  const m = /(\d+)\s*([a-zçê]+)/i.exec(foldText(text));
  if (!m) return null;
  const n = Math.max(1, Math.min(999, Number(m[1])));
  const u = m[2];
  const unit = u.startsWith("dia") ? "dias" : u.startsWith("sem") ? "semanas" : u.startsWith("mes") ? "meses" : u.startsWith("ano") ? "anos" : null;
  return unit ? { n, unit } : null;
}

export const everyLabel = (e) => (e ? `${e.n} ${e.n === 1 ? UNITS[e.unit][1] : UNITS[e.unit][2]}` : "");

/** Date (local midnight) plus an interval. Months keep the day, clamped to the month's end. */
export function addEvery(date, e, sign = 1) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const n = e.n * sign;
  if (e.unit === "dias") d.setDate(d.getDate() + n);
  else if (e.unit === "semanas") d.setDate(d.getDate() + 7 * n);
  else {
    const months = e.unit === "anos" ? 12 * n : n;
    const day = d.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth() + months);
    const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    d.setDate(Math.min(day, last));
  }
  return d;
}

const DATE_BR = /(\d{1,2})\/(\d{1,2})\/(\d{4})/g;
function parseHistory(text) {
  const out = [];
  for (const m of String(text || "").matchAll(DATE_BR)) out.push(`${m[3]}-${pad(+m[2])}-${pad(+m[1])}`);
  return out;
}
const historyText = (list) => list.map((s) => `${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(0, 4)}`).join(", ");

// ------------------------------------------------------------------ description

const parsePoints = (text) => {
  const m = /(\d+)/.exec(String(text || ""));
  return m ? Math.min(1000, Number(m[1])) : 0;
};

/** Model of an event from its description, or null for a plain event. */
export function parseKind(description) {
  const lines = String(description || "").replace(/\r/g, "").split("\n");
  let i = 0;
  while (i < lines.length && !lines[i].trim()) i++;
  const m = /^#\s*([a-z]+)\b/.exec(foldText(lines[i]));
  const kind = m && TAGS[m[1]];
  if (!kind) return null;
  const labels = Object.entries(KINDS[kind].fields).map(([k, l]) => [k, foldText(l)]);
  const raw = {};
  for (i++; i < lines.length; i++) {
    const f = /^([^:]{2,24}):\s*(.*)$/.exec(lines[i]);
    if (!f) break;
    const label = foldText(f[1]);
    const hit = labels.find(([, l]) => l === label || (l.startsWith("aviso") && label.startsWith("aviso")));
    if (!hit) break;
    raw[hit[0]] = f[2].trim();
  }
  const out = { kind, notes: lines.slice(i).join("\n").trim() };
  if (kind === "remedio") {
    out.dose = raw.dose || "";
    out.who = raw.who || "";
    out.alert = !/^(nao|desligado|off)/.test(foldText(raw.alert));
  } else if (kind === "conta") {
    out.value = parseMoney(raw.value);
  } else if (kind === "rotina") {
    out.who = raw.who || "";
    out.points = parsePoints(raw.points);
    // "Volta: 2 dias depois de feita": one event, moved to today + 2 days when done (only the next one in the calendar)
    out.after = raw.after ? parseEvery(raw.after) : null;
    if (out.after) out.history = parseHistory(raw.history);
  } else {
    out.who = raw.who || "";
    out.every = parseEvery(raw.every) || { n: 6, unit: "meses" };
    const w = /(\d+)/.exec(raw.warn || "");
    out.warn = w ? Math.min(365, Number(w[1])) : 7;
    out.history = parseHistory(raw.history);
    out.points = parsePoints(raw.points);
  }
  return out;
}

/** Description for a model and its fields (the inverse of parseKind). */
export function buildDescription(k) {
  const lines = [KINDS[k.kind].tag];
  const add = (label, v) => {
    if (v != null && String(v).trim()) lines.push(`${label}: ${String(v).replace(/\s*\n\s*/g, " ").trim()}`);
  };
  const L = KINDS[k.kind].fields;
  if (k.kind === "remedio") {
    add(L.dose, k.dose);
    add(L.who, k.who);
    if (k.alert === false) add(L.alert, "não");
  } else if (k.kind === "conta") {
    add(L.value, k.value != null ? formatMoney(k.value) : "");
  } else if (k.kind === "rotina") {
    add(L.who, k.who);
    if (k.points > 0) add(L.points, k.points);
    if (k.after && k.after.n > 0) {
      add(L.after, `${everyLabel(k.after)} depois de feita`);
      add(L.history, historyText((k.history || []).slice(0, 8)));
    }
  } else {
    add(L.who, k.who);
    add(L.every, everyLabel(k.every));
    add(L.warn, `${k.warn ?? 7} ${(k.warn ?? 7) === 1 ? "dia" : "dias"} antes`);
    add(L.history, historyText((k.history || []).slice(0, 8)));
    if (k.points > 0) add(L.points, k.points);
  }
  const notes = String(k.notes || "").trim();
  return notes ? `${lines.join("\n")}\n${notes}` : lines.join("\n");
}

// ------------------------------------------------------------------ maintenance

/** Where a maintenance item is in its cycle: {due, start, progress 0..1+, days (until due, negative when late), state}. */
export function maintStatus(k, dueYmd, today = new Date()) {
  const due = dateOf(dueYmd);
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const start = k.history && k.history[0] && k.history[0] < dueYmd ? dateOf(k.history[0]) : addEvery(due, k.every, -1);
  const total = Math.max(1, Math.round((due - start) / 86400000));
  const days = Math.round((due - t0) / 86400000);
  const progress = Math.max(0, (total - days) / total);
  const state = days < 0 ? "vencida" : days <= k.warn ? "perto" : "ok";
  return { due: dueYmd, start: ymdOf(start), progress, days, state };
}

/** The maintenance event moved to its next date after being done today. */
export function maintDone(raw, k, today = new Date()) {
  const t = ymdOf(today);
  const nextDue = addEvery(today, k.every);
  const history = [t, ...(k.history || []).filter((d) => d !== t)].slice(0, 8);
  const description = buildDescription({ ...k, history });
  const event = { summary: raw.summary, description };
  if (raw.location) event.location = raw.location;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw.start)) {
    const end = new Date(nextDue);
    end.setDate(end.getDate() + 1);
    event.start = ymdOf(nextDue);
    event.end = ymdOf(end);
  } else {
    const s = new Date(raw.start);
    const dur = Math.max(15 * 60000, new Date(raw.end) - s);
    const ns = new Date(nextDue.getFullYear(), nextDue.getMonth(), nextDue.getDate(), s.getHours(), s.getMinutes());
    event.start = isoWithOffset(ns);
    event.end = isoWithOffset(new Date(ns.getTime() + dur));
  }
  return event;
}

export function isoWithOffset(d) {
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return `${ymdOf(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${sign}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
}

// ------------------------------------------------------------------ what the Agora screen shows

const DAY = 86400000;
const msOf = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(s) ? dateOf(s).getTime() : Date.parse(s));
const hmOf = (ms) => {
  const d = new Date(ms);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

/**
 * Today's doses and chores, the bills around today and every maintenance item,
 * from model occurrences [{cal, raw}] and the marks (checks).
 */
export function buildIndex({ occurrences, checks = {}, late = 30, alertsOn = true, features = () => 7, targetFor = () => null, now = Date.now() }) {
  const today = new Date(now);
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const t1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).getTime();
  const lateMs = (late || 30) * 60000;
  const out = { at: new Date(now).toISOString(), late: late || 30, meds: [], routines: [], bills: [], maint: [], names: [], checks: {} };
  const names = new Set();
  const seenMaint = new Set();
  // routines that come back N days after being done: done today = a check that moved the event (by event)
  const movedToday = new Map();
  for (const [ck, v] of Object.entries(checks)) if (v && v.moved && Date.parse(v.at) >= t0) movedToday.set(`${v.moved.cal}|${v.moved.uid}`, [ck, v]);
  for (const o of occurrences) {
    const { cal, raw } = o;
    const k = o.k || parseKind(raw.description);
    if (!k) continue;
    const key = o.key || occurrenceKey(cal, raw);
    const start = msOf(raw.start);
    const end = msOf(raw.end);
    const allDay = /^\d{4}-\d{2}-\d{2}$/.test(raw.start);
    const base = { key, cal, uid: raw.uid || null, rid: raw.recurrence_id || null, rrule: raw.rrule || null, summary: raw.summary || "", description: raw.description || "", location: raw.location || "", start: raw.start, end: raw.end, allDay, notes: k.notes || "" };
    if (k.who) names.add(k.who);
    if (k.kind === "remedio") {
      if (start < t0 || start >= t1) continue;
      const taken = checks[key] || null;
      const state = taken ? "tomado" : now < start ? "depois" : now < start + lateMs ? "agora" : "atrasado";
      out.meds.push({ ...base, kind: "remedio", dose: k.dose, who: k.who, alert: k.alert && alertsOn, time: allDay ? "" : hmOf(start), taken, state, late_min: state === "atrasado" || state === "agora" ? Math.floor((now - start) / 60000) : 0, notify: targetFor(k.who) });
    } else if (k.kind === "rotina" && k.after && !raw.rrule) {
      // One event, always the next time: shown from its day on (late ones stay until done), and as done today after "Feito"
      const id = `${cal}|${raw.uid || raw.summary}`;
      if (seenMaint.has(`r|${id}`)) continue;
      seenMaint.add(`r|${id}`);
      const due = allDay ? raw.start : ymdOf(new Date(start));
      const doneToday = movedToday.get(id);
      const common = { kind: "rotina", who: k.who, points: k.points || 0, after: k.after, history: k.history || [], time: allDay ? "" : hmOf(start), next: due, yesterday: false };
      if (doneToday) out.routines.push({ ...base, ...common, key: doneToday[0], done: doneToday[1], late: 0 });
      else if (start < t1) out.routines.push({ ...base, ...common, done: null, late: Math.max(0, Math.round((t0 - dateOf(due).getTime()) / DAY)) });
    } else if (k.kind === "rotina") {
      // today's, plus yesterday's that were not done (they can still be marked)
      const todays = start < t1 && end > t0;
      const yesterday = !todays && start >= t0 - DAY && start < t0 && !checks[key];
      if (!todays && !yesterday) continue;
      out.routines.push({ ...base, kind: "rotina", who: k.who, points: k.points || 0, time: allDay ? "" : hmOf(start), done: checks[key] || null, yesterday });
    } else if (k.kind === "conta") {
      const paid = checks[key] || null;
      // open ones from the last 2 months and the next 8 days; paid ones around today or paid today
      const paidToday = paid && Date.parse(paid.at) >= t0;
      if (!(start >= (paid && !paidToday ? t0 - DAY : t0 - 62 * DAY) && start < t0 + 9 * DAY)) continue;
      out.bills.push({ ...base, kind: "conta", value: k.value, due: allDay ? raw.start : ymdOf(new Date(start)), paid, overdue: !paid && start < t0 });
    } else if (k.kind === "manutencao") {
      // One item per event: its date is the next one (repeating events: the first one not done).
      const id = `${cal}|${raw.uid || raw.summary}`;
      if (seenMaint.has(id) || (raw.rrule && checks[key])) continue;
      seenMaint.add(id);
      const st = maintStatus(k, allDay ? raw.start : ymdOf(new Date(start)), today);
      const f = features(cal);
      out.maint.push({ ...base, kind: "manutencao", who: k.who, points: k.points || 0, every: k.every, warn: k.warn, history: k.history, ...st, repeating: !!raw.rrule, canMove: !!(f & 4) || (!!(f & 1) && !!(f & 2)) });
    }
  }
  out.meds.sort((a, b) => msOf(a.start) - msOf(b.start) || a.summary.localeCompare(b.summary, "pt-BR"));
  const behind = (r) => Number(!!r.yesterday || r.late > 0);
  out.routines.sort((a, b) => behind(b) - behind(a) || Number(b.allDay) - Number(a.allDay) || msOf(a.start) - msOf(b.start));
  out.bills.sort((a, b) => a.due.localeCompare(b.due));
  out.maint.sort((a, b) => a.days - b.days || a.summary.localeCompare(b.summary, "pt-BR"));
  for (const [k, v] of Object.entries(checks)) if (now - Date.parse(v.at) < 45 * DAY) out.checks[k] = v;
  out.names = [...names];
  return out;
}
