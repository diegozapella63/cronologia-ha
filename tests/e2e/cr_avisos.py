# CronologIA: avisos de remédio — the pet's dose to quem cuida, the late one to the person and quem cuida, Adiar and Tomei from the phone, the sininho (testar) with its Adiar, and the Mais › Avisos settings (phone of each one, avisar de novo, quem cuida, off).
import os, sys, asyncio, datetime, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, wait_for, summary
from playwright.async_api import async_playwright
from mais_lib import open_more

st = Stack("crav", data={"app": {"alerts": {"late": 30, "caregivers": ["mobile_app_pixel_8"]}, "people": {"Mimi": {"notify": None, "pet": True}}}})
hour = datetime.datetime.now().hour
DOSES = 2 <= hour < 23  # near midnight the fake doses are kept inside today and move
def notes(pred): return [n for n in st.notifications() if pred(n)]

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        async def toast(): return (await a.locator(".toast").inner_text()) if await a.locator(".toast").count() else ""
        dose = lambda name: a.locator(".panel.meds .dose", has_text=name)
        await dose("Gardenal").wait_for(timeout=10000)

        if DOSES:
            # the pet has no phone: its dose goes to quem cuida; the late one to the person and quem cuida
            await wait_for(lambda: notes(lambda n: "Gardenal" in n.get("title", "")), "the pet's dose: an alert", tries=80)
            g = notes(lambda n: "Gardenal" in n.get("title", ""))
            check({n["service"] for n in g} == {"mobile_app_pixel_8"}, f"to quem cuida ({[n['service'] for n in g]})")
            check([x["title"] for x in g[0]["data"]["actions"]] == ["Tomei", "Adiar 15 min"] and g[0]["data"]["channel"] == "Remédios", "with Tomei and Adiar 15 min, on the Remédios channel")
            await wait_for(lambda: len(notes(lambda n: n.get("title") == "⚠️ Mounjaro 2,5 mg atrasado")) == 2, "a dose past 30 minutes: the late alert")
            late = notes(lambda n: n.get("title") == "⚠️ Mounjaro 2,5 mg atrasado")
            check(sorted(n["service"] for n in late) == ["mobile_app_galaxy_s23", "mobile_app_pixel_8"] and re.match(r"Andressa ainda não tomou o das \d\d:\d\d \(\d+ min\)\. Dose: 1 caneta\.", late[0]["message"]), f"to Andressa's phone and to quem cuida ({late[0]['message']})")
            # Adiar on the phone: not taken, comes back in 15 minutes
            tomei, adiar = [x["action"] for x in g[0]["data"]["actions"]]
            st.fire("mobile_app_notification_action", {"action": adiar})
            await wait_for(lambda: "Adiado 15 min: Gardenal" in st.app_log(), "Adiar reaches the app")
            await wait_for(lambda: any(v.get("snooze_until") for v in st.stored().get("sent", {}).values()), "the next alert is set for 15 minutes later")
            check("tomou" not in await dose("Gardenal").inner_text(), "Adiar does not mark the dose")
            # Tomei on the phone: the dose is marked on the screen, the alert leaves the phone
            st.fire("mobile_app_notification_action", {"action": tomei})
            async def taken(): return "tomou às" in await dose("Gardenal").inner_text()
            await wait_for(taken, "Tomei on the phone: marked on the screen")
            check("Mimi (celular)" in await dose("Gardenal").inner_text(), f"by the phone ({await dose('Gardenal').inner_text()!r})")
            tag = g[0]["data"]["tag"]
            await wait_for(lambda: [n["service"] for n in notes(lambda n: n.get("message") == "clear_notification" and n["data"]["tag"] == tag)] == ["mobile_app_pixel_8"], "and the alert leaves the phone that got it")
            await dose("Gardenal").screenshot(path=f"{SP}/shots/crav-dose.png")
        else:
            print("-- doses skipped near midnight")

        # Mais › Avisos
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        await open_more(a, "Avisos"); await A.wait_for_timeout(500)
        av = a.locator("#avisos")
        row = lambda name: av.locator(".person-row").filter(has=A.locator(f".grow b:text-is('{name}')"))
        check("Pessoa do Home Assistant" in await row("Andressa").inner_text() and "Pet" in await row("Mimi").inner_text(), "people and the pet")
        check(await row("Andressa").locator("select option:checked").inner_text() == "Automático: Galaxy S23" and await row("Mimi").locator("select option:checked").inner_text() == "Sem celular", "each one's phone (found by the app) and the pet without")
        check(await row("Andressa").locator(".icon-btn[aria-label='Testar aviso para Andressa']").count() == 1 and await row("Mimi").locator(".icon-btn[aria-label^='Testar']").count() == 0, "the sininho only for who has a phone")
        await A.screenshot(path=f"{SP}/shots/crav-avisos.png", full_page=True)
        # the sininho: a test like the real one; its Adiar comes back to the app
        await row("Andressa").locator(".icon-btn[aria-label='Testar aviso para Andressa']").click()
        await wait_for(lambda: notes(lambda n: n.get("title") == "💊 Teste do CronologIA" and n["service"] == "mobile_app_galaxy_s23"), "Testar: the test alert on Andressa's phone")
        # the toast comes right after the phone gets it: wait for it instead of reading at once
        for _ in range(40):
            if "Aviso de teste enviado para Galaxy S23" in await toast(): break
            await A.wait_for_timeout(100)
        t = await toast()
        check("Aviso de teste enviado para Galaxy S23" in t, f"the app says it was sent ({t!r})")
        test = notes(lambda n: n.get("title") == "💊 Teste do CronologIA")[-1]
        st.fire("mobile_app_notification_action", {"action": test["data"]["actions"][1]["action"]})
        async def adiar_back(): return "Galaxy S23: o botão Adiar chegou ao app" in await toast()
        await wait_for(adiar_back, "tapping Adiar on the test: the app says it arrived")
        await wait_for(lambda: notes(lambda n: n.get("title") == "✅ Funcionou" and "Adiar chegou" in n.get("message", "")), "and the phone gets the confirmation")
        # another phone for Andressa: the test goes there
        await row("Andressa").locator("select").select_option("mobile_app_pixel_8")
        await wait_for(lambda: st.stored()["app"]["people"].get("Andressa", {}).get("notify") == "mobile_app_pixel_8", "a phone chosen for Andressa")
        n0 = len(notes(lambda n: n.get("title") == "💊 Teste do CronologIA"))
        await A.wait_for_timeout(500)
        await row("Andressa").locator(".icon-btn[aria-label='Testar aviso para Andressa']").click()
        await wait_for(lambda: len(notes(lambda n: n.get("title") == "💊 Teste do CronologIA")) == n0 + 1 and notes(lambda n: n.get("title") == "💊 Teste do CronologIA")[-1]["service"] == "mobile_app_pixel_8", "the test goes to the phone chosen")
        await row("Andressa").locator("select").select_option("")
        await wait_for(lambda: not st.stored()["app"]["people"].get("Andressa", {}).get("notify"), "back to the automatic one")
        # Avisar de novo: 15 min, 1 hora, Não
        again = av.locator(".field", has_text="Avisar de novo se não tomar")
        check(await again.locator(".pick.on").inner_text() == "30 min", "Avisar de novo: 30 min")
        for label, n in [("15 min depois", 15), ("1 hora", 60), ("Não", 0), ("30 min", 30)]:
            await again.locator(".pick", has_text=label).click()
            await wait_for(lambda n=n: st.stored()["app"]["alerts"]["late"] == n, f"{label}: saved ({n})")
        # Quem cuida: more than one phone, or another one
        care = av.locator(".field", has_text="Quem cuida")
        check(await care.locator(".pick[aria-pressed='true']").inner_text() == "Pixel 8", "Quem cuida: Pixel 8")
        await care.locator(".pick", has_text="Galaxy S23").click()
        await wait_for(lambda: st.stored()["app"]["alerts"]["caregivers"] == ["mobile_app_pixel_8", "mobile_app_galaxy_s23"], "both phones")
        await care.locator(".pick", has_text="Pixel 8").click()
        await wait_for(lambda: st.stored()["app"]["alerts"]["caregivers"] == ["mobile_app_galaxy_s23"], "only Galaxy S23")
        check(await care.locator(".pick[aria-pressed='true']").count() == 1, "one on")
        # off: no phone alerts, the choices leave the screen
        await av.locator("input[aria-label='Avisar no celular']").uncheck()
        await wait_for(lambda: st.stored()["app"]["alerts"]["meds"] is False, "Avisar no celular off: saved")
        check(await av.locator(".icon-btn[aria-label^='Testar']").count() == 0 and await av.locator(".field", has_text="Quem cuida").count() == 0 and await av.locator(".field", has_text="Avisar de novo").count() == 0, "no sininho, no Avisar de novo, no Quem cuida")
        await av.locator("input[aria-label='Avisar no celular']").check()
        await wait_for(lambda: st.stored()["app"]["alerts"] == {"meds": True, "late": 30, "caregivers": ["mobile_app_galaxy_s23"]}, "on again, the choices kept")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    st.stop()
summary()
