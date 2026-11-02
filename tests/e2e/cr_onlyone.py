# CronologIA 1.21.2: Agora without the Hoje card when its only appointment is the A seguir / Agora card.
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
data = f"{SP}/cro-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
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
async def set_hidden(pg, name, hidden):
    await pg.evaluate("""([name, hidden]) => { const a = document.querySelector('cronologia-app'); const c = a._cals().find((x) => x.name === name); return a._saveCalPrefs(c.id, { hidden: hidden ? true : null }); }""", [name, hidden])
    await pg.wait_for_timeout(800)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        wk = datetime.timedelta(days=7)  # next week: only the weekly Pilates (Pessoal) and the Daily do time (Trabalho)
        # both calendars: two appointments, the Hoje card stays
        pg = await open_at(b, at(6, 23) + wk)
        a = pg.locator("cronologia-app")
        check(await a.locator(".panel.agenda .ev-row").count() == 2, "two appointments: the Hoje card lists both")
        check(await a.locator(".hero-ev", has_text="Pilates").count() == 1, "and A seguir shows Pilates")
        await set_hidden(pg, "Trabalho", True)
        await pg.context.close()
        # only Pilates: A seguir has it, the Hoje card goes away
        pg = await open_at(b, at(6, 23) + wk)
        a = pg.locator("cronologia-app")
        hero = await a.locator(".hero-ev").inner_text() if await a.locator(".hero-ev").count() else ""
        check("A SEGUIR" in hero.upper() and "Pilates" in hero, "one appointment: A seguir shows it")
        check(await a.locator(".panel.agenda").count() == 0, "and there is no Hoje card repeating it")
        await pg.screenshot(path=f"{SP}/shots/cro-next.png")
        await pg.context.close()
        # during it: the Agora card has it, still no Hoje card
        pg = await open_at(b, at(9, 20) + wk)
        a = pg.locator("cronologia-app")
        hero = await a.locator(".hero-ev").inner_text() if await a.locator(".hero-ev").count() else ""
        check("AGORA" in hero.upper() and "Pilates" in hero, "during it: the Agora card")
        check(await a.locator(".panel.agenda").count() == 0, "and no Hoje card")
        await pg.context.close()
        # after it: nothing ahead, no card on top, so the Hoje card is back with what was today
        pg = await open_at(b, at(11, 0) + wk)
        a = pg.locator("cronologia-app")
        check(await a.locator(".hero-ev").count() == 0, "after it: no card on top")
        check(await a.locator(".panel.agenda").count() == 0, "and no Hoje card: nothing more today (1.28.0)")
        await set_hidden(pg, "Trabalho", False)
        await pg.context.close()
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
