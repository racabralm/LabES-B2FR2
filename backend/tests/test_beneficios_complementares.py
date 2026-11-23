"""Testes adicionais de integração para as rotas do Guia Social."""

import pytest
from fastapi.testclient import TestClient

from backend.main import app

client = TestClient(app)


@pytest.mark.parametrize("beneficio_id", [0, -1, 15, 9999])
def test_id_fora_do_catalogo_retorna_404(beneficio_id):
    response = client.get(f"/beneficios/{beneficio_id}")
    assert response.status_code == 404
    assert response.json() == {"detail": "Benefício não encontrado"}


@pytest.mark.parametrize("beneficio_id", ["abc", "1.5", "--2"])
def test_id_com_formato_invalido_retorna_422(beneficio_id):
    assert client.get(f"/beneficios/{beneficio_id}").status_code == 422


@pytest.mark.parametrize(
    ("termo", "nome_esperado"),
    [
        ("BOLSA", "Bolsa Família"),
        ("pé-de-meia", "Pé-de-Meia"),
        ("pe-de-meia", "Pé-de-Meia"),
        ("FARMACIA", "Farmácia Popular"),
        ("aQuIsIçÃo", "Programa de Aquisição de Alimentos (PAA)"),
    ],
)
def test_busca_ignora_maiusculas_e_acentos(termo, nome_esperado):
    response = client.get("/beneficios/", params={"nome": termo})
    assert response.status_code == 200
    assert nome_esperado in [item["nome"] for item in response.json()]


def test_busca_com_nome_vazio_lista_todos():
    todos = client.get("/beneficios/").json()
    resposta = client.get("/beneficios/", params={"nome": ""})
    assert resposta.status_code == 200
    assert resposta.json() == todos


def test_busca_sem_correspondencia_retorna_lista_vazia():
    response = client.get("/beneficios/", params={"nome": "programa-inexistente-123"})
    assert response.status_code == 200
    assert response.json() == []


def test_todos_os_ids_sao_unicos_e_consultaveis():
    response = client.get("/beneficios/")
    assert response.status_code == 200
    beneficios = response.json()
    ids = [item["id"] for item in beneficios]
    assert len(ids) == len(set(ids))

    for item in beneficios:
        detalhe = client.get(f"/beneficios/{item['id']}")
        assert detalhe.status_code == 200
        assert detalhe.json() == item


def test_campos_textuais_nao_estao_vazios():
    campos = (
        "nome", "categoria", "descricao", "publico", "cadastro",
        "requisitos", "documentos", "comoSolicitar", "canal",
    )
    response = client.get("/beneficios/")
    assert response.status_code == 200

    for beneficio in response.json():
        for campo in campos:
            assert isinstance(beneficio[campo], str)
            assert beneficio[campo].strip(), f"Campo {campo} vazio no ID {beneficio['id']}"
        assert beneficio["canal"].startswith("https://")


def test_beneficios_sem_canal_adicional_retornam_nulo():
    response = client.get("/beneficios/1")
    assert response.status_code == 200
    assert response.json()["canalAdicional"] is None
    assert response.json()["nomeCanalAdicional"] is None


def test_documentacao_openapi_disponivel():
    response = client.get("/openapi.json")
    assert response.status_code == 200
    assert "/beneficios/" in response.json()["paths"]
    assert "/beneficios/{beneficio_id}" in response.json()["paths"]


def test_cors_permite_frontend_local():
    response = client.options(
        "/beneficios/",
        headers={
            "Origin": "http://localhost:5173",
            "Access-Control-Request-Method": "GET",
        },
    )
    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "http://localhost:5173"
