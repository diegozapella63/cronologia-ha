import { LitElement, html, svg, nothing, unsafeSVG, unsafeCSS } from "../vendor/lit-all.min.js";
import { usagePanel, usageStyles } from "./usage-panel.js";
import { themePicker, colorPicker, lookStyles } from "./look.js";
import { ICONS } from "./icons.js";
import { ensureFonts } from "./fonts.js";
import { styles, extraStyles } from "./styles.js";
import { calStyles } from "./cal-styles.js";
import { parentHass, detectDark } from "./api.js";
import { EventStore, eventsOfDay, layoutDay } from "./events.js";
import { parseICS } from "./ics.js";
import { ModelsMixin } from "./models.js";
import { RewardsMixin } from "./rewards.js";
import { TasksMixin, TODO_COLOR } from "./tasks.js";
import { DataMixin } from "./datapanel.js";
import {
  PALETTE,
  colorById,
  autoColor,
  colorVars,
  hexToRgba,
  fold,
  foldKeepLength,
  plural,
  clip,
  cap,
  splitLinks,
  WEEKDAYS,
  WEEKDAYS_SHORT,
  MONTHS,
  ymd,
  hm,
  fromYmd,
  startOfDay,
  addDays,
  addMonths,
  sameDay,
  dayDiff,
  startOfWeek,
  isoLocal,
  dayLabel,
  dateLong,
  dateShort,
  untilLabel,
  durationLabel,
  REPEATS,
  rruleLabel,
  freqOf,
  prepareImage,
} from "./util.js";

const THEME_KEY = "cronologia.theme";
const MODE_KEY = "cronologia.mode";
const F = { CREATE: 1, DELETE: 2, UPDATE: 4 };
const has = (features, bit) => (Number(features) & bit) === bit;
const HOUR_H = 48;

const PLATFORMS = {
  local_calendar: { label: "Calendário local", icon: "calendar" },
  google: { label: "Google Agenda", icon: "calendar-days" },
  caldav: { label: "CalDAV", icon: "server" },
  ms365_calendar: { label: "Outlook (Microsoft 365)", icon: "briefcase" },
  o365: { label: "Outlook (Office 365)", icon: "briefcase" },
  remote_calendar: { label: "Calendário remoto (.ics)", icon: "link" },
  ics_calendar: { label: "Calendário .ics", icon: "link" },
  holiday: { label: "Feriados", icon: "party-popper" },
  workday: { label: "Dias úteis", icon: "briefcase" },
  todo: { label: "Tarefas", icon: "list-checks" },
};
const platformOf = (pl) => PLATFORMS[pl] || { label: pl ? cap(pl.replace(/_/g, " ")) : "Outros", icon: "calendar" };

