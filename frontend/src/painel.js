// 1.94.0: the Tela cheia as the panel of the house (the TV, the tablet on the wall): what has to be done in the next
// hours, from everything that comes into the CronologIA (the calendars of everyone, the medicines, the routines and the
// maintenance of the house, the tasks of the ResolvIA, the bills of the GerencIA), in one place. On one side, A seguir
// (the next thing with a time: when it passes, the first of Depois takes its place) and Depois (the rest with a time,
// to the end of the day, then Amanhã cedo); on the other, Tarefas do dia (what has no time, by when it must be done:
// Atrasadas, each part of the day, Qualquer hora, Contas a pagar) and the placar as it was; the sheet of the MemorIA,
// when there is one now, on the right. Out of the Tela cheia, the Agora stays as it is. Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG, css, repeat } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { PERIODS, periodInfo, periodOfHour, periodPassed, foldText } from "../../cronologia/rootfs/app/lib/kinds.js";
import { atSameStart } from "./events.js";
import { colorById, colorVars, plural, hm, fromYmd, startOfDay, addDays, dayDiff, untilLabel, durationLabel, dateShort } from "./util.js";
import { routineSub, partLeft, placeText } from "./models.js";
import { TODO_COLOR } from "./tasks.js";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;
const initial = (name) => (name || "?").trim().charAt(0).toUpperCase();
const LONG = 12 * 3600000;
const KIND_IC = { evento: "calendar", remedio: "pill", rotina: "spray-can", tarefa: "list-checks", manutencao: "wrench" };
const KIND_NAME = { evento: ["compromisso", "compromissos"], remedio: ["remédio", "remédios"], rotina: ["rotina", "rotinas"], tarefa: ["tarefa", "tarefas"], manutencao: ["manutenção", "manutenções"] };
// where each part of the day ends (the night: midnight, or 05:00 in the small hours)
const PERIOD_END = { manha: 12, tarde: 18, noite: 24 };

const atTime = (day, hhmm) => {
  const [h, m] = String(hhmm).split(":").map(Number);
  const d = new Date(day);
  d.setHours(h, m || 0, 0, 0);
  return d;
};

/**
 * What the panel shows, from the lists of the Agora (pure, for the tests). Each item: {kind, at (its time, or null),
 * ref (the event, dose, routine, task or maintenance)}.
 * - current: what is happening now (an appointment going on, a dose whose time came);
 * - next: A seguir, the first time ahead today and everything at that same minute; later: the rest of today (Depois);
 *   soon: tomorrow before noon (Amanhã cedo, appointments and tasks with a time);
 * - late: Atrasadas (a dose late, a routine of yesterday or of a part of the day that is over, a task or a maintenance
 *   past its date); groups: what has no time today, by part of the day (manha, tarde, noite) or any time (dia);
 * - contas: the bills not paid, late or due in the next 3 days; allDay: the appointments of the whole day.
 */
