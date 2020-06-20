import React from "react";
import Clock from "./index";
import { waitFor, RenderResult, render, cleanup } from "@testing-library/react";
import moment from "moment";
import { TIME_FORMAT } from "../../constants/format";

describe("Clock", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<Clock />);
  });
  afterEach(cleanup);

  test("displays time", async () => {
    const time = moment().format(TIME_FORMAT);
    expect(component.getByTestId("clock-time")).toHaveTextContent(time);
    const nextTime = moment(new Date(Date.now()))
      .add(2, "seconds")
      .format(TIME_FORMAT);
    await waitFor(() => {
      expect(component.getByTestId("clock-time")).toHaveTextContent(nextTime);
    });
  });
});
