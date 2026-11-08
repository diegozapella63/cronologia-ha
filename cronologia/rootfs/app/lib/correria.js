// CorrerIA: the CorrerIA Code contact on WhatsApp, and the server of the house for the Claude and the Gemini
// (MCP). It gathers the tools of every app of the family: this app publishes its own (lib/ferramentas.js).
// With Mais › Configurações › Integrações › CorrerIA on, share/cronologia/correria.json says how to reach
// this app (url, ip_url) and its own key (kept in /data/correria.key); off, the file goes away and the key
// stops working (the route answers 401). Same contract for every app (see the AGENTS.md of the CorrerIA).
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export const ROTA = "/api/integracao/ferramentas";
const pad = (n) => String(n).padStart(2, "0");
/** "2026-11-08T09:00:00" in the time of the house. */
const localIso = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

/** The first IPv4 of this container on the network of the apps (null when there is none). */
export function ipOf(nets = os.networkInterfaces()) {
  for (const list of Object.values(nets || {})) for (const n of list || []) if (n && (n.family === "IPv4" || n.family === 4) && !n.internal) return n.address;
  return null;
}

export class Correria {
  /** enabled(): Mais › Configurações › Integrações › CorrerIA › Usar com o CorrerIA (off by default). */
  constructor({ dataDir, shareDir, port, version, log, enabled = () => false, url = process.env.CRONOLOGIA_URL_INTERNA || "", host = () => os.hostname(), ip = () => ipOf(), onUse = () => {} }) {
    this.keyFile = path.join(dataDir, "correria.key");
    this.useFile = path.join(dataDir, "correria-uso.json");
    this.dir = path.join(shareDir, "cronologia");
    this.file = path.join(this.dir, "correria.json");
    this.port = port;
    this.version = version;
    this.log = log;
    this.enabled = enabled;
    this.url = url;
    this.host = host;
    this.ip = ip;
    this.onUse = onUse;
    this.key = null;
    this.warned = false;
    this.last = null; // {cliente, em, nome}: the last tool used (Claude usou hoje às 9:41)
    try {
      const u = JSON.parse(fs.readFileSync(this.useFile, "utf8"));
      if (u && typeof u.cliente === "string" && Number.isFinite(Date.parse(u.em))) this.last = { cliente: u.cliente.slice(0, 40), em: u.em, nome: String(u.nome || "").slice(0, 40) };
    } catch (e) {
      /* never used */
    }
  }

  /** This connection's own key (32 random bytes, urlsafe), made once and kept in /data/correria.key (600). */
  chave() {
    if (this.key) return this.key;
    try {
      this.key = fs.readFileSync(this.keyFile, "utf8").trim();
    } catch (e) {
      this.key = "";
    }
    if (this.key.length < 32) {
      this.key = crypto.randomBytes(32).toString("base64url");
      fs.mkdirSync(path.dirname(this.keyFile), { recursive: true });
      fs.writeFileSync(this.keyFile, this.key, { mode: 0o600 });
    }
    try {
      fs.chmodSync(this.keyFile, 0o600);
    } catch (e) {
      /* the file system may not keep modes */
    }
    return this.key;
  }

  /** How the other apps reach this one: the host name in the network of the apps (and the IP, in case the name doesn't resolve). */
  address() {
    if (this.url) return { url: this.url.replace(/\/+$/, ""), ip_url: null };
    const ip = this.ip();
    return { url: `http://${this.host()}:${this.port}`, ip_url: ip ? `http://${ip}:${this.port}` : null };
  }

  /** Writes share/cronologia/correria.json (600, atomic) when on; removes it when off. */
  publish() {
    try {
      if (!this.enabled()) {
        fs.rmSync(this.file, { force: true });
        return false;
      }
      const body = {
        app: "cronologia",
        nome: "CronologIA",
        assunto: "agenda da família: compromissos, rotinas da casa, remédios, contas, manutenção e placar",
        ...this.address(),
        chave: this.chave(),
        versao: this.version,
        ferramentas: ROTA,
        gravado_em: localIso(),
      };
      fs.mkdirSync(this.dir, { recursive: true });
      const tmp = path.join(this.dir, ".correria.json.tmp");
      fs.writeFileSync(tmp, JSON.stringify(body, null, 1), { mode: 0o600 });
      fs.chmodSync(tmp, 0o600);
      fs.renameSync(tmp, this.file);
      this.warned = false;
      return true;
    } catch (err) {
      if (!this.warned) this.log.warn(`CorrerIA: não consegui gravar ${this.file}: ${err.message}`);
      this.warned = true;
      return false;
    }
  }

  /** On, but the file is gone (removed by hand, a share folder restored): write it again. */
  ensure() {
    if (this.enabled() && !fs.existsSync(this.file)) this.publish();
  }

  /** Authorization: Bearer <key>, compared in constant time; off, no key works. */
  authorized(headers) {
    if (!this.enabled()) return false;
    const h = String((headers && headers.authorization) || "");
    if (!h.startsWith("Bearer ")) return false;
    const a = crypto.createHash("sha256").update(h.slice(7).trim()).digest();
    const b = crypto.createHash("sha256").update(this.chave()).digest();
    return crypto.timingSafeEqual(a, b);
  }

  /** A tool was used: who used it (Claude, Gemini, WhatsApp, CorrerIA), for the line under the switch. */
  used(cliente, nome) {
    this.last = { cliente: String(cliente || "CorrerIA").replace(/\s+/g, " ").trim().slice(0, 40) || "CorrerIA", em: new Date().toISOString(), nome: String(nome || "").slice(0, 40) };
    try {
      fs.mkdirSync(path.dirname(this.useFile), { recursive: true });
      fs.writeFileSync(this.useFile, JSON.stringify(this.last));
    } catch (e) {
      /* only the line on the screen */
    }
    this.onUse();
  }

  /** What the screen shows (Mais › Configurações › Integrações › CorrerIA). */
  state() {
    return { ultimo: this.last ? { cliente: this.last.cliente, em: this.last.em } : null };
  }
}
