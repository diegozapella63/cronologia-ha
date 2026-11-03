# CronologIA 1.33.0/1.34.0: the rooms and equipment of the ResolvIA (Cômodos do InventarIA) in Novo › Tarefa and on the tasks.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, tempfile, urllib.request, datetime
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = tempfile.mkdtemp(prefix="crr-", dir=SP)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share/resolvia")
def presence(rooms=True):
    j = {"app": "ResolvIA", "versao": "2.28.0", "gravado_em": datetime.datetime.now(datetime.timezone.utc).isoformat().replace("+00:00", "Z"), "sem_prazo": [], "pontos": {}}
    if rooms:
        j["comodos"] = {"lista": [{"id": "cozinha", "nome": "Cozinha"}, {"id": "garagem", "nome": "Garagem"}], "tarefas": {"todo.casa": {"levar o carro na revisao": "garagem"}}}
        j["equipamentos"] = {"lista": [{"id": "gar-001", "nome": "Carro", "comodo": "Garagem"}, {"id": "coz-001", "nome": "Fogão", "comodo": "Cozinha"}], "tarefas": {"todo.casa": {"levar o carro na revisao": "gar-001"}}}
    json.dump(j, open(f"{data}/share/resolvia/integracao.json", "w"))
presence()
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share"), stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.3)
def fake_log(): return open(f"{data}/fake.log").read()
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            if fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2200)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        # the task with a room: on Agora and in its sheet
        await a.locator(".panel.todos .add-line", has_text="Mais").click() if await a.locator(".panel.todos .add-line", has_text="Mais").count() else None
        await pg.wait_for_timeout(300)
        row = a.locator(".panel.todos .chore", has_text="Levar o carro na revisão")
        check(await row.count() == 1 and "Garagem" in await row.inner_text() and "Carro" in await row.inner_text(), f"Agora: the task shows its equipment and room ({(await row.inner_text()).strip()[:80] if await row.count() else ''})")
        await row.locator(".chore-tx").click(); await pg.wait_for_timeout(400)
        check("Garagem" in await sheet.inner_text() and "Carro" in await sheet.inner_text(), "and its sheet")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # Novo › Tarefa: Cômodo
        await a.evaluate("(el) => el._openTodoForm ? el._openTodoForm() : el._openKindForm({ kind: 'tarefa' })"); await pg.wait_for_timeout(500)
        if await sheet.locator(".flabel", has_text="Lista do ResolvIA").count() == 0:
            await sheet.locator(".pick", has_text="Tarefa").first.click(); await pg.wait_for_timeout(400)
        field = sheet.locator(".field:has(.flabel:text-is('Cômodo'))")
        check(await field.count() == 1 and "Cozinha" in await field.inner_text() and "Garagem" in await field.inner_text(), "Novo › Tarefa: Cômodo with the rooms of the ResolvIA")
        await sheet.locator(".ev-title-input").fill("Limpar o forno")
        eq = sheet.locator(".field:has(.flabel:text-is('Equipamento')), .field:has(.flabel:text-is('Equipamentos'))")
        check(await eq.locator("input[aria-label='Buscar equipamento']").count() == 1, "Novo › Tarefa: Equipamento with a search")
        await eq.locator("input").fill("fog"); await pg.wait_for_timeout(200)
        await eq.locator(".eq-row", has_text="Fogão").click(); await pg.wait_for_timeout(200)
        check(await field.locator(".pick.on", has_text="Cozinha").count() == 1, "picking the stove fills the room")
        check(await field.locator(".pick[disabled]").count() >= 2 and "Vem do equipamento." in await field.inner_text(), "and the room is locked (it comes from the equipment)")
        # ResolvIA 2.31: several equipments, so several rooms
        await eq.locator(".eq-add", has_text="Outro equipamento").click(); await pg.wait_for_timeout(200)
        await eq.locator("input").fill("car"); await pg.wait_for_timeout(200)
        await eq.locator(".eq-row", has_text="Carro").click(); await pg.wait_for_timeout(200)
        rooms_f = sheet.locator(".field:has(.flabel:text-is('Cômodos'))")
        on = sorted(t.strip() for t in await rooms_f.locator(".pick.on").all_inner_texts())
        check(await eq.locator(".eq-sel").count() == 2 and on == ["Cozinha", "Garagem"], f"two equipments, both rooms ({on})")
        await pg.screenshot(path=f"{data}/form.png")
        await sheet.locator(".btn.primary", has_text="Criar tarefa").click(); await pg.wait_for_timeout(1200)
        check("resolvia_comodo" in fake_log() and '"equipamento":["coz-001","gar-001"]' in fake_log(), "the equipments go to the ResolvIA (resolvia_comodo), which takes the rooms from them")
        # Manutenção: Cômodo and Equipamento too, kept in the event (by name)
        await a.evaluate("(el) => el._openKindForm({ kind: 'manutencao' })"); await pg.wait_for_timeout(500)
        mfield = sheet.locator(".field:has(.flabel:text-is('Cômodo'))")
        meq = sheet.locator(".field:has(.flabel:text-is('Equipamento'))")
        check(await mfield.count() == 1 and await meq.count() == 1, "Manutenção: Cômodo and Equipamento")
        await sheet.locator(".ev-title-input").fill("Limpar o filtro do exaustor")
        await meq.locator("input").fill("fog"); await pg.wait_for_timeout(200)
        await meq.locator(".eq-row", has_text="Fogão").click(); await pg.wait_for_timeout(200)
        check(await mfield.locator(".pick.on", has_text="Cozinha").count() == 1, "the equipment brings its room")
        await sheet.screenshot(path=f"{data}/maint-form.png")
        await sheet.locator(".btn.primary", has_text="Criar manutenção").click(); await pg.wait_for_timeout(1500)
        m = await a.evaluate("(el) => (el._ix().maint || []).find((x) => x.summary === 'Limpar o filtro do exaustor')")
        check(m and m.get("room") == "Cozinha" and m.get("equip") == "Fogão", f"saved with the room and the equipment ({m and (m.get('room'), m.get('equip'))})")
        await a.evaluate("(el) => el._openSheet('maint', {})"); await pg.wait_for_timeout(400)
        row = sheet.locator(".maint", has_text="Limpar o filtro do exaustor")
        check("Fogão" in await row.inner_text(), "Manutenção da casa: the row shows the equipment")
        await row.locator(".maint-main").click(); await pg.wait_for_timeout(500)
        check("Fogão (Cozinha)" in await sheet.inner_text(), "its sheet: Fogão (Cozinha)")
        await sheet.screenshot(path=f"{data}/maint-sheet.png")
        await a.evaluate("(el) => { const m = el._ix().maint.find((x) => x.summary === 'Limpar o filtro do exaustor'); const e = el._findEvent ? null : null; }")
        edit_btn = sheet.locator(".btn, .icon-btn", has_text="Editar")
        if await edit_btn.count():
            await edit_btn.first.click(); await pg.wait_for_timeout(500)
            check(await sheet.locator(".field:has(.flabel:text-is('Cômodo')) .pick.on", has_text="Cozinha").count() == 1 and "Fogão" in await sheet.locator(".eq-sel").inner_text(), "editing: the room and the equipment come back")
        else:
            check(False, "an Editar button on the maintenance sheet")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await pg.wait_for_timeout(300)
        # the ResolvIA without rooms: no field
        # (the CronologIA reads the ResolvIA file at most once a minute: restart it to see the change now)
        global app
        presence(False); app.kill(); time.sleep(0.5)
        app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share"), stdout=open(f"{data}/app2.log", "w"), stderr=subprocess.STDOUT)
        time.sleep(1.5)
        await pg.reload(); await pg.wait_for_timeout(2200)
        await a.evaluate("(el) => el._openTodoForm ? el._openTodoForm() : el._openKindForm({ kind: 'tarefa' })"); await pg.wait_for_timeout(500)
        if await sheet.locator(".flabel", has_text="Lista do ResolvIA").count() == 0:
            await sheet.locator(".pick", has_text="Tarefa").first.click(); await pg.wait_for_timeout(400)
        check(await sheet.locator(".field:has(.flabel:text-is('Cômodo'))").count() == 0 and await sheet.locator("input[aria-label='Buscar equipamento']").count() == 0, "off in the ResolvIA: no Cômodo nor Equipamento")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try: asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
