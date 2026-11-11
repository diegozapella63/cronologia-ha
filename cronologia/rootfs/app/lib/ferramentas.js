// Ferramentas do CronologIA para o CorrerIA (o WhatsApp, e o Claude e o Gemini como servidor MCP da casa):
// ler a agenda e gravar nela. O CorrerIA lista as ferramentas (GET /api/integracao/ferramentas) e chama uma
// (POST {nome, argumentos, pessoa, cliente}); aqui ficam a lista e as regras. As gravações usam as mesmas
// funções da tela e do servidor (criar, mudar e apagar eventos pelo Home Assistant; Feito, Pular, Desfazer,
// manutenção feita e pontos pelo Home), e a tela se atualiza como quando outra pessoa muda algo.
// Each tool: {nome, titulo, descricao, entrada (JSON Schema), grava, apaga}. chamar() -> {texto, grava}.
import { parseKind, buildDescription, occurrenceKey, KINDS, foldText, everyLabel, parseEvery, parseMoney, addEvery, isoWithOffset, ymdOf, periodInfo, cleanAway, PERIODS } from "./kinds.js";
import { scoreSettings } from "./score.js";
import { asActor } from "./actor.js";

const DAY = 86400000;
const MAX_DIAS = 400; // a busca da agenda: até 400 dias
const MAX_LISTA = 500;
const WEEKDAY = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const TIPOS = ["compromisso", "remedio", "rotina", "conta", "manutencao"];
const REPETE = { nao: "", diario: "FREQ=DAILY", semanal: "FREQ=WEEKLY", mensal: "FREQ=MONTHLY", anual: "FREQ=YEARLY" };
const F = { CREATE: 1, DELETE: 2, UPDATE: 4 };

export const INSTRUCOES =
  "CronologIA: a agenda da família no Home Assistant (compromissos dos calendários, rotinas da casa, remédios, contas, manutenção e o placar de pontos). " +
  "Datas AAAA-MM-DD (aceita hoje e amanhã) e horários HH:MM. Comece por cronologia_resumo: os ids que ele mostra servem nas outras ferramentas. " +
  "Antes de gravar, diga à pessoa o que vai ser feito.";

/** A wrong argument: the AI reads the message (it says what is valid) and tries again (400). */
export class ErroFerramenta extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
const erro = (m) => new ErroFerramenta(m);
// errors of home.js, gerencia.js and the calendar commands of Home Assistant that mean "not like this"
const ERROS_DA_REGRA = new Set(["invalid_format", "not_found", "not_supported", "away", "gerencia_off", "no_gerencia", "gerencia_error"]);

// ------------------------------------------------------------------ the list

const obj = (props, required = []) => ({ type: "object", properties: props, required, additionalProperties: false });
const DATA = { type: "string", description: "AAAA-MM-DD (ou hoje, amanhã)." };
const HORA = { type: "string", description: "HH:MM" };
const ID = { type: "string", description: "O id (de cronologia_resumo ou cronologia_agenda)." };
const ESCOPO = (todos) => ({ type: "string", enum: todos ? ["este", "este_e_proximos", "todos"] : ["este", "este_e_proximos"], description: `Num evento que se repete: só este dia (padrão), este e os próximos${todos ? " ou a série toda" : ""}.` });

export const FERRAMENTAS = [
  {
    nome: "resumo",
    titulo: "Hoje na agenda",
    grava: false,
    descricao:
      "Visão geral de agora: os compromissos de hoje e de amanhã, os remédios de hoje (tomados ou não), as rotinas da casa de hoje (feitas, puladas, atrasadas), as contas perto do vencimento, a manutenção da casa, o placar e as férias. Comece por aqui: os ids servem nas outras ferramentas.",
    entrada: obj({}),
  },
  {
    nome: "agenda",
    titulo: "Agenda",
    grava: false,
    descricao:
      "Os eventos dos calendários num período (cada repetição no seu dia), com o calendário, o local, as notas e o modelo (remédio, rotina, conta, manutenção). Sem período, de hoje a 7 dias. O id serve para editar ou apagar.",
    entrada: obj({
      de: DATA,
      ate: DATA,
      busca: { type: "string", description: "Parte do título, do local ou das notas." },
      calendario: { type: "string", description: "Id ou nome do calendário (de cronologia_cadastros)." },
      limite: { type: "integer", minimum: 1, maximum: MAX_LISTA, description: "Padrão: 200." },
    }),
  },
  {
    nome: "cadastros",
    titulo: "Calendários e cadastros",
    grava: false,
    descricao:
      "Os calendários (o que cada um deixa fazer e qual é o padrão para criar), o que está cadastrado (remédios, rotinas, contas e manutenções, com a repetição e a próxima vez), as pessoas da casa e os deméritos do placar.",
    entrada: obj({}),
  },
  {
    nome: "placar",
    titulo: "Placar",
    grava: false,
    descricao: "O placar de pontos do período (quem lidera, os prêmios), o extrato do que deu ou tirou pontos e os períodos anteriores.",
    entrada: obj({ limite: { type: "integer", minimum: 1, maximum: 100, description: "Linhas do extrato. Padrão: 30." } }),
  },
  {
    nome: "criar_compromisso",
    titulo: "Criar compromisso",
    grava: true,
    descricao:
      "Cria um evento num calendário: um compromisso ou lembrete (padrão) ou um modelo: remedio (precisa do horário; um horário por chamada), rotina da casa, conta a pagar (dia todo, com valor) ou manutencao (a cada X; a próxima vem da última vez). Sem inicio, fica no dia todo. Sem calendario, o padrão (ou um com o nome do modelo, como Remédios ou Casa).",
    entrada: obj(
      {
        titulo: { type: "string" },
        tipo: { type: "string", enum: TIPOS, description: "Padrão: compromisso." },
        data: { type: "string", description: "AAAA-MM-DD (ou hoje, amanhã); sem data, hoje." },
        inicio: HORA,
        fim: { type: "string", description: "HH:MM; sem fim, 1 hora depois (remédio 15 min, rotina 30 min)." },
        data_fim: { type: "string", description: "Último dia de um evento de dia todo com vários dias (AAAA-MM-DD)." },
        repete: { type: "string", enum: Object.keys(REPETE), description: "Padrão: nao; remédio e rotina: diario; conta: mensal." },
        repete_ate: { type: "string", description: "Último dia da repetição (AAAA-MM-DD); sem, para sempre." },
        calendario: { type: "string", description: "Id ou nome do calendário." },
        local: { type: "string" },
        notas: { type: "string" },
        quem: { type: "string", description: "remedio: quem toma; rotina e manutencao: quem faz." },
        dose: { type: "string", description: "remedio: a dose (ex.: 1 comprimido)." },
        pontos: { type: "integer", minimum: 0, maximum: 1000, description: "rotina e manutencao: pontos no placar." },
        periodo: { type: "string", enum: PERIODS.map((p) => p.id), description: "rotina sem horário: a parte do dia." },
        volta_dias: { type: "integer", minimum: 1, maximum: 365, description: "rotina que volta N dias depois de feita (em vez de repete)." },
        valor: { type: "number", exclusiveMinimum: 0, description: "conta: o valor em reais." },
        a_cada: { type: "string", description: "manutencao: de quanto em quanto tempo (ex.: 15 dias, 6 meses, 1 ano). Padrão: 6 meses." },
        ultima_vez: { type: "string", description: "manutencao: quando foi feita pela última vez (AAAA-MM-DD); padrão: hoje." },
      },
      ["titulo"],
    ),
  },
  {
    nome: "editar_compromisso",
    titulo: "Editar compromisso",
    grava: true,
    descricao: "Muda um evento (só o que vier). Num modelo, muda também quem, dose, pontos ou valor. Mudar a data ou o início mantém a duração.",
    entrada: obj(
      {
        id: ID,
        titulo: { type: "string" },
        data: DATA,
        inicio: HORA,
        fim: HORA,
        dia_todo: { type: "boolean" },
        local: { type: "string", description: "Vazio tira o local." },
        notas: { type: "string", description: "Vazio tira as notas." },
        quem: { type: "string" },
        dose: { type: "string" },
        pontos: { type: "integer", minimum: 0, maximum: 1000 },
        valor: { type: "number", exclusiveMinimum: 0 },
        escopo: ESCOPO(false),
      },
      ["id"],
    ),
  },
  {
    nome: "apagar_compromisso",
    titulo: "Apagar compromisso",
    grava: true,
    apaga: true,
    descricao: "Apaga um evento do calendário (num que se repete: só este dia, este e os próximos ou a série toda).",
    entrada: obj({ id: ID, escopo: ESCOPO(true) }, ["id"]),
  },
  {
    nome: "marcar_feito",
    titulo: "Marcar como feito",
    grava: true,
    descricao:
      "Marca um remédio como tomado, uma rotina ou manutenção como feita ou uma conta como paga (o id de cronologia_resumo; contas do GerencIA também). Com feito false, desfaz. quem: quem fez (ganha os pontos do placar); sem quem, a pessoa que está usando.",
    entrada: obj({ id: ID, feito: { type: "boolean", description: "Padrão: true." }, quem: { type: "string" } }, ["id"]),
  },
  {
    nome: "pular",
    titulo: "Pular esta vez",
    grava: true,
    descricao:
      "Pula esta vez de uma rotina (não feita, sem pontos; a que volta N dias depois de feita vai para a próxima data), de uma manutenção (vai para a próxima vez, um intervalo depois da data dela, sem pontos nem histórico) ou de um remédio (não tomado de propósito: sem aviso, fora das atrasadas). Desfaz com cronologia_marcar_feito e feito false.",
    entrada: obj({ id: ID }, ["id"]),
  },
  {
    nome: "dar_pontos",
    titulo: "Dar ou tirar pontos",
    grava: true,
    descricao: "No placar: pontos avulsos para alguém (algo fora da agenda, como lavar o carro; negativos tiram) ou um demérito da lista (desconta os pontos dele). Um dos dois. Pausado nas férias.",
    entrada: obj(
      {
        quem: { type: "string" },
        pontos: { type: "integer", minimum: -1000, maximum: 1000 },
        motivo: { type: "string", description: "O que foi feito (com pontos)." },
        demerito: { type: "string", description: "O nome do demérito (de cronologia_cadastros)." },
      },
      ["quem"],
    ),
  },
];
const POR_NOME = new Map(FERRAMENTAS.map((f) => [f.nome, f]));

