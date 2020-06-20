import React from "react";
import Banner from "./index";
import { render, RenderResult } from "@testing-library/react";

describe("Layout", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<Banner />);
  });

  test("container is in DOM", () => {
    expect(component.getByTestId("banner-container")).toBeInTheDocument();
  });

  test("component has a banner item", () => {
    expect(component.getByTestId("clock")).toBeInTheDocument();
  });
});
