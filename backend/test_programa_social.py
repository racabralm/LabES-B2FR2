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

      #caso de teste 1: ...

      #caso de teste 2: ...

      
    # método 4

      #caso de teste 1: ...

      #caso de teste 2: ...

      
    # método 5

      #caso de teste 1: ...

      #caso de teste 2: ...