export const lista = () => FERRAMENTAS.map((f) => ({ ...f, apaga: !!f.apaga }));

// ------------------------------------------------------------------ helpers

const pad = (n) => String(n).padStart(2, "0");
const ymd = ymdOf;
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const fromYmd = (s) => {
  const [y, m, d] = String(s).slice(0, 10).split("-").map(Number);
  return new Date(y, m - 1, d);
};
const isDay = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s || ""));
const msOf = (s) => (isDay(s) ? fromYmd(s).getTime() : Date.parse(s));
const hm = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
const dm = (s) => (isDay(String(s).slice(0, 10)) ? `${String(s).slice(8, 10)}/${String(s).slice(5, 7)}/${String(s).slice(0, 4)}` : String(s || ""));
const json = (v) => JSON.stringify(v);
const linha = (v, n = 200) => String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, n);
const texto = (v, n = 2000) => String(v == null ? "" : v).replace(/\r/g, "").trim().slice(0, n);
const money = (v) => (v == null ? "" : `R$ ${Number(v).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`);
const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
const utcStamp = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** A day the AI wrote: AAAA-MM-DD, DD/MM/AAAA, DD/MM, hoje, amanhã, ontem (a real day of the calendar). */
export function parseDia(v, hoje, campo = "data") {
  const s = foldText(v);
  if (!s || s === "hoje") return startOfDay(hoje);
  if (s === "amanha") return addDays(hoje, 1);
  if (s === "depois de amanha") return addDays(hoje, 2);
  if (s === "ontem") return addDays(hoje, -1);
  let y;
  let m;
  let d;
  let r = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(s);
  if (r) [y, m, d] = [r[1], r[2], r[3]].map(Number);
  else if ((r = /^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?$/.exec(s))) [d, m, y] = [Number(r[1]), Number(r[2]), r[3] ? Number(r[3]) : hoje.getFullYear()];
  const t = r ? new Date(y, m - 1, d) : null;
  if (!t || t.getFullYear() !== y || t.getMonth() !== m - 1 || t.getDate() !== d) throw erro(`${campo}: data inválida (${v}). Use AAAA-MM-DD.`);
  return t;
}

/** A time: HH:MM, H:MM, 9h, 9h30, 14:00:00 -> "HH:MM". */
export function parseHora(v, campo = "inicio") {
  const r = /^(\d{1,2})(?:[:h](\d{2})?)?(?::\d{2})?$/.exec(linha(v).toLowerCase().replace(/\s/g, ""));
  const h = r ? Number(r[1]) : NaN;
  const m = r && r[2] ? Number(r[2]) : 0;
  if (!(h >= 0 && h <= 23 && m >= 0 && m <= 59)) throw erro(`${campo}: horário inválido (${v}). Use HH:MM.`);
  return `${pad(h)}:${pad(m)}`;
}

const at = (day, t) => {
  const [h, m] = t.split(":").map(Number);
  return new Date(day.getFullYear(), day.getMonth(), day.getDate(), h, m);
};

/** "FREQ=WEEKLY;BYDAY=MO,WE" -> "toda semana (seg, qua)". */
export function repeteTexto(rrule) {
  if (!rrule) return "";
  const p = Object.fromEntries(String(rrule).replace(/^RRULE:/, "").split(";").map((x) => x.split("=")));
  const n = Number(p.INTERVAL || 1);
  const u = { DAILY: ["todo dia", "dias"], WEEKLY: ["toda semana", "semanas"], MONTHLY: ["todo mês", "meses"], YEARLY: ["todo ano", "anos"] }[p.FREQ];
  if (!u) return "repete";
  let s = n > 1 ? `a cada ${n} ${u[1]}` : u[0];
  if (p.BYDAY && p.FREQ === "WEEKLY") {
    const map = { SU: "dom", MO: "seg", TU: "ter", WE: "qua", TH: "qui", FR: "sex", SA: "sáb" };
    s += ` (${p.BYDAY.split(",").map((d) => map[d] || d).join(", ")})`;
  }
  if (p.COUNT) s += `, ${plural(Number(p.COUNT), "vez", "vezes")}`;
  else if (p.UNTIL && Number.isFinite(quandoMs(p.UNTIL))) s += ` até ${dm(ymd(new Date(quandoMs(p.UNTIL))))}`; // 23:59 here is already tomorrow in UTC
  return s;
}

