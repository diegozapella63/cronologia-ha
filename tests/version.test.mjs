// The version is written in one place (1.65.0): cronologia/config.yaml. The server reads it (lib/version.js, from
// /app/config.yaml in the image, copied by the Dockerfile), the screen gets it from the server and the preview from
// the build. Nothing else may have its own copy.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tmpDir } from "./helpers.mjs";
import { VERSION, appVersion, CONFIG_PATHS } from "../cronologia/rootfs/app/lib/version.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const CONFIG = /^version:\s*"([^"]+)"/m.exec(read("cronologia/config.yaml"))[1];

describe("the version, in one place", () => {
  it("the server reads config.yaml", () => {
    assert.match(CONFIG, /^\d+\.\d+\.\d+$/);
    assert.equal(VERSION, CONFIG);
  });
  it("in the image it is /app/config.yaml, next to server.js (the Dockerfile copies it there)", () => {
    assert.equal(CONFIG_PATHS[0], path.join(ROOT, "cronologia/rootfs/app/config.yaml"));
    assert.match(read("cronologia/Dockerfile"), /^COPY config\.yaml \/app\/config\.yaml$/m);
  });
  it("the first config.yaml found wins; none (or no version in it): 0.0.0, the app still starts", () => {
    const dir = tmpDir("cronologia-version-");
    const a = path.join(dir, "a.yaml");
    const b = path.join(dir, "b.yaml");
    fs.writeFileSync(a, "name: X\nversion: '9.8.7'\n");
    fs.writeFileSync(b, 'version: "1.0.0"\n');
    assert.equal(appVersion([path.join(dir, "nada.yaml"), a, b]), "9.8.7");
    fs.writeFileSync(a, "name: X\n");
    assert.equal(appVersion([a]), "0.0.0");
    assert.equal(appVersion([path.join(dir, "nada.yaml")]), "0.0.0");
    fs.rmSync(dir, { recursive: true, force: true });
  });
  it("no other copy: not in server.js nor in the preview's API; the built preview has the one of config.yaml", () => {
    assert.doesNotMatch(read("cronologia/rootfs/app/server.js"), /const VERSION = "/);
    assert.doesNotMatch(read("frontend/preview/mock-api.js"), /version: "\d/);
    assert.ok(read("preview/cronologia-preview.html").includes(`version:"${CONFIG}"`), "build again after changing the version (cd frontend && npm run build)");
  });
});
