// zip.js and data.js: the backup ZIP, CSVs, imports (zip/json, re-packed by
// Windows/macOS), the share folder and the automatic versions — plus a full
// round trip store -> backup -> import -> store.
import { at, makeLog, tmpDir } from "./helpers.mjs";
import { describe, it, afterEach, beforeEach, mock } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { crc32, makeZip, readZip } from "../cronologia/rootfs/app/lib/zip.js";
import { appData, eventsCSV, pointsCSV, backupZip, parseImport, Backups, summarize, listVersions, readVersion, fileStamp, VERSION_RE } from "../cronologia/rootfs/app/lib/data.js";
import { Store } from "../cronologia/rootfs/app/lib/store.js";
import { parseICS } from "../frontend/src/ics.js";

const dirs = [];
const newDir = () => {
  const d = tmpDir("cronologia-data-");
  dirs.push(d);
  return d;
};
afterEach(() => {
  mock.timers.reset();
  while (dirs.length) fs.rmSync(dirs.pop(), { recursive: true, force: true });
});
const errOf = (fn) => {
  try {
    fn();
  } catch (e) {
    return e;
  }
  return null;
};

describe("zip: crc32", () => {
  it("matches the standard check value", () => {
    assert.equal(crc32(Buffer.from("123456789")), 0xcbf43926);
    assert.equal(crc32(Buffer.alloc(0)), 0);
    assert.equal(crc32(Buffer.from("The quick brown fox jumps over the lazy dog")), 0x414fa339);
  });
});

