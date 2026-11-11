// kinds.js: the models in the event description, values, intervals, parts of the day,
// maintenance cycle, Feito / Pular of a maintenance or of a routine that comes back.
import { at, ymd, isoLocal } from "./helpers.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  NOW_CARDS,
  nowOrder,
  KINDS,
  UNITS,
  foldText,
  occurrenceKey,
  parseMoney,
  formatMoney,
  parseEvery,
  everyLabel,
  addEvery,
  PERIODS,
  periodInfo,
  periodOfHour,
  periodRank,
  periodPassed,
  parseKind,
  buildDescription,
  maintStatus,
  maintDone,
  skipNext,
  maintSkip,
  toTomorrow,
  isoWithOffset,
} from "../cronologia/rootfs/app/lib/kinds.js";

describe("foldText", () => {
  it("drops accents, lowercases and trims", () => {
    assert.equal(foldText("  Manutenção À Noite "), "manutencao a noite");
    assert.equal(foldText("Remédio"), "remedio");
    assert.equal(foldText("Cômodo"), "comodo");
  });
  it("is safe with empty values", () => {
    assert.equal(foldText(null), "");
    assert.equal(foldText(undefined), "");
    assert.equal(foldText(""), "");
    assert.equal(foldText(0), "");
  });
});

describe("occurrenceKey", () => {
  it("uses the uid and the recurrence id when present", () => {
    assert.equal(occurrenceKey("calendar.casa", { uid: "u1", recurrence_id: "20261102", start: "2026-11-02" }), "calendar.casa|u1|20261102");
  });
  it("falls back to the summary and the start", () => {
    assert.equal(occurrenceKey("calendar.casa", { summary: "Lixo", start: "2026-11-02T19:00:00-03:00" }), "calendar.casa|Lixo|2026-11-02T19:00:00-03:00");
  });
  it("tells apart two repetitions of the same event", () => {
    const a = occurrenceKey("c", { uid: "u", recurrence_id: "20261102", start: "2026-11-02" });
    const b = occurrenceKey("c", { uid: "u", recurrence_id: "20261103", start: "2026-11-03" });
    assert.notEqual(a, b);
  });
});

describe("parseMoney", () => {
  const cases = [
    ["R$ 1.234,56", 1234.56],
    ["1234.5", 1234.5],
    ["89,90", 89.9],
    ["R$89,9", 89.9],
    ["0,5", 0.5],
    ["12.50", 12.5],
    ["1.5", 1.5],
    ["1.234", 1234], // a dot followed by 3 digits is a thousands separator
    ["1.234.567", 1234567],
    ["1.234.567,89", 1234567.89],
    ["R$ 231,40 (débito)", 231.4],
    ["10,999", 11], // rounded to cents
  ];
  for (const [text, value] of cases) {
    it(`"${text}" -> ${value}`, () => assert.equal(parseMoney(text), value));
  }
  it("returns null for nothing, zero, negative or text", () => {
    for (const t of ["", null, undefined, "abc", "R$ 0,00", "0", "-50", "R$ -10,00"]) assert.equal(parseMoney(t), null, String(t));
  });
});

describe("formatMoney", () => {
  it("formats as Brazilian reais", () => {
    assert.match(formatMoney(1234.56), /^R\$\s1\.234,56$/);
    assert.match(formatMoney(89.9), /^R\$\s89,90$/);
  });
  it("can drop the cents", () => {
    assert.match(formatMoney(1234.56, false), /^R\$\s1\.235$/);
  });
  it("is empty for null", () => {
    assert.equal(formatMoney(null), "");
    assert.equal(formatMoney(undefined), "");
  });
  it("is read back by parseMoney", () => {
    for (const n of [0.01, 1, 89.9, 1234.56, 1000000]) assert.equal(parseMoney(formatMoney(n)), n);
  });
});

describe("parseEvery / everyLabel", () => {
  it("reads every unit, singular and plural, with or without accents", () => {
    assert.deepEqual(parseEvery("6 meses"), { n: 6, unit: "meses" });
    assert.deepEqual(parseEvery("1 mês"), { n: 1, unit: "meses" });
    assert.deepEqual(parseEvery("1 mes"), { n: 1, unit: "meses" });
    assert.deepEqual(parseEvery("1 ano"), { n: 1, unit: "anos" });
    assert.deepEqual(parseEvery("2 anos"), { n: 2, unit: "anos" });
    assert.deepEqual(parseEvery("90 dias"), { n: 90, unit: "dias" });
    assert.deepEqual(parseEvery("1 dia"), { n: 1, unit: "dias" });
    assert.deepEqual(parseEvery("2 semanas"), { n: 2, unit: "semanas" });
    assert.deepEqual(parseEvery("3 SEMANAS"), { n: 3, unit: "semanas" });
  });
  it("finds the interval inside a sentence", () => {
    assert.deepEqual(parseEvery("2 dias depois de feita"), { n: 2, unit: "dias" });
    assert.deepEqual(parseEvery("a cada 3 meses"), { n: 3, unit: "meses" });
    assert.deepEqual(parseEvery("6meses"), { n: 6, unit: "meses" });
  });
  it("keeps n between 1 and 999", () => {
    assert.deepEqual(parseEvery("0 dias"), { n: 1, unit: "dias" });
    assert.deepEqual(parseEvery("5000 dias"), { n: 999, unit: "dias" });
  });
  it("returns null for unknown units or no number", () => {
    assert.equal(parseEvery("6 horas"), null);
    assert.equal(parseEvery("seis meses"), null);
    assert.equal(parseEvery(""), null);
    assert.equal(parseEvery(null), null);
  });
  it("labels singular and plural", () => {
    assert.equal(everyLabel({ n: 1, unit: "meses" }), "1 mês");
    assert.equal(everyLabel({ n: 6, unit: "meses" }), "6 meses");
    assert.equal(everyLabel({ n: 1, unit: "dias" }), "1 dia");
    assert.equal(everyLabel({ n: 2, unit: "semanas" }), "2 semanas");
    assert.equal(everyLabel({ n: 1, unit: "anos" }), "1 ano");
    assert.equal(everyLabel(null), "");
  });
  it("label and parse are inverse for every unit", () => {
    for (const unit of Object.keys(UNITS)) for (const n of [1, 2, 7, 12, 999]) assert.deepEqual(parseEvery(everyLabel({ n, unit })), { n, unit });
  });
});

