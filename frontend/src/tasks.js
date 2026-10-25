// Tarefas com prazo: the items with a due date in the Home Assistant to-do
// lists (the ResolvIA lists). Agora card, calendar entries, the task sheet and
// the settings in Mais. Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG, repeat } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { colorById, colorVars, plural, clip, cap, hm, ymd, fromYmd, startOfDay, addDays, dayDiff, dayLabel, dateShort, splitLinks } from "./util.js";

const TF = { CREATE: 1, DUE_DATE: 16, DUE_DATETIME: 32, DESCRIPTION: 64 };
const LAST_LIST = "cronologia.todo_list";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

export const TODO_COLOR = "laranja";
const dueDate = (t) => (t.allDay ? fromYmd(t.due) : new Date(t.due));

function dueText(t, now) {
  const d = dueDate(t);
  const days = dayDiff(d, now);
  const time = t.allDay ? "" : ` às ${hm(d)}`;
  if (t.done) return "concluída";
  if (t.overdue) {
    if (days === 0) return `venceu hoje${time}`;
    if (days === -1) return `venceu ontem${time}`;
    return `venceu há ${-days} dias`;
  }
  if (days === 0) return t.allDay ? "vence hoje" : `hoje${time}`;
  if (days === 1) return `amanhã${time}`;
  return `${dayLabel(d, now, { long: false, cap: false })}${time}`;
}

