import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, re, datetime
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
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
    data = f"{SP}/crr-data"; shutil.rmtree(data, ignore_errors=True)
    os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
    env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
    procs.append(subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(0.6)
    aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
    procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
    time.sleep(1.0)
    return data
def fake_log(data): return open(f"{data}/fake.log").read()
def stored(data): return json.load(open(f"{data}/cronologia.json"))
def state(entity):
    req = urllib.request.Request(f"http://127.0.0.1:8123/api/states/{entity}", headers={"authorization": "Bearer dev"})
    return json.loads(urllib.request.urlopen(req).read())
def fire(event_type, d):
    req = urllib.request.Request("http://127.0.0.1:8123/dev/fire", data=json.dumps({"event_type": event_type, "data": d}).encode(), method="POST")
    urllib.request.urlopen(req).read()
async def wait_for(fn, label, tries=60):
    for _ in range(tries):
        try:
            if await fn() if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)

async def main():
    data = start()
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
        await a.locator(".panel.meds").wait_for(timeout=10000)
        # 1.56.0: Recompensas off (as it starts): Rotinas is the tab in its place, and leaves the menu of Mais
        tabs = await a.locator("nav .tab").all_inner_texts()
        check([t.strip() for t in tabs] == ["Agora", "Calendário", "Adicionar", "Rotinas", "Mais"], f"off: Rotinas in place of Recompensas ({tabs})")
        await a.locator("nav .tab", has_text="Rotinas").click(); await A.wait_for_timeout(500)
        check(await a.locator(".routines-tab .cat-sec").count() >= 1 and await a.locator(".uplink").count() == 0 and "on" in (await a.locator("nav .tab", has_text="Rotinas").get_attribute("class")), "the Rotinas tab: the registered ones, lit, no ‹ Mais")
        await A.screenshot(path=f"{SP}/shots/cr-rotinas-tab.png")
        # Mais is a menu (1.43.0); Calendários is its first row, Configurações the last
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        mt = [t.strip() for t in await a.locator(".menu-row b").all_inner_texts()]
        check(mt == ["Calendários", "Recompensas", "Avisos", "Férias", "Configurações", "Sobre"], f"off: Mais rows without Rotinas, with Recompensas to turn it on ({mt})")
        await open_more(a, "Calendários")
        check(await a.locator(".cal-row").count() >= 5, "Calendários: the calendars")
        await open_more(a, "Dados"); await A.wait_for_timeout(300)
        check(await a.locator("#dados").count() == 1 and await a.locator(".cal-row").count() == 0 and "on" in (await a.locator(".tab", has_text="Mais").get_attribute("class")), "Configurações › Dados shows only Dados (Mais stays lit)")
        await A.go_back(); await A.wait_for_timeout(400)
        check(await a.locator(".menu-list").count() == 1 and await a.locator(".more-tabs").count() == 0, "Back goes to the menu of Mais instead of walking the tabs")
        await A.go_back(); await A.wait_for_timeout(400)
        check(await a.locator(".menu-list").count() == 0 and await a.locator(".panel.meds").count() == 1, "Back again leaves Mais")
        # turned on in Mais › Recompensas (1.64.0: a row of Mais): the people of Home Assistant (no pets), weekly
        await open_more(a, "Recompensas"); await A.wait_for_timeout(400)
        await a.locator("#placar .switch input[aria-label='Usar recompensas']").check()
        await wait_for(lambda: stored(data)["app"].get("score", {}).get("enabled") is True and stored(data)["score"]["current"], "scoreboard on, current period saved")
        sc = stored(data)["app"]["score"]
        check(sorted(sc["participants"]) == ["Aurora", "Davi"] and sc["period"] == "semana", f"the people of Home Assistant, weekly ({sc['participants']}, {sc['period']})")
        await A.wait_for_timeout(400)
        tabs = await a.locator("nav .tab").all_inner_texts()
        check([t.strip() for t in tabs] == ["Agora", "Calendário", "Adicionar", "Recompensas", "Mais"], f"on: Recompensas back in the bar ({tabs})")
        await a.locator(".uplink").click(); await A.wait_for_timeout(400)
        mt = [t.strip() for t in await a.locator(".menu-row b").all_inner_texts()]
        check(mt == ["Calendários", "Rotinas", "Recompensas", "Avisos", "Férias", "Configurações", "Sobre"], f"on: Rotinas back in Mais ({mt})")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(300)
        await a.locator(".panel.board").wait_for(timeout=5000)
        board = await a.locator(".panel.board").inner_text()
        check("0" in board and "Ninguém pontuou ainda" in board, "empty board 0 × 0")
        check(await a.locator(".score-today").count() == 0, "Para pontuar hoje starts off")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Recompensas"); await A.wait_for_timeout(400)
        sw = a.locator("#placar .switch input[aria-label='Marcar pontos em Recompensas']")
        check(await sw.count() == 1 and not await sw.is_checked(), "switch in Mais › Placar, off")
        await sw.check()
        await wait_for(lambda: stored(data)["app"]["score"].get("manual") is True, "manual points switched on")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(500)
        await a.locator(".score-today").wait_for(timeout=5000)
        today_items = await a.locator(".score-today .chore-tx b").all_inner_texts()
        check("Tirar o lixo" in today_items and "Lavar a louça" in today_items and "Gardenal" not in today_items, f"today's chores with points listed ({today_items})")
        check(await a.locator(".score-today .chore", has_text="ficou de ontem").count() >= 1, "yesterday's open chores can still be marked")
        # mark a chore: dev session has no HA user -> asks who did it
        await a.locator(".score-today .chore", has_text="Tirar o lixo").filter(has_not_text="ontem").locator(".chk").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet .who-btn").count() == 2 and "+10 pontos" in await a.locator(".sheet").inner_text(), "unknown user: asks who did it (+10)")
        await a.locator(".sheet .who-btn", has_text="Aurora").click()
        await wait_for(lambda: any(e["who"] == "Aurora" and e["points"] == 10 for e in stored(data)["score"]["entries"]), "points saved for Aurora")
        async def aurora10(): return "10" in await bb.locator(".duel-side", has_text="Aurora").locator(".duel-pts").inner_text()
        await bb.locator(".tab", has_text="Recompensas").click()
        await wait_for(aurora10, "other screen shows Aurora 10")
        toast = await a.locator(".toast").inner_text()
        check("Feito por Aurora · +10" in toast and "Foi Davi" in toast, f"toast offers giving it to the other ({toast.strip()})")
        await a.locator(".toast button").click()
        await wait_for(lambda: [e["who"] for e in stored(data)["score"]["entries"]] == ["Davi"], "\"Foi Davi\" moves the points")
        check(any(v.get("by") == "Davi" for v in stored(data)["checks"].values()), "the check says who did it")
        # crown + leader
        async def davi_lead(): return "Davi na frente" in await a.locator(".board-foot").inner_text()
        await wait_for(davi_lead, "leader shown with the crown")
        check(await a.locator(".score-today .chore", has_text="Tirar o lixo").filter(has_not_text="ontem").count() == 0, "done: it leaves Para pontuar hoje")
        # undo the chore (on the start screen) removes the points
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }"); await A.wait_for_timeout(300)
        await a.locator("#casa .chore.done", has_text="Tirar o lixo").filter(has_not_text="ontem").locator(".chk").click()
        await wait_for(lambda: stored(data)["score"]["entries"] == [], "unmarking takes the points back")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(500)
        # extra points
        await a.locator(".btn", has_text="Pontos avulsos").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet #ex-title").fill("Lavou o carro")
        await a.locator(".sheet .pick.person", has_text="Aurora").click()
        await a.locator(".sheet .pick", has_text="+20").click()
        await a.locator(".sheet .btn.primary").click()
        await wait_for(lambda: any(e["title"] == "Lavou o carro" and e["points"] == 20 and e["kind"] == "extra" for e in stored(data)["score"]["entries"]), "pontos avulsos saved")
        async def feed(): return "Lavou o carro" in await a.locator(".panel.extrato").inner_text()
        await wait_for(feed, "feed lists it")
        # maintenance with points (fake: filtro +30, ar +40)
        await a.locator(".score-today .chore", has_text="Limpar o ar-condicionado").locator(".btn-pts").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .who-btn", has_text="Davi").click()
        await wait_for(lambda: any(e["kind"] == "manutencao" and e["who"] == "Davi" and e["points"] == 40 for e in stored(data)["score"]["entries"]), "maintenance done gives its points")
        await wait_for(lambda: re.search(r"event updated calendar.casa", fake_log(data)), "maintenance moved to the next date")
        # prize: this period and the next
        await a.locator(".prize .text-btn", has_text="Definir").first.click(); await A.wait_for_timeout(300)
        check("O mesmo para todos" in await a.locator(".sheet").inner_text() and "Um para cada pessoa" in await a.locator(".sheet").inner_text(), "prize sheet: the same for all, or one for each")
        await a.locator(".sheet input[type=text]").fill("Escolher o restaurante de domingo")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click()
        await wait_for(lambda: list(stored(data)["score"]["rewards"].values()) == ["Escolher o restaurante de domingo"], "prize of this period saved")
        await a.locator(".prize-next .text-btn").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet input[type=text]").fill("Massagem")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click()
        await wait_for(lambda: len(stored(data)["score"]["rewards"]) == 2, "prize of the next period saved")
        async def prize_b(): return "Escolher o restaurante de domingo" in await bb.locator(".panel.prize").inner_text() and "Massagem" in await bb.locator(".panel.prize").inner_text()
        await wait_for(prize_b, "prizes on the other screen")
        # one for each person (this period)
        await a.locator(".prize .prize-head .text-btn").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .seg button", has_text="Um para cada pessoa").click(); await A.wait_for_timeout(200)
        ins = a.locator(".sheet input[type=text]")
        check(await ins.count() == 2 and await ins.nth(0).input_value() == "Escolher o restaurante de domingo", "one field per person, starting from the shared prize")
        labels = await a.locator(".sheet .flabel").all_inner_texts()
        await ins.nth(0).fill("Jantar fora"); await ins.nth(1).fill("Massagem nos pés")
        await A.screenshot(path=f"{SP}/shots/cr-prize-sheet.png")
        await a.locator(".sheet .btn.primary", has_text="Salvar").click()
        cur_key = stored(data)["score"]["current"]["key"]
        names = [l.replace("Se ", "").replace(" vencer", "") for l in labels]
        await wait_for(lambda: stored(data)["score"].get("prizes", {}).get(cur_key) == {names[0]: "Jantar fora", names[1]: "Massagem nos pés"} and cur_key not in stored(data)["score"]["rewards"], f"a prize for each person saved ({names})")
        card = await a.locator(".panel.prize").inner_text()
        check(f"Se {names[0]} vencer" in card and "Jantar fora" in card and "Massagem nos pés" in card, "the card shows each person's prize")
        await A.screenshot(path=f"{SP}/shots/cr-prize-card.png")
        # sensor
        await wait_for(lambda: state("sensor.cronologia_placar")["state"] == "Davi" and state("sensor.cronologia_placar")["attributes"]["pontos"] == {"Davi": 40, "Aurora": 20}, "sensor.cronologia_placar")
        # NFC with quem
        fire("cronologia_feito", {"nome": "Regar as plantas", "quem": "Aurora"})
        await wait_for(lambda: any(e["title"] == "Regar as plantas" and e["who"] == "Aurora" for e in stored(data)["score"]["entries"]), "cronologia_feito with quem gives the points")
        # chore form: points
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet .pick.on", has_text="+10").count() == 1, "new chore starts with 10 points when the scoreboard is on")
        await a.locator(".sheet .ev-title-input").fill("Limpar o fogão")
        await a.locator(".sheet .pick", has_text="+20").click()
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        await a.locator(".sheet .btn.primary", has_text="Criar rotina").click()
        await wait_for(lambda: "Limpar o fog" in fake_log(data) and "Pontos: 20" in fake_log(data), "chore created with \"Pontos: 20\" in the description")
        async def fogao(): return await a.locator(".score-today .chore", has_text="Limpar o fogão").count() == 1
        await wait_for(fogao, "new chore listed to score today")
        # event sheet
        await a.locator(".score-today .chore", has_text="Limpar o fogão").locator(".chore-tx").click(); await A.wait_for_timeout(300)
        sheet = await a.locator(".sheet").inner_text()
        check("20 pontos para quem fizer" in sheet and "+20" in sheet, "event sheet shows the points")
        await a.locator(".sheet .icon-btn[aria-label=Fechar]").click(); await A.wait_for_timeout(300)
        # settings: switch to monthly keeps the points
        check(await a.locator(".score-set").count() == 0, "scoreboard settings are not in Recompensas anymore")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Recompensas"); await A.wait_for_timeout(400)
        check(await a.locator("#placar").count() == 1 and await a.locator("#demeritos-ajustes").count() == 1, "Mais › Recompensas has the settings and the deméritos")
        await A.screenshot(path=f"{SP}/shots/cr-mais-placar.png")
        await a.locator("#placar .seg button", has_text="Mensal").click()
        await wait_for(lambda: stored(data)["app"]["score"]["period"] == "mes" and stored(data)["score"]["current"]["start"].endswith("-01"), "monthly period starts on the 1st")
        check(stored(data)["score"]["history"] == [], "changing the period does not close one")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(500)
        async def still(): return "Mês de" in await a.locator(".brand-head .status").inner_text() or "Mês" in await a.locator(".brand-head .status").inner_text()
        await wait_for(still, "status shows the month")
        # 1.55.0: Recompensas, with Usar recompensas at the top like the other options; off, no deméritos
        # (1.64.0: its own screen in Mais, not a tab of Configurações)
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Recompensas"); await A.wait_for_timeout(400)
        check((await a.locator(".page-title").first.inner_text()).strip() == "Recompensas" and await a.locator(".more-tabs").count() == 0 and await a.locator(".uplink").count() == 1, "Mais › Recompensas: its own screen, ‹ Mais, no tabs")
        use = a.locator("#placar .switch input[aria-label='Usar recompensas']")
        first = (await a.locator("#placar .switch-row .label").first.inner_text()).strip()
        check(await use.is_checked() and first == "Usar recompensas" and await a.locator("text=Desligar o placar").count() == 0, f"Usar recompensas on, first, no Desligar o placar ({first})")
        await use.uncheck()
        await wait_for(lambda: stored(data)["app"]["score"]["enabled"] is False, "off: saved")
        await A.wait_for_timeout(400)
        check(await a.locator("#demeritos-ajustes").count() == 0 and await a.locator("#placar .field").count() == 0 and await use.count() == 1, "off: only the switch, no deméritos")
        await open_more(a, "Integrações"); await A.wait_for_timeout(400)
        sens = await a.locator("#sensores").inner_text()
        check("cronologia_demerito" not in sens and "sensor.cronologia_placar" not in sens and "se vale pontos" not in sens, "off: no demérito, placar sensor nor points in the events")
        tabs = [t.strip() for t in await a.locator("nav .tab").all_inner_texts()]
        check(tabs == ["Agora", "Calendário", "Adicionar", "Rotinas", "Mais"], f"off: Rotinas in place of Recompensas ({tabs})")
        await open_more(a, "Recompensas"); await A.wait_for_timeout(400)
        await a.locator("#placar .switch input[aria-label='Usar recompensas']").check()
        await wait_for(lambda: stored(data)["app"]["score"]["enabled"] is True and stored(data)["app"]["score"]["participants"] == ["Aurora", "Davi"] and stored(data)["app"]["score"]["period"] == "mes", "on again: the same people and period")
        await A.wait_for_timeout(400)
        check(await a.locator("#demeritos-ajustes").count() == 1, "on: the deméritos back")
        print("errors:", [e for e in errs if "status of 4" not in e] or "none")
        print(f"{n_ok} checks passed")
        await b.close()
try:
    asyncio.run(main())
finally:
    for p in procs: p.kill()
