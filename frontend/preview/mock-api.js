// In-memory stand-in for the CronologIA server, used by the preview page.
import { createCalendars, createTodos } from "./fake-calendars.js";
import { Todos } from "../../cronologia/rootfs/app/lib/todos.js";
import { buildIndex, occurrenceKey, parseKind, maintDone } from "../../cronologia/rootfs/app/lib/kinds.js";
import { scoreSettings, periodOf, tally, winnerOf } from "../../cronologia/rootfs/app/lib/score.js";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const clone = (x) => JSON.parse(JSON.stringify(x));

export class MockApi {
  constructor() {
    this.model = createCalendars();
    this.prefs = { calendars: {}, app: { resolvia_on: true, gerencia_on: true, todo_hidden: ["todo.problem_list"], week_start: 1, score: { enabled: true, participants: ["Andressa", "Diego"], period: "semana", anchor: null, notify: true, manual: true }, demerits: [{ id: "toalha01", title: "Toalha molhada na cama", points: 5 }, { id: "louca001", title: "Louça suja na pia", points: 5 }, { id: "luzacesa", title: "Luz acesa sem ninguém", points: 2 }] } };
    this.evSubs = new Set();
    this.calSubs = new Set();
    this.prefSubs = new Set();
    this.homeSubs = new Set();
    this.todoModel = createTodos();
    this.todos = new Todos({ ha: { subscribe: () => ({ unsubscribe() {} }), send: async () => ({}) }, log: console, onChange() {}, readApp: () => ({ app: "ResolvIA", versao: "2.8.0", gravado_em: new Date().toISOString(), pontos: { "todo.casa": { "levar o carro na revisao": 20 }, "todo.trabalho": { "enviar proposta para o cliente": 10 } } }) });
    for (const id of this.todoModel.ids()) {
      this.todos.states.set(id, this.todoModel.stateOf(id));
      this.todos.items.set(id, this.todoModel.items(id));
    }
    this.checks = {};
    // Morning doses already taken, so the preview shows every state.
    const d0 = new Date();
    d0.setHours(0, 0, 0, 0);
    for (const raw of this.model.occurrences("calendar.remedios", d0.getTime(), d0.getTime() + 86400000)) {
      if (/DPrev|Sertralina/.test(raw.summary)) this.checks[occurrenceKey("calendar.remedios", raw)] = { at: new Date(Date.parse(raw.start) + 7 * 60000).toISOString(), by: "Andressa", kind: "remedio" };
    }
    // Recompensas: this week so far, and the weeks before
    const at = (dOff, h, m = 0) => {
      const d = new Date(d0);
      d.setDate(d.getDate() + dOff);
      d.setHours(h, m);
      return d.toISOString();
    };
    const st = scoreSettings(this.prefs.app);
    const cur = periodOf(new Date(), st);
    const back = Math.round((new Date() - new Date(`${cur.start}T00:00:00`)) / 86400000);
    const E = (dOff, h, who, points, title, kind = "rotina") => ({ key: `demo|${dOff}|${h}|${title}`, at: at(Math.max(-back, dOff), h, 12), who, points, title, kind });
    this.score = {
      entries: [
        E(0, 8, "Andressa", 10, "Lavar a louça"),
        E(0, 7, "Diego", 5, "Regar as plantas"),
        E(-1, 21, "Andressa", 10, "Lavar a louça"),
        E(-1, 19, "Andressa", 10, "Tirar o lixo"),
        E(-1, 18, "Diego", 20, "Montou a estante", "extra"),
        E(-1, 7, "Diego", 5, "Regar as plantas"),
        E(-2, 22, "Diego", 10, "Lavar a louça"),
        E(-2, 9, "Diego", 15, "Limpar a caixa de areia"),
        E(-3, 20, "Andressa", 10, "Lavar a louça"),
        E(-3, 19, "Andressa", 10, "Tirar o lixo"),
        E(-3, 10, "Andressa", 30, "Faxina do banheiro", "extra"),
        E(-4, 21, "Diego", 10, "Lavar a louça"),
        { ...E(-1, 8, "Diego", -5, "Toalha molhada na cama", "demerito"), key: "demerito|toalha01|demo1" },
      ].filter((e) => Date.parse(e.at) <= Date.now()),
      history: [],
      rewards: {},
    };
    const prevWeek = (n) => {
      const s0 = new Date(`${cur.start}T00:00:00`);
      s0.setDate(s0.getDate() - 7 * n);
      const e0 = new Date(s0);
      e0.setDate(e0.getDate() + 7);
      const f = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      return { key: f(s0), start: f(s0), end: f(e0) };
    };
    this.score.history = [
      { ...prevWeek(1), totals: { Andressa: 145, Diego: 120 }, winner: "Andressa", reward: "Escolher o restaurante de domingo", delivered: false },
      { ...prevWeek(2), totals: { Diego: 110, Andressa: 95 }, winner: "Diego", reward: "Massagem de 20 minutos", delivered: true },
      { ...prevWeek(3), totals: { Andressa: 100, Diego: 100 }, winner: null, reward: "Cinema", delivered: false },
    ];
    this.score.rewards[cur.key] = "Quem ganhar escolhe a série da semana";
    // Extrato: the points above, plus a few changes (marked by someone else, taken off, passed on)
    const seq = [...this.score.entries].sort((a, b) => Date.parse(a.at) - Date.parse(b.at)).map((e) => ({ at: e.at, type: e.points < 0 ? "perdeu" : "ganhou", key: e.key, who: e.who, points: e.points, title: e.title, kind: e.kind, ...(e.kind === "demerito" ? { by: "Andressa" } : e.title === "Tirar o lixo" ? { by: "Diego" } : {}) }));
    const h1 = this.score.history[0];
    seq.unshift({ at: new Date(`${h1.end}T00:00:05`).toISOString(), type: "fechou", period: { start: h1.start, end: h1.end }, totals: h1.totals, winner: h1.winner, reward: h1.reward, points: 0 });
    const later = (iso, min) => new Date(Date.parse(iso) + min * 60000).toISOString();
    const wash = seq.find((l) => l.title === "Lavar a louça" && l.who === "Diego");
    if (wash) seq.push({ at: later(wash.at, 40), type: "trocou", key: wash.key, from: "Diego", who: "Andressa", points: 10, title: "Lavar a louça", by: "Diego" }, { at: later(wash.at, 42), type: "trocou", key: wash.key, from: "Andressa", who: "Diego", points: 10, title: "Lavar a louça", by: "Diego" });
    const plants = seq.find((l) => l.title === "Regar as plantas");
    if (plants) seq.push({ at: later(plants.at, 90), type: "tirou", key: plants.key, who: "Diego", points: -5, title: "Regar as plantas", by: "Andressa" }, { at: later(plants.at, 91), type: "voltou", key: plants.key, who: "Diego", points: 5, title: "Regar as plantas", by: "Andressa" });
    this.score.log = seq.filter((l) => Date.parse(l.at) <= Date.now()).sort((a, b) => Date.parse(a.at) - Date.parse(b.at)).map((l, i) => ({ id: i + 1, ...l }));
    // yesterday's chores were done (so only today's are open)
    for (const raw of this.model.occurrences("calendar.casa", d0.getTime() - 86400000, d0.getTime())) {
      const k = parseKind(raw.description);
      if (k && k.kind === "rotina" && Date.parse(raw.start) < d0.getTime()) this.checks[occurrenceKey("calendar.casa", raw)] = { at: new Date(d0.getTime() - 3 * 3600000).toISOString(), by: k.who || "Andressa", kind: "rotina" };
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
      gerencia: this.prefs.app.gerencia_on ? clone(this.gerencia) : { ligado: false, desligado: true, contas: [], categorias: [] },
      score: this._scoreIndex(now),
      todos: !this.prefs.app.resolvia_on ? { lists: [], items: [] } : this.todos.index(now, this.prefs.app.todo_hidden || [], { undated: !!this.prefs.app.todo_undated }),
    };
  }

