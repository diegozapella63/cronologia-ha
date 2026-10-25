// Recompensas: points for the chores (rotina) and maintenance done, a scoreboard
// per period (week, two weeks or month) and the prize of each period.
// Shared by the server (lib/) and the UI (bundled from frontend/src).

export const PERIODS = {
  semana: { label: "Semanal", noun: "semana" },
  quinzena: { label: "Quinzenal", noun: "quinzena" },
  mes: { label: "Mensal", noun: "mês" },
};

const DAY = 86400000;
const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const MONTHS_LONG = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const pad = (n) => String(n).padStart(2, "0");
export const ymdOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const dateOf = (s) => {
  const [y, m, d] = String(s).slice(0, 10).split("-").map(Number);
  return new Date(y, m - 1, d);
};
const startOfWeek = (d, ws) => {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() - ((x.getDay() - ws + 7) % 7));
  return x;
};

/** Settings as stored in the app prefs, with defaults. */
export function scoreSettings(app = {}) {
  const s = app.score || {};
  return {
    enabled: !!s.enabled,
    participants: Array.isArray(s.participants) ? s.participants : [],
    period: PERIODS[s.period] ? s.period : "semana",
    anchor: s.anchor || null,
    notify: s.notify !== false,
    weekStart: app.week_start === 0 ? 0 : 1,
  };
}

/** The period that contains `date`: {key (start date), start, end (exclusive), label}. */
export function periodOf(date, settings) {
  const d = new Date(date);
  let start;
  let end;
  if (settings.period === "mes") {
    start = new Date(d.getFullYear(), d.getMonth(), 1);
    end = new Date(d.getFullYear(), d.getMonth() + 1, 1);
  } else {
    const week = startOfWeek(d, settings.weekStart);
    if (settings.period === "quinzena") {
      // two-week blocks counted from the anchor (the week the scoreboard started)
      const anchor = startOfWeek(settings.anchor ? dateOf(settings.anchor) : new Date(2024, 0, 1), settings.weekStart);
      const n = Math.floor(Math.round((week - anchor) / DAY) / 14);
      start = new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate() + n * 14);
      end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 14);
    } else {
      start = week;
      end = new Date(week.getFullYear(), week.getMonth(), week.getDate() + 7);
    }
  }
  return { key: ymdOf(start), start: ymdOf(start), end: ymdOf(end), label: periodLabel(start, end, settings.period) };
}

export function periodLabel(start, end, period) {
  const a = typeof start === "string" ? dateOf(start) : start;
  const e = typeof end === "string" ? dateOf(end) : end;
  const b = new Date(e.getFullYear(), e.getMonth(), e.getDate() - 1);
  if (period === "mes") return `${MONTHS_LONG[a.getMonth()].replace(/^./, (c) => c.toUpperCase())}${a.getFullYear() !== new Date().getFullYear() ? ` de ${a.getFullYear()}` : ""}`;
  if (a.getMonth() === b.getMonth()) return `${a.getDate()} a ${b.getDate()} de ${MONTHS[b.getMonth()]}`;
  return `${a.getDate()} ${MONTHS[a.getMonth()]} a ${b.getDate()} ${MONTHS[b.getMonth()]}`;
}

/** Points of each participant in [start, end): [{name, points, count}], most points first. */
export function tally(entries, participants, start, end) {
  const t0 = dateOf(start).getTime();
  const t1 = dateOf(end).getTime();
  const fold = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  const rows = participants.map((name) => ({ name, points: 0, count: 0 }));
  for (const e of entries) {
    const at = Date.parse(e.at);
    if (!(at >= t0 && at < t1)) continue;
    const r = rows.find((x) => fold(x.name) === fold(e.who));
    if (!r) continue;
    r.points += Number(e.points) || 0;
    r.count += 1;
  }
  return rows.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name, "pt-BR"));
}

/** Winner of a tally, or null on a tie (or nobody scored). */
export function winnerOf(rows) {
  if (!rows.length || rows[0].points <= 0) return null;
  if (rows.length > 1 && rows[1].points === rows[0].points) return null;
  return rows[0].name;
}
