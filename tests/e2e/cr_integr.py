# CronologIA 1.16.0: Mais › Integrações › Usar a integração (ResolvIA and GerencIA), off by default.
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
GREPO = GERENCIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/cri-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{data}/gdata"); os.makedirs(f"{SP}/shots", exist_ok=True)
# an install from before 1.16.0: scoreboard on, Levar para o ResolvIA set up
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}, "mirror": {"list": "todo.casa", "maint": True, "routine": False}}}, open(f"{data}/cronologia.json", "w"))
subprocess.run(["python3", f"{FIX}/gerencia_dados.py", f"{data}/gdata/gerencia.json"], check=True)
procs = []
genv = dict(os.environ, TZ="America/Sao_Paulo", GERENCIA_DEV="1", GERENCIA_PORTA="8191", GERENCIA_DATA=f"{data}/gdata", GERENCIA_SHARE=f"{data}/share/gerencia", GERENCIA_URL_INTERNA="http://127.0.0.1:8191", GERENCIA_HA_API="http://127.0.0.1:1/api")
procs.append(subprocess.Popen(["python3", f"{GREPO}/gerencia/app/server.py"], env=genv, stdout=open(f"{data}/g.log", "w"), stderr=subprocess.STDOUT))
procs.append(subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT))
time.sleep(0.8)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
def post(path, body): urllib.request.urlopen(urllib.request.Request(f"http://127.0.0.1:8123{path}", data=json.dumps(body).encode(), method="POST")).read()
def fire(t, d): post("/dev/fire", {"event_type": t, "data": d})
def items(eid): return json.loads(urllib.request.urlopen(f"http://127.0.0.1:8123/dev/todo?entity_id={eid}").read())
def mirrored(eid): return [i for i in items(eid) if "[cr:" in (i.get("description") or "")]
def stored(): return json.load(open(f"{data}/cronologia.json"))
def presence(): return json.load(open(f"{data}/share/cronologia/integracao.json"))
def entries(): return (stored().get("score") or {}).get("entries") or []
today = datetime.date.today().isoformat()
CALL = """async ([type, payload]) => { try { await document.querySelector('cronologia-app').api.call(type, payload); return 'ok'; } catch (e) { return (e && (e.code || e.message)) || String(e); } }"""
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
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1800)
        a = A.locator("cronologia-app")
        agora = await a.locator("main").inner_text()
        check(await a.locator(".panel.todos").count() == 0, "off by default: no ResolvIA tasks in Agora")
        check("Contas do GerencIA" not in agora, "off by default: no GerencIA bills in Agora")
        await A.wait_for_timeout(5000)  # the mirror runs 4 s after start
        check(not mirrored("todo.casa"), "off: Levar para o ResolvIA writes nothing, even set up")
        check(presence().get("resolvia") is False and presence().get("espelho") == {}, "share file tells the ResolvIA it is off")
        r = await A.evaluate(CALL, ["cronologia/todo/set", {"entity_id": "todo.casa", "uid": "x", "done": True}])
        check(r == "resolvia_off", f"server refuses tasks ({r})")
        r = await A.evaluate(CALL, ["cronologia/contas/pagar", {"conta": "x"}])
        check(r == "gerencia_off", f"server refuses bills ({r})")
        fire("cronologia_pontos", {"acao": "somar", "chave": f"resolvia|todo.casa|u1|{today}", "quem": "Diego", "pontos": 10, "titulo": "Lavar o carro", "origem": "ResolvIA"})
        await A.wait_for_timeout(800)
        check(not entries(), "points from the ResolvIA don't count while off")

        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Integrações").click(); await A.wait_for_timeout(500)
        res = a.locator("#resolvia"); ger = a.locator("#gerencia")
        sw_r = res.locator("input[aria-label='Usar a integração com o ResolvIA']")
        sw_g = ger.locator("input[aria-label='Usar a integração com o GerencIA']")
        check(await sw_r.count() == 1 and not await sw_r.is_checked(), "Tarefas do ResolvIA: Usar a integração, off")
        rt = await res.inner_text()
        check("Conectado" not in rt and await res.locator("select").count() == 0 and "Mostrar no calendário" not in rt and "Trazer uma lista" not in rt, "off: only the switch")
        check(await sw_g.count() == 1 and not await sw_g.is_checked() and "Conectado" not in await ger.inner_text(), "Contas do GerencIA: Usar a integração, off, only the switch")
        await A.screenshot(path=f"{SP}/shots/cri-off.png", full_page=True)

        # ResolvIA on
        await sw_r.check(); await A.wait_for_timeout(800)
        check(stored()["app"].get("resolvia_on") is True, "on is saved (resolvia_on)")
        rt = await res.inner_text()
        check("Lendo as listas" in rt or "Conectado" in rt, "on: the state and the lists")
        check("LEVAR PARA O RESOLVIA" in rt.upper() and "Mostrar no calendário" in rt, "on: Levar and the options are back")
        await wait_for(lambda: presence().get("resolvia") is True, "share file: on")
        await wait_for(lambda: len(mirrored("todo.casa")) >= 2, "on: Levar para o ResolvIA writes the maintenance tasks")
        fire("cronologia_pontos", {"acao": "somar", "chave": f"resolvia|todo.casa|u1|{today}", "quem": "Diego", "pontos": 10, "titulo": "Lavar o carro", "origem": "ResolvIA"})
        await wait_for(lambda: any(e.get("title") == "Lavar o carro" for e in entries()), "on: points from the ResolvIA count")
        # GerencIA on
        await sw_g.check(); await A.wait_for_timeout(300)
        async def g_on(): return "Conectado ao GerencIA" in await ger.inner_text()
        await wait_for(g_on, "GerencIA on: connected")
        await A.screenshot(path=f"{SP}/shots/cri-on.png", full_page=True)
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        check(await a.locator(".panel.todos").count() == 1, "Agora: ResolvIA tasks back")
        check("Contas do GerencIA" in await a.locator("main").inner_text(), "Agora: GerencIA bills back")

        # both off again
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Integrações").click(); await A.wait_for_timeout(400)
        await sw_r.uncheck(); await A.wait_for_timeout(300)
        await sw_g.uncheck(); await A.wait_for_timeout(300)
        await wait_for(lambda: "resolvia_on" not in stored()["app"] and "gerencia_on" not in stored()["app"], "off saved (unset)")
        await wait_for(lambda: not mirrored("todo.casa"), "turning off takes the Levar tasks out of the list")
        check(stored()["app"].get("mirror") == {"list": "todo.casa", "maint": True, "routine": False}, "the Levar settings are kept for next time")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        check(await a.locator(".panel.todos").count() == 0 and "Contas do GerencIA" not in await a.locator("main").inner_text(), "Agora: both gone again")
        await a.locator(".fab, .tab.fab").first.click(); await A.wait_for_timeout(400)
        sheet = await a.locator(".sheet").inner_text()
        check("Tarefa" not in sheet.split("\n"), f"Novo: no Tarefa while the ResolvIA is off")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
