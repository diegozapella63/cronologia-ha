# CronologIA 1.18.1: Recompensas › Pontos desta semana: × on every entry takes a wrong score off (Desfazer brings it back).
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crr-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}, "who_pick": True}}, open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", CRONOLOGIA_DEV_USER_ID="u-davi", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
def entries(): return (stored().get("score") or {}).get("entries") or []
def bed(): return [e for e in entries() if e.get("title") == "Arrumar a cama"]
def checked(): return any(c.get("by") == "Aurora" for c in stored().get("checks", {}).values())
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
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }")  # Rotina da casa: the done ones unfolded
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        # a routine worth +10, done by Aurora (by mistake: it was Davi, or nobody)
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await sheet.locator(".model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await sheet.locator(".ev-title-input").fill("Arrumar a cama")
        await sheet.locator(".pick", has_text="+10").click()
        await sheet.locator(".pick.list", has_text="Casa").click()
        await sheet.locator(".btn.primary", has_text="Criar rotina").click(); await A.wait_for_timeout(1500)
        row = a.locator(".panel.chores .chore", has_text="Arrumar a cama")
        await row.wait_for(timeout=8000)
        await row.locator(".qw-btn[aria-label^='Aurora']").click()
        await wait_for(lambda: bed() and bed()[0]["who"] == "Aurora", "Aurora got +10")
        at0 = bed()[0]["at"]

        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(800)
        check(await a.locator(".panel.feed").count() == 0, "no Pontos desta semana card")
        order = await A.evaluate("() => [...document.querySelector('cronologia-app').shadowRoot.querySelectorAll('.page.rewards > .panel')].map((p) => p.className)")
        check(order.index(next(c for c in order if "extrato" in c)) < order.index(next(c for c in order if "history" in c)) if any("history" in c for c in order) else True, f"Extrato above Histórico ({order})")
        frow = a.locator(".ext-row", has_text="Arrumar a cama")
        x = frow.locator(".icon-btn[aria-label^='Tirar os pontos']")
        check(await x.count() == 1, "the routine's line in the Extrato has the ×")
        await frow.scroll_into_view_if_needed(); await A.screenshot(path=f"{SP}/shots/crr-feed.png")
        score_before = await a.locator(".duel-side", has_text="Aurora").inner_text()
        await x.click()
        await wait_for(lambda: not bed(), "× takes the points off")
        check(checked(), "the routine stays done")
        await A.wait_for_timeout(500)
        toast = a.locator(".toast")
        tt = await toast.inner_text()
        check("pontos de Aurora tirados" in tt and "Desfazer" in tt, f"toast with Desfazer ({tt.strip()})")
        top = await a.locator(".ext-row").first.inner_text()
        check("Davi tirou 10 pontos de Aurora" in top and "Pontos cancelados: Arrumar a cama" in top, f"a new line: Davi took them ({top!r})")
        check(await a.locator(".ext-row", has_text="Arrumar a cama").count() == 2 and await a.locator(".ext-row .icon-btn").count() == 0, "the old line stays, without the ×")
        await A.screenshot(path=f"{SP}/shots/crr-toast.png")
        await toast.locator("button", has_text="Desfazer").click()
        await wait_for(lambda: bed() and bed()[0]["who"] == "Aurora" and bed()[0]["points"] == 10 and bed()[0]["at"] == at0, "Desfazer brings it back, same time")
        await A.wait_for_timeout(500)
        check("voltaram para Aurora" in await a.locator(".ext-row").first.inner_text() and await a.locator(".ext-row").first.locator(".icon-btn").count() == 1, "Desfazer: a line, and the × is on it")
        # remove for good: still done in Agora
        await a.locator(".ext-row", has_text="Arrumar a cama").locator(".icon-btn").click()
        await wait_for(lambda: not bed(), "removed again")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        check(await a.locator(".panel.chores .chore.done", has_text="Arrumar a cama").count() == 1, "Agora: still done")
        # the server: restore of something not removed is refused
        r = await A.evaluate("() => document.querySelector('cronologia-app').api.scoreRestore('rotina|nada').then(() => 'ok', (e) => e.message)")
        check(r != "ok", f"restore of an unknown key refused ({r})")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
