import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Mukta Malar', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    background: #FFF7F7;
  }

  #root {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`;
