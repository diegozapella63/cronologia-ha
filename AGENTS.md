# Instruções para quem for mexer neste repositório (pessoas ou IAs)

CronologIA é um app (add-on) do Home Assistant: agenda da família com modelos (remédio, conta, rotina da casa, manutenção), placar de recompensas e leitura por IA. Faz parte de uma família de apps do mesmo dono, que conversam entre si pelo Home Assistant:

| App | Repositório | O que é |
|---|---|---|
| CronologIA | `diegozapella63/cronologia-ha` (este) | calendário, rotinas, remédios, placar |
| ResolvIA | `diegozapella63/resolvia-ha` | listas de tarefas (to-do do HA), pontos, repetição |
| InventarIA | `diegozapella63/inventario-ha` | inventário da casa: cômodos e itens (equipamentos) |
| GerencIA | `diegozapella63/gerencia-ha` | finanças: contas a pagar |

O Home Assistant instala direto do GitHub (`repository.yaml` + `cronologia/config.yaml`), a partir da branch `main`. Por isso o JavaScript gerado da interface fica no repositório: o que está em `main` é o que os usuários recebem.

## Estrutura

```
cronologia/config.yaml            versão e opções do app
cronologia/CHANGELOG.md           o que mudou em cada versão (o HA mostra ao atualizar)
cronologia/DOCS.md                manual do usuário (aba Documentação no HA)
cronologia/rootfs/app/server.js   servidor (Node 22, sem dependências: só módulos do Node)
cronologia/rootfs/app/lib/        regras: kinds.js (modelos e a tela Agora), home.js, store.js, mirror.js, todos.js...
cronologia/rootfs/app/www/        interface já gerada (não editar à mão)
frontend/src/                     código da interface (Lit, sem framework além disso)
preview/cronologia-preview.html   prévia gerada pelo build, abre sem servidor
dev/fake-ha.mjs                   Home Assistant simulado para desenvolver e testar
tests/                            testes (ver tests/README.md)
```

## Checklist de toda mudança

1. Implementar. Servidor: só módulos nativos do Node (o WebSocket é o `lib/ws.js` próprio). Interface: Lit, componentes e mixins em `frontend/src`.
2. Gerar a interface: `cd frontend && npm install && npm run build`. Faça commit também de `cronologia/rootfs/app/www/cronologia.js` e `preview/cronologia-preview.html`.
3. Testar: `npm test` (unitários e integração, uns 40 s) e os visuais ligados à mudança: `tests/e2e/run.sh cr_xxx ...` (ver tests/README.md). Toda mudança ou bug corrigido vem com o teste dele.
4. Subir a versão nos três lugares (iguais): `cronologia/config.yaml` (`version:`), `cronologia/rootfs/app/server.js` (`const VERSION`) e `frontend/preview/mock-api.js` (`version:` no bootstrap). Correção = patch (1.37.1 → 1.37.2); novidade = minor (1.37.x → 1.38.0).
5. `cronologia/CHANGELOG.md`: nova seção no topo, em português, do ponto de vista de quem usa (o que mudou na tela, não no código).
6. `cronologia/DOCS.md` quando muda o comportamento ou aparece algo novo.
7. Commit em `main` com mensagem em português ("CronologIA 1.38.0: ..."), `git pull --rebase` e push. O GitHub roda todos os testes a cada push (aba Actions).

## Testes

- `npm test`: unitários (`tests/*.test.mjs`) e de integração (`tests/integration/`), com `node:test`, sem instalar nada. Cada arquivo de integração sobe o HA simulado e o servidor em portas livres.
- `tests/e2e/run.sh`: testes visuais em Python + Playwright (`pip install playwright && playwright install chromium`). Precisam dos outros apps ao lado deste repositório (`../resolvia-ha`, `../inventario-ha`, `../gerencia-ha`) ou nas variáveis `E2E_*`. Usam as portas fixas 8099/8123/8097: não rode duas baterias ao mesmo tempo.
- Datas: nunca dependa do relógio real nos unitários (passe `now` ou use `mock.timers`); nos visuais, a ordem das rotinas depende da hora (períodos), então calcule o esperado a partir da hora.

