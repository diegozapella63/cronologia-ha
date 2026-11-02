# CronologIA 1.27.0: a swipe to the side changes the tab (Agora, Calendário, Recompensas, Mais); the app icon by the name.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, sys
sys.path.insert(0, _os.path.dirname(_os.path.abspath(__file__)))
from swipe_lib import swipe
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crsw-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)); time.sleep(1.3)
H = "cronologia-app"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", has_touch=True, is_mobile=True)
        pg = await ctx.new_page()
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1800)
        a = pg.locator(H)
        view = lambda: pg.evaluate("() => document.querySelector('cronologia-app')._view().name")
        # the icon by the name
        ic = a.locator(".brand-head .eyebrow .brand .app-ic")
        check(await ic.count() == 1 and await ic.is_visible(), "the app icon by the name")
        body = await ic.locator("path").first.evaluate("e => getComputedStyle(e).fill")
        acc = await a.locator(".tab.fab .pill, .tab.fab").first.evaluate("e => getComputedStyle(e).backgroundColor")
        print("icon", body, "accent", acc)
        check(body != "rgb(0, 0, 0)" and body != "none", f"in the color of the app ({body})")
        await a.locator(".brand-head").first.screenshot(path=f"{SP}/shots/crsw-icon.png")
        # Agora -> Calendário -> Recompensas -> Mais
        check(await view() == "now", "starts on Agora")
        await swipe(pg, H, "main .page", 300, 420, 110, 430)
        check(await view() == "calendar", "finger to the left: Calendário")
        title0 = await a.locator(".page-title").first.inner_text()
        await swipe(pg, H, ".cal-top", 300, 120, 110, 125)
        check(await view() == "rewards", "again (outside the month): Recompensas")
        await swipe(pg, H, "main .page", 300, 420, 110, 430)
        check(await view() == "more", "again: Mais")
        await swipe(pg, H, "main .page", 300, 520, 110, 520)
        check(await view() == "more", "Mais is the last one: stays")
        # the tabs of Mais slide by themselves: not a tab change
        await swipe(pg, H, ".more-tabs", 110, 200, 300, 200)
        check(await view() == "more", "on the row of the Mais tabs: no change")
        await swipe(pg, H, "main .page", 110, 520, 300, 520)
        check(await view() == "rewards", "finger to the right: back to Recompensas")
        await swipe(pg, H, "main .page", 110, 420, 300, 420)
        check(await view() == "calendar", "and to Calendário")
        # in the month grid the swipe still changes the month
        await a.locator(".seg button", has_text="Mês").click(); await pg.wait_for_timeout(500)
        t1 = await a.locator(".page-title").first.inner_text()
        await swipe(pg, H, ".month .cells", 300, 400, 110, 400)
        t2 = await a.locator(".page-title").first.inner_text()
        check(await view() == "calendar" and t1 != t2, f"in the month: the next month, same tab ({t1} -> {t2})")
        await swipe(pg, H, "main .page", 110, 120, 300, 120)
        check(await view() == "now", "to the right from Calendário: Agora")
        await swipe(pg, H, "main .page", 110, 420, 300, 420)
        check(await view() == "now", "Agora is the first one: stays")
        # not a swipe: from the edge, mostly down, too short, a field
        await swipe(pg, H, "main .page", 10, 420, 250, 420)
        check(await view() == "now", "from the edge of the screen: no (that is the phone's back gesture)")
        await swipe(pg, H, "main .page", 300, 300, 200, 520)
        check(await view() == "now", "mostly down (scrolling): no")
        await swipe(pg, H, "main .page", 300, 420, 260, 420)
        check(await view() == "now", "too short: no")
        await swipe(pg, H, ".home-search input", 300, 210, 100, 210)
        check(await view() == "now", "on the search field: no")
        # a window open: no
        await a.locator(".tab.fab").click(); await pg.wait_for_timeout(600)
        await swipe(pg, H, "main .page", 300, 420, 110, 420)
        check(await view() == "now" and await a.locator(".sheet").count() == 1, "with a window open: no")
        await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(400)
        # computer: the sidebar is there, no swipes
        await pg.set_viewport_size({"width": 1200, "height": 800}); await pg.wait_for_timeout(500)
        await swipe(pg, H, "main .page", 700, 420, 400, 420)
        check(await view() == "now", "computer: no swipes")
        side = a.locator("aside.side .side-brand .app-ic")
        check(await side.count() == 1 and await side.is_visible(), "computer: the icon by the name on the sidebar")
        await a.locator("aside.side").screenshot(path=f"{SP}/shots/crsw-side.png", clip=None) if False else None
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
