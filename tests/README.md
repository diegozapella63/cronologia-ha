# Testes do CronologIA

Três camadas, todas rodando a cada push no GitHub (aba Actions):

| Camada | Onde | Como rodar | O que confere |
|---|---|---|---|
| Unitários | `tests/*.test.mjs` | `npm run test:unit` | cada parte do servidor (`cronologia/rootfs/app/lib`) e as partes puras da tela, sem Home Assistant |
| Integração | `tests/integration/*.test.mjs` | `npm run test:integration` | o servidor de verdade contra o Home Assistant simulado (`dev/fake-ha.mjs`), pelo WebSocket e pelo HTTP: eventos (repetições com só este, este e os próximos e toda a série) e os modelos (remédio, conta, rotina, manutenção), Feito, Pular e Desfazer, avisos no celular (quem cuida, Adiar, Tomei), placar, fechamento e Extrato, cômodos e equipamentos, Levar e Trazer do ResolvIA, GerencIA, Falar, Ler com IA, exportar e importar, o que cada calendário permite (Google, CalDAV, Outlook só leitura), Home Assistant antigo, sem calendários ou com falhas |
| Visuais | `tests/e2e/*.py` | `tests/e2e/run.sh` | as telas no Chromium (Playwright): clica, digita, confere o que aparece e grava capturas de tela |

O Home Assistant simulado tem variações pelas variáveis `FAKE_*` (lista no começo de `dev/fake-ha.mjs`). Os visuais mais novos usam `tests/e2e/stack_lib.py` e as portas de `E2E_HA_PORT` e `E2E_APP_PORT` (8123 e 8099 se não vierem), para rodar ao lado de outra execução.

`npm test` roda as duas primeiras (só Node 22, sem instalar nada; cerca de um minuto). Os visuais precisam de `python3` e `pip install playwright && playwright install chromium`, e dos outros apps da família ao lado deste repositório (`../resolvia-ha`, `../inventario-ha`, `../gerencia-ha`) ou nas variáveis `E2E_*`; um teste que precisa de um app que não está lá é pulado. As capturas ficam em `$E2E_TMP/shots`.

`npm run test:coverage` mostra quanto do código os testes percorrem.

## Peças que ajudam

- `tests/_lit.mjs`: deixa testar no Node os mixins da tela (Lit) sem navegador. Importe antes do módulo da tela; `text(view)` lê o que a pessoa veria, `click(view, "rótulo")` e `fire(view, rótulo, "change", ev)` rodam o que o botão faz, e `hostOf(Mixin)` dá um app de mentira (toasts, janelas, preferências salvas) com `fakeApi({método: resposta})` no lugar de `this.api`.
- `tests/e2e/mais_lib.py`: `await open_more(a, "Dados")` abre, de qualquer tela, uma linha do menu Mais (Calendários, Rotinas, Avisos, Placar) ou uma aba de Mais › Configurações (Integrações, Dados, Aparência, Opções), como a pessoa faria.
