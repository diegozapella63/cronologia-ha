# CronologIA 1.99.0: a new appointment is of someone (De quem), not of a calendar: each person has their calendar
# (Mais › Avisos › Pessoas e pets, or the one with their name); the calendars of no one (Casa, Família…) by their names.
import os, sys, asyncio
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, summary
from playwright.async_api import async_playwright
from mais_lib import open_more

st = Stack("crdequem", data={"app": {"people": {"Davi": {"cal": "calendar.pessoal"}}}}, fake_env={"FAKE_EXTRA_CALENDARS": "1"})

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1800)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        await a.evaluate("(el) => el._openForm()"); await A.wait_for_timeout(600)
        field = sheet.locator(".whose-field")
        label = (await field.locator(".flabel").inner_text()).strip()
        chips = [t.strip() for t in await field.locator(".pick").all_inner_texts()]
        check(label.startswith("De quem") and chips[0] == "Davi" and "Pessoal" not in chips and "Casa" in chips, f"Adicionar: De quem, Davi first (his calendar), then the calendars of no one ({label}: {chips})")
        await field.locator(".pick", has_text="Davi").click(); await A.wait_for_timeout(200)
        on = await field.locator(".pick.on").inner_text()
        fl = await field.locator(".flabel .fl-val").text_content()
        check(on.strip() == "Davi" and "Pessoal" in fl, f"Davi chosen, his calendar beside De quem ({on!r}, {fl!r})")
        await sheet.locator("textarea.ev-title-input").fill("Consulta do Davi 1.99")
        await sheet.locator(".btn.primary", has_text="Criar evento").click(); await A.wait_for_timeout(900)
        made = [e for e in st.events("calendar.pessoal", "2000-01-01T00:00:00-03:00", "2100-01-01T00:00:00-03:00", "Consulta do Davi 1.99")] if hasattr(st, "events") else []
        check(len(made) == 1, f"saved in the calendar of Davi ({len(made)})")
        await A.screenshot(path=f"{SP}/shots/crdequem-form.png")
        # Mais › Avisos › Pessoas e pets: the calendar of each person
        await open_more(a, "Avisos"); await A.wait_for_timeout(600)
        davi, aurora = a.locator("select[aria-label='Calendário de Davi']"), a.locator("select[aria-label='Calendário de Aurora']")
        check(await davi.count() == 1 and await aurora.count() == 1, "a calendar for each person")
        check((await davi.evaluate("(s) => s.selectedOptions[0].textContent")).strip() == "Calendário: Pessoal" and await aurora.input_value() == "", "Davi: Pessoal; Aurora: none yet")
        await aurora.select_option("calendar.familia"); await A.wait_for_timeout(700)
        check(st.stored()["app"]["people"].get("Aurora", {}).get("cal") == "calendar.familia", f"saved ({st.stored()['app']['people']})")
        await a.locator("#avisos").screenshot(path=f"{SP}/shots/crdequem-avisos.png")
        await a.evaluate("(el) => el._openForm()"); await A.wait_for_timeout(600)
        chips = [t.strip() for t in await sheet.locator(".whose-field .pick").all_inner_texts()]
        check(chips[:2] == ["Aurora", "Davi"] and "Família" not in chips and "Casa" in chips, f"Aurora too, with Família ({chips})")
        check(not errs, f"no page errors {errs}")
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
summary()
