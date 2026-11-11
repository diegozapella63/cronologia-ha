# CronologIA 1.81.0: Amanhã, ao lado do Pular: esta vez de uma rotina ou manutenção fica para amanhã (não para a próxima),
# sem pontos e sem mexer no histórico; Desfazer volta. Uma rotina que a agenda repete não tem o Amanhã.
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
def events(name, cal="calendar.casa", fim=60):
    out = json.loads(subprocess.check_output(["node", "-e", JS, cal, f"{D(-30)}T00:00:00-03:00", f"{D(fim)}T00:00:00-03:00"], timeout=20).decode())
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

CREATE = """const [cal, ev] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/create', entity_id: cal, event: JSON.parse(ev)}));
 else if (m.id === 1) { console.log(JSON.stringify(m)); ws.close(); } };"""
def create(ev, cal="calendar.casa"):
    print(subprocess.check_output(["node", "-e", CREATE, cal, json.dumps(ev)], timeout=20).decode().strip()[:120])
create({"summary": "Dobrar roupa", "dtstart": D(0), "dtend": D(1), "description": "#rotina\nPontos: 20\nVolta: 7 dias depois de feita\nFeito em: " + BR(-7)})
create({"summary": "Levar o lixo", "dtstart": D(-3), "dtend": D(-2), "rrule": "FREQ=DAILY", "description": "#rotina\nPontos: 5"})
create({"summary": "Limpar paredes", "dtstart": D(-2), "dtend": D(-1), "description": "#manutenção\nA cada: 6 meses\nAvisar: 3 dias antes\nPontos: 100"})
time.sleep(1.5)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for largura in (390, 320):
            ctx = await b.new_context(viewport={"width": largura, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
            A = await ctx.new_page(); errs = []
            A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(2000)
            a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
            rows = lambda name: a.locator(".panel.chores .chore", has_text=name)
            # Dobrar roupa, de hoje: Pular e Amanhã lado a lado, do mesmo tamanho
            await rows("Dobrar roupa").first.locator(".chore-tx").click(); await A.wait_for_timeout(500)
            skip, amanha = sheet.locator(".btn.kind-skip", has_text="Pular"), sheet.locator(".btn.kind-tomorrow")
            check(await skip.count() == 1 and await amanha.count() == 1 and (await amanha.inner_text()).strip() == "Amanhã", f"{largura}: the sheet: Pular and Amanhã")
            c0, c1 = await skip.bounding_box(), await amanha.bounding_box()
            check(abs(c0["y"] - c1["y"]) < 1 and abs(c0["width"] - c1["width"]) < 1 and abs(c0["height"] - c1["height"]) < 1 and c0["x"] < c1["x"],
                  f"{largura}: side by side, the same size ({c0}, {c1})")
            cut = await sheet.locator(".kind-later .btn").evaluate_all("bs => bs.filter(b => b.scrollWidth > b.clientWidth + 1).map(b => b.textContent)")
            check(not cut, f"{largura}: nothing cut {cut}")
            await sheet.screenshot(path=f"{data}/amanha-sheet-{largura}.png")
            if largura == 320:
                await ctx.close()
                continue
            await amanha.click(); await A.wait_for_timeout(1500)
            toast = await a.locator(".toast").inner_text() if await a.locator(".toast").count() else ""
            check("fica para amanhã" in toast and "Desfazer" in toast, f"toast: fica para amanhã ({toast!r})")
            ev = events("Dobrar roupa")
            check(len(ev) == 1 and ev[0]["start"] == D(1) and "Feito em: " + BR(-7) in (ev[0].get("description") or ""), f"moved to tomorrow, history as it was ({[(e['start'], e.get('description')) for e in ev]})")
            check(await rows("Dobrar roupa").count() == 0, "it leaves today's list")
            check(not (stored().get("score") or {}).get("entries") and not any("Dobrar" in json.dumps(v) for v in (stored().get("checks") or {}).values()), "no points, not done nor skipped")
            await a.locator(".toast button", has_text="Desfazer").click(); await A.wait_for_timeout(1500)
            ev = events("Dobrar roupa")
            check(len(ev) == 1 and ev[0]["start"] == D(0), f"Desfazer: back to today ({[e['start'] for e in ev]})")
            await wait_for(lambda: rows("Dobrar roupa").count(), "back on today's list")
            # Levar o lixo (todo dia na agenda): Pular, sem o Amanhã
            await rows("Levar o lixo").first.locator(".chore-tx").click(); await A.wait_for_timeout(500)
            check(await sheet.locator(".btn.kind-skip", has_text="Pular").count() == 1 and await sheet.locator(".btn.kind-tomorrow").count() == 0, "a daily routine: Pular, no Amanhã")
            await A.evaluate("() => document.querySelector('cronologia-app')._closeSheet()"); await A.wait_for_timeout(600)
            # a late maintenance: Amanhã -> tomorrow (not 6 months later)
            mt = a.locator(".panel.chores .maint", has_text="Limpar paredes")
            await mt.locator(".maint-main").click(); await A.wait_for_timeout(500)
            amanha = sheet.locator(".btn.kind-tomorrow")
            check(await amanha.count() == 1 and await sheet.locator(".btn.kind-skip", has_text="Pular").count() == 1, "the maintenance's sheet: Pular and Amanhã")
            await amanha.click(); await A.wait_for_timeout(1500)
            ev = events("Limpar paredes", fim=240)
            check(len(ev) == 1 and ev[0]["start"] == D(1), f"the maintenance: tomorrow ({[e['start'] for e in ev]})")
            check(await a.locator(".panel.chores .maint", has_text="Limpar paredes").count() == 0 or "amanhã" in (await a.locator(".panel.chores .maint", has_text="Limpar paredes").inner_text()).lower(),
                  "no longer late")
            check(not errs, f"no page errors {errs[:2]}")
            await ctx.close()
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
