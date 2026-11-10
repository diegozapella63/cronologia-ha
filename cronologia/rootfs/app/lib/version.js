// The version of the app, written in one place: cronologia/config.yaml (the Dockerfile copies it next to server.js,
// as /app/config.yaml). The screen gets it from the server (bootstrap); the preview, from the build (build.mjs).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// in the image: /app/config.yaml; in the repository: cronologia/config.yaml
export const CONFIG_PATHS = [path.join(HERE, "..", "config.yaml"), path.join(HERE, "..", "..", "..", "config.yaml")];

/** The `version:` of the first config.yaml found ("0.0.0" when there is none: never stops the app). */
export function appVersion(paths = CONFIG_PATHS) {
  for (const p of paths) {
    try {
      const m = /^version:\s*["']?([0-9][^"'\s]*)["']?\s*$/m.exec(fs.readFileSync(p, "utf8"));
      if (m) return m[1];
    } catch (e) {
      /* the next place */
    }
  }
  return "0.0.0";
}

export const VERSION = appVersion();
