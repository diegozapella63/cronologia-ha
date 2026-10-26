// Recompensas: the scoreboard tab. Chores and maintenance with points, who did
// them, the period's prize and the history. Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG, repeat } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { foldText } from "../../cronologia/rootfs/app/lib/kinds.js";
import { PERIODS, periodLabel } from "../../cronologia/rootfs/app/lib/score.js";
import { colorById, colorVars, plural, clip, cap, ymd, hm, fromYmd, startOfDay, addDays, dayDiff, dateShort, WEEKDAYS } from "./util.js";
import { afterSub } from "./models.js";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

const P_COLORS = ["turquesa", "rosa", "laranja", "lilas", "verde", "azul", "ouro", "coral", "menta", "indigo"];
const initial = (name) => (name || "?").trim().charAt(0).toUpperCase();
const NOUN = { semana: "semana", quinzena: "quinzena", mes: "mês" };
const THIS = { semana: "desta semana", quinzena: "desta quinzena", mes: "deste mês" };
const NEXT = { semana: "da próxima semana", quinzena: "da próxima quinzena", mes: "do próximo mês" };
const LAST = { semana: "Semana passada", quinzena: "Quinzena passada", mes: "Mês passado" };
// Starting points for the list of deméritos (tap to add).
const DEMERIT_IDEAS = [
  ["Toalha molhada na cama", 5],
  ["Louça suja na pia", 5],
  ["Roupa no chão", 3],
  ["Luz acesa sem ninguém", 2],
];
const DEMERIT_PICKS = [2, 3, 5, 10, 20];
const IN = { semana: "nesta semana", quinzena: "nesta quinzena", mes: "neste mês" };
const newId = () => Math.random().toString(36).slice(2, 10).padEnd(8, "0");

