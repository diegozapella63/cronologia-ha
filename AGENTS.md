# Instruções para quem for mexer neste repositório (pessoas ou IAs)

> Leia também o `PADROES.md`: os padrões da família, iguais em todos os apps. Este arquivo diz o que é só deste app e como cada padrão é feito aqui.

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
frontend/src/                     código da interface (Lit, sem framework além disso); painel.js: a Tela cheia da Agora como
                                  o painel da casa (A seguir, Depois, Tarefas do dia, o placar, a folha do MemorIA); whenpick.js: horário e data no visual
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
- Cobertura: `tests/run.sh coverage` (`npm run test:coverage`) falha abaixo de 95% das linhas, e cada arquivo fica acima de 95%; código novo vem com o teste que passa por ele.
- Datas: nunca dependa do relógio real nos unitários (passe `now` ou use `mock.timers`); nos visuais, a ordem das rotinas depende da hora (períodos), então calcule o esperado a partir da hora.

## Arquivos iguais em todos os apps

A lista fica em `tools/iguais.py` e as regras, em **Arquivos iguais** e **Os apps conversam** do `PADROES.md`.

## Arquivos idênticos no ResolvIA

Estes arquivos têm cópia igual no `resolvia-ha`. Ao mudar um, mude o outro (e rode os testes dos dois):

- `frontend/src/equip-picker.js`, `frontend/src/chat.js` (a janela da Conversa), `frontend/src/voice.js`, `frontend/src/look.js`, `frontend/src/swipe.js`, `frontend/src/about.js` (Mais › Sobre), `frontend/src/selectsheet.js` (as caixas de seleção; igual também na MemorIA, GerencIA, InventarIA e EconomIA), `frontend/src/hatema.js` (o fundo e os cartões do tema do Home Assistant; igual em todos os apps)
- `cronologia/rootfs/app/lib/voice.js`, `ws.js`, `zip.js`, `ha.js`, `usage.js`, `phones.js` (os celulares de cada pessoa), `correria.js` (a ligação com o CorrerIA, igual também no MemorIA) (no ResolvIA, em `resolvia/rootfs/app/lib/`)

## Como os apps conversam

Pela pasta `/share` do Home Assistant e por eventos do HA. Mudar um formato aqui exige mudar o outro app junto.

