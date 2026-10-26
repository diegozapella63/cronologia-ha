// Finds events (appointments, meetings, birthdays…) in a pasted message or in
// photos of an invitation, a poster or an appointment card. Like the other
// apps (InventarIA, GerencIA, EconomIA), it only uses the AI configured in Home
// Assistant (ai_task.generate_data) and keeps no API key: the person picks
// which AI in Mais > Leitura por IA.
import { resultOf } from "./usage.js";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const GEN_DATA = 1;
const ATTACHMENTS = 2;
// Photos wait here (inside /media, Home Assistant's "local" media source) only
// while the AI reads them.
const TMP_REL = "cronologia/ia-temp";
const MAX_EVENTS = 50;
const WEEKDAYS = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const REPEATS = ["daily", "weekly", "monthly", "yearly"];

const coded = (code, message) => Object.assign(new Error(message), { code });
const pad = (n) => String(n).padStart(2, "0");

export function instructions({ text, images, now = new Date(), tz = "" }) {
  const source = images ? (images > 1 ? "estas fotos" : "esta foto") : "a mensagem abaixo";
  const today = `${WEEKDAYS[now.getDay()]}, ${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}, ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  return [
    `Leia ${source} (convite, cartaz, cartão de consulta, print de conversa, e-mail ou anotação) e encontre os compromissos com data para colocar numa agenda: consulta, reunião, aula, aniversário, viagem, prazo, show…`,
    `Hoje é ${today}${tz ? ` (fuso ${tz})` : ""}. Use isso para entender "amanhã", "quinta", "dia 5", "semana que vem". Se o ano não estiver escrito, use a próxima ocorrência a partir de hoje.`,
    "Para cada evento, devolva:",
    '- "title": nome curto em português do Brasil (ex.: "Dentista", "Reunião com o João", "Aniversário da Ana").',
    '- "date": data de início, AAAA-MM-DD.',
    '- "start": horário de início HH:MM (24 h), ou "" se for o dia todo ou não tiver horário.',
    '- "end": horário de fim HH:MM, ou "" se não estiver escrito.',
    '- "end_date": data de fim AAAA-MM-DD só se durar mais de um dia; senão "".',
    '- "location": local ou endereço, ou "".',
    '- "notes": detalhes úteis (o que levar, telefone, link), curto, ou "".',
    '- "repeat": "daily", "weekly", "monthly" ou "yearly" se estiver escrito que se repete; senão "".',
    "Regras: não invente nada; ignore o que não tiver data. Junte informações do mesmo evento num item só.",
    'Responda somente com JSON válido, sem markdown e sem texto antes ou depois, neste formato:',
    '{"events":[{"title":"","date":"","start":"","end":"","end_date":"","location":"","notes":"","repeat":""}]}',
    text ? `\nMensagem:\n"""\n${text.slice(0, 20000)}\n"""` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/** Pulls the JSON out of the AI answer (it may come with ``` fences or text around it). */
