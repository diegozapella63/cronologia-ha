// Sample calendars with simple recurrence, shared by dev/fake-ha.mjs (the fake
// Home Assistant) and the preview page. Plain JavaScript, no Node APIs.

const DAY = 86400000;
const pad = (n) => String(n).padStart(2, "0");
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromYmd = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const msOf = (s) => (s.length === 10 ? fromYmd(s).getTime() : Date.parse(s));

export function isoLocal(ms) {
  const d = new Date(ms);
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return `${ymd(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${sign}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
}

function fail(code, message) {
  const e = new Error(message);
  e.code = code;
  throw e;
}

const recId = (allDay, startMs) => {
  const d = new Date(startMs);
  return allDay ? ymd(d).replace(/-/g, "") : `${ymd(d).replace(/-/g, "")}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
};

function parseWhen(v) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return { allDay: true, ms: fromYmd(v).getTime() };
  const ms = Date.parse(v);
  if (!Number.isFinite(ms)) fail("invalid_format", `Invalid date: ${v}`);
  return { allDay: false, ms };
}

function parseRrule(rrule) {
  if (!rrule) return null;
  const out = { freq: null, interval: 1, count: null, until: null, byday: null };
  const WD = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };
  for (const part of rrule.replace(/^RRULE:/, "").split(";")) {
    const [k, v] = part.split("=");
    if (k === "FREQ") out.freq = v;
    else if (k === "INTERVAL") out.interval = Number(v) || 1;
    else if (k === "COUNT") out.count = Number(v);
    else if (k === "BYDAY") out.byday = v.split(",").map((d) => WD[d.slice(-2)]).filter((d) => d != null);
    else if (k === "UNTIL") {
      const m = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(v);
      if (m && m[7]) out.until = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]);
      else if (m) out.until = new Date(+m[1], +m[2] - 1, +m[3], m[4] ? +m[4] : 23, m[5] ? +m[5] : 59, m[6] ? +m[6] : 59).getTime();
    }
  }
  if (!["DAILY", "WEEKLY", "MONTHLY", "YEARLY"].includes(out.freq)) fail("invalid_format", "Unsupported rrule");
  return out;
}

function step(ms, rule, n) {
  const d = new Date(ms);
  if (rule.freq === "DAILY") d.setDate(d.getDate() + n * rule.interval);
  else if (rule.freq === "WEEKLY") d.setDate(d.getDate() + 7 * n * rule.interval);
  else if (rule.freq === "MONTHLY") d.setMonth(d.getMonth() + n * rule.interval);
  else d.setFullYear(d.getFullYear() + n * rule.interval);
  return d.getTime();
}

const mondayOf = (ms) => {
  const d = new Date(ms);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d.getTime();
};

function expand(ev, from, to) {
  const dur = ev.end - ev.start;
  const out = [];
  const rule = parseRrule(ev.rrule);
  if (!rule) {
    if (ev.start < to && ev.end > from) out.push({ start: ev.start, end: ev.end, rid: null });
    return out;
  }
  if (rule.freq === "WEEKLY" && rule.byday && rule.byday.length) {
    // Every chosen weekday of every INTERVAL-th week (weeks start on Monday).
    const week0 = mondayOf(ev.start);
    for (let i = 0, n = 0; i < 4000; i++) {
      const d = new Date(ev.start);
      d.setDate(d.getDate() + i);
      const s = d.getTime();
      if (s >= to || (rule.until != null && s > rule.until)) break;
      if (Math.round((mondayOf(s) - week0) / (7 * DAY)) % rule.interval || !rule.byday.includes(d.getDay())) continue;
      if (rule.count != null && ++n > rule.count) break;
      const rid = recId(ev.allDay, s);
      if (s + dur > from && !ev.exdates.has(rid)) out.push({ start: s, end: s + dur, rid });
    }
    return out;
  }
  for (let n = 0; n < 3000; n++) {
    const s = step(ev.start, rule, n);
    if (rule.count != null && n >= rule.count) break;
    if (rule.until != null && s > rule.until) break;
    if (s >= to) break;
    const rid = recId(ev.allDay, s);
    if (s + dur > from && !ev.exdates.has(rid)) out.push({ start: s, end: s + dur, rid });
  }
  return out;
}

