import React from "react";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Menu />
      </Layout>
    </>
  );
}

export default App;