  _scoreIndex(now) {
    const st = scoreSettings(this.prefs.app);
    const cur = periodOf(new Date(now), st);
    const next = periodOf(new Date(Date.parse(`${cur.end}T12:00:00`)), st);
    const rows = tally(this.score.entries, st.participants, cur.start, cur.end);
    const t0 = new Date(`${cur.start}T00:00:00`).getTime();
    return {
      ...st,
      current: { ...cur, reward: this.score.rewards[cur.key] || "", prizes: (this.score.prizes || {})[cur.key] || {} },
      next: { ...next, reward: this.score.rewards[next.key] || "", prizes: (this.score.prizes || {})[next.key] || {} },
      rows,
      leader: winnerOf(rows),
      entries: this.score.entries.filter((e) => Date.parse(e.at) >= t0).sort((a, b) => Date.parse(b.at) - Date.parse(a.at)),
      history: this.score.history,
      log: [...this.score.log].reverse().filter((l) => l.type !== "fechou" && Date.parse(l.at) >= t0).slice(0, 20),
      log_count: this.score.log.filter((l) => l.type !== "fechou" && Date.parse(l.at) >= t0).length,
    };
  }

  _pointsOf(key) {
    for (const cal of this.model.ids()) {
      const now = Date.now();
      for (const raw of this.model.occurrences(cal, now - 3 * 86400000, now + 3 * 86400000)) {
        if (occurrenceKey(cal, raw) === key) {
          const k = parseKind(raw.description);
          return { points: (k && k.points) || 0, title: raw.summary, kind: k && k.kind };
        }
      }
    }
    return { points: 0 };
  }

