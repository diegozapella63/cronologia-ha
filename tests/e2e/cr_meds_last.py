# CronologIA 1.10.1: with every dose of today taken, the Remédios card goes to the end of Agora.
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
data = f"{SP}/crl-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
async def order(x):
    return await x.evaluate("""(el) => [...el.shadowRoot.querySelector('section.page').children].filter((c) => c.matches('.panel, .hero-ev')).map((c) => c.id === 'remedios-hoje' ? 'meds' : c.classList.contains('hero-ev') ? 'hero' : c.classList.contains('todos') ? 'todos' : c.classList.contains('agenda') ? 'agenda' : [...c.classList].join('.'))""")
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); B = await ctx.new_page()
        errs = []
        for pg in (A, B): pg.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await B.goto("http://127.0.0.1:8099/")
        a = A.locator("cronologia-app"); bb = B.locator("cronologia-app")
        await a.locator(".panel.meds .dose").first.wait_for(timeout=10000)
        o = await order(a)
        check(o[0] == "meds", f"doses left: Remédios is the first card ({o})")
        n = await a.locator(".panel.meds .dose-btn").count()
        for i in range(n):
            await a.locator(".panel.meds .dose-btn").first.click()
            await A.wait_for_timeout(500)
        check(await a.locator(".panel.meds .dose-btn").count() == 0 and "Tudo tomado" in await a.locator(".panel.meds").inner_text(), f"all {n} doses taken here")
        o = await order(a)
        check(o[0] == "meds", f"right after the last Tomei it stays on top, not jumping away ({o})")
        await A.wait_for_timeout(600)
        ob = await order(bb)
        check("meds" not in ob, f"on the other screen, all taken: the card leaves Agora ({ob})")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        o = await order(a)
        check("meds" not in o, f"back to Agora: not there anymore ({o})")
        await A.reload(); await a.locator(".page").first.wait_for(timeout=10000); await A.wait_for_timeout(1500)
        o = await order(a)
        check("meds" not in o, f"after reloading: not there ({o})")
        await A.screenshot(path=f"{SP}/shots/crl-end.png")
        # the calendar still has the doses, done
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        await a.locator(".seg button", has_text="Mês").click(); await A.wait_for_timeout(800)
        dp = a.locator(".day-panel .ev-row").filter(has=A.locator(".ev-done"))
        check(await dp.count() >= n, f"Calendário: today's doses are there, done ({await dp.count()})")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        # undo one (from anywhere): doses left again, the card comes back on top
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); const m = e._ix().meds.find((x) => x.taken); return e.api.setCheck(m.key, false, 'remedio'); }"); await A.wait_for_timeout(900)
        o = await order(a)
        check(o[0] == "meds", f"a dose unmarked: back to the top ({o})")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
