// Levar para o ResolvIA: each maintenance and each routine of the house becomes
// one task in a to-do list of Home Assistant (the ResolvIA lists), with its next
// date. Concluding that task there (ResolvIA, Alexa, the Home Assistant screen)
// counts as done here, and the task comes back with the next date, like the
// repeating tasks of the ResolvIA.
//
// Who did it: the ResolvIA sends cronologia_pontos with the key
// "espelho|todo.x|<uid>" right after concluding (see Home.onPoints). The
// completion is processed a few seconds after it is seen in the list, so that
// event can say who gets the points; without it, it counts as done with no points.
//
// Links live in store.data.mirror: {source key: {list, uid, tag, type, cal, evUid, written, lastDone, gone}}.
// Each task carries a marker "[cr:<tag>]" in its notes, so it is found again after a restart.
import crypto from "node:crypto";

const TF = { CREATE: 1, DELETE: 2, UPDATE: 4, DUE_DATE: 16, DUE_DATETIME: 32, DESCRIPTION: 64 };
const DAY = 86400000;
const WAIT_WHO_MS = 3000; // after a completion is seen, wait this long for the ResolvIA to say who
const AHEAD_DAYS = 60;
const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const hmOf = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
const tagOf = (src) => crypto.createHash("sha1").update(src).digest("hex").slice(0, 8);
const MARK_RE = /\[cr:([0-9a-f]{8})\]/;
const msOf = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(s) ? new Date(`${s}T00:00:00`).getTime() : Date.parse(s));

/** The due of a to-do item as "YYYY-MM-DD" or "YYYY-MM-DD HH:MM" (local time). */
function dueKeyOfItem(due) {
  if (!due) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(due)) return due;
  const t = new Date(due);
  return Number.isNaN(t.getTime()) ? "" : `${ymd(t)} ${hmOf(t)}`;
}

export class Mirror {
  constructor({ ha, store, todos, home, log, onChange = () => {} }) {
    this.ha = ha;
    this.store = store;
    this.todos = todos;
    this.home = home;
    this.log = log;
    this.onChange = onChange;
    this.timer = null;
    this.busy = false;
    this.again = false;
    this.pending = new Map(); // source key -> {timer, who}
    this.hints = new Map(); // "list|uid" -> {who, at}: who was said before the completion was seen
    this.problem = null;
  }

  settings() {
    const m = this.store.data.app.mirror || {};
    return { list: m.list || null, maint: !!m.maint, routine: !!m.routine };
  }

  get recs() {
    return this.store.data.mirror || (this.store.data.mirror = {});
  }

  /** "todo.x|uid" of every task kept by the mirror (left out of the Tarefas card). */
  uids() {
    const out = new Set();
    for (const r of Object.values(this.recs)) if (r.uid) out.add(`${r.list}|${r.uid}`);
    return out;
  }

  /** For the ResolvIA: {list: {uid: {pontos, tipo}}}. */
  published() {
    const out = {};
    for (const r of Object.values(this.recs)) {
      if (!r.uid || !r.written) continue;
      (out[r.list] || (out[r.list] = {}))[r.uid] = { pontos: r.written.points || 0, tipo: r.type };
    }
    return out;
  }

  /** For Mais › Integrações: how many tasks are in the list, and any problem. */
  status() {
    const st = this.settings();
    const n = Object.values(this.recs).filter((r) => r.uid && r.list === st.list).length;
    return { ...st, count: n, problem: this.problem };
  }

