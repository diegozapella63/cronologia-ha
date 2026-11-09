# CronologIA 1.22.0: Mais › Rotinas: everything registered (routines, medicines, maintenance, bills), by section.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crc-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        # Recompensas off (1.56.0): Rotinas is a tab of the bar, in its place, and not in the menu of Mais
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        rows = [t.strip() for t in await a.locator(".menu-row b").all_inner_texts()]
        check("Rotinas" not in rows, f"the menu of Mais without Rotinas ({rows})")
        await open_more(a, "Rotinas"); await A.wait_for_timeout(600)
        route = await A.evaluate("() => document.querySelector('cronologia-app')._view()")
        check(route.get("name") == "routines", f"its own tab /rotinas ({route})")
        heads = [h.split("\n")[0].strip().upper() for h in await a.locator(".cat-sec .chores-head .overline").all_inner_texts()]
        check(heads == ["ROTINA DA CASA", "REMÉDIOS", "MANUTENÇÃO DA CASA", "CONTAS A PAGAR"], f"sections by kind ({heads})")
        check(await a.locator(".cat-sec .chores-head .sec-ic").count() == 4, "each section has its icon")
        rot = [r.split("\n")[0] for r in await a.locator("#cat-rotina .cat-row .label").all_inner_texts()]
        check({"Regar as plantas", "Tirar o lixo", "Lavar a louça"} <= set(rot), f"routines registered ({rot})")
        check(len(rot) == len(set(rot)), "each routine once (not one line per day)")
        lixo = await a.locator("#cat-rotina .cat-row", has_text="Tirar o lixo").inner_text()
        check("toda semana" in lixo and "Aurora" in lixo and "19:00" in lixo, f"how often, who and the time ({lixo.splitlines()[-1]})")
        meds = [r for r in await a.locator("#cat-remedio .cat-row .label").all_inner_texts()]
        check({"Sertralina", "Gardenal", "Mounjaro 2,5 mg"} <= set(meds) and len(meds) == len(set(meds)), f"medicines, one line each ({meds})")
        mj = await a.locator("#cat-remedio .cat-row", has_text="Mounjaro").inner_text()
        check("1 caneta" in mj and "Aurora" in mj and "toda semana" in mj, f"dose, who and how often ({mj.splitlines()[-1]})")
        man = await a.locator("#cat-manutencao .cat-row", has_text="ar-condicionado").inner_text()
        check("a cada 3 meses" in man and "venceu" in man, f"maintenance: every, and late ({man.splitlines()[-1]})")
        check(await a.locator("#cat-manutencao .cat-row", has_text="ar-condicionado").locator(".hint .late").count() == 1, "the late part in red")
        bat = await a.locator("#cat-manutencao .cat-row", has_text="bateria").inner_text()
        check("próxima" in bat and "2027" in bat, f"a far one says when ({bat.splitlines()[-1]})")
        luz = await a.locator("#cat-conta .cat-row", has_text="Conta de luz").inner_text()
        check("R$" in luz and "todo mês" in luz and "vence" in luz, f"bills: value, how often, due ({luz.splitlines()[-1]})")
        status = await a.locator(".page .status").first.inner_text()
        check("cadastros" in status, f"the header counts them ({status.strip()})")
        await A.screenshot(path=f"{SP}/shots/crc-top.png")
        # search
        box = a.locator(".cat-search input")
        await box.fill("filtro"); await A.wait_for_timeout(300)
        labels = await a.locator(".cat-row .label").all_inner_texts()
        check(labels == ["Trocar o filtro de água"] and await a.locator(".cat-sec").count() == 1, f"Buscar: only what matches, only its section ({labels})")
        await box.fill("aurora"); await A.wait_for_timeout(300)
        labels = await a.locator(".cat-row .label").all_inner_texts()
        check("Tirar o lixo" in labels and "Sertralina" in labels and "Regar as plantas" not in labels, "Buscar by person too")
        await box.fill("xyzw"); await A.wait_for_timeout(300)
        check("Nada encontrado" in await a.locator(".page").first.inner_text(), "nothing found: says so")
        await a.locator(".cat-search button[aria-label='Limpar']").click(); await A.wait_for_timeout(300)
        check(await a.locator(".cat-sec").count() == 4, "Limpar: all sections back")
        # a tap opens it
        await a.locator("#cat-rotina .cat-row", has_text="Regar as plantas").click(); await A.wait_for_timeout(600)
        sheet = a.locator(".sheet")
        check(await sheet.count() == 1 and "Regar as plantas" in await sheet.inner_text(), "a tap opens the routine")
        check(await sheet.locator("button", has_text="Editar").count() >= 1, "with Editar")
        await A.keyboard.press("Escape"); await A.wait_for_timeout(400)
        if await sheet.count(): await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(400)
        # Novo remédio from here, 2x a day: one line with both times
        await a.locator("#cat-remedio .add-line", has_text="Novo remédio").click(); await A.wait_for_timeout(600)
        check(await sheet.count() == 1 and "Remédio" in await sheet.inner_text(), "Novo remédio opens the form")
        await sheet.locator("textarea.ev-title-input").fill("Vitamina C")
        await sheet.locator(".field", has_text="Dose").locator("input").fill("1 comprimido")
        await sheet.locator(".pick", has_text="2x").click(); await A.wait_for_timeout(200)
        await sheet.locator(".btn.primary", has_text="Criar").click(); await A.wait_for_timeout(2500)
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Rotinas"); await A.wait_for_timeout(800)
        vc = a.locator("#cat-remedio .cat-row", has_text="Vitamina C")
        txt = await vc.first.inner_text() if await vc.count() else ""
        n_rows = await a.locator(".cat-row").count()
        st = (await a.locator(".page .status").first.inner_text()).strip()
        check(st.startswith(f"{n_rows} cadastros"), f"the header counts the lines ({st} / {n_rows})")
        check(await vc.count() == 1 and "08:00, 20:00" in txt, f"a medicine twice a day: one line with both times ({txt.splitlines()[-1] if txt else ''})")
        await a.locator("#cat-remedio").screenshot(path=f"{SP}/shots/crc-remedio.png")
        # reload keeps the tab
        await A.reload(); await A.wait_for_timeout(1800)
        check(await a.locator(".cat-sec").count() == 4, "reload: still on Rotinas")
        # desktop
        await A.set_viewport_size({"width": 1280, "height": 860}); await A.wait_for_timeout(600)
        await A.screenshot(path=f"{SP}/shots/crc-desk.png")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
