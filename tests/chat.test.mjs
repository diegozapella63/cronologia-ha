// Conversa (the chat beside the microphone): what the screen sends, the instructions and the actions.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { cleanChat, chatInstructions, parseChatActions, replyOf, CHAT_STRUCTURE, MAX_ACTIONS } from "../cronologia/rootfs/app/lib/chat.js";

const NOW = new Date(2026, 10, 3, 8, 30);
const ctx = () =>
  cleanChat({
    messages: [{ role: "user", text: "oi" }],
    context: {
      tela: "Agora",
      criar: true,
      agenda: [
        { titulo: "Dentista", data: "2026-11-05", inicio: "15:00", fim: "16:00", calendario: "Pessoal" },
        { titulo: "Feriado", data: "2026-11-15" },
      ],
      rotinas: [
        { id: "calendar.casa|r1|2026-11-03", nome: "Arrumar a cama", periodo: "Manhã", pontos: 5 },
        { id: "calendar.casa|r2|2026-11-03", nome: "Dar janta cachorros", periodo: "Noite", quem: "Diego" },
        { id: "calendar.casa|r3|2026-11-03", nome: "Passar aspirador", feito: true },
        { id: "calendar.casa|r4|2026-11-02", nome: "Regar as plantas", atrasada: true },
      ],
      remedios: [
        { id: "calendar.rem|m1|2026-11-03T08:00", nome: "Sertralina", hora: "08:00", quem: "Andressa", dose: "50 mg", estado: "agora" },
        { id: "calendar.rem|m2|2026-11-03T20:00", nome: "Sertralina", hora: "20:00", quem: "Andressa", estado: "depois" },
        { id: "calendar.rem|m3|2026-11-03T08:00", nome: "DPrev", hora: "08:00", estado: "tomado" },
        { id: "calendar.rem|m4|2026-11-03T09:00", nome: "Ômega 3", hora: "09:00", estado: "pulado" },
      ],
      contas: [{ nome: "Luz", valor: 230.5, vence: "2026-11-02", atrasada: true }],
      manutencao: [{ nome: "Trocar filtro", vence: "2026-11-01", estado: "vencida" }],
      placar: [{ pessoa: "Diego", pontos: 40 }, { pessoa: "Andressa", pontos: 55 }],
      tarefas: [{ nome: "Pagar IPVA", lista: "Casa", prazo: "2026-11-04" }],
    },
  }).context;

describe("CHAT_STRUCTURE", () => {
  it("a reply (required) and a list of actions (optional)", () => {
    assert.equal(CHAT_STRUCTURE.resposta.required, true);
    assert.equal(CHAT_STRUCTURE.acoes.required, false);
    assert.deepEqual(CHAT_STRUCTURE.acoes.selector, { text: { multiple: true } });
    assert.match(CHAT_STRUCTURE.acoes.description, /evento \| título \| AAAA-MM-DD/);
  });
});

describe("cleanChat", () => {
  it("keeps the last 16 turns of the person and the AI, without empty ones or other roles", () => {
    const messages = [{ role: "system", text: "x" }, { role: "user", text: "  " }, ...Array.from({ length: 20 }, (_, i) => ({ role: i % 2 ? "ia" : "user", text: `m${i}` }))];
    const c = cleanChat({ messages });
    assert.equal(c.messages.length, 16);
    assert.equal(c.messages[15].text, "m19");
    assert.ok(c.messages.every((m) => m.role === "user" || m.role === "ia"));
  });
  it("checks what the screen sent: dates, times, ids, one line per text, no negative points", () => {
    const c = cleanChat({
      messages: [],
      context: {
        tela: "x\ny",
        criar: "sim",
        agenda: [{ titulo: "a|b\nc", data: "2026-11-05", inicio: "25:00", fim: "10:00" }, { titulo: "sem data" }, null],
        rotinas: [{ id: "two\nlines", nome: "R", pontos: -3 }, { id: "ok|key", nome: "" }],
        remedios: [{ id: "k", nome: "M", hora: "8h" }],
        contas: [{ nome: "C", valor: "10", vence: "ontem" }],
        placar: [{ pessoa: "P", pontos: 12.6 }],
      },
    }).context;
    assert.equal(c.tela, "x y");
    assert.equal(c.criar, false, "only true counts");
    assert.deepEqual(c.agenda, [{ titulo: "a b c", data: "2026-11-05", inicio: null, fim: "10:00", calendario: "" }]);
    assert.deepEqual(c.rotinas, [{ id: null, nome: "R", feito: false, pulada: false, periodo: "", hora: null, quem: "", pontos: 0, atrasada: false }]);
    assert.equal(c.remedios[0].hora, null);
    assert.deepEqual(c.contas, [{ nome: "C", valor: null, vence: null, atrasada: false }]);
    assert.deepEqual(c.placar, [{ pessoa: "P", pontos: 13 }]);
    assert.deepEqual(c.manutencao, []);
    assert.deepEqual(c.tarefas, []);
  });
  it("tolerates nothing at all", () => {
    assert.deepEqual(cleanChat(null).messages, []);
    assert.equal(cleanChat(null).context.agenda.length, 0);
  });
});

