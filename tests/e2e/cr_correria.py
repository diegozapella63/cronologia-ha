# CronologIA 1.60.0: Mais › Configurações › Integrações › CorrerIA. Off by default (apart from Usar IA): no file in the
# share folder, the route refuses. On: share/cronologia/correria.json (600) with the key, "Nenhum uso ainda"; a tool
# used with that key (the WhatsApp marks a chore done) shows on Agora and as "WhatsApp usou hoje às HH:MM" under the
# switch, at once; off: the file goes and the key stops working. Phone (390 px, light and dark) and computer.
import os, sys, asyncio, json, stat, urllib.request, urllib.error
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from mais_lib import open_more
from playwright.async_api import async_playwright

st = Stack("crcorreria", app_env={"CRONOLOGIA_URL_INTERNA": URL.rstrip("/")})
FILE = f"{st.dir}/share/cronologia/correria.json"
ROUTE = URL + "api/integracao/ferramentas"

def call(key, body=None):
    """The CorrerIA calling the route: (status, json)."""
    req = urllib.request.Request(ROUTE, data=json.dumps(body).encode() if body is not None else None, method="POST" if body is not None else "GET",
                                 headers={"authorization": f"Bearer {key}", "x-app": "CorrerIA", "content-type": "application/json"})
    try:
        r = urllib.request.urlopen(req)
        return r.status, json.loads(r.read())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b"{}")

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="light", has_touch=True)
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        check(not os.path.exists(FILE) and call("x")[0] == 401, "off by default: no file, the route refuses")
        await open_more(a, "Integrações", 600)
        card = a.locator("#correria")
        check(await card.count() == 1, "Integrações: the CorrerIA card")
        order = await a.evaluate("(el) => [...el.renderRoot.querySelectorAll('.page .panel[id]')].map((x) => x.id)")
        check(order.index("correria") == order.index("leitura-ia") - 1, f"after the apps of the family, before the AI ({order})")
        t = " ".join((await card.inner_text()).split())
        check("O CorrerIA junta os apps da casa no WhatsApp, no Claude e no Gemini." in t and "Usar com o CorrerIA" in t and "Desligado." in t, f"off: what it is and the switch ({t})")
        sw = card.locator("input[aria-label='Usar com o CorrerIA']")
        check(not await sw.is_checked(), "the switch off")
        await A.screenshot(path=f"{SP}/shots/crcorreria-off.png")
        await sw.check()
        await wait_for(lambda: os.path.exists(FILE), "on: share/cronologia/correria.json")
        check(stat.S_IMODE(os.stat(FILE).st_mode) == 0o600, "the file is only the owner's (600)")
        j = json.load(open(FILE))
        check(j["app"] == "cronologia" and j["ferramentas"] == "/api/integracao/ferramentas" and j["url"] == URL.rstrip("/"), f"the file of the contract ({ {k: v for k, v in j.items() if k != 'chave'} })")
        async def not_used():
            t = " ".join((await card.inner_text()).split())
            return "Ligado: pelo WhatsApp, o Claude e o Gemini leem e mudam a agenda." in t and "Nenhum uso ainda" in t and "Conecte no app CorrerIA." in t
        await wait_for(not_used, "on, not used yet")
        key = j["chave"]
        s, lst = call(key)
        check(s == 200 and len(lst["ferramentas"]) == 10, f"GET with the key: the tools ({s})")
        s, r = call(key, {"nome": "resumo", "argumentos": {}, "pessoa": {"id": "person.ana", "nome": "Ana"}, "cliente": "WhatsApp"})
        lixo = next((x for x in json.loads(r["texto"])["rotinas_hoje"] if x["nome"] == "Tirar o lixo" and x["situacao"] == "a fazer"), None)
        check(s == 200 and lixo is not None, "resumo: today's chore with its id")
        # another phone with Agora open: it gets the change live, as when another person marks something
        B = await ctx.new_page(); B.on("pageerror", lambda e: errs.append(str(e)))
        await B.goto(URL); await B.wait_for_timeout(1500)
        b_app = B.locator("cronologia-app")
        lixo_row = b_app.locator(".chore", has=B.locator("b", has_text="Tirar o lixo"))
        check(await lixo_row.count() == 1 and "done" not in (await lixo_row.get_attribute("class") or ""), "Agora (another phone): Tirar o lixo to do")
        s, r = call(key, {"nome": "marcar_feito", "argumentos": {"id": lixo["id"]}, "pessoa": {"id": "person.ana", "nome": "Ana"}, "cliente": "WhatsApp"})
        check(s == 200 and r["texto"].startswith("Feita por Ana: Tirar o lixo"), f"marcar_feito through the WhatsApp ({r})")
        # done: it leaves the list to do and goes under Concluídas (n), without reloading
        fold = b_app.locator("#casa .done-fold")
        async def row_done():
            return await lixo_row.count() == 0 and await fold.count() == 1 and "Concluídas (1)" in await fold.inner_text()
        await wait_for(row_done, "Agora (another phone): Tirar o lixo goes to the done ones, without reloading")
        await fold.click(); await B.wait_for_timeout(300)
        check(await lixo_row.count() == 1 and "done" in (await lixo_row.get_attribute("class") or "").split(), "Concluídas: Tirar o lixo done")
        s, r = call(key, {"nome": "resumo", "argumentos": {}, "pessoa": {"id": "person.ana", "nome": "Ana"}, "cliente": "WhatsApp"})
        now = next((x for x in json.loads(r["texto"])["rotinas_hoje"] if x["id"] == lixo["id"]), {})
        check(now.get("situacao") == "feita" and now.get("feita_por") == "Ana", f"resumo reads it done by Ana ({now})")
        await B.screenshot(path=f"{SP}/shots/crcorreria-agora.png")
        await B.close()
        async def used():
            return "WhatsApp usou hoje às" in await card.inner_text()
        await wait_for(used, "the screen shows who used it, at once")
        await A.screenshot(path=f"{SP}/shots/crcorreria-on.png")
        await A.emulate_media(color_scheme="dark"); await A.wait_for_timeout(300)
        await card.scroll_into_view_if_needed()
        await A.screenshot(path=f"{SP}/shots/crcorreria-on-dark.png")
        over = await A.evaluate("() => document.documentElement.scrollWidth - window.innerWidth")
        check(over <= 0, f"nothing past the edge ({over})")
        # and in /data/cronologia.json: the store writes it 400 ms after the last change, and any other change in that
        # time (like a medicine alert the app sends by itself) starts the 400 ms again, so it lands a moment later
        await wait_for(lambda: st.stored()["checks"].get(lixo["id"], {}).get("by") == "Ana", "saved in the app's data (by Ana)")
        await sw.uncheck()
        await wait_for(lambda: not os.path.exists(FILE), "off: the file goes away")
        check(call(key)[0] == 401 and call(key, {"nome": "resumo"})[0] == 401, "and the same key stops working")
        # the screen redraws when the settings come back (a moment after the file goes)
        async def only_switch():
            t = " ".join((await card.inner_text()).split())
            return "Desligado." in t and "usou" not in t
        await wait_for(only_switch, "off: only the switch")
        # the computer: the card in the sidebar layout
        await A.set_viewport_size({"width": 1280, "height": 900}); await A.wait_for_timeout(500)
        await card.scroll_into_view_if_needed()
        await A.screenshot(path=f"{SP}/shots/crcorreria-desktop.png")
        check(await card.is_visible(), "computer: the card")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
summary()
