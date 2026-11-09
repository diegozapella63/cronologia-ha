# CronologIA 1.28.0: Recompensas › Próximas rotinas: mark a future routine done earlier; it scores now and comes back counting from today.
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
data = f"{SP}/crfu-data"; shutil.rmtree(data, ignore_errors=True)
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

CREATE = """const [cal, ev] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/create', entity_id: cal, event: JSON.parse(ev)}));
 else if (m.id === 1) { console.log(JSON.stringify(m)); ws.close(); } };"""
def create(cal, ev): return subprocess.check_output(["node", "-e", CREATE, cal, json.dumps(ev)], timeout=20).decode()
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        await A.evaluate("() => document.querySelector('cronologia-app')._scorePrefs({ enabled: true, manual: true, participants: ['Aurora', 'Davi'] })")
        await A.evaluate("() => document.querySelector('cronologia-app')._saveAppPrefs({ who_pick: true })")
        await A.wait_for_timeout(800)
        # a routine that comes back 2 days after done, due tomorrow; another one due in 5 days
        create_out = (create("calendar.casa", {"summary": "Limpar o banheiro", "dtstart": D(1), "dtend": D(2), "description": "#rotina\nPontos: 10\nVolta: 2 dias depois de feita"}))
        create_out = (create("calendar.casa", {"summary": "Lavar o carro", "dtstart": D(5), "dtend": D(6), "description": "#rotina\nPontos: 20\nVolta: 7 dias depois de feita"}))
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1 and len(events("Lavar o carro")) == 1, "two routines in the calendar")
        await A.wait_for_timeout(1500)
        # 1.28.2: the repeat icon also on a routine that comes back N days after done, and on maintenance
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        await a.locator(".seg button", has_text="Lista").click(); await A.wait_for_timeout(1000)
        row = a.locator(".ev-row", has_text="Limpar o banheiro").first
        check(await row.locator(".ev-rep").count() == 1 and await row.locator(".ev-rep").get_attribute("title") == "Volta 2 dias depois de feita", "the repeat icon on a routine that comes back after done")
        mrow = a.locator(".ev-row", has_text="Trocar o filtro de água").first
        print("maint rows:", await a.locator(".ev-row", has_text="Trocar o filtro").count(), "line:", await a.locator(".ev-line", has_text="Trocar o filtro").count(), "qwho:", await a.locator(".ev-line", has_text="Trocar o filtro").locator(".qwho").count())
        mline = a.locator(".ev-line", has_text="Trocar o filtro de água").first
        has_rep = await mrow.locator(".ev-rep").count() == 1 and "A cada 6 meses" in (await mrow.locator(".ev-rep").get_attribute("title"))
        check(has_rep or await mline.locator(".qwho").count() == 1, "a maintenance: the repeat icon, or the initials in its place")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        await A.screenshot(path=f"{SP}/shots/crfu-before.png")
        print("catalog:", await A.evaluate("() => (document.querySelector('cronologia-app')._ix().catalog || []).filter(c => c.kind === 'rotina').map(c => [c.summary, c.next, c.points, c.late, c.uid])"))
        print("routines:", await A.evaluate("() => (document.querySelector('cronologia-app')._ix().routines || []).map(c => [c.summary, c.cal, c.uid])"))
        print("score:", await A.evaluate("() => document.querySelector('cronologia-app')._scoreOn()"))
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(800)
        panel = a.locator(".panel.score-today")
        await A.screenshot(path=f"{SP}/shots/crfu-rew.png", full_page=True)
        print("panels:", await a.locator(".page .panel").evaluate_all("els => els.map(e => e.className)"))
        print("fold html:", await A.evaluate("() => { const r = document.querySelector('cronologia-app').renderRoot; const p = r.querySelector('.score-today'); return p ? p.innerHTML.length + ' ' + !!p.querySelector('.future-fold') : 'none'; }"))
        fold = panel.locator(".future-fold")
        check(await fold.count() == 1 and "Próximas rotinas" in await fold.inner_text(), f"Para pontuar hoje: Próximas rotinas ({(await fold.inner_text()).strip() if await fold.count() else ''})")
        check(await panel.locator(".chore.future").count() == 0 and await fold.get_attribute("aria-expanded") == "false", "closed until tapped")
        await fold.click(); await A.wait_for_timeout(400)
        rows = panel.locator(".chore.future")
        names = [t.split("\n")[0] for t in await rows.locator(".chore-tx b").all_inner_texts()]
        print("future:", names)
        check(names[:1] == ["Limpar o banheiro"] and "Lavar o carro" in names, "the next ones with points, soonest first")
        sub = await rows.filter(has_text="Limpar o banheiro").locator("small").inner_text()
        check("amanhã" in sub and "+10" in sub and "volta 2 dias depois" in sub, f"when, points, and when it comes back ({sub})")
        check("Fez antes do dia" in await panel.locator(".future-note").inner_text(), "says it can be marked before the day")
        await A.screenshot(path=f"{SP}/shots/crfu-open.png", full_page=True)
        # done today by Davi: moves to today + 2 (not tomorrow + 2), +10 now
        await rows.filter(has_text="Limpar o banheiro").locator(".qw-btn", has_text="D").click()
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(2), "done earlier: comes back 2 days from today")
        await wait_for(lambda: any(e["title"] == "Limpar o banheiro" and e["who"] == "Davi" and e["points"] == 10 for e in entries()), "+10 for Davi now")
        await A.wait_for_timeout(600)
        names = [t.split("\n")[0] for t in await panel.locator(".chore.future .chore-tx b").all_inner_texts()]
        check("Limpar o banheiro" not in names, f"it leaves Próximas rotinas ({names})")
        # from the event window: a routine days ahead can be marked earlier too
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Rotinas"); await A.wait_for_timeout(600)
        await a.locator("#cat-rotina .cat-row", has_text="Lavar o carro").click(); await A.wait_for_timeout(600)
        who = sheet.locator(".who-btn", has_text="Aurora")
        check(await who.count() == 1, "the event window of a routine 5 days ahead: who did it, to mark it now")
        await who.click()
        await wait_for(lambda: events("Lavar o carro")[0]["start"] == D(7), "comes back 7 days from today")
        await wait_for(lambda: any(e["title"] == "Lavar o carro" and e["who"] == "Aurora" and e["points"] == 20 for e in entries()), "+20 for Aurora")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
