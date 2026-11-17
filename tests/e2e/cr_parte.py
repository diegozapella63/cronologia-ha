# CronologIA 1.91.0: Feito em parte. Agora › Rotina da casa: a faixa 25% · 50% · 75% · Tudo (Tudo de início), 50% e a
# letra de quem fez: a parte dos pontos, a mensagem com Desfazer, a faixa volta para Tudo, a rotina vai para Concluídas
# com o círculo pela metade e "50% feito por Davi · o resto amanhã"; o Desfazer volta como era; nada passa da largura em
# 320 px; no computador, a faixa também; no Calendário (1.91.1), embaixo de Rotinas, tarefas e lembretes, também.
# 1.92.0: uma rotina que volta 1 dia depois de feita, 50% hoje: em Recompensas › Para pontuar hoje › Concluídas (n),
# como na Agora; no Calendário, hoje a feita em parte e amanhã o resto (o círculo pela metade, +5 · falta 50%), com o
# mesmo círculo verde da Agora nas feitas (1.92.1: embaixo do horário). Casa de teste (o HA simulado).
import os, sys, asyncio, datetime
from zoneinfo import ZoneInfo
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from stack_lib import Stack, URL, SP, check, summary
from playwright.async_api import async_playwright

st = Stack("crparte", data={"app": {"who_pick": True, "score": {"enabled": True, "manual": True, "participants": ["Davi", "Aurora"], "period": "semana"}}})
HOJE = datetime.datetime.now(ZoneInfo("America/Sao_Paulo")).date()
st.create("calendar.casa", {"summary": "Passear com o cachorro", "dtstart": HOJE.isoformat(), "dtend": (HOJE + datetime.timedelta(days=1)).isoformat(), "description": "#rotina\nPontos: 10\nVolta: 1 dia depois de feita"})

