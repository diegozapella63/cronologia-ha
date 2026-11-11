// lib/ferramentas.js: the tools of the CorrerIA (WhatsApp, Claude and Gemini) — the list (names, JSON Schema), the
// readings (resumo, agenda, cadastros, placar) and the writings (criar, editar, apagar, marcar feito, pular, pontos)
// with the same functions as the screen (a real Home and Store; Home Assistant and the calendars faked in memory).
// The errors say what is valid (400); an unknown tool is 404. People and places are made up (Ana, Beto).
import { at, makeLog, tmpDir } from "./helpers.mjs";
import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { Home } from "../cronologia/rootfs/app/lib/home.js";
import { Store } from "../cronologia/rootfs/app/lib/store.js";
import { Ferramentas, FERRAMENTAS, INSTRUCOES, lista, parseDia, parseHora, repeteTexto, partesId, quandoMs } from "../cronologia/rootfs/app/lib/ferramentas.js";
import { parseKind } from "../cronologia/rootfs/app/lib/kinds.js";

const NOW = at(2026, 11, 2, 14, 0); // Monday
let dir;
beforeEach(() => {
  mock.timers.enable({ apis: ["setTimeout", "setInterval", "Date"], now: NOW.getTime() });
  dir = tmpDir("cronologia-ferr-");
});
afterEach(() => {
  mock.timers.reset();
  fs.rmSync(dir, { recursive: true, force: true });
});

const ROTINA = "#rotina\nQuem faz: Ana\nPontos: 10";
const CAMA = "#rotina\nQuem faz: Beto\nPontos: 5\nVolta: 2 dias depois de feita\nFeito em: 31/10/2026";
const FILTRO = "#manutenção\nQuem faz: Ana\nA cada: 6 meses\nAvisar: 7 dias antes\nFeito em: 30/04/2026\nPontos: 30";

/** The calendars of a made-up house: events in memory, created, changed and deleted like Home Assistant does. */
function calendars() {
  return {
    "calendar.casa": [
      { uid: "lixo", summary: "Tirar o lixo", start: "2026-11-02", end: "2026-11-03", rrule: "FREQ=DAILY", recurrence_id: "20261102", description: ROTINA },
      { uid: "cama", summary: "Arrumar a cama", start: "2026-11-02", end: "2026-11-03", description: CAMA },
      { uid: "vitd", summary: "Vitamina D", start: "2026-11-02T08:00:00-03:00", end: "2026-11-02T08:15:00-03:00", rrule: "FREQ=DAILY", recurrence_id: "20261102T080000", description: "#remédio\nDose: 1 gota\nQuem toma: Beto" },
      { uid: "net", summary: "Internet", start: "2026-11-04", end: "2026-11-05", description: "#conta\nValor: R$ 119,90" },
      { uid: "filtro", summary: "Trocar o filtro", start: "2026-10-30", end: "2026-10-31", description: FILTRO },
    ],
    "calendar.pessoal": [
      { uid: "dent", summary: "Dentista", start: "2026-11-03T15:00:00-03:00", end: "2026-11-03T16:00:00-03:00", location: "Clínica Sorriso", description: "Levar o cartão" },
      { uid: "pil", summary: "Pilates", start: "2026-11-02T18:00:00-03:00", end: "2026-11-02T19:00:00-03:00", rrule: "FREQ=WEEKLY", recurrence_id: "20261102T180000" },
      { uid: "viagem", summary: "Viagem", start: "2026-11-02", end: "2026-11-05" },
    ],
    "calendar.feriados": [
      { uid: "fin", summary: "Finados", start: "2026-11-02", end: "2026-11-03" },
      { summary: "Sem uid", start: "2026-11-02T10:00:00-03:00", end: "2026-11-02T11:00:00-03:00" },
    ],
    "calendar.familia": [{ uid: "nat", summary: "Natação", start: "2026-11-02T07:00:00-03:00", end: "2026-11-02T08:00:00-03:00" }],
    "calendar.escondido": [{ uid: "seg", summary: "Segredo", start: "2026-11-02T09:00:00-03:00", end: "2026-11-02T10:00:00-03:00" }],
    "calendar.quebrado": [],
    "calendar.fora": [],
  };
}
const FEATURES = { "calendar.casa": 7, "calendar.pessoal": 7, "calendar.feriados": 0, "calendar.familia": 3, "calendar.escondido": 7, "calendar.quebrado": 7, "calendar.fora": 7 };
const NAMES = { "calendar.casa": "Casa", "calendar.pessoal": "Pessoal", "calendar.feriados": "Feriados", "calendar.familia": "Família", "calendar.escondido": "Escondido", "calendar.quebrado": "Quebrado", "calendar.fora": "Fora" };
const msOf = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(s) ? new Date(`${s}T00:00:00`).getTime() : Date.parse(s));

function setup({ app = {}, gerencia = null } = {}) {
  const store = new Store(dir, makeLog());
  store.setApp({ score: { enabled: true, participants: ["Ana", "Beto"] }, demerits: [{ id: "toalha", title: "Toalha molhada", points: 5 }], ...app });
  store.setCalendar("calendar.escondido", { hidden: true });
  store.setCalendar("calendar.pessoal", { name: "Pessoal da Ana" });
  const evs = calendars();
  let seq = 0;
  const model = {
    create(cal, ev) {
      const { dtstart, dtend, ...rest } = ev;
      evs[cal].push({ uid: `novo-${++seq}`, ...rest, start: ev.start || dtstart, end: ev.end || dtend });
    },
    update(cal, uid, ev, rid) {
      const { dtstart, dtend, ...rest } = ev;
      const i = evs[cal].findIndex((e) => e.uid === uid && (!rid || e.recurrence_id === rid));
      // one day of a series stays a day of the series
      evs[cal][i] = { ...(rid ? { recurrence_id: rid, rrule: evs[cal][i].rrule } : {}), uid, ...rest, start: ev.start || dtstart, end: ev.end || dtend };
    },
    remove(cal, uid, rid) {
      evs[cal] = evs[cal].filter((e) => !(e.uid === uid && (!rid || e.recurrence_id === rid)));
      if (cal === "calendar.casa") home.tracked.get(cal).events = evs[cal];
    },
  };
  const ha = { ready: true, sent: [], fail: null };
  ha.send = async (msg) => {
    ha.sent.push(msg);
    if (ha.fail && ha.fail(msg)) throw Object.assign(new Error(ha.failMessage || "falhou"), { code: ha.failCode || "failed" });
    if (msg.type === "calendar/event/create") model.create(msg.entity_id, msg.event);
    if (msg.type === "calendar/event/update") model.update(msg.entity_id, msg.uid, msg.event, msg.recurrence_id);
    if (msg.type === "calendar/event/delete") model.remove(msg.entity_id, msg.uid, msg.recurrence_id);
    return null;
  };
  ha.subscribe = () => ({ unsubscribe() {} });
  ha.on = () => {};
  const calStates = new Map(Object.keys(FEATURES).map((id) => [id, { state: id === "calendar.fora" ? "unavailable" : "off", attributes: { friendly_name: NAMES[id], supported_features: FEATURES[id] } }]));
  const g = gerencia || { state: { ligado: false, contas: [] } };
  g.calls = [];
  g.act = async (action, body) => g.calls.push([action, body]);
  const home = new Home({ ha, store, log: makeLog(), rest: "http://ha/api", token: "", calState: () => calStates, gerencia: g, todos: null, onChange: () => {} });
  home.tracked.set("calendar.casa", { sub: null, poll: null, events: evs["calendar.casa"], day: "2026-11-02" });
  home.persons.set("person.ana", { id: "person.ana", name: "Ana", user_id: "u-ana", trackers: [] });
  const calls = [];
  const log = makeLog();
  const f = new Ferramentas({
    store,
    home,
    gerencia: g,
    gerenciaOn: () => store.data.app.gerencia_on === true,
    calStates: () => calStates,
    fetchEvents: async (cal, start, end) => {
      if (cal === "calendar.quebrado") throw new Error("HTTP 500");
      const a = Date.parse(start);
      const b = Date.parse(end);
      return evs[cal].filter((e) => msOf(e.start) < b && msOf(e.end) > a).map((e) => ({ ...e }));
    },
    createEvent: async (cal, ev) => {
      calls.push(["create", cal, ev]);
      model.create(cal, ev);
    },
    updateEvent: async (cal, uid, ev, opts) => {
      calls.push(["update", cal, uid, ev, opts]);
      model.update(cal, uid, ev, opts.recurrence_id);
    },
    deleteEvent: async (cal, uid, opts) => {
      calls.push(["delete", cal, uid, opts]);
      model.remove(cal, uid, opts.recurrence_id);
    },
    log,
  });
  const ANA = { pessoa: { id: "person.ana", nome: "Ana" }, cliente: "Claude" };
  const call = (nome, args = {}, who = ANA) => f.chamar(nome, args, who, new Date());
  const read = async (nome, args) => JSON.parse((await call(nome, args)).texto);
  /** The message of a refused call (400). */
  const refused = async (nome, args, re) => {
    await assert.rejects(call(nome, args), (err) => {
      assert.equal(err.status, 400, err.message);
      if (re) assert.match(err.message, re);
      return true;
    });
  };
  return { f, store, home, ha, evs, calls, call, read, refused, gerencia: g, log };
}

