"""One height, the same in every app of the family (50 px): the buttons, the fields, the boxes of choice and the choices
in buttons (the tabs of Configurações, Tema, Semana, the dates) in the four tabs of Configurações and in Adicionar (each model), on the
phone (390 and 320 px) and on the computer. Out of it: the buttons with only an icon, the tiles of the AI, the rows of
the lists, the switches and the colors. On the preview (no server), with its invented house."""
import os as _os
import asyncio
from playwright.async_api import async_playwright

SP = _os.environ.get("E2E_TMP", "/tmp")
ROOT = _os.path.dirname(_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))))
URL = "file://" + _os.path.join(ROOT, "preview", "cronologia-preview.html")
H = 50
CONTROLS = ".btn, .select, .seg:not(.seg-grid), .pick, .model, .pickf:not(.sm), .dose-btn, .field input[type=text], .search-box, .money, .owner-pick button"
MEASURE = """(sel) => { const out = [];
  const walk = (root) => { root.querySelectorAll(sel).forEach((e) => { const r = e.getBoundingClientRect();
      if (r.width > 4 && e.offsetHeight && getComputedStyle(e).visibility !== 'hidden' && !e.closest('.imp-tiles, .rv-when, .time-pill') && !(e.tagName === 'INPUT' && e.closest('.money'))) out.push([e.offsetHeight, e.className + ' ' + (e.textContent || e.placeholder || '').replace(/\\s+/g, ' ').trim().slice(0, 30)]); });
    root.querySelectorAll('*').forEach((e) => e.shadowRoot && walk(e.shadowRoot)); };
  walk(document); return out; }"""

passed, failed = 0, []


def check(cond, label):
    global passed
    if cond:
        passed += 1
        print("PASS", label)
    else:
        failed.append(label)
        print("FAIL", label)


async def off(pg, where, empty=False):
    hs = await pg.evaluate(MEASURE, CONTROLS)
    bad = [x for x in hs if x[0] != H]
    check((hs or empty) and not bad, f"{where}: {len(hs)} controls, all {H} px {bad[:4]}")


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for w, h in ((390, 844), (320, 700), (1280, 860)):
            pg = await b.new_page(viewport={"width": w, "height": h})
            await pg.goto(URL)
            await pg.wait_for_timeout(1200)
            more = pg.locator("nav .tab", has_text="Mais") if w < 1000 else pg.locator(".side-link", has_text="Mais")
            await more.first.click()
            await pg.wait_for_timeout(400)
            await pg.locator('.menu-row[data-k="config"]').click()
            await pg.wait_for_timeout(400)
            for tab in ("Integrações", "Dados", "Aparência", "Opções"):
                await pg.locator(".more-tabs button", has_text=tab).click()
                await pg.wait_for_timeout(400)
                await off(pg, f"{w} px › {tab}")
            await pg.screenshot(path=f"{SP}/shots/cr_heights-{w}.png")
            if w < 1000:
                await pg.locator(".tab.fab").click()
                await pg.wait_for_timeout(700)
                for m in [t.strip() for t in await pg.locator(".sheet .model").all_inner_texts()]:
                    await pg.locator(".sheet .model", has_text=m).first.click()
                    await pg.wait_for_timeout(500)
                    await off(pg, f"{w} px › Adicionar › {m}")
            await pg.close()
        await b.close()
    print(f"\n{passed} passed, {len(failed)} failed")
    if failed:
        raise SystemExit(1)


asyncio.run(main())