- **CronologIA → CorrerIA** (1.95.0): `share/cronologia/integracao.json` leva `tela`, o endereço deste app no navegador dentro do Home Assistant (`/api/hassio_ingress/<token>`, do cabeçalho `X-Ingress-Path` que o ingress manda; guardado em `/data/tela.txt`). O CorrerIA abre `<tela>/?painel=1` num quadro na tela cheia dele: com `?painel=1` (`EMBED` no `cronologia-app.js`) a Agora já abre na Tela cheia, em qualquer largura, sem o botão de sair (só o relógio), e o Esc e o Voltar não saem; `parentHass`/`haWindow` (api.js) procuram o Home Assistant também no `window.top`. 1.97.0: com `?painel=1&conversa=1` (`EMBED_CHAT`; o CorrerIA 1.4.0 pede quando a `versao` daqui é 1.97.0 ou mais nova), o alto do painel ganha os botões da Conversa e do Sair, que avisam a página em volta por `postMessage` (`{painel: "conversa" | "sair" | "pronto"}`, só para `window.parent`, com a origem daqui); ela conta de volta `{conversa: {aberta, novidade}}` (`_conv`, aceito só de `window.parent` e da mesma origem). Com a Conversa aberta, a folha do MemorIA sai e fica uma coluna vazia (`#lugar-conversa`, `pn-chat-slot`), cujo lugar vai para a página em volta a cada mudança (`_tellChatSlot`: `{painel: "lugar", x, y, w, h}`; sem lugar, `w: 0`), e o CorrerIA desenha a Conversa por cima. Ctrl+Espaço (`_toggleChatKey`) abre e fecha a Conversa daqui ou, dentro do CorrerIA, avisa `conversa`.
- **CronologIA → EconomIA** (1.106.0): `share/cronologia/integracao.json` leva `remedios`, `[{nome, dose, vezes}]` (`medsList` em `lib/kinds.js`: os remédios cadastrados, um por nome, até 200; sem quem toma), para a **Reposição** do EconomIA, que só lê com a chave dela ligada lá.
- **ResolvIA → CronologIA**: `share/resolvia/integracao.json` (`prazos`, `sem_prazo`, `pontos`, `repete`, `comodos {lista, tarefas}`, `equipamentos {lista [{id, nome, comodo}], tarefas}`, `donos {lista: nome da pessoa}`, que vale sobre o De quem é daqui). Em `tarefas`, o valor é um id ou, com vários equipamentos (e por isso vários cômodos), uma lista de ids, lido em `lib/todos.js` (cache de 60 s).
- **CronologIA → ResolvIA**: `share/cronologia/integracao.json` (o placar e `donos_listas`, o De quem é antigo daqui, que o ResolvIA adota uma vez), lido pelo `lib/placar.js` do ResolvIA. O aviso de prazos do ResolvIA vai para os celulares ligados a cada pessoa no Home Assistant: os apps olham para a pessoa, nunca para um aparelho escolhido neles.
- **Eventos**: `resolvia_comodo` (CronologIA define o cômodo/equipamento de uma tarefa: `{entity_id, tarefa, comodo?, equipamento?, origem}`, onde comodo e equipamento são um id ou uma lista de ids), `resolvia_esquecer` (a CronologIA assume tarefas do ResolvIA), `cronologia_pontos` (o ResolvIA soma, desfaz ou troca pontos no placar), `cronologia_feito` e `cronologia_demerito` (automações do HA marcam feito ou tiram pontos). Detalhes em `lib/home.js` e `lib/mirror.js`.
- **InventarIA**: `share/inventario/integracao.json` (`url`, `ip_url`, `chave`) e as rotas `/api/integracao/comodos` e `/api/integracao/itens` com `Authorization: Bearer <chave>`. Quem lê é o ResolvIA; a CronologIA recebe cômodos e equipamentos pelo arquivo do ResolvIA.
- **GerencIA**: `share/gerencia/integracao.json` e a API dele (contas a pagar; o Paguei daqui dá baixa lá), em `lib/gerencia.js`.
- **MemorIA → CronologIA** (Agora › MemorIA, com **Mais › Configurações › Integrações › MemorIA › Trechos no Agora** ligado: `app.memoria_on`, desligado por padrão): `share/memoria/integracao.json` (`url`, `ip_url`, `chave`, `versao`, `agora`, `painel` = `/app/<slug>` do MemorIA no Home Assistant) e `GET /api/integracao/agora?usuario=<id do usuário do HA>&pessoa=<nome>&hora=HH:MM&dia=AAAA-MM-DD` com `Authorization: Bearer <chave>` → `{versao, pessoa, trechos: [{inicio, agora, ontem, amanha, fim?, bloco, bloco_id, cor (id da paleta do MemorIA), folha_id, titulo, texto, tipo (trecho|periodo|horario), periodo?, papel (pautado|quadriculado|pontilhado|liso), letra (mao|normal), outros, texto_formatado?}]}` (até 3: o que vale agora e os dois próximos horários, virando a meia-noite; 1.98.0: na Tela cheia, `&proximos=8`, que o MemorIA 1.33.0 atende, e a folha passa de um horário a outro com ‹ e › ou as setas do teclado, `_memoStep`, voltando à de agora em 3 minutos, `MEMO_BACK_MS`, ou no `app.memo_back` de **Integrações › MemorIA › Voltar para a folha de agora**, 1.99.0; ali a folha não é mais um link). `hora` e `dia` são o relógio do celular de quem olha (o MemorIA 1.15.1 calcula por eles, como no Agora dele; sem eles, o relógio do servidor). Lido em `lib/memoria.js` por tela (comando `cronologia/memoria/agora` com `hora` e `dia` da tela; guardado por pessoa e minuto, no máximo 55 s; na Tela cheia da Agora, `casa: true`, sem `usuario` e `pessoa`: as folhas de todos, como na Tela cheia do MemorIA); o card (`frontend/src/memoria-card.js`) mostra só a folha de agora, desenhada como a do MemorIA (a fonte Caveat em `frontend/fonts`), com o negrito, o maior e as cores do `texto_formatado` (MemorIA 1.32.0: `**negrito**`, `++maior++`, `{cor:texto}`; `memoParts`, a mesma regra do `lib/format.js` de lá; sem ele, o `texto`); na Tela cheia, só a folha, sem o cabeçalho, da altura da tela (o texto rola dentro dela); nada valendo agora, nenhum card.
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
**Padrão da família**: as regras de todos os apps estão no `PADROES.md` (igual nos 8 repositórios; leia antes de mexer). Como cada uma é feita aqui:
- Contrair e expandir: `_applyFolds` (a cada render: todo `.panel` cujo primeiro filho é um cabeçalho, `.mais-head` em Mais ou os da Agora, e cada `.field` de escolhas das janelas) e `_toggleFold`; a chave é o id do cartão, o `data-card` ou o título, em `cronologia-fechadas` e `cronologia-campos` no localStorage. Os ícones: `PAGE_IC` (as telas), `sheetIc` (as janelas) e `_labelIcons` (o ícone de cada opção e campo que não traz o seu, pelas palavras, `LABEL_IC`); o `tests/e2e/cr_familia.py` confere.
  - Aqui: as funções do Mais são Calendários, Rotinas, **Recompensas** (os ajustes do placar e os deméritos; até a 1.63 era uma aba de Configurações), Avisos e Férias. A paleta é a `PALETTE` de `frontend/src/util.js` (o modelo dos outros apps; `nearestColor` troca uma cor gravada fora dela pela mais próxima) e a Cor do dia é o `colorOfDay` de `look.js`. **Começar do zero** (`cronologia/data/reset`, `store.resetAll`) apaga as marcações e o placar; calendários, pessoas, deméritos, preferências e o que as férias mudaram nos calendários continuam.
