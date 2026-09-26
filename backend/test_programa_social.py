import pytest
from programa_social import ProgramaSocial

class TestProgramaSocial:
    
    def setup_method(self):
        # setup: cria os objetos uma única vez antes de cada teste rodar
        self.programa_seguro = ProgramaSocial("Bolsa Família", True, "https://gov.br/bolsafamilia")
        self.programa_inseguro = ProgramaSocial("Auxílio Gás", False, "http://siteinseguro.com")

    # método 1
    def test_possui_link_oficial(self):
        # caso de teste 1: valida se o sistema reconhece um link HTTPS corretamente
        assert self.programa_seguro.possui_link_oficial() is True
        # caso de teste 2: valida se o sistema rejeita um link HTTP comum
        assert self.programa_inseguro.possui_link_oficial() is False

    # método 2
    def test_nome_corresponde_a_busca(self):
        # caso de teste 1: busca por um termo existente em minúsculo (ignora case)
        assert self.programa_seguro.nome_corresponde_a_busca("bolsa") is True 
        # caso de teste 2: busca por um termo que não faz parte do nome do programa
        assert self.programa_seguro.nome_corresponde_a_busca("renda") is False

    # método 3
    def test_possui_cadastro_unico(self):
        # caso de teste 1: programa que exige Cadastro Único
        assert self.programa_seguro.possui_cadastro_unico() is True
        # caso de teste 2: programa que não exige Cadastro Único
        assert self.programa_inseguro.possui_cadastro_unico() is False

    # método 4
    def test_criacao_do_programa(self):
        # caso de teste 1: o nome informado no construtor é armazenado corretamente
        assert self.programa_seguro.nome == "Bolsa Família"
        # caso de teste 2: o link informado no construtor é armazenado corretamente
        assert self.programa_inseguro.link_oficial == "http://siteinseguro.com"

    # método 5
    def test_busca_com_maiusculas_e_termo_parcial(self):
        # caso de teste 1: busca com letras maiúsculas encontra o programa
        assert self.programa_inseguro.nome_corresponde_a_busca("AUXÍLIO") is True
        # caso de teste 2: busca por parte do nome (final da palavra) encontra o programa
        assert self.programa_inseguro.nome_corresponde_a_busca("gás") is True