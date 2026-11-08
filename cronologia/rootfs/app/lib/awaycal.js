// Modo férias nos calendários fora do Home Assistant (Google, CalDAV, Outlook…), que avisam no celular sozinhos
// (1.59.0): a série de uma rotina ou manutenção que se repete termina no dia antes das férias e uma igual começa no
// primeiro dia dela depois da volta; a rotina que volta N dias depois de feita e a manutenção de um evento só que
// vencem nas férias vão para o dia da volta. Encerrar, cancelar ou mudar as datas ajusta: a série volta a partir do
// primeiro dia dela que já não é de férias (desde hoje), e o que mudou de dia volta para o seu dia (ou para hoje).
// Nada se perde: os dias tirados ficam anotados (store.data.away_cal) para a série voltar a eles.
// O calendário do próprio Home Assistant (local) não avisa no celular: fica como está (o app já esconde as férias).
import { parseKind, ymdOf, cleanAway, isoWithOffset } from "./kinds.js";
import { toHAEvent } from "./events.js";

const DAY = 86400000;
// the Home Assistant's own calendar: no alert on the phone, nothing to change
const LOCAL = new Set(["local_calendar"]);
const F = { CREATE: 1, DELETE: 2, UPDATE: 4 };
const YMD = /^\d{4}-\d{2}-\d{2}$/;

/** The day (AAAA-MM-DD) of a start of Home Assistant ("2026-11-10" or "2026-11-10T08:00:00-03:00"). */
export const dayOf = (s) => (YMD.test(String(s)) ? String(s) : ymdOf(new Date(s)));
export const addDays = (ymd, n) => {
  const [y, m, d] = ymd.split("-").map(Number);
  return ymdOf(new Date(y, m - 1, d + n));
};
const ms = (s) => (YMD.test(String(s)) ? new Date(...String(s).split("-").map((x, i) => Number(x) - (i === 1 ? 1 : 0))).getTime() : Date.parse(s));

/** {start, end} moved to another day at the same time and with the same length (all-day stays all-day). */
export function onDay(start, end, day) {
  if (YMD.test(String(start))) return { start: day, end: addDays(day, Math.max(1, Math.round((ms(end) - ms(start)) / DAY) || 1)) };
  const s = new Date(start);
  const [y, m, d] = day.split("-").map(Number);
  const ns = new Date(y, m - 1, d, s.getHours(), s.getMinutes(), s.getSeconds());
  return { start: isoWithOffset(ns), end: isoWithOffset(new Date(ns.getTime() + Math.max(0, new Date(end) - s))) };
}

/**
 * What the vacation asks of the calendars on `today`: {from, cut, back} (days AAAA-MM-DD; cut: from where days are taken
 * out, never before today; back: the day after), or null when no vacation is ahead.
 */
export function window(away, today) {
  const a = cleanAway(away);
  if (!a || a.to < today) return null;
  return { from: a.from, cut: a.from > today ? a.from : today, back: addDays(a.to, 1) };
}

/** A series that can be paused: a routine or a maintenance that repeats (until a date, not a number of times). */
export const pausable = (raw) => {
  if (!raw.rrule || /(^|;)COUNT=/.test(raw.rrule)) return false;
  const k = parseKind(raw.description);
  return !!k && (k.kind === "rotina" || k.kind === "manutencao");
};
/** One event that waits for its Feito: a routine that comes back N days after done, a maintenance of one event. */
export const waiting = (raw) => {
  if (raw.rrule) return false;
  const k = parseKind(raw.description);
  return !!k && ((k.kind === "rotina" && !!k.after) || k.kind === "manutencao");
};

export class AwayCal {
  /**
   * ha: {send}; store: {data, save()}; tracked(): Map(cal -> {events}); features(cal): flags;
   * platform(cal): Promise of the integration ("google", "local_calendar"…) or null; log; refresh(cal): read again.
   */
  constructor({ ha, store, tracked, features, platform, log, refresh = () => {}, later = (fn, ms) => setTimeout(fn, ms) }) {
    Object.assign(this, { ha, store, tracked, features, platform, log, refresh, later });
    this.running = null;
    // "cal|uid" changed in the last minutes: the events read may still show them as they were (the calendar answers late)
    this.recent = new Map();
  }

  touch(cal, uid, now = Date.now()) {
    this.recent.set(`${cal}|${uid}`, now);
  }

  fresh(cal, uid, now = Date.now()) {
    const at = this.recent.get(`${cal}|${uid}`);
    if (at != null && now - at < 3 * 60000) return false;
    this.recent.delete(`${cal}|${uid}`);
    return true;
  }

  get state() {
    const d = this.store.data;
    if (!d.away_cal || typeof d.away_cal !== "object") d.away_cal = { splits: [], moved: [] };
    if (!Array.isArray(d.away_cal.splits)) d.away_cal.splits = [];
    if (!Array.isArray(d.away_cal.moved)) d.away_cal.moved = [];
    return d.away_cal;
  }