describe("zip: makeZip / readZip", () => {
  it("round trip: text, binary, UTF-8 names, empty file; stored when deflate does not help", () => {
    const random = Buffer.from(Array.from({ length: 64 }, (_, i) => (i * 97 + 13) % 256));
    const files = [
      { name: "cronologia.json", data: JSON.stringify({ a: "ção ".repeat(500) }) },
      { name: "calendarios/Remédios & Casa.ics", data: "BEGIN:VCALENDAR\r\nEND:VCALENDAR\r\n" },
      { name: "bin.dat", data: random },
      { name: "vazio.txt", data: "" },
    ];
    const zip = makeZip(files, at(2026, 11, 2, 14, 30, 8));
    const back = readZip(zip);
    assert.deepEqual(
      back.map((f) => f.name),
      files.map((f) => f.name),
    );
    for (let i = 0; i < files.length; i++) assert.deepEqual(back[i].data, Buffer.isBuffer(files[i].data) ? files[i].data : Buffer.from(files[i].data, "utf8"));
    // compression method per entry (local header offset 8): deflate for text, stored for incompressible bytes
    const methods = [];
    let p = 0;
    for (let i = 0; i < files.length; i++) {
      assert.equal(zip.readUInt32LE(p), 0x04034b50);
      methods.push(zip.readUInt16LE(p + 8));
      p += 30 + zip.readUInt16LE(p + 26) + zip.readUInt32LE(p + 18);
    }
    assert.deepEqual(methods, [8, 8, 0, 0]);
  });
  it("writes the DOS date and time and the UTF-8 flag", () => {
    const zip = makeZip([{ name: "a.txt", data: "x" }], at(2026, 11, 2, 14, 30, 8));
    assert.equal(zip.readUInt16LE(6) & 0x0800, 0x0800);
    const time = zip.readUInt16LE(10);
    const day = zip.readUInt16LE(12);
    assert.deepEqual([time >> 11, (time >> 5) & 63, (time & 31) * 2], [14, 30, 8]);
    assert.deepEqual([(day >> 9) + 1980, (day >> 5) & 15, day & 31], [2026, 11, 2]);
  });
  it("an empty zip is valid", () => {
    assert.deepEqual(readZip(makeZip([])), []);
  });
  it("folders are skipped; latin1 names without the UTF-8 flag", () => {
    const zip = makeZip([
      { name: "pasta/", data: "" },
      { name: "pasta/a.txt", data: "oi" },
    ]);
    assert.deepEqual(
      readZip(zip).map((f) => f.name),
      ["pasta/a.txt"],
    );
    // clear the UTF-8 flag (local and central) of a single-entry zip with a latin1 name
    const name = Buffer.from("café.txt", "latin1");
    const z = makeZip([{ name: "cafX.txt", data: "x" }]);
    const cd = z.readUInt32LE(z.length - 22 + 16);
    z.writeUInt16LE(0, cd + 8);
    name.copy(z, cd + 46);
    assert.equal(readZip(z)[0].name, "café.txt");
  });
  it("reads entries with extra fields and a comment (as other zip tools write them)", () => {
    // build by hand: one stored entry with an extra field in both headers and a file comment
    const data = Buffer.from("hello");
    const name = Buffer.from("x.txt");
    const extra = Buffer.from([0x55, 0x54, 0x01, 0x00, 0x00]);
    const comment = Buffer.from("comentário");
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(0, 8);
    local.writeUInt32LE(crc32(data), 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(extra.length, 28);
    const cen = Buffer.alloc(46);
    cen.writeUInt32LE(0x02014b50, 0);
    cen.writeUInt16LE(0, 10);
    cen.writeUInt32LE(data.length, 20);
    cen.writeUInt32LE(data.length, 24);
    cen.writeUInt16LE(name.length, 28);
    cen.writeUInt16LE(extra.length, 30);
    cen.writeUInt16LE(comment.length, 32);
    cen.writeUInt32LE(0, 42);
    const body = Buffer.concat([local, name, extra, data]);
    const central = Buffer.concat([cen, name, extra, comment]);
    const end = Buffer.alloc(22);
    end.writeUInt32LE(0x06054b50, 0);
    end.writeUInt16LE(1, 8);
    end.writeUInt16LE(1, 10);
    end.writeUInt32LE(central.length, 12);
    end.writeUInt32LE(body.length, 16);
    const zip = Buffer.concat([body, central, end, Buffer.from("zip comment at the end")]);
    zip.writeUInt16LE(22, body.length + central.length + 20);
    const [f] = readZip(zip);
    assert.equal(f.name, "x.txt");
    assert.equal(f.data.toString(), "hello");
  });
  it("refuses a broken, a password-protected, an unknown-compression or a too big zip", () => {
    assert.match(errOf(() => readZip(Buffer.from("not a zip at all, just some bytes here"))).message, /incompleto|não é um \.zip/);
    const ok = makeZip([{ name: "a.txt", data: "a".repeat(1000) }]);
    const cd = ok.readUInt32LE(ok.length - 22 + 16);
    const broken = Buffer.from(ok);
    broken.writeUInt32LE(0, cd);
    assert.match(errOf(() => readZip(broken)).message, /danificado/);
    const locked = Buffer.from(ok);
    locked.writeUInt16LE(locked.readUInt16LE(cd + 8) | 1, cd + 8);
    assert.match(errOf(() => readZip(locked)).message, /senha/);
    const bzip = Buffer.from(ok);
    bzip.writeUInt16LE(12, cd + 10);
    assert.match(errOf(() => readZip(bzip)).message, /\(12\)/);
    assert.match(errOf(() => readZip(ok, { maxTotal: 999 })).message, /grande demais/);
    assert.equal(readZip(ok, { maxTotal: 1000 }).length, 1);
  });
  it("what makeZip deflates is plain raw deflate (any unzip reads it)", () => {
    const zip = makeZip([{ name: "a.txt", data: "abc".repeat(100) }]);
    const size = zip.readUInt32LE(18);
    const body = zip.subarray(30 + zip.readUInt16LE(26), 30 + zip.readUInt16LE(26) + size);
    assert.equal(zlib.inflateRawSync(body).toString(), "abc".repeat(100));
  });
});

describe("data: CSV exports", () => {
  const strip = (buf) => {
    const s = buf.toString("utf8");
    assert.equal(s.charCodeAt(0), 0xfeff, "starts with the BOM for Excel");
    return s.slice(1);
  };
  it("eventsCSV: one row per occurrence, ';' separated, quoted when needed, dates in Brazilian format", () => {
    const csv = strip(
      eventsCSV([
        {
          name: "Casa",
          events: [
            { summary: "Conta de luz", start: "2026-11-05", end: "2026-11-06", all_day: true, description: "#conta\nValor: R$ 231,40", rrule: "FREQ=MONTHLY" },
            { summary: 'Reunião "geral"; sala 2', start: "2026-11-02T09:30:00-03:00", end: "2026-11-02T10:00:00-03:00", location: "Sala Ipê" },
          ],
        },
      ]),
    );
    const lines = csv.split("\r\n");
    assert.equal(lines[0], "Calendário;Título;Início;Fim;Dia todo;Local;Repete;Modelo;Notas");
    assert.equal(lines[1], 'Casa;Conta de luz;05/11/2026;06/11/2026;sim;;FREQ=MONTHLY;Conta a pagar;"#conta\nValor: R$ 231,40"');
    assert.equal(lines[2], 'Casa;"Reunião ""geral""; sala 2";02/11/2026 09:30;02/11/2026 10:00;;Sala Ipê;;;');
    assert.equal(lines[3], "");
  });
  it("pointsCSV: oldest first, with the kind in words", () => {
    const csv = strip(
      pointsCSV({
        score: {
          entries: [
            { at: at(2026, 11, 2, 10).toISOString(), who: "Davi", points: 10, title: "Regar", kind: "rotina" },
            { at: at(2026, 11, 1, 9, 5).toISOString(), who: "Aurora", points: -5, title: "Toalha", kind: "demerito" },
            { at: at(2026, 11, 2, 11).toISOString(), who: "Davi", points: 3, title: "Outro", kind: "novo" },
          ],
        },
      }),
    );
    assert.deepEqual(csv.split("\r\n").slice(0, 4), ["Quando;Quem;Pontos;O que;Tipo", "01/11/2026 09:05;Aurora;-5;Toalha;demérito", "02/11/2026 10:00;Davi;10;Regar;rotina", "02/11/2026 11:00;Davi;3;Outro;novo"]);
    assert.equal(strip(pointsCSV({})), "Quando;Quem;Pontos;O que;Tipo\r\n");
  });
});

describe("data: appData and the backup ZIP", () => {
  const store = () => ({ data: { version: 1, calendars: { "calendar.casa": { name: "Casa" } }, app: { accent: "azul" }, checks: { k: { at: "2026-11-02T12:00:00.000Z" } }, sent: { x: {} }, mirror: { y: {} }, kind_cals: [], score: { entries: [] } } });
  it("appData leaves out the alerts sent and the ResolvIA links", () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2, 14).getTime() });
    const d = appData(store(), "1.37.1");
    assert.equal(d.app_name, "CronologIA");
    assert.equal(d.app_version, "1.37.1");
    assert.equal(d.exported_at, at(2026, 11, 2, 14).toISOString());
    assert.equal("sent" in d, false);
    assert.equal("mirror" in d, false);
    assert.deepEqual(d.calendars, { "calendar.casa": { name: "Casa" } });
  });
  it("backupZip: app data, CSVs, one .ics per calendar (unique, safe names) and a LEIA-ME", () => {
    const cals = [
      { entity_id: "calendar.casa", name: "Casa", events: [{ summary: "Lixo", start: "2026-11-02T19:00:00-03:00", end: "2026-11-02T19:15:00-03:00", description: "#rotina\nPontos: 10" }] },
      { entity_id: "calendar.casa_2", name: "casa", events: [] },
      { entity_id: "calendar.x", name: 'A/B:C*?"<>|', events: [] },
      { entity_id: "calendar.y", name: "", events: [] },
    ];
    const files = readZip(backupZip(appData(store(), "1.37.1"), cals, "1.37.1", "do último ano aos próximos 13 meses"));
    assert.deepEqual(
      files.map((f) => f.name),
      ["cronologia.json", "eventos.csv", "pontos.csv", "calendarios/Casa.ics", "calendarios/casa 2.ics", "calendarios/A-B-C------.ics", "calendarios/Calendário.ics", "LEIA-ME.txt"],
    );
    assert.equal(JSON.parse(files[0].data.toString()).app.accent, "azul");
    const ics = files[3].data.toString();
    assert.match(ics, /X-WR-CALNAME:Casa/);
    assert.match(ics, /SUMMARY:Lixo/);
    assert.match(files[7].data.toString(), /do último ano aos próximos 13 meses/);
  });
});

