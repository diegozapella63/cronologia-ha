# CronologIA 1.17.4: Depois de feita on a calendar that can't change events (Google): recreated.
# CronologIA 1.11.0: Rotina da casa "Depois de feita" (comes back N days after done, only the next one in the calendar).
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
data = f"{SP}/crgo-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media", FAKE_NO_UPDATE="calendar.casa")
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
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }")  # Rotina da casa: the done ones unfolded
        a = A.locator("cronologia-app")
        # Casa behaves like a Google calendar: it creates and deletes, but can't change events
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Limpar o banheiro")
        await a.locator(".sheet .seg-grid button", has_text="Depois de feita").click(); await A.wait_for_timeout(200)
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1, "created in Casa")
        first = events("Limpar o banheiro")[0]
        row = a.locator(".panel.chores .chore", has_text="Limpar o banheiro")
        await row.wait_for(timeout=8000)
        await tap_done(A, a, row.locator(".chk"))
        await A.wait_for_timeout(600)
        toast = await a.locator(".toast").inner_text() if await a.locator(".toast").count() else ""
        check("não deixa mudar" not in toast, f"no error on Feito ({toast[:60]!r})")
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1 and events("Limpar o banheiro")[0]["start"] == D(2), "Feito: one event, on the next date (recreated)")
        ev = events("Limpar o banheiro")[0]
        check(ev["uid"] != first["uid"] and f"Feito em: {BR(0)}" in ev["description"], "a new event, with today in its history")
        async def shown_done(): return "feito por Davi" in await a.locator(".panel.chores .chore.done", has_text="Limpar o banheiro").inner_text()
        await wait_for(shown_done, "still shows as done today")
        await wait_for(lambda: any(e["title"] == "Limpar o banheiro" and e["who"] == "Davi" for e in entries()), "points to Davi")
        # Desfazer (uncheck): back to today, out of the history
        await A.wait_for_timeout(500)
        await a.locator(".panel.chores .chore.done", has_text="Limpar o banheiro").locator(".chk").click()
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1 and events("Limpar o banheiro")[0]["start"] == D(0) and BR(0) not in events("Limpar o banheiro")[0]["description"], "unchecking brings it back to today")
        await wait_for(lambda: not any(e["title"] == "Limpar o banheiro" for e in entries()), "and takes the points back")
        # and Feito again works
        await A.wait_for_timeout(800)
        row = a.locator(".panel.chores .chore", has_text="Limpar o banheiro")
        await tap_done(A, a, row.locator(".chk"))
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1 and events("Limpar o banheiro")[0]["start"] == D(2), "Feito again: next date")
        # a copy left on the next date by an earlier try: Feito doesn't double it
        await A.wait_for_timeout(600)
        await a.locator(".panel.chores .chore.done", has_text="Limpar o banheiro").locator(".chk").click()
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1 and events("Limpar o banheiro")[0]["start"] == D(0), "back to today")
        desc = events("Limpar o banheiro")[0]["description"]
        await A.evaluate("([d2, d3, desc]) => document.querySelector('cronologia-app').api.createEvent('calendar.casa', { summary: 'Limpar o banheiro', start: d2, end: d3, description: desc })", [D(2), D(3), desc])
        await wait_for(lambda: len(events("Limpar o banheiro")) == 2, "a leftover copy on the next date")
        await A.wait_for_timeout(1500)
        row = a.locator(".panel.chores .chore", has_text="Limpar o banheiro").first
        await tap_done(A, a, row.locator(".chk"))
        await wait_for(lambda: [e["start"] for e in events("Limpar o banheiro")] == [D(2)], "Feito: the copy is reused, one event only")
        # Editar works too (deleted and created again with the change): +20 points
        await A.wait_for_timeout(800)
        await a.locator(".panel.chores .chore", has_text="Limpar o banheiro").first.locator(".chore-tx").click(); await A.wait_for_timeout(500)
        check(await a.locator(".sheet .btn", has_text="Editar").count() == 1, "the routine has Editar on a calendar that can't change events")
        await a.locator(".sheet .btn", has_text="Editar").click(); await A.wait_for_timeout(500)
        await a.locator(".sheet .pick", has_text="+20").click()
        await a.locator(".sheet .btn.primary", has_text="Salvar").click()
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1 and "Pontos: 20" in events("Limpar o banheiro")[0]["description"], "saved: one event, now worth 20 points")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Lista").click(); await A.wait_for_timeout(1000)
        rows = [t.replace("\n", " / ") for t in await a.locator(".panel.agenda .ev-row", has_text="Limpar o banheiro").all_inner_texts()]
        # today: done there (the event is on its next date); the next date: open, worth 20
        check(len(rows) == 2 and "+20" in rows[1], f"the calendar shows +20 on it, and today's done one ({rows})")
        await A.screenshot(path=f"{SP}/shots/crgo-lista.png")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in [fake, app]: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
