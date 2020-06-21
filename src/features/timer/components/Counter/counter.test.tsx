import { fireEvent, render, screen } from "@testing-library/react";
import Counter, { TimeTypes } from "./counter";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

const TestComponent = () => {
  const [value, setValue] = useState(0);
  const handleChange = (num: number) => setValue(num);
  return (
    <Counter type={TimeTypes.minutes} onChange={handleChange} value={value} />
  );
};

describe("Counter", () => {
  let input: HTMLElement;
  beforeEach(() => {
    render(<TestComponent />);
    input = screen.getByRole("spinbutton", {
      name: /minutes/i,
    });
  });

  test("should allow a number", async () => {
    userEvent.type(input, "5");
    expect(input).toHaveValue(5);
  });

  test("should not allow a non-number", () => {
    const input = screen.getByRole("spinbutton", {
      name: /minutes/i,
    });
    userEvent.type(input, "abc");
    expect(input).not.toHaveValue("abc");
  });

  test("should change negative numbers to 0", () => {
    const input = screen.getByRole("spinbutton", {
      name: /minutes/i,
    });
    userEvent.type(input, "-1");
    expect(input).toHaveValue(0);
  });

  test("pressing the + button should add 1 to value", () => {
    expect(input).toHaveValue(0);
    const addButton = screen.getByRole("button", { name: "+" });
    userEvent.click(addButton);
    expect(input).toHaveValue(1);
  });

  test("pressing the - button should subtract 1 to value", () => {
    expect(input).toHaveValue(0);
    const addButton = screen.getByRole("button", { name: "-" });
    userEvent.click(addButton);
    expect(input).toHaveValue(-1);
  });
});
