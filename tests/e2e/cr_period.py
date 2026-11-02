# CronologIA 1.37.0: Período (manhã, tarde, noite) for a routine without a time; today's lists follow the part of the day.
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
data = f"{SP}/crq-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana", "manual": True}}}, open(f"{data}/cronologia.json", "w"))
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

CREATE = """const [cal, ev] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/create', entity_id: cal, event: JSON.parse(ev)}));
 else if (m.id === 1) { console.log(JSON.stringify(m)); ws.close(); } };"""
def create(ev, cal="calendar.casa"):
    print(subprocess.check_output(["node", "-e", CREATE, cal, json.dumps(ev)], timeout=20).decode().strip()[:120])
create({"summary": "Zelar manhã", "dtstart": D(0), "dtend": D(1), "rrule": "FREQ=DAILY", "description": "#rotina\nPontos: 5\nPeríodo: Manhã"})
create({"summary": "Yoga tarde", "dtstart": D(0), "dtend": D(1), "rrule": "FREQ=DAILY", "description": "#rotina\nPontos: 5\nPeríodo: Tarde"})
create({"summary": "Xícaras noite", "dtstart": D(0), "dtend": D(1), "description": "#rotina\nPontos: 5\nPeríodo: Noite\nVolta: 1 dia depois de feita"})
create({"summary": "Waffle qualquer", "dtstart": D(0), "dtend": D(1), "rrule": "FREQ=DAILY", "description": "#rotina\nPontos: 5"})
time.sleep(1.5)
MINE = {"Zelar manhã": "manha", "Yoga tarde": "tarde", "Xícaras noite": "noite", "Waffle qualquer": ""}
IDX = {"manha": 0, "tarde": 1, "noite": 2}
def rank(p, h):
    if not p: return 2
    cur = "noite" if h >= 18 or h < 5 else "tarde" if h >= 12 else "manha"
    if p == cur: return 0
    return 1 + IDX[p] / 10 if h >= 5 and IDX[p] < IDX[cur] else 3 + IDX[p]
