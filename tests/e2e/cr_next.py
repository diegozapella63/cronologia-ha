# CronologIA 1.20.3: Agora is today: A seguir only shows what is still ahead today, and no Próximos dias.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, datetime
from zoneinfo import ZoneInfo
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crn-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
SPZ = ZoneInfo("America/Sao_Paulo")
today = datetime.datetime.now(SPZ).date()
at = lambda h, m=0: datetime.datetime(today.year, today.month, today.day, h, m, tzinfo=SPZ)
async def open_at(b, when):
    ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo")
    pg = await ctx.new_page()
    await pg.clock.set_fixed_time(when)
    await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2000)
    return pg
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        # morning: the next appointment of today
        pg = await open_at(b, at(8, 0))
        a = pg.locator("cronologia-app")
        hero = a.locator(".hero-ev")
        txt = await hero.inner_text() if await hero.count() else ""
        print("08:00:", txt.replace("\n", " / ")[:120])
        check("A SEGUIR" in txt.upper() and "hoje" in txt, "08:00: A seguir shows today's next")
        pil = a.locator(".panel.agenda .ev-row", has_text="Pilates").first
        check(await pil.locator(".kind-ic").count() == 1, "a plain event has its icon too (Evento)")
        await pg.screenshot(path=f"{SP}/shots/crn-morning.png")
        await pg.context.close()
        # late night: nothing more today, Daily do time tomorrow is in Próximos dias only
        pg = await open_at(b, at(23, 0))
        a = pg.locator("cronologia-app")
        n = await a.locator(".hero-ev").count()
        txt = await a.locator(".hero-ev").inner_text() if n else ""
        print("23:00:", txt.replace("\n", " / ")[:120])
        check(n == 0, f"23:00: no A seguir for tomorrow ({txt[:50]!r})")
        page = await a.locator(".page").first.inner_text()
        check("Próximos dias" not in page and "PRÓXIMOS DIAS" not in page.upper(), "no Próximos dias on Agora (the Calendário has them)")
        check("Agenda livre" not in page, "and no 'Agenda livre' card")
        await pg.screenshot(path=f"{SP}/shots/crn-night.png")
        await pg.context.close()
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
