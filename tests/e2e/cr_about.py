# CronologIA 1.51.0: Mais › Sobre, the last row of the menu. CorrerIA Code (desenvolvimento de softwares) and
# why the name (a programmer with no time, so the AI runs it all), the seven apps of the family, each with a line
# and its GitHub (this one marked with its version), and Meu GitHub. From 320 px to the computer, light and dark.
import os, sys, asyncio, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, summary
from mais_lib import open_more
from playwright.async_api import async_playwright

GH = "https://github.com/diegozapella63"
APPS = [("CronologIA", "cronologia-ha"), ("ResolvIA", "resolvia-ha"), ("GerencIA", "gerencia-ha"), ("InventarIA", "inventario-ha"), ("EconomIA", "economia-ha"), ("MemorIA", "memoria-ha"), ("CorrerIA", "correria-ha")]
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
VERSION = re.search(r'^version:\s*"?([\d.]+)', open(f"{ROOT}/cronologia/config.yaml").read(), re.M).group(1)
st = Stack("crabout")

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for scheme, w in (("dark", 390), ("light", 320), ("dark", 1280)):
            ctx = await b.new_context(viewport={"width": w, "height": 844 if w < 1000 else 900}, device_scale_factor=2, color_scheme=scheme, has_touch=w < 1000)
            A = await ctx.new_page(); errs = []
            A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto(URL); await A.wait_for_timeout(1500)
            a = A.locator("cronologia-app")
            tag = f"{scheme} {w}px"
            await open_more(a, "Sobre", 600)
            check((await a.locator(".page-title").first.inner_text()).strip() == "Sobre" and await a.locator(".uplink").count() == 1, f"{tag}: Sobre, with ‹ Mais")
            hero = " ".join((await a.locator(".about-hero").inner_text()).split())
            check(hero.startswith("CorrerIA Code") and "desenvolvimento de softwares" in hero.lower(), f"{tag}: CorrerIA Code, desenvolvimento de softwares ({hero})")
            why = " ".join((await a.locator(".about-why").inner_text()).split())
            check("programador sem tempo" in why and "IA para rodar tudo isso aqui" in why, f"{tag}: why CorrerIA ({why[:60]}…)")
            rows = a.locator(".about-apps .ab-row")
            hrefs = [await rows.nth(i).get_attribute("href") for i in range(await rows.count())]
            check(hrefs == [f"{GH}/{r}" for _, r in APPS], f"{tag}: the seven apps, each to its GitHub ({hrefs})")
            names = [" ".join(t.split()) for t in await rows.locator("b").all_inner_texts()]
            check([n.split(" Este app")[0] for n in names] == [n for n, _ in APPS], f"{tag}: the names ({names})")
            lines = await rows.locator(".mb > span").all_inner_texts()
            check(len(lines) == 7 and all(0 < len(l) <= 55 for l in lines), f"{tag}: one short line each ({lines})")
            here = a.locator(".ab-row.here")
            check(await here.count() == 1 and f"Este app · v{VERSION}" in await here.inner_text() and await here.get_attribute("href") == f"{GH}/cronologia-ha", f"{tag}: this app marked, with v{VERSION}")
            targets = await a.locator(".about a").evaluate_all("(xs) => xs.map((x) => x.target + ' ' + x.rel)")
            check(len(targets) == 8 and all(t == "_blank noopener" for t in targets), f"{tag}: links open outside ({targets})")
            gh = a.locator("a.ab-github")
            check(await gh.get_attribute("href") == GH and (await gh.inner_text()).strip() == "Meu GitHub", f"{tag}: Meu GitHub")
            over = await A.evaluate("() => document.documentElement.scrollWidth - window.innerWidth")
            inner = await a.evaluate("(el) => { const r = el.renderRoot; const page = r.querySelector('.about').getBoundingClientRect(); return [...r.querySelectorAll('.about .ab-row, .about .ab-github, .about-hero, .about .panel')].filter((x) => { const b = x.getBoundingClientRect(); return b.left < page.left - 1 || b.right > page.right + 1; }).length; }")
            check(over <= 0 and inner == 0, f"{tag}: nothing past the edge ({over}, {inner})")
            hb = await gh.bounding_box(); pb = await a.locator(".about .panel").last.bounding_box()
            check(abs(hb["width"] - pb["width"]) <= 1, f"{tag}: Meu GitHub as wide as the cards ({hb['width']:.0f} / {pb['width']:.0f})")
            wh = await a.locator(".ab-what").evaluate("(x) => [x.getBoundingClientRect().height, parseFloat(getComputedStyle(x).fontSize)]")
            check(wh[0] < wh[1] * 2, f"{tag}: desenvolvimento de softwares in one line ({wh})")
            await A.screenshot(path=f"{SP}/shots/crabout-{scheme}-{w}.png")
            await gh.scroll_into_view_if_needed(); await A.wait_for_timeout(300)
            await A.screenshot(path=f"{SP}/shots/crabout-{scheme}-{w}-fim.png")
            if w == 390:
                await ctx.route("https://github.com/**", lambda r: r.fulfill(body="<title>GitHub</title>ok", content_type="text/html"))
                async with ctx.expect_page() as np:
                    await rows.nth(1).click()
                new = await np.value
                await new.wait_for_load_state()
                check(new.url == f"{GH}/resolvia-ha", f"{tag}: a tap opens the GitHub of the app in a new tab ({new.url})")
                await new.close()
                check(await a.locator(".about-hero").count() == 1, f"{tag}: the app stays on Sobre")
                await A.go_back(); await A.wait_for_timeout(500)
                check(await a.locator(".menu-list").count() == 1, f"{tag}: Back goes to the menu")
                chat = await A.evaluate("() => { const el = document.querySelector('cronologia-app'); el._go('/mais/sobre'); return el._chatScreen(); }")
                check(chat == "Mais › Sobre", f"{tag}: the Conversa knows the screen ({chat})")
            check(not errs, f"{tag}: no page errors {errs}")
            await ctx.close()
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
summary()
