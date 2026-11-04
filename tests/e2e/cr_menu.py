# CronologIA 1.43.0: Mais is a menu, like the InventarIA. Calendários, Rotinas, Avisos and Férias are rows,
# each its own screen, and Configurações is the last one, with the tabs Integrações, Placar, Dados, Aparência
# and Opções (1.45: Placar went to Configurações, Férias came to the menu). "‹ Mais", Back and a swipe to the right go back to the menu; the old addresses (/mais/dados…)
# land on the new place; Mais stays lit in the bottom bar and the sidebar; every screen of Mais fits from
# 320 px to the computer, light and dark.
import os, sys, asyncio
from stack_lib import Stack, URL, SP, check, wait_for, summary
from mais_lib import open_more
from playwright.async_api import async_playwright

ROWS = [("calendarios", "Calendários"), ("rotinas", "Rotinas"), ("avisos", "Avisos"), ("ferias", "Férias"), ("config", "Configurações")]
TABS = [("integracoes", "Integrações", "/config"), ("placar", "Placar", "/config/placar"), ("dados", "Dados", "/config/dados"), ("aparencia", "Aparência", "/config/aparencia"), ("opcoes", "Opções", "/config/opcoes")]
# what each screen has (an element only that screen shows)
MARK = {"calendarios": ".cal-row", "rotinas": ".cat-sec", "avisos": "#avisos", "ferias": "#ferias", "config": "#leitura-ia",
        "integracoes": "#leitura-ia", "placar": "#placar", "dados": "#dados", "aparencia": ".seg.themes", "opcoes": ".week-seg"}