- **A pessoa, não o calendário** (1.99.0): cada pessoa tem o seu calendário (`app.people[nome].cal`, em **Mais › Avisos › Pessoas e pets**; `false`: nenhum; sem escolha, o calendário com o primeiro nome dela, `personCalendar` em `lib/kinds.js`, usado pela tela e pelas ferramentas). O **Adicionar** pergunta **De quem** (`_renderWhoseField`: as pessoas com o calendário delas, depois os calendários de ninguém); a ferramenta `criar_compromisso` aceita `quem` no compromisso (`daPessoa`).
- **Nenhum, Casa ou Bens** (1.107.0, como no ResolvIA 2.79.0): com a área Bens do InventarIA, a tarefa e a manutenção começam em **Nenhum** (sem Cômodo nem Equipamento) e só mostram os campos depois de Casa ou Bens (`_renderRoomEquipMulti` em `tasks.js`). Um site citado na tela é um link que abre o site (`a.site`).
- **Inativos no fim, recolhidos**: o que está inativo, cancelado, encerrado, arquivado ou ignorado de propósito (por uma opção, como Nunca considerar) fica numa seção no fim da lista, recolhida por padrão, com o nome e a contagem (ex.: **Arquivados (3)**); abre num toque. Vale para todos os apps da família.
- **Caixas de seleção no visual do app**: nenhuma janela nativa do celular. Toda caixa de seleção abre pelo selectsheet.js; sugestões de texto (no lugar do `<datalist>`) e horários (sem AM/PM) também no visual do app; a caixa fechada igual aos outros campos (altura, cantos, seta), no claro e no escuro.
  - Aqui: os horários e as datas são o `timeField`/`dateField` de `frontend/src/whenpick.js` (a janela com as horas e os minutos, ou o mês, com as classes do selectsheet.js), nunca `<input type="time|date">`; a seção recolhida é o `offFold` de `frontend/src/offfold.js` (calendários ocultos, listas do ResolvIA deixadas de fora, rotinas pausadas nas férias). O `tests/frontend-pickers.test.mjs` confere que nenhuma tela volta a usar os do celular.