describe("addEvery", () => {
  it("adds days and weeks at local midnight (time dropped)", () => {
    assert.deepEqual(addEvery(at(2026, 11, 2, 15, 30), { n: 3, unit: "dias" }), at(2026, 11, 5));
    assert.deepEqual(addEvery(at(2026, 12, 30), { n: 2, unit: "semanas" }), at(2027, 1, 13));
  });
  it("months keep the day, clamped to the end of the month", () => {
    assert.deepEqual(addEvery(at(2026, 1, 31), { n: 1, unit: "meses" }), at(2026, 2, 28));
    assert.deepEqual(addEvery(at(2028, 1, 31), { n: 1, unit: "meses" }), at(2028, 2, 29)); // leap year
    assert.deepEqual(addEvery(at(2026, 8, 31), { n: 6, unit: "meses" }), at(2027, 2, 28));
    assert.deepEqual(addEvery(at(2026, 3, 31), { n: 1, unit: "meses" }), at(2026, 4, 30));
    assert.deepEqual(addEvery(at(2026, 5, 15), { n: 6, unit: "meses" }), at(2026, 11, 15));
  });
  it("years are 12 months (29 Feb -> 28 Feb)", () => {
    assert.deepEqual(addEvery(at(2028, 2, 29), { n: 1, unit: "anos" }), at(2029, 2, 28));
    assert.deepEqual(addEvery(at(2026, 11, 2), { n: 2, unit: "anos" }), at(2028, 11, 2));
  });
  it("goes back with sign -1", () => {
    assert.deepEqual(addEvery(at(2026, 3, 31), { n: 1, unit: "meses" }, -1), at(2026, 2, 28));
    assert.deepEqual(addEvery(at(2026, 12, 1), { n: 6, unit: "meses" }, -1), at(2026, 6, 1));
    assert.deepEqual(addEvery(at(2026, 1, 3), { n: 1, unit: "semanas" }, -1), at(2025, 12, 27));
  });
  it("does not change the date passed in", () => {
    const d = at(2026, 1, 31, 10);
    addEvery(d, { n: 1, unit: "meses" });
    assert.deepEqual(d, at(2026, 1, 31, 10));
  });
});

describe("parts of the day", () => {
  it("PERIODS and periodInfo", () => {
    assert.deepEqual(
      PERIODS.map((p) => [p.id, p.from]),
      [
        ["manha", 5],
        ["tarde", 12],
        ["noite", 18],
      ],
    );
    assert.equal(periodInfo("tarde").label, "Tarde");
    assert.equal(periodInfo("x"), null);
    assert.equal(periodInfo(""), null);
  });
  it("periodOfHour: the small hours are still the night", () => {
    const want = { 0: "noite", 3: "noite", 4: "noite", 5: "manha", 11: "manha", 12: "tarde", 17: "tarde", 18: "noite", 23: "noite" };
    for (const [h, p] of Object.entries(want)) assert.equal(periodOfHour(Number(h)), p, `${h}h`);
  });
  it("periodRank at 8h: manhã, any time, tarde, noite", () => {
    const now = at(2026, 11, 2, 8);
    const order = ["noite", "", "tarde", "manha"].sort((a, b) => periodRank(a, now) - periodRank(b, now));
    assert.deepEqual(order, ["manha", "", "tarde", "noite"]);
    assert.equal(periodRank("manha", now), 0);
    assert.equal(periodRank("", now), 2);
    assert.equal(periodRank(null, now), 2);
    assert.equal(periodRank("tarde", now), 4);
    assert.equal(periodRank("noite", now), 5);
  });
  it("periodRank at 14h: the passed morning comes right after the afternoon", () => {
    const now = at(2026, 11, 2, 14);
    assert.equal(periodRank("tarde", now), 0);
    assert.equal(periodRank("manha", now), 1);
    assert.equal(periodRank("noite", now), 5);
  });
  it("periodRank at 20h: morning then afternoon as passed (1.x), both before any time", () => {
    const now = at(2026, 11, 2, 20);
    assert.equal(periodRank("noite", now), 0);
    assert.equal(periodRank("manha", now), 1);
    assert.equal(periodRank("tarde", now), 1.1);
    assert.ok(periodRank("tarde", now) < periodRank("", now));
  });
  it("periodRank at 2h (still the night): morning and afternoon are still to come", () => {
    const now = at(2026, 11, 3, 2);
    assert.equal(periodRank("noite", now), 0);
    assert.equal(periodRank("manha", now), 3);
    assert.equal(periodRank("tarde", now), 4);
  });
  it("periodPassed only for parts that already ended today", () => {
    assert.equal(periodPassed("manha", at(2026, 11, 2, 14)), true);
    assert.equal(periodPassed("tarde", at(2026, 11, 2, 14)), false);
    assert.equal(periodPassed("noite", at(2026, 11, 2, 14)), false);
    assert.equal(periodPassed("", at(2026, 11, 2, 14)), false);
    assert.equal(periodPassed("tarde", at(2026, 11, 2, 19)), true);
    assert.equal(periodPassed("manha", at(2026, 11, 2, 19)), true);
    // at 2h the morning of today has not come yet
    assert.equal(periodPassed("manha", at(2026, 11, 3, 2)), false);
    assert.equal(periodPassed("tarde", at(2026, 11, 3, 2)), false);
    // the morning itself is not "passed" while in it
    assert.equal(periodPassed("manha", at(2026, 11, 2, 5)), false);
    assert.equal(periodPassed("manha", at(2026, 11, 2, 12)), true);
  });
});