export function painelPlan({ events = [], meds = [], routines = [], maint = [], todos = [], bills = [], now = new Date(), isDone = () => false } = {}) {
  const today = startOfDay(now);
  const tomorrow = addDays(today, 1);
  const noon = atTime(tomorrow, "12:00");
  const current = [];
  const timed = [];
  const soon = [];
  const late = [];
  const allDay = [];
  const groups = { manha: [], tarde: [], noite: [], dia: [] };
  for (const e of events) {
    if (e.kind || e.todo || isDone(e)) continue;
    if (e.allDay || e.end - e.start >= LONG) {
      if (e.start < tomorrow && e.end > today) allDay.push(e);
    } else if (e.start >= tomorrow) {
      if (e.start < noon) soon.push({ kind: "evento", at: e.start, ref: e });
    } else if (e.end > now) (e.start <= now ? current : timed).push({ kind: "evento", at: e.start, ref: e });
  }
  for (const m of meds) {
    if (m.taken || m.state === "tomado" || m.state === "pulado") continue;
    if (m.state === "atrasado") late.push({ kind: "remedio", at: m.allDay ? null : new Date(m.start), ref: m });
    else if (m.allDay || !m.time) groups.dia.push({ kind: "remedio", at: null, ref: m });
    else {
      const t = new Date(m.start);
      (t <= now ? current : timed).push({ kind: "remedio", at: t, ref: m });
    }
  }
  for (const r of routines) {
    if (r.done) continue;
    const per = r.period || (r.time ? periodOfHour(Number(String(r.time).slice(0, 2))) : "");
    if (r.late > 0 || r.yesterday || (per && periodPassed(per, now))) {
      late.push({ kind: "rotina", at: null, ref: r });
      continue;
    }
    const t = r.time ? atTime(today, r.time) : null;
    if (t && t > now) timed.push({ kind: "rotina", at: t, ref: r });
    else groups[per || "dia"].push({ kind: "rotina", at: null, ref: r });
  }
  for (const t of todos) {
    if (t.done || t.undated) continue;
    const due = t.allDay ? null : new Date(t.due);
    if (t.overdue) late.push({ kind: "tarefa", at: due, ref: t });
    else if (t.days === 0) {
      if (!due) groups.dia.push({ kind: "tarefa", at: null, ref: t });
      else (due > now ? timed : late).push({ kind: "tarefa", at: due, ref: t });
    } else if (t.days === 1 && due && due < noon) soon.push({ kind: "tarefa", at: due, ref: t });
  }
  for (const m of maint) {
    if (m.days < 0 || m.state === "vencida") late.push({ kind: "manutencao", at: null, ref: m });
    else if (m.days === 0) groups.dia.push({ kind: "manutencao", at: null, ref: m });
  }
  const byAt = (a, b) => a.at - b.at;
  timed.sort(byAt);
  current.sort(byAt);
  soon.sort(byAt);
  // the late ones with a time first, the oldest first; then the others as they came
  late.sort((a, b) => (a.at ? 0 : 1) - (b.at ? 0 : 1) || (a.at && b.at ? a.at - b.at : 0));
  const next = atSameStart(timed, (x) => x.at);
  const contas = bills.filter((b) => !b.paid && (b.overdue || dayDiff(fromYmd(b.due), today) <= 3));
  return { current, next, later: timed.slice(next.length), soon: soon.slice(0, 3), late, groups, contas, allDay };
}

/** How the parts of the day go on the panel: the one of now first (until when, and how long is left), then the next. */
export function periodsAhead(now = new Date()) {
  const h = now.getHours();
  const cur = periodOfHour(h);
  const ids = PERIODS.map((p) => p.id);
  const order = h < 5 ? ["noite"] : ids.slice(ids.indexOf(cur));
  return order.map((id) => {
    const p = periodInfo(id);
    const end = h < 5 ? 5 : PERIOD_END[id];
    const endAt = new Date(now);
    endAt.setHours(end, 0, 0, 0);
    const pad = (n) => `${String(n).padStart(2, "0")}:00`;
    return { id, label: p.label, icon: p.icon, now: id === cur, end: pad(end), left: id === cur ? endAt - now : 0, span: `${pad(p.from)} às ${pad(end)}` };
  });
}

/** "2 compromissos", "1 remédio", "3 itens": what is at a time, in words. */
export function whatAt(list) {
  const kinds = [...new Set(list.map((x) => x.kind))];
  if (kinds.length === 1) {
    const [one, many] = KIND_NAME[kinds[0]];
    return plural(list.length, one, many);
  }
  return plural(list.length, "item", "itens");
}

/**
 * 1.121.0: what the CorrerIA sends for the Quadro de sensores, cleaned (only text, a few lines): null when there is
 * nothing to show.
 */
export function cleanQuadro(q) {
  if (!q || typeof q !== "object" || !Array.isArray(q.linhas)) return null;
  const txt = (v, max) => String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, max);
  const linhas = q.linhas
    .filter((l) => l && typeof l === "object")
    .slice(0, 8)
    .map((l) => ({ nome: txt(l.nome, 60), valor: txt(l.valor, 40), destaque: l.destaque === true }))
    .filter((l) => l.nome || l.valor);
  const titulo = txt(q.titulo, 40);
  if (!titulo || !linhas.length) return null;
  const de = Number.isInteger(q.de) && q.de > 0 && q.de <= 20 ? q.de : 1;
  const n = Number.isInteger(q.n) && q.n > 0 && q.n <= de ? q.n : 1;
  return { titulo, linhas, n, de };
}

