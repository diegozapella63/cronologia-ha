// The rooms and the equipments (InventarIA, by the ResolvIA) of a maintenance or a task as small tags under
// its line, like the ResolvIA: one per room, the first two equipments (names cut short) and "+N".
import { html, nothing, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";
import { clip } from "./util.js";

const icon = (name) =>
  html`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS["package"])}</svg>`;

/** rooms and equips: names. Nothing when there are none. */
export function placeTags(rooms = [], equips = []) {
  const rs = (rooms || []).filter(Boolean);
  const es = (equips || []).filter(Boolean);
  if (!rs.length && !es.length) return nothing;
  return html`<span class="chips place-tags">${rs.map((r) => html`<span class="tag room">${icon("door-open")}${clip(r, 22)}</span>`)}${es
      .slice(0, 2)
      .map((e) => html`<span class="tag room" title=${e}>${icon("package")}${clip(e, 26)}</span>`)}${es.length > 2 ? html`<span class="tag room">+${es.length - 2}</span>` : nothing}</span>`;
}
