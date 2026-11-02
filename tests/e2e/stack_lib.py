# Shared by the newer visual tests: starts the Home Assistant simulado (dev/fake-ha.mjs) and the
# app on the ports of E2E_HA_PORT / E2E_APP_PORT (8123 / 8099 by default, so two runs can live
# side by side), reads the fake's calendars and phone notifications, and the PASS/FAIL checks.
import asyncio, json, os, shutil, subprocess, time, urllib.request

REPO = os.environ.get("E2E_CRONOLOGIA", "")
SP = os.environ["E2E_TMP"]
HA_PORT = os.environ.get("E2E_HA_PORT", "8123")
APP_PORT = os.environ.get("E2E_APP_PORT", "8099")
HA = f"http://127.0.0.1:{HA_PORT}"
URL = f"http://127.0.0.1:{APP_PORT}/"
os.makedirs(f"{SP}/shots", exist_ok=True)

n_ok, failed = 0, []
def check(c, label):
    global n_ok
    print(("PASS " if c else "FAIL ") + label, flush=True)
    if c: n_ok += 1
    else: failed.append(label)
    return c

async def wait_for(fn, label, tries=48):
    for _ in range(tries):
        try:
            if (await fn()) if asyncio.iscoroutinefunction(fn) else fn(): return check(True, label)
        except Exception: pass
        await asyncio.sleep(0.25)
    return check(False, label)

def summary():
    print(f"{n_ok} checks passed" + (f", FAILED: {failed}" if failed else ""))

class Stack:
    """The fake Home Assistant and the app, with a fresh data folder ($E2E_TMP/<name>-data)."""
    def __init__(self, name, data=None, fake_env=None, app_env=None):
        self.dir = f"{SP}/{name}-data"
        shutil.rmtree(self.dir, ignore_errors=True)
        os.makedirs(f"{self.dir}/media"); os.makedirs(f"{self.dir}/share")
        if data is not None: json.dump(data, open(f"{self.dir}/cronologia.json", "w"))
        env = dict(os.environ, TZ="America/Sao_Paulo", FAKE_MEDIA_DIR=f"{self.dir}/media", FAKE_HA_PORT=HA_PORT, **(fake_env or {}))
        self.fake = subprocess.Popen(["node", f"{REPO}/dev/fake-ha.mjs"], env=env, stdout=open(f"{self.dir}/fake.log", "w"), stderr=subprocess.STDOUT)
        time.sleep(0.6)
        aenv = dict(os.environ, TZ="America/Sao_Paulo", PORT=APP_PORT, CRONOLOGIA_DEV="1", CRONOLOGIA_DEV_INTEGRATIONS="1", HA_WS_URL=f"ws://127.0.0.1:{HA_PORT}/api/websocket", HA_REST_URL=f"{HA}/api", HA_TOKEN="dev", DATA_DIR=self.dir, MEDIA_DIR=f"{self.dir}/media", SHARE_DIR=f"{self.dir}/share", **(app_env or {}))
        self.app = subprocess.Popen(["node", f"{REPO}/cronologia/rootfs/app/server.js"], env=aenv, stdout=open(f"{self.dir}/app.log", "w"), stderr=subprocess.STDOUT)
        for _ in range(60):
            if "calendários encontrados" in self.app_log(): break
            time.sleep(0.1)
    def stop(self):
        for p in (self.app, self.fake): p.kill()
    def fake_log(self): return open(f"{self.dir}/fake.log").read()
    def app_log(self): return open(f"{self.dir}/app.log").read()
    def stored(self): return json.load(open(f"{self.dir}/cronologia.json"))
    def notifications(self): return json.loads(urllib.request.urlopen(f"{HA}/dev/notifications").read())
    def fire(self, event_type, data):
        urllib.request.urlopen(urllib.request.Request(f"{HA}/dev/fire", data=json.dumps({"event_type": event_type, "data": data}).encode(), method="POST")).read()
    def _ws(self, cmd):
        js = """const [port, cmd] = process.argv.slice(1); const ws = new WebSocket(`ws://127.0.0.1:${port}/api/websocket`); ws.onmessage = (e) => { const m = JSON.parse(e.data);
 if (m.type === 'auth_required') ws.send(JSON.stringify({type:'auth', access_token:'dev'}));
 else if (m.type === 'auth_ok') ws.send(JSON.stringify({id:1, ...JSON.parse(cmd)}));
 else if (m.id === 1 && (m.type === 'event' || !m.success)) { console.log(JSON.stringify(m)); ws.close(); }
 else if (m.id === 1 && m.type === 'result' && !String(JSON.parse(cmd).type).endsWith('subscribe')) { console.log(JSON.stringify(m)); ws.close(); } };"""
        return json.loads(subprocess.check_output(["node", "-e", js, HA_PORT, json.dumps(cmd)], timeout=20).decode())
    def events(self, cal, start, end, name=None):
        """The occurrences of a calendar between two ISO times, as Home Assistant gives them."""
        m = self._ws({"type": "calendar/event/subscribe", "entity_id": cal, "start": start, "end": end})
        out = m["event"]["events"] if m.get("type") == "event" else []
        return [e for e in out if name is None or e.get("summary", "").startswith(name)]
    def create(self, cal, ev):
        """An event straight in the fake Home Assistant (dtstart/dtend, like HA's websocket)."""
        m = self._ws({"type": "calendar/event/create", "entity_id": cal, "event": ev})
        assert m.get("success"), m
