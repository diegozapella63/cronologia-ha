#!/usr/bin/env python3
"""Refaz as imagens do README (docs/*.png) a partir da prévia (preview/cronologia-preview.html).

Uso: cd frontend && npm run build && cd .. && python3 tools/prints_readme.py   (precisa do playwright)

Celular 390x844 em 2x, tema escuro, relógio parado numa quarta (4/11/2026, 16:40, cor do dia verde, a do
CronologIA). Os nomes da prévia viram nomes inventados (Ana, Beto, a gata Mel, bancos e remédios de exemplo)
só na cópia usada aqui; a prévia do repositório não muda.
"""
import datetime
import os
import tempfile
from zoneinfo import ZoneInfo

from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
NOW = datetime.datetime(2026, 11, 4, 16, 40, tzinfo=ZoneInfo("America/Sao_Paulo"))
# the order matters: the long names first
NAMES = [
    ("Davi Souza", "Beto Lima"), ("Aurora", "Ana"), ("Davi", "Beto"), ("Mimi", "Mel"),
    ("Mounjaro 2,5 mg", "Insulina"), ("DPrev 10.000 UI", "Vitamina D 2.000 UI"), ("DPrev", "Vitamina D"),
    ("Sertralina", "Vitamina C"), ("Gardenal", "Probiótico"), ("Nubank", "Banco Lua"), ("Ita\\xFA", "Banco Sol"),
    ("Daily do time", "Reunião do time"),
]


def preview_copy():
    html = open(os.path.join(ROOT, "preview", "cronologia-preview.html"), encoding="utf-8").read()
    for a, b in NAMES:
        html = html.replace(a, b)
    fd, path = tempfile.mkstemp(suffix=".html")
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        f.write(html)
    return path


def main():
    os.makedirs(DOCS, exist_ok=True)
    page = preview_copy()
    try:
        with sync_playwright() as p:
            # the date and time fields in Brazilian format (05/11/2026, 15:00)
            b = p.chromium.launch(args=["--lang=pt-BR"], env={**os.environ, "LANG": "pt_BR.UTF-8", "LANGUAGE": "pt_BR", "LC_ALL": "pt_BR.UTF-8"})
            ctx = b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, color_scheme="dark", timezone_id="America/Sao_Paulo", locale="pt-BR")
            pg = ctx.new_page()
            errors = []
            pg.on("pageerror", lambda e: errors.append(str(e)))
            pg.clock.install(time=NOW)
            pg.goto("file://" + page)
            pg.wait_for_timeout(2500)
            a = pg.locator("cronologia-app")
            el = lambda js: pg.evaluate(f"async () => {{ const el = document.querySelector('cronologia-app'); return {js}; }}")
            # the calendar of giveaways of the preview stays out
            el("el._setPrefs(await el.api.setCalendarPrefs('calendar.giveaways', { hidden: true }))")
            pg.wait_for_timeout(800)

            def shot(name):
                pg.wait_for_timeout(700)
                pg.screenshot(path=os.path.join(DOCS, name))
                print("ok", name)

            def scroll_to(css):
                el(f"(() => {{ const m = el.renderRoot.querySelector('main'); const x = el.renderRoot.querySelector('{css}'); m.style.scrollBehavior = 'auto'; m.scrollTop += x.getBoundingClientRect().top - m.getBoundingClientRect().top - 12; }})()")

            shot("agora.png")
            scroll_to("main #contas")
            shot("contas.png")
            scroll_to("main #casa")
            shot("casa.png")

            a.locator(".tab", has_text="Recompensas").click()
            shot("recompensas.png")

            a.locator(".tab", has_text="Calendário").click()
            pg.wait_for_timeout(500)
            a.locator(".seg.compact button", has_text="Mês").first.click()
            shot("mes.png")
            a.locator(".seg.compact button", has_text="3 dias").first.click()
            shot("3dias.png")

            # Novo › Remédio
            a.locator(".tab.fab").click()
            pg.wait_for_timeout(600)
            a.locator(".sheet button", has_text="Remédio").first.click()
            pg.wait_for_timeout(400)
            a.locator(".sheet input, .sheet textarea").first.fill("Ômega 3")
            a.locator(".sheet input[placeholder^='Ex.: 1 comprimido']").fill("1 cápsula")
            a.locator(".sheet button", has_text="Beto").first.click()
            shot("remedio.png")
            a.locator(".sheet .icon-btn[aria-label='Fechar']").first.click()
            pg.wait_for_timeout(500)

            # Ler com IA: a message of WhatsApp, the events found
            el("el._openImport('text')")
            pg.wait_for_timeout(500)
            a.locator(".sheet textarea").fill("[18:02] Ana: Reunião de pais na escola\nSexta às 15h, sala 12. Não esquece de levar os documentos da matrícula!")
            a.locator(".sheet button", has_text="Encontrar eventos").click()
            a.locator(".sheet .imp-loading").wait_for(state="detached", timeout=8000)
            shot("importar.png")
            b.close()
            if errors:
                raise SystemExit(f"erros na página: {errors}")
    finally:
        os.unlink(page)
    print("imagens em", DOCS)


if __name__ == "__main__":
    main()
