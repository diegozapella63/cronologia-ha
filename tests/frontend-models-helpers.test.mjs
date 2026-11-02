// frontend/src/models.js: the second line of a routine, its part of the day, when it is late,
// and today's order by the part of the day.
import "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { at } from "./helpers.mjs";
import { KIND_UI, afterSub, routineSub, periodOf, routineLate, byPeriod } from "../frontend/src/models.js";

const MANHA = at(2026, 11, 2, 9), TARDE = at(2026, 11, 2, 15), NOITE = at(2026, 11, 2, 21), MADRUGADA = at(2026, 11, 3, 2);

describe("models: KIND_UI", () => {
  it("every model has a label and an icon; the ones you can do have a verb", () => {
    for (const [k, v] of Object.entries(KIND_UI)) {
      assert.ok(v.label && v.icon, k);
      if (k) assert.ok(v.verb && v.done, k);
    }
    assert.deepEqual([KIND_UI.remedio.verb, KIND_UI.conta.verb, KIND_UI.manutencao.done], ["Tomei", "Paguei", "feita"]);
  });
});

describe("models: the line under a routine", () => {
  it("routineSub: time or part of the day, who, done or skipped, from yesterday", () => {
    assert.equal(routineSub({ period: "manha", who: "Ana" }, MANHA), "de manhã · Ana");
    assert.equal(routineSub({ time: "19:30" }, MANHA), "19:30");
    assert.equal(routineSub({}, MANHA), "hoje");
    assert.equal(routineSub({ yesterday: true, who: "Beto" }, MANHA), "ficou de ontem · Beto");
    assert.equal(routineSub({ period: "noite", done: { by: "Ana" } }, MANHA), "feito por Ana", "done: the part of the day goes away");
    assert.equal(routineSub({ done: {} }, MANHA), "feito");
    assert.equal(routineSub({ done: { skipped: true } }, MANHA), "pulada");
  });
  it("afterSub (comes back N days after done): late, the time, who, when it comes back", () => {
    const after = { n: 3, unit: "dias" };
    assert.equal(afterSub({ after, late: 2, who: "Ana" }, MANHA), "atrasada há 2 dias · Ana · volta 3 dias depois");
    assert.equal(afterSub({ after, late: 1 }, MANHA), "venceu ontem · volta 3 dias depois");
    assert.equal(afterSub({ after, period: "tarde" }, MANHA), "à tarde · volta 3 dias depois");
    assert.equal(afterSub({ after, time: "07:00" }, MANHA), "07:00 · volta 3 dias depois");
    assert.equal(afterSub({ after: { n: 1, unit: "semanas" } }, MANHA), "hoje · volta 1 semana depois");
    assert.equal(afterSub({ after, done: { by: "Beto" }, next: "2026-11-05" }, MANHA), "feito por Beto · volta quinta, 5 de nov");
    assert.equal(afterSub({ after, done: { skipped: true } }, MANHA), "pulada · volta em 3 dias");
    assert.equal(afterSub({ after, done: {} }, MANHA), "feito por alguém · volta em 3 dias");
    assert.equal(routineSub({ after, late: 1 }, MANHA), "venceu ontem · volta 3 dias depois", "routineSub hands it to afterSub");
  });
});

describe("models: parts of the day", () => {
  it("periodOf: the one chosen, else the one of the time", () => {
    assert.equal(periodOf({ period: "noite", time: "08:00" }), "noite");
    assert.deepEqual(["06:00", "12:00", "17:59", "18:00", "03:00"].map((time) => periodOf({ time })), ["manha", "tarde", "tarde", "noite", "noite"]);
    assert.equal(periodOf({}), "");
  });
  it("routineLate: from an earlier day, or its part of the day has passed", () => {
    assert.equal(routineLate({ late: 1 }, MANHA), true);
    assert.equal(routineLate({ period: "manha" }, TARDE), true);
    assert.equal(routineLate({ period: "manha" }, MANHA), false);
    assert.equal(routineLate({ period: "noite" }, TARDE), false);
    assert.equal(routineLate({ period: "manha", done: {} }, TARDE), false, "done is never late");
    assert.equal(routineLate({}, NOITE), false, "any time: never late today");
    assert.equal(routineLate({ period: "manha" }, MADRUGADA), false, "after midnight the morning hasn't come yet");
  });
  it("byPeriod: now, then what passed, then any time, then later (keeping the order inside)", () => {
    const list = [{ n: "noite", period: "noite" }, { n: "livre1" }, { n: "manha", period: "manha" }, { n: "tarde1", period: "tarde" }, { n: "livre2" }, { n: "tarde2", time: "13:00" }];
    const order = (now) => byPeriod(list, now).map((r) => r.n);
    assert.deepEqual(order(MANHA), ["manha", "livre1", "livre2", "tarde1", "tarde2", "noite"]);
    assert.deepEqual(order(TARDE), ["tarde1", "tarde2", "manha", "livre1", "livre2", "noite"]);
    assert.deepEqual(order(NOITE), ["noite", "manha", "tarde1", "tarde2", "livre1", "livre2"]);
    assert.deepEqual(byPeriod([{ n: "a", p: "tarde" }], TARDE, (r) => r.p).map((r) => r.n), ["a"], "with another way to read the part of the day");
  });
});
