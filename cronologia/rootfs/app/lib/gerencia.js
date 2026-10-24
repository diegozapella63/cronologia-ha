// Contas a pagar do GerencIA (o app de finanças da mesma família), quando ele
// está instalado no mesmo Home Assistant. O GerencIA deixa em
// /share/gerencia/integracao.json o endereço dele na rede interna dos apps e
// uma chave; aqui só lemos esse arquivo e chamamos /api/integracao/*.
import fs from "node:fs";
import path from "node:path";

const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

export class Gerencia {
  constructor({ shareDir, log, onChange }) {
    this.file = path.join(shareDir, "gerencia", "integracao.json");
    this.log = log;
    this.onChange = onChange;
    this.state = { ligado: false, contas: [], categorias: [], erro: null, versao: null, at: null };
    this.timer = null;
    this.busy = null;
    this.lastLog = "";
  }

  /** The connection file, or null when the GerencIA is not installed (or turned the connection off). */
  info() {
    try {
      const j = JSON.parse(fs.readFileSync(this.file, "utf8"));
      return j && j.url && j.chave ? j : null;
    } catch (err) {
      return null;
    }
  }

  async request(method, route, body) {
    const info = this.info();
    if (!info) throw Object.assign(new Error("GerencIA não encontrado no Home Assistant"), { code: "no_gerencia" });
    const urls = [info.url, info.ip_url].filter(Boolean);
    let last;
    for (const base of urls) {
      try {
        const res = await fetch(`${base}${route}`, {
          method,
          headers: { authorization: `Bearer ${info.chave}`, "x-app": "CronologIA", ...(body ? { "content-type": "application/json" } : {}) },
          body: body ? JSON.stringify(body) : undefined,
          signal: AbortSignal.timeout(15000),
        });
        const out = await res.json().catch(() => ({}));
        if (!res.ok) throw Object.assign(new Error(out.erro || `O GerencIA respondeu ${res.status}`), { code: res.status === 401 ? "gerencia_off" : "gerencia_error", http: true });
        return out;
      } catch (err) {
        last = err;
        if (err.http) break; // it answered: no point trying the other address
      }
    }
    throw last;
  }

  /** Reads the bills again (2 months back, 4 ahead) and tells the screens when something changed. */
  refresh() {
    if (this.busy) return this.busy;
    this.busy = (async () => {
      const before = JSON.stringify(this.state);
      if (!this.info()) {
        this.state = { ligado: false, contas: [], categorias: [], erro: null, versao: null, at: null };
      } else {
        try {
          const t = new Date();
          const out = await this.request("GET", `/api/integracao/contas?de=${ymd(addDays(t, -62))}&ate=${ymd(addDays(t, 124))}`);
          this.state = { ligado: true, contas: out.contas || [], categorias: out.categorias || [], erro: null, versao: out.versao || null, at: new Date().toISOString() };
        } catch (err) {
          this.state = { ...this.state, ligado: true, erro: err.message };
          if (this.lastLog !== err.message) this.log.warn(`GerencIA: ${err.message}`);
          this.lastLog = err.message;
        }
      }
      if (this.state.ligado && !this.state.erro && this.lastLog !== "ok") {
        this.log.info(`GerencIA ${this.state.versao || ""} conectado: ${this.state.contas.length} contas`);
        this.lastLog = "ok";
      }
      const now = JSON.stringify({ ...this.state, at: null });
      if (now !== JSON.stringify({ ...JSON.parse(before), at: null })) this.onChange();
    })().finally(() => {
      this.busy = null;
    });
    return this.busy;
  }

  /** Every minute while someone has the app open, every 10 minutes otherwise. */
  start(isWatched) {
    let last = 0;
    const tick = () => {
      const every = isWatched() ? 60000 : 600000;
      if (Date.now() - last >= every) {
        last = Date.now();
        this.refresh().catch(() => {});
      }
    };
    tick();
    this.timer = setInterval(tick, 15000);
  }

  async act(action, body) {
    const out = await this.request("POST", `/api/integracao/${action}`, body);
    await this.refresh();
    return out;
  }
}
