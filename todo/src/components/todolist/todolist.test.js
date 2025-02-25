import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoList from "./todolist";
import { Provider } from "react-redux";
import store from "../../store";

it("input", () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  const input = screen.getByRole("textbox", { placeHolder: "Enter Task" });
  const button = screen.getByRole("button", { name: "Add" });
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

describe("adding task", () => {
  it("should take input", async () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const user = userEvent.setup();
    const add = screen.getByRole("button", { name: "Add" });
    const task = screen.getByRole("textbox", { placeHolder: "Enter Task" });
    await user.type(task, "Insert Test");
    expect(task.value).toBe("Insert Test");
    await user.click(add);
    expect(task.value).toBe("");
    // expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
