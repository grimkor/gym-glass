import React from "react";
import Layout from "./index";
import { cleanup, render, RenderResult } from "@testing-library/react";

describe("Layout", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <Layout>
        <div>TEST_STRING</div>
      </Layout>
    );
  });
  afterEach(cleanup);

  test("container is in DOM", () => {
    expect(component.getByTestId("layout-container")).toBeInTheDocument();
  });

  test("component shows children", () => {
    expect(component.getByText(/TEST_STRING/i)).toBeInTheDocument();
  });
});
