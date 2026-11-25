# CronologIA 1.114.0: Mais › Rotinas › Selecionar, como nos outros apps da família. Selecionar (ou segurar o dedo numa
# linha) marca vários cadastros de um tipo só (os de outro tipo ficam apagados); Todos e Nenhum; o X e o Voltar do celular
# saem. Embaixo, Apagar e Alterar N: Quem faz, Pontos e Cômodos (cada um em Manter de início), deste em diante; depois, o
# aviso com Desfazer. Apagar pede a confirmação. A casa do HA simulado (dev/fake-ha.mjs), inventada.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
import asyncio, os, subprocess, time, shutil
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crsel-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)

FORA = """(root) => { const W = innerWidth, ruins = [];
  for (const e of root.shadowRoot.querySelectorAll('.sel-bar *, .res-head *, .cat-row')) { const r = e.getBoundingClientRect();
    if (r.width && (r.right > W + 1 || r.left < -1)) ruins.push(e.className || e.tagName); }
  return ruins.slice(0, 4); }"""


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Rotinas"); await A.wait_for_timeout(800)
        rot = a.locator("#cat-rotina .cat-row")
        check(await a.locator(".sel-start").is_visible(), "o Selecionar acima das seções")
        await a.locator(".sel-start").click(); await A.wait_for_timeout(300)
        check(await a.locator(".sel-head").count() == 1 and "Toque nos cadastros" in await a.locator(".sel-head").inner_text(), "selecionando: nada marcado ainda")
        check(await A.evaluate("() => !!(history.state && history.state.rvSel)"), "a seleção é uma entrada do histórico")
        check(await a.locator(".cat-row .cat-mark").count() == await a.locator(".cat-row").count(), "a marca em cada linha, no lugar da seta")
        check(await a.locator(".add-line", has_text="Nova rotina").count() == 0, "sem os Novo… enquanto seleciona")
        await rot.filter(has_text="Regar as plantas").click(); await A.wait_for_timeout(200)
        check(await rot.filter(has_text="Regar as plantas").get_attribute("aria-pressed") == "true", "o toque marca")
        rem = a.locator("#cat-remedio .cat-row").first
        check(await rem.is_disabled(), "um tipo só: os remédios ficam de fora")
        await a.locator(".sel-head .text-btn", has_text="Todos").click(); await A.wait_for_timeout(200)
        n_rot = await rot.count()
        check(f"{n_rot} selecionados" in await a.locator(".sel-head").inner_text(), f"Todos marca as {n_rot} rotinas")
        await a.locator(".sel-head .text-btn", has_text="Nenhum").click(); await A.wait_for_timeout(200)
        check(await a.locator(".cat-row.sel-on").count() == 0 and not await rem.is_disabled(), "Nenhum desmarca e solta o tipo")
        # Alterar duas rotinas: Quem faz e Pontos
        await rot.filter(has_text="Regar as plantas").click(); await rot.filter(has_text="Lavar a louça").click(); await A.wait_for_timeout(200)
        alt = a.locator(".sel-bar .sel-alterar")
        check((await alt.inner_text()).strip() == "Alterar 2", "Alterar diz quantos")
        await A.screenshot(path=f"{SP}/shots/crsel-marcados.png")
        await alt.click(); await A.wait_for_timeout(500)
        sheet = a.locator(".sheet")
        check("Alterar 2 rotinas" in await sheet.locator(".sheet-head").inner_text(), "a janela: Alterar 2 rotinas")
        keeps = await sheet.locator(".pick.keep.on").count()
        check(keeps == await sheet.locator(".field").count(), f"cada campo começa em Manter ({keeps})")
        check(await sheet.locator(".btn.primary", has_text="Salvar").is_disabled(), "sem mudar nada, o Salvar fica inativo")
        await sheet.locator('[data-f="quem"] .pick.person', has_text="Aurora").click()
        if await sheet.locator('[data-f="pontos"]').count():
            await sheet.locator('[data-f="pontos"] .pick', has_text="+20").click()
        await A.screenshot(path=f"{SP}/shots/crsel-alterar.png")
        await sheet.locator(".btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(2500)
        check(await sheet.count() == 0 and await a.locator(".sel-head").count() == 0, "salvo: a janela e a seleção fecham")
        check(await A.evaluate("() => !(history.state && (history.state.rvSel || history.state.rvSheet))"), "sem as entradas da seleção e da janela no histórico")
        toast = a.locator(".toast")
        check("2 cadastros alterados" in await toast.inner_text() and await toast.locator("button", has_text="Desfazer").count() == 1, "o aviso com o Desfazer")
        regar = await rot.filter(has_text="Regar as plantas").inner_text()
        check("Aurora" in regar and "Davi" not in regar, f"a rotina com quem faz novo ({regar.splitlines()[-1]})")
        await toast.locator("button", has_text="Desfazer").click(); await A.wait_for_timeout(2500)
        regar2 = await rot.filter(has_text="Regar as plantas").inner_text()
        check("Davi" in regar2 and "Aurora" not in regar2, f"o Desfazer volta como era ({regar2.splitlines()[-1]})")
        # segurar o dedo num remédio começa com ele marcado; o Voltar do celular sai
        await a.locator("#cat-remedio .cat-row").first.dispatch_event("contextmenu"); await A.wait_for_timeout(300)
        check("1 selecionado" in await a.locator(".sel-head").inner_text(), "segurar o dedo marca o remédio")
        check(await a.locator(".sel-bar .sel-alterar").count() == 1, "remédio: Alterar (quem toma)")
        await A.go_back(); await A.wait_for_timeout(500)
        check(await a.locator(".sel-head").count() == 0, "o Voltar do celular sai da seleção")
        check(await a.locator(".cat-sec").count() == 4, "e fica em Rotinas")
        # uma conta: só Apagar
        await a.locator("#cat-conta .cat-row").first.dispatch_event("contextmenu"); await A.wait_for_timeout(300)
        check(await a.locator(".sel-bar .sel-alterar").count() == 0 and await a.locator(".sel-bar .sel-apagar").count() == 1, "conta: só Apagar")
        await a.locator(".sel-head .icon-btn").click(); await A.wait_for_timeout(500)
        check(await a.locator(".sel-head").count() == 0 and await A.evaluate("() => !(history.state && history.state.rvSel)"), "o X sai e tira a entrada")
        # Apagar, com a confirmação
        nome = (await rot.last.locator(".label").inner_text()).strip()
        antes = await rot.count()
        await a.locator(".sel-start").click(); await rot.last.click(); await A.wait_for_timeout(200)
        await a.locator(".sel-bar .sel-apagar").click(); await A.wait_for_timeout(500)
        check(f"Apagar “{nome[:20]}" in await sheet.inner_text(), f"pede a confirmação ({nome})")
        await sheet.locator(".btn", has_text="Apagar").last.click(); await A.wait_for_timeout(2500)
        check(await rot.count() == antes - 1 and await rot.filter(has_text=nome).count() == 0, "apagada")
        check("1 cadastro apagado" in await a.locator(".toast").inner_text(), "o aviso")
        # 320 px: a barra cabe
        await A.set_viewport_size({"width": 320, "height": 700}); await A.wait_for_timeout(300)
        await a.locator(".sel-start").click(); await rot.first.click(); await A.wait_for_timeout(300)
        ruins = await a.evaluate(FORA)
        check(not ruins, f"320 px: nada para fora {ruins}")
        await A.screenshot(path=f"{SP}/shots/crsel-320.png")
        # sair de Rotinas acaba com a seleção
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        check(await A.evaluate("() => !(history.state && history.state.rvSel)"), "outra tela: a entrada da seleção sai")
        check(not errs, f"sem erros na página {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