  async scoreReassign(key, who) {
    const e = this.score.entries.find((x) => x.key === key);
    if (e) e.who = who;
    if (this.checks[key]) this.checks[key].by = who;
    this._pushHome();
  }

  async scoreExtra(who, points, title) {
    this.score.entries.push({ key: `extra|${Date.now()}`, at: new Date().toISOString(), who, points, title, kind: "extra" });
    this._pushHome();
  }

  async scoreDemerit(id, who) {
    await wait(60);
    const d = (this.prefs.app.demerits || []).find((x) => x.id === id);
    const key = `demerito|${id}|${Date.now().toString(36)}`;
    this.score.entries.push({ key, at: new Date().toISOString(), who, points: -d.points, title: d.title, kind: "demerito" });
    this._pushHome();
    return { key, who, points: -d.points };
  }

  _log(rec) {
    const id = (this.score.log.at(-1) || { id: 0 }).id + 1;
    this.score.log.push({ id, at: new Date().toISOString(), by: "Diego", ...rec });
  }

  async scoreLog(before, limit = 40, from = "", to = "") {
    const f = from ? new Date(`${from}T00:00:00`).getTime() : 0;
    const t = to ? new Date(`${to}T00:00:00`).getTime() : Infinity;
    return [...this.score.log].reverse().filter((l) => l.type !== "fechou" && (!before || l.id < before) && Date.parse(l.at) >= f && Date.parse(l.at) < t).slice(0, limit);
  }

  async scoreRemove(key) {
    this._removed = this.score.entries.find((e) => e.key === key) || null;
    if (this._removed) this._log({ type: "tirou", key, who: this._removed.who, points: -this._removed.points, title: this._removed.title, kind: this._removed.kind });
    this.score.entries = this.score.entries.filter((e) => e.key !== key);
    this._pushHome();
  }

  async scoreRestore(key) {
    if (this._removed && this._removed.key === key) {
      this.score.entries.push(this._removed);
      this._log({ type: "voltou", key, who: this._removed.who, points: this._removed.points, title: this._removed.title, kind: this._removed.kind });
    }
    this._removed = null;
    this._pushHome();
  }

  async scorePrizes(period, shared, per) {
    await wait(60);
    if ((shared || "").trim()) this.score.rewards[period] = shared.trim();
    else delete this.score.rewards[period];
    this.score.prizes = this.score.prizes || {};
    if (per && Object.keys(per).length) this.score.prizes[period] = { ...per };
    else delete this.score.prizes[period];
    this._pushHome();
  }

  async scoreReward(period, text) {
    if ((text || "").trim()) this.score.rewards[period] = text.trim();
    else delete this.score.rewards[period];
    this._pushHome();
  }

