# Instruções para quem for mexer neste repositório (pessoas ou IAs)

CronologIA é um app (add-on) do Home Assistant: agenda da família com modelos (remédio, conta, rotina da casa, manutenção), placar de recompensas e leitura por IA. Faz parte de uma família de apps do mesmo dono, que conversam entre si pelo Home Assistant:

| App | Repositório | O que é |
|---|---|---|
| CronologIA | `diegozapella63/cronologia-ha` (este) | calendário, rotinas, remédios, placar |
| ResolvIA | `diegozapella63/resolvia-ha` | listas de tarefas (to-do do HA), pontos, repetição |
| InventarIA | `diegozapella63/inventario-ha` | inventário da casa: cômodos e itens (equipamentos) |
| GerencIA | `diegozapella63/gerencia-ha` | finanças: contas a pagar |
| MemorIA | `diegozapella63/memoria-ha` | cadernos de anotação: os trechos de cada horário no Agora |
| CorrerIA | `diegozapella63/correria-ha` | o contato no WhatsApp e o servidor MCP da casa (Claude e Gemini): usa as ferramentas daqui |

O Home Assistant instala direto do GitHub (`repository.yaml` + `cronologia/config.yaml`), a partir da branch `main`. Por isso o JavaScript gerado da interface fica no repositório: o que está em `main` é o que os usuários recebem.

## Estrutura

```
cronologia/config.yaml            versão e opções do app
cronologia/CHANGELOG.md           o que mudou em cada versão (o HA mostra ao atualizar)
cronologia/DOCS.md                manual do usuário (aba Documentação no HA)
cronologia/rootfs/app/server.js   servidor (Node 22, sem dependências: só módulos do Node)
cronologia/rootfs/app/lib/        regras: kinds.js (modelos e a tela Agora), home.js, store.js, mirror.js, todos.js, ferramentas.js e correria.js (CorrerIA)...
cronologia/rootfs/app/www/        interface já gerada (não editar à mão)
frontend/src/                     código da interface (Lit, sem framework além disso); whenpick.js: horário e data no visual
                                  do app; offfold.js: a seção dos inativos no fim, recolhida
preview/cronologia-preview.html   prévia gerada pelo build, abre sem servidor
dev/fake-ha.mjs                   Home Assistant simulado para desenvolver e testar
tests/                            testes (ver tests/README.md)
```

No `config.yaml`, `url` aponta para o repositório e `panel_admin: false` fica como está: a agenda é da casa toda (remédios, rotinas, contas, placar), então o painel aparece também para quem não é administrador do Home Assistant; o que é de administrador (adicionar calendários, integrações do HA) a própria tela leva ao HA, que pede a permissão.

## Checklist de toda mudança

1. Implementar. Servidor: só módulos nativos do Node (o WebSocket é o `lib/ws.js` próprio). Interface: Lit, componentes e mixins em `frontend/src`.
2. Subir a versão, escrita num lugar só: `cronologia/config.yaml` (`version:`). O servidor lê de lá (`lib/version.js`; na imagem, `/app/config.yaml`, que o Dockerfile copia), a tela recebe do servidor e a prévia, do build. Correção = patch (1.37.1 → 1.37.2); novidade = minor (1.37.x → 1.38.0).
3. Gerar a interface: `cd frontend && npm install && npm run build`. Faça commit também de `cronologia/rootfs/app/www/cronologia.js` e `preview/cronologia-preview.html` (o `tests/version.test.mjs` confere que a prévia tem a versão do config.yaml).
4. Testar: `tests/run.sh` (o mesmo que `npm test`: unitários, telas montadas e integração, cerca de um minuto) e os visuais ligados à mudança: `tests/e2e/run.sh cr_xxx ...` (ver tests/README.md). Toda mudança ou bug corrigido vem com o teste dele.
5. `cronologia/CHANGELOG.md`: nova seção no topo, em português, do ponto de vista de quem usa (o que mudou na tela, não no código).
6. `cronologia/DOCS.md` quando muda o comportamento ou aparece algo novo.
7. Commit em `main` com mensagem em português ("CronologIA 1.38.0: ..."), `git pull --rebase` e push. O GitHub roda todos os testes a cada push (aba Actions).

## Testes