1.107.2: `frontend/src/teclado.js` (`tecladoCalmo`, chamado na entrada da tela; o mesmo código em todos os apps): com o foco num campo de texto, ou quando o teclado muda a altura da tela, as páginas em volta do app (a do Home Assistant) voltam para o começo. `SO_MATERIAL`/`soMaterial` no `lib/ai.js`: a guarda na frente de toda instrução que vai para a IA (o `tests/ai-guarda.test.mjs` confere que nenhuma chamada fica sem).

1.107.3: na Conversa, no celular (`noCelular()`: `(hover: none) and (pointer: coarse)`, o dedo como jeito principal), o Enter é uma linha nova e o botão envia (`enterkeyhint="enter"`); com teclado de verdade, o Enter envia. Vale em todos os apps da família.

1.108.0: a ferramenta `cadastros` (CorrerIA) leva `comodos` e `equipamentos` (os nomes, de `c.rooms`/`c.equips` do catálogo) nas rotinas e manutenções e aceita `comodo` (só as de um cômodo, pelo nome sem acento nem maiúsculas): a Ronda da casa do CorrerIA 1.21.2 pede assim.

1.108.1: os cômodos de uma rotina, manutenção ou tarefa vão até 40 (`MAX_ROOMS` no `nameList` do `lib/kinds.js`, e os mesmos 40 no `server.js` e no `lib/todos.js`); eram 10, e o Todos de uma casa com 12 cômodos voltava com os dois últimos desmarcados. Os equipamentos continuam em 10.

1.109.0: `?aba=rotinas` (`openTab` no `routes.js`) abre Mais › Rotinas: o link de uma ronda do CorrerIA 1.22.0.

1.109.1: o mesmo também pelo resto do endereço (`/app/<slug>/mais/rotinas[/comodo/<nome>]`, `/calendario`, `/recompensas`; o cômodo, também em `?aba=rotinas&comodo=`, `openRoom`, vai para a busca da tela, `_catQ`), que o painel do Home Assistant passa por mensagem (`watchHaPath` e `haLink` no `routes.js`): vale para a tela que já estava aberta.

1.110.0: a ferramenta `ler_arquivo` (leitura; `anexo`: os tipos do `anexos.js`, foto ou PDF; o CorrerIA 1.24.0 manda o arquivo da conversa em `anexo`, fora dos argumentos; `chamar(..., {anexo})`, `_ler_arquivo`): o `ai.extract` da tela (`ler` no `server.js`, que respeita o Usar IA) e devolve os compromissos achados, sem criar nada; a IA do CorrerIA cria depois com `criar_compromisso`. O pedido da rota aceita 22 MB.

1.111.0: as lembranças da casa (a Memória da IA do CorrerIA 1.28.0, em `share/correria/lembrancas.json`: `{lembrancas: [frases]}`) vão na frente de toda instrução da IA daqui, logo depois da guarda, só com a opção CorrerIA ligada: `lib/lembrancas.js` (`lerLembrancas`, `lembrancasTexto`, relido uma vez por minuto; igual nos três apps em Node, em `tools/iguais.py`), o `comLembrancas` do `lib/ai.js` (dentro do `soMaterial`) e, no `server.js`, `comLembrancas(() => (correriaOn() ? lembrancasTexto() : ""))`; `LEMBRANCAS_ARQ` troca o arquivo nos testes (`tests/lembrancas.test.mjs`).

