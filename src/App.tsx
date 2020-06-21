import React from "react";
import Container from "./components/Container";
import GlobalStyles from "./components/GlobalStyles";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Timer from "./features/timer/Timer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Menu />
        <Content>
          <Banner />
          <Timer />
        </Content>
      </Container>
    </>
  );
}

export default App;
