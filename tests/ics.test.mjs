// The .ics export of the server (lib/events.js) and the .ics reader of the import
// screen (frontend/src/ics.js), each on its own and one through the other.
import { at } from "./helpers.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { toHAEvent, normalizeApiEvent, toICS } from "../cronologia/rootfs/app/lib/events.js";
import { parseICS } from "../frontend/src/ics.js";

const ics = (...lines) => ["BEGIN:VCALENDAR", "VERSION:2.0", ...lines, "END:VCALENDAR", ""].join("\r\n");
const vevent = (...lines) => ["BEGIN:VEVENT", ...lines, "END:VEVENT"];

describe("lib/events: toHAEvent / normalizeApiEvent", () => {
  it("toHAEvent writes dtstart/dtend and keeps the rest", () => {
    assert.deepEqual(toHAEvent({ start: "2026-11-02", end: "2026-11-03", summary: "x", rrule: "FREQ=DAILY" }), { summary: "x", rrule: "FREQ=DAILY", dtstart: "2026-11-02", dtend: "2026-11-03" });
  });
  it("normalizeApiEvent: REST {dateTime}/{date} to the subscribe shape", () => {
    assert.deepEqual(normalizeApiEvent({ start: { dateTime: "2026-11-02T09:00:00-03:00" }, end: { dateTime: "2026-11-02T10:00:00-03:00" }, summary: "Pilates", uid: "u", recurrence_id: "r", rrule: "FREQ=WEEKLY", location: "Studio", description: "d", status: "CONFIRMED", other: 1 }), {
      start: "2026-11-02T09:00:00-03:00",
      end: "2026-11-02T10:00:00-03:00",
      summary: "Pilates",
      all_day: false,
      description: "d",
      location: "Studio",
      uid: "u",
      recurrence_id: "r",
      rrule: "FREQ=WEEKLY",
      status: "CONFIRMED",
    });
    assert.deepEqual(normalizeApiEvent({ start: { date: "2026-11-02" }, end: { date: "2026-11-03" } }), { start: "2026-11-02", end: "2026-11-03", summary: "", all_day: true });
    // already flat strings
    assert.equal(normalizeApiEvent({ start: "2026-11-02", end: "2026-11-03" }).all_day, true);
    assert.equal(normalizeApiEvent({ start: "2026-11-02T09:00:00Z", end: "2026-11-02T10:00:00Z" }).all_day, false);
    assert.deepEqual(normalizeApiEvent({}), { start: null, end: null, summary: "", all_day: false });
  });
});

