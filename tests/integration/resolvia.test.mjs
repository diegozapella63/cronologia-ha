// Integration: the ResolvIA side — to-do lists with deadlines, the ResolvIA
// integration file (points, rooms, equipment), Novo › Tarefa with room/equipment
// (resolvia_comodo), points from cronologia_pontos, Levar para o ResolvIA (the
// maintenance kept as tasks, concluded there = done here) and Trazer do ResolvIA.
import { startStack, day, waitFor } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

let stack;
let c;
let h;
const resolviaFile = () => ({
  app: "ResolvIA",
  versao: "2.29.0",
  gravado_em: new Date().toISOString(),
  pontos: { "todo.casa": { "passar pano na casa": 15, "trocar a lampada da varanda": 5 } },
  repete: { "todo.casa": { "todo-1": 7 }, "todo.trabalho": { "todo-8": 14 } },
  comodos: {
    lista: [
      { id: "sala", nome: "Sala" },
      { id: "varanda", nome: "Varanda" },
      { id: "cozinha", nome: "Cozinha" },
    ],
    tarefas: { "todo.casa": { "trocar a lampada da varanda": "varanda" } },
  },
  equipamentos: {
    lista: [
      { id: "lampada-varanda", nome: "Lâmpada", comodo: "Varanda" },
      { id: "filtro", nome: "Filtro de água", comodo: "Cozinha" },
    ],
    tarefas: { "todo.casa": { "trocar a lampada da varanda": "lampada-varanda" } },
  },
});

before(async () => {
  stack = await startStack({ share: { "resolvia/integracao.json": resolviaFile() } });
  c = await stack.client();
  h = await stack.home(c);
  await c.call("cronologia/prefs/set_app", { prefs: { score: { enabled: true, participants: ["Diego", "Andressa"] } } });
  await h.wait((x) => x.score.enabled && x.todos.lists.length === 4 && x.maint.length >= 4, "the lists and the placar");
});
after(async () => {
  if (stack) await stack.stop();
});

const fired = (type) =>
  stack.fake.lines
    .filter((l) => l.startsWith(`fired ${type} `))
    .map((l) => JSON.parse(l.slice(`fired ${type} `.length)));
const entry = (ix, key) => ix.score.entries.find((e) => e.key === key);

describe("to-do lists in Agora", () => {
  it("lists, tasks with a deadline, and the room, equipment and points from the ResolvIA", () => {
    const t = h.latest.todos;
    assert.deepEqual(
      t.lists.map((l) => l.name),
      ["Casa", "Lista de compras", "Problem List", "Trabalho"],
    );
    const lamp = t.items.find((i) => i.summary === "Trocar a lâmpada da varanda");
    assert.equal(lamp.due, day(1));
    assert.deepEqual(lamp.room, { id: "varanda", nome: "Varanda" });
    assert.deepEqual(lamp.equip, { id: "lampada-varanda", nome: "Lâmpada", comodo: "Varanda" });
    assert.equal(lamp.points, 5);
    const ipva = t.items.find((i) => i.summary === "Pagar o IPVA");
    assert.equal(ipva.overdue, true);
    assert.equal(ipva.days, -2);
    assert.equal(t.items.find((i) => i.summary === "Relatório mensal").done, true);
    assert.equal(t.app.versao, "2.29.0");
    assert.deepEqual(
      t.app.comodos.map((x) => x.id),
      ["sala", "varanda", "cozinha"],
    );
    assert.equal(t.items.some((i) => i.summary === "Passar pano na casa"), false, "no deadline: not listed unless asked");
  });
  it("Agora › tasks without a deadline when turned on, the frequent ones first", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { todo_undated: true } });
    const ix = await h.wait((x) => x.todos.items.some((i) => i.undated), "the undated tasks");
    const und = ix.todos.items.filter((i) => i.undated);
    assert.equal(und[0].summary, "Passar pano na casa", "repeats every 7 days in the ResolvIA");
    assert.equal(und[0].every, 7);
    assert.equal(und[0].points, 15);
    assert.ok(und.some((i) => i.summary === "Café"));
    await c.call("cronologia/prefs/set_app", { prefs: { todo_undated: false, todo_hidden: ["todo.problem_list"] } });
    const hidden = await h.wait((x) => !x.todos.items.some((i) => i.undated || i.list === "todo.problem_list"), "hidden list");
    assert.equal(hidden.todos.lists.find((l) => l.id === "todo.problem_list").hidden, true);
  });
});

