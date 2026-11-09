# CronologIA: only the buttons each calendar allows (local, Outlook with and without editing, Google, CalDAV, .ics, holidays); moving an event to another calendar (a copy, then the original deleted).
import os, sys, asyncio, datetime, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright
from mais_lib import open_more

today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
T = lambda n, h, m=0: f"{D(n)}T{h:02d}:{m:02d}:00-03:00"
st = Stack("crcap", fake_env={"FAKE_EXTRA_CALENDARS": "1"})
def evs(cal, name, a=-3, z=20): return st.events(cal, T(a, 0), T(z, 0), name)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        async def toast(): return (await a.locator(".toast").inner_text()) if await a.locator(".toast").count() else ""

        # Mais › Calendários: grouped by integration, each saying what it allows
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        await open_more(a, "Calendários"); await A.wait_for_timeout(500)
        heads = [h.strip() for h in await a.locator(".panel .mais-head h2").all_inner_texts()]
        check(all(g in heads for g in ["CalDAV", "Calendário local", "Calendário remoto (.ics)", "Feriados", "Google Agenda", "Outlook (Microsoft 365)"]), f"one group per integration ({heads[:7]})")
        hint = lambda name: a.locator(".cal-row", has_text=name).locator(".hint").inner_text()
        got = {n: await hint(n) for n in ["Pessoal", "Nextcloud", "Família", "Outlook da empresa", "Trabalho", "Feriados Brasil", "Giveaways"]}
        check(got["Pessoal"] == "cria e edita" and got["Nextcloud"] == "cria eventos" and got["Família"] == "cria eventos" and got["Outlook da empresa"] == "só leitura" and got["Trabalho"].endswith("cria e edita") and got["Feriados Brasil"] == "só leitura" and got["Giveaways"] == "só leitura", f"what each allows ({got})")
        check("Davi (Outlook)" in got["Trabalho"], "the Outlook calendar says whose account it is")
        opts = [o.strip() for o in await a.locator("#novos-eventos select option").all_inner_texts()]
        check(sorted(opts) == sorted(["Nextcloud", "Casa", "Pessoal", "Remédios", "Família", "Trabalho"]), f"Calendário padrão: only those that create ({opts})")
        await A.screenshot(path=f"{SP}/shots/crcap-calendars.png", full_page=True)

        # Novo: only the calendars that create
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        chips = [c.strip() for c in await sheet.locator(".pick.list").all_inner_texts()]
        check(sorted(chips) == sorted(["Nextcloud", "Casa", "Pessoal", "Remédios", "Família", "Trabalho"]), f"Novo offers the calendars that create ({chips})")
        pre = (await sheet.locator(".pick.list.on").inner_text()).strip()
        check(pre in ["Casa", "Pessoal", "Remédios", "Trabalho"], f"no Calendário padrão chosen: Novo starts in one that can be edited later, not CalDAV ({pre})")
        await sheet.locator(".ev-title-input").fill("Feira de trocas")
        await sheet.locator(".chip-row .pick", has_text="Amanhã").click()
        await sheet.locator(".pick.list", has_text="Nextcloud").click()
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: len(evs("calendar.nextcloud", "Feira de trocas")) == 1, "CalDAV: the new event is created there")

        # each event's sheet: only the buttons the calendar allows
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg.compact button", has_text="Lista").click(); await A.wait_for_timeout(600)
        search = a.locator("input[data-q='buscar']")
        async def open_ev(name):
            await search.fill(name); await A.wait_for_timeout(900)
            await a.locator(".ev-row", has_text=name).first.click(); await A.wait_for_timeout(500)
            return {
                "apagar": await sheet.locator(".btn.danger[aria-label='Apagar']").count(),
                "editar": await sheet.locator(".btn", has_text="Editar").count(),
                "duplicar": await sheet.locator(".btn", has_text="Duplicar").count(),
                "leitura": "Só leitura" in await sheet.inner_text(),
            }
        async def close():
            await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        ALL = {"apagar": 1, "editar": 1, "duplicar": 1, "leitura": False}
        NONE = {"apagar": 0, "editar": 0, "duplicar": 1, "leitura": True}
        for name, cal, want in [("Almoço com a família", "local", ALL), ("Reunião de planejamento", "Outlook with editing", ALL), ("Consulta do Theo", "Google (delete + create)", ALL), ("Reunião do condomínio", "CalDAV", NONE), ("Finados", "holidays", NONE), ("Bad Cheese", "remote .ics", NONE), ("Treinamento de vendas", "Outlook without editing", NONE)]:
            got = await open_ev(name)
            check(got == want, f"{cal}: {', '.join(k for k, v in want.items() if v) or 'nothing'} ({got})")
            if name == "Reunião do condomínio": await A.screenshot(path=f"{SP}/shots/crcap-caldav-sheet.png")
            if name != "Treinamento de vendas": await close()
        # (its sheet stays open) Duplicar a read-only one: a copy in a calendar that creates
        await sheet.locator(".btn", has_text="Duplicar").click(); await A.wait_for_timeout(500)
        check(await sheet.locator("h3").first.inner_text() == "Novo" and await sheet.locator(".ev-title-input").input_value() == "Treinamento de vendas", "Duplicar opens Novo with it filled in")
        on = (await sheet.locator(".pick.list.on").inner_text()).strip()
        check(on in ["Casa", "Pessoal", "Remédios", "Trabalho"], f"in a calendar that creates and can be edited later, not CalDAV or Google ({on})")
        await sheet.locator(".pick.list", has_text="Pessoal").click()
        await sheet.locator(".btn.primary", has_text="Criar evento").click()
        await wait_for(lambda: len(evs("calendar.pessoal", "Treinamento de vendas")) == 1 and len(evs("calendar.outlook_leitura", "Treinamento de vendas")) == 1, "the copy in Pessoal, the original untouched")

        # Mover: Editar › another calendar = a copy there, then the original deleted
        await open_ev("Almoço com a família")
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(500)
        check(await sheet.locator(".flabel", has_text="Calendário (mover)").count() == 1, "Editar offers Calendário (mover)")
        targets = [c.strip() for c in await sheet.locator(".pick.list").all_inner_texts()]
        check("Outlook da empresa" not in targets and "Feriados Brasil" not in targets and "Nextcloud" in targets, f"only calendars that create ({targets})")
        orig = evs("calendar.pessoal", "Almoço com a família")[0]
        mark = len(st.fake_log())
        await sheet.locator(".pick.list", has_text="Trabalho").click()
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        await wait_for(lambda: evs("calendar.pessoal", "Almoço com a família") == [] and len(evs("calendar.trabalho", "Almoço com a família")) == 1, "moved: in Trabalho, out of Pessoal")
        log = st.fake_log()[mark:]
        check(log.index("event created calendar.trabalho") < log.index(f"event deleted calendar.pessoal {orig['uid']}"), "created first, then the original deleted")
        moved = evs("calendar.trabalho", "Almoço com a família")[0]
        check((moved["start"], moved["end"], moved.get("location")) == (orig["start"], orig["end"], "Casa da vó"), "same day, time and place")
        check("Evento movido para Trabalho" in await toast(), f"toast ({await toast()!r})")
        # from the Google calendar to the local one
        await open_ev("Consulta do Theo")
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(500)
        check("Levar a carteirinha" in await sheet.locator("textarea").nth(1).input_value(), "an event with notes shows them (Local e notas off)")
        await sheet.locator(".pick.list", has_text="Pessoal").click()
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        await wait_for(lambda: evs("calendar.familia", "Consulta do Theo") == [] and evs("calendar.pessoal", "Consulta do Theo")[0].get("description") == "Levar a carteirinha", "from Google to Pessoal, with its notes")
        # a repeating event can't move (only its own calendar)
        await open_ev("Natação")
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(500)
        check(await sheet.locator(".flabel", has_text="Calendário").count() == 0, "a repeating one stays in its calendar")
        await sheet.locator(".btn.outline", has_text="Cancelar").click(); await A.wait_for_timeout(300)
        # the new CalDAV event: no Editar either
        got = await open_ev("Feira de trocas")
        check(got == NONE, f"the event created in CalDAV can't be edited here ({got})")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    st.stop()
summary()
