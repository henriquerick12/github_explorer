import { FormEvent, useEffect, useState } from "react";
import { Container, Form, Repositories } from "./styled";
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
  const [repo, setRepo] = useState<repoType[]>([]);
  const [newrepo, setNewRepo] = useState("");

  async function handleAddRepo(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    const response = await api.get(`repos/${newrepo}`);
    setRepo([...repo, response.data]);
    setNewRepo('')
  }

  useEffect(() => {}, []);

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <h1>Explore repositorios no Gitbub</h1>

      <Form onSubmit={handleAddRepo}>
        <input
          value={newrepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome/repositorio ..."
        />
        <button>Pesquisar</button>
      </Form>

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
