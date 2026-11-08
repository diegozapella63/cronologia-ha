# CronologIA 1.24.0: Feito on any event: green in the calendar like a dose taken, out of A seguir, Desfazer.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, datetime
from zoneinfo import ZoneInfo
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/cre-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
SPZ = ZoneInfo("America/Sao_Paulo")
today = datetime.datetime.now(SPZ).date()
at = lambda h, m=0: datetime.datetime(today.year, today.month, today.day, h, m, tzinfo=SPZ)
def stored(): return json.load(open(f"{data}/cronologia.json"))
GREEN = "rgb(79, 209, 143)"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo")
        pg = await ctx.new_page()
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.clock.set_fixed_time(at(8, 0))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2000)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        hero = a.locator(".hero-ev")
        check("Pilates" in (await hero.inner_text() if await hero.count() else ""), "08:00: A seguir is Pilates")
        import re as _re
        # the late doses would take the top line: taken first
        for _ in range(6):
            late = a.locator(".dose.atrasado .dose-btn")
            if not await late.count(): break
            await late.first.click(); await pg.wait_for_timeout(900)
            if await sheet.count(): await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        st0 = await a.locator(".brand-head .status").first.inner_text()
        print("status:", st0.strip())
        n0 = int(_re.search(r"(\d+) eventos? hoje", st0).group(1))
        # the week: Pilates, today
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Semana").click(); await pg.wait_for_timeout(1200)
        blk = a.locator(".tg-col.today .tg-ev", has_text="Pilates")
        check(await blk.count() == 1 and "done" not in await blk.get_attribute("class"), "Pilates in the week, not done")
        before = await blk.evaluate("e => getComputedStyle(e).borderLeftColor")
        await blk.click(); await pg.wait_for_timeout(500)
        btn = sheet.locator(".ev-done-btn")
        check(await btn.count() == 1 and "Feito" in await btn.inner_text(), "a plain event has Feito")
        await btn.click(); await pg.wait_for_timeout(1500)
        check("Pilates: feito" in await a.locator(".toast").inner_text(), "toast: feito, with Desfazer")
        key = [k for k, v in stored()["checks"].items() if v.get("kind") == "evento"]
        check(len(key) == 1, f"saved on the server ({key})")
        check("done" in await blk.get_attribute("class"), "the block is done")
        col = await blk.evaluate("e => getComputedStyle(e).borderLeftColor")
        check(col == GREEN and before != GREEN, f"and green, like a dose taken ({before} -> {col})")
        await pg.screenshot(path=f"{SP}/shots/cre-week.png")
        await blk.click(); await pg.wait_for_timeout(500)
        st = await sheet.locator(".kind-state").inner_text() if await sheet.locator(".kind-state").count() else ""
        check(st.startswith("Feito") and "Desfazer" in st, f"opening it again: Feito, with Desfazer ({st.strip()[:40]})")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(400)
        # Agora: no longer "A seguir"; its row is done
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(700)
        st1 = await a.locator(".brand-head .status").first.inner_text()
        m1 = _re.search(r"(\d+) eventos? hoje", st1)
        check(m1 and int(m1.group(1)) == n0 - 1, f"the top line no longer counts the one done ({st0.strip()} -> {st1.strip()})")
        txt = await hero.inner_text() if await hero.count() else ""
        check("Pilates" not in txt, f"A seguir moves on ({txt.splitlines()[2] if len(txt.splitlines()) > 2 else txt[:30]})")
        row = a.locator(".panel.agenda .ev-row", has_text="Pilates")
        check(await row.count() == 1 and "done" in await row.get_attribute("class") and await row.locator(".ev-done").count() == 1, "the row of Hoje: done, with the green check")
        check(await row.evaluate("(r) => getComputedStyle(r).opacity") == "0.5", "done: faded")
        # reload: still done
        await pg.reload(); await pg.wait_for_timeout(2000)
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(1000)
        blk = a.locator(".tg-col.today .tg-ev", has_text="Pilates")
        check(await blk.count() == 1 and "done" in await blk.get_attribute("class"), "after a reload, still done")
        # Desfazer
        await blk.click(); await pg.wait_for_timeout(500)
        await sheet.locator(".kind-state .text-btn", has_text="Desfazer").click(); await pg.wait_for_timeout(1500)
        check(not [k for k, v in stored()["checks"].items() if v.get("kind") == "evento"], "Desfazer: unmarked on the server")
        check("done" not in await blk.get_attribute("class"), "and not green any more")
        if await sheet.count(): await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(400)
        # 1.57.2: only done or skipped is faded; one whose time passed, not done, stays clear
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(700)
        row = a.locator(".panel.agenda .ev-row", has_text="Pilates")
        op = await row.evaluate("(r) => { r.classList.add('past'); const o = getComputedStyle(r).opacity; r.classList.remove('past'); return o; }")
        check("done" not in await row.get_attribute("class") and op == "1", f"time passed, not done: not faded ({op})")
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(800)
        # far ahead: no Feito yet
        await a.locator(".seg button", has_text="Lista").click(); await pg.wait_for_timeout(1000)
        far = a.locator(".ev-row", has_text="Anivers").first
        check(await far.count() == 1, "an event 5 days ahead in the list")
        await far.click(); await pg.wait_for_timeout(500)
        check("Anivers" in await sheet.inner_text() and await sheet.locator(".ev-done-btn").count() == 0, "an event days ahead: no Feito yet")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
