// buildIndex: what the Agora screen shows (doses, chores, bills, maintenance) and
// the catalog of Mais › Rotinas, always with a fixed `now`.
import { at, isoLocal, addDaysYmd } from "./helpers.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { buildIndex, occurrenceKey, buildDescription } from "../cronologia/rootfs/app/lib/kinds.js";

const NOW = at(2026, 11, 2, 14, 0).getTime(); // Monday, 14:00 (afternoon)
const TODAY = "2026-11-02";
const CAL = "calendar.casa";

/** An all-day occurrence on `day` (+ days). */
const allDay = (summary, day, description, extra = {}) => ({ cal: CAL, raw: { uid: extra.uid || `u-${summary}`, summary, start: day, end: addDaysYmd(day, extra.days || 1), description, ...extra.raw } });
/** A timed occurrence. */
const timed = (summary, start, minutes, description, extra = {}) => ({ cal: extra.cal || CAL, raw: { uid: extra.uid || `u-${summary}`, summary, start: isoLocal(start), end: isoLocal(new Date(start.getTime() + minutes * 60000)), description, ...extra.raw } });
const keyOf = (o) => occurrenceKey(o.cal, o.raw);
const check = (atDate, extra = {}) => ({ at: atDate.toISOString(), by: "Diego", kind: "", ...extra });
const index = (occurrences, opts = {}) => buildIndex({ occurrences, now: NOW, ...opts });

const MED = (who = "Andressa", extra = "") => `#remédio\nDose: 1 comprimido\nQuem toma: ${who}${extra}`;

