# CronologIA 1.20.2/1.20.7: Rotina da casa folds the done ones; all done, it leaves Agora ("Concluídas (N)", 1.64.0).
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
data = f"{SP}/crf-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        panel = a.locator("#casa")
        rows = panel.locator(".chore")
        n = await rows.count()
        head = await panel.locator(".chores-head small").first.inner_text()
        check(n >= 2 and head.startswith("0 de"), f"routines of today, none done ({n}, {head})")
        check(await panel.locator(".done-fold").count() == 0, "nothing done: no fold")
        today_row = rows.filter(has_not_text="ontem").first
        first = (await today_row.locator(".chore-tx b").inner_text()).strip()
        await today_row.locator(".chk").click(); await A.wait_for_timeout(1200)
        if await a.locator(".sheet").count():  # unknown device: Quem fez?
            await a.locator(".sheet .btn.outline", has_text="Ninguém").click(); await A.wait_for_timeout(800)
        check(await panel.locator(".chore.done").count() == 0, "the done one leaves the list (folded)")
        check(await panel.locator(".chore").count() == n - 1, "the others stay")
        fold = panel.locator(".done-fold")
        check(await fold.count() == 1 and (await fold.inner_text()).strip() == "Concluídas (1)" and await fold.get_attribute("aria-expanded") == "false", "Concluídas (1), closed")
        check((await panel.locator(".chores-head small").first.inner_text()).startswith("1 de"), "the header still counts it")
        await A.screenshot(path=f"{SP}/shots/crf-folded.png")
        await fold.click(); await A.wait_for_timeout(300)
        check(await panel.locator(".chore.done").count() == 1 and first in await panel.locator(".chore.done").inner_text(), "a tap shows it")
        check((await fold.inner_text()).strip() == "Concluídas (1)" and await fold.get_attribute("aria-expanded") == "true", "open: the same name, the chevron down")
        await A.screenshot(path=f"{SP}/shots/crf-open.png")
        # unchecking from there brings it back up
        await panel.locator(".chore.done .chk").first.click(); await A.wait_for_timeout(1200)
        check(await panel.locator(".chore.done").count() == 0 and await panel.locator(".chore").count() == n, "unchecked: back to the list")
        await fold.count() == 0
        check(await panel.locator(".done-fold").count() == 0, "no done: no fold")
        # all done: it stays until leaving Agora, then Rotina da casa leaves Agora (the calendar has them)
        for _ in range(12):
            left = panel.locator(".chore:not(.done) .chk")
            if not await left.count(): break
            await left.first.click(); await A.wait_for_timeout(900)
            if await a.locator(".sheet").count():
                await a.locator(".sheet .btn.outline", has_text="Ninguém").click(); await A.wait_for_timeout(600)
        await A.wait_for_timeout(600)
        check("Tudo feito hoje" in await panel.inner_text(), "the last Feito: it stays, saying all done")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(700)
        page = await a.locator(".page").first.inner_text()
        check("ROTINA DA CASA" not in page.upper(), "back on Agora: Rotina da casa is gone (all done)")
        await A.screenshot(path=f"{SP}/shots/crf-alldone.png")
        check(not errs, f"no page errors {errs}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
