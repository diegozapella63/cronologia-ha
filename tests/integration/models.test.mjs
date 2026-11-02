// Integration: the models end to end — doses (Tomei, phone buttons), routines
// (Feito, Pular, Desfazer, the ones that come back N days after done), maintenance,
// bills, the placar, people and pets, automations (cronologia_feito), sensors.
// Assertions never depend on the hour: the fake calendars are relative to today.
import { startStack, day, hashOf, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { parseKind } from "../../cronologia/rootfs/app/lib/kinds.js";

let stack;
let c;
let h;
const CASA = "calendar.casa";
before(async () => {
  stack = await startStack();
  c = await stack.client();
  h = await stack.home(c);
  await h.wait((x) => x.tracked.length >= 2 && x.meds.length >= 5 && x.maint.length >= 4, "the fake calendars in the index");
  await c.call("cronologia/prefs/set_app", {
    prefs: {
      score: { enabled: true, participants: ["Diego", "Andressa"], period: "semana" },
      people: { Mimi: { notify: null, pet: true } },
      demerits: [{ id: "toalha", title: "Toalha molhada na cama", points: 5 }],
    },
  });
  await h.wait((x) => x.score.enabled, "the placar on");
});
after(async () => {
  if (stack) await stack.stop();
});

const routine = (ix, summary, pred = () => true) => ix.routines.find((r) => r.summary === summary && pred(r));
const points = (ix, who) => (ix.score.rows.find((r) => r.name === who) || {}).points || 0;
const rawOf = async (cal, uid) => (await stack.events(cal, -10, 400)).find((e) => e.uid === uid);

describe("the Agora index from the fake calendars", () => {
  it("today's doses with who takes them and whose phone gets the alert (pets have none)", () => {
    const ix = h.latest;
    const by = Object.fromEntries(ix.meds.map((m) => [m.summary, m]));
    assert.deepEqual(Object.keys(by).sort(), ["DPrev 10.000 UI", "Gardenal", "Mounjaro 2,5 mg", "Sertralina", "Ômega 3"].sort());
    assert.equal(by.Sertralina.who, "Andressa");
    assert.equal(by.Sertralina.notify, "mobile_app_galaxy_s23");
    assert.equal(by["Ômega 3"].notify, "mobile_app_pixel_8");
    assert.equal(by.Gardenal.who, "Mimi");
    assert.equal(by.Gardenal.notify, null);
    for (const m of ix.meds) assert.ok(["depois", "agora", "atrasado"].includes(m.state), m.state);
  });
  it("today's routines and yesterday's not done", () => {
    const ix = h.latest;
    const today = ix.routines.filter((r) => !r.yesterday).map((r) => r.summary);
    const yesterday = ix.routines.filter((r) => r.yesterday).map((r) => r.summary);
    assert.deepEqual(today.sort(), ["Lavar a louça", "Limpar a caixa de areia", "Regar as plantas", "Tirar o lixo"]);
    assert.deepEqual(yesterday.sort(), ["Lavar a louça", "Regar as plantas"]);
    assert.ok(ix.routines[0].yesterday, "behind ones first");
    const lixo = routine(ix, "Tirar o lixo");
    assert.equal(lixo.time, "19:00");
    assert.equal(lixo.points, 10);
    assert.equal(lixo.notes, "O caminhão passa às 20h");
  });
  it("bills around today and every maintenance item", () => {
    const ix = h.latest;
    assert.deepEqual(
      ix.bills.map((b) => [b.summary, b.due, b.overdue, b.value]),
      [
        ["Internet", day(-2), true, 119.9],
        ["Conta de luz", day(3), false, 231.4],
      ],
    );
    const m = Object.fromEntries(ix.maint.map((x) => [x.summary, x]));
    assert.equal(m["Limpar o ar-condicionado"].state, "vencida");
    assert.equal(m["Limpar o ar-condicionado"].days, -4);
    assert.equal(m["Trocar o filtro de água"].state, "perto");
    assert.equal(m["Dedetização"].state, "ok");
    assert.equal(ix.maint[0].summary, "Limpar o ar-condicionado", "most late first");
    assert.ok(ix.maint.every((x) => x.canMove));
  });
  it("people: HA persons with their phones, the pet without; phones with their owners", () => {
    const ix = h.latest;
    const p = Object.fromEntries(ix.people.map((x) => [x.name, x]));
    assert.deepEqual([p.Diego.person, p.Diego.notify, p.Diego.pet], ["person.diego", "mobile_app_pixel_8", false]);
    assert.deepEqual([p.Andressa.notify, p.Andressa.auto], ["mobile_app_galaxy_s23", "mobile_app_galaxy_s23"]);
    assert.deepEqual([p.Mimi.person, p.Mimi.pet], [null, true]);
    assert.deepEqual(ix.targets, [
      { id: "mobile_app_galaxy_s23", name: "Galaxy S23", owner: "Andressa" },
      { id: "mobile_app_pixel_8", name: "Pixel 8", owner: "Diego" },
    ]);
  });
  it("the catalog (Mais › Rotinas) has one line per registered item", () => {
    const names = h.latest.catalog.map((x) => x.summary);
    for (const n of ["Sertralina", "Regar as plantas", "Conta de luz", "Internet", "Trocar o filtro de água"]) assert.equal(names.filter((x) => x === n).length, 1, n);
  });
});

describe("creating each model in a calendar that had none", () => {
  const P = "calendar.pessoal";
  it("the calendar is followed from then on (and remembered), each model in its place", async () => {
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Losartana", start: `${day(0)}T23:30:00-03:00`, end: `${day(0)}T23:45:00-03:00`, description: "#remédio\nDose: 50 mg\nQuem toma: Diego\nAviso no celular: não", rrule: "FREQ=DAILY" } });
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Condomínio", start: day(4), end: day(5), description: "#conta\nValor: R$ 1.234,56\nBoleto no e-mail" } });
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Revisar o extintor", start: day(10), end: day(11), description: "#manutenção\nQuem faz: Diego\nA cada: 1 ano\nAvisar: 15 dias antes\nPontos: 20\nCômodo: Garagem\nEquipamento: Extintor" } });
    await c.call("calendar/event/create", { entity_id: P, event: { summary: "Regar a horta", start: day(0), end: day(1), description: "#rotina\nQuem faz: Andressa\nPontos: 3\nPeríodo: Tarde" } });
    const ix = await h.wait((x) => x.tracked.includes(P) && x.meds.some((m) => m.summary === "Losartana") && x.bills.some((b) => b.summary === "Condomínio") && x.maint.some((m) => m.summary === "Revisar o extintor") && routine(x, "Regar a horta"), "the four new models");
    const med = ix.meds.find((m) => m.summary === "Losartana");
    assert.deepEqual([med.dose, med.who, med.alert, med.time, med.cal], ["50 mg", "Diego", false, "23:30", P]);
    const bill = ix.bills.find((b) => b.summary === "Condomínio");
    assert.deepEqual([bill.value, bill.due, bill.notes], [1234.56, day(4), "Boleto no e-mail"]);
    const m = ix.maint.find((x) => x.summary === "Revisar o extintor");
    assert.deepEqual([m.state, m.days, m.warn, m.room, m.equip, m.points], ["perto", 10, 15, "Garagem", "Extintor", 20]);
    assert.deepEqual(m.every, { n: 1, unit: "anos" });
    const r = routine(ix, "Regar a horta");
    assert.deepEqual([r.who, r.points, r.period], ["Andressa", 3, "tarde"]);
    const saved = await waitFor(() => JSON.parse(fs.readFileSync(path.join(stack.dirs.data, "cronologia.json"), "utf8")).kind_cals.includes(P), { what: "the calendar remembered in /data" });
    assert.ok(saved);
    // a plain event does not make a calendar followed
    await c.call("calendar/event/create", { entity_id: "calendar.trabalho", event: { summary: "Almoço", start: day(1), end: day(2) } });
    await new Promise((res) => setTimeout(res, 300));
    assert.equal(h.latest.tracked.includes("calendar.trabalho"), false);
  });
});

describe("routines of the calendar", () => {
  it("Feito gives the points to who did it; Desfazer takes them back", async () => {
    const r = routine(h.latest, "Regar as plantas", (x) => !x.yesterday);
    const before = points(h.latest, "Diego");
    await c.call("cronologia/check/set", { key: r.key, done: true, kind: "rotina" });
    let ix = await h.wait((x) => routine(x, "Regar as plantas", (y) => y.key === r.key).done, "Regar done");
    assert.equal(routine(ix, "Regar as plantas", (y) => y.key === r.key).done.by, "Diego", "the person of the Home Assistant user");
    assert.equal(points(ix, "Diego"), before + 5);
    await c.call("cronologia/check/set", { key: r.key, done: false, kind: "rotina" });
    ix = await h.wait((x) => !routine(x, "Regar as plantas", (y) => y.key === r.key).done, "Regar undone");
    assert.equal(points(ix, "Diego"), before);
  });
  it("done by someone else (Quem fez?) and then given to another person", async () => {
    const r = routine(h.latest, "Lavar a louça", (x) => !x.yesterday);
    await c.call("cronologia/check/set", { key: r.key, done: true, kind: "rotina", who: "andressa" });
    let ix = await h.wait((x) => x.score.entries.some((e) => e.key === r.key), "the points");
    assert.equal(ix.score.entries.find((e) => e.key === r.key).who, "Andressa");
    await c.call("cronologia/score/reassign", { key: r.key, who: "Diego" });
    ix = await h.wait((x) => x.score.entries.find((e) => e.key === r.key).who === "Diego", "reassigned");
    assert.equal(routine(ix, "Lavar a louça", (y) => y.key === r.key).done.by, "Diego");
    await assert.rejects(c.call("cronologia/score/reassign", { key: r.key, who: "Visita" }), { code: "invalid_format" });
  });
  it("Pular yesterday's: it leaves the list, no points", async () => {
    const r = routine(h.latest, "Lavar a louça", (x) => x.yesterday);
    const out = await c.call("cronologia/check/set", { key: r.key, skip: true });
    assert.deepEqual(out, { skipped: true });
    const ix = await h.wait((x) => !x.routines.some((y) => y.key === r.key), "the skipped one gone");
    assert.equal(ix.checks[r.key].skipped, true);
    assert.equal(ix.score.entries.some((e) => e.key === r.key), false);
  });
  it("refuses a bad key and Pular of something that is not a routine", async () => {
    await assert.rejects(c.call("cronologia/check/set", { key: "", done: true }), { code: "invalid_format" });
    const dose = h.latest.meds[0];
    await assert.rejects(c.call("cronologia/check/set", { key: dose.key, skip: true }), { code: "not_found" });
  });
});

describe("a routine that comes back N days after done", () => {
  let uid;
  it("created with the form's description: it is today's, to do", async () => {
    await c.call("calendar/event/create", { entity_id: CASA, event: { summary: "Trocar a toalha", start: day(0), end: day(1), description: "#rotina\nQuem faz: Andressa\nPontos: 7\nPeríodo: Manhã\nVolta: 2 dias depois de feita" } });
    const ix = await h.wait((x) => routine(x, "Trocar a toalha"), "the new routine");
    const r = routine(ix, "Trocar a toalha");
    uid = r.uid;
    assert.deepEqual([r.done, r.late, r.next, r.period, r.points], [null, 0, day(0), "manha", 7]);
    assert.deepEqual(r.after, { n: 2, unit: "dias" });
  });
  it("Feito moves the event to today + 2 with today in Feito em; the list shows it done", async () => {
    const r = routine(h.latest, "Trocar a toalha");
    const before = points(h.latest, "Andressa");
    await c.call("cronologia/check/set", { key: r.key, done: true, kind: "rotina", who: "Andressa" });
    const raw = await waitFor(async () => {
      const e = await rawOf(CASA, uid);
      return e && e.start === day(2) && e;
    }, { what: "the event moved" });
    const k = parseKind(raw.description);
    assert.deepEqual(k.history, [day(0)]);
    assert.equal(k.period, "manha");
    const ix = await h.wait((x) => routine(x, "Trocar a toalha", (y) => y.done), "shown as done");
    const done = routine(ix, "Trocar a toalha");
    assert.equal(done.key, r.key, "the key of the check, for Desfazer");
    assert.equal(done.next, day(2));
    assert.equal(done.done.moved.day, day(0));
    assert.equal(points(ix, "Andressa"), before + 7);
  });
  it("Desfazer brings it back to today without today in its history and takes the points", async () => {
    const r = routine(h.latest, "Trocar a toalha");
    const before = points(h.latest, "Andressa");
    await c.call("cronologia/check/set", { key: r.key, done: false, kind: "rotina" });
    const raw = await waitFor(async () => {
      const e = await rawOf(CASA, uid);
      return e && e.start === day(0) && e;
    }, { what: "the event back" });
    assert.deepEqual(parseKind(raw.description).history, [], "no Feito em left");
    assert.doesNotMatch(raw.description, /Feito em/);
    const ix = await h.wait((x) => routine(x, "Trocar a toalha", (y) => !y.done), "pending again");
    assert.equal(points(ix, "Andressa"), before - 7);
  });
  it("Pular of yesterday's (1 day): it comes to today and stays to do", async () => {
    await c.call("calendar/event/create", { entity_id: CASA, event: { summary: "Arrumar a cama", start: day(-1), end: day(0), description: "#rotina\nVolta: 1 dia depois de feita\nFeito em: " } });
    const r = routine(await h.wait((x) => routine(x, "Arrumar a cama"), "the late routine"), "Arrumar a cama");
    assert.equal(r.late, 1);
    const out = await c.call("cronologia/check/set", { key: r.key, skip: true });
    assert.deepEqual(out, { skipped: true, moved: true, next: day(0) });
    const ix = await h.wait((x) => routine(x, "Arrumar a cama", (y) => y.next === day(0)), "moved to today");
    const now = routine(ix, "Arrumar a cama");
    assert.equal(now.done, null, "skipped to today: still to do");
    assert.equal(now.late, 0);
    assert.equal(ix.checks[r.key].skipped, true);
  });
});

describe("maintenance", () => {
  it("Feito moves it to today + interval with today in its history; points to who did it; Desfazer", async () => {
    const m = h.latest.maint.find((x) => x.summary === "Trocar o filtro de água");
    const before = points(h.latest, "Diego");
    const out = await c.call("cronologia/maint/done", { entity_id: CASA, uid: m.uid });
    assert.equal(out.moved, true);
    assert.equal(out.undo, true);
    const raw = await waitFor(async () => {
      const e = await rawOf(CASA, m.uid);
      return e && e.start === out.next && e;
    }, { what: "the maintenance moved" });
    const t = new Date();
    const next = new Date(t.getFullYear(), t.getMonth() + 6, Math.min(t.getDate(), new Date(t.getFullYear(), t.getMonth() + 7, 0).getDate()));
    assert.equal(out.next, `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}-${String(next.getDate()).padStart(2, "0")}`);
    assert.equal(parseKind(raw.description).history[0], day(0));
    let ix = await h.wait((x) => x.maint.find((y) => y.uid === m.uid).due === out.next, "the new due date");
    assert.equal(ix.maint.find((y) => y.uid === m.uid).state, "ok");
    assert.equal(points(ix, "Diego"), before + 30);
    await c.call("cronologia/maint/undo", { entity_id: CASA, uid: m.uid });
    ix = await h.wait((x) => x.maint.find((y) => y.uid === m.uid).due === day(5), "back to its date");
    assert.equal(points(ix, "Diego"), before);
    await assert.rejects(c.call("cronologia/maint/undo", { entity_id: CASA, uid: m.uid }), { code: "not_found" });
  });
  it("errors: a bad id, a missing event, not a maintenance", async () => {
    await assert.rejects(c.call("cronologia/maint/done", { entity_id: "x", uid: "y" }), { code: "invalid_format" });
    await assert.rejects(c.call("cronologia/maint/done", { entity_id: CASA, uid: "nada" }), { code: "not_found" });
    const r = routine(h.latest, "Regar as plantas");
    await assert.rejects(c.call("cronologia/maint/done", { entity_id: CASA, uid: r.uid }), { code: "invalid_format" });
  });
  it("cronologia_feito from an automation (NFC tag): done, the points to quem", async () => {
    const m = h.latest.maint.find((x) => x.summary === "Limpar o ar-condicionado");
    const before = points(h.latest, "Andressa");
    await stack.fire("cronologia_feito", { nome: "limpar o AR-CONDICIONADO", quem: "Andressa" });
    const ix = await h.wait((x) => x.maint.find((y) => y.uid === m.uid).state !== "vencida", "the automation's maintenance done");
    assert.equal(points(ix, "Andressa"), before + 40);
    const line = ix.score.log.find((l) => l.title === "Limpar o ar-condicionado");
    assert.equal(line.via, "Automação");
    assert.equal(line.by, "Andressa");
  });
});

describe("doses and bills", () => {
  it("Tomei in the app, and Desfazer", async () => {
    const m = h.latest.meds.find((x) => x.summary === "Sertralina");
    await c.call("cronologia/check/set", { key: m.key, done: true, kind: "remedio" });
    let ix = await h.wait((x) => x.meds.find((y) => y.key === m.key).state === "tomado", "taken");
    assert.equal(ix.meds.find((y) => y.key === m.key).taken.kind, "remedio");
    await c.call("cronologia/check/set", { key: m.key, done: false, kind: "remedio" });
    ix = await h.wait((x) => x.meds.find((y) => y.key === m.key).state !== "tomado", "not taken");
    assert.equal(ix.meds.find((y) => y.key === m.key).taken, null);
  });
  it("Tomei from the phone's button (mobile_app_notification_action)", async () => {
    const m = h.latest.meds.find((x) => x.summary === "DPrev 10.000 UI");
    await stack.fire("mobile_app_notification_action", { action: `CRONOLOGIA_TOMEI_${hashOf(m.key)}` });
    const ix = await h.wait((x) => x.meds.find((y) => y.key === m.key).state === "tomado", "taken by the phone");
    assert.equal(ix.meds.find((y) => y.key === m.key).taken.by, "Andressa (celular)");
  });
  it("paying a bill", async () => {
    const b = h.latest.bills.find((x) => x.summary === "Internet");
    await c.call("cronologia/check/set", { key: b.key, done: true, kind: "conta" });
    const ix = await h.wait((x) => x.bills.find((y) => y.key === b.key).paid, "paid");
    assert.equal(ix.bills.find((y) => y.key === b.key).overdue, false);
  });
  it("the test alert reaches the phone and its button comes back", async () => {
    await c.call("cronologia/notify/test", { target: "mobile_app_pixel_8" });
    let n = await stack.notifications();
    const test = n.find((x) => x.title === "💊 Teste do CronologIA");
    assert.equal(test.service, "mobile_app_pixel_8");
    await stack.fire("mobile_app_notification_action", { action: "CRONOLOGIA_TESTE_TOMEI_mobile_app_pixel_8" });
    const ix = await h.wait((x) => x.test, "the test button");
    assert.equal(ix.test.action, "tomei");
    n = await waitFor(async () => (await stack.notifications()).find((x) => x.title === "✅ Funcionou"), { what: "the confirmation" });
    assert.equal(n.service, "mobile_app_pixel_8");
    await assert.rejects(c.call("cronologia/notify/test", { target: "notify.x" }), { code: "invalid_format" });
  });
});

describe("the placar", () => {
  it("extra points, a demerit, removing and restoring, the Extrato", async () => {
    await c.call("cronologia/score/extra", { who: "Andressa", points: 12, title: "Lavou o carro" });
    await c.call("cronologia/score/demerit", { demerit: "toalha", who: "Diego" });
    await stack.fire("cronologia_demerito", { nome: "Toalha molhada na cama", quem: "Andressa" });
    let ix = await h.wait((x) => x.score.entries.filter((e) => e.kind === "demerito").length === 2, "two demerits");
    const extra = ix.score.entries.find((e) => e.title === "Lavou o carro");
    assert.equal(extra.points, 12);
    await c.call("cronologia/score/remove", { key: extra.key });
    ix = await h.wait((x) => !x.score.entries.some((e) => e.key === extra.key), "removed");
    await c.call("cronologia/score/restore", { key: extra.key });
    ix = await h.wait((x) => x.score.entries.some((e) => e.key === extra.key), "restored");
    assert.equal(ix.score.entries.find((e) => e.key === extra.key).at, extra.at, "with its date");
    const log = await c.call("cronologia/score/log", { limit: 100 });
    assert.deepEqual(
      log.slice(0, 2).map((l) => l.type),
      ["voltou", "tirou"],
    );
    assert.equal(log.find((l) => l.type === "tirou").by, "Diego", "the person of the app user");
    await assert.rejects(c.call("cronologia/score/extra", { who: "Visita", points: 5, title: "x" }), { code: "invalid_format" });
    await assert.rejects(c.call("cronologia/score/demerit", { demerit: "nada", who: "Diego" }), { code: "not_found" });
  });
  it("prizes of this period and the next; the leader", async () => {
    const cur = h.latest.score.current.key;
    const next = h.latest.score.next.key;
    await c.call("cronologia/score/prizes", { period: cur, shared: "Pizza", per: { Andressa: "Massagem" } });
    await c.call("cronologia/score/reward", { period: next, text: "Cinema" });
    const ix = await h.wait((x) => x.score.current.reward === "Pizza" && x.score.next.reward === "Cinema", "the prizes");
    assert.deepEqual(ix.score.current.prizes, { Andressa: "Massagem" });
    const rows = ix.score.rows;
    assert.equal(ix.score.leader, rows[0].points > rows[1].points ? rows[0].name : null);
    await assert.rejects(c.call("cronologia/score/delivered", { period: cur, delivered: true }), { code: "invalid_format" });
  });
  it("the integration file tells the ResolvIA who plays", async () => {
    const file = path.join(stack.dirs.share, "cronologia", "integracao.json");
    const j = await waitFor(() => {
      const x = JSON.parse(fs.readFileSync(file, "utf8"));
      return x.placar.ativo && x;
    }, { what: "share/cronologia/integracao.json" });
    assert.equal(j.app, "CronologIA");
    assert.deepEqual(j.placar.participantes, ["Diego", "Andressa"]);
    assert.deepEqual(j.placar.usuarios, { "u-diego": "Diego", "u-andressa": "Andressa" });
    assert.equal(j.resolvia, true);
  });
});

describe("sensors in Home Assistant", () => {
  it("turned on: the app publishes them; off: it removes them", async () => {
    assert.equal((await stack.state("sensor.cronologia_remedios_hoje")).status, 404, "off by default");
    await c.call("cronologia/prefs/set_app", { prefs: { sensors_on: true } });
    // the sensors are posted one after the other: wait for each
    const sensor = (id) =>
      waitFor(async () => {
        const r = await stack.state(id);
        return r.status === 200 && r.json();
      }, { what: id });
    const doses = await sensor("sensor.cronologia_remedios_hoje");
    assert.equal(doses.attributes.total, h.latest.meds.length);
    assert.equal(Number(doses.state), doses.attributes.pendentes.length);
    const late = await sensor("binary_sensor.cronologia_remedio_atrasado");
    assert.ok(["on", "off"].includes(late.state));
    const maint = await sensor("sensor.cronologia_manutencoes_vencidas");
    assert.equal(Number(maint.state), maint.attributes.vencidas.length);
    const placar = await sensor("sensor.cronologia_placar");
    assert.ok(placar.attributes.pontos && "Diego" in placar.attributes.pontos);
    await c.call("cronologia/prefs/set_app", { prefs: { sensors_on: false } });
    for (const id of ["sensor.cronologia_remedios_hoje", "binary_sensor.cronologia_remedio_atrasado", "sensor.cronologia_manutencoes_vencidas", "sensor.cronologia_placar"]) {
      await waitFor(async () => (await stack.state(id)).status === 404, { what: `${id} removed` });
    }
  });
});