from zoneinfo import ZoneInfo
H = datetime.datetime.now(ZoneInfo("America/Sao_Paulo")).hour
EXPECT = sorted(MINE, key=lambda n: rank(MINE[n], H))
print("hour", H, "expect", EXPECT)
def mine(names): return [n for n in names if n in MINE]

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(2000)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        # 1) Agora › Rotina da casa: the order of the day
        names = [t.strip() for t in await a.locator(".panel.chores#casa .chore:not(.done) .chore-tx b").all_inner_texts()]
        check(mine(names) == EXPECT, f"Agora: in the order of the day ({mine(names)})")
        subs = {n: (await a.locator(".panel.chores#casa .chore", has_text=n).locator("small").inner_text()) for n in MINE}
        check("de manhã" in subs["Zelar manhã"] and "à tarde" in subs["Yoga tarde"] and "à noite" in subs["Xícaras noite"] and "volta 1 dia depois" in subs["Xícaras noite"], f"the part of the day on the line ({subs})")
        for n, per in MINE.items():
            late = "late" in (await a.locator(".panel.chores#casa .chore", has_text=n).locator("small").get_attribute("class") or "")
            r = rank(per, H)
            check(late == (1 <= r < 2), f"{n}: late only when its part has passed ({late})")
        await a.locator(".panel.chores#casa").scroll_into_view_if_needed(); await A.screenshot(path=f"{SP}/shots/crq-agora.png")
        # 2) Recompensas › Para pontuar hoje: the same order
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(700)
        await A.screenshot(path=f"{SP}/shots/crq-rew.png")
        names = [t.strip() for t in await a.locator(".score-today .chore .chore-tx b").all_inner_texts()]
        check(mine(names) == EXPECT, f"Para pontuar hoje: same order ({mine(names)})")
        # 3) Calendário: today, the same order, and the part of the day in the time column
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Mês").click(); await A.wait_for_timeout(1200)
        names = [t.strip() for t in await a.locator(".day-panel .ev-row .ev-title").all_inner_texts()]
        check(mine(names) == EXPECT, f"Calendário (today): same order ({mine(names)})")
        tm = (await a.locator(".day-panel .ev-row", has_text="Yoga tarde").locator(".ev-time").inner_text()).strip()
        check(tm == "Tarde" and await a.locator(".day-panel .ev-row", has_text="Yoga tarde").locator(".ev-time small.per .i").count() == 1, f"time column: Tarde with its icon ({tm!r})")
        tq = (await a.locator(".day-panel .ev-row", has_text="Waffle qualquer").locator(".ev-time").inner_text()).replace("\n", " ").strip()
        check(tq == "Qualquer hora", f"no part of the day: Qualquer hora ({tq!r})")
        await a.locator(".day-panel .ev-row", has_text="Zelar manhã").scroll_into_view_if_needed(); await A.screenshot(path=f"{SP}/shots/crq-cal.png")
        # tomorrow: from its morning (manhã, any time, tarde, noite)
        await a.locator(".cell[aria-label^='Amanhã']").first.click(); await A.wait_for_timeout(1000)
        names = [t.strip() for t in await a.locator(".day-panel .ev-row .ev-title").all_inner_texts()]
        tm_exp = [n for n in ["Zelar manhã", "Waffle qualquer", "Yoga tarde"]]
        check(mine(names) == tm_exp, f"tomorrow: manhã, any time, tarde ({mine(names)})")
        # 4) the sheet: the part of the day as a fact
        await a.locator(".cell.today").first.click(); await A.wait_for_timeout(800)
        await a.locator(".day-panel .ev-row", has_text="Yoga tarde").click(); await A.wait_for_timeout(500)
        check(await sheet.locator(".fact", has_text="À tarde").count() == 1, "the sheet: À tarde")
        # 5) Editar: the form has it selected; change it to Noite
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        on = [t.strip() for t in await sheet.locator(".field:has(.flabel:text-is('Horário')) .pick.on").all_inner_texts()]
        chips = [t.strip() for t in await sheet.locator(".field:has(.flabel:text-is('Horário')) .pick").all_inner_texts()]
        check(chips == ["Qualquer hora", "Num horário", "Manhã", "Tarde", "Noite"], f"Horário: the parts of the day ({chips})")
        check(on == ["Tarde"], f"editing: Tarde selected ({on})")
        await A.screenshot(path=f"{SP}/shots/crq-form.png")
        await sheet.locator(".field:has(.flabel:text-is('Horário')) .pick", has_text="Noite").click()
        await sheet.locator(".btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(800)
        await A.screenshot(path=f"{SP}/shots/crq-save.png")
        print("after save:", [t.strip() for t in await sheet.locator("button").all_inner_texts()][:12])
        # a repeating one asks which: all of them
        await sheet.locator("button", has_text="Este e os próximos").click()
        def saved():
            ev = [e for e in events("Yoga tarde") if e["start"] >= D(0)]; return ev and all("Período: Noite" in (e.get("description") or "") for e in ev)
        await wait_for(saved, "saved: Período: Noite")
        # 6) Novo › Rotina with Manhã
        await A.keyboard.press("Escape"); await A.wait_for_timeout(300)
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Abrir janelas")
        await sheet.locator(".field:has(.flabel:text-is('Horário')) .pick", has_text="Manhã").click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        def created():
            ev = events("Abrir janelas"); return ev and "Período: Manhã" in (ev[0].get("description") or "") and len(ev[0]["start"]) == 10
        await wait_for(created, "Novo › Rotina with Manhã: all day, Período: Manhã")
        # Num horário: no part of the day
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Fechar portão")
        await sheet.locator(".field:has(.flabel:text-is('Horário')) .pick", has_text="Noite").click()
        await sheet.locator(".field:has(.flabel:text-is('Horário')) .pick", has_text="Num horário").click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        def timed():
            ev = events("Fechar portão"); return ev and "Período" not in (ev[0].get("description") or "") and "T" in ev[0]["start"]
        await wait_for(timed, "Num horário: no Período")
        # 7) Mais › Rotinas
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        await a.locator(".more-tabs button", has_text="Rotinas").click(); await A.wait_for_timeout(600)
        hint = await a.locator(".cat-row", has_text="Abrir janelas").locator(".hint").inner_text()
        check("de manhã" in hint, f"Mais › Rotinas: de manhã ({hint!r})")
        # 8) the afternoon (the page's clock at 15:00): tarde, then the morning one (late), any time, noite
        ctx2 = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        at = datetime.datetime.now(ZoneInfo("America/Sao_Paulo")).replace(hour=15, minute=0, second=0, microsecond=0)
        P = await ctx2.new_page(); await P.clock.install(time=at); await P.clock.resume()
        await P.goto("http://127.0.0.1:8099/"); await P.wait_for_timeout(2500)
        c = P.locator("cronologia-app")
        names = [t.strip() for t in await c.locator(".panel.chores#casa .chore:not(.done) .chore-tx b").all_inner_texts()]
        exp = [n for n in ["Zelar manhã", "Waffle qualquer", "Xícaras noite", "Abrir janelas"] if n in names]
        print("15h:", mine(names), names)
        check([n for n in names if n in ("Zelar manhã", "Waffle qualquer", "Xícaras noite", "Abrir janelas")] == ["Zelar manhã", "Abrir janelas", "Waffle qualquer", "Xícaras noite"], "15h: the morning ones (late), any time, noite")
        late = "late" in (await c.locator(".panel.chores#casa .chore", has_text="Zelar manhã").locator("small").get_attribute("class") or "")
        check(late, "15h: the morning one in the late color")
        await c.locator(".panel.chores#casa").scroll_into_view_if_needed(); await P.screenshot(path=f"{SP}/shots/crq-15h.png")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    fake.kill(); app.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