// ------------------------------------------------------------------ the list

describe("the list of tools (the contract with the CorrerIA)", () => {
  it("5 to 12 tools, names [a-z0-9_] up to 40, a title, a description and a JSON Schema object each", () => {
    const l = lista();
    assert.ok(l.length >= 5 && l.length <= 12, String(l.length));
    for (const t of l) {
      assert.match(t.nome, /^[a-z0-9_]{1,40}$/);
      assert.ok(t.titulo && t.descricao.length > 20, t.nome);
      assert.equal(t.entrada.type, "object");
      assert.equal(t.entrada.additionalProperties, false);
      for (const r of t.entrada.required) assert.ok(r in t.entrada.properties, `${t.nome}.${r}`);
      assert.equal(typeof t.grava, "boolean");
      assert.equal(typeof t.apaga, "boolean");
    }
    assert.deepEqual(l.filter((t) => t.apaga).map((t) => t.nome), ["apagar_compromisso"]);
    assert.deepEqual(l.filter((t) => !t.grava).map((t) => t.nome), ["resumo", "agenda", "cadastros", "placar"]);
    assert.equal(FERRAMENTAS[0].nome, "resumo");
    assert.match(INSTRUCOES, /cronologia_resumo/);
    assert.match(INSTRUCOES, /AAAA-MM-DD/);
  });
  it("an unknown tool is 404; arguments that are not an object count as none", async () => {
    const { f, call } = setup();
    await assert.rejects(f.chamar("voar", {}), (err) => err.status === 404 && /Ferramenta desconhecida: voar/.test(err.message));
    await assert.rejects(f.chamar(undefined), (err) => err.status === 404);
    assert.ok((await f.chamar("cadastros", ["x"])).texto.startsWith("{"));
    assert.equal((await call("resumo")).grava, false);
  });
});

// ------------------------------------------------------------------ helpers

describe("dates, times and ids as the AI writes them", () => {
  const hoje = at(2026, 11, 2);
  it("days: AAAA-MM-DD, DD/MM/AAAA, DD/MM, hoje, amanhã, depois de amanhã, ontem; a day that doesn't exist is refused", () => {
    const d = (v) => {
      const t = parseDia(v, hoje);
      return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
    };
    assert.equal(d("2026-12-25"), "2026-12-25");
    assert.equal(d("25/12/2026"), "2026-12-25");
    assert.equal(d("5/1"), "2026-1-5");
    assert.equal(d(""), "2026-11-2");
    assert.equal(d("Amanhã"), "2026-11-3");
    assert.equal(d("depois de amanhã"), "2026-11-4");
    assert.equal(d("ontem"), "2026-11-1");
    assert.throws(() => parseDia("2026-02-30", hoje, "data"), /data: data inválida \(2026-02-30\)\. Use AAAA-MM-DD/);
    assert.throws(() => parseDia("sexta", hoje), /inválida/);
  });
  it("times: HH:MM, H:MM, 9h, 9h30, 14:00:00", () => {
    assert.equal(parseHora("9:05"), "09:05");
    assert.equal(parseHora("9h"), "09:00");
    assert.equal(parseHora("9h30"), "09:30");
    assert.equal(parseHora("14:00:00"), "14:00");
    assert.equal(parseHora("7"), "07:00");
    assert.throws(() => parseHora("25:00", "fim"), /fim: horário inválido \(25:00\)\. Use HH:MM/);
    assert.throws(() => parseHora("de tarde"), /inválido/);
  });
  it("the repetition in words, the until in the time of the house", () => {
    assert.equal(repeteTexto(""), "");
    assert.equal(repeteTexto("FREQ=DAILY"), "todo dia");
    assert.equal(repeteTexto("RRULE:FREQ=DAILY;INTERVAL=2"), "a cada 2 dias");
    assert.equal(repeteTexto("FREQ=WEEKLY;BYDAY=MO,WE"), "toda semana (seg, qua)");
    assert.equal(repeteTexto("FREQ=MONTHLY;COUNT=3"), "todo mês, 3 vezes");
    assert.equal(repeteTexto("FREQ=YEARLY;UNTIL=20271231"), "todo ano até 31/12/2027");
    // 23:59:59 of 15/12 here is 02:59:59 of 16/12 in UTC
    assert.equal(repeteTexto("FREQ=WEEKLY;UNTIL=20261216T025959Z"), "toda semana até 15/12/2026");
    assert.equal(repeteTexto("FREQ=HOURLY"), "repete");
  });
  it("ids: calendar|uid|when (the uid may have |); recurrence ids and starts", () => {
    assert.deepEqual(partesId("calendar.casa|a|b|2026-11-02"), { cal: "calendar.casa", uid: "a|b", quando: "2026-11-02" });
    assert.equal(partesId("calendar.casa"), null);
    assert.equal(partesId("calendar.casa||x"), null);
    assert.equal(partesId("calendar.casa|x|"), null);
    assert.equal(quandoMs("20261102"), at(2026, 11, 2).getTime());
    assert.equal(quandoMs("20261102T080000"), at(2026, 11, 2, 8).getTime());
    assert.equal(quandoMs("20261102T110000Z"), at(2026, 11, 2, 8).getTime());
    assert.equal(quandoMs("2026-11-02T08:00:00-03:00"), at(2026, 11, 2, 8).getTime());
    assert.ok(Number.isNaN(quandoMs("ontem")));
  });
});

// ------------------------------------------------------------------ reading

