# CronologIA: a repeating event edited and deleted with each choice (Só este evento, Este e os próximos, Toda a série); a plain one deleted, Cancelar and Desfazer.
import os, sys, asyncio, datetime, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright

today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
T = lambda n, h, m=0: f"{D(n)}T{h:02d}:{m:02d}:00-03:00"
P = "calendar.pessoal"
st = Stack("crrec")
UNTIL = D(6).replace("-", "")
st.create(P, {"summary": "Aula de piano", "dtstart": T(1, 18), "dtend": T(1, 19), "rrule": f"FREQ=DAILY;UNTIL={UNTIL}"})
st.create(P, {"summary": "Natação", "dtstart": T(1, 7), "dtend": T(1, 8), "rrule": "FREQ=DAILY;COUNT=6"})
st.create(P, {"summary": "Jantar com amigos", "dtstart": T(1, 20), "dtend": T(1, 22), "location": "Restaurante Lume", "description": "Reserva no nome do Diego"})
def evs(name): return st.events(P, T(-1, 0), T(20, 0), name)
def days(name): return [e["start"][:10] for e in evs(name)]

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg.compact button", has_text="Lista").click(); await A.wait_for_timeout(900)
        rows = lambda name: a.locator(".panel.agenda .ev-row", has_text=name)
        async def open_row(name, i):
            await rows(name).nth(i).click(); await A.wait_for_timeout(400)
        async def toast(): return (await a.locator(".toast").inner_text()) if await a.locator(".toast").count() else ""
        check(await rows("Aula de piano").count() == 6, f"Lista: the 6 classes ({await rows('Aula de piano').count()})")

        # 1. Editar › Este e os próximos, from the 3rd class
        await open_row("Aula de piano", 2)
        facts = await sheet.inner_text()
        check("Todo dia" in facts or "Diário" in facts or "dia" in facts.lower(), f"the sheet says it repeats ({facts[:80]!r})")
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        check("Este evento se repete." in await sheet.inner_text(), "the form says it repeats")
        check(await sheet.locator(".flabel", has_text="Calendário").count() == 0, "a repeating event is not moved to another calendar (no Calendário choice)")
        await sheet.locator(".ev-title-input").fill("Aula de piano (turma nova)")
        await sheet.locator("input[aria-label='Começa']").fill("19:00"); await A.wait_for_timeout(200)
        await sheet.locator(".btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(500)
        head = await sheet.locator("h3").first.inner_text()
        opts = [t.split("\n")[0] for t in await sheet.locator(".imp-opt").all_inner_texts()]
        check(head == "Mudar evento que se repete" and opts == ["Só este evento", "Este e os próximos"], f"Editar asks: only this one or this and the next ones ({head}: {opts})")
        await A.screenshot(path=f"{SP}/shots/crrec-scope-edit.png")
        await sheet.locator(".imp-opt", has_text="Este e os próximos").click()
        await wait_for(lambda: re.search(r"event updated calendar\.pessoal \S+ \d{8}T180000 THISANDFUTURE", st.fake_log()), "sent with THISANDFUTURE and the day's recurrence id")
        await wait_for(lambda: [(e["summary"], e["start"][11:16]) for e in evs("Aula de piano")] == [("Aula de piano", "18:00")] * 2 + [("Aula de piano (turma nova)", "19:00")] * 4, "the first two as they were; from the 3rd on, the new name and time")
        check("Este e os próximos foram alterados" in await toast(), f"toast ({await toast()!r})")
        async def listed(): return await rows("turma nova").count() == 4 and await rows("Aula de piano").count() == 6
        await wait_for(listed, "Lista shows it")

        # 2. Editar › Só este evento, on the 5th
        await open_row("Aula de piano", 4)
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        await sheet.locator(".ev-title-input").fill("Aula de piano (reposição)")
        await sheet.locator(".btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(400)
        await sheet.locator(".imp-opt", has_text="Só este evento").click()
        await wait_for(lambda: [e["summary"] for e in evs("Aula de piano")].count("Aula de piano (reposição)") == 1 and [e["summary"] for e in evs("Aula de piano")].count("Aula de piano (turma nova)") == 3, "only that day renamed")
        check("Só este evento foi alterado" in await toast(), f"toast ({await toast()!r})")

        # 3. Apagar › Só este evento (the 2nd swim)
        await open_row("Natação", 1)
        await sheet.locator(".btn.danger[aria-label='Apagar']").click(); await A.wait_for_timeout(400)
        head = await sheet.locator("h3").first.inner_text()
        opts = [t.split("\n")[0] for t in await sheet.locator(".imp-opt").all_inner_texts()]
        check(head == "Apagar evento que se repete" and opts == ["Só este evento", "Este e os próximos", "Toda a série"], f"Apagar asks the three ({head}: {opts})")
        check(await sheet.locator(".imp-opt.danger", has_text="Toda a série").count() == 1, "Toda a série in red")
        await A.screenshot(path=f"{SP}/shots/crrec-scope-delete.png")
        # closing it deletes nothing
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(400)
        check(days("Natação") == [D(n) for n in range(1, 7)] and "event deleted" not in st.fake_log(), "Fechar: nothing deleted")
        await open_row("Natação", 1)
        await sheet.locator(".btn.danger[aria-label='Apagar']").click(); await A.wait_for_timeout(400)
        await sheet.locator(".imp-opt", has_text="Só este evento").click()
        await wait_for(lambda: days("Natação") == [D(1), D(3), D(4), D(5), D(6)], "only that day left")
        check("Evento apagado" in await toast(), f"toast ({await toast()!r})")
        async def five(): return await rows("Natação").count() == 5
        await wait_for(five, "and it leaves the Lista")

        # 4. Apagar › Este e os próximos (from day 4)
        await open_row("Natação", 2)
        check(D(4)[8:].lstrip("0") in await sheet.inner_text(), "the sheet of day 4")
        await sheet.locator(".btn.danger[aria-label='Apagar']").click(); await A.wait_for_timeout(400)
        await sheet.locator(".imp-opt", has_text="Este e os próximos").click()
        await wait_for(lambda: days("Natação") == [D(1), D(3)], "the ones before stay, the rest leave")
        check("Este e os próximos foram apagados" in await toast(), f"toast ({await toast()!r})")
        await wait_for(lambda: re.search(r"event deleted calendar\.pessoal \S+ \d{8}T070000 THISANDFUTURE", st.fake_log()), "sent with THISANDFUTURE")

        # 5. Apagar › Toda a série
        await open_row("Natação", 1)
        await sheet.locator(".btn.danger[aria-label='Apagar']").click(); await A.wait_for_timeout(400)
        await sheet.locator(".imp-opt", has_text="Toda a série").click()
        await wait_for(lambda: days("Natação") == [], "the whole series is gone")
        check("A série toda foi apagada" in await toast(), f"toast ({await toast()!r})")
        async def none(): return await rows("Natação").count() == 0
        await wait_for(none, "nothing in the Lista")

        # 6. a plain event: Apagar asks once; Cancelar keeps it; Desfazer brings it back with the place and notes
        await open_row("Jantar com amigos", 0)
        await sheet.locator(".btn.danger[aria-label='Apagar']").click(); await A.wait_for_timeout(400)
        ct = await sheet.inner_text()
        check("Apagar “Jantar com amigos”?" in ct and "Amanhã · 20:00" in ct and "Pessoal" in ct, f"confirm says what, when and from where ({ct[:90]!r})")
        await sheet.locator(".btn.outline", has_text="Cancelar").click(); await A.wait_for_timeout(400)
        check(len(evs("Jantar com amigos")) == 1 and await a.locator(".sheet").count() == 0, "Cancelar: still there")
        await open_row("Jantar com amigos", 0)
        await sheet.locator(".btn.danger[aria-label='Apagar']").click(); await A.wait_for_timeout(300)
        old = evs("Jantar com amigos")[0]
        await sheet.locator(".btn.danger-fill", has_text="Apagar").click()
        await wait_for(lambda: evs("Jantar com amigos") == [], "deleted")
        check("Evento apagado" in await toast() and await a.locator(".toast button", has_text="Desfazer").count() == 1, "toast with Desfazer")
        await A.screenshot(path=f"{SP}/shots/crrec-undo.png")
        await a.locator(".toast button", has_text="Desfazer").click()
        await wait_for(lambda: len(evs("Jantar com amigos")) == 1, "Desfazer: back")
        back = evs("Jantar com amigos")[0]
        check((back["start"], back["end"], back.get("location"), back.get("description")) == (old["start"], old["end"], "Restaurante Lume", "Reserva no nome do Diego") and back["uid"] != old["uid"], "the same day, time, place and notes (a new event)")
        async def again(): return await rows("Jantar com amigos").count() == 1
        await wait_for(again, "and in the Lista again")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    st.stop()
summary()
