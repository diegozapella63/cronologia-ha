# CronologIA 1.11.0: Rotina da casa "Depois de feita" (comes back N days after done, only the next one in the calendar).
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
data = f"{SP}/cra-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
BR = lambda n: (today + datetime.timedelta(days=n)).strftime("%d/%m/%Y")
JS = """const [cal, a, b] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/subscribe', entity_id: cal, start: a, end: b}));
 else if (m.id === 1 && m.type === 'event') { console.log(JSON.stringify(m.event.events)); ws.close(); } };"""
def events(name, cal="calendar.casa"):
    out = json.loads(subprocess.check_output(["node", "-e", JS, cal, f"{D(-30)}T00:00:00-03:00", f"{D(60)}T00:00:00-03:00"], timeout=20).decode())
    return [e for e in out if e.get("summary") == name]
def stored(): return json.load(open(f"{data}/cronologia.json"))
def entries(): return stored()["score"]["entries"]
def post(path, body): urllib.request.urlopen(urllib.request.Request(f"http://127.0.0.1:8123{path}", data=json.dumps(body).encode(), method="POST")).read()
async def wait_for(fn, label, tries=48):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)

async def tap_done(A, a, loc, who="Davi"):
    await loc.click()
    await A.wait_for_timeout(400)
    if await a.locator(".sheet .who-btn").count():
        await a.locator(".sheet .who-btn", has_text=who).click()
        await A.wait_for_timeout(300)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        print("goto", flush=True); await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500); print("loaded", flush=True)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }")  # Rotina da casa: the done ones unfolded
        a = A.locator("cronologia-app")
        # 1) create: Novo › Rotina › Depois de feita
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Limpar o banheiro")
        print("pick", flush=True); await a.locator(".sheet .seg-grid button", has_text="Depois de feita").click(timeout=5000); await A.wait_for_timeout(200); print("picked", flush=True)
        form = await a.locator(".sheet").inner_text()
        check("dias depois de feita" in form and "Primeira vez" in form.replace("PRIMEIRA VEZ", "Primeira vez") and "Até quando".upper() not in form.upper(), "form: Volta N dias depois de feita, Primeira vez, no end date")
        check(await a.locator(".sheet input[aria-label='Dias depois de feita']").input_value() == "2", "starts with 2 days")
        await A.screenshot(path=f"{SP}/shots/cra-form.png")
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1, "one single event in the calendar")
        ev = events("Limpar o banheiro")[0]
        check(not ev.get("rrule") and ev["start"] == D(0) and "Volta: 2 dias depois de feita" in ev["description"] and "Pontos: 10" in ev["description"], f"no repetition rule, today, Volta in the notes ({ev['start']}, {ev.get('rrule')})")
        row = a.locator(".panel.chores .chore", has_text="Limpar o banheiro")
        await wait_for(lambda: True, "-")
        await row.wait_for(timeout=8000)
        sub = await row.locator("small").inner_text()
        check("volta 2 dias depois" in sub, f"Rotina da casa shows it today ({sub})")
        # 2) done here: moves to today + 2, points to Davi
        await tap_done(A, a, row.locator(".chk"))
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(2), "Feito moves it to 2 days from now")
        ev = events("Limpar o banheiro")[0]
        check(f"Feito em: {BR(0)}" in ev["description"] and len(events("Limpar o banheiro")) == 1, "today in its history, still one event")
        await wait_for(lambda: any(e["title"] == "Limpar o banheiro" and e["who"] == "Davi" and e["points"] == 10 for e in entries()), "+10 for Davi")
        async def shown_done(): return "feito por Davi" in await a.locator(".panel.chores .chore.done", has_text="Limpar o banheiro").inner_text()
        await wait_for(shown_done, "stays in today's list as done, saying when it comes back")
        sub = await a.locator(".panel.chores .chore.done", has_text="Limpar o banheiro").locator("small").inner_text()
        check("volta" in sub, f"done line ({sub})")
        # 3) Foi Aurora (toast) moves the points; unchecking in the card brings it back to today, points off
        await a.locator(".toast button", has_text="Foi Aurora").click()
        await wait_for(lambda: any(e["title"] == "Limpar o banheiro" and e["who"] == "Aurora" for e in entries()) and not any(e["title"] == "Limpar o banheiro" and e["who"] == "Davi" for e in entries()), "Foi Aurora moves the points")
        await A.wait_for_timeout(500)
        await a.locator(".panel.chores .chore.done", has_text="Limpar o banheiro").locator(".chk").click()
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(0) and BR(0) not in events("Limpar o banheiro")[0]["description"], "unchecking brings it back to today, out of the history")
        await wait_for(lambda: not any(e["title"] == "Limpar o banheiro" for e in entries()), "and takes the points back")
        # 4) done from the event sheet, then Desfazer there
        await a.locator(".panel.chores .chore", has_text="Limpar o banheiro").locator(".chore-tx").click(); await A.wait_for_timeout(400)
        await tap_done(A, a, a.locator(".sheet .kind-act"), "Aurora")
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(2), "Feito in the event sheet moves it too")
        await wait_for(lambda: any(e["title"] == "Limpar o banheiro" and e["who"] == "Aurora" for e in entries()), "points to who was picked")
        await A.wait_for_timeout(500)
        await a.locator(".panel.chores .chore.done", has_text="Limpar o banheiro").locator(".chk").click()
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(0), "and unchecking undoes it")
        # 5) late: first time 3 days ago, every 3 days
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Trocar a areia")
        print("pick", flush=True); await a.locator(".sheet .seg-grid button", has_text="Depois de feita").click(timeout=5000); await A.wait_for_timeout(200); print("picked", flush=True)
        await a.locator(".sheet input[aria-label='Dias depois de feita']").fill("3")
        await a.locator(".sheet #kf-date").evaluate("(el, v) => { el.value = v; el.dispatchEvent(new Event('change', {bubbles: true})); }", D(-3))
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        await wait_for(lambda: len(events("Trocar a areia")) == 1 and events("Trocar a areia")[0]["start"] == D(-3), "created 3 days ago")
        late = a.locator(".panel.chores .chore", has_text="Trocar a areia")
        await late.wait_for(timeout=8000)
        check("atrasada há 3 dias" in await late.locator("small").inner_text(), "a late one stays in the list, saying how late")
        # 1.37.0: the list follows the part of the day; among those for any time, the late ones come first
        import re as _re
        rows = await a.locator(".panel.chores .chore:not(.done)").evaluate_all("(els) => els.map((e) => [e.querySelector('.chore-tx b').textContent.trim(), e.querySelector('small').textContent])")
        anytime = [n for n, sub in rows if not _re.search(r"\d\d:\d\d|de manhã|à tarde|à noite", sub)]
        check(anytime and anytime[0] == "Trocar a areia", f"late ones first, among those for any time ({anytime[:3]})")
        await A.screenshot(path=f"{SP}/shots/cra-card.png")
        # 6) NFC / automation with quem
        post("/dev/fire", {"event_type": "cronologia_feito", "data": {"nome": "Trocar a areia", "quem": "Aurora"}})
        await wait_for(lambda: events("Trocar a areia")[0]["start"] == D(3), "cronologia_feito moves a late one to today + 3")
        await wait_for(lambda: any(e["title"] == "Trocar a areia" and e["who"] == "Aurora" for e in entries()), "and Aurora gets the points")
        # 7) event sheet and edit
        await a.locator(".panel.chores .chore", has_text="Limpar o banheiro").locator(".chore-tx").click(); await A.wait_for_timeout(400)
        sheet = await a.locator(".sheet").inner_text()
        check("Volta 2 dias depois de feita (na agenda, só a próxima vez)" in sheet, "the event sheet explains it")
        await a.locator(".sheet .btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        chips = await a.locator(".sheet .seg-grid button").all_inner_texts()
        check([c.strip() for c in chips] == ["Depois de feita"], f"editing keeps it a Depois de feita routine ({chips})")
        check("PRÓXIMA VEZ" in (await a.locator(".sheet").inner_text()).upper(), "date is the next time")
        await a.locator(".sheet input[aria-label='Dias depois de feita']").fill("4")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click()
        await wait_for(lambda: "Volta: 4 dias depois de feita" in events("Limpar o banheiro")[0]["description"] and not events("Limpar o banheiro")[0].get("rrule"), "saved: comes back 4 days after done")
        # 8) Levar para o ResolvIA: a late one goes with its (past) date; done there moves it here
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Integrações"); await A.wait_for_timeout(500)
        await a.locator("#resolvia select[aria-label='Lista: Rotina da casa']").select_option("todo.casa"); await A.wait_for_timeout(500)
        def item(s): return next((i for i in json.loads(urllib.request.urlopen("http://127.0.0.1:8123/dev/todo?entity_id=todo.casa").read()) if i["summary"] == s and "[cr:" in (i.get("description") or "")), None)
        await wait_for(lambda: item("Limpar o banheiro") and item("Limpar o banheiro")["due"] == D(0), "in the ResolvIA list with today's date")
        it = item("Limpar o banheiro")
        post("/dev/todo", {"entity_id": "todo.casa", "service": "update_item", "data": {"item": it["uid"], "status": "completed"}})
        post("/dev/fire", {"event_type": "cronologia_pontos", "data": {"acao": "somar", "chave": f"espelho|todo.casa|{it['uid']}", "quem": "Davi", "pontos": 10, "titulo": "Limpar o banheiro"}})
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(4), "concluded in the ResolvIA: here it moves to today + 4", tries=80)
        await wait_for(lambda: item("Limpar o banheiro")["due"] == D(4) and item("Limpar o banheiro")["status"] == "needs_action", "and comes back to the list with that date", tries=80)
        await wait_for(lambda: any(e["title"] == "Limpar o banheiro" and e["who"] == "Davi" for e in entries()), "Davi gets the points")
        post("/dev/fire", {"event_type": "cronologia_pontos", "data": {"acao": "desfazer", "chave": f"espelho|todo.casa|{it['uid']}"}})
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(0), "Desfazer in the ResolvIA moves it back", tries=80)
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