describe("parseKind", () => {
  it("returns null for a plain event", () => {
    assert.equal(parseKind(""), null);
    assert.equal(parseKind(null), null);
    assert.equal(parseKind("Levar o cartão do convênio"), null);
    assert.equal(parseKind("#festa\nDose: 1"), null);
    // the tag has to be on the first line with text
    assert.equal(parseKind("Consulta\n#remédio"), null);
    // another word that starts the same is not the tag
    assert.equal(parseKind("#contas\nValor: 10"), null);
  });
  it("reads every tag with or without accents, in any case, with blank lines before", () => {
    assert.equal(parseKind("#remédio").kind, "remedio");
    assert.equal(parseKind("#REMEDIO").kind, "remedio");
    assert.equal(parseKind("# remédio").kind, "remedio");
    assert.equal(parseKind("\n\n  #Conta").kind, "conta");
    assert.equal(parseKind("#rotina").kind, "rotina");
    assert.equal(parseKind("#manutenção").kind, "manutencao");
    assert.equal(parseKind("#manutencao").kind, "manutencao");
    assert.equal(parseKind("#remédio da manhã").kind, "remedio");
  });
  it("remédio: dose, who, alert and notes", () => {
    const k = parseKind("#remédio\nDose: 1 comprimido\nQuem toma: Aurora\nTomar em jejum\nDepois do café");
    assert.deepEqual(k, { kind: "remedio", notes: "Tomar em jejum\nDepois do café", dose: "1 comprimido", who: "Aurora", alert: true });
  });
  it("remédio: the alert is on unless it says não / desligado / off", () => {
    assert.equal(parseKind("#remédio\nAviso no celular: não").alert, false);
    assert.equal(parseKind("#remédio\nAviso no celular: Nao").alert, false);
    assert.equal(parseKind("#remédio\nAviso no celular: desligado").alert, false);
    assert.equal(parseKind("#remédio\nAviso no celular: off").alert, false);
    assert.equal(parseKind("#remédio\nAviso no celular: sim").alert, true);
    assert.equal(parseKind("#remédio").alert, true);
    // any label starting with "aviso" is the alert of a medicine
    assert.equal(parseKind("#remédio\nAvisos: não").alert, false);
  });
  it("labels: accents, case and spaces around are folded", () => {
    const k = parseKind("#remédio\n  QUEM TOMA :   Mimi  \ndose:1/4");
    assert.equal(k.who, "Mimi");
    assert.equal(k.dose, "1/4");
  });
  it("stops at the first line that is not a known field: the rest is the note", () => {
    const k = parseKind("#remédio\nDose: 1\nObservação: tomar com água\nQuem toma: Davi");
    assert.equal(k.dose, "1");
    assert.equal(k.who, "", "a field after an unknown line belongs to the note");
    assert.equal(k.notes, "Observação: tomar com água\nQuem toma: Davi");
  });
  it("a blank line also ends the fields", () => {
    const k = parseKind("#remédio\nDose: 1\n\nQuem toma: Davi");
    assert.equal(k.who, "");
    assert.equal(k.notes, "Quem toma: Davi");
  });
  it("a link in the note is not taken for a field", () => {
    const k = parseKind("#conta\nValor: 10,00\nhttps://banco.example/boleto");
    assert.equal(k.value, 10);
    assert.equal(k.notes, "https://banco.example/boleto");
  });
  it("a value can contain ':' and \\r\\n line ends are fine", () => {
    const k = parseKind("#remédio\r\nDose: 1 às 8:00\r\nQuem toma: Davi\r\n");
    assert.equal(k.dose, "1 às 8:00");
    assert.equal(k.who, "Davi");
    assert.equal(k.notes, "");
  });
  it("a field of another model ends the fields", () => {
    const k = parseKind("#conta\nValor: 50\nQuem faz: Davi");
    assert.equal(k.value, 50);
    assert.equal(k.notes, "Quem faz: Davi");
  });
  it("conta: value", () => {
    assert.deepEqual(parseKind("#conta\nValor: R$ 231,40\nCelesc"), { kind: "conta", notes: "Celesc", value: 231.4 });
    assert.equal(parseKind("#conta").value, null);
    assert.equal(parseKind("#conta\nValor: a combinar").value, null);
  });
  it("rotina: who, points (capped), period", () => {
    const k = parseKind("#rotina\nQuem faz: Aurora\nPontos: 10 pontos\nPeríodo: Manhã\nO caminhão passa às 20h");
    assert.deepEqual(k, { kind: "rotina", notes: "O caminhão passa às 20h", who: "Aurora", points: 10, period: "manha", after: null, rooms: [], equips: [], room: "", equip: "" });
    // the room (1.49): like the maintenance
    const r = parseKind("#rotina\nQuem faz: Davi\nCômodo: Quarto\nArrumar com o lençol novo");
    assert.deepEqual([r.rooms, r.room, r.notes], [["Quarto"], "Quarto", "Arrumar com o lençol novo"]);
    assert.equal(parseKind("#rotina\nPontos: 5000").points, 1000);
    assert.equal(parseKind("#rotina\nPontos: muitos").points, 0);
    assert.equal(parseKind("#rotina\nPeriodo: tarde").period, "tarde");
    assert.equal(parseKind("#rotina\nPeríodo: NOITE").period, "noite");
    assert.equal(parseKind("#rotina\nPeríodo: madrugada").period, "");
    assert.equal(parseKind("#rotina").period, "");
  });
  it("rotina that comes back N days after done: interval and history (newest first, as written)", () => {
    const k = parseKind("#rotina\nQuem faz: Davi\nVolta: 2 dias depois de feita\nFeito em: 01/11/2026, 28/10/2026, 5/9/2026");
    assert.deepEqual(k.after, { n: 2, unit: "dias" });
    assert.deepEqual(k.history, ["2026-11-01", "2026-10-28", "2026-09-05"]);
  });
  it("rotina without Volta has no history even with Feito em", () => {
    const k = parseKind("#rotina\nFeito em: 01/11/2026");
    assert.equal(k.after, null);
    assert.equal("history" in k, false);
  });
  it("rotina: an unreadable Volta is ignored", () => {
    assert.equal(parseKind("#rotina\nVolta: quando der").after, null);
  });
  it("manutenção: every field", () => {
    const k = parseKind("#manutenção\nQuem faz: Davi\nA cada: 3 meses\nAvisar: 10 dias antes\nFeito em: 02/08/2026\nPontos: 40\nCômodo: Sala\nEquipamento: Ar-condicionado\nLimpar o filtro");
    assert.deepEqual(k, {
      kind: "manutencao",
      notes: "Limpar o filtro",
      who: "Davi",
      every: { n: 3, unit: "meses" },
      warn: 10,
      history: ["2026-08-02"],
      points: 40,
      room: "Sala",
      equip: "Ar-condicionado",
      rooms: ["Sala"],
      equips: ["Ar-condicionado"],
    });
  });
  it("manutenção: several equipments (and rooms), \"A; B\"; room/equip are the first ones", () => {
    const k = parseKind("#manutenção\nA cada: 6 meses\nCômodos: Quarto; Sala\nEquipamentos: Ar-condicionado Split; Ar-condicionado; ar-condicionado split;  \nLimpar os filtros");
    assert.deepEqual([k.rooms, k.equips, k.room, k.equip, k.notes], [["Quarto", "Sala"], ["Ar-condicionado Split", "Ar-condicionado"], "Quarto", "Ar-condicionado Split", "Limpar os filtros"]);
    // the singular label with several, and the plural with one, are read the same
    assert.deepEqual(parseKind("#manutenção\nEquipamento: TV; Som").equips, ["TV", "Som"]);
    assert.deepEqual(parseKind("#manutenção\nComodos: Sala").rooms, ["Sala"]);
    const many = Array.from({ length: 14 }, (_, i) => `Item ${i + 1}`).join("; ");
    assert.equal(parseKind(`#manutenção\nEquipamentos: ${many}`).equips.length, 10, "up to 10");
  });
  it("manutenção defaults: 6 months, warn 7 days, empty history", () => {
    const k = parseKind("#manutenção");
    assert.deepEqual(k.every, { n: 6, unit: "meses" });
    assert.equal(k.warn, 7);
    assert.deepEqual(k.history, []);
    assert.equal(k.points, 0);
    assert.equal(k.room, "");
    assert.equal(k.equip, "");
    assert.deepEqual([k.rooms, k.equips], [[], []]);
  });
  it("manutenção warn: 0 is kept, the maximum is 365", () => {
    assert.equal(parseKind("#manutenção\nAvisar: 0 dias antes").warn, 0);
    assert.equal(parseKind("#manutenção\nAvisar: 900 dias antes").warn, 365);
  });
  it("labels without accents are read too (Comodo, Periodo)", () => {
    assert.equal(parseKind("#manutenção\nComodo: Cozinha").room, "Cozinha");
  });
});