1.112.0 (o dono: "e se eu não usar o CorrerIA e só decidir usar o InventarIA e o ResolvIA?"; "memória compartilhada"; "deixa claro na observação das opções que a memória é compartilhada"): a **Memória da IA** é uma só, da casa, de todos os apps, em `share/familia/memoria_ia.json` (`{versao: 1, gravado_em, lista: [{id, texto, em, app, quem?}]}`, até 60 frases de 240 letras, 600; `MEMORIA_IA_ARQ` troca o arquivo nos testes), e não depende mais da opção CorrerIA nem do arquivo do CorrerIA (o `share/correria/lembrancas.json` acabou). `lib/memoria-ia.js` (igual nos três apps em Node, no lugar do `lib/lembrancas.js`; nos em Python, `memoria_ia.py`: `ler`, `lembrar`, `esquecer`, `memoriaTexto`, `comando`; lê de novo a cada 30 s e antes de gravar), os comandos `cronologia/memoria_ia/get|add {texto}|del {frase}` → `{lista, max}` (o `id` da mensagem é do WebSocket) e, no `server.js`, `comLembrancas(() => memoriaIa.memoriaTexto(MEMORIA_ARQ))`; na tela, o `frontend/src/memoria-ia.js` (`MemoriaIaMixin`, igual nos três: `_renderMemoriaIa()` logo depois do `_renderAiPanel()`, só com Usar IA ligado; quem usa oferece o `_memoriaIaCall`). Testes: `tests/memoria-ia.test.mjs` e `tests/integration/memoria-ia.test.mjs`. O texto do cartão é o mesmo em todos os apps: «Uma memória só, da casa, compartilhada por todos os apps: o que você escreve aqui a IA lembra em toda conversa, em qualquer um deles.» A memória não entra no Exportar nem no Começar do zero de um app.

1.112.1: o cartão Memória da IA lê a lista de novo quando a última leitura tem mais de meio minuto (`MEMORIA_IA_RELER_MS`, `_memIaAt` no `frontend/src/memoria-ia.js`): antes lia uma vez só por abertura do app e não mostrava o que outro app escreveu.

1.112.2: a vez de gravar a Memória da IA entre os apps (`lib/memoria-ia.js: `naVez``: uma pasta `memoria_ia.json.trava` ao lado do arquivo, criada num passo só; espera até 3 s, tira a que ficou de um app que caiu, há mais de 10 s, e sem a vez grava assim mesmo; o arquivo temporário leva um sufixo ao acaso). Antes, dois apps gravando no mesmo instante liam a mesma lista e um apagava a frase do outro (num teste com 40 gravações simultâneas, uma se perdia). Um caminho que não é uma pasta não prende o app (espera só o prazo).

1.112.3 (o dono: "eu aumento o campo e quando volta, volta ao original; ele deve salvar o tamanho, isso era nosso padrão"): o campo do cartão Memória da IA tinha `data-size="off"` e ficava fora do `textareas.js`; saiu. O `data-size="off"` é só para o campo que cresce sozinho (a caixa da Conversa, as perguntas prontas, o item lido pela IA).

1.112.4 (o dono: "esses campos com scroll quebram as pernas"): o campo da Memória da IA cresce com o texto (`field-sizing: content`, até 40vh), sem rolagem dentro dele; uma linha continua com 50 px e o tamanho puxado pelo canto continua guardado.

1.112.4 (o dono: "sempre que eu clicar na conversa da IA deve iniciar com o chat"; vale em todos os apps): `chatFresh()` no `chat.js` (igual nos três) fecha as perguntas prontas, o Editar perguntas e o menu do clipe; o `_openChat` do `chat-panel.js` chama.

