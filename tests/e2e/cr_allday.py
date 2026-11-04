# CronologIA 1.48.1: the all-day events (and the very long ones) live in the Hoje card of Agora, under its
# title, with until when a stay of several days goes ("· até 7 nov"); never loose at the bottom when nothing
# else has a time today.
import os, sys, asyncio, datetime
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, summary
from playwright.async_api import async_playwright

MON = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
today = datetime.date.today()
# only the Giveaways calendar: all-day ones today (one of 3 days), a 15-hour one, nothing else with a time
hide = {c: {"hidden": True} for c in ["calendar.pessoal", "calendar.remedios", "calendar.casa", "calendar.trabalho", "calendar.feriados"]}
st = Stack("crad", data={"calendars": hide, "app": {}})

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for scheme in ("light", "dark"):
            ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme=scheme)
            A = await ctx.new_page(); errs = []
            A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto(URL); await A.wait_for_timeout(1800)
            a = A.locator("cronologia-app")
            card = a.locator(".panel.agenda")
            chips = card.locator(".allday .ad-chip")
            check(await card.count() == 1 and await chips.count() >= 1, f"{scheme}: the all-day ones inside the Hoje card ({await chips.count()})")
            loose = await a.evaluate("(el) => [...el.renderRoot.querySelectorAll('.allday')].filter((x) => !x.closest('.panel')).length")
            check(loose == 0, f"{scheme}: none loose on the page")
            texts = [" ".join(t.split()) for t in await chips.all_inner_texts()]
            end = today + datetime.timedelta(days=2)
            check(any(t.startswith("Agent A: A puzzle in disguise") and t.endswith(f"até {end.day} {MON[end.month - 1]}") for t in texts), f"{scheme}: a stay of 3 days says until when ({texts})")
            check(any(t == "Bad Cheese" for t in texts), f"{scheme}: one that ends today, just its name")
            await chips.filter(has_text="o dia todo").click(); await A.wait_for_timeout(300)
            texts = [" ".join(t.split()) for t in await chips.all_inner_texts()]
            check("Primal Slideee Deluxe (Stove) Giveaway" in texts and not any("o dia todo" in t for t in texts), f"{scheme}: +N o dia todo shows the others ({len(texts)})")
            check(await card.locator(".add-line", has_text="Evento hoje").count() == 1, f"{scheme}: with Evento hoje")
            await card.screenshot(path=f"{SP}/shots/crad-{scheme}.png")
            check(not errs, f"{scheme}: no page errors {errs}")
            await ctx.close()
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
summary()