export const PainelMixin = (Base) =>
  class extends Base {
    /** The plan of the panel from what the Agora has (the events of yesterday to tomorrow, the index, the bills). */
    _painelPlan(events) {
      const ix = this._ix();
      const away = this._awayNow && this._awayNow();
      return painelPlan({
        events,
        meds: ix.meds || [],
        // Modo férias: the house and the tasks rest (the banner says so)
        routines: away ? [] : ix.routines || [],
        maint: away ? [] : ix.maint || [],
        todos: away ? [] : this._todos().items || [],
        bills: this._billsList(),
        now: new Date(this._now),
        isDone: (e) => !!this._checkOf(e),
      });
    }

    /**
     * The Tela cheia as the panel: head (the Hoje of always, with the clock), then the columns. memo: the sheet of the
     * MemorIA now (or nothing); top: what goes above A seguir (the banner of the Férias); placar: as it was.
     */
    _renderPainel({ head, events, memo, top = nothing, placar = nothing }) {
      const now = new Date(this._now);
      const p = this._painelPlan(events);
      // 1.97.0: inside the CorrerIA, its Conversa open takes the place of the sheet (the rest stays where it was): an
      // empty column here, where the page around puts it (_tellChatSlot)
      const chat = !!(this._embedChat && this._conv && this._conv.aberta);
      const has = memo !== nothing || chat;
      return html`<section class="page now-page full-page painel">
        ${head}
        <div class="full-cols pn-cols ${has ? "three" : "two"}">
          <div class="pn-col pn-time">${top}${this._pnNow(p, now)}${this._pnHero(p, now)}${this._pnLater(p, now)}${this._pnQuadro()}</div>
          <div class="pn-col pn-day">${this._pnTasks(p, now)}${placar}</div>
          ${chat ? html`<div class="pn-chat-slot" id="lugar-conversa" aria-hidden="true"></div>` : has ? html`<div class="full-memo">${memo}</div>` : nothing}
        </div>
      </section>`;
    }

    /**
     * 1.121.0: the Quadro de sensores of the CorrerIA (inside it, ?painel=1&conversa=1): a card at the bottom of the left
     * column with the list of now (the CorrerIA sends it, and changes it from time to time). Nothing sent, no card.
     */
    _pnQuadro() {
      const q = this._embedChat ? this._quadro : null;
      if (!q) return nothing;
      return html`<div class="panel pn-quadro" id="quadro" role="group" aria-label=${q.titulo}>
        ${this._panelHead("activity", "accent", q.titulo, q.de > 1 ? `${q.n} de ${q.de}` : "")}
        <dl class="pn-qd">
          ${q.linhas.map((l) => html`<div class=${l.destaque ? "big" : ""}><dt>${l.nome}</dt><dd>${l.valor}</dd></div>`)}
        </dl>
      </div>`;
    }

    /**
     * 1.97.0: where the Conversa of the CorrerIA goes (the place of the sheet), told to the page around when it changes
     * ({painel: "lugar", x, y, w, h}, in the pixels of this page, which fills the frame).
     */
    _tellChatSlot() {
      if (!this._embedChat) return;
      const el = this.renderRoot && this.renderRoot.querySelector("#lugar-conversa");
      const r = el ? el.getBoundingClientRect() : null;
      const box = r ? { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) } : null;
      const key = JSON.stringify(box);
      if (key === this._slotSent) return;
      this._slotSent = key;
      try {
        window.parent.postMessage({ painel: "lugar", ...(box || { w: 0, h: 0, x: 0, y: 0 }) }, location.origin);
      } catch {
        /* nothing around */
      }
    }

    /** The appointments of the whole day (a birthday, a trip), at the end of Depois: a few, then +N. */
    _pnAllDay(list, now) {
      if (!list.length) return nothing;
      const MAX = 4;
      const shown = list.length > MAX ? list.slice(0, MAX - 1) : list;
      return html`<div class="pn-sep"><span>O dia todo</span></div><div class="pn-allday" role="list" aria-label="O dia todo">
        ${shown.map((e) => {
          const last = addDays(new Date(e.end), e.allDay ? -1 : 0);
          const until = e.end - e.start > 86400000 && dayDiff(last, now) >= 1 ? ` · até ${dateShort(last, now)}` : "";
          return html`<button class="pn-chip" role="listitem" style=${colorVars(this._colorOfEvent(e), this._dark)} @click=${() => this._openEvent(e)}>${icon("calendar")}<span>${e.summary}${until}</span></button>`;
        })}
        ${shown.length < list.length ? html`<span class="pn-chip more" role="listitem">+${list.length - shown.length}</span>` : nothing}
      </div>`;
    }

    /** Agora, under A seguir: what goes on now (an appointment, a dose whose time came). */
    _pnNow(p, now) {
      if (!p.current.length) return nothing;
      // 1.97.0: Acontecendo agora, the first thing (above A seguir), big, with the live dot and how much of it went by
      // 1.99.0: with its big round icon at the side (that pulses), like the clock of A seguir
      return html`<div class="pn-now" role="group" aria-label="Acontecendo agora" style=${colorVars(this._pnColor(p.current[0]), this._dark)}>
        <span class="pn-now-badge" aria-hidden="true">${icon("activity")}</span>
        <div class="pn-now-body">
          <div class="pn-now-head"><span class="overline">Acontecendo agora</span></div>
          ${repeat(p.current, (x) => this._pnKey(x), (x) => this._pnLine(x, now, { live: true }))}
        </div>
      </div>`;
    }

    /** A seguir, always the first thing: the next time ahead, big; one appointment alone is the ticket of always. */
    _pnHero(p, now) {
      const strip = nothing;
      if (!p.next.length) {
        // nothing more with a time today
        const done = !p.current.length;
        return html`${strip}<div class="hero-ev ticket empty pn-hero">
          <span class="tk-main">
            <span class="tk-clock">${this._clock(null, now)}</span>
            <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">${done ? "Nada mais com horário hoje" : "Nada depois disso hoje"}</span></span>
          </span>
        </div>`;
      }
      const first = p.next[0];
      const pill = untilLabel(first.at - now);
      if (p.next.length === 1 && first.kind === "evento") {
        const e = first.ref;
        const cal = this._cal(e.cal);
        return html`${strip}${this._ticket(e, {
          label: "A seguir",
          pill,
          when: html`<b>${hm(e.start)}</b> – ${hm(e.end)} · hoje`,
          stub: html`<span class="dot"></span><span>${[cal && cal.name, e.location].filter(Boolean).join(" · ")}</span>`,
          now,
        })}`;
      }
      return html`${strip}<div class="hero-ev ticket many pn-hero" role="group" aria-label="A seguir: ${whatAt(p.next)} às ${hm(first.at)}" style=${colorVars(this._pnColor(first), this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(first.kind === "evento" ? first.ref : null, first.kind === "evento" ? now : first.at)}</span>
          <span class="tk-info">
            <span class="tk-top"><span class="overline">A seguir</span><span class="tk-pill">${icon("clock", "sm")}${pill}</span></span>
            <span class="pn-big"><b>${hm(first.at)}</b><small>${whatAt(p.next)}</small></span>
          </span>
        </span>
        <span class="tk-cut" aria-hidden="true"></span>
        <span class="tk-list">${repeat(p.next, (x) => this._pnKey(x), (x) => this._pnLine(x, now, { hero: true }))}</span>
      </div>`;
    }

    /** Depois: the rest with a time today, in order (when A seguir passes, the first one goes up); then Amanhã cedo. */
    _pnLater(p, now) {
      if (!p.later.length && !p.soon.length && !p.allDay.length) return nothing;
      return html`<div class="panel pn-later" id="depois">
        ${this._panelHead("calendar-clock", "accent", "Depois", p.later.length ? `${p.later.length} até o fim do dia` : "nada mais hoje")}
        <div class="pn-tl">
          ${repeat(p.later, (x) => this._pnKey(x), (x) => this._pnLine(x, now, { time: true }))}
          ${p.soon.length
            ? html`<div class="pn-sep"><span>Amanhã cedo</span></div>
                ${repeat(p.soon, (x) => this._pnKey(x), (x) => this._pnLine(x, now, { time: true, soon: true }))}`
            : nothing}
          ${this._pnAllDay(p.allDay, now)}
        </div>
      </div>`;
    }

    /** Tarefas do dia: what has no time, by when it must be done; the bills last. */
    _pnTasks(p, now) {
      const parts = periodsAhead(now).filter((x) => p.groups[x.id].length);
      const open = p.late.length + parts.reduce((n, x) => n + p.groups[x.id].length, 0) + p.groups.dia.length + p.contas.length;
      const routine = [p.late, p.groups.manha, p.groups.tarde, p.groups.noite, p.groups.dia].some((l) => l.some((x) => x.kind === "rotina"));
      const grp = (ic, label, right = "", cls = "") => html`<div class="pn-grp ${cls}">${icon(ic)}<span>${label}</span>${right ? html`<small>${right}</small>` : nothing}</div>`;
      const rows = (list, late = false) => repeat(list, (x) => this._pnKey(x), (x) => this._pnLine(x, now, { late }));
      return html`<div class="panel pn-tasks ${p.late.length ? "alert" : ""}" id="tarefas-do-dia">
        ${this._panelHead("list-checks", "ok", "Tarefas do dia", open ? `${open} para fazer` : "tudo feito")}
        ${routine ? this._renderPartPick() : nothing}
        ${p.late.length ? html`${grp("triangle-alert", "Atrasadas", String(p.late.length), "late")}${rows(p.late, true)}` : nothing}
        ${parts.map((x) => html`${grp(x.icon, x.label, x.now ? `até ${x.end} · ${Math.round(x.left / 60000) === 1 ? "falta" : "faltam"} ${durationLabel(x.left)}` : x.span, x.now ? "cur" : "")}${rows(p.groups[x.id])}`)}
        ${p.groups.dia.length ? html`${grp("sun", "Qualquer hora", "hoje")}${rows(p.groups.dia)}` : nothing}
        ${p.contas.length
          ? html`${grp("receipt", "Contas a pagar")}${repeat(p.contas, (b) => b.id, (b) => this._pnBill(b, now))}`
          : nothing}
        ${!open ? html`<p class="empty-line all-done">${icon("circle-check")}Tudo feito hoje.</p>` : nothing}
      </div>`;
    }

    _pnKey(x) {
      return `${x.kind}|${x.ref.key || `${x.ref.cal}|${x.ref.uid}|${+x.ref.start}`}`;
    }

    _pnColor(x) {
      return x.kind === "tarefa" ? colorById(TODO_COLOR) : this._colorOfEvent(x.ref);
    }

    /** The avatar of a person (a pet: the paw), in their color. */
    _pnWho(name) {
      if (!name) return nothing;
      const pet = (this._ix().people || []).some((p) => p.pet && foldText(p.name) === foldText(name));
      return html`<span class="pn-av ${pet ? "pet" : ""}" style=${colorVars(this._pColor(name), this._dark)} title=${name}>${pet ? icon("paw-print") : initial(name)}</span>`;
    }

    /**
     * One line of the panel: the time (in Depois), the icon of what it is in the color of its calendar, the title and
     * how it is, who, and its button (Tomei, Feito, the initials of who did it, Concluir). A tap on the text opens it.
     */
    _pnLine(x, now, { time = false, hero = false, soon = false, late = false, live = false } = {}) {
      const it = x.ref;
      const title = it.summary;
      let meta = [];
      let act = nothing;
      let who = "";
      let open = () => this._openIndexItem(it);
      const points = (n) => (n > 0 && this._scoreOn() ? html`<span class="pts">+${n}</span>` : nothing);
      const quick = (n, go) => this._pickWho() ? this._renderQuickWho(it.summary, n, go) : null;
      if (x.kind === "evento") {
        const cal = this._cal(it.cal);
        meta = [time || hero ? `${hero ? `${hm(it.start)} – ` : "até "}${hm(it.end)}` : `até ${hm(it.end)}`, cal && cal.name, it.location];
        open = () => this._openEvent(it);
      } else if (x.kind === "remedio") {
        who = it.who;
        meta = [it.dose ? `Dose: ${it.dose}` : "", it.state === "atrasado" ? `atrasado${it.late_min ? ` ${it.late_min < 60 ? `${it.late_min} min` : `${Math.floor(it.late_min / 60)} h`}` : ""}` : it.state === "agora" ? "hora de tomar" : ""];
        if (!soon) act = html`<button class="dose-btn ${it.state}" aria-label="${this._doseVerb(it.who, true)}: ${it.summary}" @click=${() => this._check(it, "remedio")}>${icon("check")}${this._doseVerb(it.who)}</button>`;
      } else if (x.kind === "rotina") {
        const n = partLeft(it);
        meta = [late || !x.at ? routineSub(it, now) : it.who];
        const q = quick(n, (p) => this._markDone(it, "rotina", p));
        act = q ? html`${points(n)}${q}` : html`${points(n)}${this._renderChk(it)}`;
        if (!q) who = it.who;
      } else if (x.kind === "tarefa") {
        const people = this._scoreOn() ? (this._score() || {}).participants || [] : [];
        const due = it.allDay ? "" : hm(new Date(it.due));
        meta = [it.overdue ? (it.days < 0 ? (it.days === -1 ? "venceu ontem" : `venceu há ${-it.days} dias`) : `venceu${due ? ` às ${due}` : " hoje"}`) : soon ? "" : due && !time ? `até ${due}` : "", it.listName, "ResolvIA"];
        open = () => this._openSheet("todo", { key: it.key });
        if (!soon)
          act =
            it.points > 0 && people.length && people.length <= 3
              ? html`${points(it.points)}${this._renderQuickWho(it.summary, it.points, (p) => this._todoDone(it, true, p))}`
              : html`${points(it.points)}<button class="chk sq" @click=${() => this._todoDone(it, true)} aria-label="Concluir ${it.summary}"></button>`;
      } else if (x.kind === "manutencao") {
        meta = [it.days < -1 ? `venceu há ${-it.days} dias` : it.days === -1 ? "venceu ontem" : "é hoje", placeText(it)];
        const q = it.canMove ? quick(it.points || 0, (p) => this._maintDone(it, p)) : null;
        act = it.canMove ? (q ? html`${points(it.points)}${q}` : html`${points(it.points)}<button class="dose-btn ${it.days < 0 ? "atrasado" : "agora"}" @click=${() => this._maintDone(it)}>${icon("check")}Feito</button>`) : nothing;
        if (!q) who = it.who;
      }
      const sub = meta.filter(Boolean).join(" · ");
      // going on now: how much of it went by (an appointment)
      const span = live && x.kind === "evento" ? it.end - it.start : 0;
      const went = span > 0 ? Math.min(100, Math.max(0, Math.round(((now - it.start) / span) * 100))) : -1;
      return html`<div class="pn-line ${x.kind} ${late ? "late" : ""} ${soon ? "soon" : ""} ${hero || live ? "big" : ""}" style=${colorVars(this._pnColor(x), this._dark)}>
        ${time ? html`<span class="pn-t">${hm(x.at)}</span><span class="pn-dot" aria-hidden="true"></span>` : nothing}
        <span class="pn-ic" aria-hidden="true">${icon(KIND_IC[x.kind])}</span>
        <button class="pn-tx" @click=${open}><b>${title}</b>${sub ? html`<small>${sub}</small>` : nothing}${went >= 0 ? html`<span class="pn-went" aria-hidden="true"><i style="width:${went}%"></i></span>` : nothing}</button>
        ${who ? this._pnWho(who) : nothing}
        ${act}
      </div>`;
    }

    /** A bill not paid: the day, the value, Paguei (in the GerencIA, or the bill of the calendar). */
    _pnBill(b, now) {
      const d = fromYmd(b.due);
      const days = dayDiff(d, now);
      const when = b.overdue ? (days === -1 ? "venceu ontem" : days < 0 ? `venceu há ${-days} dias` : "venceu") : days === 0 ? "vence hoje" : days === 1 ? "vence amanhã" : `vence em ${days} dias`;
      const money = b.value != null ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(b.value) : "";
      return html`<div class="pn-line conta ${b.overdue ? "late" : ""}" style=${colorVars(colorById("ouro"), this._dark)}>
        <span class="pn-ic pn-due ${days <= 0 ? "today" : ""}" aria-hidden="true"><b>${d.getDate()}</b></span>
        <button class="pn-tx" @click=${() => (b.source === "gerencia" ? this._openSheet("bill", { b }) : this._openIndexItem(b.item))}><b>${b.title}${money ? ` · ${money}` : ""}</b><small>${[when, b.source === "gerencia" ? "GerencIA" : b.sub].filter(Boolean).join(" · ")}</small></button>
        <button class="dose-btn ${b.overdue ? "atrasado" : days === 0 ? "agora" : ""}" ?disabled=${b.busy} @click=${() => this._pay(b)}>${icon("check")}Paguei</button>
      </div>`;
    }
  };

