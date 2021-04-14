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

    h1 {
      font-size: 4rem;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 2rem;
    }

    button {
      cursor: pointer;
      padding: 7px;
      border-radius: 6px;
      border: none;
      color: white;
      background-color: #007bff;
    }

    .new-task-input {
      margin-right: 10px;
      border-radius: 6px;
      border-style: groove;
      padding: 5px;
    }

    .add-task-button {
      border: none;

    }

    .tasks-buttons-container {
      button + button {
        margin-left: 10px;
      }

      &:nth-child(1) {
        background-color: #17a2b8;
      }
    }
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