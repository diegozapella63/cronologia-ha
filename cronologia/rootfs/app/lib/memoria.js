// Os trechos do MemorIA (o app de anotações da mesma família) no Agora: o que vale agora e os dois próximos
// horários, de quem está olhando. O MemorIA deixa em /share/memoria/integracao.json o endereço dele na rede
// interna dos apps, uma chave e o endereço dele no Home Assistant (painel); aqui só lemos esse arquivo e
// chamamos GET /api/integracao/agora?usuario=&pessoa= (o MemorIA acha a pessoa pelo usuário do Home Assistant).
import fs from "node:fs";
import path from "node:path";

const coded = (code, message) => Object.assign(new Error(message), { code });
const str = (v, max) => (typeof v === "string" ? v : "").slice(0, max);
const TIPOS = new Set(["trecho", "periodo", "horario"]);
const HM = /^([01]\d|2[0-3]):[0-5]\d$/;

/** One trecho of the answer, only the known fields, with sizes and types checked (it is another app's data). */
export function cleanTrecho(t) {
  if (!t || typeof t !== "object" || !HM.test(t.inicio || "")) return null;
  const out = {
    inicio: t.inicio,
    agora: t.agora === true,
    ontem: t.ontem === true,
    amanha: t.amanha === true,
    bloco: str(t.bloco, 80).trim() || "Bloco",
    bloco_id: str(t.bloco_id, 64),
    cor: /^[a-z]{2,20}$/.test(t.cor || "") ? t.cor : "",
    folha_id: typeof t.folha_id === "string" ? t.folha_id.slice(0, 64) : null,
    titulo: str(t.titulo, 160).trim(),
    texto: str(t.texto, 1500),
    tipo: TIPOS.has(t.tipo) ? t.tipo : "trecho",
    outros: Number.isInteger(t.outros) && t.outros > 0 ? Math.min(t.outros, 99) : 0,
  };
  if (out.tipo === "periodo") out.periodo = str(t.periodo, 30).trim();
  // MemorIA 1.14.0: until when the one of now holds (its Fica no Agora)
  if (out.agora && HM.test(t.fim || "")) out.fim = t.fim;
  return out;
}

/** The MemorIA app in Home Assistant (/app/<slug>): anything else is not a link we open. */
const cleanPainel = (p) => (typeof p === "string" && /^\/app\/[a-z0-9_]{1,64}$/.test(p) ? p : null);

/** When the trecho of now changes: the start of the next one (today or tomorrow) or, sooner, the end of the one of now. */
export function nextChange(trechos, now = new Date()) {
  const when = (hhmm, tomorrow) => {
    const [h, m] = hhmm.split(":").map(Number);
    const at = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
    if (tomorrow || at.getTime() <= now.getTime()) at.setDate(at.getDate() + 1);
    return at.getTime();
  };
  const next = trechos.find((t) => !t.agora);
  const cur = trechos.find((t) => t.agora);
  const times = [...(next ? [when(next.inicio, next.amanha)] : []), ...(cur && cur.fim ? [when(cur.fim, false)] : [])];
  return times.length ? Math.min(...times) : Infinity;
}

export class Memoria {
  /** enabled(): Mais › Configurações › Integrações › MemorIA › Trechos no Agora (off by default). ttl: the cache per person. */
  constructor({ shareDir, log, enabled = () => false, ttl = 55000 }) {
    this.file = path.join(shareDir, "memoria", "integracao.json");
    this.log = log;
    this.enabled = enabled;
    this.ttl = ttl;
    this.cache = new Map(); // usuario|pessoa -> {until, out}
    this.busy = new Map(); // usuario|pessoa -> promise
    this.lastLog = "";
  }

  /** The connection file, or null when the MemorIA is not installed (or is older than 1.13.0). */
  info() {
    try {
      const j = JSON.parse(fs.readFileSync(this.file, "utf8"));
      return j && j.url && j.chave ? j : null;
    } catch (err) {
      return null;
    }
  }

  async request(info, route) {
    const urls = [info.url, info.ip_url].filter(Boolean);
    let last;
    for (const base of urls) {
      try {
        const res = await fetch(`${String(base).replace(/\/+$/, "")}${route}`, {
          headers: { authorization: `Bearer ${info.chave}`, "x-app": "CronologIA" },
          signal: AbortSignal.timeout(12000),
        });
        const out = await res.json().catch(() => ({}));
        if (!res.ok) throw Object.assign(new Error(res.status === 401 ? "O MemorIA recusou a chave." : out.erro || `O MemorIA respondeu ${res.status}`), { code: "memoria_error", http: true });
        return out;
      } catch (err) {
        last = err.name === "TimeoutError" ? coded("memoria_error", "O MemorIA não respondeu.") : err;
        if (err.http) break; // it answered: no point trying the other address
      }
    }
    throw last;
  }

  /**
   * The trechos of now for the person of a screen: {ligado, encontrado, erro, versao, painel, pessoa, trechos}.
   * Off or not installed: nothing is asked. A person's answer is kept until the next start time (at most ttl).
   */
  async agora({ usuario = "", pessoa = "" } = {}, { fresh = false } = {}) {
    if (!this.enabled()) return { ligado: false, encontrado: !!this.info(), erro: null, trechos: [] };
    const info = this.info();
    if (!info) {
      this.cache.clear();
      return { ligado: true, encontrado: false, erro: null, trechos: [] };
    }
    const key = `${usuario}|${pessoa}`;
    const hit = this.cache.get(key);
    if (!fresh && hit && Date.now() < hit.until) return hit.out;
    if (this.busy.has(key)) return this.busy.get(key);
    const run = (async () => {
      const q = new URLSearchParams();
      if (usuario) q.set("usuario", usuario);
      if (pessoa) q.set("pessoa", pessoa);
      const route = /^\/api\/integracao\/[a-z]+$/.test(info.agora || "") ? info.agora : "/api/integracao/agora";
      let out;
      try {
        const res = await this.request(info, `${route}${q.toString() ? `?${q}` : ""}`);
        const trechos = (Array.isArray(res.trechos) ? res.trechos : []).map(cleanTrecho).filter(Boolean).slice(0, 3);
        out = { ligado: true, encontrado: true, erro: null, versao: str(res.versao, 20) || null, painel: cleanPainel(info.painel), pessoa: str(res.pessoa, 80), trechos };
        if (this.lastLog !== "ok") this.log.info(`MemorIA ${out.versao || ""} conectado`);
        this.lastLog = "ok";
      } catch (err) {
        out = { ligado: true, encontrado: true, erro: err.message, versao: null, painel: null, pessoa: "", trechos: [] };
        if (this.lastLog !== err.message) this.log.warn(`MemorIA: ${err.message}`);
        this.lastLog = err.message;
      }
      this.cache.set(key, { until: Math.min(Date.now() + this.ttl, nextChange(out.trechos)), out });
      return out;
    })().finally(() => this.busy.delete(key));
    this.busy.set(key, run);
    return run;
  }

  /** Turned off (or on) in Configurações: the next ask starts fresh. */
  forget() {
    this.cache.clear();
    this.lastLog = "";
  }
}
