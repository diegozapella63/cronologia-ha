// Agora › MemorIA: the sheet of the MemorIA (the notes app of the family) that holds now, of whoever is looking, at
// the clock of their phone, drawn like a sheet of the MemorIA (1.62.0: the spiral, the paper of the block, its letters);
// nothing holds now, no card. And Mais › Configurações › Integrações › MemorIA (Trechos no Agora, off by default).
// Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG, css, unsafeCSS } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { colorById, colorVars } from "./util.js";
// the handwriting of the MemorIA (Caveat; the file is loaded by fonts.js, which the tests outside the browser can't import)
const FONT_HAND = `"CR Caveat", "Segoe Print", "Bradley Hand", cursive`;

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

// the MemorIA palette has one color this app doesn't
const EXTRA = { framboesa: { id: "framboesa", fill: "#E8508A", ink: "#A3124F" } };
const CHECK = /^\s*(☐|☑|\[ \]|\[[xX]\])/;
const DONE = /^\s*(☑|\[[xX]\])/;
const SHOWN_LINES = 6;
const RINGS = Array.from({ length: 7 }, () => html`<i></i>`);

/** Whether a text takes more than the lines shown folded (about 36 letters per line on a phone). */
export const memoLong = (text) => String(text || "").split("\n").reduce((n, l) => n + Math.max(1, Math.ceil(l.length / 36)), 0) > SHOWN_LINES;

/**
 * When the trecho of now changes: the start of the next one (today or tomorrow) or, sooner, the end of the one of now
 * (fim: its Fica no Agora in the MemorIA 1.14.0), as ms (Infinity: none).
 */
export function memoNextChange(trechos, now = new Date()) {
  const when = (hhmm, tomorrow) => {
    const [h, m] = hhmm.split(":").map(Number);
    const at = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
    if (tomorrow || at.getTime() <= now.getTime()) at.setDate(at.getDate() + 1);
    return at.getTime();
  };
  const list = trechos || [];
  const next = list.find((t) => !t.agora);
  const cur = list.find((t) => t.agora);
  const times = [...(next ? [when(next.inicio, next.amanha)] : []), ...(cur && cur.fim ? [when(cur.fim, false)] : [])];
  return times.length ? Math.min(...times) : Infinity;
}

