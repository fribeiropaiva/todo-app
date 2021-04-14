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
    font-family: sans-serif;

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
      border: 1px solid #6c757d;
      background: none;
      color: black;

      &:hover {
        background-color: #6c757d;
        color: white;
        transition: 0.4s;
      }

      &:focus {
        outline: none;
      }
    }

    .new-task-input {
      margin-right: 10px;
      border-radius: 6px;
      border-style: groove;
      padding: 5px;

      &:focus {
        outline: none;
      }
    }

    .add-task-button {
      font-size: 1.5rem;
      padding: 1px 7px;
      background-color: #007bff;
      border: none;
      color: white;

      &:hover {
        background-color: #0062cc;
        transition: 0.4s;
      }
    }

    .tasks-buttons-container {
      margin-top: 10px;
      margin-bottom: 30px;

      button + button {
        margin-left: 10px;
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