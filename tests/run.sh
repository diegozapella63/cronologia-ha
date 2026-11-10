#!/usr/bin/env bash
# Os testes sem navegador: unitários, telas montadas e integração (node:test, só o Node 22, nada a instalar).
#
#   tests/run.sh               todos (o mesmo que npm test)
#   tests/run.sh unit          só os unitários (tests/*.test.mjs)
#   tests/run.sh ui            só as telas montadas (tests/ui)
#   tests/run.sh integration   só a integração (tests/integration)
#   tests/run.sh coverage      com a cobertura do código (o mínimo do CI)
#
# Os visuais (Playwright) ficam em tests/e2e/run.sh.
set -eu
cd "$(dirname "$0")/.."
case "${1:-all}" in
  all) exec npm test ;;
  unit) exec npm run test:unit ;;
  ui) exec npm run test:ui ;;
  integration) exec npm run test:integration ;;
  coverage) exec npm run test:coverage ;;
  *) echo "uso: tests/run.sh [unit|ui|integration|coverage]" >&2; exit 2 ;;
esac
