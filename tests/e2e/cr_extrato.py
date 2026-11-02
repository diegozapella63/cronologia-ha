# CronologIA 1.19.0: Recompensas › Extrato: every change to the points, with who did it.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, datetime
from playwright.async_api import async_playwright
SP = _os.environ["E2E_TMP"]
REPO = CRONOLOGIA
n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
data = f"{SP}/crx-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share"); os.makedirs(f"{SP}/shots", exist_ok=True)
old_at = (datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(hours=2)).isoformat().replace("+00:00", "Z")
# data from before the Extrato: points, no log. One of them a week ago, in a period that closes when the app starts.
now_l = datetime.datetime.now()
week_ago = (datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=7)).isoformat().replace("+00:00", "Z")
d = lambda n: (now_l - datetime.timedelta(days=n)).strftime("%Y-%m-%d")
prev = {"key": d(8), "start": d(8), "end": d(1)}
old_hist = [{"key": d(15 + 7 * i), "start": d(15 + 7 * i), "end": d(8 + 7 * i), "totals": {"Diego": i, "Andressa": 0}, "winner": "Diego" if i else None, "reward": "", "delivered": False} for i in range(12)]
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana", "notify": False}, "who_pick": True,
                   "demerits": [{"id": "toalha01", "title": "Toalha molhada", "points": 5}]},
           "score": {"entries": [{"key": "extra|old1", "at": old_at, "who": "Diego", "points": 20, "title": "Lavou o carro", "kind": "extra"},
                                 {"key": "extra|old0", "at": week_ago, "who": "Andressa", "points": 30, "title": "Faxina", "kind": "extra"}],
                     "current": prev, "history": old_hist}},
          open(f"{data}/cronologia.json", "w"))
