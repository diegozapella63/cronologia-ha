# CronologIA 1.88.0: Tela cheia da Agora com uma folha do MemorIA agora: a folha de um lado, inteira e grande (sem o
# Ver mais, da altura da tela, parada enquanto o outro lado desce) e os outros cards do outro, na ordem da pessoa (sem a
# busca e sem a folha repetida); no celular, a folha primeiro; sem folha agora, a tela cheia de sempre; saindo, a Agora
# volta como era (a folha dobrada, com o Ver mais). Na tela cheia também saem as tarefas sem prazo e os Avisos do
# GerencIA. Um MemorIA de mentira, como no cr_memoria.
import os, sys, asyncio, json, threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, summary
from playwright.async_api import async_playwright

LONG = "Noite\n☐ Ler 20 páginas do livro\n☐ Preparar a lancheira de amanhã\n☑ Conferir a agenda da semana\n☐ Tirar o lixo reciclável\nLembrar: a reunião da escola é quinta às 19h. Levar o caderno de recados e a autorização assinada.\nComprar pão integral e frutas."
def T(inicio, **kw):
    t = {"inicio": inicio, "agora": False, "ontem": False, "amanha": False, "bloco": "Diário", "bloco_id": "b1", "cor": "lilas", "folha_id": f"f{inicio}", "titulo": "Noite", "texto": LONG, "tipo": "trecho", "outros": 0}
    t.update(kw)
    return t
STATE = {"agora": True}
ASKED = []

