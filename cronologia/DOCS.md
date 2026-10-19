# CronologIA

Uma agenda para os **calendários nativos** do Home Assistant (`calendar.*`): calendário local, Google Agenda, Outlook, CalDAV, calendários remotos (.ics), feriados… Tudo ao vivo e com um visual bem mais caprichado que a tela padrão.

Nada é copiado: o CronologIA mostra e edita os mesmos calendários que o HA já tem. Se um evento muda no Google ou no Outlook, ele muda aqui assim que o Home Assistant fica sabendo.

## Primeiros passos

1. Depois de instalar, toque em **Iniciar**.
2. Ative **Mostrar na barra lateral** (e, se quiser, **Watchdog**).
3. Abra o **CronologIA** pela barra lateral.

Sem nenhum calendário no Home Assistant, a tela mostra como adicionar um. O mais simples é o **Calendário local**, que fica no próprio HA e aceita tudo.

## Telas

- **Agora**: o evento que está acontecendo (com quanto falta para terminar) ou o próximo, os eventos do dia todo, a lista de hoje com a linha de "agora" e os próximos 7 dias.
- **Calendário**: **Mês** (com pontinhos na cor de cada calendário), **Semana** e **Dia** (com as horas do dia; toque num horário vazio para criar um evento ali) e **Lista** (próximos 30 dias, com busca do último ano ao próximo). Arraste o mês para os lados para trocar.
- **Novo**: cria um evento, ou traz eventos de uma mensagem, foto ou arquivo .ics.
- **Agendas**: os calendários agrupados por integração, com nome, cor e **mostrar/ocultar**; e atalhos para adicionar calendários.
- **Mais**: tema, cor do app, início da semana (domingo ou segunda), calendário padrão para eventos novos, leitura por IA e exportar/importar .ics.

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
3. No CronologIA, abra **Mais > Leitura por IA** e escolha essa IA. "Padrão do Home Assistant" usa a IA preferida definida em **Configurações > Sistema > Geral**. Toque em **Verificar de novo** para conferir se ela está pronta.

Na hora da leitura, o app copia a foto por alguns segundos para `media/cronologia/ia-temp`, chama a IA pelo Home Assistant e apaga a cópia em seguida. A IA recebe a data e o fuso de hoje para entender "amanhã" ou "quinta".

Sem IA configurada, todo o resto funciona normalmente, inclusive importar arquivos .ics.

## Dados

- Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…).
- O app guarda só o nome, a cor e a visibilidade de cada calendário e as preferências, em `/data/cronologia.json`, que entra no backup do Home Assistant.
- **Mais > Dados > Exportar agenda (.ics)**: escolha os calendários e o período (próximos 3 ou 12 meses, ou do último ano ao próximo). Cada repetição vira um evento no arquivo, que abre no Google Agenda, no Outlook e no iPhone.
- O tema (automático, claro ou escuro) e o modo do calendário (mês, semana…) são escolhidos por aparelho.

## Segurança

O app só repassa ao Home Assistant comandos de calendário (`calendar.*`): ler eventos, criar, editar e apagar. Ele não lê nem controla nenhuma outra entidade da casa.
