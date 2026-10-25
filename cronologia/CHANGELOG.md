# Changelog

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
