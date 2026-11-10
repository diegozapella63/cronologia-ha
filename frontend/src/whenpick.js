/*
 * Horário e data no visual do app (só no CronologIA). No lugar do <input type="time"> (no celular, às vezes com AM/PM,
 * e o relógio do Android) e do <input type="date"> (o calendário do Android; no campo, mês/dia/ano), um campo igual
 * aos outros que abre, de baixo, a mesma janela das caixas de seleção (selectsheet.js, cujas classes ss-* esta usa):
 * as horas e os minutos, ou o mês com os dias. O Voltar do celular, o X, tocar fora e Esc fecham só ela.
 *
 *   timeField(value, onPick, { label })               o campo de horário ("14:30"); onPick("15:45")
 *   dateField(value, onPick, { label, min, weekStart }) o campo de data ("Qua, 9 dez"); onPick("2026-12-09")
 *   pickTime(anchor, { value, title }) / pickDate(anchor, { value, title, min, max, weekStart })
 *                                                     a janela sozinha: uma Promise com o escolhido, ou null
 *
 * Importado no main.js logo depois do selectsheet.js: o Voltar que fecha a janela não chega ao app.
 */
import { html, render, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { MONTHS, WEEKDAYS_SHORT, ymd, fromYmd, addDays, startOfWeek, sameDay, cap, dateShort, dayLabel } from "./util.js";

const icon = (name) =>
  html`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;
const pad = (n) => String(n).padStart(2, "0");
const YMD = /^\d{4}-\d{2}-\d{2}$/;

/** "9:05", "09:05:00" → "09:05"; anything else → "". */
export function normTime(v) {
  const m = /^(\d{1,2}):(\d{2})/.exec(String(v || ""));
  if (!m) return "";
  const h = Number(m[1]);
  const mi = Number(m[2]);
  return h < 24 && mi < 60 ? `${pad(h)}:${pad(mi)}` : "";
}

/** How a date shows in its field: "Qua, 9 dez" (and the year when it is not this one). */
export function dateText(v, now = new Date()) {
  if (!YMD.test(v || "")) return "";
  const d = fromYmd(v);
  return `${cap(WEEKDAYS_SHORT[d.getDay()])}, ${dateShort(d, now)}`;
}

/** The month grid of a date picker: the days from the first week of the month to the last (5 or 6 weeks). */
export function monthDays(first, weekStart = 1) {
  const start = startOfWeek(first, weekStart);
  const weeks = addDays(start, 35).getMonth() === first.getMonth() ? 6 : 5;
  return Array.from({ length: weeks * 7 }, (_, i) => addDays(start, i));
}

// ------------------------------------------------------------------ the fields

/** The time field: looks like the other fields, 24 hours, and opens the time window. */
export function timeField(value, onPick, { label = "Horário", cls = "" } = {}) {
  const v = normTime(value);
  return html`<button type="button" class="pickf t ${cls}" data-value=${v} aria-label=${`${label}: ${v || "sem horário"}`} @click=${(e) => pickTime(e.currentTarget, { value: v, title: label }).then((x) => x && onPick(x))}>
    <span class="pf-v">${v || "--:--"}</span>${icon("clock")}
  </button>`;
}

/** The date field: "Qua, 9 dez", and opens the month window. */
export function dateField(value, onPick, { label = "Data", cls = "", min = "", max = "", weekStart = 1 } = {}) {
  const shown = dateText(value);
  return html`<button type="button" class="pickf d ${cls}" data-value=${value || ""} aria-label=${`${label}: ${shown || "sem data"}`} @click=${(e) => pickDate(e.currentTarget, { value, title: label, min, max, weekStart }).then((x) => x && onPick(x))}>
    <span class="pf-v">${shown || "Escolher"}</span>${icon("calendar")}
  </button>`;
}

// ------------------------------------------------------------------ the window

const STYLE = `
.wp .ss-sheet{max-height:min(86vh,680px)}
.wp-now{padding:0 20px 4px;font:600 40px/1.1 var(--wp-display);font-variant-numeric:tabular-nums;color:var(--wp-ink);flex:none}
.wp-body{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px 8px}
.wp-lab{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ss-mut);padding:12px 4px 6px}
.wp-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px}
.wp-cell{min-width:0;min-height:44px;padding:0;border:0;border-radius:12px;background:var(--ss-soft2);color:inherit;font:inherit;font-size:17px;font-weight:600;font-variant-numeric:tabular-nums;cursor:pointer}
.wp-cell:focus-visible{background:var(--ss-soft);outline:none}
.wp-foot{display:flex;padding:10px 16px 14px;flex:none}
.wp-ok{flex:1;min-height:48px;border:0;border-radius:999px;background:var(--ss-a);color:var(--wp-on-a);font:inherit;font-size:16px;font-weight:600;cursor:pointer}
.wp-ok:focus-visible{outline:2px solid var(--wp-ink);outline-offset:2px}
.wp-mhead{display:flex;align-items:center;gap:4px;padding:0 0 8px}
.wp-mhead b{flex:1;text-align:center;font-size:17px;font-weight:600}
.wp-nav{width:44px;height:44px;border-radius:50%;border:0;background:transparent;color:inherit;display:grid;place-items:center;cursor:pointer;flex:none}
.wp-nav:focus-visible{background:var(--ss-soft2);outline:none}
.wp-nav:disabled{opacity:.3;cursor:default}
.wp-nav svg{width:22px;height:22px}
.wp-days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px}
.wp-wd{font-size:12px;font-weight:600;color:var(--ss-mut);text-align:center;padding:2px 0 4px}
.wp-day{min-width:0;height:44px;padding:0;border:0;border-radius:14px;background:transparent;color:inherit;font:inherit;font-size:16px;font-weight:500;font-variant-numeric:tabular-nums;cursor:pointer}
.wp-day:focus-visible{background:var(--ss-soft2);outline:none}
.wp-day.out{color:var(--ss-mut)}
.wp-day.today{box-shadow:inset 0 0 0 1.5px var(--ss-a);font-weight:700}
.wp-day.on{font-weight:700}
.wp-day:disabled{opacity:.3;cursor:default;background:transparent}
.wp svg.i{width:20px;height:20px}
.wp .wp-cell.on,.wp .wp-day.on{background:var(--ss-a);color:var(--wp-on-a)}
.wp .wp-cell.on:focus-visible,.wp .wp-day.on:focus-visible{outline:2px solid var(--wp-ink);outline-offset:2px}
@media (hover:hover){.wp-cell:not(.on):hover{background:var(--ss-soft)}.wp-nav:not(:disabled):hover,.wp-day:not(.on):not(:disabled):hover{background:var(--ss-soft2)}}
`;

let cur = null; // {wrap, anchor, resolve, pending, closing, byBack, finish}

function setup() {
  if (typeof window === "undefined" || typeof window.addEventListener !== "function" || typeof history === "undefined" || window.__whenPick) return;
  window.__whenPick = { isOpen: () => !!cur, close: () => close(null) };
  const addCss = () => {
    if (document.getElementById("wp-css")) return;
    const st = document.createElement("style");
    st.id = "wp-css";
    st.textContent = STYLE;
    (document.head || document.documentElement).appendChild(st);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addCss);
  else addCss();
  // before the app's: the Back that closes the window is not seen by it
  window.addEventListener("popstate", (e) => {
    if (!cur) return;
    e.stopImmediatePropagation();
    if (cur.closing) return cur.finish && cur.finish();
    cur.byBack = true;
    close(null);
  });
}
setup();

const rgb = (c) => {
  const s = String(c || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(s)) return { r: parseInt(s.slice(1, 3), 16), g: parseInt(s.slice(3, 5), 16), b: parseInt(s.slice(5, 7), 16) };
  const m = /rgba?\(([^)]+)\)/.exec(s);
  if (!m) return null;
  const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
  return { r: p[0], g: p[1], b: p[2] };
};
const mix = (c, a) => {
  const x = rgb(c) || { r: 100, g: 160, b: 240 };
  return `rgba(${x.r},${x.g},${x.b},${a})`;
};

/** The colors of the window: those of the app where the field is (the accent of a form, the theme). */
function look(el) {
  const cs = getComputedStyle(el);
  const v = (n, d = "") => cs.getPropertyValue(n).trim() || d;
  const base = rgb(v("--rv-bg"));
  const dark = base ? (0.2126 * base.r + 0.7152 * base.g + 0.0722 * base.b) / 255 < 0.45 : !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
  const accent = v("--rv-accent", "#64b5f6");
  return {
    "--ss-bg": v("--rv-surface", dark ? "#1b2229" : "#ffffff"),
    "--ss-fg": v("--rv-text", dark ? "#e8edf3" : "#141a22"),
    "--ss-mut": v("--rv-muted", dark ? "#9aa6b4" : "#5b6573"),
    "--ss-line2": dark ? "rgba(255,255,255,.18)" : "rgba(0,0,0,.14)",
    "--ss-a": accent,
    "--ss-soft": mix(accent, dark ? 0.22 : 0.16),
    "--ss-soft2": dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)",
    "--ss-scrim": v("--rv-scrim", "rgba(0,0,0,.45)"),
    "--ss-font": cs.fontFamily || "system-ui, sans-serif",
    "--wp-on-a": v("--rv-on-accent", "#ffffff"),
    "--wp-ink": v("--rv-accent-ink", accent),
    "--wp-display": v("--rv-display", cs.fontFamily || "system-ui, sans-serif"),
  };
}

/** Opens the window; draw(state, close) gives its content. Resolves with what was chosen, or null. */
function open(anchor, title, state, draw, focus) {
  if (cur || typeof document === "undefined") return Promise.resolve(null);
  return new Promise((resolve) => {
    const wrap = document.createElement("div");
    wrap.className = "ss-wrap wp";
    if (anchor) for (const [k, v] of Object.entries(look(anchor))) wrap.style.setProperty(k, v);
    const back = document.createElement("div");
    back.className = "ss-back";
    const sheet = document.createElement("div");
    sheet.className = "ss-sheet";
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-modal", "true");
    if (title) sheet.setAttribute("aria-label", title);
    wrap.append(back, sheet);
    document.body.appendChild(wrap);
    const paint = () =>
      render(
        html`<div class="ss-grab"></div>
          <div class="ss-head"><b>${title}</b><button type="button" class="ss-x" aria-label="Fechar" @click=${() => close(null)}>${icon("x")}</button></div>
          ${draw(state, paint)}`,
        sheet,
      );
    paint();
    cur = { wrap, anchor, resolve, pending: null, closing: false, byBack: false };
    back.addEventListener("click", () => close(null));
    wrap.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      e.stopPropagation(); // only this window closes, not the one under it
      close(null);
    });
    // the Back of the phone closes only this
    try {
      history.pushState(history.state, "");
    } catch {}
    requestAnimationFrame(() => {
      wrap.classList.add("in");
      const f = sheet.querySelector(focus) || sheet.querySelector(".ss-x");
      if (f) {
        f.scrollIntoView({ block: "nearest" });
        f.focus({ preventScroll: true });
      }
    });
  });
}

/** Closes; the value goes to the field after the history is back where it was (the app's Back intact). */
function close(value) {
  if (!cur || cur.closing) return;
  cur.closing = true;
  cur.pending = value;
  const done = cur;
  const finish = () => {
    if (cur !== done) return;
    cur = null;
    done.wrap.classList.remove("in");
    done.wrap.classList.add("out");
    setTimeout(() => done.wrap.remove(), 220);
    try {
      done.anchor.focus({ preventScroll: true });
    } catch {}
    done.resolve(done.pending);
  };
  done.finish = finish;
  if (done.byBack) return finish();
  history.back();
  // no popstate (an odd history): close anyway
  setTimeout(finish, 400);
}

/** The time window: the 24 hours and the minutes (of 5 in 5); a minute (or Pronto) chooses. */
export function pickTime(anchor, { value = "", title = "Horário" } = {}) {
  const v = normTime(value) || "09:00";
  const s = { h: Number(v.slice(0, 2)), m: Number(v.slice(3, 5)) };
  const pick = () => close(`${pad(s.h)}:${pad(s.m)}`);
  const draw = (s, paint) => html`<div class="wp-now" aria-live="polite">${pad(s.h)}:${pad(s.m)}</div>
    <div class="wp-body">
      <div class="wp-lab" id="wp-h">Hora</div>
      <div class="wp-grid wp-h" role="group" aria-labelledby="wp-h">
        ${Array.from({ length: 24 }, (_, h) => html`<button type="button" class="wp-cell ${h === s.h ? "on" : ""}" aria-pressed=${h === s.h ? "true" : "false"} @click=${() => ((s.h = h), paint())}>${pad(h)}</button>`)}
      </div>
      <div class="wp-lab" id="wp-m">Minutos</div>
      <div class="wp-grid wp-m" role="group" aria-labelledby="wp-m">
        ${Array.from({ length: 12 }, (_, k) => k * 5).map((m) => html`<button type="button" class="wp-cell ${m === s.m ? "on" : ""}" aria-pressed=${m === s.m ? "true" : "false"} @click=${() => ((s.m = m), pick())}>${pad(m)}</button>`)}
      </div>
    </div>
    <div class="wp-foot"><button type="button" class="wp-ok" @click=${pick}>Pronto</button></div>`;
  return open(anchor, title, s, draw, ".wp-h .wp-cell.on");
}

/** The date window: a month, ‹ and › to the others; a day chooses. min/max (YYYY-MM-DD) limit the days. */
export function pickDate(anchor, { value = "", title = "Data", min = "", max = "", weekStart = 1 } = {}) {
  const now = new Date();
  const sel = YMD.test(value || "") ? value : "";
  const from = sel ? fromYmd(sel) : min && YMD.test(min) && min > ymd(now) ? fromYmd(min) : now;
  const s = { month: new Date(from.getFullYear(), from.getMonth(), 1) };
  const ok = (d) => (!min || d >= min) && (!max || d <= max);
  const draw = (s, paint) => {
    const first = s.month;
    const prevEnd = ymd(addDays(first, -1));
    const nextStart = ymd(new Date(first.getFullYear(), first.getMonth() + 1, 1));
    const go = (n) => {
      s.month = new Date(first.getFullYear(), first.getMonth() + n, 1);
      paint();
    };
    return html`<div class="wp-body">
      <div class="wp-mhead" data-month=${ymd(first).slice(0, 7)}>
        <button type="button" class="wp-nav" aria-label="Mês anterior" ?disabled=${!!min && prevEnd < min} @click=${() => go(-1)}>${icon("chevron-left")}</button>
        <b aria-live="polite">${cap(MONTHS[first.getMonth()])} de ${first.getFullYear()}</b>
        <button type="button" class="wp-nav" aria-label="Próximo mês" ?disabled=${!!max && nextStart > max} @click=${() => go(1)}>${icon("chevron-right")}</button>
      </div>
      <div class="wp-days">
        ${[0, 1, 2, 3, 4, 5, 6].map((i) => html`<span class="wp-wd" aria-hidden="true">${WEEKDAYS_SHORT[(i + weekStart) % 7].slice(0, 1).toUpperCase()}</span>`)}
        ${monthDays(first, weekStart).map((d) => {
          const k = ymd(d);
          return html`<button type="button" class="wp-day ${d.getMonth() !== first.getMonth() ? "out" : ""} ${sameDay(d, now) ? "today" : ""} ${k === sel ? "on" : ""}" data-d=${k} aria-label=${dayLabel(d, now)} aria-pressed=${k === sel ? "true" : "false"} ?disabled=${!ok(k)} @click=${() => close(k)}>${d.getDate()}</button>`;
        })}
      </div>
    </div>`;
  };
  return open(anchor, title, s, draw, ".wp-day.on, .wp-day.today, .wp-day:not(.out):not(:disabled)");
}

