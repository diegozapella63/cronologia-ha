// Entry point of the UI served by the CronologIA app.
import "./selectsheet.js"; // first: its Back comes before the app's
import "./whenpick.js"; // the time and date windows: their Back too
import "./cronologia-app.js";
import { Api, appEnv } from "./api.js";

const root = document.getElementById("app");
const el = document.createElement("cronologia-app");
el.env = appEnv();
el.api = new Api();
root.replaceChildren(el);
