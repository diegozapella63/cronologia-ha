# CronologIA 1.16.0: Mais › Opções › Novo › Local e notas (off by default), Repetir in one line.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crd-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)]
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
def fake_log(): return open(f"{data}/fake.log").read()
def stored(): return json.load(open(f"{data}/cronologia.json"))
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 360, "height": 780}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page()
        errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        sheet = a.locator(".sheet")
        # Novo › Evento, off by default
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(400)
        labels = [t.strip() for t in await sheet.locator(".flabel").all_inner_texts()]
        check("Local" not in labels and "Notas" not in labels, f"off by default: no Local or Notas ({labels})")
        seg = sheet.locator(".seg.rep-seg button")
        texts = [t.strip() for t in await seg.all_inner_texts()]
        check(texts == ["Não", "Diário", "Semanal", "Mensal", "Anual"], f"Repetir: 5 short choices ({texts})")
        tops = {round((await seg.nth(k).bounding_box())["y"]) for k in range(5)}
        check(len(tops) == 1, f"Repetir in one line at 360 px ({tops})")
        fits = await A.evaluate("() => [...document.querySelector('cronologia-app').shadowRoot.querySelectorAll('.rep-seg button')].every((b) => b.scrollWidth <= b.clientWidth + 1)")
        check(fits, "every choice fits its button")
        check(await sheet.locator(".seg.rep-seg button.on").inner_text() == "Não", "Não chosen by default")
        await sheet.locator(".ev-title-input").fill("Aula de violão")
        await seg.filter(has_text="Semanal").click(); await A.wait_for_timeout(200)
        check(await sheet.locator(".seg.rep-seg button[aria-checked='true']").inner_text() == "Semanal", "Semanal chosen")
        await A.screenshot(path=f"{SP}/shots/crd-form.png")
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: "Aula de violão" in fake_log() and "FREQ=WEEKLY" in fake_log().split("Aula de violão")[0].split("event created")[-1] + fake_log().split("Aula de violão")[1].split("\n")[0], "the event is created repeating weekly")

        # Mais › Opções › Novo › Local e notas
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Opções"); await A.wait_for_timeout(400)
        sw = a.locator("input[aria-label='Local e notas']")
        check(await sw.count() == 1 and not await sw.is_checked(), "Opções › Novo: Local e notas, off")
        await A.screenshot(path=f"{SP}/shots/crd-opcoes.png")
        await sw.check(); await A.wait_for_timeout(500)
        check(stored()["app"].get("event_details") is True, "on is saved")
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(400)
        labels = [t.strip() for t in await sheet.locator(".flabel").all_inner_texts()]
        check("Local" in labels and "Notas" in labels, "on: Local and Notas in the form")
        await sheet.locator(".ev-title-input").fill("Reunião do condomínio")
        await sheet.locator("input[placeholder='Endereço, sala ou link']").fill("Salão de festas")
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: "Salão de festas" in fake_log(), "the place is saved")

        # off again: an event with a place still shows its fields when edited
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Opções"); await A.wait_for_timeout(300)
        await a.locator("input[aria-label='Local e notas']").uncheck(); await A.wait_for_timeout(500)
        check("event_details" not in stored()["app"], "off is saved (unset)")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        await a.locator(".ev-row", has_text="Reunião do condomínio").first.click(); await A.wait_for_timeout(400)
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        labels = [t.strip() for t in await sheet.locator(".flabel").all_inner_texts()]
        check("Local" in labels and await sheet.locator("input[placeholder='Endereço, sala ou link']").input_value() == "Salão de festas", "off: an event that has a place keeps showing it")
        await sheet.locator(".btn.outline", has_text="Cancelar").click(); await A.wait_for_timeout(300)
        await a.locator(".ev-row", has_text="Aula de violão").first.click(); await A.wait_for_timeout(400)
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        labels = [t.strip() for t in await sheet.locator(".flabel").all_inner_texts()]
        check("Local" not in labels and await sheet.locator(".seg.rep-seg button.on").inner_text() == "Semanal", "off: an event without them stays short; its repetition shows")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
