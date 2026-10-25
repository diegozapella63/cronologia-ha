# CronologIA

Uma agenda para os **calendários nativos** do Home Assistant (`calendar.*`): calendário local, Google Agenda, Outlook, CalDAV, calendários remotos (.ics), feriados… Tudo ao vivo e com um visual bem mais caprichado que a tela padrão.

Nada é copiado: o CronologIA mostra e edita os mesmos calendários que o HA já tem. Se um evento muda no Google ou no Outlook, ele muda aqui assim que o Home Assistant fica sabendo.

## Primeiros passos

1. Depois de instalar, toque em **Iniciar**.
2. Ative **Mostrar na barra lateral** (e, se quiser, **Watchdog**).
3. Abra o **CronologIA** pela barra lateral.

Sem nenhum calendário no Home Assistant, a tela mostra como adicionar um. O mais simples é o **Calendário local**, que fica no próprio HA e aceita tudo.

## Telas

- **Agora**: no alto, **Remédios de hoje**, **Contas a pagar** e **Tarefas com prazo** (quando há); depois o evento que está acontecendo (com quanto falta para terminar) ou o próximo, os eventos do dia todo, a lista de hoje com a linha de "agora", a **Rotina da casa** com a **Manutenção** que está vencendo e os próximos 7 dias.
- **Calendário**: **Mês** (com pontinhos na cor de cada calendário), **Semana** e **Dia** (com as horas do dia; toque num horário vazio para criar um evento ali) e **Lista** (próximos 30 dias, com busca do último ano ao próximo). Arraste o mês para os lados para trocar.
- **Novo**: cria um evento, uma **tarefa do ResolvIA** ou um **modelo** (remédio, conta, rotina, manutenção), ou traz eventos de uma mensagem, foto ou arquivo .ics.
- **Recompensas**: o placar da casa. Pontos por tarefa feita, quem está na frente, o prêmio do período e o histórico (veja abaixo).
- **Mais**, em abas no alto (ficam presas no topo ao rolar):
  - **Calendários**: os calendários agrupados por integração, com nome, cor e **mostrar/ocultar**; o calendário padrão para eventos novos; atalhos para adicionar calendários.
  - **Avisos**: avisos de remédio no celular, o celular de cada pessoa e quem cuida.
  - **Placar**: os ajustes das Recompensas (quem participa, de quanto em quanto tempo fecha, marcar pontos em Recompensas, resultado no celular, desligar) e a lista de **deméritos**.
  - **Integrações**: **contas do GerencIA**, **tarefas do ResolvIA** (cada um com o indicador verde de conectado) e leitura por IA.
  - **Dados**: exportar, backup, importar e versões anteriores.
  - **Aparência**: tema, cor do app e início da semana (domingo ou segunda).

## Criar, editar e apagar

Depende do calendário. O CronologIA só mostra os botões que cada um permite:

| Calendário | Ler | Criar | Editar e apagar |
|---|---|---|---|
| Calendário local | sim | sim | sim |
| Google Agenda | sim | sim | apagar sim; editar não (a integração do Google no HA não permite) |
| Outlook pelo MS365 Calendar (HACS) | sim | sim, com a opção de editar ligada | sim, com a opção de editar ligada |
| CalDAV | sim | sim | não (a integração não permite) |
| Calendário remoto (.ics), feriados | sim | não | não |

Em eventos que se repetem, ao salvar ou apagar você escolhe **só este evento** ou **este e os próximos** (para apagar, também **toda a série**). Ao apagar um evento comum, aparece **Desfazer**.

Mudar o evento de calendário cria uma cópia no novo calendário e apaga a original (o Home Assistant não tem "mover").

## Modelos

Em **Novo**, escolha o modelo no alto e o formulário muda:

| Modelo | O que pede | Na tela Agora |
|---|---|---|
| **Remédio** | remédio, dose, quem toma, horários (1x, 2x, 3x, de 8 em 8 h ou à mão), frequência, por quanto tempo | **Remédios de hoje**, com **Tomei** |
| **Conta a pagar** | conta, valor, vencimento, se repete todo mês ou todo ano | **Contas a pagar**, com **Paguei** |
| **Rotina da casa** | tarefa, quem faz, horário (ou qualquer hora), frequência | **Rotina da casa**, com o círculo de feito |
| **Manutenção** | o que fazer, a cada quanto tempo, quando foi feito pela última vez, quantos dias antes mostrar | **Manutenção da casa**, com o anel do prazo e **Feito** |

