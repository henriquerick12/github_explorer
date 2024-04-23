import { FormEvent, useEffect, useState } from "react";
import { Container, Form, Repositories, Error } from "./styled";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { FiChevronRight } from "react-icons/fi";
import Logo from "../../assets/logo.svg";

type repoType = {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

const Home: React.FC = () => {
  const [newrepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [repo, setRepo] = useState<repoType[]>(() => {
    const reposGet = localStorage.getItem("@GitHubExplorer:repo");

    if (reposGet) {
      return JSON.parse(reposGet);
    }
    return [];
  });

  async function handleAddRepo(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newrepo) return setInputError("Digite o nome do repositorio");

    try {
      const response = await api.get(`repos/${newrepo}`);
      setIsLoad(true);
      setRepo([...repo, response.data]);
      setNewRepo("");
      setInputError("");
      setIsLoad(false);
    } catch (error) {
      setNewRepo("");
      setInputError("Erro na busca do repositorio");
    }
  }

  useEffect(() => {
    localStorage.setItem("@GitHubExplorer:repo", JSON.stringify(repo));
  }, [repo]);

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <h1>Explore repositorios no Gitbub</h1>

      <Form hasError={!!inputError} onSubmit={handleAddRepo}>
        <input
          value={newrepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o autor/repositorio ..."
        />
        <button>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repo &&
          repo.map((item) => (
            <Link key={item.full_name} to={"/repository"}>
              <img src={item.owner.avatar_url} alt={item.owner.login} />
              <div>
                <strong>{item.full_name}</strong>
                <small>{item.description}</small>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
      </Repositories>
    </Container>
  );
};

export default Home;
