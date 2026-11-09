# CronologIA 1.10.0: Levar para o ResolvIA (maintenance and routines as tasks in a to-do list).
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, datetime
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
data = f"{SP}/crm-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
def post(path, body):
    urllib.request.urlopen(urllib.request.Request(f"http://127.0.0.1:8123{path}", data=json.dumps(body).encode(), method="POST")).read()
def fire(t, d): post("/dev/fire", {"event_type": t, "data": d})
def items(eid): return json.loads(urllib.request.urlopen(f"http://127.0.0.1:8123/dev/todo?entity_id={eid}").read())
def mirrored(eid): return [i for i in items(eid) if "[cr:" in (i.get("description") or "")]
def item(eid, summary): return next((i for i in mirrored(eid) if i["summary"] == summary), None)
def todo(eid, service, d): post("/dev/todo", {"entity_id": eid, "service": service, "data": d})
def stored(): return json.load(open(f"{data}/cronologia.json"))
def entries(): return stored()["score"]["entries"]
today = datetime.date.today()
async def wait_for(fn, label, tries=48):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page()
        errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Integrações"); await A.wait_for_timeout(500)
        sec = await a.locator("#resolvia").inner_text()
        check("LEVAR PARA O RESOLVIA" in sec.upper(), "Mais › Integrações has Levar para o ResolvIA")
        # 1.53.3: the points are said only with the placar on (it is on here)
        check("com a próxima data e os pontos. Concluir lá vale como feito aqui (os pontos vão para quem concluiu)" in " ".join(sec.split()), "Levar para o ResolvIA: with the placar on, it says the points go along")
        # 1.59.0: a list for the maintenance and one for the routines (here the same)
        labels = [t.strip() for t in await a.locator("#resolvia .mirror-pick .flabel").all_inner_texts()]
        check(labels == ["Manutenções", "Rotina da casa"] and await a.locator("#resolvia .switch input[aria-label='Manutenções']").count() == 0, f"a list for each, no switches ({labels})")
        await a.locator("#resolvia select[aria-label='Lista: Manutenções']").select_option("todo.casa"); await A.wait_for_timeout(500)
        await a.locator("#resolvia select[aria-label='Lista: Rotina da casa']").select_option("todo.casa"); await A.wait_for_timeout(500)
        await wait_for(lambda: stored()["app"].get("mirror") == {"maint_list": "todo.casa", "routine_list": "todo.casa"}, "settings saved")
        want = {"Trocar o filtro de água", "Limpar o ar-condicionado", "Dedetização", "Trocar a bateria do alarme", "Regar as plantas", "Lavar a louça", "Tirar o lixo", "Limpar a caixa de areia"}
        await wait_for(lambda: want <= {i["summary"] for i in mirrored("todo.casa")}, "each maintenance and routine became a task in the list")
        f = item("todo.casa", "Trocar o filtro de água")
        check(f["due"] == (today + datetime.timedelta(days=5)).isoformat() and "Manutenção do CronologIA · +30 pontos" in f["description"], f"maintenance with its next date and points ({f['due']})")
        lixo = item("todo.casa", "Tirar o lixo")
        check("T19:00" in (lixo.get("due") or ""), f"timed routine keeps the time ({lixo.get('due')})")
        regar = item("todo.casa", "Regar as plantas")
        check(regar["due"] == today.isoformat() and regar["status"] == "needs_action", "today's routine due today")
        await A.screenshot(path=f"{SP}/shots/crm-settings.png", full_page=False)
        async def count8(): return "8 tarefas na lista" in await a.locator("#resolvia").inner_text()
        await wait_for(count8, "count shown in Mais")
        # left out of the Tarefas card here
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        card = await a.locator(".panel.todos").inner_text() if await a.locator(".panel.todos").count() else ""
        check("Trocar o filtro de água" not in card and "Regar as plantas" not in card.split("TAREFAS")[-1], "mirrored tasks are not repeated in the Tarefas card")
        # the ResolvIA learns which tasks they are
        def esp(): return json.load(open(f"{data}/share/cronologia/integracao.json")).get("espelho", {}).get("todo.casa", {})
        await wait_for(lambda: esp().get(regar["uid"]) == {"pontos": 5, "tipo": "rotina"} and esp().get(f["uid"], {}).get("tipo") == "manutencao", "presence file lists them for the ResolvIA (points, type)", tries=200)

        # 1) concluded in the ResolvIA by Davi
        todo("todo.casa", "update_item", {"item": regar["uid"], "status": "completed"})
        fire("cronologia_pontos", {"acao": "somar", "chave": f"espelho|todo.casa|{regar['uid']}", "quem": "Davi", "pontos": 5, "titulo": "Regar as plantas"})
        await wait_for(lambda: any(e["who"] == "Davi" and e["points"] == 5 and e["title"] == "Regar as plantas" for e in entries()), "done in the ResolvIA by Davi: +5 for Davi")
        await wait_for(lambda: item("todo.casa", "Regar as plantas")["status"] == "needs_action" and item("todo.casa", "Regar as plantas")["due"] == (today + datetime.timedelta(days=1)).isoformat(), "the task comes back with tomorrow's date")
        check(any(k.startswith("calendar.casa|") and v.get("by") == "Davi" for k, v in stored()["checks"].items()), "today's routine marked here")

        # 2) maintenance concluded with no name (Alexa, HA screen): done, no points, next date
        ar = item("todo.casa", "Limpar o ar-condicionado")
        todo("todo.casa", "update_item", {"item": ar["uid"], "status": "completed"})
        await wait_for(lambda: "event updated calendar.casa" in open(f"{data}/fake.log").read(), "maintenance done here (event moved)", tries=60)
        await wait_for(lambda: item("todo.casa", "Limpar o ar-condicionado")["status"] == "needs_action" and item("todo.casa", "Limpar o ar-condicionado")["due"] > today.isoformat(), "and back in the list with the next date")
        check(not any(e["title"] == "Limpar o ar-condicionado" for e in entries()), "no name: no points")

        # 3) the name arrives late (Quem fez? in the ResolvIA)
        louca = item("todo.casa", "Lavar a louça")
        todo("todo.casa", "update_item", {"item": louca["uid"], "status": "completed"})
        await wait_for(lambda: item("todo.casa", "Lavar a louça")["due"] == (today + datetime.timedelta(days=1)).isoformat(), "processed without a name after a few seconds")
        fire("cronologia_pontos", {"acao": "somar", "chave": f"espelho|todo.casa|{louca['uid']}", "quem": "Aurora", "pontos": 10, "titulo": "Lavar a louça"})
        await wait_for(lambda: any(e["who"] == "Aurora" and e["points"] == 10 and e["title"] == "Lavar a louça" for e in entries()), "late name still gets the points")
        fire("cronologia_pontos", {"acao": "trocar", "chave": f"espelho|todo.casa|{louca['uid']}", "quem": "Davi"})
        await wait_for(lambda: any(e["who"] == "Davi" and e["title"] == "Lavar a louça" for e in entries()), "Foi Davi moves them")

        # 4) Desfazer in the ResolvIA
        fire("cronologia_pontos", {"acao": "desfazer", "chave": f"espelho|todo.casa|{louca['uid']}"})
        await wait_for(lambda: not any(e["title"] == "Lavar a louça" for e in entries()), "undo takes the points back")
        await wait_for(lambda: item("todo.casa", "Lavar a louça")["due"] == today.isoformat(), "and the task is due today again")

        # 5) deleted in the list: not recreated until the next date
        ded = item("todo.casa", "Dedetização")
        todo("todo.casa", "remove_item", {"item": [ded["uid"]]})
        await asyncio.sleep(4)
        check(item("todo.casa", "Dedetização") is None, "a task deleted in the list stays deleted")

        # 6) routines off: their tasks leave the list
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Integrações"); await A.wait_for_timeout(400)
        await a.locator("#resolvia select[aria-label='Lista: Rotina da casa']").select_option("")
        await wait_for(lambda: {i["summary"] for i in mirrored("todo.casa")} == {"Trocar o filtro de água", "Limpar o ar-condicionado", "Trocar a bateria do alarme"}, "routine tasks removed when switched off")
        # 7) another list: they move
        await a.locator("#resolvia select[aria-label='Lista: Manutenções']").select_option("todo.trabalho")
        await wait_for(lambda: not mirrored("todo.casa") and {i["summary"] for i in mirrored("todo.trabalho")} >= {"Trocar o filtro de água", "Limpar o ar-condicionado"}, "changing the list moves the tasks")
        # 8) the routines in another list than the maintenance
        await a.locator("#resolvia select[aria-label='Lista: Rotina da casa']").select_option("todo.casa")
        await wait_for(lambda: {"Regar as plantas", "Lavar a louça"} <= {i["summary"] for i in mirrored("todo.casa")} and "Trocar o filtro de água" not in {i["summary"] for i in mirrored("todo.casa")} and "Regar as plantas" not in {i["summary"] for i in mirrored("todo.trabalho")}, "the routines in Casa, the maintenance in Trabalho")
        await a.locator("#resolvia").screenshot(path=f"{SP}/shots/crm-duas-listas.png")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
