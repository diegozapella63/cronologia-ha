// In-memory stand-in for the CronologIA server, used by the preview page.
import { createCalendars } from "./fake-calendars.js";
import { buildIndex, occurrenceKey, parseKind, maintDone } from "../../cronologia/rootfs/app/lib/kinds.js";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const clone = (x) => JSON.parse(JSON.stringify(x));

export class MockApi {
  constructor() {
    this.model = createCalendars();
    this.prefs = { calendars: {}, app: {} };
    this.evSubs = new Set();
    this.calSubs = new Set();
    this.prefSubs = new Set();
    this.homeSubs = new Set();
    this.checks = {};
    // Morning doses already taken, so the preview shows every state.
    const d0 = new Date();
    d0.setHours(0, 0, 0, 0);
    for (const raw of this.model.occurrences("calendar.remedios", d0.getTime(), d0.getTime() + 86400000)) {
      if (/DPrev|Sertralina/.test(raw.summary)) this.checks[occurrenceKey("calendar.remedios", raw)] = { at: new Date(Date.parse(raw.start) + 7 * 60000).toISOString(), by: "Andressa", kind: "remedio" };
    }
    const day = (n) => {
      const d = new Date(d0);
      d.setDate(d.getDate() + n);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    };
    this.gerencia = {
      ligado: true,
      erro: null,
      versao: "1.5.0",
      categorias: [
        { id: "c-moradia", nome: "Moradia" },
        { id: "c-contas", nome: "Contas da casa" },
        { id: "c-saude", nome: "Saúde" },
      ],
      contas: [
        { id: "f:k-nu|1", tipo: "fatura", descricao: "Fatura Nubank · Diego", valor: 1843.27, vencimento: day(-1), pago: false, atrasada: true, itens: 23, categoria: "", conta: "Nubank · Diego" },
        { id: "v:r-plano:1", tipo: "fixo", descricao: "Plano de saúde", valor: 689.9, vencimento: day(0), pago: true, atrasada: false, categoria: "Saúde", conta: "Itaú · Diego" },
        { id: "v:r-aluguel:1", tipo: "fixo", descricao: "Aluguel", valor: 2100, vencimento: day(2), pago: false, atrasada: false, categoria: "Moradia", conta: "Itaú · Diego" },
        { id: "v:r-condominio:1", tipo: "fixo", descricao: "Condomínio", valor: 650, vencimento: day(6), pago: false, atrasada: false, categoria: "Moradia", conta: "Itaú · Diego" },
        { id: "l-iptu", tipo: "conta", descricao: "IPTU 9/10", valor: 187.4, vencimento: day(15), pago: false, atrasada: false, categoria: "Moradia", conta: "" },
      ],
    };
  }

  // ---- models
  _homeIndex() {
    const now = Date.now();
    const occurrences = [];
    for (const cal of this.model.ids()) for (const raw of this.model.occurrences(cal, now - 200 * 86400000, now + 800 * 86400000)) if (parseKind(raw.description)) occurrences.push({ cal, raw });
    const ix = buildIndex({ occurrences, checks: this.checks, late: (this.prefs.app.alerts || {}).late || 30, features: (cal) => this.model.calendars[cal].features, targetFor: (n) => (this.prefs.app.people || {})[n]?.notify || ({ Andressa: "mobile_app_galaxy_s23", Diego: "mobile_app_pixel_8" })[n] || null, now });
    const names = new Set(["Andressa", "Diego", ...ix.names, ...Object.keys(this.prefs.app.people || {})]);
    delete ix.names;
    return {
      ...ix,
      people: [...names].sort().map((name) => {
        const auto = ({ Andressa: "mobile_app_galaxy_s23", Diego: "mobile_app_pixel_8" })[name] || null;
        return { name, person: auto ? `person.${name.toLowerCase()}` : null, auto, notify: (this.prefs.app.people || {})[name]?.notify || auto };
      }),
      targets: [
        { id: "mobile_app_galaxy_s23", name: "Galaxy S23" },
        { id: "mobile_app_pixel_8", name: "Pixel 8" },
      ],
      caregivers: (this.prefs.app.alerts || {}).caregivers || [],
      tracked: ["calendar.remedios", "calendar.casa"],
      gerencia: clone(this.gerencia),
    };
  }

  _pushHome() {
    setTimeout(() => {
      const ix = this._homeIndex();
      for (const cb of this.homeSubs) cb(clone(ix));
    }, 60);
  }

  subscribeHome(cb) {
    this.homeSubs.add(cb);
    setTimeout(() => this.homeSubs.has(cb) && cb(this._homeIndex()), 50);
    return Promise.resolve(() => this.homeSubs.delete(cb));
  }

  async setCheck(key, done, kind) {
    if (done) this.checks[key] = { at: new Date().toISOString(), by: "Diego", kind };
    else delete this.checks[key];
    this._pushHome();
  }

  async maintDone(cal, uid) {
    const ev = this.model.calendars[cal].events.find((e) => e.uid === uid);
    const raw = this.model.occurrences(cal, ev.start - 1, ev.end + 1).find((e) => e.uid === uid);
    this._maintBefore = { cal, uid, raw };
    const event = maintDone(raw, parseKind(raw.description), new Date());
    this.model.update(cal, { uid, event });
    this._changed(cal);
    this._pushHome();
    return { moved: true, next: event.start.slice(0, 10), undo: true };
  }

  async maintUndo(cal, uid) {
    const b = this._maintBefore;
    if (!b || b.uid !== uid) throw new Error("Não dá mais para desfazer");
    this.model.update(cal, { uid, event: { summary: b.raw.summary, start: b.raw.start, end: b.raw.end, description: b.raw.description } });
    this._changed(cal);
    this._pushHome();
  }

  async payBill(id) {
    await wait(150);
    const c = this.gerencia.contas.find((x) => x.id === id);
    if (c) Object.assign(c, { pago: true, atrasada: false });
    this._pushHome();
    return { ok: true, id };
  }

  async unpayBill(id) {
    const c = this.gerencia.contas.find((x) => x.id === id);
    if (c) Object.assign(c, { pago: false, atrasada: c.vencimento < new Date().toISOString().slice(0, 10) });
    this._pushHome();
    return { ok: true, id };
  }

  async newBill(conta) {
    await wait(150);
    const id = `l-${Date.now()}`;
    this.gerencia.contas.push({ id, tipo: conta.repete === "nao" ? "conta" : "fixo", descricao: conta.descricao, valor: conta.valor, vencimento: conta.vencimento, pago: false, atrasada: false, categoria: "", conta: "" });
    this.gerencia.contas.sort((a, b) => a.vencimento.localeCompare(b.vencimento));
    this._pushHome();
    return { ok: true, id };
  }

  async testAlert() {
    await wait(200);
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
    return { version: "1.1.0", user: { name: "Diego Zapella" }, time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone, ai: await this.aiStatus(), prefs: clone(this.prefs), states, ...this._registry() };
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
    this._pushHome();
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
    this._pushHome();
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
