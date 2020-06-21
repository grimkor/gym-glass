import { fireEvent, render, screen } from "@testing-library/react";
import Counter, { TimeTypes } from "./counter";
import React, { ChangeEvent, useState } from "react";
import { act } from "react-dom/test-utils";

const changeInput = (input: HTMLElement, value: unknown) =>
  fireEvent.change(input, {
    currentTarget: {
      value,
    },
  });

const TestComponent = () => {
  const [value, setValue] = useState(0);
  const handleChange = (num: number) => setValue(num);
  return (
    <Counter type={TimeTypes.minutes} onChange={handleChange} value={value} />
  );
};

describe("Counter", () => {
  beforeEach(() => {
    render(<TestComponent />);
  });

  test("should allow a number", async () => {
    const input = screen.getByRole("spinbutton", {
      name: /minutes/i,
    });
    act(() => {
      fireEvent.change(input, {
        target: {
          value: 5,
        },
      });
    });

    expect(input).toHaveValue(5);
  });

  test("should not allow a non-number", () => {
    const input = screen.getByRole("spinbutton", {
      name: /minutes/i,
    });
    changeInput(input, "abc");
    expect(input).not.toHaveValue("abc");
  });

  test("should change negative numbers to 0", () => {
    const input = screen.getByRole("spinbutton", {
      name: /minutes/i,
    });
    fireEvent.change(input, {
      target: {
        value: -1,
      },
    });
    expect(input).toHaveValue(0);
  });
});
