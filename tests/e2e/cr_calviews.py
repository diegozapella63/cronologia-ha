# CronologIA: Calendário › Mês, Semana, 3 dias, Dia and Lista (titles, arrows, Hoje, what each shows), a tap on an empty hour of Dia creates there, the Lista search from a year back to a year ahead, the mode kept, and the week start (Mais › Opções).
import os, sys, asyncio, datetime, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright
from mais_lib import open_more

today = datetime.date.today()
DD = lambda n: today + datetime.timedelta(days=n)
D = lambda n: DD(n).isoformat()
T = lambda n, h, m=0: f"{D(n)}T{h:02d}:{m:02d}:00-03:00"
MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
WD = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"]
jsday = lambda d: (d.weekday() + 1) % 7
def month_title(d): return MONTHS[d.month - 1].capitalize() + (f" {d.year}" if d.year != today.year else "")
def span_title(a, b): return f"{a.day}–{b.day} {MONTHS[b.month - 1][:3]}" if a.month == b.month else f"{a.day} {MONTHS[a.month - 1][:3]} – {b.day} {MONTHS[b.month - 1][:3]}"
def week_of(d, ws): return d - datetime.timedelta(days=(jsday(d) - ws + 7) % 7)
HOUR_H = 48
P = "calendar.pessoal"
st = Stack("crcv")
for n, name in [(-300, "Formatura da Bia"), (300, "Viagem para Lisboa"), (-400, "Mudança antiga"), (400, "Bodas de prata")]:
    st.create(P, {"summary": name, "dtstart": D(n), "dtend": D(n + 1)})

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        title = lambda: a.locator(".page-title").first.inner_text()
        mode = lambda m: a.locator(".seg.compact button", has_text=re.compile(r"^\s*" + m + r"\s*$"))
        nav = lambda which: a.locator(f".cal-nav .icon-btn[aria-label='{which}']")
        hoje = a.locator(".cal-tools .pick", has_text="Hoje")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)

        # Mês: the grid from Monday (the default, the same as the placar), a tap on a day lists it, the arrows change the month, Hoje comes back
        await mode("Mês").click(); await A.wait_for_timeout(700)
        check(await title() == month_title(today), f"Mês: the month's name ({await title()})")
        check([t.strip() for t in await a.locator(".month .wd span").all_inner_texts()] == ["S", "T", "Q", "Q", "S", "S", "D"], "the week starts on Monday (default, like the placar)")
        first = today.replace(day=1)
        start = week_of(first, 1)
        n_cells = await a.locator(".month .cell").count()
        check(n_cells in (35, 42) and (await a.locator(".month .cell .num").first.inner_text()).strip() == str(start.day), f"the grid starts on the Monday of the 1st's week ({start}, {n_cells} days)")
        check(await a.locator(".month .cell.today.sel").count() == 1, "today is marked and chosen")
        check("Pilates" in await a.locator(".day-panel").inner_text(), "today's events under the month")
        if DD(3).month == today.month:
            await a.locator(".month .cell:not(.out)").filter(has=A.locator(f".num:text-is('{DD(3).day}')")).first.click(); await A.wait_for_timeout(500)
            dp = await a.locator(".day-panel").inner_text()
            check("Cinema" in dp and "20:00" in dp, "a tap on another day lists that day")
            await a.locator(".day-panel .text-btn", has_text="Evento").click(); await A.wait_for_timeout(500)
            check(await sheet.locator("#cr-date").input_value() == D(3), "+ Evento opens Novo on that day")
            await sheet.locator(".btn.outline", has_text="Cancelar").click(); await A.wait_for_timeout(300)
        nxt = (first + datetime.timedelta(days=32)).replace(day=1)
        prv = (first - datetime.timedelta(days=1)).replace(day=1)
        await nav("Próximo").click(); await A.wait_for_timeout(500)
        check(await title() == month_title(nxt), f"Próximo: {await title()}")
        await nav("Anterior").click(); await nav("Anterior").click(); await A.wait_for_timeout(500)
        check(await title() == month_title(prv), f"Anterior twice: {await title()}")
        check("on" not in (await hoje.get_attribute("class")), "Hoje is not lit away from today")
        await hoje.click(); await A.wait_for_timeout(500)
        check(await title() == month_title(today) and "on" in (await hoje.get_attribute("class")), "Hoje comes back")
        await A.screenshot(path=f"{SP}/shots/crcv-mes.png")

        # Semana: 7 columns from Monday, the arrows walk a week
        await mode("Semana").click(); await A.wait_for_timeout(800)
        ws0 = week_of(today, 1)
        check(await title() == span_title(ws0, ws0 + datetime.timedelta(days=6)), f"Semana: {await title()}")
        check(await a.locator(".tgrid.week .tg-col").count() == 7, "7 columns")
        strip = [s.split("\n")[0].strip() for s in await a.locator(".week-strip .ws-day").all_inner_texts()]
        check(strip == WD[1:] + WD[:1], f"from Monday ({strip})")
        today_col = a.locator(".tgrid.week .tg-col.today")
        check(await today_col.count() == 1 and await today_col.locator(".tg-ev", has_text="Pilates").count() == 1, "Pilates in today's column")
        check(await today_col.locator(".tg-ev.med").count() >= 1, "the doses as doses (pill, dashed)")
        await nav("Próximo").click(); await A.wait_for_timeout(600)
        w1 = ws0 + datetime.timedelta(days=7)
        check(await title() == span_title(w1, w1 + datetime.timedelta(days=6)) and await a.locator(".tg-col.today").count() == 0, f"Próximo: the next week ({await title()})")
        await hoje.click(); await A.wait_for_timeout(500)
        await A.screenshot(path=f"{SP}/shots/crcv-semana.png")

        # 3 dias: today and the next two; the arrows walk 3 days
        await mode("3 dias").click(); await A.wait_for_timeout(700)
        check(await title() == span_title(today, DD(2)) and await a.locator(".tgrid.three .tg-col").count() == 3, f"3 dias: {await title()}")
        check("today" in (await a.locator(".tgrid.three .tg-col").first.get_attribute("class")), "today first")
        await nav("Próximo").click(); await A.wait_for_timeout(500)
        check(await title() == span_title(DD(3), DD(5)), f"Próximo: 3 days later ({await title()})")
        check(await a.locator(".tgrid.three .tg-ev", has_text="Cinema").count() == 1, "Cinema in 3 days")
        await hoje.click(); await A.wait_for_timeout(500)

        # Dia: one column; tap an empty hour to create an event there
        await mode("Dia").click(); await A.wait_for_timeout(700)
        check(await title() == "Hoje" and await a.locator(".tgrid.one .tg-col").count() == 1, f"Dia: {await title()}")
        check(await a.locator(".any-bar", has_text="Qualquer hora").count() == 1, "the bar Qualquer hora (routines, tasks) with done/total")
        await nav("Próximo").click(); await A.wait_for_timeout(700)
        check(await title() == "Amanhã", "Próximo: Amanhã")
        col = a.locator(".tgrid.one .tg-col")
        busy = await col.evaluate("(c) => [...c.querySelectorAll('.tg-ev')].map((e) => [e.offsetTop, e.offsetTop + e.offsetHeight])")
        hour = next(h for h in [15, 16, 11, 17, 8, 6, 22] if not any(t < (h + 1) * HOUR_H and bt > h * HOUR_H for t, bt in busy))
        await A.evaluate(f"() => {{ const s = document.querySelector('cronologia-app').shadowRoot.querySelector('.tgrid-scroll'); s.scrollTop = {hour * HOUR_H - 120}; }}"); await A.wait_for_timeout(300)
        box = await col.bounding_box()
        await A.mouse.click(box["x"] + box["width"] / 2, box["y"] + hour * HOUR_H + 12); await A.wait_for_timeout(600)
        check(await sheet.locator("h3").first.inner_text() == "Novo", "a tap on an empty hour opens Novo")
        s_, e_ = await sheet.locator("input[aria-label='Começa']").input_value(), await sheet.locator("input[aria-label='Termina']").input_value()
        check(await sheet.locator("#cr-date").input_value() == D(1) and (s_, e_) == (f"{hour:02d}:00", f"{hour + 1:02d}:00"), f"on that day and hour ({D(1)} {s_}–{e_})")
        await A.screenshot(path=f"{SP}/shots/crcv-dia-novo.png")
        await sheet.locator(".ev-title-input").fill("Reunião na escola")
        await sheet.locator(".pick.list", has_text="Pessoal").click()
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: [e["start"] for e in st.events(P, T(1, 0), T(2, 0), "Reunião na escola")] == [T(1, hour)], "created at that hour")
        ev = a.locator(".tgrid.one .tg-ev", has_text="Reunião na escola")
        async def shown(): return await ev.count() == 1
        await wait_for(shown, "shown in the Dia")
        top = await ev.evaluate("(e) => e.offsetTop")
        check(abs(top - hour * HOUR_H) <= 2, f"at its hour in the grid ({top}px)")
        await A.screenshot(path=f"{SP}/shots/crcv-dia.png")
        await hoje.click(); await A.wait_for_timeout(400)

        # Lista: the next 30 days by day; a day's head opens it in Dia; the arrows walk 30 days
        await mode("Lista").click(); await A.wait_for_timeout(900)
        heads = await a.locator(".panel.agenda .day-head").count()
        labels = [l.strip() for l in await a.locator(".panel.agenda .day-head .dh-label").all_inner_texts()]
        check(heads >= 20 and labels[0] == "Hoje" and labels[1] == "Amanhã", f"Lista: day by day from today ({heads} days)")
        check(await a.locator(".panel.agenda .ev-row", has_text="Aniversário da Ana").count() >= 1 and await a.locator(".panel.agenda .ev-row", has_text="Viagem para Lisboa").count() == 0, "the next 30 days only")
        await a.locator(".panel.agenda .day-head", has_text="Amanhã").click(); await A.wait_for_timeout(600)
        check(await title() == "Amanhã" and "on" in (await mode("Dia").get_attribute("class")), "a day's head opens it in Dia")
        await hoje.click(); await mode("Lista").click(); await A.wait_for_timeout(600)
        await nav("Próximo").click(); await A.wait_for_timeout(900)
        check(await title() == month_title(DD(30)) and (await a.locator(".panel.agenda .day-head .dh-label").first.inner_text()).strip() != "Hoje", f"Próximo: 30 days later ({await title()})")
        await hoje.click(); await A.wait_for_timeout(600)

        # Buscar: from a year back to a year ahead
        search = a.locator("input[data-q='buscar']")
        async def find(q):
            await search.fill(q); await A.wait_for_timeout(1200)
            return (await a.locator(".page-sub").first.inner_text()) if await a.locator(".page-sub").count() else "", await a.locator(".panel.agenda .ev-row", has_text=q.split()[0]).count()
        sub, n = await find("Lisboa")
        check(n == 1 and sub == "1 evento encontrado · do último ano ao próximo", f"10 months ahead: found ({sub})")
        sub, n = await find("Formatura")
        check(n == 1, "10 months back: found")
        sub, n = await find("bodas")
        check(n == 0 and "Nenhum evento com “bodas”." in await a.locator(".page").first.inner_text(), "more than a year ahead: not found, and it says so")
        sub, n = await find("Mudança antiga")
        check(n == 0, "more than a year back: not found")
        sub, n = await find("pilates")
        check(53 <= n <= 56 and "eventos encontrados" in sub, f"a weekly event (since 2 weeks ago): every week up to a year ahead ({n})")
        await a.locator(".search-box .icon-btn[aria-label='Limpar']").click(); await A.wait_for_timeout(700)
        check(await search.input_value() == "" and (await a.locator(".panel.agenda .day-head .dh-label").first.inner_text()).strip() == "Hoje", "Limpar: back to the next 30 days")

        # the mode is kept for the next time
        await A.goto(URL); await A.wait_for_timeout(1500)
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        check("on" in (await mode("Lista").get_attribute("class")), "the Calendário opens as it was left (Lista)")

        # Mais › Opções › Semana › Domingo: the month and the week from Sunday
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        await open_more(a, "Opções"); await A.wait_for_timeout(400)
        check(await a.locator(".week-seg button.on").inner_text() == "Segunda", "Opções: Segunda by default")
        await a.locator(".week-seg button", has_text="Domingo").click()
        await wait_for(lambda: st.stored()["app"].get("week_start") == 0, "Domingo saved")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        await mode("Mês").click(); await A.wait_for_timeout(600)
        check([t.strip() for t in await a.locator(".month .wd span").all_inner_texts()] == ["D", "S", "T", "Q", "Q", "S", "S"], "Mês from Sunday")
        check((await a.locator(".month .cell .num").first.inner_text()).strip() == str(week_of(first, 0).day), "the grid starts on the Sunday of the 1st's week")
        await mode("Semana").click(); await A.wait_for_timeout(600)
        ws1 = week_of(today, 0)
        strip = [s.split("\n")[0].strip() for s in await a.locator(".week-strip .ws-day").all_inner_texts()]
        check(strip == WD and await title() == span_title(ws1, ws1 + datetime.timedelta(days=6)), f"Semana from Sunday ({await title()}, {strip[0]})")
        await A.screenshot(path=f"{SP}/shots/crcv-semana-domingo.png")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    st.stop()
summary()
