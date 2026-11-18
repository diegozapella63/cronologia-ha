# CronologIA 1.82.0, the pattern of the family: an icon on every title (each screen, each window, each option and
# field), what depends on a switch in a box under it (the AI, the CorrerIA, the GerencIA, the ResolvIA, Recompensas,
# Avisos), the arrow on the tabs that don't fit, every card (in Mais and in the Agora) folds with a tap on its heading
# and each field of choices of a window with a tap on its title, kept on the device.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
import asyncio, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crfam-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)

NO_ICON = """(el) => {
  const root = el.renderRoot, out = [];
  const vis = (e) => e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden';
  for (const l of root.querySelectorAll('.flabel, .row .grow > .label')) if (vis(l) && !l.closest('.row:has(> .tile), .now-cards') && !l.querySelector('svg')) out.push(l.textContent.trim().slice(0, 30));
  for (const h of root.querySelectorAll('.page-title, .sheet-head h3')) if (vis(h) && !h.querySelector('svg') && !h.closest('.cal-title')) out.push('janela: ' + h.textContent.trim());
  return out;
}"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for w in (390, 320):
            A = await b.new_page(viewport={"width": w, "height": 844}, device_scale_factor=1, color_scheme="dark")
            errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
            a = A.locator("cronologia-app")
            go = lambda path: a.evaluate("(el, p) => el._go(p)", path)
            # ---- icons on every screen of Mais
            for path in ("", "/mais", "/mais/calendarios", "/mais/rotinas", "/mais/recompensas", "/mais/avisos", "/mais/ferias", "/config", "/config/dados", "/config/aparencia", "/config/opcoes", "/mais/sobre"):
                await go(path); await A.wait_for_timeout(500)
                miss = await a.evaluate(NO_ICON)
                check(not miss, f"{w}px {path or '/'}: an icon on every title {miss[:4]}")
            # ---- Integrações: the AI under Usar IA, in a box
            await go("/config"); await A.wait_for_timeout(600)
            check(await a.locator("#leitura-ia > .sub-op > .sub-box .ai-state").count() == 1 and await a.locator("#leitura-ia .sub-box .ai-actions .btn").count() == 1, f"{w}px: the state and Verificar de novo of the AI in the box under Usar IA")
            lines = await a.evaluate("(el) => [...el.renderRoot.querySelectorAll('.panel > .row, .sub-box > .row')].filter((r) => !r.querySelector(':scope > .tile') && parseFloat(getComputedStyle(r).borderTopWidth) > 0).length")
            check(lines == 0, f"{w}px: no line between the options ({lines})")
            cls = await a.evaluate("(el) => el.renderRoot.querySelector('.tabs-wrap').className")
            fits = await a.evaluate("(el) => { const t = el.renderRoot.querySelector('.more-tabs'); return t.scrollWidth <= t.clientWidth + 2 }")
            check(("tem-dir" in cls) == (not fits), f"{w}px: the arrow only when the tabs don't fit ({cls}, fits {fits})")
            # ---- folding a card of Mais, kept on the device
            card = a.locator("#leitura-ia")
            head = card.locator(":scope > .fold-head")
            check(await head.get_attribute("aria-expanded") == "true", f"{w}px: IA folds, open at first")
            await head.click(); await A.wait_for_timeout(300)
            check(await head.get_attribute("aria-expanded") == "false" and not await card.locator(".sub-box").is_visible(), f"{w}px: a tap closes it")
            await A.reload(); await A.wait_for_timeout(1500)
            await go("/config"); await A.wait_for_timeout(600)
            check(await a.locator("#leitura-ia > .fold-head").get_attribute("aria-expanded") == "false", f"{w}px: still closed after opening the app again")
            await a.locator("#leitura-ia > .fold-head").click(); await A.wait_for_timeout(300)
            check(await a.locator("#leitura-ia .sub-box").is_visible(), f"{w}px: open again")
            # ---- the cards of the Agora fold too
            await go(""); await A.wait_for_timeout(700)
            heads = await a.evaluate("(el) => [...el.renderRoot.querySelectorAll('.panel.dobra > .fold-head')].length")
            check(heads >= 3, f"{w}px: the cards of the Agora fold ({heads})")
            # ---- a window: the fields of choices fold by the title
            await a.locator(".tab.fab").click(); await A.wait_for_timeout(700)
            check(await a.locator(".sheet").count() == 1, f"{w}px: Adicionar opens its window")
            if await a.locator(".sheet").count():
                miss = await a.evaluate(NO_ICON)
                check(not miss, f"{w}px: Adicionar: an icon on every title {miss[:4]}")
                fold = a.locator(".sheet .field.dobravel > .flabel").first
                check(await fold.count() == 1, f"{w}px: Adicionar has fields of choices that fold")
                if await fold.count():
                    await fold.click(); await A.wait_for_timeout(250)
                    check(await fold.get_attribute("aria-expanded") == "false", f"{w}px: a field of choices closes by the title")
                    await fold.click(); await A.wait_for_timeout(250)
            if w == 390: await A.screenshot(path=f"{SP}/shots/crfam-agora.png")
            check(not errs, f"{w}px: no page errors {errs[:3]}")
            await A.close()
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
