import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;

    #root {
      width: 100%;
      height: 100%;
    }
  }

  main {
    width: auto;
    max-width: 1120px;
    height: 90%;
    padding: 20px;
  }

  @media (max-width: 1120px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;