# CronologIA 1.63.0, two rules of all the apps of the family:
# - Caixas de seleção no visual do app: no window of the phone. The times and dates are fields like the others (no
#   AM/PM, no mm/dd/yyyy) that open the app's window (whenpick.js, the look of the boxes of selectsheet.js): the 24
#   hours and the minutes, or a month; the Back of the phone, the X, a tap outside and Esc close only it. No
#   <input type=time|date> nor <datalist> on any screen; every box goes through selectsheet.js; the box closed looks
#   like the other fields (height, corners, arrow), light and dark, 390 and 320 px, nothing cut.
# - Inativos no fim, recolhidos: the hidden calendars last, under Ocultos (n), closed until tapped.
import os, sys, asyncio, datetime
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright
from mais_lib import open_more
from pick_lib import pick_time, pick_date, field_of, value

today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
st = Stack("crpk", data={"app": {"week_start": 1, "resolvia_on": True, "score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana", "remind": "20:00"}}})
NATIVE = "input[type=time], input[type=date], input[type=datetime-local], input[type=month], input[type=week], datalist"

async def no_native(a, where):
    n = await a.locator(NATIVE).count()
    boxes = await a.locator("select").evaluate_all("(ss) => ss.map((s) => getComputedStyle(s).pointerEvents)")
    check(n == 0 and all(p == "none" for p in boxes), f"{where}: no time, date or list of the phone; {len(boxes)} boxes open the app's sheet")

