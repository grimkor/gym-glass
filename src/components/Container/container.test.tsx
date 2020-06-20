import React from "react";
import Container from "./index";
import { render, RenderResult } from "@testing-library/react";

describe("Layout", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <Container>
        <div>TEST_STRING</div>
      </Container>
    );
  });

  test("has main components", () => {
    expect(component.getByTestId("menu-container")).toBeInTheDocument();
    expect(component.getByTestId("banner-container")).toBeInTheDocument();
  });
});
