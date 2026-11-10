# CronologIA 1.71.0: Mais › Configurações › Opções › Atalho no celular. The path of the panel (/app/<slug>) with Copiar,
# and the steps of the Home Assistant app (Gerenciar atalhos › Atalho fixado › Painel). Outside Home Assistant there is
# no path and no card (CRONOLOGIA_HOST plays the hostname of the add-on here).
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
import asyncio, os, subprocess, time, shutil
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/cra-data"; os.makedirs(f"{SP}/shots", exist_ok=True)
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{SP}/cra-media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
time.sleep(0.6)
def start(host):
    shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
    env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
    env.pop("CRONOLOGIA_HOST", None)
    if host: env["CRONOLOGIA_HOST"] = host
    pr = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{SP}/cra_app.log", "w"), stderr=subprocess.STDOUT)
    time.sleep(1.3)
    return pr
async def opcoes(pg, w):
    more = pg.locator("nav .tab", has_text="Mais") if w < 1000 else pg.locator(".side-link", has_text="Mais")
    await more.first.click(); await pg.wait_for_timeout(400)
    await pg.locator('.menu-row[data-k="config"]').click(); await pg.wait_for_timeout(400)
    await pg.locator(".more-tabs button", has_text="Opções").click(); await pg.wait_for_timeout(400)
app = None
async def main():
    global app
    async with async_playwright() as p:
        b = await p.chromium.launch()
        app = start("a1b2c3d4-cronologia")
        for scheme, w in (("dark", 390), ("light", 320)):
            ctx = await b.new_context(viewport={"width": w, "height": 844}, device_scale_factor=2, color_scheme=scheme)
            await ctx.grant_permissions(["clipboard-read", "clipboard-write"], origin="http://127.0.0.1:8099")
            pg = await ctx.new_page()
            errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1800)
            await opcoes(pg, w)
            card = pg.locator("cronologia-app .panel.shortcut")
            check(await card.count() == 1, f"{w} px: Atalho no celular in Opções")
            txt = " ".join((await card.inner_text()).split())
            check("Atalho no celular" in txt and "abre o CronologIA direto" in txt and "Configurações › Aplicativo complementar › Gerenciar atalhos" in txt
                  and "Atalho fixado" in txt and "Painel" in txt, f"{w} px: the steps of the Home Assistant app ({txt[:160]})")
            inp = card.locator("#cr-atalho")
            check(await inp.input_value() == "/app/a1b2c3d4_cronologia", f"{w} px: the path of the panel")
            await card.scroll_into_view_if_needed()
            bi, bb = await inp.bounding_box(), await card.get_by_role("button", name="Copiar").bounding_box()
            check(bb["y"] > bi["y"] + bi["height"] - 1 and abs(bb["width"] - bi["width"]) < 2 and bb["x"] + bb["width"] <= w, f"{w} px: Copiar under the path, as wide, inside the screen")
            check(await inp.evaluate("(e) => e.scrollWidth <= e.clientWidth"), f"{w} px: the whole path in sight (not cut)")
            check(await pg.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"{w} px: nothing wider than the screen")
            await card.get_by_role("button", name="Copiar").click(); await pg.wait_for_timeout(300)
            check(await pg.evaluate("navigator.clipboard.readText()") == "/app/a1b2c3d4_cronologia", f"{w} px: Copiar puts the path in the clipboard")
            await card.screenshot(path=f"{SP}/shots/cr-atalho-{w}-{scheme}.png")
            check(not errs, f"no page errors {errs}")
            await ctx.close()
        app.kill(); app.wait()
        app = start(None)
        pg = await b.new_page(viewport={"width": 390, "height": 844})
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(1800)
        await opcoes(pg, 390)
        check(await pg.locator("cronologia-app .panel.shortcut").count() == (1 if _os.uname().nodename.endswith("-cronologia") else 0), "outside Home Assistant: no Atalho no celular")
        await b.close()
try: asyncio.run(main())
finally:
    if app: app.kill()
    fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