describe("resumo", () => {
  it("today and tomorrow, the doses, the chores, the bills (GerencIA too), the maintenance, the placar and the default calendar", async () => {
    const gerencia = { state: { ligado: true, contas: [
      { id: "v:r1:2026-11", descricao: "Aluguel", valor: 1500, vencimento: "2026-11-05", pago: false },
      { id: "f:c1|2026-10-28", descricao: "Fatura do cartão", valor: 300, vencimento: "2026-10-28", pago: false },
      { id: "v:r2:2026-11", descricao: "Condomínio", valor: 800, vencimento: "2026-11-30", pago: false },
      { id: "v:r3:2026-11", descricao: "Luz", valor: 90, vencimento: "2026-11-03", pago: true },
    ] } };
    const { read } = setup({ app: { gerencia_on: true }, gerencia });
    const r = await read("resumo");
    assert.equal(r.agora, "2026-11-02 14:00 (segunda)");
    // plain events only (the models have their own lists), the hidden calendar left out, the broken one named
    assert.deepEqual(r.compromissos.hoje.map((e) => e.titulo), ["Finados", "Viagem", "Natação", "Sem uid", "Pilates"]);
    assert.deepEqual(r.compromissos.amanha.map((e) => e.titulo), ["Viagem", "Dentista"]);
    const viagem = r.compromissos.hoje.find((e) => e.titulo === "Viagem");
    assert.deepEqual(viagem, { id: "calendar.pessoal|viagem|2026-11-02", titulo: "Viagem", data: "2026-11-02", dia_todo: true, ate: "2026-11-04", calendario: "Pessoal da Ana" });
    const pil = r.compromissos.hoje.find((e) => e.titulo === "Pilates");
    assert.equal(pil.id, "calendar.pessoal|pil|20261102T180000");
    assert.equal(pil.repete, "toda semana");
    assert.equal(r.compromissos.amanha[1].local, "Clínica Sorriso");
    assert.equal(r.compromissos.amanha[1].notas, "Levar o cartão");
    assert.deepEqual(r.calendarios_sem_resposta, ["Quebrado"]);
    assert.deepEqual(r.remedios_hoje, [{ id: "calendar.casa|vitd|20261102T080000", nome: "Vitamina D", hora: "08:00", dose: "1 gota", quem: "Beto", situacao: "atrasado (360 min)" }]);
    const rot = Object.fromEntries(r.rotinas_hoje.map((x) => [x.nome, x]));
    assert.deepEqual(rot["Tirar o lixo"], { id: "calendar.casa|lixo|20261102", nome: "Tirar o lixo", quando: "dia todo", quem: "Ana", pontos: 10, situacao: "a fazer" });
    assert.equal(rot["Arrumar a cama"].volta, "2 dias depois de feita");
    assert.deepEqual(r.contas.map((c) => [c.nome, c.situacao, c.origem]), [
      ["Fatura do cartão", "atrasada", "GerencIA"],
      ["Internet", "a pagar", "calendário"],
      ["Aluguel", "a pagar", "GerencIA"],
    ]);
    assert.equal(r.contas[0].id, "gerencia|f:c1|2026-10-28");
    assert.deepEqual(r.manutencao, [{ id: "calendar.casa|filtro|2026-10-30", nome: "Trocar o filtro", proxima: "2026-10-30", situacao: "vencida há 3 dias", a_cada: "6 meses", quem: "Ana", ultima_vez: "2026-04-30", pontos: 30 }]);
    assert.deepEqual(r.placar, { periodo: "2 a 8 de nov", ate: "2026-11-08", pontos: { Ana: 0, Beto: 0 }, lider: "ninguém pontuou" });
    assert.equal(r.calendario_padrao, "Casa (calendar.casa)");
    assert.equal(r.ferias, undefined);
  });
  it("vacation: said with its rule; maintenance paused; no placar or points with the placar off; doses marked and skipped", async () => {
    const { read, store } = setup({ app: { away: { from: "2026-11-01", to: "2026-11-06" }, score: { enabled: false, participants: [] }, default_calendar: "calendar.pessoal" } });
    store.setCheck("calendar.casa|vitd|20261102T080000", { by: "Beto", kind: "remedio" });
    const r = await read("resumo");
    assert.deepEqual(r.ferias, { de: "2026-11-01", ate: "2026-11-06", agora: true, regra: "rotinas, tarefas e manutenção pausadas; remédios continuam" });
    assert.equal(r.manutencao[0].situacao, "pausada nas férias");
    assert.equal(r.manutencao[0].pontos, undefined);
    assert.deepEqual(r.rotinas_hoje, []);
    assert.equal(r.placar, undefined);
    assert.equal(r.remedios_hoje[0].situacao, "tomado");
    assert.equal(r.remedios_hoje[0].marcado_por, "Beto");
    assert.equal(r.calendario_padrao, "Pessoal da Ana (calendar.pessoal)");
    store.setCheck("calendar.casa|vitd|20261102T080000", { by: "Beto", kind: "remedio", skipped: true });
    assert.equal((await read("resumo")).remedios_hoje[0].situacao, "pulado");
  });
  it("the states of a dose and of a chore (on time, later, done by whom, skipped, late days, yesterday's)", async () => {
    const { read, evs, home, store } = setup();
    evs["calendar.casa"].push(
      { uid: "omega", summary: "Ômega 3", start: "2026-11-02T13:50:00-03:00", end: "2026-11-02T14:05:00-03:00", description: "#remédio\nQuem toma: Ana" },
      { uid: "jantar", summary: "Remédio da noite", start: "2026-11-02T21:00:00-03:00", end: "2026-11-02T21:15:00-03:00", description: "#remédio" },
      { uid: "plantas", summary: "Regar as plantas", start: "2026-11-01", end: "2026-11-02", rrule: "FREQ=DAILY", recurrence_id: "20261101", description: "#rotina\nPeríodo: manhã" },
      { uid: "louca", summary: "Lavar a louça", start: "2026-11-02T20:00:00-03:00", end: "2026-11-02T20:30:00-03:00", description: "#rotina\nPontos: 0" },
      { uid: "roupa", summary: "Lavar a roupa", start: "2026-10-30", end: "2026-10-31", description: "#rotina\nVolta: 3 dias depois de feita" },
      { uid: "manha", summary: "Abrir as janelas", start: "2026-11-02", end: "2026-11-03", description: "#rotina\nPeríodo: manhã" },
    );
    home.tracked.get("calendar.casa").events = evs["calendar.casa"];
    store.setCheck("calendar.casa|lixo|20261102", { by: "Ana", kind: "rotina" });
    store.setCheck("calendar.casa|louca|2026-11-02T20:00:00-03:00", { by: "Beto", kind: "rotina", skipped: true });
    const r = await read("resumo");
    const med = Object.fromEntries(r.remedios_hoje.map((x) => [x.nome, x.situacao]));
    assert.deepEqual(med, { "Vitamina D": "atrasado (360 min)", "Ômega 3": "na hora", "Remédio da noite": "mais tarde" });
    const rot = Object.fromEntries(r.rotinas_hoje.map((x) => [x.nome, x]));
    assert.equal(rot["Tirar o lixo"].situacao, "feita");
    assert.equal(rot["Tirar o lixo"].feita_por, "Ana");
    assert.equal(rot["Lavar a louça"].situacao, "pulada");
    assert.equal(rot["Lavar a louça"].quando, "20:00");
    assert.equal(rot["Lavar a louça"].feita_por, undefined);
    assert.equal(rot["Regar as plantas"].situacao, "de ontem, não feita");
    assert.equal(rot["Lavar a roupa"].situacao, "atrasada 3 dias");
    assert.equal(rot["Abrir as janelas"].quando, "de manhã");
  });
});

describe("agenda", () => {
  it("from today to 7 days by default, every visible calendar, with the model of an event", async () => {
    const { read } = setup();
    const r = await read("agenda");
    assert.deepEqual(r.periodo, { de: "2026-11-02", ate: "2026-11-09" });
    assert.equal(r.encontrados, r.eventos.length);
    assert.ok(!r.eventos.some((e) => e.titulo === "Segredo"), "hidden calendar left out");
    const net = r.eventos.find((e) => e.titulo === "Internet");
    assert.equal(net.modelo, "Conta a pagar");
    assert.equal(net.valor, 119.9);
    const vit = r.eventos.find((e) => e.titulo === "Vitamina D");
    assert.deepEqual([vit.modelo, vit.dose, vit.quem, vit.inicio, vit.fim], ["Remédio", "1 gota", "Beto", "08:00", "08:15"]);
    const cama = r.eventos.find((e) => e.titulo === "Arrumar a cama");
    assert.equal(cama.volta, "2 dias depois de feita");
    assert.equal(cama.pontos, 5);
    assert.deepEqual(r.calendarios_sem_resposta, ["Quebrado"]);
  });
  it("a search, one calendar (by name, even a hidden one), a limit; the maintenance says how often", async () => {
    const { read } = setup();
    let r = await read("agenda", { busca: "clínica" });
    assert.deepEqual(r.eventos.map((e) => e.titulo), ["Dentista"]);
    r = await read("agenda", { calendario: "escondido" });
    assert.deepEqual(r.eventos.map((e) => e.titulo), ["Segredo"]);
    r = await read("agenda", { de: "2026-10-30", ate: "2026-10-30", calendario: "calendar.casa" });
    assert.deepEqual(r.eventos.map((e) => [e.titulo, e.a_cada, e.notas]), [["Trocar o filtro", "6 meses", undefined]]);
    r = await read("agenda", { limite: 2 });
    assert.equal(r.mostrando, 2);
    assert.ok(r.encontrados > 2);
    assert.equal(r.calendarios_sem_resposta.length, 1);
  });
  it("an event that ends after midnight says the day; one of several days says until when", async () => {
    const { read, evs } = setup();
    evs["calendar.pessoal"].push({ uid: "festa", summary: "Festa", start: "2026-11-04T22:00:00-03:00", end: "2026-11-05T02:00:00-03:00" });
    const r = await read("agenda", { calendario: "Pessoal da Ana", busca: "festa" });
    assert.deepEqual(r.eventos[0], { id: "calendar.pessoal|festa|2026-11-04T22:00:00-03:00", titulo: "Festa", data: "2026-11-04", inicio: "22:00", fim: "02:00", termina: "2026-11-05", calendario: "Pessoal da Ana" });
  });
  it("refused: the end before the start, more than 400 days, a day that doesn't exist, a calendar that isn't there", async () => {
    const { refused } = setup();
    await refused("agenda", { de: "2026-11-10", ate: "2026-11-01" }, /vem antes/);
    await refused("agenda", { de: "2026-01-01", ate: "2027-12-31" }, /400 dias/);
    await refused("agenda", { de: "31/02/2026" }, /de: data inválida/);
    await refused("agenda", { calendario: "Trabalho" }, /Calendário não encontrado: Trabalho\. Os calendários: Casa \(calendar\.casa\), Escondido/);
  });
});

