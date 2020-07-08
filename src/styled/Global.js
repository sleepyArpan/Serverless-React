import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        color: #333;
        font-family: sans-serif;
        font-weight: 300;
    }

    h1, h2 {
        margin-bottom: 2rem;
    }
`;
