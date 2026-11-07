// tests/ui: tests that build the screen mixins (ModelsMixin, RewardsMixin, TasksMixin) to read what they show.
// They run in npm test and in their own CI step, but not in npm run test:coverage: a mixin built here makes
// every method of it count in the coverage (most are covered by the visual tests, not by these).
// What the screens say only when it is true: with Avisar no celular off (Mais › Avisos), Avisar de novo
// "Não", a medicine without its alert or the placar off, no line promises an alert, a phone or points.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { html } from "../../frontend/vendor/lit-all.min.js";
import { text, render, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";
import { TasksMixin } from "../../frontend/src/tasks.js";

const NOW = at(2026, 11, 6, 10);
// the people of Home Assistant, each with a phone tied to them or not (1.54.0: no device names on the screens)
const DIEGO = { name: "Diego", person: "person.diego", pet: false, phone: true, care: null, reach: true };
const ANA = { name: "Ana", person: "person.ana", pet: false, phone: true, care: null, reach: true };
const SCORE = { enabled: true, participants: ["Diego", "Ana"], entries: [], rows: [] };

class App extends hostOf(ModelsMixin, RewardsMixin, TasksMixin) {
  constructor({ home = {}, app = {} } = {}) {
    super(fakeApi());
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [ANA, DIEGO], caregivers: [], gerencia: { ligado: false, contas: [] }, score: null, ...home };
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

const dose = (over = {}) => ({ key: `d|${over.who || "Diego"}|${over.summary || "Losartana"}`, summary: "Losartana", who: "Diego", dose: "50 mg", time: "20:00", taken: null, state: "depois", late_min: 0, alert: true, phone: true, cal: "calendar.saude", uid: "u1", ...over });
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
    const care = { caregivers: ["Ana"] };
    assert.match(text(new App({ home: { meds: [dose()] }, app: { alerts: { ...care, late: 30 } } })._renderMedsPanel()), /Avisa no celular de Diego e de quem cuida/);
    const noLate = text(new App({ home: { meds: [dose()] }, app: { alerts: { ...care, late: 0 } } })._renderMedsPanel());
    assert.match(noLate, /Avisa no celular de Diego/);
    assert.doesNotMatch(noLate, /quem cuida/, "Avisar de novo: Não, and everyone has a phone: nothing goes to quem cuida");
    const mimi = dose({ who: "Mimi", summary: "Gardenal", phone: false });
    assert.match(text(new App({ home: { meds: [dose(), mimi] }, app: { alerts: { ...care, late: 0 } } })._renderMedsPanel()), /Avisa no celular de Diego e de quem cuida/, "Mimi has no phone: hers go to quem cuida");
  });
});

describe("the sheet of a medicine, a routine and a maintenance", () => {
  const med = modelEvent({ kind: "remedio", who: "Diego", dose: "50 mg", alert: true });
  it("remédio: the person whose phone gets it (never a device); with Avisar no celular off, no phone", () => {
    assert.match(text(new App()._renderKindFacts(med)), /Aviso no celular de Diego/);
    const off = text(new App({ app: { alerts: { meds: false } } })._renderKindFacts(med));
    assert.match(off, /Avisos no celular desligados/);
    assert.doesNotMatch(off, /Aviso no celular de/);
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
    assert.match(formText(new App()), /Na hora e de novo se atrasar, no celular de Diego\./);
    assert.match(formText(new App({ app: { alerts: { late: 60 } } })), /Na hora e de novo se atrasar, no celular de Diego\./);
    const once = formText(new App({ app: { alerts: { late: 0 } } }));
    assert.match(once, /Na hora, no celular de Diego\./);
    assert.doesNotMatch(once, /de novo/);
  });
  it("Avisar no celular off in Mais › Avisos: no alert to turn on here", () => {
    const t = formText(new App({ app: { alerts: { meds: false } } }));
    assert.doesNotMatch(t, /Aviso no celular|Na hora/);
    assert.match(t, /Dose/, "the rest of the form is there");
  });
});

describe("Mais › Avisos › Quem cuida", () => {
  const panel = (late) => text(new App({ app: { alerts: { late, caregivers: ["Ana"] } } })._renderAlertsPanel());
  it("gets the late alerts of everyone, or, with Avisar de novo Não, the ones of whoever has no phone", () => {
    assert.match(panel(30), /Recebe os atrasos de todos\./);
    const none = panel(0);
    assert.match(none, /Recebe os avisos de quem está sem celular\./);
    assert.doesNotMatch(none, /atrasos/);
  });
});

