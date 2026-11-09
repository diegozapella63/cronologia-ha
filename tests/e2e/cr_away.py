# CronologIA 1.41.0: Modo férias. In Mais › Opções; Agora says it and hides the routines and the
# maintenance (the medicines stay); the Calendário marks the days away without their routines; Encerrar.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, datetime
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]; REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/cra-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
D = lambda n: (datetime.date.today() + datetime.timedelta(days=n)).isoformat()
JS = """const [summary, start, end, description] = process.argv.slice(1); const ws = new WebSocket('ws://127.0.0.1:8123/api/websocket'); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, type:'calendar/event/create', entity_id:'calendar.casa', event:{summary, dtstart:start, dtend:end, description}}));
 else if (m.id === 1) { console.log(JSON.stringify(m)); ws.close(); } };"""
def mk_event(summary, day, description):
    """An all-day event on calendar.casa, straight in the fake Home Assistant."""
    end = (datetime.date.fromisoformat(day) + datetime.timedelta(days=1)).isoformat()
    out = json.loads(subprocess.check_output(["node", "-e", JS, summary, day, end, description], timeout=20).decode())
    assert out.get("success"), out
async def wait_for(fn, label, tries=40):
    for _ in range(tries):
        try:
            got = fn()
            if asyncio.iscoroutine(got): got = await got
            if got: return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    check(False, label)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo")
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2500)
        a = pg.locator("cronologia-app")
        check(await a.locator(".panel.chores#casa").count() == 1, "before: Rotina da casa on Agora")
        meds_before = await a.locator(".panel.meds .dose").count()
        todos_before = await a.locator(".panel.todos#tarefas").count()
        # Mais › Férias (its own screen, 1.45)
        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(400)
        await a.locator('.menu-row[data-k="ferias"]').click(); await pg.wait_for_timeout(600)
        panel = a.locator("#ferias")
        check(await panel.count() == 1 and "Rotinas, tarefas e manutenção pausadas; remédios continuam." in await panel.inner_text() and (await a.locator(".page-title").first.inner_text()).strip() == "Férias", "Mais › Férias: its screen, saying what it does")
        check(await a.locator(".mais-head").count() == 0, "no heading repeating the title")
        await panel.locator("input[aria-label='De férias']").check(); await pg.wait_for_timeout(800)
        await wait_for(lambda: stored()["app"].get("away") == {"from": D(0), "to": D(4)}, "on: from today, 5 days")
        check(await panel.locator("input[aria-label='Férias até']").input_value() == D(4), "the dates to change")
        hint = await panel.locator(".away-cal").inner_text() if await panel.locator(".away-cal").count() else ""
        check("No Google, as rotinas saem desses dias e voltam em" in hint, f"1.59.0: says what happens in the Google calendar ({hint!r})")
        await panel.screenshot(path=f"{SP}/shots/cra-options.png")
        # Agora: the banner, no routines nor maintenance, the medicines stay
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(900)
        card = a.locator(".away-card")
        txt = (await card.text_content()) if await card.count() else ""
        title = (await card.locator(".aw-title").text_content()).strip() if await card.count() else ""
        check("De férias" in txt and title.startswith("até ") and "Remédios continuam" in txt and "Encerrar" in txt, f"Agora: the vacation card ({txt[:90]!r})")
        check((await card.locator(".aw-tx small").text_content()).strip() == "Dia 1 de 5" and await card.locator(".aw-bar[aria-valuenow='1'][aria-valuemax='5']").count() == 1, "which day of how many, with the bar")
        bg = await card.evaluate("(e) => getComputedStyle(e).backgroundImage")
        check("gradient" in bg, f"a card of its own, not the color of the day ({bg[:40]})")
        stl = await a.locator(".brand-head .status").inner_text()
        check("de férias" in stl or "atrasado" in stl, f"the status line says de férias (or a late medicine), not tudo feito hoje ({stl})")
        await card.screenshot(path=f"{SP}/shots/cra-card.png")
        check(await a.locator(".panel.chores#casa").count() == 0, "Agora: no Rotina da casa nor maintenance")
        check(await a.locator(".panel.todos#tarefas").count() == 0, f"Agora: no Tarefas either (before: {todos_before})")
        check("Rotinas, tarefas e manutenção pausadas" in txt, "the card says the tasks rest too")
        check(await a.locator(".panel.meds .dose").count() == meds_before, "Agora: the medicines stay")
        await pg.screenshot(path=f"{SP}/shots/cra-agora.png")
        # Calendário: the days away marked, without their routines
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(400)
        await a.locator(".seg button", has_text="Mês").click(); await pg.wait_for_timeout(1200)
        check("away" in (await a.locator(".cell.today").first.get_attribute("class")), "Mês: today is a day away")
        day = a.locator(".day-panel")
        check(await day.locator(".away-day").count() == 1, "the day says Férias")
        titles = [t.strip() for t in await day.locator(".ev-row .ev-title").all_inner_texts()]
        check(not any(r in t for t in titles for r in ("Regar as plantas", "Lavar a louça", "Tirar o lixo")), f"no routines that day ({titles[:6]})")
        check(any(m in t for t in titles for m in ("Sertralina", "DPrev", "Gardenal")), "the doses are there")
        await day.screenshot(path=f"{SP}/shots/cra-day.png")
        await a.locator(".month, .cells").first.screenshot(path=f"{SP}/shots/cra-month.png")
        # 1.57.3: a routine that comes back N days after done (one event, waiting for its Feito) and a maintenance
        # item due in the days away go to the day back (they used to leave the calendar); the daily ones are there
        mk_event("Trocar a água do filtro", D(2), "#rotina\nPontos: 10\nVolta: 1 dia depois de feita")
        mk_event("Limpar o ar-condicionado", D(3), "#manutencao\nA cada: 30 dias")
        async def day_titles(n):
            await a.evaluate(f"(e) => {{ const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() + {n}); e._cursor = d; e.requestUpdate(); }}")
            await pg.wait_for_timeout(900)
            return [t.strip() for t in await a.locator(".day-panel .ev-row .ev-title").all_inner_texts()]
        back = await day_titles(5)
        check(await a.locator(".day-panel .away-day").count() == 0, "the day back is no vacation day")
        check(any("Trocar a água do filtro" in t for t in back) and any("Limpar o ar-condicionado" in t for t in back), f"the day back: the routine that comes back after done and the maintenance due in the days away ({back[:8]})")
        check(any("Regar as plantas" in t for t in back) and any("Lavar a louça" in t for t in back), "the day back: the daily routines")
        await a.locator(".day-panel").screenshot(path=f"{SP}/shots/cra-back.png")
        mid = await day_titles(2)
        check(not any("Trocar a água do filtro" in t for t in mid), f"not on its day away ({mid[:6]})")
        check(not any("Trocar a água do filtro" in t for t in await day_titles(6)), "nor after the day back")
        await day_titles(0)
        # Recompensas: Para pontuar hoje says the routines are paused (not "nothing with points"); the deméritos too
        ws = """(msg) => new Promise((res) => { const ws = new WebSocket(location.origin.replace('http','ws') + '/ws'); ws.onopen = () => ws.send(JSON.stringify({id: 1, ...msg})); ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.type === 'result') { ws.close(); res(m); } }; })"""
        await pg.evaluate(ws, {"type": "cronologia/prefs/set_app", "prefs": {"score": {"enabled": True, "participants": ["Aurora", "Davi"], "period": "semana", "manual": True}, "demerits": [{"id": "toalha01", "title": "Toalha molhada na cama", "points": 5}]}})
        await pg.wait_for_timeout(1200)
        await a.locator(".tab", has_text="Recompensas").click(); await pg.wait_for_timeout(900)
        today_p = a.locator(".score-today")
        tt = (await today_p.inner_text()) if await today_p.count() else ""
        check("De férias até" in tt and "rotinas, tarefas e manutenção pausadas" in tt and "Nenhuma tarefa com pontos" not in tt and "Próximas rotinas" not in tt, f"Recompensas › Para pontuar hoje: paused by the vacation ({tt[:120]!r})")
        dm = a.locator("#demeritos")
        check(await dm.count() == 1 and "Pausados nas férias." in await dm.inner_text() and await dm.locator(".dm-btn").count() == 0, "Recompensas › Deméritos: paused, nothing to tap")
        check(await today_p.locator(".score-actions .btn").count() == 0, "1.57.2: Tarefa com pontos and Pontos avulsos hidden on vacation")
        r = await pg.evaluate(ws, {"type": "cronologia/score/demerit", "demerit": "toalha01", "who": "Davi"})
        check(r.get("success") is False and (r.get("error") or {}).get("code") == "away", f"and the server refuses a demérito on vacation ({r.get('error')})")
        await pg.screenshot(path=f"{SP}/shots/cra-rewards.png", full_page=True)
        # 1.56.3: Mais › Rotinas: a routine or maintenance is paused on vacation, not late
        await a.locator(".tab", has_text="Mais").click(); await pg.wait_for_timeout(400)
        await a.locator('.menu-row[data-k="rotinas"]').click(); await pg.wait_for_timeout(800)
        hints = [h.strip() for h in await a.locator(".cat-row .hint").all_inner_texts()]
        cat = await a.locator(".page").first.inner_text()
        check(any("pausada nas férias" in h for h in hints) and not any(w in cat for w in ("atrasada há", "atrasada ontem")), f"Rotinas: paused on vacation, nothing late ({[h for h in hints if 'férias' in h or 'atrasada' in h][:4]})")
        await pg.screenshot(path=f"{SP}/shots/cra-rotinas.png")
        # Encerrar: back to normal
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(600)
        await a.locator(".away-card .text-btn", has_text="Encerrar").click(); await pg.wait_for_timeout(1200)
        await wait_for(lambda: "away" not in stored()["app"], "Encerrar: off")
        await wait_for(lambda: a.locator(".panel.chores#casa").count(), "the routines are back on Agora")
        check(await a.locator(".away-card").count() == 0, "no banner")
        check(await a.locator(".panel.todos#tarefas").count() == todos_before, "the Tarefas are back")
        await a.locator(".tab", has_text="Recompensas").click(); await pg.wait_for_timeout(700)
        check(await a.locator("#demeritos .dm-btn").count() == 2 and "De férias" not in await a.locator(".score-today").inner_text(), "after it: the deméritos are back")
        check(await a.locator(".score-today .score-actions .btn").count() == 2 and not await a.locator(".score-today .score-actions .btn").first.is_disabled(), "and the buttons are back")
        await a.locator(".tab", has_text="Agora").click(); await pg.wait_for_timeout(500)
        # ahead: Agora says when it starts, today as usual
        await pg.evaluate("""(away) => new Promise((res) => { const ws = new WebSocket(location.origin.replace('http','ws') + '/ws'); ws.onopen = () => ws.send(JSON.stringify({id: 1, type: 'cronologia/prefs/set_app', prefs: {away}})); ws.onmessage = (e) => { if (JSON.parse(e.data).type === 'result') { ws.close(); res(); } }; })""", {"from": D(3), "to": D(6)})
        await pg.wait_for_timeout(1500)
        txt = (await a.locator(".away-card").text_content()) if await a.locator(".away-card").count() else ""
        check("Férias marcadas" in txt and "a partir de" in txt and "4 dias, até" in txt and "Cancelar" in txt and await a.locator(".away-card .aw-bar").count() == 0, f"ahead: when it starts, for how long, with Cancelar ({txt[:80]!r})")
        check(await a.locator(".panel.chores#casa").count() == 1, "ahead: today as usual")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
