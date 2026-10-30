import { html } from "../vendor/lit-all.min.js";

// O ícone do app ao lado do nome (o mesmo desenho do ícone do add-on: a folhinha do calendário),
// na cor escolhida em Mais › Aparência. As argolas ficam na cor do texto, para aparecer no tema escuro.
export const appIcon = () => html`<svg class="app-ic" viewBox="0 0 32 32" aria-hidden="true">
  <path d="M8 6h16a5 5 0 0 1 5 5v12.5L22.5 30H8a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5z" fill="var(--rv-accent)" />
  <path d="M8 6h16a5 5 0 0 1 5 5v1.6H3V11a5 5 0 0 1 5-5z" fill="#000" fill-opacity=".16" />
  <path d="M22.5 30v-4.6a1.9 1.9 0 0 1 1.9-1.9H29z" fill="#000" fill-opacity=".28" />
  <g fill="#000" fill-opacity=".17">
    <rect x="6.6" y="15.2" width="3.6" height="3.2" rx=".9" /><rect x="11.6" y="15.2" width="3.6" height="3.2" rx=".9" /><rect x="16.6" y="15.2" width="3.6" height="3.2" rx=".9" /><rect x="21.6" y="15.2" width="3.6" height="3.2" rx=".9" />
    <rect x="6.6" y="19.8" width="3.6" height="3.2" rx=".9" /><rect x="11.6" y="19.8" width="3.6" height="3.2" rx=".9" /><rect x="21.6" y="19.8" width="3.6" height="3.2" rx=".9" />
    <rect x="6.6" y="24.4" width="3.6" height="3.2" rx=".9" /><rect x="11.6" y="24.4" width="3.6" height="3.2" rx=".9" /><rect x="16.6" y="24.4" width="3.6" height="3.2" rx=".9" />
  </g>
  <rect x="16.6" y="19.8" width="3.6" height="3.2" rx=".9" fill="var(--rv-on-accent, #10262b)" />
  <path d="M11 2.8v6.4M21 2.8v6.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
</svg>`;
