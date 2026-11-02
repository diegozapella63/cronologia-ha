// score.js: the Recompensas periods (week, two weeks, month), the tally and the winner.
import { at } from "./helpers.mjs";
import { describe, it, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import { scoreSettings, periodOf, periodLabel, tally, winnerOf, PERIODS, ymdOf } from "../cronologia/rootfs/app/lib/score.js";

afterEach(() => mock.timers.reset());

describe("scoreSettings", () => {
  it("defaults", () => {
    assert.deepEqual(scoreSettings(), { enabled: false, participants: [], period: "semana", anchor: null, notify: true, manual: false, weekStart: 1 });
  });
  it("reads the app prefs; the week starts on Sunday only with week_start 0", () => {
    const s = scoreSettings({ week_start: 0, score: { enabled: true, participants: ["Diego"], period: "mes", anchor: "2026-01-05", notify: false, manual: true } });
    assert.deepEqual(s, { enabled: true, participants: ["Diego"], period: "mes", anchor: "2026-01-05", notify: false, manual: true, weekStart: 0 });
    assert.equal(scoreSettings({ score: { period: "ano" } }).period, "semana");
    assert.equal(scoreSettings({ score: { participants: "Diego" } }).participants.length, 0);
  });
  it("PERIODS has the three lengths", () => {
    assert.deepEqual(Object.keys(PERIODS), ["semana", "quinzena", "mes"]);
  });
});

describe("periodOf", () => {
  const week = (weekStart = 1) => ({ period: "semana", weekStart });
  it("a week from Monday (exclusive end)", () => {
    const p = periodOf(at(2026, 11, 4, 15), week());
    assert.deepEqual({ key: p.key, start: p.start, end: p.end }, { key: "2026-11-02", start: "2026-11-02", end: "2026-11-09" });
    assert.equal(p.label, "2 a 8 de nov");
  });
  it("Monday 00:00 and Sunday 23:59 belong to the same week", () => {
    assert.equal(periodOf(at(2026, 11, 2, 0, 0), week()).key, "2026-11-02");
    assert.equal(periodOf(at(2026, 11, 8, 23, 59), week()).key, "2026-11-02");
    assert.equal(periodOf(at(2026, 11, 9, 0, 0), week()).key, "2026-11-09");
  });
  it("a week from Sunday", () => {
    const p = periodOf(at(2026, 11, 4), week(0));
    assert.equal(p.start, "2026-11-01");
    assert.equal(p.end, "2026-11-08");
    assert.equal(periodOf(at(2026, 11, 1), week(0)).key, "2026-11-01");
    assert.equal(periodOf(at(2026, 11, 1), week(1)).key, "2026-10-26");
  });
  it("a week across two months and two years", () => {
    const p = periodOf(at(2026, 10, 28), week());
    assert.equal(p.label, "26 out a 1 nov");
    const y = periodOf(at(2026, 12, 31), week());
    assert.equal(y.start, "2026-12-28");
    assert.equal(y.end, "2027-01-04");
    assert.equal(y.label, "28 dez a 3 jan");
  });
  it("two weeks counted from the anchor's week, also before it", () => {
    const s = { period: "quinzena", weekStart: 1, anchor: "2026-10-28" }; // a Wednesday: its week starts 26 Oct
    assert.deepEqual([periodOf(at(2026, 10, 26), s).start, periodOf(at(2026, 10, 26), s).end], ["2026-10-26", "2026-11-09"]);
    assert.equal(periodOf(at(2026, 11, 8, 23), s).start, "2026-10-26");
    assert.equal(periodOf(at(2026, 11, 9), s).start, "2026-11-09");
    assert.equal(periodOf(at(2026, 11, 22), s).start, "2026-11-09");
    assert.equal(periodOf(at(2026, 11, 23), s).start, "2026-11-23");
    // before the anchor
    assert.equal(periodOf(at(2026, 10, 25), s).start, "2026-10-12");
    assert.equal(periodOf(at(2026, 10, 12), s).start, "2026-10-12");
    assert.equal(periodOf(at(2026, 10, 11), s).start, "2026-09-28");
  });
  it("two weeks without an anchor count from the week of 1 Jan 2024", () => {
    const s = { period: "quinzena", weekStart: 1, anchor: null };
    const p = periodOf(at(2026, 11, 2), s);
    // 2024-01-01 is a Monday; whole blocks of 14 days from there
    const days = Math.round((new Date(p.start + "T00:00:00") - new Date(2024, 0, 1)) / 86400000);
    assert.equal(days % 14, 0);
    assert.ok(p.start <= "2026-11-02" && p.end > "2026-11-02");
    assert.equal(Math.round((new Date(p.end + "T00:00:00") - new Date(p.start + "T00:00:00")) / 86400000), 14);
  });
  it("a month", () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2).getTime() });
    const p = periodOf(at(2026, 2, 14), { period: "mes", weekStart: 1 });
    assert.deepEqual({ key: p.key, start: p.start, end: p.end, label: p.label }, { key: "2026-02-01", start: "2026-02-01", end: "2026-03-01", label: "Fevereiro" });
    const d = periodOf(at(2026, 12, 31, 23), { period: "mes", weekStart: 1 });
    assert.equal(d.end, "2027-01-01");
  });
  it("a month of another year says the year", () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2).getTime() });
    assert.equal(periodOf(at(2025, 3, 10), { period: "mes", weekStart: 1 }).label, "Março de 2025");
    assert.equal(periodLabel("2027-01-01", "2027-02-01", "mes"), "Janeiro de 2027");
  });
  it("periodLabel takes strings or dates", () => {
    assert.equal(periodLabel("2026-11-02", "2026-11-09", "semana"), "2 a 8 de nov");
    assert.equal(periodLabel(at(2026, 11, 23), at(2026, 12, 7), "quinzena"), "23 nov a 6 dez");
  });
  it("ymdOf", () => {
    assert.equal(ymdOf(at(2026, 1, 5)), "2026-01-05");
  });
});

