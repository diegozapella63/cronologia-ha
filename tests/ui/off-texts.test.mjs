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
import { text, render, click, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";
import { TasksMixin } from "../../frontend/src/tasks.js";

const NOW = at(2026, 11, 6, 10);
// the people of Home Assistant, each with a phone tied to them or not (1.54.0: no device names on the screens)
const DAVI = { name: "Davi", person: "person.davi", pet: false, phone: true, care: null, reach: true };
const ANA = { name: "Ana", person: "person.ana", pet: false, phone: true, care: null, reach: true };
const SCORE = { enabled: true, participants: ["Davi", "Ana"], entries: [], rows: [] };

class App extends hostOf(ModelsMixin, RewardsMixin, TasksMixin) {
  constructor({ home = {}, app = {} } = {}) {
    super(fakeApi());
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [ANA, DAVI], caregivers: [], gerencia: { ligado: false, contas: [] }, score: null, ...home };
    this._app_ = { ...app };
    this._user = { person: "Davi" };
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

const dose = (over = {}) => ({ key: `d|${over.who || "Davi"}|${over.summary || "Losartana"}`, summary: "Losartana", who: "Davi", dose: "50 mg", time: "20:00", taken: null, state: "depois", late_min: 0, alert: true, phone: true, cal: "calendar.saude", uid: "u1", ...over });
/** An event of a model, ten days ahead (no Feito button). */
const modelEvent = (kind) => ({ key: `ev|${kind.kind}`, cal: "calendar.casa", uid: `u-${kind.kind}`, rid: null, rrule: null, summary: "Teste", start: at(2026, 11, 16), end: at(2026, 11, 17), allDay: true, kind });

// 1.74.0: the line at the bottom only when something needs doing (who gets the alerts is in Mais › Avisos)
describe("Agora › Remédios de hoje: the bell and the line at the bottom", () => {
  it("Avisar no celular off: no bell by the name and no line", () => {
    // the server sends alert: false with the alerts off; the phone of the person is still known
    const app = new App({ home: { meds: [dose({ alert: false })] }, app: { alerts: { meds: false } } });
    const view = app._renderMedsPanel();
    assert.doesNotMatch(render(view).html, /who-bell|panel-foot/);
  });
  it("on: the bell of whoever gets the alert, no line saying who", () => {
    const view = new App({ home: { meds: [dose()] } })._renderMedsPanel();
    assert.match(render(view).html, /who-bell/);
    assert.doesNotMatch(text(view), /Avisa no celular/);
    assert.doesNotMatch(render(view).html, /panel-foot/);
  });
  it("today's medicines all without their alert: no bell, no line", () => {
    const view = new App({ home: { meds: [dose({ alert: false })] } })._renderMedsPanel();
    assert.doesNotMatch(render(view).html, /who-bell|panel-foot/);
  });
  it("Quem cuida set and everyone with a phone: no line", () => {
    const care = { caregivers: ["Ana"] };
    assert.doesNotMatch(text(new App({ home: { meds: [dose()] }, app: { alerts: { ...care, late: 30 } } })._renderMedsPanel()), /Avisa no celular|quem cuida/);
  });
});

describe("the sheet of a medicine, a routine and a maintenance", () => {
  const med = modelEvent({ kind: "remedio", who: "Davi", dose: "50 mg", alert: true });
  it("remédio: the person whose phone gets it (never a device); with Avisar no celular off, no phone", () => {
    assert.match(text(new App()._renderKindFacts(med)), /Aviso no celular de Davi/);
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
  const form = { mode: "add", kind: "remedio", title: "Losartana", dose: "", who: "Davi", times: ["08:00"], freq: "diario", byday: [5], interval: 3, date: "2026-11-06", dur: "sempre", until: "2026-12-06", days: 7, alert: true, notes: "" };
  const formText = (app) => {
    app._form = { ...form };
    return text(app._renderKindForm());
  };
  it("on time and again when late, unless Avisar de novo is Não", () => {
    assert.match(formText(new App()), /Na hora e de novo se atrasar, no celular de Davi\./);
    assert.match(formText(new App({ app: { alerts: { late: 60 } } })), /Na hora e de novo se atrasar, no celular de Davi\./);
    const once = formText(new App({ app: { alerts: { late: 0 } } }));
    assert.match(once, /Na hora, no celular de Davi\./);
    assert.doesNotMatch(once, /de novo/);
  });
  it("Avisar no celular off in Mais › Avisos: no alert to turn on here", () => {
    const t = formText(new App({ app: { alerts: { meds: false } } }));
    assert.doesNotMatch(t, /Aviso no celular|Na hora/);
    assert.match(t, /Dose/, "the rest of the form is there");
  });
});

describe("Mais › Avisos › Testar no meu celular (1.65.0: at the bottom, the whole width, like every app)", () => {
  it("with my phone: sends to me and says so", async () => {
    const app = new App();
    app.api = fakeApi({ testAlert: {} });
    const view = app._renderAlertsPanel();
    assert.match(text(view), /Testar no meu celular$/);
    await click(view, "Testar no meu celular");
    assert.deepEqual(app.api.calls, [["testAlert", "Davi"]]);
    assert.match(app.toasts[0], /^Aviso de teste enviado para o seu celular\./);
  });
  it("without a phone tied to me: off, and says why; the alerts off: no button", () => {
    const h = render(new App({ home: { people: [ANA, { ...DAVI, phone: false, reach: false }] } })._renderAlertsPanel()).html;
    assert.match(h, /aviso-test"[^>]*disabled[^>]*title="Sem celular ligado a você no Home Assistant"|disabled[^>]*title="Sem celular ligado a você no Home Assistant"[^>]*>.*Testar no meu celular/s);
    assert.doesNotMatch(text(new App({ app: { alerts: { meds: false } } })._renderAlertsPanel()), /Testar no meu celular/);
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
  const s = { remind: "20:00", participants: ["Davi", "Beto"] };
  it("Quem recebe: a button for each player (1.65.0), who has no phone says so; no phone to choose in Avisos", () => {
    for (const app of [new App(), new App({ app: { alerts: { meds: false } } })]) {
      const t = text(app._renderScoreRemind(s));
      assert.match(t, /Quem recebe Davi Beto sem celular Sem celular para Beto: ligue o celular à pessoa no Home Assistant\. Testar no meu celular$/);
      assert.doesNotMatch(t, /escolha em Avisos|Galaxy|Pixel|mobile_app/);
    }
  });
  it("Quem recebe: all of them at first; a tap takes one out (and puts back); nobody: says to choose", () => {
    const app = new App({ home: { score: { enabled: true, participants: ["Davi", "Beto"], remind: "20:00" } } });
    const view = () => app._renderScoreRemind({ ...s, remind_to: (app._app_.score || {}).remind_to });
    assert.match(render(view()).html, /aria-pressed="true"[^>]*>.*Davi.*aria-pressed="true"/s);
    click(view(), /^Davi$/);
    assert.deepEqual(app._app_.score.remind_to, ["Beto"]);
    click(view(), /^Beto/);
    assert.deepEqual(app._app_.score.remind_to, []);
    assert.match(text(view()), /Escolha quem recebe\./);
    click(view(), /^Davi$/);
    click(view(), /^Beto/);
    assert.equal(app._app_.score.remind_to, null, "everyone again: saved as everyone (a new player gets it too)");
  });
  it("Testar off without my phone says why: Home Assistant", () => {
    assert.match(render(new App({ home: { people: [] } })._renderScoreRemind(s)).html, /title="Sem celular ligado a você no Home Assistant"/);
    assert.doesNotMatch(render(new App()._renderScoreRemind(s)).html, /title="Sem celular/);
  });
});

describe("Mais › Avisos: the people, never a device (1.54.0)", () => {
  const MIMI = { name: "Mimi", person: null, pet: true, phone: false, care: "Ana", reach: true };
  const LIA = { name: "Lia", person: "person.lia", pet: false, phone: false, care: null, reach: false };
  const panel = (home = {}, app = {}) => new App({ home: { people: [ANA, DAVI, LIA, MIMI], ...home }, app })._renderAlertsPanel();
  it("each person by name; one without a phone: who gets theirs (Quem cuida or a person with a phone)", () => {
    const view = panel();
    const t = text(view);
    assert.doesNotMatch(t, /Pixel|Galaxy|mobile_app|Automático/);
    assert.match(t, /Lia Pessoa do Home Assistant, sem celular/);
    assert.match(t, /Vai para o celular ligado a cada pessoa no Home Assistant\. Sem celular \(pet ou criança\): para quem você escolher\./);
    const h = render(view).html;
    assert.match(h, /aria-label="Quem recebe os avisos de Lia"/);
    assert.match(h, /aria-label="Quem recebe os avisos de Mimi"/);
    assert.doesNotMatch(h, /aria-label="Quem recebe os avisos de (Ana|Davi)"/, "a person with a phone: nothing to choose");
    assert.match(t, /No celular de quem cuida/);
    assert.match(t, /No celular de Ana/);
    assert.match(h, /aria-label="Testar aviso para Mimi"/, "the pet: tested on the phone of Ana");
    assert.doesNotMatch(h, /aria-label="Testar aviso para Lia"/, "no phone gets hers yet");
  });
  it("Quem cuida: the people with a phone", () => {
    const t = text(panel({}, { alerts: { caregivers: ["Ana"] } }));
    assert.match(t, /Quem cuida\s*Ana\s*Davi/);
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
    const people = [ANA, DAVI, { name: "Mimi", person: null, pet: true, phone: false, care: "Ana", reach: true }];
    assert.doesNotMatch(text(new App({ home: { meds: [mimi], people } })._renderMedsPanel()), /Avisa no celular/, "it reaches Ana's phone: no line");
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

describe("Mais › Recompensas: Usar recompensas at the top (1.55.0; a row of Mais since 1.64.0)", () => {
  const on = { ...SCORE, period: "semana", remind: null, notify: true };
  it("off: only the switch, no deméritos nor Desligar o placar", () => {
    const app = new App({ home: { score: { ...on, enabled: false } } });
    const view = app._renderScoreSettings();
    const t = text(view);
    assert.match(t, /^\s*Usar recompensas\s*Placar da casa, prêmio e deméritos\./, "the screen is called Recompensas: no heading repeats it");
    assert.doesNotMatch(t, /Deméritos|Quem participa|Desligar o placar|Ir para Recompensas/);
    assert.doesNotMatch(render(view).html, /aria-label="Usar recompensas"[^>]*checked/);
  });
  it("on: the switch first, then the settings and the deméritos; no Desligar o placar", () => {
    const view = new App({ home: { score: on } })._renderScoreSettings();
    const t = text(view);
    assert.match(t, /^\s*Usar recompensas[\s\S]*Quem participa[\s\S]*Deméritos/);
    assert.doesNotMatch(t, /Desligar o placar/);
  });
  it("nobody in Home Assistant: the switch can't be turned on, and says why", () => {
    const view = new App({ home: { score: null, people: [] } })._renderScoreSettings();
    assert.match(text(view), /Sem pessoas no Home Assistant\./);
    assert.match(render(view).html, /aria-label="Usar recompensas"[^>]*disabled|disabled[^>]*aria-label="Usar recompensas"/);
  });
});