export function extractJson(raw) {
  if (raw && typeof raw === "object") return raw;
  if (typeof raw !== "string") return null;
  const s = raw.replace(/```(?:json)?/gi, "").trim();
  try {
    return JSON.parse(s);
  } catch (e) {
    /* look for the outermost {...} or [...] */
  }
  const pairs = [["{", "}"], ["[", "]"]];
  // Whichever starts first is the outer one.
  if (s.indexOf("[") >= 0 && (s.indexOf("{") < 0 || s.indexOf("[") < s.indexOf("{"))) pairs.reverse();
  for (const [open, close] of pairs) {
    const a = s.indexOf(open);
    const b = s.lastIndexOf(close);
    if (a >= 0 && b > a) {
      try {
        return JSON.parse(s.slice(a, b + 1));
      } catch (e) {
        /* next */
      }
    }
  }
  return null;
}

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_RE = /^([01]?\d|2[0-3])[:h]([0-5]\d)$/;
const normDate = (v) => {
  const m = DATE_RE.exec(String(v || "").trim());
  if (!m) return "";
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  return d.getMonth() === +m[2] - 1 ? `${m[1]}-${m[2]}-${m[3]}` : "";
};
const normTime = (v) => {
  const m = TIME_RE.exec(String(v || "").trim());
  return m ? `${pad(+m[1])}:${m[2]}` : "";
};
const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function cleanEvents(raw) {
  const parsed = extractJson(raw);
  const list = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.events) ? parsed.events : [];
  const out = [];
  for (const e of list) {
    if (!e || typeof e !== "object") continue;
    const title = str(e.title || e.summary || e.name, 200);
    const date = normDate(e.date || e.start_date);
    if (!title || !date) continue;
    const endDate = normDate(e.end_date);
    out.push({
      title,
      date,
      start: normTime(e.start || e.start_time),
      end: normTime(e.end || e.end_time),
      end_date: endDate && endDate > date ? endDate : "",
      location: str(e.location, 300),
      notes: str(e.notes || e.description, 2000),
      repeat: REPEATS.includes(e.repeat) ? e.repeat : "",
    });
    if (out.length >= MAX_EVENTS) break;
  }
  return out;
}

export class AI {
  /** `selected()` returns the entity chosen in the app ("" = Home Assistant's default). */
  constructor({ ha, log, mediaDir, selected, usage = null }) {
    this.usage = usage; // Uso da IA: every call to ai_task.generate_data is counted
    this.ha = ha;
    this.log = log;
    this.mediaDir = mediaDir;
    this.selected = selected || (() => "");
  }

  tmpDir() {
    return path.join(this.mediaDir, TMP_REL);
  }

  mediaWritable() {
    try {
      fs.mkdirSync(this.tmpDir(), { recursive: true });
      fs.accessSync(this.tmpDir(), fs.constants.W_OK);
      return true;
    } catch (e) {
      return false;
    }
  }

  /** AI Task entities that generate data, the ones that read photos first. */
  async entities() {
    const states = await this.ha.send({ type: "get_states" }, 15000);
    return states
      .filter((s) => s.entity_id.startsWith("ai_task."))
      .map((s) => {
        const features = Number(s.attributes.supported_features) || 0;
        return {
          id: s.entity_id,
          name: s.attributes.friendly_name || s.entity_id,
          images: Boolean(features & ATTACHMENTS),
          available: s.state !== "unavailable",
          features,
        };
      })
      .filter((e) => e.features & GEN_DATA)
      .sort((a, b) => Number(b.images) - Number(a.images) || a.name.localeCompare(b.name, "pt-BR"));
  }

  async preferred() {
    try {
      const prefs = await this.ha.send({ type: "ai_task/preferences/get" }, 10000);
      return (prefs && prefs.gen_data_entity_id) || null;
    } catch (e) {
      return null; // older Home Assistant
    }
  }

  /**
   * Which entity reads a message (images=false) or photos (images=true).
   * With "Padrão do Home Assistant", the preferred AI of Home Assistant, or the
   * first one that can do the job.
   */
  async resolve(needImages, list) {
    const ents = list || (await this.entities());
    const sel = this.selected();
    if (!ents.length) throw coded("no_ai", "Nenhuma IA configurada no Home Assistant (integração com tarefa de IA).");
    if (sel) {
      const e = ents.find((x) => x.id === sel);
      if (!e) throw coded("gone", "A IA escolhida não está mais no Home Assistant. Escolha outra em Mais › Leitura por IA.");
      if (!e.available) throw coded("unavailable", `${e.name} está indisponível no Home Assistant.`);
      if (needImages && !e.images) throw coded("no_vision", `${e.name} não lê fotos. Escolha outra IA em Mais › Leitura por IA.`);
      return e;
    }
    const ok = ents.filter((e) => e.available && (!needImages || e.images));
    if (!ok.length) {
      throw needImages
        ? coded("no_vision", "Nenhuma IA do Home Assistant lê fotos. Use um modelo que entenda imagens.")
        : coded("unavailable", "As IAs do Home Assistant estão indisponíveis.");
    }
    const pref = await this.preferred();
    return ok.find((e) => e.id === pref) || ok[0];
  }

  /** For Mais › Leitura por IA (and to enable the photo buttons). */
  async status() {
    const sel = this.selected();
    const base = { ready: false, images: false, selected: sel, using: null, entities: [], reason: null };
    if (!this.ha.ready) return { ...base, reason: "Sem conexão com o Home Assistant." };
    let ents;
    try {
      ents = await this.entities();
    } catch (err) {
      return { ...base, reason: `Não deu para consultar o Home Assistant: ${err.message}` };
    }
    const out = { ...base, entities: ents.map(({ id, name, images, available }) => ({ id, name, images, available })) };
    let text;
    try {
      text = await this.resolve(false, ents);
    } catch (err) {
      return { ...out, reason: err.message };
    }
    out.ready = true;
    out.using = { id: text.id, name: text.name };
    try {
      const photo = await this.resolve(true, ents);
      out.images = this.mediaWritable();
      if (!out.images) out.reason = "A pasta media do Home Assistant não está disponível para o app.";
      else if (photo.id !== text.id) out.photos = { id: photo.id, name: photo.name };
    } catch (err) {
      out.reason = err.message;
    }
    return out;
  }

  async extract({ text, images }) {
    images = Array.isArray(images) ? images.slice(0, 6) : [];
    text = typeof text === "string" ? text.trim() : "";
    if (!text && !images.length) return { events: [], provider: null };
    if (!this.ha.ready) throw coded("no_ai", "Sem conexão com o Home Assistant.");
    const entity = await this.resolve(images.length > 0);
    if (images.length && !this.mediaWritable()) throw coded("no_media", "A pasta media do Home Assistant não está disponível para o app.");
    const prompt = instructions({ text, images: images.length, now: new Date(), tz: process.env.TZ || "" });
    const started = Date.now();
    let raw = null;
    let failure = null;
    try {
      raw = await this._viaHA(entity.id, prompt, images);
      return { events: cleanEvents(raw), provider: entity.name, entity: entity.id };
    } catch (err) {
      failure = err;
      throw err;
    } finally {
      if (this.usage) {
        let output = 0;
        try {
          output = raw == null ? 0 : (typeof raw === "string" ? raw : JSON.stringify(raw)).length;
        } catch (e) {
          /* not serializable */
        }
        this.usage.record({ kind: images.length ? "fotos" : "mensagem", entity: entity.id, input: prompt.length, output, images: images.length, seconds: (Date.now() - started) / 1000, result: resultOf(failure) });
      }
    }
  }

  async _viaHA(entityId, prompt, images) {
    const files = [];
    try {
      const attachments = [];
      for (const img of images) {
        const ext = img.mime === "image/png" ? "png" : img.mime === "image/webp" ? "webp" : "jpg";
        const name = `foto-${crypto.randomBytes(6).toString("hex")}.${ext}`;
        const full = path.join(this.tmpDir(), name);
        fs.writeFileSync(full, Buffer.from(img.data, "base64"));
        files.push(full);
        attachments.push({ media_content_id: `media-source://media_source/local/${TMP_REL}/${name}`, media_content_type: img.mime || "image/jpeg" });
      }
      // No "structure": the answer comes as JSON text, like in the other apps.
      const data = { task_name: "CronologIA: ler eventos", instructions: prompt, entity_id: entityId };
      if (attachments.length) data.attachments = attachments;
      const res = await this.ha.send(
        { type: "call_service", domain: "ai_task", service: "generate_data", service_data: data, return_response: true },
        120000,
      );
      return res && res.response ? res.response.data : null;
    } finally {
      for (const f of files) fs.rm(f, { force: true }, () => {});
    }
  }
}
