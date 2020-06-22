import React from "react";
import Clock from "./index";
import { render, RenderResult, waitFor } from "@testing-library/react";
import moment from "moment";
import { TIME_FORMAT } from "../../constants/format";

describe("Clock", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<Clock />);
  });

  test("displays time", async () => {
    const time = moment().format(TIME_FORMAT);
    expect(component.getByText(time)).toBeInTheDocument();
    const nextTime = moment(new Date(Date.now()))
      .add(2, "seconds")
      .format(TIME_FORMAT);
    await waitFor(
      () => {
        expect(component.getByText(nextTime)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
