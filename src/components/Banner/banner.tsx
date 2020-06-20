import React, { FC } from "react";
import { Container } from "./styled";
import Clock from "../Clock";

const Banner: FC = () => {
  return (
    <Container data-testid="banner-container">
      <Clock />
    </Container>
  );
};
export default Banner;
