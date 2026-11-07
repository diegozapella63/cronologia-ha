# CronologIA 1.57.0: the boxes of choice open a sheet in the look of the app (selectsheet.js, the same file in all the
# apps), never the window of the phone: the options in rows, the current one marked in the color of the app, light
# and dark; choosing goes into the box (the app hears change as always); the Back of the phone, the X and a tap
# outside close only the sheet. The title is the name of the box (its label when it has no name of its own). On a
# computer, a card in the middle; the keyboard opens and chooses.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crss-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.3)
def prefs(): return json.load(open(f"{data}/cronologia.json"))["app"]

async def tap(pg, loc):
    await loc.scroll_into_view_if_needed()
    bx = await loc.bounding_box()
    await pg.touchscreen.tap(bx["x"] + bx["width"] / 2, bx["y"] + bx["height"] / 2)
    await pg.wait_for_timeout(450)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--lang=pt-BR"])
        for scheme in ("light", "dark"):
            ctx = await b.new_context(viewport={"width": 390, "height": 844}, color_scheme=scheme, locale="pt-BR", timezone_id="America/Sao_Paulo", device_scale_factor=2, has_touch=True, is_mobile=True)
            pg = await ctx.new_page(); errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1800)
            a = pg.locator("cronologia-app")
            await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(500)
            await a.locator('.menu-row[data-k="config"]').click(); await pg.wait_for_timeout(600)
            sel = a.locator("#falar select")
            check(await sel.evaluate("(s) => getComputedStyle(s).pointerEvents") == "none", f"{scheme}: the box never gets the tap (the window of the phone doesn't open)")
            opts = [o.strip() for o in await sel.locator("option").all_inner_texts()]
            await tap(pg, sel)
            sheet = pg.locator(".ss-wrap.in .ss-sheet")
            check(await sheet.count() == 1, f"{scheme}: a tap opens the sheet")
            check((await sheet.locator(".ss-head b").inner_text()).strip() == "Fala para texto", f"{scheme}: its title is the name of the box")
            rows = [t.strip() for t in await sheet.locator(".ss-opt").all_inner_texts()]
            check(rows == opts, f"{scheme}: the options in rows ({rows})")
            on = sheet.locator(".ss-opt.on")
            check(await on.count() == 1 and (await on.inner_text()).strip() == opts[0], f"{scheme}: the current one is marked")
            bg = await sheet.evaluate("(s) => getComputedStyle(s).backgroundColor")
            check(bg == ("rgb(23, 32, 34)" if scheme == "dark" else "rgb(255, 255, 255)"), f"{scheme}: the colors of the app's own windows ({bg})")
            accent = await sel.evaluate("(s) => getComputedStyle(s).getPropertyValue('--rv-accent').trim()")
            ck = await on.locator("svg").evaluate("(s) => getComputedStyle(s).color")
            check(accent and ck not in ("rgb(0, 0, 0)", "rgb(100, 181, 246)"), f"{scheme}: the mark in the color of the app ({accent}, {ck})")
            bx = await sheet.bounding_box()
            check(abs(bx["y"] + bx["height"] - 844) < 2 and bx["width"] >= 389, f"{scheme}: from the bottom, the width of the phone ({bx})")
            await pg.screenshot(path=f"{SP}/shots/crss-{scheme}.png")
            # choose: into the box, the app saves it
            await tap(pg, sheet.locator(".ss-opt", has_text="faster-whisper"))
            await pg.wait_for_timeout(900)
            check(await pg.locator(".ss-wrap").count() == 0, f"{scheme}: choosing closes the sheet")
            check(await sel.evaluate("(s) => s.value") == "stt.faster_whisper" and prefs().get("voice_engine") == "stt.faster_whisper", f"{scheme}: the choice goes into the box and the app saves it")
            # Back: only the sheet
            await tap(pg, sel)
            await pg.go_back(); await pg.wait_for_timeout(600)
            check(await pg.locator(".ss-wrap").count() == 0 and await a.locator(".more-tabs").count() == 1, f"{scheme}: Back closes only the sheet")
            check(prefs().get("voice_engine") == "stt.faster_whisper", f"{scheme}: Back changes nothing")
            # the X and a tap outside
            await tap(pg, sel); await tap(pg, pg.locator(".ss-x"))
            check(await pg.locator(".ss-wrap").count() == 0 and await a.locator(".more-tabs").count() == 1, f"{scheme}: the X closes it")
            await tap(pg, sel)
            await pg.touchscreen.tap(195, 60); await pg.wait_for_timeout(450)
            check(await pg.locator(".ss-wrap").count() == 0 and await a.locator(".more-tabs").count() == 1, f"{scheme}: a tap outside closes it")
            await pg.go_back(); await pg.wait_for_timeout(600)
            check(await a.locator(".more-tabs").count() == 0 and await a.locator(".menu-row").count() >= 3, f"{scheme}: then Back is the menu of Mais, as always")
            # a box with no name of its own: the label of its field
            await a.locator('.menu-row', has_text="Calendários").click(); await pg.wait_for_timeout(600)
            cal = a.locator("#novos-eventos select")
            await tap(pg, cal)
            check(await sheet.count() == 1 and (await sheet.locator(".ss-head b").inner_text()).strip() == "Calendário padrão", f"{scheme}: the title from the label of the field")
            await tap(pg, sheet.locator(".ss-opt:not(.on)").first); await pg.wait_for_timeout(900)
            check(prefs().get("default_calendar") == await cal.evaluate("(s) => s.value"), f"{scheme}: saved ({prefs().get('default_calendar')})")
            # back to automatic, for the next round
            await a.evaluate("(el) => el._go('/mais/integracoes')"); await pg.wait_for_timeout(700)
            await tap(pg, sel); await tap(pg, pg.locator(".ss-opt").first); await pg.wait_for_timeout(800)
            check(prefs().get("voice_engine") is None, f"{scheme}: automatic again")
            check(not errs, f"{scheme}: no page errors {errs}")
            await ctx.close()
        # a computer: a card in the middle; the mouse and the keyboard
        ctx = await b.new_context(viewport={"width": 1200, "height": 800}, locale="pt-BR")
        pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1800)
        a = pg.locator("cronologia-app")
        await a.evaluate("(el) => el._go('/mais/integracoes')"); await pg.wait_for_timeout(700)
        sel = a.locator("#falar select")
        await sel.scroll_into_view_if_needed()
        bx = await sel.bounding_box()
        await pg.mouse.click(bx["x"] + bx["width"] / 2, bx["y"] + bx["height"] / 2); await pg.wait_for_timeout(400)
        sheet = pg.locator(".ss-wrap.in .ss-sheet")
        sb = await sheet.bounding_box() if await sheet.count() else None
        check(sb and abs(sb["x"] + sb["width"] / 2 - 600) < 2 and abs(sb["y"] + sb["height"] / 2 - 400) < 2 and sb["width"] <= 440, f"computer: a card in the middle ({sb})")
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(500)
        check(await pg.locator(".ss-wrap").count() == 0 and await sel.evaluate("(s) => s.getRootNode().activeElement === s"), "computer: Esc closes it, the focus back on the box")
        await pg.keyboard.press("Enter"); await pg.wait_for_timeout(400)
        await pg.keyboard.press("ArrowDown"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(900)
        check(await pg.locator(".ss-wrap").count() == 0 and await sel.evaluate("(s) => s.selectedIndex") == 1 and prefs().get("voice_engine") == await sel.evaluate("(s) => s.value"), "computer: Enter opens, the arrows and Enter choose")
        check(not errs, f"computer: no page errors {errs}")
        await ctx.close()
        await b.close()

try: asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
