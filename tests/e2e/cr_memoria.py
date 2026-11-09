# CronologIA 1.61.0: Agora › MemorIA. Mais › Configurações › Integrações › MemorIA › Trechos no Agora, off by default.
# A MemorIA of mentira (an HTTP server answering /api/integracao/agora like the MemorIA 1.13.0, with an invented
# notebook) in share/memoria/integracao.json. Off: no card, nothing asked. On: "Conectado ao MemorIA", and Agora shows
# the trecho of now (the block, since when, the text folded with Ver mais, the ticked box struck through) and the two
# next ones (amanhã), each opening the MemorIA in the page around (target _top). A refused key: no card, the reason in
# Configurações. Phone 390 px (light and dark) and 320 px: nothing past the width, nothing cut. Computer: in the
# column of the day.
import os, sys, asyncio, json, threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from mais_lib import open_more
from playwright.async_api import async_playwright

KEY = {"ok": "segredo"}
ASKED = []
LONG = "Noite\n☐ Ler 20 páginas do livro\n☐ Preparar a lancheira de amanhã\n☑ Conferir a agenda da semana\n☐ Tirar o lixo reciclável\nLembrar: a reunião da escola é quinta às 19h. Levar o caderno de recados e a autorização assinada.\nComprar pão integral e frutas."
def T(inicio, **kw):
    t = {"inicio": inicio, "agora": False, "ontem": False, "amanha": False, "bloco": "Diário", "bloco_id": "b1", "cor": "lilas", "folha_id": f"f{inicio}", "titulo": "Noite", "texto": LONG, "tipo": "trecho", "outros": 0}
    t.update(kw)
    return t
ANSWER = {"versao": "1.13.0", "pessoa": "Ana", "trechos": [T("18:00", agora=True), T("07:00", amanha=True, titulo="Manhã", texto="Manhã"), T("12:00", amanha=True, bloco="Cozinha da casa de praia com nome bem comprido", cor="laranja", titulo="Almoço da semana com um título que não cabe na linha", texto="Almoço")]}

