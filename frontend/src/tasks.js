// Tarefas com prazo: the items with a due date in the Home Assistant to-do
// lists (the ResolvIA lists). Agora card, calendar entries, the task sheet and
// the settings in Mais. Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG, repeat } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { colorById, colorVars, plural, clip, cap, hm, ymd, fromYmd, startOfDay, addDays, dayDiff, dayLabel, dateShort, splitLinks } from "./util.js";
import { foldText } from "../../cronologia/rootfs/app/lib/kinds.js";

const TF = { CREATE: 1, UPDATE: 4, DUE_DATE: 16, DUE_DATETIME: 32, DESCRIPTION: 64 };
const LAST_LIST = "cronologia.todo_list";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

export const TODO_COLOR = "laranja";
const initial = (name) => (name || "?").trim().charAt(0).toUpperCase();
const dueDate = (t) => (t.allDay ? fromYmd(t.due) : new Date(t.due));

function dueText(t, now) {
  if (t.undated) return "sem prazo";
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

/** "todo dia", "a cada 2 dias", "toda semana"… as in the ResolvIA (empty when it doesn't repeat). */
const everyLabel = (days) => (!days ? "" : days === 1 ? "todo dia" : days === 7 ? "toda semana" : days === 14 ? "a cada 2 semanas" : days === 30 ? "todo mês" : `a cada ${days} dias`);

export const TasksMixin = (Base) =>
  class extends Base {
    /** Every list and task, whoever they belong to (for the settings). */
    _todosAll() {
      return this._ix().todos || { lists: [], items: [] };
    }

    /**
     * The lists and tasks this person sees: a list with an owner (Mais › Integrações ›
     * Tarefas do ResolvIA › De quem é) only shows to them. A device whose user isn't a
     * person of the house (a shared tablet) sees everything.
     */
    _todos() {
      const t = this._todosAll();
      const owners = this._app("todo_owner", null) || {};
      const me = this._me();
      const known = me && (this._ix().people || []).some((p) => p.person && foldText(p.name) === foldText(me));
      if (!Object.keys(owners).length || !known) return t;
      const c = this._todosView;
      const key = JSON.stringify(owners);
      if (c && c.src === t && c.me === me && c.key === key) return c.view;
      const mine = (id) => !owners[id] || foldText(owners[id]) === foldText(me);
      const view = { ...t, lists: t.lists.filter((l) => mine(l.id)), items: t.items.filter((i) => mine(i.list)) };
      this._todosView = { src: t, me, key, view };
      return view;
    }

    /** Who can be the owner of a list: the people of the house (Home Assistant persons). */
    _todoOwners() {
      const people = (this._ix().people || []).filter((p) => p.person).map((p) => p.name);
      const s = this._score && this._score();
      return [...new Set([...people, ...((s && s.participants) || [])])];
    }

    /** Tasks as events for the calendar screens. */
    _todoEvents(start, end) {
      if (this._app("todo_off_calendar", false)) return [];
      const t = this._todos();
      if (!this._tEvCache || this._tEvCache.t !== t) {
        this._tEvCache = {
          t,
          list: t.items.filter((it) => !it.undated).map((it) => {
            const s = dueDate(it);
            return { key: it.key, cal: "todo", uid: null, rid: null, rrule: null, summary: it.summary, description: it.description, location: "", allDay: it.allDay, start: s, end: it.allDay ? addDays(s, 1) : new Date(s.getTime() + 30 * 60000), raw: {}, kind: null, todo: it };
          }),
        };
      }
      return this._tEvCache.list.filter((e) => e.start < end && e.end > start);
    }

    /** Concluir/Reabrir; a task with ResolvIA points goes to whoever did it (asks when unknown, or `by` from the quick buttons). */
    async _todoDone(t, done, by = null) {
      const run = async (who) => {
        if (this._sheet === "who") await this._closeSheet();
        try {
          const r = await this.api.setTodo(t.list, t.uid, done, who);
          this._haptic(done ? "success" : "light");
          if (done && r && r.points) this._doneToast(t, r.who, r.points, { reassignKey: r.key });
          else this._showToast(`${clip(t.summary, 28)}: ${done ? "concluída" : "reaberta"}`, { label: "Desfazer", run: () => this.api.setTodo(t.list, t.uid, !done).catch((err) => this._showToast(err.message)) });
        } catch (err) {
          this._showToast(`Não consegui: ${err.message}`);
        }
      };
      if (done && t.points > 0) return by ? run(by) : this._withWho(t.points, t.summary, run);
      return run("");
    }

    _renderTodosPanel() {
      const now = new Date(this._now);
      const all = this._todos().items;
      // late, today and tomorrow (done ones of today stay with ✓), then the ones without a due date (option)
      const items = all.filter((t) => (t.undated ? true : t.done ? t.days === 0 : t.overdue || t.days <= 1));
      if (!items.length) return nothing;
      const late = items.filter((t) => t.overdue);
      const open = items.filter((t) => !t.done);
      const shown = this._todosOpen ? items : items.slice(0, 6);
      // tasks worth points: one quick button per person (up to 3) concludes and gives them the points
      const people = this._scoreOn() ? (this._score() || {}).participants || [] : [];
      const row = (t) => {
        const quick = t.points > 0 && !t.done && people.length && people.length <= 3;
        const sub = [t.undated ? "" : dueText(t, now), everyLabel(t.every), t.listName].filter(Boolean).join(" · ");
        return html`<div class="chore todo ${t.done ? "done" : ""} ${t.overdue ? "late" : ""}">
          <button class="chk sq ${t.done ? "on" : ""}" @click=${() => this._todoDone(t, !t.done)} aria-label="${t.done ? "Reabrir" : "Concluir"} ${t.summary}">${t.done ? icon("check") : nothing}</button>
          <button class="chore-tx" @click=${() => this._openSheet("todo", { key: t.key })}><b>${t.summary}</b><small>${quick ? html`<span class="pts-inline">+${t.points}</span> · ${sub}` : sub}</small></button>
          ${quick
            ? html`<div class="qwho" role="group" aria-label="Quem fez ${t.summary}">
                ${people.map((p) => html`<button class="qw-btn" style=${colorVars(this._pColor(p), this._dark)} aria-label="${p} fez ${t.summary} (+${t.points})" title="${p} fez (+${t.points})" @click=${() => this._todoDone(t, true, p)}>${initial(p)}</button>`)}
              </div>`
            : t.points > 0 && this._scoreOn()
              ? html`<span class="pts ${t.done ? "got" : ""}">+${t.points}</span>`
              : nothing}
        </div>`;
      };
      return html`<div class="panel todos ${late.length ? "alert" : ""}" id="tarefas">
        <div class="chores-head">
          <span class="overline">${items.some((t) => t.undated) ? "Tarefas" : "Tarefas com prazo"}</span>
          <small class=${late.length ? "late" : ""}>${late.length ? plural(late.length, "atrasada", "atrasadas") : open.length ? `${open.length} para fazer` : "tudo feito"}</small>
        </div>
        ${repeat(
          shown.filter((t) => !t.undated),
          (t) => t.key,
          (t) => row(t),
        )}
        ${shown.some((t) => t.undated)
          ? html`${shown.some((t) => !t.undated) ? html`<div class="chores-head sub"><span class="overline">Sem prazo</span></div>` : nothing}
              ${repeat(
                shown.filter((t) => t.undated),
                (t) => t.key,
                (t) => row(t),
              )}`
          : nothing}
        ${items.length > 6 ? html`<button class="add-line" @click=${() => ((this._todosOpen = !this._todosOpen), this.requestUpdate())}>${icon(this._todosOpen ? "chevron-up" : "chevron-down")}${this._todosOpen ? "Mostrar menos" : `Mais ${items.length - 6}`}</button>` : nothing}
        <div class="panel-foot plain">${icon("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais.</span></div>
      </div>`;
    }

    _renderTodoSheet() {
      const now = new Date(this._now);
      const t = this._todos().items.find((x) => x.key === this._form.key);
      if (!t) return html`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;
      const d = t.undated ? null : dueDate(t);
      return html`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.summary}</h3><p class="ev-cal">${t.listName} · <b>${dueText(t, now)}</b></p></div>
          <button class="icon-btn" @click=${() => this._closeSheet()} aria-label="Fechar">${icon("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${icon("calendar-clock")}<span>${d ? html`Prazo: ${cap(dayLabel(d, now))}${t.allDay ? "" : ` às ${hm(d)}`}` : "Sem prazo"}</span></div>
          <div class="fact">${icon("list-checks")}<span>Lista ${t.listName} (ResolvIA)</span></div>
          ${t.every ? html`<div class="fact">${icon("repeat")}<span>Volta ${everyLabel(t.every)} depois de concluída</span></div>` : nothing}
          ${t.points > 0 && this._scoreOn() ? html`<div class="fact">${icon("award")}<span>${t.points} pontos para quem concluir</span></div>` : nothing}
          ${t.description ? html`<div class="fact notes">${icon("file-text")}<span>${splitLinks(t.description).map((p) => (p.url ? html`<a href=${p.url} target="_blank" rel="noopener noreferrer">${p.url}</a>` : p.text))}</span></div>` : nothing}
        </div>
        <p class="sheet-note">${icon("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${t.done
            ? html`<button class="btn outline" @click=${() => this._closeSheet().then(() => this._todoDone(t, false))}>${icon("undo-2")}Reabrir</button>`
            : html`<button class="btn primary" @click=${() => this._closeSheet().then(() => this._todoDone(t, true))}>${icon("check")}Concluir${t.points > 0 && this._scoreOn() ? ` · +${t.points}` : ""}</button>`}
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

    /** Mais › Integrações › Levar para o ResolvIA: maintenance and routines as tasks in a list. */
    _renderMirrorSettings(lists) {
      const m = this._app("mirror", null) || {};
      const st = this._ix().mirror || {};
      const usable = lists.filter((l) => l.features & TF.CREATE && l.features & TF.UPDATE && !l.unavailable);
      const save = (ch) => this._saveAppPrefs({ mirror: { list: m.list || null, maint: !!m.maint, routine: !!m.routine, ...ch } });
      const sw = (on, label, hint, key) => html`<div class="row switch-row">
        <div class="grow"><div class="label">${label}</div><div class="hint">${hint}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!!on} ?disabled=${!m.list} @change=${(e) => save({ [key]: e.target.checked })} aria-label=${label} /><span class="track"></span></label>
      </div>`;
      const active = m.list && (m.maint || m.routine);
      return html`<div class="sub-overline" id="levar">Levar para o ResolvIA</div>
        <p class="sub-lead">Cada manutenção e cada rotina da casa vira uma tarefa numa lista do ResolvIA, com a próxima data e os pontos. Concluir lá vale como feito aqui (os pontos vão para quem concluiu) e a tarefa volta com a data seguinte.</p>
        <label class="field" style="margin:6px 0 4px">
          <span class="flabel">Lista</span>
          <select class="select" aria-label="Lista do ResolvIA" @change=${(e) => save({ list: e.target.value || null })}>
            <option value="" ?selected=${!m.list}>Nenhuma (não levar)</option>
            ${usable.map((l) => html`<option value=${l.id} ?selected=${m.list === l.id}>${l.name}${l.features & TF.DUE_DATE ? "" : " (sem prazo)"}</option>`)}
            ${m.list && !usable.some((l) => l.id === m.list) ? html`<option value=${m.list} selected>${m.list} (não encontrada)</option>` : nothing}
          </select>
        </label>
        ${sw(m.maint, "Manutenções", "A próxima data de cada manutenção.", "maint")}
        ${sw(m.routine, "Rotina da casa", "A próxima vez de cada rotina.", "routine")}
        ${st.problem
          ? html`<p class="data-note">${st.problem}</p>`
          : active
            ? html`<p class="sub-lead with-icon">${icon("circle-check")}<span>${plural(st.count || 0, "tarefa", "tarefas")} na lista. Elas não se repetem no card de Tarefas daqui.</span></p>`
            : nothing}`;
    }

    _renderTodosSettings() {
      const { lists, app } = this._todosAll();
      const owners = this._app("todo_owner", null) || {};
      const people = this._todoOwners();
      const setOwner = (id, name) => {
        const next = { ...owners };
        if (name) next[id] = name;
        else delete next[id];
        this._saveAppPrefs({ todo_owner: Object.keys(next).length ? next : null });
      };
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
        ${this._secHead("list-checks", "Tarefas do ResolvIA")}
        <div class="ai-state ${state.tone}"><span class="dot"></span><div><b>${state.title}</b><span>${state.text}</span></div></div>
        ${lists.length
          ? html`<div class="row switch-row">
                <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As tarefas aparecem no dia do prazo (ou no horário, se tiver), além do card da Agora.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar", false)} @change=${(e) => this._saveAppPrefs({ todo_off_calendar: e.target.checked ? null : true })} aria-label="Tarefas no calendário" /><span class="track"></span></label>
              </div>
              <div class="row switch-row">
                <div class="grow"><div class="label">Tarefas sem prazo na Agora</div><div class="hint">Mostra também as tarefas pendentes sem data (e as das listas que não aceitam prazo), depois das que têm prazo.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!!this._app("todo_undated", false)} @change=${(e) => this._saveAppPrefs({ todo_undated: e.target.checked ? true : null })} aria-label="Tarefas sem prazo na Agora" /><span class="track"></span></label>
              </div>
              <div class="sub-overline">Listas</div>
              ${this._todoOwners().length ? html`<p class="sub-lead">Escolha quais listas entram e, se quiser, de quem é cada uma: a lista de uma pessoa só aparece no CronologIA dela (na Agora, no calendário e no Novo › Tarefa). Num aparelho sem pessoa da casa, aparece tudo.</p>` : nothing}`
          : nothing}
        ${repeat(
          lists,
          (l) => l.id,
          (l) => html`<div class="row switch-row ${l.hidden ? "off" : ""}">
            <span class="tile" style=${colorVars(colorById(TODO_COLOR), this._dark)}>${icon("list-checks")}</span>
            <div class="grow"><div class="label">${l.name}</div><div class="hint">${l.info === "integracao" ? "não aceita prazo (as datas são da integração)" : l.info === "resolvia" ? "prazos desligados no ResolvIA" : l.due ? `${plural(l.due, "tarefa com prazo", "tarefas com prazo")}${l.overdue ? ` · ${plural(l.overdue, "atrasada", "atrasadas")}` : ""}` : "nenhuma com prazo"}</div>
              ${people.length && !l.hidden
                ? html`<div class="owner-pick" role="radiogroup" aria-label="De quem é ${l.name}">
                    <span class="op-l">De quem é</span>
                    ${["", ...people].map((p) => {
                      const on = p ? foldText(owners[l.id] || "") === foldText(p) : !owners[l.id];
                      return html`<button class=${on ? "on" : ""} role="radio" aria-checked=${on ? "true" : "false"} @click=${() => setOwner(l.id, p)}>${p || "Todos"}</button>`;
                    })}
                  </div>`
                : nothing}
            </div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${!l.hidden} @change=${(e) => toggle(l.id, e.target.checked)} aria-label="Mostrar ${l.name}" /><span class="track"></span></label>
          </div>`,
        )}
        ${lists.length ? this._renderMirrorSettings(lists) : nothing}
        ${lists.length && this._writable().length
          ? html`<button class="row" @click=${() => this._openBring()}>
              <span class="tile" style=${colorVars(this._accent(), this._dark)}>${icon("download")}</span>
              <span class="grow"><div class="label">Trazer uma lista para o CronologIA</div><div class="hint" style="white-space:normal">Cada tarefa vira uma Rotina da casa, com os pontos e a repetição, e sai do ResolvIA.</div></span>
              ${icon("chevron-right")}
            </button>`
          : nothing}
      </div>`;
    }

    // ------------------------------------------------------------ Trazer uma lista do ResolvIA

    _openBring() {
      this._openSheet("bring", { step: "pick", listId: null, preview: null, chosen: [], cal: this._kindCal("rotina"), error: null, busy: false });
    }

    async _bringLoad(listId) {
      this._setForm({ listId, step: "loading", error: null });
      try {
        const p = await this.api.bringPreview(listId);
        if (this._sheet !== "bring") return;
        this._setForm({ step: "review", preview: p, chosen: p.items.filter((i) => !i.exists).map((i) => i.uid) });
      } catch (err) {
        this._setForm({ step: "pick", error: err.message });
      }
    }

    async _bringRun() {
      const f = this._form;
      if (!f.chosen.length || f.busy) return;
      this._setForm({ busy: true, error: null });
      try {
        const r = await this.api.bring(f.listId, f.cal, f.chosen, true);
        const cal = this._cal(r.calendar);
        await this._closeSheet();
        this._haptic("success");
        this._showToast(`${plural(r.created, "rotina criada", "rotinas criadas")}${cal ? ` em ${clip(cal.name, 18)}` : ""}${r.removed ? " · tiradas do ResolvIA" : ""}`);
      } catch (err) {
        if (this._sheet === "bring") this._setForm({ busy: false, error: err.message });
      }
    }

    _renderBringSheet() {
      const f = this._form;
      const now = new Date(this._now);
      const head = (title, back) => html`<div class="sheet-head">
        ${back ? html`<button class="icon-btn back" @click=${back} aria-label="Voltar">${icon("chevron-left")}</button>` : nothing}
        <h3 class="display">${title}</h3>
        <button class="icon-btn" @click=${() => this._closeSheet()} aria-label="Fechar">${icon("x")}</button>
      </div>`;
      const error = f.error ? html`<div class="imp-error">${icon("circle-alert")}<span>${f.error}</span></div>` : nothing;
      if (f.step === "loading") return html`${head("Trazer do ResolvIA")}<div class="imp-loading"><span class="spin">${icon("loader-circle")}</span><span>Lendo a lista…</span></div>`;
      if (f.step === "review" && f.preview) {
        const p = f.preview;
        const on = new Set(f.chosen);
        const toggle = (uid) => this._setForm({ chosen: on.has(uid) ? f.chosen.filter((x) => x !== uid) : [...f.chosen, uid] });
        const writable = this._writable();
        const when = (it) => {
          const d = fromYmd(it.date);
          const day = dayDiff(d, now) === 0 ? "hoje" : dayLabel(d, now, { long: false, cap: false });
          return `${it.every ? `a partir de ${day}` : day}${it.time ? ` às ${it.time}` : ""}`;
        };
        return html`
          ${head(p.name, () => this._setForm({ step: "pick", preview: null, error: null }))}
          <p class="sheet-note top">Cada tarefa marcada vira uma <b>Rotina da casa</b>: as que repetem no ResolvIA voltam N dias depois de feitas; as outras são de uma vez só. ${p.canDelete ? "Depois, elas saem da lista do ResolvIA." : "Essa lista não deixa apagar: as tarefas ficam lá também."}</p>
          ${p.items.length
            ? html`<div class="bring-list">
                ${p.items.map(
                  (it) => html`<button class="bring-row ${on.has(it.uid) ? "" : "off"}" role="checkbox" aria-checked=${on.has(it.uid) ? "true" : "false"} @click=${() => toggle(it.uid)}>
                    <span class="chk sq ${on.has(it.uid) ? "on" : ""}">${on.has(it.uid) ? icon("check") : nothing}</span>
                    <span class="bring-tx"><b>${it.summary}</b><small>${[it.points > 0 ? `+${it.points}` : "", it.every ? `volta ${plural(it.every, "dia", "dias")} depois de feita` : "só uma vez", when(it), it.exists ? "já existe uma rotina com esse nome" : ""].filter(Boolean).join(" · ")}</small></span>
                  </button>`,
                )}
              </div>`
            : html`<p class="empty-line">Nenhuma tarefa para trazer nessa lista.</p>`}
          ${p.items.length > 1
            ? html`<div class="bring-all"><button class="text-btn" @click=${() => this._setForm({ chosen: f.chosen.length === p.items.length ? [] : p.items.map((i) => i.uid) })}>${f.chosen.length === p.items.length ? "Desmarcar todas" : "Marcar todas"}</button></div>`
            : nothing}
          ${writable.length > 1
            ? html`<div class="field"><span class="flabel">Calendário das rotinas</span>
                <div class="chip-row">${writable.map((c) => html`<button class="pick list ${f.cal === c.id ? "on" : ""}" style=${colorVars(c.color, this._dark)} @click=${() => this._setForm({ cal: c.id })}><span class="dot"></span><span>${clip(c.name, 22)}</span></button>`)}</div>
              </div>`
            : nothing}
          ${error}
          <div class="sheet-actions">
            <button class="btn primary" ?disabled=${!f.chosen.length || f.busy} @click=${() => this._bringRun()}>${icon("download")}${f.busy ? "Trazendo…" : f.chosen.length ? `Trazer ${plural(f.chosen.length, "tarefa", "tarefas")}` : "Nenhuma marcada"}</button>
          </div>`;
      }
      const lists = this._todosAll().lists.filter((l) => !l.unavailable);
      return html`
        ${head("Trazer do ResolvIA")}
        <p class="sheet-note top">Escolha a lista. Você revisa as tarefas antes de trazer.</p>
        <div class="bring-lists">
          ${lists.map(
            (l) => html`<button class="row" @click=${() => this._bringLoad(l.id)}>
              <span class="tile" style=${colorVars(colorById(TODO_COLOR), this._dark)}>${icon("list-checks")}</span>
              <span class="grow"><div class="label">${l.name}</div><div class="hint">${plural(l.open, "tarefa pendente", "tarefas pendentes")}</div></span>
              ${icon("chevron-right")}
            </button>`,
          )}
        </div>
        ${error}`;
    }
  };
