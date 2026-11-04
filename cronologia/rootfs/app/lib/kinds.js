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
  rotina: { tag: "#rotina", label: "Rotina da casa", fields: { who: "Quem faz", points: "Pontos", period: "Período", after: "Volta", history: "Feito em", room: "Cômodo", equip: "Equipamento" } },
  manutencao: { tag: "#manutenção", label: "Manutenção", fields: { who: "Quem faz", every: "A cada", warn: "Avisar", history: "Feito em", points: "Pontos", room: "Cômodo", equip: "Equipamento" } },
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
export const ymdOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
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

// ------------------------------------------------------------------ parts of the day

/** A routine without a time can still have a part of the day: from the hour each one starts. */
export const PERIODS = [
  { id: "manha", label: "Manhã", when: "de manhã", icon: "sunrise", from: 5 },
  { id: "tarde", label: "Tarde", when: "à tarde", icon: "sun", from: 12 },
  { id: "noite", label: "Noite", when: "à noite", icon: "moon", from: 18 },
];
export const periodInfo = (id) => PERIODS.find((p) => p.id === id) || null;
const parsePeriod = (text) => {
  const s = foldText(text);
  return s.startsWith("manh") ? "manha" : s.startsWith("tard") ? "tarde" : s.startsWith("noit") ? "noite" : "";
};
/** The part of the day of an hour (the small hours are still the night). */
export const periodOfHour = (h) => (h >= 18 || h < 5 ? "noite" : h >= 12 ? "tarde" : "manha");

/**
 * Where something of today goes in a list: the part of the day we are in first, then the ones whose
 * part has passed (still to do), then those for any time, then the parts still to come.
 */
export function periodRank(period, now = new Date()) {
  if (!period) return 2;
  const h = now.getHours();
  const cur = periodOfHour(h);
  if (period === cur) return 0;
  const idx = (p) => PERIODS.findIndex((x) => x.id === p);
  return h >= 5 && idx(period) < idx(cur) ? 1 + idx(period) / 10 : 3 + idx(period);
}

/** Whether the part of the day has already passed today (a routine of the morning, now in the afternoon). */
export const periodPassed = (period, now = new Date()) => periodRank(period, now) > 0 && periodRank(period, now) < 2;

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
    // "Equipamentos: A; B" and "Cômodos: A; B" (several) are the same fields
    const hit = labels.find(([, l]) => l === label || `${l}s` === label || (l.startsWith("aviso") && label.startsWith("aviso")));
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
    // "Período: manhã": a routine without a time, for that part of the day
    out.period = parsePeriod(raw.period);
    // "Volta: 2 dias depois de feita": one event, moved to today + 2 days when done (only the next one in the calendar)
    out.after = raw.after ? parseEvery(raw.after) : null;
    if (out.after) out.history = parseHistory(raw.history);
    // the room (InventarIA, by the ResolvIA), like the maintenance
    out.rooms = nameList(raw.room);
    out.equips = nameList(raw.equip);
    out.room = out.rooms[0] || "";
    out.equip = out.equips[0] || "";
  } else {
    out.who = raw.who || "";
    out.every = parseEvery(raw.every) || { n: 6, unit: "meses" };
    const w = /(\d+)/.exec(raw.warn || "");
    out.warn = w ? Math.min(365, Number(w[1])) : 7;
    out.history = parseHistory(raw.history);
    out.points = parsePoints(raw.points);
    // the rooms and the items of the InventarIA, by name ("A; B" when several); room/equip: the first one
    out.rooms = nameList(raw.room);
    out.equips = nameList(raw.equip);
    out.room = out.rooms[0] || "";
    out.equip = out.equips[0] || "";
  }
  return out;
}

/** "Ar-condicionado; Geladeira" -> the names (up to 10, no repeats). */
function nameList(text) {
  const out = [];
  for (const s of String(text || "").split(";")) {
    const n = s.trim();
    if (n && !out.some((x) => foldText(x) === foldText(n))) out.push(n);
  }
  return out.slice(0, 10);
}

/** The rooms or the items of a maintenance: the list, or the one name of before. */
export function namesOf(list, one) {
  const names = Array.isArray(list) ? list.map((s) => String(s || "").trim()).filter(Boolean) : [];
  return names.length ? names : one && String(one).trim() ? [String(one).trim()] : [];
}

