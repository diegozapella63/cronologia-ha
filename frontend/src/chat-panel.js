// Conversa in the CronologIA: the button beside the microphone, the chat sheet, what goes to the AI
// (the screen, the agenda, routines, medicines, bills, maintenance, the scoreboard and the tasks of
// the ResolvIA) and what its cards do (create an event, mark a routine done, a dose taken), after a tap.
// Mixed into <cronologia-app>.
import { html, nothing, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { renderChat, chatFiles } from "./chat.js";
import { Recorder, micError, VOICE_RATE, VOICE_MAX_S } from "./voice.js";
import { ymd, hm, startOfDay, addDays, clip } from "./util.js";
import { periodInfo } from "../../cronologia/rootfs/app/lib/kinds.js";
import { moreName } from "./routes.js";

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;
const SAVE_KEY = "cronologia-conversa";
const ddmm = (s) => `${s.slice(8, 10)}/${s.slice(5, 7)}`;
const plus1h = (t) => {
  const [h, m] = t.split(":").map(Number);
  const x = Math.min(23 * 60 + 59, h * 60 + m + 60);
  return `${String(Math.floor(x / 60)).padStart(2, "0")}:${String(x % 60).padStart(2, "0")}`;
};

export const ChatMixin = (Base) =>
  class extends Base {
    /** {messages, draft, busy, error, rec}: kept while the app is open (and in this tab, across reloads). */
    _chatState() {
      if (!this._chat) {
        let messages = [];
        try {
          messages = JSON.parse(sessionStorage.getItem(SAVE_KEY) || "[]");
        } catch (e) {
          /* private mode */
        }
        this._chat = { messages: Array.isArray(messages) ? messages : [], draft: "", busy: false, error: "", rec: null, files: [] };
      }
      return this._chat;
    }

    _setChat(changes) {
      this._chat = { ...this._chatState(), ...changes };
      if ("messages" in changes) {
        try {
          sessionStorage.setItem(SAVE_KEY, JSON.stringify(this._chat.messages.slice(-30)));
        } catch (e) {
          /* private mode */
        }
      }
      this.requestUpdate();
    }

    /** Beside the microphone (with Usar IA on and an AI in Home Assistant). */
    _renderChatBtn() {
      if (!this._aiOn() || !(this._ai && this._ai.ready)) return nothing;
      return html`<button class="mic-top chat-top" aria-label="Conversar com a IA" title="Conversar com a IA" @click=${() => this._openChat()}>${icon("message-circle")}</button>`;
    }

    _openChat() {
      this._openSheet("chat", {});
      this._chatScroll = true;
      this.updateComplete.then(() => {
        const ta = this.renderRoot.querySelector(".chat-input textarea");
        if (ta && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches) ta.focus();
      });
    }

    _renderChatSheet() {
      const c = this._chatState();
      const v = this._voice || {};
      return renderChat({
        lit: { html, nothing },
        icon,
        app: "cronologia", // as perguntas prontas, guardadas no aparelho
        onRedraw: () => this.requestUpdate(),
        messages: c.messages,
        draft: c.draft,
        busy: c.busy,
        error: c.error,
        voice: { ready: !!v.ready && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia), on: c.rec === "on", starting: c.rec === "starting" },
        examples: this._chatExamples(),
        onDraft: (t) => this._setChat({ draft: t }),
        onSend: (t) => this._chatSend(t),
        onMic: () => this._chatMic(),
        onAction: (k, j) => this._chatDo(k, j),
        onAll: (k) => this._chatDoAll(k),
        onClear: () => this._setChat({ messages: [], error: "" }),
        onClose: () => this._closeSheet(),
        // 1.84.0: the clip (Tirar foto, Escolher fotos, Escolher arquivo)
        files: c.files || [],
        onAttach: (kind) => this._chatAttach(kind),
        onFileRemove: (i) => this._setChat({ files: (c.files || []).filter((_, j) => j !== i) }),
      });
    }

    /** The clip of the Conversa: the camera of the app (Digitalizar com IA), the gallery or a file (photo or PDF). */
    _chatAttach(kind) {
      if (kind === "camera") return this._openCamera({ chat: true });
      const input = document.createElement("input");
      input.type = "file";
      input.accept = kind === "fotos" ? "image/*" : "image/*,application/pdf";
      // the Home Assistant app on Android drops selections made with multiple: one at a time there
      input.multiple = kind === "fotos" && !this._isHaAndroid();
      input.style.display = "none";
      input.addEventListener("change", () => {
        const list = Array.from(input.files || []);
        input.remove();
        if (list.length) this._chatAddFiles(list);
      });
      document.body.appendChild(input);
      input.click();
    }

    async _chatAddFiles(list) {
      const { files, error } = await chatFiles(list, this._chatState().files || []);
      this._setChat({ files, error });
      this._chatScroll = true;
    }

    /** The photos of the camera (Pronto): already JPG, ready for the AI. */
    _chatAddShots(shots) {
      const cur = (this._chatState().files || []).filter((f) => !f.pdf);
      const files = [...cur, ...shots.map((s, i) => ({ nome: `Foto ${cur.length + i + 1}.jpg`, pdf: false, mime: s.mime || "image/jpeg", data: s.data, url: s.url }))].slice(0, 4);
      this._setChat({ files, error: "" });
      if (this._sheet !== "chat") this._openChat();
    }

    _chatExamples() {
      const v = this._shownView ? this._shownView() : this._view();
      if (v.name === "calendar") return ["O que tenho esta semana?", "Estou livre amanhã à tarde?"];
      if (v.name === "rewards") return ["Quem está ganhando?", "O que ainda dá pontos hoje?"];
      return ["O que tenho hoje?", "Por onde eu começo?", "Marca dentista sexta às 15h"];
    }

    /** Where the person is, in words for the AI. */
    _chatScreen() {
      const v = this._shownView ? this._shownView() : this._view();
      if (v.name === "calendar") {
        const d = this._cursor ? ymd(this._cursor) : "";
        return `Calendário${d ? `, no dia ${ddmm(d)}` : ""}`;
      }
      if (v.name === "rewards") return "Recompensas (placar, prêmios e extrato)";
      if (v.name === "routines") return "Rotinas (rotinas, remédios, manutenções e contas cadastrados)";
      if (v.name === "more") return moreName(v);
      return "Agora (o dia de hoje: agenda, remédios, rotinas e contas)";
    }

    /** What the app shows, for the AI: the next days of the agenda and today's routines, doses, bills... */
    _chatContext() {
      const now = new Date(this._now || Date.now());
      const today = startOfDay(now);
      const from = this._view().name === "calendar" && this._cursor && this._cursor > today ? startOfDay(this._cursor) : today;
      const ix = this._ix();
      const cal = (id) => (this._cal(id) || {}).name || "";
      const agendaAll = (this._events(from, addDays(from, 8)) || []).filter((e) => !e.kind && !e.todo && !e.gerencia);
      const agenda = agendaAll
        .sort((a, b) => a.start - b.start)
        .slice(0, 80)
        .map((e) => ({ titulo: e.summary || "", data: ymd(e.start), inicio: e.allDay ? null : hm(e.start), fim: e.allDay ? null : hm(e.end), calendario: cal(e.cal) }));
      const score = this._score ? this._score() : null;
      const todos = this._todos ? this._todos() : { items: [] };
      const away = this._away && this._away();
      return {
        // Modo férias: the AI knows the routines rest
        tela: `${this._chatScreen()}${away && this._awayNow() ? `; a família está de férias até ${away.to} (rotinas, tarefas e manutenção pausadas)` : ""}`,
        criar: !!this._defaultCal(),
        agenda,
        rotinas: (ix.routines || []).map((r) => ({ id: r.key, nome: r.summary, feito: !!r.done, pulada: !!(r.done && r.done.skipped), periodo: (periodInfo(r.period) || {}).label || "", hora: r.time || null, quem: r.who || "", pontos: r.points || 0, atrasada: !r.done && (r.late > 0 || !!r.yesterday) })),
        remedios: (ix.meds || []).map((m) => ({ id: m.key, nome: m.summary, hora: m.time || null, quem: m.who || "", dose: m.dose || "", estado: m.state || "" })),
        contas: (this._billsList ? this._billsList() : []).filter((b) => !b.paid).map((b) => ({ nome: b.title, valor: b.value == null ? null : Number(b.value), vence: b.due, atrasada: !!b.overdue })),
        manutencao: (ix.maint || []).map((m) => ({ nome: m.summary, vence: m.due, estado: m.state })),
        placar: score && this._scoreOn && this._scoreOn() ? (score.rows || []).map((r) => ({ pessoa: r.name, pontos: r.points })) : [],
        tarefas: ((todos && todos.items) || []).filter((t) => !t.done).slice(0, 60).map((t) => ({ nome: t.summary, lista: t.listName || "", prazo: t.undated || !t.due ? null : String(t.due).slice(0, 10), atrasada: !!t.overdue })),
        // 1.101.0: how many there are, when the lists above are cut (the AI says it saw only part)
        agenda_total: agendaAll.length,
        tarefas_total: ((todos && todos.items) || []).filter((t) => !t.done).length,
      };
    }

    async _chatSend(text) {
      const c = this._chatState();
      if (c.busy) return;
      const files = c.files || [];
      const mine = files.length ? { role: "user", text, anexos: files.map((f) => f.nome) } : { role: "user", text };
      const messages = [...c.messages, mine];
      this._setChat({ messages, draft: "", busy: true, error: "", files: [] });
      this._chatScroll = true;
      try {
        const payload = {
          messages: messages.map((m) => ({ role: m.role, text: m.text || (m.actions || []).map((a) => a.label).join("; "), ...(m.anexos ? { anexos: m.anexos } : {}) })),
          context: this._chatContext(),
        };
        // with files, by POST (a photo is too big for the WebSocket); the names stay in the conversation
        const out = files.length
          ? await this.api.chat({ ...payload, files: files.map((f) => ({ data: f.data, mime: f.mime, nome: f.nome })) })
          : await this.api.call("cronologia/ai/chat", payload);
        for (const f of files) if (f.url) URL.revokeObjectURL(f.url);
        const actions = (out.actions || []).map((a) => ({ ...a, label: this._chatLabel(a), icon: a.tipo === "evento" ? "calendar-plus" : a.tipo === "tomei" ? "pill" : "check", state: "todo" }));
        this._setChat({ messages: [...this._chatState().messages, { role: "ia", text: out.reply || "", actions }], busy: false });
      } catch (err) {
        // the files come back, to send again
        this._setChat({ busy: false, error: err.message || "A IA não respondeu. Tente de novo.", ...(files.length ? { files, messages: this._chatState().messages.filter((m) => m !== mine) } : {}) });
      }
      this._chatScroll = true;
    }

    _chatLabel(a) {
      if (a.tipo === "evento") return `Marcar "${clip(a.titulo, 60)}" · ${ddmm(a.data)}${a.inicio ? ` às ${a.inicio}` : ""}`;
      if (a.tipo === "tomei") return `Tomei "${clip(a.nome, 60)}"${a.hora ? ` (${a.hora})` : ""}`;
      return `"${clip(a.nome, 60)}" feita`;
    }

    _setAction(k, j, changes) {
      const messages = this._chatState().messages.map((m, n) => (n === k ? { ...m, actions: m.actions.map((a, i) => (i === j ? { ...a, ...changes } : a)) } : m));
      this._setChat({ messages });
    }

    /** One card's button: creates the event (in the calendar of Novo), marks the routine or the dose. */
    async _chatDo(k, j) {
      const a = ((this._chatState().messages[k] || {}).actions || [])[j];
      if (!a || a.state === "done" || a.state === "doing") return;
      this._setAction(k, j, { state: "doing", note: "" });
      let note = "";
      try {
        if (a.tipo === "evento") {
          const target = this._defaultCal();
          if (!target) throw new Error("Nenhum calendário para criar eventos.");
          const ev = this._eventFromForm({ title: a.titulo, date: a.data, endDate: "", allDay: !a.inicio, start: a.inicio || "", end: a.inicio ? a.fim || plus1h(a.inicio) : "", repeat: "", rrule: "", location: "", notes: "" });
          await this.api.createEvent(target, ev);
          note = clip((this._cal(target) || {}).name || "", 30);
        } else {
          await this.api.setCheck(a.id, true, a.tipo === "tomei" ? "remedio" : "rotina");
        }
        this._haptic && this._haptic("success");
        this._setAction(k, j, { state: "done", note });
      } catch (err) {
        this._setAction(k, j, { state: "failed", note: err.message || "Não deu certo." });
      }
    }

    async _chatDoAll(k) {
      const acts = (this._chatState().messages[k] || {}).actions || [];
      for (let j = 0; j < acts.length; j++) if (acts[j].state !== "done") await this._chatDo(k, j);
    }

    /** The microphone of the chat: talk, then what was understood is sent. */
    async _chatMic() {
      const c = this._chatState();
      if (c.rec === "on") {
        const rec = this._chatRec;
        this._chatRec = null;
        clearTimeout(this._chatRecTimer);
        if (!rec) return this._setChat({ rec: null });
        const pcm = rec.stop();
        this._setChat({ rec: null });
        if (pcm.length < VOICE_RATE * 0.4) return this._setChat({ error: "Não ouvi nada. Toque no microfone e fale." });
        this._setChat({ busy: true, error: "" });
        try {
          const r = await this.api.voiceText(pcm);
          this._setChat({ busy: false });
          if (r && r.text) this._chatSend(r.text);
        } catch (err) {
          this._setChat({ busy: false, error: err.message || "Não consegui transcrever." });
        }
        return;
      }
      if (c.rec) return;
      const rec = new Recorder(() => {});
      this._chatRec = rec;
      this._setChat({ rec: "starting", error: "" });
      try {
        await rec.start();
      } catch (err) {
        rec.cancel();
        this._chatRec = null;
        return this._setChat({ rec: null, error: micError(err) });
      }
      if (this._chatRec !== rec) return rec.cancel();
      this._setChat({ rec: "on" });
      this._chatRecTimer = setTimeout(() => this._chatState().rec === "on" && this._chatMic(), VOICE_MAX_S * 1000);
    }

    /** Leaving the chat stops the microphone. */
    _chatStop() {
      clearTimeout(this._chatRecTimer);
      if (this._chatRec) this._chatRec.cancel();
      this._chatRec = null;
      if (this._chat && this._chat.rec) this._chat = { ...this._chat, rec: null };
    }

    /** After each render: the chat scrolls to the newest message. */
    _chatAfterRender() {
      if (!this._chatScroll || this._sheet !== "chat") return;
      this._chatScroll = false;
      const log = this.renderRoot.querySelector(".chat-log");
      if (log) log.scrollTop = log.scrollHeight;
    }
  };
