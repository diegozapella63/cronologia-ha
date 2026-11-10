# CronologIA 1.48.0: Mais › Configurações › Placar › Lembrete diário: once a day at a time (Manhã, Tarde, Noite or
# the exact one), the points and who is ahead on the players' phones; Testar on my phone; tapping it (the
# address with ?aba=recompensas) opens the app on Recompensas.
import os, sys, asyncio, datetime
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright
from mais_lib import open_more
from pick_lib import pick_time, value

SPT = datetime.timezone(datetime.timedelta(hours=-3))
now = datetime.datetime.now(SPT)
data = {
    "app": {"week_start": 1, "score": {"enabled": True, "participants": ["Davi", "Aurora"], "period": "semana"}},
    "score": {"entries": [
        {"key": "extra|carro", "at": now.isoformat(), "who": "Davi", "points": 30, "title": "Lavou o carro", "kind": "extra"},
        {"key": "extra|faxina", "at": now.isoformat(), "who": "Aurora", "points": 20, "title": "Faxina", "kind": "extra"},
    ]},
}
st = Stack("crrm", data=data, app_env={"CRONOLOGIA_DEV_USER_ID": "u-davi"})

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="light")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await open_more(a, "Recompensas"); await A.wait_for_timeout(500)
        sw = a.locator("input[aria-label='Lembrete diário']")
        check(await sw.count() == 1 and not await sw.is_checked() and await a.locator(".remind-field").count() == 0, "Placar: Lembrete diário, off at first")
        await a.locator(".row.switch-row", has=A.locator("input[aria-label='Lembrete diário']")).locator(".switch").click(); await A.wait_for_timeout(900)
        fld = a.locator(".remind-field")
        check(st.stored()["app"]["score"].get("remind") == "20:00" and await fld.locator(".seg button.on").inner_text() == "Noite", "on: at 20:00, Noite chosen")
        await fld.locator(".seg button", has_text="Manhã").click(); await A.wait_for_timeout(700)
        check(st.stored()["app"]["score"].get("remind") == "09:00" and await value(fld.locator(".pickf.remind-time")) == "09:00", "Manhã: 09:00")
        # 1.65.0: Quem recebe, a button for each player (all of them at first), like the alerts of every app
        quem = [t.strip() for t in await fld.locator(".quem-p").all_inner_texts()]
        on = [t.strip() for t in await fld.locator(".quem-p.on").all_inner_texts()]
        check(quem == ["Davi", "Aurora"] and on == quem, f"Quem recebe: the players, all marked ({quem}, {on})")
        qb = [await fld.locator(".quem-p").nth(i).bounding_box() for i in range(2)]
        check(abs(qb[0]["width"] - qb[1]["width"]) < 1 and abs(qb[0]["y"] - qb[1]["y"]) < 1, "Quem recebe: side by side, the same size")
        await fld.locator(".quem-p", has_text="Aurora").click()
        await wait_for(lambda: st.stored()["app"]["score"].get("remind_to") == ["Davi"], "a tap takes Aurora out (saved)")
        async def one_on(): return await fld.locator(".quem-p.on").count() == 1
        await wait_for(one_on, "and the screen shows it")
        await fld.locator(".quem-p", has_text="Aurora").click()
        await wait_for(lambda: st.stored()["app"]["score"].get("remind_to") is None, "and back: everyone again")
        await fld.screenshot(path=f"{SP}/shots/crrm-field.png")
        bx = [await fld.locator(sel).bounding_box() for sel in (".pickf.remind-time", ".remind-test")]
        tt = (await fld.locator(".remind-test").inner_text()).strip()
        check(tt == "Testar no meu celular" and abs(bx[0]["width"] - bx[1]["width"]) < 1 and bx[1]["y"] >= bx[0]["y"] + bx[0]["height"], f"1.64.0: Testar no meu celular, the whole width, below the time ({tt}, {[round(x['width']) for x in bx]})")
        # Testar no meu celular (Davi's)
        await fld.locator(".remind-test").click()
        await wait_for(lambda: any(n.get("data", {}).get("tag") == "cronologia-placar-teste" for n in st.notifications()), "Testar sends it now")
        t = [n for n in st.notifications() if n.get("data", {}).get("tag") == "cronologia-placar-teste"][-1]
        check(t["service"] == "mobile_app_pixel_8" and t["title"] == "🏆 Placar" and t["message"].startswith("Davi na frente por 10 pontos: Davi 30 × Aurora 20."), f"to my phone, the points and who is ahead ({t['service']}: {t['message']})")
        # 1.54.0: the app says it by the person, never the device
        # the toast comes when the answer reaches the screen, a moment after Home Assistant gets the notification
        try:
            await a.locator(".toast").first.wait_for(timeout=5000)
        except Exception:
            pass
        toast = await a.locator(".toast").inner_text() if await a.locator(".toast").count() else ""
        check("Lembrete enviado para o seu celular." in toast and "Pixel" not in toast, f"the toast, no device ({toast!r})")
        check("Pixel" not in await fld.inner_text() and "Galaxy" not in await fld.inner_text(), "who gets it: the players by name, never a device")
        # the exact time: this minute; the server sends it to both within a round (20 s)
        # 1.63.0: the time in the app's window (24 hours, minutes of 5 in 5), no AM/PM
        await pick_time(fld.locator(".pickf.remind-time"), "21:15")
        check(st.stored()["app"]["score"].get("remind") == "21:15" and await fld.locator(".seg button.on").inner_text() == "Noite", "the exact time in the app's window: saved, Noite marked")
        # this very minute (not of 5 in 5: straight to the app), so the server sends it now
        hm = datetime.datetime.now(SPT).strftime("%H:%M")
        await a.evaluate(f"(el) => el._scorePrefs({{ remind: '{hm}' }})"); await A.wait_for_timeout(700)
        check(st.stored()["app"]["score"].get("remind") == hm and await value(fld.locator(".pickf.remind-time")) == hm, f"the exact time saved and shown ({hm})")
        await wait_for(lambda: sorted(n["service"] for n in st.notifications() if n.get("data", {}).get("tag") == "cronologia-placar-lembrete") == ["mobile_app_galaxy_s23", "mobile_app_pixel_8"], "at the time: to everyone who plays", tries=140)
        await A.wait_for_timeout(21000)
        check(len([n for n in st.notifications() if n.get("data", {}).get("tag") == "cronologia-placar-lembrete"]) == 2, "once a day")
        # tapping it: the app opens on Recompensas, and the address loses the ?aba=
        B = await ctx.new_page()
        B.on("pageerror", lambda e: errs.append(str(e)))
        await B.goto(URL + "?aba=recompensas"); await B.wait_for_timeout(1500)
        bb = B.locator("cronologia-app")
        check(await bb.evaluate("(el) => el._view().name") == "rewards" and "aba=" not in B.url, f"?aba=recompensas opens Recompensas ({B.url})")
        await B.reload(); await B.wait_for_timeout(1200)
        check(await bb.evaluate("(el) => el._view().name") == "rewards", "a reload keeps it (the history)")
        # off: the field goes away
        await a.locator(".row.switch-row", has=A.locator("input[aria-label='Lembrete diário']")).locator(".switch").click(); await A.wait_for_timeout(800)
        check(st.stored()["app"]["score"].get("remind") is None and await a.locator(".remind-field").count() == 0, "off: nothing kept, the field goes away")
        check(not errs, f"no page errors {errs}")
        await b.close()

try:
    asyncio.run(main())
finally:
    st.stop()
summary()