1.113.0 (o dono, à lista do que a IA não fazia: "todas"): no `editar_compromisso`, `repete` e `repete_ate` (a regra nova deste dia em diante: num que se repete, `recurrence_range` THISANDFUTURE; `nao` acaba a série neste dia, com `UNTIL`); a ferramenta `ferias` (`de` e `ate`, ou `cancelar`: o `away` do `store.setApp`, e o `awaySync` do server.js faz o `home.rebuild` e o `awayCal.sync`, como o `cronologia/prefs/set_app`). Pausar uma rotina sozinha não existe na tela (só as Férias). Testes: os de 1.113.0 no `tests/ferramentas.test.mjs`.

1.115.2 (o dono: "revisar as 20 perguntas padrões da IA, tem algumas muito específicas"): as **perguntas prontas** da Conversa (as 6 à vista e as 20 do Mais perguntas) são gerais e valem em qualquer casa: nada de itens, valores, compromissos, cômodos ou nomes inventados («Adiciona leite na lista», «Marca dentista sexta às 15h», «Onde está o liquidificador?»); o pedido com o detalhe é o que a pessoa escreve. Vale em todos os apps da família.

## Conversa com o dono

Respostas curtas, em português. Ao terminar uma mudança: o que mudou, a versão e se está publicado.

1.114.0 (o dono, sobre o Selecionar do OdisseIA: "veja se os outros apps estão assim"): **Mais › Rotinas › Selecionar** (`models.js`: `_csel` `{path, kind, ids}`, um tipo só; `_cselStart`, `_cselToggle`, `_cselAll`, `_cselEnd`, `_cselPicked`, a linha com `.cat-mark` e o `contextmenu`; `.res-head`, `.sel-head` e `.sel-bar` com Apagar e Alterar; a janela `catbulk`, `_renderCatBulkSheet`: Quem faz, Pontos e Cômodos em Manter de início). A seleção é a entrada `rvSel` do histórico (o `_onPopState` sai; `_leaveSel` no `_go`, `_goMenu` e `_goTab`). O servidor: `cronologia/catalog/bulk {acao, itens}` → `ferramentas.lote` (o `editar_compromisso` e o `apagar_compromisso` com `este_e_proximos`; `{feitos, falhas, desfazer}`; o Desfazer manda o `desfazer`). O `editar_compromisso` aceita `comodos` e devolve o id lido de novo (`idCriado`). Testes: `lote` no `tests/ferramentas.test.mjs` e `tests/e2e/cr_selecionar.py`.

1.115.0 (o dono: "tem alguns lugares no cronologia que está sem a opção de retrair"): todo `.sheet .field` com `.flabel` (ou `.flabel-row > .flabel`, como o Horário com o Dia todo) fecha, não só os de escolhas; um campo dentro de outro (o Até de Quando) vai junto. Fechado, o escolhido ou escrito vem depois do título: a `.fl-val` do próprio campo ou, sem ela, o `data-val` do `.flabel` (`frontend/src/campovalor.js`, igual no ResolvIA e no MemorIA: `fieldValOf`, os botões marcados, senão o texto escrito, senão as horas dos `.pickf`; `paintFieldVals` no `_fieldVals`, também num `requestAnimationFrame` depois do render, porque o `date-pick` desenha depois), desenhado pelo `::before` com `order: 1`. O toque no título de um `<label class="field">` (o Título) não põe o foco na caixa (`preventDefault`); o Dia todo continua só a chave. O `_go` só espera quando a seleção tem a entrada dela (`rvSel`): sem isso ele nunca era síncrono (o `cr_about` pegava). Teste: `tests/e2e/cr_campos.py`.

1.115.1 (o dono: "Nenhum, Casa e Bens também deve estar em bloco retraível"): o `.where-field` do `_renderRoomEquipMulti` (`tasks.js`) tem o `.flabel` **Onde** (o ícone `map-pin` pelo `LABEL_IC`) e por isso fecha como os outros campos (o 1.115.0 dobra todo campo com título); fechado, **Onde · Casa**. Testes: `tests/ui/bens.test.mjs` e `tests/ui/tarefas.test.mjs`.
