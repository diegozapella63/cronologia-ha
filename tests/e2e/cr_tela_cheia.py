# CronologIA 1.87.0: Tela cheia na Agora (como no MemorIA): o botão à direita do Hoje, só na Agora; ligada, somem a linha
# de cima, a busca, os "+" (Evento hoje, Ordem dos cards) e a barra de baixo (no computador, a barra do lado), e o mesmo
# botão vira o Sair da tela cheia; Esc, o Voltar do celular e o Sair saem dela; uma janela aberta por cima
# fecha primeiro; arrastar não troca de aba; nada passa da largura em 320 px.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
REPO = CRONOLOGIA
SP = _os.environ["E2E_TMP"]
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crcheia-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
json.dump({"app": {"score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.3)

FULL = "() => document.querySelector('cronologia-app').hasAttribute('full')"
STATE = "() => !!(history.state && history.state.rvFull)"


async def shown(loc):
    return await loc.count() > 0 and await loc.first.is_visible()


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errs = []
        for w, h in ((390, 844), (320, 640), (1280, 820)):
            ctx = await b.new_context(viewport={"width": w, "height": h}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2)
            A = await ctx.new_page()
            A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1800)
            a = A.locator("cronologia-app")
            btn = a.locator(".full-btn")
            check(await btn.count() == 1 and await btn.get_attribute("aria-label") == "Tela cheia" and await btn.locator("svg").count() == 1, f"{w} px: o botão Tela cheia, com o ícone")
            tb, hb = await btn.bounding_box(), await a.locator("h1.page-title").bounding_box()
            check(tb["x"] > hb["x"] + hb["width"] - 1 and abs((tb["y"] + tb["height"] / 2) - (hb["y"] + hb["height"] / 2)) < 12, f"{w} px: à direita do Hoje, na altura dele")
            over = await A.evaluate("() => { const r = document.querySelector('cronologia-app').shadowRoot.querySelector('main'); return r.scrollWidth - r.clientWidth; }")
            check(over <= 0, f"{w} px: nada passa da largura ({over})")
            if w == 320:
                await a.locator(".brand-head").screenshot(path=f"{SP}/shots/crcheia-320-topo.png")
                await ctx.close(); continue
            await btn.click(); await A.wait_for_timeout(500)
            check(await A.evaluate(FULL) and await A.evaluate(STATE), f"{w} px: ligada (com a entrada no histórico)")
            hidden = {"a linha de cima": ".brand-head .head-row", "a busca": ".home-search", "os +": ".add-line", "a barra de baixo": "nav", "a barra do lado": ".side"}
            for name, sel in hidden.items():
                check(not await shown(a.locator(sel)), f"{w} px: sem {name}")
            check(await shown(a.locator("h1.page-title", has_text="Hoje")) and await shown(a.locator(".brand-head .status")), f"{w} px: ficam o Hoje e a data")
            sair = a.locator(".full-btn")
            check(await shown(sair) and await sair.get_attribute("aria-label") == "Sair da tela cheia", f"{w} px: o mesmo botão vira o Sair da tela cheia")
            if w == 1280:
                pad = await A.evaluate("() => getComputedStyle(document.querySelector('cronologia-app').shadowRoot.querySelector('.app')).paddingLeft")
                check(pad == "0px", f"computador: a página ocupa o lugar da barra do lado ({pad})")
            await A.screenshot(path=f"{SP}/shots/crcheia-{w}.png")
            # Esc sai
            await A.keyboard.press("Escape"); await A.wait_for_timeout(400)
            check(not await A.evaluate(FULL) and not await A.evaluate(STATE), f"{w} px: Esc sai (e tira a entrada do histórico)")
            check(await shown(a.locator(".brand-head .head-row")) and (w >= 1000 or await shown(a.locator("nav"))), f"{w} px: volta tudo")
            if w == 1280:
                await ctx.close(); continue
            # o Voltar do celular sai, e fica na Agora
            await btn.click(); await A.wait_for_timeout(400)
            await A.go_back(); await A.wait_for_timeout(500)
            check(not await A.evaluate(FULL) and await shown(a.locator("nav .tab.on", has_text="Agora")), "Voltar do celular: sai e fica na Agora")
            # uma janela por cima: o Voltar fecha a janela e fica na tela cheia; Esc dentro da janela também só fecha ela
            await btn.click(); await A.wait_for_timeout(400)
            await A.evaluate("() => document.querySelector('cronologia-app')._openSheet('nowcards')"); await A.wait_for_timeout(500)
            check(await shown(a.locator(".sheet")), "uma janela aberta por cima")
            await A.go_back(); await A.wait_for_timeout(500)
            check(not await shown(a.locator(".sheet")) and await A.evaluate(FULL), "Voltar: fecha a janela e continua na tela cheia")
            await A.evaluate("() => document.querySelector('cronologia-app')._openSheet('nowcards')"); await A.wait_for_timeout(500)
            await a.locator(".sheet button").first.focus()
            await A.keyboard.press("Escape"); await A.wait_for_timeout(500)
            check(not await shown(a.locator(".sheet")) and await A.evaluate(FULL), "Esc na janela: fecha só a janela")
            # arrastar não troca de aba
            box = await a.locator("main").bounding_box()
            y = box["y"] + box["height"] / 2
            await A.evaluate(f"""() => {{ const m = document.querySelector('cronologia-app').shadowRoot.querySelector('main');
              const t = (x) => new Touch({{identifier: 1, target: m, clientX: x, clientY: {y}}});
              m.dispatchEvent(new TouchEvent('touchstart', {{touches: [t(330)], changedTouches: [t(330)], bubbles: true, composed: true}}));
              m.dispatchEvent(new TouchEvent('touchend', {{touches: [], changedTouches: [t(60)], bubbles: true, composed: true}})); }}""")
            await A.wait_for_timeout(600)
            check(await A.evaluate(FULL), "arrastar para o lado não sai da Agora")
            # o Sair
            await sair.click(); await A.wait_for_timeout(500)
            check(not await A.evaluate(FULL) and not await A.evaluate(STATE), "o Sair da tela cheia sai")
            # só na Agora
            await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(900)
            check(await a.locator(".full-btn").count() == 0, "no Calendário, sem o botão")
            await ctx.close()
        check(not errs, f"sem erros na página {errs[:2]}")
        await b.close()
    app.terminate(); fake.terminate()
    print(f"{n_ok} passed, {len(failed)} failed")
    if failed: raise SystemExit(1)

asyncio.run(main())
