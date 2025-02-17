import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("Input Component", () => {
  it("renders with default props", async () => {
    render(<Input />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });
  it("handles onChange event", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");

    await user.type(input, "test");

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("does not log errors in console", () => {
    const spy = jest
      .spyOn(global.console, "error")
      .mockImplementation(() => {});

    render(<Input />);

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore();
  });

  it("renders with the correct variant styles", () => {
    render(<Input variant="primary" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("border-blue-500");
    expect(input).toHaveClass("rounded-sm");
  });

  it("is disabled when the disabled prop is true", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");

    expect(input).toBeDisabled();
    expect(input).toHaveClass("cursor-not-allowed");
  });

  it("does not log errors when invalid props are passed", () => {
    const spy = jest
      .spyOn(global.console, "error")
      .mockImplementation(() => {});

    render(<Input type="invalid" />);

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore();
  });

  it("handles async actions correctly", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");

    await user.type(input, "hello");
    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