export const TasksMixin = (Base) =>
  class extends Base {
    _todos() {
      return this._ix().todos || { lists: [], items: [] };
    }

    /** Tasks as events for the calendar screens. */
    _todoEvents(start, end) {
      if (this._app("todo_off_calendar", false)) return [];
      const t = this._todos();
      if (!this._tEvCache || this._tEvCache.t !== t) {
        this._tEvCache = {
          t,
          list: t.items.map((it) => {
            const s = dueDate(it);
            return { key: it.key, cal: "todo", uid: null, rid: null, rrule: null, summary: it.summary, description: it.description, location: "", allDay: it.allDay, start: s, end: it.allDay ? addDays(s, 1) : new Date(s.getTime() + 30 * 60000), raw: {}, kind: null, todo: it };
          }),
        };
      }
      return this._tEvCache.list.filter((e) => e.start < end && e.end > start);
    }

    async _todoDone(t, done) {
      try {
        await this.api.setTodo(t.list, t.uid, done);
        this._haptic(done ? "success" : "light");
        this._showToast(`${clip(t.summary, 28)}: ${done ? "concluída" : "reaberta"}`, { label: "Desfazer", run: () => this.api.setTodo(t.list, t.uid, !done).catch((err) => this._showToast(err.message)) });
      } catch (err) {
        this._showToast(`Não consegui: ${err.message}`);
      }
    }

    _renderTodosPanel() {
      const now = new Date(this._now);
      const all = this._todos().items;
      // late, today and tomorrow (done ones of today stay with ✓)
      const items = all.filter((t) => (t.done ? t.days === 0 : t.overdue || t.days <= 1));
      if (!items.length) return nothing;
      const late = items.filter((t) => t.overdue);
      const open = items.filter((t) => !t.done);
      const shown = this._todosAll ? items : items.slice(0, 6);
      return html`<div class="panel todos ${late.length ? "alert" : ""}" id="tarefas">
        <div class="chores-head">
          <span class="overline">Tarefas com prazo</span>
          <small class=${late.length ? "late" : ""}>${late.length ? plural(late.length, "atrasada", "atrasadas") : open.length ? `${open.length} para fazer` : "tudo feito"}</small>
        </div>
        ${repeat(
          shown,
          (t) => t.key,
          (t) => html`<div class="chore todo ${t.done ? "done" : ""} ${t.overdue ? "late" : ""}">
            <button class="chk sq ${t.done ? "on" : ""}" @click=${() => this._todoDone(t, !t.done)} aria-label="${t.done ? "Reabrir" : "Concluir"} ${t.summary}">${t.done ? icon("check") : nothing}</button>
            <button class="chore-tx" @click=${() => this._openSheet("todo", { key: t.key })}><b>${t.summary}</b><small>${dueText(t, now)} · ${t.listName}</small></button>
          </div>`,
        )}
        ${items.length > 6 ? html`<button class="add-line" @click=${() => ((this._todosAll = !this._todosAll), this.requestUpdate())}>${icon(this._todosAll ? "chevron-up" : "chevron-down")}${this._todosAll ? "Mostrar menos" : `Mais ${items.length - 6}`}</button>` : nothing}
        <div class="panel-foot plain">${icon("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais.</span></div>
      </div>`;
    }

    _renderTodoSheet() {
      const now = new Date(this._now);
      const t = this._todos().items.find((x) => x.key === this._form.key);
      if (!t) return html`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;
      const d = dueDate(t);
      return html`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.summary}</h3><p class="ev-cal">${t.listName} · <b>${dueText(t, now)}</b></p></div>
          <button class="icon-btn" @click=${() => this._closeSheet()} aria-label="Fechar">${icon("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${icon("calendar-clock")}<span>Prazo: ${cap(dayLabel(d, now))}${t.allDay ? "" : ` às ${hm(d)}`}</span></div>
          <div class="fact">${icon("list-checks")}<span>Lista ${t.listName} (ResolvIA)</span></div>
          ${t.description ? html`<div class="fact notes">${icon("file-text")}<span>${splitLinks(t.description).map((p) => (p.url ? html`<a href=${p.url} target="_blank" rel="noopener noreferrer">${p.url}</a>` : p.text))}</span></div>` : nothing}
        </div>
        <p class="sheet-note">${icon("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${t.done
            ? html`<button class="btn outline" @click=${() => this._todoDone(t, false).then(() => this._closeSheet())}>${icon("undo-2")}Reabrir</button>`
            : html`<button class="btn primary" @click=${() => this._todoDone(t, true).then(() => this._closeSheet())}>${icon("check")}Concluir</button>`}
        </div>`;
    }

    // ------------------------------------------------------------ new task

    _todoLists() {
      return this._todos().lists.filter((l) => !l.unavailable && l.features & TF.CREATE);
    }

    _openTodoForm({ date = null } = {}) {
      const lists = this._todoLists();
      let last = "";
      try {
        last = JSON.parse(localStorage.getItem(LAST_LIST) || '""');
      } catch (e) {
        /* private mode */
      }
      const pick = lists.find((l) => l.id === last) || lists.find((l) => !l.hidden && l.features & TF.DUE_DATE) || lists[0];
      this._openSheet("form", { mode: "add", kind: "tarefa", title: "", list: pick ? pick.id : "", date: ymd(date ? startOfDay(date) : startOfDay(new Date())), noDue: false, timed: false, time: "09:00", notes: "" });
      this.updateComplete.then(() => {
        const ta = this.renderRoot.querySelector(".sheet .ev-title-input");
        if (ta) ta.focus();
      });
    }

    _renderTodoForm() {
      const f = this._form;
      const lists = this._todoLists();
      const l = lists.find((x) => x.id === f.list);
      const feats = l ? l.features : 0;
      const canDate = !!(feats & TF.DUE_DATE);
      const canTime = !!(feats & TF.DUE_DATETIME);
      const canNotes = !!(feats & TF.DESCRIPTION);
      return html`
        ${this._sheetHead("Novo")}
        ${this._renderModelChips("tarefa")}
        <label class="field">
          <span class="flabel">Tarefa</span>
          <textarea class="ev-title-input" rows="1" .value=${f.title} placeholder="Ex.: Levar o carro na revisão" @input=${(e) => this._setForm({ title: e.target.value })} @keydown=${(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), this._saveTodoForm())}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Lista do ResolvIA</span>
          <div class="chip-row">${lists.map((x) => html`<button class="pick list ${f.list === x.id ? "on" : ""}" style=${colorVars(colorById(TODO_COLOR), this._dark)} @click=${() => this._setForm({ list: x.id })}>${icon("list-checks")}<span>${clip(x.name, 26)}</span></button>`)}</div>
        </div>
        ${canDate || canTime
          ? html`${f.noDue ? nothing : this._dateField("Prazo", f.date, (v) => this._setForm({ date: v }), "td-date")}
              <div class="chip-row" style="margin:-8px 0 18px">
                <button class="pick ${f.noDue ? "on" : ""}" @click=${() => this._setForm({ noDue: !f.noDue })}>Sem prazo</button>
                ${canTime && !f.noDue
                  ? html`<button class="pick ${f.timed ? "on" : ""}" @click=${() => this._setForm({ timed: !f.timed })}>${icon("clock")}<span>Com horário</span></button>
                      ${f.timed ? html`<input type="time" class="inline-time" .value=${f.time} aria-label="Horário" @change=${(e) => e.target.value && this._setForm({ time: e.target.value })} />` : nothing}`
                  : nothing}
              </div>`
          : html`<p class="field-hint" style="margin:-6px 0 18px">${icon("info")}<span>Essa lista não aceita prazo (listas do Alexa, por exemplo). A tarefa entra sem data.</span></p>`}
        ${canNotes ? html`<label class="field"><span class="flabel">Notas</span><textarea rows="2" .value=${f.notes} placeholder="Detalhes, links" @input=${(e) => this._setForm({ notes: e.target.value })}></textarea></label>` : nothing}
        <div class="sheet-actions">
          <button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${f.saving || !(f.title || "").trim() || !l} @click=${() => this._saveTodoForm()}>${f.saving ? "Salvando…" : "Criar tarefa"}</button>
        </div>`;
    }

    async _saveTodoForm() {
      const f = this._form;
      const l = this._todoLists().find((x) => x.id === f.list);
      if (!l) return this._showToast("Escolha a lista");
      if (!(f.title || "").trim()) return this._showToast("Dê um nome à tarefa");
      const withDue = !f.noDue && l.features & (TF.DUE_DATE | TF.DUE_DATETIME);
      const timed = withDue && f.timed && l.features & TF.DUE_DATETIME;
      const task = { summary: f.title.trim(), date: withDue ? f.date : "", time: timed ? f.time : "", description: f.notes || "" };
      if (withDue && !timed && !(l.features & TF.DUE_DATE)) task.time = "09:00";
      this._setForm({ saving: true });
      try {
        await this.api.addTodo(l.id, task);
        try {
          localStorage.setItem(LAST_LIST, JSON.stringify(l.id));
        } catch (e) {
          /* private mode */
        }
        this._haptic("success");
        await this._closeSheet();
        this._showToast(`Tarefa criada em ${clip(l.name, 24)}${l.hidden ? " (lista oculta aqui)" : ""}`);
      } catch (err) {
        if (this._sheet === "form") this._setForm({ saving: false });
        this._showToast(`Não consegui criar: ${err.message}`);
      }
    }

    _renderTodosSettings() {
      const { lists, app } = this._todos();
      const hidden = this._app("todo_hidden", null) || [];
      const toggle = (id, show) => this._saveAppPrefs({ todo_hidden: show ? hidden.filter((x) => x !== id) : [...hidden, id] });
      const shown = lists.filter((l) => !l.hidden);
      const due = shown.reduce((n, l) => n + l.due, 0);
      const late = shown.reduce((n, l) => n + l.overdue, 0);
      const counts = `${plural(lists.length, "lista", "listas")} · ${plural(due, "tarefa com prazo", "tarefas com prazo")}${late ? `, ${plural(late, "atrasada", "atrasadas")}` : ""}.`;
      const state = !lists.length
        ? { tone: "off", title: "Nenhuma lista de tarefas encontrada", text: "Com o ResolvIA (ou qualquer lista de tarefas do Home Assistant), as tarefas com prazo aparecem aqui sozinhas. Nada a configurar." }
        : app
          ? { tone: "ok", title: `Conectado ao ResolvIA ${app.versao || ""}`.trim(), text: `${counts} Concluir aqui conclui lá, e a repetição do ResolvIA continua valendo.` }
          : { tone: "ok", title: "Lendo as listas de tarefas do Home Assistant", text: `${counts} Concluir aqui conclui lá.` };
      return html`<div class="panel" id="resolvia">
        <div class="overline">Tarefas do ResolvIA</div>
        <div class="ai-state ${state.tone}"><span class="dot"></span><div><b>${state.title}</b><span>${state.text}</span></div></div>
        ${lists.length
          ? html`<div class="row switch-row">
                <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As tarefas aparecem no dia do prazo (ou no horário, se tiver), além do card da Agora.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar", false)} @change=${(e) => this._saveAppPrefs({ todo_off_calendar: e.target.checked ? null : true })} aria-label="Tarefas no calendário" /><span class="track"></span></label>
              </div>
              <div class="sub-overline">Listas</div>`
          : nothing}
        ${repeat(
          lists,
          (l) => l.id,
          (l) => html`<div class="row switch-row ${l.hidden ? "off" : ""}">
            <span class="tile" style=${colorVars(colorById(TODO_COLOR), this._dark)}>${icon("list-checks")}</span>
            <div class="grow"><div class="label">${l.name}</div><div class="hint">${l.due ? `${plural(l.due, "tarefa com prazo", "tarefas com prazo")}${l.overdue ? ` · ${plural(l.overdue, "atrasada", "atrasadas")}` : ""}` : "nenhuma com prazo"}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${!l.hidden} @change=${(e) => toggle(l.id, e.target.checked)} aria-label="Mostrar ${l.name}" /><span class="track"></span></label>
          </div>`,
        )}
      </div>`;
    }
  };