const untilBefore = (rrule, occStart) => `${rrule.replace(/;?(COUNT|UNTIL)=[^;]*/g, "")};UNTIL=${ymd(new Date(occStart - DAY)).replace(/-/g, "")}`;

/** The sample calendars, with events relative to today. */
export function createCalendars() {
  let seq = 1;
  const today = () => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  };
  const at = (off, h, m = 0) => {
    const d = today();
    d.setDate(d.getDate() + off);
    d.setHours(h, m, 0, 0);
    return d.getTime();
  };
  const dayAt = (off) => {
    const d = today();
    d.setDate(d.getDate() + off);
    return d.getTime();
  };
  const nextWeekday = (wd) => (wd - today().getDay() + 7) % 7 || 7;
  const WD_CODE = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  // Doses relative to now (minutes, rounded down to the half hour, kept inside today), repeating since `since` days.
  const dose = (name, offMin, rrule, amount, who, since, notes = "") => {
    let t = Math.floor((Date.now() + offMin * 60000) / 1800000) * 1800000;
    const d0 = today().getTime();
    t = Math.min(Math.max(t, d0 + 30 * 60000), d0 + 23 * 3600000);
    const first = new Date(t);
    first.setDate(first.getDate() + since);
    const desc = `#remédio\nDose: ${amount}\nQuem toma: ${who}${notes ? `\n${notes}` : ""}`;
    return mk(name, first.getTime(), first.getTime() + 15 * 60000, { rrule, description: desc });
  };
  const monthsAgo = (m, plusDays) => {
    const d = today();
    d.setDate(d.getDate() + plusDays);
    d.setMonth(d.getMonth() - m);
    return ymd(d);
  };
  const maint = (who, every, warn, history, points = 0) =>
    ["#manutenção", who ? `Quem faz: ${who}` : "", `A cada: ${every}`, `Avisar: ${warn} dias antes`, history.length ? `Feito em: ${history.map((h) => `${h.slice(8, 10)}/${h.slice(5, 7)}/${h.slice(0, 4)}`).join(", ")}` : "", points ? `Pontos: ${points}` : ""].filter(Boolean).join("\n");
  const mk = (summary, start, end, extra = {}) => ({ uid: `fake-${seq++}`, summary, start, end, allDay: false, rrule: null, exdates: new Set(), description: "", location: "", ...extra });
  const allDay = (summary, off, days = 1, extra = {}) => mk(summary, dayAt(off), dayAt(off + days), { allDay: true, ...extra });

  const calendars = {
    "calendar.pessoal": {
      name: "Pessoal",
      platform: "local_calendar",
      features: 7,
      events: [
        mk("Pilates", at(-14, 9), at(-14, 10), { rrule: "FREQ=WEEKLY", location: "Studio Corpo Leve" }),
        mk("Água micelar", at(0, 10), at(0, 10, 15)),
        mk("Almoço com a família", at(1, 12, 30), at(1, 14), { location: "Casa da vó" }),
        mk("Dentista", at(nextWeekday(4), 15), at(nextWeekday(4), 16), { location: "Clínica Sorriso, sala 302", description: "Levar o cartão do convênio" }),
        allDay("Aniversário da Ana", 5, 1, { rrule: "FREQ=YEARLY" }),
        mk("Cinema", at(3, 20), at(3, 22, 30), { location: "Shopping Center Norte" }),
        mk("Corrida no parque", at(-2, 7), at(-2, 8), { rrule: "FREQ=WEEKLY;INTERVAL=1" }),
      ],
    },
    "calendar.remedios": {
      name: "Remédios",
      platform: "local_calendar",
      features: 7,
      events: [
        dose("DPrev 10.000 UI", -240, "FREQ=DAILY", "1 cápsula", "Andressa", -40),
        dose("Sertralina", -240, "FREQ=DAILY", "50 mg · 1 comprimido", "Andressa", -40, "Depois do café da manhã"),
        dose("Mounjaro 2,5 mg", -50, `FREQ=WEEKLY;BYDAY=${WD_CODE[today().getDay()]}`, "1 caneta", "Andressa", -21, "Aplicar na barriga, alternando o lado"),
        dose("Gardenal", -5, "FREQ=DAILY", "1/4 de comprimido", "Mimi", -60),
        dose("Ômega 3", 120, "FREQ=DAILY;INTERVAL=2", "2 cápsulas", "Diego", -20),
      ],
    },
    "calendar.casa": {
      name: "Casa",
      platform: "local_calendar",
      features: 7,
      events: [
        allDay("Regar as plantas", -10, 1, { rrule: "FREQ=DAILY", description: "#rotina\nQuem faz: Diego\nPontos: 5" }),
        mk("Tirar o lixo", at(-14, 19), at(-14, 19, 15), { rrule: `FREQ=WEEKLY;BYDAY=${[0, 2, 4].map((k) => WD_CODE[(today().getDay() + k) % 7]).join(",")}`, description: "#rotina\nQuem faz: Andressa\nPontos: 10\nO caminhão passa às 20h" }),
        allDay("Limpar a caixa de areia", -9, 1, { rrule: "FREQ=DAILY;INTERVAL=3", description: "#rotina\nQuem faz: Diego\nPontos: 15" }),
        allDay("Lavar a louça", -20, 1, { rrule: "FREQ=DAILY", description: "#rotina\nPontos: 10" }),
        allDay("Conta de luz", 3, 1, { rrule: "FREQ=MONTHLY", description: "#conta\nValor: R$ 231,40\nCelesc · débito automático desligado" }),
        allDay("Internet", -2, 1, { description: "#conta\nValor: R$ 119,90" }),
        allDay("Trocar o filtro de água", 5, 1, { description: maint("Diego", "6 meses", 7, [monthsAgo(6, 5)], 30) }),
        allDay("Limpar o ar-condicionado", -4, 1, { description: maint("Diego", "3 meses", 10, [monthsAgo(3, -4)], 40) }),
        allDay("Dedetização", 40, 1, { description: maint("", "6 meses", 15, [monthsAgo(6, 40)]) }),
        allDay("Trocar a bateria do alarme", 200, 1, { description: maint("", "1 ano", 30, []) }),
      ],
    },
    "calendar.trabalho": {
      name: "Trabalho",
      platform: "ms365_calendar",
      device: "dev_ms365",
      features: 7,
      events: [
        mk("Reunião de planejamento", at(1, 10), at(1, 11), { location: "Microsoft Teams" }),
        mk("1:1 com a Carla", at(2, 15), at(2, 15, 30)),
        mk("Daily do time", at(-7, 9, 30), at(-7, 9, 45), { rrule: "FREQ=DAILY" }),
        mk("Entrega do relatório", at(4, 17), at(4, 18)),
        mk("Workshop de segurança", at(8, 14), at(8, 17), { location: "Sala Ipê" }),
      ],
    },
    "calendar.feriados": {
      name: "Feriados Brasil",
      platform: "holiday",
      features: 0,
      events: [allDay("Finados", 14), allDay("Proclamação da República", 27), allDay("Dia da Consciência Negra", 32), allDay("Natal", 67)],
    },
    "calendar.giveaways": {
      name: "Giveaways",
      platform: "remote_calendar",
      features: 0,
      events: [allDay("Primal Slideee Deluxe (Stove) Giveaway", 0), allDay("Agent A: A puzzle in disguise", 0, 3), allDay("Bad Cheese", -1, 2), allDay("The Green Light (itch.io)", 0, 2), mk("Last Room (IndieGala) Giveaway", at(0, 8, 58), at(1, 0))],
    },
  };
  const devices = [{ id: "dev_ms365", name: "Diego (Outlook)", name_by_user: null }];

  const fmt = (ev, ms) => (ev.allDay ? ymd(new Date(ms)) : isoLocal(ms));

  function occurrences(id, from, to) {
    const cal = calendars[id];
    if (!cal) fail("not_found", `Calendar entity not found: ${id}`);
    const list = [];
    for (const ev of cal.events) {
      for (const o of expand(ev, from, to)) {
        const item = { start: fmt(ev, o.start), end: fmt(ev, o.end), summary: ev.summary, uid: ev.uid, all_day: ev.allDay, _ms: o.start };
        if (ev.description) item.description = ev.description;
        if (ev.location) item.location = ev.location;
        if (o.rid) item.recurrence_id = o.rid;
        if (ev.rrule) item.rrule = ev.rrule;
        list.push(item);
      }
    }
    list.sort((a, b) => a._ms - b._ms);
    return list.map(({ _ms, ...e }) => e);
  }

  function stateOf(id) {
    const cal = calendars[id];
    const now = Date.now();
    const ev = occurrences(id, now - DAY * 2, now + DAY * 60).find((e) => msOf(e.end) > now);
    const active = ev && msOf(ev.start) <= now;
    return {
      entity_id: id,
      state: active ? "on" : "off",
      attributes: {
        friendly_name: cal.name,
        supported_features: cal.features,
        ...(ev ? { message: ev.summary, all_day: ev.all_day, start_time: ev.start, end_time: ev.end, location: ev.location || "", description: ev.description || "" } : {}),
      },
      last_changed: new Date().toISOString(),
    };
  }

  function need(id, bit) {
    const cal = calendars[id];
    if (!cal) fail("not_found", "Calendar entity not found");
    if (!(cal.features & bit)) fail("not_supported", "Calendar does not support this service");
    return cal;
  }

  function toStored(event, base) {
    if (!event || !event.summary) fail("invalid_format", "summary required");
    const s = parseWhen(event.start);
    const e = parseWhen(event.end);
    if (s.allDay !== e.allDay) fail("invalid_format", "Expected all values to be the same type");
    if (e.ms <= s.ms) fail("invalid_format", "Expected minimum event duration");
    if (event.rrule) parseRrule(event.rrule);
    return { ...base, summary: event.summary, start: s.ms, end: e.ms, allDay: s.allDay, rrule: event.rrule || null, description: event.description || "", location: event.location || "" };
  }

  function findOcc(ev, rid) {
    for (const o of expand(ev, ev.start - 1, ev.start + DAY * 365 * 6)) if (o.rid === rid) return o;
    return fail("not_found", "Recurrence not found");
  }

  return {
    calendars,
    devices,
    occurrences,
    stateOf,
    ids: () => Object.keys(calendars),
    registry: () => [...Object.entries(calendars).map(([ei, c]) => ({ ei, pl: c.platform, ...(c.device ? { di: c.device, hn: true, en: c.name } : {}) }))],
    create(id, event) {
      const cal = need(id, 1);
      cal.events.push(toStored(event, { uid: `fake-${seq++}`, exdates: new Set() }));
    },
    update(id, msg) {
      const cal = need(id, 4);
      const i = cal.events.findIndex((e) => e.uid === msg.uid);
      if (i < 0) fail("not_found", "Event not found");
      const ev = cal.events[i];
      if (!msg.recurrence_id || !ev.rrule) {
        cal.events[i] = toStored(msg.event, { uid: ev.uid, exdates: ev.exdates });
        return;
      }
      const occ = findOcc(ev, msg.recurrence_id);
      if (msg.recurrence_range === "THISANDFUTURE") {
        if (occ.start <= ev.start) cal.events.splice(i, 1);
        else ev.rrule = untilBefore(ev.rrule, occ.start);
        cal.events.push(toStored({ rrule: ev.rrule ? ev.rrule.replace(/;?UNTIL=[^;]*/g, "") : null, ...msg.event }, { uid: `fake-${seq++}`, exdates: new Set() }));
      } else {
        ev.exdates.add(msg.recurrence_id);
        cal.events.push(toStored({ ...msg.event, rrule: undefined }, { uid: `fake-${seq++}`, exdates: new Set() }));
      }
    },
    remove(id, msg) {
      const cal = need(id, 2);
      const i = cal.events.findIndex((e) => e.uid === msg.uid);
      if (i < 0) fail("not_found", "Event not found");
      const ev = cal.events[i];
      if (!msg.recurrence_id || !ev.rrule) {
        cal.events.splice(i, 1);
        return;
      }
      const occ = findOcc(ev, msg.recurrence_id);
      if (msg.recurrence_range === "THISANDFUTURE") {
        if (occ.start <= ev.start) cal.events.splice(i, 1);
        else ev.rrule = untilBefore(ev.rrule, occ.start);
      } else ev.exdates.add(msg.recurrence_id);
    },
    /** What the fake AI "reads". */
    aiEvents({ photos, text }) {
      const day = (n) => ymd(new Date(dayAt(n)));
      if (photos) return [{ title: "Oftalmologista", date: day(nextWeekday(2)), start: "14:30", end: "", end_date: "", location: "Clínica Visão, Av. Brasil 1200", notes: "Chegar 15 min antes", repeat: "" }];
      const title = ((text || "").split("\n")[0] || "Evento").replace(/^\[[^\]]*\]\s*[^:]+:\s*/, "").slice(0, 60) || "Evento";
      return [
        { title, date: day(nextWeekday(4)), start: "15:00", end: "16:00", end_date: "", location: "", notes: "", repeat: "" },
        { title: "Levar documentos", date: day(nextWeekday(4)), start: "", end: "", end_date: "", location: "", notes: "", repeat: "" },
      ];
    },
  };
}

