// Conversa com a IA (the chat beside the microphone): the person talks about the screen they are on,
// the agenda, routines, medicines, bills, the scoreboard, or anything else. The answer can carry
// actions (create an event, mark a routine done, mark a dose taken), which the screen shows as cards
// and only does after a tap. The AI is the one Home Assistant gives the app (ai_task.generate_data),
// so there is no memory on its side: the conversation and what the screen shows go in every call.

const WEEKDAY = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const MONTH = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const MAX_TURNS = 16;
const MAX_ROWS = 120;
export const MAX_ACTIONS = 10;

const fold = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
const oneLine = (v, max) => String(v == null ? "" : v).replace(/[\r\n|]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
const text = (v, max) => String(v == null ? "" : v).replace(/\r/g, "").trim().slice(0, max);
// a real day of the calendar (2026-02-30 is not)
const isDate = (s) => {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const t = new Date(y, m - 1, d);
  return t.getFullYear() === y && t.getMonth() === m - 1 && t.getDate() === d;
};
const isTime = (s) => typeof s === "string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(s);
const num = (v) => (Number.isFinite(v) ? v : null);
// the key of a routine or a dose in the app ("calendar.casa|uid|2026-11-03"): given back as it came
const KEY = /^[^\r\n]{1,300}$/;

export const CHAT_STRUCTURE = {
  resposta: {
    description: "A resposta para a pessoa, em português do Brasil: curta, direta, sem palavras em inglês e sem markdown.",
    required: true,
    selector: { text: { multiline: true } },
  },
  acoes: {
    description:
      'Só quando a pessoa pede para mexer na agenda: uma ação por elemento, "evento | título | AAAA-MM-DD | início HH:MM ou vazio | fim HH:MM ou vazio" (criar um compromisso), "feito | rotina exatamente como está nas rotinas de hoje" ou "tomei | remédio exatamente como está | horário HH:MM". Vazio quando não há o que fazer.',
    required: false,
    selector: { text: { multiple: true } },
  },
};

const rows = (list, max, map) => (Array.isArray(list) ? list : []).filter((x) => x && typeof x === "object").slice(0, max).map(map);

/**
 * What the screen sends, checked: {messages: [{role: "user"|"ia", text}], context: {tela, criar,
 * agenda: [{titulo, data, inicio, fim, calendario}], rotinas: [{id, nome, feito, pulada, periodo,
 * hora, quem, pontos, atrasada}], remedios: [{id, nome, hora, quem, dose, estado}], contas: [{nome,
 * valor, vence, atrasada}], manutencao: [{nome, vence, estado}], placar: [{pessoa, pontos}],
 * tarefas: [{nome, lista, prazo, atrasada}]}}. The last message is the person's.
 */
export function cleanChat(raw) {
  const r = raw && typeof raw === "object" ? raw : {};
  const messages = (Array.isArray(r.messages) ? r.messages : [])
    .filter((m) => m && (m.role === "user" || m.role === "ia") && typeof m.text === "string" && m.text.trim())
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, text: text(m.text, 2000) }));
  const c = r.context && typeof r.context === "object" ? r.context : {};
  const context = {
    tela: oneLine(c.tela, 160),
    criar: c.criar === true,
    agenda: rows(c.agenda, MAX_ROWS, (e) => ({ titulo: oneLine(e.titulo, 160), data: isDate(e.data) ? e.data : null, inicio: isTime(e.inicio) ? e.inicio : null, fim: isTime(e.fim) ? e.fim : null, calendario: oneLine(e.calendario, 60) })).filter((e) => e.titulo && e.data),
    rotinas: rows(c.rotinas, MAX_ROWS, (x) => ({ id: typeof x.id === "string" && KEY.test(x.id) ? x.id : null, nome: oneLine(x.nome, 160), feito: x.feito === true, pulada: x.pulada === true, periodo: oneLine(x.periodo, 20), hora: isTime(x.hora) ? x.hora : null, quem: oneLine(x.quem, 60), pontos: Math.max(0, Math.min(999, Math.round(num(x.pontos) || 0))), atrasada: x.atrasada === true })).filter((x) => x.nome),
    remedios: rows(c.remedios, MAX_ROWS, (x) => ({ id: typeof x.id === "string" && KEY.test(x.id) ? x.id : null, nome: oneLine(x.nome, 160), hora: isTime(x.hora) ? x.hora : null, quem: oneLine(x.quem, 60), dose: oneLine(x.dose, 80), estado: oneLine(x.estado, 20) })).filter((x) => x.nome),
    contas: rows(c.contas, 60, (x) => ({ nome: oneLine(x.nome, 160), valor: num(x.valor), vence: isDate(x.vence) ? x.vence : null, atrasada: x.atrasada === true })).filter((x) => x.nome),
    manutencao: rows(c.manutencao, 60, (x) => ({ nome: oneLine(x.nome, 160), vence: isDate(x.vence) ? x.vence : null, estado: oneLine(x.estado, 20) })).filter((x) => x.nome),
    placar: rows(c.placar, 20, (x) => ({ pessoa: oneLine(x.pessoa, 60), pontos: Math.round(num(x.pontos) || 0) })).filter((x) => x.pessoa),
    tarefas: rows(c.tarefas, MAX_ROWS, (x) => ({ nome: oneLine(x.nome, 160), lista: oneLine(x.lista, 60), prazo: isDate(x.prazo) ? x.prazo : null, atrasada: x.atrasada === true })).filter((x) => x.nome),
  };
  return { messages, context };
}

