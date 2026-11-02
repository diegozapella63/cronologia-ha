import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, re
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
URL = "http://127.0.0.1:8099/"
n_ok = 0
procs = []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label)
    if not c: raise SystemExit(1)
    n_ok += 1
def start(old=False):
    for p in procs: p.kill()
    procs.clear(); time.sleep(0.4)
    data = f"{SP}/cr-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media")
    env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
    if old: env["FAKE_HA_OLD"] = "1"
    procs.append(subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(0.5)
    aenv = dict(os.environ, CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media")
    procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(1.0)
    return data
def fake_log(data): return open(f"{data}/fake.log").read()
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if await fn() if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)

async def main():
    data = start()
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"])
        ctx = await b.new_context(viewport={"width":390,"height":844}, timezone_id="America/Sao_Paulo", accept_downloads=True, permissions=["camera"])
        errs = []
        A = await ctx.new_page(); B = await ctx.new_page()
        for pg in (A, B):
            pg.on("pageerror", lambda e: errs.append(f"pageerror: {e}"))
            pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        # 1.28.0: the Hoje card is only there while something is left today: the screens open at 08:00
        import datetime as _dt
        from zoneinfo import ZoneInfo as _Z
        _t = _dt.datetime.now(_Z("America/Sao_Paulo")).replace(hour=8, minute=0, second=0, microsecond=0)
        for _pg in (A, B): await _pg.clock.set_fixed_time(_t)
        await A.goto(URL); await B.goto(URL)
        a = A.locator("cronologia-app"); bb = B.locator("cronologia-app")
        await a.locator(".panel.agenda").first.wait_for()
        await A.wait_for_timeout(800)
        await a.locator(".panel.meds .dose").first.wait_for(timeout=8000)
        titles = await a.locator(".ev-row .ev-title").all_inner_texts()
        doses = await a.locator(".panel.meds .dose-tx b").all_inner_texts()
        check("Água micelar" in titles and "Sertralina" in doses and "Sertralina" not in titles, f"Agora lists today's events through the relay, doses in their own panel ({len(titles)} / {len(doses)})")
        check(await a.locator(".ad-chip").count() >= 2, "all-day events as chips")
        # security: the relay refuses anything that is not a calendar
        res = await A.evaluate("""async () => {
          const ws = new WebSocket(new URL('ws', location.href).href.replace('http','ws'));
          await new Promise(r => ws.onopen = r);
          const ask = (m) => new Promise(r => { ws.onmessage = (e) => r(JSON.parse(e.data)); ws.send(JSON.stringify(m)); });
          const out = [];
          out.push(await ask({id: 1, type: 'get_states'}));
          out.push(await ask({id: 2, type: 'call_service', domain: 'light', service: 'turn_off', target: {entity_id: 'light.sala'}}));
          out.push(await ask({id: 3, type: 'calendar/event/subscribe', entity_id: 'light.sala', start: '2026-01-01T00:00:00Z', end: '2026-01-02T00:00:00Z'}));
          out.push(await ask({id: 4, type: 'calendar/event/create', entity_id: 'todo.compras', event: {summary: 'x', start: '2026-01-01', end: '2026-01-02'}}));
          ws.close(); return out.map(m => m.success ? 'ok' : m.error.code);
        }""")
        check(res == ["unknown_command", "unknown_command", "invalid_format", "invalid_format"], f"relay only accepts calendar commands ({res})")
        # create through the form
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Consulta e2e")
        await a.locator(".sheet .chip-row .pick", has_text="Amanhã").click()
        await a.locator(".sheet .pick.list", has_text="Pessoal").click()
        await a.locator(".sheet .btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: "event created calendar.pessoal" in fake_log(data) and "Consulta e2e" in fake_log(data), "event created in Home Assistant")
        await wait_for(lambda: True, "noop")
        # tomorrow's event: Agora is today only, so the other screen looks in Calendário › Lista
        await bb.locator(".tab", has_text="Calendário").click(); await asyncio.sleep(0.4)
        await bb.locator(".seg button", has_text="Lista").click(); await asyncio.sleep(0.6)
        async def seen_b():
            return "Consulta e2e" in await bb.locator(".ev-row .ev-title").all_inner_texts()
        await wait_for(seen_b, "other screen shows it live (subscription)")
        await bb.locator(".tab", has_text="Agora").click(); await asyncio.sleep(0.4)
        # read-only calendar: no edit/delete
        await a.locator(".ad-chip").first.click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet .btn", has_text="Editar").count() == 0 and "Só leitura" in await a.locator(".sheet").inner_text(), "read-only calendar offers no editing")
        await a.locator(".sheet .icon-btn[aria-label=Fechar]").click(); await A.wait_for_timeout(300)
        # recurring: change only this one
        await a.locator(".ev-row", has_text="Pilates").first.click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn", has_text="Editar").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Pilates (reposição)")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(300)
        check("Só este evento" in await a.locator(".sheet").inner_text(), "repeating event asks the scope")
        await a.locator(".sheet .imp-opt").first.click()
        await wait_for(lambda: re.search(r"event updated calendar.pessoal fake-\d+ \d{8}T\d{6} $", fake_log(data), re.M), "only this occurrence updated (recurrence_id sent)")
        async def renamed():
            t = await a.locator(".panel.agenda").first.locator(".ev-row .ev-title").all_inner_texts()
            return "Pilates (reposição)" in t and "Pilates" not in t
        await wait_for(renamed, "today shows the changed occurrence")
        # delete + undo
        await a.locator(".ev-row", has_text="Água micelar").first.click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn.danger").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn.danger-fill").click()
        await wait_for(lambda: "event deleted calendar.pessoal" in fake_log(data), "event deleted")
        async def gone():
            return "Água micelar" not in await a.locator(".panel.agenda").first.locator(".ev-row .ev-title").all_inner_texts()
        await wait_for(gone, "deleted event leaves the agenda")
        await a.locator(".toast button", has_text="Desfazer").click()
        async def back():
            return "Água micelar" in await a.locator(".ev-row .ev-title").all_inner_texts()
        await wait_for(back, "Desfazer brings it back")
        # AI: paste message
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .imp-tile", has_text="Colar mensagem").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet textarea").fill("Reunião de pais na escola, quinta às 15h")
        await a.locator(".sheet .btn.primary").click()
        await a.locator(".rv-card").first.wait_for(timeout=8000)
        n = await a.locator(".rv-card").count()
        check(n == 2, f"AI found events in the message ({n})")
        check("encontrado" in await a.locator(".sheet .sheet-note.top").inner_text(), "review says how many were found")
        await a.locator(".sheet .pick.list", has_text="Remédios").click()
        await a.locator(".sheet .btn.primary").click()
        await wait_for(lambda: fake_log(data).count("event created calendar.remedios") == 2, "both events created in the chosen calendar")
        # AI: photo goes through media/cronologia/ia-temp
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator("#cr-photos").set_input_files(os.path.join(FIX, "note.png"))
        await a.locator(".rv-card").first.wait_for(timeout=8000)
        check("/media/cronologia/ia-temp/foto-" in fake_log(data), "photo handed to the AI from media/cronologia/ia-temp")
        check(os.listdir(f"{data}/media/cronologia/ia-temp") == [], "temporary photo removed")
        await a.locator(".sheet .icon-btn[aria-label=Fechar]").click(); await A.wait_for_timeout(300)
        # .ics import
        await a.locator(".tab").nth(4).click(); await A.wait_for_timeout(500)
        await a.locator("#cr-ics").set_input_files(os.path.join(FIX, "cr_test.ics"))
        await a.locator(".rv-card").first.wait_for(timeout=5000)
        cards = await a.locator(".rv-card .rv-title").evaluate_all("els => els.map(e => e.value)")
        check(cards == ["Casamento da Júlia e do Pedro", "Férias", "Aula de inglês"], f".ics read ({cards})")
        times = await a.locator(".rv-card").nth(0).locator("input[type=time]").evaluate_all("els => els.map(e => e.value)")
        check(times == ["16:00", "23:00"], f".ics time zone handled ({times})")
        meta = await a.locator(".rv-meta").all_inner_texts()
        check("até" in meta[1] and "Toda semana" in meta[2], f"multi-day and repetition kept ({meta[1]} | {meta[2]})")
        await a.locator(".sheet .btn.primary").click()
        await wait_for(lambda: "FREQ=WEEKLY;COUNT=10" in fake_log(data) and "Casamento" in fake_log(data), ".ics events created (with the rrule)")
        # .ics export
        await a.locator(".tab").nth(4).click(); await A.wait_for_timeout(400)
        await a.locator(".more-tabs button", has_text="Dados").click(); await A.wait_for_timeout(400)
        await a.locator("#dados .opts li", has_text="Agenda (.ics)").locator(".btn").click(); await A.wait_for_timeout(300)
        async with A.expect_download() as dl:
            await a.locator(".sheet a.btn.primary").click()
        d = await dl.value
        path = os.path.join(SP, "export.ics"); await d.save_as(path)
        ics = open(path, encoding="utf-8").read()
        check(d.suggested_filename.endswith(".ics") and ics.startswith("BEGIN:VCALENDAR") and "SUMMARY:Casamento da Júlia e do Pedro" in ics and "DTSTART;VALUE=DATE:" in ics, f"export .ics ({d.suggested_filename}, {ics.count('BEGIN:VEVENT')} events)")
        # prefs: color + hide, synced to the other screen and saved
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        await a.locator(".more-tabs button", has_text="Calendários").click(); await A.wait_for_timeout(400)
        await a.locator(".cal-row", has_text="Giveaways").locator(".switch input").uncheck(); await A.wait_for_timeout(600)
        prefs = json.load(open(f"{data}/cronologia.json"))
        check(prefs["calendars"].get("calendar.giveaways", {}).get("hidden") is True, "hiding a calendar is saved")
        await B.wait_for_timeout(500)
        check(await bb.locator(".ad-chip", has_text="Primal").count() == 0, "other screen hides it too")
        await a.locator(".cal-row", has_text="Pessoal").locator(".tile").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .sw").nth(0).click()
        await a.locator(".sheet input[type=text]").fill("Minha agenda")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(600)
        prefs = json.load(open(f"{data}/cronologia.json"))
        check(prefs["calendars"]["calendar.pessoal"] == {"name": "Minha agenda", "color": "vermelho"}, f"name and color saved ({prefs['calendars']['calendar.pessoal']})")
        # calendar views render
        await a.locator(".tab").nth(1).click(); await A.wait_for_timeout(500)
        for mode in ("Mês", "Semana", "3 dias", "Dia", "Lista"):
            await a.locator(".seg.compact button", has_text=__import__("re").compile(r"^\s*" + mode + r"\s*$")).click(); await A.wait_for_timeout(400)
        check(await a.locator(".search-box input").count() == 1, "calendar views switch (Mês, Semana, Dia, Lista)")
        await a.locator(".search-box input").fill("casamento"); await A.wait_for_timeout(900)
        check(await a.locator(".ev-row", has_text="Casamento").count() == 1, "search finds events months ahead")
        # camera
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .imp-tile", has_text="Digitalizar").click()
        await a.locator(".cam-shutter:not([disabled])").wait_for(timeout=8000); await A.wait_for_timeout(400)
        await a.locator(".cam-shutter").click(); await A.wait_for_timeout(300)
        await a.locator(".cam-done").click()
        await a.locator(".rv-card").first.wait_for(timeout=8000)
        check("Oftalmologista" in await a.locator(".rv-card .rv-title").first.input_value(), "camera shot read by the AI")
        await A.go_back(); await A.wait_for_timeout(400)
        check(await a.locator(".sheet").count() == 0, "Back closes the sheet")
        # Android HA app: one photo at a time
        actx = await b.new_context(viewport={"width":390,"height":844}, user_agent="Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/141.0 Mobile Safari/537.36 Home Assistant/2026.10.1-full (Android 14; Pixel 8)", timezone_id="America/Sao_Paulo")
        ap = await actx.new_page(); await ap.goto(URL); await ap.locator("cronologia-app .brand-head").first.wait_for()
        check(await ap.locator("cronologia-app #cr-photos").get_attribute("multiple") is None, "HA Android app picks one photo at a time")
        await actx.close()
        await ctx.close()
        # older Home Assistant (no calendar/event/subscribe): reads by polling
        data = start(old=True)
        ctx2 = await b.new_context(viewport={"width":390,"height":844}, timezone_id="America/Sao_Paulo")
        P = await ctx2.new_page(); await P.clock.set_fixed_time(_t); await P.goto(URL)
        pp = P.locator("cronologia-app")
        await P.wait_for_timeout(1500)
        t = await pp.locator(".ev-row .ev-title").all_inner_texts()
        check("Água micelar" in t, "older Home Assistant: events still load (REST)")
        await pp.locator(".panel.meds").wait_for(timeout=8000)
        check("Gardenal" in await pp.locator(".panel.meds").inner_text(), "older Home Assistant: doses panel works by polling")
        await pp.locator(".tab.fab").click(); await P.wait_for_timeout(300)
        await pp.locator(".sheet .ev-title-input").fill("Sem assinatura")
        await pp.locator(".sheet .btn.primary", has_text="Criar evento").click(); await P.wait_for_timeout(1500)
        check("Sem assinatura" in await pp.locator(".ev-row .ev-title").all_inner_texts(), "older Home Assistant: new event shows after saving")
        print("errors:", [e for e in errs if "status of 4" not in e] or "none")
        print(f"{n_ok} checks passed")
        await b.close()
try:
    asyncio.run(main())
finally:
    for p in procs: p.kill()
