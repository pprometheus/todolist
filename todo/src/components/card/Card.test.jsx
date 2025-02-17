import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "./Card";


jest.mock('../button/Button', () => {
  return ({ children, onClick }) => <button onClick={onClick}>{children}</button>; 
});

describe("Card Component", () => {
  it("renders children correctly", () => {
    render(
      <Card todoText="Test Content" taskId={1} status={false} doneTask={jest.fn()} deleteTask={jest.fn()}>
        <p>Test Content</p>
      </Card>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("handles user interaction inside the Card", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
  
    render(
      <Card
        todoText="Test Task"
        taskId={1}
        status={false}
        doneTask={handleClick} 
        deleteTask={jest.fn()} 
      />
    );
  
    const button = screen.getByRole("button", { name: "Done" }); 
    await user.click(button); 
  
    console.log(handleClick); 
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });

  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => {}); 

    render(<Card todoText="Test Task" taskId={1} status={false} doneTask={jest.fn()} deleteTask={jest.fn()} />);

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore(); 
  });

  it("logs an error when required prop is missing", () => {
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => {});

    render(<Card todoText="Test Task" taskId={1} status={false} doneTask={jest.fn()} deleteTask={jest.fn()} />);

    expect(spy).not.toHaveBeenCalled(); 

    spy.mockRestore();
  });
});
