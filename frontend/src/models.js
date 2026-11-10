// Modelos (remédio, conta a pagar, rotina da casa, manutenção) on the screens:
// the Agora panels, the forms, the event sheet facts, the bills of the GerencIA
// app and the "Avisos" settings. Mixed into <cronologia-app>.
import { html, svg, nothing, unsafeSVG, repeat } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { buildDescription, parseMoney, formatMoney, everyLabel, UNITS, addEvery, foldText, namesOf, PERIODS, periodInfo, periodOfHour, periodRank, periodPassed } from "../../cronologia/rootfs/app/lib/kinds.js";
import { toEvent } from "./events.js";
import { placeTags, roomsShown } from "./place-tags.js";
import { timeField } from "./whenpick.js";
import { datePickField } from "./datepick.js";
import { offFold } from "./offfold.js";
import { colorVars, plural, clip, cap, ymd, hm, fromYmd, startOfDay, addDays, dayDiff, isoLocal, dayLabel, dateShort, rruleLabel, WEEKDAYS_SHORT, MONTHS_SHORT } from "./util.js";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

export const KIND_UI = {
  "": { label: "Evento", icon: "calendar" },
  evento: { label: "Evento", icon: "calendar", verb: "Feito", done: "feito" },
  tarefa: { label: "Tarefa", icon: "list-checks", verb: "Concluir", done: "concluída" },
  remedio: { label: "Remédio", icon: "pill", verb: "Tomei", done: "tomado" },
  conta: { label: "Conta", icon: "receipt", verb: "Paguei", done: "paga" },
  rotina: { label: "Rotina", icon: "spray-can", verb: "Feito", done: "feito" },
  manutencao: { label: "Manutenção", icon: "wrench", verb: "Feito", done: "feita" },
};

const WD_CODES = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
const WD_LETTER = ["D", "S", "T", "Q", "Q", "S", "S"];
const DOSE_PRESETS = [
  ["1x ao dia", ["08:00"]],
  ["2x", ["08:00", "20:00"]],
  ["3x", ["08:00", "14:00", "20:00"]],
  ["De 8 em 8 h", ["06:00", "14:00", "22:00"]],
];
const EVERY_PRESETS = [
  { n: 1, unit: "meses" },
  { n: 3, unit: "meses" },
  { n: 6, unit: "meses" },
  { n: 1, unit: "anos" },
];
const utcStamp = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const initial = (name) => (name || "?").trim().charAt(0).toUpperCase();
const lateLabel = (min) => (min < 60 ? `${min} min` : `${Math.floor(min / 60)} h${min % 60 ? ` ${min % 60} min` : ""}`);

function dueLabel(due, now, paid) {
  const d = dayDiff(fromYmd(due), now);
  if (paid) return "paga";
  if (d < -1) return `venceu há ${d * -1} dias`;
  if (d === -1) return "venceu ontem";
  if (d === 0) return "vence hoje";
  if (d === 1) return "vence amanhã";
  return `vence em ${d} dias`;
}

/**
 * The button of a dose: "Tomei" only for whoever takes it (me, on their own app); for someone else or a pet,
 * "Tomado", and in the sheet (long) "Aurora tomou".
 */
export function doseVerb(who, me, long = false) {
  if (who && me && foldText(who) === foldText(me)) return "Tomei";
  return long && who ? `${who} tomou` : "Tomado";
}

/** Where a maintenance is done, as words: its equipments ("Ar-condicionado, Geladeira") or its rooms. */
export function placeText(m) {
  const equips = namesOf(m.equips, m.equip);
  return equips.length ? equips.join(", ") : namesOf(m.rooms, m.room).join(", ");
}

function maintLabel(m, now) {
  if (m.days < -1) return `venceu há ${-m.days} dias`;
  if (m.days === -1) return "venceu ontem";
  if (m.days === 0) return "é hoje";
  if (m.days === 1) return "amanhã";
  if (m.days <= 60) return `em ${m.days} dias`;
  return `em ${dateShort(fromYmd(m.due), now)}`;
}

/** rrule -> how the form shows it. */
/** Second line of a routine that comes back N days after done ("atrasada há 2 dias · volta 2 dias depois"). */
export function afterSub(r, now) {
  if (r.done) return `${r.done.skipped ? "pulada" : `feito por ${r.done.by || "alguém"}`} · volta ${r.next ? dayLabel(fromYmd(r.next), now, { long: false, cap: false }) : `em ${everyLabel(r.after)}`}`;
  const per = periodInfo(r.period);
  const when = r.late > 0 ? (r.late === 1 ? "venceu ontem" : `atrasada há ${r.late} dias`) : r.time || (per ? per.when : "hoje");
  return [when, r.who, `volta ${everyLabel(r.after)} depois`].filter(Boolean).join(" · ");
}

/** Second line of a routine in today's lists ("de manhã · Davi", "ficou de ontem", "feito por Ana"). */
export function routineSub(r, now) {
  if (r.after) return afterSub(r, now);
  const per = periodInfo(r.period);
  return [r.yesterday ? "ficou de ontem" : r.time || (per && !r.done ? per.when : ""), r.done ? (r.done.skipped ? "pulada" : `feito${r.done.by ? ` por ${r.done.by}` : ""}`) : r.who].filter(Boolean).join(" · ") || "hoje";
}

/** The part of the day of a routine: the one chosen, or the one of its time. */
export const periodOf = (r) => r.period || (r.time ? periodOfHour(Number(String(r.time).slice(0, 2))) : "");

/** Late: from an earlier day, or its part of the day has passed (the morning one, in the afternoon). */
export const routineLate = (r, now) => !r.done && (r.late > 0 || (!!r.period && periodPassed(r.period, now)));

/**
 * Today's list in the order of the day: what is for the part of the day we are in first, then what
 * was for earlier (still to do), what is for any time, and what is for later (keeps the order otherwise).
 */
export const byPeriod = (list, now, of = periodOf) =>
  list
    .map((r, i) => [periodRank(of(r), now), i, r])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map((x) => x[2]);

function rruleToForm(rrule, start) {
  const p = Object.fromEntries(String(rrule || "").replace(/^RRULE:/, "").split(";").filter(Boolean).map((x) => x.split("=")));
  const out = { freq: "uma", byday: [start.getDay()], interval: 3, dur: "sempre", until: ymd(addDays(start, 30)), days: 7 };
  const n = Number(p.INTERVAL || 1);
  if (p.FREQ === "DAILY") Object.assign(out, n === 1 ? { freq: "diario" } : n === 2 ? { freq: "alternado" } : { freq: "intervalo", interval: n });
  else if (p.FREQ === "WEEKLY") Object.assign(out, { freq: "semana", byday: p.BYDAY ? p.BYDAY.split(",").map((c) => WD_CODES.indexOf(c.slice(-2))).filter((x) => x >= 0) : [start.getDay()] });
  else if (p.FREQ === "MONTHLY") out.freq = "mensal";
  else if (p.FREQ === "YEARLY") out.freq = "anual";
  const u = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(p.UNTIL || "");
  if (u) {
    const d = u[7] ? new Date(Date.UTC(+u[1], +u[2] - 1, +u[3], +u[4], +u[5], +u[6])) : new Date(+u[1], +u[2] - 1, +u[3]);
    Object.assign(out, { dur: "ate", until: ymd(d) });
  }
  return out;
}

