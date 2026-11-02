// Shared helpers for the unit tests (not a test file itself).
// The whole suite runs in São Paulo time (no DST since 2019, always -03:00), so
// local dates built with new Date(y, m, d, h) are stable. npm test sets TZ too;
// setting it here keeps `node --test tests/x.test.mjs` deterministic as well.
process.env.TZ = "America/Sao_Paulo";

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Local date (month 1-12). */
export const at = (y, m, d, h = 0, mi = 0, s = 0) => new Date(y, m - 1, d, h, mi, s);

const pad = (n) => String(n).padStart(2, "0");
export const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
/** "2026-11-02T09:30:00-03:00" for a local date. */
export const isoLocal = (d) => {
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return `${ymd(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${sign}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
};
export const addDaysYmd = (s, n) => {
  const [y, m, d] = s.split("-").map(Number);
  return ymd(new Date(y, m - 1, d + n));
};

/** A log that keeps what was said. */
export function makeLog() {
  const lines = [];
  return {
    lines,
    info: (m) => lines.push(["info", m]),
    warn: (m) => lines.push(["warn", m]),
    error: (m) => lines.push(["error", m]),
  };
}

export const tmpDir = (prefix = "cronologia-test-") => fs.mkdtempSync(path.join(os.tmpdir(), prefix));

/** Waits for pending promise callbacks (not timers). */
export const flushPromises = async (n = 5) => {
  for (let i = 0; i < n; i++) await new Promise((r) => setImmediate(r));
};
