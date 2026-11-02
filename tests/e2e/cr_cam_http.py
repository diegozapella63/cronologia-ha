# CronologIA 1.30.4: Digitalizar and Falar over http: say it is not possible, instead of opening the gallery.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crh-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)); time.sleep(1.3)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo")
        await ctx.add_init_script("Object.defineProperty(navigator, 'mediaDevices', { value: undefined, configurable: true }); Object.defineProperty(window, 'isSecureContext', { value: false, configurable: true }); Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true });")
        pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2000)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        await a.evaluate("(el) => el._openForm()"); await pg.wait_for_timeout(600)
        tile = sheet.locator(".imp-tile", has_text="Digitalizar")
        check(await tile.count() == 1 and "Precisa de https" in await tile.inner_text(), "Novo: the Digitalizar tile says it needs https")
        check("Em http a câmera não abre aqui" in await sheet.inner_text(), "the help line explains")
        chooser = []
        pg.on("filechooser", lambda fc: chooser.append(fc))
        await tile.click(); await pg.wait_for_timeout(900)
        check(not chooser, "the gallery does not open by itself")
        msg = await a.locator(".cam .cam-msg").inner_text() if await a.locator(".cam .cam-msg").count() else ""
        check("endereço seguro (https)" in msg, f"the camera screen says why ({msg[:80]!r})")
        await pg.screenshot(path=f"{SP}/shots/crh-cam.png")
        # Colar over http: no button (it could only say "toque e segure")
        await a.evaluate("(el) => el._closeSheet()"); await pg.wait_for_timeout(300)
        await a.evaluate("(el) => el._openImport('text')"); await pg.wait_for_timeout(500)
        acts = await a.locator(".sheet .sheet-actions .btn").all_inner_texts()
        check(await a.locator(".sheet textarea").count() == 1 and not any(t.strip() == "Colar" for t in acts), f"http: no Colar button ({acts})")
        # over https: the button is there
        ctx2 = await b.new_context(viewport={"width": 390, "height": 844}, permissions=["clipboard-read", "clipboard-write"])
        pg2 = await ctx2.new_page(); await pg2.goto("http://127.0.0.1:8099/"); await pg2.wait_for_timeout(1800)
        a2 = pg2.locator("cronologia-app")
        await a2.evaluate("(el) => el._openImport('text')"); await pg2.wait_for_timeout(500)
        await pg2.evaluate("() => navigator.clipboard.writeText('leite, ovos')")
        btn = a2.locator(".sheet .sheet-actions .btn", has_text="Colar")
        check(await btn.count() == 1, "https: Colar is there")
        await btn.click(); await pg2.wait_for_timeout(400)
        check(await a2.locator(".sheet textarea").evaluate("(t) => t.value") == "leite, ovos", "and pastes what was copied")
        await ctx2.close()
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
