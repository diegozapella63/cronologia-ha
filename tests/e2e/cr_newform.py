# CronologIA: Novo › Evento choices (calendário padrão, Hoje/Amanhã/Outra data, duration chips, ends after midnight, Dia todo until a date, Repetir, Enter, Cancelar) and a Home Assistant without a calendar that takes events, or without any calendar.
import os, sys, asyncio, datetime, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright
from mais_lib import open_more
from pick_lib import pick_time, pick_date, field_of, value

today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
T = lambda n, h, m=0: f"{D(n)}T{h:02d}:{m:02d}:00-03:00"
W = "calendar.trabalho"

async def page(b):
    ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
    A = await ctx.new_page(); errs = []
    A.on("pageerror", lambda e: errs.append(str(e)))
    await A.goto(URL); await A.wait_for_timeout(1500)
    return A, A.locator("cronologia-app"), errs

async def main():
    global st
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A, a, errs = await page(b)
        sheet = a.locator(".sheet")
        def evs(name, cal=W): return st.events(cal, T(-1, 0), T(40, 0), name)
        # Mais › Calendários › Calendário padrão: where Novo starts
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        await open_more(a, "Calendários")
        await a.locator("#novos-eventos select").select_option(W)
        await wait_for(lambda: st.stored()["app"].get("default_calendar") == W, "Calendário padrão saved")
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        check((await sheet.locator(".pick.list.on").inner_text()).strip() == "Trabalho", "Novo starts in the calendário padrão")
        now = datetime.datetime.now()
        h = min(23, now.hour + 1)
        want = (f"{h:02d}:00", f"{h + 1:02d}:00" if h < 23 else "23:59")
        got = (await value(field_of(sheet, "Começa")), await value(field_of(sheet, "Termina")))
        check(await sheet.locator(".chip-row .pick.on", has_text="Hoje").count() == 1 and got == want, f"today, at the next hour, for an hour ({got})")
        check(await sheet.locator(".btn.primary", has_text="Criar evento").is_disabled(), "no title: Criar evento is off")
        # duration chips; a new start keeps the duration
        await sheet.locator(".ev-title-input").fill("Reunião de alinhamento")
        await sheet.locator(".chip-row .pick", has_text="Amanhã").click()
        await pick_time(field_of(sheet, "Começa"), "10:00")
        await sheet.locator(".chip-row.dur .pick", has_text="15 min").click(); await A.wait_for_timeout(200)
        check(await value(field_of(sheet, "Termina")) == "10:15" and await sheet.locator(".chip-row.dur .pick.on").inner_text() == "15 min", "15 min: ends 10:15")
        await sheet.locator(".chip-row.dur .pick", has_text="2 h").click(); await A.wait_for_timeout(200)
        check(await value(field_of(sheet, "Termina")) == "12:00", "2 h: ends 12:00")
        await pick_time(field_of(sheet, "Começa"), "14:00")
        check(await value(field_of(sheet, "Termina")) == "16:00", "a new start keeps the 2 hours")
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: [(e["start"], e["end"]) for e in evs("Reunião de alinhamento")] == [(T(1, 14), T(1, 16))], "created tomorrow 14:00–16:00 in Trabalho")
        check("Evento criado em Trabalho" in await a.locator(".toast").inner_text() and await a.locator(".toast button", has_text="Ver").count() == 1, "toast with Ver")
        # ends after midnight
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        await sheet.locator(".ev-title-input").fill("Plantão")
        await sheet.locator(".chip-row .pick", has_text="Amanhã").click()
        await pick_time(field_of(sheet, "Começa"), "23:00")
        await sheet.locator(".chip-row.dur .pick", has_text="2 h").click(); await A.wait_for_timeout(200)
        await pick_time(field_of(sheet, "Termina"), "01:00")
        check("Termina no dia seguinte." in await sheet.inner_text(), "ends at 01:00: says it ends the next day")
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: [(e["start"], e["end"]) for e in evs("Plantão")] == [(T(1, 23), T(2, 1))], "created ending the next day")
        # another day, Dia todo until a date
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        await sheet.locator(".ev-title-input").fill("Congresso")
        await pick_date(sheet.locator("#cr-date"), D(10))
        other = sheet.locator(".chip-row.c3 .pick.on")
        d10 = today + datetime.timedelta(days=10)
        check(await other.count() == 1 and f"{d10.day} de " in await other.inner_text(), f"Outra data: chosen, its day on the chip ({await other.inner_text()})")
        await sheet.locator("input[aria-label='Dia todo']").check(); await A.wait_for_timeout(300)
        check("Até" in await sheet.inner_text() and "um dia" in await sheet.inner_text() and await field_of(sheet, "Começa").count() == 0, "Dia todo: no hours, until (one day)")
        await pick_date(field_of(sheet, "Até"), D(12))
        check("3 dias" in await sheet.inner_text(), "until 2 days later: 3 dias")
        await sheet.locator(".time-row").scroll_into_view_if_needed(); await A.wait_for_timeout(300)
        await A.screenshot(path=f"{SP}/shots/crnf-diatodo.png")
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: [(e["start"], e["end"], e["all_day"]) for e in evs("Congresso")] == [(D(10), D(13), True)], "created all day, 3 days (the end the day after, as Home Assistant keeps it)")
        # Repetir and Enter to save
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        await sheet.locator(".ev-title-input").fill("Fechamento do mês")
        await sheet.locator(".seg.rep-seg button", has_text="Mensal").click(); await A.wait_for_timeout(200)
        await sheet.locator(".ev-title-input").press("Enter")
        await wait_for(lambda: evs("Fechamento do mês") and evs("Fechamento do mês")[0].get("rrule") == "FREQ=MONTHLY", "Mensal, saved with Enter")
        # Cancelar: nothing created
        await A.wait_for_timeout(600)
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        await sheet.locator(".ev-title-input").fill("Não salvar isto")
        await sheet.locator(".btn.outline", has_text="Cancelar").click(); await A.wait_for_timeout(500)
        check(await a.locator(".sheet").count() == 0 and evs("Não salvar isto") == [] and "Não salvar isto" not in st.fake_log(), "Cancelar: nothing created")
        # the sheet of the repeating one says how
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg.compact button", has_text="Lista").click(); await A.wait_for_timeout(500)
        await a.locator("input[data-q='buscar']").fill("Fechamento"); await A.wait_for_timeout(900)
        await a.locator(".ev-row", has_text="Fechamento do mês").first.click(); await A.wait_for_timeout(400)
        check("Todo mês" in await sheet.inner_text(), "the sheet says Todo mês")
        check(not errs, f"no page errors {errs}")
        await A.context.close()
        st.stop(); time.sleep(0.6)

        # only read-only calendars: Novo says so and how to add one
        st = Stack("crnf2", fake_env={"FAKE_FEATURES": "calendar.pessoal=0,calendar.remedios=0,calendar.casa=0,calendar.trabalho=0"})
        A, a, errs = await page(b)
        sheet = a.locator(".sheet")
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        st_ = await sheet.inner_text()
        check(await sheet.locator("h3").first.inner_text() == "Nenhum calendário aceita eventos" and "Calendário local" in st_ and "Google Agenda" in st_ and "Feriados" in st_, "Novo: no calendar takes events, and the ones to add")
        await A.screenshot(path=f"{SP}/shots/crnf-nocal.png")
        await sheet.locator(".row", has_text="Outlook / Microsoft 365").click(); await A.wait_for_timeout(400)
        check(await sheet.locator("h3").first.inner_text() == "Outlook no Home Assistant" and "MS365 Calendar (HACS)" in await sheet.inner_text(), "Outlook: how to bring it")
        check(not errs, f"no page errors {errs}")
        await A.context.close()
        st.stop(); time.sleep(0.6)

        # no calendar at all: Agora shows how to start
        st = Stack("crnf3", fake_env={"FAKE_NO_CALENDARS": "1"})
        A, a, errs = await page(b)
        txt = await a.locator(".page").first.inner_text()
        check("Nenhum calendário no Home Assistant" in txt and "Comece um calendário" in txt and "Adicionar calendários" in txt, "no calendar: Agora says how to start")
        await A.screenshot(path=f"{SP}/shots/crnf-empty.png")
        check(not errs, f"no page errors {errs}")
        await b.close()

st = Stack("crnf")
try:
    asyncio.run(main())
finally:
    st.stop()
summary()
