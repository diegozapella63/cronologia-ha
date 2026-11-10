// CronologIA 1.63.0, two rules of all the apps of the family:
// - Inativos no fim, recolhidos: what is hidden or paused on purpose leaves the middle of its list and goes to a
//   section at the end of it, closed until tapped, with its name and how many ("Pausadas (2)", "Ocultas (1)").
// - Caixas de seleção e horários no visual do app: no <input type="time"> (AM/PM and the clock of the phone) nor
//   <input type="date"> (the calendar of the phone) in the forms: a field that opens the app's window (whenpick.js).
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { html } from "../../frontend/vendor/lit-all.min.js";
import { text, render, click, labels, fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";
import { TasksMixin } from "../../frontend/src/tasks.js";
import { PALETTE, ymd } from "../../frontend/src/util.js";

const NOW = at(2026, 11, 6, 10);
const ANA = { name: "Ana", person: "person.ana", pet: false, phone: true, care: null, reach: true };
const BETO = { name: "Beto", person: "person.beto", pet: false, phone: true, care: null, reach: true };

class App extends hostOf(ModelsMixin, RewardsMixin, TasksMixin) {
  constructor({ home = {}, app = {}, form = {} } = {}) {
    super(fakeApi());
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [ANA, BETO], caregivers: [], gerencia: { ligado: false, contas: [] }, score: null, catalog: [], ...home };
    this._app_ = { ...app };
    this._form = form;
    this._user = { person: "Ana" };
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
  _colorOfEvent() {
    return PALETTE[0];
  }
  _away() {
    const a = this._app("away", null);
    return a && a.from && a.to ? a : null;
  }
  _awayNow() {
    const a = this._away();
    const d = ymd(new Date(this._now));
    return !!(a && d >= a.from && d <= a.to);
  }
  _sheetHead(t) {
    return html`<h3>${t}</h3>`;
  }
}

const item = (kind, summary, next, over = {}) => ({ key: `k|${summary}`, cal: "calendar.casa", uid: `u-${summary}`, kind, summary, who: "", dose: "", location: "", rooms: [], equips: [], room: "", equip: "", next, late: false, rrule: "FREQ=WEEKLY", after: null, every: null, time: "", period: "", points: 0, value: null, alert: null, ...over });
const CATALOG = [
  item("rotina", "Regar as plantas", "2026-11-07"),
  item("rotina", "Tirar o lixo", "2026-11-20"),
  item("rotina", "Varrer a varanda", "2026-11-08"),
  item("manutencao", "Trocar o filtro", "2026-11-09", { rrule: null, every: { n: 3, unit: "meses" } }),
  item("remedio", "Vitamina D", "2026-11-06", { who: "Ana", dose: "1 gota", time: "08:00", alert: true, rrule: "FREQ=DAILY" }),
];
const AWAY = { away: { from: "2026-11-05", to: "2026-11-10" } };

describe("Mais › Rotinas on vacation: the paused ones last, folded", () => {
  it("out of vacation: everything in its place, no fold", () => {
    const view = new App({ home: { catalog: CATALOG } })._renderCatalog();
    assert.doesNotMatch(text(view), /Pausadas/);
    assert.match(text(view), /Regar as plantas.*Tirar o lixo.*Varrer a varanda/);
  });
  it("on vacation: the ones that come back after it in the section, the others in Pausadas (n), closed", () => {
    const app = new App({ home: { catalog: CATALOG }, app: AWAY });
    const t = text(app._renderCatalog());
    assert.match(t, /Rotina da casa 3 Tirar o lixo .* Pausadas \(2\) Nova rotina/, "the section counts them all, the active one first, then the fold");
    assert.doesNotMatch(t, /Regar as plantas|Varrer a varanda/, "closed: the paused ones are not shown");
    assert.match(t, /Manutenção da casa 1 Pausadas \(1\) Nova manutenção/, "a section with only paused ones: no 'Nenhuma' line");
    assert.doesNotMatch(t, /Nenhuma manutenção/);
    assert.match(t, /Vitamina D/, "the medicines go on");
    assert.doesNotMatch(t, /pausada nas férias/, "the fold says it: no line repeats it");
    assert.deepEqual(labels(app._renderCatalog()).filter((l) => /Pausadas/.test(l)), ["Pausadas (2)", "Pausadas (1)"]);
  });
  it("a tap opens it (and only that one), another closes it", () => {
    const app = new App({ home: { catalog: CATALOG }, app: AWAY });
    click(app._renderCatalog(), "Pausadas (2)");
    const t = text(app._renderCatalog());
    assert.match(t, /Pausadas \(2\) Regar as plantas .* Varrer a varanda .* Nova rotina/);
    assert.doesNotMatch(t, /Trocar o filtro/, "the fold of the maintenance stays closed");
    assert.match(render(app._renderCatalog()).html, /data-fold="cat-rotina" aria-expanded="true"/);
    click(app._renderCatalog(), "Pausadas (2)");
    assert.doesNotMatch(text(app._renderCatalog()), /Regar as plantas/);
  });
});

describe("Integrações › Tarefas do ResolvIA › Listas: the hidden ones last, folded", () => {
  const todos = {
    lists: [
      { id: "todo.casa", name: "Casa", due: 2, overdue: 0, open: 3, features: 0, hidden: false },
      { id: "todo.mercado", name: "Mercado", due: 0, overdue: 0, open: 5, features: 0, hidden: true },
      { id: "todo.escola", name: "Escola", due: 1, overdue: 1, open: 1, features: 0, hidden: false },
    ],
    items: [],
  };
  const app = () => new App({ home: { todos }, app: { resolvia_on: true } });
  it("the shown ones in their order, then Ocultas (1), closed", () => {
    const t = text(app()._renderTodosSettings());
    assert.match(t, /Casa .* Escola .* Ocultas \(1\)/);
    assert.doesNotMatch(t, /Mercado/);
  });
  it("open: the hidden one with its switch off, to show it again", () => {
    const a = app();
    click(a._renderTodosSettings(), "Ocultas (1)");
    const h = render(a._renderTodosSettings()).html;
    assert.match(text(a._renderTodosSettings()), /Ocultas \(1\) Mercado/);
    assert.match(h, /aria-label="Mostrar Mercado"/);
    assert.match(h, /row switch-row off/);
  });
  it("nothing hidden: no fold", () => {
    const shown = { ...todos, lists: todos.lists.map((l) => ({ ...l, hidden: false })) };
    assert.doesNotMatch(text(new App({ home: { todos: shown }, app: { resolvia_on: true } })._renderTodosSettings()), /Ocultas/);
  });
});

describe("the forms: times and dates in the look of the app", () => {
  const forms = {
    remedio: { kind: "remedio", mode: "add", title: "", dose: "", who: "Ana", times: ["08:00", "20:00"], freq: "diario", every: 1, wdays: [], date: "2026-11-06", dur: "ate", days: 7, until: "2026-11-20", alert: true, notes: "", cal: "" },
    rotina: { kind: "rotina", mode: "add", title: "", who: "", times: ["19:00"], allDay: false, period: "", freq: "diario", every: 1, wdays: [], date: "2026-11-06", dur: "ate", until: "2026-12-01", points: 0, notes: "", cal: "", rooms: [], equips: [] },
  };
  for (const [k, form] of Object.entries(forms)) {
    it(`${k}: no time nor date of the phone; the fields show 24 hours and the date in Portuguese`, () => {
      const h = render(new App({ form })._renderKindForm()).html;
      assert.doesNotMatch(h, /type="(time|date|datetime-local)"/);
      assert.doesNotMatch(h, /<datalist|showPicker/);
      for (const t of form.times) assert.match(h, new RegExp(`class="pickf t[^"]*" data-value="${t}"`));
      assert.match(h, /class="pickf d[^"]*" data-value="2026-1[12]-\d\d" aria-label="Até: \w{3}, \d{1,2} (nov|dez)"/);
      assert.doesNotMatch(text(new App({ form })._renderKindForm()), /AM|PM/);
    });
  }
  it("Lembrete diário: the time of the app", () => {
    const s = { enabled: true, participants: ["Ana", "Beto"], remind: "20:00", period: "semana", entries: [] };
    const h = render(new App()._renderScoreRemind(s)).html;
    assert.match(h, /class="pickf t remind-time" data-value="20:00" aria-label="Horário do lembrete: 20:00"/);
    assert.doesNotMatch(h, /type="time"/);
    // 1.64.0: Testar no meu celular, the whole width, at the bottom (the same in all the apps)
    assert.match(text(new App()._renderScoreRemind(s)), /20:00 Vai para o celular de Ana e Beto\. Testar no meu celular$/);
  });
});
