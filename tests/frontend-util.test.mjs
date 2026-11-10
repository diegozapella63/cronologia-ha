// frontend/src/util.js: the pure helpers of the screens (text, dates, labels, colors) and
// prepareImage (with a fake canvas, bitmap and FileReader).
import { at } from "./helpers.mjs";
import { describe, it, afterEach } from "node:test";
import assert from "node:assert/strict";
import * as U from "../frontend/src/util.js";

describe("util: nearestColor (1.64.0: one palette in every app; a saved color out of it becomes the nearest)", () => {
  it("an id or a name of the palette is itself", () => {
    assert.equal(U.nearestColor("azul").id, "azul");
    assert.equal(U.nearestColor("Lilás").id, "lilas");
    assert.equal(U.nearestColor("indigo").id, "indigo");
  });
  it("a #hex becomes the nearest color of the palette", () => {
    assert.equal(U.nearestColor("#62B5FF").id, "azul");
    assert.equal(U.nearestColor("#1e88e5").id, "azul");
    assert.equal(U.nearestColor("#ff0000").id, "vermelho");
    assert.equal(U.nearestColor("#9e9e9e").id, "grafite");
    assert.equal(U.nearestColor("#4caf50").id, "verde");
    assert.equal(U.nearestColor("ff77a9").id, "rosa");
  });
  it("anything else: null (the app falls back to its default)", () => {
    for (const v of ["", null, undefined, 3, "roxo", "#12"]) assert.equal(U.nearestColor(v), null, String(v));
  });
});

describe("util: colors", () => {
  it("palette, colorById, autoColor cycles", () => {
    assert.equal(U.PALETTE.length, 12);
    assert.equal(U.colorById("azul").fill, "#62B5FF");
    assert.equal(U.colorById("nada"), undefined);
    assert.equal(U.autoColor(0).id, "turquesa");
    assert.equal(U.autoColor(12).id, "turquesa");
    assert.equal(U.autoColor(13).id, "lilas");
  });
  it("hexToRgba with 6 and 3 digits", () => {
    assert.equal(U.hexToRgba("#FF5A4F", 0.15), "rgba(255, 90, 79, 0.15)");
    assert.equal(U.hexToRgba("#0f8", 1), "rgba(0, 255, 136, 1)");
  });
  it("colorVars: the ink is the fill in dark mode", () => {
    const c = U.colorById("verde");
    assert.equal(U.colorVars(c, false), "--c:#8BD45F;--ci:#3F7A17;--cs:rgba(139, 212, 95, 0.15);");
    assert.equal(U.colorVars(c, true, "a"), "--a:#8BD45F;--ai:#8BD45F;--as:rgba(139, 212, 95, 0.18);");
  });
});

describe("util: text", () => {
  it("fold drops accents and case (keeps spaces)", () => {
    assert.equal(U.fold("Ação Já "), "acao ja ");
    assert.equal(U.fold(null), "");
  });
  it("foldKeepLength keeps the length, so indexes map back", () => {
    for (const s of ["Ação", "Fogão Brastemp", "İstanbul", "ﬁm", "Ünïcödé"]) {
      const f = U.foldKeepLength(s);
      assert.equal(Array.from(f).length, Array.from(s).length, s);
    }
    assert.equal(U.foldKeepLength("Ação"), "acao");
    const text = "Limpar o Fogão";
    const i = U.foldKeepLength(text).indexOf("fogao");
    assert.equal(text.slice(i, i + 5), "Fogão");
  });
  it("plural, clip, cap", () => {
    assert.equal(U.plural(1, "dia", "dias"), "1 dia");
    assert.equal(U.plural(0, "dia", "dias"), "0 dias");
    assert.equal(U.clip("abcdef", 4), "abc…");
    assert.equal(U.clip("ab cdef", 4), "ab…", "no space before the ellipsis");
    assert.equal(U.clip("abc", 4), "abc");
    assert.equal(U.clip(null), "");
    assert.equal(U.cap("hoje"), "Hoje");
    assert.equal(U.cap(""), "");
  });
  it("splitLinks: text and links in order (closing parenthesis left out of the link)", () => {
    assert.deepEqual(U.splitLinks("Veja https://x.com/a?b=1 e (http://y.br)."), [{ text: "Veja " }, { url: "https://x.com/a?b=1" }, { text: " e (" }, { url: "http://y.br" }, { text: ")." }]);
    assert.deepEqual(U.splitLinks("https://só.link"), [{ url: "https://só.link" }]);
    assert.deepEqual(U.splitLinks("sem link"), [{ text: "sem link" }]);
    assert.deepEqual(U.splitLinks(""), []);
    assert.deepEqual(U.splitLinks(null), []);
  });
});