export const MemoriaMixin = (Base) =>
  class extends Base {
    _memoriaOn() {
      return this._app("memoria_on", false) === true;
    }

    _memoColor(id) {
      return colorById(id) || EXTRA[id] || this._accent();
    }

    /** Asks the server again (the trechos of this person); fresh: past its cache (Configurações). */
    async _loadMemoria(fresh = false) {
      if (!this.api || !this.api.memoriaNow) return;
      this._memoBusy = true;
      this._memoAt = Date.now();
      try {
        this._memo = await this.api.memoriaNow(fresh);
      } catch (err) {
        this._memo = { ligado: true, encontrado: true, erro: err.message || String(err), trechos: [] };
      }
      this._memoBusy = false;
      this._memoUntil = memoNextChange(this._memo.trechos);
      this.requestUpdate();
    }

    /** From updated(): while Agora is open, once a minute and when the next start time comes. */
    _memoriaTick() {
      if (!this._ready || !this._memoriaOn() || this._memoBusy || this._view().name !== "now") return;
      const now = Date.now();
      if (this._memoAt && now - this._memoAt < 60000 && now < (this._memoUntil || Infinity)) return;
      this._loadMemoria();
    }

    _renderMemoriaPanel() {
      const m = this._memo;
      if (!this._memoriaOn() || !m || !m.ligado || m.erro || !(m.trechos || []).length) return nothing;
      // only the sheet that holds now (the MemorIA 1.14.0 may have none: the time of the one before is over); the next
      // ones only say when to ask again (memoNextChange)
      const cur = m.trechos[0].agora ? m.trechos[0] : null;
      if (!cur) return nothing;
      const text = cur.texto || "";
      const long = memoLong(text);
      const open = !!this._memoOpen && long;
      const lines = text.split("\n");
      const since = `desde ${cur.ontem ? "ontem às " : ""}${cur.inicio}${cur.fim ? ` até ${cur.fim}` : ""}`;
      // like the sheet of the Agora of the MemorIA: the cover in the color of the block, the spiral, its paper and letters
      const sheet = html`<span class="memo-cover"></span><span class="memo-stack"></span>
        <span class="memo-leaf ${cur.papel || "pautado"}">
          <span class="memo-top"><span class="memo-name">${cur.bloco}${cur.outros ? html` <small>+${cur.outros}</small>` : nothing}</span><span class="memo-pin">${icon("clock")}${cur.inicio}</span></span>
          ${text.trim()
            ? html`<span class="memo-ink ${cur.letra === "normal" ? "normal" : ""} ${open ? "open" : ""}">${lines.map((l, i) => {
                const ck = CHECK.test(l);
                const body = ck ? l.replace(CHECK, "").trimStart() : l;
                return html`${ck ? html`<span class="ck ${DONE.test(l) ? "done" : ""}"><span class="box">${icon("check")}</span><span>${body}</span></span>` : html`<span>${body}</span>`}${i < lines.length - 1 ? "\n" : ""}`;
              })}</span>`
            : html`<span class="memo-ink empty">Folha em branco.</span>`}
        </span>
        <span class="memo-spiral" aria-hidden="true">${RINGS}</span>`;
      // tapping opens the MemorIA (its address in Home Assistant), from the page around this one
      const label = `${cur.bloco}: a folha de agora, ${since}`;
      return html`<div class="panel memo" id="memoria" style=${colorVars(this._memoColor(cur.cor), this._dark)}>
        <div class="chores-head sec-head"><span class="sec-ic memo-ic">${icon("notebook-pen")}</span><span class="overline">MemorIA</span><small>${since}</small></div>
        ${m.painel
          ? html`<a class="memo-pad" href=${m.painel} target="_top" aria-label=${label}>${sheet}</a>`
          : html`<div class="memo-pad" role="group" aria-label=${label}>${sheet}</div>`}
        ${long ? html`<button class="text-btn memo-more" aria-expanded=${open ? "true" : "false"} @click=${() => ((this._memoOpen = !open), this.requestUpdate())}>${open ? "Ver menos" : "Ver mais"}</button>` : nothing}
      </div>`;
    }

    /** Mais › Configurações › Integrações › MemorIA: Trechos no Agora (off by default), then whether it answers. */
    _renderMemoriaSettings() {
      const on = this._memoriaOn();
      const m = this._memo;
      const toggle = html`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Trechos no Agora</div><div class="hint" style="white-space:normal">${on ? "A folha de agora, de cada pessoa." : "Desligado."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${on} @change=${(e) => this._saveMemoria(e.target.checked)} aria-label="Trechos do MemorIA no Agora" /><span class="track"></span></label>
      </div>`;
      let state = nothing;
      if (on && m && m.ligado) {
        const tone = !m.encontrado ? "off" : m.erro ? "warn" : "ok";
        const n = (m.trechos || []).length;
        state = html`<div class="ai-state ${tone}" id="memoria-estado"><span class="dot"></span><div>
          <b>${!m.encontrado ? "MemorIA não encontrado" : m.erro ? "Não consegui falar com o MemorIA" : `Conectado ao MemorIA ${m.versao || ""}`}</b>
          <span>${!m.encontrado ? "Instale o MemorIA 1.13.0 ou mais novo no mesmo Home Assistant." : m.erro ? m.erro : n && m.trechos[0].agora ? `Agora: ${m.trechos[0].bloco}, desde ${m.trechos[0].inicio}.` : "Nada agora."}</span>
        </div></div>`;
      }
      return html`<div class="panel" id="memoria-config">
        ${this._secHead("notebook-pen", "MemorIA")}
        ${toggle}
        ${state}
      </div>`;
    }

    async _saveMemoria(on) {
      await this._saveAppPrefs({ memoria_on: on ? true : null });
      this._memo = null;
      this._memoAt = 0;
      if (on) await this._loadMemoria(true);
      else this.requestUpdate();
    }
  };

