# CronologIA 1.86.0: uma rotina que volta N dias depois de feita, feita hoje num calendário que não muda eventos (Google),
# e uma cópia dela que o calendário deixou hoje (com hoje no Feito em): no Calendário ela aparece feita (sem os botões de
# quem fez e sem outra linha igual), a janela diz Feito, e o app tira a cópia do calendário.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
import asyncio, json, os, subprocess, time, shutil, urllib.request, datetime, sys
from playwright.async_api import async_playwright
REPO = CRONOLOGIA
SP = _os.environ["E2E_TMP"]
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crparada-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}, "who_pick": True}}, open(f"{data}/cronologia.json", "w"))
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media", FAKE_NO_UPDATE="calendar.casa")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.3)
today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
JS = """const [cal, a, b] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/subscribe', entity_id: cal, start: a, end: b}));
 else if (m.id === 1 && m.type === 'event') { console.log(JSON.stringify(m.event.events)); ws.close(); } };"""
def events(name, cal="calendar.casa"):
    out = json.loads(subprocess.check_output(["node", "-e", JS, cal, f"{D(-30)}T00:00:00-03:00", f"{D(60)}T00:00:00-03:00"], timeout=20).decode())
    return [e for e in out if e.get("summary") == name]
BR = lambda n: (today + datetime.timedelta(days=n)).strftime("%d/%m/%Y")
MK = """const [cal, day, nx, desc] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/create', entity_id: cal, event: {summary: 'Esvaziar lixos', dtstart: day, dtend: nx, description: desc}}));
 else if (m.id === 1) { ws.close(); } };"""
def create(day, nx, desc): subprocess.check_output(["node", "-e", MK, "calendar.casa", day, nx, desc], timeout=20)
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
        create(D(0), D(1), "#rotina\nPontos: 5\nVolta: 1 dia depois de feita")
        await wait_for(lambda: len(events("Esvaziar lixos")) == 1, "the routine is in the calendar, today")
        await A.reload(); await A.wait_for_timeout(2000)
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(1200)
        line = a.locator(".ev-line", has_text="Esvaziar lixos").first
        await line.locator(".qw-btn").first.click()
        await wait_for(lambda: [e["start"] for e in events("Esvaziar lixos")] == [D(1)], "done: recreated tomorrow")
        moved = events("Esvaziar lixos")[0]
        check(BR(0) in moved["description"], "with today in its history")
        # the calendar leaves a copy on today, with today in its history (as seen on a Google calendar)
        create(D(0), D(1), moved["description"])
        await wait_for(lambda: len(events("Esvaziar lixos")) == 2, "a copy left on today")
        await A.wait_for_timeout(1500)
        rows = a.locator(".ev-row", has_text="Esvaziar lixos")
        check(await rows.count() == 1, f"Calendário, today: one line ({await rows.count()})")
        check(await a.locator(".ev-line", has_text="Esvaziar lixos").locator(".qw-btn").count() == 0, "no buttons of who did it: done")
        await A.screenshot(path=f"{SP}/shots/crparada-cal.png")
        await rows.first.click(); await A.wait_for_timeout(600)
        st = a.locator(".sheet .kind-state")
        check(await st.count() == 1 and "Feito hoje" in await st.inner_text(), f"the window: Feito hoje ({await st.all_inner_texts()})")
        check(await a.locator(".sheet .kind-act, .sheet .who-btn").count() == 0, "the window: nothing to mark")
        await A.screenshot(path=f"{SP}/shots/crparada-janela.png")
        await a.locator(".sheet button[aria-label='Fechar']").first.click(); await A.wait_for_timeout(500)
        # Agora: done once
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(800)
        txt = await a.inner_text()
        check("Esvaziar lixos" not in txt.split("Concluídas")[0] if "Concluídas" in txt else True, "Agora: not to do")
        # the app takes the copy away (not right after its own move: 30 s)
        await wait_for(lambda: [e["start"] for e in events("Esvaziar lixos")] == [D(1)], "the copy left on today leaves the calendar", tries=200)
        check("cópia de Esvaziar lixos" in open(f"{data}/app.log").read(), "said in the log")
        check(not errs, f"no page errors {errs[:3]}")
        await b.close()

try:
    asyncio.run(main())
finally:
    fake.kill(); app.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
