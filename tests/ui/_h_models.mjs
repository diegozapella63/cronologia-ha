// The app of the tests of models.js (tests/ui/modelos.test.mjs): what <cronologia-app> gives the mixins.
import { at } from "../helpers.mjs";
import "../_lit.mjs";
import { html } from "../../frontend/vendor/lit-all.min.js";
import { fakeApi, hostOf } from "../_lit.mjs";
import { ModelsMixin } from "../../frontend/src/models.js";
import { TasksMixin } from "../../frontend/src/tasks.js";
import { RewardsMixin } from "../../frontend/src/rewards.js";
import { PALETTE } from "../../frontend/src/util.js";

export const NOW = at(2026, 11, 18, 10);
export const CASA = { id: "calendar.casa", name: "Casa", color: PALETTE[0], canCreate: true, canUpdate: true, canDelete: true };
export const SAUDE = { id: "calendar.saude", name: "Saúde", color: PALETTE[1], canCreate: true, canUpdate: true, canDelete: true };
export const LEITURA = { id: "calendar.feriados", name: "Feriados", color: PALETTE[2], canCreate: true, canUpdate: false, canDelete: false };
export const ANA = { name: "Ana", person: "person.ana", pet: false, phone: true, reach: true };
export const DAVI = { name: "Davi", person: "person.davi", pet: false, phone: false, reach: false };
export const REX = { name: "Rex", pet: true, phone: false, reach: true, care: "Ana" };
export const SCORE = { enabled: true, period: "semana", participants: ["Ana", "Davi"], leader: "Ana", current: { key: "k", label: "16 a 22/11", start: "2026-11-16", end: "2026-11-22" }, rows: [], entries: [] };

export class App extends hostOf(ModelsMixin, TasksMixin, RewardsMixin) {
  constructor({ home = {}, app = {}, api = fakeApi(), me = "Ana", cals = [CASA, SAUDE], away = null, full = false, form = {}, now = NOW, def = null } = {}) {
    super(api);
    this._home = { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [ANA, DAVI], caregivers: [], gerencia: { ligado: false, contas: [] }, catalog: [], todos: { lists: [], items: [] }, score: null, ...home };
    this._app_ = { ...app };
    this._form = form;
    this._user = me ? { person: me } : null;
    this._now = now.getTime();
    this._dark = false;
    this.cals = cals;
    this.def = def;
    this.away = away;
    this.full = full;
    this.opened = [];
    this.went = [];
    this.saved = [];
    this.refreshed = [];
    this.dones = [];
    this._store = { refresh: (c) => this.refreshed.push(c) };
    this.found = null;
    this.renderRoot = { querySelector: (q) => (this.asked = q, this.found) };
    this.updateComplete = Promise.resolve();
  }
  _view() {
    return { name: "now" };
  }
  _fullOn() {
    return this.full;
  }
  _cals() {
    return this.cals;
  }
  _writable() {
    return this.cals.filter((c) => c.canCreate);
  }
  _cal(id) {
    return this.cals.find((c) => c.id === id) || null;
  }
  _defaultCal() {
    return this.def;
  }
  _colorOfEvent() {
    return PALETTE[3];
  }
  _away() {
    return this.away;
  }
  _awayNow() {
    return !!this.away;
  }
  _sheetHead(t) {
    return html`<h3>${t}</h3>`;
  }
  _openEvent(e) {
    this.opened.push(e);
  }
  _openForm(o) {
    this.opened.push(["evento", o]);
  }
  async _go(path) {
    this.went.push(path);
  }
  async _saveInPlace(f, ev) {
    this.saved.push([f.uid, ev]);
  }
  _done(msg, cal, start) {
    this.dones.push([msg, cal, start]);
    this._sheet = null;
  }
  async _closeSheet() {
    this._sheet = null;
  }
}
export const tick = () => new Promise((r) => setImmediate(r));
