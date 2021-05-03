import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }
  body {
    #root {
      min-height: -webkit-fill-available;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button  {
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }

`;

export default GlobalStyle;