describe("buildIndex: today's doses", () => {
  const d9 = timed("Sertralina", at(2026, 11, 2, 9), 15, MED());
  const d1345 = timed("Losartana", at(2026, 11, 2, 13, 45), 15, MED("Diego"));
  const d1330 = timed("Vitamina D", at(2026, 11, 2, 13, 30), 15, MED("Diego"));
  const d20 = timed("Ômega 3", at(2026, 11, 2, 20), 15, MED("Diego"));
  const d8 = timed("DPrev", at(2026, 11, 2, 8), 15, MED());
  const yesterday = timed("Ontem", at(2026, 11, 1, 20), 15, MED());
  const tomorrow = timed("Amanhã", at(2026, 11, 3, 8), 15, MED());

  it("states: depois, agora (inside the late window), atrasado, tomado", () => {
    const taken = check(at(2026, 11, 2, 8, 5), { kind: "remedio" });
    const ix = index([d9, d1345, d1330, d20, d8, yesterday, tomorrow], { checks: { [keyOf(d8)]: taken } });
    const by = Object.fromEntries(ix.meds.map((m) => [m.summary, m]));
    assert.deepEqual(Object.keys(by).sort(), ["DPrev", "Losartana", "Sertralina", "Vitamina D", "Ômega 3"].sort(), "only today's doses");
    assert.equal(by.Sertralina.state, "atrasado");
    assert.equal(by.Sertralina.late_min, 300);
    assert.equal(by.Losartana.state, "agora");
    assert.equal(by.Losartana.late_min, 15);
    // exactly at the end of the 30 min window it is late
    assert.equal(by["Vitamina D"].state, "atrasado");
    assert.equal(by["Vitamina D"].late_min, 30);
    assert.equal(by["Ômega 3"].state, "depois");
    assert.equal(by["Ômega 3"].late_min, 0);
    assert.equal(by.DPrev.state, "tomado");
    assert.deepEqual(by.DPrev.taken, taken);
    assert.equal(by.DPrev.late_min, 0);
    assert.equal(by.Sertralina.taken, null);
  });
  it("sorted by time, then name", () => {
    const twin = timed("Atenolol", at(2026, 11, 2, 9), 15, MED());
    const ix = index([d20, d9, twin, d8]);
    assert.deepEqual(
      ix.meds.map((m) => m.summary),
      ["DPrev", "Atenolol", "Sertralina", "Ômega 3"],
    );
  });
  it("the late window comes from the settings (60 min: 13:30 is still agora)", () => {
    const ix = index([d1330], { late: 60 });
    assert.equal(ix.meds[0].state, "agora");
    assert.equal(ix.late, 60);
  });
  it("late 0 (no late alert) still uses a 30 min window on screen", () => {
    const ix = index([d1345, d1330], { late: 0 });
    assert.equal(ix.late, 30);
    assert.deepEqual(
      ix.meds.map((m) => m.state),
      ["atrasado", "agora"],
    );
  });
  it("fields: dose, who, time, alert (model and settings), notify target, key", () => {
    const off = timed("Gardenal", at(2026, 11, 2, 19), 15, MED("Mimi", "\nAviso no celular: não\nMeio comprimido"));
    const ix = index([d9, off], { targetFor: (who) => (who === "Andressa" ? "mobile_app_galaxy_s23" : null) });
    const [a, b] = ix.meds;
    assert.equal(a.dose, "1 comprimido");
    assert.equal(a.who, "Andressa");
    assert.equal(a.time, "09:00");
    assert.equal(a.alert, true);
    assert.equal(a.notify, "mobile_app_galaxy_s23");
    assert.equal(a.key, keyOf(d9));
    assert.equal(a.kind, "remedio");
    assert.equal(a.allDay, false);
    assert.equal(b.alert, false);
    assert.equal(b.notify, null);
    assert.equal(b.notes, "Meio comprimido");
    const silent = index([d9], { alertsOn: false });
    assert.equal(silent.meds[0].alert, false, "alerts turned off in Mais › Avisos");
  });
  it("an all-day dose has no time", () => {
    const ix = index([allDay("Probiótico", TODAY, MED())]);
    assert.equal(ix.meds.length, 1);
    assert.equal(ix.meds[0].time, "");
    assert.equal(ix.meds[0].allDay, true);
  });
  it("names collects who takes / does, once each", () => {
    const ix = index([d9, d8, d1345, allDay("Lixo", TODAY, "#rotina\nQuem faz: Diego"), allDay("Sem dono", TODAY, "#rotina")]);
    assert.deepEqual(ix.names.sort(), ["Andressa", "Diego"]);
  });
  it("plain events (no model) are left out entirely", () => {
    const ix = index([timed("Reunião", at(2026, 11, 2, 15), 60, "Pauta: orçamento")]);
    for (const k of ["meds", "routines", "bills", "maint", "catalog"]) assert.equal(ix[k].length, 0, k);
  });
  it("precomputed k and key on the occurrence are used as given", () => {
    const o = { ...d9, k: { kind: "remedio", dose: "2", who: "X", alert: true, notes: "" }, key: "custom-key" };
    const ix = index([o]);
    assert.equal(ix.meds[0].key, "custom-key");
    assert.equal(ix.meds[0].dose, "2");
  });
});