Frequências de remédio e rotina: **todo dia**, **dia sim, dia não**, **dias da semana** (escolha os dias), **a cada N dias**, todo mês (rotina) ou **só uma vez**. Por quanto tempo: uso contínuo, **por N dias** (antibiótico) ou até uma data. Cada horário vira um evento que se repete no calendário escolhido (de preferência um calendário local, que aceita editar).

O modelo fica escrito na descrição do evento, assim:

```
#remédio
Dose: 1 comprimido
Quem toma: Andressa
Tomar em jejum
```

Por isso ele aparece no Google, no Outlook ou no cartão de calendário do Home Assistant, e qualquer aparelho com o CronologIA reconhece. Dá para criar um modelo à mão, escrevendo `#remédio`, `#conta`, `#rotina` ou `#manutenção` na primeira linha da descrição. **Quem toma** pode ser uma pessoa do Home Assistant, outro nome ou um pet.

Os modelos não entram na lista de compromissos da tela Agora, porque têm os cards deles. No calendário eles aparecem com o ícone do modelo e com ✓ quando feitos. **Editar** abre o formulário do modelo; em itens que se repetem, você escolhe só este ou este e os próximos.

### Remédios de hoje

Fica no topo da tela Agora, separado por pessoa: horário, remédio, dose e o botão **Tomei**. A dose da hora fica destacada; a que passou do tempo fica **vermelha, com o aviso no alto do card e na linha de status**. Tomada, ganha ✓, o horário e quem marcou; tocar no ✓ desfaz. A marcação vale para todos os aparelhos na hora.

### Manutenção da casa

Para o que se faz de tempos em tempos e conta **a partir da última vez** (trocar o filtro de água a cada 6 meses, limpar o ar-condicionado a cada 3). No calendário fica só a próxima data. **Feito** leva a próxima data para hoje + o intervalo e guarda o dia no histórico do próprio evento (**Desfazer** volta). O item aparece na tela Agora alguns dias antes de vencer (você escolhe quantos) e fica vermelho quando vence; **Todas as manutenções** mostra a lista inteira com o anel de cada prazo.

## Recompensas

Um placar para quem faz mais em casa (por exemplo, você × a Dessa), na aba **Recompensas**.

- **Pontos nas tarefas**: os modelos **Rotina da casa** e **Manutenção** têm o campo **Pontos para quem fizer** (5, 10, 20, 30, 50 ou outro valor). A frequência é a de sempre: todo dia, dia sim, dia não, a cada 3 dias, dias da semana… No evento fica `Pontos: 10`.
- **Quem fez ganha**: ao marcar **Feito**, os pontos vão para quem está usando o app (o usuário do Home Assistant de cada um vira a pessoa dele). Se você marcar uma tarefa que outra pessoa fez, o aviso de baixo oferece **"Foi Andressa"** para passar os pontos. Num aparelho sem usuário conhecido, o app pergunta **Quem fez?**. A tarefa que ficou de ontem ainda pode ser marcada.
- **Placar**: os pontos de cada um no período, quem está na frente (com a coroa) e quantos dias faltam para fechar.
- **Prêmio do período**: toque em **Definir** e escolha **O mesmo para todos** (quem somar mais pontos leva) ou **Um para cada pessoa** ("Se Diego vencer: jantar fora", "Se Andressa vencer: massagem"). No fechamento, quem venceu ganha o seu; empate fica registrado como empate. Dá para deixar já o do próximo período.
- **Fechamento**: o período fecha **toda semana** (no dia em que a semana começa, em **Mais › Aparência**), **a cada 15 dias** ou **todo mês**. Ao fechar, o resultado vai para o **Histórico** (quem venceu, o placar e o prêmio) e para o celular de quem participa. Depois é só tocar em **Entregue** quando o prêmio for pago.
- **Pontos avulsos**: para o que não está na agenda ("lavou o carro, +20"). Saem do placar pelo ×.
- **Deméritos**: a lista do que tira pontos, como "Toalha molhada na cama −5" ou "Louça suja na pia −5". A lista se monta em **Mais › Placar** (**Novo demérito** ou uma das sugestões; toque num deles para mudar os pontos ou apagar). Na aba Recompensas, quando acontecer, toque no nome de quem foi: desconta na hora, com **Desfazer**. Cada demérito mostra quantas vezes foi marcado no período e por quem; o placar pode ficar negativo e conta os deméritos de cada um. O que já foi descontado sai pelo × nos pontos do período.
- **Tarefas do ResolvIA**: no ResolvIA (2.8.0 ou mais novo), ligue **Mais › Integrações › Recompensas › Pontos nas tarefas** e, em cada tarefa, escolha **Pontos para quem concluir**. Quem concluir a tarefa no ResolvIA ganha os pontos neste placar (o ResolvIA sabe quem é pelo usuário do Home Assistant; se não souber, pergunta). Concluir aqui, no card **Tarefas com prazo**, dá os mesmos pontos, e as de hoje aparecem em **Para pontuar hoje**. A mesma tarefa no mesmo dia conta uma vez só; reabrir tira os pontos. No placar elas aparecem com "· ResolvIA".
- **Para pontuar hoje** (ligue em **Mais › Placar › Marcar pontos em Recompensas**): as tarefas e manutenções com pontos de hoje, para marcar direto da aba, mais **Tarefa com pontos** e **Pontos avulsos**. Desligado, as tarefas são marcadas na Agora e no ResolvIA.

