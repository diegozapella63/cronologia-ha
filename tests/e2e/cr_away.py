# CronologIA 1.41.0: Modo férias. In Mais › Opções; Agora says it and hides the routines and the
# maintenance (the medicines stay); the Calendário marks the days away without their routines; Encerrar.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, datetime
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/cra-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
D = lambda n: (datetime.date.today() + datetime.timedelta(days=n)).isoformat()
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            got = fn()
            if asyncio.iscoroutine(got): got = await got
            if got: return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo")
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2500)
        a = pg.locator("cronologia-app")
        check(await a.locator(".panel.chores#casa").count() == 1, "before: Rotina da casa on Agora")
        meds_before = await a.locator(".panel.meds .dose").count()
        # Mais › Opções › Férias
        await a.evaluate("(el) => el._go('/mais/opcoes')"); await pg.wait_for_timeout(600)
        panel = a.locator("#ferias")
        check(await panel.count() == 1 and "Rotinas e manutenção pausadas; remédios continuam." in await panel.inner_text(), "Mais › Opções: Férias, saying what it does")
        await panel.locator("input[aria-label='De férias']").check(); await pg.wait_for_timeout(800)
        await wait_for(lambda: stored()["app"].get("away") == {"from": D(0), "to": D(4)}, "on: from today, 5 days")
        check(await panel.locator("input[aria-label='Férias até']").input_value() == D(4), "the dates to change")
        await panel.screenshot(path=f"{SP}/shots/cra-options.png")
        # Agora: the banner, no routines nor maintenance, the medicines stay
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(900)
        card = a.locator(".away-card")
        txt = (await card.inner_text()) if await card.count() else ""
        check("De férias até" in txt and "Remédios continuam." in txt and "Encerrar" in txt, f"Agora: the banner ({txt[:80]!r})")
        check(await a.locator(".panel.chores#casa").count() == 0, "Agora: no Rotina da casa nor maintenance")
        check(await a.locator(".panel.meds .dose").count() == meds_before, "Agora: the medicines stay")
        await pg.screenshot(path=f"{SP}/shots/cra-agora.png")
        # Calendário: the days away marked, without their routines
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Mês").click(); await pg.wait_for_timeout(1200)
        check("away" in (await a.locator(".cell.today").first.get_attribute("class")), "Mês: today is a day away")
        day = a.locator(".day-panel")
        check(await day.locator(".away-day").count() == 1, "the day says Férias")
        titles = [t.strip() for t in await day.locator(".ev-row .ev-title").all_inner_texts()]
        check(not any(r in t for t in titles for r in ("Regar as plantas", "Lavar a louça", "Tirar o lixo")), f"no routines that day ({titles[:6]})")
        check(any(m in t for t in titles for m in ("Sertralina", "DPrev", "Gardenal")), "the doses are there")
        await day.screenshot(path=f"{SP}/shots/cra-day.png")
        await a.locator(".month, .cells").first.screenshot(path=f"{SP}/shots/cra-month.png")
        # Encerrar: back to normal
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(600)
        await a.locator(".away-card .text-btn", has_text="Encerrar").click(); await pg.wait_for_timeout(1200)
        await wait_for(lambda: "away" not in stored()["app"], "Encerrar: off")
        await wait_for(lambda: a.locator(".panel.chores#casa").count(), "the routines are back on Agora")
        check(await a.locator(".away-card").count() == 0, "no banner")
        # ahead: Agora says when it starts, today as usual
        await pg.evaluate("""(away) => new Promise((res) => { const ws = new WebSocket(location.origin.replace('http','ws') + '/ws'); ws.onopen = () => ws.send(JSON.stringify({id: 1, type: 'cronologia/prefs/set_app', prefs: {away}})); ws.onmessage = (e) => { if (JSON.parse(e.data).type === 'result') { ws.close(); res(); } }; })""", {"from": D(3), "to": D(6)})
        await pg.wait_for_timeout(1500)
        txt = (await a.locator(".away-card").inner_text()) if await a.locator(".away-card").count() else ""
        check("Férias a partir de" in txt and "Cancelar" in txt, f"ahead: when it starts, with Cancelar ({txt[:60]!r})")
        check(await a.locator(".panel.chores#casa").count() == 1, "ahead: today as usual")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
