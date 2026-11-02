# CronologIA 1.27.0: Mais › Placar › Deméritos lines up inside its card; no event how-to in the demerit window;
# the points of Mais › Rotinas in the gold of everywhere else.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crpf-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)); time.sleep(1.3)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        # a scoreboard with participants and a demerit
        await pg.evaluate("() => document.querySelector('cronologia-app')._scorePrefs({ enabled: true, participants: ['Andressa', 'Diego'] })")
        await pg.wait_for_timeout(800)
        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Placar").click(); await pg.wait_for_timeout(600)
        panel = a.locator("#demeritos-ajustes")
        if not await panel.locator(".demerit").count():
            await panel.locator(".dm-ideas .pick").first.click(); await pg.wait_for_timeout(800)
        pb = await panel.bounding_box()
        ib = await panel.locator(".mais-ic").bounding_box()
        lb = await panel.locator(".panel-lead").bounding_box()
        rb = await panel.locator(".demerit .dm-tx").first.bounding_box()
        print("panel x", pb["x"], "icon", ib["x"], "lead", lb["x"], "row text", rb["x"])
        lead_x = await panel.locator(".panel-lead").evaluate("e => { const r = document.createRange(); r.selectNodeContents(e); return r.getClientRects()[0].left; }")
        print("lead text x", lead_x)
        check(ib["x"] - pb["x"] >= 12 and lead_x - pb["x"] >= 12, "the heading and the text are inside the card, not on its border")
        check(abs(ib["x"] - rb["x"]) <= 2, "lined up with the rows")
        await panel.screenshot(path=f"{SP}/shots/crpf-demeritos.png")
        await panel.locator(".demerit.dm-edit").first.click(); await pg.wait_for_timeout(500)
        check("cronologia_demerito" not in await sheet.inner_text(), "Editar demérito: no event how-to")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(400)
        # Mais › Rotinas: the points in gold
        await a.locator(".more-tabs button", has_text="Rotinas").click(); await pg.wait_for_timeout(600)
        pts = a.locator("#cat-rotina .cat-row .pts-inline")
        n = await pts.count()
        agora_col = None
        check(n >= 1, f"Rotinas: the points as in the other places ({n})")
        col = await pts.first.evaluate("e => getComputedStyle(e).color") if n else ""
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(700)
        other = a.locator(".pts-inline").first
        agora_col = await other.evaluate("e => getComputedStyle(e).color") if await other.count() else col
        check(col == agora_col, f"same color as on Agora ({col} / {agora_col})")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
