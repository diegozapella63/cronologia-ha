// tests/ui: Feito em parte (1.91.0): Rotina da casa › 25% · 50% · 75% · Tudo (Tudo of start and again after each mark),
// then the letter of who did it; the circle filled as much as was done; "falta 50%" and the points left; done in part
// today: "50% feito por Ana · o resto amanhã" and the points of the part; Desfazer in the message. Names invented.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, render, click, fakeApi, hostOf } from "../_lit.mjs";
import { html } from "../../frontend/vendor/lit-all.min.js";
import { ModelsMixin, routineSub, partLeft, donePoints } from "../../frontend/src/models.js";
import { TasksMixin } from "../../frontend/src/tasks.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";

const NOW = at(2026, 11, 16, 19);
const SCORE = { enabled: true, period: "semana", participants: ["Ana", "Davi"], leader: null, current: { label: "16 a 22/11" }, rows: [], entries: [{ key: "k-pano|parte|1", who: "Ana", points: 10 }] };

class App extends hostOf(ModelsMixin, TasksMixin, RewardsMixin) {
  constructor(routines, api = fakeApi({ checkPart: { done: 0.5, points: 10 }, setCheck: null })) {
    super(api);
    this._home = { meds: [], routines, bills: [], maint: [], checks: {}, people: [], caregivers: [], gerencia: { ligado: false, contas: [] }, score: SCORE };
    this._app_ = { who_pick: true };
    this._user = { person: "Ana" };
    this._now = NOW.getTime();
    this._dark = false;
  }
  _view() {
    return { name: "now" };
  }
  _fullOn() {
    return false;
  }
  _cals() {
    return [];
  }
  _sheetHead(t) {
    return html`<h3>${t}</h3>`;
  }
}

const pano = (over = {}) => ({ key: "k-pano", kind: "rotina", summary: "Passar pano", points: 20, period: "", time: "", after: { n: 5, unit: "dias" }, history: [], next: "2026-11-16", late: 0, yesterday: false, done: null, part: null, who: "", ...over });

describe("Feito em parte: the strip and the marking", () => {
  it("25% · 50% · 75% · Tudo above the routines to do, Tudo chosen", () => {
    const h = render(new App([pano()])._renderHomePanel()).html;
    assert.match(h, /part-pick/);
    const t = text(new App([pano()])._renderHomePanel());
    for (const x of ["25%", "50%", "75%", "Tudo"]) assert.match(t, new RegExp(x));
    assert.match(h, /part-opt on[^>]*aria-pressed="true"[^]*?Tudo/);
    assert.doesNotMatch(render(new App([pano({ done: { by: "Ana", at: NOW.toISOString() } })])._renderHomePanel()).html, /part-pick/, "nothing to do: no strip");
  });
  it("Tudo (as always): the letter marks it all done", async () => {
    const app = new App([pano()]);
    app.api = fakeApi({ setCheck: null, checkPart: null });
    await app._markDone(pano(), "rotina", "Ana");
    assert.deepEqual(app.api.calls[0], ["setCheck", "k-pano", true, "rotina", "Ana"]);
  });
  it("50% then the letter: 1.96.0 asks first; O resto amanhã: that part to Ana, the message with Desfazer, and back to Tudo", async () => {
    const app = new App([pano()]);
    await click(app._renderHomePanel(), "50%");
    assert.equal(app._partFrac(), 0.5);
    await app._markDone(pano(), "rotina", "Ana");
    assert.equal(app._sheet, "parte");
    assert.deepEqual(app.api.calls, [], "nothing marked before the answer");
    const sheet = app._renderPartSheet();
    assert.match(text(sheet), /Passar pano · 50% por Ana · \+10/);
    assert.match(text(sheet), /O resto amanhã[\s\S]*Concluir com 50%/);
    await click(sheet, "O resto amanhã");
    await new Promise((r) => setImmediate(r));
    assert.deepEqual(app.api.calls[0], ["checkPart", "k-pano", 0.5, "Ana"]);
    assert.equal(app.toasts.at(-1), "Passar pano: 50% por Ana · +10 · o resto amanhã");
    assert.equal(app._partFrac(), 1, "back to Tudo");
    await app.undos.at(-1).run();
    assert.deepEqual(app.api.calls.at(-1), ["setCheck", "k-pano", false, "rotina"]);
  });
  it("more than what is left: the rest, all done", async () => {
    const app = new App([pano()]);
    app.api = fakeApi({ setCheck: null, checkPart: null });
    app._part = 0.75;
    await app._markDone(pano({ part: { done: 0.5, points: 10, by: ["Ana"] } }), "rotina", "Davi");
    assert.deepEqual(app.api.calls[0], ["setCheck", "k-pano", true, "rotina", "Davi"]);
  });
  it("1.96.0: Concluir com 50%: done now with half the points, nothing for tomorrow", async () => {
    const app = new App([pano()]);
    app._part = 0.5;
    await app._markDone(pano(), "rotina", "Ana");
    await click(app._renderPartSheet(), "Concluir com 50%");
    await new Promise((r) => setImmediate(r));
    assert.deepEqual(app.api.calls[0], ["setCheck", "k-pano", true, "rotina", "Ana", 0.5]);
    assert.equal(app.toasts.at(-1), "Feito por Ana · +10");
    assert.equal(app._partFrac(), 1, "back to Tudo");
    // how it shows: done 50%, with half the points
    const r = pano({ done: { by: "Ana", frac: 0.5 } });
    assert.equal(donePoints(r), 10);
    assert.match(routineSub(r, NOW), /^feito 50% por Ana · volta/);
    assert.equal(routineSub(pano({ after: null, done: { by: "Ana", frac: 0.5 } }), NOW), "feito 50% por Ana");
  });
  it("a refusal says so", async () => {
    const app = new App([pano()], fakeApi({ checkPart: new Error("Esse calendário não deixa mudar eventos") }));
    app._part = 0.25;
    await app._markPart(pano(), 0.25, "Ana");
    assert.equal(app.toasts.at(-1), "Não consegui marcar: Esse calendário não deixa mudar eventos");
  });
});