describe("cadastros and placar", () => {
  it("cadastros: what each calendar allows and the default one, the models registered, the people, the placar", async () => {
    const { read, evs, home } = setup();
    evs["calendar.casa"].push({ uid: "unica", summary: "Consulta do Beto", start: "2026-11-20T10:00:00-03:00", end: "2026-11-20T10:15:00-03:00", description: "#remédio" });
    home.tracked.get("calendar.casa").events = evs["calendar.casa"];
    const r = await read("cadastros");
    const cal = Object.fromEntries(r.calendarios.map((c) => [c.id, c]));
    assert.deepEqual(cal["calendar.casa"], { id: "calendar.casa", nome: "Casa", pode: "criar, editar, apagar", padrao: true });
    assert.equal(cal["calendar.feriados"].pode, "só ler");
    assert.equal(cal["calendar.familia"].pode, "criar, editar, apagar");
    assert.equal(cal["calendar.escondido"].oculto, true);
    assert.equal(cal["calendar.fora"].fora_do_ar, true);
    const cad = Object.fromEntries(r.cadastrados.map((c) => [c.nome, c]));
    assert.deepEqual(cad["Trocar o filtro"], { id: "calendar.casa|filtro|2026-10-30", tipo: "Manutenção", nome: "Trocar o filtro", quando: "dia todo", repete: "a cada 6 meses", proxima: "2026-10-30", atrasada: true, quem: "Ana", pontos: 30, calendario: "Casa" });
    assert.equal(cad["Arrumar a cama"].repete, "volta 2 dias depois de feita");
    assert.equal(cad["Vitamina D"].repete, "todo dia");
    assert.equal(cad["Vitamina D"].dose, "1 gota");
    assert.equal(cad["Internet"].valor, 119.9);
    assert.equal(cad["Consulta do Beto"].repete, "uma vez");
    assert.ok(r.pessoas.includes("Ana"));
    assert.deepEqual(r.placar, { participantes: ["Ana", "Beto"], demeritos: [{ nome: "Toalha molhada", pontos: 5 }] });
  });
  it("cadastros with the placar off; a pet is said", async () => {
    const { read } = setup({ app: { score: { enabled: false, participants: [] }, people: { Mimi: { pet: true } } } });
    const r = await read("cadastros");
    assert.equal(r.placar, "desligado");
    assert.ok(r.pessoas.includes("Mimi (pet)"));
    assert.equal(r.cadastrados.find((c) => c.nome === "Trocar o filtro").pontos, undefined);
  });
  it("placar: off says so; on: the points, the leader, the prizes, the Extrato with who and where from, the past periods", async () => {
    let s = setup({ app: { score: { enabled: false, participants: [] } } });
    assert.match((await s.call("placar")).texto, /placar está desligado/);
    s = setup();
    s.store.setPrizes("2026-11-02", "Pizza", {});
    s.store.setPrizes("2026-11-09", "", { Ana: "Cinema", Beto: "Sorvete" });
    s.store.data.score.history.push({ key: "2026-10-26", start: "2026-10-26", end: "2026-11-02", totals: { Ana: 30, Beto: 10 }, winner: "Ana", reward: "Jantar", delivered: true });
    s.store.data.score.history.push({ key: "2026-10-19", start: "2026-10-19", end: "2026-10-26", totals: { Ana: 0, Beto: 0 }, winner: null, reward: "" });
    await s.call("dar_pontos", { quem: "Beto", pontos: 15, motivo: "Lavou o carro" });
    await s.call("dar_pontos", { quem: "beto", demerito: "Toalha" });
    s.home.reassign((s.store.data.score.entries.find((e) => e.title === "Lavou o carro") || {}).key, "Ana");
    const r = JSON.parse((await s.call("placar", { limite: 2 })).texto);
    assert.deepEqual(r.periodo, { nome: "2 a 8 de nov", de: "2026-11-02", ate: "2026-11-08" });
    assert.deepEqual(r.pontos, { Ana: 15, Beto: -5 });
    assert.equal(r.lider, "Ana");
    assert.equal(r.premio, "Pizza");
    assert.equal(r.premio_do_proximo, "Ana: Cinema · Beto: Sorvete");
    assert.equal(r.extrato.length, 2);
    assert.equal(r.extrato_total, 3);
    assert.deepEqual(r.extrato[1], { quando: "02/11/2026 14:00", tipo: "perdeu", pessoa: "Beto", pontos: -5, o_que: "Toalha molhada", por: "Ana", via: "Claude" });
    assert.equal(r.extrato[0].tipo, "trocou");
    assert.equal(r.extrato[0].de, "Beto");
    assert.deepEqual(r.anteriores, [
      { de: "2026-10-26", ate: "2026-11-01", vencedor: "Ana", pontos: { Ana: 30, Beto: 10 }, premio: "Jantar", entregue: true },
      { de: "2026-10-19", ate: "2026-10-25", vencedor: "empate", pontos: { Ana: 0, Beto: 0 } },
    ]);
    assert.deepEqual(r.demeritos, [{ nome: "Toalha molhada", pontos: 5 }]);
  });
  it("placar: a tie and nobody scored", async () => {
    const s = setup();
    assert.equal(JSON.parse((await s.call("placar")).texto).lider, "ninguém pontuou");
    await s.call("dar_pontos", { quem: "Ana", pontos: 5, motivo: "a" });
    await s.call("dar_pontos", { quem: "Beto", pontos: 5, motivo: "b" });
    assert.equal(JSON.parse((await s.call("placar")).texto).lider, "empate");
    assert.equal(JSON.parse((await s.call("resumo")).texto).placar.lider, "empate");
  });
});

// ------------------------------------------------------------------ creating

