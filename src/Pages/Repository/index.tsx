import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Header, Info, Issues } from "./style";

import api from "../../services/api";
import Logo from "../../assets/logo.svg";

type RepoParam = {
  repo: string;
};

type repoType = {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
};

type Issue = {
  id: number;
  title: string;
  user: {
    login: string;
  };
};

const Repository: React.FC = () => {
  const { repo } = useParams<RepoParam>();
  const [repository, setRepo] = useState<repoType | null>(null);
  const [issue, setIssue] = useState<Issue[]>([]);

  useEffect(() => {
    async function getIssues(): Promise<void> {
      const [repositorio, issues] = await Promise.all([
        api.get(`repos/${repo}`),
        api.get(`repos/${repo}/issues`),
      ]);
      setRepo(repositorio.data);
      setIssue(issues.data);
    }
    getIssues();
  }, [repo]);

  return (
    <>
      <Header>
        <img src={Logo} alt="logo" />
        <Link to={"/"}>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <Info>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>issues abertas</span>
            </li>
          </ul>
        </Info>
      )}

      {issue.map((item) => (
        <Issues key={item.id}>
          <div>
            <strong>{item.title}</strong>
            <small>{item.user.login}</small>
          </div>
          <FiChevronRight size={20} />
        </Issues>
      ))}
    </>
  );
};

export default Repository;
