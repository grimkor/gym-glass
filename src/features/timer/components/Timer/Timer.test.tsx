import React from "react";
import { render, screen } from "@testing-library/react";
import Timer from "./Timer";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

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

  test("has a reset button", () => {
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });

  test("has a stop button", () => {
    expect(screen.getByRole("button", { name: /stop/i })).toBeInTheDocument();
  });
});