export const ModelsMixin = (Base) =>
  class extends Base {
    // ------------------------------------------------------------ data

    _ix() {
      return this._home || { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [], caregivers: [], gerencia: { ligado: false, contas: [] } };
    }

    _checkOf(e) {
      if (e.gerencia) return e.gerencia.pago ? { at: null, by: "" } : null;
      if (e.todo) return e.todo.done ? { at: null, by: "" } : null;
      return this._ix().checks[e.key] || null;
    }

    /**
     * Quem cuida (Mais › Avisos) has someone with a phone. The apps look at the person, never at a device: the
     * phones are the ones tied to each person in Home Assistant.
     */
    _careOn() {
      const people = this._ix().people || [];
      const care = (this._app("alerts", null) || {}).caregivers || [];
      return care.some((n) => people.some((p) => p.phone && foldText(p.name) === foldText(n)));
    }

    /** Whose phone gets the alerts of this person: theirs, or the person chosen for one without a phone. */
    _phoneOwner(name) {
      const p = (this._ix().people || []).find((x) => foldText(x.name) === foldText(name));
      return p && p.reach ? (p.phone ? p.name : p.care) : "";
    }

    /** The GerencIA bills as all-day events, for the calendar screens. */
    _gerenciaEvents(start, end) {
      const g = this._home && this._home.gerencia;
      if (!g || !g.ligado || this._app("gerencia_hidden", false)) return [];
      if (!this._gEvCache || this._gEvCache.g !== g) {
        this._gEvCache = {
          g,
          list: (g.contas || []).map((c) => {
            const s = fromYmd(c.vencimento);
            return { key: `gerencia|${c.id}`, cal: "gerencia", uid: null, rid: null, rrule: null, summary: c.descricao, description: "", location: "", allDay: true, start: s, end: addDays(s, 1), raw: {}, kind: { kind: "conta", value: c.valor }, gerencia: c };
          }),
        };
      }
      return this._gEvCache.list.filter((e) => e.start < end && e.end > start);
    }

    /**
     * Routines that come back N days after being done: Feito moves the event to its next date,
     * so the day it was done would lose it. The calendar keeps each one there, done (from the
     * check, which has the day, the name and the time it had); a skipped one, on the day it was due.
     */
    _movedDoneEvents(start, end) {
      const ix = this._ix();
      const today = ymd(new Date(this._now));
      const out = [];
      for (const [key, c] of Object.entries(ix.checks || {})) {
        const m = c && c.moved;
        if (!m || !m.day) continue;
        // Pular: on the day it was due (skipped from yesterday to today, today has it to do, once)
        const day = c.skipped && m.start ? (/T/.test(m.start) ? ymd(new Date(m.start)) : String(m.start).slice(0, 10)) : m.day;
        const d = fromYmd(day);
        if (!(d < end && addDays(d, 1) > start)) continue;
        const r = m.day === today ? (ix.routines || []).find((x) => x.key === key) : null;
        const summary = (r && r.summary) || m.summary;
        if (!summary) continue;
        let s = d;
        let e = addDays(d, 1);
        let allDay = true;
        if (/T/.test(m.start || "")) {
          const os = new Date(m.start);
          const oe = new Date(m.end || m.start);
          s = new Date(d.getFullYear(), d.getMonth(), d.getDate(), os.getHours(), os.getMinutes());
          e = new Date(s.getTime() + Math.max(15 * 60000, oe - os || 0));
          allDay = false;
        }
        out.push({ key, cal: m.cal, uid: null, rid: null, rrule: null, summary, description: "", location: "", allDay, start: s, end: e, raw: {}, kind: { kind: "rotina", points: (r && r.points) || 0, who: (r && r.who) || "" }, movedDone: { item: r, by: c.by || "", day } });
      }
      return out;
    }

    /** Bills of the Agora panel: GerencIA ones and the #conta events, late first. */
    _billsList() {
      const ix = this._ix();
      const today = startOfDay(new Date(this._now));
      const t = ymd(today);
      const lim = ymd(addDays(today, 8));
      const back = ymd(addDays(today, -1));
      const out = [];
      for (const c of (ix.gerencia && ix.gerencia.contas) || []) {
        const open = !c.pago;
        const paidHere = this._paidNow && this._paidNow.has(c.id);
        if (open ? !(c.atrasada || c.vencimento <= lim) : !paidHere && !(c.vencimento >= back && c.vencimento <= lim)) continue;
        out.push({ id: c.id, source: "gerencia", title: c.descricao, value: c.valor, due: c.vencimento, paid: !!c.pago, overdue: open && (c.atrasada || c.vencimento < t), sub: c.tipo === "fatura" ? plural(c.itens || 0, "compra", "compras") : c.categoria || "", c });
      }
      for (const b of ix.bills || []) {
        const cal = this._cal(b.cal);
        out.push({ id: b.key, source: "cal", title: b.summary, value: b.value, due: b.due, paid: !!b.paid, overdue: b.overdue, sub: cal ? cal.name : "", item: b });
      }
      return out.sort((a, b) => Number(a.paid) - Number(b.paid) || a.due.localeCompare(b.due) || a.title.localeCompare(b.title, "pt-BR"));
    }

    _eventOfItem(it) {
      return toEvent(it.cal, { start: it.start, end: it.end, summary: it.summary, description: it.description, location: it.location, uid: it.uid, recurrence_id: it.rid, rrule: it.rrule });
    }

    _openIndexItem(it) {
      this._openEvent(this._eventOfItem(it));
    }

    // ------------------------------------------------------------ actions

    async _check(it, kind) {
      if (kind === "remedio") this._medsHold = true;
      try {
        await this.api.setCheck(it.key, true, kind);
        this._haptic("success");
        const ui = KIND_UI[kind];
        this._showToast(`${clip(it.summary, 26)}: ${ui.done}`, { label: "Desfazer", run: () => this.api.setCheck(it.key, false, kind).catch((err) => this._showToast(err.message)) });
      } catch (err) {
        this._showToast(`Não consegui marcar: ${err.message}`);
      }
    }

    /** Pular: not done this time; it leaves the list (or goes to its next date), with no points. */
    async _skip(it, kind = "rotina") {
      try {
        const r = await this.api.skipCheck(it.key);
        this._haptic("light");
        const next = r && r.next ? dayLabel(fromYmd(r.next), new Date(this._now), { long: false, cap: false }) : "";
        this._showToast(`${clip(it.summary, 24)}: ${kind === "remedio" ? "pulado" : "pulada"}${next ? `, volta ${next}` : ""}`, { label: "Desfazer", run: () => this.api.setCheck(it.key, false, kind).catch(() => {}) });
      } catch (err) {
        this._showToast(`Não consegui: ${err.message}`);
      }
    }

    async _undoCheck(it, kind) {
      try {
        await this.api.setCheck(it.key, false, kind);
        this._haptic("light");
        this._showToast(`${clip(it.summary, 26)}: desmarcado`, { label: "Refazer", run: () => this.api.setCheck(it.key, true, kind).catch(() => {}) });
      } catch (err) {
        this._showToast(`Não consegui: ${err.message}`);
      }
    }

    async _pay(b) {
      if (b.source === "cal") return this._check(b.item, "conta");
      try {
        b.busy = true;
        this.requestUpdate();
        await this.api.payBill(b.id);
        (this._paidNow || (this._paidNow = new Set())).add(b.id);
        this._haptic("success");
        this._showToast(`${clip(b.title, 26)}: paga no GerencIA`, { label: "Desfazer", run: () => this.api.unpayBill(b.id).catch((err) => this._showToast(err.message)) });
      } catch (err) {
        this._showToast(`O GerencIA não deu baixa: ${err.message}`);
      }
    }

    async _unpay(b) {
      if (b.source === "cal") return this._undoCheck(b.item, "conta");
      try {
        await this.api.unpayBill(b.id);
        this._showToast(`${clip(b.title, 26)}: volta para a pagar`);
      } catch (err) {
        this._showToast(`Não consegui: ${err.message}`);
      }
    }

    async _testAlert(person, mine = false) {
      try {
        await this.api.testAlert(person);
        this._showToast(`Aviso de teste enviado para ${mine ? "o seu celular" : `o celular de ${this._phoneOwner(person) || person}`}. Toque em Tomei nele para conferir o botão.`);
      } catch (err) {
        this._showToast(`Não foi: ${err.message}`);
      }
    }

    _goAlerts() {
      this._go("/mais/avisos").then(() =>
        this.updateComplete.then(() => {
          const el = this.renderRoot.querySelector("#avisos");
          if (el) el.scrollIntoView({ block: "start" });
        }),
      );
    }

    // ------------------------------------------------------------ small pieces

    /** Progress ring (0..1). */
    _ring(p, tone, label = null, inner = null) {
      const r = 15;
      const c = 2 * Math.PI * r;
      const v = Math.max(0, Math.min(1, p || 0));
      return html`<span class="ring2 ${tone}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${r}></circle>
          ${v > 0 ? svg`<circle class="r-fg" cx="18" cy="18" r=${r} stroke-dasharray=${`${(v * c).toFixed(2)} ${c.toFixed(2)}`}></circle>` : nothing}
        </svg>
        ${label != null ? html`<b>${label}</b>` : inner || nothing}
      </span>`;
    }

    /** The icon of the kind before the name; a plain event gets the Evento one (the calendar), like in Novo. */
    _kindIcon(e) {
      const ui = KIND_UI[e.kind ? e.kind.kind : ""] || KIND_UI[""];
      return html`<span class="kind-ic">${icon(ui.icon)}</span>`;
    }

    // ------------------------------------------------------------ Agora panels

    _renderMedsPanel() {
      const meds = this._ix().meds || [];
      if (!meds.length) return nothing;
      // Pular: a dose skipped on purpose leaves the count of the day (it stays on the list, to undo)
      const live = meds.filter((m) => m.state !== "pulado");
      const taken = live.filter((m) => m.taken).length;
      const late = meds.filter((m) => m.state === "atrasado");
      const groups = [];
      for (const m of meds) {
        const who = m.who || "";
        let g = groups.find((x) => foldText(x.who) === foldText(who));
        if (!g) groups.push((g = { who, list: [], phone: false }));
        g.list.push(m);
        // the bell only when an alert goes to a phone of that person (Avisos on, the medicine with its alert)
        if (m.alert && m.phone) g.phone = true;
      }
      const all = taken === live.length;
      // 1.59.0: what was taken (or skipped) leaves the list, so the card doesn't keep the whole day; whoever has
      // nothing left is one name on a line (✓ took all, the yellow mark with a skipped one); Tomados (n) opens them
      const doneN = meds.filter((m) => m.taken).length;
      // all undone: folded again for the next one taken
      if (!doneN && this._medsDoneN) this._medsDoneOpen = false;
      this._medsDoneN = doneN;
      const open = !!this._medsDoneOpen;
      const left = (g) => g.list.filter((m) => !m.taken);
      const ready = groups.filter((g) => !left(g).length);
      const pet = (who) => (this._ix().people || []).some((p) => p.pet && foldText(p.name) === foldText(who));
      const shown = open ? groups : groups.filter((g) => left(g).length);
      return html`<div class="panel meds ${late.length ? "alert" : ""} ${all ? "all" : ""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${icon("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${all ? (taken ? "Tudo tomado" : "Doses puladas") : `${taken} de ${live.length} ${live.length === 1 ? "tomado" : "tomados"}`}</b></div>
          ${this._ring(live.length ? taken / live.length : 1, late.length ? "bad" : all ? "ok" : "acc", `${taken}/${live.length}`)}
        </div>
        ${late.length
          ? html`<div class="meds-alert" role="alert">${icon("triangle-alert")}<span>${late.length === 1
              ? html`<b>${late[0].summary}</b>${late[0].who ? ` de ${late[0].who}` : ""} está atrasado ${lateLabel(late[0].late_min)}`
              : html`<b>${late.length} doses atrasadas</b>: ${late.map((m) => m.summary).join(", ")}`}</span></div>`
          : nothing}
        ${shown.map(
          (g) => html`${groups.length > 1 || g.who
              ? html`<div class="meds-who"><span class="avatar">${pet(g.who) ? icon("paw-print") : initial(g.who)}</span><b>${g.who || "Sem pessoa"}</b>${g.list.some((m) => m.state !== "pulado") ? html`<small>${g.list.filter((m) => m.state === "tomado").length} de ${g.list.filter((m) => m.state !== "pulado").length}</small>` : nothing}${g.phone ? html`<span class="who-bell" title="Aviso no celular de ${this._phoneOwner(g.who)}">${icon("bell-ring")}</span>` : nothing}</div>`
              : nothing}
            ${repeat(open ? g.list : left(g), (m) => m.key, (m) => this._renderDose(m))}`,
        )}
        ${ready.length && !open
          ? html`<div class="meds-ready">${ready.map((g) => {
              const skipped = g.list.some((m) => m.state === "pulado");
              const took = g.list.some((m) => m.state === "tomado");
              const what = took && !skipped ? `${g.who ? "tomou" : "Tomados"} todos` : took ? "em dia" : "pulou";
              return html`<span class="ready-who ${took && !skipped ? "" : "skipped"}">${g.who ? html`<span class="avatar">${pet(g.who) ? icon("paw-print") : initial(g.who)}</span><b>${g.who}</b>` : nothing}<span>${what}</span>${icon(took && !skipped ? "check" : "skip-forward")}</span>`;
            })}</div>`
          : nothing}
        ${doneN
          ? html`<button class="add-line done-fold" aria-expanded=${open ? "true" : "false"} @click=${() => ((this._medsDoneOpen = !open), this.requestUpdate())}>
              ${icon(open ? "chevron-down" : "chevron-right")}<span>Tomados (${doneN})</span>
            </button>`
          : nothing}
        ${this._alertsHint(meds)}
      </div>`;
    }

    _doseVerb(who, long = false) {
      return doseVerb(who, this._me ? this._me() : "", long);
    }

    _renderDose(m) {
      const st = m.state;
      const info = [m.dose ? `Dose: ${m.dose}` : "", st === "tomado" ? `tomou às ${hm(new Date(m.taken.at))}${m.taken.by && foldText(m.taken.by) !== foldText(m.who) ? ` · ${m.taken.by}` : ""}` : st === "pulado" ? "pulado" : st === "atrasado" ? `atrasado ${lateLabel(m.late_min)}` : st === "agora" ? "hora de tomar" : ""].filter(Boolean).join(" · ");
      return html`<div class="dose ${st}">
        <button class="dose-main" @click=${() => this._openIndexItem(m)}>
          <span class="dose-time">${m.time || "dia"}</span>
          <span class="dose-tx"><b>${m.summary}</b>${info ? html`<small>${info}</small>` : nothing}</span>
        </button>
        ${st === "tomado" || st === "pulado"
          ? html`<button class="dose-done ${st === "pulado" ? "skipped" : ""}" @click=${() => this._undoCheck(m, "remedio")} aria-label="Desmarcar ${m.summary}">${icon(st === "pulado" ? "skip-forward" : "check")}</button>`
          : html`<button class="dose-btn ${st}" aria-label="${this._doseVerb(m.who, true)}: ${m.summary}" @click=${() => this._check(m, "remedio")}>${this._doseVerb(m.who)}</button>`}
      </div>`;
    }

    _alertsHint(meds) {
      const a = this._app("alerts", null) || {};
      if (a.meds === false) return html`<button class="panel-foot" @click=${() => this._goAlerts()}>${icon("bell-ring")}<span>Avisos no celular desligados</span>${icon("chevron-right")}</button>`;
      // every medicine of today without its alert (in its form): no phone to choose
      if (!meds.some((m) => m.alert)) return html`<div class="panel-foot plain">${icon("bell-ring")}<span>Sem aviso no celular</span></div>`;
      const noPhone = [...new Set(meds.filter((m) => m.alert && !m.phone && m.who).map((m) => m.who))];
      // quem cuida gets the late alerts (Avisar de novo) and the ones of whoever has no phone
      const late = a.late == null ? 30 : a.late;
      const careOn = this._careOn();
      const care = careOn && (late > 0 || meds.some((m) => m.alert && !m.phone));
      // whose phones get the alerts: a pet has none, its alert goes to the person chosen for it (by name)
      const withPhone = [...new Set(meds.filter((m) => m.alert && m.phone).map((m) => this._phoneOwner(m.who) || m.who))];
      const warn = !careOn && (noPhone.length > 0 || !withPhone.length);
      const text = noPhone.length && !careOn ? `Sem celular para ${noPhone.join(", ")}: escolha quem cuida` : withPhone.length ? `Avisa no celular de ${withPhone.join(", ")}${care ? ` e de quem cuida` : ""}` : careOn ? "Avisa no celular de quem cuida" : "Escolha quem cuida";
      return html`<button class="panel-foot ${warn ? "warn" : ""}" @click=${() => this._goAlerts()}>${icon("bell-ring")}<span>${text}</span>${icon("chevron-right")}</button>`;
    }

    _renderBillsPanel() {
      const bills = this._billsList();
      if (!bills.length) return nothing;
      const now = new Date(this._now);
      const open = bills.filter((b) => !b.paid);
      const late = open.filter((b) => b.overdue);
      const sum = open.reduce((s, b) => s + (b.value || 0), 0);
      const shown = this._billsAll ? bills : bills.slice(0, 5);
      const g = this._ix().gerencia || {};
      return html`<div class="panel bills ${late.length ? "alert" : ""}" id="contas">
        <div class="bills-head">
          <span class="sec-ic ${late.length ? "late" : "gold"}">${icon("receipt")}</span>
          <span class="overline">Contas a pagar</span>
          ${open.length ? html`<span class="bills-sum"><b>${formatMoney(sum, false)}</b><small>${late.length ? `${plural(late.length, "atrasada", "atrasadas")}` : "próximos 8 dias"}</small></span>` : html`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${repeat(shown, (b) => b.id, (b) => {
          const d = fromYmd(b.due);
          const today = dayDiff(d, now) === 0;
          return html`<div class="bill ${b.paid ? "paid" : b.overdue ? "late" : today ? "today" : ""}">
            <button class="bill-main" @click=${() => (b.source === "gerencia" ? this._openSheet("bill", { b }) : this._openIndexItem(b.item))}>
              <span class="bill-due"><b>${d.getDate()}</b><small>${MONTHS_SHORT[d.getMonth()]}</small></span>
              <span class="bill-tx"><b>${b.title}</b><small>${b.value != null ? html`<span class="bill-val">${formatMoney(b.value)}</span> · ` : nothing}${[dueLabel(b.due, now, b.paid), b.sub].filter(Boolean).join(" · ")}</small></span>
            </button>
            ${b.paid
              ? html`<button class="dose-done" @click=${() => this._unpay(b)} aria-label="Desfazer pagamento de ${b.title}">${icon("check")}</button>`
              : html`<button class="dose-btn ${b.overdue ? "atrasado" : today ? "agora" : ""}" ?disabled=${b.busy} @click=${() => this._pay(b)}>Paguei</button>`}
          </div>`;
        })}
        ${bills.length > 5 ? html`<button class="add-line" @click=${() => ((this._billsAll = !this._billsAll), this.requestUpdate())}>${icon(this._billsAll ? "chevron-up" : "chevron-down")}${this._billsAll ? "Mostrar menos" : `Mais ${bills.length - 5}`}</button>` : nothing}
        ${g.ligado ? html`<div class="panel-foot plain">${icon("wallet")}<span>${g.erro ? `GerencIA: ${g.erro}` : "Contas do GerencIA: o Paguei daqui dá baixa lá"}</span></div>` : nothing}
      </div>`;
    }

    _renderHomePanel() {
      // Modo férias: the house rests (the banner at the top says so)
      if (this._awayNow && this._awayNow()) return nothing;
      const ix = this._ix();
      // all of today's routines done: they leave Agora (the calendar has them, done); right after the
      // last Feito here they stay, until you leave Agora
      const all = ix.routines || [];
      const routines = all.length && all.every((r) => r.done) && !this._choresHold ? [] : all;
      const maint = (ix.maint || []).filter((m) => m.state !== "ok");
      const total = (ix.maint || []).length;
      if (!routines.length && !maint.length) {
        return total ? html`<button class="hint-card maint-ok" @click=${() => this._openSheet("maint", {})}>${icon("wrench")}<span>Manutenção da casa em dia · ${plural(total, "item", "itens")}</span>${icon("chevron-right")}</button>` : nothing;
      }
      const done = routines.filter((r) => r.done).length;
      // the done ones stay folded (a long day has dozens): "Concluídas (n)" opens them
      const now = new Date(this._now);
      const open = byPeriod(routines.filter((r) => !r.done), now);
      const shut = routines.filter((r) => r.done);
      const row = (r) => html`<div class="chore ${r.done ? "done" : ""} ${r.done && r.done.skipped ? "skipped" : ""}">
                  <button class="chk ${r.done ? "on" : ""}" @click=${() => (r.done ? this._undoCheck(r, "rotina") : this._markDone(r, "rotina"))} aria-label="${r.done ? "Desmarcar" : "Marcar"} ${r.summary}">${r.done ? icon(r.done.skipped ? "skip-forward" : "check") : nothing}</button>
                  <button class="chore-tx" @click=${() => this._openIndexItem(r)}><b>${r.summary}</b><small class=${routineLate(r, now) ? "late" : ""}>${!r.done && this._pickWho() && r.points > 0 ? html`<span class="pts-inline">+${r.points}</span> · ` : nothing}${routineSub(r, now)}</small></button>
                  ${!r.done && this._pickWho()
                    ? this._renderQuickWho(r.summary, r.points || 0, (p) => this._markDone(r, "rotina", p))
                    : r.points > 0 && this._scoreOn()
                      ? r.done
                        ? this._renderWon(this._pointsWho(r.key, r.done.by), r.points)
                        : html`<span class="pts">+${r.points}</span>`
                      : nothing}
                </div>`;
      return html`<div class="panel chores" id="casa">
        ${routines.length
          ? html`${this._panelHead("spray-can", "ok", "Rotina da casa", `${done} de ${routines.length}`)}
              ${repeat(open, (r) => r.key, row)}
              ${!open.length ? html`<p class="empty-line all-done">${icon("circle-check")}Tudo feito hoje.</p>` : nothing}
              ${shut.length
                ? html`<button class="add-line done-fold" aria-expanded=${this._choresDoneOpen ? "true" : "false"} @click=${() => ((this._choresDoneOpen = !this._choresDoneOpen), this.requestUpdate())}>
                      ${icon(this._choresDoneOpen ? "chevron-down" : "chevron-right")}<span>Concluídas (${shut.length})</span>
                    </button>
                    ${this._choresDoneOpen ? repeat(shut, (r) => r.key, row) : nothing}`
                : nothing}`
          : nothing}
        ${maint.length
          ? html`${this._panelHead("wrench", "gold", "Manutenção da casa", "", { cls: routines.length ? "sub" : "" })}
              ${repeat(maint, (m) => m.key, (m) => this._renderMaintRow(m))}`
          : nothing}
        ${total ? html`<button class="add-line" @click=${() => this._openSheet("maint", {})}>${icon("wrench")}Todas as manutenções (${total})</button>` : nothing}
      </div>`;
    }

    _renderMaintRow(m) {
      const now = new Date(this._now);
      const tone = m.state === "vencida" ? "bad" : m.state === "perto" ? "warn" : "ok";
      return html`<div class="maint ${m.state}">
        <button class="maint-main" @click=${() => this._openIndexItem(m)}>
          ${this._ring(m.progress, tone, null, icon("wrench"))}
          <span class="maint-tx"><b>${m.summary}</b><small>${maintLabel(m, now)} · a cada ${everyLabel(m.every)}${m.who ? ` · ${m.who}` : ""}${m.points > 0 && this._scoreOn() ? ` · +${m.points}` : ""}</small>${placeTags(namesOf(m.rooms, m.room), namesOf(m.equips, m.equip))}</span>
        </button>
        ${m.canMove
          ? this._pickWho()
            ? this._renderQuickWho(m.summary, m.points || 0, (p) => this._maintDone(m, p))
            : html`<button class="dose-btn ${m.state === "vencida" ? "atrasado" : m.state === "perto" ? "agora" : "later"}" @click=${() => this._maintDone(m)}>Feito</button>`
          : nothing}
      </div>`;
    }

    _renderMaintSheet() {
      const list = this._ix().maint || [];
      return html`${this._sheetHead("Manutenção da casa")}
                <div class="maint-list">${list.length ? repeat(list, (m) => m.key, (m) => this._renderMaintRow(m)) : html`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${() => this._openKindForm({ kind: "manutencao" })}>${icon("plus")}Nova manutenção</button></div>`;
    }

    // ------------------------------------------------------------ Mais › Rotinas

    /**
     * Everything registered, by section: one line per routine, maintenance and bill (at its next time),
     * one per medicine with its times. A tap opens it (and from there, Editar).
     */
    /** Lines of Mais › Rotinas: a medicine with several times counts once. */
    _catalogCount() {
      const seen = new Set();
      for (const c of this._ix().catalog || []) seen.add(c.kind === "remedio" ? `${c.cal}|${foldText(c.summary)}|${foldText(c.who)}|${foldText(c.dose)}` : `${c.key}`);
      return seen.size;
    }

    _renderCatalog() {
      const now = new Date(this._now);
      const all = this._ix().catalog || [];
      const allRooms = this._roomNamesAll();
      const q = (this._catQ || "").trim();
      const needle = foldText(q);
      const found = needle ? all.filter((c) => foldText(`${c.summary} ${c.who} ${c.dose} ${c.location} ${namesOf(c.rooms, c.room).join(" ")} ${namesOf(c.equips, c.equip).join(" ")}`).includes(needle)) : all;
      const low = (t) => (t ? t.charAt(0).toLowerCase() + t.slice(1) : "");
      const daily = (c) => /FREQ=DAILY/.test(c.rrule || "") && !/INTERVAL=([2-9]|\d\d)/.test(c.rrule || "");
      const freq = (c) => (c.kind === "manutencao" ? `a cada ${everyLabel(c.every)}` : c.after ? `volta ${everyLabel(c.after)} depois de feita` : c.rrule ? low(rruleLabel(c.rrule)) : "uma vez");
      // on vacation, routines and maintenance rest: not late, not due, until it ends (1.56.3); they go last,
      // folded under Pausadas
      const away = this._awayNow() ? this._away() : null;
      const paused = (c) => !!away && (c.kind === "rotina" || c.kind === "manutencao") && (c.late || c.next <= away.to);
      const when = (c) => {
        const d = dayDiff(fromYmd(c.next), now);
        if (paused(c)) return null;
        if (c.late || d < 0) {
          const verb = c.kind === "rotina" ? "atrasada" : "venceu";
          return { text: d === -1 ? `${verb} ontem` : `${verb} há ${-d} dias`, late: true };
        }
        if (daily(c) && d <= 1) return null;
        const pre = c.kind === "conta" ? "vence" : c.kind === "manutencao" ? "próxima" : "próxima";
        return { text: `${pre} ${dayLabel(fromYmd(c.next), now, { long: false, cap: false })}` };
      };
      // the points in the gold of everywhere else (Agora, Para pontuar hoje)
      const pts = (c) => (c.points > 0 && this._scoreOn() ? html`<span class="pts-inline">+${c.points}</span>` : "");
      // medicines: one line per medicine (same name, person and dose), with all its times
      const meds = [];
      for (const c of found.filter((x) => x.kind === "remedio")) {
        const id = `${c.cal}|${foldText(c.summary)}|${foldText(c.who)}|${foldText(c.dose)}`;
        const m = meds.find((x) => x.id === id);
        if (m) {
          if (c.time && !m.times.includes(c.time)) m.times.push(c.time);
          if (c.next < m.first.next || (c.next === m.first.next && c.time < m.first.time)) m.first = c;
        } else meds.push({ id, first: c, times: c.time ? [c.time] : [] });
      }
      const row = (c, hint, w = null, tags = nothing) => html`<button class="row cat-row" style=${colorVars(this._colorOfEvent(c), this._dark)} @click=${() => this._openIndexItem(c)}>
        <span class="tile" aria-hidden="true">${icon(KIND_UI[c.kind].icon)}</span>
        <span class="grow"><div class="label">${c.summary}</div><div class="hint">${hint}${w ? html`${hint ? " · " : ""}<span class=${w.late ? "late" : ""}>${w.text}</span>` : nothing}</div>${tags}</span>
        ${icon("chevron-right")}
      </button>`;
      const line = (c, parts, tags = nothing) => {
        const ps = parts.filter(Boolean);
        return row(c, ps.length ? ps.map((p, i) => html`${i ? " · " : ""}${p}`) : "", when(c), tags);
      };
      const SECS = [
        { kind: "rotina", ic: "spray-can", tone: "ok", title: "Rotina da casa", add: "Nova rotina", none: "Nenhuma rotina cadastrada." },
        { kind: "remedio", ic: "pill", tone: "accent", title: "Remédios", add: "Novo remédio", none: "Nenhum remédio cadastrado." },
        { kind: "manutencao", ic: "wrench", tone: "gold", title: "Manutenção da casa", add: "Nova manutenção", none: "Nenhuma manutenção cadastrada." },
        { kind: "conta", ic: "receipt", tone: "violet", title: "Contas a pagar", add: "Nova conta", none: "Nenhuma conta cadastrada aqui." },
      ];
      const g = this._ix().gerencia || {};
      const body = (sec, list) => {
        if (sec.kind === "remedio")
          return meds.map(({ first: c, times }) => {
            const t = [...times].sort();
            return row(c, [c.dose, c.who, t.length ? t.join(", ") : "", freq(c), c.alert === false ? "sem aviso" : ""].filter(Boolean).join(" · "));
          });
        if (sec.kind === "rotina") return list.map((c) => line(c, [c.who, freq(c), c.time || (periodInfo(c.period) || {}).when, pts(c)], placeTags(namesOf(c.rooms, c.room), namesOf(c.equips, c.equip), allRooms)));
        // the rooms and the equipments as tags under the line, like the ResolvIA
        if (sec.kind === "manutencao") return list.map((c) => line(c, [freq(c), c.who, pts(c)], placeTags(namesOf(c.rooms, c.room), namesOf(c.equips, c.equip), allRooms)));
        return list.map((c) => line(c, [c.value != null ? formatMoney(c.value) : "", freq(c)]));
      };
      return html`
        <label class="search-box cat-search">
          ${icon("search")}
          <input type="search" placeholder="Buscar nas rotinas, remédios…" .value=${q} @input=${(e) => ((this._catQ = e.target.value), this.requestUpdate())} enterkeyhint="search" aria-label="Buscar nos cadastros" />
          ${q ? html`<button class="icon-btn" style="width:40px;height:40px" @click=${() => ((this._catQ = ""), this.requestUpdate())} aria-label="Limpar">${icon("x")}</button>` : nothing}
        </label>
        ${needle && !found.length ? html`<div class="panel"><div class="empty"><div class="em-icon">${icon("search")}</div><h3>Nada encontrado</h3><p>Nenhum cadastro com “${clip(q, 30)}”.</p></div></div>` : nothing}
        ${SECS.map((sec) => {
          const list = found.filter((c) => c.kind === sec.kind);
          const off = list.filter(paused);
          const rows = body(sec, list.filter((c) => !paused(c)));
          const n = rows.length + off.length;
          if (needle && !n) return nothing;
          return html`<div class="panel cat-sec" id="cat-${sec.kind}">
            ${this._panelHead(sec.ic, sec.tone, sec.title, n ? String(n) : "")}
            ${rows.length ? rows : off.length ? nothing : html`<p class="empty-line">${sec.none}</p>`}
            ${offFold(this, `cat-${sec.kind}`, "Pausadas", off.length, () => body(sec, off))}
            ${sec.kind === "conta" && g.ligado ? html`<p class="cat-note">${icon("info")}As contas do GerencIA ficam no GerencIA.</p>` : nothing}
            ${needle ? nothing : html`<button class="add-line" @click=${() => this._openKindForm({ kind: sec.kind })}>${icon("plus")}${sec.add}</button>`}
          </div>`;
        })}
      `;
    }

    // ------------------------------------------------------------ event sheet

    /** Facts and the Tomei/Paguei/Feito button of a model event. */
    _renderKindFacts(e) {
      const k = e.kind;
      const now = new Date(this._now);
      let chk = this._checkOf(e);
      // a routine that comes back N days after done, done or skipped today: the event is already on its
      // next date (another key); today's check is found by the event, and Desfazer uses its key
      let doneKey = null;
      if (!chk && k.kind === "rotina" && k.after && !e.rrule) {
        const r = (this._ix().routines || []).find((x) => x.cal === e.cal && x.uid === e.uid && x.done);
        if (r) {
          chk = r.done;
          doneKey = r.key;
        }
      }
      const facts = [];
      if (k.kind === "remedio") {
        if (k.dose) facts.push(["pill", `Dose: ${k.dose}`]);
        if (k.who) facts.push(["user-round", `Quem toma: ${k.who}`]);
        const owner = this._phoneOwner(k.who);
        const alertsOn = (this._app("alerts", null) || {}).meds !== false;
        facts.push(["bell-ring", !k.alert ? "Sem aviso no celular" : !alertsOn ? "Avisos no celular desligados" : owner ? `Aviso no celular de ${owner}` : this._careOn() ? "Aviso no celular de quem cuida" : "Sem celular: escolha quem cuida em Mais › Avisos"]);
      } else if (k.kind === "conta") {
        if (k.value != null) facts.push(["receipt", formatMoney(k.value)]);
      } else if (k.kind === "rotina") {
        if (k.who) facts.push(["user-round", `Quem faz: ${k.who}`]);
        if (namesOf(k.rooms, k.room).length) facts.push(["door-open", roomsShown(namesOf(k.rooms, k.room), this._roomNamesAll()).join(", ")]);
        if (k.points > 0 && this._scoreOn()) facts.push(["award", `${k.points} pontos para quem fizer`]);
        if (periodInfo(k.period)) facts.push([periodInfo(k.period).icon, cap(periodInfo(k.period).when)]);
        if (k.after && !e.rrule) {
          facts.push(["repeat", `Volta ${everyLabel(k.after)} depois de feita (na agenda, só a próxima vez)`]);
          if (k.history && k.history.length) facts.push(["check", `Feito em ${k.history.slice(0, 4).map((d) => dateShort(fromYmd(d), now)).join(", ")}`]);
        }
      } else if (k.kind === "manutencao") {
        if (k.points > 0 && this._scoreOn()) facts.push(["award", `${k.points} pontos para quem fizer`]);
        facts.push(["repeat", `A cada ${everyLabel(k.every)}, contando da última vez`]);
        if (k.who) facts.push(["user-round", `Quem faz: ${k.who}`]);
        // the rooms on one line, then one line per equipment
        const rooms = namesOf(k.rooms, k.room);
        if (rooms.length) facts.push(["door-open", roomsShown(rooms, this._roomNamesAll()).join(", ")]);
        for (const e of namesOf(k.equips, k.equip)) facts.push(["package", e]);
        facts.push(["bell-ring", `Aparece na tela inicial ${plural(k.warn, "dia", "dias")} antes`]);
        if (k.history && k.history.length) facts.push(["check", `Feito em ${k.history.slice(0, 4).map((d) => dateShort(fromYmd(d), now)).join(", ")}`]);
      }
      const ui = KIND_UI[k.kind];
      let action = nothing;
      if (k.kind === "manutencao") {
        const m = (this._ix().maint || []).find((x) => x.cal === e.cal && x.uid === e.uid);
        if (m && m.canMove) action = this._pickWho() ? this._renderWhoButtons(this._scoreOn() ? m.points || 0 : 0, (p) => this._maintDone(m, p)) : html`<button class="btn primary kind-act" @click=${() => this._maintDone(m)}>${icon("check")}Feito hoje</button>`;
      } else if (e.start < addDays(startOfDay(now), 2) || (k.kind === "rotina" && k.after && !e.rrule)) {
        // (a routine that comes back N days after done: also earlier, any day; it then counts from today)
        const it = { key: doneKey || e.key, summary: e.summary };
        const skip = k.kind === "rotina" || k.kind === "remedio" ? html`<button class="btn outline kind-skip" @click=${() => this._closeSheet().then(() => this._skip(it, k.kind))}>${icon("skip-forward")}Pular</button>` : nothing;
        action = chk && chk.skipped
          ? html`<div class="kind-state skipped">${icon("skip-forward")}<span>${k.kind === "remedio" ? "Pulado" : "Pulada"}${chk.at ? ` ${dayDiff(new Date(chk.at), now) === 0 ? "hoje" : dateShort(new Date(chk.at), now)} às ${hm(new Date(chk.at))}` : ""}</span><button class="text-btn" @click=${() => this._undoCheck(it, k.kind)}>Desfazer</button></div>`
          : chk
          ? html`<div class="kind-state">${icon("circle-check")}<span>${cap(ui.done)}${chk.at ? ` ${dayDiff(new Date(chk.at), now) === 0 ? "hoje" : dateShort(new Date(chk.at), now)} às ${hm(new Date(chk.at))}` : ""}${chk.by ? ` · ${chk.by}` : ""}</span><button class="text-btn" @click=${() => this._undoCheck(it, k.kind)}>Desfazer</button></div>`
          : (k.kind === "rotina" || k.kind === "manutencao") && this._pickWho()
            ? html`${this._renderWhoButtons(k.points || 0, (p) => this._closeSheet().then(() => this._markDone({ ...it, points: k.points || 0 }, k.kind, p)))}${skip}`
          : k.kind === "rotina" || k.kind === "manutencao"
            ? html`<button class="btn primary kind-act" @click=${() => this._closeSheet().then(() => this._markDone({ ...it, points: k.points || 0 }, k.kind))}>${icon("check")}${ui.verb}${k.points > 0 && this._scoreOn() ? ` · +${k.points}` : ""}</button>${skip}`
            : html`<button class="btn primary kind-act" @click=${() => this._check(it, k.kind).then(() => this._closeSheet())}>${icon("check")}${k.kind === "remedio" ? this._doseVerb(k.who, true) : ui.verb}</button>${skip}`;
      }
      return html`${facts.map(([ic, t]) => html`<div class="fact">${icon(ic)}<span>${t}</span></div>`)}
        ${k.notes ? html`<div class="fact notes">${icon("file-text")}<span>${k.notes}</span></div>` : nothing}
        ${action}`;
    }

    _renderBillSheet() {
      const b = this._form.b;
      const c = ((this._ix().gerencia || {}).contas || []).find((x) => x.id === b.id) || b.c;
      const now = new Date(this._now);
      const due = fromYmd(c.vencimento);
      return html`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${c.descricao}</h3><p class="ev-cal">GerencIA · <b>${dueLabel(c.vencimento, now, c.pago)}</b></p></div>
          <button class="icon-btn" @click=${() => this._closeSheet()} aria-label="Fechar">${icon("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${icon("receipt")}<span><b>${formatMoney(c.valor)}</b>${c.tipo === "fatura" ? ` · ${plural(c.itens || 0, "compra", "compras")} na fatura` : c.tipo === "fixo" ? " · fixo do mês" : ""}</span></div>
          <div class="fact">${icon("calendar")}<span>${dayDiff(due, now) < 0 ? "Venceu" : "Vence"} ${dayLabel(due, now, { cap: false })}</span></div>
          ${c.categoria ? html`<div class="fact">${icon("layers")}<span>${c.categoria}</span></div>` : nothing}
          ${c.conta ? html`<div class="fact">${icon("wallet")}<span>${c.conta}</span></div>` : nothing}
        </div>
        <p class="sheet-note">${icon("info")} ${c.pago ? "Já está paga no GerencIA." : c.tipo === "fatura" ? "Paguei marca todas as compras desta fatura como pagas no GerencIA." : "Paguei dá baixa no GerencIA, como o Paguei de lá."}</p>
        <div class="sheet-actions">
          ${c.pago
            ? html`<button class="btn outline" @click=${() => this._unpay({ ...b, id: c.id, title: c.descricao, source: "gerencia" }).then(() => this._closeSheet())}>${icon("undo-2")}Desfazer pagamento</button>`
            : html`<button class="btn primary" @click=${() => this._pay({ ...b, id: c.id, title: c.descricao, source: "gerencia" }).then(() => this._closeSheet())}>${icon("check")}Paguei</button>`}
        </div>`;
    }

    // ------------------------------------------------------------ forms

    /** A calendar for a model: one named like it ("Remédios", "Casa"…), else the default one. */
    _kindCal(kind) {
      const w = this._writable();
      const re = { remedio: /rem[eé]dio|medica|sa[uú]de/i, conta: /conta|finan|pagar|boleto/i, rotina: /casa|lar|rotina|tarefa/i, manutencao: /manuten|casa|lar/i }[kind];
      const hit = re && w.find((c) => re.test(c.name) && c.canUpdate);
      return (hit || w.find((c) => c.id === this._defaultCal()) || w[0] || {}).id || null;
    }

    _openKindForm({ kind = "remedio", ev = null, copy = false, date = null } = {}) {
      const writable = this._writable();
      const g = this._ix().gerencia || {};
      if (!writable.length && !(kind === "conta" && g.ligado) && !(ev && !copy)) {
        this._openSheet("nocal", {});
        return;
      }
      const today = startOfDay(new Date());
      const d = date ? startOfDay(date) : today;
      let f = {
        mode: "add",
        kind,
        cal: this._kindCal(kind),
        title: "",
        date: ymd(d),
        times: kind === "rotina" ? ["19:00"] : ["08:00"],
        allDay: kind !== "remedio",
        ...rruleToForm(kind === "conta" ? "" : "FREQ=DAILY", d),
        dose: "",
        who: "",
        alert: true,
        value: "",
        repeat: "mensal",
        dest: g.ligado ? "gerencia" : "cal",
        categoria: "",
        every: { n: 6, unit: "meses" },
        afterN: 2,
        period: "",
        last: ymd(today),
        warn: 7,
        history: [],
        points: this._scoreOn() && (kind === "rotina" || kind === "manutencao") ? (kind === "rotina" ? 10 : 30) : 0,
        notes: "",
        location: "",
      };
      if (ev) {
        const k = ev.kind;
        const r = rruleToForm(ev.rrule, ev.start);
        f = {
          ...f,
          ...r,
          mode: copy ? "add" : "edit",
          kind: k.kind,
          cal: copy ? (this._cal(ev.cal) && this._cal(ev.cal).canCreate ? ev.cal : this._kindCal(k.kind)) : ev.cal,
          origCal: ev.cal,
          uid: ev.uid,
          rid: copy ? null : ev.rid,
          title: ev.summary,
          date: ymd(ev.start),
          times: ev.allDay ? ["09:00"] : [hm(ev.start)],
          allDay: ev.allDay,
          dose: k.dose || "",
          who: k.who || "",
          alert: k.alert !== false,
          value: k.value != null ? String(k.value.toFixed(2)).replace(".", ",") : "",
          repeat: r.freq === "mensal" ? "mensal" : r.freq === "anual" ? "anual" : "nao",
          dest: "cal",
          every: k.every || f.every,
          warn: k.warn ?? 7,
          history: k.history || [],
          last: (k.history && k.history[0]) || f.last,
          points: k.points || 0,
          period: (ev.allDay && k.period) || "",
          notes: k.notes || "",
          location: ev.location || "",
          // the names, kept when the lists of the ResolvIA are not here
          roomNames: namesOf(k.rooms, k.room),
          equipNames: namesOf(k.equips, k.equip),
          equips: [],
        };
        if ((k.kind === "manutencao" || k.kind === "rotina") && (f.roomNames.length || f.equipNames.length)) {
          const { rooms, items } = this._invLists();
          // by the name: the item in the first room, else in one of the rooms, else any
          const pick = (n) => {
            const same = items.filter((x) => foldText(x.nome) === foldText(n));
            return same.find((x) => foldText(x.roomName) === foldText(f.roomNames[0] || "")) || same.find((x) => f.roomNames.some((r) => foldText(x.roomName) === foldText(r))) || same[0];
          };
          f.equips = [...new Set(f.equipNames.map((n) => (pick(n) || {}).id).filter(Boolean))];
          // every room by its name (a maintenance can have several); the first one is f.room
          f.rooms = f.roomNames.map((n) => (rooms.find((c) => foldText(c.nome) === foldText(n)) || {}).id).filter(Boolean);
          f.room = f.rooms[0] || null;
        }
        // a routine that comes back N days after done (one event, no repetition rule)
        if (k.kind === "rotina" && k.after && !ev.rrule) Object.assign(f, { freq: "depois", afterN: Math.max(1, Math.round(k.after.n * UNITS[k.after.unit][0])) });
        f.wasAfter = f.freq === "depois";
        // editing on a calendar that can't change events: how it was, to put back if saving fails
        if (f.mode === "edit") {
          try {
            f.before = this._kindEvents(f)[0];
          } catch (e) {
            f.before = null;
          }
        }
      }
      this._openSheet("form", f);
      if (f.mode === "add") {
        this.updateComplete.then(() => {
          const ta = this.renderRoot.querySelector(".sheet .ev-title-input");
          if (ta) ta.focus();
        });
      }
    }

    _kindRrule(f, allDay, start) {
      let r;
      if (f.freq === "diario") r = "FREQ=DAILY";
      else if (f.freq === "alternado") r = "FREQ=DAILY;INTERVAL=2";
      else if (f.freq === "intervalo") r = `FREQ=DAILY;INTERVAL=${Math.max(2, Math.min(365, Number(f.interval) || 3))}`;
      else if (f.freq === "semana") r = `FREQ=WEEKLY;BYDAY=${[...f.byday].sort().map((d) => WD_CODES[d]).join(",")}`;
      else if (f.freq === "mensal") r = "FREQ=MONTHLY";
      else return null;
      if (f.dur !== "sempre") {
        const end = f.dur === "ate" ? fromYmd(f.until) : addDays(start, Math.max(1, Number(f.days) || 1) - 1);
        if (end < start) throw new Error("A data final é antes do começo");
        r += allDay ? `;UNTIL=${ymd(end).replace(/-/g, "")}` : `;UNTIL=${utcStamp(new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59))}`;
      }
      return r;
    }

    /** The form as Home Assistant events (one per time of day). */
    _kindEvents(f, { keepRrule = true } = {}) {
      const title = (f.title || "").trim();
      if (!title) throw new Error(f.kind === "remedio" ? "Qual é o remédio?" : "Dê um nome");
      const k = { kind: f.kind, notes: f.notes };
      if (f.kind === "remedio") Object.assign(k, { dose: f.dose, who: f.who, alert: f.alert });
      else if (f.kind === "rotina") {
        Object.assign(k, { who: f.who, points: Math.max(0, Math.round(Number(f.points) || 0)), period: f.allDay ? f.period || "" : "" });
        if (f.freq === "depois") Object.assign(k, { after: { n: Math.max(1, Math.min(365, Math.round(Number(f.afterN) || 2))), unit: "dias" }, history: f.mode === "edit" ? f.history || [] : [] });
        // the rooms (only rooms for a routine, one or several; an equipment written in the calendar stays)
        const { rooms } = this._invLists();
        const picked = (f.rooms || (f.room ? [f.room] : [])).map((id) => rooms.find((c) => c.id === id)).filter(Boolean);
        k.rooms = picked.length ? picked.map((c) => c.nome) : rooms.length ? [] : f.roomNames || [];
        k.equips = f.equipNames || [];
      }
      else if (f.kind === "conta") {
        k.value = parseMoney(f.value);
        if (!k.value) throw new Error("Coloque o valor");
      } else {
        if (!(f.every && f.every.n > 0)) throw new Error("Escolha de quanto em quanto tempo");
        Object.assign(k, { who: f.who, every: f.every, warn: f.warn, history: f.mode === "edit" ? f.history : f.last ? [f.last] : [], points: Math.max(0, Math.round(Number(f.points) || 0)) });
        // the rooms and the equipments, by name; with equipments, the rooms are theirs; without the lists of
        // the ResolvIA here, what it had stays
        const { rooms, items } = this._invLists();
        const eqs = (f.equips || []).map((id) => items.find((x) => x.id === id)).filter(Boolean);
        // several rooms without equipments; with equipments, the rooms are theirs
        const picked = (f.rooms || (f.room ? [f.room] : [])).map((id) => rooms.find((c) => c.id === id)).filter(Boolean);
        k.equips = items.length ? eqs.map((x) => x.nome) : f.equipNames || [];
        k.rooms = eqs.length ? [...new Set(eqs.map((x) => x.roomName).filter(Boolean))] : picked.length ? picked.map((c) => c.nome) : rooms.length ? [] : f.roomNames || [];
      }
      const base = { summary: title, description: buildDescription(k) };
      if ((f.location || "").trim()) base.location = f.location.trim();
      if (f.kind === "manutencao") {
        const due = f.mode === "edit" ? fromYmd(f.date) : addEvery(fromYmd(f.last || ymd(new Date())), f.every);
        return [{ ...base, start: ymd(due), end: ymd(addDays(due, 1)) }];
      }
      if (f.kind === "conta") {
        const d = fromYmd(f.date);
        const ev = { ...base, start: ymd(d), end: ymd(addDays(d, 1)) };
        if (keepRrule && f.repeat !== "nao") ev.rrule = f.repeat === "anual" ? "FREQ=YEARLY" : "FREQ=MONTHLY";
        return [ev];
      }
      let day = fromYmd(f.date);
      if (f.freq === "semana") {
        if (!f.byday.length) throw new Error("Escolha os dias da semana");
        if (f.mode === "add") for (let i = 0; i < 7 && !f.byday.includes(day.getDay()); i++) day = addDays(day, 1);
      }
      const allDay = f.kind === "rotina" && f.allDay;
      const rrule = keepRrule ? this._kindRrule(f, allDay, day) : null;
      const extra = rrule ? { rrule } : {};
      if (allDay) return [{ ...base, start: ymd(day), end: ymd(addDays(day, 1)), ...extra }];
      const times = [...new Set((f.times || []).filter((t) => /^\d{2}:\d{2}$/.test(t)))].sort();
      if (!times.length) throw new Error("Escolha o horário");
      const len = f.kind === "remedio" ? 15 : 30;
      // Starting today, a time that already passed starts on the next day of the rule
      // (so a remédio created at 19h does not show this morning's dose as late).
      const nextDay = (d) => {
        if (f.freq === "alternado") return addDays(d, 2);
        if (f.freq === "intervalo") return addDays(d, Math.max(2, Number(f.interval) || 3));
        if (f.freq === "mensal") return new Date(d.getFullYear(), d.getMonth() + 1, d.getDate());
        if (f.freq === "semana") {
          let n = addDays(d, 1);
          for (let i = 0; i < 7 && !f.byday.includes(n.getDay()); i++) n = addDays(n, 1);
          return n;
        }
        return addDays(d, 1);
      };
      const now = new Date();
      return times.map((t) => {
        const [h, m] = t.split(":").map(Number);
        let d = day;
        if (f.mode === "add" && f.freq !== "uma" && f.freq !== "depois" && new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m) < now) d = nextDay(d);
        const s = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m);
        return { ...base, start: isoLocal(s), end: isoLocal(new Date(s.getTime() + len * 60000)), ...extra };
      });
    }

    async _saveKindForm() {
      const f = this._form;
      if (f.kind === "tarefa") return this._saveTodoForm();
      if (f.kind === "conta" && f.dest === "gerencia" && f.mode === "add") {
        const valor = parseMoney(f.value);
        if (!(f.title || "").trim()) return this._showToast("Dê um nome à conta");
        if (!valor) return this._showToast("Coloque o valor");
        this._setForm({ saving: true });
        try {
          await this.api.newBill({ descricao: f.title.trim(), valor, vencimento: f.date, repete: f.repeat, categoria: f.categoria || "" });
          this._haptic("success");
          this._closeSheet();
          this._showToast("Conta criada no GerencIA");
        } catch (err) {
          if (this._sheet === "form") this._setForm({ saving: false });
          this._showToast(`O GerencIA não criou: ${err.message}`);
        }
        return;
      }
      let evs;
      try {
        evs = this._kindEvents(f);
      } catch (err) {
        this._showToast(err.message);
        return;
      }
      const cal = this._cal(f.cal);
      if (!cal) return this._showToast("Escolha o calendário");
      const ev = evs[0];
      if (f.mode === "edit" && f.rid && cal.canUpdate) {
        this._openSheet("scope", { action: "edit", ...f, event: ev });
        return;
      }
      this._setForm({ saving: true });
      const label = KIND_UI[f.kind].label;
      const o = ["rotina", "manutencao", "conta"].includes(f.kind) ? "a" : "o"; // Rotina criada, Remédio criado
      try {
        if (f.mode === "add") {
          for (const e of evs) await this.api.createEvent(f.cal, e);
          this._done(evs.length > 1 ? `${label} criad${o}: ${evs.length} horários em ${clip(cal.name, 20)}` : `${label} criad${o} em ${clip(cal.name, 24)}`, f.cal, ev.start);
        } else if (f.cal !== f.origCal) {
          await this.api.createEvent(f.cal, ev);
          await this.api.deleteEvent(f.origCal, f.uid);
          this._store.refresh(f.origCal);
          this._done(`${label} movid${o} para ${clip(cal.name, 24)}`, f.cal, ev.start);
        } else {
          await this._saveInPlace(f, ev);
          this._done(`${label} salv${o}${f.rid && !cal.canUpdate ? " · a série recomeça neste dia" : ""}`, f.cal, ev.start);
        }
      } catch (err) {
        if (this._sheet === "form") this._setForm({ saving: false });
        this._showToast(`Não consegui salvar: ${err.message}`);
      }
    }

    /** Model chips at the top of "Adicionar": pick one and the form changes. */
    _renderModelChips(current) {
      const f = this._form;
      return html`<div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(KIND_UI)
          // "evento" is only for marking a plain event Feito: the Evento of this strip is ""
          .filter(([k]) => k !== "evento" && (k !== "tarefa" || this._todoLists().length))
          .map(
            ([k, ui]) => html`<button class="model ${current === k ? "on" : ""}" role="radio" aria-checked=${current === k ? "true" : "false"} @click=${() => {
              if (current === k) return;
              const date = f.date ? fromYmd(f.date) : null;
              if (k === "tarefa") this._openTodoForm({ date });
              else if (k) this._openKindForm({ kind: k, date });
              else this._openForm({ date });
            }}>${icon(ui.icon)}<span>${ui.label}</span></button>`,
          )}
      </div>`;
    }

    /** The date of a form: the shortcuts and Outra data, with the month right under them (datepick.js). kind: "futuro"
     * (Hoje, Amanhã, Sábado, Próx. semana) or "passado" (Hoje and Ontem, nothing after today). */
    _dateField(label, value, onPick, id, { kind = "futuro" } = {}) {
      return datePickField(label, value, (v) => v && onPick(v), { kind, max: kind === "passado" ? ymd(new Date()) : "", weekStart: this._app("week_start", 1), bid: id });
    }

    /** pets: whether pets are among the choices (they take medicines, but do no chores). */
    _whoField(label, { pets = false } = {}) {
      const f = this._form;
      const all = this._ix().people || [];
      const isPet = (n) => all.some((p) => p.pet && foldText(p.name) === foldText(n));
      const names = [...new Set([...all.filter((p) => pets || !p.pet).map((p) => p.name), ...(f.who ? [f.who] : [])])];
      return html`<div class="field">
        <span class="flabel">${label}</span>
        <div class="chip-row">
          ${names.map((n) => html`<button class="pick person ${f.who === n ? "on" : ""}" @click=${() => this._setForm({ who: f.who === n ? "" : n })}><span class="avatar sm">${isPet(n) ? icon("paw-print") : initial(n)}</span><span>${n}</span></button>`)}
        </div>
        <span class="field-hint">${icon("info")}<span>${pets ? "Outra pessoa ou um pet" : "Outra pessoa"}: adicione em Mais › Avisos.</span></span>
      </div>`;
    }

    _freqField(label) {
      const f = this._form;
      const opts = [
        ["diario", "Todo dia"],
        ["alternado", "Dia sim, dia não"],
        ["semana", "Dias da semana"],
        ["intervalo", "A cada…"],
        ...(f.kind === "rotina" ? [["mensal", "Todo mês"], ["depois", "Depois de feita"]] : []),
        ["uma", "Só uma vez"],
      ];
      // editing: a routine that comes back after done stays one; a repeating one can't become one (it is a series)
      const allowed = f.mode !== "edit" || f.kind !== "rotina" ? opts : f.wasAfter ? opts.filter(([k]) => k === "depois") : f.rid || f.freq !== "uma" ? opts.filter(([k]) => k !== "depois") : opts;
      return html`<div class="field">
        <span class="flabel">${label}</span>
        ${(() => {
          // two lines at most: 7 -> 4 + 3, 5 or 6 -> 3 + the rest; the last one fills the gap
          const n = allowed.length;
          const cols = n <= 4 ? n : n <= 6 ? 3 : 4;
          const span = n % cols ? cols - (n % cols) + 1 : 1;
          return html`<div class="seg seg-grid" role="radiogroup" aria-label=${label} style="grid-template-columns:repeat(${cols},1fr)">${allowed.map(
            ([k, l], i) => html`<button class=${f.freq === k ? "on" : ""} role="radio" aria-checked=${f.freq === k ? "true" : "false"} style=${i === n - 1 && span > 1 ? `grid-column:span ${span}` : ""} @click=${() => this._setForm({ freq: k })}>${l}</button>`,
          )}</div>`;
        })()}
        ${f.freq === "semana"
          ? html`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0, 1, 2, 3, 4, 5, 6].map((d) => {
                const on = f.byday.includes(d);
                return html`<button class="wdp ${on ? "on" : ""}" aria-pressed=${on ? "true" : "false"} aria-label=${WEEKDAYS_SHORT[d]} @click=${() => this._setForm({ byday: on ? f.byday.filter((x) => x !== d) : [...f.byday, d] })}>${WD_LETTER[d]}</button>`;
              })}
            </div>`
          : nothing}
        ${f.freq === "intervalo"
          ? html`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(f.interval)} @input=${(e) => this._setForm({ interval: e.target.value })} /><span class="tl">dias</span></div>`
          : nothing}
        ${f.freq === "depois"
          ? html`<div class="time-row"><span class="tl">Volta</span><input type="number" class="num-input" min="1" max="365" aria-label="Dias depois de feita" .value=${String(f.afterN)} @input=${(e) => this._setForm({ afterN: e.target.value })} /><span class="tl">${Number(f.afterN) === 1 ? "dia" : "dias"} depois de feita</span></div>
              <span class="field-hint">${icon("rotate-ccw")}<span>Feita hoje, volta ${Number(f.afterN) === 1 ? "amanhã" : `daqui a ${Math.max(1, Number(f.afterN) || 2)} dias`}.</span></span>`
          : nothing}
      </div>`;
    }

    /** Points for whoever does it (Recompensas). */
    _pointsField() {
      const f = this._form;
      const n = Number(f.points) || 0;
      return html`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row c4">
          ${[0, 5, 10, 20, 30, 50].map((v) => html`<button class="pick ${n === v ? "on" : ""}" @click=${() => this._setForm({ points: v })}>${v ? `+${v}` : "Sem pontos"}</button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(n)} aria-label="Outro valor de pontos" @input=${(e) => this._setForm({ points: e.target.value })} />
        </div>
        ${n > 0 && !this._scoreOn() ? html`<span class="field-hint">${icon("trophy")}<span>O placar está desligado (aba <b>Recompensas</b>).</span></span>` : nothing}
      </div>`;
    }

    _durField(label) {
      const f = this._form;
      if (f.freq === "uma") return nothing;
      const opts = f.kind === "remedio" ? [["sempre", "Uso contínuo"], ["dias", "Por alguns dias"], ["ate", "Até uma data"]] : [["sempre", "Sem data para acabar"], ["ate", "Até uma data"]];
      return html`<div class="field">
        <span class="flabel">${label}</span>
        <div class="chip-row">${opts.map(([k, l]) => html`<button class="pick ${f.dur === k ? "on" : ""}" @click=${() => this._setForm({ dur: k })}>${l}</button>`)}</div>
        ${f.dur === "dias" ? html`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(f.days)} @input=${(e) => this._setForm({ days: e.target.value })} /><span class="tl">dias</span></div>` : nothing}
        ${f.dur === "ate" ? html`<date-pick class="dp-until" .value=${f.until || ""} kind="nenhum" .min=${f.date} .weekStart=${this._app("week_start", 1)} .bid=${"kf-until"} .label=${"Até"} @pick=${(e) => e.detail.value && this._setForm({ until: e.detail.value })}></date-pick>` : nothing}
      </div>`;
    }

    _calField() {
      const f = this._form;
      const writable = this._writable();
      const targets = f.mode === "edit" ? (f.rid ? writable.filter((c) => c.id === f.cal) : writable.filter((c) => c.id === f.origCal || (this._cal(f.origCal) && this._cal(f.origCal).canDelete))) : writable;
      if (targets.length <= 1) return nothing;
      return html`<div class="field">
        <span class="flabel">${f.mode === "edit" ? "Calendário (mover)" : "Calendário"}</span>
        <div class="chip-row">${targets.map((c) => html`<button class="pick list ${f.cal === c.id ? "on" : ""}" style=${colorVars(c.color, this._dark)} @click=${() => this._setForm({ cal: c.id })}><span class="dot"></span><span>${clip(c.name, 24)}</span></button>`)}</div>
      </div>`;
    }

    _renderKindForm() {
      const f = this._form;
      if (f.kind === "tarefa") return this._renderTodoForm();
      const K = f.kind;
      const ui = KIND_UI[K];
      const now = new Date();
      const g = this._ix().gerencia || {};
      const toGerencia = K === "conta" && f.dest === "gerencia" && f.mode === "add";
      const titles = {
        remedio: ["Remédio", "Ex.: Sertralina 50 mg"],
        conta: ["Conta", "Ex.: Conta de luz, Internet"],
        rotina: ["Tarefa", "Ex.: Regar as plantas, Tirar o lixo"],
        manutencao: ["O que fazer", "Ex.: Trocar o filtro de água"],
      }[K];
      const notes = html`<label class="field"><span class="flabel">Observações</span><textarea rows="2" .value=${f.notes} placeholder=${K === "remedio" ? "Ex.: tomar em jejum, depois do almoço" : "Detalhes"} @input=${(e) => this._setForm({ notes: e.target.value })}></textarea></label>`;
      let body;
      if (K === "remedio") {
        // whose phone gets the alert: theirs, or the person chosen for one without a phone (Mais › Avisos)
        const owner = this._phoneOwner(f.who);
        const timeEdit = f.mode === "add";
        // Mais › Avisos: off, no alert to turn on here; Avisar de novo "Não", only the one on time
        const a = this._app("alerts", null) || {};
        const again = (a.late == null ? 30 : a.late) > 0;
        body = html`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${f.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${(e) => this._setForm({ dose: e.target.value })} /></label>
          ${this._whoField("Quem toma", { pets: true })}
          <div class="field">
            <span class="flabel">${timeEdit ? "Horários" : "Horário"}</span>
            ${timeEdit ? html`<div class="chip-row" style="margin-bottom:10px">${DOSE_PRESETS.map(([l, t]) => html`<button class="pick ${f.times.join() === t.join() ? "on" : ""}" @click=${() => this._setForm({ times: [...t] })}>${l}</button>`)}</div>` : nothing}
            <div class="times">
              ${f.times.map(
                (t, i) => html`<span class="time-pill">${timeField(t, (v) => this._setForm({ times: f.times.map((x, j) => (j === i ? v : x)) }), { label: `Horário ${i + 1}` })}${f.times.length > 1 ? html`<button class="icon-btn mini" aria-label="Tirar horário" @click=${() => this._setForm({ times: f.times.filter((_, j) => j !== i) })}>${icon("x")}</button>` : nothing}</span>`,
              )}
              ${timeEdit && f.times.length < 8 ? html`<button class="pick ghost" @click=${() => this._setForm({ times: [...f.times, "12:00"] })}>${icon("plus")}<span>Horário</span></button>` : nothing}
            </div>
          </div>
          ${this._freqField("Frequência")}
          ${this._dateField(f.mode === "add" ? "Começa" : "Data", f.date, (v) => this._setForm({ date: v }), "kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          ${a.meds === false
            ? nothing
            : html`<div class="row switch-row">
                <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${!f.alert ? "Sem aviso para este remédio." : !f.who ? "Escolha quem toma." : owner || this._careOn() ? `Na hora${again ? " e de novo se atrasar" : ""}, no celular de ${owner || "quem cuida"}.` : html`Sem celular para ${f.who}: escolha quem cuida em <button class="text-btn inline" @click=${() => (this._closeSheet(), this._goAlerts())}>Mais › Avisos</button>.`}</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${f.alert} @change=${(e) => this._setForm({ alert: e.target.checked })} aria-label="Aviso no celular" /><span class="track"></span></label>
              </div>`}
          ${notes}`;
      } else if (K === "conta") {
        body = html`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${f.value} placeholder="0,00" @input=${(e) => this._setForm({ value: e.target.value })} /></span></label>
          ${this._dateField(f.repeat === "nao" ? "Vence" : "Primeiro vencimento", f.date, (v) => this._setForm({ date: v }), "kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row c3">${[["nao", "Não"], ["mensal", "Todo mês"], ["anual", "Todo ano"]].map(([k, l]) => html`<button class="pick ${f.repeat === k ? "on" : ""}" @click=${() => this._setForm({ repeat: k })}>${k !== "nao" ? icon("repeat") : nothing}<span>${l}</span></button>`)}</div></div>
          ${g.ligado && f.mode === "add"
            ? html`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${f.dest === "gerencia" ? "on" : ""}" @click=${() => this._setForm({ dest: "gerencia" })}>${icon("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${f.dest === "cal" ? "on" : ""}" @click=${() => this._setForm({ dest: "cal" })}>${icon("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${icon("info")}<span>${f.dest === "gerencia" ? "Entra no GerencIA; o Paguei daqui dá baixa lá." : "Fica só no calendário."}</span></span>
              </div>`
            : nothing}
          ${toGerencia && (g.categorias || []).length
            ? html`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${(e) => this._setForm({ categoria: e.target.value })}><option value="">Sem categoria</option>${g.categorias.map((c) => html`<option value=${c.id} ?selected=${f.categoria === c.id}>${c.nome}</option>`)}</select></label>`
            : nothing}
          ${toGerencia ? nothing : html`${this._calField()}${notes}`}`;
      } else if (K === "rotina") {
        body = html`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(f, { equips: false, multiRoom: true })}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${f.allDay && !f.period ? "on" : ""}" @click=${() => this._setForm({ allDay: true, period: "" })}>Qualquer hora</button>
              <button class="pick ${!f.allDay ? "on" : ""}" @click=${() => this._setForm({ allDay: false, period: "" })}>${icon("clock")}<span>Num horário</span></button>
              ${!f.allDay ? timeField(f.times[0] || "19:00", (v) => this._setForm({ times: [v] }), { label: "Horário", cls: "inline-time" }) : nothing}
            </div>
            <div class="chip-row c3 per-row" role="group" aria-label="Período do dia">
              ${PERIODS.map((p) => html`<button class="pick ${f.allDay && f.period === p.id ? "on" : ""}" @click=${() => this._setForm({ allDay: true, period: p.id })}>${icon(p.icon)}<span>${p.label}</span></button>`)}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(f.freq === "depois" ? (f.mode === "add" ? "Primeira vez" : "Próxima vez") : f.mode === "add" ? "Começa" : "Data", f.date, (v) => this._setForm({ date: v }), "kf-date")}
          ${f.freq === "depois" ? nothing : this._durField("Até quando")}
          ${this._calField()}
          ${notes}`;
      } else {
        const next = f.mode === "edit" ? fromYmd(f.date) : addEvery(fromYmd(f.last || ymd(now)), f.every);
        body = html`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(f, { multiRoom: true })}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row c4" style="margin-bottom:10px">${EVERY_PRESETS.map((p) => html`<button class="pick ${f.every.n === p.n && f.every.unit === p.unit ? "on" : ""}" @click=${() => this._setForm({ every: { ...p } })}>${everyLabel(p)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(f.every.n)} @input=${(e) => this._setForm({ every: { ...f.every, n: Math.max(1, Number(e.target.value) || 1) } })} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(UNITS).map((u) => html`<button class=${f.every.unit === u ? "on" : ""} @click=${() => this._setForm({ every: { ...f.every, unit: u } })}>${u}</button>`)}</div>
            </div>
            <span class="field-hint">${icon("repeat")}<span>Feito hoje, volta em ${everyLabel(f.every)}.</span></span>
          </div>
          ${f.mode === "add"
            ? this._dateField("Feito pela última vez", f.last, (v) => this._setForm({ last: v }), "kf-last", { kind: "passado" })
            : this._dateField("Próxima vez", f.date, (v) => this._setForm({ date: v }), "kf-date")}
          <p class="next-line">${icon("calendar-check")}<span>Próxima: <b>${cap(dayLabel(next, now, { long: false }))}</b>${dayDiff(next, now) > 1 ? ` · em ${plural(dayDiff(next, now), "dia", "dias")}` : ""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na tela inicial, antes da data</span><div class="seg seg-grid" role="radiogroup" aria-label="Mostrar na tela inicial" style="grid-template-columns:repeat(5,1fr)">${[1, 3, 7, 15, 30].map((n) => html`<button class=${f.warn === n ? "on" : ""} role="radio" aria-checked=${f.warn === n ? "true" : "false"} @click=${() => this._setForm({ warn: n })}>${n === 1 ? "1 dia" : `${n} dias`}</button>`)}</div></div>
          ${this._calField()}
          ${notes}`;
      }
      return html`
        ${this._sheetHead(f.mode === "add" ? "Adicionar" : `Editar ${ui.label.toLowerCase()}`)}
        ${f.mode === "add" ? this._renderModelChips(K) : nothing}
        <label class="field">
          <span class="flabel">${titles[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${f.title} placeholder=${titles[1]} @input=${(e) => this._setForm({ title: e.target.value })}></textarea>
        </label>
        ${body}
        ${f.rid ? html`<div class="field-hint">${icon("repeat")}<span>Este item se repete.</span></div>` : nothing}
        <div class="sheet-actions">
          <button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${f.saving || !(f.title || "").trim()} @click=${() => this._saveKindForm()}>${f.saving ? "Salvando…" : f.mode === "add" ? (toGerencia ? "Criar no GerencIA" : `Criar ${ui.label.toLowerCase()}`) : "Salvar"}</button>
        </div>`;
    }

    // ------------------------------------------------------------ Mais

    /**
     * Mais › Avisos. The app looks at the person, never at a device: each person gets the alerts on the phones
     * tied to them in Home Assistant. One without a phone (a pet, a child) gets them on the phone of the person
     * chosen for it, or of Quem cuida. Quem cuida is people too.
     */
    _renderAlertsPanel() {
      const ix = this._ix();
      const a = this._app("alerts", null) || {};
      const on = a.meds !== false;
      const late = a.late == null ? 30 : a.late;
      const care = a.caregivers || [];
      const people = ix.people || [];
      // who can get alerts: the people with a phone tied to them in Home Assistant
      const phoned = people.filter((p) => p.phone);
      const manual = this._app("people", null) || {};
      const setAlerts = (ch) => this._saveAppPrefs({ alerts: { meds: on, late, caregivers: care, ...ch } });
      // the person who gets the alerts of one without a phone ("": Quem cuida)
      const setCare = (name, who) => {
        const next = { ...(manual[name] || {}) };
        if (who) next.care = who;
        else delete next.care;
        return this._saveAppPrefs({ people: { ...manual, [name]: next } });
      };
      // a pet leaves Quem faz and the placar
      const setPet = (name, pet) => {
        const next = { ...(manual[name] || {}) };
        if (pet) next.pet = true;
        else delete next.pet;
        const s = this._score && this._score();
        if (pet && s && (s.participants || []).some((x) => foldText(x) === foldText(name))) this._scorePrefs({ participants: s.participants.filter((x) => foldText(x) !== foldText(name)) });
        return this._saveAppPrefs({ people: { ...manual, [name]: next } });
      };
      const dropPerson = (name) => {
        const next = { ...manual };
        delete next[name];
        this._saveAppPrefs({ people: Object.keys(next).length ? next : null });
      };
      const add = this._newPerson;
      const addPerson = () => {
        const name = (add.name || "").trim().replace(/\s+/g, " ").slice(0, 40);
        if (!name) return;
        if (people.some((p) => foldText(p.name) === foldText(name))) {
          this._showToast(`${name} já está na lista`);
          return;
        }
        this._newPerson = null;
        this._saveAppPrefs({ people: { ...manual, [name]: add.pet ? { pet: true } : {} } });
      };
      const careSelect = (p) => {
        const others = phoned.filter((x) => foldText(x.name) !== foldText(p.name));
        const gone = p.care && !others.some((x) => foldText(x.name) === foldText(p.care));
        return html`<select class="select sm" aria-label="Quem recebe os avisos de ${p.name}" @change=${(e) => setCare(p.name, e.target.value)}>
          <option value="" ?selected=${!p.care}>No celular de quem cuida</option>
          ${others.map((x) => html`<option value=${x.name} ?selected=${!!p.care && foldText(p.care) === foldText(x.name)}>No celular de ${x.name}</option>`)}
          ${gone ? html`<option value=${p.care} selected>${p.care} (sem celular)</option>` : nothing}
        </select>`;
      };
      const sub = (p) => (p.person ? (on && !p.phone ? "Pessoa do Home Assistant, sem celular" : "Pessoa do Home Assistant") : p.pet ? "Pet" : "Só no CronologIA");
      // at the bottom, the whole width, like the alerts of every app of the family
      const me = this._me ? this._me() : "";
      const mine = people.find((p) => me && foldText(p.name) === foldText(me));
      const testMine = html`<button class="btn outline aviso-test" ?disabled=${!(mine && mine.phone)} title=${mine && mine.phone ? "" : "Sem celular ligado a você no Home Assistant"} @click=${() => this._testAlert(mine.name, true)}>${icon("send")}Testar no meu celular</button>`;
      return html`<div class="panel" id="avisos">
        ${this._secHead("bell-ring", "Avisos de remédio no celular", html`Na hora da dose, com <b>Tomei</b> e <b>Adiar 15 min</b>.`)}
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Dá para desligar em cada remédio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${on} @change=${(e) => setAlerts({ meds: e.target.checked })} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        <div class="field people-field">
          <span class="flabel">Pessoas e pets</span>
          ${people.length
            ? people.map((p) => {
                const own = !p.person && !!manual[p.name];
                return html`<div class="person-row ${p.pet ? "is-pet" : ""}">
                  <span class="avatar">${p.pet ? icon("paw-print") : initial(p.name)}</span>
                  <span class="grow"><b>${p.name}</b><small>${sub(p)}</small></span>
                  ${on && !p.phone && phoned.length ? careSelect(p) : nothing}
                  <span class="p-acts">
                    ${!p.person
                      ? html`<button class="icon-btn pet-btn ${p.pet ? "on" : ""}" aria-pressed=${p.pet ? "true" : "false"} aria-label="${p.name} é um pet" title=${p.pet ? "Pet" : "Marcar como pet"} @click=${() => setPet(p.name, !p.pet)}>${icon("paw-print")}</button>`
                      : nothing}
                    ${on && p.reach ? html`<button class="icon-btn" aria-label="Testar aviso para ${p.name}" @click=${() => this._testAlert(p.name)}>${icon("bell-ring")}</button>` : nothing}
                    ${own ? html`<button class="icon-btn mini" aria-label="Tirar ${p.name}" @click=${() => dropPerson(p.name)}>${icon("x")}</button>` : nothing}
                  </span>
                </div>`;
              })
            : html`<p class="hint">As pessoas do Home Assistant aparecem aqui.</p>`}
          ${add
            ? html`<div class="person-add">
                <input type="text" class="input" .value=${add.name || ""} placeholder="Nome (pessoa ou pet)" aria-label="Nome da pessoa ou pet" maxlength="40"
                  @input=${(e) => ((this._newPerson = { ...this._newPerson, name: e.target.value }), this.requestUpdate())}
                  @keydown=${(e) => e.key === "Enter" && addPerson()} />
                <div class="seg" role="group" aria-label="Pessoa ou pet">
                  <button class=${add.pet ? "" : "on"} @click=${() => ((this._newPerson = { ...this._newPerson, pet: false }), this.requestUpdate())}>${icon("user-round")}Pessoa</button>
                  <button class=${add.pet ? "on" : ""} @click=${() => ((this._newPerson = { ...this._newPerson, pet: true }), this.requestUpdate())}>${icon("paw-print")}Pet</button>
                </div>
                <div class="person-add-acts">
                  <button class="btn outline sm" @click=${() => ((this._newPerson = null), this.requestUpdate())}>Cancelar</button>
                  <button class="btn primary sm" ?disabled=${!(add.name || "").trim()} @click=${addPerson}>Adicionar</button>
                </div>
              </div>`
            : html`<button class="add-line" @click=${() => {
                this._newPerson = { name: "", pet: false };
                this.requestUpdate();
                this.updateComplete.then(() => {
                  const el = this.renderRoot.querySelector(".person-add input");
                  if (el) el.focus();
                });
              }}>${icon("plus")}Adicionar pessoa ou pet</button>`}
          ${on
            ? html`<span class="field-hint">${icon("info")}<span>${phoned.length
                ? "Vai para o celular ligado a cada pessoa no Home Assistant. Sem celular (pet ou criança): para quem você escolher."
                : "Ninguém tem celular ligado no Home Assistant (Configurações › Pessoas)."}</span></span>`
            : nothing}
        </div>
        ${on
          ? html`<div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0, "Não"], [15, "15 min depois"], [30, "30 min"], [60, "1 hora"]].map(([n, l]) => html`<button class="pick ${late === n ? "on" : ""}" @click=${() => setAlerts({ late: n })}>${l}</button>`)}</div>
              </div>
              ${phoned.length
                ? html`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row care-pick">${phoned.map((p) => {
                      const sel = care.some((n) => foldText(n) === foldText(p.name));
                      return html`<button class="pick quem-p ${sel ? "on" : ""}" aria-pressed=${sel ? "true" : "false"} @click=${() => setAlerts({ caregivers: sel ? care.filter((n) => foldText(n) !== foldText(p.name)) : [...care, p.name] })}>${icon("user-round")}<b>${p.name}</b></button>`;
                    })}</div>
                    <span class="field-hint">${icon("info")}<span>${late > 0 ? "Recebe os atrasos de todos." : "Recebe os avisos de quem está sem celular."}</span></span>
                  </div>`
                : nothing}
              ${testMine}`
          : nothing}
      </div>`;
    }

    /**
     * Mais › Configurações › Integrações › CorrerIA: the WhatsApp, the Claude and the Gemini read and change the agenda
     * through the CorrerIA app (off by default; apart from Usar IA: the AI that thinks is theirs). On: the last use.
     */
    _renderCorreriaPanel() {
      const on = this._app("correria_on", false) === true;
      const u = on ? (this._ix().correria || {}).ultimo : null;
      let used = "";
      if (u && Number.isFinite(Date.parse(u.em))) {
        const d = new Date(u.em);
        const n = dayDiff(new Date(this._now || Date.now()), d);
        used = `${u.cliente} usou ${n === 0 ? "hoje" : n === 1 ? "ontem" : `em ${dateShort(d, new Date(this._now || Date.now()))}`} às ${hm(d)}.`;
      }
      return html`<div class="panel" id="correria">
        ${this._secHead("zap", "CorrerIA", "O CorrerIA junta os apps da casa no WhatsApp, no Claude e no Gemini.")}
        <div class="row switch-row integ-switch">
          <div class="grow"><div class="label">Usar com o CorrerIA</div><div class="hint" style="white-space:normal">${on ? "Ligado: pelo WhatsApp, o Claude e o Gemini leem e mudam a agenda." : "Desligado."}</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${on} @change=${(e) => this._saveAppPrefs({ correria_on: e.target.checked ? true : null })} aria-label="Usar com o CorrerIA" /><span class="track"></span></label>
        </div>
        ${on
          ? html`<div class="ai-state ${used ? "ok" : "off"}"><span class="dot"></span><div>${used ? html`<b>${used}</b>` : html`<b>Nenhum uso ainda</b><span>Conecte no app CorrerIA.</span>`}</div></div>`
          : nothing}
      </div>`;
    }

    _renderGerenciaPanel() {
      const on = this._app("gerencia_on", false) === true;
      const toggle = html`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${on
          ? "Ligada."
          : "Desligada."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${on} @change=${(e) => this._saveAppPrefs({ gerencia_on: e.target.checked ? true : null })} aria-label="Usar a integração com o GerencIA" /><span class="track"></span></label>
      </div>`;
      if (!on) {
        return html`<div class="panel" id="gerencia">
          ${this._secHead("wallet", "Contas do GerencIA")}
          ${toggle}
        </div>`;
      }
      const g = this._ix().gerencia || {};
      const open = (g.contas || []).filter((c) => !c.pago).length;
      const tone = g.ligado ? (g.erro ? "warn" : "ok") : "off";
      return html`<div class="panel" id="gerencia">
        ${this._secHead("wallet", "Contas do GerencIA")}
        ${toggle}
        <div class="ai-state ${tone}"><span class="dot"></span><div>
          <b>${g.ligado ? (g.erro ? "Não consegui falar com o GerencIA" : `Conectado ao GerencIA ${g.versao || ""}`) : "GerencIA não encontrado"}</b>
          <span>${g.ligado
            ? g.erro || `${plural(open, "conta a pagar", "contas a pagar")} entre os últimos 2 meses e os próximos 4. O Paguei daqui dá baixa lá.`
            : "Com o GerencIA (o app de finanças) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${g.ligado
          ? html`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">No dia do vencimento.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden", false)} @change=${(e) => this._saveAppPrefs({ gerencia_hidden: e.target.checked ? null : true })} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`
          : nothing}
      </div>`;
    }
  };

