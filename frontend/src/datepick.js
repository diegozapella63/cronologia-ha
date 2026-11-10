/*
 * The date field of the family (the model is the Prazo of the ResolvIA): the shortcuts in buttons (Hoje, Amanhã,
 * Sábado, Próx. semana; Hoje and Ontem for a date up to today) and Outra data, which opens the month right under them
 * (calendar.js, the same file as in the ResolvIA), never the date window of the phone. A tap on the name of the month
 * shows the months of the year.
 *
 *   <date-pick .value=${"2026-12-09"} kind="futuro|passado|livre|nenhum" .min .max .weekStart .bid=${"cr-date"}
 *              .none=${"Um dia"} @pick=${(e) => e.detail.value}>
 *
 * kind "nenhum": only Outra data. none: a first button for no date (Um dia, Sem data), marked when there is none.
 * bid: the id of the Outra data button, which keeps the date in data-value (the tests read it there).
 * It draws in the light DOM of the screen that has it, so the .chip-row, .pick and calendarStyles of the screen apply.
 */
import { LitElement, html, nothing, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { renderCalendar, quickPicks, monthOf } from "./calendar.js";
import { ymd, cap, dayLabel, fromYmd } from "./util.js";

/** The date chosen in Outra data, as in the rest of the app: "Quinta, 24 de dez". */
export const otherLabel = (v, now = new Date()) => cap(dayLabel(fromYmd(v), now, { long: false }));

const icon = (name) =>
  html`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;
const YMD = /^\d{4}-\d{2}-\d{2}$/;

export class DatePick extends LitElement {
  static properties = {
    value: {},
    kind: {},
    min: {},
    max: {},
    weekStart: { type: Number },
    bid: {},
    none: {},
    label: {},
    _month: { state: true },
    _months: { state: true },
  };

  constructor() {
    super();
    this.value = "";
    this.kind = "futuro";
    this.min = "";
    this.max = "";
    this.weekStart = 1;
    this.bid = "";
    this.none = "";
    this.label = "Data";
    this._month = null;
    this._months = false;
  }

  createRenderRoot() {
    return this;
  }

  _pick(v) {
    this._month = null;
    this._months = false;
    this.dispatchEvent(new CustomEvent("pick", { detail: { value: v } }));
  }

  _toggle() {
    const today = ymd(new Date());
    this._months = false;
    this._month = this._month ? null : monthOf(YMD.test(this.value || "") ? this.value : this.min && this.min > today ? this.min : this.max && this.max < today ? this.max : "");
    if (this._month && this.updateComplete)
      this.updateComplete.then(() => {
        const c = this.querySelector(".cal");
        if (c && c.scrollIntoView) c.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
  }

  render() {
    const v = YMD.test(this.value || "") ? this.value : "";
    const inside = (d) => (!this.min || d >= this.min) && (!this.max || d <= this.max);
    const quick = this.kind === "nenhum" ? [] : quickPicks(this.kind).filter((q) => inside(q.date));
    const other = !!v && !quick.some((q) => q.date === v);
    return html`<div class="chip-row grid dp-row" role="group" aria-label=${this.label}>
        ${this.none ? html`<button type="button" class="pick ${v ? "" : "on"}" aria-pressed=${v ? "false" : "true"} @click=${() => this._pick("")}>${this.none}</button>` : nothing}
        ${quick.map((q) => html`<button type="button" class="pick ${q.date === v ? "on" : ""}" aria-pressed=${q.date === v ? "true" : "false"} data-d=${q.date} @click=${() => this._pick(q.date)}>${q.label}</button>`)}
        <button type="button" id=${this.bid || nothing} class="pick dp-other ${other ? "on" : ""}" data-value=${v} aria-pressed=${other ? "true" : "false"} aria-expanded=${this._month ? "true" : "false"} @click=${() => this._toggle()}>
          ${icon("calendar")}<span>${other ? otherLabel(v) : "Outra data"}</span>
        </button>
      </div>
      ${this._month
        ? renderCalendar({
            icon,
            month: this._month,
            value: v || null,
            today: ymd(new Date()),
            min: this.min || "",
            max: this.max || "",
            weekStart: this.weekStart,
            months: this._months,
            onPick: (d) => this._pick(d),
            onMonth: (m) => (this._month = m),
            onMonths: (on) => (this._months = on),
          })
        : nothing}`;
  }
}

if (typeof customElements !== "undefined" && customElements.define && !customElements.get("date-pick")) customElements.define("date-pick", DatePick);

/** The field with its name, as the other fields of a form: <div class="field"><span class="flabel">…</span><date-pick>. */
export function datePickField(label, value, onPick, { kind = "futuro", min = "", max = "", weekStart = 1, bid = "", none = "" } = {}) {
  return html`<div class="field dp-field">
    <span class="flabel">${label}</span>
    <date-pick .value=${value || ""} .kind=${kind} .min=${min || ""} .max=${max || ""} .weekStart=${weekStart} .bid=${bid} .none=${none} .label=${label} @pick=${(e) => onPick(e.detail.value)}></date-pick>
  </div>`;
}