  schedule(ms = 1200) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.sync().catch((err) => this.log.warn(`Levar para o ResolvIA: ${err.message}`)), ms);
  }

  start() {
    setInterval(() => this.schedule(0), 2 * 60 * 1000);
    this.schedule(4000);
  }

  // ---------------------------------------------------------------- what should be there

  /** One entry per maintenance and per routine (the series), with its next date. */
  desired(now = Date.now()) {
    const st = this.settings();
    const out = new Map();
    if (!st.list || (!st.maint && !st.routine)) return out;
    const ix = this.home.index || {};
    if (st.maint) {
      for (const m of ix.maint || []) {
        if (!m.uid || !m.due) continue;
        const src = `maint|${m.cal}|${m.uid}`;
        out.set(src, { src, type: "manutencao", cal: m.cal, evUid: m.uid, summary: m.summary, dueKey: m.due, allDay: true, points: m.points || 0, notes: m.notes || "", occKey: m.key, rrule: !!m.repeating });
      }
    }
    if (st.routine) {
      const t0 = new Date(new Date(now).getFullYear(), new Date(now).getMonth(), new Date(now).getDate()).getTime();
      const checks = this.store.data.checks;
      const best = new Map(); // series -> earliest occurrence not done, from today on
      for (const o of this.home.occurrences()) {
        if (o.k.kind !== "rotina" || !o.raw.uid) continue;
        if (o.start < t0 || o.start > t0 + AHEAD_DAYS * DAY || checks[o.key]) continue;
        const sid = `rotina|${o.cal}|${o.raw.uid}`;
        const cur = best.get(sid);
        if (!cur || o.start < cur.start) best.set(sid, o);
      }
      for (const [src, o] of best) {
        const d = new Date(o.start);
        out.set(src, { src, type: "rotina", cal: o.cal, evUid: o.raw.uid, summary: o.raw.summary || "Rotina", dueKey: o.allDay ? ymd(d) : `${ymd(d)} ${hmOf(d)}`, allDay: o.allDay, points: o.k.points || 0, notes: o.k.notes || "", occKey: o.key });
      }
    }
    return out;
  }

  /** The fields for todo.add_item / update_item, as far as the list supports them. */
  fields(d, features, tag) {
    const out = {};
    if (d.allDay || !(features & TF.DUE_DATETIME)) {
      if (features & TF.DUE_DATE) out.due_date = d.dueKey.slice(0, 10);
    } else out.due_datetime = `${d.dueKey}:00`;
    if (features & TF.DESCRIPTION) {
      const what = d.type === "rotina" ? "Rotina da casa" : "Manutenção";
      out.description = `${d.notes ? `${d.notes}\n\n` : ""}${what} do CronologIA${d.points ? ` · +${d.points} pontos` : ""} [cr:${tag}]`;
    }
    return out;
  }

  /** What the item would look like after writing `d` (to compare with what is there). */
  written(d, features, tag) {
    const f = this.fields(d, features, tag);
    const dueKey = f.due_datetime ? d.dueKey : f.due_date || "";
    return { summary: d.summary, dueKey, description: f.description || null, occKey: d.occKey, points: d.points, type: d.type };
  }

  async call(list, service, data) {
    await this.ha.send({ type: "call_service", domain: "todo", service, service_data: data, target: { entity_id: list } });
  }

  // ---------------------------------------------------------------- sync

  async sync() {
    if (this.busy) {
      this.again = true;
      return;
    }
    this.busy = true;
    let changed = false;
    try {
      const st = this.settings();
      const want = this.desired();
      const recs = this.recs;
      // tasks of another list, or of something that isn't wanted anymore: out
      for (const [src, r] of Object.entries(recs)) {
        if (r.list === st.list && want.has(src)) continue;
        if (this.pending.has(src)) continue;
        await this.remove(r);
        delete recs[src];
        changed = true;
      }
      this.problem = null;
      if (!st.list || !want.size) return;
      const lstate = this.todos.states.get(st.list);
      const items = this.todos.items.get(st.list);
      if (!lstate || !items) {
        this.problem = lstate ? null : "A lista escolhida não existe mais no Home Assistant.";
        return;
      }
      const features = Number((lstate.attributes && lstate.attributes.supported_features) || 0);
      if (!(features & TF.CREATE) || !(features & TF.UPDATE)) {
        this.problem = "Essa lista não deixa criar e editar tarefas. Escolha outra (uma Lista de tarefas local, por exemplo).";
        return;
      }
      for (const [src, d] of want) {
        let r = recs[src];
        if (!r) {
          r = recs[src] = { list: st.list, uid: null, tag: tagOf(src), type: d.type, cal: d.cal, evUid: d.evUid };
          changed = true;
        }
        r.cal = d.cal;
        r.evUid = d.evUid;
        const target = this.written(d, features, r.tag);
        let item = r.uid ? items.find((i) => i.uid === r.uid) : null;
        if (r.uid && !item) {
          // deleted in the list: respected until the next date
          r.gone = target.dueKey || target.occKey;
          r.uid = null;
          changed = true;
          continue;
        }
        if (!item) item = items.find((i) => i.description && MARK_RE.exec(i.description) && MARK_RE.exec(i.description)[1] === r.tag);
        if (!item && !(features & TF.DESCRIPTION) && r.adding) item = items.find((i) => i.summary === d.summary && i.status !== "completed" && ![...Object.values(recs)].some((x) => x.uid === i.uid));
        if (!item) {
          if (r.gone && r.gone === (target.dueKey || target.occKey)) continue;
          if (r.adding && Date.now() - r.adding < 15000) continue;
          await this.call(st.list, "add_item", { item: d.summary, ...this.fields(d, features, r.tag) });
          r.adding = Date.now();
          r.written = target;
          delete r.gone;
          this.todos.refresh(st.list);
          changed = true;
          continue;
        }
        if (r.uid !== item.uid) {
          r.uid = item.uid;
          changed = true;
        }
        delete r.adding;
        delete r.gone;
        if (item.status === "completed") {
          // concluded in the list: counts as done here (unless we already did it and only need to bring it back)
          const done = r.lastDone && r.lastDone.occKey === (r.written && r.written.occKey);
          if (!done && r.written && r.written.occKey === d.occKey) {
            this.completionSeen(src, r);
            continue;
          }
          if (this.pending.has(src)) continue;
        }
        const same = item.status !== "completed" && item.summary === target.summary && dueKeyOfItem(item.due) === target.dueKey && (target.description == null || (item.description || "") === target.description);
        if (same) {
          if (!r.written || r.written.occKey !== target.occKey || r.written.points !== target.points) {
            r.written = target;
            changed = true;
          }
          continue;
        }
        const data = { item: item.uid, status: "needs_action", ...this.fields(d, features, r.tag) };
        if (item.summary !== d.summary) data.rename = d.summary;
        await this.call(st.list, "update_item", data);
        r.written = target;
        changed = true;
        this.todos.refresh(st.list);
      }
    } finally {
      this.busy = false;
      if (changed) {
        this.store.save();
        this.onChange();
      }
      if (this.again) {
        this.again = false;
        this.schedule(300);
      }
    }
  }

  async remove(r) {
    if (!r.uid) return;
    const st = this.todos.states.get(r.list);
    const f = Number((st && st.attributes && st.attributes.supported_features) || 0);
    if (!(f & TF.DELETE)) return;
    await this.call(r.list, "remove_item", { item: [r.uid] }).catch((err) => this.log.warn(`Não consegui tirar a tarefa da lista: ${err.message}`));
  }

  // ---------------------------------------------------------------- done in the list

  /** A completion seen in the list: wait a moment for the ResolvIA to say who. */
  completionSeen(src, r) {
    if (this.pending.has(src)) return;
    const hint = this.hints.get(`${r.list}|${r.uid}`);
    if (hint && Date.now() - hint.at < 60000) {
      this.hints.delete(`${r.list}|${r.uid}`);
      this.process(src, hint.who);
      return;
    }
    this.pending.set(src, { timer: setTimeout(() => this.process(src, ""), WAIT_WHO_MS) });
  }

  async process(src, who) {
    const p = this.pending.get(src);
    if (p) clearTimeout(p.timer);
    this.pending.delete(src);
    const r = this.recs[src];
    if (!r || !r.written) return;
    // still concluded in the list? (Desfazer in the ResolvIA cancels)
    const items = this.todos.items.get(r.list) || [];
    const item = items.find((i) => i.uid === r.uid);
    if (!item || item.status !== "completed") return this.schedule(0);
    const occKey = r.written.occKey;
    try {
      let pointsKey = null;
      if (r.type === "rotina") {
        this.home.check(occKey, true, "ResolvIA", "rotina", who || "");
        pointsKey = occKey;
      } else {
        const out = await this.home.maintDone(r.cal, r.evUid, "ResolvIA", who || "");
        pointsKey = out.moved ? `maint|${r.cal}|${r.evUid}|${new Date().toISOString().slice(0, 10)}` : out.key;
      }
      r.lastDone = { occKey, at: Date.now(), pointsKey, who: who || null };
      this.log.info(`Feito pelo ResolvIA: ${r.written.summary}${who ? ` (${who})` : ""}`);
    } catch (err) {
      r.lastDone = { occKey, at: Date.now(), failed: err.message };
      this.log.warn(`Não consegui marcar "${r.written.summary}" como feito: ${err.message}`);
    }
    this.store.save();
    this.schedule(500);
  }

  find(list, uid) {
    for (const [src, r] of Object.entries(this.recs)) if (r.list === list && r.uid === uid) return [src, r];
    return [null, null];
  }

  /**
   * From the ResolvIA (cronologia_pontos with "espelho|list|uid"):
   * somar = concluded by `who`; desfazer = the completion was undone; trocar = it was someone else.
   */
  async onPoints(acao, list, uid, who) {
    const [src, r] = this.find(list, uid);
    if (!src) {
      if (acao === "somar" && who) this.hints.set(`${list}|${uid}`, { who, at: Date.now() });
      return;
    }
    if (acao === "somar") {
      if (this.pending.has(src)) return this.process(src, who);
      const ld = r.lastDone;
      if (ld && Date.now() - ld.at < 10 * 60000 && !ld.who && !ld.failed) {
        // processed before the name arrived (Quem fez? took a while): give the points now
        if (r.type === "rotina") this.home.check(ld.occKey, true, "ResolvIA", "rotina", who);
        else this.home.lateMaintPoints(ld.pointsKey, r.cal, r.evUid, r.written && r.written.summary, who);
        ld.who = who;
        this.store.save();
        return;
      }
      this.hints.set(`${list}|${uid}`, { who, at: Date.now() });
      return;
    }
    if (acao === "desfazer") {
      if (this.pending.has(src)) {
        clearTimeout(this.pending.get(src).timer);
        this.pending.delete(src);
        return;
      }
      const ld = r.lastDone;
      if (!ld || ld.failed || Date.now() - ld.at > 30 * 60000) return;
      try {
        if (r.type === "rotina") this.home.check(ld.occKey, false, "ResolvIA", "rotina", "");
        else await this.home.maintUndo(r.cal, r.evUid);
      } catch (err) {
        this.log.warn(`Desfazer pelo ResolvIA: ${err.message}`);
      }
      r.lastDone = null;
      this.store.save();
      this.schedule(500);
      return;
    }
    if (acao === "trocar") {
      const ld = r.lastDone;
      if (ld && ld.pointsKey && this.store.pointsByKey(ld.pointsKey)) {
        this.home.reassign(ld.pointsKey, who);
        ld.who = who;
        this.store.save();
      }
    }
  }
}

export { MARK_RE };