describe("buildIndex: routines of the calendar (today and yesterday's not done)", () => {
  const R = (who = "Diego", extra = "") => `#rotina\nQuem faz: ${who}\nPontos: 5${extra}`;
  const today = allDay("Regar as plantas", TODAY, R());
  const yest = allDay("Lavar a louça", "2026-11-01", R("Andressa"), { uid: "u-louca-1" });
  const yestDone = allDay("Varrer", "2026-11-01", R(), { uid: "u-varrer" });
  const twoDays = allDay("Antiga", "2026-10-31", R());
  const tomorrow = allDay("Amanhã", "2026-11-03", R());
  const evening = timed("Tirar o lixo", at(2026, 11, 2, 19), 15, R("Andressa", "\nPeríodo: Noite"));
  const morning = timed("Café", at(2026, 11, 2, 7), 15, R());

  it("today's and yesterday's open ones; not yesterday's done, nor older, nor tomorrow", () => {
    const ix = index([today, yest, yestDone, twoDays, tomorrow, evening], { checks: { [keyOf(yestDone)]: check(at(2026, 11, 1, 20)) } });
    const names = ix.routines.map((r) => r.summary);
    assert.deepEqual(names.sort(), ["Lavar a louça", "Regar as plantas", "Tirar o lixo"].sort());
    const y = ix.routines.find((r) => r.summary === "Lavar a louça");
    assert.equal(y.yesterday, true);
    assert.equal(y.done, null);
    assert.equal(ix.routines.find((r) => r.summary === "Regar as plantas").yesterday, false);
  });
  it("a skipped one from yesterday is not shown again", () => {
    const ix = index([yest], { checks: { [keyOf(yest)]: check(at(2026, 11, 1, 22), { skipped: true }) } });
    assert.equal(ix.routines.length, 0);
  });
  it("done today keeps its check; fields from the model", () => {
    const c = check(at(2026, 11, 2, 9), { kind: "rotina" });
    const ix = index([today, evening], { checks: { [keyOf(today)]: c } });
    const t = ix.routines.find((r) => r.summary === "Regar as plantas");
    assert.deepEqual(t.done, c);
    assert.equal(t.points, 5);
    assert.equal(t.who, "Diego");
    assert.equal(t.time, "");
    const e = ix.routines.find((r) => r.summary === "Tirar o lixo");
    assert.equal(e.time, "19:00");
    assert.equal(e.period, "noite");
    assert.equal(e.done, null);
  });
  it("order: behind first (yesterday), then any time (all-day), then by time", () => {
    const ix = index([evening, morning, today, yest]);
    assert.deepEqual(
      ix.routines.map((r) => r.summary),
      ["Lavar a louça", "Regar as plantas", "Café", "Tirar o lixo"],
    );
  });
  it("a timed routine that crossed midnight into today is today's", () => {
    const late = timed("Ronda", at(2026, 11, 1, 23, 30), 60, R());
    const ix = index([late]);
    assert.equal(ix.routines.length, 1);
    assert.equal(ix.routines[0].yesterday, false);
  });
  it("a repeating routine with Volta is treated as a calendar routine", () => {
    const o = allDay("Repete", TODAY, "#rotina\nVolta: 2 dias depois de feita", { raw: { rrule: "FREQ=DAILY", recurrence_id: "20261102" } });
    const ix = index([o]);
    assert.equal(ix.routines.length, 1);
    assert.equal(ix.routines[0].yesterday, false);
    assert.equal("late" in ix.routines[0], false);
  });
});