async def fits(pg, a, where):
    over = await pg.evaluate("() => document.documentElement.scrollWidth - innerWidth")
    cut = await a.locator(".pickf, .select").evaluate_all("(els) => els.filter((e) => e.offsetParent && (e.getBoundingClientRect().right > innerWidth + 0.5 || e.getBoundingClientRect().left < -0.5)).length")
    check(over <= 0 and cut == 0, f"{where}: nothing wider than the screen ({over}px, {cut} fields out)")

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--lang=en-US"])  # a phone in English: still 24 hours and dates in Portuguese
        for scheme in ("light", "dark"):
            for w in (390, 320):
                k = f"{scheme} {w}"
                ctx = await b.new_context(viewport={"width": w, "height": 844}, color_scheme=scheme, locale="en-US", timezone_id="America/Sao_Paulo", device_scale_factor=2, has_touch=True, is_mobile=True)
                pg = await ctx.new_page(); errs = []
                pg.on("pageerror", lambda e: errs.append(str(e)))
                await pg.goto(URL); await pg.wait_for_timeout(1600)
                a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
                surface = "rgb(23, 32, 34)" if scheme == "dark" else "rgb(255, 255, 255)"
                # Novo › Evento: Começa and Termina
                await a.locator(".tab.fab").click(); await pg.wait_for_timeout(500)
                await no_native(a, f"{k} Novo › Evento")
                start, end = field_of(sheet, "Começa"), field_of(sheet, "Termina")
                st0, en0 = await value(start), await value(end)
                txt = (await start.inner_text()).strip()
                check(txt == st0 and len(txt) == 5 and "M" not in txt, f"{k}: Começa in 24 hours ({txt})")
                await start.scroll_into_view_if_needed(); await start.tap(); await pg.wait_for_timeout(450)
                win = pg.locator(".wp.in .ss-sheet")
                check(await win.count() == 1 and (await win.locator(".ss-head b").inner_text()).strip() == "Começa", f"{k}: a tap opens the app's window, its title the name of the field")
                hours = [t.strip() for t in await win.locator(".wp-h .wp-cell").all_inner_texts()]
                mins = [t.strip() for t in await win.locator(".wp-m .wp-cell").all_inner_texts()]
                check(hours == [f"{h:02d}" for h in range(24)] and mins == [f"{m:02d}" for m in range(0, 60, 5)], f"{k}: the 24 hours and the minutes of 5 in 5")
                check("AM" not in await win.inner_text() and "PM" not in await win.inner_text() and (await win.locator(".wp-now").inner_text()).strip() == st0, f"{k}: no AM/PM, the time on top ({st0})")
                bg = await win.evaluate("(s) => getComputedStyle(s).backgroundColor")
                on = await win.locator(".wp-h .wp-cell.on").evaluate("(c) => getComputedStyle(c).backgroundColor")
                acc = await start.evaluate("(f) => getComputedStyle(f).getPropertyValue('--rv-accent').trim()")
                check(bg == surface and on not in ("rgba(0, 0, 0, 0)", bg), f"{k}: the colors of the app ({bg}; the hour marked {on}, accent {acc})")
                bx = await win.bounding_box()
                check(abs(bx["y"] + bx["height"] - 844) < 2 and bx["width"] >= w - 1, f"{k}: from the bottom, the width of the phone")
                await pg.screenshot(path=f"{SP}/shots/crpk-hora-{scheme}-{w}.png")
                await win.locator(".wp-h .wp-cell", has_text="15").tap(); await pg.wait_for_timeout(150)
                check((await win.locator(".wp-now").inner_text()).strip() == f"15:{st0[3:]}" and await pg.locator(".wp.in").count() == 1, f"{k}: the hour marks it and stays open")
                await win.locator(".wp-m .wp-cell", has_text="45").tap(); await pg.wait_for_timeout(700)
                check(await pg.locator(".wp").count() == 0 and await value(start) == "15:45", f"{k}: a minute chooses and closes ({await value(start)})")
                dur = lambda s, e: ((int(e[:2]) * 60 + int(e[3:])) - (int(s[:2]) * 60 + int(s[3:]))) % 1440
                check(dur("15:45", await value(end)) == dur(st0, en0), f"{k}: Termina keeps the length ({await value(end)})")
                # Back, X, outside and Esc close only the window
                await end.tap(); await pg.wait_for_timeout(450)
                await pg.go_back(); await pg.wait_for_timeout(600)
                check(await pg.locator(".wp").count() == 0 and await sheet.count() == 1 and await value(end) != "", f"{k}: the Back of the phone closes only the window")
                await end.tap(); await pg.wait_for_timeout(450)
                await pg.locator(".wp.in .ss-x").tap(); await pg.wait_for_timeout(600)
                check(await pg.locator(".wp").count() == 0 and await sheet.count() == 1, f"{k}: the X too")
                await end.tap(); await pg.wait_for_timeout(450)
                await pg.touchscreen.tap(w / 2, 40); await pg.wait_for_timeout(600)
                check(await pg.locator(".wp").count() == 0 and await sheet.count() == 1, f"{k}: and a tap outside")
                # Pronto keeps a minute that is not of 5 in 5 (an event of the Google at 10:17)
                await a.evaluate("(el) => el._setForm({ start: '10:17', end: '11:17' })"); await pg.wait_for_timeout(200)
                await start.tap(); await pg.wait_for_timeout(450)
                await pg.locator(".wp.in .wp-h .wp-cell", has_text="09").tap(); await pg.locator(".wp.in .wp-ok").tap(); await pg.wait_for_timeout(700)
                check(await value(start) == "09:17" and await win.count() == 0, f"{k}: Pronto: the hour changes, the minute stays ({await value(start)})")
                # the closed field: as tall as a box and the other fields, the same corners and border
                look = lambda loc: loc.evaluate("(e) => { const s = getComputedStyle(e); return [Math.round(e.getBoundingClientRect().height), s.borderTopLeftRadius, s.borderTopWidth]; }")
                f1 = await look(start)
                # Outra data (1.67.0, the field of the family): the month right under it, in the form, today and the day chosen
                chip = sheet.locator("#cr-date")
                await chip.tap(); await pg.wait_for_timeout(450)
                cal = sheet.locator("date-pick .cal")
                check(await cal.count() == 1 and await win.count() == 0 and await cal.locator(".cal-day.today").count() == 1, f"{k}: Outra data: the month right under it, no window, today marked")
                wds = [t.strip() for t in await cal.locator(".cal-wd").all_inner_texts()]
                check(wds == ["S", "T", "Q", "Q", "S", "S", "D"], f"{k}: the week from Monday, in Portuguese ({wds})")
                quick = [t.strip() for t in await sheet.locator("date-pick").first.locator(".dp-row .pick").all_inner_texts()]
                check(quick[0] == "Hoje" and quick[-1] == "Outra data" and len(quick) >= 3, f"{k}: the shortcuts of the ResolvIA ({quick})")
                await pg.screenshot(path=f"{SP}/shots/crpk-data-{scheme}-{w}.png")
                await chip.tap(); await pg.wait_for_timeout(400)
                check(await cal.count() == 0 and await sheet.count() == 1, f"{k}: Outra data again closes the month")
                await pick_date(chip, D(40))
                check(await value(chip) == D(40), f"{k}: › to another month, a day chooses it ({await value(chip)})")
                # Dia todo › Até: not before the start
                await sheet.locator("input[aria-label='Dia todo']").check(); await pg.wait_for_timeout(300)
                ate = sheet.locator("#cr-ate")
                await ate.tap(); await pg.wait_for_timeout(450)
                before = sheet.locator(f"date-pick .cal-day[data-d='{D(39)}']")
                check(await before.count() == 0 or await before.is_disabled(), f"{k}: Até: the days before the start can't be chosen")
                await ate.tap(); await pg.wait_for_timeout(400)
                await ate.scroll_into_view_if_needed()
                await pg.screenshot(path=f"{SP}/shots/crpk-novo-{scheme}-{w}.png")
                await fits(pg, a, f"{k} Novo")
                # every model of Novo: no time or date of the phone
                for m in [t.strip() for t in await sheet.locator(".model").all_inner_texts()]:
                    await sheet.locator(".model", has_text=m).first.click(); await pg.wait_for_timeout(350)
                    await no_native(a, f"{k} Novo › {m}")
                    await fits(pg, a, f"{k} Novo › {m}")
                await sheet.locator(".model", has_text="Remédio").click(); await pg.wait_for_timeout(300)
                await sheet.locator(".pick", has_text="2x").click(); await pg.wait_for_timeout(200)
                await pick_time(sheet.locator(".time-pill .pickf").nth(1), "21:30")
                check([await value(f) for f in await sheet.locator(".time-pill .pickf").all()][1] == "21:30", f"{k}: Remédio: a time of the list")
                await sheet.locator(".time-pill").first.scroll_into_view_if_needed()
                await pg.screenshot(path=f"{SP}/shots/crpk-remedio-{scheme}-{w}.png")
                await a.evaluate("(el) => el._closeSheet()"); await pg.wait_for_timeout(400)
                # the boxes closed: like the fields (height, corners, border, the arrow), a long text ends in …
                for name in ("Calendários", "Integrações", "Avisos", "Rotinas", "Férias", "Recompensas", "Dados", "Aparência", "Opções"):
                    await open_more(a, name)
                    await no_native(a, f"{k} {name}")
                    await fits(pg, a, f"{k} {name}")
                await open_more(a, "Calendários")
                box = a.locator("#novos-eventos select")
                b1 = await look(box)
                arrow = await box.evaluate("(s) => getComputedStyle(s).backgroundImage")
                check(abs(b1[0] - f1[0]) <= 2 and b1[1] == f1[1] == "14px" and b1[2] == f1[2], f"{k}: the box closed like the time field (height, corners, border: {b1} {f1})")
                check("gradient" in arrow and await box.evaluate("(s) => getComputedStyle(s).appearance") == "none", f"{k}: the arrow of the app, not the phone's")
                await open_more(a, "Integrações")
                if await a.locator("#falar select").count():
                    tx = await a.locator("#falar select").evaluate("(s) => [getComputedStyle(s).textOverflow, getComputedStyle(s).whiteSpace]")
                    check(tx == ["ellipsis", "nowrap"], f"{k}: a long choice ends in … ({tx})")
                    await a.locator("#falar").scroll_into_view_if_needed()
                    await pg.screenshot(path=f"{SP}/shots/crpk-caixa-{scheme}-{w}.png")
                # Recompensas › Lembrete diário: the time of the app, as tall as Testar
                await open_more(a, "Recompensas")
                rt = a.locator(".pickf.remind-time")
                await rt.scroll_into_view_if_needed()
                hb = [await x.bounding_box() for x in (rt, a.locator(".remind-test"))]
                check(await value(rt) == "20:00" and abs(hb[0]["width"] - hb[1]["width"]) < 1 and hb[1]["y"] > hb[0]["y"], f"{k}: Lembrete diário: 20:00; Testar no meu celular below, as wide")
                # Mais › Calendários: the hidden ones last, folded
                await open_more(a, "Calendários")
                for nm in ("Trabalho", "Pessoal"):
                    # (a click: hidden, the row leaves for Ocultos at once)
                    await a.locator(".cal-row", has_text=nm).locator("input[role='switch']").click(); await pg.wait_for_timeout(400)
                await wait_for(lambda: all(st.stored()["calendars"].get(c, {}).get("hidden") for c in ("calendar.trabalho", "calendar.pessoal")), f"{k}: two calendars hidden")
                fold = a.locator("#cal-ocultos .off-fold")
                order = await a.locator(".panel").evaluate_all("(ps) => ps.map((p) => p.id || (p.querySelector('.mais-head h2') || {}).textContent || '')")
                i_off = order.index("cal-ocultos") if "cal-ocultos" in order else -1
                check(await fold.count() == 1 and (await fold.inner_text()).strip() == "Ocultos (2)" and await fold.get_attribute("aria-expanded") == "false" and await a.locator("#cal-ocultos .cal-row").count() == 0, f"{k}: Ocultos (2), closed")
                check(i_off > 0 and order[i_off + 1] == "novos-eventos", f"{k}: after all the calendars ({order})")
                await fold.scroll_into_view_if_needed()
                await pg.screenshot(path=f"{SP}/shots/crpk-ocultos-{scheme}-{w}.png")
                await fold.click(); await pg.wait_for_timeout(300)
                rows = [t.split("\n")[0].strip() for t in await a.locator("#cal-ocultos .cal-row .label").all_inner_texts()]
                check(sorted(rows) == ["Pessoal", "Trabalho"] and await fold.get_attribute("aria-expanded") == "true", f"{k}: a tap opens them ({rows})")
                await a.locator("#cal-ocultos .cal-row", has_text="Pessoal").locator("input[role='switch']").click(); await pg.wait_for_timeout(600)
                check((await fold.inner_text()).strip() == "Ocultos (1)" and await a.locator("#cal-ocultos .cal-row", has_text="Pessoal").count() == 0, f"{k}: shown again: back to its group")
                await a.locator("#cal-ocultos .cal-row", has_text="Trabalho").locator("input[role='switch']").click(); await pg.wait_for_timeout(600)
                check(await a.locator("#cal-ocultos").count() == 0, f"{k}: nothing hidden: no Ocultos")
                check(not errs, f"{k}: no page errors {errs}")
                await ctx.close()
        # a computer: the window is a card in the middle; the keyboard
        ctx = await b.new_context(viewport={"width": 1200, "height": 800}, locale="pt-BR", timezone_id="America/Sao_Paulo")
        pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto(URL); await pg.wait_for_timeout(1800)
        a = pg.locator("cronologia-app")
        await a.locator(".top-acts .btn.primary", has_text="Adicionar").click(); await pg.wait_for_timeout(600)
        start = field_of(a.locator(".sheet"), "Começa")
        await start.click(); await pg.wait_for_timeout(400)
        sb = await pg.locator(".wp.in .ss-sheet").bounding_box()
        check(sb and abs(sb["x"] + sb["width"] / 2 - 600) < 2 and abs(sb["y"] + sb["height"] / 2 - 400) < 2 and sb["width"] <= 440, f"computer: a card in the middle ({sb})")
        focused = await pg.evaluate("() => document.activeElement && document.activeElement.className")
        check("wp-cell on" in (focused or ""), f"computer: the hour of the field has the focus ({focused})")
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(600)
        check(await pg.locator(".wp").count() == 0 and await a.locator(".sheet").count() == 1, "computer: Esc closes only the window")
        await pg.screenshot(path=f"{SP}/shots/crpk-computador.png")
        check(not errs, f"computer: no page errors {errs}")
        await ctx.close()
        await b.close()

try: asyncio.run(main())
finally:
    st.stop()
summary()