describe("tally", () => {
  const e = (who, points, when) => ({ who, points, at: when.toISOString(), key: Math.random().toString(36) });
  it("sums the points of each participant inside [start, end), most points first", () => {
    const entries = [
      e("Diego", 10, at(2026, 11, 2, 0, 0)),
      e("diego", 5, at(2026, 11, 3)), // case and accents do not matter
      e("Andressa", 20, at(2026, 11, 4)),
      e("ANDRÉSSA", -5, at(2026, 11, 5)), // a demerit
      e("Diego", 100, at(2026, 11, 9, 0, 0)), // next period
      e("Diego", 100, at(2026, 11, 1, 23, 59)), // previous period
      e("Visita", 50, at(2026, 11, 4)), // not a participant
    ];
    const rows = tally(entries, ["Diego", "Andréssa"], "2026-11-02", "2026-11-09");
    assert.deepEqual(rows, [
      { name: "Andréssa", points: 15, count: 1, demerits: 1 },
      { name: "Diego", points: 15, count: 2, demerits: 0 },
    ]);
  });
  it("ties are by name; participants without points are listed with 0", () => {
    const rows = tally([], ["Zeca", "Ana"], "2026-11-02", "2026-11-09");
    assert.deepEqual(
      rows.map((r) => [r.name, r.points]),
      [
        ["Ana", 0],
        ["Zeca", 0],
      ],
    );
  });
  it("a non-numeric value counts as 0 points", () => {
    const rows = tally([e("Ana", "x", at(2026, 11, 3))], ["Ana"], "2026-11-02", "2026-11-09");
    assert.deepEqual(rows[0], { name: "Ana", points: 0, count: 1, demerits: 0 });
  });
});

describe("winnerOf", () => {
  const rows = (...pts) => pts.map((points, i) => ({ name: `P${i}`, points }));
  it("the one with most points", () => assert.equal(winnerOf(rows(30, 10)), "P0"));
  it("nobody on a tie", () => assert.equal(winnerOf(rows(30, 30, 5)), null));
  it("nobody when nobody scored (or only demerits)", () => {
    assert.equal(winnerOf(rows(0, 0)), null);
    assert.equal(winnerOf(rows(-5, -10)), null);
    assert.equal(winnerOf([]), null);
  });
  it("a single participant with points wins", () => assert.equal(winnerOf(rows(1)), "P0"));
});