/** The rooms and the items of the InventarIA (by name: readable in any calendar; "A; B" when several). */
function addPlaces(add, L, k) {
  const rooms = namesOf(k.rooms, k.room).map((s) => s.replace(/;/g, ","));
  const equips = namesOf(k.equips, k.equip).map((s) => s.replace(/;/g, ","));
  add(rooms.length > 1 ? `${L.room}s` : L.room, rooms.join("; "));
  add(equips.length > 1 ? `${L.equip}s` : L.equip, equips.join("; "));
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
    if (periodInfo(k.period)) add(L.period, periodInfo(k.period).label);
    if (k.after && k.after.n > 0) {
      add(L.after, `${everyLabel(k.after)} depois de feita`);
      add(L.history, historyText((k.history || []).slice(0, 8)));
    }
    addPlaces(add, L, k);
  } else {
    add(L.who, k.who);
    add(L.every, everyLabel(k.every));
    add(L.warn, `${k.warn ?? 7} ${(k.warn ?? 7) === 1 ? "dia" : "dias"} antes`);
    add(L.history, historyText((k.history || []).slice(0, 8)));
    if (k.points > 0) add(L.points, k.points);
    addPlaces(add, L, k);
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

/**
 * Pular: a routine that comes back N days after done goes to its next date as if this time
 * were over: N days after the day it was due, never before today. Its history stays as it was.
 */
export function skipNext(raw, k, today = new Date()) {
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const due = /^\d{4}-\d{2}-\d{2}$/.test(raw.start) ? dateOf(raw.start) : new Date(raw.start);
  let next = addEvery(new Date(due.getFullYear(), due.getMonth(), due.getDate()), k.after);
  if (next < t0) next = t0;
  const event = { summary: raw.summary, description: raw.description || "" };
  if (raw.location) event.location = raw.location;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw.start)) {
    const end = new Date(next);
    end.setDate(end.getDate() + 1);
    event.start = ymdOf(next);
    event.end = ymdOf(end);
  } else {
    const s = new Date(raw.start);
    const dur = Math.max(15 * 60000, new Date(raw.end) - s);
    const ns = new Date(next.getFullYear(), next.getMonth(), next.getDate(), s.getHours(), s.getMinutes());
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
/** Modo férias: {from, to} as real days YYYY-MM-DD (from <= to, at most a year), or null. */
export function cleanAway(v) {
  if (!v || typeof v !== "object") return null;
  const real = (s) => {
    if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
    const [y, m, d] = s.split("-").map(Number);
    const t = new Date(y, m - 1, d);
    return t.getFullYear() === y && t.getMonth() === m - 1 && t.getDate() === d;
  };
  if (!real(v.from) || !real(v.to) || v.to < v.from) return null;
  if ((dateOf(v.to) - dateOf(v.from)) / 86400000 > 366) return null;
  return { from: v.from, to: v.to };
}

/** A day (YYYY-MM-DD) inside the vacation. */
export const awayOn = (away, day) => !!(away && day >= away.from && day <= away.to);

export function buildIndex({ occurrences, checks = {}, late = 30, alertsOn = true, features = () => 7, targetFor = () => null, now = Date.now(), away = null }) {
  const today = new Date(now);
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const t1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).getTime();
  const lateMs = (late || 30) * 60000;
  const out = { at: new Date(now).toISOString(), late: late || 30, meds: [], routines: [], bills: [], maint: [], catalog: [], names: [], checks: {} };
  // Modo férias: today inside it, no routines (the medicines go on); after it, the days away
  // don't make a routine late nor leave yesterday's to do
  away = cleanAway(away);
  const todayYmd = ymdOf(today);
  const pausedToday = awayOn(away, todayYmd);
  const yesterdayAway = awayOn(away, ymdOf(new Date(t0 - DAY)));
  const backFrom = away && away.to < todayYmd ? dateOf(away.to).getTime() + DAY : null;
  out.away = pausedToday ? away : null;
  // Mais › Rotinas: what is registered, one line per event or repeating series, at its next time
  const series = new Map();
  const names = new Set();
  const seenMaint = new Set();
  // routines that come back N days after being done: done today = a check that moved the event (by event)
  const movedToday = new Map();
  for (const [ck, v] of Object.entries(checks)) {
    if (!v || !v.moved || Date.parse(v.at) < t0) continue;
    movedToday.set(`${v.moved.cal}|${v.moved.uid}`, [ck, v]);
    // recreated on a calendar that can't change events (Google): the new event has another uid
    if (v.moved.recreated && v.moved.summary) movedToday.set(`${v.moved.cal}|name:${v.moved.summary}`, [ck, v]);
  }
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
    const sid = `${cal}|${raw.uid || raw.summary || ""}`;
    let ser = series.get(sid);
    if (!ser) series.set(sid, (ser = { k, next: null, last: null }));
    const occ = { base, start, allDay };
    if (end > t0) {
      if (!ser.next || start < ser.next.start) ser.next = occ;
    } else if (!ser.last || start > ser.last.start) ser.last = occ;
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
      if (pausedToday) continue;
      const due = allDay ? raw.start : ymdOf(new Date(start));
      const doneToday = movedToday.get(id) || movedToday.get(`${cal}|name:${raw.summary || ""}`);
      const common = { kind: "rotina", who: k.who, points: k.points || 0, period: k.period || "", after: k.after, history: k.history || [], time: allDay ? "" : hmOf(start), next: due, yesterday: false };
      // skipped (Pular) and its next time is already today: it is today's, to do
      const skippedToToday = doneToday && doneToday[1].skipped && start < t1;
      if (doneToday && !skippedToToday) out.routines.push({ ...base, ...common, key: doneToday[0], done: doneToday[1], late: 0 });
      else if (start < t1) {
        // due before or during the vacation: late counts from the day back
        const from = backFrom && due <= away.to ? Math.max(dateOf(due).getTime(), backFrom) : dateOf(due).getTime();
        out.routines.push({ ...base, ...common, done: null, late: Math.max(0, Math.round((t0 - from) / DAY)) });
      }
    } else if (k.kind === "rotina") {
      // today's, plus yesterday's that were not done (they can still be marked)
      if (pausedToday) continue;
      const todays = start < t1 && end > t0;
      const yesterday = !todays && !yesterdayAway && start >= t0 - DAY && start < t0 && !checks[key];
      if (!todays && !yesterday) continue;
      out.routines.push({ ...base, kind: "rotina", who: k.who, points: k.points || 0, period: k.period || "", time: allDay ? "" : hmOf(start), done: checks[key] || null, yesterday, rooms: k.rooms || [], equips: k.equips || [] });
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
      out.maint.push({ ...base, kind: "manutencao", who: k.who, points: k.points || 0, every: k.every, warn: k.warn, history: k.history, room: k.room || "", equip: k.equip || "", rooms: k.rooms || [], equips: k.equips || [], ...st, repeating: !!raw.rrule, canMove: !!(f & 4) || (!!(f & 1) && !!(f & 2)) });
    }
  }
  for (const ser of series.values()) {
    const k = ser.k;
    // one event that moves after it is done (maintenance, "volta N dias depois"): late is still registered;
    // a bill: unpaid ones from the last 2 months too
    const moving = k.kind === "manutencao" || (k.kind === "rotina" && k.after);
    const o = ser.next || (ser.last && (moving || (k.kind === "conta" && !checks[ser.last.base.key] && ser.last.start >= t0 - 62 * DAY)) ? ser.last : null);
    if (!o) continue;
    out.catalog.push({
      ...o.base,
      kind: k.kind,
      who: k.who || "",
      dose: k.dose || "",
      alert: k.kind === "remedio" ? !!k.alert : null,
      points: k.points || 0,
      every: k.every || null,
      after: k.after || null,
      period: k.period || "",
      value: k.value ?? null,
      room: k.room || "",
      equip: k.equip || "",
      rooms: k.rooms || [],
      equips: k.equips || [],
      time: o.allDay ? "" : hmOf(o.start),
      next: o.allDay ? o.base.start : ymdOf(new Date(o.start)),
      late: !ser.next,
    });
  }
  out.catalog.sort((a, b) => a.summary.localeCompare(b.summary, "pt-BR") || a.next.localeCompare(b.next) || a.time.localeCompare(b.time));
  out.meds.sort((a, b) => msOf(a.start) - msOf(b.start) || a.summary.localeCompare(b.summary, "pt-BR"));
  const behind = (r) => Number(!!r.yesterday || r.late > 0);
  out.routines.sort((a, b) => behind(b) - behind(a) || Number(b.allDay) - Number(a.allDay) || msOf(a.start) - msOf(b.start));
  out.bills.sort((a, b) => a.due.localeCompare(b.due));
  out.maint.sort((a, b) => a.days - b.days || a.summary.localeCompare(b.summary, "pt-BR"));
  for (const [k, v] of Object.entries(checks)) if (now - Date.parse(v.at) < 45 * DAY) out.checks[k] = v;
  out.names = [...names];
  return out;
}