class Fake(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_GET(self):
        ASKED.append({"path": self.path, "auth": self.headers.get("authorization"), "app": self.headers.get("x-app")})
        ok = self.headers.get("authorization") == f"Bearer {KEY['ok']}"
        body = json.dumps(ANSWER if ok else {"erro": "Chave inválida."}).encode()
        self.send_response(200 if ok else 401)
        self.send_header("content-type", "application/json"); self.send_header("content-length", str(len(body))); self.end_headers()
        self.wfile.write(body)

srv = ThreadingHTTPServer(("127.0.0.1", 0), Fake)
threading.Thread(target=srv.serve_forever, daemon=True).start()
st = Stack("crmemoria")
os.makedirs(f"{st.dir}/share/memoria", exist_ok=True)
json.dump({"app": "memoria", "nome": "MemorIA", "url": f"http://127.0.0.1:{srv.server_port}", "ip_url": None, "chave": "segredo", "versao": "1.13.0", "agora": "/api/integracao/agora", "painel": "/app/a1b2c3d4_memoria"}, open(f"{st.dir}/share/memoria/integracao.json", "w"))

OVERFLOW = "(el) => document.documentElement.scrollWidth > innerWidth + 1 || [...el.renderRoot.querySelectorAll('.panel.memo *')].some((x) => { const r = x.getBoundingClientRect(); return r.width && (r.right > innerWidth + 1 || r.left < -1); })"
CUT = "(el) => [...el.renderRoot.querySelectorAll('.memo-row b, .memo-row small, .memo-at b, .memo-block span')].filter((x) => x.scrollWidth > x.clientWidth + 1 && getComputedStyle(x).textOverflow !== 'ellipsis').map((x) => x.textContent)"

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", has_touch=True, timezone_id="America/Sao_Paulo", locale="pt-BR")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        check(await a.locator(".panel.memo").count() == 0 and not ASKED, "off by default: no card in Agora, nothing asked")
        await open_more(a, "Integrações", 600)
        card = a.locator("#memoria-config")
        t = " ".join((await card.inner_text()).split())
        check("MemorIA" in t and "Trechos no Agora" in t and "Desligado." in t and "Conectado" not in t, f"Integrações: MemorIA, the switch, Desligado ({t})")
        order = await a.evaluate("(el) => [...el.renderRoot.querySelectorAll('.page .panel[id]')].map((x) => x.id)")
        check(order.index("memoria-config") < order.index("correria"), f"with the apps of the family, before the CorrerIA ({order})")
        await card.locator("input[aria-label='Trechos do MemorIA no Agora']").check()
        async def on():
            t = " ".join((await card.inner_text()).split())
            return "Conectado ao MemorIA 1.13.0" in t and "Agora: Diário, desde 18:00." in t
        await wait_for(on, "on: Conectado ao MemorIA, and the trecho of now")
        # (the person and the Home Assistant user go along behind the ingress: tests/integration/memoria.test.mjs)
        check(ASKED and ASKED[-1]["path"].split("?")[0] == "/api/integracao/agora" and ASKED[-1]["auth"] == "Bearer segredo" and ASKED[-1]["app"] == "CronologIA", f"asked with the key ({ASKED[-1:]})")
        await card.screenshot(path=f"{SP}/shots/crmemoria-config.png")
        await wait_for(lambda: json.load(open(f"{st.dir}/cronologia.json"))["app"].get("memoria_on") is True, "the switch is kept")

        await a.locator("nav .tab", has_text="Agora").click()
        memo = a.locator(".panel.memo")
        await memo.wait_for(timeout=6000)
        t = " ".join((await memo.inner_text()).split())
        check("MEMORIA" in t.upper() and "desde 18:00" in t and "Diário" in t and "Ler 20 páginas do livro" in t, f"the trecho of now: the block, since when, the text ({t[:120]})")
        check("07:00 amanhã Diário Manhã" in t and "12:00 amanhã" in t, "the two next ones, amanhã")
        links = await memo.locator("a").evaluate_all("(xs) => xs.map((x) => [x.getAttribute('href'), x.getAttribute('target')])")
        check(links == [["/app/a1b2c3d4_memoria", "_top"]] * 3, f"the trecho and the rows open the MemorIA in the page around ({links})")
        check(await memo.locator(".ck.done").count() == 1 and "line-through" in await memo.locator(".ck.done").evaluate("(x) => getComputedStyle(x).textDecorationLine"), "the ticked box struck through")
        order = await a.evaluate("(el) => [...el.renderRoot.querySelectorAll('.page > .panel')].map((x) => x.className.split(' ')[1])")
        check(order.index("memo") == order.index("agenda") + 1 if "agenda" in order else True, f"right after the day ({order})")
        txt = memo.locator(".memo-text")
        h1 = (await txt.bounding_box())["height"]
        more = memo.locator(".memo-more")
        check(await more.inner_text() == "Ver mais", "a long text folded: Ver mais")
        await memo.scroll_into_view_if_needed()
        await A.screenshot(path=f"{SP}/shots/crmemoria-dark-390.png")
        await more.click(); await A.wait_for_timeout(200)
        h2 = (await txt.bounding_box())["height"]
        check(h2 > h1 + 20 and await more.inner_text() == "Ver menos" and "frutas" in await txt.inner_text(), f"Ver mais opens the whole text ({h1:.0f} -> {h2:.0f})")
        check("#/" not in A.url and "/app/" not in A.url, "Ver mais is not the link")
        await memo.screenshot(path=f"{SP}/shots/crmemoria-aberto.png")
        await more.click(); await A.wait_for_timeout(200)
        check(not await a.evaluate(OVERFLOW), "390 px: nothing past the width")
        check(await a.evaluate(CUT) == [], "390 px: nothing cut (long names end in …)")
        check(not errs, f"no page errors ({errs[:2]})")
        await ctx.close()

        for scheme, w in (("light", 390), ("dark", 320), ("light", 320)):
            ctx = await b.new_context(viewport={"width": w, "height": 844}, device_scale_factor=2, color_scheme=scheme, has_touch=True, timezone_id="America/Sao_Paulo", locale="pt-BR")
            P = await ctx.new_page(); P.on("pageerror", lambda e: errs.append(str(e)))
            await P.goto(URL); await P.wait_for_timeout(1500)
            a = P.locator("cronologia-app")
            memo = a.locator(".panel.memo")
            await memo.wait_for(timeout=6000)
            await memo.scroll_into_view_if_needed()
            check(not await a.evaluate(OVERFLOW), f"{scheme} {w} px: nothing past the width")
            check(await a.evaluate(CUT) == [], f"{scheme} {w} px: nothing cut")
            box = await memo.bounding_box()
            check(box["x"] >= 0 and box["x"] + box["width"] <= w, f"{scheme} {w} px: the card inside the screen ({box})")
            await memo.screenshot(path=f"{SP}/shots/crmemoria-{scheme}-{w}.png")
            await ctx.close()

        # computer: in the column of the day, under it
        ctx = await b.new_context(viewport={"width": 1280, "height": 900}, device_scale_factor=1, color_scheme="light", timezone_id="America/Sao_Paulo", locale="pt-BR")
        P = await ctx.new_page(); P.on("pageerror", lambda e: errs.append(str(e)))
        await P.goto(URL); await P.wait_for_timeout(1500)
        a = P.locator("cronologia-app")
        await a.locator(".now-main .panel.memo").wait_for(timeout=6000)
        check(await a.locator(".now-main .panel.memo").count() == 1, "computer: in the column of the day")
        await P.screenshot(path=f"{SP}/shots/crmemoria-pc.png")
        await ctx.close()

        # a refused key: no card; the reason in Configurações
        KEY["ok"] = "outra"
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="light", has_touch=True, timezone_id="America/Sao_Paulo", locale="pt-BR")
        P = await ctx.new_page(); P.on("pageerror", lambda e: errs.append(str(e)))
        await P.goto(URL); await P.wait_for_timeout(1500)
        a = P.locator("cronologia-app")
        await open_more(a, "Integrações", 600)
        card = a.locator("#memoria-config")
        async def refused():
            t = " ".join((await card.inner_text()).split())
            return "Não consegui falar com o MemorIA" in t and "O MemorIA recusou a chave." in t
        await wait_for(refused, "a refused key: the reason in Configurações")
        await a.locator("nav .tab", has_text="Agora").click(); await P.wait_for_timeout(800)
        check(await a.locator(".panel.memo").count() == 0, "a refused key: no card in Agora")
        # off again: nothing is asked
        await open_more(a, "Integrações", 600)
        await a.locator("#memoria-config input[aria-label='Trechos do MemorIA no Agora']").uncheck()
        await P.wait_for_timeout(400)
        n = len(ASKED)
        await a.locator("nav .tab", has_text="Agora").click(); await P.wait_for_timeout(1500)
        check(len(ASKED) == n and await a.locator(".panel.memo").count() == 0, "off: no card, nothing asked")
        check(not errs, f"no page errors ({errs[:2]})")
        await ctx.close()
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
    srv.shutdown()
summary()
