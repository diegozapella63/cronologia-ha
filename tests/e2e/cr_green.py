# CronologIA 1.21.2: in the calendar grid, done is green: a day with all routines done (7/7) and a dose taken.
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
data = f"{SP}/crg-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
GREEN = "rgb(79, 209, 143)"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        async def who():
            if await a.locator(".sheet .btn.outline", has_text="Ninguém").count():
                await a.locator(".sheet .btn.outline", has_text="Ninguém").click(); await A.wait_for_timeout(600)
        # a dose taken
        await a.evaluate("(e) => { e._medsDoneOpen = true; e.requestUpdate(); }")  # 1.59.0: the taken doses are folded
        await a.locator(".dose", has_text="Gardenal").locator(".dose-btn").click(); await A.wait_for_timeout(1200); await who()
        check(await a.locator(".dose.tomado", has_text="Gardenal").count() == 1, "Gardenal taken")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Semana").click(); await A.wait_for_timeout(1200)
        today = a.locator(".tgrid-any .tg-any[aria-label*='Hoje'], .tgrid-any .tg-any[aria-label*='hoje']").first
        before = (await today.inner_text()).strip()
        check("all" not in (await today.get_attribute("class")) and await today.evaluate("e => getComputedStyle(e).color") != GREEN, f"today not all done: not green ({before})")
        # everything of today without a time, done from the counter's list
        await today.click(); await A.wait_for_timeout(700)
        for _ in range(60):
            left = a.locator(".sheet .chk:not(.ro)").filter(has_not=a.locator(".i-check"))
            rows = a.locator(".sheet .chore:not(.done) .chk:not(.ro)")
            if not await rows.count(): break
            await rows.first.click(); await A.wait_for_timeout(700); await who()
        await A.keyboard.press("Escape"); await A.wait_for_timeout(500)
        if await a.locator(".sheet").count():
            await a.locator(".sheet .sheet-close, .sheet button[aria-label='Fechar']").first.click(); await A.wait_for_timeout(500)
        after = (await today.inner_text()).strip()
        d, t = after.split("/")
        check(d == t and "all" in await today.get_attribute("class"), f"all done ({after})")
        check(await today.evaluate("e => getComputedStyle(e).color") == GREEN, "the counter is green")
        # the dose: green, solid, no stripes; one not taken keeps its color
        taken = a.locator(".tg-col.today .tg-ev.med.done", has_text="Gardenal")
        check(await taken.count() == 1, "the taken dose in the grid is done")
        bc = await taken.evaluate("e => getComputedStyle(e).borderTopColor")
        check(bc == GREEN, f"and green ({bc})")
        check(await taken.evaluate("e => getComputedStyle(e).borderTopStyle") == "solid", "solid border")
        other = a.locator(".tg-col.today .tg-ev.med:not(.done)").first
        if await other.count():
            oc = await other.evaluate("e => getComputedStyle(e).borderTopColor")
            check(oc != GREEN, f"a dose not taken keeps its color ({oc})")
        await taken.scroll_into_view_if_needed(); await A.wait_for_timeout(300)
        await A.screenshot(path=f"{SP}/shots/crg-week.png")
        # Dia: the Qualquer hora bar green too
        await a.get_by_role("tab", name="Dia", exact=True).click(); await A.wait_for_timeout(900)
        bar = a.locator(".any-bar")
        check(await bar.count() == 1 and "all" in await bar.get_attribute("class") and await bar.evaluate("e => getComputedStyle(e).color") == GREEN, "Dia: Qualquer hora all done, green")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
