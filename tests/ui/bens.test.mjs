// CronologIA 1.76.0 (like the ResolvIA 2.62.0): Casa ou Bens. The area Bens of the InventarIA (house, car: what is
// outside the house) comes from the ResolvIA as a room with tipo "bens"; in Adicionar › Tarefa (and Manutenção) it is
// not one more room: the form first says where, Casa shows the rooms of the house, Bens the bens to pick.
import "../_lit.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { text, click, labels, fakeApi, hostOf } from "../_lit.mjs";
import { TasksMixin } from "../../frontend/src/tasks.js";

const ROOMS = [
  { id: "cozinha", nome: "Cozinha" },
  { id: "sala", nome: "Sala" },
  { id: "bens", nome: "Bens", tipo: "bens" },
];
const ITEMS = [
  { id: "geladeira", nome: "Geladeira", comodo: "Cozinha" },
  { id: "tv", nome: "TV", comodo: "Sala" },
  { id: "carro", nome: "Carro", comodo: "Bens" },
];

class App extends hostOf(TasksMixin) {
  constructor(rooms = ROOMS) {
    super(fakeApi());
    this._form = { room: null, rooms: [], equips: [] };
    this.rooms = rooms;
  }
  _todosAll() {
    return { app: { comodos: this.rooms, equipamentos: ITEMS } };
  }
  view() {
    return this._renderRoomEquipFields(this._form, { multiRoom: true });
  }
}

describe("Adicionar › Tarefa: Casa ou Bens", () => {
  it("without the area Bens: as before, no choice", () => {
    const a = new App(ROOMS.slice(0, 2));
    assert.doesNotMatch(labels(a.view()).join("|"), /Bens/);
  });
  it("Casa first: the rooms of the house (no Bens chip), Todos is the house, the equipment of the house", () => {
    const a = new App();
    const v = a.view();
    assert.deepEqual(labels(v).slice(0, 6), ["Casa", "Bens", "Nenhum", "Todos", "Cozinha", "Sala"]);
    assert.match(text(v), /Equipamento/);
    click(v, "Todos");
    assert.deepEqual(a._form.rooms, ["cozinha", "sala"], "Todos: the house, not Bens");
    a._form = { ...a._form, equipQ: "carro" };
    assert.doesNotMatch(text(a.view()), /Carro/, "no bens among the equipment of the house");
  });
  it("Bens: no rooms; the bens to pick (Bem); the task goes to the area Bens; Casa again clears it", () => {
    const a = new App();
    a._form = { room: "cozinha", rooms: ["cozinha"], equips: ["geladeira"] };
    click(a.view(), "Bens");
    assert.deepEqual([a._form.where, a._form.room, a._form.rooms, a._form.equips], ["bens", "bens", ["bens"], []]);
    const v = a.view();
    assert.doesNotMatch(text(v), /Cômodo|Cozinha/);
    assert.match(text(v), /Bem .*Carro/);
    click(v, /Carro/);
    assert.deepEqual(a._form.equips, ["carro"]);
    click(a.view(), "Casa");
    assert.deepEqual([a._form.where, a._form.room, a._form.rooms, a._form.equips], ["casa", null, [], []]);
  });
  it("a task already in Bens opens in Bens", () => {
    const a = new App();
    a._form = { room: "bens", rooms: ["bens"], equips: [] };
    assert.doesNotMatch(text(a.view()), /Cômodo/);
    a._form = { room: null, rooms: [], equips: ["carro"] };
    assert.match(text(a.view()), /Bem/);
  });
});
