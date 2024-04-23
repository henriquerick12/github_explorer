import { createGlobalStyle } from "styled-components";

import Logo from '../assets/bg.svg'

const GlobalStyled = createGlobalStyle`
    * {
        padding:0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background:#f0f0f5 url(${Logo}) no-repeat 70% top;
        width: 100%;
        min-height: 100vh;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding:40px 20px;
    }

    button {
        cursor:point;
    }
`;

export default GlobalStyled;