describe("Novo › Tarefa", () => {
  it("adds the task with a due date and notes, and tells the ResolvIA its room and equipment", async () => {
    await c.call("cronologia/todo/add", { entity_id: "todo.casa", task: { summary: "Limpar o filtro", date: day(3), description: "Com vinagre", room: "cozinha", equip: "filtro" } });
    const items = await stack.todoItems("todo.casa");
    const it = items.find((i) => i.summary === "Limpar o filtro");
    assert.deepEqual([it.due, it.description, it.status], [day(3), "Com vinagre", "needs_action"]);
    const ev = await waitFor(() => fired("resolvia_comodo").find((e) => e.tarefa === "Limpar o filtro"), { what: "resolvia_comodo" });
    assert.deepEqual(ev, { entity_id: "todo.casa", tarefa: "Limpar o filtro", origem: "CronologIA", comodo: "cozinha", equipamento: "filtro" });
    await h.wait((x) => x.todos.items.some((i) => i.summary === "Limpar o filtro"), "the new task in Agora");
  });
  it("several rooms (without equipment) go as a list", async () => {
    await c.call("cronologia/todo/add", { entity_id: "todo.casa", task: { summary: "Encerar o chão", rooms: ["cozinha", "sala", "cozinha"] } });
    const ev = await waitFor(() => fired("resolvia_comodo").find((e) => e.tarefa === "Encerar o chão"), { what: "resolvia_comodo" });
    assert.deepEqual(ev, { entity_id: "todo.casa", tarefa: "Encerar o chão", origem: "CronologIA", comodo: ["cozinha", "sala"] });
  });
  it("a time makes it a due datetime; no room means no event; bad input is refused", async () => {
    const before = fired("resolvia_comodo").length;
    await c.call("cronologia/todo/add", { entity_id: "todo.trabalho", task: { summary: "Ligar para o cliente", date: day(2), time: "09:30", room: "sala com espaço" } });
    const it = (await stack.todoItems("todo.trabalho")).find((i) => i.summary === "Ligar para o cliente");
    assert.match(it.due, new RegExp(`^${day(2)}T09:30:00-03:00$`));
    await new Promise((r) => setTimeout(r, 200));
    assert.equal(fired("resolvia_comodo").length, before, "an id that is not safe is not sent");
    await assert.rejects(c.call("cronologia/todo/add", { entity_id: "todo.casa", task: { summary: "  " } }), { code: "invalid_format" });
    await assert.rejects(c.call("cronologia/todo/add", { entity_id: "todo.nada", task: { summary: "x" } }), { code: "invalid_format" });
    await assert.rejects(c.call("cronologia/todo/add", { entity_id: "todo.casa", task: { summary: "x", date: "amanhã" } }), { code: "invalid_format" });
  });
});

describe("points of the ResolvIA tasks", () => {
  it("marking a task done here gives its ResolvIA points to the person (same key as the ResolvIA)", async () => {
    const out = await c.call("cronologia/todo/set", { entity_id: "todo.casa", uid: "todo-1", done: true });
    assert.deepEqual(out, { key: `resolvia|todo.casa|todo-1|${day(0)}`, who: "Diego", points: 15 });
    assert.equal((await stack.todoItems("todo.casa")).find((i) => i.uid === "todo-1").status, "completed");
    await h.wait((x) => entry(x, out.key), "the points");
    await c.call("cronologia/todo/set", { entity_id: "todo.casa", uid: "todo-1", done: false });
    await h.wait((x) => !entry(x, out.key), "the points taken back");
    assert.equal((await stack.todoItems("todo.casa")).find((i) => i.uid === "todo-1").status, "needs_action");
    assert.equal(await c.call("cronologia/todo/set", { entity_id: "todo.trabalho", uid: "todo-7", done: true }), null, "no points for it");
  });
  it("cronologia_pontos from the ResolvIA: somar, trocar, desfazer", async () => {
    const key = `resolvia|todo.trabalho|todo-7|${day(0)}`;
    await stack.fire("cronologia_pontos", { acao: "somar", chave: key, quem: "andressa", pontos: 8, titulo: "Revisar contrato" });
    let ix = await h.wait((x) => entry(x, key), "somar");
    assert.deepEqual([entry(ix, key).who, entry(ix, key).points, entry(ix, key).kind], ["Andressa", 8, "tarefa"]);
    const line = ix.score.log.find((l) => l.key === key);
    assert.equal(line.via, "ResolvIA");
    await stack.fire("cronologia_pontos", { acao: "trocar", chave: key, quem: "Diego" });
    ix = await h.wait((x) => entry(x, key) && entry(x, key).who === "Diego", "trocar");
    await stack.fire("cronologia_pontos", { acao: "desfazer", chave: key });
    await h.wait((x) => !entry(x, key), "desfazer");
  });
});

