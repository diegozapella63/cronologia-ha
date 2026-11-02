# CronologIA 1.16.0: Novo › Tarefa follows Controlar prazos of the ResolvIA; Notas only with Local e notas.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, datetime
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crf-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share/resolvia"); os.makedirs(f"{SP}/shots", exist_ok=True)
def resolvia_file(prazos):
    now = datetime.datetime.now(datetime.timezone.utc).isoformat()
    json.dump({"app": "ResolvIA", "versao": "2.15.0", "gravado_em": now, "prazos": prazos, "sem_prazo": [], "pontos": {}, "repete": {}}, open(f"{data}/share/resolvia/integracao.json", "w"))
procs = []
def start():
    for pr in procs: pr.kill()
    procs.clear(); time.sleep(0.4)
    procs.append(subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(0.6)
    aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
    procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "a"), stderr=subprocess.STDOUT))
    time.sleep(1.2)
def items(eid): return json.loads(urllib.request.urlopen(f"http://127.0.0.1:8123/dev/todo?entity_id={eid}").read())
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)

async def open_task_form(A, a):
    await a.locator(".tab.fab").click(); await A.wait_for_timeout(400)
    await a.locator(".sheet .kind-chip, .sheet button", has_text="Tarefa").first.click(); await A.wait_for_timeout(400)
    await a.locator(".sheet .pick.list", has_text="Casa").click(); await A.wait_for_timeout(200)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        errs = []
        # ResolvIA with Controlar prazos off
        resolvia_file(False); start()
        A = await ctx.new_page(); A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        await open_task_form(A, a)
        labels = [t.strip() for t in await sheet.locator(".flabel").all_inner_texts()]
        txt = await sheet.inner_text()
        check("Prazo" not in labels and "Sem prazo" not in txt and "Os prazos estão desligados no ResolvIA" in txt, f"prazos off in the ResolvIA: no deadline here ({labels})")
        check("Notas" not in labels, "Notas hidden (Local e notas off)")
        await A.screenshot(path=f"{SP}/shots/crf-off.png")
        await sheet.locator(".ev-title-input").fill("Consertar o portão")
        await sheet.locator(".btn.primary", has_text="Criar tarefa").click()
        await wait_for(lambda: any(i["summary"] == "Consertar o portão" and not i.get("due") for i in items("todo.casa")), "the task goes in without a date")
        await A.close()

        # Controlar prazos on (and Local e notas on): the deadline and the notes come back
        resolvia_file(True); start()
        A = await ctx.new_page(); A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        await A.evaluate("() => document.querySelector('cronologia-app').api.setAppPrefs({ event_details: true })"); await A.wait_for_timeout(500)
        await open_task_form(A, a)
        labels = [t.strip() for t in await sheet.locator(".flabel").all_inner_texts()]
        check("Prazo" in labels and "Notas" in labels, f"prazos on: deadline and notes ({labels})")
        await sheet.locator(".ev-title-input").fill("Trocar a resistência")
        await sheet.locator(".btn.primary", has_text="Criar tarefa").click()
        await wait_for(lambda: any(i["summary"] == "Trocar a resistência" and i.get("due") for i in items("todo.casa")), "with prazos on, the task has the date")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
