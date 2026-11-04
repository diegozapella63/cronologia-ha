// Where each screen lives (the path is kept in history.state, not in the address bar).
// Mais is a menu, like the InventarIA: Calendários, Rotinas, Avisos and Placar, each its own
// screen, and Configurações last, with its tabs (Integrações, Dados, Aparência, Opções).

/** The rows of Mais, in order: [key, path, title, icon, the line under the title]. */
export const MENU = [
  ["calendarios", "/mais/calendarios", "Calendários", "layers", "Nome, cor e quais aparecem na agenda."],
  ["rotinas", "/mais/rotinas", "Rotinas", "repeat", "Rotinas, remédios, manutenções e contas cadastrados."],
  ["avisos", "/mais/avisos", "Avisos", "bell-ring", "Avisos de remédio no celular, pessoas e pets."],
  ["placar", "/mais/placar", "Placar", "trophy", "Quem participa, quando fecha e deméritos."],
  ["config", "/config", "Configurações", "sliders-horizontal", "Integrações, dados e backup, aparência e opções."],
];

/** The tabs of Mais › Configurações: [key, label, icon]. The first one is /config. */
export const CONFIG_TABS = [
  ["integracoes", "Integrações", "blocks"],
  ["dados", "Dados", "archive"],
  ["aparencia", "Aparência", "palette"],
  ["opcoes", "Opções", "toggle-right"],
];

const SCREENS = MENU.filter(([k]) => k !== "config").map(([k]) => k);
const TABS = CONFIG_TABS.map(([k]) => k);

/**
 * The screen of a path: {name: "now" | "calendar" | "rewards" | "more", tab?, config?}.
 * In Mais, tab is "menu", a screen of the menu (calendarios, rotinas, avisos, placar) or, with
 * config: true, a tab of Configurações. Old addresses still work: /mais/integracoes (and the other
 * tabs that moved to Configurações) and /agendas (the Agendas page, later Mais › Calendários).
 */
export function viewOf(path) {
  const p = (path || "").replace(/\/+$/, "");
  if (p === "/calendario") return { name: "calendar" };
  if (p === "/recompensas") return { name: "rewards" };
  if (p === "/agendas") return { name: "more", tab: "calendarios" };
  if (p === "/config") return { name: "more", tab: TABS[0], config: true };
  const m = /^\/(mais|config)\/([a-z]+)$/.exec(p);
  if (m && TABS.includes(m[2])) return { name: "more", tab: m[2], config: true };
  if (m && m[1] === "config") return { name: "more", tab: TABS[0], config: true };
  if (m && SCREENS.includes(m[2])) return { name: "more", tab: m[2] };
  if (p === "/mais" || (m && m[1] === "mais")) return { name: "more", tab: "menu" };
  return { name: "now" };
}

/** The path of a screen (the inverse of viewOf). */
export function pathOf(v) {
  if (v.name === "calendar") return "/calendario";
  if (v.name === "rewards") return "/recompensas";
  if (v.name !== "more") return "";
  if (v.config) return v.tab === TABS[0] ? "/config" : `/config/${v.tab}`;
  return v.tab === "menu" ? "/mais" : `/mais/${v.tab}`;
}

/** The address as it is now: an old one becomes the new one (/mais/dados → /config/dados). */
export const canonPath = (path) => pathOf(viewOf(path));

/** A screen under Mais other than the menu itself (its top has "‹ Mais"). */
export const underMore = (v) => v.name === "more" && v.tab !== "menu";

/** The title of a screen of Mais. */
export function moreTitle(v) {
  if (v.config) return "Configurações";
  const row = MENU.find(([k]) => k === v.tab);
  return row ? row[2] : "Mais";
}

/** Where the person is in Mais, in words (for the AI): "Mais › Configurações › Dados". */
export function moreName(v) {
  if (v.tab === "menu") return "Mais (o menu)";
  if (v.config) return `Mais › Configurações › ${CONFIG_TABS.find(([k]) => k === v.tab)[1]}`;
  return `Mais › ${moreTitle(v)}`;
}