describe("data: parseImport", () => {
  const json = { app_name: "CronologIA", calendars: {}, app: { accent: "rosa" } };
  it("a .json file, with or without BOM", () => {
    assert.deepEqual(parseImport(Buffer.from(JSON.stringify(json)), "x.json"), json);
    assert.deepEqual(parseImport(Buffer.from("﻿" + JSON.stringify(json))), json);
  });
  it("a backup .zip (by content or by name)", () => {
    const zip = makeZip([
      { name: "eventos.csv", data: "x" },
      { name: "cronologia.json", data: JSON.stringify(json) },
    ]);
    assert.deepEqual(parseImport(zip, "qualquer.bin"), json);
    assert.deepEqual(parseImport(zip, "backup.ZIP"), json);
  });
  it("a .zip re-packed by macOS (folder, __MACOSX and ._ files) or with another .json name", () => {
    const mac = makeZip([
      { name: "__MACOSX/backup/._cronologia.json", data: "\u0000\u0005junk" },
      { name: "backup/._cronologia.json", data: "junk" },
      { name: "backup/cronologia.json", data: JSON.stringify(json) },
    ]);
    assert.deepEqual(parseImport(mac), json);
    const other = makeZip([{ name: "dados.json", data: JSON.stringify({ score: {} }) }]);
    assert.deepEqual(parseImport(other), { score: {} });
  });
  it("refuses a zip without json, broken json, or a json of another app", () => {
    for (const [buf, re] of [
      [makeZip([{ name: "a.txt", data: "x" }]), /não tem o arquivo cronologia\.json/],
      [Buffer.from("{oops"), /não é um backup/],
      [Buffer.from(JSON.stringify({ outra: "coisa" })), /não é do CronologIA/],
      [Buffer.from("[]"), /não é do CronologIA/],
      [Buffer.from("null"), /não é do CronologIA/],
    ]) {
      const e = errOf(() => parseImport(buf, "f"));
      assert.match(e.message, re);
      assert.equal(e.code, "invalid_format");
    }
  });
});

