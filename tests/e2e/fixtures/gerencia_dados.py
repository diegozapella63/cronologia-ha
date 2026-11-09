import json, sys
from datetime import date
h = date.today()
ym = h.isoformat()[:7]
def ymk(k):
    a, m = h.year, h.month + k
    a += (m - 1) // 12; m = (m - 1) % 12 + 1
    return f"{a:04d}-{m:02d}"
d = {
 "schema": 1, "rev": 3, "exemplo": False,
 "bancos": [{"id": "b-nu", "nome": "Nubank", "contas": [{"id": "k-nu-davi", "pessoa": "Davi", "cartao": True, "fechamento": 3, "vencimento": 10}]},
            {"id": "b-itau", "nome": "Itaú", "contas": [{"id": "k-itau", "pessoa": "Davi", "cartao": False, "fechamento": 1, "vencimento": 10}]}],
 "investimentos": [], "historico": [],
 "categorias": [{"id": "c-casa", "nome": "Casa", "tipo": "despesa", "cor": "#f00"}, {"id": "c-sal", "nome": "Salário", "tipo": "receita", "cor": "#0f0"}],
 "recorrencias": [
   {"id": "r-aluguel", "tipo": "despesa", "descricao": "Aluguel", "valor": 2100, "categoria": "c-casa", "conta": "k-itau", "cartao": False, "dia": 5, "inicio": ymk(-3), "fim": None},
   {"id": "r-luz", "tipo": "despesa", "descricao": "Conta de luz", "valor": 230, "categoria": "c-casa", "conta": "k-itau", "cartao": False, "dia": 28, "inicio": ymk(-3), "fim": None},
   {"id": "r-netflix", "tipo": "despesa", "descricao": "Netflix", "valor": 59.9, "categoria": "", "conta": "k-nu-davi", "cartao": True, "dia": 12, "inicio": ymk(-3), "fim": None},
   {"id": "r-sal", "tipo": "receita", "descricao": "Salário", "valor": 9000, "categoria": "c-sal", "conta": "k-itau", "cartao": False, "dia": 5, "inicio": ymk(-3), "fim": None},
   {"id": "r-aporte", "tipo": "despesa", "descricao": "Aporte nos investimentos", "valor": 500, "categoria": "", "conta": "k-itau", "cartao": False, "dia": 6, "inicio": ymk(-3), "fim": None, "aporte": True},
 ],
 "lancamentos": [
   {"id": "l-mercado", "tipo": "despesa", "descricao": "Mercado", "valor": 412.5, "categoria": "c-casa", "conta": "k-nu-davi", "cartao": True, "data": f"{ym}-02", "pago": False},
   {"id": "l-iptu", "tipo": "despesa", "descricao": "IPTU", "valor": 380, "categoria": "c-casa", "conta": "k-itau", "cartao": False, "data": f"{ymk(-1)}-20", "pago": False},
   {"id": "l-alug-pass", "tipo": "despesa", "descricao": "Aluguel", "valor": 2100, "categoria": "c-casa", "conta": "k-itau", "cartao": False, "data": f"{ymk(-1)}-05", "pago": True, "recorrencia": "r-aluguel", "competencia": ymk(-1)},
 ],
 "indices": {}, "ajustes": {},
}
json.dump(d, open(sys.argv[1], "w"), ensure_ascii=False, indent=1)
