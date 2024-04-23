import styled, {css} from "styled-components";
import { shade } from "polished";

type FormProps = {
  hasError: boolean;
}

export const Container = styled.div`
  h1 {
    font-size: 48px;
    color: #a3a3a3;
    margin-top: 50px;
    line-height: 56px;
    max-width: 450px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  
  input {
    background-color: #fff;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;
    font-size: 1.2rem;

    ${props => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      font-size: 1.2rem;
    }
  }

  button {
    width: 210px;
    height: 70px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 0px 5px 5px 0px;
    background-color: #04d531;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background-color: ${shade(0.2, "#04d531")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    background: #fff;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    align-items: center;
    transition: all 0.2s;

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }

  div {
    margin-left: 16px;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    small {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
