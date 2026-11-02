# CronologIA 1.30.0: Falar › choose the speech-to-text in Mais › Integrações, without touching the voice assistant of Home Assistant.
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
data = f"{SP}/crf-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
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
def prefs(): return json.load(open(f"{data}/cronologia.json"))["app"]
async def speak(A, a, sheet):
    await a.locator(".mic-top:visible").click(); await A.wait_for_timeout(2200)
    await sheet.locator(".btn.primary", has_text="Pronto").click()
    for _ in range(40):
        if "Revisar eventos" in await sheet.inner_text(): return True
        await asyncio.sleep(0.25)
    return False
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"])
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo", permissions=["microphone"])
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1800)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        await a.evaluate("(el) => el._go('/mais/integracoes')"); await A.wait_for_timeout(700)
        panel = a.locator("#falar")
        check(await panel.count() == 1, "Integrações: Falar")
        txt = await panel.inner_text()
        check("Pronto para ouvir" in txt and "Home Assistant Cloud" in txt and "assistente de voz" in txt, f"automatic: the voice assistant's ({txt[:160]!r})")
        sel = panel.locator("select[aria-label='Fala para texto']")
        opts = await sel.locator("option").all_inner_texts(); print("OPTIONS:", opts)
        check(opts[0] == "Automático: Home Assistant Cloud" and "faster-whisper" in opts, f"the engines of Home Assistant ({opts})")
        await panel.scroll_into_view_if_needed(); await panel.screenshot(path=f"{SP}/shots/crf-panel.png")
        await sel.select_option("stt.faster_whisper"); await A.wait_for_timeout(1200)
        check(prefs().get("voice_engine") == "stt.faster_whisper", f"saved ({prefs().get('voice_engine')})")
        check("Transcreve com faster-whisper." in await panel.inner_text(), "says it")
        check(await speak(A, a, sheet), "Falar with Whisper: the events to check")
        check(re.search(r"^stt stt\.faster_whisper \d+ .*language=pt$", fake_log(), re.M), "the audio goes to faster-whisper, language=pt")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        await a.evaluate("(el) => el._go('/mais/integracoes')"); await A.wait_for_timeout(700)
        await sel.select_option(""); await A.wait_for_timeout(1200)
        check(prefs().get("voice_engine") is None, f"automatic again ({prefs().get('voice_engine')})")
        check(await speak(A, a, sheet), "Falar automatic: the events to check")
        check(re.search(r"^stt stt\.home_assistant_cloud \d+ .*language=pt-BR$", fake_log(), re.M), "the audio goes to Home Assistant Cloud, pt-BR")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        await a.evaluate("(el) => el._go('/mais/integracoes')"); await A.wait_for_timeout(700)
        await a.locator("input[aria-label='Usar IA']").uncheck(); await A.wait_for_timeout(800)
        check(await a.locator("#falar").count() == 0, "Usar IA off: no Falar panel")
        await a.locator("input[aria-label='Usar IA']").check(); await A.wait_for_timeout(800)
        check(not errs, f"no page errors {errs}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
