import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFF;
        --gray-100: #E1E1E6;
        --gray-300: #C4C4CC;
        --gray-400: #8D8D99;
        --gray-500: #7C7C8A;
        --gray-600: #323238;
        --gray-700: #29292E;
        --gray-800: #202024;
        --gray-900: #121214;

        
        --purple-dark: #6833e4;
        --purple-light: #734bd1;

        --green-500: #00875F;
        --green-700: #015F43;

        --red-500:#AB222E;
        --red-700:#7A1921;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 1px solid var(--purple-light);
        outline-offset: 2px;
    }

    body {
        background: var(--gray-800);
        color: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