/** The parts of an occurrence id ("calendar.casa|uid|2026-11-08" or "...|20261108T190000"): {cal, uid, quando}. */
export function partesId(id) {
  const s = String(id || "").trim();
  const i = s.indexOf("|");
  const j = s.lastIndexOf("|");
  if (i < 1 || j <= i + 1 || j === s.length - 1) return null;
  return { cal: s.slice(0, i), uid: s.slice(i + 1, j), quando: s.slice(j + 1) };
}

/** When an id points to: a start (ISO or AAAA-MM-DD) or a recurrence id (20261108, 20261108T190000, ...Z). */
export function quandoMs(q) {
  const r = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?$/.exec(String(q || ""));
  if (r) {
    const [y, m, d, h = 0, mi = 0, s = 0] = r.slice(1, 7).map((x) => Number(x || 0));
    return r[7] ? Date.UTC(y, m - 1, d, h, mi, s) : new Date(y, m - 1, d, h, mi, s).getTime();
  }
  return msOf(q);
}

const modelo = (k) => (k ? KINDS[k.kind].label : null);
const situacaoManut = (m) => (m.state === "vencida" ? `vencida há ${plural(-m.days, "dia", "dias")}` : m.days === 0 ? "vence hoje" : m.state === "perto" ? `vence em ${plural(m.days, "dia", "dias")}` : "em dia");

// ------------------------------------------------------------------ the tools

export class Ferramentas {
  /**
   * store, home, gerencia (contas do GerencIA) and gerenciaOn(); calStates() (id -> state of Home Assistant);
   * fetchEvents(cal, startIso, endIso) -> events; createEvent(cal, ev), updateEvent(cal, uid, ev, {recurrence_id,
   * recurrence_range}), deleteEvent(cal, uid, opts): the same as the screen's commands.
   */
  constructor({ store, home, gerencia, gerenciaOn = () => false, calStates, fetchEvents, createEvent, updateEvent, deleteEvent, log }) {
    Object.assign(this, { store, home, gerencia, gerenciaOn, calStates, fetchEvents, createEvent, updateEvent, deleteEvent, log });
  }

  /** Runs a tool: {texto, grava}. A wrong argument throws ErroFerramenta (400); an unknown name, status 404. */
  async chamar(nome, argumentos, { pessoa, cliente } = {}, now = new Date()) {
    const f = POR_NOME.get(String(nome || ""));
    if (!f) throw Object.assign(new Error(`Ferramenta desconhecida: ${nome}.`), { status: 404 });
    const a = argumentos && typeof argumentos === "object" && !Array.isArray(argumentos) ? argumentos : {};
    const p = pessoa && typeof pessoa === "object" ? pessoa : {};
    // who connected (approved in the panel): the person of Home Assistant by the id, else the name sent
    const known = typeof p.id === "string" && this.home.persons ? this.home.persons.get(p.id) : null;
    const ctx = { nome: linha(known ? known.name : p.nome, 40), cliente: linha(cliente, 20) || "CorrerIA" };
    // the Extrato of the placar says who did it and where from ("pelo Claude")
    return asActor({ by: this.home.participant(ctx.nome) || ctx.nome, via: ctx.cliente }, async () => {
      try {
        const texto = await this[`_${f.nome}`](a, ctx, now);
        return { texto, grava: f.grava };
      } catch (err) {
        // what the rules of the app (or the calendar) refuse is said to the AI as a wrong argument
        if (!err.status && ERROS_DA_REGRA.has(err.code)) throw erro(err.message);
        throw err;
      }
    });
  }

  // ---------------------------------------------------------------- calendars

  /** Every calendar of Home Assistant: name (as renamed here), what it allows, hidden or out. */
  calendarios() {
    const prefs = this.store.data.calendars || {};
    return [...this.calStates()]
      .filter(([, st]) => st)
      .map(([id, st]) => {
        const p = prefs[id] || {};
        const f = Number((st.attributes && st.attributes.supported_features) || 0);
        return { id, nome: p.name || (st.attributes && st.attributes.friendly_name) || id, cria: !!(f & F.CREATE), apaga: !!(f & F.DELETE), edita: !!(f & F.UPDATE), oculto: !!p.hidden, fora: st.state === "unavailable" };
      })
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }

  /** The calendar of Novo: the one chosen in Opções, else one that lets edit and delete later (the same rule as the screen). */
  padrao() {
    const w = this.calendarios().filter((c) => c.cria && !c.fora);
    const pref = this.store.data.app.default_calendar;
    const vis = w.filter((c) => !c.oculto);
    return w.find((c) => c.id === pref) || vis.find((c) => c.edita && c.apaga) || vis.find((c) => c.apaga) || vis[0] || w[0] || null;
  }

  /** A calendar for a model: one named like it (Remédios, Casa…), else the default one. */
  doModelo(kind) {
    const w = this.calendarios().filter((c) => c.cria && !c.fora);
    const re = { remedio: /rem[eé]dio|medica|sa[uú]de/i, conta: /conta|finan|pagar|boleto/i, rotina: /casa|lar|rotina|tarefa/i, manutencao: /manuten|casa|lar/i }[kind];
    return w.find((c) => re.test(c.nome) && c.edita) || this.padrao();
  }

  /** A calendar by id or name; `cria`: it must take new events. */
  calendario(v, cria = false) {
    const all = this.calendarios().filter((c) => !c.fora);
    const n = foldText(v);
    const c = all.find((x) => x.id === String(v).trim()) || all.find((x) => foldText(x.nome) === n) || all.find((x) => n && foldText(x.nome).includes(n));
    const ok = all.filter((x) => x.cria);
    const nomes = (cria ? ok : all).map((x) => `${x.nome} (${x.id})`).join(", ") || "nenhum";
    if (!c) throw erro(`Calendário não encontrado: ${v}. ${cria ? "Os que aceitam eventos novos" : "Os calendários"}: ${nomes}.`);
    if (cria && !c.cria) throw erro(`O calendário ${c.nome} não aceita eventos novos. Os que aceitam: ${ok.map((x) => `${x.nome} (${x.id})`).join(", ") || "nenhum"}.`);
    return c;
  }

  /** The events of the calendars (the visible ones, or one) overlapping [de, ate], sorted. */
  async eventos(de, ate, cal = null) {
    const cals = cal ? [cal] : this.calendarios().filter((c) => !c.oculto && !c.fora);
    const t0 = startOfDay(de).getTime();
    const t1 = addDays(ate, 1).getTime();
    const start = isoWithOffset(new Date(t0));
    const end = isoWithOffset(new Date(t1));
    const falhas = [];
    const out = [];
    await Promise.all(
      cals.map(async (c) => {
        try {
          for (const e of await this.fetchEvents(c.id, start, end)) {
            const s = msOf(e.start);
            const f = msOf(e.end) || s;
            if (Number.isFinite(s) && s < t1 && Math.max(f, s + 1) > t0) out.push({ cal: c, e, s, f });
          }
        } catch (err) {
          falhas.push(c.nome);
        }
      }),
    );
    out.sort((a, b) => a.s - b.s || String(a.e.summary).localeCompare(String(b.e.summary), "pt-BR"));
    return { lista: out, falhas: falhas.sort() };
  }

