import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Info = styled.div`
  margin-top: 80px;
  width: 100%;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: auto;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737390;
        margin-top: 4px;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 30px;
  display: flex;
  background: #fff;
  width: 100%;
  transition: all 0.2s;
  padding: 30px;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    transform: translateX(10px);
  }

  div {
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
