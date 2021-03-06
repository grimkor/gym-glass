import React from "react";
import Menu from "./index";
import { render, RenderResult } from "@testing-library/react";

describe("Layout", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <Menu>
        <div>TEST_STRING</div>
      </Menu>
    );
  });
 
  test("container is in DOM", () => {
    expect(component.getByTestId("menu-container")).toBeInTheDocument();
  });

  test("component has a menu item", () => {
    expect(component.getAllByTestId("menu-item").length).toBeGreaterThan(0);
  });
});
