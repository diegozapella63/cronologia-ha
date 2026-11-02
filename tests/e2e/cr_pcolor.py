# CronologIA 1.16.3: each person's color in Recompensas is the color of their calendar.
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
data = f"{SP}/crc-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
# Andressa has a calendar of her own (lilás); Diego doesn't
json.dump({"app": {"score": {"enabled": True, "participants": ["Andressa", "Diego"], "period": "semana"}},
           "calendars": {"calendar.pessoal": {"name": "Pessoal (Andressa)", "color": "lilas"}}}, open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app")
        check(json.load(open(f"{data}/cronologia.json"))["calendars"]["calendar.pessoal"]["name"] == "Pessoal (Andressa)", "Pessoal is named after Andressa")
        await a.locator(".tab", has_text="Recompensas").click(); await pg.wait_for_timeout(800)
        sty = lambda n: a.locator(".duel-side", has_text=n).get_attribute("style")
        sa, sd = (await sty("Andressa")).lower(), (await sty("Diego")).lower()
        print("Andressa:", sa[:40], "| Diego:", sd[:40])
        check("--c:#b99bff" in sa, "Andressa: the lilás of her calendar")
        check("--c:#b99bff" not in sd, "Diego: another color (no calendar of his)")
        await pg.screenshot(path=f"{SP}/shots/crc-placar.png")
        # Diego gets a calendar of his own, laranja: his color follows
        await pg.evaluate("() => document.querySelector('cronologia-app').api.setCalendarPrefs('calendar.trabalho', { name: 'Trabalho do Diego', color: 'laranja' })")
        await pg.wait_for_timeout(800)
        sd = (await sty("Diego")).lower()
        orange = await pg.evaluate("() => null")
        check("--c:#b99bff" in (await sty("Andressa")).lower() and "--c:#b99bff" not in sd and sd != sa, "Diego follows his calendar's color")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
