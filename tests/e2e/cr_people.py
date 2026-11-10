# CronologIA 1.29.0/1.32.0: people and pets are added only in Mais › Avisos; a pet gets the phone of whoever takes care of it, and stays out of chores and the placar.
# 1.54.0: no device to pick, only people: one without a phone gets theirs on the phone of a person (or Quem cuida).
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
data = f"{SP}/crp-data"; shutil.rmtree(data, ignore_errors=True); os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
procs.append(subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)); time.sleep(1.3)
def prefs(): return json.load(open(f"{data}/cronologia.json"))["app"]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2000)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        # the form: no Outra pessoa
        await a.evaluate("(el) => el._openKindForm({ kind: 'remedio' })"); await pg.wait_for_timeout(500)
        who = sheet.locator(".field", has_text="Quem toma")
        check(await who.count() == 1, "Remédio: Quem toma")
        check(await who.locator(".pick", has_text="Outra pessoa").count() == 0 and await sheet.locator(".who-input").count() == 0, "no Outra pessoa in the form")
        check("Mais › Avisos" in await who.inner_text(), "says where to add someone")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # Mais › Avisos: add someone, then who gets their alerts: Aurora
        await a.evaluate("(el) => el._go('/mais/avisos')"); await pg.wait_for_timeout(600)
        av = a.locator("#avisos")
        addb = av.locator(".add-line", has_text="Adicionar pessoa ou pet")
        check(await addb.count() == 1, "Avisos: Adicionar pessoa ou pet")
        await addb.click(); await pg.wait_for_timeout(300)
        box = av.locator(".person-add")
        check(await box.locator("input").evaluate("(e) => e === e.getRootNode().activeElement"), "the name field gets the focus")
        check(await box.locator("select").count() == 0, "no device to pick when adding")
        await box.locator("input").fill("Thor")
        await pg.screenshot(path=f"{SP}/shots/crp-add.png")
        await box.locator(".btn.primary", has_text="Adicionar").click(); await pg.wait_for_timeout(700)
        pp = prefs().get("people") or {}
        check(pp.get("Thor") == {}, f"saved ({pp})")
        row = av.locator(".person-row", has_text="Thor")
        check(await row.count() == 1 and "Só no CronologIA" in await row.inner_text(), "Thor in the list")
        opts = [o.strip() for o in await row.locator("select option").all_inner_texts()]
        check(opts == ["No celular de quem cuida", "No celular de Aurora", "No celular de Davi"], f"who gets his alerts: Quem cuida or a person ({opts})")
        await row.locator("select").select_option("Aurora"); await pg.wait_for_timeout(600)
        check((prefs().get("people") or {}).get("Thor") == {"care": "Aurora"}, f"on the phone of Aurora ({prefs().get('people')})")
        check(await row.locator("select").evaluate("(s) => s.value") == "Aurora", "his alerts: Aurora")
        check(await row.locator(".icon-btn[aria-label^='Testar']").count() == 1 and await row.locator(".icon-btn[aria-label='Tirar Thor']").count() == 1, "Testar and Tirar")
        check(await av.locator(".person-row:has(b:text-is('Aurora'))").count() == 1 and await av.locator(".person-row:has(b:text-is('Aurora'))").locator(".icon-btn[aria-label^='Tirar']").count() == 0, "a person of Home Assistant cannot be taken out")
        await pg.screenshot(path=f"{SP}/shots/crp-list.png")
        # a name already there
        await addb.click(); await pg.wait_for_timeout(200)
        await av.locator(".person-add input").fill("aurora")
        await av.locator(".person-add .btn.primary").click(); await pg.wait_for_timeout(400)
        check("já está na lista" in await a.locator(".toast").inner_text(), "the same name twice: says it")
        await av.locator(".person-add .btn", has_text="Cancelar").click(); await pg.wait_for_timeout(200)
        check(await av.locator(".person-add").count() == 0, "Cancelar closes it")
        # back to Quem cuida, it stays
        await row.locator("select").select_option(""); await pg.wait_for_timeout(600)
        check((prefs().get("people") or {}).get("Thor") == {}, f"back to Quem cuida, Thor stays ({prefs().get('people')})")
        check(await av.locator(".person-row", has_text="Thor").count() == 1, "still in the list")
        # in the form
        await a.evaluate("(el) => el._openKindForm({ kind: 'remedio' })"); await pg.wait_for_timeout(500)
        check(await sheet.locator(".field", has_text="Quem toma").locator(".pick", has_text="Thor").count() == 1, "Thor in Quem toma")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # alerts off: the people stay, without the phones
        await av.locator(".switch-row input[aria-label='Avisar no celular']").uncheck(); await pg.wait_for_timeout(600)
        check(await av.locator(".person-row", has_text="Thor").count() == 1 and await av.locator(".person-row select").count() == 0, "alerts off: the people, no phones")
        check(await av.locator(".add-line", has_text="Adicionar pessoa ou pet").count() == 1, "and Adicionar pessoa ou pet")
        await av.locator(".switch-row input[aria-label='Avisar no celular']").check(); await pg.wait_for_timeout(600)
        # Tirar
        await av.locator(".person-row", has_text="Thor").locator(".icon-btn[aria-label='Tirar Thor']").click(); await pg.wait_for_timeout(600)
        check("Thor" not in (prefs().get("people") or {}), f"Tirar: gone ({prefs().get('people')})")
        check(await av.locator(".person-row", has_text="Thor").count() == 0, "gone from the list")
        # a pet: Mel
        await addb.click(); await pg.wait_for_timeout(200)
        box = av.locator(".person-add")
        await box.locator("input").fill("Mel")
        await box.locator(".seg button", has_text="Pet").click(); await pg.wait_for_timeout(150)
        await pg.screenshot(path=f"{SP}/shots/crp-pet-add.png")
        await box.locator(".btn.primary", has_text="Adicionar").click(); await pg.wait_for_timeout(700)
        check((prefs().get("people") or {}).get("Mel") == {"pet": True}, f"Mel saved as a pet ({prefs().get('people')})")
        mel = av.locator(".person-row:has(b:text-is('Mel'))")
        check("Pet" in await mel.inner_text() and await mel.locator(".avatar svg").count() == 1, "the row says Pet, with a paw")
        check(await mel.locator(".pet-btn").get_attribute("aria-pressed") == "true", "the paw button on")
        check(await av.locator(".person-row:has(b:text-is('Aurora')) .pet-btn").count() == 0, "a person of Home Assistant cannot be a pet")
        await pg.screenshot(path=f"{SP}/shots/crp-pet.png")
        # Quem faz: no pets; Quem toma: the pet too
        await a.evaluate("(el) => el._openKindForm({ kind: 'rotina' })"); await pg.wait_for_timeout(500)
        faz = sheet.locator(".field", has_text="Quem faz")
        check(await faz.locator(".pick", has_text="Mel").count() == 0 and "Outra pessoa: adicione" in await faz.inner_text(), "Rotina › Quem faz: no pet")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        await a.evaluate("(el) => el._openKindForm({ kind: 'remedio' })"); await pg.wait_for_timeout(500)
        toma = sheet.locator(".field", has_text="Quem toma")
        check(await toma.locator(".pick", has_text="Mel").count() == 1 and await toma.locator(".pick", has_text="Mel").locator(".avatar svg").count() == 1, "Remédio › Quem toma: the pet, with a paw")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # someone already in the placar turns out to be a pet: leaves it
        await a.evaluate("(el) => el._saveAppPrefs({ people: { ...(el._app('people', null) || {}), Bob: {} } })"); await pg.wait_for_timeout(500)
        await a.evaluate("(el) => el._scorePrefs({ enabled: true, manual: true, participants: ['Aurora', 'Davi', 'Bob'] })"); await pg.wait_for_timeout(500)
        await av.locator(".person-row:has(b:text-is('Bob')) .pet-btn").click(); await pg.wait_for_timeout(800)
        app = prefs()
        check(app["people"]["Bob"].get("pet") is True and app["score"]["participants"] == ["Aurora", "Davi"], f"Bob marked as pet: out of the placar ({app['score']['participants']})")
        await a.evaluate("(el) => el._go('/mais/recompensas')"); await pg.wait_for_timeout(600)
        sc = await a.locator("#placar").inner_text() if await a.locator("#placar").count() else ""
        check("Bob" not in sc and "Mel" not in sc, "Ajustes do placar: no pets to choose")
        check(not errs, f"no page errors {errs}")
        await b.close()
try: asyncio.run(main())
finally:
    for pr in procs: pr.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