describe("lib/events: toICS", () => {
  const unfold = (text) => text.replace(/\r\n /g, "");
  it("calendar header, timed events in UTC, all-day as DATE, escaped text", () => {
    const text = toICS([
      {
        entity_id: "calendar.pessoal",
        name: "Pessoal",
        events: [
          { uid: "u1", summary: "Dentista; sala 302, 3º", start: "2026-11-05T15:00:00-03:00", end: "2026-11-05T16:00:00-03:00", location: "Rua A, 10", description: "Levar\\cartão\nChegar cedo" },
          { summary: "Aniversário", start: "2026-11-07", end: "2026-11-08", all_day: true },
          { summary: "Sem fim", start: "2026-11-07" },
        ],
      },
    ]);
    assert.ok(text.endsWith("\r\n"));
    const lines = unfold(text).split("\r\n");
    assert.deepEqual(lines.slice(0, 6), ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//CronologIA//Home Assistant//PT-BR", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "X-WR-CALNAME:Pessoal"]);
    assert.ok(lines.includes("UID:u1"));
    assert.ok(lines.includes("DTSTART:20261105T180000Z"));
    assert.ok(lines.includes("DTEND:20261105T190000Z"));
    assert.ok(lines.includes("SUMMARY:Dentista\\; sala 302\\, 3º"));
    assert.ok(lines.includes("LOCATION:Rua A\\, 10"));
    assert.ok(lines.includes("DESCRIPTION:Levar\\\\cartão\\nChegar cedo"));
    assert.ok(lines.includes("DTSTART;VALUE=DATE:20261107"));
    assert.ok(lines.includes("DTEND;VALUE=DATE:20261108"));
    assert.ok(lines.includes("UID:calendar.pessoal-2026-11-07-Aniversário"), "a uid made up when the event has none");
    assert.equal(lines.filter((l) => l === "BEGIN:VEVENT").length, 2, "events without an end are skipped");
    assert.ok(!lines.some((l) => l.startsWith("CATEGORIES")), "one calendar: no categories");
    assert.match(text, /DTSTAMP:\d{8}T\d{6}Z/);
  });
  it("each repetition gets its own UID; several calendars get CATEGORIES and the app name", () => {
    const text = unfold(
      toICS([
        { entity_id: "calendar.a", name: "Casa", events: [{ uid: "rep", recurrence_id: "20261102", summary: "Lixo", start: "2026-11-02", end: "2026-11-03", all_day: true }] },
        { entity_id: "calendar.b", name: "Trabalho, SP", events: [{ uid: "w", summary: "Daily", start: "2026-11-02T09:30:00-03:00", end: "2026-11-02T09:45:00-03:00" }] },
      ]),
    );
    assert.match(text, /X-WR-CALNAME:CronologIA\r\n/);
    assert.match(text, /UID:rep-20261102\r\n/);
    assert.match(text, /CATEGORIES:Casa\r\n/);
    assert.match(text, /CATEGORIES:Trabalho\\, SP\r\n/);
  });
  it("folds lines at 75 octets without splitting a multi-byte character", () => {
    const long = "Ção ".repeat(60) + "fim";
    const text = toICS([{ entity_id: "c", name: "x", events: [{ uid: "u", summary: long, start: "2026-11-02", end: "2026-11-03", all_day: true }] }]);
    for (const line of text.split("\r\n")) assert.ok(Buffer.byteLength(line, "utf8") <= 75, `${Buffer.byteLength(line)}: ${line}`);
    assert.ok(text.includes("\r\n "), "it was folded");
    assert.ok(!text.includes("�"));
    assert.ok(unfold(text).includes(`SUMMARY:${long}`));
  });
});

describe("frontend/ics: parseICS", () => {
  it("a timed event in UTC (Z) becomes local time", () => {
    const [e] = parseICS(ics(...vevent("SUMMARY:Reunião", "DTSTART:20261105T180000Z", "DTEND:20261105T193000Z")));
    assert.deepEqual(e, { title: "Reunião", date: "2026-11-05", start: "15:00", end: "16:30", end_date: "", location: "", notes: "", repeat: "", rrule: "" });
  });
  it("TZID: the wall time of that zone, converted to the device's", () => {
    const [ny] = parseICS(ics(...vevent("SUMMARY:NY", "DTSTART;TZID=America/New_York:20260115T090000", "DTEND;TZID=America/New_York:20260115T100000")));
    // January: New York is UTC-5, São Paulo UTC-3
    assert.equal(ny.date, "2026-01-15");
    assert.equal(ny.start, "11:00");
    assert.equal(ny.end, "12:00");
    const [summer] = parseICS(ics(...vevent("SUMMARY:NY", 'DTSTART;TZID="America/New_York":20260715T090000', "DTEND;TZID=America/New_York:20260715T100000")));
    assert.equal(summer.start, "10:00", "DST in New York (UTC-4), quoted TZID");
    const [lisbon] = parseICS(ics(...vevent("SUMMARY:L", "DTSTART;TZID=Europe/Lisbon:20261102T230000", "DTEND;TZID=Europe/Lisbon:20261103T003000")));
    assert.deepEqual([lisbon.date, lisbon.start, lisbon.end, lisbon.end_date], ["2026-11-02", "20:00", "21:30", ""]);
  });
  it("an unknown TZID or no zone at all is read as the device's local time (floating)", () => {
    const [a] = parseICS(ics(...vevent("SUMMARY:A", "DTSTART;TZID=Mars/Olympus:20261105T090000", "DTEND;TZID=Mars/Olympus:20261105T100000")));
    assert.equal(a.start, "09:00");
    const [b] = parseICS(ics(...vevent("SUMMARY:B", "DTSTART:20261105T0900", "DTEND:20261105T1000")));
    assert.equal(b.start, "09:00");
    assert.equal(b.end, "10:00");
  });
  it("all-day: the end is exclusive; several days give end_date", () => {
    const [one, three] = parseICS(ics(...vevent("SUMMARY:Um", "DTSTART;VALUE=DATE:20261107", "DTEND;VALUE=DATE:20261108"), ...vevent("SUMMARY:Três", "DTSTART;VALUE=DATE:20261107", "DTEND;VALUE=DATE:20261110")));
    assert.deepEqual([one.date, one.start, one.end_date], ["2026-11-07", "", ""]);
    assert.deepEqual([three.date, three.end_date], ["2026-11-07", "2026-11-09"]);
    const [bare] = parseICS(ics(...vevent("SUMMARY:Só data", "DTSTART:20261107")));
    assert.deepEqual([bare.date, bare.start, bare.end], ["2026-11-07", "", ""]);
  });
  it("DURATION instead of DTEND; a timed event over midnight has end_date", () => {
    const [d] = parseICS(ics(...vevent("SUMMARY:D", "DTSTART:20261105T220000", "DURATION:PT1H30M")));
    assert.deepEqual([d.start, d.end, d.end_date], ["22:00", "23:30", ""]);
    const [n] = parseICS(ics(...vevent("SUMMARY:N", "DTSTART:20261105T230000", "DURATION:PT2H")));
    assert.deepEqual([n.end, n.end_date], ["01:00", "2026-11-06"]);
    const [w] = parseICS(ics(...vevent("SUMMARY:W", "DTSTART;VALUE=DATE:20261102", "DURATION:P1W")));
    assert.equal(w.end_date, "2026-11-08");
    const [z] = parseICS(ics(...vevent("SUMMARY:Z", "DTSTART:20261105T100000", "DTEND:20261105T100000")));
    assert.equal(z.end, "", "an end that is not after the start is dropped");
  });
  it("folded lines (space or tab) and escaped characters", () => {
    const [e] = parseICS(ics(...vevent("SUMMARY:Consulta com a", "  Dra. Ana", "DESCRIPTION:Linha 1\\nLinha 2\\N", "\tcontinua\\, com vírgula\\; e ponto-e-vírgula \\\\ barra", "LOCATION:Av. Brasil\\, 1200", "DTSTART:20261105T140000Z", "DTEND:20261105T150000Z")));
    assert.equal(e.title, "Consulta com a Dra. Ana");
    assert.equal(e.notes, "Linha 1\nLinha 2\ncontinua, com vírgula; e ponto-e-vírgula \\ barra");
    assert.equal(e.location, "Av. Brasil, 1200");
  });
  it("LF line ends and lower-case property names work", () => {
    const text = "BEGIN:VCALENDAR\nBEGIN:VEVENT\nsummary:Minúsculo\ndtstart:20261105T140000Z\ndtend:20261105T150000Z\nEND:VEVENT\nEND:VCALENDAR\n";
    const [e] = parseICS(text);
    assert.equal(e.title, "Minúsculo");
    assert.equal(e.start, "11:00");
  });
  it("RRULE: kept only for the frequencies the app can repeat", () => {
    const [w, h] = parseICS(ics(...vevent("SUMMARY:W", "DTSTART:20261105T140000Z", "DTEND:20261105T150000Z", "RRULE:FREQ=WEEKLY;BYDAY=TH;COUNT=10"), ...vevent("SUMMARY:H", "DTSTART:20261105T140000Z", "DTEND:20261105T150000Z", "RRULE:FREQ=HOURLY")));
    assert.equal(w.rrule, "FREQ=WEEKLY;BYDAY=TH;COUNT=10");
    assert.equal(h.rrule, "");
  });
  it("skips cancelled events, modified repetitions (RECURRENCE-ID), events without a start; ignores VALARM", () => {
    const events = parseICS(
      ics(
        ...vevent("SUMMARY:Cancelado", "STATUS:CANCELLED", "DTSTART:20261105T140000Z"),
        ...vevent("SUMMARY:Exceção", "RECURRENCE-ID:20261105T140000Z", "DTSTART:20261105T150000Z"),
        ...vevent("SUMMARY:Sem início"),
        ...vevent("SUMMARY:Com alarme", "DTSTART:20261105T140000Z", "DTEND:20261105T150000Z", "BEGIN:VALARM", "TRIGGER:-PT15M", "DESCRIPTION:Lembrete do alarme", "SUMMARY:alarme", "END:VALARM", "LOCATION:Depois do alarme"),
        ...vevent("DTSTART:20261106T140000Z"),
      ),
    );
    assert.deepEqual(
      events.map((e) => e.title),
      ["Com alarme", "Evento"],
    );
    assert.equal(events[0].notes, "", "the alarm's description is not the event's");
    assert.equal(events[0].location, "Depois do alarme");
  });
  it("parameters before the value (LANGUAGE) are skipped", () => {
    const [e] = parseICS(ics(...vevent("SUMMARY;LANGUAGE=pt-BR:Consulta", "DESCRIPTION;LANGUAGE=pt-BR:Levar exames", "DTSTART:20261105T140000Z")));
    assert.equal(e.title, "Consulta");
    assert.equal(e.notes, "Levar exames");
  });
  it("a quoted parameter value may contain ':' (RFC 5545 §3.1)", () => {
    const [e] = parseICS(ics(...vevent("SUMMARY:Consulta", 'LOCATION;ALTREP="https://maps.example/?q=1":Clínica Sorriso', "DTSTART:20261105T140000Z")));
    assert.equal(e.location, "Clínica Sorriso");
  });
  it("notes are cut at 4000 characters and trimmed", () => {
    const [e] = parseICS(ics(...vevent("SUMMARY:  Longo  ", `DESCRIPTION:  ${"x".repeat(5000)}`, "DTSTART:20261105T140000Z")));
    assert.equal(e.title, "Longo");
    assert.equal(e.notes.length, 4000);
  });
  it("nothing in, nothing out", () => {
    assert.deepEqual(parseICS(""), []);
    assert.deepEqual(parseICS("BEGIN:VCALENDAR\r\nEND:VCALENDAR"), []);
  });
});

describe("export -> import round trip", () => {
  it("what the server exports, the import screen reads back the same", () => {
    const source = [
      { uid: "a", summary: "Consulta, Dra. Ana; sala 2", start: "2026-11-05T15:00:00-03:00", end: "2026-11-05T16:15:00-03:00", location: "Clínica \\ Centro", description: "#remédio\nDose: 1\nTomar com água" },
      { uid: "b", summary: "Viagem", start: "2026-12-20", end: "2026-12-27", all_day: true },
      { uid: "c", summary: "Plantão", start: "2026-11-06T22:00:00-03:00", end: "2026-11-07T06:00:00-03:00" },
      { uid: "d", summary: "Longo ".repeat(30).trim(), start: "2026-11-08T08:00:00-03:00", end: "2026-11-08T09:00:00-03:00", description: "ç".repeat(200) },
    ];
    const back = parseICS(toICS([{ entity_id: "calendar.x", name: "X", events: source }]));
    assert.deepEqual(back, [
      { title: "Consulta, Dra. Ana; sala 2", date: "2026-11-05", start: "15:00", end: "16:15", end_date: "", location: "Clínica \\ Centro", notes: "#remédio\nDose: 1\nTomar com água", repeat: "", rrule: "" },
      { title: "Viagem", date: "2026-12-20", start: "", end: "", end_date: "2026-12-26", location: "", notes: "", repeat: "", rrule: "" },
      { title: "Plantão", date: "2026-11-06", start: "22:00", end: "06:00", end_date: "2026-11-07", location: "", notes: "", repeat: "", rrule: "" },
      { title: source[3].summary, date: "2026-11-08", start: "08:00", end: "09:00", end_date: "", location: "", notes: "ç".repeat(200), repeat: "", rrule: "" },
    ]);
    assert.equal(at(2026, 11, 5).getTimezoneOffset(), 180);
  });
  it("an escaped backslash before an 'n' is a backslash, not a line break", () => {
    // RFC 5545: "\\" is a backslash, "\n" a line break. "C:\novos" is exported as "C:\\novos".
    const text = ics(...vevent("SUMMARY:Pasta", "DESCRIPTION:Arquivos em C:\\\\novos\\\\notas", "DTSTART:20261105T140000Z"));
    assert.equal(parseICS(text)[0].notes, "Arquivos em C:\\novos\\notas");
    const back = parseICS(toICS([{ entity_id: "c", name: "x", events: [{ uid: "u", summary: "S", start: "2026-11-02", end: "2026-11-03", all_day: true, description: "C:\\novos\\notas" }] }]));
    assert.equal(back[0].notes, "C:\\novos\\notas");
  });
});
