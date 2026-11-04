# CronologIA 1.21.0: Falar (the microphone at the top right: Home Assistant transcribes, the AI finds the events)
# and Buscar on Agora (the box opens the search of Calendário › Lista; "/" too).
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, re
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crv-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
def start(extra=None):
    f = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media", FAKE_STT_TEXT="Dentista quinta às 15 horas na Clínica Sorriso", **(extra or {})), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
    time.sleep(0.6)
    env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
    a = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
    time.sleep(1.3)
    return [f, a]
def fake_log(): return open(f"{data}/fake.log").read()
procs = start()
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
FOCUSED = "() => { const r = document.querySelector('cronologia-app').shadowRoot; const a = r.activeElement; return a ? (a.dataset.q || a.name || a.tagName) : null; }"
async def main():
    global procs
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"])
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo", permissions=["microphone"])
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1800)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        mic = a.locator(".mic-top:not(.chat-top):visible")
        check(await mic.count() == 1 and await mic.is_visible(), "Agora: the microphone at the top right")
        box = await mic.bounding_box()
        check(box and box["x"] > 300 and box["y"] < 120, f"top right ({box})")
        # not inside menus
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(400)
        check("Falar" not in await sheet.inner_text(), "Novo: no Falar inside (it is at the top)")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        # Falar
        await mic.click(); await A.wait_for_timeout(1500)
        st = await sheet.inner_text()
        check("Ouvindo" in st and await sheet.locator(".voice.on").count() == 1, f"the microphone opens: Ouvindo ({st[:60]!r})")
        await A.screenshot(path=f"{SP}/shots/crv-listening.png")
        await A.wait_for_timeout(1200)
        await sheet.locator(".btn.primary", has_text="Pronto").click()
        await wait_for(lambda: re.search(r"stt stt\.home_assistant_cloud (\d+) format=wav; codec=pcm; sample_rate=16000; bit_rate=16; channel=1; language=pt-BR", fake_log()), "the audio goes to the speech-to-text of Home Assistant (16 kHz PCM, pt-BR)")
        m = re.search(r"stt stt\.home_assistant_cloud (\d+)", fake_log())
        check(m and int(m.group(1)) > 16000 * 2 * 1.5, f"about the seconds recorded ({m and m.group(1)} bytes)")
        await wait_for(lambda: "fake AI call" in fake_log(), "the text goes to the AI")
        async def review(): return "Revisar eventos" in await sheet.inner_text()
        await wait_for(review, "the events to check")
        st = await sheet.inner_text()
        check("“Dentista quinta às 15 horas na Clínica Sorriso”" in st, "what was heard is shown")
        check(await sheet.locator(".rv-card").count() >= 1 and "Dentista quinta" in st, "the event from what was said")
        await A.screenshot(path=f"{SP}/shots/crv-review.png")
        await sheet.locator(".btn.primary", has_text="Adicionar").click()
        await wait_for(lambda: "event created" in fake_log() and "Dentista quinta" in fake_log().split("event created", 1)[1], "added to the calendar")
        # Recompensas and the Calendário have it too
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(500)
        check(await a.locator(".mic-top:not(.chat-top):visible").count() == 1, "Recompensas: the microphone too")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        check(await a.locator(".mic-top:not(.chat-top):visible").count() == 1, "Calendário: the microphone too")
        box = await a.locator(".mic-top:not(.chat-top):visible").bounding_box()
        check(box and box["x"] + box["width"] > 360 and box["y"] < 120, f"Calendário: the microphone at the top right, like on the other screens ({box})")
        eb = await a.locator(".cal-page .head-row .eyebrow").bounding_box()
        check(eb and eb["height"] < 40, f"Calendário: CronologIA · Olá, Diego in one line ({eb and eb['height']})")
        # Buscar on Agora
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        hs = a.locator("form.home-search input")
        check(await hs.count() == 1 and await hs.get_attribute("placeholder") == "Buscar nos eventos", "Agora: Buscar nos eventos")
        await hs.click(); await A.keyboard.type("Pil"); await A.wait_for_timeout(700)
        check(await a.locator("input[data-q='buscar']").count() == 1, "typing opens the search of the Calendário (Lista)")
        await A.keyboard.type("ates"); await A.wait_for_timeout(500)
        check(await a.locator("input[data-q='buscar']").input_value() == "Pilates" and await A.evaluate(FOCUSED) == "buscar", "the typing goes on there")
        check("Pilates" in await a.locator(".page").first.inner_text(), "and it finds it")
        await A.screenshot(path=f"{SP}/shots/crv-search.png")
        check(not errs, f"no page errors {errs}")
        await ctx.close()
        # computer: "/" and the sidebar's Buscar
        ctx2 = await b.new_context(viewport={"width": 1200, "height": 800}, permissions=["microphone"])
        D = await ctx2.new_page(); D.on("pageerror", lambda e: errs.append(str(e)))
        await D.goto("http://127.0.0.1:8099/"); await D.wait_for_timeout(1500)
        d = D.locator("cronologia-app")
        check(await d.locator(".side-link", has_text="Buscar").locator("kbd").inner_text() == "/", "sidebar: Buscar with /")
        await d.locator(".page-title").first.click(); await D.keyboard.press("/"); await D.wait_for_timeout(700)
        check(await D.evaluate(FOCUSED) == "buscar", "/ opens the search with the cursor in it")
        await d.locator(".side-link", has_text="Agora").click(); await D.wait_for_timeout(500)
        await d.locator(".side-link", has_text="Buscar").click(); await D.wait_for_timeout(700)
        check(await D.evaluate(FOCUSED) == "buscar", "the sidebar's Buscar too")
        check(not errs, f"no page errors {errs}")
        await ctx2.close()
        await b.close()
    # a Home Assistant without speech-to-text: no microphone
    for pr in procs: pr.kill()
    time.sleep(0.5)
    procs = start({"FAKE_NO_STT": "1"})
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844})
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1800)
        check(await pg.locator("cronologia-app").locator(".mic-top:not(.chat-top):visible").count() == 0, "without speech-to-text in Home Assistant: no microphone")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
