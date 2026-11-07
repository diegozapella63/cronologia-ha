# Changelog

## 1.56.1

- **Calendário › Mês**: um compromisso que não foi marcado **Feito** (como um dia da hospedagem) também deixa o dia vermelho; antes, o dia ficava verde.

## 1.56.0

- Com **Usar recompensas** desligado, a aba **Recompensas** da barra de baixo (e da barra lateral) dá lugar a **Rotinas**, que sai do menu Mais. Ligado de novo em **Mais › Configurações › Recompensas**, tudo volta como era.
- **Calendário › Mês**: o número de um dia que já passou fica **verde** quando tudo o que havia para marcar foi feito e **vermelho** quando algo ficou para trás (um remédio sem Tomei, uma rotina, uma tarefa, uma conta). Hoje só fica verde; os dias que vêm não mudam.
- Um evento de vários dias (uma hospedagem, uma viagem) é marcado **Feito** dia a dia: marcar o dia 1 não marca os outros. Um Feito dado antes desta versão num evento assim precisa ser marcado de novo no dia certo.

## 1.55.0

- **Mais › Configurações**: a aba **Placar** agora se chama **Recompensas** e tem **Usar recompensas** no alto, como as outras opções (sai o **Desligar o placar** do fim). Desligado, não aparece mais nada, nem os **deméritos**; em Integrações somem o evento `cronologia_demerito` e o sensor do placar. Ligado de novo, volta com as mesmas pessoas.
- Avisos e testes acham o celular de cada pessoa pelo aparelho do app Home Assistant ligado a ela, mesmo quando o rastreador tem outro nome (como "Celular Diego" sendo `goku_phone`). Um rastreador do roteador não conta como celular.
- O teste (o sininho em **Avisos** e o **Testar** do lembrete diário) vai para todos os aparelhos da pessoa; se um falhar, os outros recebem. O registro do app diz para onde foi.

## 1.54.0

- **Avisos de remédio** pela pessoa, não pelo aparelho: o aviso vai para os celulares ligados a cada pessoa no Home Assistant (**Configurações › Pessoas**), e **Mais › Avisos** mostra só as pessoas, sem nome de celular.
- Quem não tem celular (pet, criança) escolhe embaixo do nome para quem vão os avisos: **No celular de quem cuida** ou no de uma pessoa da casa. **Quem cuida** também é escolhido entre as pessoas.
- Os celulares escolhidos antes viram, sozinhos, as pessoas donas deles.
- Remédios de hoje, o remédio e o formulário dizem de quem é o celular ("Aviso no celular de Ana"). O **Lembrete diário** do placar mostra só as pessoas, e o **Testar** manda para o seu celular.

## 1.53.5

- O aviso de prazos do ResolvIA (2.44.1 ou mais novo) não usa mais o celular escolhido aqui em **Mais › Avisos**: vai para os celulares ligados a cada pessoa no Home Assistant.

## 1.53.4

- Com o placar desligado, as manutenções e rotinas levadas para o ResolvIA deixam de dizer "+N pontos" nas notas.

## 1.53.3

- Os textos só dizem o que vai acontecer:
  - **Avisar no celular** desligado (Mais › Avisos): o remédio diz **Avisos no celular desligados**, sem o sininho ao lado do nome e sem o **Aviso no celular** no formulário.
  - **Avisar de novo se não tomar: Não**: o remédio diz só **Na hora**, e **Quem cuida** recebe os avisos de quem está sem celular. O "e de quem cuida" de Remédios de hoje só aparece quando vai algo para lá.
  - Remédios de hoje todos sem aviso: **Sem aviso no celular**, em vez de pedir para escolher os celulares.
  - Placar desligado: a rotina, a manutenção, **Qualquer hora** e **Levar para o ResolvIA** não falam de pontos.
  - **Lembrete diário**: com os avisos de remédio desligados, não manda escolher o celular em Avisos (lá ele não aparece).

## 1.53.2

- O aviso de prazos do ResolvIA (2.43.0 ou mais novo) vai para o celular de cada pessoa escolhido aqui em **Mais › Avisos**.

## 1.53.1

- Tocar num aviso da CronologIA no celular (remédio, rotina, placar) volta a abrir o app. No Home Assistant 2026.2 ou mais novo, ele abria o painel inicial.

## 1.53.0

- **De quem é cada lista** agora se escolhe no ResolvIA (2.42.0 ou mais novo), em **⋯ › Personalizar**. Em **Tarefas do ResolvIA**, cada lista só mostra de quem é. O que estava escolhido aqui vai sozinho para o ResolvIA, uma vez só. Com um ResolvIA mais antigo, tudo continua como antes.

## 1.52.0

- **Todos** nos cômodos: na rotina, na manutenção e no **Novo › Tarefa**, o botão **Todos** (ao lado de **Nenhum**) marca a casa inteira; tocar de novo desmarca. A etiqueta vira uma só, **Todos os cômodos**, em vez de um cômodo atrás do outro, e a busca de equipamento procura na casa toda.

## 1.51.0

- **Mais › Sobre**, a última linha do menu: quem faz o app (**CorrerIA Code**, desenvolvimento de softwares, e por que esse nome), os apps da família (CronologIA, ResolvIA, GerencIA, InventarIA, EconomIA e MemorIA), cada um com uma linha e o link para o GitHub, e o botão **Meu GitHub**.

## 1.50.1

- **Vários cômodos na Rotina da casa**: o campo **Cômodo** da rotina também deixa marcar mais de um (cada cômodo liga e desliga). A tarefa da rotina no ResolvIA recebe todos.

## 1.50.0

- **Vários cômodos na manutenção** e no **Novo › Tarefa** (do ResolvIA): sem equipamento, o campo **Cômodo** deixa marcar mais de um (cada cômodo liga e desliga). No evento fica `Cômodos: Quarto; Sala`, e o ResolvIA (2.39.2 ou mais novo) recebe todos.

## 1.49.0

- **Cômodo nas rotinas**: o formulário da **Rotina da casa** ganha o campo **Cômodo** (com os cômodos do InventarIA ligados no ResolvIA). Ele aparece como etiqueta em **Mais › Rotinas** e na tela da rotina, o Buscar acha a rotina pelo cômodo, e a tarefa da rotina no ResolvIA recebe o cômodo. No evento fica `Cômodo: Quarto`.
- **Calendário › Lista**: um compromisso de vários dias (uma hospedagem) aparece em cada um dos seus dias (Dia 1/6, 2/6…), e não só no primeiro.

## 1.48.3

- **Etiquetas de equipamento**: com vários equipamentos, aparece só o primeiro e "+N", sem os cômodos, numa linha só. Com um equipamento, continuam o cômodo e o equipamento.

## 1.48.2

