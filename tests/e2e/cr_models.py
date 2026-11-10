import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, re, datetime
from playwright.async_api import async_playwright
from mais_lib import open_more
from pick_lib import pick_time, pick_date
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
GREPO = GERENCIA
URL = "http://127.0.0.1:8099/"
n_ok = 0
procs = []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if not c: raise SystemExit(1)
    n_ok += 1
def start():
    for p in procs: p.kill()
    procs.clear(); time.sleep(0.4)
    data = f"{SP}/crm-data"; shutil.rmtree(data, ignore_errors=True)
    os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{data}/gdata")
    subprocess.run(["python3", f"{FIX}/gerencia_dados.py", f"{data}/gdata/gerencia.json"], check=True)
    genv = dict(os.environ, TZ="America/Sao_Paulo", GERENCIA_DEV="1", GERENCIA_PORTA="8191", GERENCIA_DATA=f"{data}/gdata", GERENCIA_SHARE=f"{data}/share/gerencia", GERENCIA_URL_INTERNA="http://127.0.0.1:8191", GERENCIA_HA_API="http://127.0.0.1:1/api")
    procs.append(subprocess.Popen(["python3", f"{GREPO}/gerencia/app/server.py"], env=genv, stdout=open(f"{data}/g.log", "w"), stderr=subprocess.STDOUT))
    env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
    procs.append(subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(0.7)
    aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
    procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(1.0)
    return data
def fake_log(data): return open(f"{data}/fake.log").read()
def get(url): return json.loads(urllib.request.urlopen(url).read())
def fire(event_type, d):
    req = urllib.request.Request("http://127.0.0.1:8123/dev/fire", data=json.dumps({"event_type": event_type, "data": d}).encode(), method="POST")
    urllib.request.urlopen(req).read()
def state(entity):
    req = urllib.request.Request(f"http://127.0.0.1:8123/api/states/{entity}", headers={"authorization": "Bearer dev"})
    return json.loads(urllib.request.urlopen(req).read())
def gdata(data): return json.load(open(f"{data}/gdata/gerencia.json"))
async def wait_for(fn, label, tries=60):
    for _ in range(tries):
        try:
            if await fn() if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)

