import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, button {
        font: 14px 'Montserrat', sans-serif;
    }
    
    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;