export const memoriaStyles = css`
  .panel.memo {
    padding: 0 0 6px;
    overflow: hidden;
  }
  .memo-ic {
    background: var(--cs);
    color: var(--ci);
  }
  /* the sheet of now, like a sheet of the MemorIA (its colors: the paper, the ink, the lines, the spiral) */
  .memo-pad {
    --paper: #fffcf3;
    --paper-back: #f4eddb;
    --paper-edge: #e3d9bf;
    --ink: #253354;
    --ink-soft: #7a7f90;
    --rule: rgba(72, 125, 200, 0.3);
    --rule-dot: rgba(72, 105, 160, 0.38);
    --margin: rgba(226, 88, 88, 0.55);
    --wire: #9ba1aa;
    position: relative;
    display: block;
    margin: 4px 22px 18px 26px;
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  :host([dark]) .memo-pad {
    --paper: #2a2622;
    --paper-back: #221f1c;
    --paper-edge: #3b3631;
    --ink: #f1e8d6;
    --ink-soft: #a99f8e;
    --rule: rgba(150, 180, 235, 0.15);
    --rule-dot: rgba(170, 190, 235, 0.24);
    --margin: rgba(240, 110, 110, 0.36);
    --wire: #8d9198;
  }
  .memo-cover {
    position: absolute;
    inset: 6px -6px -8px 4px;
    border-radius: 5px 13px 13px 5px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), transparent 45%), var(--c);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
  }
  .memo-stack {
    position: absolute;
    inset: 2px -2px -3px 1px;
    border-radius: 4px 10px 10px 4px;
    background: var(--paper-back);
    box-shadow: 1px 1px 0 var(--paper-edge), 2px 2px 0 var(--paper-back);
  }
  .memo-leaf {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    min-height: 150px;
    padding-bottom: 14px;
    border-radius: 4px 10px 10px 4px;
    background: var(--paper);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .memo-leaf.pautado::before {
    /* the red margin line */
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 1.5px;
    background: var(--margin);
    pointer-events: none;
  }
  .memo-top {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 40px;
    padding: 4px 12px 0 50px;
    color: var(--ink-soft);
    font-family: ${unsafeCSS(FONT_HAND)};
    font-size: 19px;
  }
  .memo-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .memo-name small {
    font-size: 15px;
  }
  .memo-pin {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex: none;
    color: var(--ci);
  }
  :host([dark]) .memo-pin {
    color: var(--c);
  }
  .memo-pin .i {
    width: 15px;
    height: 15px;
  }
  .memo-ink {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    padding: 0 16px 0 50px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    color: var(--ink);
    font-family: ${unsafeCSS(FONT_HAND)};
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    background-position: 0 0;
  }
  .memo-ink.normal {
    font-family: var(--rv-body);
    font-size: 16px;
    font-weight: 400;
  }
  .memo-ink.open {
    display: block;
    -webkit-line-clamp: unset;
  }
  .memo-ink.empty {
    color: var(--ink-soft);
  }
  .pautado .memo-ink {
    background-image: repeating-linear-gradient(to bottom, transparent 0 27px, var(--rule) 27px 28px);
  }
  .quadriculado .memo-ink {
    background-image: linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .pontilhado .memo-ink {
    background-image: radial-gradient(circle at 1px 1px, var(--rule-dot) 1.4px, transparent 1.9px);
    background-size: 28px 28px;
    background-position: 10px 26px;
  }
  /* Caixas de marcar, as in the MemorIA: ☐ to do, ☑ done (crossed out) */
  .memo-ink .box {
    display: inline-grid;
    place-items: center;
    width: 19px;
    height: 19px;
    margin-right: 8px;
    vertical-align: -2px;
    border: 2px solid var(--ink-soft);
    border-radius: 5px;
    color: transparent;
  }
  .memo-ink .box .i {
    width: 13px;
    height: 13px;
    stroke-width: 3;
  }
  .memo-ink .ck.done .box {
    background: var(--ci);
    border-color: var(--ci);
    color: var(--paper);
  }
  .memo-ink .ck.done .box ~ span {
    text-decoration: line-through;
    opacity: 0.55;
  }
  .memo-spiral {
    position: absolute;
    left: -11px;
    top: 10px;
    bottom: 10px;
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 2;
    pointer-events: none;
  }
  .memo-spiral i {
    position: relative;
    height: 10px;
  }
  .memo-spiral i::before {
    content: "";
    position: absolute;
    left: 17px;
    top: 1px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--rv-surface, var(--rv-bg));
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
  }
  .memo-spiral i::after {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 24px;
    height: 8px;
    border-radius: 5px;
    border: 2.2px solid var(--wire);
    border-right-color: transparent;
    transform: rotate(-9deg);
  }
  .memo-more {
    margin: -8px 14px 4px;
  }
  a.memo-pad:active .memo-leaf {
    filter: brightness(0.97);
  }
  /* computer: the inside lines up with the page, like the other sections */
  @media (min-width: 1000px) {
    .page:not(.cal-page) .panel.memo .memo-pad {
      margin-left: 12px;
      margin-right: 6px;
    }
    .page:not(.cal-page) .panel.memo .memo-more {
      margin-left: -4px;
    }
    a.memo-pad:hover .memo-name {
      text-decoration: underline;
    }
  }
`;
