# CronologIA 1.26.0: the choices are buttons of the same width, in columns, like the EconomIA.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crch-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)); time.sleep(1.3)
async def uniform(a, scope, label):
    rows = a.locator(f"{scope} .chip-row:not(.dm-ideas)")
    n = await rows.count(); bad = []
    for i in range(n):
        r = rows.nth(i)
        if not await r.is_visible(): continue
        w = [round((await r.locator(":scope > .pick").nth(k).bounding_box())["width"]) for k in range(await r.locator(":scope > .pick").count())]
        if len(set(w)) > 1: bad.append(w)
    check(n > 0 and not bad, f"{label}: {n} rows, buttons of the same width {bad[:2]}")
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1800)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        # Mais › Avisos (the screenshot): Avisar de novo, Quem cuida
        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(300)
        await open_more(a, "Avisos"); await pg.wait_for_timeout(600)
        await uniform(a, "#avisos", "Avisos")
        late = a.locator("#avisos .chip-row").first.locator(".pick")
        xs = [round((await late.nth(k).bounding_box())["x"]) for k in range(await late.count())]
        check(len(set(xs)) == 2, f"Avisar de novo: two columns ({xs})")
        check(await a.locator("#avisos .steps-box").count() == 0, "Avisos: no Home Assistant how-to box")
        await pg.screenshot(path=f"{SP}/shots/crch-avisos.png")
        # Novo: an event, then each model
        await a.locator(".tab.fab").click(); await pg.wait_for_timeout(700)
        await uniform(a, ".sheet", "Novo evento")
        await pg.screenshot(path=f"{SP}/shots/crch-novo.png", full_page=True)
        for m in ("Remédio", "Rotina", "Manutenção", "Conta"):
            await sheet.locator(".model", has_text=m).click(); await pg.wait_for_timeout(500)
            await uniform(a, ".sheet", f"Novo {m}")
            if m == "Rotina": await sheet.screenshot(path=f"{SP}/shots/crch-rotina.png")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(400)
        # Dados › Exportar: one line per file
        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(300)
        await open_more(a, "Dados"); await pg.wait_for_timeout(600)
        rows = a.locator("#dados .opts > li")
        titles = [t.strip() for t in await rows.locator(".ot b").all_inner_texts()]
        check(titles == ["Eventos (CSV)", "Agenda (.ics)", "Dados completos (JSON)", "Tudo (ZIP)"], f"Exportar: one line per file ({titles})")
        await a.locator("#dados .panel").first.screenshot(path=f"{SP}/shots/crch-export.png")
        await rows.nth(1).locator(".btn").click(); await pg.wait_for_timeout(500)
        check("Exportar agenda" in await sheet.inner_text(), "Agenda (.ics): Escolher opens the export")
        await uniform(a, ".sheet", "Exportar agenda")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