describe("buildDescription (inverse of parseKind)", () => {
  it("remédio: fields in order, alert only when off, notes at the end", () => {
    assert.equal(buildDescription({ kind: "remedio", dose: "1 comprimido", who: "Aurora", alert: true, notes: "Em jejum" }), "#remédio\nDose: 1 comprimido\nQuem toma: Aurora\nEm jejum");
    assert.equal(buildDescription({ kind: "remedio", dose: "", who: "Mimi", alert: false }), "#remédio\nQuem toma: Mimi\nAviso no celular: não");
  });
  it("conta: the value in reais", () => {
    assert.match(buildDescription({ kind: "conta", value: 231.4 }), /^#conta\nValor: R\$\s231,40$/);
    assert.equal(buildDescription({ kind: "conta", value: null, notes: "boleto" }), "#conta\nboleto");
  });
  it("rotina: points only when > 0, period label, Volta and history only with after", () => {
    assert.equal(buildDescription({ kind: "rotina", who: "Davi", points: 0, period: "" }), "#rotina\nQuem faz: Davi");
    assert.equal(buildDescription({ kind: "rotina", who: "", points: 5, period: "noite" }), "#rotina\nPontos: 5\nPeríodo: Noite");
    assert.equal(buildDescription({ kind: "rotina", period: "bogus" }), "#rotina");
    assert.equal(buildDescription({ kind: "rotina", who: "Davi", rooms: ["Quarto"] }), "#rotina\nQuem faz: Davi\nCômodo: Quarto", "the room, like the maintenance");
    assert.equal(
      buildDescription({ kind: "rotina", after: { n: 2, unit: "dias" }, history: ["2026-11-01", "2026-10-28"] }),
      "#rotina\nVolta: 2 dias depois de feita\nFeito em: 01/11/2026, 28/10/2026",
    );
    assert.equal(buildDescription({ kind: "rotina", after: { n: 1, unit: "semanas" }, history: [] }), "#rotina\nVolta: 1 semana depois de feita");
    assert.equal(buildDescription({ kind: "rotina", after: null, history: ["2026-11-01"] }), "#rotina");
  });
  it("manutenção: interval, warn (singular), history, points, room, equipment", () => {
    assert.equal(
      buildDescription({ kind: "manutencao", who: "Davi", every: { n: 1, unit: "anos" }, warn: 1, history: ["2026-11-02"], points: 30, room: "Cozinha", equip: "Fogão", notes: "Chamar o técnico" }),
      "#manutenção\nQuem faz: Davi\nA cada: 1 ano\nAvisar: 1 dia antes\nFeito em: 02/11/2026\nPontos: 30\nCômodo: Cozinha\nEquipamento: Fogão\nChamar o técnico",
    );
  });
  it("manutenção: several equipments and rooms, with the labels in the plural", () => {
    assert.equal(
      buildDescription({ kind: "manutencao", every: { n: 6, unit: "meses" }, warn: 7, rooms: ["Quarto", "Sala"], equips: ["Ar-condicionado Split", "Ar; condicionado"] }),
      "#manutenção\nA cada: 6 meses\nAvisar: 7 dias antes\nCômodos: Quarto; Sala\nEquipamentos: Ar-condicionado Split; Ar, condicionado",
      "a ';' in a name becomes ',' (it separates the names)",
    );
    // the lists win over the one name of before; an empty list takes the one name
    assert.match(buildDescription({ kind: "manutencao", every: { n: 1, unit: "anos" }, room: "Velho", rooms: ["Sala"], equip: "", equips: [] }), /\nCômodo: Sala$/);
    assert.match(buildDescription({ kind: "manutencao", every: { n: 1, unit: "anos" }, equip: "Fogão", equips: [] }), /\nEquipamento: Fogão$/);
    assert.equal(buildDescription({ kind: "manutencao", every: { n: 6, unit: "meses" } }), "#manutenção\nA cada: 6 meses\nAvisar: 7 dias antes");
    assert.equal(buildDescription({ kind: "manutencao", every: { n: 6, unit: "meses" }, warn: 0 }), "#manutenção\nA cada: 6 meses\nAvisar: 0 dias antes");
  });
  it("history is cut to the 8 newest", () => {
    const history = Array.from({ length: 12 }, (_, i) => `2026-01-${String(i + 10).padStart(2, "0")}`);
    const d = buildDescription({ kind: "manutencao", every: { n: 1, unit: "dias" }, history });
    assert.equal(parseKind(d).history.length, 8);
    assert.deepEqual(parseKind(d).history, history.slice(0, 8));
  });
  it("a value with line breaks stays on its line", () => {
    const d = buildDescription({ kind: "remedio", dose: "1\ncomprimido", who: " Ana \n Maria " });
    assert.equal(d, "#remédio\nDose: 1 comprimido\nQuem toma: Ana Maria");
  });

  // Round trips: whatever the form saves, every screen reads back the same.
  const trips = [
    { kind: "remedio", dose: "50 mg · 1 comprimido", who: "Aurora", alert: true, notes: "Depois do café da manhã" },
    { kind: "remedio", dose: "1/4 de comprimido", who: "Mimi", alert: false, notes: "" },
    { kind: "remedio", dose: "", who: "", alert: true, notes: "Só se tiver dor\nMáximo 3 por dia" },
    { kind: "conta", value: 1234.56, notes: "Celesc · débito automático desligado" },
    { kind: "conta", value: null, notes: "" },
    { kind: "rotina", who: "Davi", points: 15, period: "", after: null, notes: "" },
    { kind: "rotina", who: "Aurora", points: 10, period: "noite", after: null, notes: "O caminhão passa às 20h" },
    { kind: "rotina", who: "", points: 0, period: "manha", after: { n: 2, unit: "dias" }, history: ["2026-11-01", "2026-10-30"], notes: "" },
    { kind: "rotina", who: "Davi", points: 5, period: "tarde", after: { n: 3, unit: "semanas" }, history: [], notes: "Trocar a roupa de cama" },
    { kind: "manutencao", who: "Davi", every: { n: 6, unit: "meses" }, warn: 7, history: ["2026-05-07"], points: 30, room: "Cozinha", equip: "Filtro de água", notes: "Refil modelo X" },
    { kind: "manutencao", who: "", every: { n: 1, unit: "anos" }, warn: 30, history: [], points: 0, room: "", equip: "", notes: "" },
    { kind: "manutencao", who: "", every: { n: 15, unit: "dias" }, warn: 0, history: ["2026-10-01", "2026-09-16"], points: 0, room: "Área de serviço", equip: "", notes: "" },
    { kind: "manutencao", who: "Ana", every: { n: 3, unit: "meses" }, warn: 7, history: [], points: 10, room: "Quarto", equip: "Ar-condicionado", rooms: ["Quarto", "Sala"], equips: ["Ar-condicionado", "TV"], notes: "Os dois" },
  ];
  for (const k of trips) {
    it(`round trip: ${k.kind} ${JSON.stringify(k).slice(0, 60)}…`, () => {
      const back = parseKind(buildDescription(k));
      const want = { ...k };
      if (k.kind === "rotina" && !k.after) delete want.history;
      if ((k.kind === "manutencao" || k.kind === "rotina") && !k.equips) Object.assign(want, { rooms: k.room ? [k.room] : [], equips: k.equip ? [k.equip] : [], room: k.room || "", equip: k.equip || "" });
      assert.deepEqual(back, want);
      // and again: the description is stable
      assert.equal(buildDescription(back), buildDescription(k));
    });
  }
});

describe("maintStatus", () => {
  const k = { every: { n: 6, unit: "meses" }, warn: 7, history: [] };
  it("ok: the cycle starts one interval before the due date", () => {
    const st = maintStatus(k, "2026-12-01", at(2026, 11, 2, 15));
    assert.equal(st.due, "2026-12-01");
    assert.equal(st.start, "2026-06-01");
    assert.equal(st.days, 29);
    assert.equal(st.state, "ok");
    const total = 183; // 1 Jun -> 1 Dec
    assert.ok(Math.abs(st.progress - (total - 29) / total) < 1e-9);
  });
  it("perto within the warning days (and on the day)", () => {
    assert.equal(maintStatus(k, "2026-12-01", at(2026, 11, 24)).state, "perto");
    assert.equal(maintStatus(k, "2026-12-01", at(2026, 11, 23)).state, "ok");
    const st = maintStatus(k, "2026-12-01", at(2026, 12, 1, 23, 59));
    assert.equal(st.days, 0);
    assert.equal(st.state, "perto");
    assert.equal(st.progress, 1);
  });
  it("vencida after the due date, progress over 1", () => {
    const st = maintStatus(k, "2026-12-01", at(2026, 12, 11));
    assert.equal(st.days, -10);
    assert.equal(st.state, "vencida");
    assert.ok(st.progress > 1);
  });
  it("the last time done is the start of the cycle", () => {
    const st = maintStatus({ ...k, history: ["2026-08-01"] }, "2026-12-01", at(2026, 11, 2));
    assert.equal(st.start, "2026-08-01");
  });
  it("a history date on or after the due date is not the start", () => {
    assert.equal(maintStatus({ ...k, history: ["2026-12-01"] }, "2026-12-01", at(2026, 11, 2)).start, "2026-06-01");
  });
  it("warn 0: only the day itself is perto", () => {
    const k0 = { ...k, warn: 0 };
    assert.equal(maintStatus(k0, "2026-12-01", at(2026, 11, 30)).state, "ok");
    assert.equal(maintStatus(k0, "2026-12-01", at(2026, 12, 1)).state, "perto");
  });
  it("progress is never negative (due far ahead of a short cycle)", () => {
    const st = maintStatus({ every: { n: 1, unit: "dias" }, warn: 0, history: [] }, "2026-12-31", at(2026, 11, 2));
    assert.equal(st.progress, 0);
  });
});

describe("maintDone", () => {
  const k = { kind: "manutencao", who: "Davi", every: { n: 6, unit: "meses" }, warn: 7, history: ["2026-05-07"], points: 30, room: "Cozinha", equip: "Filtro", notes: "Refil" };
  const today = at(2026, 11, 2, 16, 45);

  it("all-day: the event moves to today + interval, today first in the history", () => {
    const raw = { summary: "Trocar o filtro", start: "2026-11-07", end: "2026-11-08", description: buildDescription(k), location: "Cozinha" };
    const ev = maintDone(raw, k, today);
    assert.equal(ev.start, "2027-05-02");
    assert.equal(ev.end, "2027-05-03");
    assert.equal(ev.summary, "Trocar o filtro");
    assert.equal(ev.location, "Cozinha");
    const back = parseKind(ev.description);
    assert.deepEqual(back.history, ["2026-11-02", "2026-05-07"]);
    assert.equal(back.points, 30);
    assert.equal(back.room, "Cozinha");
    assert.equal(back.notes, "Refil");
  });
  it("no location key when the event has none", () => {
    const ev = maintDone({ summary: "x", start: "2026-11-07", end: "2026-11-08" }, k, today);
    assert.equal("location" in ev, false);
  });
  it("timed: keeps the time of day and the duration", () => {
    const raw = { summary: "Dedetização", start: "2026-10-01T09:30:00-03:00", end: "2026-10-01T11:00:00-03:00" };
    const ev = maintDone(raw, { ...k, every: { n: 1, unit: "meses" } }, today);
    assert.equal(ev.start, "2026-12-02T09:30:00-03:00");
    assert.equal(ev.end, "2026-12-02T11:00:00-03:00");
  });
  it("timed: an event given in another offset keeps its local time", () => {
    const raw = { summary: "x", start: "2026-10-01T12:30:00+00:00", end: "2026-10-01T13:00:00+00:00" };
    const ev = maintDone(raw, { ...k, every: { n: 7, unit: "dias" } }, today);
    assert.equal(ev.start, "2026-11-09T09:30:00-03:00");
    assert.equal(ev.end, "2026-11-09T10:00:00-03:00");
  });
  it("timed: a zero-length event lasts at least 15 minutes", () => {
    const raw = { summary: "x", start: "2026-10-01T09:00:00-03:00", end: "2026-10-01T09:00:00-03:00" };
    const ev = maintDone(raw, { ...k, every: { n: 1, unit: "dias" } }, today);
    assert.equal(ev.end, "2026-11-03T09:15:00-03:00");
  });
  it("done twice the same day: today only once", () => {
    const k2 = { ...k, history: ["2026-11-02", "2026-05-07"] };
    const ev = maintDone({ summary: "x", start: "2027-05-02", end: "2027-05-03" }, k2, today);
    assert.deepEqual(parseKind(ev.description).history, ["2026-11-02", "2026-05-07"]);
  });
  it("history keeps the 8 newest", () => {
    const history = ["2026-10-01", "2026-09-01", "2026-08-01", "2026-07-01", "2026-06-01", "2026-05-01", "2026-04-01", "2026-03-01"];
    const ev = maintDone({ summary: "x", start: "2026-11-01", end: "2026-11-02" }, { ...k, every: { n: 1, unit: "meses" }, history }, today);
    const h = parseKind(ev.description).history;
    assert.equal(h.length, 8);
    assert.equal(h[0], "2026-11-02");
    assert.equal(h[7], "2026-04-01");
  });
  it("works for a routine that comes back N days after done (every = after)", () => {
    const r = { kind: "rotina", who: "Davi", points: 5, period: "manha", after: { n: 2, unit: "dias" }, history: ["2026-10-30"], notes: "" };
    const ev = maintDone({ summary: "Arrumar a cama", start: "2026-11-01", end: "2026-11-02", description: buildDescription(r) }, { ...r, every: r.after }, today);
    assert.equal(ev.start, "2026-11-04");
    const back = parseKind(ev.description);
    assert.equal(back.kind, "rotina");
    assert.deepEqual(back.history, ["2026-11-02", "2026-10-30"]);
    assert.equal(back.period, "manha");
    assert.deepEqual(back.after, { n: 2, unit: "dias" });
  });
});

describe("maintSkip (Pular a maintenance, 1.80.0)", () => {
  const k = { kind: "manutencao", every: { n: 6, unit: "meses" }, history: ["2026-05-04"] };
  const today = at(2026, 11, 11, 10);
  it("the next one is an interval after the day it was due; the description stays", () => {
    const raw = { summary: "Limpar paredes", start: "2026-11-04", end: "2026-11-12", description: "#manutenção\nA cada: 6 meses", location: "Sala" };
    const ev = maintSkip(raw, k, today);
    assert.deepEqual(ev, { summary: "Limpar paredes", description: raw.description, location: "Sala", start: "2027-05-04", end: "2027-05-05" });
  });
  it("when that one has passed too, it counts from today; timed ones keep the hour", () => {
    assert.equal(maintSkip({ summary: "x", start: "2026-03-01", end: "2026-03-02" }, k, today).start, "2027-05-11");
    const ev = maintSkip({ summary: "x", start: "2026-11-20T09:00:00-03:00", end: "2026-11-20T10:00:00-03:00" }, k, today);
    assert.equal(ev.start, "2027-05-20T09:00:00-03:00");
    assert.equal(ev.end, "2027-05-20T10:00:00-03:00");
    assert.equal(ev.description, "");
  });
});

describe("toTomorrow (Amanhã, 1.81.0)", () => {
  const today = at(2026, 11, 11, 20);
  it("all-day: tomorrow, one day; the description (and its history) stays", () => {
    const raw = { summary: "Dobrar roupa", start: "2026-11-11", end: "2026-11-12", description: "#rotina\nVolta: 7 dias depois de feita\nFeito em: 04/11/2026", location: "Lavanderia" };
    assert.deepEqual(toTomorrow(raw, today), { summary: "Dobrar roupa", description: raw.description, location: "Lavanderia", start: "2026-11-12", end: "2026-11-13" });
  });
  it("a late one also goes to tomorrow (not to its next date); a timed one keeps the hour and length", () => {
    assert.equal(toTomorrow({ summary: "x", start: "2026-11-01", end: "2026-11-02" }, today).start, "2026-11-12");
    const ev = toTomorrow({ summary: "x", start: "2026-11-09T07:00:00-03:00", end: "2026-11-09T07:30:00-03:00" }, today);
    assert.equal(ev.start, "2026-11-12T07:00:00-03:00");
    assert.equal(ev.end, "2026-11-12T07:30:00-03:00");
    assert.equal(ev.description, "");
  });
  it("the end of the month and of the year", () => {
    assert.equal(toTomorrow({ summary: "x", start: "2026-11-30", end: "2026-12-01" }, at(2026, 11, 30, 9)).start, "2026-12-01");
    assert.equal(toTomorrow({ summary: "x", start: "2026-12-31", end: "2027-01-01" }, at(2026, 12, 31, 9)).end, "2027-01-02");
  });
});

describe("skipNext (Pular)", () => {
  const k = { kind: "rotina", after: { n: 2, unit: "dias" }, history: ["2026-10-28"] };
  const today = at(2026, 11, 2, 10);
  it("all-day: next = due + N, counting from the day it was due", () => {
    const raw = { summary: "Arrumar a cama", start: "2026-11-02", end: "2026-11-03", description: "#rotina\nVolta: 2 dias depois de feita\nFeito em: 28/10/2026" };
    const ev = skipNext(raw, k, today);
    assert.equal(ev.start, "2026-11-04");
    assert.equal(ev.end, "2026-11-05");
    assert.equal(ev.description, raw.description, "the history stays as it was");
  });
  it("yesterday's with 1 day comes to today", () => {
    const ev = skipNext({ summary: "x", start: "2026-11-01", end: "2026-11-02" }, { ...k, after: { n: 1, unit: "dias" } }, today);
    assert.equal(ev.start, "2026-11-02");
  });
  it("never before today (a routine late for many days)", () => {
    const ev = skipNext({ summary: "x", start: "2026-10-20", end: "2026-10-21" }, k, today);
    assert.equal(ev.start, "2026-11-02");
    assert.equal(ev.end, "2026-11-03");
  });
  it("a future one is pushed from its own date", () => {
    const ev = skipNext({ summary: "x", start: "2026-11-05", end: "2026-11-06" }, k, today);
    assert.equal(ev.start, "2026-11-07");
  });
  it("timed: keeps time and duration; late ones go to today at that time", () => {
    const raw = { summary: "Regar", start: "2026-10-25T07:00:00-03:00", end: "2026-10-25T07:30:00-03:00" };
    const ev = skipNext(raw, k, today);
    assert.equal(ev.start, "2026-11-02T07:00:00-03:00");
    assert.equal(ev.end, "2026-11-02T07:30:00-03:00");
    const ev2 = skipNext({ ...raw, start: "2026-11-02T07:00:00-03:00", end: "2026-11-02T07:30:00-03:00" }, k, today);
    assert.equal(ev2.start, "2026-11-04T07:00:00-03:00");
  });
  it("keeps the location and an empty description", () => {
    const ev = skipNext({ summary: "x", start: "2026-11-02", end: "2026-11-03", location: "Quarto" }, k, today);
    assert.equal(ev.location, "Quarto");
    assert.equal(ev.description, "");
  });
});

describe("isoWithOffset", () => {
  it("writes local time with the São Paulo offset", () => {
    assert.equal(isoWithOffset(at(2026, 11, 2, 9, 5, 7)), "2026-11-02T09:05:07-03:00");
    assert.equal(isoWithOffset(at(2026, 1, 1, 0, 0)), "2026-01-01T00:00:00-03:00");
  });
  it("is read back as the same instant", () => {
    const d = at(2026, 7, 15, 23, 59, 59);
    assert.equal(Date.parse(isoWithOffset(d)), d.getTime());
    assert.equal(isoWithOffset(d), isoLocal(d));
  });
});

describe("KINDS", () => {
  it("every field label is unique within its model (folded)", () => {
    for (const [kind, def] of Object.entries(KINDS)) {
      const labels = Object.values(def.fields).map(foldText);
      assert.equal(new Set(labels).size, labels.length, kind);
    }
  });
  it("every tag is read back as its own kind", () => {
    for (const [kind, def] of Object.entries(KINDS)) assert.equal(parseKind(def.tag).kind, kind);
  });
  it("ymd helper sanity (suite runs in São Paulo time)", () => {
    assert.equal(new Date(2026, 0, 1).getTimezoneOffset(), 180);
    assert.equal(ymd(at(2026, 11, 2)), "2026-11-02");
  });
});

describe("nowOrder: the cards of Agora in the order of the person", () => {
  it("nothing saved: the order of always", () => {
    assert.deepEqual(nowOrder(null), NOW_CARDS);
    assert.deepEqual(NOW_CARDS, ["away", "search", "meds", "bills", "gavisos", "now", "day", "memoria", "home", "todos"]);
  });
  it("a card left out (new in a later version) goes back after the one before it by default; unknown and repeated ones out", () => {
    assert.deepEqual(nowOrder(["todos", "home", "now", "day", "meds", "x", "todos"]), ["away", "search", "todos", "home", "now", "day", "memoria", "meds", "bills", "gavisos"]);
    assert.deepEqual(nowOrder(["day"]), NOW_CARDS, "the ones before it by default go before it");
  });
  it("1.70.0: Agora ou a seguir apart from Hoje; an order of before (day was both) gets it right before Hoje", () => {
    assert.deepEqual(nowOrder(["home", "todos", "day", "away", "search", "meds", "bills", "memoria"]), ["home", "todos", "now", "day", "away", "search", "meds", "bills", "gavisos", "memoria"]);
    const apart = nowOrder(["home", "day", "now"]);
    assert.ok(apart.indexOf("home") < apart.indexOf("day") && apart.indexOf("day") < apart.indexOf("now"), "apart, each one where the person put it");
  });
  it("1.79.0: the Avisos do GerencIA go right after the Contas, wherever the person put them", () => {
    const o = nowOrder(["todos", "bills", "home"]);
    assert.equal(o[o.indexOf("bills") + 1], "gavisos");
  });
});