Em **Mais › Placar**: quem participa, de quanto em quanto tempo fecha, marcar pontos em Recompensas, se o resultado vai para o celular, desligar o placar e a lista de deméritos. Trocar o período recomeça a contagem no período de agora, sem apagar os pontos.

## Avisos de remédio no celular

Em **Mais › Avisos**:

- **Na hora** de cada dose, o celular de quem toma recebe um aviso com **Tomei** e **Adiar 15 min**. Tomei no aviso marca a dose no app; Adiar avisa de novo em 15 minutos.
- **Se não tomar** (15 min, 30 min ou 1 hora depois, você escolhe), avisa de novo, também para **quem cuida**.
- Quem não tem celular (uma criança, o gato) avisa quem cuida já na hora.
- Quando a dose é marcada, o aviso some dos celulares.

O celular de cada pessoa vem sozinho do Home Assistant (a pessoa com o app Home Assistant no celular, pelo rastreador dela); dá para escolher outro em cada pessoa e **testar** pelo sininho: o teste chega igual ao aviso de verdade, com **Tomei** e **Adiar**, e tocar num deles confirma no celular e na tela do app que o botão chegou ao CronologIA. Os avisos usam o app Home Assistant do celular (`notify.mobile_app_…`), no canal "Remédios" no Android, com prioridade alta. Cada remédio pode ficar sem aviso (no formulário).

## Contas do GerencIA