- `tests/run.sh` (ou `npm test`): unitários (`tests/*.test.mjs`), telas montadas (`tests/ui/`) e integração (`tests/integration/`), com `node:test`, sem instalar nada; `tests/run.sh unit|ui|integration|coverage` roda uma parte. Cada arquivo de integração sobe o HA simulado e o servidor em portas livres.
- `tests/e2e/run.sh`: testes visuais em Python + Playwright (`pip install playwright && playwright install chromium`). Precisam dos outros apps ao lado deste repositório (`../resolvia-ha`, `../inventario-ha`, `../gerencia-ha`) ou nas variáveis `E2E_*`. Usam as portas fixas 8099/8123/8097: não rode duas baterias ao mesmo tempo.
- Datas: nunca dependa do relógio real nos unitários (passe `now` ou use `mock.timers`); nos visuais, a ordem das rotinas depende da hora (períodos), então calcule o esperado a partir da hora.

## Arquivos iguais em todos os apps

A lista dos arquivos que são iguais nos apps da família fica em `tools/iguais.py` (ele também é igual em todos):
`python3 tools/iguais.py` confere os daqui com os dos apps ao lado (`../resolvia-ha`, ...), e o GitHub confere a cada
push (job **Arquivos iguais aos dos outros apps**, que baixa os outros apps). Mudou um arquivo da lista? Copie para os
outros apps do grupo e publique todos. Um arquivo que passa a ser igual entra em `GRUPOS`, aqui e nas cópias.

`share/<app>/integracao.json` começa igual em todos os apps: `app` (o id, como no `correria.json`), `nome`, `versao` e
`gravado_em` (ISO 8601 com o fuso), depois os campos de cada app. O ResolvIA e o CronologIA ainda gravam o nome em
`app` (as versões de antes conferem por ele) e quem lê aceita os dois; o id entra numa próxima versão.

## Arquivos idênticos no ResolvIA

Estes arquivos têm cópia igual no `resolvia-ha`. Ao mudar um, mude o outro (e rode os testes dos dois):

- `frontend/src/equip-picker.js`, `frontend/src/chat.js` (a janela da Conversa), `frontend/src/voice.js`, `frontend/src/look.js`, `frontend/src/swipe.js`, `frontend/src/about.js` (Mais › Sobre), `frontend/src/selectsheet.js` (as caixas de seleção; igual também na MemorIA, GerencIA, InventarIA e EconomIA)
- `cronologia/rootfs/app/lib/voice.js`, `ws.js`, `zip.js`, `ha.js`, `usage.js`, `phones.js` (os celulares de cada pessoa), `correria.js` (a ligação com o CorrerIA, igual também no MemorIA) (no ResolvIA, em `resolvia/rootfs/app/lib/`)

## Como os apps conversam

Pela pasta `/share` do Home Assistant e por eventos do HA. Mudar um formato aqui exige mudar o outro app junto.

