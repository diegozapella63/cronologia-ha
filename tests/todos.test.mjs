// todos.js: the to-do lists of Home Assistant (ResolvIA), followed live, the
// ResolvIA integration file (points, repetition, rooms, equipment) and the index.
import { at, isoLocal, makeLog, flushPromises } from "./helpers.mjs";
import { describe, it, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import { Todos, taskKey, TODO_F } from "../cronologia/rootfs/app/lib/todos.js";

const NOW = at(2026, 11, 2, 14, 0).getTime();
const ALL = 127; // every feature
afterEach(() => mock.timers.reset());

/** A fake Home Assistant: records what was sent and the subscriptions. */
function fakeHA({ subscribeError = null, list = {} } = {}) {
  const ha = { sent: [], subs: [] };
  ha.send = async (msg) => {
    ha.sent.push(msg);
    if (msg.type === "todo/item/list") return { items: list[msg.entity_id] || [] };
    return null;
  };
  ha.subscribe = (msg, onEvent, onError) => {
    const sub = { msg, onEvent, onError, unsubscribed: false };
    ha.subs.push(sub);
    if (subscribeError) setImmediate(() => onError(subscribeError));
    return { unsubscribe: () => (sub.unsubscribed = true) };
  };
  return ha;
}

const state = (name, features = ALL, st = "3") => ({ state: st, attributes: { friendly_name: name, supported_features: features } });

/** The ResolvIA integration file. */
const appFile = (extra = {}) => ({
  app: "ResolvIA",
  versao: "2.29.0",
  gravado_em: new Date(NOW - 10 * 60000).toISOString(),
  pontos: { "todo.casa": { "passar pano na casa": 15, "trocar a lampada da varanda": 5, "pagar o ipva": "x" } },
  repete: { "todo.casa": { t1: 7, t2: "2", t3: 0, t4: 9999 } },
  comodos: { lista: [{ id: "sala", nome: "Sala" }, { id: "coz", nome: "Cozinha" }, { id: "bad id!", nome: "X" }], tarefas: { "todo.casa": { "passar pano na casa": "sala", "trocar a lampada da varanda": "nao-existe", "limpeza geral": ["coz", "sala", "coz", "bad id!"] } } },
  equipamentos: { lista: [{ id: "geladeira", nome: "Geladeira", comodo: "Cozinha" }, { id: "ar", nome: "Ar-condicionado" }], tarefas: { "todo.casa": { "limpar a geladeira": "geladeira", "limpar o ar": "ar", "limpeza geral": ["geladeira", "ar", "sumiu"] } } },
  sem_prazo: ["todo.compras", "nao-e-lista"],
  ...extra,
});

function make({ app = appFile(), ha = fakeHA() } = {}) {
  const changes = [];
  const t = new Todos({ ha, log: makeLog(), onChange: () => changes.push(1), readApp: app === null ? null : () => (typeof app === "function" ? app() : app) });
  return { t, ha, changes };
}

describe("taskKey", () => {
  it("is how the ResolvIA keys a task: folded, single spaces", () => {
    assert.equal(taskKey("  Trocar a   Lâmpada da Varanda "), "trocar a lampada da varanda");
    assert.equal(taskKey(""), "");
  });
});

describe("Todos: following the lists", () => {
  it("a list that appears is subscribed; its items come from the events", () => {
    const { t, ha, changes } = make();
    t.setState("todo.casa", state("Casa"));
    assert.equal(ha.subs.length, 1);
    assert.deepEqual(ha.subs[0].msg, { type: "todo/item/subscribe", entity_id: "todo.casa" });
    ha.subs[0].onEvent({ items: [{ uid: "a", summary: "x", status: "needs_action" }] });
    assert.equal(t.items.get("todo.casa").length, 1);
    assert.equal(changes.length, 1);
    ha.subs[0].onEvent(null);
    assert.deepEqual(t.items.get("todo.casa"), []);
  });
  it("other entities are ignored; a list is followed once", () => {
    const { t, ha } = make();
    t.setState("calendar.casa", state("x"));
    t.setState("todo.Casa", state("x"));
    t.setState("todo.casa", state("Casa"));
    t.setState("todo.casa", state("Casa 2"));
    assert.equal(ha.subs.length, 1);
    assert.equal(t.states.get("todo.casa").attributes.friendly_name, "Casa 2");
  });
  it("a list that goes away is unsubscribed and its items dropped", () => {
    const { t, ha, changes } = make();
    t.setState("todo.casa", state("Casa"));
    ha.subs[0].onEvent({ items: [{ uid: "a" }] });
    t.setState("todo.casa", null);
    assert.equal(ha.subs[0].unsubscribed, true);
    assert.equal(t.items.has("todo.casa"), false);
    assert.equal(t.subs.has("todo.casa"), false);
    assert.equal(changes.length, 2);
  });
  it("older Home Assistant (no todo/item/subscribe): reads the list now and every 2 minutes", async () => {
    mock.timers.enable({ apis: ["setInterval"] });
    const ha = fakeHA({ subscribeError: { code: "unknown_command", message: "Unknown command." }, list: { "todo.casa": [{ uid: "a", summary: "x" }] } });
    const { t, changes } = make({ ha });
    t.setState("todo.casa", state("Casa"));
    await flushPromises();
    assert.equal(ha.sent.filter((m) => m.type === "todo/item/list").length, 1);
    assert.equal(t.items.get("todo.casa").length, 1);
    assert.ok(changes.length >= 1);
    mock.timers.tick(120000);
    await flushPromises();
    assert.equal(ha.sent.filter((m) => m.type === "todo/item/list").length, 2);
    // refresh() after a change made here reads it again right away
    t.refresh("todo.casa");
    await flushPromises();
    assert.equal(ha.sent.filter((m) => m.type === "todo/item/list").length, 3);
    // gone: the polling stops
    t.setState("todo.casa", null);
    mock.timers.tick(240000);
    await flushPromises();
    assert.equal(ha.sent.filter((m) => m.type === "todo/item/list").length, 3);
  });
  it("refresh() does nothing on a live (subscribed) list", async () => {
    const { t, ha } = make();
    t.setState("todo.casa", state("Casa"));
    t.refresh("todo.casa");
    t.refresh("todo.nada");
    await flushPromises();
    assert.equal(ha.sent.length, 0);
  });
  it("another subscription error is only logged", async () => {
    const ha = fakeHA({ subscribeError: { code: "not_found", message: "nope" } });
    const t = new Todos({ ha, log: makeLog(), onChange: () => {} });
    t.setState("todo.casa", state("Casa"));
    await flushPromises();
    assert.equal(t.log.lines[0][0], "warn");
    assert.equal(ha.sent.length, 0);
  });
});

describe("Todos: the ResolvIA integration file", () => {
  it("is read when it is the ResolvIA and recent; cached for a minute", () => {
    let reads = 0;
    const { t } = make({
      app: () => {
        reads++;
        return appFile();
      },
    });
    const a = t.app(NOW);
    assert.equal(a.versao, "2.29.0");
    assert.equal(a.prazos, true);
    assert.deepEqual(a.semPrazo, ["todo.compras"]);
    assert.deepEqual(
      a.comodos.lista.map((c) => c.id),
      ["sala", "coz"],
      "ids that are not safe are dropped",
    );
    assert.deepEqual(a.equipamentos.lista[0], { id: "geladeira", nome: "Geladeira", comodo: "Cozinha" });
    assert.deepEqual(a.equipamentos.lista[1], { id: "ar", nome: "Ar-condicionado" });
    t.app(NOW + 59000);
    assert.equal(reads, 1);
    t.app(NOW + 61000);
    assert.equal(reads, 2);
  });
  it("the ResolvIA by its id too (the start of integracao.json the same in every app: app, nome, versao, gravado_em)", () => {
    assert.ok(make({ app: appFile({ app: "resolvia", nome: "ResolvIA" }) }).t.app(NOW), "the id of the next versions");
    assert.ok(make({ app: appFile({ nome: "ResolvIA" }) }).t.app(NOW), "the name of before");
  });
  it("an old file (over 2 hours), another app or no file means no ResolvIA", () => {
    assert.equal(make({ app: appFile({ gravado_em: new Date(NOW - 2 * 3600000 - 1000).toISOString() }) }).t.app(NOW), null);
    assert.equal(make({ app: appFile({ app: "GerencIA" }) }).t.app(NOW), null);
    assert.equal(make({ app: appFile({ gravado_em: "ontem" }) }).t.app(NOW), null);
    assert.equal(
      make({
        app: () => {
          throw new Error("ENOENT");
        },
      }).t.app(NOW),
      null,
    );
    assert.equal(make({ app: null }).t.app(NOW), null);
  });
  it("prazos false when Controlar prazos is off there; rooms null when not used", () => {
    const a = make({ app: appFile({ prazos: false, comodos: { lista: [] }, equipamentos: null }) }).t.app(NOW);
    assert.equal(a.prazos, false);
    assert.equal(a.comodos, null);
    assert.equal(a.equipamentos, null);
  });
  it("donos (ResolvIA 2.42.0): whose each list is, checked; null when the ResolvIA doesn't say", () => {
    const a = make({ app: appFile({ donos: { "todo.casa": "  Ana ", "todo.x": "", "light.y": "Beto", "todo.trabalho": "B".repeat(90) } }) }).t.app(NOW);
    assert.deepEqual(a.donos, { "todo.casa": "Ana", "todo.trabalho": "B".repeat(80) });
    assert.equal(make({ app: appFile({}) }).t.app(NOW).donos, null);
    assert.equal(make({ app: appFile({ donos: ["todo.casa"] }) }).t.app(NOW).donos, null);
    assert.deepEqual(make({ app: appFile({ donos: {} }) }).t.app(NOW).donos, {}, "none chosen there: everyone's (it still wins)");
  });
  it("pointsOf: by the folded name, positive, at most 1000", () => {
    const { t } = make({ app: appFile({ pontos: { "todo.casa": { "passar pano na casa": 15, grande: 5000, neg: -3, frac: 2.4 } } }) });
    const app = t.app(NOW);
    assert.equal(t.pointsOf("todo.casa", "Passar  pano na CASA", app), 15);
    assert.equal(t.pointsOf("todo.casa", "grande", app), 1000);
    assert.equal(t.pointsOf("todo.casa", "neg", app), 0);
    assert.equal(t.pointsOf("todo.casa", "frac", app), 2);
    assert.equal(t.pointsOf("todo.casa", "outra", app), 0);
    assert.equal(t.pointsOf("todo.outra", "grande", app), 0);
    assert.equal(t.pointsOf("todo.casa", "grande", null), 0);
  });
  it("roomOf / equipOf: by the folded task name; unknown ids give null", () => {
    const { t } = make();
    const app = t.app(NOW);
    assert.deepEqual(t.roomOf("todo.casa", "Passar pano na casa", app), { id: "sala", nome: "Sala" });
    assert.equal(t.roomOf("todo.casa", "Trocar a lâmpada da varanda", app), null, "the id is not in the list");
    assert.equal(t.roomOf("todo.outra", "Passar pano na casa", app), null);
    assert.deepEqual(t.equipOf("todo.casa", "Limpar a Geladeira", app), { id: "geladeira", nome: "Geladeira", comodo: "Cozinha" });
    assert.deepEqual(t.equipOf("todo.casa", "limpar o ar", app), { id: "ar", nome: "Ar-condicionado", comodo: "" });
    assert.equal(t.equipOf("todo.casa", "x", null), null);
  });
  it("roomsOf / equipsOf (ResolvIA 2.31): several items, so several rooms; a list or one id; unknown and invalid ids left out", () => {
    const { t } = make();
    const app = t.app(NOW);
    assert.deepEqual(t.roomsOf("todo.casa", "Limpeza geral", app), [{ id: "coz", nome: "Cozinha" }, { id: "sala", nome: "Sala" }]);
    assert.deepEqual(t.equipsOf("todo.casa", "Limpeza geral", app).map((e) => e.id), ["geladeira", "ar"]);
    assert.deepEqual(t.roomOf("todo.casa", "Limpeza geral", app), { id: "coz", nome: "Cozinha" }, "roomOf: the first");
    assert.deepEqual(t.equipsOf("todo.casa", "Limpar o ar", app).map((e) => e.id), ["ar"], "one id: a list of one");
    assert.deepEqual(t.roomsOf("todo.casa", "nada", app), []);
  });
});

describe("Todos: index (Tarefas com prazo)", () => {
  const items = () => [
    { uid: "t1", summary: "Passar pano na casa", status: "needs_action", due: "2026-11-02" },
    { uid: "t2", summary: "Pagar o IPVA", status: "needs_action", due: "2026-10-31", description: "Parcela única" },
    { uid: "t3", summary: "Levar o carro", status: "needs_action", due: isoLocal(at(2026, 11, 2, 17, 30)) },
    { uid: "t4", summary: "Reunião passada", status: "needs_action", due: isoLocal(at(2026, 11, 2, 9)) },
    { uid: "t5", summary: "Feita ontem", status: "completed", due: "2026-11-01" },
    { uid: "t6", summary: "Feita há uma semana", status: "completed", due: "2026-10-26" },
    { uid: "t7", summary: "Muito antiga", status: "needs_action", due: "2026-08-01" },
    { uid: "t8", summary: "Muito longe", status: "needs_action", due: "2027-02-01" },
    { uid: "t9", summary: "Sem prazo", status: "needs_action" },
    { summary: "Sem uid", status: "needs_action", due: "2026-11-02" },
  ];
  const setup = (opts) => {
    const { t, ha } = make(opts);
    t.setState("todo.casa", state("Casa"));
    ha.subs[0].onEvent({ items: items() });
    return { t, ha };
  };

  it("lists and items around today, with overdue, days and the ResolvIA data", () => {
    const { t } = setup();
    const ix = t.index(NOW);
    assert.equal(ix.today, "2026-11-02");
    assert.deepEqual(ix.lists, [{ id: "todo.casa", name: "Casa", features: ALL, info: null, open: 8, due: 7, overdue: 3, hidden: false, unavailable: false }]);
    assert.deepEqual(
      ix.items.map((i) => i.uid),
      ["t2", "t5", "t1", "t4", "t3"],
    );
    const by = Object.fromEntries(ix.items.map((i) => [i.uid, i]));
    assert.equal(by.t2.overdue, true);
    assert.equal(by.t2.days, -2);
    assert.equal(by.t2.description, "Parcela única");
    assert.equal(by.t1.overdue, false, "a date-only due is late only from the next day");
    assert.equal(by.t1.days, 0);
    assert.equal(by.t1.points, 15);
    assert.deepEqual(by.t1.room, { id: "sala", nome: "Sala" });
    assert.equal(by.t1.every, 7);
    assert.equal(by.t4.overdue, true, "a due time already passed");
    assert.equal(by.t4.allDay, false);
    assert.equal(by.t3.overdue, false);
    assert.equal(by.t5.done, true);
    assert.equal(by.t5.overdue, false);
    assert.equal(by.t1.key, "todo|todo.casa|t1");
    assert.equal(by.t1.listName, "Casa");
    assert.deepEqual(ix.app, { versao: "2.29.0", prazos: true, comodos: [{ id: "sala", nome: "Sala" }, { id: "coz", nome: "Cozinha" }], equipamentos: [{ id: "geladeira", nome: "Geladeira", comodo: "Cozinha" }, { id: "ar", nome: "Ar-condicionado" }], donos: null });
  });
  it("repetition from the ResolvIA: positive days, at most 3650", () => {
    const { t, ha } = make();
    t.setState("todo.casa", state("Casa"));
    ha.subs[0].onEvent({ items: ["t1", "t2", "t3", "t4"].map((uid) => ({ uid, summary: uid, status: "needs_action", due: "2026-11-03" })) });
    const by = Object.fromEntries(t.index(NOW).items.map((i) => [i.uid, i.every]));
    assert.deepEqual(by, { t1: 7, t2: 2, t3: null, t4: 3650 });
  });
  it("same due: the most frequent first, then by name (numeric)", () => {
    const { t, ha } = make({ app: appFile({ repete: { "todo.casa": { a: 7, b: 1 } } }) });
    t.setState("todo.casa", state("Casa"));
    ha.subs[0].onEvent({
      items: [
        { uid: "c", summary: "Tarefa 10", status: "needs_action", due: "2026-11-03" },
        { uid: "d", summary: "Tarefa 9", status: "needs_action", due: "2026-11-03" },
        { uid: "a", summary: "Semanal", status: "needs_action", due: "2026-11-03" },
        { uid: "b", summary: "Diária", status: "needs_action", due: "2026-11-03" },
      ],
    });
    assert.deepEqual(
      t.index(NOW).items.map((i) => i.summary),
      ["Diária", "Semanal", "Tarefa 9", "Tarefa 10"],
    );
  });
  it("a hidden list is counted but its items are left out", () => {
    const { t } = setup();
    const ix = t.index(NOW, ["todo.casa"]);
    assert.equal(ix.lists[0].hidden, true);
    assert.equal(ix.items.length, 0);
  });
  it("tasks kept by Levar para o ResolvIA are left out", () => {
    const { t } = setup();
    const ix = t.index(NOW, [], { exclude: new Set(["todo.casa|t1", "todo.casa|t2"]) });
    assert.deepEqual(
      ix.items.map((i) => i.uid),
      ["t5", "t4", "t3"],
    );
    assert.equal(ix.lists[0].open, 6);
  });
  it("a list without due dates gives its dates from the integration: never deadlines (info: integracao)", () => {
    const { t, ha } = make();
    t.setState("todo.problemas", state("Problem List", TODO_F.CREATE | TODO_F.UPDATE));
    ha.subs[0].onEvent({ items: [{ uid: "p1", summary: "Sem resposta", status: "needs_action", due: "2026-10-30" }] });
    const ix = t.index(NOW);
    assert.equal(ix.lists[0].info, "integracao");
    assert.equal(ix.lists[0].due, 0);
    assert.equal(ix.lists[0].overdue, 0);
    assert.equal(ix.items.length, 0);
  });
  it("a list with deadlines turned off in the ResolvIA (sem_prazo): info resolvia", () => {
    const { t, ha } = make();
    t.setState("todo.compras", state("Compras"));
    ha.subs[0].onEvent({ items: [{ uid: "c1", summary: "Café", status: "needs_action", due: "2026-11-01" }] });
    const ix = t.index(NOW);
    assert.equal(ix.lists[0].info, "resolvia");
    assert.equal(ix.items.length, 0);
    // but the pending ones show without a due date in Agora
    const und = t.index(NOW, [], { undated: true });
    assert.equal(und.items.length, 1);
    assert.equal(und.items[0].undated, true);
    assert.equal(und.items[0].due, null);
  });
  it("undated: pending tasks without a due date come after the dated ones, at most 60", () => {
    const { t, ha } = make();
    t.setState("todo.casa", state("Casa"));
    t.setState("todo.alpha", state("Alpha"));
    const many = Array.from({ length: 70 }, (_, i) => ({ uid: `u${i}`, summary: `Item ${i}`, status: "needs_action" }));
    ha.subs[0].onEvent({ items: [{ uid: "d", summary: "Com prazo", status: "needs_action", due: "2026-11-04" }, { uid: "x", summary: "Feita", status: "completed" }, ...many] });
    ha.subs[1].onEvent({ items: [{ uid: "a1", summary: "Zeta", status: "needs_action" }] });
    const ix = t.index(NOW, [], { undated: true });
    assert.equal(ix.items[0].summary, "Com prazo");
    const undated = ix.items.filter((i) => i.undated);
    assert.equal(undated.length, 60);
    assert.equal(undated[0].listName, "Alpha", "undated ones are grouped by list name");
    assert.ok(!undated.some((i) => i.summary === "Feita"));
    assert.deepEqual(
      ix.lists.map((l) => l.name),
      ["Alpha", "Casa"],
    );
  });
  it("an unavailable list says so; without the ResolvIA app is null", () => {
    const { t } = make({ app: null });
    t.setState("todo.casa", state("Casa", ALL, "unavailable"));
    const ix = t.index(NOW);
    assert.equal(ix.lists[0].unavailable, true);
    assert.equal(ix.app, null);
  });
  it("summaryOf finds the name of an item", () => {
    const { t } = setup();
    assert.equal(t.summaryOf("todo.casa", "t2"), "Pagar o IPVA");
    assert.equal(t.summaryOf("todo.casa", "nope"), "");
    assert.equal(t.summaryOf("todo.nada", "t2"), "");
  });
});

describe("Todos: add and setDone", () => {
  const code = async (p) => {
    try {
      await p;
    } catch (e) {
      return e.code;
    }
    return null;
  };
  const ready = (features = ALL) => {
    const { t, ha } = make();
    t.setState("todo.casa", state("Casa", features));
    return { t, ha };
  };
  it("add with a due date, a due time and notes", async () => {
    const { t, ha } = ready();
    await t.add("todo.casa", { summary: "  Comprar presente ", date: "2026-11-06", description: " Ana " });
    await t.add("todo.casa", { summary: "Ligar", date: "2026-11-06", time: "09:30" });
    await t.add("todo.casa", { summary: "Sem data" });
    assert.deepEqual(
      ha.sent.map((m) => m.service_data),
      [{ item: "Comprar presente", due_date: "2026-11-06", description: "Ana" }, { item: "Ligar", due_datetime: "2026-11-06 09:30:00" }, { item: "Sem data" }],
    );
    assert.deepEqual(ha.sent[0].target, { entity_id: "todo.casa" });
    assert.equal(ha.sent[0].service, "add_item");
    assert.equal(ha.sent[0].domain, "todo");
  });
  it("add refuses what the list can't take", async () => {
    assert.equal(await code(ready().t.add("todo.nada", { summary: "x" })), "invalid_format");
    assert.equal(await code(ready(TODO_F.UPDATE).t.add("todo.casa", { summary: "x" })), "not_supported");
    assert.equal(await code(ready().t.add("todo.casa", { summary: "   " })), "invalid_format");
    assert.equal(await code(ready().t.add("todo.casa", { summary: "x", date: "06/11/2026" })), "invalid_format");
    assert.equal(await code(ready().t.add("todo.casa", { summary: "x", date: "2026-11-06", time: "9h" })), "invalid_format");
    assert.equal(await code(ready(TODO_F.CREATE | TODO_F.DUE_DATE).t.add("todo.casa", { summary: "x", date: "2026-11-06", time: "09:00" })), "not_supported");
    assert.equal(await code(ready(TODO_F.CREATE | TODO_F.DUE_DATETIME).t.add("todo.casa", { summary: "x", date: "2026-11-06" })), "not_supported");
  });
  it("notes only go when the list takes a description; the name is cut at 255", async () => {
    const { t, ha } = ready(TODO_F.CREATE);
    await t.add("todo.casa", { summary: "x".repeat(300), description: "nota" });
    assert.deepEqual(Object.keys(ha.sent[0].service_data), ["item"]);
    assert.equal(ha.sent[0].service_data.item.length, 255);
  });
  it("setDone sends update_item with the status", async () => {
    const { t, ha } = ready();
    await t.setDone("todo.casa", "t1", true);
    await t.setDone("todo.casa", "t1", false);
    assert.deepEqual(
      ha.sent.map((m) => [m.service, m.service_data]),
      [
        ["update_item", { item: "t1", status: "completed" }],
        ["update_item", { item: "t1", status: "needs_action" }],
      ],
    );
    assert.equal(await code(t.setDone("todo.nada", "t1", true)), "invalid_format");
    assert.equal(await code(t.setDone("todo.casa", "", true)), "invalid_format");
    assert.equal(await code(t.setDone("todo.casa", 5, true)), "invalid_format");
  });
});
