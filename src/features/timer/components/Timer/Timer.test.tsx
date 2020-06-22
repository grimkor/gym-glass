import React from "react";
import { render, screen } from "@testing-library/react";
import Timer from "./Timer";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import userEvent from "@testing-library/user-event";

describe("Timer component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  });

  test("has a minutes input", () => {
    expect(
      screen.getByRole("spinbutton", { name: /minutes/i })
    ).toBeInTheDocument();
  });

  test("has a seconds input", () => {
    expect(
      screen.getByRole("spinbutton", { name: /seconds/i })
    ).toBeInTheDocument();
  });

  test("has a start button", () => {
    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
  });

  test("pressing start shows the stop button", async () => {
    userEvent.type(screen.getByRole("spinbutton", { name: /minutes/i }), "1");
    userEvent.click(screen.getByRole("button", { name: /start/i }));
    expect(screen.getByRole("button", { name: /stop/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /start/i })
    ).not.toBeInTheDocument();
  });

  test("has a stop button", () => {
    expect(screen.getByRole("button", { name: /stop/i })).toBeInTheDocument();
  });
});