  /** One at a time (a change of the dates while one runs waits for it, then runs once more). */
  sync(now = () => new Date()) {
    const run = () => this.syncNow(typeof now === "function" ? now() : now).catch((err) => this.log.warn(`Férias nos calendários: ${err.message}`));
    this.running = (this.running || Promise.resolve()).then(run);
    return this.running;
  }

  /** The calendars that alert on the phone by themselves and let the app take events off and put new ones. */
  async calendars() {
    const out = [];
    for (const [cal, t] of this.tracked()) {
      const f = this.features(cal);
      if (!(f & F.CREATE) || !(f & F.DELETE) || !t || !t.events || !t.events.length) continue;
      const p = await this.platform(cal);
      if (p && !LOCAL.has(p)) out.push(cal);
    }
    return out;
  }

  events(cal) {
    const t = this.tracked().get(cal);
    return (t && t.events) || [];
  }

  async syncNow(now = new Date()) {
    const today = ymdOf(now);
    const win = window(this.store.data.app.away, today);
    const away = (d) => !!win && d >= win.from && d < win.back;
    const st = this.state;
    const t0 = now.getTime();
    let again = false;
    let changed = false;
    const drop = (list, x) => {
      st[list] = st[list].filter((y) => y !== x);
      changed = true;
    };

    // 1) a vacation that ended, was cancelled or moved: each series again from its first day that is no longer of the
    // vacation (from today on); then the split below takes out the days of the vacation (if any) once more
    for (const s of [...st.splits]) {
      if (!this.events(s.cal).length) continue; // not read yet
      const cur = s.next ? this.findSeries(s.cal, s.summary, s.next) : null;
      if (cur && !this.fresh(s.cal, cur.uid, t0)) continue;
      if (s.next && !cur) {
        // taken off in the calendar meanwhile: nothing to bring back (just made: the calendar may not show it yet)
        if (t0 - Date.parse(s.at || 0) > 10 * 60000) drop("splits", s);
        continue;
      }
      const from = s.starts.find((x) => dayOf(x) >= today && !away(dayOf(x)) && (!s.next || ms(x) < ms(s.next)));
      if (!from) {
        if (!win) drop("splits", s);
        continue;
      }
      // the one from the day back goes first (if taking it off fails, nothing changed); then the series from `from`
      // (if that fails, the note keeps the days: the next run tries again)
      const ev = { summary: s.summary, description: s.description, ...(s.location ? { location: s.location } : {}), ...onDay(s.starts[0], s.end0, dayOf(from)), rrule: s.rrule };
      try {
        if (cur) {
          await this.ha.send({ type: "calendar/event/delete", entity_id: s.cal, uid: cur.uid });
          this.touch(s.cal, cur.uid, t0);
          s.next = null;
          changed = true;
        }
        await this.ha.send({ type: "calendar/event/create", entity_id: s.cal, event: toHAEvent(ev) });
      } catch (err) {
        this.log.warn(`Férias: não consegui trazer ${s.summary} de volta: ${err.message}`);
        continue;
      }
      this.log.info(`Férias: ${s.summary} de volta a partir de ${dayOf(from)}`);
      s.next = ev.start;
      s.at = now.toISOString();
      s.starts = s.starts.filter((x) => ms(x) < ms(from));
      changed = true;
      this.refresh(s.cal);
      if (win) again = true; // the series is back with days of the vacation: the next run takes them out
      else drop("splits", s);
    }
    for (const m of [...st.moved]) {
      if (!this.events(m.cal).length) continue;
      const raw = this.findOne(m.cal, m.summary, m.to);
      if (raw && !this.fresh(m.cal, raw.uid, t0)) continue;
      if (!raw) {
        // done (Feito moved it) or changed by hand (just moved: the calendar may not show it yet)
        if (t0 - Date.parse(m.at || 0) > 10 * 60000) drop("moved", m);
        continue;
      }
      const inside = away(dayOf(m.from));
      const day = inside ? win.back : dayOf(m.from) > today ? dayOf(m.from) : today;
      if (day !== dayOf(m.to)) {
        try {
          await this.move(m.cal, raw, day);
        } catch (err) {
          this.log.warn(`Férias: não consegui mudar ${m.summary}: ${err.message}`);
          continue;
        }
        this.touch(m.cal, raw.uid, t0);
        this.log.info(`Férias: ${m.summary} para ${day}`);
        m.to = onDay(raw.start, raw.end, day).start;
        m.at = now.toISOString();
        changed = true;
        this.refresh(m.cal);
      }
      if (!inside) drop("moved", m);
    }

    // 2) a vacation ahead (or now): its days out of each series; what waits for its Feito, to the day back
    if (win) {
      for (const cal of await this.calendars()) {
        const events = this.events(cal);
        const series = new Map();
        for (const raw of events) {
          if (!raw.uid || !pausable(raw) || !this.fresh(cal, raw.uid, t0)) continue;
          if (!series.has(raw.uid)) series.set(raw.uid, []);
          series.get(raw.uid).push(raw);
        }
        for (const [uid, occs] of series) {
          occs.sort((a, b) => ms(a.start) - ms(b.start));
          const inside = occs.filter((o) => dayOf(o.start) >= win.cut && dayOf(o.start) < win.back);
          if (!inside.length) continue;
          const first = inside[0];
          const next = occs.find((o) => dayOf(o.start) >= win.back) || null;
          // the days of the vacation (and after) go first; if that fails, nothing changed
          try {
            // the first time of the series inside: the whole series goes (the new one is the same from the day back)
            const whole = first === occs[0] || !first.recurrence_id;
            await this.ha.send({ type: "calendar/event/delete", entity_id: cal, uid, ...(whole ? {} : { recurrence_id: first.recurrence_id, recurrence_range: "THISANDFUTURE" }) });
          } catch (err) {
            this.log.warn(`Férias: não consegui pausar ${first.summary}: ${err.message}`);
            continue;
          }
          this.touch(cal, uid, t0);
          let made = !next;
          if (next) {
            const ev = { summary: first.summary, description: first.description || "", ...(first.location ? { location: first.location } : {}), start: next.start, end: next.end, rrule: first.rrule };
            try {
              await this.ha.send({ type: "calendar/event/create", entity_id: cal, event: toHAEvent(ev) });
              made = true;
            } catch (err) {
              // the note keeps the day back among the days taken out: the next run puts the series again from it
              this.log.warn(`Férias: não consegui pôr ${first.summary} de volta em ${dayOf(next.start)}: ${err.message}`);
            }
          }
          this.log.info(`Férias: ${first.summary} sem os dias de ${dayOf(first.start)} a ${addDays(win.back, -1)}${next ? `; volta ${dayOf(next.start)}` : ""}`);
          // paused before (the dates changed): one note per routine, with every day taken out; the series of the day
          // back is the new one (or none) when it was the one split now
          const s = st.splits.find((x) => x.cal === cal && x.summary === first.summary);
          const starts = [...inside.map((o) => o.start), ...(next && !made ? [next.start] : [])];
          const after = next && made ? next.start : null;
          if (s) {
            const was = s.next ? this.findSeries(cal, s.summary, s.next) : null;
            s.starts = [...new Set([...s.starts, ...starts])].sort((a, b) => ms(a) - ms(b));
            if (next || !s.next || (was && was.uid === uid)) s.next = after;
            s.at = now.toISOString();
          } else {
            st.splits.push({ cal, summary: first.summary || "", description: first.description || "", location: first.location || "", rrule: first.rrule, starts, end0: first.end, next: after, at: now.toISOString() });
          }
          changed = true;
          this.refresh(cal);
        }
        for (const raw of events) {
          if (!raw.uid || !waiting(raw) || dayOf(raw.start) < win.cut || dayOf(raw.start) >= win.back || !this.fresh(cal, raw.uid, t0)) continue;
          try {
            await this.move(cal, raw, win.back);
          } catch (err) {
            this.log.warn(`Férias: não consegui mudar ${raw.summary}: ${err.message}`);
            continue;
          }
          this.touch(cal, raw.uid, t0);
          const to = onDay(raw.start, raw.end, win.back).start;
          const m = st.moved.find((x) => x.cal === cal && x.summary === raw.summary && dayOf(x.to) === dayOf(raw.start));
          if (m) Object.assign(m, { to, at: now.toISOString() });
          else st.moved.push({ cal, summary: raw.summary || "", from: raw.start, to, at: now.toISOString() });
          this.log.info(`Férias: ${raw.summary} vai para ${win.back}`);
          changed = true;
          this.refresh(cal);
        }
      }
    }
    if (changed) this.store.save();
    if (again) this.later(() => this.sync(), 8000);
    return changed;
  }

