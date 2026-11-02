# CronologIA 1.20.0: on the computer (1000 px or more), the sidebar takes the place of the bottom tabs.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, datetime
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crdk-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", CRONOLOGIA_DEV_USER_ID="u-diego", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
def stored(): return json.load(open(f"{data}/cronologia.json"))
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1200, "height": 800})
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app"); side = a.locator("aside.side")
        check(await side.is_visible() and not await a.locator("nav .tabs").is_visible(), "1200 px: sidebar, no bottom tabs")
        check([t.strip().split("\n")[0] for t in await side.locator(".side-link").all_inner_texts()] == ["Agora", "Buscar", "Calendário", "Recompensas", "Mais"], "the sections (with Buscar)")
        check(await side.locator(".side-link[aria-current='page']").inner_text() == "Agora", "Agora is the current one")
        box = await side.bounding_box(); main = await a.locator("main").bounding_box()
        check(box["x"] == 0 and abs(box["width"] - 272) < 2 and main["x"] >= 271, f"sidebar on the left, the page beside it ({box['width']}, {main['x']})")
        check(not await a.locator(".brand-head .eyebrow .brand").is_visible(), "the page header leaves the name to the sidebar")
        # sections
        await side.locator(".side-link", has_text="Recompensas").click(); await pg.wait_for_timeout(600)
        check(await a.locator(".page.rewards").count() == 1 and "Recompensas" in await side.locator(".side-link[aria-current='page']").inner_text(), "Recompensas")
        # the small month: a tap opens the day in the Calendário
        target = (datetime.date.today().replace(day=1) + datetime.timedelta(days=40)).replace(day=12)
        await side.locator(".sm-head .icon-btn[aria-label='Próximo mês']").click(); await pg.wait_for_timeout(300)
        check(target.strftime("%m") and (await side.locator(".sm-head b").inner_text()).lower().startswith(["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"][target.month - 1]), "the arrows move the small month")
        await side.locator(".sm-day:not(.out)", has_text="12").first.click(); await pg.wait_for_timeout(800)
        check(await a.locator(".cal-page").count() == 1, "a day opens the Calendário")
        check(await side.locator(".sm-day.sel").inner_text() == "12", "the day is selected in the small month")
        # the calendars: a tap hides and shows
        cal = side.locator(".side-cal", has_text="Pessoal")
        check(await cal.get_attribute("aria-checked") == "true", "Pessoal is shown")
        await cal.click()
        await wait_for(lambda: stored()["calendars"].get("calendar.pessoal", {}).get("hidden") is True, "a tap hides it (saved)")
        await pg.wait_for_timeout(400)
        check(await cal.get_attribute("aria-checked") == "false" and "de" in await side.locator(".side-h small").inner_text(), "unchecked, and the count says how many are shown")
        await cal.click()
        await wait_for(lambda: not stored()["calendars"].get("calendar.pessoal", {}).get("hidden"), "another tap shows it again")
        # turned off in Mais › Calendários: it leaves the sidebar (and stays out after a reload)
        n_before = await side.locator(".side-cal").count()
        await side.locator(".side-link", has_text="Mais").click(); await pg.wait_for_timeout(600)
        await a.locator(".cal-row", has_text="Trabalho").locator("input[role='switch']").uncheck()
        await wait_for(lambda: stored()["calendars"].get("calendar.trabalho", {}).get("hidden") is True, "Trabalho off in Mais (saved)")
        await pg.wait_for_timeout(400)
        names = [t.strip() for t in await side.locator(".side-cal").all_inner_texts()]
        check("Trabalho" not in names and len(names) == n_before - 1, f"off in Mais: not on the sidebar ({names})")
        check("de" not in await side.locator(".side-h small").inner_text(), "and the count is of the ones shown")
        await pg.reload(); await pg.wait_for_timeout(1800)
        names = [t.strip() for t in await side.locator(".side-cal").all_inner_texts()]
        check("Trabalho" not in names, "still out after a reload")
        # hidden from the sidebar itself: gone after a reload too
        await side.locator(".side-cal", has_text="Pessoal").click()
        await wait_for(lambda: stored()["calendars"].get("calendar.pessoal", {}).get("hidden") is True, "Pessoal off from the sidebar")
        await pg.reload(); await pg.wait_for_timeout(1800)
        names = [t.strip() for t in await side.locator(".side-cal").all_inner_texts()]
        check("Pessoal" not in names, f"turned off from the sidebar: gone after a reload ({names})")
        # back on in Mais
        await side.locator(".side-link", has_text="Mais").click(); await pg.wait_for_timeout(600)
        for nm, cid in (("Trabalho", "calendar.trabalho"), ("Pessoal", "calendar.pessoal")):
            await a.locator(".cal-row", has_text=nm).first.locator("input[role='switch']").check()
            await wait_for(lambda cid=cid: not stored()["calendars"].get(cid, {}).get("hidden"), f"{nm} back on")
        await pg.wait_for_timeout(400)
        names = [t.strip() for t in await side.locator(".side-cal").all_inner_texts()]
        check("Trabalho" in names and "Pessoal" in names, "back on in Mais: back on the sidebar")
        # Novo (at the top right, like the InventarIA): a window in the middle
        check(await side.locator(".side-add").count() == 0, "no Novo on the sidebar: it is at the top right")
        await a.locator(".top-acts .btn.primary", has_text="Novo").click(); await pg.wait_for_timeout(600)
        sh = await a.locator(".sheet").bounding_box()
        check(sh and sh["y"] > 10 and sh["y"] + sh["height"] < 795 and abs((sh["x"] + sh["width"] / 2) - (272 + (1200 - 272) / 2)) < 4, f"Novo opens in the middle of the page ({sh})")
        await pg.screenshot(path=f"{SP}/shots/crdk-novo.png")
        await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # Agora like the InventarIA: two columns, sections instead of cards, actions at the top right
        await side.locator(".side-link", has_text="Agora").click(); await pg.wait_for_timeout(700)
        check(await a.locator(".now-cols .now-main > *").count() >= 1 and await a.locator(".now-cols .now-side .panel.meds").count() == 1, "Agora: the day on the left, the doses on the right")
        mb = await a.locator(".now-main").bounding_box(); sb = await a.locator(".now-side").bounding_box()
        check(sb["x"] > mb["x"] + mb["width"] and abs(sb["y"] - mb["y"]) < 2, "two columns side by side")
        bg = await a.locator(".panel.meds").evaluate("e => getComputedStyle(e).backgroundColor")
        check(bg in ("rgba(0, 0, 0, 0)", "transparent"), f"sections, not cards ({bg})")
        acts = [t.strip() for t in await a.locator(".top-acts .btn").all_inner_texts()]
        check(acts[-1] == "Novo" and await a.locator(".top-acts .mic-top").count() == 1, f"top right: Falar and the actions ({acts})")
        await pg.screenshot(path=f"{SP}/shots/crdk-agora.png")
        # the phone stays the same
        await pg.set_viewport_size({"width": 390, "height": 844}); await pg.wait_for_timeout(700)
        check(await a.locator(".now-cols").count() == 0, "390 px: Agora in one column")
        order = await a.evaluate("""() => { const r = document.querySelector('cronologia-app').renderRoot; const m = r.querySelector('.panel.meds'), h = r.querySelector('.hero-ev, .panel.agenda'); return m && h ? !!(m.compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING) : null; }""")
        check(order is True or (order is None and await a.locator(".hero-ev, .panel.agenda").count() == 0), f"390 px: the doses first, as before ({order})")
        check(not await a.locator(".top-acts").first.is_visible(), "390 px: no top actions")
        check(not await side.is_visible() and await a.locator("nav .tabs").is_visible(), "390 px: no sidebar, the bottom tabs")
        m = await a.locator("main").bounding_box()
        check(m["x"] == 0, "390 px: the page uses the whole width")
        await pg.set_viewport_size({"width": 900, "height": 800}); await pg.wait_for_timeout(300)
        check(not await side.is_visible(), "900 px (tablet): still the tabs")
        check(not errs, f"no page errors {errs}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
