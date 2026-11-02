import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, re, datetime
from playwright.async_api import async_playwright
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
def start(old=False):
    for p in procs: p.kill()
    procs.clear(); time.sleep(0.4)
    data = f"{SP}/crt-data"; shutil.rmtree(data, ignore_errors=True)
    os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
    env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
    if old: env["FAKE_HA_OLD"] = "1"
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
        a = A.locator("cronologia-app"); bb = B.locator("cronologia-app")
        await a.locator(".panel.todos").wait_for(timeout=10000)
        txt = await a.locator(".panel.todos").inner_text()
        hm_now = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=-3))).strftime("%H:%M")
        late_n = 12 + (hm_now >= "17:30") + (hm_now >= "18:00")  # two tasks are due today at 17:30 and 18:00
        check("Dispositivo sem resposta 1\n" in txt and "Mais " in txt and f"{late_n} atrasadas" in txt, f"every list by default, long card folds ({late_n}: {txt[-400:]!r})")
        await a.locator(".panel.todos .add-line", has_text="Mais").click(); await A.wait_for_timeout(300)
        txt = await a.locator(".panel.todos").inner_text()
        check("Pagar o IPVA" in txt and "venceu há 2 dias" in txt and "Casa" in txt, "Tarefas com prazo lists late tasks with the list name")
        check("Café" not in txt and "Passar pano" not in txt and "Relatório mensal" not in txt, "tasks without a due date or done earlier stay out")
        # hide the Problem List
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Integrações").click(); await A.wait_for_timeout(400)
        st = await a.locator("#resolvia .ai-state").inner_text()
        check("Lendo as listas de tarefas do Home Assistant" in st and "4 listas" in st, f"ResolvIA state without the app ({st})")
        rows = await a.locator("#resolvia .row").all_inner_texts()
        check(any("Problem List" in r and "10 atrasadas" in r for r in rows), "Mais lists the ResolvIA lists with counts")
        await a.locator("#resolvia .row", has_text="Problem List").locator(".switch input").uncheck()
        await wait_for(lambda: stored(data)["app"].get("todo_hidden") == ["todo.problem_list"], "hidden list saved")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        async def no_problem(): return "Dispositivo sem resposta" not in await a.locator(".panel.todos").inner_text()
        await wait_for(no_problem, "hidden list leaves the card")
        # complete
        await a.locator(".panel.todos .chore", has_text="Pagar o IPVA").locator(".chk").click()
        await wait_for(lambda: re.search(r'todo updated todo.casa \{"item":"todo-\d+","status":"completed"\}', fake_log(data)), "Concluir calls todo.update_item (completed)")
        async def gone_b(): return "Pagar o IPVA" not in await bb.locator(".panel.todos").inner_text()
        await wait_for(gone_b, "other screen drops the done task live")
        await a.locator(".toast button", has_text="Desfazer").click()
        await wait_for(lambda: '"status":"needs_action"' in fake_log(data), "Desfazer reopens it")
        async def back_b(): return "Pagar o IPVA" in await bb.locator(".panel.todos").inner_text()
        await wait_for(back_b, "and it comes back")
        # timed task done today keeps a check in the card
        await a.locator(".panel.todos .chore", has_text="Levar o carro").locator(".chk").click()
        async def done_today(): return await a.locator(".panel.todos .chore.done", has_text="Levar o carro").count() == 1
        await wait_for(done_today, "a task due today stays with ✓ when done")
        # create a task from Novo
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        models = [m.strip() for m in await a.locator(".sheet .model").all_inner_texts()]
        check(models == ["Evento", "Tarefa", "Remédio", "Conta", "Rotina", "Manutenção"], f"Tarefa in the models ({models})")
        # the notes need Mais › Opções › Novo › Local e notas (off by default since 1.16.0)
        await A.evaluate("() => document.querySelector('cronologia-app').api.setAppPrefs({ event_details: true })"); await A.wait_for_timeout(400)
        await a.locator(".sheet .model", has_text="Tarefa").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .ev-title-input").fill("Comprar ração")
        await a.locator(".sheet .pick.list", has_text="Casa").click()
        await a.locator(".sheet .pick", has_text="Amanhã").click()
        await a.locator(".sheet .pick", has_text="Com horário").click()
        await a.locator(".sheet .inline-time").fill("10:30")
        await a.locator(".sheet textarea").nth(1).fill("A do gato castrado")
        await a.locator(".sheet .btn.primary", has_text="Criar tarefa").click()
        tomorrow = (datetime.date.today() + datetime.timedelta(days=1)).isoformat()
        await wait_for(lambda: f'"item":"Comprar ração","due_datetime":"{tomorrow} 10:30:00","description":"A do gato castrado"' in fake_log(data), "task created with todo.add_item (due_datetime, description)")
        async def racao(): return "amanhã às 10:30 · Casa" in await bb.locator(".panel.todos").inner_text()
        await wait_for(racao, "new task on the card of the other screen")
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .model", has_text="Tarefa").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet .pick.list.on", has_text="Casa").count() == 1, "remembers the last list")
        await a.locator(".sheet .ev-title-input").fill("Ligar para o encanador")
        await a.locator(".sheet .pick", has_text="Sem prazo").click()
        await a.locator(".sheet .btn.primary", has_text="Criar tarefa").click()
        await wait_for(lambda: '"item":"Ligar para o encanador"}' in fake_log(data), "task without a due date")
        # calendar
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(300)
        await a.locator(".seg.compact button", has_text="Lista").click(); await A.wait_for_timeout(800)
        rows = await a.locator(".ev-row").all_inner_texts()
        check(any("Enviar proposta" in r and "Trabalho · ResolvIA" in r for r in rows), "tasks on the calendar with their list")
        await a.locator(".ev-row", has_text="Enviar proposta").first.click(); await A.wait_for_timeout(300)
        sheet = await a.locator(".sheet").inner_text()
        check("Prazo:" in sheet and "Lista Trabalho" in sheet, "task sheet from the calendar")
        await a.locator(".sheet .btn.primary", has_text="Concluir").click()
        await wait_for(lambda: fake_log(data).count('"status":"completed"') >= 3, "Concluir from the sheet")
        await A.wait_for_timeout(400)
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Integrações").click(); await A.wait_for_timeout(400)
        await a.locator("#resolvia .row", has_text="Mostrar no calendário").locator(".switch input").uncheck(); await A.wait_for_timeout(600)
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(600)
        rows = await a.locator(".ev-row").all_inner_texts()
        check(not any("ResolvIA" in r for r in rows), "calendar switch takes the tasks off the calendar")
        await wait_for(lambda: stored(data)["app"].get("todo_off_calendar") is True, "calendar switch saved")
        # tasks without a due date on Agora (option)
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await a.locator(".more-tabs button", has_text="Integrações").click(); await A.wait_for_timeout(400)
        sw = a.locator("#resolvia .switch input[aria-label='Tarefas sem prazo na Agora']")
        check(await sw.count() == 1 and not await sw.is_checked(), "switch for tasks without a due date, off")
        await sw.check()
        await wait_for(lambda: stored(data)["app"].get("todo_undated") is True, "saved")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(700)
        card = a.locator(".panel.todos")
        if await card.locator(".add-line", has_text="Mais").count():
            await card.locator(".add-line", has_text="Mais").click(); await A.wait_for_timeout(300)
        txt = await card.inner_text()
        check("SEM PRAZO" in txt.upper() and "Passar pano na casa" in txt and "Café" in txt and txt.upper().startswith("TAREFAS\n"), "Agora lists the tasks without a due date under Sem prazo")
        check(txt.upper().index("SEM PRAZO") > txt.index("Pagar o IPVA"), "after the ones with a due date")
        check("Dispositivo sem resposta" not in txt, "hidden lists stay out")
        await A.screenshot(path=f"{SP}/shots/crt-undated.png", full_page=True)
        await card.locator(".chore", has_text="Passar pano na casa").locator(".chk").click()
        await wait_for(lambda: fake_log(data).count('"status":"completed"') >= 4, "concluding one without a due date")
        async def gone(): return "Passar pano na casa" not in await card.inner_text()
        await wait_for(gone, "and it leaves the card")
        await ctx.close()
        # older Home Assistant: no todo/item/subscribe -> reads the lists
        data = start(old=True)
        ctx2 = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo")
        P = await ctx2.new_page(); await P.goto(URL)
        pp = P.locator("cronologia-app")
        await pp.locator(".panel.todos").wait_for(timeout=10000)
        await pp.locator(".panel.todos .add-line", has_text="Mais").click(); await P.wait_for_timeout(300)
        check("Pagar o IPVA" in await pp.locator(".panel.todos").inner_text(), "older Home Assistant: tasks read by polling")
        await pp.locator(".panel.todos .chore", has_text="Pagar o IPVA").locator(".chk").click()
        async def gone_old(): return "Pagar o IPVA" not in await pp.locator(".panel.todos").inner_text()
        await wait_for(gone_old, "older Home Assistant: done task refreshes")
        print("errors:", [e for e in errs if "status of 4" not in e] or "none")
        print(f"{n_ok} checks passed")
        await b.close()
try:
    asyncio.run(main())
finally:
    for p in procs: p.kill()
