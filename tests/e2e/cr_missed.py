# CronologIA 1.36.2: a dose of an earlier day, not taken, shows an X where the check would be.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crx-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
ORDER = """(sel) => [...document.querySelector('cronologia-app').shadowRoot.querySelector(sel).children]
  .map((el) => el.classList.contains('day-sep') ? '|' : el.classList.contains('day-head') ? '#' : el.classList.contains('ev-row') ? (el.classList.contains('done') ? '✓' : '') + (el.querySelector('.ev-title') || el).textContent.trim() : null).filter(Boolean)"""
ROUTINES = {"Regar as plantas", "Lavar a louça", "Tirar o lixo", "Limpar a caixa de areia"}
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app")
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Mês").click(); await pg.wait_for_timeout(1000)
        await a.locator(".cell[aria-label^='Ontem']").first.click(); await pg.wait_for_timeout(1200)
        meds = a.locator(".day-panel .ev-row:has(.ev-title .kind-ic)")
        info = await pg.evaluate("""() => [...document.querySelector('cronologia-app').shadowRoot.querySelectorAll('.day-panel .ev-row')].map((r) => [r.querySelector('.ev-title').textContent.trim(), !!r.querySelector('.ev-done.missed'), !!r.querySelector('.ev-done:not(.missed)')])""")
        print("ontem:", info)
        doses = [r for r in info if any(m in r[0] for m in ("Sertralina", "DPrev", "Gardenal"))]
        check(doses and all(r[1] for r in doses), f"yesterday's doses, not taken: X ({doses})")
        others = [r for r in info if not any(m in r[0] for m in ("Sertralina", "DPrev", "Gardenal", "Mounjaro", "Ômega", "Água micelar"))]
        check(not any(r[1] for r in others), "no X on the events/routines")
        x = a.locator(".day-panel .ev-done.missed").first
        col = await x.evaluate("(el) => getComputedStyle(el).color")
        check(col not in ("", "rgb(0, 0, 0)"), f"X colored ({col})")
        await a.locator(".day-panel .ev-row:has(.ev-done.missed)").first.scroll_into_view_if_needed(); await pg.screenshot(path=f"{SP}/shots/crx-ontem.png")
        # take one of yesterday's doses: the X becomes the check
        name = (await a.locator(".day-panel .ev-row:has(.ev-done.missed) .ev-title").first.inner_text()).strip()
        await a.locator(".day-panel .ev-row:has(.ev-done.missed)").first.click(); await pg.wait_for_timeout(600)
        btn = a.locator(".sheet button", has_text="Tomei")
        check(await btn.count() >= 1, "its sheet has Tomei")
        await btn.first.click(); await pg.wait_for_timeout(1500)
        if await a.locator(".sheet").count(): await pg.keyboard.press("Escape"); await pg.wait_for_timeout(400)
        row = a.locator(".day-panel .ev-row", has_text=name).first
        check(await row.locator(".ev-done:not(.missed)").count() == 1 and await row.locator(".ev-done.missed").count() == 0, f"{name}: taken, the check")
        # today: the doses not taken yet have no X
        await a.locator(".cell.today").first.click(); await pg.wait_for_timeout(1000)
        check(await a.locator(".day-panel .ev-done.missed").count() == 0, "today: no X")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