const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const whenText = (now) => `${WEEKDAY[now.getDay()]}, ${now.getDate()} de ${MONTH[now.getMonth()]} de ${now.getFullYear()}, ${pad(now.getHours())}:${pad(now.getMinutes())}`;
const money = (v) => (v == null ? "" : `R$ ${v.toFixed(2).replace(".", ",")}`);
const section = (title, list, line) => (list.length ? [title, ...list.map((x) => `  - ${line(x)}`)].join("\n") : "");

/** The instructions for one turn: who the AI is, today, the screen, what the app shows and the conversation so far. */
export function chatInstructions({ messages, context: c }, now = new Date()) {
  const parts = [
    section("Agenda (próximos dias):", c.agenda, (e) => `${e.data}${e.inicio ? ` ${e.inicio}${e.fim ? `–${e.fim}` : ""}` : " (dia todo)"}: ${e.titulo}${e.calendario ? ` [${e.calendario}]` : ""}`),
    section("Rotinas da casa de hoje:", c.rotinas, (x) => `${x.nome}${x.hora ? ` às ${x.hora}` : x.periodo ? ` (${x.periodo})` : ""}${x.quem ? `, ${x.quem}` : ""}${x.pontos ? `, ${x.pontos} pontos` : ""}: ${x.feito ? (x.pulada ? "pulada" : "feita") : x.atrasada ? "atrasada" : "a fazer"}`),
    section("Remédios de hoje:", c.remedios, (x) => `${x.nome}${x.dose ? ` (${x.dose})` : ""}${x.hora ? ` às ${x.hora}` : ""}${x.quem ? `, ${x.quem}` : ""}: ${x.estado || "a tomar"}`),
    section("Contas a pagar:", c.contas, (x) => `${x.nome}${x.valor != null ? `, ${money(x.valor)}` : ""}${x.vence ? `, vence ${x.vence}` : ""}${x.atrasada ? " (atrasada)" : ""}`),
    section("Manutenção da casa:", c.manutencao, (x) => `${x.nome}${x.vence ? `, próxima ${x.vence}` : ""}${x.estado === "vencida" ? " (vencida)" : ""}`),
    section("Placar:", c.placar, (x) => `${x.pessoa}: ${x.pontos} pontos`),
    section("Tarefas com prazo (ResolvIA):", c.tarefas, (x) => `${x.nome}${x.lista ? ` [${x.lista}]` : ""}${x.prazo ? `, prazo ${x.prazo}` : ""}${x.atrasada ? " (atrasada)" : ""}`),
  ].filter(Boolean);
  const talk = messages.map((m) => `${m.role === "user" ? "Pessoa" : "Você"}: ${m.text}`).join("\n");
  return [
    "Você é a IA da CronologIA, a agenda da família no Home Assistant (compromissos, rotinas da casa, remédios, contas, manutenção e placar de recompensas). Converse em português do Brasil, de forma curta e direta, sem palavras em inglês e sem markdown.",
    "A pessoa pode perguntar sobre a agenda e a tela em que está, ou sobre qualquer outro assunto: responda das duas formas. Sobre a agenda, use só os dados abaixo; não invente compromissos.",
    `Hoje é ${whenText(now)} (${ymd(now)}).`,
    c.tela ? `A pessoa está na tela: ${c.tela}.` : "",
    parts.length ? parts.join("\n") : "(nada na agenda)",
    `Quando a pessoa pedir para ${c.criar ? "marcar um compromisso, " : ""}marcar uma rotina como feita ou um remédio como tomado, escreva em "acoes" uma linha por ação e, na resposta, diga o que vai fazer: ela confirma na tela antes. Datas relativas ("amanhã", "sexta") contam a partir de hoje. Sem pedido, deixe "acoes" vazio.`,
    "Conversa até agora (responda à última fala da pessoa):",
    talk,
  ]
    .filter(Boolean)
    .join("\n");
}

