# CronologIA 1.56.0: Calendário › Mês: the number of a day in green when everything to mark there was done, in red
# when something was left behind (a day before today: here, yesterday's doses, never marked Tomei). The days ahead
# stay as they are; today only goes green.
import os, sys, asyncio
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, summary
from playwright.async_api import async_playwright

st = Stack("crdm", data={"app": {}})

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for scheme in ("light", "dark"):
            ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme=scheme)
            A = await ctx.new_page(); errs = []
            A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto(URL); await A.wait_for_timeout(1800)
            a = A.locator("cronologia-app")
            await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(700)
            await a.locator(".seg.compact button", has_text="Mês").first.click(); await A.wait_for_timeout(1200)
            cell = lambda label: a.locator(f".month .cell[aria-label^='{label}']").first
            cls = lambda c: c.get_attribute("class")
            y = (await cls(cell("Ontem")) or "").split()
            check("left" in y and "all-done" not in y, f"{scheme}: yesterday, the doses not taken: red ({y})")
            check("algo ficou para trás" in (await cell("Ontem").get_attribute("aria-label") or ""), f"{scheme}: and it says so")
            t = (await cls(cell("Amanhã")) or "").split()
            check("left" not in t and "all-done" not in t, f"{scheme}: tomorrow: as it is ({t})")
            h = (await cls(cell("Hoje")) or "").split()
            check("left" not in h, f"{scheme}: today never red ({h})")
            # yesterday not selected, so its colors show (the selected day keeps the accent)
            color = await cell("Ontem").locator(".num").evaluate("(el) => getComputedStyle(el).color")
            check(color == ("rgb(217, 45, 32)" if scheme == "light" else "rgb(255, 107, 94)"), f"{scheme}: the number in red ({color})")
            await A.screenshot(path=f"{SP}/shots/crdm-{scheme}.png")
            check(not errs, f"{scheme}: no page errors {errs}")
            await ctx.close()
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
summary()
