# CronologIA 1.43.0: Mais is a menu. Calendários, Rotinas, Avisos and Placar are rows, each its own
# screen; Integrações, Dados, Aparência and Opções are tabs of Mais › Configurações (the last row).
CONFIG = ("Integrações", "Dados", "Aparência", "Opções")
ROWS = {"Calendários": "calendarios", "Rotinas": "rotinas", "Avisos": "avisos", "Placar": "placar", "Configurações": "config"}

async def open_more(a, name, wait=400):
    """Opens Mais › <name> (a row of the menu, or a tab of Configurações) from anywhere, as a person would:
    a tab of Configurações right there, or else back to the menu (‹ Mais, the bottom bar or the sidebar) and the row."""
    pg = a.page
    if name in CONFIG and await a.locator(".more-tabs").count():
        await a.locator(".more-tabs button", has_text=name).click()
        await pg.wait_for_timeout(wait)
        return
    if not await a.locator(".menu-list").count():
        if await a.locator(".uplink").count():
            await a.locator(".uplink").click()
        elif await a.locator(".tab", has_text="Mais").is_visible():
            await a.locator(".tab", has_text="Mais").click()
        else:
            await a.locator(".side-link", has_text="Mais").click()
        await a.locator(".menu-list").wait_for(timeout=5000)
    await a.locator(f'.menu-row[data-k="{ROWS["Configurações" if name in CONFIG else name]}"]').click()
    if name in CONFIG:
        await a.locator(".more-tabs").wait_for(timeout=5000)
        tab = a.locator(".more-tabs button", has_text=name)
        if "on" not in ((await tab.get_attribute("class")) or "").split():
            await tab.click()
    await pg.wait_for_timeout(wait)
