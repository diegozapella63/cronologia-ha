# CronologIA 1.16.1: Tarefas do ResolvIA › Criar tarefas nas listas dos outros (off by default).
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request
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
# Trabalho is Andressa's; Diego uses the app
json.dump({"app": {"todo_owner": {"todo.trabalho": "Andressa"}}}, open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", CRONOLOGIA_DEV_USER_ID="u-diego", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
def items(eid): return json.loads(urllib.request.urlopen(f"http://127.0.0.1:8123/dev/todo?entity_id={eid}").read())
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
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        async def task_lists():
            await a.locator(".tab.fab").click(); await pg.wait_for_timeout(300)
            await sheet.locator(".model", has_text="Tarefa").click(); await pg.wait_for_timeout(300)
            return [t.strip() for t in await sheet.locator(".pick.list").all_inner_texts()]
        lists = await task_lists()
        check("Casa" in lists and "Trabalho" not in lists, f"off by default: no list of Andressa ({lists})")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)

        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Integrações").click(); await pg.wait_for_timeout(500)
        sw = a.locator("#resolvia input[aria-label='Criar tarefas nas listas dos outros']")
        check(await sw.count() == 1 and not await sw.is_checked(), "Tarefas do ResolvIA: the switch, off")
        await sw.check(); await pg.wait_for_timeout(500)
        check(stored()["app"].get("todo_create_any") is True, "on is saved")
        await sw.scroll_into_view_if_needed(); await pg.screenshot(path=f"{SP}/shots/crx-settings.png")

        lists = await task_lists()
        check("Casa" in lists and "Trabalho" in lists, f"on: Andressa's list is offered too ({lists})")
        check(not "Trabalho" in (await sheet.locator(".pick.list.on").inner_text()), "the form starts on one's own list")
        await sheet.locator(".pick.list", has_text="Trabalho").click(); await pg.wait_for_timeout(200)
        hint = await sheet.inner_text()
        check("Lista de Andressa" in hint, "choosing it says whose list it is")
        await pg.screenshot(path=f"{SP}/shots/crx-form.png")
        await sheet.locator(".ev-title-input").fill("Ligar para o contador")
        await sheet.locator(".btn.primary", has_text="Criar tarefa").click()
        await wait_for(lambda: any(i["summary"] == "Ligar para o contador" for i in items("todo.trabalho")), "the task goes into Andressa's list")
        async def toast(): return "(lista de Andressa)" in await a.locator(".toast").inner_text()
        await wait_for(toast, "the toast says it is Andressa's list")
        card = await a.locator("main").inner_text()
        check("Ligar para o contador" not in card, "it still doesn't show for Diego")
        lists = await task_lists()
        check("Trabalho" not in await sheet.locator(".pick.list.on").inner_text(), "the next task starts on one's own list again")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
