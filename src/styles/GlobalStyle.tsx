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
        background: rgb(245, 247, 249);
    }

    html {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyle;
