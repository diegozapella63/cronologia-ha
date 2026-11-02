# The app server goes away (an update, a restart of the Home Assistant): the screen says it is reconnecting,
# keeps what it shows, and when the server is back it reconnects alone and works again.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
import asyncio, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
DATA = f"{SP}/cro-data"
shutil.rmtree(DATA, ignore_errors=True); os.makedirs(f"{DATA}/media")
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{DATA}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
time.sleep(0.6)
def start_app():
    return subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=DATA, MEDIA_DIR=f"{DATA}/media", PORT="8099"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
app = start_app()
time.sleep(1.2)

async def main():
    global app
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, timezone_id="America/Sao_Paulo")
        pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        # like cr_e2e: the screen opens at 08:00, so the agenda of today has something left
        import datetime as _dt
        from zoneinfo import ZoneInfo as _Z
        await pg.clock.set_fixed_time(_dt.datetime.now(_Z("America/Sao_Paulo")).replace(hour=8, minute=0, second=0, microsecond=0))
        await pg.goto("http://127.0.0.1:8099/")
        a = pg.locator("cronologia-app")
        await a.locator(".panel.agenda").first.wait_for(); await pg.wait_for_timeout(800)
        off = a.locator(".offline")
        check(await off.count() == 0, "online: no warning")
        shown = await a.locator("main").inner_text()

        app.terminate(); app.wait(5)
        await pg.wait_for_timeout(1200)
        check(await off.count() == 1 and "Reconectando" in await off.inner_text(), "says it is reconnecting")
        check(await a.locator(".panel.agenda").count() >= 1, "keeps showing the agenda")
        await pg.screenshot(path=f"{SP}/shots/cro-offline.png")

        app = start_app()
        for _ in range(60):
            await pg.wait_for_timeout(250)
            if await off.count() == 0: break
        check(await off.count() == 0, "back: the warning goes away by itself")
        await pg.wait_for_timeout(800)
        check(await a.locator(".panel.agenda").count() >= 1, "the agenda is there")
        r = await pg.evaluate("""() => new Promise(res => { const ws = new WebSocket(new URL('ws', location.href).href.replace('http','ws')); ws.onopen = () => ws.send(JSON.stringify({id: 1, type: 'cronologia/bootstrap'})); ws.onmessage = e => { res(JSON.parse(e.data)); ws.close(); }; })""")
        check(r.get("success") is True, "the server answers again")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
