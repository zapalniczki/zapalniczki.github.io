import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        width: 100vw;
        max-width: 100%;
}

    #root {
        width: 100vw;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;
