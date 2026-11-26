# CronologIA 1.116.0 (o dono: "do mesmo jeito que criamos esse agrupar por… a gente precisa adicionar ele em outros locais";
# o modelo é o dos Consumíveis do InventarIA): Mais › Rotinas › Agrupar por Tipo (como sempre), Quem faz, Cômodo (com os
# cômodos) e Frequência, numa barra só, do mesmo tamanho; cada grupo é um cartão com o ícone, o nome e quantos, que fecha pelo
# título; o título Agrupar por fecha o bloco (com o escolhido ao lado) e o aparelho lembra. A casa do HA simulado, inventada.
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
data = f"{SP}/cragr-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)

OPS = "(root) => [...root.shadowRoot.querySelectorAll('.agrupar-seg button')].map((b) => [b.textContent.trim(), b.getAttribute('aria-checked')])"
GRUPOS = "(root) => [...root.shadowRoot.querySelectorAll('.cat-grp')].map((p) => [(p.querySelector('.overline') || {}).textContent || '', (p.querySelector('.sec-head small') || {}).textContent || '', p.querySelectorAll('.cat-row').length])"


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="light")
        errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Rotinas"); await A.wait_for_timeout(800)
        ops = await a.evaluate(OPS)
        check([x[0] for x in ops][:2] == ["Tipo", "Quem faz"] and ops[-1][0] == "Frequência" and ops[0][1] == "true", f"Tipo (de início), Quem faz… e Frequência ({ops})")
        caixas = [await x.bounding_box() for x in await a.locator(".agrupar-seg button").all()]
        check(len({round(c["y"]) for c in caixas}) == 1 and max(c["width"] for c in caixas) - min(c["width"] for c in caixas) < 2, "numa linha, do mesmo tamanho")
        check(await a.locator("#cat-rotina").count() == 1 and await a.locator(".cat-grp").count() == 0, "Tipo: as seções de sempre")
        n_todos = await a.locator(".cat-row").count()
        # Quem faz
        await a.locator(".agrupar-seg button", has_text="Quem faz").click(); await A.wait_for_timeout(400)
        gs = await a.evaluate(GRUPOS)
        check(len(gs) >= 2 and gs[-1][0] == "Sem quem faz" and all(int(g[1]) == g[2] for g in gs), f"Quem faz: um cartão por pessoa, quantos no título ({gs})")
        check(await a.locator("#cat-rotina").count() == 0, "sem as seções por tipo")
        await A.screenshot(path=f"{SP}/shots/cragr-quem.png")
        # Frequência
        await a.locator(".agrupar-seg button", has_text="Frequência").click(); await A.wait_for_timeout(400)
        nomes = [g[0] for g in await a.evaluate(GRUPOS)]
        ordem = ["Todo dia", "Até uma semana", "Até um mês", "Mais de um mês", "Uma vez"]
        check(nomes and all(n in ordem for n in nomes) and nomes == sorted(nomes, key=ordem.index) and "Todo dia" in nomes, f"Frequência: na ordem ({nomes})")
        check(sum(g[2] for g in await a.evaluate(GRUPOS)) == n_todos, "os mesmos cadastros, nos grupos")
        # um grupo fecha pelo título
        g0 = a.locator(".cat-grp").first
        await g0.locator(".sec-head").click(); await A.wait_for_timeout(250)
        check(await g0.locator(".cat-row").count() == 0 or not await g0.locator(".cat-row").first.is_visible(), "o grupo fecha pelo título")
        await g0.locator(".sec-head").click(); await A.wait_for_timeout(250)
        # o bloco fecha pelo título, com o escolhido ao lado; o aparelho lembra
        await a.locator(".agrupar-l").click(); await A.wait_for_timeout(250)
        check(await a.locator(".agrupar-seg").count() == 0 and (await a.locator(".agrupar-val").inner_text()).strip() == "· Frequência", "fechado, o escolhido ao lado")
        await A.reload(); await A.wait_for_timeout(1500)
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Rotinas"); await A.wait_for_timeout(800)
        check(await a.locator(".agrupar.fechado").count() == 1 and await a.locator(".cat-grp").count() > 0, "o aparelho lembra a escolha e o bloco fechado")
        await a.locator(".agrupar-l").click(); await A.wait_for_timeout(250)
        # o Selecionar continua valendo nos grupos
        await a.locator(".sel-start").click(); await A.wait_for_timeout(300)
        await a.locator(".cat-grp .cat-row").first.click(); await A.wait_for_timeout(200)
        check("1 selecionado" in await a.locator(".sel-head").inner_text(), "o Selecionar marca dentro de um grupo")
        await a.locator(".sel-head .icon-btn").click(); await A.wait_for_timeout(300)
        await A.set_viewport_size({"width": 320, "height": 760}); await A.wait_for_timeout(300)
        check(not await A.evaluate("() => document.documentElement.scrollWidth > innerWidth"), "320 px: nada passa da largura")
        await A.screenshot(path=f"{SP}/shots/cragr-320.png")
        await a.locator(".agrupar-seg button", has_text="Tipo").click(); await A.wait_for_timeout(300)
        check(await a.locator("#cat-rotina").count() == 1, "de volta ao Tipo")
        check(not errs, f"sem erros na tela ({errs[:2]})")
        await b.close()

try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