/** The row of a name the AI wrote (accents and case ignored; the exact name first, then the start of it). */
function findRow(list, name, pred = () => true) {
  const n = fold(name);
  if (!n) return null;
  const ok = list.filter((x) => x.id && pred(x));
  return ok.find((x) => fold(x.nome) === n) || ok.find((x) => fold(x.nome).startsWith(n) || n.startsWith(fold(x.nome))) || null;
}

/**
 * The actions of an answer, checked against what the screen sent: [{tipo: "evento", titulo, data,
 * inicio, fim} | {tipo: "feito", id, nome} | {tipo: "tomei", id, nome, hora}]. A routine or a dose
 * that is not there (or already done), an invalid date or a repeated action are left out.
 */
export function parseChatActions(raw, context) {
  const lines = Array.isArray(raw) ? raw : typeof raw === "string" ? raw.split("\n") : [];
  const out = [];
  const seen = new Set();
  const once = (k) => (seen.has(k) ? false : (seen.add(k), true));
  for (const line of lines) {
    if (out.length >= MAX_ACTIONS) break;
    const parts = String(line || "").split("|").map((p) => p.trim());
    const tipo = fold(parts[0]);
    if (parts.length < 2) continue;
    if (tipo.startsWith("evento") || tipo.startsWith("compromisso")) {
      if (!context.criar) continue;
      const titulo = oneLine(parts[1], 255);
      const data = parts[2];
      if (!titulo || !isDate(data)) continue;
      const inicio = isTime(parts[3]) ? parts[3] : null;
      const fim = inicio && isTime(parts[4]) && parts[4] > inicio ? parts[4] : null;
      if (!once(`e|${fold(titulo)}|${data}|${inicio || ""}`)) continue;
      out.push({ tipo: "evento", titulo: titulo.charAt(0).toUpperCase() + titulo.slice(1), data, inicio, fim });
    } else if (tipo.startsWith("feito") || tipo.startsWith("feita") || tipo.startsWith("rotina")) {
      const r = findRow(context.rotinas, parts[1], (x) => !x.feito);
      if (!r || !once(`f|${r.id}`)) continue;
      out.push({ tipo: "feito", id: r.id, nome: r.nome });
    } else if (tipo.startsWith("tomei") || tipo.startsWith("remedio") || tipo.startsWith("tomado")) {
      const hora = isTime(parts[2]) ? parts[2] : null;
      const open = (x) => x.estado !== "tomado" && x.estado !== "pulado";
      const m = (hora && findRow(context.remedios, parts[1], (x) => open(x) && x.hora === hora)) || findRow(context.remedios, parts[1], open);
      if (!m || !once(`t|${m.id}`)) continue;
      out.push({ tipo: "tomei", id: m.id, nome: m.nome, hora: m.hora });
    }
  }
  return out;
}

/** The text of the answer (the AI sometimes sends the whole thing as one string). */
export function replyOf(data) {
  if (data == null) return "";
  if (typeof data === "string") return text(data, 4000);
  if (typeof data.resposta === "string") return text(data.resposta, 4000);
  return "";
}
