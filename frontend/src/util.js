// Pure helpers shared by the CronologIA screens.

export const PALETTE = [
  { id: "vermelho", label: "Vermelho", fill: "#FF5A4F", ink: "#C42A1F" },
  { id: "coral", label: "Coral", fill: "#FF8A65", ink: "#C2410C" },
  { id: "laranja", label: "Laranja", fill: "#FFA23E", ink: "#B45309" },
  { id: "ouro", label: "Ouro", fill: "#F2C14E", ink: "#8A6100" },
  { id: "verde", label: "Verde", fill: "#8BD45F", ink: "#3F7A17" },
  { id: "menta", label: "Menta", fill: "#4ED3A6", ink: "#0E7A57" },
  { id: "turquesa", label: "Turquesa", fill: "#3CCBDA", ink: "#0B7285" },
  { id: "azul", label: "Azul", fill: "#62B5FF", ink: "#0B67A8" },
  { id: "indigo", label: "Índigo", fill: "#8F9BFF", ink: "#3D4BC2" },
  { id: "lilas", label: "Lilás", fill: "#B99BFF", ink: "#6D3FD6" },
  { id: "rosa", label: "Rosa", fill: "#FF77A9", ink: "#BE185D" },
  { id: "grafite", label: "Grafite", fill: "#B5B9C2", ink: "#4E5560" },
];
// Calendars without a chosen color get these, in order.
const AUTO = ["turquesa", "lilas", "laranja", "verde", "rosa", "azul", "ouro", "coral", "menta", "indigo", "vermelho", "grafite"];

export const colorById = (id) => PALETTE.find((c) => c.id === id);
export const autoColor = (i) => colorById(AUTO[i % AUTO.length]);

export function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, (c) => c + c) : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

export function colorVars(color, dark, prefix = "c") {
  return `--${prefix}:${color.fill};--${prefix}i:${dark ? color.fill : color.ink};--${prefix}s:${hexToRgba(color.fill, dark ? 0.18 : 0.15)};`;
}

// ---------- text ----------

export const fold = (s) =>
  (s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

// Same length as the input, so indexes map back to the original string.
export const foldKeepLength = (s) =>
  Array.from(s || "", (ch) => {
    const f = ch.normalize("NFD")[0] || ch;
    return f.toLowerCase().length === 1 ? f.toLowerCase() : ch;
  }).join("");

export const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
export const clip = (s, n = 38) => (s && s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s || "");
export const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

/** Splits text into plain parts and links (for descriptions). */
export function splitLinks(text) {
  const out = [];
  const re = /https?:\/\/[^\s<>"')]+/g;
  let last = 0;
  let m;
  while ((m = re.exec(text || ""))) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) });
    out.push({ url: m[0] });
    last = m.index + m[0].length;
  }
  if (last < (text || "").length) out.push({ text: text.slice(last) });
  return out;
}

// ---------- dates ----------

export const WEEKDAYS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
export const WEEKDAYS_SHORT = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
export const MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
export const MONTHS_SHORT = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

const pad = (n) => String(n).padStart(2, "0");
export const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const hm = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
export const fromYmd = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
export const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
export const addDays = (d, n) => {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
  x.setDate(x.getDate() + n);
  return x;
};
export const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
export const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
export const dayDiff = (a, b) => Math.round((startOfDay(a) - startOfDay(b)) / 86400000);
export const startOfWeek = (d, weekStart = 0) => addDays(startOfDay(d), -((d.getDay() - weekStart + 7) % 7));

/** "AAAA-MM-DD" (all-day) or an ISO date-time -> Date. */
export const parseWhen = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(s) ? fromYmd(s) : new Date(s));

