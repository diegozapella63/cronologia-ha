// Modelos (remédio, conta a pagar, rotina da casa, manutenção) on the screens:
// the Agora panels, the forms, the event sheet facts, the bills of the GerencIA
// app and the "Avisos" settings. Mixed into <cronologia-app>.
import { html, svg, nothing, unsafeSVG, repeat } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { buildDescription, parseMoney, formatMoney, everyLabel, UNITS, addEvery, foldText } from "../../cronologia/rootfs/app/lib/kinds.js";
import { toEvent } from "./events.js";
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
  if (r.done) return `feito por ${r.done.by || "alguém"} · volta ${r.next ? dayLabel(fromYmd(r.next), now, { long: false, cap: false }) : `em ${everyLabel(r.after)}`}`;
  const when = r.late > 0 ? (r.late === 1 ? "venceu ontem" : `atrasada há ${r.late} dias`) : r.time || "hoje";
  return [when, r.who, `volta ${everyLabel(r.after)} depois`].filter(Boolean).join(" · ");
}

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
      return this._home || { meds: [], routines: [], bills: [], maint: [], checks: {}, people: [], targets: [], caregivers: [], gerencia: { ligado: false, contas: [] } };
    }

    _checkOf(e) {
      if (e.gerencia) return e.gerencia.pago ? { at: null, by: "" } : null;
      if (e.todo) return e.todo.done ? { at: null, by: "" } : null;
      return this._ix().checks[e.key] || null;
    }

    _targetName(id) {
      const t = this._ix().targets.find((x) => x.id === id);
      return t ? t.name : (id || "").replace(/^mobile_app_/, "").replace(/_/g, " ");
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
     * check, which has the day, the name and the time it had).
     */
    _movedDoneEvents(start, end) {
      const ix = this._ix();
      const today = ymd(new Date(this._now));
      const out = [];
      for (const [key, c] of Object.entries(ix.checks || {})) {
        const m = c && c.moved;
        if (!m || !m.day) continue;
        const d = fromYmd(m.day);
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
        out.push({ key, cal: m.cal, uid: null, rid: null, rrule: null, summary, description: "", location: "", allDay, start: s, end: e, raw: {}, kind: { kind: "rotina", points: (r && r.points) || 0, who: (r && r.who) || "" }, movedDone: { item: r, by: c.by || "", day: m.day } });
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

    async _testAlert(target) {
      try {
        await this.api.testAlert(target);
        this._showToast(`Aviso de teste enviado para ${this._targetName(target)}. Toque em Tomei nele para conferir o botão.`);
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
      const taken = meds.filter((m) => m.taken).length;
      const late = meds.filter((m) => m.state === "atrasado");
      const groups = [];
      for (const m of meds) {
        const who = m.who || "";
        let g = groups.find((x) => foldText(x.who) === foldText(who));
        if (!g) groups.push((g = { who, list: [], notify: m.notify }));
        g.list.push(m);
      }
      const all = taken === meds.length;
      return html`<div class="panel meds ${late.length ? "alert" : ""} ${all ? "all" : ""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${icon("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${all ? "Tudo tomado" : `${taken} de ${meds.length} ${meds.length === 1 ? "tomado" : "tomados"}`}</b></div>
          ${this._ring(taken / meds.length, late.length ? "bad" : all ? "ok" : "acc", `${taken}/${meds.length}`)}
        </div>
        ${late.length
          ? html`<div class="meds-alert" role="alert">${icon("triangle-alert")}<span>${late.length === 1
              ? html`<b>${late[0].summary}</b>${late[0].who ? ` de ${late[0].who}` : ""} está atrasado ${lateLabel(late[0].late_min)}`
              : html`<b>${late.length} doses atrasadas</b>: ${late.map((m) => m.summary).join(", ")}`}</span></div>`
          : nothing}
        ${groups.map(
          (g) => html`${groups.length > 1 || g.who
              ? html`<div class="meds-who"><span class="avatar">${initial(g.who)}</span><b>${g.who || "Sem pessoa"}</b><small>${g.list.filter((m) => m.taken).length} de ${g.list.length}</small>${g.notify ? html`<span class="who-bell" title="Aviso no celular: ${this._targetName(g.notify)}">${icon("bell-ring")}</span>` : nothing}</div>`
              : nothing}
            ${repeat(g.list, (m) => m.key, (m) => this._renderDose(m))}`,
        )}
        ${this._alertsHint(meds)}
      </div>`;
    }

    _renderDose(m) {
      const st = m.state;
      const info = [m.dose, st === "tomado" ? `tomou às ${hm(new Date(m.taken.at))}${m.taken.by && foldText(m.taken.by) !== foldText(m.who) ? ` · ${m.taken.by}` : ""}` : st === "atrasado" ? `atrasado ${lateLabel(m.late_min)}` : st === "agora" ? "hora de tomar" : ""].filter(Boolean).join(" · ");
      return html`<div class="dose ${st}">
        <button class="dose-main" @click=${() => this._openIndexItem(m)}>
          <span class="dose-time">${m.time || "dia"}</span>
          <span class="dose-tx"><b>${m.summary}</b>${info ? html`<small>${info}</small>` : nothing}</span>
        </button>
        ${st === "tomado"
          ? html`<button class="dose-done" @click=${() => this._undoCheck(m, "remedio")} aria-label="Desmarcar ${m.summary}">${icon("check")}</button>`
          : html`<button class="dose-btn ${st}" @click=${() => this._check(m, "remedio")}>Tomei</button>`}
      </div>`;
    }

    _alertsHint(meds) {
      const a = this._app("alerts", null) || {};
      if (a.meds === false) return html`<button class="panel-foot" @click=${() => this._goAlerts()}>${icon("bell-ring")}<span>Avisos no celular desligados</span>${icon("chevron-right")}</button>`;
      const noPhone = [...new Set(meds.filter((m) => m.alert && !m.notify && m.who).map((m) => m.who))];
      const care = (a.caregivers || []).length;
      const withPhone = [...new Set(meds.filter((m) => m.alert && m.notify).map((m) => m.who))];
      const text = noPhone.length && !care ? `Sem celular para ${noPhone.join(", ")}: escolha quem avisar` : withPhone.length ? `Avisa no celular de ${withPhone.join(", ")}${care ? ` e de quem cuida` : ""}` : "Escolha os celulares que recebem os avisos";
      return html`<button class="panel-foot ${noPhone.length && !care ? "warn" : ""}" @click=${() => this._goAlerts()}>${icon("bell-ring")}<span>${text}</span>${icon("chevron-right")}</button>`;
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
      // the done ones stay folded (a long day has dozens): "Mostrar concluídas" opens them
      const open = routines.filter((r) => !r.done);
      const shut = routines.filter((r) => r.done);
      const row = (r) => html`<div class="chore ${r.done ? "done" : ""}">
                  <button class="chk ${r.done ? "on" : ""}" @click=${() => (r.done ? this._undoCheck(r, "rotina") : this._markDone(r, "rotina"))} aria-label="${r.done ? "Desmarcar" : "Marcar"} ${r.summary}">${r.done ? icon("check") : nothing}</button>
                  <button class="chore-tx" @click=${() => this._openIndexItem(r)}><b>${r.summary}</b><small class=${r.late > 0 && !r.done ? "late" : ""}>${!r.done && this._pickWho() && r.points > 0 ? html`<span class="pts-inline">+${r.points}</span> · ` : nothing}${r.after ? afterSub(r, new Date(this._now)) : [r.yesterday ? "ficou de ontem" : r.time, r.done ? `feito${r.done.by ? ` por ${r.done.by}` : ""}` : r.who].filter(Boolean).join(" · ") || "hoje"}</small></button>
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
                      ${icon(this._choresDoneOpen ? "chevron-down" : "chevron-right")}${this._choresDoneOpen ? "Esconder concluídas" : `Mostrar concluídas (${shut.length})`}
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
          <span class="maint-tx"><b>${m.summary}</b><small>${maintLabel(m, now)} · a cada ${everyLabel(m.every)}${m.who ? ` · ${m.who}` : ""}${m.points > 0 && this._scoreOn() ? ` · +${m.points}` : ""}</small></span>
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
        <p class="sheet-note top">O prazo conta a partir da última vez. Cada item aparece na tela Agora alguns dias antes de vencer.</p>
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
      const q = (this._catQ || "").trim();
      const needle = foldText(q);
      const found = needle ? all.filter((c) => foldText(`${c.summary} ${c.who} ${c.dose} ${c.location}`).includes(needle)) : all;
      const low = (t) => (t ? t.charAt(0).toLowerCase() + t.slice(1) : "");
      const daily = (c) => /FREQ=DAILY/.test(c.rrule || "") && !/INTERVAL=([2-9]|\d\d)/.test(c.rrule || "");
      const freq = (c) => (c.kind === "manutencao" ? `a cada ${everyLabel(c.every)}` : c.after ? `volta ${everyLabel(c.after)} depois de feita` : c.rrule ? low(rruleLabel(c.rrule)) : "uma vez");
      const when = (c) => {
        const d = dayDiff(fromYmd(c.next), now);
        if (c.late || d < 0) {
          const verb = c.kind === "rotina" ? "atrasada" : "venceu";
          return { text: d === -1 ? `${verb} ontem` : `${verb} há ${-d} dias`, late: true };
        }
        if (daily(c) && d <= 1) return null;
        const pre = c.kind === "conta" ? "vence" : c.kind === "manutencao" ? "próxima" : "próxima";
        return { text: `${pre} ${dayLabel(fromYmd(c.next), now, { long: false, cap: false })}` };
      };
      const pts = (c) => (c.points > 0 && this._scoreOn() ? `+${c.points}` : "");
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
      const row = (c, hint, w = null) => html`<button class="row cat-row" style=${colorVars(this._colorOfEvent(c), this._dark)} @click=${() => this._openIndexItem(c)}>
        <span class="tile" aria-hidden="true">${icon(KIND_UI[c.kind].icon)}</span>
        <span class="grow"><div class="label">${c.summary}</div><div class="hint">${hint}${w ? html`${hint ? " · " : ""}<span class=${w.late ? "late" : ""}>${w.text}</span>` : nothing}</div></span>
        ${icon("chevron-right")}
      </button>`;
      const line = (c, parts) => {
        return row(c, parts.filter(Boolean).join(" · "), when(c));
      };
      const SECS = [
        { kind: "rotina", ic: "spray-can", tone: "ok", title: "Rotina da casa", add: "Nova rotina", none: "Nenhuma rotina cadastrada." },
        { kind: "remedio", ic: "pill", tone: "accent", title: "Remédios", add: "Novo remédio", none: "Nenhum remédio cadastrado." },
        { kind: "manutencao", ic: "wrench", tone: "gold", title: "Manutenção da casa", add: "Nova manutenção", none: "Nenhuma manutenção cadastrada." },
        { kind: "conta", ic: "receipt", tone: "violet", title: "Contas a pagar", add: "Nova conta", none: "Nenhuma conta cadastrada aqui." },
      ];
      const g = this._ix().gerencia || {};
      const body = (sec) => {
        if (sec.kind === "remedio")
          return meds.map(({ first: c, times }) => {
            const t = [...times].sort();
            return row(c, [c.dose, c.who, t.length ? t.join(", ") : "", freq(c), c.alert === false ? "sem aviso" : ""].filter(Boolean).join(" · "));
          });
        const list = found.filter((c) => c.kind === sec.kind);
        if (sec.kind === "rotina") return list.map((c) => line(c, [c.who, freq(c), c.time, pts(c)]));
        if (sec.kind === "manutencao") return list.map((c) => line(c, [freq(c), c.who, pts(c)]));
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
          const rows = body(sec);
          if (needle && !rows.length) return nothing;
          return html`<div class="panel cat-sec" id="cat-${sec.kind}">
            ${this._panelHead(sec.ic, sec.tone, sec.title, rows.length ? String(rows.length) : "")}
            ${rows.length ? rows : html`<p class="empty-line">${sec.none}</p>`}
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
      const chk = this._checkOf(e);
      const facts = [];
      if (k.kind === "remedio") {
        if (k.dose) facts.push(["pill", `Dose: ${k.dose}`]);
        if (k.who) facts.push(["user-round", `Quem toma: ${k.who}`]);
        const p = this._ix().people.find((x) => foldText(x.name) === foldText(k.who));
        facts.push(["bell-ring", !k.alert ? "Sem aviso no celular" : p && p.notify ? `Aviso no celular: ${this._targetName(p.notify)}` : "Aviso no celular: escolha o celular em Mais"]);
      } else if (k.kind === "conta") {
        if (k.value != null) facts.push(["receipt", formatMoney(k.value)]);
      } else if (k.kind === "rotina") {
        if (k.who) facts.push(["user-round", `Quem faz: ${k.who}`]);
        if (k.points > 0) facts.push(["award", `${k.points} pontos para quem fizer`]);
        if (k.after && !e.rrule) {
          facts.push(["repeat", `Volta ${everyLabel(k.after)} depois de feita (na agenda, só a próxima vez)`]);
          if (k.history && k.history.length) facts.push(["check", `Feito em ${k.history.slice(0, 4).map((d) => dateShort(fromYmd(d), now)).join(", ")}`]);
        }
      } else if (k.kind === "manutencao") {
        if (k.points > 0) facts.push(["award", `${k.points} pontos para quem fizer`]);
        facts.push(["repeat", `A cada ${everyLabel(k.every)}, contando da última vez`]);
        if (k.who) facts.push(["user-round", `Quem faz: ${k.who}`]);
        facts.push(["bell-ring", `Aparece na tela inicial ${plural(k.warn, "dia", "dias")} antes`]);
        if (k.history && k.history.length) facts.push(["check", `Feito em ${k.history.slice(0, 4).map((d) => dateShort(fromYmd(d), now)).join(", ")}`]);
      }
      const ui = KIND_UI[k.kind];
      let action = nothing;
      if (k.kind === "manutencao") {
        const m = (this._ix().maint || []).find((x) => x.cal === e.cal && x.uid === e.uid);
        if (m && m.canMove) action = this._pickWho() ? this._renderWhoButtons(this._scoreOn() ? m.points || 0 : 0, (p) => this._maintDone(m, p)) : html`<button class="btn primary kind-act" @click=${() => this._maintDone(m)}>${icon("check")}Feito hoje</button>`;
      } else if (e.start < addDays(startOfDay(now), 2)) {
        const it = { key: e.key, summary: e.summary };
        action = chk
          ? html`<div class="kind-state">${icon("circle-check")}<span>${cap(ui.done)}${chk.at ? ` ${dayDiff(new Date(chk.at), now) === 0 ? "hoje" : dateShort(new Date(chk.at), now)} às ${hm(new Date(chk.at))}` : ""}${chk.by ? ` · ${chk.by}` : ""}</span><button class="text-btn" @click=${() => this._undoCheck(it, k.kind)}>Desfazer</button></div>`
          : (k.kind === "rotina" || k.kind === "manutencao") && this._pickWho()
            ? this._renderWhoButtons(k.points || 0, (p) => this._closeSheet().then(() => this._markDone({ ...it, points: k.points || 0 }, k.kind, p)))
          : k.kind === "rotina" || k.kind === "manutencao"
            ? html`<button class="btn primary kind-act" @click=${() => this._closeSheet().then(() => this._markDone({ ...it, points: k.points || 0 }, k.kind))}>${icon("check")}${ui.verb}${k.points > 0 && this._scoreOn() ? ` · +${k.points}` : ""}</button>`
            : html`<button class="btn primary kind-act" @click=${() => this._check(it, k.kind).then(() => this._closeSheet())}>${icon("check")}${ui.verb}</button>`;
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
        whoOther: false,
        alert: true,
        value: "",
        repeat: "mensal",
        dest: g.ligado ? "gerencia" : "cal",
        categoria: "",
        every: { n: 6, unit: "meses" },
        afterN: 2,
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
          notes: k.notes || "",
          location: ev.location || "",
        };
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
        Object.assign(k, { who: f.who, points: Math.max(0, Math.round(Number(f.points) || 0)) });
        if (f.freq === "depois") Object.assign(k, { after: { n: Math.max(1, Math.min(365, Math.round(Number(f.afterN) || 2))), unit: "dias" }, history: f.mode === "edit" ? f.history || [] : [] });
      }
      else if (f.kind === "conta") {
        k.value = parseMoney(f.value);
        if (!k.value) throw new Error("Coloque o valor");
      } else {
        if (!(f.every && f.every.n > 0)) throw new Error("Escolha de quanto em quanto tempo");
        Object.assign(k, { who: f.who, every: f.every, warn: f.warn, history: f.mode === "edit" ? f.history : f.last ? [f.last] : [], points: Math.max(0, Math.round(Number(f.points) || 0)) });
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

    /** Model chips at the top of "Novo": pick one and the form changes. */
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

    _dateField(label, value, onPick, id, { quick = true } = {}) {
      const now = new Date();
      const today = startOfDay(now);
      const opts = quick
        ? [
            ["Hoje", ymd(today)],
            ["Amanhã", ymd(addDays(today, 1))],
          ]
        : [];
      const isQuick = opts.some(([, v]) => v === value);
      return html`<div class="field">
        <span class="flabel">${label}</span>
        <div class="chip-row c3">
          ${opts.map(([l, v]) => html`<button class="pick ${value === v ? "on" : ""}" @click=${() => onPick(v)}>${l}</button>`)}
          <button class="pick ${!isQuick ? "on" : ""}" @click=${() => {
            const input = this.renderRoot.querySelector(`#${id}`);
            try {
              input.showPicker();
            } catch (e) {
              input.focus();
              input.click();
            }
          }}>${icon("calendar")}<span>${!isQuick && value ? cap(dayLabel(fromYmd(value), now, { long: false })) : "Outra data"}</span>
            <input id=${id} class="hidden-input" type="date" tabindex="-1" .value=${value} @change=${(e) => e.target.value && onPick(e.target.value)} />
          </button>
        </div>
      </div>`;
    }

    _whoField(label) {
      const f = this._form;
      const names = [...new Set([...(this._ix().people || []).map((p) => p.name), ...(f.who ? [f.who] : [])])];
      const known = names.some((n) => n === f.who);
      return html`<div class="field">
        <span class="flabel">${label}</span>
        <div class="chip-row">
          ${names.map((n) => html`<button class="pick person ${f.who === n && !f.whoOther ? "on" : ""}" @click=${() => this._setForm({ who: f.who === n ? "" : n, whoOther: false })}><span class="avatar sm">${initial(n)}</span><span>${n}</span></button>`)}
          <button class="pick ghost ${f.whoOther ? "on" : ""}" @click=${() => this._setForm({ whoOther: true, who: known ? "" : f.who })}>${icon("plus")}<span>Outra pessoa</span></button>
        </div>
        ${f.whoOther ? html`<input type="text" class="who-input" .value=${f.who} placeholder="Nome (pode ser o pet também)" @input=${(e) => this._setForm({ who: e.target.value })} />` : nothing}
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
              <span class="field-hint">${icon("rotate-ccw")}<span>Conta a partir de quando é feita: o Feito leva a próxima vez para ${Number(f.afterN) === 1 ? "amanhã" : `daqui a ${Math.max(1, Number(f.afterN) || 2)} dias`}. Na agenda fica só a próxima, e na Agora ela aparece no dia e continua lá até ser feita.</span></span>`
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
        ${n > 0 && !this._scoreOn() ? html`<span class="field-hint">${icon("trophy")}<span>Os pontos contam quando o placar estiver ligado, na aba <b>Recompensas</b>.</span></span>` : nothing}
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
        ${f.dur === "ate" ? html`<div class="time-row"><span class="tl">Até</span><input type="date" .value=${f.until} min=${f.date} @change=${(e) => e.target.value && this._setForm({ until: e.target.value })} /></div>` : nothing}
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
        const p = (this._ix().people || []).find((x) => foldText(x.name) === foldText(f.who));
        const timeEdit = f.mode === "add";
        body = html`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${f.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${(e) => this._setForm({ dose: e.target.value })} /></label>
          ${this._whoField("Quem toma")}
          <div class="field">
            <span class="flabel">${timeEdit ? "Horários" : "Horário"}</span>
            ${timeEdit ? html`<div class="chip-row" style="margin-bottom:10px">${DOSE_PRESETS.map(([l, t]) => html`<button class="pick ${f.times.join() === t.join() ? "on" : ""}" @click=${() => this._setForm({ times: [...t] })}>${l}</button>`)}</div>` : nothing}
            <div class="times">
              ${f.times.map(
                (t, i) => html`<span class="time-pill"><input type="time" .value=${t} aria-label="Horário ${i + 1}" @change=${(e) => e.target.value && this._setForm({ times: f.times.map((x, j) => (j === i ? e.target.value : x)) })} />${f.times.length > 1 ? html`<button class="icon-btn mini" aria-label="Tirar horário" @click=${() => this._setForm({ times: f.times.filter((_, j) => j !== i) })}>${icon("x")}</button>` : nothing}</span>`,
              )}
              ${timeEdit && f.times.length < 8 ? html`<button class="pick ghost" @click=${() => this._setForm({ times: [...f.times, "12:00"] })}>${icon("plus")}<span>Horário</span></button>` : nothing}
            </div>
          </div>
          ${this._freqField("Frequência")}
          ${this._dateField(f.mode === "add" ? "Começa" : "Data", f.date, (v) => this._setForm({ date: v }), "kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          <div class="row switch-row">
            <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${!f.alert ? "Sem aviso para este remédio." : p && p.notify ? `Na hora e de novo se atrasar, no ${this._targetName(p.notify)}.` : f.who ? html`Escolha o celular de ${f.who} em <button class="text-btn inline" @click=${() => (this._closeSheet(), this._goAlerts())}>Mais › Avisos</button>.` : "Escolha quem toma."}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${f.alert} @change=${(e) => this._setForm({ alert: e.target.checked })} aria-label="Aviso no celular" /><span class="track"></span></label>
          </div>
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
                <span class="field-hint">${icon("info")}<span>${f.dest === "gerencia" ? "Entra no caixa do GerencIA e aparece aqui na agenda. O Paguei daqui dá baixa lá." : "Fica só no calendário, com o Paguei daqui."}</span></span>
              </div>`
            : nothing}
          ${toGerencia && (g.categorias || []).length
            ? html`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${(e) => this._setForm({ categoria: e.target.value })}><option value="">Sem categoria</option>${g.categorias.map((c) => html`<option value=${c.id} ?selected=${f.categoria === c.id}>${c.nome}</option>`)}</select></label>`
            : nothing}
          ${toGerencia ? nothing : html`${this._calField()}${notes}`}`;
      } else if (K === "rotina") {
        body = html`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${f.allDay ? "on" : ""}" @click=${() => this._setForm({ allDay: true })}>Qualquer hora</button>
              <button class="pick ${!f.allDay ? "on" : ""}" @click=${() => this._setForm({ allDay: false })}>${icon("clock")}<span>Num horário</span></button>
              ${!f.allDay ? html`<input type="time" class="inline-time" .value=${f.times[0] || "19:00"} @change=${(e) => e.target.value && this._setForm({ times: [e.target.value] })} aria-label="Horário" />` : nothing}
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
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row c4" style="margin-bottom:10px">${EVERY_PRESETS.map((p) => html`<button class="pick ${f.every.n === p.n && f.every.unit === p.unit ? "on" : ""}" @click=${() => this._setForm({ every: { ...p } })}>${everyLabel(p)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(f.every.n)} @input=${(e) => this._setForm({ every: { ...f.every, n: Math.max(1, Number(e.target.value) || 1) } })} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(UNITS).map((u) => html`<button class=${f.every.unit === u ? "on" : ""} @click=${() => this._setForm({ every: { ...f.every, unit: u } })}>${u}</button>`)}</div>
            </div>
            <span class="field-hint">${icon("repeat")}<span>Conta a partir da última vez que foi feito: o "Feito" leva a próxima data para hoje + ${everyLabel(f.every)}.</span></span>
          </div>
          ${f.mode === "add"
            ? this._dateField("Feito pela última vez", f.last, (v) => this._setForm({ last: v }), "kf-last", { quick: false })
            : this._dateField("Próxima vez", f.date, (v) => this._setForm({ date: v }), "kf-date", { quick: false })}
          <p class="next-line">${icon("calendar-check")}<span>Próxima: <b>${cap(dayLabel(next, now, { long: false }))}</b>${dayDiff(next, now) > 1 ? ` · em ${plural(dayDiff(next, now), "dia", "dias")}` : ""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na tela inicial, antes da data</span><div class="seg seg-grid" role="radiogroup" aria-label="Mostrar na tela inicial" style="grid-template-columns:repeat(5,1fr)">${[1, 3, 7, 15, 30].map((n) => html`<button class=${f.warn === n ? "on" : ""} role="radio" aria-checked=${f.warn === n ? "true" : "false"} @click=${() => this._setForm({ warn: n })}>${n === 1 ? "1 dia" : `${n} dias`}</button>`)}</div></div>
          ${this._calField()}
          ${notes}`;
      }
      return html`
        ${this._sheetHead(f.mode === "add" ? "Novo" : `Editar ${ui.label.toLowerCase()}`)}
        ${f.mode === "add" ? this._renderModelChips(K) : nothing}
        <label class="field">
          <span class="flabel">${titles[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${f.title} placeholder=${titles[1]} @input=${(e) => this._setForm({ title: e.target.value })}></textarea>
        </label>
        ${body}
        ${f.rid ? html`<div class="field-hint">${icon("info")}<span>Este item se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>` : nothing}
        <div class="sheet-actions">
          <button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${f.saving || !(f.title || "").trim()} @click=${() => this._saveKindForm()}>${f.saving ? "Salvando…" : f.mode === "add" ? (toGerencia ? "Criar no GerencIA" : `Criar ${ui.label.toLowerCase()}`) : "Salvar"}</button>
        </div>`;
    }

    // ------------------------------------------------------------ Mais

    _renderAlertsPanel() {
      const ix = this._ix();
      const a = this._app("alerts", null) || {};
      const on = a.meds !== false;
      const late = a.late == null ? 30 : a.late;
      const care = a.caregivers || [];
      const people = ix.people || [];
      const targets = ix.targets || [];
      const manual = this._app("people", null) || {};
      const setAlerts = (ch) => this._saveAppPrefs({ alerts: { meds: on, late, caregivers: care, ...ch } });
      const setPerson = (name, notify) => {
        const next = { ...manual };
        if (notify) next[name] = { notify };
        else delete next[name];
        this._saveAppPrefs({ people: next });
      };
      return html`<div class="panel" id="avisos">
        ${this._secHead("bell-ring", "Avisos de remédio no celular", html`Na hora de cada dose, o celular de quem toma recebe um aviso com <b>Tomei</b> e <b>Adiar 15 min</b>. Se não tomar, avisa de novo, também para quem cuida. Usa o app Home Assistant do celular.`)}
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Vale para todos os remédios (dá para desligar em cada um).</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${on} @change=${(e) => setAlerts({ meds: e.target.checked })} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${on
          ? html`<div class="field">
                <span class="flabel">Celular de cada pessoa</span>
                ${people.length
                  ? people.map((p) => {
                      const chosen = manual[p.name] && manual[p.name].notify;
                      return html`<div class="person-row">
                        <span class="avatar">${initial(p.name)}</span>
                        <span class="grow"><b>${p.name}</b><small>${p.person ? "Pessoa do Home Assistant" : "Só no CronologIA"}</small></span>
                        <select class="select sm" aria-label="Celular de ${p.name}" @change=${(e) => setPerson(p.name, e.target.value)}>
                          <option value="" ?selected=${!chosen}>${p.auto ? `Automático: ${this._targetName(p.auto)}` : "Sem celular"}</option>
                          ${targets.map((t) => html`<option value=${t.id} ?selected=${chosen === t.id}>${t.name}</option>`)}
                        </select>
                        ${p.notify ? html`<button class="icon-btn" aria-label="Testar aviso para ${p.name}" @click=${() => this._testAlert(p.notify)}>${icon("bell-ring")}</button>` : nothing}
                      </div>`;
                    })
                  : html`<p class="hint">As pessoas do Home Assistant e quem estiver nos remédios aparecem aqui.</p>`}
                ${!targets.length ? html`<span class="field-hint">${icon("info")}<span>Nenhum celular com o app Home Assistant encontrado (serviços notify.mobile_app_…).</span></span>` : nothing}
              </div>
              <div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0, "Não"], [15, "15 min depois"], [30, "30 min"], [60, "1 hora"]].map(([n, l]) => html`<button class="pick ${late === n ? "on" : ""}" @click=${() => setAlerts({ late: n })}>${l}</button>`)}</div>
              </div>
              ${targets.length
                ? html`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row">${targets.map((t) => {
                      const sel = care.includes(t.id);
                      return html`<button class="pick ${sel ? "on" : ""}" aria-pressed=${sel ? "true" : "false"} @click=${() => setAlerts({ caregivers: sel ? care.filter((x) => x !== t.id) : [...care, t.id] })}>${icon("smartphone")}<span>${t.name}</span></button>`;
                    })}</div>
                    <span class="field-hint">${icon("info")}<span>Recebe o aviso de atraso de todos e o aviso na hora de quem não tem celular (criança, pet).</span></span>
                  </div>`
                : nothing}`
          : nothing}
        <div class="steps-box">
          <b>No Home Assistant</b>
          <p class="data-note">${this._app("sensors_on", false) === true
            ? html`Sensores para painéis e automações: <code>sensor.cronologia_remedios_hoje</code>, <code>binary_sensor.cronologia_remedio_atrasado</code> e <code>sensor.cronologia_manutencoes_vencidas</code>.`
            : html`Para ter sensores dos remédios (doses de hoje, remédio atrasado) em painéis e automações, ligue <b>Sensores no Home Assistant</b> em Mais › Integrações.`}</p>
          <p class="data-note">Para marcar de fora do app (uma automação, uma etiqueta NFC na geladeira), dispare o evento <code>cronologia_feito</code> com <code>nome: Filtro de água</code>: manutenção, rotina ou remédio de hoje com esse nome ficam feitos.</p>
        </div>
      </div>`;
    }

    _renderGerenciaPanel() {
      const on = this._app("gerencia_on", false) === true;
      const toggle = html`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${on
          ? "Ligada: as contas a pagar do GerencIA aparecem aqui e o Paguei daqui dá baixa lá."
          : "Desligada: o CronologIA não consulta o GerencIA e as contas de lá não aparecem."}</div></div>
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
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As contas aparecem no dia do vencimento, além do card da Agora.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden", false)} @change=${(e) => this._saveAppPrefs({ gerencia_hidden: e.target.checked ? null : true })} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`
          : nothing}
      </div>`;
    }
  };

