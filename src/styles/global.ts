import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #707070;
  }

  body{
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  body, input, textarea, button{
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-style: italic;
    background-color: #F7F7F7;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
