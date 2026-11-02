# CronologIA 1.25.0: Sensores no Home Assistant only when turned on (off by default); off removes them.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, urllib.error
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
def req(method, entity, body=None):
    r = urllib.request.Request(f"http://127.0.0.1:8123/api/states/{entity}", data=json.dumps(body).encode() if body else None, method=method, headers={"authorization": "Bearer dev", "content-type": "application/json"})
    try: return json.loads(urllib.request.urlopen(r).read() or b"null")
    except urllib.error.HTTPError as e: return e.code
def has(entity): return isinstance(req("GET", entity), dict)
data = f"{SP}/crs-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)]
time.sleep(0.6)
# what an older version left in Home Assistant
req("POST", "sensor.cronologia_remedios_hoje", {"state": "3", "attributes": {}})
req("POST", "sensor.cronologia_ia_hoje", {"state": "1", "attributes": {}})
check(has("sensor.cronologia_remedios_hoje"), "an old sensor is there before the app starts")
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
SENS = ["sensor.cronologia_remedios_hoje", "binary_sensor.cronologia_remedio_atrasado", "sensor.cronologia_manutencoes_vencidas", "sensor.cronologia_ia_hoje"]
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(2500)
        await wait_for(lambda: not has("sensor.cronologia_remedios_hoje") and not has("sensor.cronologia_ia_hoje"), "off by default: the old sensors are removed")
        await asyncio.sleep(2)
        check(not any(has(e) for e in SENS), "and the app creates none")
        a = A.locator("cronologia-app")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Avisos").click(); await A.wait_for_timeout(400)
        check("No Home Assistant" not in await a.locator(".page").first.inner_text(), "Avisos: no Home Assistant how-to (it is in Integrações › Sensores)")
        await a.locator(".more-tabs button", has_text="Integrações").click(); await A.wait_for_timeout(500)
        panel = a.locator("#sensores")
        check(await panel.count() == 1 and "Sensores no Home Assistant" in await panel.inner_text(), "Integrações: Sensores no Home Assistant")
        sw = panel.locator("input[aria-label='Criar sensores']")
        check(not await sw.is_checked() and await panel.locator(".sensor-list:not(.ha-events .sensor-list) .sensor-row").count() == 0, "off, no list of sensors")
        ev = await panel.locator(".ha-events").inner_text()
        check("cronologia_feito" in ev and "cronologia_demerito" in ev, "the events for automations are here, sensors on or off")
        await sw.check()
        await wait_for(lambda: json.load(open(f"{data}/cronologia.json"))["app"].get("sensors_on") is True, "on: saved")
        await wait_for(lambda: all(has(e) for e in SENS), "on: the sensors are created")
        check(req("GET", "sensor.cronologia_remedios_hoje")["attributes"].get("total") == 5, "with the doses of today")
        rows = [t.split("\n")[0] for t in await panel.locator(":scope > .sensor-list .sensor-row > code").all_inner_texts()]
        check("binary_sensor.cronologia_remedio_atrasado" in rows and len(rows) == 5, f"the list of sensors ({len(rows)})")
        await A.screenshot(path=f"{SP}/shots/crs-on.png", full_page=True)
        await sw.uncheck()
        await wait_for(lambda: not any(has(e) for e in SENS), "off: the sensors are removed")
        await A.reload(); await A.wait_for_timeout(2000)
        await asyncio.sleep(1.5)
        check(not any(has(e) for e in SENS), "after a reload, still none")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
