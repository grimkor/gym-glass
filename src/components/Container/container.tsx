import React, { FC } from "react";
import { StyledContainer } from "./styled";
import Banner from "../Banner";
import Menu from "../Menu";

const Container: FC = () => {
  return (
    <StyledContainer>
      <Menu />
      <Banner />
    </StyledContainer>
  );
};

export default Container;