describe("buildIndex: routines that come back N days after done", () => {
  const AFTER = (extra = "") => `#rotina\nQuem faz: Diego\nPontos: 10\nVolta: 2 dias depois de feita\nFeito em: 30/10/2026${extra}`;
  const due = (day, extra) => allDay("Arrumar a cama", day, AFTER(), extra);

  it("due today: pending, not late, next = its date, history read", () => {
    const ix = index([due(TODAY)]);
    assert.equal(ix.routines.length, 1);
    const r = ix.routines[0];
    assert.equal(r.done, null);
    assert.equal(r.late, 0);
    assert.equal(r.next, TODAY);
    assert.deepEqual(r.after, { n: 2, unit: "dias" });
    assert.deepEqual(r.history, ["2026-10-30"]);
    assert.equal(r.yesterday, false);
    assert.equal(r.points, 10);
  });
  it("late ones stay until done, with the days late", () => {
    const ix = index([due("2026-10-30")]);
    assert.equal(ix.routines[0].late, 3);
    assert.equal(ix.routines[0].done, null);
  });
  it("a timed one late since yesterday counts 1 day", () => {
    const o = timed("Regar", at(2026, 11, 1, 7), 30, AFTER());
    const ix = index([o]);
    assert.equal(ix.routines[0].late, 1);
    assert.equal(ix.routines[0].next, "2026-11-01");
    assert.equal(ix.routines[0].time, "07:00");
  });
  it("a future one is not in today's list (but is in the catalog)", () => {
    const ix = index([due("2026-11-05")]);
    assert.equal(ix.routines.length, 0);
    assert.equal(ix.catalog.length, 1);
    assert.equal(ix.catalog[0].next, "2026-11-05");
    assert.equal(ix.catalog[0].late, false);
  });
  it("done today: the moved event shows as done, with the key of the check (for Desfazer)", () => {
    const before = due(TODAY);
    const moved = due("2026-11-04"); // same uid, now on its next date
    const ck = keyOf(before);
    const c = check(at(2026, 11, 2, 9), { kind: "rotina", moved: { cal: CAL, uid: before.raw.uid, start: TODAY, end: "2026-11-03", day: TODAY } });
    const ix = index([moved], { checks: { [ck]: c } });
    assert.equal(ix.routines.length, 1);
    const r = ix.routines[0];
    assert.equal(r.key, ck);
    assert.deepEqual(r.done, c);
    assert.equal(r.late, 0);
    assert.equal(r.next, "2026-11-04");
  });
  it("done yesterday: the moved event is not today's anymore", () => {
    const before = due("2026-11-01");
    const moved = due("2026-11-03");
    const c = check(at(2026, 11, 1, 21), { moved: { cal: CAL, uid: before.raw.uid, day: "2026-11-01" } });
    const ix = index([moved], { checks: { [keyOf(before)]: c } });
    assert.equal(ix.routines.length, 0);
  });
  it("recreated on a calendar that can't change events: found by its name", () => {
    const before = due(TODAY, { uid: "old-uid" });
    const moved = due("2026-11-04", { uid: "new-uid" });
    const c = check(at(2026, 11, 2, 9), { moved: { cal: CAL, uid: "old-uid", day: TODAY, summary: "Arrumar a cama", recreated: true } });
    const ix = index([moved], { checks: { [keyOf(before)]: c } });
    assert.equal(ix.routines.length, 1);
    assert.deepEqual(ix.routines[0].done, c);
  });
  it("a recreated check does not match another calendar with the same name", () => {
    const moved = { ...due("2026-11-04", { uid: "new-uid" }), cal: "calendar.outro" };
    const c = check(at(2026, 11, 2, 9), { moved: { cal: CAL, uid: "old-uid", day: TODAY, summary: "Arrumar a cama", recreated: true } });
    const ix = index([moved], { checks: { k: c } });
    assert.equal(ix.routines.length, 0);
  });
  it("skipped today and its next time is today (yesterday's with 1 day): still to do", () => {
    const before = allDay("Cama", "2026-11-01", "#rotina\nVolta: 1 dia depois de feita");
    const moved = allDay("Cama", TODAY, "#rotina\nVolta: 1 dia depois de feita");
    const c = check(at(2026, 11, 2, 8), { skipped: true, moved: { cal: CAL, uid: before.raw.uid, day: TODAY } });
    const ix = index([moved], { checks: { [keyOf(before)]: c } });
    assert.equal(ix.routines.length, 1);
    assert.equal(ix.routines[0].done, null);
    assert.equal(ix.routines[0].late, 0);
    assert.equal(ix.routines[0].key, keyOf(moved));
  });
  it("skipped today to a later day: shown as skipped (done with skipped)", () => {
    const before = due(TODAY);
    const moved = due("2026-11-04");
    const c = check(at(2026, 11, 2, 8), { skipped: true, moved: { cal: CAL, uid: before.raw.uid, day: TODAY } });
    const ix = index([moved], { checks: { [keyOf(before)]: c } });
    assert.equal(ix.routines.length, 1);
    assert.equal(ix.routines[0].done.skipped, true);
  });
  it("one item per event even if the calendar sends it twice", () => {
    const ix = index([due(TODAY), due(TODAY)]);
    assert.equal(ix.routines.length, 1);
    assert.equal(ix.catalog.length, 1);
  });
  it("late after-routines come before today's in the order", () => {
    const late = allDay("Atrasada", "2026-10-31", AFTER(), { uid: "late" });
    const plain = allDay("Hoje", TODAY, "#rotina", { uid: "plain" });
    const ix = index([plain, late]);
    assert.deepEqual(
      ix.routines.map((r) => r.summary),
      ["Atrasada", "Hoje"],
    );
  });
});

