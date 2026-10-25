// Calendar events as the UI uses them, and the .ics export.
// Event shape (same as Home Assistant's calendar/event/subscribe):
//   {start, end, summary, description?, location?, uid?, recurrence_id?, rrule?, all_day}
// start/end are "AAAA-MM-DD" for all-day events or ISO date-times with offset.

/**
 * Event as Home Assistant's calendar/event/create and /update take it: the
 * times go as dtstart/dtend (reading gives start/end, writing takes dtstart/dtend).
 */
export function toHAEvent(ev) {
  const { start, end, ...rest } = ev;
  return { ...rest, dtstart: start, dtend: end };
}

/** REST /api/calendars/<id> format ({dateTime}|{date}) -> subscribe format. */
export function normalizeApiEvent(e) {
  const pick = (v) => (v && typeof v === "object" ? v.dateTime || v.date || null : v || null);
  const start = pick(e.start);
  const end = pick(e.end);
  const out = {
    start,
    end,
    summary: e.summary || "",
    all_day: !!(e.start && typeof e.start === "object" ? e.start.date && !e.start.dateTime : /^\d{4}-\d{2}-\d{2}$/.test(start || "")),
  };
  for (const k of ["description", "location", "uid", "recurrence_id", "rrule", "status"]) if (e[k] != null) out[k] = e[k];
  return out;
}

const esc = (s) =>
  String(s || "")
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

/** Folds a content line at 75 octets, as RFC 5545 asks. */
function fold(line) {
  const bytes = Buffer.from(line, "utf8");
  if (bytes.length <= 75) return line;
  const parts = [];
  let cur = "";
  let len = 0;
  for (const ch of line) {
    const n = Buffer.byteLength(ch, "utf8");
    if (len + n > (parts.length ? 74 : 75)) {
      parts.push(cur);
      cur = "";
      len = 0;
    }
    cur += ch;
    len += n;
  }
  parts.push(cur);
  return parts.join("\r\n ");
}

const utc = (iso) =>
  new Date(iso)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
const dateOnly = (d) => d.replace(/-/g, "");

/** calendars: [{entity_id, name, events}] -> .ics text (each occurrence as its own event). */
export function toICS(calendars, { name = "CronologIA" } = {}) {
  const now = utc(new Date().toISOString());
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//CronologIA//Home Assistant//PT-BR", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", `X-WR-CALNAME:${esc(calendars.length === 1 ? calendars[0].name : name)}`];
  for (const cal of calendars) {
    for (const e of cal.events) {
      if (!e.start || !e.end) continue;
      const base = e.uid || `${cal.entity_id}-${e.start}-${e.summary}`;
      const uid = e.recurrence_id ? `${base}-${e.recurrence_id}` : base;
      lines.push("BEGIN:VEVENT", `UID:${esc(uid)}`, `DTSTAMP:${now}`);
      if (e.all_day) lines.push(`DTSTART;VALUE=DATE:${dateOnly(e.start)}`, `DTEND;VALUE=DATE:${dateOnly(e.end)}`);
      else lines.push(`DTSTART:${utc(e.start)}`, `DTEND:${utc(e.end)}`);
      lines.push(`SUMMARY:${esc(e.summary)}`);
      if (e.location) lines.push(`LOCATION:${esc(e.location)}`);
      if (e.description) lines.push(`DESCRIPTION:${esc(e.description)}`);
      if (calendars.length > 1) lines.push(`CATEGORIES:${esc(cal.name)}`);
      lines.push("END:VEVENT");
    }
  }
  lines.push("END:VCALENDAR");
  return lines.map(fold).join("\r\n") + "\r\n";
}