describe("criar_compromisso", () => {
  it("a plain event: one hour by default, in the default calendar, with its id read back", async () => {
    const { call, calls, read } = setup();
    const r = await call("criar_compromisso", { titulo: "  Reunião   da escola ", data: "amanhã", inicio: "9h", local: "Escola", notas: "Levar o boletim" });
    assert.equal(r.grava, true);
    assert.deepEqual(calls[0], ["create", "calendar.casa", { summary: "Reunião da escola", description: "Levar o boletim", location: "Escola", start: "2026-11-03T09:00:00-03:00", end: "2026-11-03T10:00:00-03:00" }]);
    assert.equal(r.texto, "Criado: Reunião da escola · 03/11/2026 (terça) 09:00–10:00 · Casa. id: calendar.casa|novo-1|2026-11-03T09:00:00-03:00");
    assert.ok((await read("agenda", { busca: "escola" })).eventos.length === 1);
  });
  it("in a calendar by name; an end after midnight goes to the next day; several days of all day", async () => {
    const { call, calls } = setup();
    await call("criar_compromisso", { titulo: "Show", data: "2026-11-07", inicio: "22:00", fim: "01:30", calendario: "pessoal" });
    assert.deepEqual(calls[0].slice(1), ["calendar.pessoal", { summary: "Show", start: "2026-11-07T22:00:00-03:00", end: "2026-11-08T01:30:00-03:00" }]);
    const r = await call("criar_compromisso", { titulo: "Praia", data: "2026-12-26", data_fim: "2026-12-30" });
    assert.deepEqual(calls[1][2], { summary: "Praia", start: "2026-12-26", end: "2026-12-31" });
    assert.match(r.texto, /26\/12\/2026 \(sábado\) a 30\/12\/2026, dia todo · Casa/);
  });
  it("repeating: every week until a day (the until of a timed event at 23:59 here, in UTC), every year", async () => {
    const { call, calls } = setup();
    let r = await call("criar_compromisso", { titulo: "Inglês", data: "2026-11-03", inicio: "19:00", fim: "20:30", repete: "semanal", repete_ate: "2026-12-15" });
    assert.equal(calls[0][2].rrule, "FREQ=WEEKLY;UNTIL=20261216T025959Z");
    assert.match(r.texto, /toda semana até 15\/12\/2026/);
    r = await call("criar_compromisso", { titulo: "Aniversário do Beto", data: "2027-03-10", repete: "anual", repete_ate: "2030-03-10" });
    assert.equal(calls[1][2].rrule, "FREQ=YEARLY;UNTIL=20300310");
  });
  it("a medicine: needs the time; daily by default; a time already gone today starts tomorrow (no late dose); the calendar named like it", async () => {
    const s = setup();
    s.store.setCalendar("calendar.pessoal", { name: "Remédios" });
    await s.refused("criar_compromisso", { titulo: "Losartana", tipo: "remedio" }, /precisa do horário/);
    const r = await s.call("criar_compromisso", { titulo: "Losartana", tipo: "remedio", inicio: "08:00", dose: "50 mg", quem: "Beto", notas: "Em jejum" });
    const ev = s.calls[0][2];
    assert.equal(s.calls[0][1], "calendar.pessoal");
    assert.deepEqual([ev.start, ev.end, ev.rrule], ["2026-11-03T08:00:00-03:00", "2026-11-03T08:15:00-03:00", "FREQ=DAILY"]);
    assert.deepEqual(parseKind(ev.description), { kind: "remedio", notes: "Em jejum", dose: "50 mg", who: "Beto", alert: true });
    assert.match(r.texto, /remédio \(50 mg, Beto\) · todo dia/);
    // later today stays today; once only, today even if gone
    await s.call("criar_compromisso", { titulo: "Dipirona", tipo: "remedio", inicio: "20:00", repete: "nao" });
    assert.equal(s.calls[1][2].start, "2026-11-02T20:00:00-03:00");
    assert.equal(s.calls[1][2].rrule, undefined);
    await s.call("criar_compromisso", { titulo: "Vacina", tipo: "remedio", inicio: "10:00", repete: "nao" });
    assert.equal(s.calls[2][2].start, "2026-11-02T10:00:00-03:00");
    // weekly, monthly, yearly: the next one of the rule
    for (const [repete, start] of [["semanal", "2026-11-09"], ["mensal", "2026-12-02"], ["anual", "2027-11-02"]]) {
      await s.call("criar_compromisso", { titulo: `R ${repete}`, tipo: "rotina", inicio: "07:00", repete });
      assert.equal(s.calls.at(-1)[2].start.slice(0, 10), start, repete);
    }
  });
  it("a chore: all day with a part of the day, points; or one that comes back N days after done (no repetition rule)", async () => {
    const { call, calls, refused } = setup();
    await call("criar_compromisso", { titulo: "Regar as plantas", tipo: "rotina", periodo: "manha", pontos: 5, quem: "Ana" });
    let ev = calls[0][2];
    assert.equal(calls[0][1], "calendar.casa");
    assert.deepEqual([ev.start, ev.end, ev.rrule], ["2026-11-02", "2026-11-03", "FREQ=DAILY"]);
    assert.equal(ev.description, "#rotina\nQuem faz: Ana\nPontos: 5\nPeríodo: Manhã");
    await call("criar_compromisso", { titulo: "Trocar a roupa de cama", tipo: "rotina", volta_dias: 7 });
    ev = calls[1][2];
    assert.equal(ev.rrule, undefined);
    assert.equal(parseKind(ev.description).after.n, 7);
    await call("criar_compromisso", { titulo: "Tirar o lixo", tipo: "rotina", inicio: "19:00" });
    assert.deepEqual([calls[2][2].start, calls[2][2].end], ["2026-11-02T19:00:00-03:00", "2026-11-02T19:30:00-03:00"]);
    await refused("criar_compromisso", { titulo: "x", tipo: "rotina", periodo: "noite", inicio: "19:00" }, /sem horário/);
    await refused("criar_compromisso", { titulo: "x", tipo: "rotina", periodo: "madrugada" }, /periodo inválido: madrugada\. Use: manha, tarde, noite/);
    await refused("criar_compromisso", { titulo: "x", tipo: "rotina", volta_dias: 0 }, /volta_dias: de 1 a 365/);
    await refused("criar_compromisso", { titulo: "x", tipo: "rotina", volta_dias: 3, repete: "diario" }, /volta_dias não usa repete/);
  });
  it("a bill: all day, with the value, monthly by default; once or every year", async () => {
    const { call, calls, refused } = setup();
    const r = await call("criar_compromisso", { titulo: "Aluguel", tipo: "conta", valor: 1500, data: "2026-11-10" });
    assert.deepEqual([calls[0][2].start, calls[0][2].rrule, calls[0][2].description], ["2026-11-10", "FREQ=MONTHLY", parseKind(calls[0][2].description) && calls[0][2].description]);
    assert.equal(parseKind(calls[0][2].description).value, 1500);
    assert.match(r.texto, /conta a pagar \(R\$ 1\.500,00\) · todo mês/);
    await call("criar_compromisso", { titulo: "IPTU", tipo: "conta", valor: "R$ 1.234,56", repete: "anual" });
    assert.equal(parseKind(calls[1][2].description).value, 1234.56);
    await refused("criar_compromisso", { titulo: "Luz", tipo: "conta" }, /precisa do valor/);
    await refused("criar_compromisso", { titulo: "Luz", tipo: "conta", valor: 10, inicio: "10:00" }, /dia todo/);
    await refused("criar_compromisso", { titulo: "Luz", tipo: "conta", valor: 10, repete: "semanal" }, /nao, mensal ou anual/);
  });
  it("a maintenance: the next one is the last time plus the interval (6 months by default)", async () => {
    const { call, calls, refused } = setup();
    let r = await call("criar_compromisso", { titulo: "Limpar o ar", tipo: "manutencao", a_cada: "3 meses", ultima_vez: "2026-10-01", pontos: 20, quem: "Beto" });
    assert.deepEqual([calls[0][2].start, calls[0][2].end], ["2027-01-01", "2027-01-02"]);
    const k = parseKind(calls[0][2].description);
    assert.deepEqual([k.every, k.history, k.points, k.who, k.warn], [{ n: 3, unit: "meses" }, ["2026-10-01"], 20, "Beto", 7]);
    assert.match(r.texto, /manutenção \(Beto, a cada 3 meses, 20 pontos\)/);
    r = await call("criar_compromisso", { titulo: "Dedetizar", tipo: "manutencao" });
    assert.equal(calls[1][2].start, "2027-05-02");
    await refused("criar_compromisso", { titulo: "x", tipo: "manutencao", a_cada: "sempre" }, /a_cada inválido: sempre\. Exemplos/);
    await refused("criar_compromisso", { titulo: "x", tipo: "manutencao", ultima_vez: "2026-12-01" }, /depois de hoje/);
    await refused("criar_compromisso", { titulo: "x", tipo: "manutencao", repete: "mensal" }, /pelo a_cada/);
  });
  it("refused: no title, a wrong type, fields of another model, end without start, data_fim with a time, wrong repetition, calendars", async () => {
    const { refused, home, f } = setup();
    await refused("criar_compromisso", { titulo: "  " }, /Falta o titulo/);
    await refused("criar_compromisso", { titulo: "x", tipo: "festa" }, /tipo inválido: festa\. Use: compromisso, remedio, rotina, conta, manutencao/);
    await refused("criar_compromisso", { titulo: "x", valor: 10 }, /valor só vale para tipo conta/);
    await refused("criar_compromisso", { titulo: "x", tipo: "remedio", inicio: "08:00", pontos: 3 }, /pontos só vale para tipo rotina ou manutencao/);
    await refused("criar_compromisso", { titulo: "x", fim: "10:00" }, /fim sem inicio/);
    await refused("criar_compromisso", { titulo: "x", inicio: "10:00", data_fim: "2026-11-05" }, /data_fim é só para o dia todo/);
    await refused("criar_compromisso", { titulo: "x", data: "2026-11-05", data_fim: "2026-11-04" }, /data_fim vem antes/);
    await refused("criar_compromisso", { titulo: "x", repete: "sempre" }, /repete inválido: sempre/);
    await refused("criar_compromisso", { titulo: "x", repete_ate: "2026-12-01" }, /repete_ate sem repete/);
    await refused("criar_compromisso", { titulo: "x", repete: "diario", repete_ate: "2026-10-01" }, /repete_ate vem antes/);
    await refused("criar_compromisso", { titulo: "x", calendario: "Feriados" }, /O calendário Feriados não aceita eventos novos\. Os que aceitam: Casa \(calendar\.casa\), Escondido/);
    await refused("criar_compromisso", { titulo: "x", calendario: "Trabalho" }, /Calendário não encontrado: Trabalho\. Os que aceitam eventos novos: Casa/);
    // no calendar takes new events
    f.calStates = () => new Map([["calendar.feriados", { state: "off", attributes: { supported_features: 0 } }]]);
    await refused("criar_compromisso", { titulo: "x" }, /Nenhum calendário/);
    assert.ok(home);
  });
  it("the id stays out when the event can't be read back (it shows in the agenda)", async () => {
    const s = setup();
    s.f.fetchEvents = async () => {
      throw new Error("offline");
    };
    const r = await s.call("criar_compromisso", { titulo: "Feira", data: "2026-11-05" });
    assert.match(r.texto, /O id aparece em cronologia_agenda\.$/);
    assert.match(s.log.lines.at(-1)[1], /CorrerIA: Claude \(Ana\) criou Feira em calendar\.casa/);
  });
});

// ------------------------------------------------------------------ changing and deleting

