class ProgramaSocial:
    def __init__(self, nome, exige_cadastro_unico, link_oficial):
        self.nome = nome
        self.exige_cadastro_unico = exige_cadastro_unico
        self.link_oficial = link_oficial

    def possui_cadastro_unico(self):
        return self.exige_cadastro_unico

    def possui_link_oficial(self):
        return self.link_oficial.startswith("https://")

    def nome_corresponde_a_busca(self, termo):
        return termo.lower() in self.nome.lower()