describe("data: the share folder (Backups)", () => {
  it("save, list (newest first), read back; the same minute gets -2", () => {
    mock.timers.enable({ apis: ["Date"], now: at(2026, 11, 2, 14, 5).getTime() });
    const dir = path.join(newDir(), "share", "cronologia");
    const b = new Backups({ dir });
    assert.equal(b.available(), true);
    const zip = makeZip([{ name: "cronologia.json", data: JSON.stringify({ app: { accent: "verde" } }) }]);
    const a = b.save(zip);
    const c = b.save(zip);
    assert.equal(a.name, "cronologia-2026-11-02-1405.zip");
    assert.equal(c.name, "cronologia-2026-11-02-1405-2.zip");
    assert.equal(a.folder, "share/cronologia");
    fs.writeFileSync(path.join(dir, "outro.zip"), "x");
    fs.utimesSync(path.join(dir, a.name), new Date(2026, 0, 1), new Date(2026, 0, 1));
    const l = b.list();
    assert.equal(l.available, true);
    assert.deepEqual(
      l.backups.map((x) => x.name),
      [c.name, a.name],
    );
    assert.equal(l.backups[0].size, zip.length);
    assert.deepEqual(b.read(a.name), { app: { accent: "verde" } });
  });
  it("read refuses names outside the pattern and missing files", () => {
    const b = new Backups({ dir: newDir() });
    for (const n of ["../../etc/passwd", "cronologia-x.json", "", null]) assert.equal(errOf(() => b.read(n)).code, "invalid_format", String(n));
    assert.equal(errOf(() => b.read("cronologia-2026-01-01-0000.zip")).code, "not_found");
  });
  it("a folder that can't be created: not available, save refuses", () => {
    const base = newDir();
    const blocker = path.join(base, "arquivo");
    fs.writeFileSync(blocker, "x");
    const b = new Backups({ dir: path.join(blocker, "sub"), folderLabel: "share/x" });
    assert.equal(b.available(), false);
    assert.deepEqual(b.list(), { available: false, folder: "share/x", backups: [] });
    assert.equal(errOf(() => b.save(Buffer.from("x"))).code, "no_share");
  });
});

