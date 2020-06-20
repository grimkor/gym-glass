import React from "react";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import GlobalStyles from "./components/GlobalStyles";
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Menu />
        <Clock />
      </Layout>
    </>
  );
}

export default App;