- **Agora**: um compromisso do dia todo marcado como **Feito** sai da tela Agora (continua no Calendário, feito).

## 1.48.1

- **Agora**: os compromissos do dia todo (uma hospedagem, um aniversário) ficam dentro do card **Hoje**, logo abaixo do título, e não mais soltos no fim da tela quando não sobra nada com horário. Os que duram vários dias dizem até quando ("· até 6 nov").

## 1.48.0

- **Lembrete diário do placar** em **Mais › Configurações › Placar**: uma vez por dia, na hora escolhida (Manhã, Tarde, Noite ou um horário exato), o celular de quem participa recebe os pontos e quem está ganhando, por exemplo "Diego na frente por 10 pontos: Diego 135 × Andressa 125. Fecha em 5 dias.".
  - **Testar** manda agora para o seu celular.
  - O lembrete não vai nas férias.
- Tocar no lembrete ou no aviso de **Placar fechado** abre o app direto na aba **Recompensas**.

## 1.47.0

- **Modo férias** num card próprio na tela Agora, em tons de céu e areia (a mesma cor todo dia), com o avião em destaque, **até quando**, **Dia 1 de 8** com uma barra, o que fica pausado e que os remédios continuam, e o botão **Encerrar férias**. Antes de começar, mostra **Férias marcadas**, a partir de quando e por quantos dias, com **Cancelar férias**.
- Nas férias, a linha de baixo do título diz **de férias** (e não "tudo feito hoje").

## 1.46.3

- **Remédios de hoje**: a dose aparece como "Dose: 1" (antes ficava só o "1").
- O aviso embaixo do card não chama o pet de dono de celular: diz de quem é o celular que recebe o aviso dele ("Avisa no celular de Andressa, Diego…").

## 1.46.2

- **Remédios**: o botão **Tomei** só aparece para quem toma o remédio. Para outra pessoa ou para um pet, a tela Agora mostra **Tomado** e a tela do remédio mostra **Andressa tomou**.

## 1.46.1

- **Modo férias**: em **Para pontuar hoje**, os botões **Tarefa com pontos** e **Pontos avulsos** ficam inativos (e o app recusa pontos avulsos nas férias).

## 1.46.0

- **Modo férias** pausa mais coisas:
  - Em **Recompensas › Para pontuar hoje**, aparece "De férias até…: rotinas, tarefas e manutenção pausadas." no lugar de "Nenhuma tarefa com pontos hoje", e as próximas rotinas ficam escondidas.
  - Os **deméritos** ficam pausados ("Pausados nas férias."), inclusive os que vêm de automações.
  - As **tarefas do ResolvIA** saem da tela Agora, do Para pontuar hoje e dos dias de férias no calendário.

## 1.45.0

- **Férias** vira uma linha do menu **Mais**, no lugar do **Placar**.
- O **Placar** (quem participa, quando fecha, deméritos) passa a ser uma aba de **Mais › Configurações**, logo depois de Integrações.
- **Cômodos e equipamentos em etiquetas**, como no ResolvIA: na manutenção (Agora, Manutenção da casa e Mais › Rotinas) e nas tarefas do ResolvIA, embaixo da linha, com o nome encurtado (os dois primeiros equipamentos e "+N"). Na tela da manutenção, um equipamento por linha. O Buscar de Rotinas acha também pelo equipamento.

## 1.44.1

- **Calendário**: no alto, o balão de Conversar e o microfone voltam para a direita, como nas outras telas, e "CronologIA · Olá, Diego" fica numa linha só.

## 1.44.0

- **Manutenção com vários equipamentos**, como no ResolvIA: no formulário, **Outro equipamento** acrescenta mais um. Os cômodos vêm dos equipamentos e ficam bloqueados. A lista de manutenções e a tela da manutenção mostram todos, e a tarefa no ResolvIA leva todos.

## 1.43.0

- **Mais virou um menu**, como no InventarIA: **Calendários**, **Rotinas**, **Avisos** e **Placar**, cada um na sua tela, e por último **Configurações**, com as abas Integrações, Dados, Aparência e Opções. Em cada tela, **‹ Mais** no alto volta ao menu (o Voltar do celular e arrastar para a direita também). O Mais da barra agora tem três pontinhos.
- **Versões anteriores** diz quando as cópias são feitas: uma a cada 10 minutos de uso e antes de importar ou restaurar; ficam as 3 mais recentes.

## 1.42.0

- **Cor do dia**: a cor do app muda todo dia, sozinha (a mesma em todos os aparelhos, e troca à meia-noite mesmo com o app aberto). Vem ligada; em Mais › Aparência, desligue em **Cor do dia** ou escolha uma cor para ficar sempre nela.

## 1.41.0

- **Modo férias**: em Mais › Opções › Férias, escolha de quando até quando vão ficar fora. Nesses dias as rotinas e a manutenção da casa ficam pausadas (saem da tela Agora, do Para pontuar hoje e do calendário); os remédios continuam, com os avisos. A tela Agora mostra até quando, com **Encerrar**, e os dias ficam marcados no calendário. Na volta, nada aparece atrasado por causa dos dias fora.

## 1.40.0

- **Conversa com a IA**: ao lado do microfone, um botão abre uma conversa. Pergunte sobre a tela, a agenda, as rotinas, os remédios, o placar ou qualquer outro assunto, escrevendo ou falando. Pedindo para marcar um compromisso, uma rotina como feita ou um remédio como tomado, a IA mostra cada ação num cartão e só faz quando você toca em **Fazer**. A conversa continua ao fechar e abrir; **Nova** começa outra. Conta em Uso da IA como Conversa.

## 1.39.0

- **Vários equipamentos na tarefa**: no **Novo › Tarefa**, depois do primeiro equipamento, **Outro equipamento** acrescenta mais; com equipamento, o cômodo vem dele e fica bloqueado (vários, se os equipamentos estiverem em cômodos diferentes). As tarefas do ResolvIA mostram todos os equipamentos e cômodos (precisa do ResolvIA 2.31.0). A manutenção continua com um equipamento.

## 1.38.0