describe("data: automatic versions", () => {
  it("VERSION_RE and fileStamp", () => {
    assert.ok(VERSION_RE.test("cronologia-20261102-140501-auto.json"));
    assert.ok(VERSION_RE.test("cronologia-20261102-140501.json"));
    assert.ok(!VERSION_RE.test("cronologia-2026-11-02.json"));
    assert.ok(!VERSION_RE.test("../cronologia-20261102-140501-auto.json"));
    assert.equal(fileStamp(at(2026, 1, 5, 7, 3)), "2026-01-05-0703");
  });
  it("listVersions: newest first, with what each holds; broken files skipped", () => {
    const dir = newDir();
    const w = (name, d) => fs.writeFileSync(path.join(dir, name), typeof d === "string" ? d : JSON.stringify(d));
    w("cronologia-20261101-090000-auto.json", { calendars: { a: {}, b: {} }, score: { entries: [1, 2, 3] }, checks: { x: {} } });
    w("cronologia-20261102-140501-antes-de-importar.json", {});
    w("cronologia-20261102-150000.json", {});
    w("cronologia-20261102-160000-auto.json", "{broken");
    w("outro.json", {});
    const v = listVersions(dir);
    assert.deepEqual(
      v.map((x) => [x.name, x.reason]),
      [
        ["cronologia-20261102-150000.json", "auto"],
        ["cronologia-20261102-140501-antes-de-importar.json", "antes-de-importar"],
        ["cronologia-20261101-090000-auto.json", "auto"],
      ],
    );
    assert.equal(v[1].when, at(2026, 11, 2, 14, 5, 1).getTime());
    assert.deepEqual([v[2].calendars, v[2].points, v[2].checks], [2, 3, 1]);
    assert.deepEqual(listVersions(path.join(dir, "nada")), []);
    assert.deepEqual(summarize({}), { calendars: 0, points: 0, checks: 0 });
  });
  it("the copies the store makes are listed with their time and reason (store.js and data.js agree on the name)", () => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: at(2026, 11, 2, 14, 5, 9).getTime() });
    const s = new Store(newDir(), makeLog());
    s.setApp({ accent: "azul" });
    s.addPoints({ key: "k", who: "Davi", points: 3, title: "x" });
    s.flush();
    s.version("antes-de-restaurar", true);
    mock.timers.tick(60000);
    s.version("auto", true);
    const v = listVersions(s.versionsDir);
    assert.deepEqual(
      v.map((x) => [x.reason, x.when, x.points]),
      [
        ["auto", at(2026, 11, 2, 14, 6, 9).getTime(), 1],
        ["antes-de-restaurar", at(2026, 11, 2, 14, 5, 9).getTime(), 1],
      ],
    );
    assert.equal(readVersion(s.versionsDir, v[1].name).app.accent, "azul");
  });
  it("readVersion validates the name and that it exists", () => {
    const dir = newDir();
    fs.writeFileSync(path.join(dir, "cronologia-20261102-140501-auto.json"), '{"app":{"view":"lista"}}');
    assert.deepEqual(readVersion(dir, "cronologia-20261102-140501-auto.json"), { app: { view: "lista" } });
    assert.equal(errOf(() => readVersion(dir, "../x.json")).code, "invalid_format");
    assert.equal(errOf(() => readVersion(dir, "cronologia-20261102-140502-auto.json")).code, "not_found");
  });
});

