# CronologIA 1.6.0: points from the ResolvIA tasks.
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
data = f"{SP}/crpt-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share/resolvia")
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana", "manual": True}}}, open(f"{data}/cronologia.json", "w"))
json.dump({"app": "ResolvIA", "versao": "2.8.0", "gravado_em": datetime.datetime.now(datetime.timezone.utc).isoformat().replace("+00:00", "Z"), "sem_prazo": [], "pontos": {"todo.casa": {"levar o carro na revisao": 20}}}, open(f"{data}/share/resolvia/integracao.json", "w"))
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
def fire(t, d):
    urllib.request.urlopen(urllib.request.Request("http://127.0.0.1:8123/dev/fire", data=json.dumps({"event_type": t, "data": d}).encode(), method="POST")).read()
def stored(): return json.load(open(f"{data}/cronologia.json"))
def entries(): return stored()["score"]["entries"]
today = datetime.date.today().isoformat()
KEY = f"resolvia|todo.casa|r-1|{today}"
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
async def main():
    await wait_for(lambda: json.load(open(f"{data}/share/cronologia/integracao.json"))["placar"]["usuarios"] == {"u-diego": "Diego", "u-andressa": "Andressa"}, "presence file with the scoreboard and who is who")
    pres = json.load(open(f"{data}/share/cronologia/integracao.json"))
    check(pres["app"] == "CronologIA" and pres["placar"]["ativo"] and pres["placar"]["participantes"] == ["Diego", "Andressa"] and pres["placar"]["periodo"] == "semana", "placar ativo, participants and period")
    fire("cronologia_pontos", {"acao": "somar", "chave": KEY, "quem": "Andressa", "pontos": 15, "titulo": "Lavar a louça"})
    await wait_for(lambda: any(e["key"] == KEY and e["who"] == "Andressa" and e["points"] == 15 and e["kind"] == "tarefa" for e in entries()), "points from the ResolvIA counted")
    fire("cronologia_pontos", {"acao": "somar", "chave": KEY, "quem": "Andressa", "pontos": 15, "titulo": "Lavar a louça"})
    await asyncio.sleep(0.8)
    check(sum(1 for e in entries() if e["key"] == KEY) == 1, "same task, same day counts once")
    fire("cronologia_pontos", {"acao": "trocar", "chave": KEY, "quem": "Diego"})
    await wait_for(lambda: any(e["key"] == KEY and e["who"] == "Diego" for e in entries()), "Foi Diego moves the points")
    fire("cronologia_pontos", {"acao": "somar", "chave": f"resolvia|todo.casa|r-2|{today}", "quem": "Visita", "pontos": 10, "titulo": "X"})
    fire("cronologia_pontos", {"acao": "somar", "chave": "extra|hack", "quem": "Diego", "pontos": 10, "titulo": "X"})
    await asyncio.sleep(0.8)
    check(not any(e["key"] in (f"resolvia|todo.casa|r-2|{today}", "extra|hack") for e in entries()), "someone outside the scoreboard or a bad key is ignored")
    fire("cronologia_pontos", {"acao": "desfazer", "chave": KEY})
    await wait_for(lambda: not any(e["key"] == KEY for e in entries()), "undo removes the points")
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR")
        A = await ctx.new_page()
        errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".panel.todos .add-line", has_text="Mais").click(); await A.wait_for_timeout(300)
        row = a.locator(".panel.todos .chore", has_text="Levar o carro na revisão")
        check(await row.locator(".pts-inline").inner_text() == "+20" and await row.locator(".qw-btn").count() == 2, "Tarefas shows the ResolvIA points and a quick button per person")
        order = await a.evaluate("""(el) => { const r = el.shadowRoot; const page = r.querySelector('.page'); const kids = [...page.children]; const i = (sel) => kids.findIndex((k) => k.matches(sel)); return [i('.panel.meds'), i('.panel.todos'), i('.panel.agenda')]; }""")
        check(order[0] < order[1] and (order[2] == -1 or order[2] < order[1]), f"Tarefas sits after the day's agenda, near the end ({order})")
        await A.screenshot(path=f"{SP}/shots/crpt-agora.png", full_page=True)
        await row.locator(".chk").click(); await A.wait_for_timeout(400)
        check("Quem fez" in await a.locator(".sheet").inner_text(), "unknown device asks who did it")
        await a.locator(".sheet .who-btn", has_text="Andressa").click()
        await wait_for(lambda: any(e["who"] == "Andressa" and e["points"] == 20 and e["kind"] == "tarefa" and e["title"] == "Levar o carro na revisão" for e in entries()), "concluding here gives the ResolvIA points")
        await wait_for(lambda: '"status":"completed"' in open(f"{data}/fake.log").read(), "and completes it in Home Assistant")
        toast = await a.locator(".toast").inner_text()
        check("Feito por Andressa · +20" in toast and "Foi Diego" in toast, f"toast with who and Foi Diego ({toast.strip()})")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(600)
        st = await a.locator(".score-today").inner_text()
        check("Levar o carro na revisão" not in st, "done: the ResolvIA task leaves Para pontuar hoje")
        feed = await a.locator(".page").inner_text()
        check("Tarefa do ResolvIA: Levar o carro" in feed, "Extrato marks it as a ResolvIA task")
        await A.screenshot(path=f"{SP}/shots/crpt-rewards.png", full_page=False)
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        await a.locator(".panel.todos .chore.done", has_text="Levar o carro").locator(".chk").click()
        await wait_for(lambda: not any(e["title"] == "Levar o carro na revisão" for e in entries()), "reopening removes the points")
        # quick button: Diego did it
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        if await a.locator(".panel.todos .add-line", has_text="Mais").count():
            await a.locator(".panel.todos .add-line", has_text="Mais").click(); await A.wait_for_timeout(300)
        row = a.locator(".panel.todos .chore", has_text="Levar o carro na revisão")
        await row.locator(".qw-btn[aria-label^='Diego']").click()
        await wait_for(lambda: any(e["who"] == "Diego" and e["points"] == 20 and e["title"] == "Levar o carro na revisão" for e in entries()), "the D button concludes and gives Diego the points, no question")
        check(await a.locator(".sheet").count() == 0, "no Quem fez? sheet")
        toast = await a.locator(".toast").inner_text()
        check("Feito por Diego · +20" in toast and "Foi Andressa" in toast, f"toast ({toast.strip()})")
        await wait_for(lambda: open(f"{data}/fake.log").read().count('"status":"completed"') >= 2, "and it is completed in Home Assistant")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