export const painelStyles = css`
  /* 1.96.0: the top of the panel in one line, half the height: Hoje and the date on the left, the clock on the right */
  .painel > .brand-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 0 2px 14px;
  }
  .painel > .brand-head > .title-row {
    display: contents;
  }
  .painel > .brand-head .page-title {
    order: 1;
    flex: none;
    margin: 0;
    font-size: 30px;
  }
  .painel > .brand-head .page-title > .page-ic {
    width: 34px;
    height: 34px;
    border-radius: 10px;
  }
  .painel > .brand-head .page-title > .page-ic .i {
    width: 19px;
    height: 19px;
  }
  .painel > .brand-head > .status {
    order: 2;
    flex: 1;
    min-width: 0;
    margin: 4px 0 0;
    font-size: 15px;
  }
  .painel > .brand-head .full-clock {
    order: 3;
    margin: 0;
    font-size: 44px;
  }
  .painel > .brand-head .full-btn {
    order: 4;
    width: 40px;
    height: 40px;
    margin: 0;
  }
  /* 1.97.0: the Conversa of the CorrerIA around (open: pressed; a new answer: the dot) */
  .painel > .brand-head .full-btn.conv {
    position: relative;
    width: 46px;
    height: 46px;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  .painel > .brand-head .full-btn.conv.on {
    box-shadow: 0 0 0 3px var(--rv-accent-soft);
  }
  .painel > .brand-head .full-btn.conv.novo::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--rv-late);
    border: 2px solid var(--rv-bg);
  }
  /* the columns: the time (A seguir, Depois), the day (Tarefas do dia, the placar) and the sheet of the MemorIA */
  .pn-col {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  /* 1.97.0: the place of the Conversa of the CorrerIA (it draws it over this, in its own page) */
  .pn-chat-slot {
    min-height: 300px;
    border-radius: 20px;
  }
  .pn-col > .panel {
    margin-bottom: 16px;
  }
  .pn-col > .hero-ev {
    margin-bottom: 16px;
  }
  /* 1.121.0: the Quadro de sensores of the CorrerIA: the name on the left, the value on the right, in one line each */
  .pn-qd {
    margin: 0;
    display: grid;
    gap: 2px;
  }
  .pn-qd > div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 6px 0;
    border-top: 1px solid var(--rv-line);
  }
  .pn-qd > div:first-child {
    border-top: 0;
  }
  .pn-qd dt {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--rv-muted);
  }
  .pn-qd dd {
    margin: 0;
    flex: none;
    font-family: var(--rv-font-c, inherit);
    font-weight: 700;
    font-size: 20px;
    font-variant-numeric: tabular-nums;
  }
  .pn-qd > .big dd {
    font-size: 30px;
    color: var(--rv-accent);
  }
  .pn-qd > .big dt {
    color: var(--rv-text);
    font-weight: 600;
  }
  .pn-allday {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 6px 4px 4px 92px;
  }
  .pn-chip.more {
    background: var(--rv-surface-2);
    color: var(--rv-muted);
  }
  .pn-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    max-width: 100%;
    padding: 6px 12px;
    border-radius: 999px;
    background: var(--cs);
    color: var(--rv-text);
    font-size: 15px;
    font-weight: 600;
  }
  .pn-chip .i {
    width: 16px;
    height: 16px;
    color: var(--ci);
  }
  :host([dark]) .pn-chip .i {
    color: var(--c);
  }
  .pn-chip span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* 1.97.0: Acontecendo agora, the first thing (above A seguir): what goes on now */
  .pn-now {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 14px;
    padding: 12px 8px 10px 16px;
    border-radius: 22px;
    background: color-mix(in srgb, var(--c) 12%, var(--rv-surface));
    border: 1.5px solid color-mix(in srgb, var(--c) 50%, var(--rv-line));
    box-shadow: var(--rv-shadow);
  }
  .pn-now-head {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 6px 10px 2px;
  }
  .pn-now-head .overline {
    color: var(--ci);
    font-weight: 700;
    font-size: 15px;
  }
  :host([dark]) .pn-now-head .overline {
    color: var(--c);
  }
  /* the big round icon, the size of the clock of A seguir, with its ring and a pulse around it */
  .pn-now-badge {
    flex: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--rv-surface);
    color: var(--ci);
    box-shadow:
      inset 0 0 0 6px color-mix(in srgb, var(--c) 75%, transparent),
      0 0 0 0 color-mix(in srgb, var(--c) 50%, transparent);
    animation: pn-live 2.2s ease-out infinite;
  }
  :host([dark]) .pn-now-badge {
    color: var(--c);
  }
  .pn-now-badge .i {
    width: 40px;
    height: 40px;
    stroke-width: 2.4;
  }
  .pn-now-body {
    flex: 1;
    min-width: 0;
  }
  @keyframes pn-live {
    0% {
      box-shadow:
        inset 0 0 0 6px color-mix(in srgb, var(--c) 75%, transparent),
        0 0 0 0 color-mix(in srgb, var(--c) 50%, transparent);
    }
    70%,
    100% {
      box-shadow:
        inset 0 0 0 6px color-mix(in srgb, var(--c) 75%, transparent),
        0 0 0 14px transparent;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .pn-now-badge {
      animation: none;
    }
  }
  .pn-now .pn-line.big .pn-tx b {
    font-size: 30px;
  }
  .pn-went {
    display: block;
    width: 100%;
    height: 5px;
    margin-top: 7px;
    border-radius: 3px;
    background: color-mix(in srgb, var(--c) 18%, transparent);
    overflow: hidden;
  }
  .pn-went i {
    display: block;
    height: 100%;
    border-radius: 3px;
    background: var(--c);
  }
  .pn-big {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-top: 2px;
  }
  .pn-big b {
    font-family: var(--rv-display);
    font-size: 52px;
    font-weight: 600;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .pn-big small {
    font-size: 18px;
    color: var(--rv-text-2);
  }
  /* one line: the time (Depois), the icon, the text, who, the button */
  .pn-line {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 56px;
    padding: 5px 4px;
  }
  .pn-t {
    width: 58px;
    flex: none;
    text-align: right;
    font-family: var(--rv-display);
    font-size: 23px;
    font-weight: 600;
    color: var(--rv-text-2);
    font-variant-numeric: tabular-nums;
  }
  .pn-dot {
    width: 12px;
    height: 12px;
    flex: none;
    border-radius: 50%;
    background: var(--c);
    box-shadow: 0 0 0 4px var(--rv-surface);
    position: relative;
    z-index: 1;
  }
  .pn-ic {
    width: 38px;
    height: 38px;
    flex: none;
    border-radius: 11px;
    display: grid;
    place-items: center;
    background: var(--cs);
    color: var(--ci);
  }
  :host([dark]) .pn-ic {
    color: var(--c);
  }
  .pn-ic .i {
    width: 20px;
    height: 20px;
  }
  .pn-due {
    flex-direction: column;
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 700;
    color: var(--rv-text-2);
    background: var(--rv-surface-2);
  }
  .pn-due.today {
    background: var(--rv-today-soft);
    color: var(--rv-today);
  }
  .pn-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .pn-tx b {
    max-width: 100%;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pn-tx small {
    max-width: 100%;
    font-size: 14px;
    color: var(--rv-muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pn-line.big .pn-tx b {
    font-family: var(--rv-display);
    font-size: 27px;
    line-height: 1.15;
  }
  .pn-line.big .pn-tx small {
    font-size: 16px;
  }
  .pn-line.late .pn-tx small {
    color: var(--rv-late);
  }
  .pn-line.late .pn-ic {
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .pn-line.soon {
    opacity: 0.6;
  }
  .pn-av {
    width: 34px;
    height: 34px;
    flex: none;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--cs);
    color: var(--ci);
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 17px;
  }
  :host([dark]) .pn-av {
    color: var(--c);
  }
  .pn-av .i {
    width: 18px;
    height: 18px;
  }
  .pn-line .pts {
    flex: none;
  }
  .pn-line .dose-btn {
    min-width: 0;
    min-height: 38px;
    padding: 0 12px;
  }
  /* Depois: a line down the times */
  .pn-tl {
    position: relative;
    padding: 0 6px 8px 0;
  }
  .pn-tl::before {
    content: "";
    position: absolute;
    left: 79px;
    top: 14px;
    bottom: 22px;
    width: 2px;
    background: var(--rv-line);
  }
  .pn-sep {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0 2px 92px;
    color: var(--rv-muted);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .pn-sep::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--rv-line);
  }
  /* Tarefas do dia: the groups by when */
  .pn-grp {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 2px 2px;
    color: var(--rv-text-2);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }
  .pn-grp .i {
    width: 17px;
    height: 17px;
    color: var(--rv-muted);
  }
  .pn-grp small {
    margin-left: auto;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    color: var(--rv-muted);
  }
  .pn-grp.late,
  .pn-grp.late .i {
    color: var(--rv-late);
  }
  .pn-grp.cur small {
    color: var(--rv-today);
  }
  .pn-tasks .part-pick {
    margin-top: 4px;
  }
  @media (min-width: 1100px) {
    /* each column goes down on its own; the sheet fits the screen (1.93.0) */
    /* 1.96.0: with the sheet, the column of A seguir narrower (30% less than in 1.94.0) and the sheet 20% wider */
    .full-page > .pn-cols.three {
      grid-template-columns: minmax(0, 0.86fr) minmax(0, 1fr) minmax(0, 1.2fr);
      gap: 24px;
    }
    .full-page > .pn-cols.two {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      gap: 28px;
    }
    :host([full]) .page.painel {
      max-width: 1880px;
      padding-top: 12px;
    }
    /* A seguir and the placar always in view: the lists (Depois, Tarefas do dia) go down inside their cards */
    .pn-cols > .pn-col {
      min-height: 0;
      overflow: hidden;
    }
    .pn-col > * {
      flex: none;
    }
    /* (over the flat sections of the computer, .page:not(.cal-page) .panel) */
    .painel .pn-col > .panel {
      margin: 0 0 20px;
    }
    .painel .pn-col > .panel.pn-later,
    .painel .pn-col > .panel.pn-tasks {
      flex: 0 1 auto;
      min-height: 120px;
      overflow-y: auto;
      overscroll-behavior: contain;
      padding-right: 6px;
    }
    /* the Quadro always at the bottom of its column, whole (Depois gives the room) */
    .painel .pn-col > .panel.pn-quadro {
      margin-top: auto;
    }
    .painel .pn-col > .panel:last-child,
    .painel .pn-col > .hero-ev:last-child {
      margin-bottom: 0;
    }
  }
`;