describe("editar_compromisso", () => {
  it("a new start keeps the length; new notes and place; the id follows the new start", async () => {
    const { call, calls } = setup();
    const r = await call("editar_compromisso", { id: "calendar.pessoal|dent|2026-11-03T15:00:00-03:00", inicio: "16:30", notas: "Levar o raio-x", local: "" });
    assert.deepEqual(calls[0], ["update", "calendar.pessoal", "dent", { summary: "Dentista", start: "2026-11-03T16:30:00-03:00", end: "2026-11-03T17:30:00-03:00", description: "Levar o raio-x" }, {}]);
    assert.equal(r.texto, "Alterado: Dentista · 03/11/2026 (terça) 16:30–17:30 · Pessoal da Ana. Antes: Dentista · 03/11/2026 (terça) 15:00–16:00 · Pessoal da Ana. id: calendar.pessoal|dent|2026-11-03T16:30:00-03:00");
  });
  it("a new day and end; all day and back to a time (a model gets its length)", async () => {
    const { call, calls, refused } = setup();
    await call("editar_compromisso", { id: "calendar.pessoal|dent|2026-11-03T15:00:00-03:00", data: "2026-11-05", fim: "15:20" });
    assert.deepEqual([calls[0][3].start, calls[0][3].end], ["2026-11-05T15:00:00-03:00", "2026-11-05T15:20:00-03:00"]);
    await call("editar_compromisso", { id: "calendar.pessoal|dent|2026-11-05T15:00:00-03:00", dia_todo: true });
    assert.deepEqual([calls[1][3].start, calls[1][3].end], ["2026-11-05", "2026-11-06"]);
    await call("editar_compromisso", { id: "calendar.pessoal|viagem|2026-11-02", data: "2026-11-10" });
    assert.deepEqual([calls[2][3].start, calls[2][3].end], ["2026-11-10", "2026-11-13"], "three days stay three days");
    await call("editar_compromisso", { id: "calendar.casa|net|2026-11-04", inicio: "10:00" });
    assert.deepEqual([calls[3][3].start, calls[3][3].end], ["2026-11-04T10:00:00-03:00", "2026-11-04T11:00:00-03:00"]);
    await call("editar_compromisso", { id: "calendar.casa|cama|2026-11-02", inicio: "21:00" });
    assert.equal(calls[4][3].end, "2026-11-02T21:30:00-03:00");
    await call("editar_compromisso", { id: "calendar.pessoal|viagem|2026-11-10", inicio: "23:30", fim: "00:30" });
    assert.equal(calls[5][3].end, "2026-11-11T00:30:00-03:00");
    await refused("editar_compromisso", { id: "calendar.pessoal|viagem|2026-11-10T23:30:00-03:00", dia_todo: true, inicio: "10:00" }, /escolha um/);
    // already at a time: dia_todo false changes nothing more
    await call("editar_compromisso", { id: "calendar.casa|net|2026-11-04T10:00:00-03:00", titulo: "Internet", dia_todo: false });
    assert.equal(calls[6][3].start, "2026-11-04T10:00:00-03:00");
  });
  it("all day: off needs the start; an end alone is refused", async () => {
    const { refused } = setup();
    await refused("editar_compromisso", { id: "calendar.pessoal|viagem|2026-11-02", dia_todo: false }, /mande o inicio/);
    await refused("editar_compromisso", { id: "calendar.pessoal|viagem|2026-11-02", fim: "10:00" }, /mande o inicio/);
  });
  it("a repeating event: only this day (no rule) or this and the next ones (the rule, THISANDFUTURE)", async () => {
    const { call, calls, refused } = setup();
    let r = await call("editar_compromisso", { id: "calendar.pessoal|pil|20261102T180000", titulo: "Pilates (sala 2)" });
    assert.deepEqual(calls[0][4], { recurrence_id: "20261102T180000" });
    assert.equal(calls[0][3].rrule, undefined);
    assert.match(r.texto, /^Alterado \(só este dia\): Pilates \(sala 2\)/);
    assert.match(r.texto, /id: calendar\.pessoal\|pil\|20261102T180000$/);
    r = await call("editar_compromisso", { id: "calendar.pessoal|pil|20261102T180000", inicio: "19:00", escopo: "este_e_proximos" });
    assert.deepEqual(calls[1][4], { recurrence_id: "20261102T180000", recurrence_range: "THISANDFUTURE" });
    assert.equal(calls[1][3].rrule, "FREQ=WEEKLY");
    assert.match(r.texto, /\(este e os próximos\)/);
    await refused("editar_compromisso", { id: "calendar.pessoal|pil|20261102T180000", titulo: "x", escopo: "todos" }, /escopo: este ou este_e_proximos/);
  });
  it("a model: dose, who, points and value in its description (the notes stay)", async () => {
    const { call, calls, refused } = setup();
    await call("editar_compromisso", { id: "calendar.casa|vitd|20261102T080000", dose: "2 gotas", quem: "Ana", notas: "Com comida", escopo: "este_e_proximos" });
    assert.deepEqual(parseKind(calls[0][3].description), { kind: "remedio", notes: "Com comida", dose: "2 gotas", who: "Ana", alert: true });
    await call("editar_compromisso", { id: "calendar.casa|net|2026-11-04", valor: 99.9 });
    assert.equal(parseKind(calls[1][3].description).value, 99.9);
    await call("editar_compromisso", { id: "calendar.casa|filtro|2026-10-30", pontos: 50 });
    const k = parseKind(calls[2][3].description);
    assert.deepEqual([k.points, k.history, k.every], [50, ["2026-04-30"], { n: 6, unit: "meses" }]);
    await call("editar_compromisso", { id: "calendar.casa|net|2026-11-04", valor: "R$ 89,90" });
    assert.equal(parseKind(calls[3][3].description).value, 89.9);
    await refused("editar_compromisso", { id: "calendar.casa|net|2026-11-04", valor: "grátis" }, /valor inválido/);
    await refused("editar_compromisso", { id: "calendar.casa|net|2026-11-04", dose: "1" }, /dose só vale num evento de remédio; este é conta a pagar/);
    await refused("editar_compromisso", { id: "calendar.pessoal|dent|2026-11-03T15:00:00-03:00", quem: "Ana" }, /quem só vale num evento de remédio ou rotina da casa ou manutenção\.$/);
  });
  it("a calendar that can't change events (Google): deleted and created again; a repeating one starts again on that day", async () => {
    const s = setup();
    const r = await s.call("editar_compromisso", { id: "calendar.familia|nat|2026-11-02T07:00:00-03:00", inicio: "06:30" });
    const types = s.ha.sent.map((m) => m.type);
    assert.deepEqual(types, ["calendar/event/delete", "calendar/event/create"]);
    assert.equal(s.ha.sent[1].event.dtstart, "2026-11-02T06:30:00-03:00");
    assert.match(r.texto, /^Alterado: Natação · 02\/11\/2026 \(segunda\) 06:30–07:30 · Família\. Antes: .*id: calendar\.familia\|novo-1\|2026-11-02T06:30:00-03:00$/);
    s.evs["calendar.familia"].push({ uid: "coral", summary: "Coral", start: "2026-11-02T20:00:00-03:00", end: "2026-11-02T21:00:00-03:00", rrule: "FREQ=WEEKLY", recurrence_id: "20261102T200000" });
    const r2 = await s.call("editar_compromisso", { id: "calendar.familia|coral|20261102T200000", inicio: "20:30" });
    assert.equal(s.ha.sent.at(-1).event.rrule, "FREQ=WEEKLY");
    assert.match(r2.texto, /a série recomeça neste dia/);
  });
  it("refused: nothing to change, a read-only calendar, an event without uid, an id that isn't there or is wrong, a bill of the GerencIA", async () => {
    const { refused } = setup();
    await refused("editar_compromisso", { id: "calendar.pessoal|dent|2026-11-03T15:00:00-03:00" }, /Diga o que muda: titulo, data/);
    await refused("editar_compromisso", { id: "calendar.feriados|fin|2026-11-02", titulo: "x" }, /O calendário Feriados não deixa mudar eventos/);
    await refused("editar_compromisso", { id: "calendar.feriados|Sem uid|2026-11-02T10:00:00-03:00", titulo: "x" }, /não dá um identificador/);
    await refused("editar_compromisso", { id: "calendar.pessoal|outro|2026-11-03T15:00:00-03:00", titulo: "x" }, /Evento não encontrado/);
    await refused("editar_compromisso", { id: "Dentista", titulo: "x" }, /Id inválido: Dentista/);
    await refused("editar_compromisso", { id: "calendar.trabalho|x|2026-11-03", titulo: "x" }, /Calendário não encontrado: calendar\.trabalho/);
    await refused("editar_compromisso", { id: "calendar.pessoal|dent|amanhã", titulo: "x" }, /Id inválido/);
    await refused("editar_compromisso", { id: "gerencia|v:r1|2026-11", titulo: "x" }, /conta do GerencIA/);
    await refused("editar_compromisso", { titulo: "x" }, /Id inválido: \(vazio\)/);
  });
  it("found by the same moment when the id was written another way", async () => {
    const { call, calls } = setup();
    await call("editar_compromisso", { id: "calendar.pessoal|dent|2026-11-03T18:00:00Z", titulo: "Dentista da Ana" });
    assert.equal(calls[0][2], "dent");
  });
});

