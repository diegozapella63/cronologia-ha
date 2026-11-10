# CronologIA 1.63.0: times and dates in the look of the app (frontend/src/whenpick.js), no <input type=time|date>.
# A field (button.pickf, or the Outra data chip) opens a window at the bottom: the 24 hours and the minutes (5 by 5),
# or a month with ‹ and ›. These choose in it as a person would; the value of a field is in its data-value.
import re

async def pick_time(field, hm):
    """Taps the field, the hour and the minute (the minute chooses and closes)."""
    pg = field.page
    h, m = hm.split(":")
    assert int(m) % 5 == 0, f"the window has the minutes of 5 in 5 ({hm})"
    await field.scroll_into_view_if_needed()
    await field.click()
    w = pg.locator(".wp.in")
    await w.wait_for(timeout=5000)
    await w.locator(".wp-h").get_by_role("button", name=h, exact=True).click()
    await w.locator(".wp-m").get_by_role("button", name=m, exact=True).click()
    await pg.locator(".wp").wait_for(state="detached", timeout=5000)
    await pg.wait_for_timeout(150)

async def pick_date(field, ymd):
    """Taps the field, goes to the month (‹ ›) and taps the day."""
    pg = field.page
    await field.scroll_into_view_if_needed()
    await field.click()
    w = pg.locator(".wp.in")
    await w.wait_for(timeout=5000)
    for _ in range(36):
        cur = await w.locator(".wp-mhead").get_attribute("data-month")
        if cur == ymd[:7]: break
        await w.locator(".wp-nav").nth(0 if ymd[:7] < cur else 1).click()
        await pg.wait_for_timeout(60)
    await w.locator(f".wp-day[data-d='{ymd}']").click()
    await pg.locator(".wp").wait_for(state="detached", timeout=5000)
    await pg.wait_for_timeout(150)

async def value(field):
    return await field.get_attribute("data-value")

def field_of(scope, label):
    """A time or date field by its name (its aria-label is "Começa: 14:00")."""
    return scope.locator(f".pickf[aria-label^='{label}:']")
