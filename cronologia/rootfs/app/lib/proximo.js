// sensor.cronologia_proximo (1.78.0), with Sensores no Home Assistant on: the next appointment of the visible calendars
// (the one that starts next, in the next 2 days; the one of the whole day, the doses of medicine, which have their own
// sensor, and the ones already marked Feito stay out).
// The state is when it starts (device_class timestamp), so an automation can fire at it or before it
// (trigger: time, at: sensor.cronologia_proximo, offset: "-00:30:00"); the title, the end, the place and the calendar
// in the attributes, and what is happening now (agora). Read again every 5 minutes and when a calendar changes.
import { occurrenceKey, parseKind } from "./kinds.js";

export const NEXT_ID = "sensor.cronologia_proximo";
const AHEAD_MS = 2 * 86400000;
const pad = (n) => String(n).padStart(2, "0");
const allDayOf = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s || ""));
const local = (ms) => {
  const d = new Date(ms);
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:00${sign}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
};

/**
 * What the sensor says, from the events of the visible calendars ([{cal: {id, nome}, e, s, f}], s and f in ms) and
 * the checks (Feito) of the app.
 */
export function nextState(list, checks = {}, now = Date.now()) {
  const open = list.filter(({ cal, e, s, f }) => !allDayOf(e.start) && Number.isFinite(s) && f > now && !checks[occurrenceKey(cal.id, e)] && (parseKind(e.description) || {}).kind !== "remedio");
  const current = open.filter((x) => x.s <= now).sort((a, b) => b.s - a.s)[0] || null;
  const next = open.filter((x) => x.s > now && x.s - now <= AHEAD_MS).sort((a, b) => a.s - b.s)[0] || null;
  const attrs = { friendly_name: "CronologIA Próximo compromisso", icon: "mdi:calendar-clock", device_class: "timestamp" };
  if (!next) return { state: "unknown", attributes: { ...attrs, titulo: null, agora: current ? String(current.e.summary || "") : null } };
  return {
    state: local(next.s),
    attributes: {
      ...attrs,
      titulo: String(next.e.summary || ""),
      fim: local(next.f),
      local: next.e.location || null,
      calendario: next.cal.nome,
      minutos: Math.max(0, Math.round((next.s - now) / 60000)),
      agora: current ? String(current.e.summary || "") : null,
    },
  };
}

export class NextSensor {
  /** {rest, token, log, enabled: () => bool, events: async (from: Date, to: Date) => {lista}, checks: () => object} */
  constructor({ rest, token, log, enabled, events, checks }) {
    Object.assign(this, { rest, token, log, enabled, events, checks });
    this.last = "";
    this.warned = false;
    this.busy = false;
    this.timer = null;
  }

  /** After a change of the calendars or of a Feito: once in 2 seconds at most. */
  schedule() {
    if (this.timer || !this.enabled()) return;
    this.timer = setTimeout(() => {
      this.timer = null;
      this.publish().catch(() => {});
    }, 2000);
  }

  async publish(now = Date.now()) {
    if (!this.rest || !this.token || !this.enabled() || this.busy) return;
    this.busy = true;
    try {
      const { lista } = await this.events(new Date(now), new Date(now + AHEAD_MS));
      const body = JSON.stringify(nextState(lista, this.checks(), now));
      // the minutes change every time: send when something else changed, or the minutes are 5 apart
      const sig = body.replace(/"minutos":\d+/, "");
      if (sig === this.last && now - this.sentAt < 5 * 60000) return;
      const res = await fetch(`${this.rest}/states/${NEXT_ID}`, {
        method: "POST",
        headers: { authorization: `Bearer ${this.token}`, "content-type": "application/json" },
        body,
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.last = sig;
      this.sentAt = now;
      this.warned = false;
    } catch (err) {
      if (!this.warned) this.log.warn(`Sensor ${NEXT_ID}: ${err.message}`);
      this.warned = true;
    } finally {
      this.busy = false;
    }
  }

  async remove() {
    this.last = "";
    if (!this.rest || !this.token) return;
    try {
      await fetch(`${this.rest}/states/${NEXT_ID}`, { method: "DELETE", headers: { authorization: `Bearer ${this.token}` }, signal: AbortSignal.timeout(10000) });
    } catch (err) {
      /* offline: it goes with the next restart of Home Assistant */
    }
  }
}
