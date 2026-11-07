// What the screens say only when it is true: with Avisar no celular off (Mais › Avisos), Avisar de novo
// "Não", a medicine without its alert or the placar off, no line promises an alert, a phone or points.
import { at } from "./helpers.mjs";
import "./_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { html } from "../frontend/vendor/lit-all.min.js";
import { text, render, fakeApi, hostOf } from "./_lit.mjs";
import { ModelsMixin } from "../frontend/src/models.js";
import { RewardsMixin } from "../frontend/src/rewards.js";
import { TasksMixin } from "../frontend/src/tasks.js";

const NOW = at(2026, 11, 6, 10);
const PIXEL = "mobile_app_pixel_8";
const SCORE = { enabled: true, participants: ["Diego", "Ana"], entries: [], rows: [] };

class App extends hostOf(ModelsMixin, RewardsMixin, TasksMixin) {
  constructor({ home = {}, app = {} } = {}) {
    super(fakeApi());
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [{ name: "Diego", person: "person.diego", notify: PIXEL }], targets: [{ id: PIXEL, name: "Pixel 8", owner: "Diego" }], caregivers: [], gerencia: { ligado: false, contas: [] }, score: null, ...home };
    this._app_ = { ...app };
    this._user = { person: "Diego" };
    this._now = NOW.getTime();
    this._dark = false;
  }
  _cals() {
    return [];
  }
  _cal() {
    return null;
  }
  _writable() {
    return [];
  }
  _sheetHead(t) {
    return html`<h3>${t}</h3>`;
  }
}

const dose = (over = {}) => ({ key: `d|${over.who || "Diego"}|${over.summary || "Losartana"}`, summary: "Losartana", who: "Diego", dose: "50 mg", time: "20:00", taken: null, state: "depois", late_min: 0, alert: true, notify: PIXEL, cal: "calendar.saude", uid: "u1", ...over });
/** An event of a model, ten days ahead (no Feito button). */
const modelEvent = (kind) => ({ key: `ev|${kind.kind}`, cal: "calendar.casa", uid: `u-${kind.kind}`, rid: null, rrule: null, summary: "Teste", start: at(2026, 11, 16), end: at(2026, 11, 17), allDay: true, kind });

describe("Agora › Remédios de hoje: the bell and the line at the bottom", () => {
  it("Avisar no celular off: no bell by the name and the line says it is off", () => {
    // the server sends alert: false with the alerts off; the phone of the person is still known
    const app = new App({ home: { meds: [dose({ alert: false })] }, app: { alerts: { meds: false } } });
    const view = app._renderMedsPanel();
    assert.doesNotMatch(render(view).html, /who-bell/);
    assert.match(text(view), /Avisos no celular desligados/);
  });
  it("on: the bell of whoever gets the alert", () => {
    const view = new App({ home: { meds: [dose()] } })._renderMedsPanel();
    assert.match(render(view).html, /who-bell/);
    assert.match(text(view), /Avisa no celular de Diego/);
  });
  it("today's medicines all without their alert: no bell, no phone to choose", () => {
    const view = new App({ home: { meds: [dose({ alert: false })] } })._renderMedsPanel();
    assert.doesNotMatch(render(view).html, /who-bell/);
    assert.match(text(view), /Sem aviso no celular/);
    assert.doesNotMatch(text(view), /Escolha os celulares/);
  });
  it("Quem cuida only when it gets something: the late alerts, or the ones of someone without a phone", () => {
    const care = { caregivers: ["mobile_app_galaxy_s23"] };
    assert.match(text(new App({ home: { meds: [dose()] }, app: { alerts: { ...care, late: 30 } } })._renderMedsPanel()), /Avisa no celular de Diego e de quem cuida/);
    const noLate = text(new App({ home: { meds: [dose()] }, app: { alerts: { ...care, late: 0 } } })._renderMedsPanel());
    assert.match(noLate, /Avisa no celular de Diego/);
    assert.doesNotMatch(noLate, /quem cuida/, "Avisar de novo: Não, and everyone has a phone: nothing goes to quem cuida");
    const mimi = dose({ who: "Mimi", summary: "Gardenal", notify: null });
    assert.match(text(new App({ home: { meds: [dose(), mimi] }, app: { alerts: { ...care, late: 0 } } })._renderMedsPanel()), /Avisa no celular de Diego e de quem cuida/, "Mimi has no phone: hers go to quem cuida");
  });
});

