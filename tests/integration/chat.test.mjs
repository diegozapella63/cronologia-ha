// Integration: Conversa (cronologia/ai/chat) with the fake AI of dev/fake-ha.mjs: the reply knows the
// screen, the actions come checked against what the screen sent, Usar IA off refuses it.
import { startStack } from "./harness.mjs";
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

let stack;
let c;
before(async () => {
  stack = await startStack({});
  c = await stack.client();
});
after(async () => {
  if (stack) await stack.stop();
});

const context = {
  tela: "Agora",
  criar: true,
  agenda: [{ titulo: "Dentista", data: "2026-11-05", inicio: "15:00", fim: "16:00", calendario: "Pessoal" }],
  rotinas: [
    { id: "calendar.casa|r1|2026-11-03", nome: "Arrumar a cama", periodo: "Manhã" },
    { id: "calendar.casa|r2|2026-11-03", nome: "Lavar a louça", feito: true },
  ],
  remedios: [{ id: "calendar.rem|m1|2026-11-03T08:00", nome: "Sertralina", hora: "08:00", estado: "agora" }],
};
const say = (text, ctx = context, before = []) => c.call("cronologia/ai/chat", { messages: [...before, { role: "user", text }], context: ctx });

describe("Conversa (cronologia/ai/chat)", () => {
  it("answers the last thing the person said, knowing the screen and today's routines", async () => {
    const out = await say("O que tenho hoje?");
    assert.equal(out.reply, "Hoje: Arrumar a cama, Lavar a louça.");
    assert.deepEqual(out.actions, []);
    assert.ok(out.provider);
    const other = await say("tudo bem?", context, [{ role: "user", text: "oi" }, { role: "ia", text: "Olá" }]);
    assert.match(other.reply, /"tudo bem\?" \(tela: Agora\)/);
  });
  it("actions come checked: an event, a routine to mark, a dose", async () => {
    assert.deepEqual((await say("marca Reunião da escola dia 2026-11-06 às 19:00")).actions, [{ tipo: "evento", titulo: "Reunião da escola", data: "2026-11-06", inicio: "19:00", fim: null }]);
    assert.deepEqual((await say("fiz arrumar a cama")).actions, [{ tipo: "feito", id: "calendar.casa|r1|2026-11-03", nome: "Arrumar a cama" }]);
    assert.deepEqual((await say("tomei sertralina")).actions, [{ tipo: "tomei", id: "calendar.rem|m1|2026-11-03T08:00", nome: "Sertralina", hora: "08:00" }]);
  });
  it("what is not there, already done, or no calendar to create: no card", async () => {
    assert.deepEqual((await say("fiz lavar a louça")).actions, [], "already done");
    assert.deepEqual((await say("fiz lavar o carro")).actions, []);
    assert.deepEqual((await say("marca Reunião dia 2026-11-06", { ...context, criar: false })).actions, []);
  });
  it("1.84.0: the clip: photos or a PDF go with the last message (POST /api/chat); the names stay in the conversation", async () => {
    const jpg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1, 2, 3, 4]).toString("base64");
    const chat = async (body) => {
      const res = await fetch(`${stack.url}/api/chat`, { method: "POST", body: JSON.stringify(body) });
      return { status: res.status, body: await res.json() };
    };
    const one = await chat({ messages: [{ role: "user", text: "que dia é a consulta?" }], context, files: [{ data: jpg, mime: "image/jpeg", nome: "cartao.jpg" }] });
    assert.equal(one.status, 200, JSON.stringify(one.body));
    assert.equal(one.body.reply, "Li o arquivo (image/jpeg).");
    const pdf = await chat({ messages: [{ role: "user", text: "", anexos: ["convite.pdf"] }], context, files: [{ data: Buffer.from("%PDF-1.4 x").toString("base64"), mime: "application/pdf", nome: "convite.pdf" }] });
    assert.equal(pdf.body.reply, "Li o arquivo (application/pdf).", "only the file, no text");
    assert.deepEqual(fs.readdirSync(path.join(stack.dirs.media, "cronologia", "ia-temp")), [], "the files are removed after");
    const bad = await chat({ messages: [{ role: "user", text: "oi" }], context, files: [{ data: "eA==", mime: "text/plain" }] });
    assert.deepEqual([bad.status, bad.body.code], [400, "invalid_format"]);
    const next = await say("e agora?", context, [{ role: "user", text: "que dia é a consulta?", anexos: ["cartao.jpg"] }, { role: "ia", text: "Dia 5." }]);
    assert.match(next.reply, /"e agora\?"/, "the next turn goes without the files");
  });
  it("needs something from the person; counted in Uso da IA as conversa", async () => {
    await assert.rejects(c.call("cronologia/ai/chat", { messages: [], context }), { code: "invalid_format" });
    const usage = await c.call("cronologia/ai/usage");
    assert.ok(JSON.stringify(usage).includes("conversa"));
  });
  it("with Usar IA off, it is refused", async () => {
    await c.call("cronologia/prefs/set_app", { prefs: { ai_off: true } });
    await assert.rejects(say("oi"), { code: "ai_off" });
    await c.call("cronologia/prefs/set_app", { prefs: { ai_off: false } });
  });
});
