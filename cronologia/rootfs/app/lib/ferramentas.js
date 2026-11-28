// Ferramentas do CronologIA para o CorrerIA (o WhatsApp, e o Claude e o Gemini como servidor MCP da casa):
// ler a agenda e gravar nela. O CorrerIA lista as ferramentas (GET /api/integracao/ferramentas) e chama uma
// (POST {nome, argumentos, pessoa, cliente}); aqui ficam a lista e as regras. As gravações usam as mesmas
// funções da tela e do servidor (criar, mudar e apagar eventos pelo Home Assistant; Feito, Pular, Desfazer,
// manutenção feita e pontos pelo Home), e a tela se atualiza como quando outra pessoa muda algo.
// Each tool: {nome, titulo, descricao, entrada (JSON Schema), grava, apaga}. chamar() -> {texto, grava}.
import { parseKind, buildDescription, occurrenceKey, KINDS, foldText, namesOf, everyLabel, parseEvery, parseMoney, addEvery, isoWithOffset, ymdOf, periodInfo, cleanAway, PERIODS, personCalendar } from "./kinds.js";
import { scoreSettings } from "./score.js";
import { asActor } from "./actor.js";
import { MIMES } from "./anexos.js";
import { COLORS } from "./store.js";

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
  "Cada compromisso diz de quem é (de: a pessoa do calendário, ou casa); o de outra pessoa não é de quem pergunta: diga de quem é. " +
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
      "Os calendários (o que cada um deixa fazer e qual é o padrão para criar), o que está cadastrado (remédios, rotinas, contas e manutenções, com a repetição, a próxima vez e, nas rotinas e manutenções, os cômodos e os equipamentos), as pessoas da casa e os deméritos do placar.",
    entrada: obj({
      // 1.108.0: for the Ronda da casa of the CorrerIA (the routines of one room)
      comodo: { type: "string", description: "Só as rotinas e as manutenções deste cômodo (o nome, como no InventarIA)." },
    }),
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
      "Cria um evento num calendário: um compromisso ou lembrete (padrão) ou um modelo: remedio (precisa do horário; um horário por chamada), rotina da casa, conta a pagar (dia todo, com valor) ou manutencao (a cada X; a próxima vem da última vez). Sem inicio, fica no dia todo. O compromisso de uma pessoa: quem (vai para o calendário dela). Sem quem nem calendario, o padrão (ou um com o nome do modelo, como Remédios ou Casa).",
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
        quem: { type: "string", description: "compromisso: de quem é (vai para o calendário da pessoa); remedio: quem toma; rotina e manutencao: quem faz." },
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
    descricao: "Muda um evento (só o que vier). Num modelo, muda também quem, dose, pontos, comodos ou valor. Mudar a data ou o início mantém a duração. repete muda a repetição deste dia em diante (uma rotina, um remédio, uma conta que se repete; nao: este é o último).",
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
        comodos: { type: "array", items: { type: "string" }, description: "Os cômodos de uma rotina ou manutenção, pelo nome (os de cronologia_cadastros); vazio tira." },
        valor: { type: "number", exclusiveMinimum: 0 },
        repete: { type: "string", enum: Object.keys(REPETE), description: "A repetição nova, deste dia em diante (nao: para de repetir depois deste)." },
        repete_ate: { type: "string", description: "Último dia da repetição (AAAA-MM-DD); vazio: para sempre." },
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
      "Marca um remédio como tomado, uma rotina ou manutenção como feita ou uma conta como paga (o id de cronologia_resumo; contas do GerencIA também). Com feito false, desfaz. quem: quem fez (ganha os pontos do placar); sem quem, a pessoa que está usando. parte (só rotina): feita em parte, 25, 50 ou 75% (ganha essa parte dos pontos; o resto vai para o dia seguinte); o que falta ou menos: o resto, feita.",
    entrada: obj({ id: ID, feito: { type: "boolean", description: "Padrão: true." }, quem: { type: "string" }, parte: { type: "integer", enum: [25, 50, 75], description: "Feita em parte (só rotina): a porcentagem." } }, ["id"]),
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
  {
    // 1.110.0 (o dono: "todos os apps que tenham as funções de PDF ou imagem ou foto funcionem no correria/rondas"): a
    // Leitura por IA da tela (foto, print, PDF), pelo CorrerIA. `anexo` diz ao CorrerIA que esta ferramenta recebe o
    // arquivo (ele manda em `anexo`, fora dos argumentos). Nada é criado: a IA de lá propõe com criar_compromisso.
    nome: "ler_arquivo",
    titulo: "Ler foto ou PDF",
    grava: false,
    anexo: Object.keys(MIMES),
    descricao:
      "Lê com a IA do CronologIA a foto, a imagem ou o PDF que a pessoa acabou de mandar na conversa (um convite, um bilhete da escola, uma receita médica, um boleto, um print com datas) e devolve os compromissos que há nele (título, data, horário, local, repetição). Não cria nada: depois, crie com cronologia_criar_compromisso os que a pessoa quiser. Só serve logo depois de a pessoa mandar o arquivo.",
    entrada: obj({ dica: { type: "string", description: "O que a pessoa disse sobre o arquivo, se disse (ajuda a IA a ler)." } }),
  },
  {
    // 1.113.0 (o dono, à lista do que a IA não fazia: "todas"): o Modo férias de Mais › Férias
    nome: "ferias",
    titulo: "Férias",
    grava: true,
    descricao: "Liga o Modo férias de um dia a outro (as rotinas, as tarefas e a manutenção pausam; os remédios continuam), como em Mais › Férias, ou cancela as férias marcadas.",
    entrada: obj({ de: DATA, ate: DATA, cancelar: { type: "boolean" } }),
  },
  {
    // 1.118.0 (o dono, às ferramentas que faltavam para o CorrerIA: "pode colocar todas"): o Prêmio de Recompensas
    nome: "definir_premio",
    titulo: "Prêmio do placar",
    grava: true,
    descricao:
      "O prêmio de um período do placar, como em Mais › Recompensas: o mesmo para quem vencer (premio) ou um para cada pessoa (por_pessoa: quem vencer ganha o seu). periodo: este (o de agora, padrão) ou proximo. tirar: true tira o prêmio. Empate: ninguém leva.",
    entrada: obj({
      periodo: { type: "string", enum: ["este", "proximo"] },
      premio: { type: "string", description: "O prêmio de quem vencer (ex.: escolher o filme de sábado)." },
      por_pessoa: { type: "array", maxItems: 10, items: obj({ pessoa: { type: "string" }, premio: { type: "string" } }, ["pessoa", "premio"]) },
      tirar: { type: "boolean" },
    }),
  },
  {
    nome: "premio_entregue",
    titulo: "Prêmio entregue",
    grava: true,
    descricao:
      "Marca o prêmio de um período que já fechou como entregue (o Entregue do Histórico de Recompensas), ou desmarca com entregue false. Sem periodo, o mais recente com vencedor e prêmio ainda não entregue. periodo: o começo do período (o de de cronologia_placar, em anteriores).",
    entrada: obj({ periodo: DATA, entregue: { type: "boolean" } }),
  },
  {
    // o Alterar do Selecionar de Mais › Rotinas (1.114.0), pelo CorrerIA
    nome: "alterar_rotinas",
    titulo: "Alterar vários cadastros",
    grava: true,
    descricao:
      "Muda de uma vez quem faz, os pontos ou os cômodos de várias rotinas, manutenções ou remédios (os ids de cronologia_cadastros), deste em diante, como o Alterar do Selecionar de Mais › Rotinas. Só o que vier muda.",
    entrada: obj(
      {
        ids: { type: "array", minItems: 1, maxItems: 200, items: { type: "string" } },
        quem: { type: "string", description: "Quem faz (vazio: ninguém em especial)." },
        pontos: { type: "integer", minimum: 0, maximum: 1000 },
        comodos: { type: "array", items: { type: "string" }, description: "Os cômodos, pelo nome; vazio tira." },
      },
      ["ids"],
    ),
  },
  {
    // 1.119.0 (o dono, às ferramentas que faltavam para o CorrerIA: "pode seguir neles"): o Extrato e os Deméritos de Recompensas
    nome: "mudar_extrato",
    titulo: "Mudar o Extrato",
    grava: true,
    apaga: true,
    descricao:
      "Numa linha do Extrato do placar (o id dela, de cronologia_placar): tira os pontos (acao tirar: saem do placar) ou passa para outra pessoa (acao trocar, com quem), como na tela de Recompensas.",
    entrada: obj({ id: { type: "string", description: "O id da linha do extrato (de cronologia_placar)." }, acao: { type: "string", enum: ["tirar", "trocar"] }, quem: { type: "string", description: "Com trocar: quem fica com os pontos." } }, ["id", "acao"]),
  },
  {
    nome: "demeritos",
    titulo: "Deméritos",
    grava: true,
    apaga: true,
    descricao:
      "A lista dos deméritos de Recompensas (o que tira pontos, como Toalha molhada na cama): novo (nome e pontos), mudar (o nome com novo_nome e/ou os pontos) ou apagar. Para descontar um demérito de alguém, use cronologia_dar_pontos.",
    entrada: obj(
      { acao: { type: "string", enum: ["novo", "mudar", "apagar"] }, nome: { type: "string" }, pontos: { type: "integer", minimum: 1, maximum: 1000 }, novo_nome: { type: "string" } },
      ["acao", "nome"],
    ),
  },
  // 1.120.0 (o dono: "pode adicionar esses também"): os calendários de Mais › Calendários e o de cada pessoa
  {
    nome: "calendarios",
    titulo: "Calendários",
    grava: false,
    descricao: "Os calendários do Home Assistant como o app os vê: o nome, a cor, se está oculto, se aceita eventos novos e de quem é (o calendário de cada pessoa).",
    entrada: obj({}),
  },
  {
    nome: "mudar_calendario",
    titulo: "Mudar calendário",
    grava: true,
    descricao:
      "Muda como um calendário aparece no app (Mais › Calendários): oculto (some do Agora e do Calendário) ou à vista, o nome e a cor. Com de_quem, passa a ser o calendário dessa pessoa (onde entram os compromissos dela); de_quem «ninguém» tira de quem o tinha.",
    entrada: obj(
      {
        calendario: { type: "string", description: "O id (calendar.…) ou o nome." },
        oculto: { type: "boolean" },
        nome: { type: "string", description: "O nome novo no app (vazio: o do Home Assistant)." },
        cor: { type: "string", enum: COLORS },
        de_quem: { type: "string", description: "O nome da pessoa, ou «ninguém»." },
      },
      ["calendario"],
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
  constructor({ store, home, gerencia, gerenciaOn = () => false, calStates, fetchEvents, createEvent, updateEvent, deleteEvent, log, ler = null, awaySync = () => {}, prefsChanged = () => {} }) {
    Object.assign(this, { store, home, gerencia, gerenciaOn, calStates, fetchEvents, createEvent, updateEvent, deleteEvent, log, ler, awaySync, prefsChanged });
  }

  /** 1.110.0: what the AI of this app reads in the file the person sent (the same reading of the screen). */
  async _ler_arquivo(a, ctx) {
    const anexo = ctx.anexo;
    const mime = anexo && typeof anexo === "object" ? String(anexo.tipo || "").toLowerCase() : "";
    const data = anexo && typeof anexo.b64 === "string" ? anexo.b64.replace(/^data:[^,]*,/, "").replace(/\s+/g, "") : "";
    if (!data) throw erro("Falta o arquivo: peça para a pessoa mandar a foto ou o PDF na conversa e tente de novo.");
    if (!MIMES[mime]) throw erro("O CronologIA lê foto (JPG, PNG ou WebP) ou PDF. Diga isso à pessoa.");
    if (!this.ler) throw erro("A leitura por IA não está disponível no CronologIA.");
    let out;
    try {
      out = await this.ler({ text: typeof a.dica === "string" ? a.dica.slice(0, 500) : "", images: [{ data, mime }] });
    } catch (err) {
      throw erro(`O CronologIA não conseguiu ler o arquivo: ${err.message} Diga isso à pessoa, sem inventar o que há nele.`);
    }
    const evs = (out && out.events) || [];
    if (!evs.length) return "A IA do CronologIA leu o arquivo e não achou nenhum compromisso com data nele. Diga isso à pessoa e pergunte o que ela quer fazer.";
    const REP = { daily: "todo dia", weekly: "toda semana", monthly: "todo mês", yearly: "todo ano" };
    const lines = evs.map((e) => {
      const quando = `${e.date}${e.start ? ` ${e.start}` : ""}${e.end ? `–${e.end}` : ""}${e.end_date ? ` até ${e.end_date}` : ""}`;
      return `- ${e.title} · ${quando}${e.location ? ` · ${e.location}` : ""}${e.repeat ? ` · repete ${REP[e.repeat] || e.repeat}` : ""}${e.notes ? ` · notas: ${e.notes.replace(/\s+/g, " ").slice(0, 200)}` : ""}`;
    });
    return `No arquivo (lido pela IA do CronologIA${out.provider ? `, ${out.provider}` : ""}) ${evs.length === 1 ? "há 1 compromisso" : `há ${evs.length} compromissos`}:\n${lines.join("\n")}\nNada foi criado. Mostre à pessoa e crie com cronologia_criar_compromisso os que ela quiser.`;
  }

  /** Runs a tool: {texto, grava}. A wrong argument throws ErroFerramenta (400); an unknown name, status 404. */
  /**
   * 1.114.0: o Selecionar de Mais › Rotinas: muda (quem, pontos, comodos) ou apaga vários cadastros de uma vez, deste em
   * diante, com as mesmas regras do editar_compromisso e do apagar_compromisso. itens: [{id, campos}] para alterar (cada um
   * com os seus campos: o Desfazer manda os de antes) ou [id] para apagar. -> {feitos, falhas: [{nome, erro}], desfazer: [{id, campos}]}
   */
  async lote(acao, itens, { nome = "", cliente = "CronologIA" } = {}, now = new Date()) {
    if (!["alterar", "apagar"].includes(acao)) throw erro("acao: alterar ou apagar.");
    if (!Array.isArray(itens) || !itens.length) throw erro("Nada selecionado.");
    const ctx = { cliente: linha(cliente, 20) || "CronologIA", nome: linha(nome, 40) };
    const cat = new Map((this.index(now).catalog || []).map((c) => [c.key, c]));
    const out = { feitos: 0, falhas: [], desfazer: [] };
    for (const it of itens.slice(0, 200)) {
      const id = acao === "apagar" ? it : it && it.id;
      if (typeof id !== "string" || !id) {
        out.falhas.push({ nome: "?", erro: "Item inválido." });
        continue;
      }
      const row = cat.get(id);
      try {
        if (acao === "apagar") await this._apagar_compromisso({ id, escopo: "este_e_proximos" }, ctx, now);
        else {
          const c = it.campos && typeof it.campos === "object" ? it.campos : {};
          const campos = {};
          for (const k of ["quem", "pontos", "comodos"]) if (k in c) campos[k] = c[k];
          if (!Object.keys(campos).length) throw erro("Nada para mudar.");
          const t = await this._editar_compromisso({ id, ...campos, escopo: "este_e_proximos" }, ctx, now);
          const novo = / id: (\S+)$/.exec(t);
          if (row) {
            const antes = {};
            if ("quem" in campos) antes.quem = row.who || "";
            if ("pontos" in campos) antes.pontos = row.points || 0;
            if ("comodos" in campos) antes.comodos = namesOf(row.rooms, row.room);
            out.desfazer.push({ id: novo ? novo[1] : id, campos: antes });
          }
        }
        out.feitos += 1;
      } catch (err) {
        out.falhas.push({ nome: row ? row.summary : id, erro: err.message });
      }
    }
    return out;
  }

  async chamar(nome, argumentos, { pessoa, cliente, anexo = null } = {}, now = new Date()) {
    const f = POR_NOME.get(String(nome || ""));
    if (!f) throw Object.assign(new Error(`Ferramenta desconhecida: ${nome}.`), { status: 404 });
    const a = argumentos && typeof argumentos === "object" && !Array.isArray(argumentos) ? argumentos : {};
    const p = pessoa && typeof pessoa === "object" ? pessoa : {};
    // who connected (approved in the panel): the person of Home Assistant by the id, else the name sent
    const known = typeof p.id === "string" && this.home.persons ? this.home.persons.get(p.id) : null;
    const ctx = { nome: linha(known ? known.name : p.nome, 40), cliente: linha(cliente, 20) || "CorrerIA", anexo };
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

  /** 1.99.0: the calendar of a person (chosen in Mais › Avisos › Pessoas e pets, or the one with the name). */
  daPessoa(nome) {
    const w = this.calendarios().filter((c) => c.cria && !c.fora);
    const pc = personCalendar(nome, this.store.data.app.people || {}, w.map((c) => ({ id: c.id, name: c.nome })));
    if (!pc) throw erro(`${nome} não tem calendário (escolha em Mais › Avisos › Pessoas e pets) ou mande calendario. Os que aceitam eventos novos: ${w.map((c) => `${c.nome} (${c.id})`).join(", ") || "nenhum"}.`);
    return w.find((c) => c.id === pc.id);
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
  /** 1.102.0: de quem é cada calendário (a pessoa dele, como no De quem do Adicionar): {calendar.x → nome}. */
  donos(now = new Date()) {
    const prefs = this.store.data.app.people || {};
    const w = this.calendarios().filter((c) => c.cria && !c.fora).map((c) => ({ id: c.id, name: c.nome }));
    const m = new Map();
    for (const p of this.index(now).people || []) {
      if (p.pet) continue;
      const pc = personCalendar(p.name, prefs, w);
      if (pc && !m.has(pc.id)) m.set(pc.id, p.name);
    }
    return m;
  }

  evento({ cal, e, s, f }, comCalendario = true, donos = null) {
    const k = parseKind(e.description);
    const out = { id: occurrenceKey(cal.id, e), titulo: e.summary || "(sem título)", data: ymd(new Date(s)) };
    // 1.102.0: de quem é (a pessoa do calendário); sem pessoa, da casa
    if (donos) out.de = donos.get(cal.id) || "casa";
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
    const donos = this.donos(now);
    const noDia = (d) => comp.filter((x) => x.s < addDays(d, 1).getTime() && Math.max(x.f, x.s + 1) > d.getTime()).map((x) => this.evento(x, true, donos));
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
      r.situacao = x.done ? (x.done.skipped ? "pulada" : x.done.part ? `feita em parte hoje (${Math.round(((x.part && x.part.done) || x.done.part.frac) * 100)}%), o resto amanhã` : "feita") : x.yesterday ? "de ontem, não feita" : x.late > 0 ? `atrasada ${plural(x.late, "dia", "dias")}` : "a fazer";
      // Feito em parte: what is left to do (and its points)
      if (!x.done && x.part) r.falta = `${Math.round((1 - x.part.done) * 100)}%${st && x.points ? ` (+${Math.max(0, x.points - x.part.points)})` : ""}`;
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
    const donos = this.donos(now);
    const out = { periodo: { de: ymd(de), ate: ymd(ate) }, encontrados: achados.length, mostrando: Math.min(limite, achados.length), eventos: achados.slice(0, limite).map((x) => this.evento(x, true, donos)) };
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
    // 1.108.0: only what is of one room (the routines and the maintenances have rooms; the rest has none)
    const comodo = foldText(String(a.comodo || "")).trim();
    const doComodo = (c) => !comodo || (c.rooms || []).some((r) => foldText(r).trim() === comodo);
    const cadastrados = (ix.catalog || []).filter(doComodo).slice(0, 300).map((c) => {
      const r = { id: c.key, tipo: KINDS[c.kind].label, nome: c.summary, quando: c.time || (periodInfo(c.period) ? periodInfo(c.period).when : "dia todo") };
      r.repete = c.kind === "manutencao" ? `a cada ${everyLabel(c.every)}` : c.after ? `volta ${everyLabel(c.after)} depois de feita` : c.rrule ? repeteTexto(c.rrule) : "uma vez";
      r.proxima = c.next;
      if (c.late) r.atrasada = true;
      if (c.who) r.quem = c.who;
      if (c.dose) r.dose = c.dose;
      if (c.value != null) r.valor = c.value;
      if (st && c.points) r.pontos = c.points;
      if (c.rooms && c.rooms.length) r.comodos = c.rooms;
      if (c.equips && c.equips.length) r.equipamentos = c.equips;
      r.calendario = nomeCal.get(c.cal) || c.cal;
      return r;
    });
    // 1.99.0: each person with their calendar (where an appointment of theirs goes)
    const w = this.calendarios().filter((c) => c.cria && !c.fora);
    const calDe = (n) => {
      const pc = personCalendar(n, this.store.data.app.people || {}, w.map((c) => ({ id: c.id, name: c.nome })));
      const c = pc && w.find((x) => x.id === pc.id);
      return c ? ` (calendário ${c.nome})` : "";
    };
    const out = { calendarios, cadastrados, pessoas: (ix.people || []).map((x) => (x.pet ? `${x.name} (pet)` : `${x.name}${calDe(x.name)}`)) };
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
      // 1.119.0: o id da linha que ainda vale no placar (para cronologia_mudar_extrato)
      if (l.key && this.store.pointsByKey(l.key)) r.id = l.key;
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
    out.anteriores = (s.history || []).slice(0, 5).map((h) => ({ de: h.start, ate: last(h.end), vencedor: h.winner || "empate", pontos: h.totals, ...(h.reward ? { premio: h.reward } : {}), ...(h.winner ? { entregue: !!h.delivered } : {}) }));
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
    const so = { dose: ["remedio"], quem: ["compromisso", "remedio", "rotina", "manutencao"], pontos: ["rotina", "manutencao"], periodo: ["rotina"], volta_dias: ["rotina"], valor: ["conta"], a_cada: ["manutencao"], ultima_vez: ["manutencao"] };
    for (const [campo, tipos] of Object.entries(so)) if (a[campo] != null && a[campo] !== "" && !tipos.includes(tipo)) throw erro(`${campo} só vale para tipo ${tipos.join(" ou ")}.`);
    const hoje = startOfDay(now);
    const dia = parseDia(a.data, hoje, "data");
    const inicio = a.inicio ? parseHora(a.inicio, "inicio") : null;
    const fim = a.fim ? parseHora(a.fim, "fim") : null;
    if (fim && !inicio) throw erro("fim sem inicio: mande o inicio também (ou nenhum dos dois, para o dia todo).");
    if (a.data_fim && inicio) throw erro("data_fim é só para o dia todo; com horário, use fim (passando da meia-noite, termina no dia seguinte).");
    // 1.99.0: the appointment of a person goes to the calendar of the person
    const cal = a.calendario ? this.calendario(a.calendario, true) : tipo === "compromisso" ? (linha(a.quem) ? this.daPessoa(linha(a.quem, 40)) : this.padrao()) : this.doModelo(tipo);
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
    const campos = ["titulo", "data", "inicio", "fim", "dia_todo", "local", "notas", "quem", "dose", "pontos", "comodos", "valor", "repete", "repete_ate"];
    if (!campos.some((c) => c in a)) throw erro(`Diga o que muda: ${campos.join(", ")}.`);
    const escopo = a.escopo || "este";
    if (!["este", "este_e_proximos"].includes(escopo)) throw erro("escopo: este ou este_e_proximos.");
    const { cal, raw } = await this.acharEvento(a.id);
    if (!raw.uid) throw erro("Esse evento não muda por aqui: o calendário não dá um identificador para ele.");
    if (!(cal.edita || (cal.cria && cal.apaga))) throw erro(`O calendário ${cal.nome} não deixa mudar eventos.`);
    const k = parseKind(raw.description);
    const kind = k ? k.kind : "compromisso";
    const so = { quem: ["remedio", "rotina", "manutencao"], dose: ["remedio"], pontos: ["rotina", "manutencao"], comodos: ["rotina", "manutencao"], valor: ["conta"] };
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
      // 1.114.0: os cômodos (o Selecionar de Mais › Rotinas e a IA), pelo nome; uma lista ou "A; B"
      if ("comodos" in a) {
        const lista = (Array.isArray(a.comodos) ? a.comodos : String(a.comodos || "").split(";")).map((s) => linha(String(s || "").replace(/;/g, ","), 60)).filter(Boolean);
        const uns = lista.filter((s, i) => lista.findIndex((x) => foldText(x) === foldText(s)) === i).slice(0, 40);
        nk.rooms = uns;
        nk.room = uns[0] || "";
      }
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
    // 1.113.0: a repetição nova, deste dia em diante (nao: a série acaba neste dia)
    let regra = null;
    if ("repete" in a || "repete_ate" in a) {
      const freq = String(raw.rrule || "").split(";").find((x) => x.startsWith("FREQ=")) || "";
      const r = a.repete !== undefined ? a.repete : freq ? Object.keys(REPETE).find((k) => REPETE[k] === freq) || "" : null;
      if (r === null) throw erro("Diga a repetição: repete.");
      if (!(r in REPETE)) throw erro(`repete: ${Object.keys(REPETE).join(", ")}.`);
      const fim = r === "nao" ? (raw.rrule ? day : null) : a.repete_ate ? parseDia(a.repete_ate, hoje, "repete_ate") : null;
      if (r === "nao" && !raw.rrule) throw erro("Esse evento não se repete.");
      if (fim && fim < day) throw erro("repete_ate vem antes deste dia.");
      const base = r === "nao" ? freq : REPETE[r];
      if (!base) throw erro("Diga a repetição: repete.");
      regra = base + (!fim ? "" : allDay ? `;UNTIL=${ymd(fim).replace(/-/g, "")}` : `;UNTIL=${utcStamp(new Date(fim.getFullYear(), fim.getMonth(), fim.getDate(), 23, 59, 59))}`);
    }
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
      if (regra !== null) {
        ev.rrule = regra;
        if (repeats) {
          opts.recurrence_id = raw.recurrence_id;
          opts.recurrence_range = "THISANDFUTURE";
          nota = " (este e os próximos)";
        }
      }
      await this.updateEvent(cal.id, raw.uid, ev, opts);
      // 1.114.0: read again (a calendar may give "este e os próximos" another uid): the Desfazer of the Selecionar uses it
      novoId = (await this.idCriado(cal, ev)) || (repeats ? occurrenceKey(cal.id, raw) : occurrenceKey(cal.id, { uid: raw.uid, start: ev.start }));
    } else {
      // a calendar that can't change events (the Google one in Home Assistant): deleted and created again, like
      // the screen does; a repeating one is the whole series, starting on the day that was edited
      if (raw.rrule || regra !== null) {
        ev.rrule = regra !== null ? regra : raw.rrule;
        nota = " (a série recomeça neste dia)";
      }
      await this.home.recreate(cal.id, raw, ev);
      this.home.refreshCalendar(cal.id);
      novoId = await this.idCriado(cal, ev);
    }
    this.log.info(`CorrerIA: ${ctx.cliente}${ctx.nome ? ` (${ctx.nome})` : ""} mudou ${raw.summary} em ${cal.id}`);
    return `Alterado${nota}: ${this.linhaEvento(cal, ev)}. Antes: ${antes}.${novoId ? ` id: ${novoId}` : ""}`;
  }

  async _ferias(a, ctx, now) {
    const atual = cleanAway(this.store.data.app.away);
    if (a.cancelar === true) {
      if (!atual) throw erro("Não há férias marcadas.");
      this.store.setApp({ away: null });
      this.awaySync();
      return `Férias canceladas (eram de ${dm(atual.from)} a ${dm(atual.to)}): as rotinas, as tarefas e a manutenção voltam.`;
    }
    if (!a.de || !a.ate) throw erro("Diga de e ate (as datas das férias), ou cancelar.");
    const hoje = startOfDay(now);
    const v = cleanAway({ from: ymd(parseDia(a.de, hoje, "de")), to: ymd(parseDia(a.ate, hoje, "ate")) });
    if (!v) throw erro("As datas das férias não valem: ate vem depois de de, em até um ano.");
    if (v.to < ymd(hoje)) throw erro("Essas férias já passaram.");
    this.store.setApp({ away: v });
    this.awaySync();
    this.log.info(`CorrerIA: ${ctx.cliente}${ctx.nome ? ` (${ctx.nome})` : ""} marcou as férias de ${v.from} a ${v.to}`);
    return `Férias de ${dm(v.from)} a ${dm(v.to)}: as rotinas, as tarefas e a manutenção pausam; os remédios continuam.${atual ? ` Antes: de ${dm(atual.from)} a ${dm(atual.to)}.` : ""}`;
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
    // Feito em parte (1.91.0): 25, 50 or 75% of a routine; the rest goes to the next day
    if (a.parte != null) {
      if (![25, 50, 75].includes(a.parte)) throw erro("parte: 25, 50 ou 75.");
      if (kind !== "rotina") throw erro(`Só rotina se faz em parte; este é ${KINDS[kind].label.toLowerCase()}.`);
      if (!feito) throw erro("Para desfazer, use feito false sem parte.");
      if (c && !c.skipped && !c.part) return `Já estava feita: ${nome}.`;
      const r = await this.home.part(o.key, a.parte / 100, by, quem);
      // what was left or less: the rest, done
      if (!r || r.moved !== undefined) return `Feita por ${(this.store.data.checks[o.key] || {}).by || quem || by}: ${nome} (era o que faltava)${r && r.next ? `; volta em ${dm(r.next)}` : ""}${this.pontosDe(o.key)}.`;
      return `Feita em parte (${a.parte}%) por ${quem || by}: ${nome}${r.points > 0 ? ` · +${r.points}` : ""}; o resto (${Math.round((1 - r.done) * 100)}%) fica para amanhã.`;
    }
    if (feito && c && !c.skipped && !c.part) return `Já estava ${feitoTxt}: ${nome}.`;
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

  /** 1.118.0: o Prêmio de Recompensas (o mesmo para todos, ou um para cada pessoa), pelo store.setPrizes da tela. */
  async _definir_premio(a, ctx, now) {
    const st = this.placarOn();
    if (!st) throw erro("O placar está desligado no CronologIA (Mais › Configurações › Placar).");
    const qual = a.periodo == null || a.periodo === "" ? "este" : String(a.periodo);
    if (!["este", "proximo"].includes(qual)) throw erro("periodo: este ou proximo.");
    const s = this.home.scoreIndex(now.getTime());
    const p = qual === "proximo" ? s.next : s.current;
    const shared = linha(a.premio, 200);
    const lista = Array.isArray(a.por_pessoa) ? a.por_pessoa : a.por_pessoa == null ? [] : null;
    if (!lista) throw erro("por_pessoa: uma lista de {pessoa, premio}.");
    const per = {};
    for (const x of lista) {
      const quem = this.home.participant(linha(x && x.pessoa, 40));
      if (!quem) throw erro(`${(x && x.pessoa) || "(vazio)"} não está no placar. No placar: ${st.participants.join(", ")}.`);
      const t = linha(x.premio, 200);
      if (t) per[quem] = t;
    }
    if (a.tirar === true) {
      if (shared || Object.keys(per).length) throw erro("Com tirar, sem premio nem por_pessoa.");
      this.store.setPrizes(p.key, "", {});
    } else {
      if (!shared && !Object.keys(per).length) throw erro("Mande o premio (o mesmo para quem vencer) ou por_pessoa (um para cada), ou tirar: true.");
      if (shared && Object.keys(per).length) throw erro("Um dos dois: premio (o mesmo para todos) ou por_pessoa (um para cada).");
      this.store.setPrizes(p.key, shared, per);
    }
    this.home.changed();
    const nome = qual === "proximo" ? "do próximo período" : "deste período";
    if (a.tirar === true) return `Prêmio ${nome} (${p.label}) tirado.`;
    return shared ? `Prêmio ${nome} (${p.label}): ${shared}. Quem vencer ganha; empate, ninguém leva.` : `Prêmios ${nome} (${p.label}): ${Object.entries(per).map(([n, t]) => `${n}: ${t}`).join("; ")}. Quem vencer ganha o seu; empate, ninguém leva.`;
  }

  async _premio_entregue(a, ctx, now) {
    if (!this.placarOn()) throw erro("O placar está desligado no CronologIA (Mais › Configurações › Placar).");
    const hist = this.store.data.score.history || [];
    let h;
    if (a.periodo) {
      const dia = ymd(parseDia(a.periodo, startOfDay(now), "periodo"));
      h = hist.find((x) => x.key === dia || x.start === dia) || hist.find((x) => x.start <= dia && dia < x.end);
      if (!h) throw erro(`Nenhum período fechado em ${dm(dia)}. Os de cronologia_placar, em anteriores (de).`);
    } else {
      h = hist.find((x) => x.winner && x.reward && !x.delivered);
      if (!h) throw erro("Nenhum prêmio esperando a entrega.");
    }
    if (!h.winner) throw erro(`O período de ${dm(h.start)} acabou empatado: ninguém leva o prêmio.`);
    const entregue = a.entregue !== false;
    this.store.setDelivered(h.key, entregue);
    this.home.changed();
    return `${entregue ? "Entregue" : "Ainda não entregue"}: o prêmio de ${h.winner}${h.reward ? ` (${h.reward})` : ""}, do período de ${dm(h.start)} a ${dm(ymd(addDays(fromYmd(h.end), -1)))}.`;
  }

  /** 1.119.0: o Tirar e o trocar de pessoa de uma linha do Extrato (home.removePoints e home.reassign, os da tela). */
  async _mudar_extrato(a, ctx, now) {
    const st = this.placarOn();
    if (!st) throw erro("O placar está desligado no CronologIA (Mais › Configurações › Placar).");
    const e = this.store.pointsByKey(String(a.id || ""));
    if (!e) throw erro("Essa linha não está mais no placar. Veja os ids em cronologia_placar (extrato).");
    const pts = `${e.points > 0 ? "+" : ""}${e.points}`;
    if (a.acao === "tirar") {
      this.home.removePoints(e.key);
      return `Tirado do placar: ${e.title} (${e.who}, ${pts}).`;
    }
    if (a.acao !== "trocar") throw erro("acao: tirar ou trocar.");
    const quem = this.home.participant(linha(a.quem, 40));
    if (!quem) throw erro(`${a.quem || "(vazio)"} não está no placar. No placar: ${st.participants.join(", ")}.`);
    if (quem === e.who) return `${e.title} já é de ${quem}.`;
    this.home.reassign(e.key, quem);
    return `${e.title} (${pts}) passou de ${e.who} para ${quem}.`;
  }

  /** 1.119.0: a lista dos deméritos (Mais › Recompensas › Deméritos), pelo store.setApp da tela. */
  /** 1.120.0: os calendários, com o de cada pessoa. */
  _donos() {
    const cals = this.calendarios();
    const w = cals.filter((c) => c.cria && !c.fora).map((c) => ({ id: c.id, name: c.nome }));
    const people = this.store.data.app.people || {};
    const nomes = [...new Set([...Object.keys(people).filter((n) => !people[n].pet), ...[...(this.home.persons ? this.home.persons.values() : [])].map((p) => p.name).filter(Boolean)])];
    const dono = new Map();
    for (const n of nomes) {
      const pc = personCalendar(n, people, w);
      if (pc && !dono.has(pc.id)) dono.set(pc.id, n);
    }
    return { cals, dono, nomes };
  }

  async _calendarios() {
    const { cals, dono } = this._donos();
    const prefs = this.store.data.calendars || {};
    if (!cals.length) return "Nenhum calendário no Home Assistant.";
    return JSON.stringify({
      calendarios: cals.map((c) => ({
        id: c.id, nome: c.nome, ...((prefs[c.id] || {}).color ? { cor: prefs[c.id].color } : {}), ...(c.oculto ? { oculto: true } : {}),
        ...(c.fora ? { fora_do_ar: true } : {}), aceita_novos: c.cria, ...(dono.has(c.id) ? { de_quem: dono.get(c.id) } : {}),
      })),
      padrao: (this.padrao() || {}).id || null,
    });
  }

  async _mudar_calendario(a) {
    const { cals, nomes } = this._donos();
    const v = linha(a.calendario, 120);
    const n = foldText(v);
    const achados = cals.filter((c) => c.id === v);
    const pelo = achados.length ? achados : cals.filter((c) => foldText(c.nome) === n);
    const cal = pelo.length ? pelo : cals.filter((c) => n && foldText(c.nome).includes(n));
    if (!cal.length) throw erro(`Calendário não encontrado: ${v || "(vazio)"}. Os calendários: ${cals.map((c) => `${c.nome} (${c.id})`).join(", ") || "nenhum"}.`);
    if (cal.length > 1) throw erro(`Mais de um calendário com esse nome: ${cal.map((c) => `${c.nome} (${c.id})`).join(", ")}. Mande o id.`);
    const c = cal[0];
    const mudou = [];
    const prefs = {};
    if (typeof a.oculto === "boolean") {
      prefs.hidden = a.oculto;
      mudou.push(a.oculto ? "oculto" : "à vista");
    }
    if (a.nome != null) {
      prefs.name = linha(a.nome, 80) || null;
      mudou.push(prefs.name ? `nome ${prefs.name}` : "o nome do Home Assistant");
    }
    if (a.cor != null) {
      if (!COLORS.includes(a.cor)) throw erro(`cor: ${COLORS.join(", ")}.`);
      prefs.color = a.cor;
      mudou.push(`cor ${a.cor}`);
    }
    let people = null;
    if (a.de_quem != null) {
      const q = foldText(linha(a.de_quem, 40));
      people = JSON.parse(JSON.stringify(this.store.data.app.people || {}));
      if (["ninguem", "nenhum", "nenhuma", ""].includes(q)) {
        const w = cals.filter((x) => x.cria && !x.fora).map((x) => ({ id: x.id, name: x.nome }));
        const eram = nomes.filter((p) => (personCalendar(p, people, w) || {}).id === c.id);
        if (!eram.length) throw erro(`${c.nome} já não é o calendário de ninguém.`);
        for (const p of eram) people[Object.keys(people).find((k) => foldText(k) === foldText(p)) || p] = { ...(people[p] || {}), cal: false };
        mudou.push(`não é mais o calendário de ${eram.join(" e ")}`);
      } else {
        const pessoa = nomes.find((p) => foldText(p) === q) || nomes.find((p) => foldText(p).split(" ")[0] === q);
        if (!pessoa) throw erro(`Pessoa não encontrada: ${a.de_quem}. As pessoas: ${nomes.join(", ") || "nenhuma"}.`);
        if (!c.cria) throw erro(`${c.nome} não aceita eventos novos: não serve de calendário de uma pessoa.`);
        const k = Object.keys(people).find((x) => foldText(x) === foldText(pessoa)) || pessoa;
        people[k] = { ...(people[k] || {}), cal: c.id };
        mudou.push(`é o calendário de ${pessoa}`);
      }
    }
    if (!mudou.length) throw erro("Diga o que muda: oculto, nome, cor ou de_quem.");
    if (Object.keys(prefs).length) this.store.setCalendar(c.id, prefs);
    if (people) this.store.setApp({ people });
    this.prefsChanged();
    this.home.changed();
    return `${prefs.name || c.nome}: ${mudou.join(", ")}.`;
  }

  async _demeritos(a, ctx, now) {
    if (!this.placarOn()) throw erro("O placar está desligado no CronologIA (Mais › Configurações › Placar).");
    const list = (this.store.data.app.demerits || []).map((d) => ({ ...d }));
    const nome = linha(a.nome, 80);
    if (!nome) throw erro("Falta o nome.");
    const n = foldText(nome);
    const d = list.find((x) => x.id === a.nome || foldText(x.title) === n);
    const pontos = a.pontos == null || a.pontos === "" ? null : Math.round(Number(a.pontos));
    if (pontos !== null && !(pontos >= 1 && pontos <= 1000)) throw erro("pontos: de 1 a 1000 (quantos o demérito tira).");
    const grava = (l) => {
      this.store.setApp({ demerits: l });
      this.home.changed();
    };
    if (a.acao === "novo") {
      if (d) throw erro(`Já existe o demérito ${d.title} (${plural(d.points, "ponto", "pontos")}). Para mudar, acao mudar.`);
      if (pontos === null) throw erro("Faltam os pontos que o demérito tira.");
      if (list.length >= 40) throw erro("Já são 40 deméritos: apague um antes.");
      grava([...list, { title: nome, points: pontos }]);
      return `Demérito criado: ${nome} (${plural(pontos, "ponto", "pontos")}).`;
    }
    if (!d) throw erro(list.length ? `Demérito não encontrado: ${nome}. Os deméritos: ${list.map((x) => x.title).join(", ")}.` : "Nenhum demérito cadastrado.");
    if (a.acao === "apagar") {
      grava(list.filter((x) => x.id !== d.id));
      return `Demérito apagado: ${d.title}. O que já foi descontado continua no placar.`;
    }
    if (a.acao !== "mudar") throw erro("acao: novo, mudar ou apagar.");
    const novo = linha(a.novo_nome, 80);
    if (!novo && pontos === null) throw erro("Diga o que muda: novo_nome ou pontos.");
    if (novo && list.some((x) => x.id !== d.id && foldText(x.title) === foldText(novo))) throw erro(`Já existe o demérito ${novo}.`);
    grava(list.map((x) => (x.id === d.id ? { ...x, title: novo || x.title, points: pontos === null ? x.points : pontos } : x)));
    return `Demérito mudado: ${novo || d.title} (${plural(pontos === null ? d.points : pontos, "ponto", "pontos")}).`;
  }

  async _alterar_rotinas(a, ctx, now) {
    const ids = Array.isArray(a.ids) ? a.ids.filter((x) => typeof x === "string" && x) : [];
    if (!ids.length) throw erro("ids: a lista dos ids (de cronologia_cadastros).");
    const campos = {};
    for (const k of ["quem", "pontos", "comodos"]) if (a[k] !== undefined) campos[k] = a[k];
    if (!Object.keys(campos).length) throw erro("Mande o que mudar: quem, pontos ou comodos.");
    const r = await this.lote("alterar", ids.map((id) => ({ id, campos })), { nome: ctx.nome, cliente: ctx.cliente }, now);
    const out = [`${plural(r.feitos, "cadastro mudado", "cadastros mudados")}.`];
    if (r.falhas.length) out.push(`Não deu em ${r.falhas.length}: ${r.falhas.map((f) => `${f.nome}: ${f.erro}`).join("; ")}`);
    return out.join(" ");
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