export const RewardsMixin = (Base) =>
  class extends Base {
    // ------------------------------------------------------------ data

    _score() {
      return this._ix().score || null;
    }

    _scoreOn() {
      const s = this._score();
      return !!(s && s.enabled && s.participants.length);
    }

    _participant(name) {
      const s = this._score();
      if (!s || !name) return "";
      const f = foldText(name);
      return s.participants.find((p) => foldText(p) === f || foldText(p).split(" ")[0] === f.split(" ")[0]) || "";
    }

    _pColor(name) {
      const s = this._score();
      const i = s ? Math.max(0, s.participants.findIndex((p) => foldText(p) === foldText(name))) : 0;
      return colorById(P_COLORS[i % P_COLORS.length]);
    }

    _me() {
      return (this._user && this._user.person) || "";
    }

    // ------------------------------------------------------------ who did it

    /** Runs `run(who)`: the person using the app when they are on the scoreboard, otherwise asks. */
    _withWho(points, title, run) {
      if (!this._scoreOn() || !(points > 0)) return run("");
      const me = this._participant(this._me());
      if (me) return run(me);
      return this._openSheet("who", { points, title, run });
    }

    _doneToast(it, who, points, { reassignKey, undo }) {
      const others = this._scoreOn() && who && points > 0 ? this._score().participants.filter((p) => foldText(p) !== foldText(who)) : [];
      const text = who && points > 0 ? `Feito por ${who} · +${points}` : `${clip(it.summary, 26)}: feito`;
      if (others.length === 1 && reassignKey) {
        const other = others[0];
        this._showToast(text, { label: `Foi ${other}`, run: () => this.api.scoreReassign(reassignKey, other).then(() => this._showToast(`Pontos para ${other}`)).catch((err) => this._showToast(err.message)) });
      } else if (others.length > 1 && reassignKey) {
        this._showToast(text, { label: "Trocar", run: () => this._openSheet("who", { points, title: it.summary, run: (w) => this.api.scoreReassign(reassignKey, w).then(() => this._closeSheet()) }) });
      } else this._showToast(text, undo ? { label: "Desfazer", run: undo } : null);
    }

    /** Chore (or repeating maintenance) done. */
    _markDone(it, kind) {
      return this._withWho(it.points || 0, it.summary, async (who) => {
        if (this._sheet === "who") await this._closeSheet();
        try {
          await this.api.setCheck(it.key, true, kind, who);
          this._haptic("success");
          this._doneToast(it, who, it.points || 0, { reassignKey: it.key, undo: () => this.api.setCheck(it.key, false, kind).catch((err) => this._showToast(err.message)) });
        } catch (err) {
          this._showToast(`Não consegui marcar: ${err.message}`);
        }
      });
    }

    /** Maintenance done: moves to the next date (and the points go to who did it). */
    _maintDone(m) {
      return this._withWho(m.points || 0, m.summary, async (who) => {
        if (this._sheet) await this._closeSheet();
        try {
          const r = await this.api.maintDone(m.cal, m.uid, who);
          this._haptic("success");
          const next = r && r.next ? `Próxima em ${dateShort(fromYmd(r.next), new Date(this._now))}` : "";
          if (r && r.key) this._doneToast(m, who, m.points, { reassignKey: r.key });
          else this._showToast(next ? `Feito. ${next}` : "Feito", r && r.undo ? { label: "Desfazer", run: () => this.api.maintUndo(m.cal, m.uid).catch((err) => this._showToast(err.message)) } : null);
        } catch (err) {
          this._showToast(`Não consegui: ${err.message}`);
        }
      });
    }

    _renderWhoSheet() {
      const f = this._form;
      const s = this._score() || { participants: [] };
      return html`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${clip(f.title || "", 40)}${f.points ? html` · <b>+${f.points} pontos</b>` : nothing}</p>
        <div class="who-grid">
          ${s.participants.map(
            (p) => html`<button class="who-btn" style=${colorVars(this._pColor(p), this._dark)} @click=${() => f.run(p)}>
              <span class="avatar xl">${initial(p)}</span><b>${p}</b>
            </button>`,
          )}
        </div>
        <button class="btn outline" style="width:100%" @click=${() => f.run("")}>Ninguém do placar (sem pontos)</button>`;
    }

    // ------------------------------------------------------------ the tab

    _renderRewards() {
      const s = this._score();
      if (!s || !s.enabled || !s.participants.length) return this._renderRewardsSetup();
      const now = new Date(this._now);
      const cur = s.current;
      const left = dayDiff(fromYmd(cur.end), now);
      const closes = left <= 1 ? "fecha hoje à meia-noite" : `fecha em ${plural(left, "dia", "dias")}`;
      const lead = s.leader;
      const total = s.rows.reduce((a, r) => a + r.points, 0);
      return html`<section class="page rewards">
        ${this._renderHead("Recompensas", { text: `${cap(NOUN[s.period])} de ${cur.label} · ${closes}` })}
        ${this._renderLastResult(s)}
        <div class="panel board">
          ${s.rows.length === 2 ? this._renderDuel(s, total) : this._renderRanking(s)}
          <div class="board-foot">${lead ? html`${icon("crown")}<span><b>${lead}</b> na frente${s.rows[1] ? ` por ${plural(s.rows[0].points - s.rows[1].points, "ponto", "pontos")}` : ""}</span>` : html`<span>${total ? "Empatados" : "Ninguém pontuou ainda"}</span>`}</div>
        </div>
        ${this._renderPrize(s)}
        ${s.manual ? this._renderToScore() : nothing}
        ${this._renderDemerits(s)}
        ${this._renderFeed(s)}
        ${this._renderHistory(s)}
      </section>`;
    }

    _renderDuel(s, total) {
      const [a, b] = s.participants.map((p) => s.rows.find((r) => r.name === p) || { name: p, points: 0, count: 0, demerits: 0 });
      // with deméritos a side can go below zero: measure both from the lowest
      const lo = Math.min(0, a.points, b.points);
      const span = a.points - lo + (b.points - lo);
      const share = span ? (a.points - lo) / span : 0.5;
      const side = (r, right) => html`<div class="duel-side ${right ? "right" : ""} ${s.leader === r.name ? "lead" : ""}" style=${colorVars(this._pColor(r.name), this._dark)}>
        <span class="avatar xl">${initial(r.name)}${s.leader === r.name ? html`<span class="crown">${icon("crown")}</span>` : nothing}</span>
        <b class="duel-name">${r.name}</b>
        <span class="duel-pts">${r.points}</span>
        <small>${plural(r.count, "tarefa", "tarefas")}${r.demerits ? html` · <span class="neg-text">${plural(r.demerits, "demérito", "deméritos")}</span>` : nothing}</small>
      </div>`;
      return html`<div class="duel">
          ${side(a, false)}
          <span class="duel-x">×</span>
          ${side(b, true)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(b.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${b.name} ${b.points} pontos">
          <span style="width:${(share * 100).toFixed(1)}%"></span>
        </div>`;
    }

    _renderRanking(s) {
      const max = Math.max(1, ...s.rows.map((r) => r.points));
      const bar = (r) => Math.max(0, (r.points / max) * 100).toFixed(1);
      return html`<div class="ranking">
        ${s.rows.map(
          (r, i) => html`<div class="rank-row ${s.leader === r.name ? "lead" : ""}" style=${colorVars(this._pColor(r.name), this._dark)}>
            <span class="rank-n">${i + 1}</span><span class="avatar">${initial(r.name)}</span>
            <span class="rank-main"><b>${r.name}</b><span class="rank-bar"><i style="width:${bar(r)}%"></i></span></span>
            <span class="rank-pts">${r.points}</span>
          </div>`,
        )}
      </div>`;
    }

    _renderLastResult(s) {
      const h = s.history && s.history[0];
      if (!h || h.delivered) return nothing;
      const now = new Date(this._now);
      if (dayDiff(now, fromYmd(h.end)) > 14) return nothing;
      const score = Object.values(h.totals || {}).join(" × ");
      return html`<div class="result-card ${h.winner ? "" : "tie"}" style=${h.winner ? colorVars(this._pColor(h.winner), this._dark) : ""}>
        <span class="result-ic">${icon("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${LAST[s.period]} · ${periodLabel(h.start, h.end, s.period)}</span>
          <b>${h.winner ? `${h.winner} venceu` : "Empate"} <span class="result-score">${score}</span></b>
          ${h.reward ? html`<small>${h.winner ? "Prêmio" : "Prêmio em jogo"}: ${h.reward}</small>` : nothing}
        </div>
        ${h.winner && h.reward ? html`<button class="dose-btn agora" @click=${() => this._setDelivered(h.key, true)}>Entregue</button>` : html`<button class="icon-btn" aria-label="Fechar" @click=${() => this._setDelivered(h.key, true)}>${icon("x")}</button>`}
      </div>`;
    }

    /** Prize of the period: one for whoever wins, or one for each person. */
    _renderPrize(s) {
      const cur = s.current;
      const nx = s.next;
      const per = (p) => Object.keys(p.prizes || {}).length > 0;
      const prizeOf = (p, n) => (p.prizes && p.prizes[n]) || p.reward || "";
      const curSet = per(cur) || !!cur.reward;
      const nextSet = per(nx) || !!nx.reward;
      return html`<div class="panel prize ${curSet ? "set" : ""}">
        <div class="prize-head">
          <span class="prize-ic">${icon("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">${per(cur) ? "Prêmios" : "Prêmio"} ${THIS[s.period]}</span>
            ${per(cur) ? nothing : cur.reward ? html`<b>${cur.reward}</b>` : html`<span class="prize-empty">Ainda sem prêmio. Pode ser um para todos ou um para cada pessoa.</span>`}
          </div>
          <button class="text-btn" @click=${() => this._openPrize("current")}>${curSet ? "Mudar" : "Definir"}</button>
        </div>
        ${per(cur)
          ? html`<div class="prize-people">
              ${s.participants.map((n) => {
                const t = prizeOf(cur, n);
                return html`<div class="prize-person ${s.leader === n ? "lead" : ""}" style=${colorVars(this._pColor(n), this._dark)}>
                  <span class="avatar sm2">${initial(n)}</span>
                  <span class="pp-tx"><small>Se ${n} vencer</small>${t ? html`<b>${t}</b>` : html`<i>ainda livre</i>`}</span>
                  ${s.leader === n ? html`<span class="pp-lead">${icon("crown")}</span>` : nothing}
                </div>`;
              })}
            </div>`
          : nothing}
        <div class="prize-next">
          <span>${icon("gift")}<span>${per(nx)
            ? html`${cap(NEXT[s.period].replace(/^d[ao] /, ""))}: <b>${s.participants.map((n) => `${n}: ${prizeOf(nx, n) || "livre"}`).join(" · ")}</b>`
            : nx.reward
              ? html`Prêmio ${NEXT[s.period]}: <b>${nx.reward}</b>`
              : `Prêmio ${NEXT[s.period]} ainda livre`}</span></span>
          <button class="text-btn" @click=${() => this._openPrize("next")}>${nextSet ? "Mudar" : "Definir"}</button>
        </div>
      </div>`;
    }

    _openPrize(which) {
      const s = this._score();
      const p = which === "next" ? s.next : s.current;
      const per = p.prizes || {};
      const each = Object.keys(per).length > 0;
      this._openSheet("prize", {
        which,
        key: p.key,
        label: p.label,
        mode: each ? "cada" : "todos",
        shared: p.reward || "",
        per: Object.fromEntries(s.participants.map((n) => [n, per[n] || (each ? "" : p.reward || "")])),
      });
    }

    async _savePrize() {
      const f = this._form;
      const shared = f.mode === "todos" ? (f.shared || "").trim() : "";
      const per = f.mode === "cada" ? Object.fromEntries(Object.entries(f.per || {}).map(([n, t]) => [n, (t || "").trim()]).filter(([, t]) => t)) : {};
      await this._closeSheet();
      try {
        await this.api.scorePrizes(f.key, shared, per);
        this._haptic("success");
        this._showToast(shared || Object.keys(per).length ? (Object.keys(per).length ? "Prêmios salvos" : "Prêmio salvo") : "Prêmio tirado");
      } catch (err) {
        this._showToast(`Não consegui salvar: ${err.message}`);
      }
    }

    _renderPrizeSheet() {
      const f = this._form;
      const s = this._score();
      const examples = ["Ex.: jantar fora", "Ex.: massagem", "Ex.: escolher o filme", "Ex.: folga da louça"];
      return html`${this._sheetHead(`Prêmio ${f.which === "next" ? NEXT[s.period] : THIS[s.period]}`)}
        <p class="sheet-note top">${cap(f.label || "")}</p>
        <div class="seg" role="radiogroup" aria-label="Tipo de prêmio">
          ${[
            ["todos", "O mesmo para todos"],
            ["cada", "Um para cada pessoa"],
          ].map(([k, l]) => html`<button class=${f.mode === k ? "on" : ""} role="radio" aria-checked=${f.mode === k ? "true" : "false"} @click=${() => this._setForm({ mode: k })}>${l}</button>`)}
        </div>
        ${f.mode === "todos"
          ? html`<label class="field" style="margin-top:14px">
              <span class="flabel">Quem fizer mais pontos ganha</span>
              <input type="text" .value=${f.shared || ""} placeholder="Ex.: escolher o restaurante de domingo" maxlength="200" @input=${(e) => this._setForm({ shared: e.target.value })} />
            </label>`
          : html`${s.participants.map(
                (n, i) => html`<label class="field" style=${i ? "" : "margin-top:14px"}>
                  <span class="flabel">Se ${n} vencer</span>
                  <input type="text" .value=${(f.per && f.per[n]) || ""} placeholder=${examples[i % examples.length]} maxlength="200" @input=${(e) => this._setForm({ per: { ...this._form.per, [n]: e.target.value } })} />
                </label>`,
              )}
              <span class="field-hint">${icon("info")}<span>Quem vencer ganha o seu prêmio. Empate: ninguém leva.</span></span>`}
        <div class="sheet-actions">
          <button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>
          <button class="btn primary" @click=${() => this._savePrize()}>Salvar</button>
        </div>`;
    }

    async _setDelivered(period, delivered) {
      try {
        await this.api.scoreDelivered(period, delivered);
        if (delivered) this._haptic("success");
      } catch (err) {
        this._showToast(err.message);
      }
    }

    /** Today's chores and maintenance that give points. */
    _renderToScore() {
      const ix = this._ix();
      const now = new Date(this._now);
      const chores = (ix.routines || []).filter((r) => r.points > 0);
      const maint = (ix.maint || []).filter((m) => m.points > 0 && m.state !== "ok");
      // ResolvIA tasks with points that are due (or were done) today
      const tasks = ((ix.todos && ix.todos.items) || []).filter((t) => t.points > 0 && (t.undated || (t.done ? t.days === 0 : t.overdue || t.days === 0)));
      const done = chores.filter((r) => r.done).length + tasks.filter((t) => t.done).length;
      const total = chores.length + tasks.length;
      return html`<div class="panel chores score-today">
        <div class="chores-head"><span class="overline">Para pontuar hoje</span>${total ? html`<small>${done} de ${total}</small>` : nothing}</div>
        ${repeat(chores, (r) => r.key, (r) => {
          const by = r.done && r.done.by;
          return html`<div class="chore ${r.done ? "done" : ""}">
            <button class="chk ${r.done ? "on" : ""}" @click=${() => (r.done ? this._undoCheck(r, "rotina") : this._markDone(r, "rotina"))} aria-label="${r.done ? "Desmarcar" : "Marcar"} ${r.summary}">${r.done ? icon("check") : nothing}</button>
            <button class="chore-tx" @click=${() => this._openIndexItem(r)}><b>${r.summary}</b><small>${r.after ? afterSub(r, new Date(this._now)) : [r.yesterday ? "ficou de ontem" : r.time, r.done ? `feito por ${by || "alguém"}` : r.who].filter(Boolean).join(" · ") || "hoje"}</small></button>
            <span class="pts ${r.done ? "got" : ""}" style=${by ? colorVars(this._pColor(by), this._dark) : ""}>+${r.points}</span>
          </div>`;
        })}
        ${repeat(
          tasks,
          (t) => t.key,
          (t) => html`<div class="chore ${t.done ? "done" : ""}">
            <button class="chk sq ${t.done ? "on" : ""}" @click=${() => this._todoDone(t, !t.done)} aria-label="${t.done ? "Reabrir" : "Concluir"} ${t.summary}">${t.done ? icon("check") : nothing}</button>
            <button class="chore-tx" @click=${() => this._openSheet("todo", { key: t.key })}><b>${t.summary}</b><small>${t.undated ? "sem prazo" : t.overdue ? "atrasada" : "hoje"} · ${t.listName} · ResolvIA</small></button>
            <span class="pts ${t.done ? "got" : ""}">+${t.points}</span>
          </div>`,
        )}
        ${repeat(
          maint,
          (m) => m.key,
          (m) => html`<div class="chore maint-score">
            <span class="chk wrench ${m.state}">${icon("wrench")}</span>
            <button class="chore-tx" @click=${() => this._openIndexItem(m)}><b>${m.summary}</b><small>${m.days < 0 ? `venceu há ${plural(-m.days, "dia", "dias")}` : m.days === 0 ? "é hoje" : `em ${plural(m.days, "dia", "dias")}`} · manutenção</small></button>
            <button class="pts btn-pts" @click=${() => this._maintDone(m)}>+${m.points}</button>
          </div>`,
        )}
        ${!chores.length && !maint.length && !tasks.length
          ? html`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Novo › Rotina</b> ou <b>Manutenção</b>, ou a uma tarefa no ResolvIA.</p>`
          : nothing}
        <div class="score-actions">
          <button class="btn outline sm" @click=${() => this._openKindForm({ kind: "rotina" })}>${icon("plus")}Tarefa com pontos</button>
          <button class="btn outline sm" @click=${() => this._openSheet("extra", { who: this._participant(this._me()) || "", points: 10, title: "" })}>${icon("award")}Pontos avulsos</button>
        </div>
      </div>`;
    }

    // ------------------------------------------------------------ deméritos

    _demerits() {
      return this._app("demerits", null) || [];
    }

    async _saveDemerits(list) {
      await this._saveAppPrefs({ demerits: list.length ? list : null });
    }

    async _addDemerit(title, points) {
      await this._saveDemerits([...this._demerits(), { id: newId(), title, points }]);
      this._haptic("light");
      this._showToast(`Demérito criado: ${clip(title, 28)} · −${points}`);
    }

    /** Tapping someone on a demérito: takes the points, with Desfazer. */
    async _markDemerit(d, who) {
      try {
        const r = await this.api.scoreDemerit(d.id, who);
        this._haptic("warning");
        this._showToast(`−${d.points} para ${who}: ${clip(d.title, 24)}`, {
          label: "Desfazer",
          run: () => this.api.scoreRemove(r.key).catch((err) => this._showToast(err.message)),
        });
      } catch (err) {
        this._showToast(err.message);
      }
    }

    _openDemeritForm(d = null) {
      this._openSheet("demerit", d ? { id: d.id, title: d.title, points: d.points, mode: "edit" } : { id: null, title: "", points: 5, mode: "add" });
    }

    async _saveDemeritForm() {
      const f = this._form;
      const title = (f.title || "").trim();
      const points = Math.round(Math.abs(Number(f.points) || 0));
      if (!title || points < 1) return;
      const list = this._demerits();
      const next = f.id ? list.map((x) => (x.id === f.id ? { ...x, title, points } : x)) : [...list, { id: newId(), title, points }];
      await this._closeSheet();
      await this._saveDemerits(next);
      this._showToast(f.id ? "Demérito salvo" : `Demérito criado: ${clip(title, 28)} · −${points}`);
    }

    _deleteDemerit() {
      const f = this._form;
      this._openSheet("confirm", {
        title: "Apagar este demérito?",
        text: `“${clip(f.title || "", 40)}” sai da lista. Os pontos já descontados continuam no placar (dá para tirar cada um no histórico de pontos).`,
        label: "Apagar",
        danger: true,
        run: async () => {
          await this._closeSheet();
          await this._saveDemerits(this._demerits().filter((x) => x.id !== f.id));
          this._showToast("Demérito apagado");
        },
      });
    }

    /** Recompensas › Deméritos: only the existing ones, to mark who did it (the list is set up in Mais › Placar). */
    _renderDemerits(s) {
      const list = this._demerits();
      if (!list.length) return nothing;
      // how many times each one was marked this period, by person
      const marks = (d) => {
        const by = {};
        for (const e of s.entries) if (e.kind === "demerito" && String(e.key).startsWith(`demerito|${d.id}|`)) by[e.who] = (by[e.who] || 0) + 1;
        return Object.entries(by).map(([w, n]) => `${w} ${n}×`).join(" · ");
      };
      const total = s.entries.filter((e) => e.kind === "demerito").length;
      return html`<div class="panel chores demerits" id="demeritos">
        <div class="chores-head"><span class="overline">Deméritos</span><small>${total ? `${plural(total, "vez", "vezes")} ${IN[s.period]}` : "tiram pontos"}</small></div>
        <p class="dm-lead">Toque em quem foi para descontar.</p>
        ${repeat(
          list,
          (d) => d.id,
          (d) => {
            const m = marks(d);
            return html`<div class="demerit">
              <div class="dm-top">
                <div class="dm-tx"><b>${d.title}</b>${m ? html`<small>${m} ${IN[s.period]}</small>` : nothing}</div>
                <span class="pts neg">−${d.points}</span>
              </div>
              <div class="dm-who">
                ${s.participants.map(
                  (p) => html`<button class="dm-btn" style=${colorVars(this._pColor(p), this._dark)} aria-label="${d.title}: descontar de ${p}" @click=${() => this._markDemerit(d, p)}>
                    <span class="avatar sm2">${initial(p)}</span><span>${p}</span>
                  </button>`,
                )}
              </div>
            </div>`;
          },
        )}
      </div>`;
    }

    /** Mais › Placar › Deméritos: create, change and delete. */
    _renderDemeritsSettings() {
      const list = this._demerits();
      return html`<div class="panel chores demerits-set" id="demeritos-ajustes">
        ${this._secHead("thumbs-down", "Deméritos", `O que tira pontos de quem fizer. Em Recompensas, toque em quem foi para descontar.${list.length ? ` ${plural(list.length, "demérito", "deméritos")} na lista.` : ""}`)}
        ${list.length
          ? repeat(
              list,
              (d) => d.id,
              (d) => html`<button class="demerit dm-edit" @click=${() => this._openDemeritForm(d)}>
                <span class="dm-tx"><b>${d.title}</b></span>
                <span class="pts neg">−${d.points}</span>
                ${icon("chevron-right")}
              </button>`,
            )
          : html`<div class="chip-row dm-ideas">${DEMERIT_IDEAS.map(([t, n]) => html`<button class="pick" @click=${() => this._addDemerit(t, n)}>${icon("plus")}<span>${t} −${n}</span></button>`)}</div>`}
        <div class="score-actions">
          <button class="btn outline sm" @click=${() => this._openDemeritForm()}>${icon("plus")}Novo demérito</button>
        </div>
      </div>`;
    }

    _renderDemeritSheet() {
      const f = this._form;
      const n = Number(f.points) || 0;
      const custom = f.custom || (n > 0 && !DEMERIT_PICKS.includes(n));
      return html`${this._sheetHead(f.mode === "edit" ? "Editar demérito" : "Novo demérito")}
        <label class="field">
          <span class="flabel">O que foi</span>
          <input type="text" .value=${f.title || ""} placeholder="Ex.: Toalha molhada na cama" maxlength="80" @input=${(e) => this._setForm({ title: e.target.value })} />
        </label>
        <div class="field">
          <span class="flabel">Quantos pontos tira</span>
          <div class="chip-row">
            ${DEMERIT_PICKS.map((v) => html`<button class="pick ${n === v && !custom ? "on" : ""}" @click=${() => this._setForm({ points: v, custom: false })}>−${v}</button>`)}
            <button class="pick ${custom ? "on" : ""}" @click=${() => this._setForm({ custom: true })}>Outro</button>
          </div>
          ${custom
            ? html`<div class="time-row"><input type="number" inputmode="numeric" min="1" max="1000" class="num" .value=${String(n || "")} @input=${(e) => this._setForm({ points: Math.max(0, Math.min(1000, parseInt(e.target.value, 10) || 0)) })} /><span class="tl">pontos</span></div>`
            : nothing}
          <span class="field-hint">${icon("info")}<span>Para marcar de fora do app (uma rotina da Alexa, uma etiqueta NFC), dispare o evento <code>cronologia_demerito</code> com <code>nome</code> e <code>quem</code>.</span></span>
        </div>
        <div class="sheet-actions">
          ${f.mode === "edit" ? html`<button class="btn outline danger" @click=${() => this._deleteDemerit()}>${icon("trash")}Apagar</button>` : html`<button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>`}
          <button class="btn primary" ?disabled=${!(f.title || "").trim() || !(n > 0)} @click=${() => this._saveDemeritForm()}>${f.mode === "edit" ? "Salvar" : "Criar"}</button>
        </div>`;
    }

    _renderFeed(s) {
      if (!s.entries.length) return nothing;
      const now = new Date(this._now);
      const list = this._feedAll ? s.entries : s.entries.slice(0, 8);
      const when = (iso) => {
        const d = new Date(iso);
        const diff = dayDiff(d, now);
        return diff === 0 ? `hoje ${hm(d)}` : diff === -1 ? `ontem ${hm(d)}` : `${WEEKDAYS[d.getDay()].slice(0, 3)} ${hm(d)}`;
      };
      return html`<div class="panel feed">
        <div class="chores-head"><span class="overline">Pontos ${THIS[s.period]}</span><small>${plural(s.entries.length, "registro", "registros")}</small></div>
        ${repeat(
          list,
          (e) => e.key,
          (e) => html`<div class="feed-row" style=${colorVars(this._pColor(e.who), this._dark)}>
            <span class="avatar sm2">${initial(e.who)}</span>
            <span class="feed-tx"><b>${e.title}</b><small>${e.who} · ${when(e.at)}${e.kind === "extra" ? " · avulso" : e.kind === "manutencao" ? " · manutenção" : e.kind === "tarefa" ? " · ResolvIA" : e.kind === "demerito" ? " · demérito" : ""}</small></span>
            <span class="pts ${e.points < 0 ? "neg" : "got"}">${e.points > 0 ? "+" : e.points < 0 ? "−" : ""}${Math.abs(e.points)}</span>
            ${e.kind === "extra" || e.kind === "demerito" ? html`<button class="icon-btn mini" aria-label="Tirar ${e.title}" @click=${() => this._removeExtra(e)}>${icon("x")}</button>` : nothing}
          </div>`,
        )}
        ${s.entries.length > 8 ? html`<button class="add-line" @click=${() => ((this._feedAll = !this._feedAll), this.requestUpdate())}>${icon(this._feedAll ? "chevron-up" : "chevron-down")}${this._feedAll ? "Mostrar menos" : `Ver todos (${s.entries.length})`}</button>` : nothing}
      </div>`;
    }

    async _removeExtra(e) {
      try {
        await this.api.scoreRemove(e.key);
        this._showToast(e.points < 0 ? `${clip(e.title, 26)}: demérito tirado` : `${clip(e.title, 26)}: pontos tirados`);
      } catch (err) {
        this._showToast(err.message);
      }
    }

    _renderExtraSheet() {
      const f = this._form;
      const s = this._score() || { participants: [] };
      return html`${this._sheetHead("Pontos avulsos")}
        <p class="sheet-note top">Para o que não está na agenda: lavou o carro, fez a feira, montou o armário…</p>
        <label class="field"><span class="flabel">O que foi feito</span><input type="text" id="ex-title" .value=${f.title} placeholder="Ex.: Lavou o carro" maxlength="120" @input=${(e) => this._setForm({ title: e.target.value })} /></label>
        <div class="field"><span class="flabel">Quem fez</span>
          <div class="chip-row">${s.participants.map((p) => html`<button class="pick person ${f.who === p ? "on" : ""}" @click=${() => this._setForm({ who: p })}><span class="avatar sm">${initial(p)}</span><span>${p}</span></button>`)}</div>
        </div>
        <div class="field"><span class="flabel">Pontos</span>
          <div class="chip-row">
            ${[5, 10, 20, 30, 50].map((n) => html`<button class="pick ${Number(f.points) === n ? "on" : ""}" @click=${() => this._setForm({ points: n })}>+${n}</button>`)}
            <input type="number" class="num-input" min="-100" max="1000" .value=${String(f.points)} aria-label="Outro valor" @input=${(e) => this._setForm({ points: e.target.value })} />
          </div>
        </div>
        <div class="sheet-actions">
          <button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${!f.who || !(f.title || "").trim() || !Number(f.points)} @click=${() => this._saveExtra()}>Dar ${Number(f.points) || 0} pontos</button>
        </div>`;
    }

    async _saveExtra() {
      const f = this._form;
      try {
        await this.api.scoreExtra(f.who, Number(f.points), f.title.trim());
        this._haptic("success");
        await this._closeSheet();
        this._showToast(`+${f.points} para ${f.who}`);
      } catch (err) {
        this._showToast(err.message);
      }
    }

    _renderHistory(s) {
      const h = s.history || [];
      if (!h.length) return nothing;
      const list = this._histAll ? h : h.slice(0, 5);
      const wins = {};
      for (const x of h) if (x.winner) wins[x.winner] = (wins[x.winner] || 0) + 1;
      return html`<div class="panel history">
        <div class="chores-head"><span class="overline">Histórico</span><small>${Object.entries(wins).map(([n, c]) => `${n} ${c}`).join(" · ") || ""}</small></div>
        ${repeat(
          list,
          (x) => x.key,
          (x) => html`<div class="hist-row">
            <span class="hist-ic ${x.winner ? "" : "tie"}" style=${x.winner ? colorVars(this._pColor(x.winner), this._dark) : ""}>${x.winner ? initial(x.winner) : "="}</span>
            <span class="hist-tx"><b>${x.winner ? `${x.winner} venceu` : "Empate"} · ${Object.values(x.totals || {}).join(" × ")}</b><small>${periodLabel(x.start, x.end, s.period)}${x.reward ? ` · ${x.reward}` : ""}</small></span>
            ${x.reward && x.winner
              ? html`<button class="hist-gift ${x.delivered ? "on" : ""}" aria-pressed=${x.delivered ? "true" : "false"} aria-label="${x.delivered ? "Prêmio entregue" : "Marcar prêmio como entregue"}" @click=${() => this._setDelivered(x.key, !x.delivered)}>${icon(x.delivered ? "check" : "gift")}</button>`
              : nothing}
          </div>`,
        )}
        ${h.length > 5 ? html`<button class="add-line" @click=${() => ((this._histAll = !this._histAll), this.requestUpdate())}>${icon(this._histAll ? "chevron-up" : "chevron-down")}${this._histAll ? "Mostrar menos" : `Ver tudo (${h.length})`}</button>` : nothing}
      </div>`;
    }

    _scorePrefs(changes) {
      const s = this._score() || {};
      const cur = { enabled: !!s.enabled, participants: s.participants || [], period: s.period || "semana", anchor: s.anchor || ymd(new Date()), notify: s.notify !== false, manual: !!s.manual };
      return this._saveAppPrefs({ score: { ...cur, ...changes } });
    }

    /** Mais › Placar: who plays, when the period closes, the result on the phones. */
    _renderScoreSettings() {
      const s = this._score();
      if (!s || !s.enabled || !s.participants.length) {
        return html`<div class="panel score-set" id="placar">
          ${this._secHead("trophy", "Ajustes do placar")}
          <div class="ai-state off"><span class="dot"></span><div><b>Placar desligado</b><span>Ligue em Recompensas: escolha quem participa e de quanto em quanto tempo o placar fecha.</span></div></div>
          <div class="score-actions" style="padding-left:0;padding-right:0;border:0"><button class="btn primary sm" @click=${() => this._go("/recompensas", true)}>${icon("trophy")}Ir para Recompensas</button></div>
        </div>`;
      }
      return html`${this._renderScoreSettingsPanel(s)} ${this._renderDemeritsSettings()}`;
    }

    _renderScoreSettingsPanel(s) {
      const people = (this._ix().people || []).map((p) => p.name);
      const names = [...new Set([...s.participants, ...people])];
      return html`<div class="panel score-set" id="placar">
        ${this._secHead("trophy", "Ajustes do placar")}
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${names.map((n) => {
            const on = s.participants.includes(n);
            return html`<button class="pick person ${on ? "on" : ""}" aria-pressed=${on ? "true" : "false"} @click=${() => this._scorePrefs({ participants: on ? s.participants.filter((x) => x !== n) : [...s.participants, n] })}><span class="avatar sm">${initial(n)}</span><span>${n}</span></button>`;
          })}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(PERIODS).map(([k, p]) => html`<button class=${s.period === k ? "on" : ""} @click=${() => this._scorePrefs({ period: k, anchor: ymd(new Date()) })}>${p.label}</button>`)}</div>
          <span class="field-hint">${icon("info")}<span>${s.period === "mes" ? "No primeiro dia de cada mês." : `A semana começa ${this._app("week_start", 0) === 1 ? "na segunda" : "no domingo"} (muda em Mais › Opções).`} Mudar aqui recomeça a contagem no período de agora, sem perder os pontos.</span></span>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Marcar pontos em Recompensas</div><div class="hint">Mostra o card <b>Para pontuar hoje</b>: marcar as tarefas do dia, criar tarefa com pontos e dar pontos avulsos ali mesmo. Desligado, as tarefas são marcadas na Agora e no ResolvIA.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${!!s.manual} @change=${(e) => this._scorePrefs({ manual: e.target.checked })} aria-label="Marcar pontos em Recompensas" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Resultado no celular</div><div class="hint">Quando o período fecha, quem participa recebe quem venceu e o prêmio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${s.notify !== false} @change=${(e) => this._scorePrefs({ notify: e.target.checked })} aria-label="Resultado no celular" /><span class="track"></span></label>
        </div>
        <button class="text-btn danger" @click=${() => this._scorePrefs({ enabled: false })}>Desligar o placar</button>
      </div>`;
    }

    _renderRewardsSetup() {
      const s = this._score() || {};
      const people = (this._ix().people || []).filter((p) => p.person);
      const pick = this._setupPick || (s.participants && s.participants.length ? s.participants : people.map((p) => p.name));
      const period = this._setupPeriod || s.period || "semana";
      const all = [...new Set([...(this._ix().people || []).map((p) => p.name), ...pick])];
      return html`<section class="page rewards">
        ${this._renderHead("Recompensas", { text: "Placar da casa" })}
        <div class="panel setup-card">
          <div class="setup-art">${icon("trophy")}</div>
          <h2 class="setup-title">Quem faz mais em casa?</h2>
          <p class="panel-lead">Dê pontos às tarefas da rotina e da manutenção. Quem marca <b>Feito</b> ganha os pontos, e no fim de cada período quem somar mais leva o prêmio que vocês combinaram.</p>
          <div class="field"><span class="flabel">Quem participa</span>
            <div class="chip-row">${all.map((n) => {
              const on = pick.includes(n);
              return html`<button class="pick person ${on ? "on" : ""}" aria-pressed=${on ? "true" : "false"} @click=${() => ((this._setupPick = on ? pick.filter((x) => x !== n) : [...pick, n]), this.requestUpdate())}><span class="avatar sm">${initial(n)}</span><span>${n}</span></button>`;
            })}</div>
          </div>
          <div class="field"><span class="flabel">O placar fecha</span>
            <div class="seg">${Object.entries(PERIODS).map(([k, p]) => html`<button class=${period === k ? "on" : ""} @click=${() => ((this._setupPeriod = k), this.requestUpdate())}>${p.label}</button>`)}</div>
          </div>
          <button class="btn primary" style="width:100%" ?disabled=${!pick.length} @click=${() => this._saveAppPrefs({ score: { enabled: true, participants: pick, period, anchor: ymd(new Date()), notify: true } })}>${icon("trophy")}Começar o placar</button>
        </div>
      </section>`;
    }
  };
