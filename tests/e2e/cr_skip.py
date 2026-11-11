# CronologIA 1.36.0: Pular a routine: not done this time, no points; one that comes back N days after done goes to its next date.
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
data = f"{SP}/crk-data"; shutil.rmtree(data, ignore_errors=True)
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
create({"summary": "Arrumar a cama", "dtstart": D(-1), "dtend": D(0), "description": "#rotina\nPontos: 5\nVolta: 1 dia depois de feita"})
create({"summary": "Passar aspirador", "dtstart": D(0), "dtend": D(1), "description": "#rotina\nPontos: 10\nVolta: 2 dias depois de feita"})
create({"summary": "Levar o lixo", "dtstart": D(-3), "dtend": D(-2), "rrule": "FREQ=DAILY", "description": "#rotina\nPontos: 5"})
create({"summary": "Limpar paredes", "dtstart": D(-1), "dtend": D(0), "description": "#manutenção\nA cada: 6 meses\nAvisar: 3 dias antes\nPontos: 100"})
time.sleep(1.5)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(2000)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }")
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        rows = lambda name: a.locator(".panel.chores .chore", has_text=name)
        # 1) the bed, due yesterday, comes back 1 day after: Pular -> today, still to do
        cama = rows("Arrumar a cama")
        check(await cama.count() == 1 and "venceu ontem" in await cama.inner_text(), f"Arrumar a cama: venceu ontem ({(await cama.inner_text()).strip()[:60] if await cama.count() else ''})")
        await cama.locator(".chore-tx").click(); await A.wait_for_timeout(500)
        skip = sheet.locator(".btn.kind-skip", has_text="Pular")
        check(await skip.count() == 1, "the routine's sheet: Pular")
        await A.screenshot(path=f"{data}/sheet.png")
        await skip.click(); await A.wait_for_timeout(1500)
        toast = await a.locator(".toast").inner_text() if await a.locator(".toast").count() else ""
        check("pulada" in toast and "volta hoje" in toast and "Desfazer" in toast, f"toast: pulada, volta hoje ({toast!r})")
        ev = events("Arrumar a cama")
        check(len(ev) == 1 and ev[0]["start"] == D(0) and "Feito em" not in (ev[0].get("description") or ""), f"moved to today, nothing in its history ({[(e['start'], e.get('description')) for e in ev]})")
        cama = rows("Arrumar a cama")
        check(await cama.count() == 1 and "done" not in (await cama.get_attribute("class")) and "venceu" not in await cama.inner_text(), f"today's, to do ({(await cama.inner_text()).strip()[:60] if await cama.count() else ''})")
        # 2) the vacuum, due today, comes back 2 days after: Pular -> in 2 days, today it shows as skipped
        await rows("Passar aspirador").locator(".chore-tx").click(); await A.wait_for_timeout(500)
        await sheet.locator(".btn.kind-skip").click(); await A.wait_for_timeout(1500)
        toast = await a.locator(".toast").inner_text() if await a.locator(".toast").count() else ""
        check("volta" in toast and "hoje" not in toast.split("volta")[-1], f"toast: volta in 2 days ({toast!r})")
        ev = events("Passar aspirador")
        check(len(ev) == 1 and ev[0]["start"] == D(2), f"moved 2 days ahead ({[e['start'] for e in ev]})")
        asp = rows("Passar aspirador")
        check(await asp.count() == 1 and "skipped" in await asp.get_attribute("class") and "pulada" in await asp.inner_text(), "today: in the done ones, as pulada")
        # 3) the trash, daily: yesterday's left over -> Pular takes it out; today's stays
        lixo = rows("Levar o lixo")
        texts = [t.strip() for t in await lixo.all_inner_texts()]
        check(any("ficou de ontem" in t for t in texts), f"Levar o lixo: yesterday's left over ({texts})")
        await lixo.filter(has_text="ficou de ontem").locator(".chore-tx").click(); await A.wait_for_timeout(500)
        await sheet.locator(".btn.kind-skip").click(); await A.wait_for_timeout(1200)
        texts = [t.strip() for t in await rows("Levar o lixo").all_inner_texts()]
        check(not any("ficou de ontem" in t for t in texts) and any("pulada" not in t for t in texts), f"yesterday's left; today's stays to do ({texts})")
        await A.screenshot(path=f"{data}/agora.png")
        # no points for any of it
        st = stored()
        check(not (st.get("score") or {}).get("entries"), f"no points ({(st.get('score') or {}).get('entries')})")
        # Desfazer the vacuum (its sheet): back to today
        await rows("Passar aspirador").locator(".chore-tx").click(); await A.wait_for_timeout(500)
        state = sheet.locator(".kind-state.skipped")
        check(await state.count() == 1 and "Pulada hoje" in await state.inner_text(), "its sheet: Pulada hoje · Desfazer")
        await state.locator(".text-btn", has_text="Desfazer").click(); await A.wait_for_timeout(1500)
        ev = events("Passar aspirador")
        check(len(ev) == 1 and ev[0]["start"] == D(0), f"Desfazer: back to today ({[e['start'] for e in ev]})")
        # the skip mark in yellow (--rv-warn): Agora, Calendário (today's Levar o lixo, skipped)
        await A.evaluate("() => document.querySelector('cronologia-app')._closeSheet()"); await A.wait_for_timeout(600)
        await rows("Levar o lixo").first.locator(".chore-tx").click(); await A.wait_for_timeout(500)
        await sheet.locator(".btn.kind-skip").click(); await A.wait_for_timeout(1500)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }"); await A.wait_for_timeout(300)
        YEL = "rgb(255, 190, 77)"
        sk = a.locator(".panel.chores .chore.skipped .chk").first
        col = await sk.evaluate("(el) => getComputedStyle(el).color") if await sk.count() else ""
        check(col == YEL, f"Agora: the skip mark in yellow ({col})")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Mês").click(); await A.wait_for_timeout(1200)
        ev = a.locator(".day-panel .ev-done.skipped").first
        col = await ev.evaluate("(el) => getComputedStyle(el).color") if await ev.count() else ""
        check(col == YEL, f"Calendário: the skip mark in yellow ({col})")
        await ev.scroll_into_view_if_needed(); await A.screenshot(path=f"{data}/skip-cal.png")
        cama = [t for t in await a.locator(".day-panel .ev-row .ev-title").all_inner_texts() if "Arrumar a cama" in t]
        check(len(cama) == 1 and await a.locator(".day-panel .ev-row.done", has_text="Arrumar a cama").count() == 0, f"today: the bed once, to do ({cama})")
        await a.locator(".cell[aria-label^='Ontem']").first.click(); await A.wait_for_timeout(1000)
        y = a.locator(".day-panel .ev-row", has_text="Arrumar a cama")
        check(await y.count() == 1 and await y.locator(".ev-done.skipped").count() == 1, "yesterday: the bed, pulada (the day it was due)")
        # 1.58.0: Pular a dose of a medicine: out of the count of the day, the yellow mark; tapping it undoes
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(800)
        meds = a.locator(".panel.meds")
        ring = lambda: meds.locator(".meds-head").inner_text()
        before = await ring()
        dose = meds.locator(".dose:not(.tomado)").first
        name = (await dose.locator(".dose-tx b").inner_text()).strip()
        await dose.locator(".dose-main").click(); await A.wait_for_timeout(500)
        skip = sheet.locator(".btn.kind-skip", has_text="Pular")
        check(await skip.count() == 1 and await sheet.locator(".btn.kind-act").count() == 1, "the dose's sheet: Tomei and Pular")
        await A.screenshot(path=f"{data}/dose-sheet.png")
        await skip.click(); await A.wait_for_timeout(1500)
        toast = await a.locator(".toast").inner_text() if await a.locator(".toast").count() else ""
        check("pulado" in toast and "Desfazer" in toast, f"toast: pulado ({toast!r})")
        # 1.59.0: taken or skipped, the dose leaves the list; Tomados (n) opens them (1.64.0: Nome (n), like all the apps)
        check(await meds.locator(".dose", has_text=name).count() == 0, "a skipped dose leaves the list")
        fold = meds.locator(".done-fold")
        check(await fold.count() == 1 and (await fold.inner_text()).strip() == "Tomados (1)", f"Tomados (1) ({await fold.inner_text() if await fold.count() else ''})")
        await fold.click(); await A.wait_for_timeout(400)
        row = meds.locator(".dose.pulado")
        check(await row.count() == 1 and name in await row.inner_text() and "pulado" in await row.inner_text(), f"the row: pulado ({(await row.inner_text()).strip()[:60] if await row.count() else ''})")
        col = await row.locator(".dose-done.skipped").evaluate("(el) => getComputedStyle(el).color") if await row.count() else ""
        check(col == YEL, f"the skip mark in yellow ({col})")
        import re as _re
        n0 = [int(x) for x in _re.search(r"(\d+)/(\d+)", before).groups()]
        n1 = [int(x) for x in _re.search(r"(\d+)/(\d+)", await ring()).groups()]
        check(n1 == [n0[0], n0[1] - 1], f"out of the count of the day ({n0} -> {n1})")
        k = next((k for k, v in stored()["checks"].items() if v.get("kind") == "remedio" and v.get("skipped")), None)
        check(k is not None, "stored as skipped")
        await meds.screenshot(path=f"{data}/dose-skipped.png")
        await row.locator(".dose-done").click(); await A.wait_for_timeout(1200)
        check(await meds.locator(".dose.pulado").count() == 0 and k not in stored()["checks"], "tapping the mark undoes it")
        await meds.locator(".done-fold").count() and await meds.locator(".done-fold").click()
        # whoever has nothing left: one name on a line (Mimi has one dose: Gardenal)
        await meds.locator(".dose", has_text="Gardenal").locator(".dose-btn").click(); await A.wait_for_timeout(1200)
        ready = meds.locator(".meds-ready .ready-who", has_text="Mimi")
        check(await ready.count() == 1 and "tomou todos" in await ready.inner_text() and await meds.locator(".dose", has_text="Gardenal").count() == 0, f"Mimi tomou todos, without the dose ({await ready.inner_text() if await ready.count() else ''})")
        check(await meds.locator(".meds-who", has_text="Mimi").count() == 0, "and without her heading")
        await meds.screenshot(path=f"{data}/meds-ready.png")
        # 1.80.0: Pular a maintenance: not done this time; the next one 6 months after the day it was due, no points
        mt = a.locator(".panel.chores .maint", has_text="Limpar paredes")
        check(await mt.count() == 1, "the maintenance on Agora")
        await mt.locator(".maint-main").click(); await A.wait_for_timeout(500)
        skip = sheet.locator(".btn.kind-skip", has_text="Pular")
        check(await skip.count() == 1 and await sheet.locator(".who-btn, .kind-act").count() >= 1, "the maintenance's sheet: Feito and Pular")
        await A.screenshot(path=f"{data}/maint-sheet.png")
        await skip.click(); await A.wait_for_timeout(1500)
        toast = await a.locator(".toast").inner_text() if await a.locator(".toast").count() else ""
        check("pulada" in toast and "próxima em" in toast and "Desfazer" in toast, f"toast: pulada, próxima em ({toast!r})")
        import calendar as _cal
        due = today - datetime.timedelta(days=1)
        y, mo = due.year + (due.month + 5) // 12, (due.month + 5) % 12 + 1
        nxt = datetime.date(y, mo, min(due.day, _cal.monthrange(y, mo)[1])).isoformat()
        ev = events("Limpar paredes", fim=240)
        check(len(ev) == 1 and ev[0]["start"] == nxt and "Feito em" not in (ev[0].get("description") or ""), f"moved to {nxt}, nothing in its history ({[(e['start'], e.get('description')) for e in ev]})")
        check(not any(e.get("title") == "Limpar paredes" for e in (stored().get("score") or {}).get("entries") or []), "no points")
        check(await a.locator(".panel.chores .maint", has_text="Limpar paredes").count() == 0, "it leaves Agora")
        await a.locator(".toast button", has_text="Desfazer").click(); await A.wait_for_timeout(1500)
        ev = events("Limpar paredes", fim=240)
        check(len(ev) == 1 and ev[0]["start"] == D(-1), f"Desfazer: back to its date ({[e['start'] for e in ev]})")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
