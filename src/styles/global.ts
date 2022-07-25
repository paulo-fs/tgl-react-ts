import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-style: italic;
    background-color: #F7F7F7;
  }

  a{
    text-decoration: none;
  }
`;