- **A semana começa na segunda** para quem nunca escolheu, no calendário (Mês, Semana) e no placar. Antes, a tela mostrava a semana a partir do domingo e dizia "A semana começa no domingo", mas o placar já fechava toda segunda. Quem prefere domingo escolhe em **Mais › Opções**, e aí vale para os dois.
- **Calendário dos eventos novos**: sem um Calendário padrão escolhido, o Novo e o Duplicar começam num calendário que deixa editar e apagar depois (local, Outlook com edição; depois o Google). Antes podia ser um CalDAV, que só cria, só por vir antes em ordem alfabética.
- **Volta a se conectar depois de um reinício do Home Assistant**: se o Home Assistant demorava mais de um segundo para voltar, o app às vezes parava de tentar (o Node avisa a conexão recusada sem fechá-la). Achado pelos testes do ResolvIA, que usa o mesmo código.
- **Mais testes**: 729 unitários e de integração e 7 roteiros visuais novos (232 conferências):
  - eventos que se repetem: editar e apagar só este, este e os próximos, toda a série, e o Desfazer;
  - o Google, que apaga e cria de novo;
  - os botões de cada tipo de calendário (local, Google, Outlook com e sem edição, CalDAV, .ics, feriados);
  - os modos do Calendário e o toque num horário vazio;
  - prêmios, fechamento, Entregue e o Extrato de um período fechado;
  - os avisos de remédio (quem cuida, Adiar e Tomei pelo celular, o teste do sininho);
  - o Novo evento.

## 1.37.2

- **Testes**: a CronologIA agora tem 591 testes unitários e de integração (`npm test`) e os testes visuais no Chromium (`tests/e2e/run.sh`), rodando no GitHub a cada mudança. Eles acharam e esta versão corrige:
- Manutenção com pontos feita depois das 21h e de novo na manhã seguinte contava uma vez só (o dia era o de Greenwich, não o daqui). Vale também para a feita pelo ResolvIA.
- Importar um .ics: um texto com barra invertida antes de "n" (como `C:\novos`) virava quebra de linha, e um local com link entre aspas ficava cortado.
- Busca de equipamento com emoji no nome: o destaque caía nas letras erradas.
- Um arquivo grande demais (importar, ler com IA) ou uma fala longa demais às vezes davam "conexão perdida" em vez do aviso.

## 1.37.1

- **Pulada em amarelo**: o sinal de pular fica amarelo (e não verde, como o de feito) no Calendário, na Rotina da casa, no Qualquer hora e na tela da rotina.
- A rotina pulada de ontem que voltou para hoje aparecia duas vezes hoje no Calendário (pulada e a fazer). Agora a pulada fica no dia em que vencia, e hoje só a que falta fazer.

## 1.37.0

- **Período da rotina**: em **Horário**, além de Qualquer hora e Num horário, há **Manhã**, **Tarde** e **Noite**. A Rotina da casa (e o Para pontuar hoje e o Calendário de hoje) seguem o dia: primeiro o período de agora, depois o que ficou de um período que já passou (em destaque), as de qualquer hora e os períodos que ainda vão chegar. Às 8h: manhã, qualquer hora, tarde, noite. A linha mostra "de manhã", "à tarde" ou "à noite"; no Calendário, o período fica no lugar de "Qualquer hora". Fica no evento como "Período: Manhã".

## 1.36.2

- **Dose não tomada**: no Calendário, a dose de um dia que já passou e não foi tomada mostra um **X** vermelho onde ficaria o ✓. Tocando nela, **Tomei** ainda marca (e o X vira ✓).

## 1.36.1

- **Pendentes primeiro**: no Calendário (Dia, Semana, Mês e Lista), em "Rotinas, tarefas e lembretes" as que faltam vêm no começo; as feitas e as puladas descem para o fim.

## 1.36.0

- **Pular uma rotina**: na tela da rotina (toque nela), ao lado do **Feito** há **Pular**: ela não foi feita, sai da lista e não dá pontos nem entra no histórico de feito. A que repete pelo calendário (como a que "ficou de ontem") sai marcada como **pulada**; a que volta N dias depois de feita vai para a próxima data, contando de quando ela vencia (nunca antes de hoje): pular o "Arrumar a cama" de ontem a traz para hoje. Na lista, a pulada aparece em cinza com o sinal de pular, e o aviso tem **Desfazer** (também na tela dela).

## 1.35.0

- **Manutenção com cômodo e equipamento**: com o ResolvIA usando os cômodos e os equipamentos do InventarIA, a **Manutenção** também tem **Cômodo** e **Equipamento** (a mesma busca da tarefa). Eles ficam no próprio evento, pelo nome ("Cômodo: Cozinha", "Equipamento: Fogão"), aparecem na Manutenção da casa, em Mais › Rotinas e na tela da manutenção, e voltam ao editar. Com **Levar para o ResolvIA** ligado, a tarefa de lá vai com o mesmo cômodo e equipamento.

## 1.34.1

- **Equipamento com busca** no Novo › Tarefa: com um cômodo escolhido, aparecem os equipamentos dele; ao buscar, o que está em outros cômodos aparece separado. O trecho buscado fica destacado, e o escolhido vira um cartão (× para tirar). Escolher um equipamento de outro cômodo troca o cômodo.

## 1.34.0

- **Equipamentos nas tarefas**: com o ResolvIA (2.29.0 ou mais novo) usando os **equipamentos do InventarIA**, as tarefas mostram o equipamento (na Agora e na tela da tarefa) e o **Novo › Tarefa** pede o equipamento, numa lista separada por cômodo; escolher o equipamento já preenche o cômodo.

## 1.33.0

- **Cômodos nas tarefas**: com o ResolvIA (2.28.0 ou mais novo) usando os **Cômodos do InventarIA**, as tarefas mostram o cômodo (na Agora e na tela da tarefa) e o **Novo › Tarefa** pede o cômodo; o ResolvIA guarda a escolha.
- No calendário, o **nome do calendário** na linha de cada evento fica menor e em itálico, separado do resto do texto.

## 1.32.0

- **Pets**: em Mais › Avisos, **Adicionar pessoa ou pet** pergunta se é **Pessoa** ou **Pet**, e cada um que não é do Home Assistant tem o botão da patinha para marcar. Um pet aparece com a patinha no lugar da inicial, só em **Quem toma** dos remédios: some de **Quem faz** (rotinas e manutenções), das pessoas do **placar** e das iniciais de marcar. Marcar como pet alguém que estava no placar tira essa pessoa dele.

## 1.31.0

- **Menos explicação, mais tela**: os textos de ajuda ficaram curtos ou saíram onde só repetiam o que a tela já mostra. Os mais visíveis: Exportar sem frase de abertura; Backup, Importar, Versões e Onde ficam os dados em uma linha; os interruptores dizem só Ligado/Desligado (com uma frase curta quando precisa); Leitura por IA e Falar sem a lista de integrações e sem a nota do "Automático"; Avisos de remédio, Placar, Deméritos, Tarefas do ResolvIA e Contas do GerencIA com dicas de uma linha; "Volta daqui a N dias" no lugar da explicação do Feito; na revisão, só a quantidade de eventos; Manutenção sem a frase de abertura; Uso da IA com uma linha só para o consumo exato.

## 1.30.5

- **Colar mensagem**: o botão **Colar** só aparece quando consegue ler o que foi copiado. Com o Home Assistant aberto por http ele não funciona (o navegador não deixa), então some, e o campo continua aceitando colar do jeito normal (tocar e segurar). Se o aparelho recusar uma vez, o botão também some.

