// In-memory stand-in for the CronologIA server, used by the preview page.
import { createCalendars } from "./fake-calendars.js";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const clone = (x) => JSON.parse(JSON.stringify(x));

export class MockApi {
  constructor() {
    this.model = createCalendars();
    this.prefs = { calendars: {}, app: {} };
    this.evSubs = new Set();
    this.calSubs = new Set();
    this.prefSubs = new Set();
  }

  onStatus() {}
  onReconnect() {}

  _registry() {
    const entities = {};
    for (const e of this.model.registry()) entities[e.ei] = { entity_id: e.ei, platform: e.pl, device_id: e.di || null, name: e.en || null };
    const devices = Object.fromEntries(this.model.devices.map((d) => [d.id, d]));
    return { entities, devices };
  }

  async bootstrap() {
    await wait(60);
    const states = Object.fromEntries(this.model.ids().map((id) => [id, this.model.stateOf(id)]));
    return { version: "1.0.0", user: { name: "Diego Zapella" }, time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone, ai: await this.aiStatus(), prefs: clone(this.prefs), states, ...this._registry() };
  }

  async registry() {
    return this._registry();
  }

  subscribeCalendars(cb) {
    this.calSubs.add(cb);
    return Promise.resolve(() => this.calSubs.delete(cb));
  }

  subscribePrefs(cb) {
    this.prefSubs.add(cb);
    return Promise.resolve(() => this.prefSubs.delete(cb));
  }

  subscribeEvents(id, start, end, cb) {
    const sub = { id, from: Date.parse(start), to: Date.parse(end), cb };
    this.evSubs.add(sub);
    setTimeout(() => this.evSubs.has(sub) && cb({ events: this.model.occurrences(id, sub.from, sub.to) }), 40);
    return Promise.resolve(() => this.evSubs.delete(sub));
  }

  async listEvents(id, start, end) {
    return { events: this.model.occurrences(id, Date.parse(start), Date.parse(end)) };
  }

  _changed(id) {
    setTimeout(() => {
      for (const s of this.evSubs) if (s.id === id) s.cb({ events: this.model.occurrences(id, s.from, s.to) });
      for (const cb of this.calSubs) cb({ entity_id: id, new_state: this.model.stateOf(id) });
    }, 120);
  }

  async createEvent(id, event) {
    await wait(80);
    this.model.create(id, event);
    this._changed(id);
    return null;
  }

  async updateEvent(id, uid, event, { recurrenceId, range } = {}) {
    await wait(80);
    this.model.update(id, { uid, event, recurrence_id: recurrenceId, recurrence_range: range });
    this._changed(id);
    return null;
  }

  async deleteEvent(id, uid, { recurrenceId, range } = {}) {
    await wait(80);
    this.model.remove(id, { uid, recurrence_id: recurrenceId, recurrence_range: range });
    this._changed(id);
    return null;
  }

  _push() {
    for (const cb of this.prefSubs) cb(clone(this.prefs));
  }

  async setCalendarPrefs(id, changes) {
    const cur = { ...(this.prefs.calendars[id] || {}) };
    for (const [k, v] of Object.entries(changes)) v == null || v === "" ? delete cur[k] : (cur[k] = v);
    if (Object.keys(cur).length) this.prefs.calendars[id] = cur;
    else delete this.prefs.calendars[id];
    this._push();
    return clone(this.prefs);
  }

  async setAppPrefs(changes) {
    for (const [k, v] of Object.entries(changes)) v == null || v === "" ? delete this.prefs.app[k] : (this.prefs.app[k] = v);
    this._push();
    return clone(this.prefs);
  }

  async aiStatus() {
    await wait(200);
    const entities = [
      { id: "ai_task.google_ai_task", name: "Google AI Task", images: true, available: true },
      { id: "ai_task.ollama_ai_task", name: "Ollama AI Task", images: false, available: true },
    ];
    const sel = this.prefs.app.ai_entity || "";
    const using = entities.find((e) => e.id === sel) || entities[0];
    return { ready: true, images: using.images, selected: sel, using: { id: using.id, name: using.name }, entities, reason: using.images ? null : `${using.name} não lê fotos. Escolha outra IA em Mais › Leitura por IA.` };
  }

  // In the preview nothing leaves the page.
  exportUrl() {
    return null;
  }

  async extract({ text, images }) {
    await wait(1100);
    return { provider: "Google AI Task", events: this.model.aiEvents({ photos: !!(images && images.length), text }) };
  }
}
