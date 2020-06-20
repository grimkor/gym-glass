import { createGlobalStyle } from "styled-components";
import { color1 } from "../../constants/styles";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    display: flex;
    color: ${color1}
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
