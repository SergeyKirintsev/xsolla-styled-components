import { createGlobalStyle } from 'styled-components';
import fon from '../images/fon.png';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mukta+Malar:wght@300;400;600;800&display=swap');

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
    height: 100%;
    width: 100%;
    background: #FFF7F7;
  }

  #root {
    height: 100%;
    width: 100%;
    max-width: 1400px;
    max-height: 800px;

    margin: 0 auto;

    background-image: url(${fon});
    background-color: greenyellow;
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;

    position: relative;
  }

  #root::before {
    content: '';
    width: 560px;
    height: 560px;
    border-radius: 50%;

    background: #FF5656;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.6;
  }
`;
