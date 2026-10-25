// Tarefas com prazo das listas de tarefas do Home Assistant (todo.*), que são
// as listas do ResolvIA. Follows every list live (todo/item/subscribe) and
// marks items done with the todo.update_item action, so whatever the ResolvIA
// does on completion (repeating tasks) keeps working.

const DAY = 86400000;
// TodoListEntityFeature
export const TODO_F = { CREATE: 1, DELETE: 2, UPDATE: 4, MOVE: 8, DUE_DATE: 16, DUE_DATETIME: 32, DESCRIPTION: 64 };
const isTodo = (id) => typeof id === "string" && /^todo\.[a-z0-9_]+$/.test(id);
const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const coded = (code, message) => Object.assign(new Error(message), { code });

/** Due of an item as a moment: date-only dues count from the start of that day. */
function dueMs(due) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(due)) {
    const [y, m, d] = due.split("-").map(Number);
    return new Date(y, m - 1, d).getTime();
  }
  return Date.parse(due);
}

export class Todos {
  constructor({ ha, log, onChange }) {
    this.ha = ha;
    this.log = log;
    this.onChange = onChange;
    this.states = new Map(); // todo.x -> state
    this.items = new Map(); // todo.x -> items
    this.subs = new Map(); // todo.x -> {sub, poll}
  }

  /** A to-do list appeared, changed or went away (from get_states / state_changed). */
  setState(id, st) {
    if (!isTodo(id)) return;
    if (st) this.states.set(id, st);
    else this.states.delete(id);
    this.sync();
  }

  sync() {
    for (const id of this.states.keys()) if (!this.subs.has(id)) this.follow(id);
    for (const [id, s] of this.subs) {
      if (this.states.has(id)) continue;
      if (s.sub) s.sub.unsubscribe();
      if (s.poll) clearInterval(s.poll);
      this.subs.delete(id);
      this.items.delete(id);
      this.onChange();
    }
  }

  follow(id) {
    const s = { sub: null, poll: null };
    this.subs.set(id, s);
    s.sub = this.ha.subscribe(
      { type: "todo/item/subscribe", entity_id: id },
      (ev) => {
        this.items.set(id, (ev && ev.items) || []);
        this.onChange();
      },
      (err) => {
        // Older Home Assistant: read the list every 2 minutes.
        if (err && err.code === "unknown_command" && !s.poll) {
          const read = () =>
            this.ha
              .send({ type: "todo/item/list", entity_id: id })
              .then((r) => {
                this.items.set(id, (r && r.items) || []);
                this.onChange();
              })
              .catch(() => {});
          read();
          s.poll = setInterval(read, 120000);
        } else if (err) this.log.warn(`Não consegui acompanhar ${id}: ${err.message}`);
      },
    );
  }

  /** After a change made here on a polled list. */
  refresh(id) {
    const s = this.subs.get(id);
    if (!s || !s.poll) return;
    this.ha
      .send({ type: "todo/item/list", entity_id: id })
      .then((r) => {
        this.items.set(id, (r && r.items) || []);
        this.onChange();
      })
      .catch(() => {});
  }

  /**
   * Lists and the items with a due date around today: open ones from the last
   * 2 months to the next 2, done ones from 2 days back (to show ✓).
   */
  index(now = Date.now(), hidden = []) {
    const today = new Date(now);
    const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    const off = new Set(hidden);
    const lists = [];
    const items = [];
    for (const [id, st] of this.states) {
      const name = (st.attributes && st.attributes.friendly_name) || id;
      const all = this.items.get(id) || [];
      const withDue = all.filter((i) => i.due && i.status !== "completed");
      const features = Number((st.attributes && st.attributes.supported_features) || 0);
      lists.push({ id, name, features, open: all.filter((i) => i.status !== "completed").length, due: withDue.length, overdue: withDue.filter((i) => dueMs(i.due) < (i.due.length > 10 ? now : t0)).length, hidden: off.has(id), unavailable: st.state === "unavailable" });
      if (off.has(id)) continue;
      for (const i of all) {
        if (!i.due || !i.uid) continue;
        const at = dueMs(i.due);
        if (!Number.isFinite(at)) continue;
        const done = i.status === "completed";
        if (done ? at < t0 - 2 * DAY || at > t0 + 62 * DAY : at < t0 - 62 * DAY || at > t0 + 62 * DAY) continue;
        const allDay = i.due.length === 10;
        items.push({
          key: `todo|${id}|${i.uid}`,
          list: id,
          listName: name,
          uid: i.uid,
          summary: i.summary || "",
          description: i.description || "",
          due: i.due,
          allDay,
          done,
          overdue: !done && (allDay ? at < t0 : at < now),
          days: Math.round((new Date(new Date(at).getFullYear(), new Date(at).getMonth(), new Date(at).getDate()).getTime() - t0) / DAY),
        });
      }
    }
    items.sort((a, b) => dueMs(a.due) - dueMs(b.due) || a.summary.localeCompare(b.summary, "pt-BR", { numeric: true }));
    lists.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    return { lists, items, today: ymd(today) };
  }

  /** New task with a due date (todo.add_item). */
  async add(id, { summary, date, time, description }) {
    const st = this.states.get(id);
    if (!isTodo(id) || !st) throw coded("invalid_format", "Escolha uma lista");
    const f = Number((st.attributes && st.attributes.supported_features) || 0);
    if (!(f & TODO_F.CREATE)) throw coded("not_supported", "Essa lista não aceita tarefas novas");
    const text = String(summary || "").trim().slice(0, 255);
    if (!text) throw coded("invalid_format", "Dê um nome à tarefa");
    const data = { item: text };
    if (date) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw coded("invalid_format", "Data inválida");
      if (time) {
        if (!/^\d{2}:\d{2}$/.test(time)) throw coded("invalid_format", "Horário inválido");
        if (!(f & TODO_F.DUE_DATETIME)) throw coded("not_supported", "Essa lista não aceita prazo com horário");
        data.due_datetime = `${date} ${time}:00`;
      } else {
        if (!(f & TODO_F.DUE_DATE)) throw coded("not_supported", "Essa lista não aceita prazo");
        data.due_date = date;
      }
    }
    const notes = String(description || "").trim().slice(0, 4000);
    if (notes && f & TODO_F.DESCRIPTION) data.description = notes;
    await this.ha.send({ type: "call_service", domain: "todo", service: "add_item", service_data: data, target: { entity_id: id } });
    this.refresh(id);
  }

  /** Marks an item done (or open again) in Home Assistant. */
  async setDone(id, uid, done) {
    if (!isTodo(id) || !this.states.has(id)) throw coded("invalid_format", "Lista de tarefas inválida");
    if (typeof uid !== "string" || !uid) throw coded("invalid_format", "Tarefa inválida");
    await this.ha.send({ type: "call_service", domain: "todo", service: "update_item", service_data: { item: uid, status: done ? "completed" : "needs_action" }, target: { entity_id: id } });
    this.refresh(id);
  }
}
