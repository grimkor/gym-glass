import React, { FC } from "react";
import { Container } from "./styled";

const Layout: FC = ({ children }) => {
  return <Container data-testid="layout-container">{children}</Container>;
};

export default Layout;
