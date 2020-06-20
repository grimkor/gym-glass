import React from "react";
import MenuItem from "./index";
import { cleanup, render, RenderResult } from "@testing-library/react";

describe("Layout", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<MenuItem />);
  });
  afterEach(cleanup);

  test("container is in DOM", () => {
    expect(component.getByTestId("menu-item")).toBeInTheDocument();
  });
});