describe("Feito em parte: how a routine shows", () => {
  const now = NOW;
  it("to do with a part done: the circle half full, falta 50%, the points left", () => {
    const r = pano({ part: { done: 0.5, points: 10, by: ["Ana"] } });
    const h = render(new App([r])._renderHomePanel()).html;
    assert.match(h, /class="chk  part"[^>]*style="--f:50%"/);
    assert.match(routineSub(r, now), /falta 50%/);
    assert.equal(partLeft(r), 10);
    assert.match(text(new App([r])._renderHomePanel()), /\+10/);
  });
  it("done in part today: 50% feito por Ana · o resto amanhã, Ana +10, no ✓", () => {
    const r = pano({ done: { by: "Ana", at: NOW.toISOString(), part: { frac: 0.5, entry: "k-pano|parte|1" } }, part: { done: 0.5, points: 10, by: ["Ana"] } });
    assert.equal(routineSub(r, now), "50% feito por Ana · o resto amanhã");
    assert.equal(donePoints(r), 10);
    const app = new App([r]);
    app._choresDoneOpen = true;
    app._choresHold = true;
    const h = render(app._renderHomePanel()).html;
    assert.match(h, /Ana ganhou 10/);
    assert.doesNotMatch(h, /class="chk on/);
  });
  it("of fixed days, the rest of yesterday: ficou de ontem · falta 25%", () => {
    const r = pano({ after: null, yesterday: true, part: { done: 0.75, points: 15, by: ["Davi"] } });
    assert.equal(routineSub(r, now), "ficou de ontem · falta 25%");
  });
  it("the rest done: the points that were left", () => {
    const r = pano({ done: { by: "Davi", at: NOW.toISOString(), parts: { done: 0.5, list: [{ frac: 0.5, points: 10 }] } } });
    assert.equal(donePoints(r), 10);
    assert.equal(donePoints(pano({ done: { by: "Davi" } })), 20);
  });
  it("Recompensas › Para pontuar hoje: the strip too", () => {
    const app = new App([pano()]);
    assert.match(render(app._renderToScore()).html, /part-pick/);
  });
});

// 1.92.0: Recompensas › Para pontuar hoje › Concluídas (n), as on Agora; and the calendar finds what was done of a routine
describe("Recompensas › Para pontuar hoje › Concluídas (n)", () => {
  const done = pano({ key: "k-cama", summary: "Arrumar a cama", points: 5, done: { by: "Ana", at: NOW.toISOString() } });
  const half = pano({ done: { by: "Ana", at: NOW.toISOString(), part: { frac: 0.5, entry: "k-pano|parte|1" } }, part: { done: 0.5, points: 10, by: ["Ana"] } });
  it("closed: the count only; open: the same lines as Agora (who got the points, the circle half full)", async () => {
    const app = new App([pano({ key: "k-lixo", summary: "Levar o lixo" }), done, half]);
    let t = text(app._renderToScore());
    assert.match(t, /Concluídas \(2\)/);
    assert.doesNotMatch(t, /Arrumar a cama/, "closed until tapped");
    await click(app._renderToScore(), "Concluídas (2)");
    const h = render(app._renderToScore()).html;
    t = text(app._renderToScore());
    assert.match(t, /Arrumar a cama/);
    assert.match(t, /feito por Ana/);
    assert.match(t, /50% feito por Ana · o resto amanhã/);
    assert.match(h, /Ana ganhou 10/, "the points of the part");
    assert.match(h, /class="chk  part"[^>]*style="--f:50%"/);
    assert.match(h, /class="chk on /, "the done one: the green circle with the ✓");
  });
  it("nothing done today: no Concluídas", () => {
    assert.doesNotMatch(text(new App([pano()])._renderToScore()), /Concluídas/);
  });
});

describe("Calendário: what was done of a routine (_partOfEvent)", () => {
  const P = { done: 0.5, points: 5, by: ["Ana"] };
  const app = new App([
    { key: "k-noite", cal: "calendar.casa", uid: "u1", summary: "Passeio da noite", after: { n: 1, unit: "dias" }, points: 10, done: { by: "Ana" }, part: P },
    { key: "k-louca", cal: "calendar.casa", uid: "u2", summary: "Lavar a louça", points: 10, done: null, part: { done: 0.25, points: 3, by: ["Davi"] } },
  ]);
  it("one that comes back N days after done: the event on the day it went to, by its name", () => {
    assert.deepEqual(app._partOfEvent({ key: "calendar.casa|u1|amanha", cal: "calendar.casa", summary: "Passeio da noite", kind: { kind: "rotina", after: { n: 1, unit: "dias" } } }), P);
  });
  it("of fixed days: only its own occurrence", () => {
    assert.equal(app._partOfEvent({ key: "k-louca", cal: "calendar.casa", summary: "Lavar a louça", rrule: "FREQ=DAILY", kind: { kind: "rotina" } }).done, 0.25);
    assert.equal(app._partOfEvent({ key: "k-outro-dia", cal: "calendar.casa", summary: "Lavar a louça", rrule: "FREQ=DAILY", kind: { kind: "rotina" } }), null);
  });
  it("the line of the day it was done (moved): from Agora's item; anything else: nothing", () => {
    assert.deepEqual(app._partOfEvent({ key: "k-noite", kind: { kind: "rotina" }, movedDone: { item: { part: P } } }), P);
    assert.equal(app._partOfEvent({ key: "x", kind: { kind: "remedio" } }), null);
    assert.equal(app._partOfEvent({ key: "x" }), null);
  });
});

// 1.92.2: the sheet of the event: how much was done (the circle filled that much), and the rest for whoever finishes it
describe("the sheet of a routine done in part", () => {
  const ev = (over = {}) => ({ key: "k-pano", cal: "calendar.casa", uid: "u-pano", rrule: "FREQ=DAILY", summary: "Passar pano", start: at(2026, 11, 16), end: at(2026, 11, 17), allDay: true, kind: { kind: "rotina", points: 20 }, ...over });
  const withCheck = (chk, part) => {
    const app = new App([pano({ key: "k-pano", cal: "calendar.casa", uid: "u-pano", after: null, part })]);
    app._home.checks = { "k-pano": chk };
    return app;
  };
  it("done in part today: 50% feito hoje às 20:00 · Ana · o resto amanhã, the half circle, Desfazer", () => {
    const app = withCheck({ at: at(2026, 11, 16, 20).toISOString(), by: "Ana", part: { frac: 0.5, entry: "k-pano|parte|1" } }, { done: 0.5, points: 10, by: ["Ana"] });
    const v = app._renderKindFacts(ev());
    assert.match(text(v), /50% feito hoje às 20:00 · Ana · o resto amanhã/);
    assert.match(text(v), /Desfazer/);
    assert.match(render(v).html, /kind-pie" style="--f:50%"/);
    assert.doesNotMatch(text(v), /Feito hoje/, "not as if all done");
  });
  it("two parts: what was done in all (75%)", () => {
    const app = withCheck({ at: at(2026, 11, 16, 20).toISOString(), by: "Davi", part: { frac: 0.25, entry: "k-pano|parte|2" } }, { done: 0.75, points: 15, by: ["Ana", "Davi"] });
    assert.match(text(app._renderKindFacts(ev())), /75% feito hoje às 20:00 · Davi · o resto amanhã/);
  });
  it("done in part yesterday: falta 50%, and the letters of who finishes it with the points left", () => {
    const app = withCheck({ at: at(2026, 11, 15, 20).toISOString(), by: "Ana", part: { frac: 0.5, entry: "k-pano|parte|1" } }, { done: 0.5, points: 10, by: ["Ana"] });
    const v = app._renderKindFacts(ev({ start: at(2026, 11, 15), end: at(2026, 11, 16) }));
    assert.match(text(v), /50% feito .* às 20:00 · Ana · falta 50%/);
    assert.match(render(v).html, /qw-btn|who-btn|\+10/);
  });
  it("the rest still to do (no check on this event): the line of what was done and the points left", () => {
    const app = new App([pano({ key: "k-novo", cal: "calendar.casa", uid: "u-pano", part: { done: 0.5, points: 10, by: ["Ana"] } })]);
    const v = app._renderKindFacts(ev({ key: "k-novo", rrule: null, kind: { kind: "rotina", points: 20, after: { n: 1, unit: "dias" } } }));
    assert.match(text(v), /50% feito por Ana · falta 50%/);
    assert.match(text(v), /\+10/);
    assert.doesNotMatch(text(v), /\+20/);
  });
});
