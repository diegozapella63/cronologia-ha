# CronologIA: Recompensas when a period closes (the result card, the phones, Entregue, the Histórico and a closed period's Extrato), the prize Definir (the same for all, one for each, removed, the next period's) and the period length and week start.
import os, sys, asyncio, datetime, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright
from mais_lib import open_more

today = datetime.date.today()
jsday = lambda d: (d.weekday() + 1) % 7
week_of = lambda d, ws: d - datetime.timedelta(days=(jsday(d) - ws + 7) % 7)
MON = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
def label(a, end):
    b = end - datetime.timedelta(days=1)
    return f"{a.day} a {b.day} de {MON[b.month - 1]}" if a.month == b.month else f"{a.day} {MON[a.month - 1]} a {b.day} {MON[b.month - 1]}"
monday = week_of(today, 1)
p0, p1 = monday - datetime.timedelta(days=7), monday
t0 = monday - datetime.timedelta(days=14)
noon = lambda d: f"{d.isoformat()}T12:00:00-03:00"
data = {
    "app": {"week_start": 1, "score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}},
    "score": {
        "current": {"key": p0.isoformat(), "start": p0.isoformat(), "end": p1.isoformat()},
        "entries": [
            {"key": "extra|carro", "at": noon(p0 + datetime.timedelta(days=1)), "who": "Diego", "points": 30, "title": "Lavou o carro", "kind": "extra"},
            {"key": "extra|faxina", "at": noon(p0 + datetime.timedelta(days=2)), "who": "Andressa", "points": 10, "title": "Faxina", "kind": "extra"},
        ],
        "prizes": {p0.isoformat(): {"Diego": "Jantar fora", "Andressa": "Massagem"}},
        "history": [{"key": t0.isoformat(), "start": t0.isoformat(), "end": p0.isoformat(), "totals": {"Diego": 20, "Andressa": 20}, "winner": None, "reward": "Cinema", "delivered": False}],
    },
}
st = Stack("crpz", data=data)
LAST = label(p0, p1)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        async def toast(): return (await a.locator(".toast").inner_text()) if await a.locator(".toast").count() else ""
        status = lambda: a.locator(".brand-head .status").first.inner_text()
        await a.locator(".tab", has_text="Recompensas").click()

        # the week that ended closed when the app started: the result on top
        card = a.locator(".result-card")
        # until the server closes it (its first round, a few seconds after starting), the card shows the tie before it
        async def closed(): return "Diego venceu" in await card.inner_text()
        await wait_for(closed, "the week that ended is closed", tries=60)
        ct = " ".join((await card.inner_text()).split())
        check(f"semana passada · {LAST}" in ct.lower() and "Diego venceu 30 × 10" in ct and "Prêmio: Jantar fora" in ct, f"result card: who won, the score and the winner's own prize ({ct})")
        check(await card.locator(".dose-btn", has_text="Entregue").count() == 1, "with Entregue")
        await card.screenshot(path=f"{SP}/shots/crpz-result.png")
        await wait_for(lambda: len([n for n in st.notifications() if n.get("title") == "🏆 Placar fechado"]) == 2, "the result sent to the phones")
        told = [n for n in st.notifications() if n.get("title") == "🏆 Placar fechado"]
        check(sorted(n["service"] for n in told) == ["mobile_app_galaxy_s23", "mobile_app_pixel_8"] and told[0]["message"] == "Diego venceu: 30 × 10. Prêmio: Jantar fora.", f"the players' phones told ({[n['message'] for n in told]})")
        hist = a.locator(".panel.history .hist-row")
        check(await hist.count() == 2, "Histórico: the new period on top of the old one")
        h0 = " ".join((await hist.nth(0).inner_text()).split())
        h1 = " ".join((await hist.nth(1).inner_text()).split())
        check(h0 == f"D Diego venceu · 30 × 10 {LAST} · Jantar fora" and h1.startswith("= Empate · 20 × 20"), f"each with who won and the score ({h0} | {h1})")
        gift = hist.nth(0).locator(".hist-gift")
        check(await gift.get_attribute("aria-pressed") == "false" and await gift.get_attribute("aria-label") == "Marcar prêmio como entregue" and await hist.nth(1).locator(".hist-gift").count() == 0, "a gift to mark it given (none on a tie)")
        check("Diego 1" in await a.locator(".panel.history .panel-head, .panel.history").first.inner_text(), "the wins counted in the head")

        # Entregue: the card leaves, the Histórico shows it given; tapping the gift again undoes it
        await card.locator(".dose-btn", has_text="Entregue").click()
        async def gone(): return await a.locator(".result-card").count() == 0
        await wait_for(gone, "Entregue: the card leaves")
        await wait_for(lambda: st.stored()["score"]["history"][0]["delivered"] is True, "saved as given")
        check(await gift.get_attribute("aria-pressed") == "true" and await gift.get_attribute("aria-label") == "Prêmio entregue", "the gift turns into a check")
        await gift.click()
        async def back(): return await a.locator(".result-card").count() == 1
        await wait_for(back, "the gift again: not given, the card is back")
        await wait_for(lambda: st.stored()["score"]["history"][0]["delivered"] is False, "saved")

        # a closed period's Extrato, only to read
        await hist.nth(0).locator(".hist-open").click(); await A.wait_for_timeout(900)
        sx = await sheet.inner_text()
        check(f"Extrato · {LAST}" in sx and "Diego venceu" in sx and "Diego 30 × Andressa 10 · Jantar fora" in sx, f"its result ({sx[:80]!r})")
        check("Lavou o carro" in sx and "Faxina" in sx and await sheet.locator(".ext-row .icon-btn").count() == 0, "its lines, without the × (closed)")
        await A.screenshot(path=f"{SP}/shots/crpz-period.png")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        await hist.nth(1).locator(".hist-open").click(); await A.wait_for_timeout(900)
        check("Empate" in await sheet.inner_text() and "Nada registrado nesse período." in await sheet.inner_text(), "an old period without lines says so")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)

        # the prize of this week: the same for all, then one for each, then back, then none
        prize = a.locator(".panel.prize")
        cur = monday.isoformat()
        check("Ainda sem prêmio" in await prize.inner_text(), "no prize yet")
        await prize.locator(".prize-head .text-btn", has_text="Definir").click(); await A.wait_for_timeout(400)
        check(await sheet.locator("h3").first.inner_text() == "Prêmio desta semana" and await sheet.locator(".seg button.on").inner_text() == "O mesmo para todos", "Definir: the same for all by default")
        await sheet.locator("input[type=text]").fill("Pizza")
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        await wait_for(lambda: st.stored()["score"]["rewards"].get(cur) == "Pizza", "saved for this week")
        check("Prêmio salvo" in await toast() and "Pizza" in await prize.locator(".prize-head").inner_text(), "the card shows it")
        await prize.locator(".prize-head .text-btn", has_text="Mudar").click(); await A.wait_for_timeout(400)
        await sheet.locator(".seg button", has_text="Um para cada pessoa").click(); await A.wait_for_timeout(200)
        fields = sheet.locator("input[type=text]")
        labels = [l.strip() for l in await sheet.locator(".flabel").all_inner_texts()]
        check(labels == ["Se Diego vencer", "Se Andressa vencer"] and [await fields.nth(i).input_value() for i in range(2)] == ["Pizza", "Pizza"], f"one field per person, starting from the shared one ({labels})")
        check("Empate: ninguém leva." in await sheet.inner_text(), "it says a tie gives nothing")
        await fields.nth(1).fill("Cinema")
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        await wait_for(lambda: st.stored()["score"]["prizes"].get(cur) == {"Diego": "Pizza", "Andressa": "Cinema"} and cur not in st.stored()["score"]["rewards"], "one for each saved (the shared one gone)")
        pp = " ".join((await prize.inner_text()).split())
        check("prêmios desta semana" in pp.lower() and "Se Diego vencer Pizza" in pp and "Se Andressa vencer Cinema" in pp and "Prêmios salvos" in await toast(), f"the card shows each person's ({pp[:90]})")
        await A.screenshot(path=f"{SP}/shots/crpz-each.png")
        await prize.locator(".prize-head .text-btn", has_text="Mudar").click(); await A.wait_for_timeout(400)
        check(await sheet.locator(".seg button.on").inner_text() == "Um para cada pessoa", "Mudar opens on one for each")
        await sheet.locator(".seg button", has_text="O mesmo para todos").click(); await A.wait_for_timeout(200)
        await sheet.locator("input[type=text]").fill("Sorvete")
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        await wait_for(lambda: st.stored()["score"]["rewards"].get(cur) == "Sorvete" and cur not in st.stored()["score"]["prizes"], "back to one for all (each one's gone)")
        check(await prize.locator(".prize-people").count() == 0 and "Sorvete" in await prize.inner_text(), "the card too")
        await prize.locator(".prize-head .text-btn", has_text="Mudar").click(); await A.wait_for_timeout(400)
        await sheet.locator("input[type=text]").fill("")
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        await wait_for(lambda: cur not in st.stored()["score"]["rewards"], "an empty prize removes it")
        check("Prêmio tirado" in await toast() and "Ainda sem prêmio" in await prize.inner_text(), "Prêmio tirado; the card is empty again")
        # the next week's, only for Diego
        check("Prêmio da próxima semana ainda livre" in await prize.locator(".prize-next").inner_text(), "the next week's is free")
        await prize.locator(".prize-next .text-btn", has_text="Definir").click(); await A.wait_for_timeout(400)
        check(await sheet.locator("h3").first.inner_text() == "Prêmio da próxima semana", "the sheet of the next week")
        await sheet.locator(".seg button", has_text="Um para cada pessoa").click(); await A.wait_for_timeout(200)
        await sheet.locator("input[type=text]").nth(0).fill("Churrasco")
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        nxt = (monday + datetime.timedelta(days=7)).isoformat()
        await wait_for(lambda: st.stored()["score"]["prizes"].get(nxt) == {"Diego": "Churrasco"}, "only Diego's saved")
        nx = " ".join((await prize.locator(".prize-next > span").inner_text()).split())
        check(nx == "Próxima semana: Diego: Churrasco · Andressa: livre", f"the next one: Diego's and Andressa's free ({nx})")

        # Mais › Placar: the period length; Opções: the week start
        async def placar():
            await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
            await open_more(a, "Placar"); await A.wait_for_timeout(400)
        await placar()
        check("A semana começa na segunda." in await a.locator("#placar").inner_text(), "Placar says the week starts on Monday")
        await a.locator("#placar .seg button", has_text="Quinzenal").click()
        await wait_for(lambda: st.stored()["app"]["score"]["period"] == "quinzena", "Quinzenal saved")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(600)
        s1 = await status()
        check(s1.startswith("Quinzena de") and "fecha" in s1, f"Recompensas: the two weeks ({s1})")
        q = st.stored()["score"]["current"]
        check((datetime.date.fromisoformat(q["end"]) - datetime.date.fromisoformat(q["start"])).days == 14 and jsday(datetime.date.fromisoformat(q["start"])) == 1, f"14 days from a Monday ({q})")
        check(await a.locator(".panel.history .hist-row").count() == 2, "no period closed by the change")
        await placar()
        await a.locator("#placar .seg button", has_text="Mensal").click()
        await wait_for(lambda: st.stored()["app"]["score"]["period"] == "mes", "Mensal saved")
        check("No primeiro dia de cada mês." in await a.locator("#placar").inner_text(), "Placar: on the 1st")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(600)
        check((await status()).startswith(f"Mês de {['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][today.month - 1]}"), f"Recompensas: the month ({await status()})")
        check("prêmio deste mês" in (await a.locator(".panel.prize").inner_text()).lower(), "the prize of this month")
        await placar()
        await a.locator("#placar .seg button", has_text="Semanal").click()
        await wait_for(lambda: st.stored()["app"]["score"]["period"] == "semana", "Semanal saved")
        await open_more(a, "Opções"); await A.wait_for_timeout(300)
        await a.locator(".week-seg button", has_text="Domingo").click()
        sun = week_of(today, 0)
        await wait_for(lambda: st.stored()["score"]["current"]["start"] == sun.isoformat(), "Domingo: the week of the placar starts on Sunday")
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(600)
        check((await status()).startswith(f"Semana de {label(sun, sun + datetime.timedelta(days=7))}"), f"Recompensas: from Sunday ({await status()})")
        await placar()
        check("A semana começa no domingo." in await a.locator("#placar").inner_text(), "Placar says so")
        await open_more(a, "Opções"); await A.wait_for_timeout(300)
        await a.locator(".week-seg button", has_text="Segunda").click()
        await wait_for(lambda: st.stored()["score"]["current"]["start"] == monday.isoformat(), "Segunda: from Monday again")
        check(len(st.stored()["score"]["history"]) == 2, "changing the period or the week start never closed one")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    st.stop()
summary()