  /** One event as the AI reads it. */
  evento({ cal, e, s, f }, comCalendario = true) {
    const k = parseKind(e.description);
    const out = { id: occurrenceKey(cal.id, e), titulo: e.summary || "(sem título)", data: ymd(new Date(s)) };
    if (isDay(e.start)) {
      out.dia_todo = true;
      const last = ymd(addDays(new Date(f), -1));
      if (last > out.data) out.ate = last;
    } else {
      out.inicio = hm(new Date(s));
      out.fim = hm(new Date(f));
      if (ymd(new Date(f - 1)) > out.data) out.termina = ymd(new Date(f - 1));
    }
    if (comCalendario) out.calendario = cal.nome;
    if (e.location) out.local = linha(e.location, 200);
    if (k) {
      out.modelo = modelo(k);
      if (k.who) out.quem = k.who;
      if (k.dose) out.dose = k.dose;
      if (k.value != null) out.valor = k.value;
      if (k.points) out.pontos = k.points;
      if (k.kind === "manutencao") out.a_cada = everyLabel(k.every);
      if (k.after) out.volta = `${everyLabel(k.after)} depois de feita`;
      if (k.notes) out.notas = linha(k.notes, 300);
    } else if (e.description) out.notas = linha(e.description, 300);
    if (e.rrule) out.repete = repeteTexto(e.rrule);
    return out;
  }

  /** "Dentista · 13/11/2026 (sexta) 15:00–16:00 · Pessoal · toda semana". */
  linhaEvento(cal, ev) {
    const s = new Date(msOf(ev.start));
    const f = new Date(msOf(ev.end));
    const quando = isDay(ev.start)
      ? `${dm(ev.start)} (${WEEKDAY[s.getDay()]})${f - s > DAY ? ` a ${dm(ymd(addDays(f, -1)))}` : ""}, dia todo`
      : `${dm(ymd(s))} (${WEEKDAY[s.getDay()]}) ${hm(s)}–${hm(f)}`;
    const k = parseKind(ev.description);
    const extra = k ? [k.dose, k.value != null ? money(k.value) : "", k.who, k.kind === "manutencao" ? `a cada ${everyLabel(k.every)}` : "", k.points ? plural(k.points, "ponto", "pontos") : ""].filter(Boolean).join(", ") : "";
    const tipo = k ? `${KINDS[k.kind].label.toLowerCase()}${extra ? ` (${extra})` : ""}` : "";
    return [ev.summary, quando, cal.nome, tipo, repeteTexto(ev.rrule)].filter(Boolean).join(" · ");
  }

  /** The event of an id, read again from Home Assistant: {cal, raw}. */
  async acharEvento(id) {
    const p = partesId(id);
    if (!p) throw erro(`Id inválido: ${id || "(vazio)"}. Use o id de cronologia_agenda ou de cronologia_resumo.`);
    if (p.cal === "gerencia") throw erro("Essa é uma conta do GerencIA: mude pelo GerencIA.");
    const cal = this.calendarios().find((c) => c.id === p.cal);
    if (!cal) throw erro(`Calendário não encontrado: ${p.cal}. Busque o evento de novo com cronologia_agenda.`);
    const t = quandoMs(p.quando);
    if (!Number.isFinite(t)) throw erro(`Id inválido: ${id}. Use o id de cronologia_agenda.`);
    const d0 = startOfDay(new Date(t));
    const evs = await this.fetchEvents(cal.id, isoWithOffset(addDays(d0, -1)), isoWithOffset(addDays(d0, 2)));
    const same = (e) => (e.uid || e.summary) === p.uid;
    const raw = evs.find((e) => same(e) && (e.recurrence_id || e.start) === p.quando) || evs.find((e) => same(e) && msOf(e.start) === t);
    if (!raw) throw erro(`Evento não encontrado: ${id}. Busque de novo com cronologia_agenda.`);
    return { cal, raw };
  }

  /** The id of an event just created (Home Assistant doesn't say it): read that day again. */
  async idCriado(cal, ev) {
    try {
      const s = msOf(ev.start);
      const d0 = startOfDay(new Date(s));
      const evs = await this.fetchEvents(cal.id, isoWithOffset(d0), isoWithOffset(addDays(d0, 2)));
      const e = evs.find((x) => x.summary === ev.summary && msOf(x.start) === s);
      return e ? occurrenceKey(cal.id, e) : null;
    } catch (err) {
      return null;
    }
  }

  /** A model occurrence followed by the app (dose, routine, bill, maintenance) by its id. */
  ocorrencia(id) {
    const o = this.home.findOccurrence(id);
    if (o) return o;
    const p = partesId(id);
    if (!p) return null;
    const t = quandoMs(p.quando);
    for (const x of this.home.occurrences()) if (x.cal === p.cal && (x.raw.uid || x.raw.summary) === p.uid && (x.raw.recurrence_id === p.quando || x.start === t)) return x;
    return null;
  }

  index(now) {
    this.home.rebuild();
    return this.home.index || { meds: [], routines: [], bills: [], maint: [], catalog: [], people: [], checks: {} };
  }

  placarOn() {
    const st = scoreSettings(this.store.data.app);
    return st.enabled && st.participants.length > 0 ? st : null;
  }

  // ---------------------------------------------------------------- reading