describe("Levar para o ResolvIA", () => {
  const LIST = "todo.shopping_list";
  const marked = async () => (await stack.todoItems(LIST)).filter((i) => /\[cr:[0-9a-f]{8}\]/.test(i.description || ""));
  it("every maintenance becomes a task with its due date, points and a marker; the Tarefas card leaves them out", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { mirror: { list: LIST, maint: true, routine: false } } });
    const tasks = await waitFor(async () => {
      const m = await marked();
      return m.length === 4 && m;
    }, { what: "4 maintenance tasks in the list", timeout: 10000 });
    const filtro = tasks.find((t) => t.summary === "Trocar o filtro de água");
    assert.equal(filtro.due, day(5));
    assert.match(filtro.description, /Manutenção do CronologIA · \+30 pontos \[cr:[0-9a-f]{8}\]$/);
    const ix = await h.wait((x) => x.mirror && x.mirror.count === 4, "the mirror status");
    assert.equal(ix.mirror.problem, null);
    assert.equal(ix.todos.items.some((i) => /\[cr:/.test(i.description)), false);
    const share = await waitFor(() => {
      const j = JSON.parse(fs.readFileSync(path.join(stack.dirs.share, "cronologia", "integracao.json"), "utf8"));
      return j.espelho[LIST] && Object.keys(j.espelho[LIST]).length === 4 && j;
    }, { what: "the espelho in the integration file" });
    assert.deepEqual(share.espelho[LIST][filtro.uid], { pontos: 30, tipo: "manutencao" });
    const links = await waitFor(() => fired("resolvia_comodo").find((e) => e.tarefa === "Trocar o filtro de água"), { what: "the maintenance's room sent" });
    assert.deepEqual(links, { entity_id: LIST, tarefa: "Trocar o filtro de água", origem: "CronologIA", comodo: null, equipamento: null });
  });
  it("concluded in the ResolvIA (who comes in cronologia_pontos): done here, points to her, back with the next date", async () => {
    const filtro = (await marked()).find((t) => t.summary === "Trocar o filtro de água");
    const m = h.latest.maint.find((x) => x.summary === "Trocar o filtro de água");
    await stack.todoChange(LIST, "update_item", { item: filtro.uid, status: "completed" });
    await stack.fire("cronologia_pontos", { acao: "somar", chave: `espelho|${LIST}|${filtro.uid}`, quem: "Andressa" });
    const ix = await h.wait((x) => x.maint.find((y) => y.uid === m.uid).due !== day(5), "the maintenance done", 15000);
    const moved = ix.maint.find((y) => y.uid === m.uid);
    assert.equal(moved.history[0], day(0));
    const pts = await h.wait((x) => x.score.entries.some((e) => e.kind === "manutencao" && e.who === "Andressa"), "her points");
    assert.equal(pts.score.entries.find((e) => e.kind === "manutencao" && e.who === "Andressa").points, 30);
    const back = await waitFor(async () => {
      const t = (await stack.todoItems(LIST)).find((i) => i.uid === filtro.uid);
      return t && t.status === "needs_action" && t.due === moved.due && t;
    }, { what: "the task back with the next date", timeout: 10000 });
    assert.equal(back.due, moved.due);
  });
  it("turned off: the tasks leave the list", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { mirror: null } });
    await waitFor(async () => (await marked()).length === 0, { what: "the tasks removed", timeout: 10000 });
  });
});

describe("Trazer do ResolvIA", () => {
  it("preview and bring: routines created in the calendar, the tasks leave the list", async () => {
    const p = await c.call("cronologia/todo/bring_preview", { entity_id: "todo.trabalho" });
    assert.equal(p.name, "Trabalho");
    const sprint = p.items.find((i) => i.summary === "Planejar sprint");
    assert.deepEqual([sprint.every, sprint.date, sprint.exists], [14, day(3), false]);
    const out = await c.call("cronologia/todo/bring", { entity_id: "todo.trabalho", calendar: "calendar.casa", uids: [sprint.uid] });
    assert.deepEqual(out, { created: 1, removed: 1, calendar: "calendar.casa" });
    const ev = (await stack.events("calendar.casa", 0, 10)).find((e) => e.summary === "Planejar sprint");
    assert.equal(ev.start, day(3));
    assert.match(ev.description, /^#rotina\nVolta: 14 dias depois de feita$/);
    assert.equal((await stack.todoItems("todo.trabalho")).some((i) => i.uid === sprint.uid), false);
    const forget = await waitFor(() => fired("resolvia_esquecer").at(-1), { what: "resolvia_esquecer" });
    assert.deepEqual(forget.uids, [sprint.uid]);
    const again = await c.call("cronologia/todo/bring_preview", { entity_id: "todo.trabalho" });
    assert.equal(again.items.some((i) => i.uid === sprint.uid), false);
  });
});

describe("integration turned off", () => {
  it("no tasks, no points from the ResolvIA, todo commands refused", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { resolvia_on: false } });
    const ix = await h.wait((x) => x.todos.lists.length === 0, "no lists");
    assert.deepEqual(ix.todos, { lists: [], items: [] });
    await assert.rejects(c.call("cronologia/todo/add", { entity_id: "todo.casa", task: { summary: "x" } }), { code: "resolvia_off" });
    await assert.rejects(c.call("cronologia/todo/set", { entity_id: "todo.casa", uid: "todo-1", done: true }), { code: "resolvia_off" });
    await assert.rejects(c.call("cronologia/todo/bring_preview", { entity_id: "todo.casa" }), { code: "resolvia_off" });
    const key = `resolvia|todo.casa|todo-2|${day(0)}`;
    await stack.fire("cronologia_pontos", { chave: key, quem: "Diego", pontos: 5 });
    await new Promise((r) => setTimeout(r, 300));
    assert.equal(entry(h.latest, key), undefined);
    const j = JSON.parse(fs.readFileSync(path.join(stack.dirs.share, "cronologia", "integracao.json"), "utf8"));
    assert.equal(j.resolvia, false);
  });
});
