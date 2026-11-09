// The rooms and the equipments (InventarIA, by the ResolvIA) of a maintenance or a task as small tags under
// its line, like the ResolvIA: one room or one equipment, its name; more than one, a single tag, "Vários cômodos"
// or "Vários equipamentos" (1.60.4: which ones, opening the item); several equipments, no rooms. All the rooms of
// the house: "Todos os cômodos". The tags are a grid of the same width (1.60.3): side by side and aligned, a long
// name ends in "…" (the names in the title).
import { html, nothing, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";

const icon = (name) =>
  html`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS["package"])}</svg>`;

export const ALL_ROOMS = "Todos os cômodos";
export const MANY_ROOMS = "Vários cômodos";
export const MANY_EQUIPS = "Vários equipamentos";

/** All the rooms of the house (2 or more) are in rooms (names)? all: the names of the rooms of the house. */
export function isAllRooms(rooms = [], all = []) {
  const rs = new Set((rooms || []).filter(Boolean));
  return (all || []).length > 1 && all.every((n) => rs.has(n));
}

/** The rooms as they are shown: "Todos os cômodos" when they are all the rooms of the house. */
export const roomsShown = (rooms = [], all = []) => (isAllRooms(rooms, all) ? [ALL_ROOMS] : (rooms || []).filter(Boolean));

/** rooms and equips: names; all: the rooms of the house (all of them: one tag). Nothing when there are none. */
export function placeTags(rooms = [], equips = [], all = []) {
  const rs = (rooms || []).filter(Boolean);
  const es = (equips || []).filter(Boolean);
  if (!rs.length && !es.length) return nothing;
  const tag = (ic, name, title = name) => html`<span class="tag room" title=${title}>${icon(ic)}<span class="tt">${name}</span></span>`;
  if (es.length > 1) return html`<span class="place-tags">${tag("package", MANY_EQUIPS, es.join(", "))}</span>`;
  const room = isAllRooms(rs, all) ? tag("house", ALL_ROOMS, rs.join(", ")) : rs.length > 1 ? tag("door-open", MANY_ROOMS, rs.join(", ")) : rs.length ? tag("door-open", rs[0]) : nothing;
  return html`<span class="place-tags">${room}${es.length ? tag("package", es[0]) : nothing}</span>`;
}