  async _resumo(a, ctx, now) {
    const ix = this.index(now);
    const hoje = startOfDay(now);
    const st = this.placarOn();
    const out = { agora: `${ymd(now)} ${hm(now)} (${WEEKDAY[now.getDay()]})` };
    const away = cleanAway(this.store.data.app.away);
    if (away && away.to >= ymd(hoje)) out.ferias = { de: away.from, ate: away.to, agora: ymd(hoje) >= away.from, regra: "rotinas, tarefas e manutenção pausadas; remédios continuam" };
    const { lista: evs, falhas } = await this.eventos(hoje, addDays(hoje, 1));
    const comp = evs.filter((x) => !parseKind(x.e.description));
    const noDia = (d) => comp.filter((x) => x.s < addDays(d, 1).getTime() && Math.max(x.f, x.s + 1) > d.getTime()).map((x) => this.evento(x));
    out.compromissos = { hoje: noDia(hoje), amanha: noDia(addDays(hoje, 1)) };
    if (falhas.length) out.calendarios_sem_resposta = falhas;
    out.remedios_hoje = ix.meds.map((m) => {
      const r = { id: m.key, nome: m.summary, hora: m.time || "dia todo" };
      if (m.dose) r.dose = m.dose;
      if (m.who) r.quem = m.who;
      r.situacao = m.state === "tomado" ? "tomado" : m.state === "pulado" ? "pulado" : m.state === "atrasado" ? `atrasado (${m.late_min} min)` : m.state === "agora" ? "na hora" : "mais tarde";
      if (m.taken && m.taken.by) r.marcado_por = m.taken.by;
      return r;
    });
    out.rotinas_hoje = ix.routines.map((x) => {
      const r = { id: x.key, nome: x.summary, quando: x.time || (periodInfo(x.period) ? periodInfo(x.period).when : "dia todo") };
      if (x.who) r.quem = x.who;
      if (st && x.points) r.pontos = x.points;
      if (x.after) r.volta = `${everyLabel(x.after)} depois de feita`;
      r.situacao = x.done ? (x.done.skipped ? "pulada" : "feita") : x.yesterday ? "de ontem, não feita" : x.late > 0 ? `atrasada ${plural(x.late, "dia", "dias")}` : "a fazer";
      if (x.done && x.done.by && !x.done.skipped) r.feita_por = x.done.by;
      return r;
    });
    const contas = ix.bills.map((b) => ({ id: b.key, nome: b.summary, valor: b.value, vence: b.due, situacao: b.paid ? "paga" : b.overdue ? "atrasada" : "a pagar", origem: "calendário" }));
    const g = this.gerenciaOn() && this.gerencia && this.gerencia.state && this.gerencia.state.ligado ? this.gerencia.state : null;
    if (g) {
      const lim = ymd(addDays(hoje, 9));
      for (const c of g.contas || []) {
        if (c.pago || !(String(c.vencimento) <= lim)) continue;
        contas.push({ id: `gerencia|${c.id}`, nome: c.descricao, valor: c.valor, vence: c.vencimento, situacao: String(c.vencimento) < ymd(hoje) ? "atrasada" : "a pagar", origem: "GerencIA" });
      }
      contas.sort((x, y) => String(x.vence).localeCompare(String(y.vence)));
    }
    out.contas = contas;
    out.manutencao = ix.maint.map((m) => {
      const r = { id: m.key, nome: m.summary, proxima: m.due, situacao: ix.away ? "pausada nas férias" : situacaoManut(m), a_cada: everyLabel(m.every) };
      if (m.who) r.quem = m.who;
      if (m.history && m.history[0]) r.ultima_vez = m.history[0];
      if (st && m.points) r.pontos = m.points;
      return r;
    });
    if (st) {
      const s = this.home.scoreIndex(now.getTime());
      out.placar = { periodo: s.current.label, ate: ymd(addDays(fromYmd(s.current.end), -1)), pontos: Object.fromEntries(s.rows.map((r) => [r.name, r.points])), lider: s.leader || (s.rows.some((r) => r.points) ? "empate" : "ninguém pontuou") };
      const premio = s.current.reward || Object.entries(s.current.prizes || {}).map(([n, t]) => `${n}: ${t}`).join(" · ");
      if (premio) out.placar.premio = premio;
    }
    const p = this.padrao();
    out.calendario_padrao = p ? `${p.nome} (${p.id})` : null;
    return json(out);
  }

  async _agenda(a, ctx, now) {
    const hoje = startOfDay(now);
    const de = a.de ? parseDia(a.de, hoje, "de") : hoje;
    const ate = a.ate ? parseDia(a.ate, hoje, "ate") : addDays(de, 7);
    if (ate < de) throw erro("O fim do período (ate) vem antes do começo (de).");
    if ((ate - de) / DAY > MAX_DIAS) throw erro(`Período grande demais (até ${MAX_DIAS} dias).`);
    const cal = a.calendario ? this.calendario(a.calendario) : null;
    const limite = Math.max(1, Math.min(MAX_LISTA, Math.round(Number(a.limite) || 200)));
    const busca = foldText(a.busca);
    const { lista: evs, falhas } = await this.eventos(de, ate, cal);
    const achados = busca ? evs.filter((x) => [x.e.summary, x.e.location, x.e.description].some((t) => foldText(t).includes(busca))) : evs;
    const out = { periodo: { de: ymd(de), ate: ymd(ate) }, encontrados: achados.length, mostrando: Math.min(limite, achados.length), eventos: achados.slice(0, limite).map((x) => this.evento(x)) };
    if (falhas.length) out.calendarios_sem_resposta = falhas;
    return json(out);
  }

  async _cadastros(a, ctx, now) {
    const ix = this.index(now);
    const p = this.padrao();
    const st = this.placarOn();
    const nomeCal = new Map(this.calendarios().map((c) => [c.id, c.nome]));
    const calendarios = this.calendarios().map((c) => {
      const r = { id: c.id, nome: c.nome, pode: c.cria ? ["criar", ...(c.edita || c.apaga ? ["editar"] : []), ...(c.apaga ? ["apagar"] : [])].join(", ") : "só ler" };
      if (p && p.id === c.id) r.padrao = true;
      if (c.oculto) r.oculto = true;
      if (c.fora) r.fora_do_ar = true;
      return r;
    });
    const cadastrados = (ix.catalog || []).slice(0, 300).map((c) => {
      const r = { id: c.key, tipo: KINDS[c.kind].label, nome: c.summary, quando: c.time || (periodInfo(c.period) ? periodInfo(c.period).when : "dia todo") };
      r.repete = c.kind === "manutencao" ? `a cada ${everyLabel(c.every)}` : c.after ? `volta ${everyLabel(c.after)} depois de feita` : c.rrule ? repeteTexto(c.rrule) : "uma vez";
      r.proxima = c.next;
      if (c.late) r.atrasada = true;
      if (c.who) r.quem = c.who;
      if (c.dose) r.dose = c.dose;
      if (c.value != null) r.valor = c.value;
      if (st && c.points) r.pontos = c.points;
      r.calendario = nomeCal.get(c.cal) || c.cal;
      return r;
    });
    const out = { calendarios, cadastrados, pessoas: (ix.people || []).map((x) => (x.pet ? `${x.name} (pet)` : x.name)) };
    out.placar = st ? { participantes: st.participants, demeritos: (this.store.data.app.demerits || []).map((d) => ({ nome: d.title, pontos: d.points })) } : "desligado";
    return json(out);
  }

  async _placar(a, ctx, now) {
    const st = this.placarOn();
    if (!st) return "O placar está desligado no CronologIA (Mais › Configurações › Placar).";
    const s = this.home.scoreIndex(now.getTime());
    const limite = Math.max(1, Math.min(100, Math.round(Number(a.limite) || 30)));
    const last = (end) => ymd(addDays(fromYmd(end), -1));
    const quando = (iso) => {
      const d = new Date(iso);
      return `${dm(ymd(d))} ${hm(d)}`;
    };
    const extrato = this.home.scoreLog(0, limite, s.current.start, s.current.end).map((l) => {
      const r = { quando: quando(l.at), tipo: l.type, pessoa: l.who, pontos: l.points, o_que: l.title || "" };
      if (l.from) r.de = l.from;
      if (l.by) r.por = l.by;
      if (l.via) r.via = l.via;
      return r;
    });
    const out = {
      periodo: { nome: s.current.label, de: s.current.start, ate: last(s.current.end) },
      pontos: Object.fromEntries(s.rows.map((r) => [r.name, r.points])),
      lider: s.leader || (s.rows.some((r) => r.points) ? "empate" : "ninguém pontuou"),
    };
    const premio = (p) => p.reward || Object.entries(p.prizes || {}).map(([n, t]) => `${n}: ${t}`).join(" · ") || null;
    if (premio(s.current)) out.premio = premio(s.current);
    if (premio(s.next)) out.premio_do_proximo = premio(s.next);
    out.extrato = extrato;
    out.extrato_total = s.log_count;
    out.anteriores = (s.history || []).slice(0, 5).map((h) => ({ de: h.start, ate: last(h.end), vencedor: h.winner || "empate", pontos: h.totals, ...(h.reward ? { premio: h.reward, entregue: !!h.delivered } : {}) }));
    out.demeritos = (this.store.data.app.demerits || []).map((d) => ({ nome: d.title, pontos: d.points }));
    return json(out);
  }

