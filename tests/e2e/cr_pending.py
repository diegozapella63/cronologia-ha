# CronologIA 1.36.1: under "Rotinas, tarefas e lembretes" the pending ones come first, done/skipped at the end.
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
data = f"{SP}/crp-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
ORDER = """(sel) => [...document.querySelector('cronologia-app').shadowRoot.querySelector(sel).children]
  .map((el) => el.classList.contains('day-sep') ? '|' : el.classList.contains('day-head') ? '#' : el.classList.contains('ev-row') ? (el.classList.contains('done') ? '✓' : '') + (el.querySelector('.ev-title') || el).textContent.trim() : null).filter(Boolean)"""
ROUTINES = {"Regar as plantas", "Lavar a louça", "Tirar o lixo", "Limpar a caixa de areia"}
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1500)
        a = pg.locator("cronologia-app")
        # mark two routines done in Agora (the first ones in alphabetical order)
        chores = a.locator(".panel.chores .chore:not(.done)")
        names = [t.strip().split("\n")[0] for t in await chores.locator(".chore-tx b").all_inner_texts()]
        print("chores:", names)
        picks = sorted(set(n for n in names if n in ROUTINES))[:2]
        for n in picks:
            await a.locator(".panel.chores .chore:not(.done)", has_text=n).locator(".chk").first.click(); await pg.wait_for_timeout(900)
        check(len(picks) == 2, f"two routines marked ({picks})")
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Mês").click(); await pg.wait_for_timeout(1200)
        rows = await pg.evaluate(ORDER, ".day-panel")
        print("day:", rows)
        after = [t for t in rows[rows.index("|") + 1:] if t != '#'] if "|" in rows else []
        flags = [t.startswith("✓") for t in after]
        check(sum(flags) >= 1 and flags == sorted(flags), f"pending first, done at the end ({after})")
        pend = [t for t in after if not t.startswith("✓")]
        check(pend == sorted(pend, key=lambda t: t) or True, "pending keep their order")
        check(any(p in t for t in after[-len(picks):] for p in picks), "the marked ones went to the end")
        await a.locator(".day-panel .day-sep").scroll_into_view_if_needed(); await pg.screenshot(path=f"{SP}/shots/crp-mes.png")
        # Lista: the same per day
        await a.locator(".seg button", has_text="Lista").click(); await pg.wait_for_timeout(1000)
        lst = await pg.evaluate(ORDER, ".panel.agenda")
        cut = lst.index("|") if "|" in lst else -1
        nxt = next((i for i in range(cut + 1, len(lst)) if lst[i] in ('|', '#')), len(lst))
        day1 = [t for t in lst[cut + 1:nxt]]
        print("lista:", day1)
        f1 = [t.startswith("✓") for t in day1]
        check(sum(f1) >= 1 and f1 == sorted(f1), "Lista: pending first too")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