describe("chatInstructions", () => {
  const ins = chatInstructions({ messages: [{ role: "user", text: "O que tenho hoje?" }, { role: "ia", text: "Arrumar a cama." }, { role: "user", text: "E amanhã?" }], context: ctx() }, NOW);
  it("says who the AI is, the day and the screen", () => {
    assert.match(ins, /Você é a IA da CronologIA/);
    assert.match(ins, /Hoje é terça-feira, 3 de novembro de 2026, 08:30 \(2026-11-03\)\./);
    assert.match(ins, /A pessoa está na tela: Agora\./);
  });
  it("has what the screen shows: agenda, routines (with state), doses, bills, maintenance, scoreboard, tasks", () => {
    assert.match(ins, /2026-11-05 15:00–16:00: Dentista \[Pessoal\]/);
    assert.match(ins, /2026-11-15 \(dia todo\): Feriado/);
    assert.match(ins, /Arrumar a cama \(Manhã\), 5 pontos: a fazer/);
    assert.match(ins, /Passar aspirador: feita/);
    assert.match(ins, /Regar as plantas: atrasada/);
    assert.match(ins, /Sertralina \(50 mg\) às 08:00, Andressa: agora/);
    assert.match(ins, /Luz, R\$ 230,50, vence 2026-11-02 \(atrasada\)/);
    assert.match(ins, /Trocar filtro, próxima 2026-11-01 \(vencida\)/);
    assert.match(ins, /Andressa: 55 pontos/);
    assert.match(ins, /Pagar IPVA \[Casa\], prazo 2026-11-04/);
  });
  it("the conversation so far, the last one being the person's", () => {
    assert.match(ins, /Pessoa: O que tenho hoje\?\nVocê: Arrumar a cama\.\nPessoa: E amanhã\?$/);
  });
  it("offers to create events only when the screen can", () => {
    assert.match(ins, /marcar um compromisso/);
    const no = chatInstructions({ messages: [{ role: "user", text: "x" }], context: { ...ctx(), criar: false } }, NOW);
    assert.doesNotMatch(no, /marcar um compromisso/);
  });
  it("an empty agenda says so", () => {
    assert.match(chatInstructions(cleanChat({ messages: [{ role: "user", text: "x" }] }), NOW), /\(nada na agenda\)/);
  });
});

describe("parseChatActions", () => {
  it("evento: title, date, start and end (an end before the start is dropped)", () => {
    const a = parseChatActions(["evento | dentista | 2026-11-06 | 15:00 | 16:00", "compromisso | Reunião | 2026-11-07 | 09:00 | 08:00", "evento | Aniversário | 2026-11-08 |  | "], ctx());
    assert.deepEqual(a, [
      { tipo: "evento", titulo: "Dentista", data: "2026-11-06", inicio: "15:00", fim: "16:00" },
      { tipo: "evento", titulo: "Reunião", data: "2026-11-07", inicio: "09:00", fim: null },
      { tipo: "evento", titulo: "Aniversário", data: "2026-11-08", inicio: null, fim: null },
    ]);
  });
  it("evento: no title, a bad date or no calendar to create: left out", () => {
    assert.deepEqual(parseChatActions(["evento |  | 2026-11-06", "evento | X | sexta", "evento | X | 2026-02-30"], ctx()), []);
    assert.deepEqual(parseChatActions(["evento | Dentista | 2026-11-06"], { ...ctx(), criar: false }), []);
  });
  it("feito: today's routine by name (accents, case, the start of it); a done one or an unknown is left out", () => {
    const a = parseChatActions(["feito | ARRUMAR A CAMA", "feita | Dar janta", "feito | Passar aspirador", "rotina | Lavar o carro"], ctx());
    assert.deepEqual(a, [
      { tipo: "feito", id: "calendar.casa|r1|2026-11-03", nome: "Arrumar a cama" },
      { tipo: "feito", id: "calendar.casa|r2|2026-11-03", nome: "Dar janta cachorros" },
    ]);
  });
  it("tomei: the dose at that time; without a time, the first not taken; a taken one is left out", () => {
    assert.deepEqual(parseChatActions(["tomei | sertralina | 20:00"], ctx()), [{ tipo: "tomei", id: "calendar.rem|m2|2026-11-03T20:00", nome: "Sertralina", hora: "20:00" }]);
    assert.deepEqual(parseChatActions(["tomei | Sertralina"], ctx())[0].id, "calendar.rem|m1|2026-11-03T08:00");
    assert.deepEqual(parseChatActions(["tomei | DPrev | 08:00"], ctx()), []);
    assert.deepEqual(parseChatActions(["tomei | Ômega 3"], ctx()), [], "1.58.0: nor a skipped one");
  });
  it("repeated actions once, unknown kinds ignored, at most 10, a text with lines works too", () => {
    assert.equal(parseChatActions(["feito | Arrumar a cama", "feito | arrumar a cama", "apagar | tudo", "x"], ctx()).length, 1);
    const many = Array.from({ length: 15 }, (_, i) => `evento | E${i} | 2026-11-06`);
    assert.equal(parseChatActions(many, ctx()).length, MAX_ACTIONS);
    assert.equal(parseChatActions("feito | Arrumar a cama\ntomei | Sertralina | 08:00", ctx()).length, 2);
    assert.deepEqual(parseChatActions(null, ctx()), []);
  });
});

describe("replyOf", () => {
  it("the reply of the structure, or the whole text", () => {
    assert.equal(replyOf({ resposta: "  Oi  " }), "Oi");
    assert.equal(replyOf("Só texto"), "Só texto");
    assert.equal(replyOf({ outra: 1 }), "");
    assert.equal(replyOf(null), "");
  });
});
