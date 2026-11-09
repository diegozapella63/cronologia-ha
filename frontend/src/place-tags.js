// The rooms and the equipments (InventarIA, by the ResolvIA) of a maintenance or a task as small tags under
// its line, like the ResolvIA: one equipment with its room; several equipments, only the first one with "+N"
// in the same tag, no rooms (not a wall of tags). All the rooms of the house: one tag, "Todos os cômodos".
// The tags are a grid of the same width (1.60.3): side by side and aligned, a long name ends in "…" (the whole
// name in the title).
import { html, nothing, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";

const icon = (name) =>
  html`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS["package"])}</svg>`;

export const ALL_ROOMS = "Todos os cômodos";

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
  const tag = (ic, name, title = name, more = 0) =>
    html`<span class="tag room" title=${title}>${icon(ic)}<span class="tt">${name}</span>${more ? html` <b class="more">+${more}</b>` : nothing}</span>`;
  if (es.length > 1) return html`<span class="place-tags">${tag("package", es[0], es.join(", "), es.length - 1)}</span>`;
  if (isAllRooms(rs, all)) return html`<span class="place-tags">${tag("house", ALL_ROOMS, rs.join(", "))}${es.length ? tag("package", es[0]) : nothing}</span>`;
  return html`<span class="place-tags">${rs.map((r) => tag("door-open", r))}${es.length ? tag("package", es[0]) : nothing}</span>`;
}