## Arquivos idênticos no ResolvIA

Estes arquivos têm cópia igual no `resolvia-ha`. Ao mudar um, mude o outro (e rode os testes dos dois):

- `frontend/src/equip-picker.js`, `frontend/src/chat.js` (a janela da Conversa), `frontend/src/voice.js`, `frontend/src/look.js`, `frontend/src/swipe.js`, `frontend/src/about.js` (Mais › Sobre)
- `cronologia/rootfs/app/lib/voice.js`, `ws.js`, `zip.js`, `ha.js`, `usage.js` (no ResolvIA, em `resolvia/rootfs/app/lib/`)

## Como os apps conversam

Pela pasta `/share` do Home Assistant e por eventos do HA. Mudar um formato aqui exige mudar o outro app junto.

- **ResolvIA → CronologIA**: `share/resolvia/integracao.json` (`prazos`, `sem_prazo`, `pontos`, `repete`, `comodos {lista, tarefas}`, `equipamentos {lista [{id, nome, comodo}], tarefas}`, `donos {lista: nome da pessoa}`, que vale sobre o De quem é daqui). Em `tarefas`, o valor é um id ou, com vários equipamentos (e por isso vários cômodos), uma lista de ids, lido em `lib/todos.js` (cache de 60 s).
- **CronologIA → ResolvIA**: `share/cronologia/integracao.json` (o placar e `donos_listas`, o De quem é antigo daqui, que o ResolvIA adota uma vez), lido pelo `lib/placar.js` do ResolvIA. O aviso de prazos do ResolvIA vai para os celulares ligados a cada pessoa no Home Assistant: os apps olham para a pessoa, nunca para um aparelho escolhido neles.
- **Eventos**: `resolvia_comodo` (CronologIA define o cômodo/equipamento de uma tarefa: `{entity_id, tarefa, comodo?, equipamento?, origem}`, onde comodo e equipamento são um id ou uma lista de ids), `resolvia_esquecer` (a CronologIA assume tarefas do ResolvIA), `cronologia_pontos` (o ResolvIA soma, desfaz ou troca pontos no placar), `cronologia_feito` e `cronologia_demerito` (automações do HA marcam feito ou tiram pontos). Detalhes em `lib/home.js` e `lib/mirror.js`.
- **InventarIA**: `share/inventario/integracao.json` (`url`, `ip_url`, `chave`) e as rotas `/api/integracao/comodos` e `/api/integracao/itens` com `Authorization: Bearer <chave>`. Quem lê é o ResolvIA; a CronologIA recebe cômodos e equipamentos pelo arquivo do ResolvIA.
- **GerencIA**: `share/gerencia/integracao.json` e a API dele (contas a pagar; o Paguei daqui dá baixa lá), em `lib/gerencia.js`.

## Como o dono gosta (interface)

- Tudo em português do Brasil, sem palavras em inglês na tela.
- **Menos é mais**: textos curtos, sem explicar o porquê quando ele já está logo abaixo, sem avisos repetidos. Um nome de calendário vai em fonte menor e itálico; números e pontos em destaque.
- Botões lado a lado com o mesmo tamanho e alinhados; nada torto.
- O que depende da IA respeita o interruptor **Usar IA** (desligado, some ou fica inativo). O que depende de uma integração (cômodos, equipamentos, ResolvIA, GerencIA) só aparece com ela ligada; um botão de algo desligado fica inativo, não some sem explicação.
- Em http (sem https) não há câmera, microfone nem área de transferência: explicar em vez de abrir a galeria ou falhar calado.
- Pets são pessoas sem celular: não aparecem em rotinas, recompensas nem placar, só em remédios, e o aviso vai para o celular de alguém.
- Celular primeiro (390 px); com 1000 px ou mais, barra lateral. Tema claro e escuro.

## Conversa com o dono

Respostas curtas, em português. Ao terminar uma mudança: o que mudou, a versão e se está publicado.
