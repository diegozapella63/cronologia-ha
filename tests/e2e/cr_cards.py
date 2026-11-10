# CronologIA 1.69.0: Agora › Ordem dos cards (1.70.0: Agora ou a seguir and Hoje apart). At the end of Agora, Ordem dos cards opens a sheet with every card (also
# the ones with nothing now or with the integration off: Tarefas do ResolvIA, Contas do GerencIA, MemorIA), each with
# Subir and Descer. The Agora follows the order, it stays (saved for the person, not the device), Voltar à ordem de sempre
# undoes it, and the Voltar of the phone closes the sheet. People and things invented.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
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
data = f"{SP}/cro-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
SPZ = ZoneInfo("America/Sao_Paulo")
today = datetime.datetime.now(SPZ).date()
at = lambda h, m=0: datetime.datetime(today.year, today.month, today.day, h, m, tzinfo=SPZ)
# which card each child of the Agora page is
ORDER = """() => [...document.querySelector('cronologia-app').shadowRoot.querySelector('section.page').children].map((el) =>
  el.matches('.away-card') ? 'away' : el.matches('.home-search') ? 'search' : el.matches('.panel.meds') ? 'meds' : el.matches('.panel.bills') ? 'bills'
  : el.matches('.hero-ev') ? 'now' : el.matches('.panel.agenda') ? 'day' : el.matches('.panel.memo') ? 'memoria' : el.matches('.panel.chores') ? 'home' : el.matches('.panel.todos') ? 'todos' : null).filter(Boolean)
  .filter((x, i, a) => a.indexOf(x) === i)"""
async def open_at(b, when, scheme="dark", w=390, h=844):
    ctx = await b.new_context(viewport={"width": w, "height": h}, device_scale_factor=2, color_scheme=scheme, timezone_id="America/Sao_Paulo")
    pg = await ctx.new_page()
    await pg.clock.set_fixed_time(when)
    await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2000)
    return pg
async def sheet_rows(a):
    return [" ".join(x.split()) for x in await a.locator(".sheet .now-cards li").all_inner_texts()]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await open_at(b, at(10, 0))
        a = pg.locator("cronologia-app")
        before = await pg.evaluate(ORDER)
        check(before[:2] == ["search", "meds"] and "home" in before, f"Agora in the order of always ({before})")
        btn = a.locator("button.now-order")
        check(await btn.count() == 1 and (await btn.inner_text()).strip() == "Ordem dos cards", "at the end of Agora: Ordem dos cards")
        await btn.click()
        await pg.wait_for_timeout(400)
        rows = await sheet_rows(a)
        names = [r.split(" ")[0] for r in rows]
        check([r.split(" Sem")[0].split(" Integração")[0].split(" Só")[0].split(" Nada")[0] for r in rows] == ["Férias", "Busca", "Remédios de hoje", "Contas do GerencIA", "Agora ou a seguir", "Hoje", "MemorIA", "Rotina da casa", "Tarefas do ResolvIA"],
              f"every card, also the ones not on Agora now ({rows})")
        por = dict(zip(["away", "search", "meds", "bills", "now", "day", "memoria", "home", "todos"], rows))
        fora = [k for k in por if k not in before and k != "bills"]
        check(fora and all(por[k].split(" ", 1)[-1] in ("Só com férias marcadas", "Integração desligada", "Sem nada agora", "Nada mais hoje") or por[k].endswith(("Só com férias marcadas", "Integração desligada", "Sem nada agora", "Nada mais hoje")) for k in fora),
              f"the ones not on Agora now are there too, saying why ({[por[k] for k in fora]})")
        check(await a.locator('.sheet .now-cards li[data-card="away"] button[aria-label="Subir Férias"]').is_disabled(), "the first one can't go up")
        await pg.screenshot(path=f"{SP}/shots/cro-cards.png")
        # Rotina da casa up to the top of the cards with something (above the search and the doses)
        for _ in range(7):
            await a.locator('.sheet .now-cards button[aria-label="Subir Rotina da casa"]').click()
            await pg.wait_for_timeout(250)
        rows = await sheet_rows(a)
        check(rows[0].startswith("Rotina da casa"), f"Rotina da casa first ({rows[:3]})")
        # 1.70.0: Hoje is a card of its own, apart from Agora ou a seguir
        await a.locator('.sheet .now-cards button[aria-label="Subir Hoje"]').click()
        await pg.wait_for_timeout(250)
        rows = [r.split(" Sem")[0].split(" Nada")[0] for r in await sheet_rows(a)]
        check(rows.index("Hoje") == rows.index("Agora ou a seguir") - 1, f"Hoje above Agora ou a seguir ({rows})")
        check(await a.locator(".sheet .now-reset").count() == 1, "with an order of its own: Voltar à ordem de sempre")
        await pg.go_back()
        await pg.wait_for_timeout(400)
        check(await a.locator(".sheet").count() == 0, "the Voltar of the phone closes the sheet")
        after = await pg.evaluate(ORDER)
        check(after[0] == "home" and after.index("search") < after.index("meds"), f"Agora follows the order ({after})")
        check("now" not in after or "day" not in after or after.index("day") < after.index("now"), f"the Hoje card above the Agora ou a seguir ({after})")
        st = json.load(open(f"{data}/cronologia.json")) if os.path.exists(f"{data}/cronologia.json") else {}
        saved = (st.get("app") or {}).get("now_order") or {}
        check(len(saved) == 1 and list(saved.values())[0][0] == "home", f"saved for the person ({saved})")
        await pg.screenshot(path=f"{SP}/shots/cro-cards-agora.png")
        await pg.context.close()
        # another device of the same person: the same order
        pg = await open_at(b, at(10, 0), scheme="light", w=320, h=700)
        a = pg.locator("cronologia-app")
        check((await pg.evaluate(ORDER))[0] == "home", "on another device too")
        check(await pg.evaluate("document.documentElement.scrollWidth <= innerWidth"), "320 px: nothing wider than the screen")
        await a.locator("button.now-order").click()
        await pg.wait_for_timeout(400)
        await pg.screenshot(path=f"{SP}/shots/cro-cards-320.png")
        await a.locator(".sheet .now-reset").click()
        await pg.wait_for_timeout(500)
        rows = await sheet_rows(a)
        check(rows[0].startswith("Férias") and await a.locator(".sheet .now-reset").count() == 0, "Voltar à ordem de sempre")
        await a.locator('.sheet button[aria-label="Fechar"]').click()
        await pg.wait_for_timeout(300)
        check(await pg.evaluate(ORDER) == before, "and Agora as always")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
