# Mais › Integrações shows "Conectado ao ResolvIA <versão>" when share/resolvia/integracao.json is fresh.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, datetime
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok = 0
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if not c: raise SystemExit(1)
    n_ok += 1
data = f"{SP}/crp-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share/resolvia")
def presence(age_h):
    t = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(hours=age_h)
    json.dump({"app": "ResolvIA", "versao": "2.6.0", "gravado_em": t.isoformat().replace("+00:00", "Z"), "sem_prazo": ["todo.problem_list"]}, open(f"{data}/share/resolvia/integracao.json", "w"))
presence(0)
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.0)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844})
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app")
        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(300)
        await open_more(a, "Integrações"); await pg.wait_for_timeout(600)
        st = await a.locator("#resolvia .ai-state").inner_text()
        check("Conectado ao ResolvIA 2.6.0" in st and "4 listas" in st and "repetição do ResolvIA" in st and "atrasadas" in st, f"connected with version ({st})")
        check("ok" in await a.locator("#resolvia .ai-state").get_attribute("class"), "green dot")
        row = await a.locator("#resolvia .row", has_text="Problem List").inner_text()
        check("prazos desligados no ResolvIA" in row, f"list with deadlines off in the ResolvIA ({row.strip()})")
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(500)
        card = await a.locator(".panel.todos").inner_text()
        check("Dispositivo sem resposta" not in card and "Pagar o IPVA" in card, "its dates don't show as tasks on Agora")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed")
