// Same typography as InventarIA: Barlow for text, Barlow Condensed for titles,
// numbers and times; Caveat, the handwriting of the MemorIA, for its sheet in Agora (1.62.0).
// Font files ship inside the app (work offline).
// @font-face does not work inside shadow roots, so it goes in document.head.
import barlow400 from "../fonts/barlow-400.woff2";
import barlow500 from "../fonts/barlow-500.woff2";
import barlow600 from "../fonts/barlow-600.woff2";
import cond500 from "../fonts/barlow-condensed-500.woff2";
import cond600 from "../fonts/barlow-condensed-600.woff2";
import cond700 from "../fonts/barlow-condensed-700.woff2";
import caveat from "../fonts/caveat-var.woff2";

const FALLBACK = `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
export const FONT_BODY = `"CR Barlow", ${FALLBACK}`;
export const FONT_DISPLAY = `"CR Barlow Condensed", ${FALLBACK}`;
export const FONT_HAND = `"CR Caveat", "Segoe Print", "Bradley Hand", cursive`;

export function ensureFonts() {
  if (document.getElementById("cronologia-fonts")) return;
  const face = (family, src, weight) =>
    `@font-face{font-family:"${family}";src:url(${JSON.stringify(src)}) format("woff2");font-weight:${weight};font-style:normal;font-display:swap}`;
  const style = document.createElement("style");
  style.id = "cronologia-fonts";
  style.textContent = [
    face("CR Barlow", barlow400, 400),
    face("CR Barlow", barlow500, 500),
    face("CR Barlow", barlow600, "600 900"),
    face("CR Barlow Condensed", cond500, 500),
    face("CR Barlow Condensed", cond600, 600),
    face("CR Barlow Condensed", cond700, "700 900"),
    face("CR Caveat", caveat, "400 700"),
  ].join("\n");
  document.head.appendChild(style);
}
