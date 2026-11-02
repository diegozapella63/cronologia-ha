# CronologIA: Editar on a calendar that can't change events (Google): deleted and created again; a repeating one restarts on the day edited; Apagar still asks which ones.
import os, sys, asyncio, datetime, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright

today = datetime.date.today()
D = lambda n: (today + datetime.timedelta(days=n)).isoformat()
T = lambda n, h, m=0: f"{D(n)}T{h:02d}:{m:02d}:00-03:00"
P = "calendar.pessoal"
st = Stack("crge", fake_env={"FAKE_NO_UPDATE": P})
def evs(name, a=-20, z=30): return st.events(P, T(a, 0), T(z, 0), name)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        async def toast(): return (await a.locator(".toast").inner_text()) if await a.locator(".toast").count() else ""
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(400)
        await a.locator(".seg.compact button", has_text="Lista").click(); await A.wait_for_timeout(900)
        rows = lambda name: a.locator(".panel.agenda .ev-row", has_text=name)

        # a plain event: Editar is there (delete + create), and it saves without asking
        cinema = evs("Cinema")[0]
        await rows("Cinema").first.click(); await A.wait_for_timeout(400)
        check(await sheet.locator(".btn", has_text="Editar").count() == 1 and await sheet.locator(".btn.danger[aria-label='Apagar']").count() == 1 and "Só leitura" not in await sheet.inner_text(), "Google: Editar and Apagar on the sheet")
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        await sheet.locator(".ev-title-input").fill("Cinema (sessão das 21h)")
        await sheet.locator("input[aria-label='Começa']").fill("21:00"); await A.wait_for_timeout(200)
        mark = len(st.fake_log())
        await sheet.locator(".btn.primary", has_text="Salvar").click()
        await wait_for(lambda: len(evs("Cinema")) == 1 and evs("Cinema")[0]["summary"] == "Cinema (sessão das 21h)", "saved")
        new = evs("Cinema")[0]
        log = st.fake_log()[mark:]
        check("event updated" not in log and log.index("event deleted calendar.pessoal " + cinema["uid"]) < log.index("event created calendar.pessoal"), "deleted first, then created (never updated)")
        check(new["uid"] != cinema["uid"] and new["start"] == T(3, 21) and new.get("location") == "Shopping Center Norte", f"a new event at 21:00, the place kept ({new['start']}, {new.get('location')})")
        check(await a.locator(".sheet .imp-opt").count() == 0 and "Evento salvo" in await toast(), f"no question asked; toast ({await toast()!r})")

        # a repeating one: the whole series starts again on the day edited
        before = evs("Corrida no parque")
        check([e["start"][:10] for e in before][:3] == [D(-2), D(5), D(12)], f"the series runs every week since 2 days ago ({[e['start'][:10] for e in before][:3]})")
        await rows("Corrida no parque").first.click(); await A.wait_for_timeout(400)
        check(D(5)[8:].lstrip("0") in await sheet.inner_text(), "the next run (in 5 days)")
        await sheet.locator(".btn", has_text="Editar").click(); await A.wait_for_timeout(400)
        check("Este evento se repete." in await sheet.inner_text(), "the form says it repeats")
        await sheet.locator(".ev-title-input").fill("Corrida no parque (5 km)")
        await sheet.locator(".btn.primary", has_text="Salvar").click(); await A.wait_for_timeout(600)
        check(await a.locator(".sheet .imp-opt").count() == 0, "no Só este / Este e os próximos: the calendar can't do it")
        await wait_for(lambda: [e["summary"] for e in evs("Corrida no parque")] and all(e["summary"] == "Corrida no parque (5 km)" for e in evs("Corrida no parque")), "the series renamed")
        after = evs("Corrida no parque")
        check([e["start"] for e in after] == [T(5, 7), T(12, 7), T(19, 7), T(26, 7)], f"weekly from the day edited, nothing before it ({[e['start'][:10] for e in after]})")
        check(after[0].get("rrule", "").startswith("FREQ=WEEKLY"), f"still repeating ({after[0].get('rrule')})")
        check("a série recomeça neste dia" in await toast(), f"toast says the series restarts ({await toast()!r})")
        check(re.search(r"event deleted calendar\.pessoal \S+  $", st.fake_log(), re.M) is not None, "the old series deleted whole (no recurrence id)")
        await A.screenshot(path=f"{SP}/shots/crge-lista.png")

        # Apagar a repeating one still asks: only today's Pilates goes
        n_pilates = await rows("Pilates").count()
        await rows("Pilates").first.click(); await A.wait_for_timeout(400)
        check("Hoje" in await sheet.inner_text(), "today's Pilates")
        await sheet.locator(".btn.danger[aria-label='Apagar']").click(); await A.wait_for_timeout(400)
        opts = [t.split("\n")[0] for t in await sheet.locator(".imp-opt").all_inner_texts()]
        check(opts == ["Só este evento", "Este e os próximos", "Toda a série"], f"Apagar asks ({opts})")
        await sheet.locator(".imp-opt", has_text="Só este evento").click()
        await wait_for(lambda: [e["start"][:10] for e in evs("Pilates", -8, 8)] == [D(-7), D(7)], "only today's Pilates deleted")
        async def gone(): return await rows("Pilates").count() == n_pilates - 1
        await wait_for(gone, "and it leaves the Lista (the next ones stay)")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    st.stop()
summary()