  async scoreDelivered(period, delivered) {
    const h = this.score.history.find((x) => x.key === period);
    if (h) h.delivered = delivered;
    this._pushHome();
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

  async setCheck(key, done, kind, who) {
    this.score.entries = this.score.entries.filter((e) => e.key !== key);
    if (done) {
      this.checks[key] = { at: new Date().toISOString(), by: who || "Diego", kind };
      const p = this._pointsOf(key);
      if (p.points > 0 && who) this.score.entries.push({ key, at: new Date().toISOString(), who, points: p.points, title: p.title, kind: p.kind });
    } else delete this.checks[key];
    this._pushHome();
  }

  async maintDone(cal, uid, who) {
    const ev = this.model.calendars[cal].events.find((e) => e.uid === uid);
    const raw = this.model.occurrences(cal, ev.start - 1, ev.end + 1).find((e) => e.uid === uid);
    this._maintBefore = { cal, uid, raw };
    const k = parseKind(raw.description);
    const event = maintDone(raw, k, new Date());
    const key = `maint|${cal}|${uid}|${new Date().toISOString().slice(0, 10)}`;
    if (k.points > 0 && who) this.score.entries.push({ key, at: new Date().toISOString(), who, points: k.points, title: raw.summary, kind: "manutencao" });
    this.model.update(cal, { uid, event });
    this._changed(cal);
    this._pushHome();
    return { moved: true, next: event.start.slice(0, 10), undo: true, key: k.points > 0 && who ? key : null };
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

  // Dados in the preview: nothing leaves the page
  dataUrl() {
    return null;
  }

  async backups() {
    await wait(80);
    const d = Date.now();
    return { available: true, folder: "share/cronologia", backups: [{ name: "cronologia-2026-10-18-2140.zip", size: 214000, date: d - 6 * 86400000 }] };
  }

  async createBackup() {
    await wait(500);
    return { name: "cronologia-agora.zip", folder: "share/cronologia" };
  }

  async restoreBackup() {
    await wait(200);
    return { calendars: 2, points: 12, checks: 3 };
  }

  async versions() {
    await wait(150);
    const d = Date.now();
    return [
      { name: "cronologia-a.json", when: d - 40 * 60000, reason: "auto", calendars: 2, points: 12, checks: 4 },
      { name: "cronologia-b.json", when: d - 26 * 3600000, reason: "antes-de-importar", calendars: 2, points: 9, checks: 2 },
    ];
  }

  async restoreVersion() {
    await wait(200);
  }

  async importData() {
    await wait(300);
    return { calendars: 2, points: 12, checks: 3 };
  }

  async addTodo(id, task) {
    await wait(120);
    const data = { item: task.summary };
    if (task.date) task.time ? (data.due_datetime = `${task.date} ${task.time}:00`) : (data.due_date = task.date);
    if (task.description) data.description = task.description;
    this.todoModel.add(id, data);
    this.todos.items.set(id, this.todoModel.items(id));
    this._pushHome();
  }

  async aiUsage() {
    await wait(100);
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const day = (i) => {
      const x = new Date(d.getFullYear(), d.getMonth(), d.getDate() - i);
      return `${x.getFullYear()}-${pad(x.getMonth() + 1)}-${pad(x.getDate())}`;
    };
    const per = [2, 0, 3, 1, 0, 4, 2];
    const t = (n, e = 0) => ({ chamadas: n, erros: e, cota: 0, tokens: n * 420, imagens: Math.floor(n / 2), segundos: n * 6, tipos: { mensagem: Math.ceil(n / 2), fotos: Math.floor(n / 2) }, ias: { "ai_task.google_ai_task": n } });
    return {
      hoje: t(per[6]),
      semana: t(12, 1),
      mes: t(31, 1),
      dias: per.map((n, k) => ({ dia: day(6 - k), chamadas: n, erros: k === 2 ? 1 : 0, cota: 0 })),
      ultimas: [
        { quando: new Date(Date.now() - 3600000).toISOString(), tipo: "fotos", ia: "ai_task.google_ai_task", resultado: "ok", segundos: 8.4, tokens: 610, imagens: 1 },
        { quando: new Date(Date.now() - 7200000).toISOString(), tipo: "mensagem", ia: "ai_task.google_ai_task", resultado: "ok", segundos: 3.1, tokens: 380, imagens: 0 },
      ],
      desde: day(30),
      sensor: "sensor.cronologia_ia_hoje",
    };
  }

  async bringPreview(id) {
    await wait(150);
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const items = this.todoModel
      .items(id)
      .filter((i) => i.status !== "completed")
      .map((i, k) => ({ uid: i.uid, summary: i.summary, notes: i.description || "", points: this.todos.pointsOf(id, i.summary), every: k % 3 === 0 ? 2 : null, date: today, time: null, done: false, exists: false }));
    return { entity_id: id, name: (this.todoModel.stateOf(id).attributes || {}).friendly_name || id, canDelete: true, items };
  }

  async bring(id, calendar, uids) {
    await wait(300);
    this.todoModel.remove(id, { item: uids });
    this.todos.items.set(id, this.todoModel.items(id));
    this._pushHome();
    return { created: uids.length, removed: uids.length, calendar };
  }

  async setTodo(id, uid, done, who = "") {
    await wait(80);
    this.todoModel.update(id, { item: uid, status: done ? "completed" : "needs_action" });
    this.todos.items.set(id, this.todoModel.items(id));
    // like the server: the ResolvIA points of the task go to whoever did it
    const summary = this.todos.summaryOf(id, uid);
    const points = this.todos.pointsOf(id, summary);
    const d = new Date();
    const key = `resolvia|${id}|${uid}|${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    let out = null;
    this.score.entries = this.score.entries.filter((e) => e.key !== key);
    if (done && points && who) {
      this.score.entries.push({ key, at: new Date().toISOString(), who, points, title: summary, kind: "tarefa" });
      out = { key, who, points };
    }
    this._pushHome();
    return out;
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
    return { version: "1.25.0", user: { name: "Diego Zapella", person: "Diego" }, time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone, ai: await this.aiStatus(), prefs: clone(this.prefs), states, ...this._registry() };
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

  async voiceStatus() {
    return { ready: true, engine: "stt.home_assistant_cloud", language: "pt-BR", name: "Home Assistant" };
  }

  async voiceText() {
    await wait(700);
    return { text: "Dentista quinta às 15 horas na Clínica Sorriso", engine: "stt.home_assistant_cloud" };
  }

  async extract({ text, images }) {
    await wait(1100);
    return { provider: "Google AI Task", events: this.model.aiEvents({ photos: !!(images && images.length), text }) };
  }
}
