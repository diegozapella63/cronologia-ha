// Integration: the phone alerts of the doses with the real timer of the server — the
// pet's dose to whoever takes care of it, the late one to the person and the caregiver,
// Adiar and Tomei from the phone, the test alert's Adiar — and the placar: a period
// that ended closes when the server starts (history, the winner's own prize, phones
// told), Entregue, removing a prize, and changing the period length or the week start.
// The fake doses are relative to now; the alert checks skip near midnight, when the
// fake keeps them inside today.
import { startStack, day, hashOf, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const shift = (s, n) => {
  const [y, m, d] = s.split("-").map(Number);
  return ymd(new Date(y, m - 1, d + n));
};
// the week of today starting on Monday (week_start 1) and the one before
const monday = (() => {
  const t = new Date();
  return ymd(new Date(t.getFullYear(), t.getMonth(), t.getDate() - ((t.getDay() + 6) % 7)));
})();
const prev = { key: shift(monday, -7), start: shift(monday, -7), end: monday };
const noonOf = (s) => new Date(`${s}T12:00:00`).toISOString();
const hour = new Date().getHours();
const lateNight = hour < 2 || hour >= 23;

let stack;
let c;
let h;
before(async () => {
  stack = await startStack({
    data: {
      app: {
        week_start: 1,
        // as saved before 1.54.0: Quem cuida by phone (the phone of Davi), a pet with a phone picked for it
        alerts: { late: 30, caregivers: ["mobile_app_pixel_8"] },
        people: { Mimi: { notify: "mobile_app_pixel_8", pet: true } },
        score: { enabled: true, participants: ["Davi", "Aurora"], period: "semana" },
      },
      score: {
        current: prev,
        entries: [
          { key: "extra|a", at: noonOf(shift(prev.start, 1)), who: "Davi", points: 30, title: "Lavou o carro", kind: "extra" },
          { key: "extra|b", at: noonOf(shift(prev.start, 2)), who: "Aurora", points: 10, title: "Faxina", kind: "extra" },
        ],
        prizes: { [prev.key]: { Davi: "Jantar fora", Aurora: "Massagem" } },
        rewards: { [monday]: "Cinema" },
      },
    },
  });
  c = await stack.client();
  h = await stack.home(c);
  await h.wait((x) => x.meds.length >= 5, "the doses");
});
after(async () => {
  if (stack) await stack.stop();
});
const stored = () => JSON.parse(fs.readFileSync(path.join(stack.dirs.data, "cronologia.json"), "utf8"));
/** The data file once it shows `pred` (the server writes it 400 ms after a change). */
const storedWhen = (pred, what = "the data file") =>
  waitFor(
    () => {
      const s = stored();
      return pred(s) && s;
    },
    { what },
  );
const notes = async (pred) => (await stack.notifications()).filter(pred);

describe("the placar: a period that ended closes when the server starts", () => {
  it("the result goes to the history: the winner, the totals, the winner's own prize", async () => {
    const ix = await h.wait((x) => x.score.history.length === 1, "the period closed", 15000);
    const [last] = ix.score.history;
    assert.deepEqual({ key: last.key, winner: last.winner, totals: last.totals, reward: last.reward, delivered: last.delivered }, { key: prev.key, winner: "Davi", totals: { Davi: 30, Aurora: 10 }, reward: "Jantar fora", delivered: false });
    assert.equal(ix.score.current.start, monday, "the current week starts on Monday (week_start 1)");
    assert.deepEqual(ix.score.rows.map((r) => r.points), [0, 0], "the new period starts at zero");
    assert.equal(ix.score.current.reward, "Cinema");
  });
  it("each player's phone is told, with the prize and the one of now", async () => {
    const told = await waitFor(async () => {
      const n = await notes((x) => x.title === "🏆 Placar fechado");
      return n.length === 2 && n;
    }, { what: "the result on the phones" });
    assert.deepEqual(told.map((n) => n.service).sort(), ["mobile_app_galaxy_s23", "mobile_app_pixel_8"]);
    assert.equal(told[0].message, "Davi venceu: 30 × 10. Prêmio: Jantar fora. Prêmio agora: Cinema.");
  });
  it("the close is logged (fechou), and the closed period's Extrato keeps its own lines only", async () => {
    await storedWhen((s) => s.score.log.some((l) => l.type === "fechou" && l.winner === "Davi" && l.reward === "Jantar fora"), "fechou in the log");
    const log = await c.call("cronologia/score/log", { before: 0, limit: 10, from: prev.start, to: prev.end });
    assert.ok(log.every((l) => l.type !== "fechou"));
  });
  it("Entregue marks the prize as given, and can be undone; an unknown period is refused", async () => {
    await c.call("cronologia/score/delivered", { period: prev.key, delivered: true });
    await h.wait((x) => x.score.history[0].delivered === true, "delivered");
    await storedWhen((s) => s.score.history[0].delivered === true, "delivered saved");
    await c.call("cronologia/score/delivered", { period: prev.key, delivered: false });
    await h.wait((x) => x.score.history[0].delivered === false, "not delivered again");
    await assert.rejects(c.call("cronologia/score/delivered", { period: "2020-01-06", delivered: true }), /Período não encontrado/);
  });
  it("a prize removed (empty text) leaves the period without one", async () => {
    await c.call("cronologia/score/reward", { period: monday, text: "  " });
    await h.wait((x) => x.score.current.reward === "", "no prize");
    await storedWhen((s) => !(monday in s.score.rewards), "the prize gone from the file");
    await c.call("cronologia/score/prizes", { period: monday, shared: "", per: { Davi: "Pizza", Aurora: "" } });
    const ix = await h.wait((x) => x.score.current.prizes.Davi === "Pizza", "Davi's prize");
    assert.deepEqual(ix.score.current.prizes, { Davi: "Pizza" }, "an empty one is not kept");
  });
  it("changing the period length starts counting from the period of now, without closing one", async () => {
    await c.call("cronologia/score/extra", { who: "Aurora", points: 5, title: "Regou" });
    await c.call("cronologia/prefs/set_app", { prefs: { score: { enabled: true, participants: ["Davi", "Aurora"], period: "mes" } } });
    let ix = await h.wait((x) => x.score.period === "mes", "monthly");
    assert.equal(ix.score.current.start, `${day(0).slice(0, 8)}01`);
    assert.equal(ix.score.history.length, 1, "no period closed");
    // the month counts the 10 of Faxina, from last week, when last week is already in this month
    const kept = 5 + (shift(prev.start, 2) >= ix.score.current.start ? 10 : 0);
    assert.equal(ix.score.rows.find((r) => r.name === "Aurora").points, kept, "the points kept");
    await c.call("cronologia/prefs/set_app", { prefs: { score: { enabled: true, participants: ["Davi", "Aurora"], period: "quinzena" } } });
    ix = await h.wait((x) => x.score.period === "quinzena", "every two weeks");
    const days = (Date.parse(ix.score.current.end) - Date.parse(ix.score.current.start)) / 86400000;
    assert.equal(days, 14);
    assert.equal(new Date(`${ix.score.current.start}T12:00:00`).getDay(), 1, "starts on the week start (Monday)");
  });
  it("the week starting on Sunday (Mais › Opções) moves the weekly close to Sunday", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { score: { enabled: true, participants: ["Davi", "Aurora"], period: "semana" }, week_start: 0 } });
    const ix = await h.wait((x) => x.score.period === "semana" && new Date(`${x.score.current.start}T12:00:00`).getDay() === 0, "the week from Sunday");
    assert.equal(ix.score.current.end, shift(ix.score.current.start, 7));
    assert.equal(ix.score.history.length, 1, "still no period closed");
    await storedWhen((s) => s.score.current.start === ix.score.current.start, "the period saved");
  });
});