## 1.30.4

- **Home Assistant aberto por http**: o **Digitalizar com IA** já avisa no próprio botão (**Precisa de https**), com uma linha explicando que neste endereço a câmera não abre aqui dentro (tire a foto com a câmera do celular e use Escolher fotos). O **Falar** explica que o microfone também precisa do endereço seguro, mesmo pelo app do Home Assistant.

## 1.30.3

- **Digitalizar com IA** sem acesso à câmera (Home Assistant aberto por http): em vez de abrir a galeria como se fosse a câmera, explica que a câmera aqui dentro precisa do endereço seguro (https) e oferece **Escolher foto**.

## 1.30.2

- **Dados: botões do mesmo tamanho** (Baixar, Criar backup, Escolher arquivo, Escolher .ics, Ver versões). No celular cada um fica embaixo do seu texto, todos alinhados; no computador, à direita.

## 1.30.1

- **Uso da IA** não fala mais do sensor `sensor.cronologia_ia_hoje` (nem para mandar ligar, com os sensores desligados). Ele aparece explicado só em **Sensores no Home Assistant**, quando os sensores estão ligados, como no GerencIA.

## 1.30.0

- **Falar: escolha quem transcreve**, como na leitura por IA. Em Mais › Integrações › **Falar** aparece a lista dos motores de fala para texto do Home Assistant (Home Assistant Cloud, Whisper, Google…). **Automático** continua usando o assistente de voz preferido do Home Assistant; escolher outro aqui não mexe nele. O app descobre o idioma que cada motor usa para o português (pt-BR, pt…). Com **Usar IA** desligado, o painel some junto com o Falar.

## 1.29.0

- **Extrato mais curto**: mostra só as 5 mudanças mais novas. **Ver mais (N)** abre o resto e, aberto, **Ver menos** recolhe de volta para o começo do extrato.
- **Pessoas e pets só em Mais › Avisos**: saiu o **Outra pessoa** do formulário (Quem toma / Quem faz). Em Mais › Avisos há **Adicionar pessoa ou pet**, com o celular que recebe os avisos; um pet ou criança pode usar o celular de quem cuida. Os celulares aparecem com o dono (**Celular de Andressa · Galaxy S23**). Quem foi adicionado ali tem o **×** para tirar, e continua na lista mesmo sem celular.

## 1.28.2

- O **ícone de repetir** aparece também nas rotinas que voltam alguns dias depois de feitas e nas manutenções (antes só nas que repetem por calendário, como todo dia ou toda semana). Tocar e segurar mostra como repete.

## 1.28.1

- **Agora**: a linha do alto não conta mais os eventos marcados como **Feito** ("1 evento hoje" é o que ainda falta). Com tudo feito, diz "tudo feito hoje".

## 1.28.0

- **Recompensas › Para pontuar hoje › Próximas rotinas** (fechado até tocar): as rotinas com pontos dos próximos dias, para marcar quando foram feitas antes do dia. Conta os pontos na hora, e a rotina que volta alguns dias depois passa a contar de hoje (não da data em que estava marcada).
- A janela de uma rotina que volta alguns dias depois tem **Feito** em qualquer dia, para marcar antes (também em Mais › Rotinas).
- **Agora**: o cartão **Hoje** some quando não sobra compromisso no dia (todos passaram ou foram feitos). O Calendário continua com o dia inteiro.

## 1.27.0

- **Arrastar para o lado** troca de aba no celular: Agora ⇄ Calendário ⇄ Recompensas ⇄ Mais. Na grade do mês, arrastar continua trocando o mês. Não vale começando na borda da tela (é o Voltar do celular), num campo ou numa fileira que rola para o lado.
- O **ícone do app** ao lado do nome, no alto e na barra lateral, na cor escolhida em Aparência.
- **Mais › Placar › Deméritos**: o título e o texto estavam colados na borda do cartão.
- Saiu a explicação do evento `cronologia_demerito` da janela do demérito e o quadro "No Home Assistant" de Avisos. Essas explicações (eventos `cronologia_feito` e `cronologia_demerito`) agora ficam em **Mais › Integrações › Sensores no Home Assistant**.
- **Mais › Rotinas**: os pontos na mesma cor dourada dos outros lugares.

## 1.26.0

- **Botões do mesmo tamanho**, como no EconomIA: as escolhas dos formulários (calendário, quando, duração, quem faz, pontos, repete, avisos, quem cuida…) ficam em colunas, com o texto no meio. As curtas (Hoje · Amanhã · Outra data, 15 min · 30 min · 1 h · 2 h, pontos) cabem três ou quatro por linha, e os dois horários dividem a largura.
- **Mais › Dados › Exportar** como no ResolvIA: uma linha por arquivo (Eventos CSV, Agenda .ics, Dados completos JSON, Tudo ZIP), cada uma com a explicação e o botão.
- **Avisos › No Home Assistant**: o texto voltou para a cor normal (estava na cor de alerta).

## 1.25.1

- **Novo**: o modelo **Evento** aparecia duas vezes na faixa de modelos (desde a 1.24.0). Agora aparece uma só.

## 1.25.0

- **Sensores no Home Assistant desligados por padrão**: o app só cria os sensores (remédios de hoje, remédio atrasado, manutenções vencidas, placar e chamadas de IA) se você ligar em **Mais › Integrações › Sensores no Home Assistant**. Desligado, apaga os que tinha criado. Quem atualizar fica com eles desligados até ligar.

## 1.24.0

- **Feito em qualquer evento**: ao abrir um evento (de hoje, de amanhã ou que já passou) tem o botão **Feito**. Marcado, ele fica **verde** no calendário, como o remédio tomado, aparece com o ✓ na lista e sai do cartão **A seguir**. Abrindo de novo, mostra quando foi feito e tem **Desfazer**.

## 1.23.1

- **Barra lateral (computador)**: só aparecem os calendários ligados em Mais › Calendários. Um desligado ali na barra continua na lista, desmarcado, até recarregar a página, para dar para religar com outro toque.

## 1.23.0

- **No computador, com cara de InventarIA**: tela mais larga; **Agora em duas colunas** (à esquerda o próximo compromisso, Hoje e tarefas; à direita remédios, contas e a casa); seções direto na página em vez de cartões, com título grande e ícone; no alto à direita, **Falar**, **Ler com IA** e **Novo** (saiu o botão da barra lateral). O calendário continua com seus quadros. No celular nada muda.

## 1.22.0