describe("Placar › Lembrete diário: who gets it (the people, never a device)", () => {
  const s = { remind: "20:00", participants: ["Diego", "Beto"] };
  it("the people with a phone, and who has none; no phone to choose in Avisos", () => {
    for (const app of [new App(), new App({ app: { alerts: { meds: false } } })]) {
      const t = text(app._renderScoreRemind(s));
      assert.match(t, /Vai para o celular de Diego\. Sem celular para Beto\./);
      assert.doesNotMatch(t, /escolha em Avisos/);
    }
  });
  it("Testar off without my phone says why: Home Assistant", () => {
    assert.match(render(new App({ home: { people: [] } })._renderScoreRemind(s)).html, /title="Sem celular ligado a você no Home Assistant"/);
    assert.doesNotMatch(render(new App()._renderScoreRemind(s)).html, /title="Sem celular/);
  });
});

describe("Mais › Avisos: the people, never a device (1.54.0)", () => {
  const MIMI = { name: "Mimi", person: null, pet: true, phone: false, care: "Ana", reach: true };
  const LIA = { name: "Lia", person: "person.lia", pet: false, phone: false, care: null, reach: false };
  const panel = (home = {}, app = {}) => new App({ home: { people: [ANA, DIEGO, LIA, MIMI], ...home }, app })._renderAlertsPanel();
  it("each person by name; one without a phone: who gets theirs (Quem cuida or a person with a phone)", () => {
    const view = panel();
    const t = text(view);
    assert.doesNotMatch(t, /Pixel|Galaxy|mobile_app|Automático/);
    assert.match(t, /Lia Pessoa do Home Assistant, sem celular/);
    assert.match(t, /Vai para o celular ligado a cada pessoa no Home Assistant\. Sem celular \(pet ou criança\): para quem você escolher\./);
    const h = render(view).html;
    assert.match(h, /aria-label="Quem recebe os avisos de Lia"/);
    assert.match(h, /aria-label="Quem recebe os avisos de Mimi"/);
    assert.doesNotMatch(h, /aria-label="Quem recebe os avisos de (Ana|Diego)"/, "a person with a phone: nothing to choose");
    assert.match(t, /No celular de quem cuida/);
    assert.match(t, /No celular de Ana/);
    assert.match(h, /aria-label="Testar aviso para Mimi"/, "the pet: tested on the phone of Ana");
    assert.doesNotMatch(h, /aria-label="Testar aviso para Lia"/, "no phone gets hers yet");
  });
  it("Quem cuida: the people with a phone", () => {
    const t = text(panel({}, { alerts: { caregivers: ["Ana"] } }));
    assert.match(t, /Quem cuida\s*Ana\s*Diego/);
  });
  it("nobody with a phone: says so; no choice, no Quem cuida", () => {
    const t = text(panel({ people: [LIA, { ...MIMI, care: null, reach: false }] }));
    assert.match(t, /Ninguém tem celular ligado no Home Assistant \(Configurações › Pessoas\)\./);
    assert.doesNotMatch(t, /Quem cuida|No celular de/);
  });
  it("Avisar no celular off: no choices nor hints", () => {
    const t = text(panel({}, { alerts: { meds: false } }));
    assert.doesNotMatch(t, /No celular de|Quem cuida|sem celular|Vai para/);
  });
});

describe("Agora › Remédios de hoje: a pet goes by the person chosen for it", () => {
  it("the line names the person whose phone gets it; nothing reaches a phone: choose Quem cuida", () => {
    const mimi = dose({ who: "Mimi", summary: "Gardenal", phone: true });
    const people = [ANA, DIEGO, { name: "Mimi", person: null, pet: true, phone: false, care: "Ana", reach: true }];
    assert.match(text(new App({ home: { meds: [mimi], people } })._renderMedsPanel()), /Avisa no celular de Ana/);
    const lone = dose({ who: "Lia", phone: false });
    const view = new App({ home: { meds: [lone], people: [ANA] } })._renderMedsPanel();
    assert.match(text(view), /Sem celular para Lia: escolha quem cuida/);
    assert.match(render(view).html, /panel-foot warn/);
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