class Fake(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_GET(self):
        ASKED.append(self.path)
        trechos = [T("18:00", agora=True), T("07:00", amanha=True, texto="Manhã")] if STATE["agora"] else [T("07:00", amanha=True, texto="Manhã")]
        body = json.dumps({"versao": "1.15.1", "pessoa": "Ana", "trechos": trechos}).encode()
        self.send_response(200)
        self.send_header("content-type", "application/json"); self.send_header("content-length", str(len(body))); self.end_headers()
        self.wfile.write(body)

srv = ThreadingHTTPServer(("127.0.0.1", 0), Fake)
threading.Thread(target=srv.serve_forever, daemon=True).start()
st = Stack("crcheiamemo", data={"app": {"memoria_on": True, "todo_undated": True, "score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}}})
os.makedirs(f"{st.dir}/share/memoria", exist_ok=True)
json.dump({"app": "memoria", "nome": "MemorIA", "url": f"http://127.0.0.1:{srv.server_port}", "ip_url": None, "chave": "segredo", "versao": "1.15.1", "agora": "/api/integracao/agora", "painel": "/app/a1b2c3d4_memoria"}, open(f"{st.dir}/share/memoria/integracao.json", "w"))

FULL = "() => document.querySelector('cronologia-app').hasAttribute('full')"
# Avisos do GerencIA (inventados), como o GerencIA manda
AVISOS = """() => { const el = document.querySelector('cronologia-app'); const g = (el._home && el._home.gerencia) || {};
  el._home = {...el._home, gerencia: {...g, ligado: true, erro: null, avisos: [{id: 'email:a1', tipo: 'email', titulo: 'Fatura Banco Azul', texto: 'Por e-mail', valor: 312.4}]}}; el.requestUpdate(); }"""


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errs = []
        for w, h, scheme in ((1280, 800, "light"), (1280, 800, "dark"), (820, 1180, "light"), (390, 844, "light")):
            tag = f"{w} px {scheme}"
            ctx = await b.new_context(viewport={"width": w, "height": h}, device_scale_factor=2 if w < 1000 else 1, color_scheme=scheme, timezone_id="America/Sao_Paulo", locale="pt-BR")
            A = await ctx.new_page()
            A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto(URL); await A.wait_for_timeout(2000)
            a = A.locator("cronologia-app")
            check(await a.locator(".panel.memo .memo-more").count() == 1, f"{tag}: antes, a folha dobrada com o Ver mais")
            await A.evaluate(AVISOS); await A.wait_for_timeout(300)
            check(await a.locator("#gerencia-avisos").count() == 1 and (await a.locator("#tarefas").inner_text()).split("\n")[0].lower() == "tarefas", f"{tag}: antes, os Avisos do GerencIA e as tarefas sem prazo (o título é Tarefas)")
            await a.locator(".full-btn").click(); await A.wait_for_timeout(700)
            memo, rest = a.locator(".full-cols > .full-memo"), a.locator(".full-cols > .full-rest")
            check(await memo.count() == 1 and await rest.count() == 1 and await a.locator(".panel.memo").count() == 1, f"{tag}: a folha de um lado, os outros cards do outro (a folha uma vez só)")
            check(await a.locator(".memo-more").count() == 0 and "Comprar pão integral e frutas." in await memo.inner_text(), f"{tag}: a folha inteira, sem o Ver mais")
            # 1.89.0: as folhas da casa toda, como a Tela cheia do MemorIA (sem o usuário e sem a pessoa)
            check("usuario=" not in ASKED[-1] and "pessoa=" not in ASKED[-1] and "hora=" in ASKED[-1], f"{tag}: pede as folhas da casa ({ASKED[-1]})")
            check(await rest.locator(".home-search").count() == 0 and await rest.locator(".panel").count() >= 2, f"{tag}: do outro lado, os cards sem a busca")
            # 1.90.0: o placar no alto do lado dos cards, com quem está na frente
            pl = rest.locator(":scope > #placar-agora")
            check(await pl.count() == 1 and await rest.locator(":scope > .panel").first.get_attribute("id") == "placar-agora", f"{tag}: o placar no alto do lado dos cards")
            pt = await pl.inner_text()
            check("Davi" in pt and "Aurora" in pt and ("na frente" in pt or "Empatados" in pt or "Ninguém pontuou" in pt), f"{tag}: os pontos e quem está ganhando")
            tarefas = await a.locator("#tarefas").inner_text()
            check(await a.locator("#gerencia-avisos").count() == 0 and tarefas.lower().startswith("tarefas com prazo") and "Sem prazo" not in tarefas and "Café" not in tarefas and "Das listas do ResolvIA" not in tarefas,
                  f"{tag}: sem os Avisos do GerencIA e sem as tarefas sem prazo")
            check("Dispositivo sem resposta 10" in tarefas, f"{tag}: as tarefas com prazo todas (sem o Mais)")
            mb, rb = await memo.bounding_box(), await rest.bounding_box()
            fs = await a.evaluate("(el) => parseFloat(getComputedStyle(el.renderRoot.querySelector('.full-memo .memo-ink')).fontSize)")
            check(fs >= 28, f"{tag}: a letra grande ({fs})")
            if w >= 1100:
                check(rb["x"] >= mb["x"] + mb["width"] and abs(rb["y"] - mb["y"]) < 4, f"{tag}: lado a lado ({mb}, {rb})")
                check(mb["width"] > rb["width"] * 1.3, f"{tag}: o espaço maior para a folha ({mb['width']:.0f} × {rb['width']:.0f})")
                leaf = await a.locator(".full-memo .memo-leaf").bounding_box()
                check(leaf["height"] >= h - 240, f"{tag}: a folha da altura da tela ({leaf['height']:.0f} de {h})")
                over = await A.evaluate("() => { const m = document.querySelector('cronologia-app').shadowRoot.querySelector('main'); return m.scrollWidth - m.clientWidth; }")
                check(over <= 0, f"{tag}: nada passa da largura ({over})")
                await A.screenshot(path=f"{SP}/shots/crcheiamemo-{w}-{scheme}.png")
                if w == 1280 and scheme == "light":
                    # a folha fica enquanto o outro lado desce
                    top0 = (await memo.bounding_box())["y"]
                    await A.evaluate("() => { const m = document.querySelector('cronologia-app').shadowRoot.querySelector('main'); m.style.scrollBehavior = 'auto'; m.scrollTop = 400; }")
                    await A.wait_for_timeout(300)
                    scrolled = await A.evaluate("() => document.querySelector('cronologia-app').shadowRoot.querySelector('main').scrollTop")
                    top1 = (await memo.bounding_box())["y"]
                    check(scrolled > 100 and top1 >= 0 and top1 < top0, f"{tag}: descendo, a folha fica na tela ({top0:.0f} → {top1:.0f}, rolou {scrolled})")
            else:
                check(mb["y"] + mb["height"] <= rb["y"] + 1 and mb["width"] >= rb["width"] - 1, f"{tag}: no celular e no tablet em pé, a folha primeiro, na largura toda")
                await A.screenshot(path=f"{SP}/shots/crcheiamemo-{w}.png", full_page=False)
            # saindo, a Agora volta como era
            await A.keyboard.press("Escape"); await A.wait_for_timeout(500)
            check(not await A.evaluate(FULL) and await a.locator(".full-cols").count() == 0 and await a.locator(".panel.memo .memo-more").count() == 1, f"{tag}: saindo, a folha volta dobrada no lugar dela")
            # the person's again (the server may answer from its cache, without asking the MemorIA)
            check(await A.evaluate("() => document.querySelector('cronologia-app')._memoCasa") is False, f"{tag}: saindo, volta para as folhas da pessoa")
            check(await a.locator("#gerencia-avisos").count() == 1 and (await a.locator("#tarefas").inner_text()).split("\n")[0].lower() == "tarefas", f"{tag}: saindo, voltam os avisos e as tarefas sem prazo")
            check(await a.locator("#placar-agora").count() == 0, f"{tag}: fora da tela cheia, sem o placar na Agora")
            await ctx.close()
        # Mais › Recompensas › Na tela cheia da Agora desligado: sem o placar
        ctx = await b.new_context(viewport={"width": 1280, "height": 800}, timezone_id="America/Sao_Paulo", locale="pt-BR")
        A = await ctx.new_page()
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1800)
        a = A.locator("cronologia-app")
        await A.evaluate("() => document.querySelector('cronologia-app')._go('/mais/recompensas')"); await A.wait_for_timeout(700)
        sw = a.locator("input[aria-label='Placar na tela cheia da Agora']")
        check(await sw.count() == 1 and await sw.is_checked(), "Mais › Recompensas: Na tela cheia da Agora, ligado de início")
        await sw.uncheck(); await A.wait_for_timeout(600)
        await A.evaluate("() => document.querySelector('cronologia-app')._go('/')"); await A.wait_for_timeout(900)
        await a.locator(".full-btn").click(); await A.wait_for_timeout(600)
        check(await A.evaluate(FULL) and await a.locator("#placar-agora").count() == 0, "desligado: a tela cheia sem o placar")
        await A.keyboard.press("Escape"); await A.wait_for_timeout(300)
        await A.evaluate("() => document.querySelector('cronologia-app')._go('/mais/recompensas')"); await A.wait_for_timeout(700)
        await a.locator("input[aria-label='Placar na tela cheia da Agora']").check(); await A.wait_for_timeout(500)
        await ctx.close()
        # sem folha agora: a tela cheia de sempre
        STATE["agora"] = False
        ctx = await b.new_context(viewport={"width": 1280, "height": 800}, timezone_id="America/Sao_Paulo", locale="pt-BR")
        A = await ctx.new_page()
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(2000)
        a = A.locator("cronologia-app")
        await A.evaluate("() => document.querySelector('cronologia-app')._loadMemoria(true)"); await A.wait_for_timeout(600)  # past the cache of the server
        await a.locator(".full-btn").click(); await A.wait_for_timeout(600)
        check(await A.evaluate(FULL) and await a.locator(".full-cols").count() == 0 and await a.locator(".now-cols").count() == 1, "sem folha agora: as duas colunas de sempre")
        check(await a.locator(".now-side > #placar-agora").count() == 1, "sem folha agora: o placar no alto da coluna dos remédios")
        await A.screenshot(path=f"{SP}/shots/crcheiamemo-sem-folha.png")
        await ctx.close()
        check(not errs, f"sem erros na página {errs[:2]}")
        await b.close()
    st.stop()
    summary()

asyncio.run(main())