- **Mais › Rotinas**: tudo que está cadastrado, separado em **Rotina da casa**, **Remédios**, **Manutenção da casa** e **Contas a pagar**. Uma linha por cadastro (não uma por dia), com quem faz, de quanto em quanto tempo, horário, pontos e a próxima vez (atrasadas em vermelho). Remédio com vários horários fica numa linha só, com todos os horários. Tem **Buscar** (pelo nome ou pela pessoa), um toque abre para ver e editar, e cada seção tem o botão para cadastrar um novo.

## 1.21.3

- **Semana, 3 dias e Dia**: o que já foi feito fica **verde**. O contador de rotinas do dia com tudo feito (7/7), a barra **Qualquer hora** completa, a dose tomada e a rotina ou tarefa marcada no horário.

## 1.21.2

- **Agora**: quando o único compromisso do dia já está no cartão **A seguir** (ou **Agora**), o cartão **Hoje** some, para não mostrar o mesmo duas vezes. Com dois ou mais, ou depois que ele passou, o **Hoje** volta.

## 1.21.1

- **Falar**: corrigido o erro "Missing X-Speech-Content header". O Home Assistant só recebia o áudio sem a descrição do formato: o proxy do Supervisor só repassa esse cabeçalho escrito exatamente assim, e ele ia em minúsculas.

## 1.21.0

