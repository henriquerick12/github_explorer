import { Link } from "react-router-dom";
import { Container, Form, Repositories } from "./styled";

import {FiChevronRight} from 'react-icons/fi'
import Logo from "../../assets/logo.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <h1>Explore repositorios no Gitbub</h1>

      <Form>
        <input type="text" placeholder="Digite o nome/repositorio ..." />
        <button>Pesquisar</button>
      </Form>

      <Repositories>
        <Link to={"/repositorio"}>
          <img
            src="https://avatars.githubusercontent.com/u/33300487?v=4"
            alt="git"
          />
          <div>
            <strong>Henrique Silva</strong>
            <small>Descrição</small>
          </div>
          
          <FiChevronRight size={20}/>
        </Link>
      </Repositories>
    </Container>
  );
};

export default Home;
