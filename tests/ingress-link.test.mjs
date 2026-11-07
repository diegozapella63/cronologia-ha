// The link of the phone alerts: it opens the app in Home Assistant. Since HA 2026.2 an app's panel is /app/<slug>
// (the old /hassio/ingress/<slug> falls on the default dashboard); the slug comes from the hostname (a1b2c3d4-cronologia).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ingressUrl } from "../cronologia/rootfs/app/lib/home.js";

describe("ingressUrl: the app's address in the alerts", () => {
  it("in Home Assistant: /app/<slug>", () => {
    assert.equal(ingressUrl("a1b2c3d4-cronologia"), "/app/a1b2c3d4_cronologia");
    assert.equal(ingressUrl("local-cronologia"), "/app/local_cronologia");
  });
  it("outside Home Assistant (dev, tests): no link", () => {
    for (const h of ["meu-computador", "cronologia", "a1b2-resolvia", "A1-cronologia"]) assert.equal(ingressUrl(h), null, h);
  });
});