describe("apagar_compromisso", () => {
  it("a single event; a repeating one: this day, this and the next ones, the whole series", async () => {
    const { call, calls, refused } = setup();
    let r = await call("apagar_compromisso", { id: "calendar.pessoal|dent|2026-11-03T15:00:00-03:00" });
    assert.deepEqual(calls[0], ["delete", "calendar.pessoal", "dent", {}]);
    assert.equal(r.texto, "Apagado: Dentista · 03/11/2026 (terça) 15:00–16:00 · Pessoal da Ana.");
    r = await call("apagar_compromisso", { id: "calendar.pessoal|pil|20261102T180000" });
    assert.deepEqual(calls[1][3], { recurrence_id: "20261102T180000" });
    assert.match(r.texto, /^Apagado \(só este dia\)/);
    const s2 = setup();
    r = await s2.call("apagar_compromisso", { id: "calendar.pessoal|pil|20261102T180000", escopo: "este_e_proximos" });
    assert.deepEqual(s2.calls[0][3], { recurrence_id: "20261102T180000", recurrence_range: "THISANDFUTURE" });
    assert.match(r.texto, /este e os próximos/);
    const s3 = setup();
    r = await s3.call("apagar_compromisso", { id: "calendar.casa|lixo|20261102", escopo: "todos" });
    assert.deepEqual(s3.calls[0][3], {});
    assert.match(r.texto, /^Apagado \(a série toda\): Tirar o lixo · 02\/11\/2026 \(segunda\), dia todo · Casa · rotina da casa \(Ana, 10 pontos\) · todo dia\.$/);
    await refused("apagar_compromisso", { id: "calendar.feriados|fin|2026-11-02" }, /não deixa apagar/);
    await refused("apagar_compromisso", { id: "calendar.feriados|Sem uid|2026-11-02T10:00:00-03:00" }, /identificador/);
    await refused("apagar_compromisso", { id: "calendar.pessoal|viagem|2026-11-02", escopo: "tudo" }, /escopo: este, este_e_proximos ou todos/);
  });
});

// ------------------------------------------------------------------ done, skipped, points

describe("marcar_feito and pular", () => {
  it("a chore: done by the person using it (points to them), or by someone else; again says it already is; undone", async () => {
    const { call, store, refused } = setup();
    let r = await call("marcar_feito", { id: "calendar.casa|lixo|20261102" });
    assert.equal(r.texto, "Feita por Ana: Tirar o lixo; +10 pontos para Ana.");
    assert.equal(store.data.checks["calendar.casa|lixo|20261102"].by, "Ana");
    assert.deepEqual(store.data.score.log.at(-1), { ...store.data.score.log.at(-1), type: "ganhou", who: "Ana", by: "Ana", via: "Claude" });
    r = await call("marcar_feito", { id: "calendar.casa|lixo|20261102" });
    assert.equal(r.texto, "Já estava feita: Tirar o lixo.");
    r = await call("marcar_feito", { id: "calendar.casa|lixo|20261102", feito: false });
    assert.equal(r.texto, "Desfeito: Tirar o lixo voltou para a fazer.");
    assert.equal(store.pointsByKey("calendar.casa|lixo|20261102"), null);
    r = await call("marcar_feito", { id: "calendar.casa|lixo|20261102", feito: false });
    assert.equal(r.texto, "Tirar o lixo já estava a fazer.");
    r = await call("marcar_feito", { id: "calendar.casa|lixo|20261102", quem: "beto" });
    assert.equal(r.texto, "Feita por Beto: Tirar o lixo; +10 pontos para Beto.");
    await refused("marcar_feito", { id: "calendar.casa|lixo|20261102", quem: "Carla", feito: true }, /./);
  });
  it("the person who connected: by the person of Home Assistant (its id), else the name sent, else nobody", async () => {
    const s = setup();
    let r = await s.f.chamar("marcar_feito", { id: "calendar.casa|lixo|20261102" }, { pessoa: { id: "person.ana", nome: "Ana Maria" }, cliente: "Gemini" });
    assert.equal(r.texto, "Feita por Ana: Tirar o lixo; +10 pontos para Ana.");
    assert.equal(s.store.data.score.log.at(-1).via, "Gemini");
    r = await s.f.chamar("marcar_feito", { id: "calendar.casa|cama|2026-11-02" }, { pessoa: { id: "person.beto", nome: "Beto" } });
    assert.equal(r.texto, "Feita por Beto: Arrumar a cama; volta em 04/11/2026; +5 pontos para Beto.");
    assert.equal(s.store.data.score.log.at(-1).via, "CorrerIA");
    r = await s.f.chamar("marcar_feito", { id: "calendar.casa|net|2026-11-04" }, {});
    assert.equal(r.texto, "Paga: Internet.");
    assert.equal(s.store.data.checks["calendar.casa|net|2026-11-04"].by, "CorrerIA");
  });
  it("someone out of the placar for a chore with points is refused; for a dose it is only who takes it", async () => {
    const { call, refused } = setup();
    await refused("marcar_feito", { id: "calendar.casa|lixo|20261102", quem: "Carla" }, /Carla não está no placar\. No placar: Ana, Beto\./);
    const r = await call("marcar_feito", { id: "calendar.casa|vitd|20261102T080000", quem: "Mimi" });
    assert.equal(r.texto, "Tomado: Vitamina D (Beto).");
  });
  it("a dose: taken (and the alert cleared), undone; a bill paid", async () => {
    const { call, store } = setup();
    let r = await call("marcar_feito", { id: "calendar.casa|vitd|20261102T080000" });
    assert.equal(r.texto, "Tomado: Vitamina D (Beto).");
    assert.equal(store.data.checks["calendar.casa|vitd|20261102T080000"].kind, "remedio");
    r = await call("marcar_feito", { id: "calendar.casa|vitd|20261102T080000", feito: false });
    assert.equal(r.texto, "Desfeito: Vitamina D voltou para por tomar.");
    r = await call("marcar_feito", { id: "calendar.casa|vitd|20261102T080000", feito: false });
    assert.equal(r.texto, "Vitamina D já estava por tomar.");
    r = await call("marcar_feito", { id: "calendar.casa|net|2026-11-04" });
    assert.equal(r.texto, "Paga: Internet.");
    r = await call("marcar_feito", { id: "calendar.casa|net|2026-11-04", feito: false });
    assert.equal(r.texto, "Desfeito: Internet voltou para a pagar.");
    r = await call("marcar_feito", { id: "calendar.casa|net|2026-11-04", feito: false });
    assert.equal(r.texto, "Internet já estava a pagar.");
  });
  it("a maintenance: done moves it to its next date (points); undone within 30 minutes, by either id", async () => {
    const s = setup();
    let r = await s.call("marcar_feito", { id: "calendar.casa|filtro|2026-10-30" });
    assert.equal(r.texto, "Feita: Trocar o filtro (manutenção); a próxima ficou para 02/05/2027; +30 pontos para Ana.");
    const moved = s.evs["calendar.casa"].find((e) => e.uid === "filtro");
    assert.equal(moved.start, "2027-05-02");
    r = await s.call("marcar_feito", { id: "calendar.casa|filtro|2026-10-30", feito: false });
    assert.equal(r.texto, "Desfeito: a manutenção voltou para a data de antes.");
    assert.equal(s.evs["calendar.casa"].find((e) => e.uid === "filtro").start, "2026-10-30");
    await s.call("marcar_feito", { id: "calendar.casa|filtro|2026-10-30" });
    r = await s.call("marcar_feito", { id: "calendar.casa|filtro|2027-05-02", feito: false });
    assert.equal(r.texto, "Desfeito: Trocar o filtro voltou para a data de antes.");
    await s.refused("marcar_feito", { id: "calendar.casa|filtro|2026-10-30", feito: false }, /só dá para desfazer até 30 minutos depois/);
  });
  it("a maintenance that repeats by the calendar: a check like a chore", async () => {
    const s = setup();
    s.evs["calendar.casa"].push({ uid: "piscina", summary: "Limpar a piscina", start: "2026-11-02", end: "2026-11-03", rrule: "FREQ=WEEKLY", recurrence_id: "20261102", description: "#manutenção\nA cada: 1 semana" });
    s.home.tracked.get("calendar.casa").events = s.evs["calendar.casa"];
    const r = await s.call("marcar_feito", { id: "calendar.casa|piscina|20261102" });
    assert.equal(r.texto, "Feita por Ana: Limpar a piscina.");
  });
  it("a chore that comes back N days after done: it moves; then Desfazer by the id of the resumo brings it back", async () => {
    const s = setup();
    let r = await s.call("marcar_feito", { id: "calendar.casa|cama|2026-11-02" });
    assert.equal(r.texto, "Feita por Ana: Arrumar a cama; volta em 04/11/2026; +5 pontos para Ana.");
    assert.equal(s.evs["calendar.casa"].find((e) => e.uid === "cama").start, "2026-11-04");
    // the resumo now shows it done today, with the id of the check
    const rot = JSON.parse((await s.call("resumo")).texto).rotinas_hoje.find((x) => x.nome === "Arrumar a cama");
    assert.equal(rot.situacao, "feita");
    r = await s.call("marcar_feito", { id: rot.id });
    assert.equal(r.texto, "Já estava feita: Arrumar a cama.");
    r = await s.call("marcar_feito", { id: rot.id, feito: false });
    assert.equal(r.texto, "Desfeito: Arrumar a cama volta para 02/11/2026.");
    assert.equal(s.evs["calendar.casa"].find((e) => e.uid === "cama").start, "2026-11-02");
  });
  it("the bills of the GerencIA: paid and undone there; off or not found is refused", async () => {
    const gerencia = { state: { ligado: true, contas: [{ id: "v:r1:2026-11", descricao: "Aluguel", valor: 1500, vencimento: "2026-11-05", pago: false }] } };
    const s = setup({ app: { gerencia_on: true }, gerencia });
    let r = await s.call("marcar_feito", { id: "gerencia|v:r1:2026-11" });
    assert.equal(r.texto, "Paga no GerencIA: Aluguel · R$ 1.500,00 · vence 05/11/2026.");
    r = await s.call("marcar_feito", { id: "gerencia|v:r1:2026-11", feito: false });
    assert.match(r.texto, /^Voltou para a pagar no GerencIA/);
    assert.deepEqual(s.gerencia.calls, [["pagar", { id: "v:r1:2026-11" }], ["desfazer", { id: "v:r1:2026-11" }]]);
    await s.refused("marcar_feito", { id: "gerencia|xx" }, /Conta do GerencIA não encontrada: xx/);
    s.store.setApp({ gerencia_on: null });
    await s.refused("marcar_feito", { id: "gerencia|v:r1:2026-11" }, /desligadas no CronologIA/);
  });
  it("refused: no id, an id of nothing followed", async () => {
    const { refused } = setup();
    await refused("marcar_feito", {}, /Falta o id/);
    await refused("marcar_feito", { id: "calendar.casa|nada|2026-11-02" }, /Não achei: calendar\.casa\|nada\|2026-11-02/);
    await refused("marcar_feito", { id: "Tirar o lixo" }, /Não achei/);
  });
  it("pular: a chore (no points), a dose, a maintenance; a chore that comes back N days after done goes to its next date", async () => {
    const s = setup();
    let r = await s.call("pular", { id: "calendar.casa|lixo|20261102" });
    assert.equal(r.texto, "Pulado: Tirar o lixo.");
    assert.equal(s.store.data.checks["calendar.casa|lixo|20261102"].skipped, true);
    await s.refused("pular", { id: "calendar.casa|lixo|20261102" }, /Já está pulada: Tirar o lixo\. Para desfazer, use cronologia_marcar_feito/);
    r = await s.call("marcar_feito", { id: "calendar.casa|lixo|20261102" });
    assert.match(r.texto, /^Feita por Ana/, "a skipped one can still be marked done");
    await s.refused("pular", { id: "calendar.casa|lixo|20261102" }, /Já está feita/);
    r = await s.call("pular", { id: "calendar.casa|vitd|20261102T080000" });
    assert.equal(r.texto, "Pulado: Vitamina D.");
    await s.refused("pular", { id: "calendar.casa|vitd|20261102T080000" }, /Já está pulado/);
    r = await s.call("pular", { id: "calendar.casa|cama|2026-11-02" });
    assert.equal(r.texto, "Pulado: Arrumar a cama; volta em 04/11/2026.");
    // 1.80.0: uma manutenção também: vai para a próxima vez, sem pontos nem histórico
    r = await s.call("pular", { id: "calendar.casa|filtro|2026-10-30" });
    assert.equal(r.texto, "Pulado: Trocar o filtro; volta em 30/04/2027.");
    await s.refused("pular", { id: "calendar.casa|net|2026-11-04" }, /Só rotina, manutenção ou remédio se pula; este é conta a pagar/);
    await s.refused("pular", { id: "calendar.casa|x|2026-11-04" }, /Não achei/);
    await s.refused("pular", {}, /Falta o id/);
  });
  it("a dose already taken can't be skipped", async () => {
    const s = setup();
    await s.call("marcar_feito", { id: "calendar.casa|vitd|20261102T080000" });
    await s.refused("pular", { id: "calendar.casa|vitd|20261102T080000" }, /Já está tomado/);
  });
});