Com o [GerencIA](https://github.com/diegozapella63/gerencia-ha) (o app de finanças da mesma família, 1.5.0 ou mais novo) no mesmo Home Assistant, as **contas a pagar, os fixos e as faturas do cartão** aparecem no card **Contas a pagar** e no calendário, no dia do vencimento. **Paguei** dá baixa no GerencIA (o fixo do mês fica pago, a fatura fica toda paga) e **Desfazer** volta. O modelo **Conta a pagar** cria a conta lá (única, todo mês ou todo ano, com categoria), ou só no calendário, se você preferir.

Não há nada a configurar: o GerencIA deixa o endereço e uma chave em `share/gerencia/integracao.json`, e o CronologIA lê a pasta `share` (só leitura). Para cortar a ligação, desligue **Mais › Outros apps** no GerencIA. Em **Mais › Integrações › Contas do GerencIA** aparece se está conectado e dá para tirar as contas do calendário.

## Tarefas do ResolvIA

O [ResolvIA](https://github.com/diegozapella63/resolvia-ha) guarda as tarefas nas listas do próprio Home Assistant (`todo.*`), e o CronologIA lê essas mesmas listas. As tarefas **com prazo** aparecem:

- no card **Tarefas com prazo** da tela Agora: atrasadas em vermelho, as de hoje e as de amanhã, com o quadradinho de **Concluir** (e **Desfazer**). As de hoje que você concluir ficam com ✓;
- no calendário, no dia do prazo (ou no horário, se tiver), com o nome da lista;
- tocando numa delas: prazo, lista, notas e **Concluir** / **Reabrir**.

Com **Mais › Integrações › Tarefas sem prazo na Agora** ligado, o card mostra também as tarefas pendentes sem data (e as das listas que não aceitam prazo), num grupo **Sem prazo** depois das que têm prazo.

Para criar, use **Novo › Tarefa**: nome, lista do ResolvIA, prazo (dia, ou dia e horário, ou sem prazo) e notas. A tarefa entra direto na lista do Home Assistant e aparece no ResolvIA na hora; o app lembra a última lista usada. Listas que não aceitam prazo (as do Alexa, por exemplo) recebem a tarefa sem data.

Concluir aqui marca a tarefa como feita no Home Assistant, então ela aparece concluída no ResolvIA na hora, e a **repetição** do ResolvIA ("volta 3 dias depois de feito") continua funcionando. O prazo, as notas e a repetição se mudam no ResolvIA. Prazo é só o que alguém definiu: listas que não deixam definir prazo recebem a data da própria integração (a Problem List da Análise dos Dispositivos põe ali desde quando o aparelho está fora do ar), e essas datas não viram tarefa com prazo. Se no ResolvIA você desligar os **Prazos** de uma lista, aqui ela também fica de fora.

Em **Mais › Integrações › Tarefas do ResolvIA** aparece **Conectado ao ResolvIA** com a versão (o ResolvIA 2.5.1 ou mais novo avisa que está instalado pela pasta `share`; sem ele, o app lê as listas do Home Assistant do mesmo jeito), quantas listas e tarefas com prazo há, e você escolhe quais listas entram (deixe de fora, por exemplo, uma lista de problemas de dispositivos) e se elas aparecem no calendário.

## Sensores e automações

O app cria no Home Assistant:

- `sensor.cronologia_remedios_hoje`: quantas doses faltam hoje, com `tomados`, `total`, `atrasados`, `proximo` e `pendentes`;
- `binary_sensor.cronologia_remedio_atrasado`: ligado quando alguma dose passou do tempo (classe "problema");
- `sensor.cronologia_manutencoes_vencidas`: quantas manutenções venceram, com `vencidas` e `proximas`;
- `sensor.cronologia_placar` (com o placar ligado): quem está na frente, com `pontos` de cada um, `premio`, `periodo` e `termina`.

Para marcar algo como feito de fora do app (uma automação, uma **etiqueta NFC** na geladeira), dispare o evento `cronologia_feito`:

```yaml
action: event.fire
data:
  event_type: cronologia_feito
  event_data:
    nome: Trocar o filtro de água
```

Uma manutenção com esse nome fica feita (e vai para a próxima data); uma rotina ou um remédio de hoje com esse nome fica marcado. Com `quem: Andressa`, os pontos vão para ela (e, se houver dois itens com o mesmo nome, vale o dela). Uma etiqueta NFC para cada pessoa resolve.

Para marcar um **demérito** de fora do app (uma rotina da Alexa, uma etiqueta NFC no quarto), dispare `cronologia_demerito` com o nome do demérito e de quem foi:

```yaml
action: event.fire
data:
  event_type: cronologia_demerito
  event_data:
    nome: Toalha molhada na cama
    quem: Diego
```

## Outlook, Google e Alexa

- **Outlook**: pelo **MS365 Calendar** (HACS), que cria calendários normais no Home Assistant e, com a opção de editar, deixa criar e mudar eventos por aqui. Precisa de um registro de app no Microsoft Entra (Azure), gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra. A outra forma é publicar o calendário no Outlook na web (Configurações › Calendário › Calendários compartilhados) e adicionar o link ICS como **Calendário remoto**: só leitura, atualizado uma vez por dia.
- **Google Agenda**: integração oficial do Home Assistant, atualizada a cada 15 minutos.
- **Alexa**: a Alexa grava eventos na agenda vinculada no app dela (Google, Outlook ou Apple). Se essa mesma agenda estiver no Home Assistant, o que você pedir por voz aparece aqui depois da próxima atualização do HA.

## Eventos de mensagens e fotos

No botão **Novo**:

- **Colar mensagem**: cole o convite, a mensagem do WhatsApp ou o e-mail ("consulta com a Dra. Paula quinta às 15h"). A IA encontra datas, horários e locais.
- **Escolher fotos**: prints, convites, cartazes. No app Android do Home Assistant é uma foto por vez (limitação da versão atual do app); use **Mais fotos** na revisão para juntar outras.
- **Digitalizar com IA**: abre a câmera dentro do app para fotografar um cartão de consulta ou um convite, com lanterna e várias fotos seguidas.
- **Arquivo .ics**: convite de e-mail ou exportação de outra agenda (também em **Mais › Dados**).

Você revisa título, data e horário de cada evento e escolhe o calendário antes de adicionar.

### Leitura por IA

O CronologIA não tem IA própria e não guarda chave de API. Ele usa a ação `ai_task.generate_data` do Home Assistant, então funciona com a integração de IA que você configurar lá, e dá para trocar quando quiser:

| Integração | Observação |
|---|---|
| Anthropic (Claude) | Precisa de chave da API da Anthropic. Lê fotos. |
| OpenAI | Precisa de chave da API da OpenAI. Lê fotos. |
| Google Gemini | Costuma ter uma cota gratuita. Lê fotos. |
| Ollama | Roda um modelo local na sua rede, sem custo e sem mandar nada para fora. Para fotos, use um modelo que entenda imagens (por exemplo `qwen2.5vl` ou `gemma3`). |

Para configurar:

1. Em **Configurações > Dispositivos e serviços > Adicionar integração**, escolha a integração e siga os passos.
2. Na página da integração, adicione uma **tarefa de IA** (AI Task). Para ler fotos, escolha um modelo que entenda imagens.
3. No CronologIA, abra **Mais > Integrações > Leitura por IA** e escolha essa IA. "Padrão do Home Assistant" usa a IA preferida definida em **Configurações > Sistema > Geral**. Toque em **Verificar de novo** para conferir se ela está pronta.

Na hora da leitura, o app copia a foto por alguns segundos para `media/cronologia/ia-temp`, chama a IA pelo Home Assistant e apaga a cópia em seguida. A IA recebe a data e o fuso de hoje para entender "amanhã" ou "quinta".

Sem IA configurada, todo o resto funciona normalmente, inclusive importar arquivos .ics.

## Dados

Em **Mais › Dados**, como nos outros apps:

- **Exportar**: **Tudo (ZIP)**, com os dados do app (`cronologia.json`), os eventos de cada calendário em .ics (do último ano aos próximos 13 meses), `eventos.csv` e `pontos.csv` para o Excel; **Eventos (CSV)**; **Dados (JSON)**; e **Agenda (.ics)**, escolhendo os calendários e o período.
- **Backup na pasta share**: cria o mesmo ZIP em `share/cronologia`, que você acessa pela rede do Home Assistant, com **Restaurar** em cada um.
- **Importar backup ou JSON**: traz os dados do app de um .zip ou .json do CronologIA (nome e cor das agendas, preferências, pessoas e avisos, placar e marcações). Os eventos não mudam: para trazê-los, use **Importar eventos (.ics)** com o .ics do calendário que está no ZIP.
- **Versões anteriores**: o app guarda sozinho uma cópia dos dados a cada 10 minutos de uso (as últimas 60) e antes de cada importação ou restauração.

Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda o nome, a cor e a visibilidade de cada calendário, as preferências (com o celular de cada pessoa), as marcações de **Tomei, Paguei e Feito** dos últimos 120 dias, os avisos já enviados e o placar (pontos do último ano, prêmios e histórico), em `/data/cronologia.json`, que entra no backup do Home Assistant. O histórico das manutenções fica no próprio evento. O tema (automático, claro ou escuro) e o modo do calendário (mês, semana…) são escolhidos por aparelho.

## Segurança

Da tela para o Home Assistant, o app só repassa comandos de calendário (`calendar.*`): ler eventos, criar, editar e apagar. Por conta própria, o servidor do app faz só isto: lê as pessoas (`person.*`), os celulares (`notify.mobile_app_*`) e as listas de tarefas (`todo.*`), marca uma tarefa como feita ou não quando você toca em Concluir, envia os avisos de remédio, publica os três sensores acima e escuta os eventos `mobile_app_notification_action` (botões dos avisos), `cronologia_feito`, `cronologia_demerito` e `cronologia_pontos` (do ResolvIA). Ele não lê nem controla nenhuma outra entidade da casa.
