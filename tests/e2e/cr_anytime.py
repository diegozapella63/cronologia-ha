# CronologIA 1.17.0: Semana / Dia: "dia todo" only for events; routines and tasks without a time become a counter (Qualquer hora).
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crq-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}, "who_pick": True}}, open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", CRONOLOGIA_DEV_USER_ID="u-diego", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
ROUTINES = ["Regar as plantas", "Lavar a louça", "Limpar a caixa de areia"]
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
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Semana").click(); await pg.wait_for_timeout(1200)
        allday = await a.locator(".tgrid-allday").inner_text() if await a.locator(".tgrid-allday").count() else ""
        check(not any(r[:6] in allday for r in ROUTINES), f"Semana: no routine in dia todo ({allday[:60]!r})")
        import datetime as _dt
        in_week = (_dt.date.today().isoweekday() - 1) + 5 <= 6  # Aniversário da Ana is in 5 days; the week runs Monday to Sunday (week_start 1)
        check(("Anivers" in allday) if in_week else ("Bad" in allday or "Age" in allday), "a real all-day event stays there")
        counters = [t.strip() for t in await a.locator(".tgrid-any .tg-any").all_inner_texts()]
        check(counters and all("/" in c for c in counters), f"a counter per day ({counters})")
        await pg.screenshot(path=f"{SP}/shots/crq-semana.png")
        today = a.locator(".tgrid-any .tg-any").first
        before = (await today.inner_text()).strip()
        # the counter of today: aria says which day
        today = a.locator(".tgrid-any .tg-any[aria-label*='Hoje']")
        if not await today.count(): today = a.locator(".tgrid-any .tg-any").first
        before = (await today.inner_text()).strip()
        await today.click(); await pg.wait_for_timeout(500)
        txt = await sheet.inner_text()
        check("Qualquer hora" in txt and "Lavar a louça" in txt, "tap: the day's list opens")
        row = sheet.locator(".chore", has_text="Lavar a louça")
        check(await row.locator(".qw-btn").count() == 2, "with Marcar por outras pessoas: D and A on the row")
        await pg.screenshot(path=f"{SP}/shots/crq-sheet.png")
        await row.locator(".qw-btn[aria-label^='Andressa']").click()
        await wait_for(lambda: any(c.get("by") == "Andressa" for c in stored().get("checks", {}).values()), "one tap: done by Andressa")
        await pg.wait_for_timeout(600)
        check(await sheet.count() == 1 and await sheet.locator(".chore.done", has_text="Lavar a louça").count() == 1, "the list stays open, the routine goes to done")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(400)
        after = (await today.inner_text()).strip()
        check(int(after.split("/")[0]) == int(before.split("/")[0]) + 1, f"the counter goes up ({before} -> {after})")
        # Dia: the bar
        await a.locator(".seg button", has_text=__import__("re").compile(r"^\s*Dia\s*$")).click(); await pg.wait_for_timeout(800)
        bar = a.locator(".any-bar")
        check(await bar.count() == 1 and "Qualquer hora" in await bar.inner_text(), "Dia: the Qualquer hora bar")
        allday = await a.locator(".tgrid-allday").inner_text() if await a.locator(".tgrid-allday").count() else ""
        check(not any(r[:6] in allday for r in ROUTINES), "Dia: no routine in dia todo")
        await pg.screenshot(path=f"{SP}/shots/crq-dia.png")
        await bar.click(); await pg.wait_for_timeout(400)
        check("Qualquer hora" in await sheet.inner_text(), "the bar opens the list")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # Lista: the initials on the right of each routine of today (not on the days ahead)
        await a.locator(".seg button", has_text="Lista").click(); await pg.wait_for_timeout(1000)
        heads = a.locator(".panel.agenda .day-head")
        lines = a.locator(".panel.agenda .ev-line")
        n_lines = await lines.count()
        check(n_lines >= 1, f"Lista: rows with initials ({n_lines})")
        first_tomorrow = await pg.evaluate("""() => { const r = document.querySelector('cronologia-app').shadowRoot.querySelector('.panel.agenda');
          const kids = [...r.children]; let day = -1; const out = [];
          for (const k of kids) { if (k.classList.contains('day-head')) day++; if (k.classList.contains('ev-line')) out.push([day, k.querySelector('.kind-ic') ? k.textContent : '']); }
          return out; }""")
        later = [t for d, t in first_tomorrow if d > 0]
        check(first_tomorrow and all("Trocar o filtro" in t or "ar-condicionado" in t or "Dedetiza" in t for t in later), f"routines only on today; ahead, only maintenance (can be done early) ({[t[:30] for t in later]})")
        regar = a.locator(".panel.agenda .ev-line", has_text="Regar as plantas").first
        check(await regar.locator(".qw-btn").count() == 2, "Regar as plantas: D and A on the right")
        await pg.screenshot(path=f"{SP}/shots/crq-lista.png")
        await regar.locator(".qw-btn[aria-label^='Andressa']").click()
        await wait_for(lambda: sum(1 for c in stored().get("checks", {}).values() if c.get("by") == "Andressa") >= 2, "one tap in the list: done by Andressa")
        await pg.wait_for_timeout(500)
        check(await a.locator(".panel.agenda .ev-line", has_text="Regar as plantas").count() == 0, "done: the initials go away")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
