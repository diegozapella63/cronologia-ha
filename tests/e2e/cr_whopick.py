# CronologIA 1.16.1: Mais › Placar › Marcar por outras pessoas (Feito asks who did it).
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
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
data = f"{SP}/crw-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", CRONOLOGIA_DEV_USER_ID="u-diego", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
def entries(): return (stored().get("score") or {}).get("entries") or []
def mine(who): return [e for e in entries() if e.get("title") == "Arrumar a cama" and e.get("who") == who]
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
        # a routine worth points, every day
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await sheet.locator(".model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await sheet.locator(".ev-title-input").fill("Arrumar a cama")
        await sheet.locator(".pick", has_text="+10").click()
        await sheet.locator(".pick.list", has_text="Casa").click()
        await sheet.locator(".btn.primary", has_text="Criar rotina").click(); await A.wait_for_timeout(1500)
        row = a.locator(".panel.chores .chore", has_text="Arrumar a cama")
        await row.wait_for(timeout=8000)

        # off (default): the event sheet has the single Feito; Diego gets the points without a question
        await row.locator(".chore-tx").click(); await A.wait_for_timeout(400)
        check(await sheet.locator(".kind-act").count() == 1 and await sheet.locator(".who-act").count() == 0, "off: the single Feito")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)

        # Mais › Placar › Marcar por outras pessoas
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Recompensas"); await A.wait_for_timeout(500)
        sw = a.locator("input[aria-label='Marcar por outras pessoas']")
        if not await sw.is_visible():
            await a.locator("details.score-set summary").first.click(); await A.wait_for_timeout(300)
        check(await sw.count() == 1 and not await sw.is_checked(), "Placar: Marcar por outras pessoas, off")
        await sw.check(); await A.wait_for_timeout(500)
        check(stored()["app"].get("who_pick") is True, "on is saved")
        await sw.scroll_into_view_if_needed(); await A.screenshot(path=f"{SP}/shots/crw-settings.png")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)

        # the row shows the initials: one tap marks it done by that person, no other screen
        qw = row.locator(".qwho .qw-btn")
        check([t.strip() for t in await qw.all_inner_texts()] == ["D", "A"], "card: D and A on the row")
        check("+10" in await row.locator("small").inner_text(), "the points move next to the text")
        await A.screenshot(path=f"{SP}/shots/crw-card.png")
        await row.locator(".qw-btn[aria-label^='Andressa']").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sheet").count() == 0, "no sheet opens")
        await wait_for(lambda: mine("Andressa") and not mine("Diego"), "points to Andressa")
        await A.wait_for_timeout(500)
        await a.locator(".panel.chores .chore.done", has_text="Arrumar a cama").locator(".chk").click()
        await wait_for(lambda: not mine("Andressa"), "unchecking takes them back")

        # the event sheet: one button per person in place of Feito
        await A.wait_for_timeout(500)
        await a.locator(".panel.chores .chore", has_text="Arrumar a cama").locator(".chore-tx").click(); await A.wait_for_timeout(400)
        act = sheet.locator(".who-act")
        check(await act.count() == 1 and await sheet.locator(".kind-act").count() == 0, "sheet: Quem fez? buttons instead of Feito")
        check([t.strip() for t in await act.locator(".who-btn b").all_inner_texts()] == ["Diego", "Andressa"] and "+10" in await act.inner_text(), "Diego and Andressa, with the points")
        await A.screenshot(path=f"{SP}/shots/crw-sheet.png")
        await act.locator(".who-btn", has_text="Andressa").click()
        await wait_for(lambda: mine("Andressa"), "one tap: done by Andressa")
        check(stored()["checks"] and any(c.get("by") == "Andressa" for c in stored()["checks"].values()), "the check says Andressa")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