  /** One event to another day: changed where the calendar lets, else put again and the old one taken off (like Google). */
  async move(cal, raw, day) {
    const ev = { summary: raw.summary, description: raw.description || "", ...(raw.location ? { location: raw.location } : {}), ...onDay(raw.start, raw.end, day) };
    if (this.features(cal) & F.UPDATE) return this.ha.send({ type: "calendar/event/update", entity_id: cal, uid: raw.uid, event: toHAEvent(ev) });
    await this.ha.send({ type: "calendar/event/create", entity_id: cal, event: toHAEvent(ev) });
    await this.ha.send({ type: "calendar/event/delete", entity_id: cal, uid: raw.uid });
  }

  /** The series with that name whose first time is that day (one made here has its own uid). */
  findSeries(cal, summary, start) {
    const firsts = new Map();
    for (const e of this.events(cal)) if (e.rrule && e.uid && e.summary === summary && (!firsts.has(e.uid) || ms(e.start) < ms(firsts.get(e.uid).start))) firsts.set(e.uid, e);
    return [...firsts.values()].find((e) => dayOf(e.start) === dayOf(start)) || null;
  }

  /** The one event with that name on that day. */
  findOne(cal, summary, start) {
    return this.events(cal).find((e) => !e.rrule && e.summary === summary && dayOf(e.start) === dayOf(start)) || null;
  }
}
