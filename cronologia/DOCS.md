# CronologIA

Uma agenda para os **calendários nativos** do Home Assistant (`calendar.*`): calendário local, Google Agenda, Outlook, CalDAV, calendários remotos (.ics), feriados… Tudo ao vivo e com um visual bem mais caprichado que a tela padrão.

Nada é copiado: o CronologIA mostra e edita os mesmos calendários que o HA já tem. Se um evento muda no Google ou no Outlook, ele muda aqui assim que o Home Assistant fica sabendo.

## Primeiros passos

1. Depois de instalar, toque em **Iniciar**.
2. Ative **Mostrar na barra lateral** (e, se quiser, **Watchdog**).
3. Abra o **CronologIA** pela barra lateral.

Sem nenhum calendário no Home Assistant, a tela mostra como adicionar um. O mais simples é o **Calendário local**, que fica no próprio HA e aceita tudo.

## Telas

- **Agora**: no alto, **Remédios de hoje** e **Contas a pagar** (quando há); depois o evento que está acontecendo (com quanto falta para terminar) ou o próximo **de hoje** (**A seguir**), os eventos do dia todo, a lista de hoje com a linha de "agora", o card do **MemorIA** (com a integração ligada: a folha que vale agora), a **Rotina da casa** (as já feitas ficam recolhidas em **Concluídas (n)**) com a **Manutenção** que está vencendo e, no fim, as **Tarefas**. A Agora é só o dia de hoje: os próximos dias ficam no **Calendário**. Com todos os remédios do dia tomados, ou todas as rotinas feitas, o card sai da Agora (fica até você sair da tela, para não sumir debaixo do dedo); o Calendário continua mostrando tudo, feito.
  - **Ordem dos cards**, no fim da Agora: a lista de todos os cards (Férias, Busca, Remédios de hoje, Contas do GerencIA, Agora ou a seguir, Hoje, MemorIA, Rotina da casa e Tarefas do ResolvIA), também os que estão fora agora (sem nada, só com férias marcadas ou com a integração desligada), cada um com as setas para subir e descer. A ordem é de cada pessoa da casa, e vale em todos os aparelhos dela. **Voltar à ordem de sempre** desfaz. No computador, cada coluna segue a ordem.
- **Calendário**: **Mês** (com pontinhos na cor de cada calendário), **Semana**, **3 dias** (hoje e os dois seguintes, com colunas largas) e **Dia** (com as horas do dia; toque num horário vazio para criar um evento ali) e **Lista** (próximos 30 dias, com busca do último ano ao próximo). Arraste o mês para os lados para trocar. No **Mês**, o número de um dia que já passou fica **verde** quando tudo o que havia nele foi marcado **Feito** (remédios, rotinas, tarefas, contas, manutenção e os compromissos também) e **vermelho** quando algo ficou para trás; hoje só fica verde. Os dias no alto da **Semana**, de **3 dias** e do **Dia** mostram as mesmas cores. Um evento de vários dias (uma hospedagem, uma viagem) aparece em cada dia ("Dia 2/6"), e o **Feito** vale só para o dia marcado.
  - Na **Semana** e no **Dia**, cada bloco ocupa no mínimo meia hora, e os **remédios** aparecem com pílula, borda tracejada e listras, diferentes dos eventos. A faixa **dia todo** é só para eventos. O que não tem horário (rotinas, tarefas, manutenções, contas) vira um contador por dia, **feitas/total**, embaixo da data (no Dia, a barra **Qualquer hora**). Tocar abre a lista do dia para marcar ali mesmo.
  - A rotina que **volta depois de feita** vai para a próxima data quando você marca, mas continua no dia em que foi feita, como concluída (num dia que já passou, só para ver; tocar diz quando e quem fez).
  - Em cada dia, primeiro vêm os **eventos** e os **remédios** (que têm hora para tomar), na ordem do horário, depois os de dia todo; separados embaixo, **Rotinas, tarefas e lembretes**: rotinas, tarefas do ResolvIA, manutenções e contas, que podem ser feitos a qualquer hora.
- **Adicionar**: cria um evento, uma **tarefa do ResolvIA** ou um **modelo** (remédio, conta, rotina, manutenção), ou traz eventos de uma mensagem, foto ou arquivo .ics.
- **Recompensas**: o placar da casa. Pontos por tarefa feita, quem está na frente, o prêmio do período e o histórico (veja abaixo).
- **Mais** (os três pontinhos) abre um menu. Cada linha abre a sua tela, com **‹ Mais** no alto para voltar ao menu (o Voltar do celular e arrastar para a direita também voltam):
  - **Calendários**: os calendários agrupados por integração, com nome, cor e **mostrar/ocultar**; os ocultos ficam no fim, em **Ocultos (2)**, fechados até tocar; o calendário padrão para eventos novos; atalhos para adicionar calendários.
  - **Rotinas**: tudo o que está cadastrado (rotinas, remédios, manutenções e contas), com busca. Com **Usar recompensas** desligado, Rotinas vira uma aba da barra de baixo, no lugar de **Recompensas**, e sai deste menu.
  - **Recompensas**: **Usar recompensas** no alto (desligado, a aba Recompensas da barra dá lugar a **Rotinas**); ligado, os ajustes (quem participa, de quanto em quanto tempo fecha, marcar pontos em Recompensas, marcar por outras pessoas, resultado no celular, lembrete diário) e a lista de **deméritos**. Desligado, não aparece mais nada, nem os deméritos. (Até a 1.63 era uma aba de Configurações.)
  - **Avisos**: avisos de remédio no celular, as pessoas e pets e quem cuida.
  - **Férias**: de quando até quando as rotinas, as tarefas, os deméritos e a manutenção da casa ficam pausados (os remédios continuam).
  - **Configurações**, em quatro abas no alto, as mesmas de todos os apps da família (ficam presas no topo ao rolar; abre em Integrações):
    - **Integrações**: **contas do GerencIA**, **tarefas do ResolvIA** (cada um com o indicador verde de conectado), **levar manutenções e rotinas para o ResolvIA**, **trechos do MemorIA no Agora**, **CorrerIA**, **IA do Home Assistant** (o **Usar IA**), Falar, uso da IA e sensores.
    - **Dados**: exportar, backup na pasta share, importar, versões anteriores, onde ficam os dados e começar do zero.
    - **Aparência**: tema (Sistema, Claro ou Escuro) e cor do app. Com **Cor do dia** (ligada no começo), a cor muda todo dia sozinha; escolher uma cor desliga e deixa fixa nela.
    - **Opções**: **Local e notas** no Adicionar (desligado por padrão) e início da semana (segunda, como vem, ou domingo; vale para o calendário e para o placar).
  - **Sobre**, por último: quem faz o app (**CorrerIA Code**), os outros apps da família, cada um com uma linha e o link para o GitHub, e **Meu GitHub**.

As caixas de seleção (como **Calendário padrão** ou **Fala para texto**) abrem uma janela de baixo para cima com as opções; a atual vem marcada. O Voltar do celular, o **X** ou tocar fora fecham sem mudar nada. No computador, a janela abre no meio da tela, e dá para escolher com as setas e Enter.