/** To-do lists like the ResolvIA ones (todo.*), with items that have a due date. */
export function createTodos() {
  let seq = 1;
  const today = () => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  };
  const day = (n) => ymd(new Date(today().getTime() + n * DAY));
  const at = (n, h, m = 0) => {
    const d = today();
    d.setDate(d.getDate() + n);
    d.setHours(h, m, 0, 0);
    return isoLocal(d.getTime());
  };
  const it = (summary, extra = {}) => ({ uid: `todo-${seq++}`, summary, status: "needs_action", ...extra });
  const lists = {
    "todo.casa": {
      name: "Casa",
      items: [it("Passar pano na casa"), it("Pagar o IPVA", { due: day(-2), description: "Parcela única com desconto" }), it("Levar o carro na revisão", { due: at(0, 17, 30) }), it("Trocar a lâmpada da varanda", { due: day(1) }), it("Comprar presente da Ana", { due: day(4) })],
    },
    "todo.trabalho": {
      name: "Trabalho",
      items: [it("Enviar proposta para o cliente", { due: at(0, 18) }), it("Revisar contrato", { due: day(-1) }), it("Planejar sprint", { due: day(3) }), it("Relatório mensal", { due: day(6), status: "completed" })],
    },
    "todo.problem_list": {
      name: "Problem List",
      items: Array.from({ length: 10 }, (_, i) => it(`Dispositivo sem resposta ${i + 1}`, { due: day(-3) })),
    },
    "todo.shopping_list": {
      name: "Lista de compras",
      items: [it("Café"), it("Leite")],
    },
  };
  return {
    lists,
    ids: () => Object.keys(lists),
    items: (id) => {
      if (!lists[id]) fail("not_found", `Entity not found: ${id}`);
      return lists[id].items.map((i) => ({ ...i }));
    },
    stateOf: (id) => ({ entity_id: id, state: String(lists[id].items.filter((i) => i.status !== "completed").length), attributes: { friendly_name: lists[id].name, supported_features: 127 } }),
    add(id, data) {
      const l = lists[id];
      if (!l) fail("not_found", `Entity not found: ${id}`);
      if (!data.item) fail("invalid_format", "required key not provided @ data['item']");
      for (const k of Object.keys(data)) if (!["item", "due_date", "due_datetime", "description"].includes(k)) fail("invalid_format", `extra keys not allowed @ data['${k}']`);
      const due = data.due_date || (data.due_datetime ? isoLocal(Date.parse(data.due_datetime.replace(" ", "T"))) : undefined);
      l.items.push({ uid: `todo-${seq++}`, summary: data.item, status: "needs_action", ...(due ? { due } : {}), ...(data.description ? { description: data.description } : {}) });
    },
    update(id, data) {
      const l = lists[id];
      if (!l) fail("not_found", `Entity not found: ${id}`);
      const item = l.items.find((i) => i.uid === data.item || i.summary === data.item);
      if (!item) fail("service_validation_error", `Unable to find to-do list item: ${data.item}`);
      if (data.status) {
        if (!["needs_action", "completed"].includes(data.status)) fail("invalid_format", "bad status");
        item.status = data.status;
      }
    },
  };
}