describe("buildIndex: bills", () => {
  const C = (v = "R$ 119,90") => `#conta\nValor: ${v}`;
  const bill = (summary, day) => allDay(summary, day, C(), { uid: `b-${summary}` });

  it("open ones from the last 2 months up to the next 8 days", () => {
    const ix = index([bill("Antiga", "2026-08-31"), bill("Atrasada", "2026-10-23"), bill("Hoje", TODAY), bill("Em 8 dias", "2026-11-10"), bill("Em 9 dias", "2026-11-11")]);
    assert.deepEqual(
      ix.bills.map((b) => b.summary),
      ["Atrasada", "Hoje", "Em 8 dias"],
    );
    const [late, today, soon] = ix.bills;
    assert.equal(late.overdue, true);
    assert.equal(today.overdue, false);
    assert.equal(soon.overdue, false);
    assert.equal(today.value, 119.9);
    assert.equal(today.due, TODAY);
    assert.equal(today.paid, null);
  });
  it("the 62-day boundary", () => {
    const ix = index([bill("62", addDaysYmd(TODAY, -62)), bill("63", addDaysYmd(TODAY, -63))]);
    assert.deepEqual(
      ix.bills.map((b) => b.summary),
      ["62"],
    );
  });
  it("paid before today: only the ones due from yesterday on", () => {
    const a = bill("Paga ontem, vencia ontem", "2026-11-01");
    const b = bill("Paga antes, vencia antes", "2026-10-28");
    const c = bill("Paga antes, vence amanhã", "2026-11-03");
    const paid = check(at(2026, 10, 30, 10), { kind: "conta" });
    const ix = index([a, b, c], { checks: { [keyOf(a)]: paid, [keyOf(b)]: paid, [keyOf(c)]: paid } });
    assert.deepEqual(
      ix.bills.map((x) => x.summary),
      ["Paga ontem, vencia ontem", "Paga antes, vence amanhã"],
    );
    assert.equal(ix.bills[0].overdue, false, "a paid bill is never overdue");
    assert.deepEqual(ix.bills[0].paid, paid);
  });
  it("paid today stays in the list even if it was due weeks ago", () => {
    const a = bill("Paga hoje", "2026-10-12");
    const ix = index([a], { checks: { [keyOf(a)]: check(at(2026, 11, 2, 10, 30)) } });
    assert.equal(ix.bills.length, 1);
    assert.equal(ix.bills[0].overdue, false);
  });
  it("sorted by due date; a timed bill has its day as due", () => {
    const t = timed("Boleto", at(2026, 11, 5, 18), 30, C("50,00"));
    const ix = index([bill("B", "2026-11-04"), t, bill("A", "2026-10-30")]);
    assert.deepEqual(
      ix.bills.map((b) => b.due),
      ["2026-10-30", "2026-11-04", "2026-11-05"],
    );
    assert.equal(ix.bills[2].value, 50);
  });
});

