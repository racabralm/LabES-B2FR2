# Guia Social

Aplicação web para centralizar informações sobre programas e benefícios sociais, facilitando a consulta de critérios, documentos necessários, formas de solicitação e canais oficiais para pessoas em situação de vulnerabilidade social.

Este projeto foi desenvolvido para a disciplina Laboratório de Engenharia de Software (2026.2), da Universidade Presbiteriana Mackenzie, sob orientação do Prof. Luiz Carlos Machi Lozano.

## Informações do Grupo

| Integrante | RA |
| :--- | :--- |
| Bruna Amorim Maia | 10431883 |
| Bruna Soncini | 10428267 |
| Fabyani Tiva Yan | 10431835 |
| Rafael Araujo Cabral Moreira | 10441919 |
| Rute Willemann | 10436781 |

**Turma:** `06N`

---

## Problema e Justificativa

- **Problema/oportunidade percebida:** Informações sobre benefícios e programas sociais estão distribuídas em diferentes páginas oficiais, muitas vezes com linguagem extensa ou burocrática.
- **Razão/justificativa da demanda:** A dificuldade de localizar e compreender essas informações pode impedir que pessoas em situação de vulnerabilidade conheçam serviços que podem ser relevantes para elas.
- **Descrição sucinta do produto:** O Guia Social será uma aplicação web responsiva para consultar, pesquisar e comparar programas sociais, apresentando informações como público-alvo, critérios de elegibilidade, documentos necessários, forma de solicitação e link oficial.
- **Clientes, usuários e envolvidos:** Adultos e idosos de baixa renda, familiares, responsáveis, profissionais de apoio social e a equipe de desenvolvimento.
- **Critérios de qualidade principais:** Usabilidade, acessibilidade, confiabilidade das informações, desempenho, manutenibilidade e compatibilidade com dispositivos móveis.

---

## Estrutura do Repositório

```text
guia-social/
│
├── backend/
│   ├── programa_social.py       → Classe ProgramaSocial
│   └── test_programa_social.py  → Testes automatizados da classe
│
├── docs/                        → Documentação do projeto
│
├── .github/
│   └── workflows/               → Pipeline de CI/CD com GitHub Actions
│
└── README.md
```

- **`backend/`**: contém as classes e regras de negócio do sistema.
- **`docs/`**: contém a documentação, requisitos, wireframes, diagramas e demais artefatos.
- **`.github/workflows/`**: contém os arquivos da esteira de integração contínua, responsável por executar os testes automaticamente.

---

## Tecnologias e Requisitos Técnicos

| Item | Escolha |
| :--- | :--- |
| Linguagem | Python |
| Frontend | React, HTML, CSS e JavaScript |
| Backend | FastAPI |
| Banco de dados | PostgreSQL |
| API | API REST própria desenvolvida com FastAPI |
| Cloud | AWS (EC2 e RDS) |
| Containerização | Docker |
| CI/CD | GitHub Actions |
| Controle de versão | Git e GitHub |
| Testes | Pytest |

---

## Funcionalidades planejadas

- [ ] Visualizar o catálogo de programas e benefícios sociais.
- [ ] Pesquisar programas por nome.
- [ ] Filtrar programas por categoria.
- [ ] Consultar detalhes, critérios e documentos necessários.
- [ ] Acessar o canal oficial de cada programa.
- [ ] Comparar programas sociais.
- [ ] Salvar programas favoritos.

---

## Roadmap de Entregas

- [x] **TG1** — Definição do produto, requisitos, modelagem e arquitetura.
- [ ] **TG2** — Pipeline de Integração Contínua e Entrega Contínua (CI/CD).
- [ ] **TG3** — Implementação da aplicação.
- [ ] **TG4** — Testes e documentação final.

---

## Documentação

A documentação do projeto apresenta a definição da demanda, os requisitos, wireframes, modelagem de domínio, arquitetura e tecnologias utilizadas.