  // ---------------------------------------------------------------- writing

  async _criar_compromisso(a, ctx, now) {
    const tipo = a.tipo == null || a.tipo === "" ? "compromisso" : String(a.tipo);
    if (!TIPOS.includes(tipo)) throw erro(`tipo inválido: ${a.tipo}. Use: ${TIPOS.join(", ")}.`);
    const titulo = linha(a.titulo, 200);
    if (!titulo) throw erro("Falta o titulo.");
    // fields of other models: a wrong call says so instead of losing them
    const so = { dose: ["remedio"], quem: ["remedio", "rotina", "manutencao"], pontos: ["rotina", "manutencao"], periodo: ["rotina"], volta_dias: ["rotina"], valor: ["conta"], a_cada: ["manutencao"], ultima_vez: ["manutencao"] };
    for (const [campo, tipos] of Object.entries(so)) if (a[campo] != null && a[campo] !== "" && !tipos.includes(tipo)) throw erro(`${campo} só vale para tipo ${tipos.join(" ou ")}.`);
    const hoje = startOfDay(now);
    const dia = parseDia(a.data, hoje, "data");
    const inicio = a.inicio ? parseHora(a.inicio, "inicio") : null;
    const fim = a.fim ? parseHora(a.fim, "fim") : null;
    if (fim && !inicio) throw erro("fim sem inicio: mande o inicio também (ou nenhum dos dois, para o dia todo).");
    if (a.data_fim && inicio) throw erro("data_fim é só para o dia todo; com horário, use fim (passando da meia-noite, termina no dia seguinte).");
    const cal = a.calendario ? this.calendario(a.calendario, true) : tipo === "compromisso" ? this.padrao() : this.doModelo(tipo);
    if (!cal) throw erro("Nenhum calendário do Home Assistant aceita eventos novos.");
    let k = null;
    if (tipo !== "compromisso") {
      k = { kind: tipo, notes: texto(a.notas) };
      const who = linha(a.quem, 40);
      const pontos = Math.max(0, Math.min(1000, Math.round(Number(a.pontos) || 0)));
      if (tipo === "remedio") {
        if (!inicio) throw erro("Remédio precisa do horário (inicio). Em mais de um horário, chame uma vez para cada um.");
        Object.assign(k, { dose: linha(a.dose, 80), who, alert: true });
      } else if (tipo === "rotina") {
        Object.assign(k, { who, points: pontos, period: "", rooms: [], equips: [] });
        if (a.periodo) {
          if (inicio) throw erro("periodo é para a rotina sem horário (sem inicio).");
          if (!periodInfo(a.periodo)) throw erro(`periodo inválido: ${a.periodo}. Use: ${PERIODS.map((p) => p.id).join(", ")}.`);
          k.period = a.periodo;
        }
        if (a.volta_dias != null && a.volta_dias !== "") {
          const n = Math.round(Number(a.volta_dias));
          if (!(n >= 1 && n <= 365)) throw erro("volta_dias: de 1 a 365.");
          Object.assign(k, { after: { n, unit: "dias" }, history: [] });
        }
      } else if (tipo === "conta") {
        if (inicio) throw erro("Conta fica no dia todo do vencimento (sem inicio).");
        k.value = typeof a.valor === "number" ? Math.round(a.valor * 100) / 100 : parseMoney(a.valor);
        if (!(k.value > 0)) throw erro("Conta precisa do valor (em reais).");
      } else {
        const every = a.a_cada ? parseEvery(a.a_cada) : { n: 6, unit: "meses" };
        if (!every) throw erro(`a_cada inválido: ${a.a_cada}. Exemplos: 15 dias, 2 semanas, 6 meses, 1 ano.`);
        const ultima = a.ultima_vez ? parseDia(a.ultima_vez, hoje, "ultima_vez") : hoje;
        if (ultima > hoje) throw erro("ultima_vez não pode ser depois de hoje.");
        Object.assign(k, { who, every, warn: 7, history: [ymd(ultima)], points: pontos, rooms: [], equips: [] });
      }
    }
    // the repetition: the defaults of the screen's forms
    const moves = tipo === "manutencao" || !!(k && k.after);
    const padrao = moves ? "nao" : tipo === "remedio" || tipo === "rotina" ? "diario" : tipo === "conta" ? "mensal" : "nao";
    const repete = a.repete == null || a.repete === "" ? padrao : String(a.repete);
    if (!(repete in REPETE)) throw erro(`repete inválido: ${a.repete}. Use: ${Object.keys(REPETE).join(", ")}.`);
    if (moves && repete !== "nao") throw erro(tipo === "manutencao" ? "Manutenção se repete pelo a_cada (sem repete)." : "Rotina com volta_dias não usa repete.");
    if (tipo === "conta" && !["nao", "mensal", "anual"].includes(repete)) throw erro("Conta: repete nao, mensal ou anual.");
    if (a.repete_ate && repete === "nao") throw erro("repete_ate sem repete.");

    const ev = { summary: titulo };
    const description = k ? buildDescription(k) : texto(a.notas, 8000);
    if (description) ev.description = description;
    if (linha(a.local)) ev.location = linha(a.local, 500);
    let allDay = !inicio;
    let first = dia;
    if (tipo === "manutencao") {
      // the next one: the last time plus the interval (as Nova manutenção does)
      first = addEvery(fromYmd(k.history[0]), k.every);
      ev.start = ymd(first);
      ev.end = ymd(addDays(first, 1));
      allDay = true;
    } else if (allDay) {
      const last = a.data_fim ? parseDia(a.data_fim, hoje, "data_fim") : dia;
      if (last < dia) throw erro("data_fim vem antes da data.");
      ev.start = ymd(dia);
      ev.end = ymd(addDays(last, 1));
    } else {
      let s = at(dia, inicio);
      // a dose or chore starting today at a time already gone starts at the next one (no late dose this morning)
      if ((tipo === "remedio" || tipo === "rotina") && repete !== "nao" && s < now && ymd(dia) === ymd(hoje)) {
        s = repete === "semanal" ? addDays(s, 7) : repete === "mensal" ? new Date(s.getFullYear(), s.getMonth() + 1, s.getDate(), s.getHours(), s.getMinutes()) : repete === "anual" ? new Date(s.getFullYear() + 1, s.getMonth(), s.getDate(), s.getHours(), s.getMinutes()) : new Date(s.getFullYear(), s.getMonth(), s.getDate() + 1, s.getHours(), s.getMinutes());
        first = startOfDay(s);
      }
      let e = fim ? at(startOfDay(s), fim) : new Date(s.getTime() + (tipo === "remedio" ? 15 : tipo === "rotina" ? 30 : 60) * 60000);
      if (e <= s) e = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1, e.getHours(), e.getMinutes()); // ends after midnight
      ev.start = isoWithOffset(s);
      ev.end = isoWithOffset(e);
    }
    if (REPETE[repete]) {
      let r = REPETE[repete];
      if (a.repete_ate) {
        const end = parseDia(a.repete_ate, hoje, "repete_ate");
        if (end < first) throw erro("repete_ate vem antes do começo.");
        r += allDay ? `;UNTIL=${ymd(end).replace(/-/g, "")}` : `;UNTIL=${utcStamp(new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59))}`;
      }
      ev.rrule = r;
    }
    await this.createEvent(cal.id, ev);
    const id = await this.idCriado(cal, ev);
    this.log.info(`CorrerIA: ${ctx.cliente}${ctx.nome ? ` (${ctx.nome})` : ""} criou ${titulo} em ${cal.id}`);
    return `Criado: ${this.linhaEvento(cal, ev)}. ${id ? `id: ${id}` : "O id aparece em cronologia_agenda."}`;
  }

  async _editar_compromisso(a, ctx, now) {
    const campos = ["titulo", "data", "inicio", "fim", "dia_todo", "local", "notas", "quem", "dose", "pontos", "valor"];
    if (!campos.some((c) => c in a)) throw erro(`Diga o que muda: ${campos.join(", ")}.`);
    const escopo = a.escopo || "este";
    if (!["este", "este_e_proximos"].includes(escopo)) throw erro("escopo: este ou este_e_proximos.");
    const { cal, raw } = await this.acharEvento(a.id);
    if (!raw.uid) throw erro("Esse evento não muda por aqui: o calendário não dá um identificador para ele.");
    if (!(cal.edita || (cal.cria && cal.apaga))) throw erro(`O calendário ${cal.nome} não deixa mudar eventos.`);
    const k = parseKind(raw.description);
    const kind = k ? k.kind : "compromisso";
    const so = { quem: ["remedio", "rotina", "manutencao"], dose: ["remedio"], pontos: ["rotina", "manutencao"], valor: ["conta"] };
    for (const [campo, tipos] of Object.entries(so)) if (campo in a && !tipos.includes(kind)) throw erro(`${campo} só vale num evento de ${tipos.map((t) => KINDS[t].label.toLowerCase()).join(" ou ")}${k ? `; este é ${KINDS[kind].label.toLowerCase()}` : ""}.`);
    const hoje = startOfDay(now);
    const wasAllDay = isDay(raw.start);
    const s0 = new Date(msOf(raw.start));
    const e0 = new Date(msOf(raw.end));
    const day = "data" in a ? parseDia(a.data, hoje, "data") : startOfDay(s0);
    if (a.dia_todo === true && (a.inicio || a.fim)) throw erro("dia_todo com inicio ou fim: escolha um.");
    const allDay = a.dia_todo === true || (!a.inicio && wasAllDay);
    if (allDay && a.dia_todo === false) throw erro("Para tirar do dia todo, mande o inicio.");
    if (allDay && a.fim) throw erro("Para pôr horário num evento de dia todo, mande o inicio.");
    const ev = { summary: "titulo" in a ? linha(a.titulo, 200) || raw.summary : raw.summary };
    if (allDay) {
      const len = wasAllDay ? Math.max(1, Math.round((startOfDay(e0) - startOfDay(s0)) / DAY)) : 1;
      ev.start = ymd(day);
      ev.end = ymd(addDays(day, len));
    } else {
      const s = at(day, a.inicio ? parseHora(a.inicio, "inicio") : hm(s0));
      let e;
      if (a.fim) e = at(day, parseHora(a.fim, "fim"));
      else if (!wasAllDay) e = new Date(s.getTime() + (e0 - s0)); // the same length
      else e = new Date(s.getTime() + (kind === "remedio" ? 15 : kind === "rotina" ? 30 : 60) * 60000);
      if (e <= s) e = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1, e.getHours(), e.getMinutes());
      ev.start = isoWithOffset(s);
      ev.end = isoWithOffset(e);
    }
    let description;
    if (k) {
      const nk = { ...k };
      if ("notas" in a) nk.notes = texto(a.notas);
      if ("quem" in a) nk.who = linha(a.quem, 40);
      if ("dose" in a) nk.dose = linha(a.dose, 80);
      if ("pontos" in a) nk.points = Math.max(0, Math.min(1000, Math.round(Number(a.pontos) || 0)));
      if ("valor" in a) {
        nk.value = typeof a.valor === "number" ? Math.round(a.valor * 100) / 100 : parseMoney(a.valor);
        if (!(nk.value > 0)) throw erro(`valor inválido: ${a.valor}.`);
      }
      description = buildDescription(nk);
    } else description = "notas" in a ? texto(a.notas, 8000) : raw.description || "";
    if (description) ev.description = description;
    const loc = "local" in a ? linha(a.local, 500) : raw.location || "";
    if (loc) ev.location = loc;
    const antes = this.linhaEvento(cal, raw);
    // one day of a series (as the screen asks Só este / Este e os próximos)
    const repeats = !!raw.recurrence_id;
    let nota = "";
    let novoId = null;
    if (cal.edita) {
      const opts = {};
      if (repeats) {
        opts.recurrence_id = raw.recurrence_id;
        if (escopo === "este_e_proximos") {
          opts.recurrence_range = "THISANDFUTURE";
          ev.rrule = raw.rrule;
          nota = " (este e os próximos)";
        } else nota = " (só este dia)";
      } else if (raw.rrule) ev.rrule = raw.rrule;
      await this.updateEvent(cal.id, raw.uid, ev, opts);
      novoId = repeats ? occurrenceKey(cal.id, raw) : occurrenceKey(cal.id, { uid: raw.uid, start: ev.start });
    } else {
      // a calendar that can't change events (the Google one in Home Assistant): deleted and created again, like
      // the screen does; a repeating one is the whole series, starting on the day that was edited
      if (raw.rrule) {
        ev.rrule = raw.rrule;
        nota = " (a série recomeça neste dia)";
      }
      await this.home.recreate(cal.id, raw, ev);
      this.home.refreshCalendar(cal.id);
      novoId = await this.idCriado(cal, ev);
    }
    this.log.info(`CorrerIA: ${ctx.cliente}${ctx.nome ? ` (${ctx.nome})` : ""} mudou ${raw.summary} em ${cal.id}`);
    return `Alterado${nota}: ${this.linhaEvento(cal, ev)}. Antes: ${antes}.${novoId ? ` id: ${novoId}` : ""}`;
  }

  async _apagar_compromisso(a, ctx) {
    const escopo = a.escopo || "este";
    if (!["este", "este_e_proximos", "todos"].includes(escopo)) throw erro("escopo: este, este_e_proximos ou todos.");
    const { cal, raw } = await this.acharEvento(a.id);
    if (!raw.uid) throw erro("Esse evento não sai por aqui: o calendário não dá um identificador para ele.");
    if (!cal.apaga) throw erro(`O calendário ${cal.nome} não deixa apagar eventos.`);
    const repeats = !!raw.recurrence_id;
    const opts = {};
    if (repeats && escopo !== "todos") {
      opts.recurrence_id = raw.recurrence_id;
      if (escopo === "este_e_proximos") opts.recurrence_range = "THISANDFUTURE";
    }
    await this.deleteEvent(cal.id, raw.uid, opts);
    this.log.info(`CorrerIA: ${ctx.cliente}${ctx.nome ? ` (${ctx.nome})` : ""} apagou ${raw.summary} de ${cal.id}`);
    const nota = !repeats ? "" : escopo === "todos" ? " (a série toda)" : escopo === "este_e_proximos" ? " (este e os próximos)" : " (só este dia)";
    return `Apagado${nota}: ${this.linhaEvento(cal, raw)}.`;
  }

  /** "+10 pontos para Ana" when the action gave points (a key of the placar). */
  pontosDe(key) {
    const e = key && this.store.pointsByKey(key);
    return e ? `; ${e.points > 0 ? "+" : ""}${plural(e.points, "ponto", "pontos")} para ${e.who}` : "";
  }

  async _marcar_feito(a, ctx) {
    const id = linha(a.id, 600);
    if (!id) throw erro("Falta o id.");
    const feito = a.feito !== false;
    const by = ctx.nome || ctx.cliente;
    const quem = linha(a.quem, 40) || ctx.nome;
    if (id.startsWith("gerencia|")) {
      if (!this.gerenciaOn()) throw erro("As contas do GerencIA estão desligadas no CronologIA (Mais › Configurações › Integrações).");
      const cid = id.slice(9);
      const c = ((this.gerencia.state && this.gerencia.state.contas) || []).find((x) => x.id === cid);
      if (!c) throw erro(`Conta do GerencIA não encontrada: ${cid}. Veja as contas em cronologia_resumo.`);
      await this.gerencia.act(feito ? "pagar" : "desfazer", { id: cid });
      return `${feito ? "Paga no GerencIA" : "Voltou para a pagar no GerencIA"}: ${c.descricao} · ${money(c.valor)} · vence ${dm(c.vencimento)}.`;
    }
    const c = this.store.data.checks[id];
    const o = this.ocorrencia(id);
    if (!o) {
      const p = partesId(id);
      if (!feito && p && this.home.undo.has(`${p.cal}|${p.uid}`)) {
        await this.home.maintUndo(p.cal, p.uid);
        return "Desfeito: a manutenção voltou para a data de antes.";
      }
      // a routine that already moved to its next date (done today): Desfazer brings it back
      if (c && c.moved) {
        if (feito) return `Já estava ${c.skipped ? "pulada" : "feita"}: ${c.moved.summary || ""}.`;
        await this.home.check(id, false, by, c.kind);
        return `Desfeito: ${c.moved.summary || "a rotina"} volta para ${dm(String(c.moved.start).slice(0, 10))}.`;
      }
      throw erro(`Não achei: ${id}. Os ids de remédios, rotinas, contas e manutenção estão em cronologia_resumo.`);
    }
    const kind = o.k.kind;
    const nome = o.raw.summary || "";
    const feitoTxt = { remedio: "tomado", conta: "paga", rotina: "feita", manutencao: "feita" }[kind];
    // who did it gets the points: someone out of the placar is a mistake worth saying
    const st = this.placarOn();
    if (feito && linha(a.quem) && st && (kind === "rotina" || kind === "manutencao") && o.k.points > 0 && !this.home.participant(quem)) throw erro(`${a.quem} não está no placar. No placar: ${st.participants.join(", ")}.`);
    if (kind === "manutencao" && !o.raw.rrule) {
      if (feito) {
        const r = await this.home.maintDone(o.cal, o.raw.uid, by, quem);
        return `Feita: ${nome} (manutenção); a próxima ficou para ${dm(r.next)}${this.pontosDe(r.key)}.`;
      }
      if (this.home.undo.has(`${o.cal}|${o.raw.uid}`)) {
        await this.home.maintUndo(o.cal, o.raw.uid);
        return `Desfeito: ${nome} voltou para a data de antes.`;
      }
      throw erro(`${nome} não foi feita agora há pouco: só dá para desfazer até 30 minutos depois. Para mudar a data, use cronologia_editar_compromisso.`);
    }
    if (feito && c && !c.skipped) return `Já estava ${feitoTxt}: ${nome}.`;
    if (!feito && !c) return `${nome} já estava ${kind === "remedio" ? "por tomar" : kind === "conta" ? "a pagar" : "a fazer"}.`;
    const r = await this.home.check(o.key, feito, by, kind, quem);
    if (!feito) return `Desfeito: ${nome} voltou para ${kind === "remedio" ? "por tomar" : kind === "conta" ? "a pagar" : "a fazer"}.`;
    // a dose: whose it is; a chore: who did it
    const quemTxt = kind === "remedio" ? "" : kind === "conta" ? "" : ` por ${(this.store.data.checks[o.key] || {}).by || quem || by}`;
    const de = kind === "remedio" && o.k.who ? ` (${o.k.who})` : "";
    return `${feitoTxt[0].toUpperCase()}${feitoTxt.slice(1)}${quemTxt}: ${nome}${de}${r && r.next ? `; volta em ${dm(r.next)}` : ""}${this.pontosDe(o.key)}.`;
  }

  async _pular(a, ctx) {
    const id = linha(a.id, 600);
    if (!id) throw erro("Falta o id.");
    const o = this.ocorrencia(id);
    if (!o) throw erro(`Não achei: ${id}. Os ids das rotinas e dos remédios de hoje estão em cronologia_resumo.`);
    if (!["remedio", "rotina", "manutencao"].includes(o.k.kind)) throw erro(`Só rotina, manutenção ou remédio se pula; este é ${KINDS[o.k.kind].label.toLowerCase()}.`);
    const c = this.store.data.checks[o.key];
    if (c) throw erro(`Já está ${c.skipped ? (o.k.kind === "remedio" ? "pulado" : "pulada") : o.k.kind === "remedio" ? "tomado" : "feita"}: ${o.raw.summary}. Para desfazer, use cronologia_marcar_feito com feito false.`);
    const r = await this.home.skip(o.key, ctx.nome || ctx.cliente);
    return `Pulado: ${o.raw.summary}${r && r.next ? `; volta em ${dm(r.next)}` : ""}.`;
  }

  async _dar_pontos(a, ctx, now) {
    const st = this.placarOn();
    if (!st) throw erro("O placar está desligado no CronologIA (Mais › Configurações › Placar).");
    const quem = this.home.participant(linha(a.quem, 40));
    if (!quem) throw erro(`${a.quem || "(vazio)"} não está no placar. No placar: ${st.participants.join(", ")}.`);
    const temPontos = a.pontos != null && a.pontos !== "";
    if (temPontos === !!linha(a.demerito)) throw erro("Mande pontos (com o motivo) ou um demerito, um dos dois.");
    if (a.demerito) {
      const list = this.store.data.app.demerits || [];
      const n = foldText(a.demerito);
      const d = list.find((x) => x.id === a.demerito || foldText(x.title) === n) || list.find((x) => n && foldText(x.title).includes(n));
      if (!d) throw erro(list.length ? `Demérito não encontrado: ${a.demerito}. Os deméritos: ${list.map((x) => `${x.title} (${plural(x.points, "ponto", "pontos")})`).join(", ")}.` : "Nenhum demérito cadastrado (Recompensas › Deméritos).");
      this.home.demerit(d.id, quem);
      return `Demérito para ${quem}: ${d.title} (−${plural(d.points, "ponto", "pontos")}).`;
    }
    const n = Math.round(Number(a.pontos));
    if (!n || Math.abs(n) > 1000) throw erro("pontos: um número inteiro de -1000 a 1000, sem ser zero.");
    const motivo = linha(a.motivo, 120);
    if (!motivo) throw erro("Diga o motivo (o que foi feito).");
    this.home.extraPoints(quem, n, motivo);
    return `${n > 0 ? "+" : "−"}${plural(Math.abs(n), "ponto", "pontos")} para ${quem}: ${motivo}.`;
  }
}
