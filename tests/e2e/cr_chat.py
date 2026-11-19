# CronologIA 1.40.0: Conversa, the chat with the AI beside the microphone: the screen, today's routines and
# doses, actions after a tap (an event, a routine done, a dose taken), the microphone, Usar IA off.
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
data = f"{SP}/crh-data"; shutil.rmtree(data, ignore_errors=True)
os.makedirs(f"{data}/media"); os.makedirs(f"{data}/share")
env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{data}/media", FAKE_STT_TEXT="O que tenho amanhã?")
fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{data}/fake.log", "w"), stderr=subprocess.STDOUT)
time.sleep(0.6)
aenv = dict(os.environ, TZ="America/Sao_Paulo", CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL="ws://127.0.0.1:8123/api/websocket", HA_REST_URL="http://127.0.0.1:8123/api", HA_TOKEN="dev", DATA_DIR=data, MEDIA_DIR=f"{data}/media", SHARE_DIR=f"{data}/share")
app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{data}/app.log", "w"), stderr=subprocess.STDOUT)
time.sleep(1.2)
def fake_log(): return open(f"{data}/fake.log").read()
def stored(): return json.load(open(f"{data}/cronologia.json"))
D = lambda n: (datetime.date.today() + datetime.timedelta(days=n)).isoformat()
WS = """(msgs) => new Promise((res) => { const ws = new WebSocket(location.origin.replace('http','ws') + '/ws'); let n = 0; ws.onopen = () => msgs.forEach((m, k) => ws.send(JSON.stringify({id: k + 1, ...m}))); ws.onmessage = (e) => { if (JSON.parse(e.data).type === 'result' && ++n === msgs.length) { ws.close(); res(); } }; })"""
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
        b = await p.chromium.launch(args=["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"])
        pg = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo")
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://127.0.0.1:8099/"); await pg.wait_for_timeout(2500)
        a = pg.locator("cronologia-app"); sheet = a.locator(".sheet")
        btn = a.locator(".chat-top").first
        check(await btn.count() == 1 and await btn.get_attribute("aria-label") == "Conversar com a IA", "Agora: Conversar com a IA beside the microphone")
        await a.locator(".brand-head").first.screenshot(path=f"{SP}/shots/crh-head.png")
        # 1.97.0: Ctrl+Espaço abre a Conversa e, aberta, fecha
        await pg.keyboard.press("Control+Space"); await pg.wait_for_timeout(400)
        check(await sheet.locator(".chat").count() == 1, "Ctrl+Espaço abre a Conversa")
        await pg.keyboard.press("Control+Space"); await pg.wait_for_timeout(500)
        check(await sheet.locator(".chat").count() == 0, "Ctrl+Espaço de novo fecha")
        await btn.click(); await pg.wait_for_timeout(400)
        chat = sheet.locator(".chat")
        ex = [t.strip() for t in await chat.locator(".chat-ex .pick").all_inner_texts()]
        check(await chat.count() == 1 and "O que tenho hoje?" in ex, f"the chat opens empty, with examples ({ex})")
        await pg.screenshot(path=f"{SP}/shots/crh-empty.png")
        async def answered(n): return await chat.locator(".chat-msg.ia .chat-bubble:not(.typing)").count() >= n
        await chat.locator(".chat-ex .pick", has_text="O que tenho hoje?").click()
        await wait_for(lambda: answered(1), "the AI answers")
        ia = await chat.locator(".chat-msg.ia .chat-bubble").last.inner_text()
        check(ia.startswith("Hoje:") and ("Regar as plantas" in ia or "Lavar a louça" in ia), f"it knows today's routines ({ia!r})")
        box = chat.locator("textarea")
        # a routine: a card, nothing before the tap
        await box.fill("fiz Lavar a louça"); await box.press("Enter")
        await wait_for(lambda: answered(2), "the AI proposes to mark it")
        card = chat.locator(".chat-act").last
        check('"Lavar a louça" feita' in await card.inner_text(), f"a card to mark the routine ({(await card.inner_text())[:60]!r})")
        before = len(stored().get("checks", {}))
        await card.locator("button", has_text="Fazer").click()
        async def marked(): return "done" in (await card.get_attribute("class") or "")
        await wait_for(marked, "done after the tap")
        await wait_for(lambda: len(stored().get("checks", {})) > before and any("lav" in k.lower() or v.get("kind") == "rotina" for k, v in stored().get("checks", {}).items()), "the routine is marked in the app")
        # an event: in the calendar of Novo, after the tap
        await box.fill(f"marca Reunião da escola dia {D(2)} às 19:00"); await box.press("Enter")
        await wait_for(lambda: answered(3), "the AI proposes an event")
        card = chat.locator(".chat-act").last
        dd = f"{D(2)[8:10]}/{D(2)[5:7]}"
        check(f'Marcar "Reunião da escola" · {dd} às 19:00' in await card.inner_text(), f"a card for the event ({(await card.inner_text())[:70]!r})")
        check("Reunião da escola" not in fake_log().split("fake AI chat")[-1].split("\n", 1)[-1], "nothing created before the tap")
        await pg.screenshot(path=f"{SP}/shots/crh-acts.png")
        await card.locator("button", has_text="Fazer").click()
        await wait_for(marked, "the event is created")
        # a dose
        await box.fill("tomei Sertralina"); await box.press("Enter")
        await wait_for(lambda: answered(4), "the AI proposes the dose")
        card = chat.locator(".chat-act").last
        txt = await card.inner_text() if await card.count() else ""
        check('Tomei "Sertralina' in txt, f"a card for the dose ({txt[:60]!r})")
        if 'Tomei "' in txt:
            await card.locator("button", has_text="Fazer").click()
            await wait_for(marked, "the dose is marked")
        # the microphone: what is heard is sent
        await chat.locator(".chat-mic").click(); await pg.wait_for_timeout(1800)
        check("on" in (await chat.locator(".chat-mic").get_attribute("class")), "the microphone listens")
        await chat.locator(".chat-mic").click()
        await wait_for(lambda: answered(5), "what was heard goes to the AI")
        me = await chat.locator(".chat-msg.me .chat-bubble").last.inner_text()
        check("O que tenho amanhã?" in me, f"the words heard as the person's message ({me!r})")
        await sheet.locator(".chat-head .icon-btn[aria-label='Fechar']").click(); await pg.wait_for_timeout(300)
        # in the Calendário: the screen goes along, the conversation is kept
        await a.locator(".tab", has_text="Calendário").click(); await pg.wait_for_timeout(600)
        await a.locator(".chat-top").first.click(); await pg.wait_for_timeout(400)
        check(await chat.locator(".chat-msg").count() >= 8, "the conversation is kept when it opens again")
        await box.fill("oi"); await box.press("Enter")
        await wait_for(lambda: answered(6), "Enter sends")
        ia = await chat.locator(".chat-msg.ia .chat-bubble").last.inner_text()
        check("tela: Calendário" in ia, f"the AI knows the screen ({ia!r})")
        # 1.83.0: Perguntas prontas at any moment (the sparkles by the box), with Editar perguntas
        await chat.locator(".chat-qbtn").click(); await pg.wait_for_timeout(250)
        qk = [t.strip() for t in await chat.locator(".chat-quick .chat-ex .pick").all_inner_texts()]
        check(len(qk) >= 1 and await chat.locator(".chat-quick .chat-ed-open").count() == 1, f"Perguntas prontas at any moment, with Editar perguntas ({qk})")
        await chat.locator(".chat-quick .chat-ed-open").click(); await pg.wait_for_timeout(250)
        mods = [t.strip() for t in await chat.locator(".chat-ed-modelo").all_inner_texts()]
        check(len(qk) == 6 and len(mods) == 20 and not set(mods) & set(qk), f"1.102.0: 6 ready questions and 20 more models in Editar perguntas ({len(qk)}, {len(mods)})")
        await chat.locator(".chat-ed-modelo").first.click(); await pg.wait_for_timeout(150)
        check(await chat.locator(".chat-ed-modelo").count() == 19, "a tap on a model puts it in the list")
        # 1.104.0: a tap on a question changes it; the two titles fold
        txt = chat.locator(".chat-ed > .chat-ed-row:not(.chat-ed-modelo) > .chat-ed-txt").first
        await txt.fill("Pergunta mudada?"); await txt.press("Enter"); await pg.wait_for_timeout(100)
        check(await txt.input_value() == "Pergunta mudada?", "a question changed in place")
        await chat.locator('.chat-ed-dobra[data-dobra="mais"]').click(); await pg.wait_for_timeout(150)
        check(await chat.locator(".chat-ed-modelo").count() == 0, "Mais perguntas closes by the title")
        await chat.locator('.chat-ed-dobra[data-dobra="mais"]').click(); await pg.wait_for_timeout(150)
        await chat.locator(".chat-ed-acts .btn", has_text="Padrão").click(); await pg.wait_for_timeout(150)
        await chat.locator(".chat-ed-acts .btn", has_text="Pronto").click(); await pg.wait_for_timeout(200)
        await chat.locator(".chat-qbtn").click(); await pg.wait_for_timeout(200)
        check(await chat.locator(".chat-quick").count() == 0, "the same button closes them")
        # 1.84.0: the round button (the microphone with the box empty, Enviar writing) and the clip
        check(await chat.locator(".chat-mic").count() == 1 and await chat.locator(".chat-send").count() == 0, "empty box: the microphone, no Enviar beside it")
        await box.fill("oi")
        check(await chat.locator(".chat-send").count() == 1 and await chat.locator(".chat-mic").count() == 0, "writing: Enviar in the place of the microphone")
        await box.fill("")
        await chat.locator(".chat-clip").click(); await pg.wait_for_timeout(200)
        ops = [t.strip() for t in await chat.locator(".chat-menu .chat-op").all_inner_texts()]
        check(ops == ["Tirar foto", "Escolher fotos", "Escolher arquivo"], f"the clip: Tirar foto, Escolher fotos, Escolher arquivo ({ops})")
        await pg.screenshot(path=f"{SP}/shots/crh-clip.png")
        async with pg.expect_file_chooser() as fc:
            await chat.locator(".chat-op", has_text="Escolher arquivo").click()
        await (await fc.value).set_files(files=[{"name": "convite.pdf", "mimeType": "application/pdf", "buffer": b"%PDF-1.4 convite"}])
        await wait_for(lambda: chat.locator(".chat-file .chat-pdf").count(), "the PDF chosen, before sending")
        await box.fill("que dia é a festa?"); await box.press("Enter")
        await wait_for(lambda: answered(7), "the PDF goes with the question")
        ia = await chat.locator(".chat-msg.ia .chat-bubble").last.inner_text()
        check(ia == "Li o arquivo (application/pdf).", f"the AI got the PDF ({ia!r})")
        arq = [t.strip() for t in await chat.locator(".chat-msg.me .chat-arq").all_inner_texts()]
        check(arq == ["convite.pdf"] and await chat.locator(".chat-file").count() == 0, f"its name in the question; the box clean ({arq})")
        # Tirar foto: the camera of the app, titled Tirar foto; Pronto puts the photo in the Conversa
        await chat.locator(".chat-clip").click(); await pg.wait_for_timeout(200)
        await chat.locator(".chat-op", has_text="Tirar foto").click(); await pg.wait_for_timeout(1500)
        cam = a.locator(".cam")
        check(await cam.count() == 1 and (await cam.locator(".cam-title").inner_text()).strip() == "Tirar foto", "the camera of the app, titled Tirar foto")
        await cam.locator(".cam-shutter").click(); await pg.wait_for_timeout(700)
        await cam.locator(".cam-done").click(); await pg.wait_for_timeout(700)
        check(await a.locator(".cam").count() == 0 and await chat.locator(".chat-file img").count() == 1, "Pronto: the photo in the Conversa, ready to send")
        await chat.locator(".chat-file .icon-btn").click(); await pg.wait_for_timeout(150)
        check((await chat.locator(".chat-head .text-btn").inner_text()).strip() == "Nova conversa", "Nova conversa (the same in all the apps)")
        await chat.locator(".chat-head .text-btn", has_text="Nova conversa").click(); await pg.wait_for_timeout(300)
        check(await chat.locator(".chat-msg").count() == 0, "Nova clears the conversation")
        await sheet.locator(".chat-head .icon-btn[aria-label='Fechar']").click(); await pg.wait_for_timeout(300)
        check(fake_log().count("fake AI chat") >= 7, "each turn is one call to the AI")
        # Usar IA off: no button
        await pg.evaluate(WS, [{"type": "cronologia/prefs/set_app", "prefs": {"ai_off": True}}])
        await pg.reload(); await pg.wait_for_timeout(2000)
        check(await a.locator(".chat-top").count() == 0, "Usar IA off: no Conversa")
        check(not errs, f"no page errors {errs[:2]}")
        await b.close()
try:
    asyncio.run(main())
finally:
    app.kill(); fake.kill()
print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))