async def main():
    st = Stack("crmenu")
    try:
        async with async_playwright() as p:
            b = await p.chromium.launch()
            ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", has_touch=True)
            pg = await ctx.new_page()
            errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
            await pg.goto(URL); await pg.wait_for_timeout(1500)
            a = pg.locator("cronologia-app")
            el = lambda js: pg.evaluate(f"() => {{ const el = document.querySelector('cronologia-app'); return {js}; }}")
            view = lambda: el("el._view()")
            state = lambda: pg.evaluate("() => history.state || {}")
            title = lambda: a.locator(".page-title").first.inner_text()
            mais = a.locator(".tab", has_text="Mais")
            lit = lambda: mais.get_attribute("class")

            # the bottom bar: Mais with the three dots
            dots = await mais.locator("svg circle").count()
            check(dots == 3, f"Mais in the bottom bar has the three dots ({dots} circles)")
            await mais.click(); await pg.wait_for_timeout(500)
            check(await view() == {"name": "more", "tab": "menu"} and (await state()).get("rvPath") == "/mais", "Mais opens the menu (/mais)")
            rows = [t.strip() for t in await a.locator(".menu-row b").all_inner_texts()]
            check(rows == [t for _, t in ROWS], f"the rows, Configurações last ({rows})")
            leads = [t.strip() for t in await a.locator(".menu-row .mb > span").all_inner_texts()]
            check(len(leads) == 5 and all(0 < len(l) <= 60 for l in leads), f"each row with one short line ({leads})")
            check(await a.locator(".menu-row .mais-ic svg").count() == 5 and await a.locator(".menu-row > svg").count() == 5, "each row: the icon in the soft square and the chevron")
            check(await title() == "Mais" and await a.locator(".uplink").count() == 0 and await a.locator(".more-tabs").count() == 0, "the menu: title Mais, no ‹ Mais, no tabs")
            check("on" in (await lit()).split(), "Mais lit on the menu")
            await pg.screenshot(path=f"{SP}/shots/crmenu-menu-dark.png")

            # each row opens its own screen: its title, "‹ Mais", Mais lit; ‹ Mais (or Back) to the menu
            for i, (k, name) in enumerate(ROWS):
                await a.locator(f'.menu-row[data-k="{k}"]').click(); await pg.wait_for_timeout(600)
                v = await view()
                s = await state()
                check(v["name"] == "more" and (v["tab"] == k or (k == "config" and v == {"name": "more", "tab": "integracoes", "config": True})) and s.get("rvUp") is True and s.get("rvDepth") == 2, f"{name}: its own screen, opened from the menu ({v}, {s})")
                check(await title() == name and (await a.locator(".uplink").inner_text()).strip() == "Mais", f"{name}: title and ‹ Mais")
                check(await a.locator(MARK[k]).count() >= 1, f"{name}: shows {MARK[k]}")
                check("on" in (await lit()).split(), f"{name}: Mais stays lit")
                check(await a.locator(".menu-list").count() == 0, f"{name}: the menu is gone")
                await pg.screenshot(path=f"{SP}/shots/crmenu-{k}-dark.png")
                if i % 2 == 0:
                    await a.locator(".uplink").click(); how = "‹ Mais"
                else:
                    await pg.go_back(); how = "Back"
                await pg.wait_for_timeout(500)
                s = await state()
                check(await view() == {"name": "more", "tab": "menu"} and s.get("rvDepth") == 1 and not s.get("rvUp"), f"{name}: {how} goes to the menu ({s})")

            # Configurações: the four tabs; switching replaces, so Back goes to the menu, then out of Mais
            await a.locator('.menu-row[data-k="config"]').click(); await pg.wait_for_timeout(500)
            tabs = [t.strip() for t in await a.locator(".more-tabs button").all_inner_texts()]
            check(tabs == [t for _, t, _ in TABS], f"Configurações: the tabs ({tabs})")
            check(await a.locator(".more-tabs button.on").inner_text() == "Integrações", "Configurações opens on Integrações")
            for k, name, path in TABS:
                await a.locator(".more-tabs button", has_text=name).click(); await pg.wait_for_timeout(500)
                s = await state()
                check(s.get("rvPath") == path and s.get("rvDepth") == 2 and s.get("rvUp") is True and await a.locator(MARK[k]).count() >= 1 and (await a.locator(".more-tabs button.on").inner_text()).strip() == name, f"Configurações › {name}: {path}, still Back to the menu")
                check(await title() == "Configurações" and "on" in (await lit()).split(), f"Configurações › {name}: title, Mais lit")
                await pg.screenshot(path=f"{SP}/shots/crmenu-config-{k}-dark.png")
            check(await el("el._chatScreen()") == "Mais › Configurações › Opções", "the Conversa knows the screen (Mais › Configurações › Opções)")
            await pg.go_back(); await pg.wait_for_timeout(500)
            check(await view() == {"name": "more", "tab": "menu"}, "Back from a tab of Configurações: the menu")
            await pg.go_back(); await pg.wait_for_timeout(500)
            check((await view())["name"] == "now", "Back again: Agora")

            # Mais in the bottom bar on a screen of Mais: the menu; another tab from a screen of Mais: Back goes to Agora
            await mais.click(); await pg.wait_for_timeout(400)
            await a.locator('.menu-row[data-k="avisos"]').click(); await pg.wait_for_timeout(500)
            await mais.click(); await pg.wait_for_timeout(500)
            check(await view() == {"name": "more", "tab": "menu"} and (await state()).get("rvDepth") == 1, "Mais tapped on Avisos: the menu (Back's place)")
            await a.locator('.menu-row[data-k="ferias"]').click(); await pg.wait_for_timeout(500)
            await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(600)
            check((await view())["name"] == "calendar" and (await state()).get("rvDepth") == 1, "Calendário from Férias")
            await pg.go_back(); await pg.wait_for_timeout(500)
            check((await view())["name"] == "now", "Back from there: Agora, not the menu")

            # a screen opened from elsewhere (the medicines card opens Avisos): ‹ Mais puts the menu in its place
            await el("el._go('/mais/avisos')"); await pg.wait_for_timeout(500)
            check(not (await state()).get("rvUp") and await title() == "Avisos", "Avisos opened from Agora")
            await a.locator(".uplink").click(); await pg.wait_for_timeout(500)
            check(await view() == {"name": "more", "tab": "menu"} and (await state()).get("rvDepth") == 1, "‹ Mais: the menu, in Avisos' place")
            await pg.go_back(); await pg.wait_for_timeout(500)
            check((await view())["name"] == "now", "Back: Agora")

            # old addresses land on the new place (and the history entry is replaced)
            OLD = [("/mais/integracoes", "/config", "integracoes"), ("/mais/dados", "/config/dados", "dados"), ("/mais/aparencia", "/config/aparencia", "aparencia"),
                   ("/mais/opcoes", "/config/opcoes", "opcoes"), ("/agendas", "/mais/calendarios", "calendarios"), ("/mais/rotinas", "/mais/rotinas", "rotinas"),
                   ("/mais/avisos", "/mais/avisos", "avisos"), ("/mais/placar", "/config/placar", "placar"), ("/mais/ferias", "/mais/ferias", "ferias"), ("/config/integracoes", "/config", "integracoes")]
            for old, new, k in OLD:
                await el(f"el._go({old!r}, true)"); await pg.wait_for_timeout(400)
                v = await view()
                check(await el("el._path") == new and (await state()).get("rvPath") == new and v["tab"] == k and await a.locator(MARK[k]).count() >= 1, f"{old} -> {new}")
            # kept in the history by the version before: a reload lands on the new place
            await pg.evaluate("() => history.replaceState({ rvDepth: 0, rvPath: '/mais/dados' }, '')")
            await pg.reload(); await pg.wait_for_timeout(1500)
            check(await view() == {"name": "more", "tab": "dados", "config": True} and (await state()).get("rvPath") == "/config/dados" and await a.locator("#dados").count() == 1, "reload on /mais/dados: Configurações › Dados, address replaced")
            check(await title() == "Configurações" and (await a.locator(".more-tabs button.on").inner_text()).strip() == "Dados", "reload: the Dados tab of Configurações")
            # and Back to an old entry
            await pg.evaluate("() => { history.replaceState({ rvDepth: 0, rvPath: '/mais/opcoes' }, ''); history.pushState({ rvDepth: 1, rvPath: '/calendario' }, ''); }")
            await pg.go_back(); await pg.wait_for_timeout(500)
            check(await view() == {"name": "more", "tab": "opcoes", "config": True} and (await state()).get("rvPath") == "/config/opcoes", "Back to /mais/opcoes: Configurações › Opções, address replaced")

            # the helper of the other tests: from anywhere to a tab of Configurações or a row
            await open_more(a, "Férias")
            check((await view())["tab"] == "ferias", "open_more: Férias from Configurações")
            await open_more(a, "Placar")
            check((await view())["tab"] == "placar" and (await view()).get("config") is True, "open_more: Placar (a tab of Configurações) from Férias")
            await open_more(a, "Aparência")
            check((await view())["tab"] == "aparencia", "open_more: Aparência from Placar")
            check(not errs, f"phone: no page errors {errs}")
            await ctx.close()

            # computer: the sidebar keeps Mais lit; the menu is a list between lines
            ctx = await b.new_context(viewport={"width": 1280, "height": 900}, color_scheme="light")
            pg = await ctx.new_page(); errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
            await pg.goto(URL); await pg.wait_for_timeout(1500)
            a = pg.locator("cronologia-app")
            side = a.locator(".side-link", has_text="Mais")
            check(await side.locator("svg circle").count() == 3, "sidebar: Mais with the three dots")
            await side.click(); await pg.wait_for_timeout(500)
            check(await side.get_attribute("aria-current") == "page" and await a.locator(".menu-row").count() == 5, "sidebar: Mais lit, the menu")
            await pg.screenshot(path=f"{SP}/shots/crmenu-desk-menu.png")
            await a.locator('.menu-row[data-k="config"]').click(); await pg.wait_for_timeout(500)
            check(await side.get_attribute("aria-current") == "page" and await a.locator(".uplink").is_visible() and await a.locator(".more-tabs .i").first.is_visible(), "sidebar: Mais lit on Configurações, ‹ Mais and the tab icons shown")
            await pg.screenshot(path=f"{SP}/shots/crmenu-desk-config.png")
            check(not errs, f"computer: no page errors {errs}")
            await ctx.close()

            # every screen of Mais fits: 320 px to the computer, light and dark
            screens = ["/mais"] + [f"/mais/{k}" for k, _ in ROWS if k != "config"] + [p for _, _, p in TABS]
            for scheme in ("light", "dark"):
                for w in (320, 390, 1280):
                    ctx = await b.new_context(viewport={"width": w, "height": 844 if w < 1000 else 900}, device_scale_factor=2 if w < 1000 else 1, color_scheme=scheme)
                    pg = await ctx.new_page(); errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
                    await pg.goto(URL); await pg.wait_for_timeout(1300)
                    a = pg.locator("cronologia-app")
                    wide = []
                    for path in screens:
                        await pg.evaluate(f"() => document.querySelector('cronologia-app')._go({path!r})"); await pg.wait_for_timeout(450)
                        m = await pg.evaluate("""() => { const r = document.querySelector('cronologia-app').renderRoot; const main = r.querySelector('main');
                            const tabs = r.querySelector('.more-tabs');
                            return { doc: document.documentElement.scrollWidth, win: innerWidth, main: main.scrollWidth, mainW: main.clientWidth, tabs: tabs ? tabs.scrollWidth - tabs.clientWidth : 0 }; }""")
                        if m["doc"] > m["win"] or m["main"] > m["mainW"] + 1 or m["tabs"] > 1: wide.append((path, m))
                        if path in ("/mais", "/config", "/mais/avisos"):
                            await pg.screenshot(path=f"{SP}/shots/crmenu-{w}-{scheme}-{path.strip('/').replace('/', '-')}.png")
                    check(not wide, f"{w} px {scheme}: nothing wider than the screen, the tabs fit {wide}")
                    check(not errs, f"{w} px {scheme}: no page errors {errs}")
                    await ctx.close()
            await b.close()
    finally:
        st.stop()
    summary()

asyncio.run(main())
