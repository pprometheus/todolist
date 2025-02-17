import React from "react"; 
import { render, screen } from "@testing-library/react"; 
import userEvent from "@testing-library/user-event"; 
import "@testing-library/jest-dom"; 
import Button from "./Button"; 

describe("Button Component", () => {
  it("renders correctly with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("triggers onClick event when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole("button", { name: "Click me" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the correct variant styles", () => {
    render(<Button variant="done">Done</Button>);
    expect(screen.getByRole("button", { name: "Done" })).toHaveClass("bg-green-500"); 
  });

  it("disables button when `disabled` prop is true", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick} disabled>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeDisabled();
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
  
  it("throws an error when rendered with invalid props", () => {
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => {});
  
    expect(() => {
      render(<Button invalidProp="invalid">Click me</Button>);
    }).toThrow("Invalid prop passed to Button component");
  
    spy.mockRestore();
  });
  
  it("remains clickable when not disabled", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });

    await user.click(button);
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("applies correct styles for `remove` variant", () => {
    render(<Button variant="remove">Delete</Button>);
    expect(screen.getByRole("button", { name: "Delete" })).toHaveClass("bg-red-500"); 
  });

  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => {}); 

    render(<Button onClick={() => {}}>Click me</Button>);
    
    expect(spy).not.toHaveBeenCalled();
    
    spy.mockRestore(); 
  });
});