Os horários também abrem uma janela assim, nunca a do celular. O horário sempre em 24 horas: toque na hora e depois nos minutos (de 5 em 5), que escolhem e fecham; **Pronto** muda só a hora.

As datas são como o Prazo do ResolvIA: os atalhos em botões (**Hoje**, **Amanhã**, **Sábado**, **Próx. semana**; numa data que já passou, como **Feito pela última vez**, **Hoje** e **Ontem**) e **Outra data**, que abre o mês ali embaixo, com hoje marcado: ‹ e › trocam o mês, tocar no nome do mês mostra os meses do ano e tocar num dia escolhe. No botão, a data aparece por extenso ("Quinta, 24 de dez"). Na conferência da leitura por IA, a data de cada evento ainda abre a janela do mês.

O que está oculto ou pausado de propósito fica no fim da lista, fechado, com o nome e quantos são (**Ocultos (2)**, **Pausadas (3)**); tocar abre. Vale para os calendários ocultos, as listas do ResolvIA deixadas de fora e as rotinas pausadas nas férias.

### No computador

Com a tela larga (1000 pixels ou mais, como no InventarIA), as abas de baixo viram uma **barra lateral**: o botão **Adicionar**, as seções (Agora, Calendário, Recompensas, Mais), um **mês pequeno** (toque num dia para abri-lo no Calendário; as setas trocam o mês) e os **calendários**, cada um com a sua cor: tocar mostra ou esconde, como em **Mais › Calendários** (os ocultos ficam no fim, em **Ocultos (n)**). O Calendário usa a largura toda, e as janelas (Adicionar, editar, escolher) abrem no meio da tela. No celular e no tablet nada muda.

### Falar

O **microfone** no alto de cada tela, à direita: toque, fale o compromisso ("Dentista quinta às 15h na Clínica Sorriso", "Aniversário da Ana sábado, o dia todo") e toque de novo. O Home Assistant transcreve o que você disse com a **fala para texto do Assist** (Configurações › Assistentes de voz; com o Home Assistant Cloud já vem pronta, em português), e a IA do Home Assistant encontra os eventos, como numa mensagem colada. Para usar outro motor de fala (Whisper, Google…) sem mexer no assistente de voz do Home Assistant, escolha em Mais › Configurações › Integrações › **Falar**. Você confere a lista (com o que foi ouvido no alto) e adiciona. Até 2 minutos por vez. O microfone só aparece quando há fala para texto e a IA do Home Assistant; o navegador ou o app do celular pede permissão na primeira vez.

### Conversa com a IA

O botão de balão, ao lado do microfone, abre uma conversa com a IA. Pergunte sobre a tela em que está ("o que tenho hoje?", "estou livre amanhã à tarde?", "quem está ganhando?") ou sobre qualquer outro assunto; dá para escrever ou tocar no microfone e falar. Ela conhece a agenda dos próximos dias, as rotinas e os remédios de hoje, as contas, a manutenção, o placar e as tarefas com prazo do ResolvIA.

Pedindo para mexer na agenda ("marca dentista sexta às 15h", "fiz arrumar a cama", "tomei a sertralina"), ela mostra cada ação num cartão e só faz quando você toca em **Fazer** (ou **Fazer todas**). O evento vai para o calendário do **Adicionar**. **Nova conversa** começa outra. Com **Usar IA** desligado, o botão não aparece. Cada mensagem conta em **Uso da IA** como Conversa.

### Buscar

