"""Testes unitários das funções de consulta e normalização."""

import pytest

from backend.services.beneficio_service import (
    buscar_beneficio_por_id,
    buscar_beneficios_por_nome,
    listar_beneficios,
    normalizar_texto,
)


@pytest.mark.parametrize(
    ("entrada", "esperado"),
    [
        ("AÇÃO", "acao"),
        ("Pé-de-Meia", "pe-de-meia"),
        ("FARMÁCIA POPULAR", "farmacia popular"),
        ("Bolsa Família", "bolsa familia"),
        ("", ""),
    ],
)
def test_normalizar_texto(entrada, esperado):
    assert normalizar_texto(entrada) == esperado


def test_listagem_contém_programas():
    programas = listar_beneficios()
    assert isinstance(programas, list)
    assert programas
    assert any(item["nome"] == "Bolsa Família" for item in programas)


def test_buscar_beneficio_por_id_valido():
    beneficio = buscar_beneficio_por_id(1)
    assert beneficio is not None
    assert beneficio["nome"] == "Bolsa Família"


def test_buscar_beneficio_por_id_inexistente():
    assert buscar_beneficio_por_id(9999) is None


def test_busca_parcial_e_com_acento():
    resultados = buscar_beneficios_por_nome("farmacia")
    assert [item["nome"] for item in resultados] == ["Farmácia Popular"]


def test_busca_sem_resultado():
    assert buscar_beneficios_por_nome("nao-existe-123") == []
