import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        padding:0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color:#f0f0f5;
        width: 100%;
        min-height: 100vh;
    }
`;

export default GlobalStyled;
