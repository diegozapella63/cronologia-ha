// Reads the events of an .ics file (from an e-mail invitation, another
// calendar export…) so they can be reviewed and added to a calendar.
import { ymd, hm, fromYmd } from "./util.js";

const unescape = (s) => s.replace(/\\n/gi, "\n").replace(/\\([,;\\])/g, "$1");

function unfold(text) {
  return text.replace(/\r\n/g, "\n").replace(/\n[ \t]/g, "").split("\n");
}

function parseLine(line) {
  const colon = line.indexOf(":");
  if (colon < 0) return null;
  const head = line.slice(0, colon);
  const value = line.slice(colon + 1);
  const [name, ...params] = head.split(";");
  const p = {};
  for (const x of params) {
    const [k, v] = x.split("=");
    if (k) p[k.toUpperCase()] = (v || "").replace(/^"|"$/g, "");
  }
  return { name: name.toUpperCase(), params: p, value };
}

/** Offset (ms) of a time zone at a given UTC instant, using the browser's Intl. */
function tzOffset(tz, utcMs) {
  try {
    const f = new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const parts = Object.fromEntries(f.formatToParts(new Date(utcMs)).map((x) => [x.type, x.value]));
    const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour % 24, +parts.minute, +parts.second);
    return asUtc - utcMs;
  } catch (e) {
    return null;
  }
}

/** DTSTART/DTEND value -> {allDay, date: Date}. */
function parseDate(prop) {
  const v = prop.value.trim();
  const m = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(v);
  if (!m) return null;
  const [, y, mo, d, h, mi, s, z] = m;
  if (h == null || prop.params.VALUE === "DATE") return { allDay: true, date: new Date(+y, +mo - 1, +d) };
  if (z) return { allDay: false, date: new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +(s || 0))) };
  const tz = prop.params.TZID;
  if (tz) {
    const guess = Date.UTC(+y, +mo - 1, +d, +h, +mi, +(s || 0));
    const off = tzOffset(tz, guess);
    if (off != null) {
      const first = guess - off;
      const off2 = tzOffset(tz, first);
      return { allDay: false, date: new Date(guess - (off2 != null ? off2 : off)) };
    }
  }
  return { allDay: false, date: new Date(+y, +mo - 1, +d, +h, +mi, +(s || 0)) }; // floating: device time
}

/** "PT1H30M" / "P1D" -> ms */
function parseDuration(v) {
  const m = /^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(v.trim());
  if (!m) return null;
  const [, sign, w, d, h, mi, s] = m;
  const ms = ((+w || 0) * 7 * 86400 + (+d || 0) * 86400 + (+h || 0) * 3600 + (+mi || 0) * 60 + (+s || 0)) * 1000;
  return sign === "-" ? -ms : ms;
}

/**
 * Events in the same shape the AI review uses:
 * {title, date, start, end, end_date, location, notes, repeat, rrule}
 */
export function parseICS(text) {
  const out = [];
  let cur = null;
  let depth = 0;
  for (const line of unfold(text)) {
    if (/^BEGIN:VEVENT/i.test(line)) {
      cur = {};
      depth = 0;
      continue;
    }
    if (!cur) continue;
    if (/^BEGIN:/i.test(line)) {
      depth++; // VALARM etc.
      continue;
    }
    if (/^END:VEVENT/i.test(line)) {
      out.push(cur);
      cur = null;
      continue;
    }
    if (/^END:/i.test(line)) {
      depth--;
      continue;
    }
    if (depth > 0) continue;
    const p = parseLine(line);
    if (!p) continue;
    if (p.name === "SUMMARY") cur.summary = unescape(p.value);
    else if (p.name === "DESCRIPTION") cur.description = unescape(p.value);
    else if (p.name === "LOCATION") cur.location = unescape(p.value);
    else if (p.name === "DTSTART") cur.dtstart = parseDate(p);
    else if (p.name === "DTEND") cur.dtend = parseDate(p);
    else if (p.name === "DURATION") cur.duration = parseDuration(p.value);
    else if (p.name === "RRULE") cur.rrule = p.value.trim();
    else if (p.name === "STATUS") cur.status = p.value.trim().toUpperCase();
    else if (p.name === "RECURRENCE-ID") cur.recurrence = true;
  }
  const events = [];
  for (const e of out) {
    if (!e.dtstart || e.status === "CANCELLED" || e.recurrence) continue;
    const s = e.dtstart.date;
    let end = e.dtend ? e.dtend.date : e.duration != null ? new Date(s.getTime() + e.duration) : null;
    const allDay = e.dtstart.allDay;
    const ev = {
      title: (e.summary || "").trim() || "Evento",
      date: ymd(s),
      start: allDay ? "" : hm(s),
      end: "",
      end_date: "",
      location: (e.location || "").trim(),
      notes: (e.description || "").trim().slice(0, 4000),
      repeat: "",
      rrule: e.rrule && /FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(e.rrule) ? e.rrule : "",
    };
    if (allDay) {
      if (end) {
        const last = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1);
        if (last > s) ev.end_date = ymd(last);
      }
    } else if (end && end > s) {
      ev.end = hm(end);
      if (ymd(end) !== ymd(s)) ev.end_date = ymd(end);
    }
    events.push(ev);
  }
  return events;
}

export { fromYmd };