describe("util: dates", () => {
  it("ymd, hm, fromYmd, parseWhen, isoLocal", () => {
    assert.equal(U.ymd(at(2026, 1, 5)), "2026-01-05");
    assert.equal(U.hm(at(2026, 1, 5, 7, 3)), "07:03");
    assert.deepEqual(U.fromYmd("2026-11-02"), at(2026, 11, 2));
    assert.deepEqual(U.parseWhen("2026-11-02"), at(2026, 11, 2));
    assert.deepEqual(U.parseWhen("2026-11-02T12:00:00Z"), at(2026, 11, 2, 9));
    assert.equal(U.isoLocal(at(2026, 11, 2, 9, 30, 45)), "2026-11-02T09:30:00-03:00");
  });
  it("startOfDay, addDays (keeps the time), addMonths (first day), sameDay, dayDiff", () => {
    assert.deepEqual(U.startOfDay(at(2026, 11, 2, 15, 1)), at(2026, 11, 2));
    assert.deepEqual(U.addDays(at(2026, 10, 30, 15, 1, 2), 3), at(2026, 11, 2, 15, 1, 2));
    assert.deepEqual(U.addDays(at(2026, 1, 1), -1), at(2025, 12, 31));
    assert.deepEqual(U.addMonths(at(2026, 1, 31), 1), at(2026, 2, 1));
    assert.deepEqual(U.addMonths(at(2026, 1, 15), -2), at(2025, 11, 1));
    assert.equal(U.sameDay(at(2026, 11, 2, 0), at(2026, 11, 2, 23, 59)), true);
    assert.equal(U.sameDay(at(2026, 11, 2), at(2025, 11, 2)), false);
    assert.equal(U.dayDiff(at(2026, 11, 3, 1), at(2026, 11, 2, 23)), 1);
    assert.equal(U.dayDiff(at(2026, 10, 1), at(2026, 11, 2)), -32);
  });
  it("startOfWeek from Sunday (default) or Monday", () => {
    assert.deepEqual(U.startOfWeek(at(2026, 11, 4, 10)), at(2026, 11, 1));
    assert.deepEqual(U.startOfWeek(at(2026, 11, 4, 10), 1), at(2026, 11, 2));
    assert.deepEqual(U.startOfWeek(at(2026, 11, 1), 1), at(2026, 10, 26));
    assert.deepEqual(U.startOfWeek(at(2026, 11, 2), 1), at(2026, 11, 2));
  });
  it("dayLabel: Hoje, Amanhã, Ontem, else weekday and date (year when another)", () => {
    const now = at(2026, 11, 2, 14);
    assert.equal(U.dayLabel(at(2026, 11, 2, 23), now), "Hoje");
    assert.equal(U.dayLabel(at(2026, 11, 3), now), "Amanhã");
    assert.equal(U.dayLabel(at(2026, 11, 1), now), "Ontem");
    assert.equal(U.dayLabel(at(2026, 11, 5), now), "Quinta, 5 de novembro");
    assert.equal(U.dayLabel(at(2026, 11, 5), now, { long: false, cap: false }), "quinta, 5 de nov");
    assert.equal(U.dayLabel(at(2027, 1, 1), now), "Sexta, 1 de janeiro de 2027");
    assert.equal(U.dayLabel(at(2026, 11, 2), now, { cap: false }), "hoje");
  });
  it("dateLong, dateShort", () => {
    assert.equal(U.dateLong(at(2026, 10, 19)), "segunda, 19 de outubro");
    assert.equal(U.dateShort(at(2026, 3, 7), at(2026, 11, 2)), "7 mar");
    assert.equal(U.dateShort(at(2025, 3, 7), at(2026, 11, 2)), "7 mar 2025");
  });
  it("untilLabel and durationLabel", () => {
    const min = 60000;
    assert.equal(U.untilLabel(20000), "agora");
    assert.equal(U.untilLabel(42 * min), "em 42 min");
    assert.equal(U.untilLabel(60 * min), "em 1 h");
    assert.equal(U.untilLabel(150 * min), "em 2 h 30 min");
    assert.equal(U.untilLabel(5 * 60 * min + 20 * min), "em 5 h", "minutes only under 4 h");
    assert.equal(U.untilLabel(24 * 60 * min), "em 1 dia");
    assert.equal(U.untilLabel(36 * 60 * min), "em 2 dias");
    assert.equal(U.durationLabel(15 * min), "15 min");
    assert.equal(U.durationLabel(60 * min), "1 h");
    assert.equal(U.durationLabel(90 * min), "1 h 30 min");
  });
  it("greeting by the hour, with the first name", () => {
    assert.equal(U.greeting("Davi Souza", at(2026, 11, 2, 5)), "Bom dia, Davi");
    assert.equal(U.greeting("", at(2026, 11, 2, 12)), "Boa tarde");
    assert.equal(U.greeting("Ana", at(2026, 11, 2, 18)), "Boa noite, Ana");
    assert.equal(U.greeting(null, at(2026, 11, 2, 3)), "Boa noite");
  });
});

