// Entry point of the UI served by the CronologIA app.
import "./selectsheet.js"; // first: its Back comes before the app's
import "./hatema.js"; // the background and the cards of the Home Assistant theme (the same file in all the apps)
import { tecladoCalmo } from "./teclado.js"; // the keyboard of the phone does not leave the pages around the app scrolled
import "./textareas.js"; // the text fields keep the size the person gave them (the same file in every app)
import "./whenpick.js"; // the time and date windows: their Back too
import "./cronologia-app.js";
import { Api, appEnv } from "./api.js";

tecladoCalmo();

const root = document.getElementById("app");
const el = document.createElement("cronologia-app");
el.env = appEnv();
el.api = new Api();
root.replaceChildren(el);
