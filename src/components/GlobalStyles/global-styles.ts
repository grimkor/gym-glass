import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    display: flex;
  }
  body {
    flex: 1;
    display: flex;
    margin: 0;
  }
  #root {
    flex: 1;
    display: flex;    
  }
`;

export default GlobalStyles;