describe("round trip: store -> backup ZIP -> import -> store", () => {
  let src;
  let dst;
  beforeEach(() => {
    mock.timers.enable({ apis: ["setTimeout", "Date"], now: at(2026, 11, 2, 14).getTime() });
    src = new Store(newDir(), makeLog());
    dst = new Store(newDir(), makeLog());
  });
  it("brings back settings, people, pets, checks, points and the Extrato; keeps the receiver's alerts sent", () => {
    src.setCalendar("calendar.casa", { name: "Casa", color: "laranja", hidden: true });
    src.setApp({ accent: "rosa", week_start: 0, people: { Aurora: { notify: "mobile_app_galaxy_s23" }, Mimi: { notify: null, pet: true } }, score: { enabled: true, participants: ["Davi", "Aurora"], period: "mes" }, demerits: [{ id: "toalha", title: "Toalha", points: 5 }], alerts: { late: 45, caregivers: ["mobile_app_pixel_8"] } });
    src.setCheck("calendar.casa|u1|2026-11-02", { by: "Davi", kind: "rotina", skipped: true });
    src.addPoints({ key: "k1", who: "Davi", points: 10, title: "Regar", kind: "rotina" });
    src.setPrizes("2026-11-01", "Pizza", { Davi: "Cinema" });
    src.addKindCalendar("calendar.casa");
    dst.markSent("dose", "on", ["mobile_app_x"]);
    const zip = backupZip(appData(src, "1.37.1"), [{ entity_id: "calendar.casa", name: "Casa", events: [] }], "1.37.1", "um ano");
    const raw = parseImport(zip, "backup.zip");
    dst.replaceAll(raw, "antes-de-importar");
    assert.deepEqual(dst.data.calendars, src.data.calendars);
    assert.deepEqual(dst.data.app, src.data.app);
    assert.deepEqual(dst.data.checks, src.data.checks);
    assert.deepEqual(dst.data.score.entries, src.data.score.entries);
    assert.deepEqual(dst.data.score.log, src.data.score.log);
    assert.deepEqual(dst.data.score.prizes, src.data.score.prizes);
    assert.deepEqual(dst.data.kind_cals, ["calendar.casa"]);
    assert.deepEqual(Object.keys(dst.data.sent), ["dose"]);
    // and it survives a restart
    const again = new Store(path.dirname(dst.file), makeLog());
    assert.deepEqual(again.data.app, src.data.app);
  });
  it("the .ics inside the backup is read back by the import screen", () => {
    const events = [
      { summary: "Dentista; sala 302, 3º andar", start: "2026-11-05T15:00:00-03:00", end: "2026-11-05T16:00:00-03:00", location: "Clínica Sorriso", description: "Levar o cartão\nChegar cedo" },
      { summary: "Aniversário da Ana", start: "2026-11-07", end: "2026-11-08", all_day: true },
    ];
    const files = readZip(backupZip(appData(src, "1"), [{ entity_id: "calendar.p", name: "Pessoal", events }], "1", "x"));
    const back = parseICS(files.find((f) => f.name === "calendarios/Pessoal.ics").data.toString());
    assert.deepEqual(back, [
      { title: "Dentista; sala 302, 3º andar", date: "2026-11-05", start: "15:00", end: "16:00", end_date: "", location: "Clínica Sorriso", notes: "Levar o cartão\nChegar cedo", repeat: "", rrule: "" },
      { title: "Aniversário da Ana", date: "2026-11-07", start: "", end: "", end_date: "", location: "", notes: "", repeat: "", rrule: "" },
    ]);
  });
});
