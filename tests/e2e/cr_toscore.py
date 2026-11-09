# CronologIA 1.20.1: Para pontuar hoje like the start screen: the initials to mark for someone,
# and on a done one, who got the points (initial in their color).
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
data = f"{SP}/crts-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana", "manual": True}, "who_pick": True}}, open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", CRONOLOGIA_DEV_USER_ID="u-davi", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
def stored(): return json.load(open(f"{data}/cronologia.json"))
def bed(): return [e for e in (stored().get("score") or {}).get("entries", []) if e["title"] == "Arrumar a cama"]
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }")  # Rotina da casa: the done ones unfolded
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await sheet.locator(".model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await sheet.locator(".ev-title-input").fill("Arrumar a cama")
        await sheet.locator(".pick", has_text="+10").click()
        await sheet.locator(".pick.list", has_text="Casa").click()
        await sheet.locator(".btn.primary", has_text="Criar rotina").click(); await A.wait_for_timeout(1500)
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(800)
        today = a.locator(".score-today")
        row = today.locator(".chore", has_text="Arrumar a cama")
        check([t.strip() for t in await row.locator(".qw-btn").all_inner_texts()] == ["D", "A"], "open: D and A on the right, as on the start screen")
        check("+10" in await row.locator(".pts-inline").inner_text(), "the points move next to the text")
        mrow = today.locator(".chore.maint-score").first
        if await mrow.count():
            check(await mrow.locator(".qw-btn").count() == 2 and await mrow.locator(".btn-pts").count() == 0, "maintenance: the initials too")
        await row.scroll_into_view_if_needed(); await A.screenshot(path=f"{SP}/shots/crts-open.png")
        await row.locator(".qw-btn[aria-label^='Aurora']").click()
        await wait_for(lambda: bed() and bed()[0]["who"] == "Aurora", "one tap: Aurora gets the points")
        await A.wait_for_timeout(500)
        check(await today.locator(".chore", has_text="Arrumar a cama").count() == 0, "done: it leaves Para pontuar hoje (only what still gives points)")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        won = a.locator("#casa .chore.done", has_text="Arrumar a cama").locator(".won")
        check(await won.count() == 1 and (await won.inner_text()).replace("\n", "").replace(" ", "") == "A+10", f"done: A and +10 ({(await won.inner_text())!r})")
        check("Aurora" in (await won.get_attribute("aria-label")), "says who got them")
        await A.screenshot(path=f"{SP}/shots/crts-done.png")
        # Foi Davi: the initial follows
        btn = a.locator(".toast button", has_text="Foi Davi")
        if await btn.count():
            await btn.click()
            await wait_for(lambda: bed() and bed()[0]["who"] == "Davi", "Foi Davi passes them")
            await A.wait_for_timeout(500)
            check((await won.inner_text()).replace("\n", "").replace(" ", "") == "D+10", "the initial follows (D)")
        # without Marcar por outras pessoas: the plain points, as before
        await A.evaluate("() => document.querySelector('cronologia-app')._saveAppPrefs({ who_pick: null })"); await A.wait_for_timeout(600)
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(600)
        check(await today.locator(".qw-btn").count() == 0, "off: no initials")
        check(not errs, f"no page errors {errs}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
