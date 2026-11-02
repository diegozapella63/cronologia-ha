# CronologIA: instruções para quem continua o projeto (pessoa ou IA)

Leia isto antes de mexer. Vale para o Codex, o Claude ou qualquer outro assistente. O dono do projeto é o Diego
(diegozapella63), escreve em português do Brasil e espera respostas, textos de tela e documentação em português
(nomes de testes e comentários de código podem seguir o inglês dos arquivos vizinhos).

## O que é

App (add-on) do Home Assistant, parte de uma família do mesmo dono com o mesmo visual e as mesmas regras:
ResolvIA (tarefas), CronologIA (agenda), GerencIA (finanças), InventarIA (cômodos e equipamentos), EconomIA (compras).

- `cronologia/rootfs/app/server.js` e `lib/*.js`: o servidor Node.js (sem dependências de npm em produção).
- `frontend/src/*.js`: a interface (Lit). **Nunca edite `cronologia/rootfs/app/www/cronologia.js` à mão**: ele é gerado por
  `cd frontend && npm install && npm run build` (esbuild), que também gera a prévia em `preview/`.
- `cronologia/config.yaml`: o add-on. `cronologia/CHANGELOG.md`: o que mudou em cada versão. `cronologia/DOCS.md`: o manual
  (aba Documentação do Home Assistant). `README.md`: estrutura e como desenvolver.
- `dev/fake-ha.mjs`: um Home Assistant falso (WebSocket e REST) para desenvolver e testar sem o HA.
- `tests/`: unitários e integração (`node:test`) e `tests/e2e/` visuais (Playwright em Python). Veja `tests/README.md`.

## Rodar e testar

```bash
npm test                 # unitários e integração (Node 22, sem instalar nada)
npm run test:coverage    # quanto do código os testes percorrem
tests/e2e/run.sh         # visuais (python3, pip install playwright, python3 -m playwright install chromium)
```

Os visuais esperam os outros apps da família ao lado deste repositório (`../resolvia-ha`, `../cronologia-ha`,
`../gerencia-ha`, `../inventario-ha`) ou nas variáveis `E2E_*`; o teste que precisa de um app ausente é pulado.
Para abrir o app no navegador sem o Home Assistant, siga a seção Desenvolvimento do `README.md` (`CRONOLOGIA_DEV=1`, `TZ=America/Sao_Paulo`).

Os eventos ficam nos calendários do próprio Home Assistant; os modelos (remédio, conta, rotina, manutenção) vão
escritos na descrição do evento (`#remédio`…), para aparecerem em qualquer agenda. O placar e os ajustes ficam em `/data`.

## Lançar uma versão (sempre que algo muda para quem usa)

1. Versão nova em `cronologia/config.yaml` (`version`) e na constante `VERSION` de `cronologia/rootfs/app/server.js`
   (e a da prévia em `frontend/preview/mock-api.js`).
2. `cronologia/CHANGELOG.md`: entrada nova no alto, em português, dizendo o que muda para quem usa (e o que os testes acharam).
3. `cronologia/DOCS.md` quando muda algo que o usuário vê.
4. `cd frontend && npm run build` (a interface e a prévia), depois `npm test` e os visuais, todos passando.
5. Commit com mensagem em português começando pelo nome e a versão (ex.: "CronologIA x.y.z: …") e push no `main`.

## Regras que não mudam

- **Dados pessoais só dentro do Home Assistant** (`/data`, `share/{app}`). O GitHub tem só o código. Nunca mandar o
  e-mail do dono (ou de ninguém) para serviço externo, cabeçalho ou URL.
- **Segurança**: o app só aceita os comandos do que ele cuida e recusa o resto (há testes de segurança na integração e
  nos visuais). Nada de ler ou controlar outras entidades da casa.
- **IA só pelo Home Assistant** (`ai_task.generate_data`), sem chave de API própria; tudo que usa IA pode ser desligado
  (Usar IA) e conta no Uso da IA.
- **Integrações da família** (ResolvIA, CronologIA, GerencIA, InventarIA) vêm desligadas e se falam pela pasta `share`
  e pela rede interna dos apps, com a chave que cada um grava lá. Mudou o contrato de um arquivo de integração? Os outros
  apps leem esse arquivo: mantenha os campos antigos e teste os dois lados.
- **Toda mudança de comportamento vem com teste**; bug corrigido ganha o teste que o pegaria. Os visuais usam
  `check(cond, texto)` e falham com qualquer linha FAIL.
- Cada calendário só mostra os botões que permite (local, Google, Outlook/MS365, CalDAV, remoto, feriados): veja a
  tabela "Criar, editar e apagar" no `DOCS.md`.
- Horários e "dia" sempre no fuso do Home Assistant (os testes rodam com `TZ=America/Sao_Paulo`).

## Jeito da interface

- Textos em português claro e curto, sem jargão; botões com verbos.
- Mesmo visual dos outros apps da família (Barlow e Barlow Condensed, cores por tokens, tema claro e escuro, abas em
  Mais). Celular primeiro (412 px); a partir de 1000 px, a barra lateral.
- Sem erros no console: os visuais conferem.