/** ISO with the device's offset, which Home Assistant converts to its time zone. */
export function isoLocal(d) {
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return `${ymd(d)}T${hm(d)}:00${sign}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
}

/** "Hoje", "Amanhã", "Ontem" or "quinta, 22 de outubro". */
export function dayLabel(d, now = new Date(), { long = true, cap: up = true } = {}) {
  const diff = dayDiff(d, now);
  let s;
  if (diff === 0) s = "hoje";
  else if (diff === 1) s = "amanhã";
  else if (diff === -1) s = "ontem";
  else {
    s = `${WEEKDAYS[d.getDay()]}, ${d.getDate()} de ${long ? MONTHS[d.getMonth()] : MONTHS_SHORT[d.getMonth()]}`;
    if (d.getFullYear() !== now.getFullYear()) s += ` de ${d.getFullYear()}`;
  }
  return up ? cap(s) : s;
}

/** "segunda, 19 de outubro" (always the date, never "hoje"). */
export const dateLong = (d) => `${WEEKDAYS[d.getDay()]}, ${d.getDate()} de ${MONTHS[d.getMonth()]}`;
export const dateShort = (d, now = new Date()) => `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]}${d.getFullYear() !== now.getFullYear() ? ` ${d.getFullYear()}` : ""}`;

/** "em 42 min", "em 2 h", "em 3 dias". */
export function untilLabel(ms) {
  const min = Math.round(ms / 60000);
  if (min < 1) return "agora";
  if (min < 60) return `em ${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h < 24) return m && h < 4 ? `em ${h} h ${m} min` : `em ${h} h`;
  const days = Math.round(h / 24);
  return `em ${plural(days, "dia", "dias")}`;
}

export function durationLabel(ms) {
  const min = Math.round(ms / 60000);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

export function greeting(name, now = new Date()) {
  const h = now.getHours();
  const hello = h >= 5 && h < 12 ? "Bom dia" : h >= 12 && h < 18 ? "Boa tarde" : "Boa noite";
  const first = (name || "").trim().split(/\s+/)[0];
  return first ? `${hello}, ${first}` : hello;
}

// ---------- recurrence ----------

export const REPEATS = [
  { id: "", label: "Não repete" },
  { id: "DAILY", label: "Todo dia" },
  { id: "WEEKLY", label: "Toda semana" },
  { id: "MONTHLY", label: "Todo mês" },
  { id: "YEARLY", label: "Todo ano" },
];

/** "FREQ=WEEKLY;INTERVAL=2" -> "A cada 2 semanas". */
export function rruleLabel(rrule) {
  if (!rrule) return "";
  const p = Object.fromEntries(
    rrule
      .replace(/^RRULE:/, "")
      .split(";")
      .map((x) => x.split("=")),
  );
  const n = Number(p.INTERVAL || 1);
  const unit = { DAILY: ["Todo dia", "dias"], WEEKLY: ["Toda semana", "semanas"], MONTHLY: ["Todo mês", "meses"], YEARLY: ["Todo ano", "anos"] }[p.FREQ];
  if (!unit) return "Repete";
  let s = n > 1 ? `A cada ${n} ${unit[1]}` : unit[0];
  if (p.BYDAY && p.FREQ === "WEEKLY") {
    const map = { SU: "dom", MO: "seg", TU: "ter", WE: "qua", TH: "qui", FR: "sex", SA: "sáb" };
    s += ` (${p.BYDAY.split(",").map((d) => map[d] || d).join(", ")})`;
  }
  if (p.COUNT) s += `, ${plural(Number(p.COUNT), "vez", "vezes")}`;
  else if (p.UNTIL) {
    const m = /^(\d{4})(\d{2})(\d{2})/.exec(p.UNTIL);
    if (m) s += ` até ${Number(m[3])}/${Number(m[2])}/${m[1]}`;
  }
  return s;
}

export const freqOf = (rrule) => {
  const m = /FREQ=(\w+)/.exec(rrule || "");
  return m ? m[1] : "";
};

// ---------- photos ----------

/** Shrink a photo before upload (keeps text readable, saves bandwidth). */
export async function prepareImage(file, max = 1800) {
  const toBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result).split(",")[1] || "");
      r.onerror = () => reject(r.error);
      r.readAsDataURL(blob);
    });
  try {
    const bmp = await createImageBitmap(file, { imageOrientation: "from-image" });
    const scale = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);
    canvas.getContext("2d").drawImage(bmp, 0, 0, canvas.width, canvas.height);
    if (bmp.close) bmp.close();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.86));
    return { mime: "image/jpeg", data: await toBase64(blob), url: URL.createObjectURL(blob) };
  } catch (e) {
    return { mime: file.type || "image/jpeg", data: await toBase64(file), url: URL.createObjectURL(file) };
  }
}
