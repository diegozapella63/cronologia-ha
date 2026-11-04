# CronologIA 1.12.0: Mais headings like the InventarIA, and Mais › Integrações › Usar IA.
import os as _os
CRONOLOGIA = _os.environ.get("E2E_CRONOLOGIA", "")
RESOLVIA = _os.environ.get("E2E_RESOLVIA", "")
GERENCIA = _os.environ.get("E2E_GERENCIA", "")
INVENTARIA = _os.environ.get("E2E_INVENTARIA", "")
FIX = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "fixtures")
import asyncio, json, os, subprocess, time, shutil, urllib.request, urllib.error
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
data = f"{SP}/crai-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
json.dump({"app": {"score": {"enabled": True, "participants": ["Diego", "Andressa"], "period": "semana"}}}, open(f"{data}/cronologia.json", "w"))
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media"), stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share"), stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
def stored(): return json.load(open(f"{data}/cronologia.json"))
def extract():
    try:
        urllib.request.urlopen(urllib.request.Request("http://127.0.0.1:8099/api/extract", data=json.dumps({"text": "Dentista amanhã às 10h"}).encode(), method="POST", headers={"content-type": "application/json"}))
        return 200
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b"{}").get("code")
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
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, timezone_id="America/Sao_Paulo", locale="pt-BR", device_scale_factor=2, color_scheme="dark")
        A = await ctx.new_page(); errs = []
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto("http://127.0.0.1:8099/"); await A.wait_for_timeout(1500)
        a = A.locator("cronologia-app")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(400)
        heads = {}
        for tab in ["Calendários", "Avisos", "Placar", "Integrações", "Dados", "Aparência", "Opções"]:
            await open_more(a, tab, 500)
            heads[tab] = [h.strip() for h in await a.locator(".mais-head h2").all_inner_texts()]
            await A.screenshot(path=f"{SP}/shots/crai-{tab}.png")
        print(heads)
        check(all(heads[t] for t in heads), "every Mais tab opens with icon headings")
        check(heads["Dados"] == ["Exportar", "Backup na pasta share", "Importar", "Importar eventos (.ics)", "Versões anteriores", "Onde ficam os dados"], "Dados in sections")
        check(heads["Placar"][:1] == ["Ajustes do placar"] and "Deméritos" in heads["Placar"], "Placar: settings and deméritos")
        check(heads["Integrações"] == ["Contas do GerencIA", "Tarefas do ResolvIA", "Leitura por IA", "Falar", "Uso da IA", "Sensores no Home Assistant"], f"Integrações ({heads['Integrações']})")
        check(await a.locator(".mais-ic svg").count() == len(heads["Opções"]), "each heading has its icon")
        check(heads["Aparência"] == ["Tema", "Cor do app"] and heads["Opções"] == ["Novo", "Férias", "Semana"], "Aparência: Tema and Cor do app; Opções: Novo, Férias and Semana")
        # AI on by default: Novo shows the import strip
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(400)
        check(await a.locator(".sheet .imp-tile").count() == 3, "AI on: Novo has Colar mensagem, Escolher fotos, Digitalizar")
        await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(400)
        # off
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Integrações"); await A.wait_for_timeout(400)
        await a.locator("input[aria-label='Usar IA']").uncheck()
        await wait_for(lambda: stored()["app"].get("ai_off") is True, "Usar IA off saved")
        txt = await a.locator("#leitura-ia").inner_text()
        check("Desligado" in txt and "Verificar de novo" not in txt and await a.locator("#leitura-ia select").count() == 0, "off: the AI panel only shows the switch")
        await A.screenshot(path=f"{SP}/shots/crai-off.png")
        await a.locator(".tab.fab").click(); await A.wait_for_timeout(400)
        check(await a.locator(".sheet .imp-tiles").count() == 0, "off: Novo has no AI import")
        await a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click(); await A.wait_for_timeout(400)
        check(extract() == (409, "ai_off"), "off: the server refuses to read with AI")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(500)
        check(await a.locator(".mic-top:not(.chat-top):visible").count() == 0, "off: no Falar on Agora")
        await a.locator(".tab", has_text="Calendário").click(); await A.wait_for_timeout(500)
        check(await a.locator(".mic-top:not(.chat-top):visible").count() == 0, "off: no Falar on Calendário")
        await a.locator(".tab", has_text="Mais").click(); await A.wait_for_timeout(300)
        await open_more(a, "Dados"); await A.wait_for_timeout(400)
        check(await a.locator("#dados .btn", has_text="Escolher .ics").count() == 1, "off: .ics import still in Dados")
        # back on
        await open_more(a, "Integrações"); await A.wait_for_timeout(400)
        await a.locator("input[aria-label='Usar IA']").check()
        await wait_for(lambda: "ai_off" not in stored()["app"], "back on")
        check(extract() != (409, "ai_off"), "on: the server reads again")
        await a.locator(".tab", has_text="Agora").click(); await A.wait_for_timeout(800)
        check(await a.locator(".mic-top:not(.chat-top):visible").count() == 1, "on: Falar back on Agora")
        check(not errs, f"no page errors {errs}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" if not failed else f"{len(failed)} FAILED, {n_ok} passed")
