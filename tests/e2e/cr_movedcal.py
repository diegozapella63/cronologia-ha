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
data = f"{SP}/crmv-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
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

async def tap_done(A, a, loc, who="Diego"):
    await loc.click()
    await A.wait_for_timeout(400)
    if await a.locator(".sheet .who-btn").count():
        await a.locator(".sheet .who-btn", has_text=who).click()
        await A.wait_for_timeout(300)

async def day_text(a, A, d):
    # Calendário › Mês: tap the day, read its panel
    await a.locator(".month .cell:not(.out)").filter(has=A.locator(f".num:text-is('{d.day}')")).first.click(); await A.wait_for_timeout(500)
    return await a.locator(".day-panel").inner_text()

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Limpar o banheiro")
        await a.locator(".sheet .seg-grid button", has_text="Depois de feita").click(); await A.wait_for_timeout(200)
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        await wait_for(lambda: len(events("Limpar o banheiro")) == 1, "created")
        row = a.locator(".panel.chores .chore", has_text="Limpar o banheiro")
        await row.wait_for(timeout=8000)
        await tap_done(A, a, row.locator(".chk"))
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(2), "Feito moves the event 2 days ahead")
        await wait_for(lambda: any((v.get("moved") or {}).get("summary") == "Limpar o banheiro" for v in stored()["checks"].values()), "the check keeps the name (any calendar)")
        # Calendário: today still has it, done; the new date has it open
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        await a.locator(".seg button", has_text="Mês").click(); await A.wait_for_timeout(800)
        txt = await a.locator(".day-panel").inner_text()
        rowc = a.locator(".day-panel .ev-row", has_text="Limpar o banheiro")
        check("Limpar o banheiro" in txt and await rowc.count() == 1, "Mês › today: the routine is still there")
        check(await rowc.locator(".ev-done").count() == 1 or "done" in (await rowc.get_attribute("class") or ""), "as done")
        await A.screenshot(path=f"{SP}/shots/crmv-today.png")
        d2 = today + datetime.timedelta(days=2)
        if d2.month == today.month:
            t2 = await day_text(a, A, d2)
            r2 = a.locator(".day-panel .ev-row", has_text="Limpar o banheiro")
            check("Limpar o banheiro" in t2 and await r2.locator(".ev-done").count() == 0, "the new date: open")
            # back to today: on a Friday or a Saturday the new date is in the next week
            await day_text(a, A, today)
        # Semana: today's counter counts it as done; the list marks it done and can undo
        await a.locator(".seg button", has_text="Semana").click(); await A.wait_for_timeout(800)
        tg = a.locator(".tgrid-any .tg-any[aria-label*='Hoje']")
        if not await tg.count(): tg = a.locator(".tgrid-any .tg-any").first
        cnt = (await tg.inner_text()).strip()
        check(cnt.split("/")[0].isdigit() and int(cnt.split("/")[0]) >= 1, f"Semana: today's counter counts it ({cnt})")
        await tg.click(); await A.wait_for_timeout(500)
        sh = a.locator(".sheet .chore.done", has_text="Limpar o banheiro")
        check(await sh.count() == 1, "the day's list shows it done")
        await sh.locator("button.chk").click()
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(0), "unchecking there brings it back to today")
        await A.wait_for_timeout(600)
        check(await a.locator(".sheet .chore", has_text="Limpar o banheiro").count() == 1 and await a.locator(".sheet .chore.done", has_text="Limpar o banheiro").count() == 0, "and it is open again, once")
        await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        # done again, then a day later: still shown on the day it was done, read-only
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        await tap_done(A, a, a.locator(".panel.chores .chore", has_text="Limpar o banheiro").locator(".chk"))
        await wait_for(lambda: events("Limpar o banheiro")[0]["start"] == D(2), "done again")
        await ctx.close()
        ctx2 = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        B = await ctx2.new_page(); B.on("pageerror", lambda e: errs.append(str(e)))
        tomorrow_noon = datetime.datetime.combine(today + datetime.timedelta(days=1), datetime.time(12, 0), tzinfo=__import__("zoneinfo").ZoneInfo("America/Sao_Paulo"))
        await B.clock.set_fixed_time(tomorrow_noon)
        await B.goto("http://127.0.0.1:8099/"); await B.wait_for_timeout(1800)
        bb = B.locator("cronologia-app")
        await bb.locator(".tab", has_text="Calendário").click(); await B.wait_for_timeout(500)
        await bb.locator(".seg button", has_text="Semana").click(); await B.wait_for_timeout(800)
        cells = bb.locator(".tgrid-any .tg-any")
        labels = [await cells.nth(i).get_attribute("aria-label") or "" for i in range(await cells.count())]
        yi = next((i for i, l in enumerate(labels) if "Ontem" in l), None)
        if yi is None:
            await bb.locator(".icon-btn[aria-label='Anterior']").first.click(); await B.wait_for_timeout(800)
            labels = [await cells.nth(i).get_attribute("aria-label") or "" for i in range(await cells.count())]
            yi = next((i for i, l in enumerate(labels) if "Ontem" in l), None)
        if yi is not None:
            await cells.nth(yi).click(); await B.wait_for_timeout(500)
            row = bb.locator(".sheet .chore.done", has_text="Limpar o banheiro")
            check(await row.count() == 1 and await row.locator("button.chk").count() == 0, "a day later: still done on the day it was done (just shown)")
            await row.locator(".chore-tx").click(); await B.wait_for_timeout(300)
            check("feita ontem por Diego" in await bb.locator(".toast").inner_text(), "tapping it says when and who")
        else:
            check(False, f"Ontem in the week ({labels})")
        check(not errs, f"no page errors {errs}")
        await b.close()
try: asyncio.run(main())
finally:
    fake.kill(); app.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
