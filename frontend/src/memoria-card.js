// Agora › MemorIA: the trecho of the MemorIA (the notes app of the family) that holds now, of whoever is looking,
// and the two next start times; and Mais › Configurações › Integrações › MemorIA (Trechos no Agora, off by default).
// Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG, css } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { colorById, colorVars } from "./util.js";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

// the MemorIA palette has one color this app doesn't
const EXTRA = { framboesa: { id: "framboesa", fill: "#E8508A", ink: "#A3124F" } };
const CHECK = /^\s*(☐|☑|\[ \]|\[[xX]\])/;
const DONE = /^\s*(☑|\[[xX]\])/;
const SHOWN_LINES = 6;

/** Whether a text takes more than the lines shown folded (about 36 letters per line on a phone). */
export const memoLong = (text) => String(text || "").split("\n").reduce((n, l) => n + Math.max(1, Math.ceil(l.length / 36)), 0) > SHOWN_LINES;

/** When the trecho of now changes: the start of the next one (today or tomorrow), as ms (Infinity: none). */
export function memoNextChange(trechos, now = new Date()) {
  const next = (trechos || []).find((t) => !t.agora);
  if (!next) return Infinity;
  const [h, m] = next.inicio.split(":").map(Number);
  const at = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
  if (next.amanha || at.getTime() <= now.getTime()) at.setDate(at.getDate() + 1);
  return at.getTime();
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
      const [cur, ...next] = m.trechos;
      // tapping opens the MemorIA (its address in Home Assistant), from the page around this one
      const go = (body, cls, style = "", label = "") =>
        m.painel
          ? html`<a class=${cls} style=${style} href=${m.painel} target="_top" aria-label=${label || nothing}>${body}</a>`
          : html`<div class=${cls} style=${style}>${body}</div>`;
      const text = cur.texto || "";
      const long = memoLong(text);
      const open = !!this._memoOpen && long;
      const lines = text.split("\n");
      const since = `desde ${cur.ontem ? "ontem às " : ""}${cur.inicio}`;
      return html`<div class="panel memo" id="memoria" style=${colorVars(this._memoColor(cur.cor), this._dark)}>
        <div class="chores-head sec-head"><span class="sec-ic memo-ic">${icon("notebook-pen")}</span><span class="overline">MemorIA</span><small>${since}</small></div>
        ${go(
          html`<b class="memo-block"><span class="dot"></span><span>${cur.bloco}</span>${cur.outros ? html`<small>+${cur.outros}</small>` : nothing}</b>
            ${text.trim()
              ? html`<span class="memo-text ${open ? "open" : ""}">${lines.map((l, i) => html`<span class=${CHECK.test(l) ? (DONE.test(l) ? "ck done" : "ck") : ""}>${l}</span>${i < lines.length - 1 ? "\n" : ""}`)}</span>`
              : html`<span class="memo-text empty">Folha em branco.</span>`}`,
          "memo-now",
        )}
        ${long ? html`<button class="text-btn memo-more" aria-expanded=${open ? "true" : "false"} @click=${() => ((this._memoOpen = !open), this.requestUpdate())}>${open ? "Ver menos" : "Ver mais"}</button>` : nothing}
        ${next.length
          ? html`<div class="memo-next">
              ${next.map((t) =>
                go(
                  html`<span class="memo-at"><b>${t.inicio}</b>${t.amanha ? html`<small>amanhã</small>` : nothing}</span><span class="dot"></span>
                    <span class="memo-tx"><b>${t.bloco}${t.outros ? html` <small>+${t.outros}</small>` : nothing}</b>${t.titulo || t.periodo ? html`<small>${t.titulo || t.periodo}</small>` : nothing}</span>`,
                  "memo-row",
                  colorVars(this._memoColor(t.cor), this._dark),
                  `${t.inicio}${t.amanha ? " amanhã" : ""}: ${t.bloco}`,
                ),
              )}
            </div>`
          : nothing}
      </div>`;
    }

    /** Mais › Configurações › Integrações › MemorIA: Trechos no Agora (off by default), then whether it answers. */
    _renderMemoriaSettings() {
      const on = this._memoriaOn();
      const m = this._memo;
      const toggle = html`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Trechos no Agora</div><div class="hint" style="white-space:normal">${on ? "O de agora e os dois próximos, de cada pessoa." : "Desligado."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${on} @change=${(e) => this._saveMemoria(e.target.checked)} aria-label="Trechos do MemorIA no Agora" /><span class="track"></span></label>
      </div>`;
      let state = nothing;
      if (on && m && m.ligado) {
        const tone = !m.encontrado ? "off" : m.erro ? "warn" : "ok";
        const n = (m.trechos || []).length;
        state = html`<div class="ai-state ${tone}" id="memoria-estado"><span class="dot"></span><div>
          <b>${!m.encontrado ? "MemorIA não encontrado" : m.erro ? "Não consegui falar com o MemorIA" : `Conectado ao MemorIA ${m.versao || ""}`}</b>
          <span>${!m.encontrado ? "Instale o MemorIA 1.13.0 ou mais novo no mesmo Home Assistant." : m.erro ? m.erro : n ? `Agora: ${m.trechos[0].bloco}, desde ${m.trechos[0].inicio}.` : "Nada com horário agora."}</span>
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
  .memo-now {
    display: grid;
    gap: 6px;
    padding: 2px 18px 6px;
    color: inherit;
    text-decoration: none;
  }
  .memo-block {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    font-size: 16px;
    font-weight: 700;
  }
  .memo-block > span:not(.dot) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .memo-block small,
  .memo-tx small small {
    color: var(--rv-muted);
    font-weight: 600;
    font-size: 13px;
  }
  .panel.memo .dot {
    width: 10px;
    height: 10px;
    flex: none;
    border-radius: 50%;
    background: var(--c);
  }
  .memo-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    font-size: 15px;
    line-height: 1.45;
    color: var(--rv-text);
  }
  .memo-text.open {
    display: block;
    -webkit-line-clamp: unset;
  }
  .memo-text.empty {
    color: var(--rv-muted);
  }
  .memo-text .ck.done {
    color: var(--rv-muted);
    text-decoration: line-through;
  }
  .memo-more {
    margin: -2px 14px 2px;
  }
  .memo-next {
    border-top: 1px solid var(--rv-line);
    margin-top: 4px;
    padding-top: 4px;
  }
  .memo-row {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 48px;
    padding: 4px 18px;
    color: inherit;
    text-decoration: none;
  }
  .memo-at {
    display: grid;
    flex: none;
    width: 52px;
    line-height: 1.15;
  }
  .memo-at b {
    font-size: 16px;
    font-variant-numeric: tabular-nums;
  }
  .memo-at small,
  .memo-tx > small {
    color: var(--rv-muted);
    font-size: 13px;
  }
  .memo-tx {
    display: grid;
    flex: 1;
    min-width: 0;
  }
  .memo-tx > b,
  .memo-tx > small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .memo-tx > b {
    font-size: 15px;
    font-weight: 600;
  }
  a.memo-now:active,
  a.memo-row:active {
    background: var(--rv-surface-2);
  }
  /* computer: the inside lines up with the page, like the other sections */
  @media (min-width: 1000px) {
    .page:not(.cal-page) .panel.memo .memo-now,
    .page:not(.cal-page) .panel.memo .memo-row {
      padding-left: 0;
      padding-right: 0;
    }
    .page:not(.cal-page) .panel.memo .memo-more {
      margin-left: -4px;
    }
    a.memo-now:hover .memo-block span:not(.dot),
    a.memo-row:hover .memo-tx > b {
      text-decoration: underline;
    }
  }
`;