procs = [subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)]
time.sleep(0.6)
env = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", CRONOLOGIA_DEV_USER_ID="u-diego", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
def start(): return subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=env, stdout=open(f"{data}/app.log", "a"), stderr=subprocess.STDOUT)
procs.append(start())
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
def log(): return (stored().get("score") or {}).get("log") or []
def has(**kw): return any(all(l.get(k) == v for k, v in kw.items()) for l in log())
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
        A = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark")
        errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        await A.evaluate("() => { const e = document.querySelector('cronologia-app'); e._choresDoneOpen = true; e.requestUpdate(); }")  # Rotina da casa: the done ones unfolded
        a = A.locator("cronologia-app"); sheet = a.locator(".sheet")
        ext = a.locator(".panel.extrato")
        # a routine worth +10
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(300)
        await sheet.locator(".model", has_text="Rotina").click(); await A.wait_for_timeout(300)
        await sheet.locator(".ev-title-input").fill("Arrumar a cama")
        await sheet.locator(".pick", has_text="+10").click()
        await sheet.locator(".pick.list", has_text="Casa").click()
        await sheet.locator(".btn.primary", has_text="Criar rotina").click(); await A.wait_for_timeout(1500)
        row = a.locator(".panel.chores .chore", has_text="Arrumar a cama")
        await row.wait_for(timeout=8000)
        await A.evaluate("() => document.querySelector('cronologia-app').api.ready")
        # 1. Diego marks it for Andressa
        await row.locator(".qw-btn[aria-label^='Andressa']").click()
        await wait_for(lambda: has(type="ganhou", who="Andressa", by="Diego", points=10, title="Arrumar a cama"), "ganhou: Andressa, marked by Diego")
        # 2. the toast: Foi Diego (the points pass on)
        await A.wait_for_timeout(400)
        btn = a.locator(".toast button", has_text="Foi Diego")
        if await btn.count():
            await btn.click()
            await wait_for(lambda: has(type="trocou", **{"from": "Andressa"}, who="Diego", by="Diego"), "trocou: from Andressa to Diego")
        else:
            check(False, "toast Foi Diego")
        # 3. Recompensas: the × and Desfazer
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(800)
        xs = a.locator(".ext-row", has_text="Arrumar a cama").locator(".icon-btn")
        check(await xs.count() == 1, "one × for the routine (on its newest line)")
        await xs.click()
        await wait_for(lambda: has(type="tirou", who="Diego", points=-10, by="Diego"), "tirou: Diego took his own 10")
        await A.wait_for_timeout(300)
        await a.locator(".toast button", has_text="Desfazer").click()
        await wait_for(lambda: has(type="voltou", who="Diego", points=10), "voltou: Desfazer")
        # 4. a demérito for Andressa, marked by Diego
        await a.locator(".dm-btn[aria-label*='Andressa']").first.click()
        await wait_for(lambda: has(type="perdeu", who="Andressa", points=-5, by="Diego", kind="demerito"), "perdeu: demérito on Andressa by Diego")
        # 5. unchecking in Agora: Diego loses the 10
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(600)
        await a.locator(".panel.chores .chore.done", has_text="Arrumar a cama").locator(".chk").click()
        await wait_for(lambda: has(type="desmarcou", who="Diego", points=-10), "desmarcou")
        # the screen
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(800)
        await ext.scroll_into_view_if_needed()
        # closed: only the newest 5; Ver mais opens the rest
        n_all = len([l for l in log() if l["type"] != "fechou" and l.get("title") != "Faxina"])
        check(await ext.locator(".ext-row").count() == 5, f"closed: the newest 5 ({await ext.locator('.ext-row').count()})")
        vm = ext.locator(".add-line", has_text="Ver mais")
        check(await vm.count() == 1 and f"({n_all - 5})" in await vm.inner_text(), f"Ver mais ({n_all - 5}) ({await vm.inner_text() if await vm.count() else ''})")
        check(await ext.locator(".add-line", has_text="Ver menos").count() == 0, "closed: no Ver menos")
        await vm.click(); await A.wait_for_timeout(400)
        check(await ext.locator(".ext-row").count() == n_all and await vm.count() == 0, f"Ver mais: all {n_all}, no more Ver mais")
        check(await ext.locator(".add-line", has_text="Ver menos").count() == 1, "open: Ver menos")
        txt = await ext.inner_text()
        print(txt)
        check("Faxina" not in txt and "Fechou" not in txt and "venceu" not in txt, "only this period: last week's points and the close are not here")
        for s, label in [("EXTRATO DESTA SEMANA", "title"), ("Hoje", "day header"),
                         ("Andressa ganhou 10 pontos, marcado por Diego", "X ganhou, marcado por Y"),
                         ("10 pontos passaram de Andressa para Diego", "passaram de A para D"),
                         ("Diego tirou os próprios 10 pontos", "tirou os próprios"),
                         ("Diego desfez", "Desfazer shows") if False else ("10 pontos voltaram para Diego", "voltaram"),
                         ("Diego tirou 5 pontos de Andressa", "X tirou pontos de Y (demérito)"),
                         ("Demérito: Toalha molhada", "the demérito's name"),
                         ("Diego perdeu 10 pontos ao desmarcar", "desmarcou"),
                         ("Diego ganhou 20 pontos", "older points (before the Extrato) are there"),
                         ("Avulso: Lavou o carro", "avulso tag")]:
            check(s.upper() in txt.upper(), f"screen: {label} ({s})")
        check(await ext.locator(".ext-row", has_text="Arrumar a cama").locator(".icon-btn").count() == 0, "unchecked: no × left on the routine")
        check(await ext.locator(".ext-row", has_text="Toalha molhada").locator(".icon-btn[aria-label^='Cancelar o demérito']").count() == 1, "the demérito: Cancelar")
        check(await ext.locator(".ext-row", has_text="Lavou o carro").locator(".icon-btn").count() == 1, "older points have the × too")
        lines = [t.strip() for t in await ext.locator(".ext-row b").all_inner_texts()]
        check(lines[0].startswith("Diego perdeu 10"), f"newest first ({lines[0]})")
        await A.screenshot(path=f"{SP}/shots/crx-extrato.png", full_page=True)
        # 6. Ver mais: 25 avulsos → 31 lines, 20 shown
        for i in range(25):
            await A.evaluate(f"() => document.querySelector('cronologia-app').api.scoreExtra('Andressa', {i + 1}, 'Item {i + 1}')")
        await A.wait_for_timeout(1000)
        n0 = await ext.locator(".ext-row").count()
        more = ext.locator(".add-line", has_text="Ver mais")
        check(n0 == 20 and await more.count() == 1, f"20 lines and Ver mais ({n0})")
        await more.click(); await A.wait_for_timeout(800)
        n1 = await ext.locator(".ext-row").count()
        here = [l for l in log() if l["type"] != "fechou" and l.get("title") != "Faxina"]
        check(n1 == len(here) and await more.count() == 0, f"Ver mais: all {len(here)} of this period ({n1})")
        # Histórico: the last 10; a period opens its Extrato
        hist = a.locator(".panel.history .hist-row")
        check(await hist.count() == 10, f"Histórico: the last 10 ({await hist.count()})")
        check(await a.locator(".panel.history .add-line").count() == 0, "no Ver tudo")
        po = a.locator(".panel.history .hist-open").first
        check("Andressa venceu" in await po.inner_text(), f"the period that just closed ({(await po.inner_text())[:40]!r})")
        await po.click(); await A.wait_for_timeout(1000)
        st = await sheet.inner_text()
        print(st)
        check("Extrato ·" in st and "Andressa venceu" in st and "Andressa 30" in st, "sheet: the period's result")
        check("Andressa ganhou 30 pontos" in st and "Avulso: Faxina" in st and "Lavou o carro" not in st, "sheet: the period's lines only")
        check(await sheet.locator(".ext-row .icon-btn").count() == 0, "closed period: no ×")
        await A.screenshot(path=f"{SP}/shots/crx-period.png")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        await a.locator(".panel.history .hist-open").nth(3).click(); await A.wait_for_timeout(800)
        check("Nada registrado nesse período" in await sheet.inner_text(), "an old period without lines says so")
        await sheet.locator(".icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(300)
        check("Lavou o carro" in await ext.inner_text(), "the oldest is there")
        # Ver menos: back to 5, the head in sight
        less = ext.locator(".add-line", has_text="Ver menos")
        await less.scroll_into_view_if_needed(); await A.wait_for_timeout(200)
        check(await less.count() == 1, "Ver menos at the end")
        await less.click(); await A.wait_for_timeout(900)
        check(await ext.locator(".ext-row").count() == 5 and await less.count() == 0, f"Ver menos: back to 5 ({await ext.locator('.ext-row').count()})")
        top = await ext.evaluate("(el) => el.getBoundingClientRect().top")
        check(top >= -2, f"the Extrato head in sight ({top})")
        await ext.screenshot(path=f"{SP}/shots/crx-closed.png")
        check("Ver mais (" in await ext.locator(".add-line").first.inner_text(), "Ver mais again")
        await ext.locator(".add-line", has_text="Ver mais").click(); await A.wait_for_timeout(400)
        check(await ext.locator(".ext-row").count() == 20, f"opens again: 20 ({await ext.locator('.ext-row').count()})")
        await ext.locator(".ext-more").scroll_into_view_if_needed(); await A.wait_for_timeout(200)
        await A.screenshot(path=f"{SP}/shots/crx-open.png")
        # 7. survives a restart
        procs[1].kill(); time.sleep(0.5); procs[1] = start(); time.sleep(1.5)
        await A.reload(); await A.wait_for_timeout(1500)
        await a.locator(".tab", has_text="Recompensas").click(); await A.wait_for_timeout(800)
        check(await ext.locator(".ext-row").count() == 5 and "Item 25" in await ext.inner_text(), "after a restart, the same Extrato (closed)")
        check(len({l["id"] for l in log()}) == len(log()), "ids are unique")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    for pr in procs: pr.kill()
# the period close goes to the Extrato too
out = subprocess.run(["node", "--input-type=module", "-e", f"""
import {{ Store }} from '{REPO}/cronologia/rootfs/app/lib/store.js';
import fs from 'node:fs';
const dir = '{SP}/crx-store'; fs.rmSync(dir, {{ recursive: true, force: true }});
const s = new Store(dir, {{ info() {{}}, warn() {{}} }});
s.closePeriod({{ key: '2026-10-19', start: '2026-10-19', end: '2026-10-26', totals: {{ Diego: 30, Andressa: 20 }}, winner: 'Diego', reward: 'Cinema' }}, {{ key: '2026-10-26', start: '2026-10-26', end: '2026-11-02' }});
console.log(JSON.stringify(s.data.score.log.at(-1)));
process.exit(0);
"""], capture_output=True, text=True)
print(out.stdout.strip(), out.stderr.strip()[:300])
l = json.loads(out.stdout.strip().splitlines()[-1]) if out.stdout.strip() else {}
check(l.get("type") == "fechou" and l.get("winner") == "Diego" and l.get("totals") == {"Diego": 30, "Andressa": 20}, "fechou: the period close is logged")
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
