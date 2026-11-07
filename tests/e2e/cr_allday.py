# CronologIA 1.48.1: the all-day events (and the very long ones) live in the Hoje card of Agora, under its
# title, with until when a stay of several days goes ("· até 7 nov"); never loose at the bottom when nothing
# else has a time today. Marked Feito, it leaves Agora.
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
            if scheme == "dark":
                # marked Feito: it leaves Agora (the last round: the mark stays on the server)
                n0 = await chips.count()
                await chips.filter(has_text="Bad Cheese").click(); await A.wait_for_timeout(500)
                await a.locator(".sheet .kind-act").click(); await A.wait_for_timeout(1200)
                if await a.locator(".sheet").count():
                    await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(400)
                left = [" ".join(t.split()) for t in await a.locator(".panel.agenda .allday .ad-chip").all_inner_texts()]
                check(len(left) == n0 - 1 and "Bad Cheese" not in left, f"Feito: it leaves Agora ({left})")
                # 1.56.0: a stay of several days is marked day by day: Feito today is only today's
                await chips.filter(has_text="Agent A: A puzzle in disguise").click(); await A.wait_for_timeout(500)
                await a.locator(".sheet .kind-act").click(); await A.wait_for_timeout(1200)
                if await a.locator(".sheet").count():
                    await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(400)
                keys = [k for k in st.stored()["checks"] if "Agent A" in k or k.endswith(f"|{today.isoformat()}")]
                check(any(k.endswith(f"|{today.isoformat()}") for k in keys), f"the mark is of today ({keys})")
                await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(700)
                await a.locator(".seg.compact button", has_text="Lista").first.click(); await A.wait_for_timeout(1000)
                rows = a.locator(".panel.agenda .ev-row", has_text="Agent A: A puzzle in disguise")
                done = [("done" in ((await rows.nth(i).get_attribute("class")) or "").split()) or await rows.nth(i).locator(".ev-done").count() > 0 for i in range(await rows.count())]
                check(done == [True, False, False], f"Lista: only Dia 1/3 done ({done})")
                # Mês: today, everything to mark there is done (the two marked; the others are appointments; the
                # tasks of the ResolvIA and the bills off the calendar, so only these count)
                await A.evaluate("() => document.querySelector('cronologia-app')._saveAppPrefs({ todo_off_calendar: true, gerencia_hidden: true })"); await A.wait_for_timeout(800)
                await a.locator(".seg.compact button", has_text="Mês").first.click(); await A.wait_for_timeout(1000)
                # today: green only when every row of the day is marked (the appointments too, 1.56.1); never red
                await a.locator(".month .cell[aria-label^='Hoje']").first.click(); await A.wait_for_timeout(500)
                rows = a.locator(".day-panel .ev-row")
                n = await rows.count()
                done = sum([1 for i in range(n) if await rows.nth(i).locator(".ev-done").count() or "done" in ((await rows.nth(i).get_attribute("class")) or "").split()])
                await a.locator(".month .cell[aria-label^='Amanhã']").first.click(); await A.wait_for_timeout(300)
                hc = ((await a.locator(".month .cell[aria-label^='Hoje']").first.get_attribute("class")) or "").split()
                check(("all-done" in hc) == (n > 0 and done == n) and "left" not in hc and done >= 2, f"Mês: today green only with all {n} rows done ({done} done: {hc})")
                # 1.56.1: an appointment not marked Feito leaves a day behind too
                yl = await a.locator(".month .cell[aria-label^='Ontem']").first.get_attribute("aria-label") or ""
                yc = ((await a.locator(".month .cell[aria-label^='Ontem']").first.get_attribute("class")) or "").split()
                check(("left" in yc) == (not yl.startswith("Ontem: 0 ") and "evento" in yl), f"Mês: yesterday, appointments not marked: red ({yl}: {yc})")
                ac = ((await a.locator(".month .cell[aria-label^='Amanhã']").first.get_attribute("class")) or "").split()
                check("all-done" not in ac and "left" not in ac, f"Mês: tomorrow as it is ({ac})")
            if scheme == "light":
                # Calendário › Lista: a stay of 3 days on each of its days (Dia 1/3, 2/3, 3/3)
                await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(700)
                await a.locator(".seg.compact button", has_text="Lista").first.click(); await A.wait_for_timeout(1000)
                rows = a.locator(".panel.agenda .ev-row", has_text="Agent A: A puzzle in disguise")
                days = [" ".join(t.split()) for t in await rows.locator(".ev-time").all_inner_texts()]
                check(days == ["Dia 1/3", "Dia 2/3", "Dia 3/3"], f"Lista: on each of its days ({days})")
            check(not errs, f"{scheme}: no page errors {errs}")
            await ctx.close()
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
summary()
