import React from "react";
import Container from "./components/Container";
import GlobalStyles from "./components/GlobalStyles";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Content from "./components/Content";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Menu />
        <Content>
          <Banner />
        </Content>
      </Container>
    </>
  );
}

export default App;
