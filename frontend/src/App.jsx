import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpg";
import {
  Arara,
  AraraAzul,
  Borboleta,
  Capivara,
  Jabuti,
  LoboGuara,
  Onca,
  Preguica,
  Sagui,
  Tamandua,
  Tatu,
} from "./Fauna.jsx";

const API_URL = import.meta.env.VITE_API_URL || "";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [favoritos, setFavoritos] = useState([]);
  const [comparador, setComparador] = useState([]);
  const [pagina, setPagina] = useState("catalogo");
  const [detalhes, setDetalhes] = useState(null);

  const [beneficios, setBeneficios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const carregarBeneficios = () => {
    setCarregando(true);
    setErro(null);

    fetch(`${API_URL}/beneficios/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar benefícios");
        }

        return response.json();
      })
      .then((data) => {
        setBeneficios(data);
        setCarregando(false);
      })
      .catch((error) => {
        setErro(error.message);
        setCarregando(false);
      });
  };

  useEffect(() => {
    carregarBeneficios();
  }, []);

  const categorias = [
    "Todas",
    ...new Set(beneficios.map((item) => item.categoria)),
  ];

  const normalizarTexto = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-BR")
      .trim();

  const alternarFavorito = (id) => {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id],
    );
  };

  const alternarComparador = (id) => {
    setComparador((atual) =>
      atual.includes(id)
        ? atual.filter((item) => item !== id)
        : atual.length < 3
          ? [...atual, id]
          : atual,
    );
  };

  const filtrados = beneficios.filter((item) => {
    const termo = normalizarTexto(pesquisa);

    const texto = normalizarTexto(
      [item.nome, item.descricao, item.categoria, item.publico].join(" "),
    );

    const correspondePesquisa = texto.includes(termo);

    const correspondeCategoria =
      categoria === "Todas" || item.categoria === categoria;

    return correspondePesquisa && correspondeCategoria;
  });

  const lista =
    pagina === "favoritos"
      ? filtrados.filter((item) => favoritos.includes(item.id))
      : filtrados;

  const selecionados = beneficios.filter((item) =>
    comparador.includes(item.id),
  );

  if (carregando) {
    return (
      <div className="app">
        <header className="topo">
          <div className="topo-conteudo">
            <div className="marca">
              <img src={logo} alt="Guia Social" className="marca-logo" />
            </div>
          </div>
        </header>
        <main className="estado-container">
          <div className="painel-status">
            <Capivara className="painel-status-animal" />
            <h2>Carregando benefícios...</h2>
            <p>Conectando ao servidor da API em <code>{API_URL || "/beneficios/"}</code></p>
          </div>
        </main>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="app">
        <header className="topo">
          <div className="topo-conteudo">
            <div className="marca">
              <img src={logo} alt="Guia Social" className="marca-logo" />
            </div>
          </div>
        </header>
        <main className="estado-container">
          <div className="painel-status">
            <Preguica className="painel-status-animal" />
            <h2>Não foi possível carregar os dados</h2>
            <p>
              O frontend tentou consultar a API em <strong>{API_URL || "/beneficios/"}</strong>, mas ela não respondeu.
            </p>
            <div className="dica-backend">
              <strong>Como iniciar a API:</strong><br />
              1. Abra um terminal na pasta raiz do projeto<br />
              2. Execute: <code>uvicorn backend.main:app --reload</code>
            </div>
            <button className="botao-acao" onClick={carregarBeneficios}>
              Tentar novamente
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="topo">
        <div className="topo-conteudo">
          <button className="marca" onClick={() => setPagina("catalogo")}>
            <img src={logo} alt="Guia Social" className="marca-logo" />
          </button>

          <nav className="navegacao" aria-label="Menu principal">
            <button
              className={pagina === "catalogo" ? "ativo" : ""}
              onClick={() => setPagina("catalogo")}
            >
              Catálogo
            </button>

            <button
              className={pagina === "favoritos" ? "ativo" : ""}
              onClick={() => setPagina("favoritos")}
            >
              Favoritos ({favoritos.length})
            </button>

            <button
              className={pagina === "comparador" ? "ativo" : ""}
              onClick={() => setPagina("comparador")}
            >
              Comparador ({comparador.length})
            </button>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <Preguica className="fauna-hero fauna-preguica" />
          <Tatu className="fauna-hero fauna-tatu" />
          <Borboleta className="fauna-hero fauna-borboleta-1" />
          <Borboleta className="fauna-hero fauna-borboleta-2" />
          <Arara className="fauna-hero fauna-arara" />

          <span className="etiqueta">Catálogo de benefícios federais TESTEEEE</span>

          <h1>Consulte Programas e Benefícios Sociais</h1>

          <p>
            Conheça os programas disponíveis, quem pode participar, como
            solicitar e onde encontrar informações oficiais.
          </p>

          <div className="busca">
            <Sagui className="busca-animal" />
            <input
              type="search"
              placeholder="Pesquisar benefício, categoria ou público..."
              aria-label="Pesquisar benefícios"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />

            <button
              onClick={() => {
                setPagina("catalogo");

                document.getElementById("resultados")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Buscar
            </button>
          </div>
        </section>

        {pagina !== "comparador" ? (
          <>
            <section className="filtros" aria-label="Categorias">
              <h2>Filtrar por categoria</h2>

              <div className="categorias">
                {categorias.map((item) => (
                  <button
                    key={item}
                    className={categoria === item ? "selecionado" : ""}
                    onClick={() => setCategoria(item)}
                  >
                    {item === "Todas" ? `Todas (${beneficios.length})` : item}
                  </button>
                ))}
              </div>
            </section>

            <section id="resultados">
              <div className="secao-titulo">
                <h2>
                  {pagina === "favoritos"
                    ? "Meus favoritos"
                    : "Benefícios disponíveis"}
                </h2>

                <span>{lista.length} resultado(s)</span>
              </div>

              <div className="grade">
                {lista.map((item) => (
                  <article className="cartao" key={item.id}>
                    <div className="cartao-topo">
                      <span className="categoria">{item.categoria}</span>

                      <button
                        className="botao-salvar"
                        onClick={() => alternarFavorito(item.id)}
                        aria-pressed={favoritos.includes(item.id)}
                      >
                        {favoritos.includes(item.id) ? "♥ Salvo" : "♡ Salvar"}
                      </button>
                    </div>

                    <h3>{item.nome}</h3>

                    <p>{item.descricao}</p>

                    <div className="informacoes">
                      <p>
                        <strong>Cadastro:</strong> {item.cadastro}
                      </p>

                      <p>
                        <strong>Público:</strong> {item.publico}
                      </p>
                    </div>

                    <div className="acoes">
                      <button
                        className="primario"
                        onClick={() => setDetalhes(item)}
                      >
                        Ver detalhes
                      </button>

                      <button
                        className="secundario"
                        onClick={() => alternarComparador(item.id)}
                      >
                        {comparador.includes(item.id)
                          ? "Remover"
                          : "+ Comparar"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {lista.length === 0 && (
                <div className="vazio">
                  <Tamandua className="vazio-animal" />
                  Nenhum benefício encontrado nesta seleção.
                </div>
              )}
            </section>
          </>
        ) : (
          <section className="comparacao">
            <h2>Comparador de benefícios</h2>

            <p>Compare até três programas sociais selecionados.</p>

            {selecionados.length === 0 ? (
              <div className="vazio">
                <Tatu className="vazio-animal" />
                Nenhum benefício adicionado.
              </div>
            ) : (
              <div className="tabela-rolagem">
                <table>
                  <thead>
                    <tr>
                      <th>Informação</th>

                      {selecionados.map((item) => (
                        <th key={item.id}>{item.nome}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["Categoria", "categoria"],
                      ["Descrição", "descricao"],
                      ["Público-alvo", "publico"],
                      ["Cadastro", "cadastro"],
                      ["Requisitos", "requisitos"],
                      ["Como solicitar", "comoSolicitar"],
                    ].map(([titulo, campo]) => (
                      <tr key={campo}>
                        <th>{titulo}</th>

                        {selecionados.map((item) => (
                          <td key={item.id}>{item[campo]}</td>
                        ))}
                      </tr>
                    ))}

                    <tr>
                      <th>Informações oficiais</th>

                      {selecionados.map((item) => (
                        <td key={item.id}>
                          <a
                            href={item.canal}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Consultar programa ↗
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </main>

      <footer className="rodape">
        <div className="rodape-fauna">
          <Tamandua />
          <LoboGuara />
          <Onca />
          <AraraAzul />
          <Capivara />
          <Jabuti />
        </div>
      </footer>

      {detalhes && (
        <div className="modal-fundo" onClick={() => setDetalhes(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-detalhes"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-cabecalho">
              <h2 id="titulo-detalhes">{detalhes.nome}</h2>

              <button
                onClick={() => setDetalhes(null)}
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>

            <p>{detalhes.descricao}</p>

            <p>
              <strong>Categoria:</strong> {detalhes.categoria}
            </p>

            <p>
              <strong>Público-alvo:</strong> {detalhes.publico}
            </p>

            <p>
              <strong>Cadastro:</strong> {detalhes.cadastro}
            </p>

            <p>
              <strong>Requisitos:</strong> {detalhes.requisitos}
            </p>

            <p>
              <strong>Documentos:</strong> {detalhes.documentos}
            </p>

            <p>
              <strong>Como acessar:</strong> {detalhes.comoSolicitar}
            </p>

            <a
              className="link-oficial"
              href={detalhes.canal}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar página oficial do benefício ↗
            </a>

            {detalhes.canalAdicional && (
              <p>
                <a
                  href={detalhes.canalAdicional}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {detalhes.nomeCanalAdicional} ↗
                </a>
              </p>
            )}

            <p>
              <small>
                As regras dos programas podem mudar. Confirme os requisitos no
                site oficial.
              </small>
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