- **Falar**: o microfone no alto de cada tela, à direita. Fale o compromisso; o Home Assistant transcreve (fala para texto do Assist, como o Home Assistant Cloud) e a IA encontra os eventos, para você conferir e adicionar.
- **Buscar** na tela Agora: o campo **Buscar nos eventos** abre a busca do Calendário › Lista já com o que você digitou. No computador, também no **Buscar** da barra lateral e na tecla **/**.

## 1.20.8

- **Calendário**: o que já foi feito (rotinas, tarefas, contas, doses) fica **apagado**, como o que já passou da hora.
- **Mês**: o dia escolhido tem a mesma **folhinha** (dia da semana e número) dos dias da Lista.

## 1.20.7

- Cada seção da **Agora** e de **Recompensas** ganhou um ícone no cabeçalho, no mesmo quadrado dos Prêmios: Hoje, Rotina da casa, Manutenção da casa, Tarefas, Contas a pagar, Para pontuar hoje, Deméritos, Extrato e Histórico.

## 1.20.6

- **Calendário**: a rotina que volta depois de feita continua no dia em que foi feita, como concluída (antes sumia do dia e só aparecia na próxima data). Hoje dá para desmarcar ali; num dia que já passou é só para ver.
- **Agora**: com todos os remédios tomados, ou todas as rotinas feitas, o card sai da tela (fica até você sair da Agora). O Calendário mostra tudo, feito.

## 1.20.5

- **Para pontuar hoje** mostra só o que ainda dá pontos: o que já foi feito sai da lista (fica na tela inicial, em Mostrar concluídas, e no Extrato). Com tudo feito, "Tudo pontuado hoje".

## 1.20.4

- Nas listas do dia, os **eventos** também têm ícone antes do nome (o do **Evento** no Novo), como os remédios, rotinas, manutenções, tarefas e contas.

## 1.20.3

- **Agora** é só o dia de hoje: saiu o **Próximos dias** (está no Calendário) e o cartão "Agenda livre".

## 1.20.2

- **Rotina da casa**: as já feitas ficam recolhidas em **Mostrar concluídas (N)**; um toque mostra, outro esconde. Em cima ficam só as que faltam (com tudo feito, "Tudo feito hoje").
- **Agora › A seguir** mostra só o que ainda vem hoje. O de amanhã fica nos **próximos dias**; sem nada mais hoje, o cartão não aparece.

## 1.20.1

- **Recompensas › Para pontuar hoje** igual à tela inicial: com **Marcar por outras pessoas** ligado, as iniciais (**D**, **A**) à direita de cada rotina, manutenção e tarefa do ResolvIA; um toque marca por aquela pessoa.
- O que já foi feito mostra **quem ganhou os pontos**: a inicial na cor da pessoa, ao lado dos pontos (também na tela inicial). Um "Foi Diego" troca a inicial.

## 1.20.0

- **No computador** (tela de 1000 pixels ou mais), como no InventarIA: uma **barra lateral** no lugar das abas de baixo, com o **Novo**, as seções, um **mês pequeno** para pular para um dia e os **calendários** (tocar mostra ou esconde). O Calendário usa a largura toda e as janelas abrem no meio da tela. No celular nada muda.

## 1.19.2

- **Extrato** só do período atual (semana, quinzena ou mês, como em Mais › Placar): "Extrato desta semana". Quando o período fecha, ele recomeça vazio.
- **Histórico**: os últimos 10 períodos. Toque num deles para ver o extrato daquele período.

## 1.19.1

- **Recompensas**: o card **Pontos desta semana** saiu, porque o **Extrato** já mostra tudo. O **×** para tirar uma pontuação errada passou para o Extrato, e a retirada vira uma linha nova ("Diego tirou 10 pontos de Andressa"), com **Desfazer** no aviso.
- O Extrato subiu: fica acima do Histórico.

## 1.19.0

- **Recompensas › Extrato**, no fim da aba: tudo que mexe nos pontos, com quem fez. "Andressa ganhou 10 pontos, marcado por Diego", "Diego tirou 5 pontos de Andressa" (demérito), "Diego tirou os próprios 10 pontos" (o ×), "10 pontos passaram de Andressa para Diego", desmarcados, Desfazer, o que veio do ResolvIA ou de automações e o fechamento de cada período. Separado por dia, com **Ver mais**.
- O extrato começa com os pontos que já estavam no placar.

## 1.18.1

- **Recompensas › Pontos desta semana**: todo registro tem o **×** para tirar uma pontuação errada (antes só os avulsos e os deméritos), com **Desfazer** no aviso. O que foi feito continua feito; só os pontos saem do placar.

## 1.18.0

- **Calendário › 3 dias**: o dia escolhido e os dois seguintes, com as horas, como a Semana mas com colunas largas (as setas andam de 3 em 3 dias). Tem o contador de **Qualquer hora** em cada dia.
- No celular, as cinco visões (Mês · Semana · 3 dias · Dia · Lista) cabem numa linha só, como palavras; os ícones voltam em telas maiores.

## 1.17.5

- **Editar na Google Agenda**: o Home Assistant não edita eventos do Google, então o botão Editar não aparecia (e não dava para pôr pontos nas rotinas). Agora aparece: ao salvar, o app apaga o evento e cria de novo com a mudança. Num evento que se repete, a série toda recomeça no dia editado.
- Rotina "depois de feita" e manutenção na Google Agenda: o Feito apaga primeiro e depois cria, então uma falha não deixa mais o evento duplicado; e uma cópia que já estava na próxima data é aproveitada.
- Calendário: rotinas, manutenções e tarefas que valem pontos mostram **+N** na linha.

## 1.17.4

- Corrigido: a **Rotina que volta depois de feita** dava "Esse calendário não deixa mudar eventos" na **Google Agenda** (a integração do Google no Home Assistant não edita eventos). Agora o Feito cria o evento na próxima data e apaga o antigo; continua aparecendo como feito hoje, com os pontos, e o Desfazer volta para o dia certo.

## 1.17.3

- Tela inicial: o card **Tarefas** desceu para o fim, depois dos Próximos dias e logo acima dos remédios já tomados. A agenda de hoje e a rotina da casa ficam em cima.

## 1.17.2

- **Marcar por outras pessoas** também no calendário (Mês, Lista, Próximos dias): cada rotina de hoje, manutenção e tarefa com pontos ganha as iniciais (D, A) à direita, e um toque marca como feito por aquela pessoa. Dias que ainda não chegaram não mostram as iniciais nas rotinas.

## 1.17.1

- **Semana e Dia**: o que dura menos de meia hora (uma dose de 15 minutos) ocupa no mínimo **30 minutos** na grade, para o nome caber.
- **Remédios** com cara própria na grade: ícone de pílula, borda tracejada e listras (✓ e borda cheia quando tomado). No Dia aparece também a dose.

## 1.17.0

- **Semana e Dia**: a faixa **dia todo** fica só com eventos de verdade (aniversários, feriados, viagens). Rotinas, tarefas, manutenções, remédios sem horário e contas viram um **contador por dia** (feitas/total, ex.: 3/46) logo abaixo da data; no Dia, uma barra **Qualquer hora**. Tocar abre a lista do dia para marcar, com as iniciais de cada pessoa quando **Marcar por outras pessoas** está ligado.

## 1.16.5

- Rotinas, manutenções, remédios e tarefas sem horário aparecem como **Qualquer hora** (na lista do calendário e na tela do item), e não mais como "Dia todo". Eventos de dia inteiro, como aniversários e feriados, continuam "Dia todo".

## 1.16.4

- **Calendário › Lista** e **Próximos dias**: cada dia começa com uma folhinha de calendário (dia da semana e número) e uma linha mais forte, para ver bem onde muda o dia. Hoje fica com a folhinha na cor do app.

## 1.16.3

- **Recompensas**: a cor de cada pessoa é a cor da agenda dela (a que tem o nome dela, como "Pessoal (Andressa)"). Quem não tem agenda própria fica com uma cor que ninguém usa.
- **Calendário**: os **remédios** sobem para junto dos eventos, na ordem do horário, porque têm hora para tomar. Rotinas, tarefas, manutenções e contas continuam embaixo.

## 1.16.2

- **Calendário**: em cada dia, primeiro os **eventos** (os com horário, depois os de dia todo) e, separados embaixo, **Rotinas, tarefas e lembretes** (rotinas, tarefas do ResolvIA, manutenções, remédios e contas). Vale no Mês, na Lista e nos Próximos dias da tela inicial.

## 1.16.1

- **Criar tarefas nas listas dos outros** (Mais › Integrações › Tarefas do ResolvIA, desligado por padrão): o Novo › Tarefa oferece também as listas que são de outra pessoa da casa, com o aviso "Lista de Andressa". A tarefa continua aparecendo só para quem é a lista, e o próximo Novo › Tarefa volta a começar numa lista sua.
- **Marcar por outras pessoas** (opções do placar, desligado por padrão): as rotinas e manutenções da tela inicial mostram as iniciais de cada pessoa (D, A), e um toque marca como feito por ela, sem abrir outra tela. Na tela do evento, um botão por pessoa no lugar do Feito. Os pontos vão para quem você escolher.
- **Novo › Evento**: Colar mensagem, Escolher fotos e Digitalizar com IA em quadros tracejados, no padrão do InventarIA e do ResolvIA.
- **Repete** da rotina, do remédio e da manutenção em duas linhas no máximo, em vez de quatro.
- Manutenção: **Mostrar na tela inicial, antes da data** (era "Mostrar na Agora"), numa linha só e com a opção de **1 dia**.

## 1.16.0

- **Usar a integração** em **Mais › Integrações › Tarefas do ResolvIA** e em **Contas do GerencIA**, as duas **desligadas por padrão**. Desligada, o ResolvIA some do CronologIA (tarefas, Levar para o ResolvIA, Trazer uma lista, pontos de lá) e o GerencIA não é consultado (contas na Agora, no calendário e no Novo › Conta). Quem já usava precisa ligar de novo depois de atualizar.
- **Mais › Opções › Novo › Local e notas** (desligado por padrão): sem ele, o evento não tem Local e Notas e a tarefa não tem Notas. Um evento que já tem local ou notas continua mostrando os dois.
- **Repetir** do evento numa linha só: Não, Diário, Semanal, Mensal, Anual.
- **Novo › Tarefa**: sem prazo quando o ResolvIA está com Controlar prazos desligado, e as listas com o mesmo começo de nome (as da Alexa) aparecem pelo que muda, com o nome completo embaixo.

## 1.15.0

- **De quem é cada lista do ResolvIA** (Mais › Integrações › Tarefas do ResolvIA): Todos ou uma pessoa da casa. A lista de uma pessoa só aparece no CronologIA dela, na Agora, no calendário, em Para pontuar hoje e no Novo › Tarefa. Lista sem dono aparece para todos, e um aparelho sem pessoa da casa vê todas.

## 1.14.0

- **Mais › Integrações › Uso da IA**, como no EconomIA: o app conta cada leitura por IA (mensagem ou foto) e estima os tokens pelo tamanho do texto.
  - Mostra hoje, 7 dias e o mês, um gráfico por dia (toque numa barra), os tipos de chamada e as últimas chamadas, com o link para o consumo exato no provedor.
  - Novo sensor `sensor.cronologia_ia_hoje`.
  - Some junto com a chave **Usar IA**.
- **Mais › Aparência** como no InventarIA: **Tema** em três botões grandes (Automático, Claro, Escuro) e **Cor do app** em etiquetas com o nome de cada cor.
- Nova aba **Mais › Opções**, com o início da semana (domingo ou segunda), que saiu da Aparência.

## 1.13.0

- **Trazer uma lista para o CronologIA** (Mais › Integrações › Tarefas do ResolvIA): escolha uma lista do ResolvIA, revise e cada tarefa vira uma **Rotina da casa**.
  - A que se repete vira **Depois de feita** com os mesmos dias; as outras viram **Só uma vez**.
  - Vêm junto os pontos, as notas e a data (o prazo, ou hoje).
  - O que já existe como rotina vem desmarcado.
- As tarefas trazidas saem da lista do ResolvIA. O app avisa o ResolvIA (evento `resolvia_esquecer`) para esquecer a repetição e os pontos delas, e as que já estavam concluídas não voltam sozinhas.

## 1.12.1

- **Versões anteriores**: o app mantém só as 3 cópias mais recentes (antes eram até 60). As que sobram são apagadas quando o app inicia.

## 1.12.0

- **Mais › Integrações › Usar IA**: desligada, somem do Novo o Colar mensagem, o Escolher fotos e o Digitalizar com IA, e o app não chama a IA. A importação de .ics continua em Mais › Dados. Começa ligada.
- **Mais** com cabeçalhos como os do InventarIA e do ResolvIA: cada seção abre com o ícone num quadrado e o título grande (calendários, avisos, placar, deméritos, GerencIA, ResolvIA, IA, aparência).
- **Mais › Dados** separado em seções: Exportar, Backup na pasta share, Importar, Importar eventos (.ics), Versões anteriores e Onde ficam os dados.

## 1.11.0

- **Rotina da casa › Depois de feita**: para o que volta N dias depois de feito ("trocar a areia 3 dias depois"), com a data da primeira vez.
  - Na agenda fica só a próxima vez, não um evento por dia.
  - Aparece na Rotina da casa no dia em que vence e continua lá enquanto não for feita, no alto e em vermelho ("atrasada há 2 dias").
  - **Feito** leva a próxima vez para hoje + N dias, com os pontos para quem fez e o dia em "Feito em". Desmarcar ou **Desfazer** volta como estava.
  - Funciona também pelo NFC/Alexa (`cronologia_feito`) e pelo **Levar para o ResolvIA**.
- Os avisos dizem "Rotina criada", "Manutenção salva" (antes saía "Rotina criado").

## 1.10.1

- **Remédios de hoje**: com todos os remédios do dia tomados, o card vai para o fim da tela Agora. Marcando o último ali mesmo, ele só desce quando você sai da Agora (não pula debaixo do dedo). Desmarcar uma dose traz o card de volta para o topo.
- **Tarefas** na Agora em ordem de frequência: primeiro as que voltam todo dia, depois a cada 2 dias, a cada 3, toda semana… e por último as que não se repetem (nas com prazo, a data vem antes). Cada uma mostra a frequência ("todo dia", "toda semana"), também na ficha. A frequência vem do ResolvIA 2.9.1.

## 1.10.0

- **Levar para o ResolvIA** (Mais › Integrações › Tarefas do ResolvIA): escolha uma lista e ligue **Manutenções** e/ou **Rotina da casa**. Cada uma vira uma tarefa na lista, com a próxima data (a rotina, de hoje em diante, com o horário), os pontos e uma nota "do CronologIA".
- Concluir a tarefa no ResolvIA vale como **Feito** aqui: a manutenção ganha a próxima data, a rotina fica marcada e quem concluiu ganha os pontos (com **Foi Andressa** e **Desfazer** vindos do ResolvIA 2.9.0). A tarefa volta logo em seguida com a data seguinte. Concluída sem nome (tela do Home Assistant, Alexa), conta como feita, sem pontos.
- Excluir a tarefa na lista vale até a próxima data; desligar a chave tira as tarefas, e trocar de lista leva para a nova. Elas não se repetem no card **Tarefas com prazo**.
- O arquivo `share/cronologia/integracao.json` lista essas tarefas (pontos e tipo) para o ResolvIA.

## 1.9.1

- Na Agora, o card de **Tarefas** fica logo abaixo do **A seguir** (depois dos eventos do dia todo).
- Tarefas que valem pontos ganham botões rápidos com a inicial de cada pessoa (**A** e **D**): um toque conclui a tarefa e dá os pontos para quem foi tocado, sem perguntar. O quadradinho continua como antes.

## 1.9.0

- **Mais › Placar › Marcar pontos em Recompensas**: liga o card **Para pontuar hoje** (marcar tarefas, Tarefa com pontos e Pontos avulsos) na aba Recompensas. Começa desligado; as tarefas continuam sendo marcadas na Agora e no ResolvIA.
- **Deméritos**: a lista agora se monta em **Mais › Placar** (criar, mudar, apagar e as sugestões). A aba Recompensas só mostra os deméritos e marca quem foi; sem deméritos, o card não aparece.
- Saiu o atalho "Ajustes do placar" da aba Recompensas.
- **Tarefas sem prazo na Agora** (Mais › Integrações): o card de tarefas mostra também as pendentes sem data, num grupo **Sem prazo** depois das que têm prazo. Concluir ali conclui no ResolvIA (e dá os pontos, se a tarefa valer).

## 1.8.0

- **Prêmio por pessoa**: em Recompensas, **Definir** abre a escolha entre **O mesmo para todos** e **Um para cada pessoa** ("Se Diego vencer: jantar fora · Se Andressa vencer: massagem"). No fechamento, quem venceu ganha o seu; o aviso no celular e o histórico mostram o prêmio de quem venceu. O sensor do placar ganhou o atributo `premios`.
- Os **Ajustes do placar** foram para **Mais › Placar**. Na aba Recompensas fica um atalho no fim.
- As seis abas do Mais cabem na tela do celular (em telas bem estreitas, a barra rola para o lado).

## 1.7.0

- **Deméritos** em Recompensas: uma lista do que tira pontos ("Toalha molhada na cama −5"). Toque em quem foi para descontar, com **Desfazer**; cada um mostra quantas vezes foi marcado no período. Comece pelas sugestões ou por **Novo demérito**; toque no nome para mudar os pontos ou apagar.
- O placar aceita ficar negativo e mostra os deméritos de cada um; nos pontos do período eles aparecem em vermelho e saem pelo ×.
- Evento `cronologia_demerito` (`nome`, `quem`) para marcar de fora do app: rotina da Alexa, etiqueta NFC, automação.
- Corrigido: no modo escuro, o texto dos botões de pontos das manutenções sumia.

## 1.6.0

- **Recompensas com as tarefas do ResolvIA**: as tarefas que valem pontos no ResolvIA 2.8.0 entram no mesmo placar. Concluir no ResolvIA dá os pontos para quem fez (evento `cronologia_pontos`), com **Foi Andressa** para trocar e **Desfazer**. Concluir no card **Tarefas com prazo** daqui também dá os pontos (pergunta **Quem fez?** quando não sabe), e as de hoje aparecem em **Para pontuar hoje**.
- O CronologIA grava `share/cronologia/integracao.json` com o placar (ligado, quem participa, período e qual usuário do Home Assistant é cada pessoa), para o ResolvIA saber para quem vão os pontos.

## 1.5.2

- **Tarefas do ResolvIA**: prazo é só o que alguém definiu. Listas que não deixam definir prazo (como a Problem List da Análise dos Dispositivos, que põe na data desde quando o aparelho está fora do ar) não entram mais em **Tarefas com prazo** nem no calendário. Em Mais › Integrações elas aparecem como "não aceita prazo". Também vale a chave **Prazos** de cada lista no ResolvIA 2.6.0.

## 1.5.1

- O **aviso de teste** (o sininho em Mais › Avisos) agora chega igual ao de verdade, com **Tomei** e **Adiar 15 min**. Tocar num deles confirma no celular ("✅ Funcionou") e na tela do app, então dá para conferir que o botão chega ao CronologIA.

## 1.5.0

- **Mais em abas** no alto da tela: **Calendários**, **Avisos**, **Integrações**, **Dados** e **Aparência**. As abas ficam presas no topo ao rolar, e Voltar sai do Mais (não passa de aba em aba).
- A antiga página **Agendas** virou a aba **Calendários**, junto com o calendário padrão para eventos novos.
- **Tarefas do ResolvIA** com o indicador verde, igual ao do GerencIA: **Conectado ao ResolvIA** com a versão, quantas listas e tarefas com prazo (e atrasadas). Precisa do ResolvIA 2.5.1 ou mais novo para mostrar a versão.

## 1.4.0

- **Novo › Tarefa**: cria uma tarefa numa lista do ResolvIA, com prazo (dia, dia e horário ou sem prazo) e notas. Entra direto na lista do Home Assistant; o app lembra a última lista.
- **Dados** em Mais, como nos outros apps: exportar **Tudo (ZIP)** (dados do app, um .ics por calendário, eventos e pontos em CSV), **Eventos (CSV)** e **Dados (JSON)**; **backup** em `share/cronologia` com Restaurar; **importar** backup ou JSON; **versões anteriores** automáticas a cada 10 minutos de uso.
- O app agora grava na pasta `share` (para os backups).
- Os modelos de Novo ficam em duas linhas.

## 1.3.0

- **Tarefas do ResolvIA**: as tarefas com prazo das listas do Home Assistant (as do ResolvIA) aparecem no card **Tarefas com prazo** da tela Agora (atrasadas, hoje e amanhã) e no calendário, no dia ou no horário do prazo.
- **Concluir** e **Reabrir** daqui marcam a tarefa no Home Assistant: aparece no ResolvIA na hora e a repetição dele continua valendo.
- Em **Mais › Tarefas do ResolvIA**, escolha quais listas entram e se aparecem no calendário.

## 1.2.0

- Nova aba **Recompensas**, no lugar de Agendas (que foi para **Mais › Agendas**): o placar da casa.
- **Pontos para quem fizer** nos modelos Rotina da casa e Manutenção. **Feito** dá os pontos para quem está usando o app (pelo usuário do Home Assistant); "Foi Andressa" passa os pontos para a outra pessoa, e o app pergunta **Quem fez?** quando não sabe.
- Placar do período (semanal, quinzenal ou mensal) com quem está na frente, **prêmio do período** (e o do próximo), **histórico** com quem venceu e **Entregue**, e o resultado no celular quando o período fecha.
- **Pontos avulsos** para o que não está na agenda e a lista **Para pontuar hoje**.
- A tarefa da rotina que ficou de ontem ainda aparece para marcar.
- `sensor.cronologia_placar`; o evento `cronologia_feito` com `quem` dá os pontos para essa pessoa.

## 1.1.1

- Corrige "Não consegui salvar: not a valid option, did you mean 'dtend'?" ao criar ou editar eventos e modelos: o Home Assistant recebe os horários como `dtstart`/`dtend` ao gravar (e devolve como `start`/`end` ao ler). Valia para criar, editar, mover, importar e para o "Feito" da manutenção.

## 1.1.0

- **Modelos** em **Novo**: Remédio, Conta a pagar, Rotina da casa e Manutenção, cada um com o formulário dele. O modelo fica escrito na descrição do evento (`#remédio`, `#conta`, `#rotina`, `#manutenção`), então vale em qualquer aparelho e aparece em outros apps de calendário.
- **Remédio**: dose, quem toma (pessoa do Home Assistant, outro nome ou pet), vários horários (1x, 2x, 3x, de 8 em 8 h), todo dia, **dia sim, dia não**, dias da semana ou a cada N dias, uso contínuo, por N dias ou até uma data.
- **Remédios de hoje** no topo da tela Agora, por pessoa, com **Tomei**. Dose atrasada deixa o card vermelho, com aviso no alto e na linha de status.
- **Aviso no celular** na hora da dose, com **Tomei** e **Adiar 15 min** no próprio aviso, e **de novo se atrasar**, também para quem cuida. O celular de cada pessoa vem do Home Assistant; dá para trocar e testar em **Mais**.
- **Contas a pagar** na tela Agora, com **Paguei**, atrasadas em vermelho.
- **Contas do GerencIA**: com o GerencIA 1.5.0 no mesmo Home Assistant, as contas, fixos e faturas aparecem no card e no calendário, o Paguei dá baixa lá e o modelo Conta cria a conta lá. Ligação automática pela pasta `share` (o app agora lê a `share`, só leitura).
- **Rotina da casa** com quem faz e o círculo de feito.
- **Manutenção** contada a partir da última vez (como o Maintenance Tracker): anel do prazo, aparece alguns dias antes, **Feito** leva a próxima data para hoje + o intervalo e guarda o histórico; lista com todas.
- Sensores `sensor.cronologia_remedios_hoje`, `binary_sensor.cronologia_remedio_atrasado` e `sensor.cronologia_manutencoes_vencidas`, e o evento `cronologia_feito` para marcar de automações e etiquetas NFC.

## 1.0.1

- Card "Agora" / "A seguir" redesenhado como um cartão de compromisso: relógio com o horário do evento no mostrador, contagem regressiva e canhoto com o calendário, o local ou o que vem depois.

## 1.0.0

- Primeira versão.
- Agenda para os calendários nativos do Home Assistant (local, Google, Outlook pelo MS365, CalDAV, remotos, feriados), ao vivo.
- Tela Agora com o evento atual ou o próximo, eventos do dia todo, a linha de "agora" e os próximos 7 dias.
- Calendário por mês, semana, dia e lista, com busca do último ano ao próximo.
- Criar, editar, duplicar e apagar eventos nos calendários que permitem, com repetição; em eventos que se repetem, escolher só este ou este e os próximos; Desfazer ao apagar.
- Eventos a partir de mensagem colada, fotos, câmera ou arquivo .ics, com a IA configurada no Home Assistant (escolha qual em Mais › Leitura por IA).
- Nome, cor e visibilidade de cada calendário, sincronizados entre aparelhos; calendário padrão para eventos novos; semana começando no domingo ou na segunda.
- Exportar os calendários em .ics.
- Mesma tipografia e topo dos outros apps (Barlow e Barlow Condensed), tema claro e escuro.