async def main():
    data = start()
    today = datetime.date.today()
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--lang=pt-BR"])
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR")
        errs = []
        A = await ctx.new_page(); B = await ctx.new_page()
        for pg in (A, B):
            pg.on("pageerror", lambda e: errs.append(f"pageerror: {e}"))
            pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        await A.goto(URL); await B.goto(URL)
        # 1.25.0: sensors only with Mais › Integrações › Sensores no Home Assistant on
        await A.wait_for_timeout(1200)
        await A.evaluate("() => document.querySelector('cronologia-app')._saveAppPrefs({ sensors_on: true })")
        a = A.locator("cronologia-app"); bb = B.locator("cronologia-app")
        await a.locator(".panel.meds .dose").first.wait_for(timeout=10000)
        await B.wait_for_timeout(300); await B.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }")  # Rotina da casa: the done ones unfolded
        doses = await a.locator(".panel.meds .dose-tx b").all_inner_texts()
        check(len(doses) == 5 and "Mounjaro 2,5 mg" in doses, f"Remédios de hoje lists today's doses ({doses})")
        # the sample Mounjaro dose is an hour before now: right after midnight it falls on yesterday
        if datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=-3))).hour >= 1:
            check(await a.locator(".panel.meds.alert .meds-alert", has_text="Mounjaro").count() == 1, "late dose turns the card red with a warning")
            check("atrasado" in await a.locator(".brand-head .status").inner_text(), "status line warns about the late dose")
        check(await a.locator(".meds-who", has_text="Aurora").count() == 1 and await a.locator(".meds-who", has_text="Mimi").count() == 1, "doses grouped by who takes them (people and pets)")
        check("Sem celular para Mimi" in await a.locator(".panel.meds .panel-foot").inner_text(), "warns when a person has no phone for the alerts")
        # phone alert for the late dose, then "Tomei" pressed on the phone
        await wait_for(lambda: any("Mounjaro" in n.get("title", "") for n in get("http://127.0.0.1:8123/dev/notifications")), "late alert sent to Aurora's phone (auto-detected)", tries=120)
        n = next(n for n in get("http://127.0.0.1:8123/dev/notifications") if "Mounjaro" in n.get("title", ""))
        check(n["service"] == "mobile_app_galaxy_s23" and [x["title"] for x in n["data"]["actions"]] == ["Tomei", "Adiar 15 min"], f"alert has Tomei / Adiar buttons ({n['service']})")
        for el in (a, bb): await el.evaluate("(e) => { e._medsDoneOpen = true; e.requestUpdate(); }")  # 1.59.0: the taken doses are folded
        fire("mobile_app_notification_action", {"action": n["data"]["actions"][0]["action"]})
        async def taken_mj():
            return "tomou" in await bb.locator(".dose", has_text="Mounjaro").inner_text()
        await wait_for(taken_mj, "Tomei on the phone marks the dose on every screen")
        await wait_for(lambda: any(x.get("message") == "clear_notification" for x in get("http://127.0.0.1:8123/dev/notifications")), "alert removed from the phone after taking")
        check(await a.locator(".meds-alert", has_text="Mounjaro").count() == 0, "no more warning for Mounjaro")
        # Tomei in the app + Desfazer (the cat's: "Tomado", not "Tomei")
        gb = a.locator(".dose", has_text="Gardenal").locator(".dose-btn")
        check((await gb.inner_text()).strip() == "Tomado" and await gb.get_attribute("aria-label") == "Mimi tomou: Gardenal", f"someone else's dose: Tomado ({(await gb.inner_text()).strip()})")
        gs = (await a.locator(".dose", has_text="Gardenal").locator(".dose-tx small").inner_text()).strip()
        check(gs.startswith("Dose: 1/4 de comprimido"), f"the dose says Dose: ({gs})")
        await a.locator(".dose", has_text="Gardenal").locator(".dose-btn").click()
        async def g_taken(): return await a.locator(".dose.tomado", has_text="Gardenal").count() == 1
        await wait_for(g_taken, "Tomei in the app")
        await wait_for(lambda: len(json.load(open(f"{data}/cronologia.json"))["checks"]) == 2, "checks saved on the server")
        await a.locator(".toast button", has_text="Desfazer").click()
        async def g_open(): return await a.locator(".dose.tomado", has_text="Gardenal").count() == 0
        await wait_for(g_open, "Desfazer unmarks the dose")
        # sensors in Home Assistant
        await wait_for(lambda: state("sensor.cronologia_remedios_hoje")["attributes"]["tomados"] == 1, "sensor.cronologia_remedios_hoje published")
        check(state("binary_sensor.cronologia_remedio_atrasado")["state"] in ("on", "off") and state("sensor.cronologia_manutencoes_vencidas")["state"] == "1", "remedio_atrasado and manutencoes_vencidas sensors")
        # event sheet of a dose
        await a.locator(".dose", has_text="Sertralina").locator(".dose-main").click(); await A.wait_for_timeout(300)
        sheet = await a.locator(".sheet").inner_text()
        check("Dose: 50 mg" in sheet and "Quem toma: Aurora" in sheet and "Aviso no celular de Aurora" in sheet and "Galaxy" not in sheet and "#remédio" not in sheet, "dose sheet shows dose, who and whose phone (no device, no raw tags)")
        # edit the series through the template form
        await a.locator(".sheet .btn", has_text="Editar").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet .flabel", has_text="Dose").count() == 1, "Editar opens the remédio form")
        await a.locator(".sheet input[placeholder^='Ex.: 1 comprimido']").fill("100 mg · 1 comprimido")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .imp-opt", has_text="Este e os próximos").click()
        await wait_for(lambda: re.search(r"event updated calendar.remedios fake-\d+ \d{8}T\d{6} THISANDFUTURE", fake_log(data)), "series changed from this one on")
        async def newdose(): return "100 mg" in await a.locator(".dose", has_text="Sertralina").inner_text()
        await wait_for(newdose, "new dose shows on the card")
        # new remédio from the template: 2x a day, every other day, for 10 days
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Remédio").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Amoxicilina 500 mg")
        await a.locator(".sheet input[placeholder^='Ex.: 1 comprimido']").fill("1 cápsula")
        await a.locator(".sheet .pick.person", has_text="Davi").click()
        await a.locator(".sheet .pick", has_text="2x").click()
        await pick_time(a.locator(".sheet .time-pill .pickf").nth(1), "23:30")
        await a.locator(".sheet .seg-grid button", has_text="Dia sim, dia não").click()
        await a.locator(".sheet .pick", has_text="Por alguns dias").click()
        await a.locator(".sheet .num-input").fill("10")
        await a.locator(".sheet .btn.primary", has_text="Criar remédio").click()
        await wait_for(lambda: fake_log(data).count("Amoxicilina") >= 2, "two events created, one per time")
        made = [l for l in fake_log(data).splitlines() if "Amoxicilina" in l and "event created" in l]
        until = (today + datetime.timedelta(days=9)).strftime("%Y%m%d")
        check(all("FREQ=DAILY;INTERVAL=2;UNTIL=" in l for l in made) and all("#remédio\\nDose: 1 cápsula\\nQuem toma: Davi" in l for l in made), "rrule every other day with an end, and the model in the description")
        check(all(re.search(r"UNTIL=\d{8}T\d{6}Z", l) for l in made), f"UNTIL in UTC ({re.search(r'UNTIL=[^\"]*', made[0]).group(0)})")
        # 08:00 and 23:30: in the morning (before 08:00) both doses are still ahead today
        early = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=-3))).strftime("%H:%M") < "08:00"
        hm_now = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=-3))).strftime("%H:%M")
        ahead = 2 if early else 1 if hm_now < "23:30" else 0  # after 23:30 both of today have passed
        async def amox(): return await a.locator(".dose", has_text="Amoxicilina").count() == ahead
        await wait_for(amox, "only the doses still ahead today show on the card")
        if early:
            check(f"{today.isoformat()}T08:00" in fake_log(data), "a time still ahead starts today")
        else:
            check(f"{(today + datetime.timedelta(days=2)).isoformat()}T08:00" in fake_log(data), "a time already past starts on the next day of the rule (every other day: in 2 days)")
        # rotina: weekly on 2 days (today included), any time
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Varrer a varanda")
        await a.locator(".sheet .pick.person", has_text="Aurora").click()
        await a.locator(".sheet .seg-grid button", has_text="Dias da semana").click()
        wd = (today.weekday() + 1) % 7  # JS: 0 = Sunday
        other = (wd + 3) % 7
        for d in [other]:
            await a.locator(".sheet .wdp").nth(d).click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        await wait_for(lambda: "Varrer a varanda" in fake_log(data) and "FREQ=WEEKLY;BYDAY=" in fake_log(data), "rotina created weekly on the chosen days")
        async def chore(): return await a.locator(".chore", has_text="Varrer a varanda").count() == 1
        await wait_for(chore, "rotina shows in Rotina da casa today")
        await a.locator(".chore", has_text="Varrer a varanda").locator(".chk").click()
        async def chore_done(): return await bb.locator(".chore.done", has_text="Varrer a varanda").count() == 1
        await wait_for(chore_done, "Feito marks it on every screen")
        # manutenção: every 3 months, last done 85 days ago -> shows up (due in a few days)
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Manutenção").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Limpar a calha")
        await a.locator(".sheet .pick", has_text="3 meses").click()
        last = (today - datetime.timedelta(days=86)).isoformat()
        await pick_date(a.locator(".sheet #kf-last"), last)
        await A.wait_for_timeout(200)
        nl = await a.locator(".sheet .next-line").inner_text()
        check("Próxima" in nl, f"form shows the next date ({nl.strip()})")
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        await a.locator(".sheet .btn.primary", has_text="Criar manutenção").click()
        await wait_for(lambda: "Limpar a calha" in fake_log(data) and "A cada: 3 meses" in fake_log(data), "manutenção created with its interval")
        async def calha(): return await a.locator(".maint", has_text="Limpar a calha").count() == 1
        await wait_for(calha, "manutenção near its date shows in the Agora")
        await a.locator(".maint", has_text="Limpar a calha").locator(".dose-btn").click()
        await wait_for(lambda: re.search(r"event updated calendar.casa fake-\d+", fake_log(data)), "Feito moves the manutenção (event updated)")
        async def calha_gone(): return await a.locator(".maint", has_text="Limpar a calha").count() == 0
        await wait_for(calha_gone, "done manutenção leaves the Agora until next time")
        await a.locator(".toast button", has_text="Desfazer").click()
        await wait_for(calha, "Desfazer puts it back")
        # NFC / automation: cronologia_feito
        fire("cronologia_feito", {"nome": "Trocar o filtro de água"})
        async def filtro_gone(): return await a.locator(".maint", has_text="Trocar o filtro de água").count() == 0
        await wait_for(filtro_gone, "cronologia_feito (NFC tag) marks a manutenção done")
        await a.locator(".add-line", has_text="Todas as manutenções").click(); await A.wait_for_timeout(300)
        txt = await a.locator(".sheet .maint", has_text="Trocar o filtro de água").inner_text()
        check("a cada 6 meses" in txt, f"all-maintenance sheet lists it with the next date ({txt.splitlines()[1] if len(txt.splitlines()) > 1 else txt})")
        await a.locator(".sheet .icon-btn[aria-label=Fechar]").click(); await A.wait_for_timeout(300)
        # GerencIA bills
        await a.locator(".panel.bills").wait_for(timeout=8000)
        check(await a.locator(".panel.bills .bill").count() == 5, "card shows 5 bills, late ones first")
        await a.locator(".panel.bills .add-line", has_text="Mais").click(); await A.wait_for_timeout(300)
        bills = await a.locator(".panel.bills").inner_text()
        check("IPTU" in bills and "Fatura Nubank · Davi" in bills and "Internet" in bills, "Contas a pagar mixes GerencIA bills and #conta events")
        await a.locator(".bill", has_text="IPTU").locator(".dose-btn").click()
        await wait_for(lambda: any(l["descricao"] == "IPTU" and l["pago"] for l in gdata(data)["lancamentos"]), "Paguei gives the GerencIA bill a payment")
        async def iptu_paid(): return await bb.locator(".bill.paid", has_text="IPTU").count() + (0 if "IPTU" in await bb.locator(".panel.bills").inner_text() else 1) >= 1
        await wait_for(iptu_paid, "paid bill shows as paid on the other screen")
        await a.locator(".toast button", has_text="Desfazer").click()
        await wait_for(lambda: any(l["descricao"] == "IPTU" and not l["pago"] for l in gdata(data)["lancamentos"]), "Desfazer goes back to unpaid in the GerencIA")
        # fatura through its sheet
        await a.locator(".bill", has_text="Fatura").first.locator(".bill-main").click(); await A.wait_for_timeout(300)
        check("compras" in await a.locator(".sheet").inner_text(), "fatura sheet")
        await a.locator(".sheet .btn.primary", has_text="Paguei").click()
        await wait_for(lambda: any(l.get("recorrencia") == "r-netflix" and l["pago"] for l in gdata(data)["lancamentos"]), "Paguei on a fatura pays its purchases")
        # calendar bill (#conta event)
        await a.locator(".bill", has_text="Internet").locator(".dose-btn").click()
        async def internet_paid(): return await a.locator(".bill.paid", has_text="Internet").count() == 1
        await wait_for(internet_paid, "#conta event paid with a check")
        # new bill into the GerencIA
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Conta").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet .pick.on", has_text="GerencIA").count() == 1, "Conta goes to the GerencIA by default when it is there")
        await a.locator(".sheet .ev-title-input").fill("Condomínio")
        await a.locator(".sheet .money input").fill("650,00")
        await a.locator(".sheet select").select_option(label="Casa")
        await a.locator(".sheet .btn.primary", has_text="Criar no GerencIA").click()
        await wait_for(lambda: any(r["descricao"] == "Condomínio" and r["valor"] == 650 and r["categoria"] == "c-casa" for r in gdata(data)["recorrencias"]), "Conta created as a monthly fixo in the GerencIA")
        async def condo(): return await a.locator(".bill", has_text="Condomínio").count() == 1
        await wait_for(condo, "new GerencIA bill shows on the card")
        # calendar views show the bills and the models
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg.compact button", has_text="Lista").click(); await A.wait_for_timeout(800)
        rows = await a.locator(".ev-row").all_inner_texts()
        check(any("Condomínio" in r and "GerencIA" in r for r in rows), "GerencIA bills on the calendar list")
        check(await a.locator(".ev-row.done", has_text="Varrer a varanda").count() >= 1, "done chores marked on the calendar")
        # Mais: people and alerts
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        await open_more(a, "Avisos"); await A.wait_for_timeout(400)
        av = await a.locator("#avisos").inner_text()
        check("Mimi" in av and not re.search(r"Pixel|Galaxy|mobile_app|Automático", av), "the people, no devices (their phones are the ones tied to them in Home Assistant)")
        await a.locator("#avisos .pick", has_text="Davi").click(); await A.wait_for_timeout(600)
        await a.locator("#avisos .pick", has_text="1 hora").click(); await A.wait_for_timeout(600)
        prefs = json.load(open(f"{data}/cronologia.json"))["app"]
        check(prefs.get("alerts") == {"meds": True, "late": 60, "caregivers": ["Davi"]}, f"alerts saved, Quem cuida by person ({prefs.get('alerts')})")
        await a.locator("#avisos .person-row", has_text="Mimi").locator("select").select_option("Davi"); await A.wait_for_timeout(600)
        prefs = json.load(open(f"{data}/cronologia.json"))["app"]
        check(prefs.get("people") == {"Mimi": {"care": "Davi"}}, f"the person who gets Mimi's alerts saved ({prefs.get('people')})")
        await a.locator("#avisos .person-row", has_text="Mimi").locator(".icon-btn[aria-label^='Testar']").click()
        await wait_for(lambda: any(x.get("data", {}).get("tag") == "cronologia-teste" and x["service"] == "mobile_app_pixel_8" for x in get("http://127.0.0.1:8123/dev/notifications")), "Testar sends a test alert")
        tn = [x for x in get("http://127.0.0.1:8123/dev/notifications") if x.get("data", {}).get("tag") == "cronologia-teste"][-1]
        acts = tn["data"].get("actions") or []
        check([x["title"] for x in acts] == ["Tomei", "Adiar 15 min"] and acts[0]["action"] == "CRONOLOGIA_TESTE_TOMEI_mobile_app_pixel_8", f"test alert has the Tomei and Adiar buttons ({acts})")
        fire("mobile_app_notification_action", {"action": "CRONOLOGIA_TESTE_TOMEI_mobile_app_pixel_8"})
        await wait_for(lambda: any(x["service"] == "mobile_app_pixel_8" and "Tomei chegou" in x.get("message", "") for x in get("http://127.0.0.1:8123/dev/notifications")), "tapping Tomei on the test confirms on the phone")
        async def tested(): return "o botão Tomei chegou ao app" in await a.locator(".toast").inner_text()
        await wait_for(tested, "and on the app screen")
        await open_more(a, "Integrações"); await A.wait_for_timeout(400)
        g = await a.locator("#gerencia").inner_text()
        check(re.search(r"Conectado ao GerencIA \d+\.\d+\.\d+", g), f"GerencIA connection shown in Mais ({g[:60]!r})")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(400)
        foot = await a.locator(".panel.meds .panel-foot").inner_text()
        check("Sem celular" not in foot, f"no more missing-phone warning ({foot.strip()})")
        # Mimi is a pet: no phone of hers; the hint names whose phone gets her alert (Davi's)
        await A.evaluate("() => document.querySelector('cronologia-app')._saveAppPrefs({ people: { Mimi: { care: 'Davi', pet: true } } })"); await A.wait_for_timeout(1200)
        foot = (await a.locator(".panel.meds .panel-foot").inner_text()).strip()
        check("Mimi" not in foot and "Davi" in foot and "Aurora" in foot, f"a pet: the hint names the owner of the phone, not the pet ({foot})")
        # GerencIA turned off: card falls back to calendar bills only
        req = urllib.request.Request("http://127.0.0.1:8191/api/state")
        st = json.loads(urllib.request.urlopen(req).read())
        st["ajustes"]["integracao"] = False
        urllib.request.urlopen(urllib.request.Request("http://127.0.0.1:8191/api/state", data=json.dumps({k: st[k] for k in ["rev", "bancos", "investimentos", "ajustes", "exemplo", "lancamentos", "recorrencias", "categorias"]}).encode(), method="PUT", headers={"content-type": "application/json"})).read()
        check(not os.path.exists(f"{data}/share/gerencia/integracao.json"), "GerencIA switch removes the connection file")
        print("errors:", [e for e in errs if "status of 4" not in e] or "none")
        print(f"{n_ok} checks passed")
        await b.close()
try:
    asyncio.run(main())
finally:
    for p in procs: p.kill()
