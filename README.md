# Guia Social

https://guia-social-labes.onrender.com/

Aplicação web para centralizar informações sobre programas e benefícios sociais, facilitando a consulta de critérios,
documentos necessários, formas de solicitação e canais oficiais para pessoas em situação de vulnerabilidade social.

Este projeto foi desenvolvido para a disciplina Laboratório de Engenharia de Software (2026.2), da Universidade
Presbiteriana Mackenzie, sob orientação do Prof. Luiz Carlos Machi Lozano.

## Informações do Grupo

| Integrante                   | RA       |
|:-----------------------------|:---------|
| Bruna Amorim Maia            | 10431883 |
| Bruna Soncini                | 10428267 |
| Fabyani Tiva Yan             | 10431835 |
| Rafael Araujo Cabral Moreira | 10441919 |
| Rute Willemann               | 10436781 |

**Turma:** `06N`

---

## Problema e Justificativa

- **Problema/oportunidade percebida:** Informações sobre benefícios e programas sociais estão distribuídas em diferentes
  páginas oficiais, muitas vezes com linguagem extensa ou burocrática.
- **Razão/justificativa da demanda:** A dificuldade de localizar e compreender essas informações pode impedir que
  pessoas em situação de vulnerabilidade conheçam serviços que podem ser relevantes para elas.
- **Descrição sucinta do produto:** O Guia Social será uma aplicação web responsiva para consultar, pesquisar e comparar
  programas sociais, apresentando informações como público-alvo, critérios de elegibilidade, documentos necessários,
  forma de solicitação e link oficial.
- **Clientes, usuários e envolvidos:** Adultos e idosos de baixa renda, familiares, responsáveis, profissionais de apoio
  social e a equipe de desenvolvimento.
- **Critérios de qualidade principais:** Usabilidade, acessibilidade, confiabilidade das informações, desempenho,
  manutenibilidade e compatibilidade com dispositivos móveis.

---

## Estrutura do Repositório

```text
guia-social/
│
├── backend/
│   ├── __init__.py
│   ├── main.py
│   │
│   ├── data/
│   │   ├── __init__.py
│   │   └── beneficios.py
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   └── programa_social.py
│   │
│   ├── routes/
│   │   ├── __init__.py
│   │   └── beneficios.py
│   │
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── beneficio.py
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   └── beneficio_service.py
│   │
│   └── tests/
│       ├── __init__.py
│       ├── test_programa_social.py
│       └── test_beneficios_api.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── .oxlintrc.json
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── docs/                        → Documentação do projeto
│
├── .github/
│   └── workflows/               → Pipeline de CI/CD com GitHub Actions
│
├── Dockerfile
├── requirements.txt
├── package-lock.json
├── .gitignore
└── README.md
```

- **`backend/main.py`**: ponto de entrada da aplicação FastAPI e configuração de CORS.
- **`backend/data/`**: contém os dados dos benefícios utilizados atualmente pela API.
- **`backend/models/`**: contém as classes de domínio da aplicação.
- **`backend/routes/`**: contém as rotas e endpoints da API.
- **`backend/schemas/`**: contém os modelos de resposta utilizados pelo FastAPI e Pydantic.
- **`backend/services/`**: contém as regras de consulta e lógica da aplicação.
- **`backend/tests/`**: contém os testes automatizados da aplicação.
- **`frontend/`**: contém a interface web desenvolvida em React com Vite.
- **`frontend/src/App.jsx`**: concentra a interface principal e consome os benefícios disponibilizados pela API.
- **`frontend/src/App.css`**: contém os estilos da interface.
- **`docs/`**: contém a documentação, requisitos, wireframes, diagramas e demais artefatos.
- **`.github/workflows/`**: contém os arquivos da esteira de integração contínua, responsável por executar os testes
  automaticamente.

---

## Tecnologias e Requisitos Técnicos

| Item                | Escolha                                   |
|:--------------------|:------------------------------------------|
| Linguagem           | Python e JavaScript                       |
| Frontend            | React, HTML, CSS e JavaScript             |
| Ferramenta frontend | Vite                                      |
| Backend             | FastAPI                                   |
| Banco de dados      | PostgreSQL                                |
| API                 | API REST própria desenvolvida com FastAPI |
| Cloud               | AWS (EC2 e RDS)                           |
| Containerização     | Docker                                    |
| CI/CD               | GitHub Actions                            |
| Controle de versão  | Git e GitHub                              |
| Testes              | Pytest                                    |

---

## API Backend

O backend da aplicação foi desenvolvido com FastAPI.

Atualmente, a API permite:

- listar benefícios sociais;
- consultar um benefício específico pelo ID;
- pesquisar benefícios pelo nome;
- realizar buscas ignorando diferenças entre letras maiúsculas, minúsculas e acentos;
- retornar erro `404` quando um benefício não é encontrado;
- disponibilizar os dados utilizados pelo frontend;
- permitir comunicação com o frontend por meio de CORS;
- acessar a documentação automática da API pelo Swagger.

### Executando o backend

Na raiz do projeto, instale as dependências:

```bash
pip install -r requirements.txt
```

Depois, execute a aplicação:

```bash
uvicorn backend.main:app --reload
```

A API ficará disponível em:

```text
http://127.0.0.1:8000
```

### Documentação da API

O FastAPI disponibiliza uma documentação interativa utilizando Swagger.

Acesse:

```text
http://127.0.0.1:8000/docs
```

### Rotas disponíveis

#### Listar todos os benefícios

```http
GET /beneficios/
```

Retorna todos os benefícios cadastrados atualmente na aplicação.

#### Buscar benefícios por nome

```http
GET /beneficios/?nome=bolsa
```

A busca ignora diferenças entre letras maiúsculas, minúsculas e acentos.

Exemplos:

```text
/beneficios/?nome=inclusao
/beneficios/?nome=INCLUSAO
/beneficios/?nome=inclusão
```

#### Consultar benefício por ID

```http
GET /beneficios/{id}
```

Exemplo:

```http
GET /beneficios/1
```

Caso o benefício informado não exista, a API retorna o status HTTP `404`.

---

## Frontend

O frontend da aplicação foi desenvolvido com React e Vite.

A interface consome os benefícios diretamente da API FastAPI, evitando manter uma segunda cópia dos dados no frontend.

Atualmente, o frontend permite:

- visualizar o catálogo de benefícios sociais;
- pesquisar benefícios por nome, descrição, categoria e público-alvo;
- realizar pesquisas ignorando diferenças entre letras maiúsculas, minúsculas e acentos;
- filtrar benefícios por categoria;
- visualizar os detalhes de cada benefício;
- acessar o canal oficial do programa;
- salvar benefícios como favoritos;
- selecionar até três benefícios para comparação;
- comparar informações como categoria, descrição, público-alvo, cadastro, requisitos e forma de solicitação.

### Executando o frontend

É necessário ter o Node.js e o npm instalados.

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Depois, execute:

```bash
npm run dev
```

O Vite informará o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

Para que os dados sejam carregados corretamente, o backend também deve estar em execução.

### Integração entre frontend e backend

O frontend realiza uma requisição para:

```text
GET http://127.0.0.1:8000/beneficios/
```

O fluxo principal da aplicação é:

```text
FastAPI
   ↓
GET /beneficios/
   ↓
React
   ↓
Catálogo / Pesquisa / Filtros / Favoritos / Comparador / Detalhes
```

---

## Testes Automatizados

Os testes automatizados do backend utilizam Pytest.

Para executar todos os testes:

```bash
pytest
```

Para visualizar mais detalhes durante a execução:

```bash
pytest -v
```

Atualmente, os testes verificam:

- criação e comportamento da classe `ProgramaSocial`;
- funcionamento da API;
- quantidade de benefícios disponíveis;
- consulta de benefício por ID;
- retorno de erro para benefício inexistente;
- pesquisa por nome;
- pesquisa sem acentos;
- pesquisa utilizando letras maiúsculas;
- pesquisa parcial;
- pesquisa com múltiplos resultados;
- pesquisa sem resultados;
- presença dos campos obrigatórios dos benefícios;
- campos adicionais de benefícios que possuem mais de um canal oficial.

---

## Funcionalidades

- [x] Visualizar o catálogo de programas e benefícios sociais.
- [x] Pesquisar programas por nome, descrição, categoria e público-alvo.
- [x] Filtrar programas por categoria.
- [x] Consultar informações detalhadas de um programa social.
- [x] Acessar o canal oficial de cada programa.
- [x] Comparar programas sociais.
- [x] Salvar programas favoritos durante a sessão.
- [x] Integrar frontend e backend por meio da API REST.
- [ ] Persistir favoritos do usuário.
- [ ] Integrar os dados com PostgreSQL.
- [ ] Publicar a aplicação em ambiente de cloud.

---

## Roadmap de Entregas

- [x] **TG1** — Definição do produto, requisitos, modelagem e arquitetura.
- [x] **TG2** — Pipeline de Integração Contínua e Entrega Contínua (CI/CD).
- [ ] **TG3** — Implementação da aplicação.
- [ ] **TG4** — Testes e documentação final.

---

## Documentação

A documentação do projeto apresenta a definição da demanda, os requisitos, wireframes, modelagem de domínio, arquitetura
e tecnologias utilizadas.
