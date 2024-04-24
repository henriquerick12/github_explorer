import { useParams, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Header, Info, Issues } from "./style";

import Logo from "../../assets/logo.svg";

type RepoParams = {
  repo: string;
};

const Repository: React.FC = () => {
  const { repo } = useParams<RepoParams>();

  return (
    <>
      <Header>
        <img src={Logo} alt="logo" />
        <Link to={"/"}>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Info>
        <header>
          <img src="https://avatars.githubusercontent.com/u/69631?v=4" alt="" />
          <div>
            <strong>name</strong>
            <p>desc</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>8989</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>8989</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>8989</strong>
            <span>issues abertas</span>
          </li>
        </ul>
      </Info>

      <Issues>
        <div>
          <strong>dsd</strong>
          <small>dsd</small>
        </div>
        <FiChevronRight size={20} />
      </Issues>
    </>
  );
};

export default Repository;