describe("buildIndex: maintenance", () => {
  const M = (every = "6 meses", warn = 7, extra = "") => `#manutenção\nQuem faz: Diego\nA cada: ${every}\nAvisar: ${warn} dias antes\nPontos: 30\nCômodo: Cozinha\nEquipamento: Filtro${extra}`;

  it("one item per event with its cycle, state and fields", () => {
    const o = allDay("Trocar o filtro", "2026-11-07", M());
    const ix = index([o]);
    assert.equal(ix.maint.length, 1);
    const m = ix.maint[0];
    assert.equal(m.due, "2026-11-07");
    assert.equal(m.days, 5);
    assert.equal(m.state, "perto");
    assert.equal(m.start, "2026-05-07");
    assert.equal(m.points, 30);
    assert.equal(m.room, "Cozinha");
    assert.equal(m.equip, "Filtro");
    assert.deepEqual(m.every, { n: 6, unit: "meses" });
    assert.equal(m.warn, 7);
    assert.equal(m.repeating, false);
    assert.equal(m.canMove, true);
  });
  it("vencida and ok, sorted by days left", () => {
    const ix = index([allDay("Ok", "2027-01-10", M("1 ano", 15), { uid: "a" }), allDay("Vencida", "2026-10-29", M("3 meses", 10), { uid: "b" }), allDay("Perto", "2026-11-04", M(), { uid: "c" })]);
    assert.deepEqual(
      ix.maint.map((m) => [m.summary, m.state, m.days]),
      [
        ["Vencida", "vencida", -4],
        ["Perto", "perto", 2],
        ["Ok", "ok", 69],
      ],
    );
  });
  it("canMove: update, or create + delete; not for read-only calendars", () => {
    const o = allDay("x", "2026-12-01", M());
    for (const [f, want] of [
      [7, true],
      [4, true],
      [3, true],
      [1, false],
      [2, false],
      [0, false],
    ]) {
      assert.equal(index([o], { features: () => f }).maint[0].canMove, want, `features ${f}`);
    }
  });
  it("repeating maintenance: the first occurrence not done", () => {
    const occ = (day) => allDay("Limpar a calha", day, M("1 mês"), { uid: "rep", raw: { rrule: "FREQ=MONTHLY", recurrence_id: day.replace(/-/g, "") } });
    const oct = occ("2026-10-15");
    const nov = occ("2026-11-15");
    const dec = occ("2026-12-15");
    const ix = index([oct, nov, dec], { checks: { [keyOf(oct)]: check(at(2026, 10, 16)) } });
    assert.equal(ix.maint.length, 1);
    assert.equal(ix.maint[0].due, "2026-11-15");
    assert.equal(ix.maint[0].repeating, true);
  });
  it("the same maintenance on two calendars is two items", () => {
    const a = allDay("Filtro", "2026-12-01", M());
    const b = { ...a, cal: "calendar.outro" };
    assert.equal(index([a, b]).maint.length, 2);
  });
});

