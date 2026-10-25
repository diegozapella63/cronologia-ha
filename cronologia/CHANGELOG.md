# Changelog

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
