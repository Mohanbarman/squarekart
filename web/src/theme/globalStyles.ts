import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  a, a:visited, a:hover, a:active {
    color: inherit;
  }
`;
