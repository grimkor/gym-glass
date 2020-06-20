import React, { FC } from "react";
import { Container } from "./styled";
import MenuItem from "../MenuItem";

const Menu: FC = ({ children }) => {
  return (
    <Container data-testid="menu-container">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </Container>
  );
};

export default Menu;