- **ResolvIA → CronologIA**: `share/resolvia/integracao.json` (`prazos`, `sem_prazo`, `pontos`, `repete`, `comodos {lista, tarefas}`, `equipamentos {lista [{id, nome, comodo}], tarefas}`, `donos {lista: nome da pessoa}`, que vale sobre o De quem é daqui). Em `tarefas`, o valor é um id ou, com vários equipamentos (e por isso vários cômodos), uma lista de ids, lido em `lib/todos.js` (cache de 60 s).
- **CronologIA → ResolvIA**: `share/cronologia/integracao.json` (o placar e `donos_listas`, o De quem é antigo daqui, que o ResolvIA adota uma vez), lido pelo `lib/placar.js` do ResolvIA. O aviso de prazos do ResolvIA vai para os celulares ligados a cada pessoa no Home Assistant: os apps olham para a pessoa, nunca para um aparelho escolhido neles.
- **Eventos**: `resolvia_comodo` (CronologIA define o cômodo/equipamento de uma tarefa: `{entity_id, tarefa, comodo?, equipamento?, origem}`, onde comodo e equipamento são um id ou uma lista de ids), `resolvia_esquecer` (a CronologIA assume tarefas do ResolvIA), `cronologia_pontos` (o ResolvIA soma, desfaz ou troca pontos no placar), `cronologia_feito` e `cronologia_demerito` (automações do HA marcam feito ou tiram pontos). Detalhes em `lib/home.js` e `lib/mirror.js`.
- **InventarIA**: `share/inventario/integracao.json` (`url`, `ip_url`, `chave`) e as rotas `/api/integracao/comodos` e `/api/integracao/itens` com `Authorization: Bearer <chave>`. Quem lê é o ResolvIA; a CronologIA recebe cômodos e equipamentos pelo arquivo do ResolvIA.
- **GerencIA**: `share/gerencia/integracao.json` e a API dele (contas a pagar; o Paguei daqui dá baixa lá), em `lib/gerencia.js`.
- **MemorIA → CronologIA** (Agora › MemorIA, com **Mais › Configurações › Integrações › MemorIA › Trechos no Agora** ligado: `app.memoria_on`, desligado por padrão): `share/memoria/integracao.json` (`url`, `ip_url`, `chave`, `versao`, `agora`, `painel` = `/app/<slug>` do MemorIA no Home Assistant) e `GET /api/integracao/agora?usuario=<id do usuário do HA>&pessoa=<nome>&hora=HH:MM&dia=AAAA-MM-DD` com `Authorization: Bearer <chave>` → `{versao, pessoa, trechos: [{inicio, agora, ontem, amanha, fim?, bloco, bloco_id, cor (id da paleta do MemorIA), folha_id, titulo, texto, tipo (trecho|periodo|horario), periodo?, papel (pautado|quadriculado|pontilhado|liso), letra (mao|normal), outros}]}` (até 3: o que vale agora e os dois próximos horários, virando a meia-noite). `hora` e `dia` são o relógio do celular de quem olha (o MemorIA 1.15.1 calcula por eles, como no Agora dele; sem eles, o relógio do servidor). Lido em `lib/memoria.js` por tela (comando `cronologia/memoria/agora` com `hora` e `dia` da tela; guardado por pessoa e minuto, no máximo 55 s); o card (`frontend/src/memoria-card.js`) mostra só a folha de agora, desenhada como a do MemorIA (a fonte Caveat em `frontend/fonts`); nada valendo agora, nenhum card.
- **CorrerIA** (o WhatsApp, e o Claude e o Gemini como servidor MCP): com **Mais › Configurações › Integrações › CorrerIA** ligado (`app.correria_on`; desligado por padrão, sem depender do Usar IA), este app grava `share/cronologia/correria.json` (`app: cronologia`, `nome`, `assunto`, `url`, `ip_url`, `chave`, `versao`, `ferramentas`, `gravado_em`; 600, atômico; a chave própria em `/data/correria.key`, 600) e responde em `GET /api/integracao/ferramentas` → `{versao, instrucoes, ferramentas: [{nome, titulo, descricao, entrada (JSON Schema), grava, apaga}]}` e `POST` `{nome, argumentos, pessoa, cliente}` → `{texto}` (400 `{erro}` dizendo o que vale; 404 ferramenta desconhecida; 401 desligado ou chave errada, comparada em tempo constante). A rota passa por fora do ingress (o resto continua só pelo ingress). As ferramentas ficam em `lib/ferramentas.js` (resumo, agenda, cadastros, placar, criar/editar/apagar compromisso, marcar feito, pular, dar pontos) e usam as mesmas funções da tela (`createEvent`/`changeEvent` do `server.js`, `home.check`, `skip`, `maintDone`, `extraPoints`, `demerit`); os ids são a chave da ocorrência (`calendar.x|uid|recurrence_id ou início`) e, nas contas do GerencIA, `gerencia|<id>`. `pessoa` vira o quem fez (Extrato com `via` = `cliente`); o último uso vai para a tela pelo índice da Agora (`correria.ultimo`). O contrato é o mesmo para todos os apps da família (ver o AGENTS.md do CorrerIA).

## Como o dono gosta (interface)