describe("buildIndex: catalog (Mais › Rotinas)", () => {
  it("one line per series at its next time, sorted by name (pt-BR)", () => {
    const occs = [];
    for (const day of ["2026-11-01", "2026-11-02", "2026-11-03"]) {
      const o = timed("Sertralina", at(...day.split("-").map(Number), 8), 15, MED());
      o.raw.uid = "sert";
      o.raw.recurrence_id = day.replace(/-/g, "");
      o.raw.rrule = "FREQ=DAILY";
      occs.push(o);
    }
    occs.push(allDay("Água das plantas", TODAY, "#rotina\nQuem faz: Diego\nPeríodo: Manhã", { uid: "agua" }));
    occs.push(allDay("Conta de luz", "2026-11-05", "#conta\nValor: 231,40", { uid: "luz" }));
    occs.push(allDay("Filtro", "2027-03-01", "#manutenção\nA cada: 6 meses\nCômodo: Cozinha", { uid: "filtro" }));
    const ix = index(occs);
    assert.deepEqual(
      ix.catalog.map((c) => c.summary),
      ["Água das plantas", "Conta de luz", "Filtro", "Sertralina"],
    );
    const sert = ix.catalog.find((c) => c.summary === "Sertralina");
    assert.equal(sert.next, "2026-11-02", "the first occurrence that has not ended before today");
    assert.equal(sert.time, "08:00");
    assert.equal(sert.alert, true);
    assert.equal(sert.dose, "1 comprimido");
    assert.equal(sert.late, false);
    const agua = ix.catalog.find((c) => c.summary === "Água das plantas");
    assert.equal(agua.period, "manha");
    assert.equal(agua.alert, null, "alert is only for medicines");
    assert.equal(agua.time, "");
    const luz = ix.catalog.find((c) => c.summary === "Conta de luz");
    assert.equal(luz.value, 231.4);
    const filtro = ix.catalog.find((c) => c.summary === "Filtro");
    assert.deepEqual(filtro.every, { n: 6, unit: "meses" });
    assert.equal(filtro.room, "Cozinha");
  });
  it("finished series are left out; moving ones stay, late", () => {
    const oldRoutine = allDay("Pintar a cerca", "2026-10-01", "#rotina", { uid: "cerca" });
    const oldDose = timed("Antibiótico", at(2026, 10, 20, 8), 15, MED(), { uid: "anti" });
    const lateAfter = allDay("Cama", "2026-10-30", "#rotina\nVolta: 2 dias depois de feita", { uid: "cama" });
    const lateMaint = allDay("Calha", "2026-10-01", "#manutenção\nA cada: 1 ano", { uid: "calha" });
    const ix = index([oldRoutine, oldDose, lateAfter, lateMaint]);
    assert.deepEqual(
      ix.catalog.map((c) => [c.summary, c.late]),
      [
        ["Calha", true],
        ["Cama", true],
      ],
    );
  });
  it("bills: an unpaid one from the last 2 months stays (late); paid or older ones go", () => {
    const unpaid = allDay("Internet", "2026-10-20", "#conta\nValor: 119,90", { uid: "net" });
    const paid = allDay("Água", "2026-10-20", "#conta\nValor: 80", { uid: "agua" });
    const old = allDay("IPTU", "2026-08-01", "#conta\nValor: 300", { uid: "iptu" });
    const ix = index([unpaid, paid, old], { checks: { [keyOf(paid)]: check(at(2026, 10, 21)) } });
    assert.deepEqual(
      ix.catalog.map((c) => [c.summary, c.late]),
      [["Internet", true]],
    );
  });
});

describe("buildIndex: checks and metadata", () => {
  it("keeps only the checks of the last 45 days", () => {
    const checks = { recent: check(at(2026, 10, 1)), old: check(at(2026, 9, 1)) };
    const ix = index([], { checks });
    assert.deepEqual(Object.keys(ix.checks), ["recent"]);
  });
  it("at is the ISO time of now; late defaults to 30", () => {
    const ix = index([]);
    assert.equal(ix.at, new Date(NOW).toISOString());
    assert.equal(ix.late, 30);
    assert.deepEqual(ix.names, []);
  });
  it("base fields of an item carry the event (uid, recurrence, rrule, location, description)", () => {
    const o = timed("Sertralina", at(2026, 11, 2, 9), 15, MED(), { raw: { recurrence_id: "20261102T090000", rrule: "FREQ=DAILY", location: "Casa" } });
    const m = index([o]).meds[0];
    assert.equal(m.uid, "u-Sertralina");
    assert.equal(m.rid, "20261102T090000");
    assert.equal(m.rrule, "FREQ=DAILY");
    assert.equal(m.location, "Casa");
    assert.equal(m.description, MED());
    assert.equal(m.cal, CAL);
    assert.equal(m.start, o.raw.start);
  });
  it("the description built by the form is what the index reads", () => {
    const d = buildDescription({ kind: "rotina", who: "Andressa", points: 7, period: "tarde", after: { n: 3, unit: "dias" }, history: ["2026-10-30"], notes: "" });
    const ix = index([allDay("Trocar a toalha", "2026-11-02", d)]);
    const r = ix.routines[0];
    assert.equal(r.who, "Andressa");
    assert.equal(r.points, 7);
    assert.equal(r.period, "tarde");
    assert.deepEqual(r.after, { n: 3, unit: "dias" });
  });
});