describe("phone alerts of the doses (the server's own timer)", () => {
  const med = (name) => h.latest.meds.find((m) => m.summary === name);
  it("the phones picked before 1.54.0 became the people whose phones they are", async () => {
    const s = await storedWhen((x) => x.app.alerts.caregivers[0] === "Davi", "Quem cuida migrated");
    assert.deepEqual(s.app.alerts.caregivers, ["Davi"]);
    assert.deepEqual(s.app.people, { Mimi: { pet: true, care: "Davi" } });
  });
  it("the pet's dose goes to the person chosen for it (it has no phone)", { skip: lateNight && "near midnight the fake doses move" }, async () => {
    const g = med("Gardenal");
    assert.equal(g.phone, true, "on the phone of Davi");
    const sent = await waitFor(async () => {
      const n = await notes((x) => /Gardenal/.test(x.title || ""));
      return n.length && n;
    }, { what: "the alert of Gardenal", timeout: 15000 });
    assert.deepEqual([...new Set(sent.map((n) => n.service))], ["mobile_app_pixel_8"]);
    assert.deepEqual(
      sent[0].data.actions.map((a) => a.action),
      [`CRONOLOGIA_TOMEI_${hashOf(g.key)}`, `CRONOLOGIA_ADIAR_${hashOf(g.key)}`],
    );
  });
  it("a dose past the late minutes: to the person and to the caregiver", { skip: lateNight && "near midnight the fake doses move" }, async () => {
    const m = med("Mounjaro 2,5 mg");
    const late = await waitFor(async () => {
      const n = await notes((x) => x.title === "⚠️ Mounjaro 2,5 mg atrasado");
      return n.length === 2 && n;
    }, { what: "the late alert", timeout: 15000 });
    assert.deepEqual(late.map((n) => n.service).sort(), ["mobile_app_galaxy_s23", "mobile_app_pixel_8"]);
    assert.match(late[0].message, /^Aurora ainda não tomou o das \d\d:\d\d \(\d+ min\)\. Dose: 1 caneta\.$/);
    const s = await storedWhen((x) => x.sent[m.key] && x.sent[m.key].late, "the late alert saved");
    assert.deepEqual(s.sent[m.key].targets.sort(), ["mobile_app_galaxy_s23", "mobile_app_pixel_8"]);
  });
  it("Adiar on the phone: the alert comes again 15 minutes later (saved)", { skip: lateNight && "near midnight the fake doses move" }, async () => {
    const g = med("Gardenal");
    const before = Date.now();
    await stack.fire("mobile_app_notification_action", { action: `CRONOLOGIA_ADIAR_${hashOf(g.key)}` });
    const s = await waitFor(() => (stored().sent[g.key] || {}).snooze_until && stored().sent[g.key], { what: "the snooze saved" });
    const until = Date.parse(s.snooze_until);
    assert.ok(until >= before + 15 * 60000 - 1000 && until <= Date.now() + 15 * 60000 + 1000, `15 min from now (${s.snooze_until})`);
    assert.equal(med("Gardenal").taken, null, "not taken");
    assert.ok(stack.app.lines.some((l) => /Adiado 15 min: Gardenal/.test(l)));
  });
  it("Tomei on the phone marks the dose for the pet and clears the alert from the phones", { skip: lateNight && "near midnight the fake doses move" }, async () => {
    const g = med("Gardenal");
    await stack.fire("mobile_app_notification_action", { action: `CRONOLOGIA_TOMEI_${hashOf(g.key)}` });
    const ix = await h.wait((x) => x.meds.find((y) => y.key === g.key).state === "tomado", "taken");
    assert.equal(ix.meds.find((y) => y.key === g.key).taken.by, "Mimi (celular)");
    const cleared = await waitFor(async () => {
      const n = await notes((x) => x.message === "clear_notification" && x.data.tag === `cronologia-${hashOf(g.key)}`);
      return n.length && n;
    }, { what: "the alert cleared" });
    assert.deepEqual(cleared.map((n) => n.service), ["mobile_app_pixel_8"]);
  });
  it("the test alert's Adiar comes back too: confirmed on the phone and on the screens", async () => {
    await c.call("cronologia/notify/test", { person: "Aurora" });
    const [test] = await notes((x) => x.title === "💊 Teste do CronologIA" && x.service === "mobile_app_galaxy_s23");
    assert.deepEqual(
      test.data.actions.map((a) => a.title),
      ["Tomei", "Adiar 15 min"],
    );
    await stack.fire("mobile_app_notification_action", { action: test.data.actions[1].action });
    const ix = await h.wait((x) => x.test && x.test.action === "adiar", "the Adiar of the test");
    assert.equal(ix.test.person, "Aurora");
    const ok = await waitFor(async () => {
      const n = await notes((x) => x.title === "✅ Funcionou" && x.service === "mobile_app_galaxy_s23");
      return n.length && n[0];
    }, { what: "the confirmation" });
    assert.equal(ok.message, "O botão Adiar chegou ao CronologIA. Num aviso de verdade, ele avisa de novo em 15 minutos.");
  });
  it("only a person is tested, on the phones tied to them (never a device)", async () => {
    await assert.rejects(c.call("cronologia/notify/test", { target: "persistent_notification" }), { code: "no_phone" });
    await assert.rejects(c.call("cronologia/notify/test", { person: "Zeca" }), { code: "no_phone" });
  });
});
