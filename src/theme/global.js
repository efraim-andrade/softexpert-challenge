import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-weight: 400;
    color: ${colors.black};
    font: 16px 'Roboto', sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    &:visited {
      color: ${colors.black};
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