Na **Agora**, o campo **Buscar nos eventos** logo abaixo do título: a primeira letra já abre a busca do **Calendário › Lista** (do último ano ao próximo) com o que foi digitado. No computador, também pelo **Buscar** da barra lateral e pela tecla **/** de qualquer tela.

## Criar, editar e apagar

Depende do calendário. O CronologIA só mostra os botões que cada um permite:

| Calendário | Ler | Criar | Editar e apagar |
|---|---|---|---|
| Calendário local | sim | sim | sim |
| Google Agenda | sim | sim | sim: a integração do Google no HA não edita, então o app apaga e cria de novo (num evento que se repete, a série toda recomeça no dia editado) |
| Outlook pelo MS365 Calendar (HACS) | sim | sim, com a opção de editar ligada | sim, com a opção de editar ligada |
| CalDAV | sim | sim | não (a integração não permite) |
| Calendário remoto (.ics), feriados | sim | não | não |

Em eventos que se repetem, ao salvar ou apagar você escolhe **só este evento** ou **este e os próximos** (para apagar, também **toda a série**). Ao apagar um evento comum, aparece **Desfazer**.

Mudar o evento de calendário cria uma cópia no novo calendário e apaga a original (o Home Assistant não tem "mover").

**Repetir** fica numa linha só: Não, Diário, Semanal, Mensal ou Anual.

**Local e notas** (em **Mais › Configurações › Opções › Adicionar**) vem desligado: o formulário do evento fica sem **Local** e **Notas**, e o da tarefa sem **Notas**. Ligado, os campos aparecem. Um evento que já tem local ou notas continua mostrando os dois ao editar, para nada ficar escondido.

## Modelos

Em **Adicionar**, escolha o modelo no alto e o formulário muda:

| Modelo | O que pede | Na tela Agora |
|---|---|---|
| **Remédio** | remédio, dose, quem toma, horários (1x, 2x, 3x, de 8 em 8 h ou à mão), frequência, por quanto tempo | **Remédios de hoje**, com **Tomei** |
| **Conta a pagar** | conta, valor, vencimento, se repete todo mês ou todo ano | **Contas a pagar**, com **Paguei** |
| **Rotina da casa** | tarefa, quem faz, horário (qualquer hora, manhã, tarde, noite ou num horário), frequência (ou **depois de feita**) | **Rotina da casa**, com o círculo de feito |
| **Manutenção** | o que fazer, a cada quanto tempo, quando foi feito pela última vez, quantos dias antes mostrar | **Manutenção da casa**, com o anel do prazo e **Feito** |

Frequências de remédio e rotina: **todo dia**, **dia sim, dia não**, **dias da semana** (escolha os dias), **a cada N dias**, todo mês (rotina) ou **só uma vez**. Por quanto tempo: uso contínuo, **por N dias** (antibiótico) ou até uma data. Cada horário vira um evento que se repete no calendário escolhido (de preferência um calendário local, que aceita editar).

### Período da rotina

Uma rotina sem horário pode ter um **período**: **Manhã**, **Tarde** ou **Noite** (em **Horário**). As listas de hoje (Rotina da casa, Para pontuar hoje e o Calendário) seguem o dia: primeiro o período em que você está, depois o que era de um período que já passou (em destaque, ainda por fazer), as de qualquer hora e, por fim, os períodos que ainda vão chegar. Uma rotina num horário entra no período desse horário. Manhã vai das 5h ao meio-dia, tarde até as 18h e noite até as 5h.

### Modo férias

Em **Mais › Férias**, ligue **De férias** e escolha de quando até quando (começa hoje, por 5 dias). Nesses dias as **rotinas**, as **tarefas do ResolvIA** e a **manutenção da casa** ficam pausadas: saem da tela Agora, do Para pontuar hoje (que diz que está de férias) e dos dias do calendário, em **Rotinas** ficam no fim de cada seção, em **Pausadas (n)**, fechadas até tocar (não atrasadas), e o sensor de manutenções vencidas fica em zero. Os **deméritos** também ficam pausados: em Recompensas aparece "Pausados nas férias." e nem uma automação consegue tirar pontos; **Tarefa com pontos** e **Pontos avulsos** somem até as férias acabarem. Os **remédios** continuam, com os avisos no celular. A tela Agora mostra um card das férias: até quando, em que dia estão (Dia 3 de 8, com uma barra), o que fica pausado e **Encerrar férias**; no calendário, os dias de férias ficam marcados. Na volta, nada aparece como atrasado por causa dos dias fora: a rotina de ontem não fica para fazer e a que volta N dias depois conta o atraso a partir da volta (no calendário, ela e a manutenção que venceram nos dias fora aparecem no dia da volta).

Num calendário do Google (ou outro de fora do Home Assistant, que avisa no celular sozinho), as férias mudam os eventos de verdade, para o Google Agenda não avisar nada nesses dias: cada rotina ou manutenção que se repete termina no dia antes das férias e uma igual começa no primeiro dia dela depois da volta; a rotina que volta N dias depois de feita e a manutenção de um evento só que vencem nas férias vão para o dia da volta. **Mais › Férias** diz quando voltam. Ao **Encerrar**, cancelar ou mudar as datas, o app traz de volta os dias que deixaram de ser de férias (a partir de hoje) e o que mudou de dia volta para o seu dia (ou para hoje). Os dias tirados ficam anotados no app até as férias acabarem. Fica de fora a rotina que se repete um número de vezes ("10 vezes"), e o calendário local do Home Assistant não muda. A série nova é outro evento no Google: uma mudança feita à mão num dia só da série antiga não passa para ela.

### Rotina que volta depois de feita

Na **Rotina da casa**, a frequência **Depois de feita** serve para o que conta a partir da última vez, e não de um dia fixo: "trocar a areia 3 dias depois de trocada", "passar pano 2 dias depois". Escolha em quantos dias volta e a **Primeira vez** (hoje, amanhã ou outra data).

- Na agenda fica **só a próxima vez**: um evento só, e não um por dia para sempre.
- Funciona em qualquer calendário que cria e apaga eventos. Na **Google Agenda**, que não deixa editar pelo Home Assistant, o Feito cria o evento na próxima data e apaga o antigo.
- Na Agora, ela aparece na **Rotina da casa** no dia em que vence. Se não for feita, continua lá nos dias seguintes, no alto e em vermelho ("atrasada há 2 dias").
- **Feito** (o círculo, os botões de quem fez, a ficha do evento, o Alexa ou NFC com `cronologia_feito`, ou o ResolvIA) leva a próxima vez para **hoje + N dias**, guarda o dia em "Feito em" e dá os pontos. Ela fica marcada como feita na lista de hoje ("feito por Beto · volta terça").
- **Desmarcar** (ou **Desfazer**) volta o evento para onde estava e tira os pontos.
- Ao editar, dá para mudar os dias e a próxima vez. Uma rotina que se repete por calendário (todo dia, dias da semana…) não vira "Depois de feita" pela edição: crie uma nova.
- Com **Levar para o ResolvIA** ligado, ela vai para a lista com a próxima data (atrasada também); concluir lá faz o mesmo que o Feito daqui.

No evento fica `Volta: 2 dias depois de feita` e `Feito em: 25/10/2026`.

O modelo fica escrito na descrição do evento, assim:

```
#remédio
Dose: 1 comprimido
Quem toma: Ana
Tomar em jejum
```

Por isso ele aparece no Google, no Outlook ou no cartão de calendário do Home Assistant, e qualquer aparelho com o CronologIA reconhece. Dá para criar um modelo à mão, escrevendo `#remédio`, `#conta`, `#rotina` ou `#manutenção` na primeira linha da descrição. **Quem toma** pode ser uma pessoa do Home Assistant, outro nome ou um pet.

Os modelos não entram na lista de compromissos da tela Agora, porque têm os cards deles. No calendário eles aparecem com o ícone do modelo e com ✓ quando feitos. **Editar** abre o formulário do modelo; em itens que se repetem, você escolhe só este ou este e os próximos.

### Pular uma rotina

Quando uma rotina não vai ser feita dessa vez, toque nela e escolha **Pular** (ao lado do Feito). Ela sai da lista sem pontos e sem contar como feita: a que repete pelo calendário (como a que "ficou de ontem") fica marcada como **pulada**; a que volta N dias depois de feita vai para a próxima data, contando de quando vencia (nunca antes de hoje). Dá para desfazer pelo aviso ou pela tela dela.

### Remédios de hoje

Fica no topo da tela Agora, separado por pessoa: horário, remédio, dose e o botão **Tomei** (para quem toma; para outra pessoa ou um pet, **Tomado**, e na tela do remédio **Ana tomou**). A dose da hora fica destacada; a que passou do tempo fica **vermelha, com o aviso no alto do card e na linha de status**. Tomada, a dose sai da lista (para o card não ficar o dia inteiro com ela); quem não tem mais nada para tomar hoje aparece numa linha só, com o nome e "tomou todos". **Tomados (n)** abre as doses tomadas, com ✓, o horário e quem marcou; tocar no ✓ desfaz. Uma dose que não vai ser tomada pode ser pulada: **Pular**, na tela do remédio. A dose pulada não fica atrasada, não avisa e sai da conta do dia; em **Tomados (n)** ela tem a marca amarela, e tocar nela desfaz. A marcação vale para todos os aparelhos na hora. Quando **todos** os remédios do dia foram tomados ("Tudo tomado"), o card desce para o fim da tela Agora; se você acabou de marcar o último ali, ele espera você sair da Agora para descer, sem pular debaixo do dedo. Desmarcar uma dose traz o card de volta para o topo.

### Manutenção da casa

Para o que se faz de tempos em tempos e conta **a partir da última vez** (trocar o filtro de água a cada 6 meses, limpar o ar-condicionado a cada 3). No calendário fica só a próxima data. **Feito** leva a próxima data para hoje + o intervalo e guarda o dia no histórico do próprio evento (**Desfazer** volta). O item aparece na tela Agora alguns dias antes de vencer (você escolhe quantos) e fica vermelho quando vence; **Todas as manutenções** mostra a lista inteira com o anel de cada prazo.

A **Rotina da casa** também pode ter um **Cômodo** ("Arrumar a cama" no Quarto), que aparece como etiqueta em Mais › Rotinas e vai para a tarefa no ResolvIA. Sem equipamento, a rotina, a manutenção e o **Adicionar › Tarefa** deixam marcar vários cômodos; **Todos**, logo depois de **Nenhum**, marca a casa inteira ("Passar pano" em todos os cômodos) e, tocado de novo, desmarca. Com todos marcados, a etiqueta é uma só: **Todos os cômodos**; com mais de um (mas não todos), **Vários cômodos**, e com mais de um equipamento, **Vários equipamentos**. Quais são, abrindo o item.

Com os cômodos e equipamentos do InventarIA ligados no ResolvIA, a manutenção pode ter **vários equipamentos** (**Outro equipamento**): o cômodo vem deles e fica bloqueado. No evento ficam `Equipamentos: Ar-condicionado; Geladeira` e `Cômodos: Quarto; Cozinha`, e a tarefa no ResolvIA leva todos.

**Casa ou Bens** (com o ResolvIA 2.62.0 e a área **Bens** do InventarIA: casa, terreno, carro): antes dos cômodos, a tarefa, a manutenção e a rotina perguntam onde. **Casa** mostra os cômodos da casa e os equipamentos dela; **Bens** mostra os bens (**Bem**), sem cômodo para escolher. O Bens não aparece como um cômodo da lista, nem no **Todos**.

## Recompensas

Um placar para quem faz mais em casa (por exemplo, você × a Aurora), na aba **Recompensas**.

- **Pontos nas tarefas**: os modelos **Rotina da casa** e **Manutenção** têm o campo **Pontos para quem fizer** (5, 10, 20, 30, 50 ou outro valor). A frequência é a de sempre: todo dia, dia sim, dia não, a cada 3 dias, dias da semana… No evento fica `Pontos: 10`.
- **Cores**: cada pessoa aparece na cor da agenda dela (a agenda que tem o nome dela, como "Pessoal (Ana)"; mude a cor em **Mais › Calendários**). Quem não tem agenda própria fica com uma cor livre.
- **Quem fez ganha**: ao marcar **Feito**, os pontos vão para quem está usando o app (o usuário do Home Assistant de cada um vira a pessoa dele). Se você marcar uma tarefa que outra pessoa fez, o aviso de baixo oferece **"Foi Ana"** para passar os pontos. Num aparelho sem usuário conhecido, o app pergunta **Quem fez?**. Para marcar por outra pessoa sem abrir nada, ligue **Marcar por outras pessoas** (nas opções do placar, desligado por padrão): cada rotina e manutenção da tela inicial e do **Para pontuar hoje** (e, no calendário, as rotinas de hoje, as manutenções e as tarefas com pontos) ganha as iniciais de quem participa (**D**, **A**) à direita, e um toque marca como feito por aquela pessoa, com os pontos. Depois de feita, a linha mostra a inicial de quem ganhou os pontos, na cor da pessoa, ao lado dos pontos (e acompanha um "Foi Beto"). Na tela do evento aparece um botão por pessoa no lugar do Feito. A tarefa que ficou de ontem ainda pode ser marcada.
- **Placar**: os pontos de cada um no período, quem está na frente (com a coroa) e quantos dias faltam para fechar.
- **Extrato** (logo abaixo do placar e do prêmio, antes do Histórico): tudo que mexeu nos pontos **no período atual** (a semana, a quinzena ou o mês, como em **Mais › Recompensas**), do mais novo para o mais antigo, separado por dia: quem ganhou (e quem marcou, se foi outra pessoa), quem tirou pontos de quem (deméritos e o ×), o que foi desmarcado, pontos que passaram de uma pessoa para outra, o Desfazer e o que veio do ResolvIA ou de uma automação. Mostra os 20 mais recentes; **Ver mais** traz os anteriores do período. Quando o período fecha, o Extrato recomeça vazio.
- **Pontuação errada**: no Extrato, o **×** à direita tira aqueles pontos do placar (ou cancela o demérito), com **Desfazer** no aviso. A retirada vira uma linha nova no Extrato ("Beto tirou 10 pontos de Ana"); a linha de antes continua lá. O × aparece só nos pontos do período atual que ainda estão no placar. A tarefa continua marcada como feita; só os pontos saem. Para dar os pontos a outra pessoa, desmarque e marque de novo por ela.
- **Prêmio do período**: toque em **Definir** e escolha **O mesmo para todos** (quem somar mais pontos leva) ou **Um para cada pessoa** ("Se Beto vencer: jantar fora", "Se Ana vencer: massagem"). No fechamento, quem venceu ganha o seu; empate fica registrado como empate. Dá para deixar já o do próximo período.
- **Fechamento**: o período fecha **toda semana** (no dia em que a semana começa, em **Mais › Configurações › Opções**), **a cada 15 dias** ou **todo mês**. Ao fechar, o resultado vai para o **Histórico** (quem venceu, o placar e o prêmio) e para o celular de quem participa. Depois é só tocar em **Entregue** quando o prêmio for pago.
- **Lembrete diário** (em **Mais › Recompensas**): uma vez por dia, na hora escolhida (**Manhã**, **Tarde**, **Noite** ou um horário exato), o celular de quem participa (em **Quem recebe**, um botão para cada pessoa do placar; todas, no começo) recebe os pontos e quem está ganhando ("Beto na frente por 10 pontos: Beto 135 × Ana 125. Fecha em 5 dias."). Tocar no aviso abre o app na aba **Recompensas**, como o aviso do fechamento. **Testar no meu celular**, embaixo, manda agora para o seu celular. Não vai nas férias.
- **Histórico**: os últimos 10 períodos, com quem venceu, o placar e o prêmio. Toque num deles para ver o extrato daquele período (só para consultar; um período fechado não muda mais). O extrato existe desde a 1.19.0; períodos de antes aparecem só com o resultado.
- **Pontos avulsos**: para o que não está na agenda ("lavou o carro, +20"). Saem do placar pelo ×.
- **Deméritos**: a lista do que tira pontos, como "Toalha molhada na cama −5" ou "Louça suja na pia −5". A lista se monta em **Mais › Recompensas** (**Novo demérito** ou uma das sugestões; toque num deles para mudar os pontos ou apagar). Na aba Recompensas, quando acontecer, toque no nome de quem foi: desconta na hora, com **Desfazer**. Cada demérito mostra quantas vezes foi marcado no período e por quem; o placar pode ficar negativo e conta os deméritos de cada um. O que já foi descontado sai pelo × no Extrato.
- **Tarefas do ResolvIA**: no ResolvIA (2.8.0 ou mais novo), ligue **Mais › Configurações › Integrações › Recompensas › Pontos nas tarefas** e, em cada tarefa, escolha **Pontos para quem concluir**. Quem concluir a tarefa no ResolvIA ganha os pontos neste placar (o ResolvIA sabe quem é pelo usuário do Home Assistant; se não souber, pergunta). Concluir aqui, no card **Tarefas com prazo**, dá os mesmos pontos, e as de hoje aparecem em **Para pontuar hoje**. A mesma tarefa no mesmo dia conta uma vez só; reabrir tira os pontos. No placar elas aparecem com "· ResolvIA". Com **Levar para o ResolvIA** ligado (veja em Tarefas do ResolvIA), as manutenções e rotinas também viram tarefas lá, e concluir no ResolvIA dá os pontos delas.
- **Para pontuar hoje** (ligue em **Mais › Recompensas › Marcar pontos em Recompensas**): as tarefas e manutenções com pontos de hoje que **ainda faltam** (as feitas saem dali; ficam na tela inicial e no Extrato), para marcar direto da aba, mais **Tarefa com pontos** e **Pontos avulsos**. Desligado, as tarefas são marcadas na Agora e no ResolvIA.

Em **Mais › Recompensas**: **Usar recompensas** (ligar e desligar o placar; ligado de novo, volta com as mesmas pessoas), quem participa, de quanto em quanto tempo fecha, marcar pontos em Recompensas, se o resultado vai para o celular, o lembrete diário e a lista de deméritos. Desligado, somem os deméritos (também o evento `cronologia_demerito` e o sensor do placar em Integrações). Trocar o período recomeça a contagem no período de agora, sem apagar os pontos.

## Avisos de remédio no celular

Em **Mais › Avisos**:

- **Na hora** de cada dose, o celular de quem toma recebe um aviso com **Tomei** e **Adiar 15 min**. Tomei no aviso marca a dose no app; Adiar avisa de novo em 15 minutos.
- **Se não tomar** (15 min, 30 min ou 1 hora depois, você escolhe), avisa de novo, também para **quem cuida**.
- Quem não tem celular (uma criança, o gato) avisa já na hora a pessoa escolhida para ele ou, sem escolha, **quem cuida**.
- Quando a dose é marcada, o aviso some dos celulares.

O app olha para a pessoa, nunca para um aparelho: o aviso vai para os celulares ligados a cada pessoa no Home Assistant (os aparelhos com o app Home Assistant em **Configurações › Pessoas**, pelo nome do aparelho no app, mesmo que o rastreador tenha outro nome; um rastreador do roteador não é celular), e a tela mostra só as pessoas. Quem não tem celular (um pet, uma criança, alguém **Só no CronologIA**) tem embaixo do nome para quem vão os avisos dele: **No celular de quem cuida** ou no de uma pessoa da casa. **Quem cuida** também é escolhido entre as pessoas com celular. O sininho ao lado de cada um **testa** o aviso: o teste chega igual ao aviso de verdade, com **Tomei** e **Adiar**, e tocar num deles confirma no celular e na tela do app que o botão chegou ao CronologIA. **Testar no meu celular**, no fim, manda o mesmo teste para o seu celular. Os celulares escolhidos antes da 1.54.0 viram, sozinhos, as pessoas donas deles. Os avisos usam o app Home Assistant do celular (`notify.mobile_app_…`), no canal "Remédios" no Android, com prioridade alta. Cada remédio pode ficar sem aviso (no formulário). Com **Avisar no celular** desligado, nenhum remédio avisa: a opção some do formulário e o remédio diz **Avisos no celular desligados**.

## Contas do GerencIA

Com o [GerencIA](https://github.com/diegozapella63/gerencia-ha) (o app de finanças da mesma família, 1.5.0 ou mais novo) no mesmo Home Assistant, as **contas a pagar, os fixos e as faturas do cartão** aparecem no card **Contas a pagar** e no calendário, no dia do vencimento. **Paguei** dá baixa no GerencIA (o fixo do mês fica pago, a fatura fica toda paga) e **Desfazer** volta. O modelo **Conta a pagar** cria a conta lá (única, todo mês ou todo ano, com categoria), ou só no calendário, se você preferir.

A integração vem **desligada**: ligue em **Mais › Configurações › Integrações › Contas do GerencIA › Usar a integração**. Desligada, o CronologIA não consulta o GerencIA, e as contas de lá saem da Agora, do calendário e do Adicionar › Conta. Ligada, não há mais nada a configurar: o GerencIA deixa o endereço e uma chave em `share/gerencia/integracao.json`, e o CronologIA lê a pasta `share` (só leitura). Para cortar a ligação pelo outro lado, desligue **Mais › Outros apps** no GerencIA. No mesmo painel aparece se está conectado e dá para tirar as contas do calendário.

## Tarefas do ResolvIA

O [ResolvIA](https://github.com/diegozapella63/resolvia-ha) guarda as tarefas nas listas do próprio Home Assistant (`todo.*`), e o CronologIA lê essas mesmas listas.

A integração vem **desligada**: ligue em **Mais › Configurações › Integrações › Tarefas do ResolvIA › Usar a integração**. Desligada, nenhuma tarefa aparece no CronologIA (Agora, calendário, Para pontuar hoje e Adicionar › Tarefa), o **Levar para o ResolvIA** para e tira as tarefas que tinha posto na lista (a escolha fica guardada para quando ligar de novo), e os pontos que o ResolvIA manda não contam. O ResolvIA 2.15.0 ou mais novo mostra em Recompensas que a integração está desligada aqui.

Se o ResolvIA estiver com **Controlar prazos** desligado (2.15.0 ou mais novo), o **Adicionar › Tarefa** daqui também não oferece prazo: a tarefa entra sem data. As datas das tarefas de lá viram só informação: nenhuma aparece como atrasada nem no calendário, **Mostrar no calendário** some de Integrações e a outra opção vira **Tarefas na Agora**. Se o ResolvIA usar os **Cômodos do InventarIA** (2.28.0 ou mais novo), as tarefas mostram o cômodo (na Agora e na tela da tarefa) e o **Adicionar › Tarefa** pede o cômodo também; o ResolvIA guarda a escolha. Com os **equipamentos** ligados lá (2.29.0 ou mais novo), o mesmo vale para os equipamentos (um ou vários, ResolvIA 2.31.0 ou mais novo): com equipamento, o cômodo vem dele e fica bloqueado. Quando várias listas começam com o mesmo nome (as da Alexa, "Notas e Rotinas do Alexa Shopping list" e "… To-do list"), o Adicionar › Tarefa mostra só o que muda (Shopping list, To-do list) e, embaixo, o nome completo da lista escolhida.

Nas listas cuja integração não aceita data (as da Alexa, a Shopping list), o ResolvIA 2.58.0 ou mais novo guarda o prazo com ele, e essas tarefas também aparecem aqui com o prazo. Com o ResolvIA 2.59.0 ou mais novo, o **Adicionar › Tarefa** daqui também pede o prazo nessas listas ("Guardado no ResolvIA: a lista não aceita data."): ele vai para o ResolvIA, e não para a lista.

Com a integração ligada, as tarefas **com prazo** aparecem:

- no card **Tarefas com prazo** da tela Agora: atrasadas em vermelho, as de hoje e as de amanhã, com o quadradinho de **Concluir** (e **Desfazer**). As de hoje que você concluir ficam com ✓;
- no calendário, no dia do prazo (ou no horário, se tiver), com o nome da lista;
- tocando numa delas: prazo, lista, notas e **Concluir** / **Reabrir**.

Nas tarefas que valem pontos (com o placar ligado), o card mostra um botão com a inicial de cada pessoa: tocar em **D** conclui a tarefa e dá os pontos para o Beto, sem perguntar. O quadradinho conclui do jeito de sempre (para quem está usando o app, ou pergunta **Quem fez?**).

**De quem é cada lista**: com o ResolvIA 2.42.0 ou mais novo, se escolhe lá, em **⋯ › Personalizar › De quem é**; aqui, em **Mais › Configurações › Integrações › Tarefas do ResolvIA**, cada lista só mostra de quem é. O que estava escolhido aqui vai sozinho para o ResolvIA na primeira vez. Com um ResolvIA mais antigo, cada lista tem **De quem é** aqui mesmo: **Todos** (o padrão) ou uma pessoa da casa. A lista de uma pessoa (por exemplo, "Tarefas Dessa") só aparece no CronologIA dela, na Agora, no calendário, em Para pontuar hoje e no Adicionar › Tarefa. Quem é quem vem do usuário do Home Assistant ligado a cada pessoa. Num aparelho cujo usuário não é uma pessoa da casa (um tablet da cozinha, por exemplo), aparecem todas. Para pedir algo a outra pessoa, ligue **Criar tarefas nas listas dos outros** (no mesmo painel, desligado por padrão): o **Adicionar › Tarefa** passa a oferecer também as listas dela, marcadas com o ícone de pessoa e o aviso de quem é. A tarefa criada aparece só para ela.

Com **Mais › Configurações › Integrações › Tarefas sem prazo na Agora** ligado, o card mostra também as tarefas pendentes sem data (e as das listas que não aceitam prazo), num grupo **Sem prazo** depois das que têm prazo.

A ordem segue a **frequência** de cada tarefa no ResolvIA (2.9.1 ou mais novo): primeiro as que voltam **todo dia**, depois a cada 2 dias, a cada 3, toda semana… e por último as que não se repetem. Nas que têm prazo, a data vem antes; no mesmo dia, vale a mesma ordem. Cada tarefa mostra a frequência embaixo do nome ("+5 · todo dia · Casa") e na ficha ("Volta todo dia depois de concluída").

Para criar, use **Adicionar › Tarefa**: nome, lista do ResolvIA, prazo (dia, ou dia e horário, ou sem prazo) e notas. A tarefa entra direto na lista do Home Assistant e aparece no ResolvIA na hora; o app lembra a última lista usada. Listas que não aceitam prazo (as do Alexa, por exemplo) recebem a tarefa sem data.

Concluir aqui marca a tarefa como feita no Home Assistant, então ela aparece concluída no ResolvIA na hora, e a **repetição** do ResolvIA ("volta 3 dias depois de feito") continua funcionando. O prazo, as notas e a repetição se mudam no ResolvIA. Prazo é só o que alguém definiu: listas que não deixam definir prazo recebem a data da própria integração (a Problem List da Análise dos Dispositivos põe ali desde quando o aparelho está fora do ar), e essas datas não viram tarefa com prazo. Se no ResolvIA você desligar os **Prazos** de uma lista, aqui ela também fica de fora.

Em **Mais › Configurações › Integrações › Tarefas do ResolvIA** aparece **Conectado ao ResolvIA** com a versão (o ResolvIA 2.5.1 ou mais novo avisa que está instalado pela pasta `share`; sem ele, o app lê as listas do Home Assistant do mesmo jeito), quantas listas e tarefas com prazo há, e você escolhe quais listas entram (deixe de fora, por exemplo, uma lista de problemas de dispositivos; as deixadas de fora ficam no fim, em **Ocultas (n)**) e se elas aparecem no calendário.

### Trazer uma lista para o CronologIA

O caminho contrário: em **Mais › Configurações › Integrações › Tarefas do ResolvIA › Trazer uma lista para o CronologIA**, escolha uma lista do ResolvIA. Aparece cada tarefa como ela vai virar uma **Rotina da casa**:

- a que se repete no ResolvIA ("volta 2 dias depois de concluir") vira **Depois de feita** com os mesmos dias; a que não se repete vira **Só uma vez**;
- os **pontos** da tarefa no ResolvIA vão junto, e as notas também;
- a data: o prazo da tarefa (com o horário, se tiver); sem prazo, hoje. Uma tarefa que se repete e está atrasada continua atrasada (fica em vermelho na Agora); uma que já foi concluída e vai voltar começa na data em que voltaria.

Desmarque o que não quiser trazer (o que já tem uma rotina com o mesmo nome vem desmarcado), escolha o calendário e toque em **Trazer**. As tarefas trazidas **saem da lista do ResolvIA**, junto com a repetição e os pontos delas lá (no ResolvIA 2.11.0 ou mais novo), para não ficarem duplicadas. Se a lista não deixar apagar, elas ficam lá também. As tarefas que o próprio CronologIA leva para o ResolvIA (Levar para o ResolvIA) não aparecem.

### Levar para o ResolvIA

As **manutenções** e as **rotinas da casa** podem aparecer também como tarefas numa lista do ResolvIA. Em **Mais › Configurações › Integrações › Tarefas do ResolvIA › Levar para o ResolvIA**, escolha a lista das **Manutenções** e a da **Rotina da casa** (podem ser a mesma, como a **Casa**, ou uma para cada; **Nenhuma** não leva). Cada uma vira **uma** tarefa na lista dela:

- com a **próxima data**: na manutenção, o próximo vencimento; na rotina, a próxima vez de hoje em diante (com o horário, se a rotina tiver);
- com os **pontos** que ela vale (o troféu aparece no ResolvIA 2.9.0 ou mais novo);
- nas notas, "Manutenção do CronologIA" ou "Rotina da casa do CronologIA" (o ResolvIA esconde a marcação técnica `[cr:…]` que vai junto).

**Concluir no ResolvIA vale como Feito aqui**: a manutenção ganha a próxima data, a rotina de hoje fica marcada, e quem concluiu ganha os pontos no placar (o ResolvIA sabe quem é pelo usuário do Home Assistant, ou pergunta **Quem fez?**). Logo depois, a tarefa volta para a lista, pendente, com a data seguinte. **Foi Ana** passa os pontos; **Desfazer** (ou reabrir a tarefa) desfaz aqui também. Concluída por um caminho sem nome (a tela do Home Assistant ou o Alexa), a tarefa conta como feita, sem pontos.

O nome, a data, as notas e os pontos continuam sendo do CronologIA: mude aqui, no evento, que a tarefa acompanha. No ResolvIA, a tarefa abre só para ver. **Apagar** a tarefa no ResolvIA tira da lista até a próxima data; escolher **Nenhuma** tira todas, e trocar de lista leva para a nova. Essas tarefas não se repetem no card **Tarefas com prazo** daqui, porque já estão nos cards de manutenção e de rotina. A lista precisa aceitar criar e editar tarefas (uma **Lista de tarefas local** do Home Assistant serve; as do Alexa, não).

## MemorIA no Agora

Com o [MemorIA](https://github.com/diegozapella63/memoria-ha) (o app de anotações da mesma família, 1.13.0 ou mais novo) no mesmo Home Assistant, a **Agora** ganha um card com a folha do MemorIA que vale agora, desenhada como no MemorIA (a espiral, o papel do bloco, a letra de mão quando ela está ligada lá): o bloco, desde quando ("desde 18:00", ou "desde ontem às 22:00" quando começou antes da meia-noite) e o texto da folha. Um texto comprido aparece recolhido, com **Ver mais**; as caixas marcadas (☑) aparecem riscadas. Só a folha de agora: as próximas ficam no MemorIA. Tocar abre o MemorIA.

Valem os horários do MemorIA: os de cada folha (os trechos), os de cada bloco e os períodos (manhã, tarde, noite). Cada pessoa vê os blocos dela e os de todos, como na Agora do MemorIA; o CronologIA pergunta ao MemorIA pela pessoa que está olhando. Vale o relógio do celular de quem olha, o mesmo do Agora do MemorIA (mesmo viajando, em outro fuso). O card se atualiza sozinho a cada minuto e quando chega o próximo horário. Com o **Fica no Agora** do MemorIA (1.14.0), o card diz até quando a folha vale; passado esse tempo, o card some até a próxima. As caixas marcadas no Agora do MemorIA aparecem riscadas. Sem nada valendo agora, o card não aparece.

Vem **desligado**: ligue em **Mais › Configurações › Integrações › MemorIA › Trechos no Agora**. Ali aparece se está conectado ou o que deu errado. Não há mais nada a configurar: o MemorIA deixa o endereço e uma chave em `share/memoria/integracao.json`, e o CronologIA só lê. Desligado, o CronologIA não consulta o MemorIA.

## CorrerIA

O [CorrerIA](https://github.com/diegozapella63/correria-ha) junta os apps da casa no **WhatsApp**, no **Claude** e no **Gemini**: dá para perguntar o que tem hoje, criar um compromisso, marcar o remédio como tomado ou a rotina como feita, sem abrir o app.

1. Aqui, ligue **Mais › Configurações › Integrações › CorrerIA › Usar com o CorrerIA** (vem desligado; não depende do **Usar IA**, porque quem pensa é a IA do CorrerIA, o Claude ou o Gemini).
2. No app **CorrerIA**, conecte o WhatsApp, o Claude ou o Gemini (o passo a passo está na documentação dele). Ele acha o CronologIA sozinho.

Pelo CorrerIA dá para:

- ver o resumo de agora: os compromissos de hoje e de amanhã, os remédios de hoje, as rotinas da casa, as contas perto do vencimento (as do GerencIA também, com a integração ligada), a manutenção, o placar e as férias;
- buscar na agenda de um período, ver os calendários, o que está cadastrado (remédios, rotinas, contas e manutenções) e o placar com o extrato;
- criar um compromisso ou lembrete, ou um remédio, uma rotina da casa, uma conta a pagar ou uma manutenção, com as mesmas regras do **Adicionar** daqui (o calendário padrão, ou um com o nome do modelo);
- mudar e apagar um evento (num que se repete: só este dia, este e os próximos ou a série toda);
- marcar um remédio como tomado, uma rotina ou manutenção como feita ou uma conta como paga, desfazer, pular uma rotina ou um remédio e dar pontos avulsos ou um demérito.

As mudanças aparecem na tela na hora, e quem ganha os pontos é quem fez (ou a pessoa que conectou). No **Extrato** do placar, o que veio pelo CorrerIA diz por onde ("pelo WhatsApp", "pelo Claude"). O cartão mostra quando foi usado pela última vez.

Ligado, o CronologIA grava `share/cronologia/correria.json` com o endereço dele e uma chave própria (guardada em `/data/correria.key`); o CorrerIA usa essa chave. Desligar apaga o arquivo e a chave deixa de valer na hora. Nada de fotos, arquivos, backups ou configurações passa pelo CorrerIA.

## Atalho no celular

Para abrir o CronologIA direto da tela inicial do celular (Android), sem passar pelo menu do Home Assistant: em **Mais › Configurações › Opções › Atalho no celular**, toque em **Copiar** embaixo do **Caminho** (algo como `/app/a1b2c3d4_cronologia`). No app do Home Assistant, abra **Configurações › Aplicativo complementar › Gerenciar atalhos** e, em **Atalho fixado**, escolha o tipo **Painel**, cole o caminho e dê um nome. O ícone vai para a tela inicial e abre o app direto. Fora do Home Assistant o cartão não aparece.

## Sensores e automações

Com **Criar sensores** ligado (em **Mais › Configurações › Integrações › Sensores no Home Assistant**; vem desligado, e desligar tira os sensores), o app cria no Home Assistant:

- `sensor.cronologia_remedios_hoje`: quantas doses faltam hoje, com `tomados`, `pulados`, `total`, `atrasados`, `proximo` e `pendentes`;
- `binary_sensor.cronologia_remedio_atrasado`: ligado quando alguma dose passou do tempo (classe "problema");
- `sensor.cronologia_rotinas_pendentes`: quantas rotinas da casa faltam hoje, com `feitas`, `total`, quantas faltam de `manha`, `tarde` e `noite`, e `pendentes`;
- `sensor.cronologia_manutencoes_vencidas`: quantas manutenções venceram, com `vencidas` e `proximas`;
- `sensor.cronologia_proximo`: quando começa o próximo compromisso com horário dos calendários que aparecem (nos próximos 2 dias; os de dia inteiro, os remédios, que têm o sensor deles, e os já marcados como feitos ficam de fora), com `titulo`, `fim`, `local`, `calendario`, `minutos` (quanto falta) e `agora` (o que está acontecendo); sem nada pela frente, fica desconhecido;
- `binary_sensor.cronologia_ferias`: ligado no modo férias, com `de` e `ate` (as férias marcadas, mesmo antes de começar);
- `sensor.cronologia_placar` (com o placar ligado): quem está na frente, com `pontos` de cada um, `premio`, `periodo` e `termina`;
- `sensor.cronologia_ia_hoje`: as chamadas de IA de hoje, com erros, cota e tokens estimados (veja **Uso da IA**).

Exemplos de automação:

```yaml
# meia hora antes do próximo compromisso, um aviso no celular
triggers:
  - trigger: time
    at:
      entity_id: sensor.cronologia_proximo
      offset: "-00:30:00"
actions:
  - action: notify.mobile_app_celular_da_ana
    data:
      title: "{{ state_attr('sensor.cronologia_proximo', 'titulo') }}"
      message: "Começa em 30 minutos{{ ' em ' ~ state_attr('sensor.cronologia_proximo', 'local') if state_attr('sensor.cronologia_proximo', 'local') }}."
```

```yaml
# de férias: a casa em modo ausente
triggers:
  - trigger: state
    entity_id: binary_sensor.cronologia_ferias
    to: "on"
actions:
  - action: alarm_control_panel.alarm_arm_away
    target:
      entity_id: alarm_control_panel.casa
```

```yaml
# às 20h, se ainda falta rotina, a Alexa lembra
triggers:
  - trigger: time
    at: "20:00:00"
conditions:
  - condition: numeric_state
    entity_id: sensor.cronologia_rotinas_pendentes
    above: 0
actions:
  - action: notify.alexa_media_sala
    data:
      message: "Ainda faltam {{ states('sensor.cronologia_rotinas_pendentes') }} rotinas hoje."
```

Os eventos abaixo funcionam com os sensores ligados ou não.

Para marcar algo como feito de fora do app (uma automação, uma **etiqueta NFC** na geladeira), dispare o evento `cronologia_feito`:

```yaml
action: event.fire
data:
  event_type: cronologia_feito
  event_data:
    nome: Trocar o filtro de água
```

Uma manutenção com esse nome fica feita (e vai para a próxima data); uma rotina ou um remédio de hoje com esse nome fica marcado. Com `quem: Ana`, os pontos vão para ela (e, se houver dois itens com o mesmo nome, vale o dela). Uma etiqueta NFC para cada pessoa resolve.

Para marcar um **demérito** de fora do app (uma rotina da Alexa, uma etiqueta NFC no quarto), dispare `cronologia_demerito` com o nome do demérito e de quem foi:

```yaml
action: event.fire
data:
  event_type: cronologia_demerito
  event_data:
    nome: Toalha molhada na cama
    quem: Beto
```

## Outlook, Google e Alexa

- **Outlook**: pelo **MS365 Calendar** (HACS), que cria calendários normais no Home Assistant e, com a opção de editar, deixa criar e mudar eventos por aqui. Precisa de um registro de app no Microsoft Entra (Azure), gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra. A outra forma é publicar o calendário no Outlook na web (Configurações › Calendário › Calendários compartilhados) e adicionar o link ICS como **Calendário remoto**: só leitura, atualizado uma vez por dia.
- **Google Agenda**: integração oficial do Home Assistant, atualizada a cada 15 minutos.
- **Alexa**: a Alexa grava eventos na agenda vinculada no app dela (Google, Outlook ou Apple). Se essa mesma agenda estiver no Home Assistant, o que você pedir por voz aparece aqui depois da próxima atualização do HA.

## Eventos de mensagens e fotos

No botão **Adicionar**:

- **Colar mensagem**: cole o convite, a mensagem do WhatsApp ou o e-mail ("consulta com a Dra. Paula quinta às 15h"). A IA encontra datas, horários e locais.
- **Escolher fotos**: prints, convites, cartazes. No app Android do Home Assistant é uma foto por vez (limitação da versão atual do app); use **Mais fotos** na revisão para juntar outras.
- **Digitalizar com IA**: abre a câmera dentro do app para fotografar um cartão de consulta ou um convite, com lanterna e várias fotos seguidas.
- **Arquivo .ics**: convite de e-mail ou exportação de outra agenda (também em **Mais › Configurações › Dados**).

Você revisa título, data e horário de cada evento e escolhe o calendário antes de adicionar.

### IA do Home Assistant

**Usar IA** (em **Mais › Configurações › Integrações › IA do Home Assistant**) liga ou desliga tudo o que usa IA. Desligada, somem do **Adicionar** o **Colar mensagem**, o **Escolher fotos** e o **Digitalizar com IA**, e o app não chama a IA. O **arquivo .ics** continua em **Mais › Configurações › Dados**. Começa ligada.

**Uso da IA** (logo abaixo, em Mais › Configurações › Integrações): cada mensagem ou foto lida é uma chamada para a IA do Home Assistant. Como o Home Assistant não informa tokens nem custo, o CronologIA conta as chamadas e estima os tokens pelo tamanho do texto (uns 4 caracteres por token). Mostra hoje, os últimos 7 dias e o mês, um gráfico por dia (toque numa barra para ver o dia), os tipos de chamada e as últimas chamadas, com o link para o consumo exato no painel do provedor (Google, OpenAI ou Anthropic). O sensor `sensor.cronologia_ia_hoje` traz as chamadas de hoje, com erros, cota e tokens estimados, para um painel ou uma automação. Os números ficam em `/data/uso_ia.json` (120 dias).

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
3. No CronologIA, abra **Mais › Configurações › Integrações › IA do Home Assistant** e escolha essa IA. "Padrão do Home Assistant" usa a IA preferida definida em **Configurações > Sistema > Geral**. Toque em **Verificar de novo** para conferir se ela está pronta.

Na hora da leitura, o app copia a foto por alguns segundos para `media/cronologia/ia-temp`, chama a IA pelo Home Assistant e apaga a cópia em seguida. A IA recebe a data e o fuso de hoje para entender "amanhã" ou "quinta".

Sem IA configurada, todo o resto funciona normalmente, inclusive importar arquivos .ics.

## Dados

Em **Mais › Configurações › Dados**, como nos outros apps:

- **Exportar**: **Tudo (ZIP)**, com os dados do app (`cronologia.json`), os eventos de cada calendário em .ics (do último ano aos próximos 13 meses), `eventos.csv` e `pontos.csv` para o Excel; **Eventos (CSV)**; **Dados (JSON)**; e **Agenda (.ics)**, escolhendo os calendários e o período.
- **Backup na pasta share**: cria o mesmo ZIP em `share/cronologia`, que você acessa pela rede do Home Assistant, com **Restaurar** em cada um.
- **Importar**: **Escolher arquivo** traz os dados do app de um .zip ou .json do CronologIA (nome e cor das agendas, preferências, pessoas e avisos, placar e marcações). Os eventos não mudam: para trazê-los, **Escolher .ics**, com o .ics do calendário que está no ZIP (ou um convite, outra agenda).
- **Versões anteriores**: o app guarda sozinho uma cópia dos dados a cada 10 minutos de uso e antes de cada importação, restauração ou começo do zero, e mantém só as 3 mais recentes.
- **Onde ficam os dados**: os eventos nos calendários; os ajustes do app em `/data/cronologia.json` (veja abaixo).
- **Começar do zero**: **Apagar tudo** (depois de confirmar) apaga as marcações de **Tomei, Paguei e Feito** e o placar (pontos, prêmios, histórico e extrato). Os eventos, os calendários, as pessoas, os deméritos e as preferências continuam, e uma cópia fica em **Versões anteriores**.

Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda o nome, a cor e a visibilidade de cada calendário, as preferências (com as pessoas e pets e quem recebe os avisos de cada um), as marcações de **Tomei, Paguei e Feito** dos últimos 120 dias, os avisos já enviados e o placar (pontos do último ano, prêmios e histórico), em `/data/cronologia.json`, que entra no backup do Home Assistant. O histórico das manutenções fica no próprio evento. O tema (Sistema, Claro ou Escuro) e o modo do calendário (mês, semana…) são escolhidos por aparelho.

## Segurança

Da tela para o Home Assistant, o app só repassa comandos de calendário (`calendar.*`): ler eventos, criar, editar e apagar. Por conta própria, o servidor do app faz só isto: lê as pessoas (`person.*`), os celulares (`notify.mobile_app_*`) e as listas de tarefas (`todo.*`), marca uma tarefa como feita ou não quando você toca em Concluir, cria, atualiza e tira as tarefas das manutenções e rotinas na lista escolhida em **Levar para o ResolvIA** (só quando ligado, e só nessa lista), apaga da lista as tarefas que você trouxer em **Trazer uma lista** (avisando o ResolvIA pelo evento `resolvia_esquecer`), envia os avisos de remédio, publica os sensores acima (só com **Criar sensores** ligado) e escuta os eventos `mobile_app_notification_action` (botões dos avisos), `cronologia_feito`, `cronologia_demerito` e `cronologia_pontos` (do ResolvIA). Ele não lê nem controla nenhuma outra entidade da casa. Com o **CorrerIA** ligado, o app responde também na rede interna dos apps (`/api/integracao/ferramentas`), só com a chave de `share/cronologia/correria.json`, e faz por ali só o que a tela faz.