const icon = (name, cls = "") =>
  html`<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

const local = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* private mode etc. */
    }
  },
};

const svgLine = (x1, y1, x2, y2, cls) => svg`<line class=${cls} x1=${x1} y1=${y1} x2=${x2} y2=${y2}></line>`;
const svgPath = (d, cls) => svg`<path class=${cls} d=${d}></path>`;

const timeRange = (e) => (e.allDay ? "Dia todo" : `${hm(e.start)} – ${hm(e.end)}`);
const mapsUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

class CronologiaApp extends DataMixin(TasksMixin(RewardsMixin(ModelsMixin(LitElement)))) {
  static properties = {
    api: { attribute: false },
    env: { attribute: false },
    _ready: { state: true },
    _bootError: { state: true },
    _online: { state: true },
    _path: { state: true },
    _sheet: { state: true },
    _form: { state: true },
    _toast: { state: true },
    _theme: { state: true },
    _dark: { state: true },
    _now: { state: true },
    _cursor: { state: true },
    _mode: { state: true },
    _query: { state: true },
    _cam: { state: true },
    _ver: { state: true },
    _home: { state: true },
  };

  static styles = [styles, extraStyles, calStyles, unsafeCSS(usageStyles), unsafeCSS(lookStyles)];

  constructor() {
    super();
    this.api = null;
    this.env = null;
    this._ready = false;
    this._bootError = null;
    this._online = true;
    this._path = (history.state && history.state.rvPath) || "";
    this._sheet = null;
    this._form = null;
    this._toast = null;
    this._theme = local.get(THEME_KEY, "auto");
    this._dark = false;
    this._now = Date.now();
    this._cursor = startOfDay(new Date());
    this._mode = local.get(MODE_KEY, "mes");
    this._query = "";
    this._cam = null;
    this._ver = 0;
    this._home = null;
    this._states = {};
    this._entities = {};
    this._devices = {};
    this._prefs = { calendars: {}, app: {} };
    this._ai = { ready: false, images: false, entities: [] };
    this._aiAt = 0;
    this._user = { name: "" };
    this._version = "";
    this._showAllDay = false;
    this._scrollWeek = true;
    this._onPopState = this._onPopState.bind(this);
    this._onVisible = this._onVisible.bind(this);
    this._mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    this._onScheme = () => this._syncDark();
  }

  // ------------------------------------------------------------ lifecycle

  connectedCallback() {
    super.connectedCallback();
    ensureFonts();
    window.addEventListener("popstate", this._onPopState);
    document.addEventListener("visibilitychange", this._onVisible);
    if (this._mql && this._mql.addEventListener) this._mql.addEventListener("change", this._onScheme);
    this._tick = setInterval(() => (this._now = Date.now()), 30000);
    this._themeTimer = setInterval(() => this._syncDark(), 3000);
    this._syncDark();
    if (this.api && !this._started) this._start();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("popstate", this._onPopState);
    document.removeEventListener("visibilitychange", this._onVisible);
    if (this._mql && this._mql.removeEventListener) this._mql.removeEventListener("change", this._onScheme);
    clearInterval(this._tick);
    clearInterval(this._themeTimer);
    clearTimeout(this._toastTimer);
    this._stopStream();
    if (this._store) this._store.dispose();
  }

  willUpdate(changed) {
    if (changed.has("api") && this.api && !this._started && this.isConnected) this._start();
  }

  updated(changed) {
    this.toggleAttribute("dark", this._dark);
    if (this._scrollWeek) {
      const grid = this.renderRoot.querySelector(".tgrid-scroll");
      if (grid) {
        this._scrollWeek = false;
        const now = new Date();
        const hour = this._view().name === "calendar" && sameDay(this._cursor, now) ? Math.max(0, now.getHours() - 1) : 7;
        grid.scrollTop = hour * HOUR_H;
      }
    }
    if (changed.has("_path") && this._view().name === "more") {
      // the tab bar scrolls sideways on narrow screens: keep the open tab in sight
      const bar = this.renderRoot.querySelector(".more-tabs");
      const on = bar && bar.querySelector("button.on");
      if (on) {
        const l = on.offsetLeft;
        const r = l + on.offsetWidth;
        if (l < bar.scrollLeft) bar.scrollLeft = l - 8;
        else if (r > bar.scrollLeft + bar.clientWidth) bar.scrollLeft = r - bar.clientWidth + 8;
      }
      const tab = this._view().tab;
      if (tab === "integracoes") {
        this._refreshAi(false);
        this._loadUsage();
      }
      if (tab === "dados") this._loadBackups();
    }
  }

  _onVisible() {
    if (document.visibilityState === "visible") {
      this._now = Date.now();
      this._syncDark();
    }
  }

  _syncDark() {
    const dark = this._theme === "dark" ? true : this._theme === "light" ? false : detectDark();
    if (dark !== this._dark) this._dark = dark;
  }

  _setTheme(theme) {
    this._theme = theme;
    local.set(THEME_KEY, theme);
    this._syncDark();
  }

  // ------------------------------------------------------------ data

  async _start() {
    this._started = true;
    this._store = new EventStore(this.api, () => this._ver++);
    this.api.onStatus((up) => (this._online = up));
    this.api.onReconnect(() => this._boot(true));
    await this._boot(false);
    this.api.subscribeCalendars((ev) => this._onCalendar(ev)).catch(() => {});
    this.api.subscribePrefs((prefs) => this._setPrefs(prefs)).catch(() => {});
    if (this.api.subscribeHome)
      this.api
        .subscribeHome((ix) => {
          // A button tapped on the test alert (Mais › Avisos): say so here too.
          const t = ix && ix.test;
          if (t && this._home && t.at !== this._testSeen && Date.now() - t.at < 120000) {
            this._haptic("success");
            this._showToast(`${this._targetName(t.target)}: o botão ${t.action === "tomei" ? "Tomei" : "Adiar"} chegou ao app`);
          }
          this._testSeen = t && t.at;
          this._home = ix;
        })
        .catch(() => {});
  }

  async _boot(again) {
    try {
      const res = await this.api.bootstrap();
      this._version = res.version || "";
      this._user = res.user || { name: "" };
      this._ai = res.ai || this._ai;
      this._aiAt = Date.now();
      this._states = res.states || {};
      this._entities = res.entities || {};
      this._devices = res.devices || {};
      this._prefs = res.prefs || { calendars: {}, app: {} };
      this._ready = true;
      this._bootError = null;
      this._syncStore();
      if (again) this._store.reloadAll();
    } catch (err) {
      if (!this._ready) this._bootError = err.message || String(err);
      if (!again) setTimeout(() => this._boot(false), 3000);
    }
  }

  _onCalendar(ev) {
    const states = { ...this._states };
    const known = ev.entity_id in states;
    if (ev.new_state) states[ev.entity_id] = ev.new_state;
    else delete states[ev.entity_id];
    this._states = states;
    if (!known || !ev.new_state) {
      this.api
        .registry()
        .then((r) => {
          this._entities = r.entities || {};
          this._devices = r.devices || {};
          this.requestUpdate();
        })
        .catch(() => {});
    }
    this._syncStore();
    this.requestUpdate();
  }

  _setPrefs(prefs) {
    if (!prefs) return;
    this._prefs = { calendars: prefs.calendars || {}, app: prefs.app || {} };
    this._syncStore();
    this.requestUpdate();
  }

  _syncStore() {
    if (this._store) this._store.setCalendars(this._cals().filter((c) => !c.hidden).map((c) => c.id));
  }

  _app(key, fallback) {
    const v = this._prefs.app ? this._prefs.app[key] : undefined;
    return v === undefined ? fallback : v;
  }

  _accent() {
    return colorById(this._app("accent", "turquesa")) || colorById("turquesa");
  }

  /** Every calendar entity with its look and what it allows. */
  _cals() {
    if (this._calsCache && this._calsCache.states === this._states && this._calsCache.prefs === this._prefs && this._calsCache.entities === this._entities) return this._calsCache.list;
    const rows = Object.keys(this._states).map((id) => {
      const st = this._states[id];
      const reg = this._entities[id] || {};
      const dev = reg.device_id ? this._devices[reg.device_id] : null;
      const plat = platformOf(reg.platform);
      const orig = (st.attributes && st.attributes.friendly_name) || id;
      return { id, st, reg, dev, plat, orig };
    });
    rows.sort((a, b) => a.plat.label.localeCompare(b.plat.label, "pt-BR") || a.orig.localeCompare(b.orig, "pt-BR"));
    const list = rows.map(({ id, st, reg, dev, plat, orig }, i) => {
      const p = (this._prefs.calendars || {})[id] || {};
      const features = Number(st.attributes && st.attributes.supported_features) || 0;
      return {
        id,
        name: p.name || orig,
        origName: orig,
        group: plat.label,
        icon: plat.icon,
        device: dev ? dev.name_by_user || dev.name : null,
        color: colorById(p.color) || autoColor(i),
        colorId: p.color || null,
        hidden: !!p.hidden,
        features,
        canCreate: has(features, F.CREATE),
        canUpdate: has(features, F.UPDATE),
        canDelete: has(features, F.DELETE),
        unavailable: st.state === "unavailable",
      };
    });
    this._calsCache = { states: this._states, prefs: this._prefs, entities: this._entities, list };
    return list;
  }

  _cal(id) {
    return this._cals().find((c) => c.id === id);
  }

  _visible() {
    return this._cals().filter((c) => !c.hidden);
  }

  _writable() {
    return this._cals().filter((c) => c.canCreate && !c.unavailable);
  }

  _defaultCal() {
    const w = this._writable();
    const pref = this._app("default_calendar", null);
    return (w.find((c) => c.id === pref) || w.find((c) => !c.hidden) || w[0] || {}).id || null;
  }

  /** Events of the visible calendars overlapping [start, end) (loads them if needed). */
  _events(start, end) {
    this._store.ensure(start, end);
    const list = this._store.query(start, end);
    const bills = [...this._gerenciaEvents(start, end), ...this._todoEvents(start, end)];
    return bills.length ? [...list, ...bills].sort((a, b) => a.start - b.start || Number(b.allDay) - Number(a.allDay) || a.summary.localeCompare(b.summary, "pt-BR")) : list;
  }

  async _saveCalPrefs(id, changes) {
    try {
      this._setPrefs(await this.api.setCalendarPrefs(id, changes));
    } catch (err) {
      this._showToast(`Não consegui salvar: ${err.message}`);
    }
  }

  async _saveAppPrefs(changes) {
    try {
      this._setPrefs(await this.api.setAppPrefs(changes));
    } catch (err) {
      this._showToast(`Não consegui salvar: ${err.message}`);
    }
  }

  // ------------------------------------------------------------ navigation (same as the other apps)

  _view() {
    const p = (this._path || "").replace(/\/+$/, "");
    if (p === "/calendario") return { name: "calendar" };
    if (p === "/agendas") return { name: "more", tab: "calendarios" }; // old address of the Agendas page
    if (p === "/recompensas") return { name: "rewards" };
    const more = /^\/mais(?:\/(avisos|placar|integracoes|dados|aparencia|opcoes))?$/.exec(p);
    if (more) return { name: "more", tab: more[1] || "calendarios" };
    return { name: "now" };
  }

  async _go(path, replace = false) {
    if (this._sheet) this._closeSheet();
    if (this._popping) await this._popping;
    const depth = ((history.state && history.state.rvDepth) || 0) + (replace ? 0 : 1);
    if (replace) history.replaceState({ rvDepth: depth, rvPath: path }, "");
    else history.pushState({ rvDepth: depth, rvPath: path }, "");
    this._path = path;
    if (path === "/calendario") this._scrollWeek = true;
    const main = this.renderRoot && this.renderRoot.querySelector("main");
    if (main) main.scrollTo({ top: 0, behavior: "instant" });
  }

  _goTab(path) {
    const view = this._view().name;
    if (path === "") {
      if (view === "now") {
        const main = this.renderRoot.querySelector("main");
        if (main) main.scrollTo({ top: 0 });
        return;
      }
      const depth = (history.state && history.state.rvDepth) || 0;
      if (depth > 0) history.go(-depth);
      else this._go("", true);
      return;
    }
    if (path === "/calendario" && view === "calendar") {
      this._cursor = startOfDay(new Date());
      this._scrollWeek = true;
      return;
    }
    this._go(path, view !== "now");
  }

  _openDay(d, mode) {
    this._cursor = startOfDay(d);
    if (mode) this._setMode(mode);
    if (this._view().name !== "calendar") this._go("/calendario");
  }

  _setMode(mode) {
    this._mode = mode;
    local.set(MODE_KEY, mode);
    this._scrollWeek = true;
  }

  _popEntry(flag) {
    if (!(history.state && history.state[flag])) return Promise.resolve();
    const p = new Promise((resolve) => {
      const done = () => {
        clearTimeout(timer);
        this._popWaiters = (this._popWaiters || []).filter((f) => f !== done);
        if (this._popping === p) this._popping = null;
        resolve();
      };
      const timer = setTimeout(done, 600);
      this._popWaiters = [...(this._popWaiters || []), done];
    });
    this._popping = p;
    history.back();
    return p;
  }

  _onPopState() {
    if (this._cam && !(history.state && history.state.rvCam)) this._closeCamera(true);
    if (this._sheet && !(history.state && history.state.rvSheet)) {
      this._releaseImages();
      this._sheet = null;
      this._form = null;
    }
    const path = (history.state && history.state.rvPath) || "";
    if (path !== this._path) this._path = path;
    for (const done of [...(this._popWaiters || [])]) done();
  }

  async _openSheet(sheet, form = null) {
    const wasOpen = !!this._sheet;
    if (!wasOpen && this._popping) await this._popping;
    this._sheet = sheet;
    this._form = form;
    if (!wasOpen) {
      try {
        history.pushState({ ...(history.state || {}), rvSheet: true }, "");
      } catch (e) {
        /* ignore */
      }
    }
  }

  _closeSheet() {
    if (!this._sheet) return Promise.resolve();
    this._releaseImages();
    this._sheet = null;
    this._form = null;
    return this._popEntry("rvSheet");
  }

  _setForm(changes) {
    this._form = { ...this._form, ...changes };
  }

  _openInHA(path) {
    this._closeSheet();
    if (this.env && this.env.openInHA) this.env.openInHA(path);
  }

  // ------------------------------------------------------------ feedback

  _haptic(type) {
    if (this.env && this.env.haptic) this.env.haptic(type);
  }

  _showToast(text, action = null) {
    clearTimeout(this._toastTimer);
    this._toast = { text, action, id: Date.now() };
    this._toastTimer = setTimeout(() => (this._toast = null), action ? 5000 : 2800);
  }

  _userName() {
    const p = parentHass();
    const name = (this._user && this._user.name) || (p && p.user && p.user.name) || "";
    return name.trim().split(/\s+/)[0];
  }

  _isAdmin() {
    const p = parentHass();
    return p && p.user ? !!p.user.is_admin : true;
  }

  // ------------------------------------------------------------ events: open, create, edit, delete

  _openEvent(e) {
    if (e.gerencia) {
      this._openSheet("bill", { b: { id: e.gerencia.id, c: e.gerencia } });
      return;
    }
    if (e.todo) {
      this._openSheet("todo", { key: e.todo.key });
      return;
    }
    this._openSheet("event", { ev: e });
  }

  _money(v) {
    return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  /** Form for a new event (optionally on a day/hour or copied from another event). */
  _openForm({ ev = null, date = null, hour = null, cal = null, copy = false } = {}) {
    if (ev && ev.kind) return this._openKindForm({ ev, copy });
    const writable = this._writable();
    if (!writable.length && !(ev && !copy)) {
      this._openSheet("nocal", {});
      return;
    }
    let f;
    if (ev) {
      const sameEnd = ev.allDay ? addDays(ev.end, -1) : ev.end;
      f = {
        mode: copy ? "add" : "edit",
        cal: copy ? (this._cal(ev.cal) && this._cal(ev.cal).canCreate ? ev.cal : this._defaultCal()) : ev.cal,
        origCal: ev.cal,
        uid: ev.uid,
        rid: copy ? null : ev.rid,
        title: ev.summary,
        allDay: ev.allDay,
        date: ymd(ev.start),
        endDate: ev.allDay ? (dayDiff(sameEnd, ev.start) > 0 ? ymd(sameEnd) : "") : !sameDay(ev.start, ev.end) ? ymd(ev.end) : "",
        start: ev.allDay ? "09:00" : hm(ev.start),
        end: ev.allDay ? "10:00" : hm(ev.end),
        repeat: freqOf(ev.rrule),
        rrule: ev.rrule || "",
        location: ev.location,
        notes: ev.description,
      };
    } else {
      const d = date ? startOfDay(date) : startOfDay(new Date());
      const now = new Date();
      let h = hour != null ? hour : sameDay(d, now) ? Math.min(23, now.getHours() + 1) : 9;
      const pad = (n) => String(n).padStart(2, "0");
      f = {
        mode: "add",
        cal: cal && this._cal(cal) && this._cal(cal).canCreate ? cal : this._defaultCal(),
        title: "",
        allDay: false,
        date: ymd(d),
        endDate: "",
        start: `${pad(h)}:00`,
        end: `${pad(Math.min(23, h + 1))}:${h + 1 > 23 ? "59" : "00"}`,
        repeat: "",
        rrule: "",
        location: "",
        notes: "",
      };
    }
    // an event that already has a place or notes shows those fields even with Local e notas off
    f.details = !!(String(f.location || "").trim() || String(f.notes || "").trim());
    this._openSheet("form", f);
    if (f.mode === "add" && !f.title) {
      this.updateComplete.then(() => {
        const ta = this.renderRoot.querySelector(".sheet .ev-title-input");
        if (ta) ta.focus();
      });
    }
  }

  /** The form as a Home Assistant event, or throws a message for the person. */
  _eventFromForm(f, { keepRrule = true } = {}) {
    if (f.kind) return this._kindEvents(f, { keepRrule })[0];
    const title = (f.title || "").trim();
    if (!title) throw new Error("Dê um nome ao evento");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(f.date || "")) throw new Error("Escolha a data");
    const ev = { summary: title };
    if (f.allDay) {
      const last = f.endDate && f.endDate > f.date ? f.endDate : f.date;
      ev.start = f.date;
      ev.end = ymd(addDays(fromYmd(last), 1));
    } else {
      const [sh, sm] = (f.start || "09:00").split(":").map(Number);
      const [eh, em] = (f.end || f.start || "10:00").split(":").map(Number);
      const day = fromYmd(f.date);
      const s = new Date(day.getFullYear(), day.getMonth(), day.getDate(), sh, sm);
      const endDay = f.endDate && f.endDate > f.date ? fromYmd(f.endDate) : day;
      let e = new Date(endDay.getFullYear(), endDay.getMonth(), endDay.getDate(), eh, em);
      if (e <= s) e = addDays(e, 1); // ends after midnight
      if (e - s < 60000) e = new Date(s.getTime() + 30 * 60000);
      ev.start = isoLocal(s);
      ev.end = isoLocal(e);
    }
    if ((f.location || "").trim()) ev.location = f.location.trim();
    if ((f.notes || "").trim()) ev.description = f.notes.trim();
    if (keepRrule) {
      const keep = f.rrule && freqOf(f.rrule) === f.repeat ? f.rrule : f.repeat ? `FREQ=${f.repeat}` : "";
      if (keep) ev.rrule = keep;
    }
    return ev;
  }

  async _saveForm() {
    const f = this._form;
    if (f.kind) return this._saveKindForm();
    let ev;
    try {
      ev = this._eventFromForm(f);
    } catch (err) {
      this._showToast(err.message);
      return;
    }
    const cal = this._cal(f.cal);
    if (!cal) return this._showToast("Escolha o calendário");
    if (f.mode === "edit" && f.rid) {
      // A repeating event: ask what to change.
      this._openSheet("scope", { action: "edit", ...f, event: ev });
      return;
    }
    this._setForm({ saving: true });
    try {
      if (f.mode === "add") {
        await this.api.createEvent(f.cal, ev);
        this._done(`Evento criado em ${clip(cal.name, 24)}`, f.cal, ev.start);
      } else if (f.cal !== f.origCal) {
        // Home Assistant has no "move": create in the new calendar, then remove the old one.
        await this.api.createEvent(f.cal, ev);
        await this.api.deleteEvent(f.origCal, f.uid);
        this._store.refresh(f.origCal);
        this._done(`Evento movido para ${clip(cal.name, 24)}`, f.cal, ev.start);
      } else {
        await this.api.updateEvent(f.cal, f.uid, ev);
        this._done("Evento salvo", f.cal, ev.start);
      }
    } catch (err) {
      if (this._sheet === "form") this._setForm({ saving: false });
      this._showToast(`Não consegui salvar: ${err.message}`);
    }
  }

  _done(text, calId, start) {
    this._haptic("success");
    this._closeSheet();
    this._store.refresh(calId);
    const day = start ? startOfDay(new Date(/^\d{4}-\d{2}-\d{2}$/.test(start) ? fromYmd(start) : start)) : null;
    this._showToast(text, day && this._view().name !== "calendar" ? { label: "Ver", run: () => this._openDay(day) } : null);
  }

  async _applyScope(choice) {
    const f = this._form;
    const opts = { recurrenceId: f.rid, range: choice === "future" ? "THISANDFUTURE" : undefined };
    try {
      if (f.action === "edit") {
        let ev = f.event;
        if (choice === "one") ev = this._eventFromForm(f, { keepRrule: false });
        await this.api.updateEvent(f.cal, f.uid, ev, opts);
        this._done(choice === "one" ? "Só este evento foi alterado" : "Este e os próximos foram alterados", f.cal, ev.start);
      } else {
        await this.api.deleteEvent(f.cal, f.uid, choice === "all" ? {} : opts);
        this._done(choice === "all" ? "A série toda foi apagada" : choice === "one" ? "Evento apagado" : "Este e os próximos foram apagados", f.cal);
      }
    } catch (err) {
      this._showToast(`Não consegui: ${err.message}`);
    }
  }

  _askDelete(e) {
    if (e.rid) {
      this._openSheet("scope", { action: "delete", cal: e.cal, uid: e.uid, rid: e.rid, title: e.summary });
      return;
    }
    this._openSheet("confirm", {
      title: `Apagar “${clip(e.summary, 28)}”?`,
      text: `${cap(dayLabel(e.start, new Date(this._now)))} · ${timeRange(e)}. Ele sai do calendário ${clip((this._cal(e.cal) || {}).name || "", 30)}.`,
      label: "Apagar",
      danger: true,
      run: async () => {
        try {
          await this.api.deleteEvent(e.cal, e.uid);
          this._haptic("medium");
          this._closeSheet();
          this._store.refresh(e.cal);
          const back = { summary: e.summary, start: e.raw.start, end: e.raw.end };
          if (e.location) back.location = e.location;
          if (e.description) back.description = e.description;
          this._showToast("Evento apagado", {
            label: "Desfazer",
            run: () => this.api.createEvent(e.cal, back).then(() => this._store.refresh(e.cal)).catch((err) => this._showToast(err.message)),
          });
        } catch (err) {
          this._showToast(`Não consegui apagar: ${err.message}`);
        }
      },
    });
  }

  // ------------------------------------------------------------ import: message, photos, camera, .ics

  _openImport(start = "pick", extra = {}) {
    const target = this._defaultCal();
    if (!target) {
      this._openSheet("nocal", {});
      return Promise.resolve();
    }
    this._releaseImages();
    this._importToken = 0;
    const opening = this._openSheet("import", { target, step: start === "text" ? "text" : "pick", text: "", images: [], items: [], provider: null, error: null, note: null, ...extra });
    if (start === "photos") this._pickFiles("photos");
    if (start === "scan") this._openCamera();
    if (start === "text") this._focusSheetText();
    if (start === "ics") this._pickFiles("ics");
    return opening;
  }

  _focusSheetText() {
    this.updateComplete.then(() => {
      const ta = this.renderRoot.querySelector(".sheet textarea");
      if (ta) ta.focus();
    });
  }

  _pickFiles(kind) {
    const input = this.renderRoot.querySelector(kind === "scan" ? "#cr-scan" : kind === "ics" ? "#cr-ics" : "#cr-photos");
    if (!input) return;
    input.value = "";
    input.click();
  }

  _releaseImages() {
    const f = this._form;
    if (f && f.images) for (const img of f.images) if (img.url) URL.revokeObjectURL(img.url);
  }

  /** The Home Assistant Android app drops `multiple` picks and ignores `capture`. */
  _isHaAndroid() {
    return /Home Assistant\//.test(navigator.userAgent) && /Android/.test(navigator.userAgent);
  }

  async _onFiles(ev) {
    const files = [...(ev.target.files || [])].filter((f) => !f.type || f.type.startsWith("image/")).slice(0, 6);
    ev.target.value = "";
    if (!files.length) return;
    if (this._sheet !== "import") await this._openImport("pick");
    const appending = this._form.step === "review";
    this._setForm({ step: "loading", error: null, loadingText: "Preparando as fotos…", prevStep: appending ? "review" : "pick" });
    const images = [];
    for (const file of files) images.push(await prepareImage(file));
    this._readImages(images, appending);
  }

  async _onIcsFile(ev) {
    const file = ev.target.files && ev.target.files[0];
    ev.target.value = "";
    if (!file) return;
    let items;
    try {
      items = parseICS(await file.text());
    } catch (err) {
      items = [];
    }
    if (!items.length) {
      this._showToast("Não encontrei eventos nesse arquivo .ics");
      return;
    }
    if (this._sheet !== "import") await this._openImport("pick");
    this._setForm({ step: "review", items: items.map((it) => ({ ...it, on: true })), provider: "ics", fileName: file.name, note: null, error: null });
  }

  _readImages(images, appending) {
    if (this._sheet !== "import" || !images.length) return;
    const all = appending ? [...(this._form.images || []), ...images] : (this._releaseImages(), images);
    this._setForm({
      step: "loading",
      images: all,
      prevStep: appending ? "review" : "pick",
      loadingText: images.length > 1 ? `Lendo ${images.length} fotos com IA…` : "Lendo a foto com IA…",
    });
    this._runExtract({ images, appending });
  }

  async _runExtract({ text, images, appending = false }) {
    const token = (this._importToken = Date.now());
    const live = () => token === this._importToken && this._sheet === "import";
    const keep = appending ? this._form.items || [] : [];
    try {
      const res = await this.api.extract({ text, images: images ? images.map(({ data, mime }) => ({ data, mime })) : undefined });
      if (!live()) return;
      const found = res.events || [];
      if (!found.length) {
        const msg = text ? "Não encontrei eventos com data nessa mensagem." : "Não encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";
        if (appending) this._setForm({ step: "review", note: msg });
        else this._setForm({ step: text ? "text" : "pick", error: msg });
        return;
      }
      this._haptic("success");
      this._setForm({ step: "review", items: [...keep, ...found.map((e) => ({ ...e, on: true }))], provider: res.provider || null, note: null, error: null });
    } catch (err) {
      if (!live()) return;
      if (appending) this._setForm({ step: "review", note: err.message || "Algo deu errado" });
      else this._setForm({ step: text ? "text" : "pick", error: err.message || "Algo deu errado" });
    }
  }

  _readText() {
    const text = (this._form.text || "").trim();
    if (!text) return this._focusSheetText();
    if (!this._ai.ready) {
      this._setForm({ error: "Para ler mensagens, configure uma IA no Home Assistant (veja em Mais › Leitura por IA)." });
      return;
    }
    this._setForm({ step: "loading", error: null, note: null, prevStep: "text", loadingText: "Procurando eventos com IA…" });
    this._runExtract({ text });
  }

  async _pasteClipboard() {
    try {
      const t = await navigator.clipboard.readText();
      if (!t) throw new Error("empty");
      this._setForm({ text: t, error: null });
    } catch (e) {
      this._focusSheetText();
      this._showToast("Toque e segure no campo para colar");
    }
  }

  _setItem(i, changes) {
    const items = this._form.items.slice();
    items[i] = { ...items[i], ...changes };
    this._setForm({ items });
  }

  _itemEvent(it) {
    const plus1 = (t) => {
      const [h, m] = t.split(":").map(Number);
      const x = Math.min(23 * 60 + 59, h * 60 + m + 60);
      return `${String(Math.floor(x / 60)).padStart(2, "0")}:${String(x % 60).padStart(2, "0")}`;
    };
    const repeat = { daily: "DAILY", weekly: "WEEKLY", monthly: "MONTHLY", yearly: "YEARLY" }[it.repeat] || "";
    return this._eventFromForm({
      title: it.title,
      date: it.date,
      endDate: it.end_date || "",
      allDay: !it.start,
      start: it.start,
      end: it.end || (it.start ? plus1(it.start) : ""),
      repeat: it.rrule ? freqOf(it.rrule) : repeat,
      rrule: it.rrule || "",
      location: it.location,
      notes: it.notes,
    });
  }

  async _importAdd() {
    const f = this._form;
    const items = f.items.filter((i) => i.on && (i.title || "").trim());
    const cal = this._cal(f.target);
    if (!items.length || !cal) return;
    this._setForm({ adding: true });
    let ok = 0;
    let first = null;
    for (const it of items) {
      try {
        const ev = this._itemEvent(it);
        await this.api.createEvent(f.target, ev);
        ok++;
        if (!first || ev.start < first) first = ev.start;
      } catch (err) {
        this._showToast(`“${clip(it.title, 24)}”: ${err.message}`);
      }
    }
    if (this._sheet === "import") this._setForm({ adding: false });
    if (ok) this._done(`${plural(ok, "evento adicionado", "eventos adicionados")} em ${clip(cal.name, 20)}`, f.target, first);
  }

  // ------------------------------------------------------------ camera ("Digitalizar com IA")

  async _openCamera() {
    const md = navigator.mediaDevices;
    if (!md || !md.getUserMedia) {
      this._pickFiles("scan");
      return;
    }
    const appending = !!(this._form && this._form.step === "review");
    this._cam = { status: "starting", shots: [], torch: false, torchOk: false, appending, flash: 0 };
    try {
      history.pushState({ ...(history.state || {}), rvCam: true }, "");
    } catch (e) {
      /* ignore */
    }
    try {
      const stream = await md.getUserMedia({ audio: false, video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1440 } } });
      if (!this._cam) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      this._stream = stream;
      const track = stream.getVideoTracks()[0];
      const caps = track && track.getCapabilities ? track.getCapabilities() : {};
      this._cam = { ...this._cam, status: "live", torchOk: !!caps.torch };
      await this.updateComplete;
      const video = this.renderRoot.querySelector(".cam video");
      if (video) {
        video.srcObject = stream;
        video.play().catch(() => {});
      }
    } catch (err) {
      if (!this._cam) return;
      const denied = err && (err.name === "NotAllowedError" || err.name === "SecurityError");
      this._cam = {
        ...this._cam,
        status: "error",
        error: denied
          ? "Sem permissão para usar a câmera. Libere a câmera para o app do Home Assistant nas configurações do celular, ou escolha uma foto."
          : "Não consegui abrir a câmera. Você pode escolher uma foto da galeria.",
      };
    }
  }

  _stopStream() {
    if (this._stream) this._stream.getTracks().forEach((t) => t.stop());
    this._stream = null;
  }

  _closeCamera(fromHistory = false) {
    if (!this._cam) return;
    this._stopStream();
    if (!this._cam.used) for (const s of this._cam.shots || []) URL.revokeObjectURL(s.url);
    this._cam = null;
    if (!fromHistory) this._popEntry("rvCam");
  }

  async _toggleTorch() {
    const track = this._stream && this._stream.getVideoTracks()[0];
    if (!track) return;
    const on = !this._cam.torch;
    try {
      await track.applyConstraints({ advanced: [{ torch: on }] });
      this._cam = { ...this._cam, torch: on };
    } catch (e) {
      this._cam = { ...this._cam, torchOk: false };
    }
  }

  async _shoot() {
    const video = this.renderRoot.querySelector(".cam video");
    if (!video || !video.videoWidth || !this._cam || this._cam.shots.length >= 6) return;
    const max = 1800;
    const scale = Math.min(1, max / Math.max(video.videoWidth, video.videoHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(video.videoWidth * scale);
    canvas.height = Math.round(video.videoHeight * scale);
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.86));
    if (!blob || !this._cam) return;
    const shot = await prepareImage(blob, max);
    this._haptic("light");
    this._cam = { ...this._cam, shots: [...this._cam.shots, shot], flash: Date.now() };
  }

  async _useShots() {
    if (!this._cam || !this._cam.shots.length) return;
    const shots = this._cam.shots;
    const appending = this._cam.appending;
    this._cam = { ...this._cam, used: true };
    this._closeCamera();
    if (this._popping) await this._popping;
    if (this._sheet !== "import") await this._openImport("pick");
    this._readImages(shots, appending && this._form.step === "review");
  }

  _cameraFallback() {
    const appending = this._cam && this._cam.appending;
    this._closeCamera();
    if (appending && this._form) this._setForm({ step: "review" });
    this._pickFiles("scan");
  }

  // ------------------------------------------------------------ AI settings and export

  async _refreshAi(force = true) {
    if (!force && Date.now() - this._aiAt < 60000) return;
    this._aiChecking = true;
    this.requestUpdate();
    try {
      this._ai = await this.api.aiStatus();
    } catch (err) {
      this._ai = { ...this._ai, ready: false, images: false, reason: err.message };
    }
    this._aiAt = Date.now();
    this._aiChecking = false;
    this.requestUpdate();
  }

  async _chooseAi(id) {
    await this._saveAppPrefs({ ai_entity: id || null });
    await this._refreshAi();
    this._showToast("IA do app atualizada");
  }

  _goAiSettings() {
    this._closeSheet();
    this._go("/mais/integracoes", this._view().name !== "now").then(() =>
      this.updateComplete.then(() => {
        const el = this.renderRoot.querySelector("#leitura-ia");
        if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
      }),
    );
  }

  _openExport() {
    this._openSheet("export", { cals: this._visible().map((c) => c.id), range: "12m" });
  }

  _exportRange(range) {
    const t = startOfDay(new Date());
    if (range === "3m") return [t, addMonths(t, 3)];
    if (range === "year") return [addMonths(t, -12), addMonths(t, 12)];
    return [t, addMonths(t, 12)];
  }

  // ------------------------------------------------------------ render

  render() {
    if (!this._ready) {
      return html`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError ? html`${icon("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>` : html`<span class="spin">${icon("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;
    }
    const view = this._view();
    const accent = this._accent();
    const dark = this._dark;
    const style = `--rv-accent:${accent.fill};--rv-accent-ink:${dark ? accent.fill : accent.ink};--rv-accent-soft:${hexToRgba(accent.fill, dark ? 0.18 : 0.14)};--rv-accent-faint:${hexToRgba(accent.fill, dark ? 0.08 : 0.07)};--rv-accent-ink-light:${accent.ink};`;
    let page;
    if (view.name === "calendar") page = this._renderCalendar();
    else if (view.name === "more") page = this._renderMore();
    else if (view.name === "rewards") page = this._renderRewards();
    else page = this._renderNow();
    if (view.name === "calendar" || view.name === "more" || view.name === "rewards") this._medsHold = false;
    return html`
      <div class="root" style=${style}>
        <div class="app">
          ${!this.env || this.env.topbar ? html`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>` : nothing}
          ${!this._online ? html`<div class="offline">${icon("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>` : nothing}
          <main>${page}</main>
          ${this._renderNav(view)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${(e) => this._onFiles(e)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${(e) => this._onFiles(e)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${(e) => this._onIcsFile(e)} />
      </div>
    `;
  }

  _renderNav(view) {
    const on = (name) => view.name === name;
    const tab = (name, path, label, ic) => html`<button class="tab ${on(name) ? "on" : ""}" @click=${() => this._goTab(path)} aria-label=${label}>${icon(ic)}<span>${label}</span></button>`;
    return html`<nav>
      <div class="tabs">
        ${tab("now", "", "Agora", "clock-3")} ${tab("calendar", "/calendario", "Calendário", "calendar-days")}
        <button class="tab fab" @click=${() => this._openForm({ date: view.name === "calendar" ? this._cursor : null })} aria-label="Novo evento">
          <span class="pill">${icon("plus")}</span><span>Novo</span>
        </button>
        ${tab("rewards", "/recompensas", "Recompensas", "trophy")} ${tab("more", "/mais", "Mais", "sliders-horizontal")}
      </div>
    </nav>`;
  }

  _renderHead(title, status, extra = nothing) {
    const name = this._userName();
    const st = !this._online ? { text: "Reconectando ao CronologIA…", tone: "off" } : status;
    return html`<header class="brand-head">
      <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${name ? ` · Olá, ${name}` : ""}</p>
      <h1 class="page-title">${title}</h1>
      ${st ? html`<p class="status"><span class="dot ${st.tone || ""}" aria-hidden="true"></span><span>${st.text}</span></p>` : nothing}
      ${extra}
    </header>`;
  }

  _colorOfEvent(e) {
    if (e.gerencia) return colorById("ouro");
    if (e.todo) return colorById(TODO_COLOR);
    const c = this._cal(e.cal);
    return (c && c.color) || this._accent();
  }

  /** An event of a calendar (not a routine, task, maintenance, dose or bill). */
  _realEvent(e) {
    return !e.kind && !e.todo && !e.gerencia;
  }

  /** Done (or paid) as the lists show it: maintenance has no done state (it moves to its next date). */
  _rowDone(e) {
    if (e.todo) return !!e.todo.done;
    if (e.gerencia) return !!this._checkOf(e);
    return !!(e.kind && e.kind.kind !== "manutencao" && this._checkOf(e));
  }

  /** Semana / Dia › Qualquer hora: the day's routines, tasks, maintenance and bills, to mark. */
  _openAnyDay(d) {
    this._openSheet("anyday", { day: ymd(d) });
  }

  _renderAnyDaySheet() {
    const now = new Date(this._now);
    const d = fromYmd(this._form.day);
    const list = eventsOfDay(this._events(d, addDays(d, 1)), d).filter((e) => e.allDay && !this._realEvent(e));
    const rows = [...list.filter((e) => !this._rowDone(e)), ...list.filter((e) => this._rowDone(e))];
    const done = list.length - list.filter((e) => !this._rowDone(e)).length;
    return html`${this._sheetHead("Qualquer hora")}
      <p class="sheet-note top">${cap(dayLabel(d, now))} · ${done} de ${plural(list.length, "feita", "feitas")}</p>
      <div class="any-list">
        ${rows.length ? rows.map((e) => this._renderAnyRow(e, d)) : html`<p class="empty-line">Nada sem horário neste dia.</p>`}
      </div>`;
  }

  /**
   * How a line can be marked here: `mark(by)` and `unmark()` (null when it can't), and `quick` when
   * Marcar por outras pessoas shows the initials. Routines and doses only on today or before;
   * maintenance moves to its next date; tasks of the ResolvIA any day.
   */
  _markerOf(e, day) {
    const k = e.kind;
    const kind = k ? k.kind : e.todo ? "tarefa" : "conta";
    const done = this._rowDone(e);
    const pts = k && k.points > 0 && this._scoreOn() ? k.points : e.todo && e.todo.points > 0 ? e.todo.points : 0;
    const past = startOfDay(day) <= startOfDay(new Date(this._now));
    const it = { key: e.key, summary: e.summary, points: (k && k.points) || 0 };
    let mark = null;
    let unmark = null;
    if (kind === "rotina" && past) {
      mark = (by) => this._markDone(it, "rotina", by);
      unmark = () => this._undoCheck(it, "rotina");
    } else if (kind === "remedio" && past) {
      mark = () => this._check(it, "remedio");
      unmark = () => this._undoCheck(it, "remedio");
    } else if (e.todo) {
      mark = (by) => this._todoDone(e.todo, true, by);
      unmark = () => this._todoDone(e.todo, false);
    } else if (kind === "manutencao") {
      const m = (this._ix().maint || []).find((x) => x.cal === e.cal && x.uid === e.uid && x.canMove);
      if (m) mark = (by) => this._maintDone(m, by, true);
    }
    const quick = !done && !!mark && this._pickWho() && (kind === "rotina" || kind === "manutencao" || (!!e.todo && pts > 0));
    return { kind, done, pts, mark, unmark, quick };
  }

  /** One line of Qualquer hora: the check (and the initials) where it can be marked here; tap the text to open it. */
  _renderAnyRow(e, day) {
    const k = e.kind;
    const { kind, done, pts, mark, unmark, quick } = this._markerOf(e, day);
    const cal = this._cal(e.cal);
    const sub = [k && k.who, e.todo ? e.todo.listName : cal ? cal.name : e.gerencia ? "GerencIA" : ""].filter(Boolean).join(" · ");
    return html`<div class="chore ${done ? "done" : ""}" style=${colorVars(this._colorOfEvent(e), this._dark)}>
      ${mark || (done && unmark)
        ? html`<button class="chk ${done ? "on" : ""}" aria-label="${done ? "Desmarcar" : "Marcar"} ${e.summary}" @click=${() => (done ? unmark && unmark() : mark(null))}>${done ? icon("check") : nothing}</button>`
        : html`<span class="chk ro" aria-hidden="true">${icon({ manutencao: "wrench", conta: "receipt", remedio: "pill", rotina: "spray-can", tarefa: "list-checks" }[kind] || "calendar")}</span>`}
      <button class="chore-tx" @click=${() => this._openEvent(e)}><b>${e.summary}</b><small>${quick && pts ? html`<span class="pts-inline">+${pts}</span> · ` : nothing}${sub || { rotina: "Rotina", manutencao: "Manutenção", remedio: "Remédio", conta: "Conta", tarefa: "Tarefa" }[kind]}</small></button>
      ${quick ? this._renderQuickWho(e.summary, pts, (p) => mark(p)) : pts ? html`<span class="pts ${done ? "got" : ""}">+${pts}</span>` : nothing}
    </div>`;
  }

  /** A routine, maintenance, dose or task without a time: done at any time of the day, not an all-day event. */
  _anyTime(e) {
    return !!e.allDay && (!!e.todo || (!!e.kind && e.kind.kind !== "conta"));
  }

  /** The header of a day in a list: a little calendar leaf (weekday and day), the date and how many. */
  _dayHead(d, count, open) {
    const now = new Date(this._now);
    return html`<button class="day-head ${sameDay(d, now) ? "today" : ""}" @click=${open}>
      <span class="dh-cal" aria-hidden="true"><small>${WEEKDAYS_SHORT[d.getDay()].slice(0, 3)}</small><b>${d.getDate()}</b></span>
      <span class="dh-label">${dayLabel(d, now)}</span>
      <span class="dh-count">${count}</span>
    </button>`;
  }

  /**
   * The lines of one day: the real events and the medicine doses first (those with a time,
   * then the all-day ones), then, under their own label, what can be done at any time:
   * routines, tasks, maintenance and bills.
   */
  _renderDayRows(list, day) {
    const isEvent = (e) => (!e.kind || e.kind.kind === "remedio") && !e.todo && !e.gerencia;
    const order = (a, b) => Number(a.allDay) - Number(b.allDay) || a.start - b.start;
    const events = list.filter(isEvent).sort(order);
    const rest = list.filter((e) => !isEvent(e)).sort(order);
    return html`${events.map((e) => this._renderRow(e, day))}${rest.length
      ? html`<div class="day-sep ${events.length ? "" : "first"}">Rotinas, tarefas e lembretes</div>${rest.map((e) => this._renderRow(e, day))}`
      : nothing}`;
  }

  /** One line of an agenda (time, color bar, title, place · calendar). */
  _renderRow(e, day, { showCal = true } = {}) {
    const now = this._now;
    const past = e.end.getTime() <= now;
    const live = e.start.getTime() <= now && e.end.getTime() > now && !e.allDay;
    const cal = this._cal(e.cal);
    let time;
    if (e.allDay) {
      const days = dayDiff(e.end, e.start);
      time = days <= 1 && this._anyTime(e) ? html`<b class="any">Qualquer</b><small>hora</small>` : html`<b>Dia</b><small>${days > 1 ? `${dayDiff(day, e.start) + 1}/${days}` : "todo"}</small>`;
    } else {
      const startsToday = sameDay(e.start, day);
      const endsToday = sameDay(e.end, day) || (e.end.getHours() === 0 && e.end.getMinutes() === 0 && dayDiff(e.end, day) === 1);
      time = html`<b>${startsToday ? hm(e.start) : "…"}</b><small>${endsToday ? hm(e.end) : "segue"}</small>`;
    }
    const k = e.kind;
    const done = e.todo ? e.todo.done : k && k.kind !== "manutencao" && this._checkOf(e);
    const extra = k ? (k.kind === "remedio" ? [k.dose, k.who] : k.kind === "conta" && k.value != null ? [this._money(k.value)] : [k.who]) : [];
    const sub = [...extra, e.location, showCal ? (cal ? cal.name : e.gerencia ? "GerencIA" : e.todo ? `${e.todo.listName} · ResolvIA` : "") : ""].filter(Boolean).join(" · ");
    // Marcar por outras pessoas: the initials on the right, one tap marks it done by that person
    const mk = (k || e.todo) && this._pickWho() ? this._markerOf(e, day) : null;
    const row = html`<button class="ev-row ${past ? "past" : ""} ${live ? "live" : ""} ${done ? "done" : ""}" style=${colorVars(this._colorOfEvent(e), this._dark)} @click=${() => this._openEvent(e)}>
      <span class="ev-time">${time}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${e.todo ? html`<span class="kind-ic">${icon("list-checks")}</span>` : this._kindIcon(e)}${e.summary}${done ? html`<span class="ev-done">${icon("check")}</span>` : nothing}</span>${sub ? html`<span class="ev-sub">${mk && mk.quick && mk.pts ? html`<span class="pts-inline">+${mk.pts}</span> · ` : nothing}${sub}</span>` : nothing}</span>
      ${e.rrule && !(mk && mk.quick) ? html`<span class="ev-rep" title=${rruleLabel(e.rrule)}>${icon("repeat")}</span>` : nothing}
    </button>`;
    return mk && mk.quick ? html`<div class="ev-line">${row}${this._renderQuickWho(e.summary, mk.pts, (p) => mk.mark(p))}</div>` : row;
  }

  // ---------- Agora

  _renderNow() {
    const now = new Date(this._now);
    const today = startOfDay(now);
    // Doses, chores, bills and maintenance have their own panels: the agenda shows appointments.
    const events = this._events(addDays(today, -1), addDays(today, 9)).filter((e) => !e.kind && !e.todo);
    const loading = this._store.loading(addDays(today, -1), addDays(today, 9));
    const lateMeds = this._ix().meds.filter((m) => m.state === "atrasado");
    const todays = eventsOfDay(events, today);
    // Very long timed events (a 15-hour giveaway…) read like all-day ones: chips, not "Agora".
    const long = (e) => e.end - e.start >= 12 * 3600000;
    const allDay = todays.filter((e) => e.allDay || long(e));
    const timed = todays.filter((e) => !e.allDay && !long(e));
    const current = timed.filter((e) => e.start <= now && e.end > now).sort((a, b) => b.start - a.start);
    const upcoming = events.filter((e) => !e.allDay && e.start > now && !long(e)).sort((a, b) => a.start - b.start);
    const next = upcoming[0];
    const cals = this._visible();
    if (!this._cals().length) return this._renderNoCalendars();
    const left = timed.filter((e) => e.end > now).length;
    const status = lateMeds.length
      ? { text: `${cap(dateLong(now))} · ${lateMeds.length === 1 ? `${lateMeds[0].summary} atrasado` : `${lateMeds.length} remédios atrasados`}`, tone: "late" }
      : {
          text: `${cap(dateLong(now))} · ${todays.length ? `${plural(todays.length, "evento", "eventos")} hoje` : "nada hoje"}${left && left < timed.length ? ` · ${left} pela frente` : ""}`,
        };
    let hero;
    if (current.length) {
      const e = current[0];
      const cal = this._cal(e.cal);
      hero = this._ticket(e, {
        label: "Agora",
        pill: `termina ${untilLabel(e.end - now)}`,
        when: html`<b>${hm(e.start)}</b> – <b>${hm(e.end)}</b> · ${durationLabel(e.end - e.start)}`,
        stub: next ? html`<span class="tk-next">Depois <b>${hm(next.start)}</b> ${next.summary}</span>` : html`<span class="dot"></span><span>${[cal && cal.name, e.location].filter(Boolean).join(" · ")}</span>`,
        now,
        live: true,
      });
    } else if (next) {
      const cal = this._cal(next.cal);
      hero = this._ticket(next, {
        label: "A seguir",
        pill: untilLabel(next.start - now),
        when: html`<b>${hm(next.start)}</b> – ${hm(next.end)} · ${sameDay(next.start, now) ? "hoje" : dayLabel(next.start, now, { long: false, cap: false })}`,
        stub: html`<span class="dot"></span><span>${[cal && cal.name, next.location].filter(Boolean).join(" · ")}</span>`,
        now,
      });
    } else if (!loading) {
      hero = html`<div class="hero-ev ticket empty" style=${colorVars(this._accent(), this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(null, now)}</span>
          <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">Agenda livre</span><span class="tk-when">Nada marcado nos próximos dias</span></span>
        </span>
      </div>`;
    }
    const shownAllDay = this._showAllDay || allDay.length <= 3 ? allDay : allDay.slice(0, 2);
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const d = addDays(today, i);
      const list = eventsOfDay(events, d).filter((e) => !(e.allDay && e.start < d)); // multi-day all-day: only on its first day here
      if (list.length) days.push({ d, list });
    }
    const nowLine = html`<div class="now-line"><span>${hm(now)}</span></div>`;
    let lineDone = false;
    // All of today's doses taken: the card goes to the end of the page (it stays put
    // right after the last Tomei here, until you leave Agora, so it doesn't jump from under the finger).
    const meds = this._ix().meds || [];
    const medsLast = meds.length > 0 && meds.every((m) => m.taken) && !this._medsHold;
    return html`<section class="page">
      ${this._renderHead("Hoje", status)}
      ${!cals.length ? html`<div class="hint-card">${icon("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${() => this._go("/mais")}>Mostrar</button></div>` : nothing}
      ${medsLast ? nothing : this._renderMedsPanel()} ${this._renderBillsPanel()}
      ${hero || nothing}
      ${allDay.length
        ? html`<div class="allday">
            ${shownAllDay.map((e) => html`<button class="ad-chip" style=${colorVars(this._colorOfEvent(e), this._dark)} @click=${() => this._openEvent(e)}><span class="dot"></span><span>${e.summary}</span></button>`)}
            ${allDay.length > shownAllDay.length ? html`<button class="ad-chip more" @click=${() => ((this._showAllDay = true), this.requestUpdate())}>+${allDay.length - shownAllDay.length} o dia todo</button>` : nothing}
          </div>`
        : nothing}
      ${this._renderTodosPanel()}
      <div class="panel agenda">
        <div class="overline">Hoje · ${dateShort(now, now)}</div>
        ${timed.length
          ? timed.map((e) => {
              const line = !lineDone && e.start > now ? ((lineDone = true), nowLine) : nothing;
              return html`${line}${this._renderRow(e, today)}`;
            })
          : html`<p class="empty-line">${loading ? "Carregando…" : "Nenhum horário marcado hoje."}</p>`}
        ${timed.length && !lineDone && timed[timed.length - 1].end <= now ? nowLine : nothing}
        <button class="add-line" @click=${() => this._openForm({ date: today })}>${icon("plus")}Evento hoje</button>
      </div>
      ${this._renderHomePanel()}
      ${days.length
        ? html`<div class="panel agenda">
            <div class="overline">Próximos dias</div>
            ${days.map(
              ({ d, list }) => html`${this._dayHead(d, list.length, () => this._openDay(d))}
                ${this._renderDayRows(list, d)}`,
            )}
          </div>`
        : !loading
          ? html`<p class="page-sub">Nada marcado nos próximos 7 dias.</p>`
          : nothing}
      ${medsLast ? this._renderMedsPanel() : nothing}
    </section>`;
  }

  /** Appointment card: a clock with the event on the dial, and a ticket stub. */
  _ticket(e, { label, pill, when, stub, now, live = false }) {
    return html`<button class="hero-ev ticket ${live ? "live" : ""}" style=${colorVars(this._colorOfEvent(e), this._dark)} @click=${() => this._openEvent(e)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(e, now, live)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${label}</span><span class="tk-pill">${icon("clock", "sm")}${pill}</span></span>
          <span class="hero-title">${e.summary}</span>
          <span class="tk-when">${when}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${stub}</span>
    </button>`;
  }

  /**
   * A small analog clock: the event's span as an arc on the dial and the
   * hands at its start time (or at "now" while it is happening).
   */
  _clock(e, now, live = false) {
    const C = 40;
    const R = 34;
    const angle = (d) => (((d.getHours() % 12) * 60 + d.getMinutes()) / 720) * 2 * Math.PI;
    const pt = (a, r) => [C + r * Math.sin(a), C - r * Math.cos(a)];
    const arc = (a0, a1, r) => {
      let sweep = a1 - a0;
      while (sweep <= 0) sweep += 2 * Math.PI;
      sweep = Math.max(sweep, 0.42); // a 15-minute event still shows on the dial
      if (sweep >= 2 * Math.PI - 0.01) return `M ${C} ${C - r} A ${r} ${r} 0 1 1 ${C - 0.01} ${C - r}`;
      const [x0, y0] = pt(a0, r);
      const [x1, y1] = pt(a0 + sweep, r);
      return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${sweep > Math.PI ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
    };
    const ticks = Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * 2 * Math.PI;
      const [x0, y0] = pt(a, i % 3 ? 27 : 24);
      const [x1, y1] = pt(a, 29);
      return svgLine(x0, y0, x1, y1, i % 3 ? "tick" : "tick major");
    });
    let span = "";
    let done = "";
    let at = now;
    if (e) {
      const long = e.end - e.start >= 12 * 3600000;
      span = long ? arc(0, 2 * Math.PI, R) : arc(angle(e.start), angle(e.end), R);
      if (live && !long) done = arc(angle(e.start), angle(now), R);
      at = live ? now : e.start;
    }
    const hourA = angle(at);
    const minA = (at.getMinutes() / 60) * 2 * Math.PI;
    const [hx, hy] = pt(hourA, 15);
    const [mx, my] = pt(minA, 23);
    return html`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${ticks}
      ${span ? svgPath(span, live ? "span faint" : "span") : nothing}
      ${done ? svgPath(done, "span") : nothing}
      ${svgLine(C, C, hx, hy, "hand hour")}
      ${svgLine(C, C, mx, my, "hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`;
  }

  _renderNoCalendars() {
    return html`<section class="page">
      ${this._renderHead("Hoje", { text: "Nenhum calendário no Home Assistant", tone: "off" })}
      <div class="panel"><div class="empty"><div class="em-icon">${icon("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`;
  }

  // ---------- Calendário

  _renderCalendar() {
    const now = new Date(this._now);
    const cur = this._cursor;
    const mode = this._mode;
    const ws = this._app("week_start", 0);
    let title;
    let prev;
    let nextFn;
    if (mode === "mes" || mode === "lista") {
      title = `${cap(MONTHS[cur.getMonth()])}${cur.getFullYear() !== now.getFullYear() ? ` ${cur.getFullYear()}` : ""}`;
      prev = () => (this._cursor = mode === "lista" ? addDays(cur, -30) : addMonths(cur, -1));
      nextFn = () => (this._cursor = mode === "lista" ? addDays(cur, 30) : addMonths(cur, 1));
    } else if (mode === "semana") {
      const a = startOfWeek(cur, ws);
      const b = addDays(a, 6);
      title = a.getMonth() === b.getMonth() ? `${a.getDate()}–${b.getDate()} ${MONTHS[b.getMonth()].slice(0, 3)}` : `${a.getDate()} ${MONTHS[a.getMonth()].slice(0, 3)} – ${b.getDate()} ${MONTHS[b.getMonth()].slice(0, 3)}`;
      prev = () => (this._cursor = addDays(cur, -7));
      nextFn = () => (this._cursor = addDays(cur, 7));
    } else {
      title = dayLabel(cur, now);
      prev = () => (this._cursor = addDays(cur, -1));
      nextFn = () => (this._cursor = addDays(cur, 1));
    }
    const modes = [
      ["mes", "Mês", "layout-grid"],
      ["semana", "Semana", "columns-3"],
      ["dia", "Dia", "calendar"],
      ["lista", "Lista", "list"],
    ];
    let body;
    if (mode === "semana") body = this._renderTimeGrid(startOfWeek(cur, ws), 7);
    else if (mode === "dia") body = this._renderTimeGrid(cur, 1);
    else if (mode === "lista") body = this._renderList();
    else body = this._renderMonth();
    const isToday = mode === "mes" ? cur.getMonth() === now.getMonth() && cur.getFullYear() === now.getFullYear() && sameDay(cur, now) : sameDay(cur, now);
    return html`<section class="page cal-page">
      <div class="cal-top">
        <div class="cal-title">
          <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${this._userName() ? ` · Olá, ${this._userName()}` : ""}</p>
          <h1 class="page-title">${title}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${() => {
            prev();
            this._scrollWeek = true;
          }}>${icon("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${() => {
            nextFn();
            this._scrollWeek = true;
          }}>${icon("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${modes.map(([k, label, ic]) => html`<button class=${mode === k ? "on" : ""} role="tab" aria-selected=${mode === k ? "true" : "false"} @click=${() => this._setMode(k)}>${icon(ic)}<span>${label}</span></button>`)}
        </div>
        <button class="pick ${isToday ? "on" : ""}" @click=${() => {
          this._cursor = startOfDay(new Date());
          this._scrollWeek = true;
        }}>Hoje</button>
      </div>
      ${body}
    </section>`;
  }

  _renderMonth() {
    const now = new Date(this._now);
    const cur = this._cursor;
    const ws = this._app("week_start", 0);
    const first = new Date(cur.getFullYear(), cur.getMonth(), 1);
    const gridStart = startOfWeek(first, ws);
    const gridEnd = addDays(gridStart, 42);
    const events = this._events(gridStart, gridEnd);
    const cells = [];
    for (let i = 0; i < 42; i++) {
      const d = addDays(gridStart, i);
      const list = eventsOfDay(events, d);
      cells.push({ d, list });
    }
    const weeks = cells[35].d.getMonth() !== cur.getMonth() ? 5 : 6;
    const dayEvents = eventsOfDay(events, cur);
    const touch = { x: 0, y: 0 };
    return html`
      <div class="month" @touchstart=${(e) => ((touch.x = e.touches[0].clientX), (touch.y = e.touches[0].clientY))} @touchend=${(e) => {
        const dx = e.changedTouches[0].clientX - touch.x;
        const dy = e.changedTouches[0].clientY - touch.y;
        if (Math.abs(dx) > 60 && Math.abs(dy) < 50) this._cursor = addMonths(cur, dx < 0 ? 1 : -1);
      }}>
        <div class="wd">${[0, 1, 2, 3, 4, 5, 6].map((i) => html`<span>${WEEKDAYS_SHORT[(i + ws) % 7].slice(0, 1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${cells.slice(0, weeks * 7).map(({ d, list }) => {
            const out = d.getMonth() !== cur.getMonth();
            const colors = [...new Set(list.map((e) => this._colorOfEvent(e).fill))].slice(0, 4);
            return html`<button class="cell ${out ? "out" : ""} ${sameDay(d, now) ? "today" : ""} ${sameDay(d, cur) ? "sel" : ""}" @click=${() => (this._cursor = d)} aria-label="${dayLabel(d, now)}: ${plural(list.length, "evento", "eventos")}">
              <span class="num">${d.getDate()}</span>
              <span class="dots">${colors.map((c) => html`<i style="background:${c}"></i>`)}${list.length > 4 ? html`<b>+</b>` : nothing}</span>
            </button>`;
          })}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title"><span>${dayLabel(cur, now)}</span><button class="text-btn" @click=${() => this._openForm({ date: cur })}>${icon("plus")}Evento</button></div>
        ${dayEvents.length ? this._renderDayRows(dayEvents, cur) : html`<p class="empty-line">${this._store.loading(gridStart, gridEnd) ? "Carregando…" : "Nada marcado."}</p>`}
      </div>
    `;
  }

  /** Week (7 columns) or day (1 column) with the hours of the day. */
  _renderTimeGrid(start, n) {
    const now = new Date(this._now);
    const days = Array.from({ length: n }, (_, i) => addDays(start, i));
    const events = this._events(days[0], addDays(days[n - 1], 1));
    const hours = Array.from({ length: 24 }, (_, h) => h);
    const ws = this._app("week_start", 0);
    // Very long timed events (a 15-hour giveaway…) would cover the whole column: they go up with the all-day ones.
    // "Dia todo" is only for real events: routines, tasks, maintenance and bills without a time
    // become a counter per day ("Qualquer hora", 3/46), and the list opens from it.
    const anyTime = (e) => e.allDay && !this._realEvent(e);
    const banner = (e) => !anyTime(e) && (e.allDay || e.end - e.start >= 12 * 3600000);
    const allDayRows = days.map((d) => eventsOfDay(events, d).filter(banner));
    const maxAllDay = Math.max(0, ...allDayRows.map((r) => r.length));
    const anyRows = days.map((d) => eventsOfDay(events, d).filter(anyTime));
    const counter = (d, list) => {
      const done = list.filter((e) => this._rowDone(e)).length;
      return { done, total: list.length, all: done === list.length };
    };
    return html`
      ${n === 7
        ? html`<div class="week-strip">
            ${days.map((d) => html`<button class="ws-day ${sameDay(d, now) ? "today" : ""} ${sameDay(d, this._cursor) ? "sel" : ""}" @click=${() => (this._cursor = d)}>
              <span>${WEEKDAYS_SHORT[d.getDay()]}</span><b>${d.getDate()}</b>
            </button>`)}
          </div>`
        : html`<div class="week-strip day-strip">
            ${Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(this._cursor, ws), i)).map(
              (d) => html`<button class="ws-day ${sameDay(d, now) ? "today" : ""} ${sameDay(d, this._cursor) ? "sel" : ""}" @click=${() => (this._cursor = d)}><span>${WEEKDAYS_SHORT[d.getDay()]}</span><b>${d.getDate()}</b></button>`,
            )}
          </div>`}
      ${anyRows.some((l) => l.length)
        ? n === 1
          ? (() => {
              const c = counter(days[0], anyRows[0]);
              return html`<button class="any-bar ${c.all ? "all" : ""}" @click=${() => this._openAnyDay(days[0])}>
                ${icon(c.all ? "circle-check" : "list-checks")}<span>Qualquer hora</span><b>${c.done}/${c.total}</b>${icon("chevron-right")}
              </button>`;
            })()
          : html`<div class="tgrid-any" style="--n:${n}">
              <span class="tg-label any-ic" title="Qualquer hora">${icon("list-checks")}</span>
              ${anyRows.map((list, i) => {
                if (!list.length) return html`<span></span>`;
                const c = counter(days[i], list);
                return html`<button class="tg-any ${c.all ? "all" : ""}" aria-label="Qualquer hora, ${dayLabel(days[i], now)}: ${c.done} de ${c.total} feitas" @click=${() => this._openAnyDay(days[i])}>${c.done}/${c.total}</button>`;
              })}
            </div>`
        : nothing}
      ${maxAllDay
        ? html`<div class="tgrid-allday" style="--n:${n}">
            <span class="tg-label">dia todo</span>
            ${allDayRows.map(
              (list) => html`<div class="tg-adcol">${list.slice(0, 3).map((e) => html`<button class="tg-ad ${e.kind && this._checkOf(e) ? "done" : ""}" style=${colorVars(this._colorOfEvent(e), this._dark)} @click=${() => this._openEvent(e)}>${e.summary}</button>`)}${list.length > 3 ? html`<span class="tg-admore">+${list.length - 3}</span>` : nothing}</div>`,
            )}
          </div>`
        : nothing}
      <div class="tgrid-scroll">
        <div class="tgrid ${n === 1 ? "one" : "week"}" style="--n:${n};--hh:${HOUR_H}px">
          <div class="tg-hours">${hours.map((h) => html`<span style="top:${h * HOUR_H}px">${h ? `${String(h).padStart(2, "0")}h` : ""}</span>`)}</div>
          ${days.map((d) => {
            const items = layoutDay(eventsOfDay(events, d).filter((e) => !banner(e)), d);
            const isToday = sameDay(d, now);
            const nowTop = (now.getHours() + now.getMinutes() / 60) * HOUR_H;
            return html`<div class="tg-col ${isToday ? "today" : ""}" @click=${(ev) => {
              if (ev.target !== ev.currentTarget) return;
              const y = ev.offsetY;
              this._openForm({ date: d, hour: Math.max(0, Math.min(23, Math.floor(y / HOUR_H))) });
            }}>
              ${items.map(({ event: e, top, height, lane, lanes }) => {
                // at least half an hour tall (layoutDay already counts a short event as 30 minutes)
                const h = Math.max(height * HOUR_H - 2, HOUR_H / 2 - 2);
                // a medicine dose looks different from an event: pill icon, dashed border, stripes
                const med = !!(e.kind && e.kind.kind === "remedio");
                const done = e.kind && this._checkOf(e);
                return html`<button class="tg-ev ${h < 34 ? "short" : ""} ${med ? "med" : ""} ${done ? "done" : ""}" style="${colorVars(this._colorOfEvent(e), this._dark)}top:${top * HOUR_H}px;height:${h}px;left:calc(${(lane / lanes) * 100}% + 1px);width:calc(${100 / lanes}% - 2px)" @click=${() => this._openEvent(e)}>
                  <b>${med ? icon(done ? "check" : "pill") : done ? "✓ " : ""}${e.summary}</b>${h >= 34 ? html`<small>${hm(e.start)}${n === 1 && e.location ? ` · ${e.location}` : ""}${n === 1 && med && e.kind.dose ? ` · ${e.kind.dose}` : ""}</small>` : nothing}
                </button>`;
              })}
              ${isToday ? html`<i class="tg-now" style="top:${nowTop}px"></i>` : nothing}
            </div>`;
          })}
        </div>
      </div>
    `;
  }

  _renderList() {
    const now = new Date(this._now);
    const q = this._query.trim();
    const needle = fold(q);
    let start;
    let end;
    if (needle) {
      start = addDays(startOfDay(now), -365);
      end = addDays(startOfDay(now), 366);
    } else {
      start = this._cursor;
      end = addDays(this._cursor, 30);
    }
    let events = this._events(start, end);
    if (needle) events = events.filter((e) => fold(`${e.summary} ${e.location} ${e.description}`).includes(needle));
    const byDay = [];
    for (const e of events) {
      const d = startOfDay(e.start < start ? start : e.start);
      const last = byDay[byDay.length - 1];
      if (last && sameDay(last.d, d)) last.list.push(e);
      else byDay.push({ d, list: [e] });
    }
    const loading = this._store.loading(start, end);
    return html`
      <label class="search-box">
        ${icon("search")}
        <input type="search" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${(e) => (this._query = e.target.value)} enterkeyhint="search" aria-label="Buscar" />
        ${this._query ? html`<button class="icon-btn" style="width:40px;height:40px" @click=${() => (this._query = "")} aria-label="Limpar">${icon("x")}</button>` : nothing}
      </label>
      ${needle ? html`<p class="page-sub" style="margin-top:0">${loading ? "Buscando…" : plural(events.length, "evento encontrado", "eventos encontrados")} · do último ano ao próximo</p>` : nothing}
      ${byDay.length
        ? html`<div class="panel agenda">
            ${byDay.map(({ d, list }) => html`${this._dayHead(d, list.length, () => this._openDay(d, "dia"))}${this._renderDayRows(list, d)}`)}
          </div>`
        : html`<div class="panel"><div class="empty"><div class="em-icon">${icon(needle ? "search" : "calendar-check")}</div><h3>${needle ? "Nada encontrado" : loading ? "Carregando…" : "Nada marcado"}</h3><p>${needle ? `Nenhum evento com “${clip(q, 30)}”.` : "Nenhum evento nos próximos 30 dias."}</p></div></div>`}
    `;
  }

  // ---------- Agendas

  /** Mais › Calendários: every calendar (name, color, show/hide), where new events go, adding calendars. */
  _renderCalendarsTab() {
    const cals = this._cals();
    const groups = [];
    for (const c of cals) {
      const g = groups.find((x) => x.label === c.group);
      if (g) g.list.push(c);
      else groups.push({ label: c.group, list: [c] });
    }
    const errors = this._store ? this._store.errors() : new Map();
    const writable = this._writable();
    const def = this._defaultCal();
    return html`
      ${groups.map(
        (g) => html`<div class="panel">
          ${this._secHead("calendar-days", g.label)}
          ${g.list.map(
            (c) => html`<div class="row cal-row ${c.hidden ? "off" : ""}" style=${colorVars(c.color, this._dark)}>
              <button class="tile" @click=${() => this._openCalSheet(c)} aria-label="Personalizar ${c.name}">${icon(c.icon)}</button>
              <button class="grow" style="text-align:left" @click=${() => this._openCalSheet(c)}>
                <div class="label">${c.name}</div>
                <div class="hint">${[c.device, errors.get(c.id) ? "não carregou" : c.unavailable ? "indisponível" : c.canCreate ? (c.canUpdate ? "cria e edita" : "cria eventos") : "só leitura"].filter(Boolean).join(" · ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!c.hidden} @change=${(e) => this._saveCalPrefs(c.id, { hidden: e.target.checked ? null : true })} aria-label="Mostrar ${c.name}" /><span class="track"></span></label>
            </div>`,
          )}
        </div>`,
      )}
      <div class="panel" id="novos-eventos">
        ${this._secHead("calendar-plus", "Novos eventos")}
        ${writable.length
          ? html`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${(e) => this._saveAppPrefs({ default_calendar: e.target.value })}>
                ${writable.map((c) => html`<option value=${c.id} ?selected=${c.id === def}>${c.name}</option>`)}
              </select>
              <span class="field-hint">${icon("info")}<span>Onde caem os eventos novos e os que a IA encontrar. Dá para trocar em cada evento.</span></span>
            </label>`
          : html`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos. Adicione um calendário local logo abaixo.</div></div>`}
      </div>
      ${this._renderAddCalendars()}
    `;
  }

  _renderAddCalendars() {
    const admin = this._isAdmin();
    const row = (ic, label, hint, run) => html`<button class="row" @click=${run}>
      <span class="tile" style=${colorVars(this._accent(), this._dark)}>${icon(ic)}</span>
      <span class="grow"><div class="label">${label}</div><div class="hint" style="white-space:normal">${hint}</div></span>
      ${icon("chevron-right")}
    </button>`;
    const add = (domain) => () => (admin ? this._openInHA(`/config/integrations/dashboard/add?domain=${domain}`) : this._showToast("Peça para um administrador do Home Assistant adicionar."));
    return html`<div class="panel">
      ${this._secHead("plus", "Adicionar calendários")}
      ${row("calendar-plus", "Calendário local", "Fica no próprio Home Assistant e aceita tudo: criar, editar, repetir.", add("local_calendar"))}
      ${row("calendar-days", "Google Agenda", "Integração oficial do Home Assistant. Atualiza a cada 15 minutos.", add("google"))}
      ${row("briefcase", "Outlook / Microsoft 365", "Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.", () => this._openSheet("outlook", {}))}
      ${row("link", "Link .ics (calendário remoto)", "Qualquer agenda publicada por link. Só leitura, atualiza uma vez por dia.", add("remote_calendar"))}
      ${row("party-popper", "Feriados", "Feriados nacionais e do seu estado.", add("holiday"))}
    </div>`;
  }

  _openCalSheet(c) {
    this._openSheet("calendar", { id: c.id, name: c.colorId || c.name !== c.origName ? c.name : "", color: c.colorId, hidden: c.hidden });
  }

  async _saveCalSheet() {
    const f = this._form;
    const c = this._cal(f.id);
    if (!c) return;
    const name = (f.name || "").trim();
    await this._saveCalPrefs(f.id, { name: name && name !== c.origName ? name : null, color: f.color || null, hidden: f.hidden ? true : null });
    this._closeSheet();
    this._showToast("Calendário salvo");
  }

  // ---------- Mais

  /**
   * Mais is split in tabs at the top: /mais (Calendários), /mais/avisos,
   * /mais/integracoes, /mais/dados, /mais/aparencia, /mais/opcoes. Switching tabs replaces
   * the history entry, so Back leaves Mais.
   */
  _renderMore() {
    const tab = this._view().tab;
    const tabs = [
      ["calendarios", "Calendários", "layers"],
      ["avisos", "Avisos", "bell-ring"],
      ["placar", "Placar", "trophy"],
      ["integracoes", "Integrações", "blocks"],
      ["dados", "Dados", "archive"],
      ["aparencia", "Aparência", "palette"],
      ["opcoes", "Opções", "toggle-right"],
    ];
    const go = (k) => {
      if (k === tab) return;
      this._haptic("light");
      this._go(k === "calendarios" ? "/mais" : `/mais/${k}`, true);
    };
    let body;
    let status = { text: `CronologIA ${this._version}` };
    if (tab === "avisos") body = this._renderAlertsPanel();
    else if (tab === "placar") body = this._renderScoreSettings();
    else if (tab === "integracoes") body = html`${this._renderGerenciaPanel()} ${this._renderTodosSettings()} ${this._renderAiPanel()} ${this._aiOn() ? this._renderUsage() : nothing}`;
    else if (tab === "dados") body = this._renderDataPanel();
    else if (tab === "aparencia") body = this._renderAppearance();
    else if (tab === "opcoes") body = this._renderOptions();
    else {
      body = this._renderCalendarsTab();
      const cals = this._cals();
      const editable = cals.filter((c) => c.canCreate).length;
      status = { text: cals.length ? `${plural(cals.length, "calendário", "calendários")} · ${editable ? plural(editable, "com edição", "com edição") : "só leitura"}` : "Nenhum calendário ainda" };
    }
    return html`<section class="page">
      ${this._renderHead("Mais", status)}
      <div class="seg compact more-tabs" role="tablist" aria-label="Seções">
        ${tabs.map(([k, label, ic]) => html`<button class=${tab === k ? "on" : ""} role="tab" aria-selected=${tab === k ? "true" : "false"} @click=${() => go(k)}>${icon(ic)}<span>${label}</span></button>`)}
      </div>
      <div role="tabpanel" aria-label=${tabs.find((t) => t[0] === tab)[1]}>${body}</div>
      <p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>
    </section>`;
  }

  _renderAppearance() {
    const accent = this._app("accent", "turquesa");
    return html`
      <div class="panel">
        ${this._secHead("contrast", "Tema", "Automático segue o modo claro ou escuro do Home Assistant. Cada aparelho guarda a sua escolha.")}
        ${themePicker({ theme: this._theme, onTheme: (k) => this._setTheme(k), icon })}
      </div>
      <div class="panel">
        ${this._secHead("palette", "Cor do app", "Muda os botões principais, a aba escolhida e os destaques. Vale para todos os aparelhos.")}
        ${colorPicker({ palette: PALETTE, value: accent, onPick: (id) => this._saveAppPrefs({ accent: id }) })}
      </div>
    `;
  }

  /** Mais › Opções: how the agenda works, for the whole house. */
  _renderOptions() {
    const ws = this._app("week_start", 0);
    const details = this._app("event_details", false) === true;
    return html`
      <div class="panel">
        ${this._secHead("calendar-plus", "Novo")}
        <div class="row switch-row">
          <div class="grow"><div class="label">Local e notas</div><div class="hint" style="white-space:normal">${details
            ? "Ligado: o evento tem os campos Local e Notas, e a tarefa tem Notas."
            : "Desligado: o evento e a tarefa ficam mais curtos, sem Local e Notas. Um evento que já tem local ou notas continua mostrando os dois."}</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${details} @change=${(e) => this._saveAppPrefs({ event_details: e.target.checked ? true : null })} aria-label="Local e notas" /><span class="track"></span></label>
        </div>
      </div>
      <div class="panel">
        ${this._secHead("calendar-days", "Semana", "O dia em que a semana começa no calendário e no placar semanal.")}
        <div class="seg week-seg" role="radiogroup" aria-label="Início da semana">
          ${[
            [0, "Domingo"],
            [1, "Segunda"],
          ].map(([k, label]) => html`<button class=${ws === k ? "on" : ""} role="radio" aria-checked=${ws === k ? "true" : "false"} @click=${() => this._saveAppPrefs({ week_start: k })}>${label}</button>`)}
        </div>
      </div>
    `;
  }

  /** Novo › Evento: Colar mensagem / Escolher fotos / Digitalizar com IA, dashed tiles like the InventarIA and the ResolvIA. */
  _renderImportTiles() {
    const ai = this._ai || {};
    const android = this._isHaAndroid();
    const tile = (start, ic, text, off = false) => html`<button type="button" class="imp-tile" ?disabled=${off} @click=${() => this._openImport(start)}>${icon(ic)}<span>${text}</span></button>`;
    return html`<div class="field imp-field">
        <span class="flabel">Trazer de mensagem ou foto</span>
        <div class="imp-tiles">
          ${tile("text", "clipboard-paste", "Colar mensagem")}
          ${tile("photos", "images", "Escolher fotos", !ai.images)}
          ${tile("scan", "scan-text", "Digitalizar com\u00a0IA", !ai.images)}
        </div>
        ${android && ai.images ? html`<p class="imp-help">No app do Home Assistant, Escolher fotos abre a galeria (uma foto por vez). Para fotografar um convite ou cartão na hora, use Digitalizar com IA, que abre a câmera aqui dentro.</p>` : nothing}
      </div>
      <div class="ai-box">${icon("scan-text")}<span>${ai.ready
        ? "Com uma mensagem ou foto, a IA encontra os eventos, com data, horário e local. Você confere antes de criar."
        : "Para ler mensagens e fotos, configure a Leitura por IA em Mais › Integrações."}</span></div>`;
  }

  /** Section heading of Mais, like the InventarIA: the icon in a soft square, a big title and, optionally, a line about it. */
  _secHead(ic, title, lead = null) {
    return html`<div class="mais-head"><span class="mais-ic" aria-hidden="true">${icon(ic)}</span><h2>${title}</h2></div>${lead ? html`<p class="panel-lead">${lead}</p>` : nothing}`;
  }

  /** Mais › Integrações › Uso da IA: the calls counted by the server (uso_ia.json). */
  async _loadUsage() {
    if (!this.api.aiUsage) return;
    try {
      this._usage = await this.api.aiUsage();
    } catch (err) {
      this._usage = null;
    }
    this.requestUpdate();
  }

  _renderUsage() {
    const ai = this._ai || {};
    return usagePanel({
      u: this._usage,
      day: this._usageDay,
      onDay: (d) => ((this._usageDay = d), this.requestUpdate()),
      head: this._secHead("chart-column", "Uso da IA", "Cada mensagem ou foto lida é uma chamada para a IA do Home Assistant. O Home Assistant não informa tokens nem custo, então o CronologIA conta as chamadas e estima os tokens pelo tamanho do texto."),
      app: "CronologIA",
      using: (ai.using && ai.using.id) || "",
      names: Object.fromEntries((ai.entities || []).map((e) => [e.id, e.name])),
    });
  }

  /** Mais › Integrações › Usar IA: off hides everything that reads messages and photos with AI. */
  _aiOn() {
    return !this._app("ai_off", false);
  }

  _renderAiPanel() {
    const on = this._aiOn();
    const sw = html`<div class="row switch-row">
        <div class="grow"><div class="label">Usar IA</div><div class="hint" style="white-space:normal">${on
          ? "Ligado: em Novo aparecem Colar mensagem, Escolher fotos e Digitalizar com IA."
          : "Desligado: Colar mensagem, Escolher fotos e Digitalizar com IA somem do Novo. O arquivo .ics continua em Mais › Dados."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${on} @change=${(e) => this._saveAppPrefs({ ai_off: e.target.checked ? null : true })} aria-label="Usar IA" /><span class="track"></span></label>
      </div>`;
    if (!on) {
      return html`<div class="panel" id="leitura-ia">
        ${this._secHead("sparkles", "Leitura por IA", "Encontra eventos em mensagens coladas, prints, convites e cartões de consulta, com a IA configurada no Home Assistant.")}
        ${sw}
      </div>`;
    }
    const ai = this._ai || {};
    const ents = ai.entities || [];
    const sel = this._app("ai_entity", "");
    const tone = this._aiChecking ? "off" : ai.ready && ai.images ? "ok" : ai.ready ? "warn" : "bad";
    const title = this._aiChecking ? "Verificando…" : ai.ready && ai.images ? "Pronta para ler fotos" : ai.ready ? "Só lê mensagens" : "Não configurada";
    let detail = "";
    if (ai.ready && ai.using) {
      detail = `Usando ${ai.using.name}${sel ? "" : " (a IA padrão do Home Assistant)"}.`;
      if (ai.photos) detail += ` Para fotos, ${ai.photos.name}.`;
    }
    if (ai.reason) detail = `${detail} ${ai.reason}`.trim();
    return html`<div class="panel" id="leitura-ia">
      ${this._secHead("sparkles", "Leitura por IA", "Encontra eventos em mensagens coladas, prints, convites e cartões de consulta. Usa a integração de IA configurada no Home Assistant (Anthropic Claude, OpenAI, Google Gemini ou um modelo local pelo Ollama); o app não guarda nenhuma chave.")}
      ${sw}
      <div class="ai-state ${tone}"><span class="dot"></span><div><b>${title}</b>${detail ? html`<span>${detail}</span>` : nothing}</div></div>
      ${ents.length || sel
        ? html`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${(e) => this._chooseAi(e.target.value)}>
              <option value="" ?selected=${!sel}>Padrão do Home Assistant</option>
              ${ents.map((e) => html`<option value=${e.id} ?selected=${e.id === sel}>${e.name}${e.images ? "" : " (só texto)"}${e.available ? "" : " (indisponível)"}</option>`)}
              ${sel && !ents.some((e) => e.id === sel) ? html`<option value=${sel} selected>${sel} (não encontrada)</option>` : nothing}
            </select>
            <span class="field-hint">${icon("sparkles")}<span>“Padrão do Home Assistant” usa a IA preferida definida em Configurações › Sistema › Geral.</span></span>
          </label>`
        : nothing}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${() => this._refreshAi()}>${icon("rotate-ccw")}Verificar de novo</button></div>
      ${ai.ready && ai.images
        ? nothing
        : html`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`;
  }

  // ---------- sheets

  _renderSheet() {
    if (!this._sheet) return nothing;
    const f = this._form || {};
    let body = nothing;
    let tint = null;
    if (this._sheet === "event") {
      body = this._renderEventSheet();
      tint = f.ev && this._colorOfEvent(f.ev);
    } else if (this._sheet === "form") {
      body = this._renderFormSheet();
      tint = this._cal(f.cal) && this._cal(f.cal).color;
    } else if (this._sheet === "scope") body = this._renderScope();
    else if (this._sheet === "confirm") body = this._renderConfirm();
    else if (this._sheet === "import") {
      body = this._renderImportSheet();
      tint = this._cal(f.target) && this._cal(f.target).color;
    } else if (this._sheet === "calendar") {
      body = this._renderCalSheet();
      const c = this._cal(f.id);
      tint = colorById(f.color) || (c && c.color);
    } else if (this._sheet === "export") body = this._renderExportSheet();
    else if (this._sheet === "outlook") body = this._renderOutlookSheet();
    else if (this._sheet === "nocal") body = this._renderNoCalSheet();
    else if (this._sheet === "maint") body = this._renderMaintSheet();
    else if (this._sheet === "anyday") body = this._renderAnyDaySheet();
    else if (this._sheet === "versions") body = this._renderVersions();
    else if (this._sheet === "who") body = this._renderWhoSheet();
    else if (this._sheet === "todo") {
      body = this._renderTodoSheet();
      tint = colorById(TODO_COLOR);
    }
    else if (this._sheet === "bring") body = this._renderBringSheet();
    else if (this._sheet === "extra") body = this._renderExtraSheet();
    else if (this._sheet === "demerit") body = this._renderDemeritSheet();
    else if (this._sheet === "prize") body = this._renderPrizeSheet();
    else if (this._sheet === "bill") {
      body = this._renderBillSheet();
      tint = colorById("ouro");
    }
    const style = tint ? `--rv-accent:${tint.fill};--rv-accent-ink:${this._dark ? tint.fill : tint.ink};--rv-accent-soft:${hexToRgba(tint.fill, this._dark ? 0.18 : 0.14)};${colorVars(tint, this._dark)}` : "";
    return html`
      <div class="scrim" @click=${() => this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${style} @keydown=${(e) => e.key === "Escape" && this._closeSheet()}>
        <div class="grab"></div>
        ${body}
      </div>
    `;
  }

  _sheetHead(title, back) {
    return html`<div class="sheet-head">
      ${back ? html`<button class="icon-btn back" @click=${back} aria-label="Voltar">${icon("chevron-left")}</button>` : nothing}
      <h3 class="display">${title}</h3>
      <button class="icon-btn" @click=${() => this._closeSheet()} aria-label="Fechar">${icon("x")}</button>
    </div>`;
  }

  _renderEventSheet() {
    const e = this._form.ev;
    const now = new Date(this._now);
    const cal = this._cal(e.cal);
    let when;
    if (e.allDay) {
      const last = addDays(e.end, -1);
      when = sameDay(last, e.start) ? `${dayLabel(e.start, now)} · ${this._anyTime(e) ? "qualquer hora" : "dia todo"}` : `${cap(dateShort(e.start, now))} – ${dateShort(last, now)} · ${plural(dayDiff(e.end, e.start), "dia", "dias")}`;
    } else if (sameDay(e.start, e.end) || (e.end.getHours() === 0 && e.end.getMinutes() === 0 && dayDiff(e.end, e.start) === 1)) {
      when = `${dayLabel(e.start, now)} · ${hm(e.start)} – ${hm(e.end)} (${durationLabel(e.end - e.start)})`;
    } else {
      when = `${cap(dateShort(e.start, now))}, ${hm(e.start)} – ${dateShort(e.end, now)}, ${hm(e.end)}`;
    }
    const soon = e.start > now ? untilLabel(e.start - now) : e.end > now ? "acontecendo agora" : "";
    return html`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${e.summary}</h3>
          <p class="ev-cal">${cal ? cal.name : e.cal}${soon ? html` · <b>${soon}</b>` : nothing}</p>
        </div>
        <button class="icon-btn" @click=${() => this._closeSheet()} aria-label="Fechar">${icon("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${icon("clock")}<span>${when}</span></div>
        ${e.rrule ? html`<div class="fact">${icon("repeat")}<span>${rruleLabel(e.rrule)}</span></div>` : nothing}
        ${e.location ? html`<a class="fact link" href=${mapsUrl(e.location)} target="_blank" rel="noopener noreferrer">${icon("map-pin")}<span>${e.location}</span>${icon("external-link", "sm")}</a>` : nothing}
        ${e.kind ? this._renderKindFacts(e) : nothing}
        ${e.description && !e.kind
          ? html`<div class="fact notes">${icon("file-text")}<span>${splitLinks(e.description).map((p) => (p.url ? html`<a href=${p.url} target="_blank" rel="noopener noreferrer">${p.url}</a>` : p.text))}</span></div>`
          : nothing}
      </div>
      ${cal && !cal.canUpdate && !cal.canDelete ? html`<p class="sheet-note">${icon("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>` : nothing}
      <div class="sheet-actions">
        ${cal && cal.canDelete && e.uid ? html`<button class="btn danger" @click=${() => this._askDelete(e)} aria-label="Apagar">${icon("trash")}</button>` : nothing}
        ${this._writable().length ? html`<button class="btn outline" @click=${() => this._openForm({ ev: e, copy: true })}>${icon("copy")}Duplicar</button>` : nothing}
        ${cal && cal.canUpdate && e.uid ? html`<button class="btn primary" @click=${() => this._openForm({ ev: e })}>${icon("pencil")}Editar</button>` : nothing}
      </div>
    `;
  }

  _renderFormSheet() {
    const f = this._form;
    if (f.kind) return this._renderKindForm();
    const writable = this._writable();
    const targets = f.mode === "edit" ? (f.rid ? writable.filter((c) => c.id === f.cal) : writable.filter((c) => c.id === f.origCal || (this._cal(f.origCal) && this._cal(f.origCal).canDelete))) : writable;
    const now = new Date();
    const quick = [
      { label: "Hoje", d: startOfDay(now) },
      { label: "Amanhã", d: addDays(startOfDay(now), 1) },
    ];
    const isQuick = quick.some((q) => ymd(q.d) === f.date);
    const openPicker = (sel) => {
      const input = this.renderRoot.querySelector(sel);
      if (!input) return;
      try {
        input.showPicker();
      } catch (e) {
        input.focus();
        input.click();
      }
    };
    const setStart = (v) => {
      if (!v) return;
      const toMin = (t) => {
        const [h, m] = t.split(":").map(Number);
        return h * 60 + m;
      };
      const dur = Math.max(15, ((toMin(f.end) - toMin(f.start) + 1440) % 1440) || 60);
      const e = (toMin(v) + dur) % 1440;
      this._setForm({ start: v, end: `${String(Math.floor(e / 60)).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}` });
    };
    const setDuration = (min) => {
      const [h, m] = f.start.split(":").map(Number);
      const e = Math.min(24 * 60 - 1, h * 60 + m + min);
      this._setForm({ end: `${String(Math.floor(e / 60)).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`, endDate: "" });
    };
    const toMin = (t) => {
      const [h, m] = (t || "0:0").split(":").map(Number);
      return h * 60 + m;
    };
    const dur = (toMin(f.end) - toMin(f.start) + 1440) % 1440;
    const overnight = !f.allDay && !f.endDate && toMin(f.end) <= toMin(f.start);
    return html`
      ${this._sheetHead(f.mode === "add" ? "Novo" : "Editar evento")}
      ${f.mode === "add" ? this._renderModelChips("") : nothing}
      ${f.mode === "add" && this._aiOn() ? this._renderImportTiles() : nothing}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${f.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${(e) => this._setForm({ title: e.target.value })} @keydown=${(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), this._saveForm())}></textarea>
      </label>
      ${targets.length > 1
        ? html`<div class="field">
            <span class="flabel">${f.mode === "edit" ? "Calendário (mover)" : "Calendário"}</span>
            <div class="chip-row">${targets.map((c) => html`<button class="pick list ${f.cal === c.id ? "on" : ""}" style=${colorVars(c.color, this._dark)} @click=${() => this._setForm({ cal: c.id })}><span class="dot"></span><span>${clip(c.name, 24)}</span></button>`)}</div>
          </div>`
        : nothing}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${f.allDay} @change=${(e) => this._setForm({ allDay: e.target.checked })} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row">
          ${quick.map((q) => html`<button class="pick ${f.date === ymd(q.d) ? "on" : ""}" @click=${() => this._setForm({ date: ymd(q.d), endDate: f.endDate && f.endDate < ymd(q.d) ? "" : f.endDate })}>${q.label}</button>`)}
          <button class="pick ${!isQuick ? "on" : ""}" @click=${() => openPicker("#cr-date")}>
            ${icon("calendar")}<span>${!isQuick ? cap(dayLabel(fromYmd(f.date), now, { long: false })) : "Outra data"}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${f.date} @change=${(e) => e.target.value && this._setForm({ date: e.target.value, endDate: f.endDate && f.endDate < e.target.value ? "" : f.endDate })} />
          </button>
        </div>
        ${f.allDay
          ? html`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${f.endDate || f.date} min=${f.date} @change=${(e) => this._setForm({ endDate: e.target.value > f.date ? e.target.value : "" })} />
              ${f.endDate ? html`<span class="tl">${plural(dayDiff(fromYmd(f.endDate), fromYmd(f.date)) + 1, "dia", "dias")}</span>` : html`<span class="tl">um dia</span>`}
            </div>`
          : html`<div class="time-row">
                <input type="time" .value=${f.start} aria-label="Começa" @change=${(e) => setStart(e.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${f.end} aria-label="Termina" @change=${(e) => e.target.value && this._setForm({ end: e.target.value })} />
              </div>
              <div class="chip-row dur">
                ${[
                  [15, "15 min"],
                  [30, "30 min"],
                  [60, "1 h"],
                  [120, "2 h"],
                ].map(([m, label]) => html`<button class="pick ${dur === m && !f.endDate ? "on" : ""}" @click=${() => setDuration(m)}>${label}</button>`)}
              </div>
              ${overnight ? html`<div class="field-hint">${icon("info")}<span>Termina no dia seguinte.</span></div>` : nothing}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="seg rep-seg" role="radiogroup" aria-label="Repetir">${REPEATS.map(
          (r) => html`<button class=${f.repeat === r.id ? "on" : ""} role="radio" aria-checked=${f.repeat === r.id ? "true" : "false"} title=${r.label} @click=${() => this._setForm({ repeat: r.id })}>${r.short}</button>`,
        )}</div>
        ${f.rrule && freqOf(f.rrule) === f.repeat && rruleLabel(f.rrule) !== (REPEATS.find((r) => r.id === f.repeat) || {}).label ? html`<div class="field-hint">${icon("repeat")}<span>${rruleLabel(f.rrule)}</span></div>` : nothing}
        ${f.rid ? html`<div class="field-hint">${icon("info")}<span>Este evento se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>` : nothing}
      </div>
      ${this._app("event_details", false) === true || f.details
        ? html`<label class="field">
              <span class="flabel">Local</span>
              <input type="text" .value=${f.location} placeholder="Endereço, sala ou link" @input=${(e) => this._setForm({ location: e.target.value })} />
            </label>
            <label class="field">
              <span class="flabel">Notas</span>
              <textarea rows="3" .value=${f.notes} placeholder="Detalhes, o que levar…" @input=${(e) => this._setForm({ notes: e.target.value })}></textarea>
            </label>`
        : nothing}
      <div class="sheet-actions">
        <button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>
        <button class="btn primary" ?disabled=${f.saving || !(f.title || "").trim()} @click=${() => this._saveForm()}>${f.saving ? "Salvando…" : f.mode === "add" ? "Criar evento" : "Salvar"}</button>
      </div>
    `;
  }

  _renderScope() {
    const f = this._form;
    const edit = f.action === "edit";
    const opt = (k, title, sub, danger = false) => html`<button class="imp-opt ${danger ? "danger" : ""}" @click=${() => this._applyScope(k)}>
      <span class="imp-ic">${icon(k === "one" ? "calendar-check" : k === "future" ? "calendar-range" : "calendar-x")}</span>
      <span class="imp-tx"><b>${title}</b><small>${sub}</small></span>${icon("chevron-right")}
    </button>`;
    return html`
      ${this._sheetHead(edit ? "Mudar evento que se repete" : "Apagar evento que se repete")}
      <p class="sheet-note top">“${clip(f.title, 40)}” se repete. O que você quer ${edit ? "mudar" : "apagar"}?</p>
      <div class="imp-options">
        ${opt("one", "Só este evento", edit ? "Os outros continuam como estão" : "Os outros continuam na agenda")}
        ${opt("future", "Este e os próximos", edit ? "Os anteriores ficam como estavam" : "Os anteriores continuam na agenda")}
        ${edit ? nothing : opt("all", "Toda a série", "Apaga todas as repetições", true)}
      </div>
    `;
  }

  _renderConfirm() {
    const f = this._form;
    return html`
      <div class="sheet-head"><h3 class="display">${f.title}</h3></div>
      <p class="confirm-text">${f.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${() => this._closeSheet()}>Cancelar</button>
        <button class="btn ${f.danger ? "danger-fill" : "primary"}" @click=${() => f.run()}>${f.label}</button>
      </div>
    `;
  }

  _renderImportSheet() {
    const f = this._form;
    const aiOn = this._aiOn();
    const ai = aiOn ? this._ai || {} : {};
    const writable = this._writable();
    const target = this._cal(f.target);
    const toPick = () => {
      this._importToken = 0;
      this._setForm({ step: "pick", error: null, note: null });
    };
    const error = f.error ? html`<div class="imp-error">${icon("circle-alert")}<span>${f.error}</span></div>` : nothing;
    const thumbs = f.images && f.images.length ? html`<div class="thumbs">${f.images.map((img) => html`<img src=${img.url} alt="" />`)}</div>` : nothing;
    const aiHint = html`<div class="imp-error soft">${icon("sparkles")}<span>${ai.reason || "Para ler mensagens e fotos, o Home Assistant precisa de uma integração de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${() => this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;

    if (f.step === "text") {
      return html`
        ${this._sheetHead("Colar mensagem", toPick)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${f.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${(e) => this._setForm({ text: e.target.value, error: null })}></textarea>
        </label>
        ${error} ${!ai.ready ? aiHint : nothing}
        <div class="sheet-actions">
          <button class="btn outline" @click=${() => this._pasteClipboard()}>${icon("clipboard-paste")}Colar</button>
          <button class="btn primary" ?disabled=${!(f.text || "").trim() || !ai.ready} @click=${() => this._readText()}>${icon("sparkles")}Encontrar eventos</button>
        </div>
        <p class="sheet-note">${ai.ready ? `${ai.using.name} encontra datas, horários e locais, mesmo em mensagens corridas. Você revisa antes de adicionar.` : ""}</p>
      `;
    }
    if (f.step === "loading") {
      return html`
        ${this._sheetHead("Lendo…")}
        ${thumbs}
        <div class="imp-loading"><span class="spin">${icon("loader-circle")}</span><span>${f.loadingText || "Lendo…"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${() => ((this._importToken = 0), this._setForm({ step: f.prevStep || "pick" }))}>Cancelar</button></div>
      `;
    }
    if (f.step === "review") {
      const chosen = f.items.filter((i) => i.on && (i.title || "").trim()).length;
      const from = f.provider === "ics" ? `do arquivo ${clip(f.fileName || ".ics", 28)}` : f.provider ? `lidos por ${f.provider}` : "";
      const now = new Date();
      return html`
        ${this._sheetHead("Revisar eventos", toPick)}
        ${thumbs}
        <p class="sheet-note top">${plural(f.items.length, "evento encontrado", "eventos encontrados")}${from ? ` · ${from}` : ""}. Confira datas e horários.</p>
        ${f.note ? html`<div class="imp-error soft">${icon("sparkles")}<span>${f.note}</span></div>` : nothing}
        <div class="rv-list">
          ${f.items.map(
            (it, i) => html`<div class="rv-card ${it.on ? "" : "off"}">
              <div class="rv-top">
                <button class="check ${it.on ? "on" : ""}" role="checkbox" aria-checked=${it.on ? "true" : "false"} aria-label="Incluir" @click=${() => this._setItem(i, { on: !it.on })}>${icon("check")}</button>
                <input class="rv-title" type="text" .value=${it.title} aria-label="Título" @input=${(e) => this._setItem(i, { title: e.target.value })} />
                <button class="icon-btn mini" aria-label="Remover" @click=${() => this._setForm({ items: f.items.filter((_, j) => j !== i) })}>${icon("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${it.date} aria-label="Data" @change=${(e) => e.target.value && this._setItem(i, { date: e.target.value })} />
                ${it.start
                  ? html`<span class="rv-times"><input type="time" .value=${it.start} aria-label="Começa" @change=${(e) => this._setItem(i, { start: e.target.value })} /><span>–</span><input type="time" .value=${it.end} aria-label="Termina" @change=${(e) => this._setItem(i, { end: e.target.value })} /></span>`
                  : html`<button class="pick ghost" @click=${() => this._setItem(i, { start: "09:00", end: "10:00" })}>${icon("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${cap(dayLabel(fromYmd(it.date), now))}${it.end_date ? ` até ${dateShort(fromYmd(it.end_date), now)}` : ""}${it.location ? ` · ${it.location}` : ""}${it.repeat || it.rrule ? ` · ${it.rrule ? rruleLabel(it.rrule) : REPEATS.find((r) => r.id === it.repeat.toUpperCase()).label}` : ""}</p>
            </div>`,
          )}
        </div>
        ${ai.images && f.provider !== "ics"
          ? html`<div class="more-row">
              <button class="pick" @click=${() => this._pickFiles("photos")}>${icon("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${() => this._openCamera()}>${icon("scan-text")}<span>Digitalizar mais</span></button>
            </div>`
          : nothing}
        ${writable.length > 1
          ? html`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${writable.map((c) => html`<button class="pick list ${f.target === c.id ? "on" : ""}" style=${colorVars(c.color, this._dark)} @click=${() => this._setForm({ target: c.id })}><span class="dot"></span><span>${clip(c.name, 24)}</span></button>`)}</div>
            </div>`
          : nothing}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!chosen || f.adding} @click=${() => this._importAdd()}>
            ${f.adding ? "Adicionando…" : chosen ? `Adicionar ${plural(chosen, "evento", "eventos")}${target && writable.length <= 1 ? ` em ${clip(target.name, 16)}` : ""}` : "Nenhum evento marcado"}
          </button>
        </div>
      `;
    }
    return html`
      ${this._sheetHead("Trazer eventos")}
      <p class="sheet-note top">${aiOn ? "Crie eventos a partir de uma mensagem, de uma foto (convite, cartaz, cartão de consulta) ou de um arquivo .ics. Você revisa antes de adicionar." : "Crie eventos a partir de um arquivo .ics (convite de e-mail ou outra agenda). Você revisa antes de adicionar."}</p>
      <div class="imp-options">
        ${aiOn ? html`<button class="imp-opt" ?disabled=${!ai.ready} @click=${() => (this._setForm({ step: "text", error: null }), this._focusSheetText())}>
          <span class="imp-ic">${icon("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${icon("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!ai.images} @click=${() => this._pickFiles("photos")}>
          <span class="imp-ic">${icon("images")}</span><span class="imp-tx"><b>Escolher fotos</b><small>${this._isHaAndroid() ? "Prints e fotos da galeria, uma por vez" : "Prints e fotos da galeria (até 6)"}</small></span>${icon("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!ai.images} @click=${() => this._openCamera()}>
          <span class="imp-ic">${icon("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>Fotografe um convite ou cartão de consulta</small></span>${icon("chevron-right")}
        </button>` : nothing}
        <button class="imp-opt" @click=${() => this._pickFiles("ics")}>
          <span class="imp-ic">${icon("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${icon("chevron-right")}
        </button>
      </div>
      ${aiOn && !ai.images ? aiHint : nothing}
      ${error}
    `;
  }

  _renderCalSheet() {
    const f = this._form;
    const c = this._cal(f.id);
    if (!c) return this._sheetHead("Calendário");
    const color = colorById(f.color) || c.color;
    return html`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${colorVars(color, this._dark)}>
        <span class="tile">${icon(c.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(f.name || "").trim() || c.origName}</span><span class="lc-meta">${c.group}${c.device ? ` · ${c.device}` : ""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${f.name} placeholder=${c.origName} @input=${(e) => this._setForm({ name: e.target.value })} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${PALETTE.map((p) => html`<button class="sw ${color.id === p.id ? "on" : ""}" style="--c:${p.fill}" aria-label=${p.label} @click=${() => this._setForm({ color: p.id })}>${color.id === p.id ? icon("check") : nothing}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${c.canCreate ? (c.canUpdate ? "Cria e edita eventos" : "Cria eventos") : "Só leitura"} · <code>${c.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!f.hidden} @change=${(e) => this._setForm({ hidden: !e.target.checked })} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin() ? html`<button class="menu-row" @click=${() => this._openInHA(`/calendar?entity_id=${c.id}`)}>${icon("external-link")}Abrir na tela padrão do HA</button>` : nothing}
      <div class="sheet-actions">
        <button class="btn outline" @click=${() => this._setForm({ name: "", color: null, hidden: false })}>${icon("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${() => this._saveCalSheet()}>Salvar</button>
      </div>
    `;
  }

  _renderExportSheet() {
    const f = this._form;
    const cals = this._cals();
    const [a, b] = this._exportRange(f.range);
    const url = f.cals.length ? this.api.exportUrl({ calendars: f.cals, start: isoLocal(a), end: isoLocal(b) }) : null;
    const toggle = (id) => this._setForm({ cals: f.cals.includes(id) ? f.cals.filter((x) => x !== id) : [...f.cals, id] });
    return html`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${cals.map((c) => html`<button class="pick list ${f.cals.includes(c.id) ? "on" : ""}" style=${colorVars(c.color, this._dark)} @click=${() => toggle(c.id)}><span class="dot"></span><span>${clip(c.name, 24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[
            ["3m", "Próximos 3 meses"],
            ["12m", "Próximos 12 meses"],
            ["year", "Último ano e próximo"],
          ].map(([k, label]) => html`<button class="pick ${f.range === k ? "on" : ""}" @click=${() => this._setForm({ range: k })}>${label}</button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${url && this.api.exportUrl({ calendars: ["calendar.x"], start: "a", end: "b" })
          ? html`<a class="btn primary" href=${url} download @click=${() => setTimeout(() => this._closeSheet(), 300)}>${icon("download")}Baixar .ics</a>`
          : html`<button class="btn primary" ?disabled=${!url} @click=${() => this._showToast("Na prévia os arquivos não são baixados.")}>${icon("download")}Baixar .ics</button>`}
      </div>
    `;
  }

  _renderOutlookSheet() {
    const admin = this._isAdmin();
    return html`
      ${this._sheetHead("Outlook no Home Assistant")}
      <p class="sheet-note top">O CronologIA mostra o Outlook quando ele está no Home Assistant. Há dois caminhos:</p>
      <div class="help-card">
        <b>${icon("briefcase")}MS365 Calendar (HACS)</b>
        <p>Cria calendários normais no Home Assistant e, com a opção de editar ligada, deixa <b>criar, mudar e apagar</b> eventos do Outlook por aqui. Precisa de um registro de app no Microsoft Entra (Azure), que é gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra.</p>
        <a class="text-btn" href="https://rogerselwyn.github.io/MS365-Calendar/" target="_blank" rel="noopener noreferrer">Ver o passo a passo ${icon("external-link", "sm")}</a>
      </div>
      <div class="help-card">
        <b>${icon("link")}Link .ics publicado</b>
        <p>No Outlook na web: Configurações › Calendário › Calendários compartilhados › Publicar um calendário, e copie o link ICS. No Home Assistant, adicione um <b>Calendário remoto</b> com esse link. É só leitura e atualiza uma vez por dia.</p>
        ${admin ? html`<button class="text-btn" @click=${() => this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${icon("chevron-right", "sm")}</button>` : nothing}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `;
  }

  _renderNoCalSheet() {
    return html`
      ${this._sheetHead("Nenhum calendário aceita eventos")}
      <p class="sheet-note top">Os calendários do Home Assistant são só de leitura. Para criar eventos por aqui, adicione um calendário que aceite edição, como o Calendário local, o Google Agenda ou o Outlook pelo MS365.</p>
      ${this._renderAddCalendars()}
    `;
  }

  _renderCamera() {
    const c = this._cam;
    if (!c) return nothing;
    const n = c.shots.length;
    return html`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${c.flash ? html`<div class="cam-flash" .key=${c.flash}></div>` : nothing}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${() => this._closeCamera()}>${icon("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${c.torchOk ? html`<button class="cam-btn ${c.torch ? "on" : ""}" aria-label="Lanterna" @click=${() => this._toggleTorch()}>${icon("zap")}</button>` : html`<span class="cam-btn ghost"></span>`}
        </div>
        ${c.status === "error"
          ? html`<div class="cam-msg">${icon("camera")}<p>${c.error}</p><button class="btn primary" @click=${() => this._cameraFallback()}>${icon("images")}Escolher foto</button></div>`
          : html`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${c.status === "starting" ? "Abrindo a câmera…" : n ? `${plural(n, "foto", "fotos")}. Fotografe outra ou toque em Pronto.` : "Enquadre o convite ou o cartão e toque no botão"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${c.shots.slice(-3).map((s) => html`<img src=${s.url} alt="" />`)}${n > 3 ? html`<span>+${n - 3}</span>` : nothing}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${c.status !== "live" || n >= 6} @click=${() => this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!n} @click=${() => this._useShots()}>Pronto${n ? ` (${n})` : ""}</button>
        </div>
      </div>
    `;
  }

  _renderToast() {
    if (!this._toast) return nothing;
    const t = this._toast;
    return html`<div class="toast ${this._sheet ? "has-sheet" : ""}" role="status">
      <span>${t.text}</span>
      ${t.action
        ? html`<button @click=${() => {
            this._toast = null;
            t.action.run();
          }}>${t.action.label}</button>`
        : nothing}
    </div>`;
  }
}

if (!customElements.get("cronologia-app")) customElements.define("cronologia-app", CronologiaApp);

export { CronologiaApp };
