# CronologIA 1.7.0: deméritos in Recompensas.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request
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
data = f"{SP}/crdm-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
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
def dms(): return stored()["app"].get("demerits") or []
async def wait_for(fn, label, tries=40):
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
        A = await ctx.new_page()
        errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        async def placar():
            await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
            await open_more(a, "Recompensas"); await A.wait_for_timeout(400)
        async def recompensas():
            await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(500)
        await recompensas()
        panel = a.locator("#demeritos")
        check(await panel.count() == 0 and await a.locator(".add-line", has_text="Ajustes do placar").count() == 0, "no deméritos panel while empty, no settings shortcut")
        await placar()
        cfg = a.locator("#demeritos-ajustes")
        check(await cfg.count() == 1 and "toalha molhada na cama" in (await cfg.inner_text()).lower(), "Mais › Placar has the deméritos with ideas")
        await cfg.locator(".dm-ideas .pick", has_text="Toalha molhada na cama").click()
        await wait_for(lambda: [d["title"] for d in dms()] == ["Toalha molhada na cama"] and dms()[0]["points"] == 5, "an idea becomes a demérito")
        await recompensas()
        row = panel.locator(".demerit", has_text="Toalha molhada na cama")
        check(await panel.locator(".btn", has_text="Novo demérito").count() == 0 and await panel.locator(".dm-ideas").count() == 0, "Recompensas only shows and marks")
        check(await row.locator(".pts.neg").inner_text() == "−5" and await row.locator(".dm-btn").count() == 2, "row shows −5 and one button per person")
        await row.locator(".dm-btn", has_text="Davi").click()
        await wait_for(lambda: any(e["kind"] == "demerito" and e["who"] == "Davi" and e["points"] == -5 for e in entries()), "tapping Davi takes 5 points")
        toast = await a.locator(".toast").inner_text()
        check("−5 para Davi" in toast and "Desfazer" in toast, f"toast with Desfazer ({toast.strip()})")
        await a.locator(".toast button", has_text="Desfazer").click()
        await wait_for(lambda: not any(e["kind"] == "demerito" for e in entries()), "Desfazer gives them back")
        await A.wait_for_timeout(2700)
        await row.locator(".dm-btn", has_text="Davi").click()
        await wait_for(lambda: sum(1 for e in entries() if e["kind"] == "demerito") == 1, "marked again")
        await A.wait_for_timeout(500)
        duel = await a.locator(".duel").inner_text()
        check("-5" in duel.replace("−", "-") and "1 demérito" in duel, f"scoreboard goes below zero and counts it ({' '.join(duel.split())})")
        check("Davi 1× nesta semana" in await row.inner_text(), "row says who and how many times this week")
        await A.screenshot(path=f"{SP}/shots/crdm-panel.png", full_page=True)
        # edit: −10 (in Mais › Placar)
        await row.locator(".dm-tx").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet").count() == 0, "tapping the name in Recompensas doesn't edit")
        await placar()
        await cfg.locator(".dm-edit", has_text="Toalha molhada na cama").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .pick", has_text="−10").click()
        await a.locator(".sheet .btn.primary").click()
        await wait_for(lambda: dms()[0]["points"] == 10, "edit the points")
        # new one from the form; 1.77.0: Novo demérito at the width of the card on the phone
        nw = await cfg.locator(".btn", has_text="Novo demérito").evaluate("(b) => { const p = b.parentElement, cs = getComputedStyle(p); return [Math.round(b.getBoundingClientRect().width), Math.round(p.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)), innerWidth]; }")
        check(nw[2] >= 1000 or abs(nw[0] - nw[1]) <= 2, f"Novo demérito at the width of the card ({nw})")
        await cfg.locator(".btn", has_text="Novo demérito").click(); await A.wait_for_timeout(300)
        # 1.77.0: O que foi shows all of the text (a box that grows, and the corner makes it bigger)
        await a.locator(".sheet textarea.grow").fill("Toalha molhada na cama, nas bancadas ou na mesa da sala de jantar (na hora)")
        await A.wait_for_timeout(200)
        grown = await a.locator(".sheet textarea.grow").evaluate("(e) => [e.scrollHeight <= e.clientHeight + 2, e.clientHeight > 50, getComputedStyle(e).resize]")
        check(grown[0] and grown[1] and grown[2] == "vertical", f"O que foi: a long text shows all of it ({grown})")
        await a.locator(".sheet textarea.grow").fill("Roupa no chão")
        await a.locator(".sheet .pick", has_text="−3").click()
        await A.screenshot(path=f"{SP}/shots/crdm-sheet.png")
        await a.locator(".sheet .btn.primary").click()
        await wait_for(lambda: any(d["title"] == "Roupa no chão" and d["points"] == 3 for d in dms()), "new demérito from the form")
        # from an automation / Alexa routine
        fire("cronologia_demerito", {"nome": "roupa no chao", "quem": "aurora"})
        await wait_for(lambda: any(e["kind"] == "demerito" and e["who"] == "Aurora" and e["points"] == -3 and e["title"] == "Roupa no chão" for e in entries()), "event cronologia_demerito marks it")
        fire("cronologia_demerito", {"nome": "Não existe", "quem": "Davi"})
        fire("cronologia_demerito", {"nome": "Roupa no chão", "quem": "Visita"})
        await A.wait_for_timeout(800)
        check(sum(1 for e in entries() if e["kind"] == "demerito") == 2, "unknown demérito or person is ignored")
        # feed: negative and removable
        await recompensas()
        frow = a.locator(".ext-row", has_text="Roupa no chão").first
        check("−3" in await frow.locator(".pts.neg").inner_text() and "Demérito: Roupa no chão" in await frow.inner_text(), "Extrato shows it in red as a demérito")
        await frow.locator(".icon-btn").click()
        await wait_for(lambda: not any(e["title"] == "Roupa no chão" for e in entries()), "× takes it off")
        await A.wait_for_timeout(500)
        top = (await a.locator(".ext-row").first.inner_text())
        check("Roupa no chão" in top and "Demérito cancelado" in top and "+3" in top, f"the Extrato gets a new line ({top!r})")
        check(await a.locator(".ext-row", has_text="Roupa no chão").locator(".icon-btn").count() == 0, "no × left on it")
        # delete from the list
        await placar()
        await cfg.locator(".dm-edit", has_text="Roupa no chão").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn", has_text="Apagar").click(); await A.wait_for_timeout(300)
        await a.locator(".sheet .btn", has_text="Apagar").click()
        await wait_for(lambda: [d["title"] for d in dms()] == ["Toalha molhada na cama"], "delete a demérito (marks stay)")
        check(any(e["kind"] == "demerito" for e in entries()), "earlier marks kept")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