describe("util: recurrence", () => {
  it("rruleLabel", () => {
    assert.equal(U.rruleLabel(""), "");
    assert.equal(U.rruleLabel("FREQ=DAILY"), "Todo dia");
    assert.equal(U.rruleLabel("RRULE:FREQ=WEEKLY;INTERVAL=2"), "A cada 2 semanas");
    assert.equal(U.rruleLabel("FREQ=WEEKLY;BYDAY=MO,WE,FR"), "Toda semana (seg, qua, sex)");
    assert.equal(U.rruleLabel("FREQ=MONTHLY;COUNT=1"), "Todo mês, 1 vez");
    assert.equal(U.rruleLabel("FREQ=YEARLY;INTERVAL=3;COUNT=4"), "A cada 3 anos, 4 vezes");
    assert.equal(U.rruleLabel("FREQ=DAILY;UNTIL=20261231T235959Z"), "Todo dia até 31/12/2026");
    assert.equal(U.rruleLabel("FREQ=DAILY;BYDAY=MO"), "Todo dia", "BYDAY only for weeks");
    assert.equal(U.rruleLabel("FREQ=HOURLY"), "Repete");
  });
  it("freqOf and REPEATS", () => {
    assert.equal(U.freqOf("FREQ=MONTHLY;INTERVAL=2"), "MONTHLY");
    assert.equal(U.freqOf(null), "");
    assert.deepEqual(
      U.REPEATS.map((r) => r.id),
      ["", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"],
    );
  });
});

describe("util: shortNames", () => {
  it("drops the 2+ words lists share at the start", () => {
    const m = U.shortNames([
      { id: "a", name: "Notas e Rotinas do Alexa Shopping list" },
      { id: "b", name: "Notas e Rotinas do Alexa To-do list" },
      { id: "c", name: "Casa" },
      { id: "d", name: "Casa Praia" },
    ]);
    assert.deepEqual(m.get("a"), { short: "Shopping list", group: "Notas e Rotinas do Alexa" });
    assert.deepEqual(m.get("b"), { short: "To-do list", group: "Notas e Rotinas do Alexa" });
    assert.deepEqual(m.get("c"), { short: "Casa", group: "" }, "one word in common is not a group");
    assert.deepEqual(m.get("d"), { short: "Casa Praia", group: "" });
  });
  it("never leaves a name empty; case does not matter", () => {
    const m = U.shortNames([
      { id: "a", name: "Lista da casa" },
      { id: "b", name: "lista da Casa" },
    ]);
    assert.deepEqual(m.get("a"), { short: "casa", group: "Lista da" });
    assert.deepEqual(m.get("b"), { short: "Casa", group: "lista da" });
  });
});

describe("util: prepareImage (a photo shrunk before it goes to the AI)", () => {
  const saved = {};
  const stub = (k, v) => {
    if (!(k in saved)) saved[k] = Object.getOwnPropertyDescriptor(globalThis, k);
    Object.defineProperty(globalThis, k, { value: v, configurable: true, writable: true });
  };
  afterEach(() => {
    for (const [k, d] of Object.entries(saved)) {
      if (d) Object.defineProperty(globalThis, k, d);
      else delete globalThis[k];
      delete saved[k];
    }
  });
  // a FileReader like the browser's: data URL of the blob
  class FakeReader {
    readAsDataURL(blob) {
      blob
        .arrayBuffer()
        .then((b) => {
          if (blob.size === 0) throw new Error("vazio");
          this.result = `data:${blob.type};base64,${Buffer.from(b).toString("base64")}`;
          this.onload();
        })
        .catch((err) => {
          this.error = err;
          this.onerror();
        });
    }
  }
  const setup = (bitmap) => {
    const drawn = [];
    const canvas = { getContext: () => ({ drawImage: (...a) => drawn.push(a.slice(1)) }), toBlob: (cb, type, q) => cb(new Blob([`jpeg ${q}`], { type })) };
    stub("FileReader", FakeReader);
    stub("document", { createElement: (t) => (t === "canvas" ? canvas : null) });
    stub("createImageBitmap", async (file, opts) => {
      if (opts.imageOrientation !== "from-image") throw new Error("orientation");
      if (bitmap instanceof Error) throw bitmap;
      return bitmap;
    });
    return { canvas, drawn };
  };
  const b64 = (s) => Buffer.from(s).toString("base64");
  it("a big photo: the longest side down to 1800 px, as JPEG (0.86), the phone's rotation applied", async () => {
    let closed = 0;
    const { canvas, drawn } = setup({ width: 4000, height: 3000, close: () => closed++ });
    const out = await U.prepareImage(new Blob(["original"], { type: "image/png" }));
    assert.deepEqual([canvas.width, canvas.height], [1800, 1350]);
    assert.deepEqual(drawn, [[0, 0, 1800, 1350]]);
    assert.equal(out.mime, "image/jpeg");
    assert.equal(out.data, b64("jpeg 0.86"));
    assert.match(out.url, /^blob:/);
    assert.equal(closed, 1, "the bitmap is released");
  });
  it("a small one keeps its size; another limit can be given", async () => {
    const { canvas } = setup({ width: 800, height: 1200 });
    await U.prepareImage(new Blob(["x"], { type: "image/jpeg" }));
    assert.deepEqual([canvas.width, canvas.height], [800, 1200]);
    await U.prepareImage(new Blob(["x"], { type: "image/jpeg" }), 600);
    assert.deepEqual([canvas.width, canvas.height], [400, 600]);
  });
  it("a photo the browser can't decode goes as it is (its own type, else JPEG)", async () => {
    setup(new Error("formato não suportado"));
    const heic = await U.prepareImage(new Blob(["heic bytes"], { type: "image/heic" }));
    assert.deepEqual([heic.mime, heic.data], ["image/heic", b64("heic bytes")]);
    assert.match(heic.url, /^blob:/);
    const none = await U.prepareImage(new Blob(["raw"]));
    assert.equal(none.mime, "image/jpeg");
  });
  it("a file that can't be read rejects", async () => {
    setup(new Error("x"));
    await assert.rejects(U.prepareImage(new Blob([])), /vazio/);
  });
});
