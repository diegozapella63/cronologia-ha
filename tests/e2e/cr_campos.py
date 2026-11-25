# CronologIA 1.86.0: Adicionar › Tipo, Repetir, Local e Notas fecham pelo título (fechados, o escolhido ou o escrito
# depois do título); Quando › Manhã, Tarde e Noite põem a parte do dia inteira (1.86.1), junto com as durações.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
import asyncio, json, os, subprocess, time, shutil
from playwright.async_api import async_playwright
from mais_lib import open_more
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crcampos-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)]
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT))
time.sleep(1.2)
def fake_log(): return open(f"{data}/fake.log").read()

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page()
        errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        sheet = a.locator(".sheet")
        # Local e notas on (Mais › Configurações › Opções)
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Opções"); await A.wait_for_timeout(400)
        await a.locator("input[aria-label='Local e notas']").check(); await A.wait_for_timeout(500)
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)

        def field(title):
            return sheet.locator(".field.dobravel").filter(has=A.locator(".flabel", has_text=title))

        # Tipo: a title above the choices (with its icon), closes by it; closed, the chosen one after the title
        tipo = field("Tipo")
        check(await tipo.count() == 1 and await tipo.locator(".model-strip").count() == 1, "Tipo: the choices have a title that folds")
        check(await tipo.locator(":scope > .flabel > svg.lbl-ic").count() == 1, "Tipo: with its icon")
        check(not await tipo.locator(".fl-val").is_visible(), "Tipo open: the chosen one is not repeated in the title")
        await tipo.locator(":scope > .flabel").click(); await A.wait_for_timeout(250)
        check(not await tipo.locator(".model-strip").is_visible(), "Tipo closed: the choices are hidden")
        check((await tipo.locator(".fl-val").inner_text()).strip() == "· Evento", "Tipo closed: · Evento after the title")
        await A.screenshot(path=f"{SP}/shots/crcampos-tipo.png")

        # Quando › Manhã, Tarde, Noite: the whole part of the day (1.86.1), in one group with the lengths
        group = sheet.locator(".chip-row.dur .pick")
        check([t.strip() for t in await group.all_inner_texts()] == ["Manhã", "Tarde", "Noite", "15 min", "30 min", "1 h"], "Quando: Manhã, Tarde, Noite and the lengths, one group (no 2 h, 1.86.2)")
        parts = sheet.locator(".chip-row.dur .pick.part")
        tops = [round((await group.nth(k).bounding_box())["y"]) for k in range(6)]
        check(len(set(tops[:3])) == 1 and len(set(tops[3:])) == 1 and tops[3] > tops[0], f"three in a row, then three ({tops})")
        boxes = [await group.nth(k).bounding_box() for k in range(6)]
        check(all(abs(boxes[k]["x"] - boxes[k + 3]["x"]) <= 1 and abs(boxes[k]["width"] - boxes[k + 3]["width"]) <= 1 for k in range(3)), "the same width, one under the other")
        check(all(abs(b["height"] - boxes[0]["height"]) <= 1 for b in boxes), "the same height")
        # 1.86.2: Quando is the day; Horário (with Dia todo) the hours: the choices first, then from and until
        hrs = sheet.locator(".field.ev-hours")
        check(await hrs.locator(".flabel", has_text="Horário").count() == 1 and await hrs.locator("input[aria-label='Dia todo']").count() == 1, "Horário: its own title, with Dia todo")
        quando = sheet.locator(".field").filter(has=A.locator(":scope > .flabel", has_text="Quando"))
        check(await quando.locator("date-pick").count() >= 1 and await quando.locator(".time-row").count() == 0, "Quando: only the day")
        chips_y = (await hrs.locator(".chip-row.dur").bounding_box())["y"]
        row_y = (await hrs.locator(".time-row").bounding_box())["y"]
        check(chips_y < row_y and (await quando.bounding_box())["y"] < chips_y, "the parts and the lengths come before from and until, under Quando")
        times = sheet.locator(".time-row .pickf.t")
        async def hours():
            return [await times.nth(k).get_attribute("data-value") for k in range(2)]
        on = lambda: sheet.locator(".chip-row.dur .pick.on").all_inner_texts()
        for name, want in (("Manhã", ["08:00", "12:00"]), ("Tarde", ["13:00", "17:00"]), ("Noite", ["18:00", "22:00"])):
            await parts.filter(has_text=name).click(); await A.wait_for_timeout(250)
            h = await hours()
            check(h == want, f"{name}: the whole part, {want} ({h})")
            check([t.strip() for t in await on()] == [name], f"{name}: the only one marked ({await on()})")
        await group.filter(has_text="30 min").click(); await A.wait_for_timeout(250)
        h = await hours()
        check(h == ["18:00", "18:30"] and [t.strip() for t in await on()] == ["30 min"], f"30 min after Noite: from its start, only 30 min marked ({h})")
        # Dia todo: no hours, no parts
        await sheet.locator("input[aria-label='Dia todo']").check(); await A.wait_for_timeout(250)
        check(await sheet.locator(".chip-row.dur").count() == 0, "Dia todo: no Manhã, Tarde, Noite")
        await sheet.locator("input[aria-label='Dia todo']").uncheck(); await A.wait_for_timeout(250)

        # Repetir folds; closed, the chosen one
        rep = field("Repetir")
        check(await rep.count() == 1, "Repetir folds")
        await rep.locator(".seg button", has_text="Semanal").click(); await A.wait_for_timeout(200)
        await rep.locator(":scope > .flabel").click(); await A.wait_for_timeout(250)
        check(not await rep.locator(".seg").is_visible() and (await rep.locator(".fl-val").inner_text()).strip() == "· Semanal", "Repetir closed: · Semanal")

        # 1.115.0: Título, Quando and Horário fold too; closed, what is written or chosen after the title
        shut = lambda f: f.evaluate("(e) => e.classList.contains('shut')")
        val = lambda f: f.locator(":scope > .flabel, :scope > .flabel-row > .flabel").first.get_attribute("data-val")
        tit = field("Título")
        await sheet.locator(".ev-title-input").fill("Dentista do Beto")
        await tit.locator(":scope > .flabel").click(); await A.wait_for_timeout(250)
        check(await shut(tit) and not await tit.locator("textarea").is_visible(), "Título folds")
        check(await val(tit) == "Dentista do Beto", f"Título closed: the title written ({await val(tit)})")
        focus = await a.evaluate("(r) => (r.shadowRoot.activeElement || {}).tagName || ''")
        check(focus != "TEXTAREA", f"folding Título does not put the focus (the keyboard) in the box ({focus})")
        qd = field("Quando")
        await qd.locator(":scope > .flabel").click(); await A.wait_for_timeout(250)
        check(await shut(qd) and not await qd.locator("date-pick").is_visible(), "Quando folds")
        check(await val(qd) == "Hoje", f"Quando closed: · Hoje ({await val(qd)})")
        hr = sheet.locator(".field.ev-hours")
        await hr.locator(".mini-switch .track").click(); await A.wait_for_timeout(250)
        check(not await shut(hr) and await sheet.locator("input[aria-label='Dia todo']").is_checked(), "the Dia todo beside the title is the switch, it does not fold")
        await hr.locator(".mini-switch .track").click(); await A.wait_for_timeout(250)
        await hr.locator(":scope > .flabel-row > .flabel").click(); await A.wait_for_timeout(250)
        check(await shut(hr) and not await hr.locator(".time-row").is_visible() and not await hr.locator(".mini-switch").is_visible(), "Horário folds (the Dia todo goes with it)")
        hv = (await hr.locator(".fl-val").inner_text()).strip()
        check(hv == "· 18:00 até 18:30", f"Horário closed: · 18:00 até 18:30 ({hv})")
        await A.screenshot(path=f"{SP}/shots/crcampos-titulo-quando-horario.png")
        for f in (tit, qd):
            await f.locator(":scope > .flabel").click(); await A.wait_for_timeout(150)
        await hr.locator(":scope > .flabel-row > .flabel").click(); await A.wait_for_timeout(150)
        check(not await shut(tit) and not await shut(qd) and not await shut(hr), "and they open again")

        # Local and Notas fold; closed, what was written
        loc = field("Local")
        notas = field("Notas")
        check(await loc.count() == 1 and await notas.count() == 1, "Local and Notas fold")
        await loc.locator("textarea").fill("Salão de festas")
        await notas.locator("textarea").fill("Levar o bolo\nE as velas")
        await loc.locator(":scope > .flabel").click(); await A.wait_for_timeout(250)
        await notas.locator(":scope > .flabel").click(); await A.wait_for_timeout(250)
        check(not await loc.locator("textarea").is_visible() and (await loc.locator(".fl-val").inner_text()).strip() == "· Salão de festas", "Local closed: what was written")
        check(not await notas.locator("textarea").is_visible() and (await notas.locator(".fl-val").inner_text()).strip() == "· Levar o bolo", "Notas closed: its first line")
        over = await A.evaluate("() => document.documentElement.scrollWidth > innerWidth")
        check(not over, "nothing past the width")
        await A.screenshot(path=f"{SP}/shots/crcampos-fechados.png", full_page=False)

        # remembered on this device: closed when the window opens again
        await sheet.locator(".btn.outline", has_text="Cancelar").click(); await A.wait_for_timeout(300)
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        check(await field("Tipo").get_attribute("class") and "shut" in await field("Tipo").get_attribute("class"), "Tipo stays closed")
        check("shut" in await field("Local").get_attribute("class"), "Local stays closed")
        # the event is still created with what was written
        await field("Tipo").locator(":scope > .flabel").click(); await A.wait_for_timeout(200)
        await field("Local").locator(":scope > .flabel").click(); await A.wait_for_timeout(200)
        await sheet.locator(".ev-title-input").fill("Festa da Ana")
        await field("Local").locator("textarea").fill("Casa da Ana")
        await field("Local").locator(":scope > .flabel").click(); await A.wait_for_timeout(200)
        await sheet.locator(".btn.primary", has_text="Criar evento").click(); await A.wait_for_timeout(1200)
        check("Casa da Ana" in fake_log(), "created with the place written while closed")
        # a routine (another type): Tipo there too, and Observações folds
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(500)
        check("shut" not in await field("Tipo").get_attribute("class"), "Tipo open again, as it was left")
        await sheet.locator(".model", has_text="Rotina").click(); await A.wait_for_timeout(500)
        check((await field("Tipo").locator(".model.on").inner_text()).strip() == "Rotina", "Rotina: Tipo marks it")
        check(await field("Observações").count() == 1, "Rotina: Observações folds")
        # 1.104.0: Mais › Calendários › Personalizar: Cor folds by the title too
        await sheet.locator(".icon-btn[aria-label=Fechar]").click(); await A.wait_for_timeout(400)
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Calendários"); await A.wait_for_timeout(400)
        await a.locator('.tile[aria-label^="Personalizar"]').first.click(); await A.wait_for_timeout(400)
        cor = field("Cor")
        await cor.locator(":scope > .flabel").click(); await A.wait_for_timeout(200)
        check("shut" in (await cor.get_attribute("class") or "") and not await cor.locator(".swatches").is_visible(), "Personalizar: Cor closed, only the title")
        cv = await cor.locator(":scope > .flabel").get_attribute("data-val")
        check(bool(cv), f"Cor closed: the chosen color after the title ({cv})")
        await cor.locator(":scope > .flabel").click(); await A.wait_for_timeout(200)
        check(await cor.locator(".swatches").is_visible(), "and open again")
        check(not errs, f"no page errors {errs[:3]}")
        await b.close()

try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
