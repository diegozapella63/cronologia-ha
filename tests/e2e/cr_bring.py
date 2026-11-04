# CronologIA 1.13.0: Mais › Integrações › Trazer uma lista para o CronologIA.
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
data = f"{SP}/crb-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share/resolvia")
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
def post(path, body): urllib.request.urlopen(urllib.request.Request(f"http://127.0.0.1:8123{path}", data=json.dumps(body).encode(), method="POST")).read()
def items(eid="todo.casa"): return json.loads(urllib.request.urlopen(f"http://127.0.0.1:8123/dev/todo?entity_id={eid}").read())
uid = lambda s: next(i["uid"] for i in items() if i["summary"] == s)
post("/dev/todo", {"entity_id": "todo.casa", "service": "add_item", "data": {"item": "Regar as plantas"}})
post("/dev/todo", {"entity_id": "todo.casa", "service": "update_item", "data": {"item": uid("Comprar presente da Ana"), "status": "completed"}})
now_z = datetime.datetime.now(datetime.timezone.utc).isoformat().replace("+00:00", "Z")
json.dump({"app": "ResolvIA", "versao": "2.11.0", "gravado_em": now_z, "sem_prazo": [], "pontos": {"todo.casa": {"passar pano na casa": 10}},
           "repete": {"todo.casa": {uid("Passar pano na casa"): 2, uid("Pagar o IPVA"): 7, uid("Comprar presente da Ana"): 3}}}, open(f"{data}/share/resolvia/integracao.json", "w"))
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share"), stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
JS = """const [cal, a, b] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/subscribe', entity_id: cal, start: a, end: b}));
 else if (m.id === 1 && m.type === 'event') { console.log(JSON.stringify(m.event.events)); ws.close(); } };"""
def events(name, cal="calendar.casa"):
    out = json.loads(subprocess.check_output(["node", "-e", JS, cal, f"{D(-30)}T00:00:00-03:00", f"{D(60)}T00:00:00-03:00"], timeout=20).decode())
    return [e for e in out if e.get("summary") == name]
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
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Integrações"); await A.wait_for_timeout(500)
        await a.locator("#resolvia .row", has_text="Trazer uma lista para o CronologIA").click(); await A.wait_for_timeout(400)
        check("Escolha a lista" in await a.locator(".sheet").inner_text(), "sheet opens on the list choice")
        await a.locator(".sheet .bring-lists .row", has_text="Casa").click()
        await a.locator(".sheet .bring-row").first.wait_for(timeout=8000)
        rows = [t.replace("\n", " | ") for t in await a.locator(".sheet .bring-row").all_inner_texts()]
        print(rows)
        row = lambda s: next((r for r in rows if r.startswith(s)), "")
        check(rows[0].startswith("Passar pano na casa") and "+10 · volta 2 dias depois de feita · a partir de hoje" in row("Passar pano na casa"), "repeating task: points, volta 2 dias, daily-ish ones first")
        check("volta 7 dias depois de feita" in row("Pagar o IPVA") and "a partir de" in row("Pagar o IPVA"), "late repeating task keeps its date")
        check("só uma vez · hoje às 17:30" in row("Levar o carro na revisão"), "one-off task with time: once, today 17:30")
        check("volta 3 dias depois de feita" in row("Comprar presente da Ana"), "done repeating task comes, starting after its days")
        check("já existe uma rotina com esse nome" in row("Regar as plantas") and await a.locator(".sheet .bring-row.off", has_text="Regar as plantas").count() == 1, "a name that already is a routine starts unmarked")
        await A.screenshot(path=f"{SP}/shots/crb-review.png")
        # leave "Trocar a lâmpada da varanda" out too
        await a.locator(".sheet .bring-row", has_text="Trocar a lâmpada da varanda").click()
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        n = await a.locator(".sheet .bring-row:not(.off)").count()
        btn = await a.locator(".sheet .btn.primary").inner_text()
        check(f"Trazer {n} tarefas" in btn, f"button counts the marked ones ({btn.strip()})")
        await a.locator(".sheet .btn.primary").click()
        async def finished(): return "rotinas criadas" in await a.locator(".toast").inner_text()
        await wait_for(finished, "finished (toast)")
        await wait_for(lambda: len(events("Passar pano na casa")) == 1, "routines created in the calendar")
        e = events("Passar pano na casa")[0]
        check(e["start"] == D(0) and "Volta: 2 dias depois de feita" in e["description"] and "Pontos: 10" in e["description"] and not e.get("rrule"), "Passar pano: Depois de feita 2 dias, +10, today, one event")
        e = events("Pagar o IPVA")[0]
        check(e["start"] == D(-2) and "Volta: 7 dias depois de feita" in e["description"] and "Parcela única com desconto" in e["description"], "IPVA: late date kept, notes carried")
        e = events("Levar o carro na revisão")[0]
        check(e["start"].startswith(f"{D(0)}T17:30") and "Volta:" not in e["description"], "Levar o carro: once, today at 17:30")
        e = events("Comprar presente da Ana")[0]
        check(e["start"] == D(3), "done repeating task starts in its days")
        check(not events("Regar as plantas") or all("Volta" not in x.get("description", "") for x in events("Regar as plantas")), "unmarked ones are not created")
        left = sorted(i["summary"] for i in items())
        check(left == ["Regar as plantas", "Trocar a lâmpada da varanda"], f"brought ones left the list ({left})")
        log = open(f"{data}/fake.log").read()
        check("fired resolvia_esquecer" in log and uid_present(log), "the ResolvIA is told to forget them")
        check('"status":"needs_action"' in log, "the done repeating one was reopened before deleting (old ResolvIA)")
        toast = await a.locator(".toast").inner_text()
        check("4 rotinas criadas em Casa · tiradas do ResolvIA" in toast, f"toast ({toast.strip()})")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(800)
        chores = await a.locator(".panel.chores").inner_text()
        check("Passar pano na casa" in chores and "Pagar o IPVA" in chores and "atrasada há 2 dias" in chores, "Rotina da casa shows them (the late one in red)")
        check(not errs, f"no page errors {errs}")
        await b.close()
def uid_present(log):
    line = next(l for l in log.splitlines() if "fired resolvia_esquecer" in l)
    d = json.loads(line.split("resolvia_esquecer ", 1)[1])
    return d["entity_id"] == "todo.casa" and len(d["uids"]) == 4 and "Passar pano na casa" in d["tarefas"]
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