- Tudo em português do Brasil, sem palavras em inglês na tela.
- **Menos é mais**: textos curtos, sem explicar o porquê quando ele já está logo abaixo, sem avisos repetidos. Um nome de calendário vai em fonte menor e itálico; números e pontos em destaque.
- Botões lado a lado com o mesmo tamanho e alinhados; nada torto.
- O que depende da IA respeita o interruptor **Usar IA** (desligado, some ou fica inativo). O que depende de uma integração (cômodos, equipamentos, ResolvIA, GerencIA) só aparece com ela ligada; um botão de algo desligado fica inativo, não some sem explicação.
- Em http (sem https) não há câmera, microfone nem área de transferência: explicar em vez de abrir a galeria ou falhar calado.
- Pets são pessoas sem celular: não aparecem em rotinas, recompensas nem placar, só em remédios, e o aviso vai para a pessoa escolhida para ele (ou quem cuida).
- Os apps olham para a pessoa, nunca para o aparelho: os celulares são os ligados a cada pessoa no Home Assistant. Nada de escolher um celular nem mostrar nome de aparelho na tela.
- Celular primeiro (390 px); com 1000 px ou mais, barra lateral. Tema claro e escuro.
- **Padrão da família (igual em todos os apps)**
  - Barra de baixo: o botão do meio é **Adicionar** (no EconomIA, a ação principal dele); **Buscar**, quando houver, é a 2ª aba; **Mais** é a última, com o ícone de três pontos.
  - **Mais** é um menu: as funções do app, depois **Configurações** e por último **Sobre**. Os relatórios se chamam **Relatório de/do …**.
  - **Configurações** em 4 abas, nesta ordem: **Integrações › Dados › Aparência › Opções**; abre em Integrações. Nenhuma função do app vira aba.
  - **Integrações**, nesta ordem: os outros apps da família › CorrerIA › **IA do Home Assistant** (o Usar IA) › Falar › Uso da IA › Sensores.
  - IA: as entradas se chamam **Colar mensagem**, **Escolher fotos** (ou **Escolher fotos ou PDF**, onde PDF vale) e **Digitalizar com IA**; a conversa recomeça em **Nova conversa**; o Voltar do celular fecha a Conversa.
  - Palavras: **Apagar** (nunca Excluir); **Testar no meu celular**; **Home Assistant Cloud** (não Nabu Casa); recolhidos como **Nome (n)**; o CHANGELOG começa com "# Mudanças".
  - **Dados**: Exportar › Backup na pasta share › Importar › Versões anteriores › Onde ficam os dados › Começar do zero.
  - **Aparência**: o tema vale no aparelho (começa em Sistema); a cor do app vale para a casa toda; uma paleta só, de 12 cores (Vermelho, Coral, Laranja, Ouro, Verde, Menta, Turquesa, Azul, Índigo, Lilás, Rosa, Grafite); a Cor do dia é a mesma em todos os apps (as 11 sem o Grafite, pelo número do dia).
  - Aqui: as funções do Mais são Calendários, Rotinas, **Recompensas** (os ajustes do placar e os deméritos; até a 1.63 era uma aba de Configurações), Avisos e Férias. A paleta é a `PALETTE` de `frontend/src/util.js` (o modelo dos outros apps; `nearestColor` troca uma cor gravada fora dela pela mais próxima) e a Cor do dia é o `colorOfDay` de `look.js`. **Começar do zero** (`cronologia/data/reset`, `store.resetAll`) apaga as marcações e o placar; calendários, pessoas, deméritos, preferências e o que as férias mudaram nos calendários continuam.
- **Inativos no fim, recolhidos**: o que está inativo, cancelado, encerrado, arquivado ou ignorado de propósito (por uma opção, como Nunca considerar) fica numa seção no fim da lista, recolhida por padrão, com o nome e a contagem (ex.: **Arquivados (3)**); abre num toque. Vale para todos os apps da família.
- **Caixas de seleção no visual do app**: nenhuma janela nativa do celular. Toda caixa de seleção abre pelo selectsheet.js; sugestões de texto (no lugar do `<datalist>`) e horários (sem AM/PM) também no visual do app; a caixa fechada igual aos outros campos (altura, cantos, seta), no claro e no escuro.
  - Aqui: os horários e as datas são o `timeField`/`dateField` de `frontend/src/whenpick.js` (a janela com as horas e os minutos, ou o mês, com as classes do selectsheet.js), nunca `<input type="time|date">`; a seção recolhida é o `offFold` de `frontend/src/offfold.js` (calendários ocultos, listas do ResolvIA deixadas de fora, rotinas pausadas nas férias). O `tests/frontend-pickers.test.mjs` confere que nenhuma tela volta a usar os do celular.

## Conversa com o dono

Respostas curtas, em português. Ao terminar uma mudança: o que mudou, a versão e se está publicado.