describe("dar_pontos", () => {
  it("points by hand (or taken), a demerit of the list, with who did it and where from in the Extrato", async () => {
    const { call, store } = setup();
    let r = await call("dar_pontos", { quem: "Beto", pontos: 15, motivo: "Lavou o carro" });
    assert.equal(r.texto, "+15 pontos para Beto: Lavou o carro.");
    r = await call("dar_pontos", { quem: "Ana", pontos: -1, motivo: "Esqueceu a luz acesa" });
    assert.equal(r.texto, "−1 ponto para Ana: Esqueceu a luz acesa.");
    r = await call("dar_pontos", { quem: "Beto", demerito: "toalha" });
    assert.equal(r.texto, "Demérito para Beto: Toalha molhada (−5 pontos).");
    assert.deepEqual(store.data.score.entries.map((e) => [e.who, e.points, e.kind]), [["Beto", 15, "extra"], ["Ana", -1, "extra"], ["Beto", -5, "demerito"]]);
    assert.ok(store.data.score.log.every((l) => l.via === "Claude" && l.by === "Ana"));
  });
  it("refused: the placar off, someone out of it, both or neither, zero or too many points, no reason, a demerit not in the list", async () => {
    let s = setup({ app: { score: { enabled: false, participants: [] } } });
    await s.refused("dar_pontos", { quem: "Ana", pontos: 1, motivo: "x" }, /placar está desligado/);
    s = setup({ app: { demerits: [] } });
    await s.refused("dar_pontos", { quem: "Carla", pontos: 1, motivo: "x" }, /Carla não está no placar\. No placar: Ana, Beto/);
    await s.refused("dar_pontos", { quem: "", pontos: 1, motivo: "x" }, /\(vazio\) não está no placar/);
    await s.refused("dar_pontos", { quem: "Ana" }, /um dos dois/);
    await s.refused("dar_pontos", { quem: "Ana", pontos: 1, demerito: "x" }, /um dos dois/);
    await s.refused("dar_pontos", { quem: "Ana", pontos: 0, motivo: "x" }, /sem ser zero/);
    await s.refused("dar_pontos", { quem: "Ana", pontos: 5000, motivo: "x" }, /-1000 a 1000/);
    await s.refused("dar_pontos", { quem: "Ana", pontos: 5 }, /Diga o motivo/);
    await s.refused("dar_pontos", { quem: "Ana", demerito: "x" }, /Nenhum demérito cadastrado/);
    s = setup();
    await s.refused("dar_pontos", { quem: "Ana", demerito: "grito" }, /Demérito não encontrado: grito\. Os deméritos: Toalha molhada \(5 pontos\)/);
  });
  it("on vacation the points rest (the rule of the app, said as a wrong call)", async () => {
    const s = setup({ app: { away: { from: "2026-11-01", to: "2026-11-05" } } });
    await s.refused("dar_pontos", { quem: "Ana", pontos: 5, motivo: "x" }, /De férias: os pontos estão pausados/);
    await s.refused("dar_pontos", { quem: "Ana", demerito: "Toalha" }, /De férias: os deméritos estão pausados/);
  });
});

describe("errors of Home Assistant", () => {
  it("a calendar that refuses (not_supported) is a wrong call; a failure of Home Assistant is not (500 in the server)", async () => {
    const s = setup();
    s.ha.fail = (m) => m.type === "calendar/event/update";
    s.ha.failCode = "not_supported";
    s.ha.failMessage = "Calendar does not support this service";
    await s.refused("marcar_feito", { id: "calendar.casa|filtro|2026-10-30" }, /does not support/);
    s.ha.failCode = "home_assistant_error";
    await assert.rejects(s.call("marcar_feito", { id: "calendar.casa|filtro|2026-10-30" }), (err) => !err.status && /falhou|support/.test(err.message));
  });
});
