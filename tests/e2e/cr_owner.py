# CronologIA 1.15.0: whose each ResolvIA list is (Tarefas do ResolvIA › De quem é).
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
data = f"{SP}/cro-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"todo_undated": True, "todo_owner": {"todo.casa": "Andressa", "todo.trabalho": "Diego"}}}, open(f"{data}/cronologia.json", "w"))
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
def start(uid):
    env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
    if uid: env["CRONOLOGIA_DEV_USER_ID"] = uid
    p = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app-{uid or 'none'}.log", "w"), stderr=subprocess.STDOUT)
    time.sleep(1.2)
    return p
async def agora(b):
    pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
    await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
    a = pg.locator("cronologia-app")
    await a.locator(".panel.todos").wait_for(timeout=8000)
    if await a.locator(".panel.todos .add-line", has_text="Mais").count(): await a.locator(".panel.todos .add-line", has_text="Mais").click(); await pg.wait_for_timeout(300)
    return pg, a, await a.locator(".panel.todos").inner_text()
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errs = []
        # Andressa
        srv = start("u-andressa")
        pg, a, card = await agora(b)
        pg.on("pageerror", lambda e: errs.append(str(e)))
        check("Pagar o IPVA" in card and "Revisar contrato" not in card and "Café" in card, "Andressa: her list (Casa) and the shared one, not Diego's (Trabalho)")
        await a.locator(".tab.fab").click(); await pg.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Tarefa").click(); await pg.wait_for_timeout(300)
        lists = [t.strip() for t in await a.locator(".sheet .pick.list").all_inner_texts()]
        check("Casa" in lists and "Trabalho" not in lists, f"Andressa: Novo › Tarefa offers her lists ({lists})")
        await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # settings show every list, with De quem é
        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(300)
        await open_more(a, "Integrações"); await pg.wait_for_timeout(500)
        rows = a.locator("#resolvia .row.switch-row").filter(has=pg.locator(".owner-pick"))
        names = [t.split("\n")[0] for t in await rows.all_inner_texts()]
        check("Trabalho" in names and "Casa" in names, f"settings list every list ({names})")
        casa = a.locator("#resolvia .row.switch-row").filter(has=pg.locator(".owner-pick")).filter(has_text="Casa")
        check(await casa.locator(".owner-pick button.on").inner_text() == "Andressa", "Casa shows Andressa as owner")
        await casa.scroll_into_view_if_needed(); await pg.wait_for_timeout(200)
        await pg.screenshot(path=f"{SP}/shots/cro-settings.png")
        await casa.locator(".owner-pick button", has_text="Todos").click(); await pg.wait_for_timeout(600)
        check(json.load(open(f"{data}/cronologia.json"))["app"].get("todo_owner") == {"todo.trabalho": "Diego"}, "Todos removes the owner")
        await pg.close(); srv.kill(); time.sleep(0.4)
        # Diego
        srv = start("u-diego")
        pg, a, card = await agora(b)
        check("Revisar contrato" in card and "Pagar o IPVA" in card and "Café" in card, "Diego: his list, Casa (now everyone's) and the shared one")
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(500)
        await pg.close(); srv.kill(); time.sleep(0.4)
        # set Casa back to Andressa, then a device with no person
        d = json.load(open(f"{data}/cronologia.json")); d["app"]["todo_owner"] = {"todo.casa": "Andressa", "todo.trabalho": "Diego"}; json.dump(d, open(f"{data}/cronologia.json", "w"))
        srv = start("u-diego")
        pg, a, card = await agora(b)
        check("Revisar contrato" in card and "Pagar o IPVA" not in card, "Diego: Andressa's list is gone again")
        await pg.close(); srv.kill(); time.sleep(0.4)
        srv = start("")
        pg, a, card = await agora(b)
        check("Revisar contrato" in card and "Pagar o IPVA" in card, "a device with no person of the house sees everything")
        await pg.close(); srv.kill()
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    fake.kill()
    os.system('pkill -f "^node ' + CRONOLOGIA + '"')
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
