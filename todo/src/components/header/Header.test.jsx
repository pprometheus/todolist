import React from "react"; 
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("renders title correctly", () => {
    render(<Header title="Welcome" />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => {}); 

    render(<Header title="Test" />);

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore(); 
  });
});
