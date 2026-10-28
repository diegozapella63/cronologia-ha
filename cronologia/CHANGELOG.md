# Changelog

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