describe("the sheet of a medicine, a routine and a maintenance", () => {
  const med = modelEvent({ kind: "remedio", who: "Diego", dose: "50 mg", alert: true });
  it("remédio: with Avisar no celular off, it doesn't name the phone", () => {
    assert.match(text(new App()._renderKindFacts(med)), /Aviso no celular: Pixel 8/);
    const off = text(new App({ app: { alerts: { meds: false } } })._renderKindFacts(med));
    assert.match(off, /Avisos no celular desligados/);
    assert.doesNotMatch(off, /Aviso no celular:/);
    assert.match(text(new App()._renderKindFacts({ ...med, kind: { ...med.kind, alert: false } })), /Sem aviso no celular/);
  });
  it("rotina and manutenção: the points for whoever does it only with the placar on", () => {
    const routine = modelEvent({ kind: "rotina", who: "Ana", points: 10 });
    const maint = modelEvent({ kind: "manutencao", points: 30, every: { n: 6, unit: "meses" }, warn: 7 });
    assert.match(text(new App({ home: { score: SCORE } })._renderKindFacts(routine)), /10 pontos para quem fizer/);
    assert.match(text(new App({ home: { score: SCORE } })._renderKindFacts(maint)), /30 pontos para quem fizer/);
    assert.doesNotMatch(text(new App()._renderKindFacts(routine)), /pontos/);
    assert.doesNotMatch(text(new App({ home: { score: { ...SCORE, enabled: false } } })._renderKindFacts(maint)), /pontos/);
  });
});

describe("Novo › Remédio: Aviso no celular", () => {
  const form = { mode: "add", kind: "remedio", title: "Losartana", dose: "", who: "Diego", times: ["08:00"], freq: "diario", byday: [5], interval: 3, date: "2026-11-06", dur: "sempre", until: "2026-12-06", days: 7, alert: true, notes: "" };
  const formText = (app) => {
    app._form = { ...form };
    return text(app._renderKindForm());
  };
  it("on time and again when late, unless Avisar de novo is Não", () => {
    assert.match(formText(new App()), /Na hora e de novo se atrasar, no Pixel 8\./);
    assert.match(formText(new App({ app: { alerts: { late: 60 } } })), /Na hora e de novo se atrasar, no Pixel 8\./);
    const once = formText(new App({ app: { alerts: { late: 0 } } }));
    assert.match(once, /Na hora, no Pixel 8\./);
    assert.doesNotMatch(once, /de novo/);
  });
  it("Avisar no celular off in Mais › Avisos: no alert to turn on here", () => {
    const t = formText(new App({ app: { alerts: { meds: false } } }));
    assert.doesNotMatch(t, /Aviso no celular|Na hora/);
    assert.match(t, /Dose/, "the rest of the form is there");
  });
});

describe("Mais › Avisos › Quem cuida", () => {
  const panel = (late) => text(new App({ app: { alerts: { late, caregivers: [PIXEL] } } })._renderAlertsPanel());
  it("gets the late alerts of everyone, or, with Avisar de novo Não, the ones of whoever has no phone", () => {
    assert.match(panel(30), /Recebe os atrasos de todos\./);
    const none = panel(0);
    assert.match(none, /Recebe os avisos de quem está sem celular\./);
    assert.doesNotMatch(none, /atrasos/);
  });
});

describe("Placar › Lembrete diário: where to choose a phone", () => {
  const s = { remind: "20:00", participants: ["Diego", "Beto"] };
  it("sends to Avisos only when Avisos has the phones (Avisar no celular on)", () => {
    const on = text(new App()._renderScoreRemind(s));
    assert.match(on, /Vai para o celular de Diego\. Sem celular para Beto: escolha em Avisos\./);
    const off = text(new App({ app: { alerts: { meds: false } } })._renderScoreRemind(s));
    assert.match(off, /Vai para o celular de Diego\. Sem celular para Beto\./);
    assert.doesNotMatch(off, /escolha em Avisos/);
  });
  it("Testar off without my phone says why, without pointing to a choice that isn't there", () => {
    const app = new App({ home: { people: [] }, app: { alerts: { meds: false } } });
    assert.match(render(app._renderScoreRemind(s)).html, /title="Sem celular para você"/);
    assert.match(render(new App({ home: { people: [] } })._renderScoreRemind(s)).html, /title="Sem celular escolhido para você em Avisos"/);
  });
});

describe("points only with the placar on", () => {
  it("_scorePoints: a routine and a ResolvIA task give nothing with the placar off (Qualquer hora)", () => {
    const routine = { kind: { kind: "rotina", points: 10 } };
    const task = { kind: null, todo: { points: 5 } };
    const on = new App({ home: { score: SCORE } });
    assert.equal(on._scorePoints(routine), 10);
    assert.equal(on._scorePoints(task), 5);
    assert.equal(on._scorePoints({ kind: { kind: "remedio" } }), 0);
    const off = new App();
    assert.equal(off._scorePoints(routine), 0);
    assert.equal(off._scorePoints(task), 0);
  });
  it("Levar para o ResolvIA: the points only with the placar on", () => {
    assert.match(text(new App({ home: { score: SCORE } })._renderMirrorSettings([])), /com a próxima data e os pontos\. Concluir lá vale como feito aqui \(os pontos vão para quem concluiu\)/);
    const off = text(new App()._renderMirrorSettings([]));
    assert.match(off, /com a próxima data\. Concluir lá vale como feito aqui e a tarefa volta/);
    assert.doesNotMatch(off, /pontos/);
  });
});
