# CronologIA 1.10.1: Tarefas ordered by how often they repeat (todo dia first), with the repetition shown.
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
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share/resolvia")
json.dump({"app": {"todo_undated": True}}, open(f"{data}/cronologia.json", "w"))
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
def items(eid): return json.loads(urllib.request.urlopen(f"http://127.0.0.1:8123/dev/todo?entity_id={eid}").read())
uid = lambda eid, s: next(i["uid"] for i in items(eid) if i["summary"] == s)
now_z = datetime.datetime.now(datetime.timezone.utc).isoformat().replace("+00:00", "Z")
def presence(repete):
    json.dump({"app": "ResolvIA", "versao": "2.9.1", "gravado_em": now_z, "sem_prazo": [], "pontos": {}, **({"repete": repete} if repete is not None else {})}, open(f"{data}/share/resolvia/integracao.json", "w"))
presence(None)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
async def undated(a):
    head = a.locator(".panel.todos .chores-head.sub")
    rows = a.locator(".panel.todos .chores-head.sub ~ .chore .chore-tx")
    return [await rows.nth(k).inner_text() for k in range(await rows.count())]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".panel.todos").wait_for(timeout=10000)
        if await a.locator(".panel.todos .add-line", has_text="Mais").count(): await a.locator(".panel.todos .add-line", has_text="Mais").click(); await A.wait_for_timeout(300)
        u = [t.split("\n")[0] for t in await undated(a)]
        check(u == ["Passar pano na casa", "Café", "Leite"], f"older ResolvIA: by list and name ({u})")
        # the ResolvIA 2.9.1 says Leite comes back every day and Passar pano every week
        presence({"todo.shopping_list": {uid("todo.shopping_list", "Leite"): 1}, "todo.casa": {uid("todo.casa", "Passar pano na casa"): 7}})
        await A.wait_for_timeout(61000)  # the ResolvIA file is read at most once a minute
        urllib.request.urlopen(urllib.request.Request("http://127.0.0.1:8123/dev/todo", data=json.dumps({"entity_id": "todo.casa", "service": "update_item", "data": {"item": uid("todo.casa", "Trocar a lâmpada da varanda"), "description": "nova"}}).encode(), method="POST")).read()
        async def ordered():
            u = await undated(a)
            return [t.split("\n")[0] for t in u] == ["Leite", "Passar pano na casa", "Café"]
        for _ in range(40):
            if await ordered(): break
            await A.wait_for_timeout(250)
        u = await undated(a)
        check(await ordered(), f"todo dia first, then toda semana, then the ones that don't repeat ({[t.replace(chr(10), ' | ') for t in u]})")
        check("todo dia" in u[0] and "toda semana" in u[1] and "todo" not in u[2] and "semana" not in u[2], "each one says how often it comes back")
        await a.locator(".panel.todos .chore-tx", has_text="Leite").click(); await A.wait_for_timeout(400)
        check("Volta todo dia depois de concluída" in await a.locator(".sheet").inner_text(), "the task sheet says it too")
        await a.locator(".sheet .icon-btn[aria-label='Fechar']").click(); await A.wait_for_timeout(400)
        await a.locator(".panel.todos .chores-head.sub").scroll_into_view_if_needed()
        await A.screenshot(path=f"{SP}/shots/crf-tasks.png")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
