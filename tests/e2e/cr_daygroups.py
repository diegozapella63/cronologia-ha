# CronologIA 1.16.3: a day's list shows the events and doses first, then "Rotinas, tarefas e lembretes".
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
data = f"{SP}/crg-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
ORDER = """(sel) => [...document.querySelector('cronologia-app').shadowRoot.querySelector(sel).children]
  .map((el) => el.classList.contains('day-sep') ? '|' : el.classList.contains('ev-row') ? (el.querySelector('.ev-title') || el).textContent.trim() : null).filter(Boolean)"""
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
        await a.locator(".seg button", has_text="Mês").click(); await pg.wait_for_timeout(1200)
        rows = await pg.evaluate(ORDER, ".day-panel")
        print("day:", rows)
        check("|" in rows, "today has the separator")
        cut = rows.index("|") if "|" in rows else len(rows)
        before, after = rows[:cut], rows[cut + 1:]
        check(any("Daily do time" in t for t in before), "events before it (Daily do time)")
        check(not any(any(r in t for r in ROUTINES) for t in before), "no routine before it")
        check(any("Sertralina" in t for t in before) and not any("Sertralina" in t for t in after), "medicine doses go up with the events (they have a time)")
        times = [t for t in before]
        check(any("Pilates" in t for t in before), "Pilates (09:00) with the events")
        check(any(any(r in t for r in ROUTINES) for t in after), "routines after it")
        check("ROTINAS, TAREFAS E LEMBRETES" in (await a.locator(".day-panel .day-sep").inner_text()).upper(), "the label")
        await a.locator(".day-panel").scroll_into_view_if_needed(); await pg.screenshot(path=f"{SP}/shots/crg-mes.png")
        # Lista: the same grouping per day
        await a.locator(".seg button", has_text="Lista").click(); await pg.wait_for_timeout(1000)
        lst = await pg.evaluate(ORDER, ".panel.agenda")
        first_day = lst[:lst.index("|") + 1] if "|" in lst else lst
        check("|" in lst and not any(any(r in t for r in ROUTINES) for t in first_day[:-1]), "Lista: events first on each day")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