# the lines of a routine in the Calendário (the day chosen): the mark after the title and the line below it
LINES = """(name) => [...document.querySelector('cronologia-app').shadowRoot.querySelectorAll('.day-panel .ev-row')]
  .filter((r) => r.querySelector('.ev-title').textContent.includes(name))
  .map((r) => { const m = r.querySelector('.ev-done'); return { done: r.classList.contains('done'), mark: m ? m.className : '', style: m ? m.getAttribute('style') || '' : '', sub: (r.querySelector('.ev-sub') || {}).textContent || '' }; })"""


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errs = []
        ctx = await b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, timezone_id="America/Sao_Paulo", locale="pt-BR")
        A = await ctx.new_page()
        A.on("pageerror", lambda e: errs.append(str(e)))
        await A.goto(URL); await A.wait_for_timeout(2000)
        a = A.locator("cronologia-app")
        casa = a.locator("#casa")
        strip = casa.locator(".part-pick")
        check(await strip.count() == 1 and [t.strip() for t in await strip.locator(".part-opt").all_inner_texts()] == ["25%", "50%", "75%", "Tudo"], "a faixa 25% · 50% · 75% · Tudo")
        check(await strip.locator(".part-opt.on").inner_text() == "Tudo", "Tudo de início (como sempre foi)")
        ob, sb = await strip.locator(".part-opt").first.bounding_box(), await strip.bounding_box()
        check(ob["height"] >= 34 and abs(sum([(await o.bounding_box())["width"] for o in await strip.locator(".part-opt").all()]) + 18 - sb["width"]) < 2, "quatro do mesmo tamanho, na largura do card")
        rb = await casa.locator(".chore .chk").first.bounding_box()
        check(abs(sb["x"] - rb["x"]) < 2, f"alinhada com as linhas ({sb['x']:.0f} e {rb['x']:.0f})")
        await casa.screenshot(path=f"{SP}/shots/crparte-faixa.png")
        row = casa.locator(".chore", has=A.locator("b", has_text="Lavar a louça")).first
        await strip.locator(".part-opt", has_text="50%").click(); await A.wait_for_timeout(200)
        check(await strip.locator(".part-opt.on").inner_text() == "50%", "50% escolhido")
        await row.locator(".qw-btn", has_text="D").click(); await A.wait_for_timeout(1200)
        toast = await a.locator(".toast").first.inner_text()
        check("Lavar a louça: 50% por Davi · +5 · o resto amanhã" in toast and "Desfazer" in toast, f"a mensagem ({toast!r})")
        check(await strip.locator(".part-opt.on").inner_text() == "Tudo", "a faixa volta para Tudo")
        fold = casa.locator(".done-fold")
        if await fold.count() and await fold.get_attribute("aria-expanded") != "true":
            await fold.click(); await A.wait_for_timeout(300)
        done = casa.locator(".chore.done", has=A.locator("b", has_text="Lavar a louça")).first
        check(await done.count() == 1, "em Concluídas")
        sub = await done.locator("small").inner_text()
        check(sub == "50% feito por Davi · o resto amanhã", f"o que foi feito ({sub!r})")
        chk = done.locator(".chk")
        check("part" in (await chk.get_attribute("class")) and "--f:50%" in (await chk.get_attribute("style") or "") and await chk.locator("svg").count() == 0, "o círculo pela metade, sem o ✓")
        check("+5" in await done.locator(".won").inner_text(), "Davi +5")
        await casa.screenshot(path=f"{SP}/shots/crparte-feito.png")
        # Desfazer (o círculo): volta como era
        await chk.click(); await A.wait_for_timeout(1200)
        row = casa.locator(".chore:not(.done)", has=A.locator("b", has_text="Lavar a louça")).first
        check(await row.count() == 1 and "falta" not in await row.locator("small").inner_text(), "Desfazer: volta como era")
        # 1.91.1: no Calendário, a lista de hoje também tem a faixa (embaixo de Rotinas, tarefas e lembretes)
        await a.locator("nav .tab", has_text="Calendário").click(); await A.wait_for_timeout(1500)
        sep = a.locator(".day-sep", has_text="Rotinas, tarefas e lembretes").first
        cstrip = a.locator(".day-sep + .part-pick").first
        check(await sep.count() == 1 and await cstrip.count() == 1 and await cstrip.locator(".part-opt.on").inner_text() == "Tudo", "Calendário: a faixa, em Tudo")
        await cstrip.locator(".part-opt", has_text="25%").click(); await A.wait_for_timeout(200)
        line = a.locator(".ev-line", has=A.locator(".ev-title", has_text="Limpar a caixa de areia")).first
        await line.locator(".qw-btn", has_text="A").click(); await A.wait_for_timeout(1300)
        toast = await a.locator(".toast").first.inner_text()
        check("Limpar a caixa de areia: 25% por Aurora · +4 · o resto amanhã" in toast, f"Calendário: a mensagem ({toast!r})")
        check(await cstrip.locator(".part-opt.on").inner_text() == "Tudo", "Calendário: a faixa volta para Tudo")
        done = a.locator(".ev-row", has=A.locator(".ev-title", has_text="Limpar a caixa de areia")).first
        pie = done.locator(".ev-done.part")
        check(await pie.count() == 1 and "--f:25%" in (await pie.get_attribute("style") or ""), "Calendário: feita em parte, a pizza no lugar do ✓")
        await A.screenshot(path=f"{SP}/shots/crparte-calendario.png")
        # 1.92.0: o mesmo círculo da Agora nas feitas do Calendário (verde, com o ✓), e não apagado como o resto da linha
        await a.locator(".ev-line", has=A.locator(".ev-title", has_text="Regar as plantas")).first.locator(".qw-btn", has_text="D").click(); await A.wait_for_timeout(1300)
        okm = await A.evaluate("""() => { const r = [...document.querySelector('cronologia-app').shadowRoot.querySelectorAll('.day-panel .ev-row.done')].find((x) => x.querySelector('.ev-done:not(.part)'));
          if (!r) return null; const m = r.querySelector('.ev-done'), c = getComputedStyle(m);
          const t = r.querySelector('.ev-time small').getBoundingClientRect(), mb = m.getBoundingClientRect();
          return { bg: c.backgroundColor, radius: c.borderRadius, w: mb.width, op: getComputedStyle(r).opacity, svg: !!m.querySelector('svg'), under: m.parentElement.classList.contains('ev-time') && mb.top >= t.bottom - 1 && Math.abs(mb.right - t.right) < 2, title: !r.querySelector('.ev-title .ev-done') }; }""")
        check(okm and okm["radius"] == "50%" and okm["w"] >= 18 and okm["svg"] and okm["bg"] not in ("rgba(0, 0, 0, 0)", "transparent") and okm["op"] == "1", f"Calendário: a feita com o círculo verde e o ✓, como na Agora ({okm})")
        check(okm and okm["under"] and okm["title"], "Calendário (1.92.1): o círculo embaixo do Qualquer hora, não no fim do título")
        # 1.92.0: a rotina que volta 1 dia depois de feita, 50% hoje (Aurora)
        await a.locator("nav .tab", has_text="Agora").click(); await A.wait_for_timeout(1300)
        await strip.locator(".part-opt", has_text="50%").click(); await A.wait_for_timeout(200)
        await casa.locator(".chore", has=A.locator("b", has_text="Passear com o cachorro")).first.locator(".qw-btn", has_text="A").click(); await A.wait_for_timeout(1600)
        toast = await a.locator(".toast").first.inner_text()
        check("Passear com o cachorro: 50% por Aurora · +5 · o resto amanhã" in toast, f"a que volta depois de feita: a mensagem ({toast!r})")
        # Recompensas › Para pontuar hoje › Concluídas (n): fechada; aberta, as linhas da Agora
        await a.locator("nav .tab", has_text="Recompensas").click(); await A.wait_for_timeout(1300)
        fold = a.locator(".score-today .score-done-fold")
        check(await fold.count() == 1 and "Concluídas (" in await fold.inner_text() and await fold.get_attribute("aria-expanded") == "false", "Recompensas: Concluídas (n), fechada")
        await fold.click(); await A.wait_for_timeout(400)
        drow = a.locator(".score-today .chore.done", has=A.locator("b", has_text="Passear com o cachorro")).first
        check(await drow.count() == 1 and "50% feito por Aurora · o resto amanhã" in await drow.inner_text() and "--f:50%" in (await drow.locator(".chk").get_attribute("style") or "") and "+5" in await drow.locator(".won").inner_text(), "Recompensas: a feita em parte, como na Agora (o círculo pela metade, Aurora +5)")
        await a.locator(".score-today").screenshot(path=f"{SP}/shots/crparte-recompensas.png")
        # Calendário: hoje, a feita em parte; amanhã (para onde ela foi), o resto
        await a.locator("nav .tab", has_text="Calendário").click(); await A.wait_for_timeout(1500)
        hoje = await A.evaluate(LINES, "Passear com o cachorro")
        check(len(hoje) == 1 and hoje[0]["done"] and "part" in hoje[0]["mark"] and "--f:50%" in hoje[0]["style"], f"Calendário, hoje: feita em parte, o círculo pela metade ({hoje})")
        await A.evaluate("() => { const app = document.querySelector('cronologia-app'); const n = new Date(); app._cursor = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1); app.requestUpdate(); }"); await A.wait_for_timeout(700)
        amanha = await A.evaluate(LINES, "Passear com o cachorro")
        check(len(amanha) == 1 and not amanha[0]["done"] and "part" in amanha[0]["mark"] and "--f:50%" in amanha[0]["style"], f"Calendário, amanhã: o resto, com o círculo pela metade ({amanha})")
        check(amanha and amanha[0]["sub"].startswith("+5 · falta 50%"), f"Calendário, amanhã: +5 · falta 50% ({amanha and amanha[0]['sub']!r})")
        await a.locator(".day-panel").screenshot(path=f"{SP}/shots/crparte-amanha.png")
        await ctx.close()
        # 320 px e o computador
        for w, h in ((320, 640), (1280, 800)):
            ctx = await b.new_context(viewport={"width": w, "height": h}, timezone_id="America/Sao_Paulo", locale="pt-BR")
            A = await ctx.new_page()
            A.on("pageerror", lambda e: errs.append(str(e)))
            await A.goto(URL); await A.wait_for_timeout(1800)
            a = A.locator("cronologia-app")
            over = await A.evaluate("() => { const m = document.querySelector('cronologia-app').shadowRoot.querySelector('main'); return m.scrollWidth - m.clientWidth; }")
            check(over <= 0, f"{w} px: nada passa da largura ({over})")
            sb = await a.locator("#casa .part-pick").bounding_box()
            texts = await a.locator("#casa .part-pick .part-opt").evaluate_all("els => els.every(e => e.scrollWidth <= e.clientWidth + 1)")
            check(sb and texts, f"{w} px: a faixa inteira, nada cortado")
            rb = await a.locator("#casa .chore .chk").first.bounding_box()
            check(abs(sb["x"] - rb["x"]) < 2, f"{w} px: alinhada com as linhas ({sb['x']:.0f} e {rb['x']:.0f})")
            await a.locator("#casa").screenshot(path=f"{SP}/shots/crparte-{w}.png")
            await ctx.close()
        check(not errs, f"sem erros na página {errs[:2]}")
        await b.close()
    st.stop()
    summary()

asyncio.run(main())
