import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, re, datetime
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
URL = "http://127.0.0.1:8099/"
n_ok = 0
procs = []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if not c: raise SystemExit(1)
    n_ok += 1
def start():
    for p in procs: p.kill()
    procs.clear(); time.sleep(0.4)
    data = f"{SP}/crd-data"; shutil.rmtree(data, ignore_errors=True)
    os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
    env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
    procs.append(subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(0.6)
    aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
    procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(1.0)
    return data
def fake_log(data): return open(f"{data}/fake.log").read()
def stored(data): return json.load(open(f"{data}/cronologia.json"))
def state(entity):
    req = urllib.request.Request(f"http://127.0.0.1:8123/api/states/{entity}", headers={"authorization": "Bearer dev"})
    return json.loads(urllib.request.urlopen(req).read())
def fire(event_type, d):
    req = urllib.request.Request("http://127.0.0.1:8123/dev/fire", data=json.dumps({"event_type": event_type, "data": d}).encode(), method="POST")
    urllib.request.urlopen(req).read()
async def wait_for(fn, label, tries=60):
    for _ in range(tries):
        try:
            if await fn() if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)


import zipfile, io
async def main():
    data = start()
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--lang=pt-BR"])
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", accept_downloads=True)
        errs = []
        A = await ctx.new_page()
        A.on("pageerror", lambda e: errs.append(f"pageerror: {e}"))
        A.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        await A.goto(URL)
        a = A.locator("cronologia-app")
        await a.locator(".panel.meds").wait_for(timeout=10000)
        # some app data: a calendar name/color and the scoreboard
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(300)
        await a.locator(".setup-card .btn.primary").click()
        await wait_for(lambda: stored(data)["app"].get("score", {}).get("enabled") is True, "scoreboard on")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Placar"); await A.wait_for_timeout(400)
        await a.locator("#placar .switch input[aria-label='Marcar pontos em Recompensas']").check(); await A.wait_for_timeout(500)
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(400)
        await a.locator(".btn", has_text="Pontos avulsos").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet #ex-title").fill("Lavou o carro")
        await a.locator(".sheet .pick.person", has_text="Diego").click()
        await a.locator(".sheet .btn.primary").click()
        await wait_for(lambda: len(stored(data)["score"]["entries"]) == 1, "points saved")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Calendários")
        await a.locator(".cal-row", has_text="Pessoal").locator(".tile").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet input[type=text]").fill("Minha agenda")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(700)
        await open_more(a, "Dados"); await A.wait_for_timeout(400)
        panel = await a.locator("#dados").inner_text()
        check("Tudo (ZIP)" in panel and "Eventos (CSV)" in panel and "Dados completos (JSON)" in panel and "Agenda (.ics)" in panel and "Criar backup" in panel and "Ver versões" in panel, "Dados panel like the other apps")
        rows = a.locator("#dados .opts > li")
        check(await rows.count() == 4 and all(len(t) > 20 for t in await rows.locator(".ot span").all_inner_texts()), "Exportar: one line per file, each with its explanation")
        bw = [await rows.nth(i).evaluate("e => getComputedStyle(e).borderBottomStyle") for i in range(4)]
        check(bw == ["solid"] * 4, "a border on each line")
        # exports
        async with A.expect_download() as dl:
            await a.locator("#dados a.btn", has_text="Baixar JSON").click()
        d = await dl.value; pth = os.path.join(SP, "crd.json"); await d.save_as(pth)
        j = json.load(open(pth, encoding="utf-8"))
        check(d.suggested_filename.startswith("cronologia-") and j["app_name"] == "CronologIA" and j["calendars"]["calendar.pessoal"]["name"] == "Minha agenda" and len(j["score"]["entries"]) == 1 and "sent" not in j, f"JSON export ({d.suggested_filename})")
        async with A.expect_download() as dl:
            await a.locator("#dados a.btn", has_text="Baixar CSV").click()
        d = await dl.value; pth = os.path.join(SP, "crd.csv"); await d.save_as(pth)
        csvt = open(pth, encoding="utf-8").read()
        check(csvt.startswith("﻿Calendário;Título;Início") and "Minha agenda;Dentista" in csvt and ";Remédio;" in csvt, "CSV export of the events (with the model)")
        async with A.expect_download() as dl:
            await a.locator("#dados a.btn", has_text="Baixar ZIP").click()
        d = await dl.value; pth = os.path.join(SP, "crd.zip"); await d.save_as(pth)
        z = zipfile.ZipFile(pth); names = z.namelist()
        check("cronologia.json" in names and "eventos.csv" in names and "pontos.csv" in names and "calendarios/Minha agenda.ics" in names and "LEIA-ME.txt" in names, f"ZIP export ({len(names)} files)")
        check("BEGIN:VCALENDAR" in z.read("calendarios/Minha agenda.ics").decode() and "Lavou o carro" in z.read("pontos.csv").decode("utf-8-sig"), "ZIP has the .ics of each calendar and the points")
        # backup in share/cronologia
        await a.locator("#dados .btn", has_text="Criar backup").click()
        await wait_for(lambda: any(f.endswith(".zip") for f in os.listdir(f"{data}/share/cronologia")), "backup written to share/cronologia")
        async def listed(): return await a.locator("#dados .data-item").count() == 1
        await wait_for(listed, "backup listed")
        # change something, then restore the backup
        await open_more(a, "Calendários"); await A.wait_for_timeout(300)
        await a.locator(".cal-row", has_text="Minha agenda").locator(".tile").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet input[type=text]").fill("Outro nome")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(700)
        await open_more(a, "Dados"); await A.wait_for_timeout(400)
        await a.locator("#dados .data-item .btn", has_text="Restaurar").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn.primary", has_text="Restaurar").click()
        await wait_for(lambda: stored(data)["calendars"]["calendar.pessoal"]["name"] == "Minha agenda", "backup restored (name back)")
        check(len(stored(data)["score"]["entries"]) == 1 and stored(data)["app"]["score"]["enabled"] is True, "points and settings kept")
        await open_more(a, "Calendários"); await A.wait_for_timeout(500)
        check(await a.locator(".cal-row", has_text="Minha agenda").count() == 1, "screen shows the restored name live")
        await open_more(a, "Dados"); await A.wait_for_timeout(400)
        # versions
        await a.locator("#dados .btn", has_text="Ver versões").click(); await A.wait_for_timeout(600)
        items = await a.locator(".sheet .data-item").all_inner_texts()
        check(len(items) >= 1 and any("antes de restaurar" in i for i in items), f"versions listed ({len(items)})")
        await a.locator(".sheet .data-item", has_text="antes de restaurar").first.locator(".btn").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn.primary", has_text="Restaurar").click()
        await wait_for(lambda: stored(data)["calendars"]["calendar.pessoal"]["name"] == "Outro nome", "version restored")
        # import a JSON (edited)
        j["calendars"]["calendar.pessoal"]["name"] = "Importada"
        j["app"]["accent"] = "rosa"
        j["calendars"]["light.sala"] = {"name": "não é calendário"}
        pth = os.path.join(SP, "crd-import.json"); json.dump(j, open(pth, "w", encoding="utf-8"), ensure_ascii=False)
        await a.locator("#cr-data-import").set_input_files(pth); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn.primary", has_text="Importar").click()
        await wait_for(lambda: stored(data)["calendars"]["calendar.pessoal"]["name"] == "Importada" and stored(data)["app"]["accent"] == "rosa", "JSON import")
        check("light.sala" not in stored(data)["calendars"], "import keeps only calendars")
        pth2 = os.path.join(SP, "crd-bad.json"); open(pth2, "w").write('{"foo": 1}')
        await a.locator("#cr-data-import").set_input_files(pth2); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn.primary", has_text="Importar").click()
        async def bad(): return "Esse .json não é do CronologIA" in await a.locator(".toast").inner_text()
        await wait_for(bad, "a foreign JSON is refused")
        # zip import
        await a.locator("#cr-data-import").set_input_files(os.path.join(SP, "crd.zip")); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn.primary", has_text="Importar").click()
        await wait_for(lambda: stored(data)["calendars"]["calendar.pessoal"]["name"] == "Minha agenda", "ZIP import")
        print("errors:", [e for e in errs if "status of 4" not in e] or "none")
        print(f"{n_ok} checks passed")
        await b.close()
try:
    asyncio.run(main())
finally:
    for p in procs: p.kill()
