// Inativos no fim, recolhidos (a regra de todos os apps da família): o que está desligado, oculto ou pausado de
// propósito sai do meio da lista e vai para uma seção no fim dela, fechada até tocar, com o nome e quantos são
// ("Ocultos (2)"). Fechada de novo a cada vez que o app abre; o mesmo jeito do "Tomados (n)" da Agora.
import { html, nothing, unsafeSVG } from "../vendor/lit-all.min.js";
import { ICONS } from "./icons.js";

const icon = (name) =>
  html`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unsafeSVG(ICONS[name] || ICONS.calendar)}</svg>`;

/** The section of the n off ones at the end of a list (host: the app, for its open sections); rows() draws them. */
export function offFold(host, key, label, n, rows) {
  if (!n) return nothing;
  const open = !!(host._folds && host._folds[key]);
  const toggle = () => {
    host._folds = { ...(host._folds || {}), [key]: !open };
    host.requestUpdate();
  };
  return html`<button class="add-line done-fold off-fold" data-fold=${key} aria-expanded=${open ? "true" : "false"} @click=${toggle}>${icon(open ? "chevron-down" : "chevron-right")}<span>${label} (${n})</span></button>
    ${open ? rows() : nothing}`;
}
