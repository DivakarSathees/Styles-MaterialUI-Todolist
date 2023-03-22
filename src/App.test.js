import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

  test("test_case1", () => {
    render( <App />);
    const addButton = screen.getByTestId("add");
    expect(addButton).toBeInTheDocument();
  });

  test("test_case2", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    expect(input).toBeInTheDocument();
  });

  test("test_case3", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    fireEvent.change(input, { target: { value: "Buy milk" } });
    expect(input.value).toBe("Buy milk");
  });

  test("test_case4", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    fireEvent.change(input,{ target:  { value: "Buy milk"  }});
    expect(input.value).toBe("Buy milk")
    fireEvent.click(screen.getByTestId("add"));
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });
  


  test("test_case5", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    fireEvent.change(input, { target: { value: "Do laundry" } });
    fireEvent.click(screen.getByTestId("add"));
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("test_case6", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    fireEvent.change(input, { target: { value: "Clean room" } });
    fireEvent.click(screen.getByTestId("add"));
    fireEvent.click(screen.getByTestId("delete"));
    expect(screen.queryByText("Clean room")).not.toBeInTheDocument();
  });

  test("test_case7", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    fireEvent.change(input, { target: { value: "Walk dog" } });
    fireEvent.click(screen.getByTestId("add"));
    fireEvent.change(input, { target: { value: "Wash dishes" } });
    fireEvent.click(screen.getByTestId("add"));
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    fireEvent.click(screen.getByTestId("filter"));
    expect(screen.queryByText("Walk dog")).not.toBeInTheDocument();
    expect(screen.getByText("Wash dishes")).toBeInTheDocument();

  });

  test("test_case8", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    fireEvent.change(input, { target: { value: "Water plants" } });
    fireEvent.click(screen.getByTestId("add"));
    fireEvent.change(input, { target: { value: "Take out trash" } });
    fireEvent.click(screen.getByTestId("add"));
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    fireEvent.click(screen.getByTestId("filter"));
    expect(screen.getByText("Take out trash")).toBeInTheDocument();
    expect(screen.queryByText("Water plants")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("filter"));
    expect(screen.getByText("Take out trash")).toBeInTheDocument();
    expect(screen.getByText("Water plants")).toBeInTheDocument();
  });

  test("test_case9", () => {
    render(<App />);
    const input = screen.getByLabelText("Add a new task");
    fireEvent.change(input, { target: { value: "Water plants" } });
    fireEvent.click(screen.getByTestId("add"));
    fireEvent.change(input, { target: { value: "Take out trash" } });
    fireEvent.click(screen.getByTestId("add"));
    const checkbox1 = screen.getAllByRole("checkbox")[0];
    const checkbox2 = screen.getAllByRole("checkbox")[1];

    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);

    fireEvent.click(screen.getByTestId("filter"));
    expect(screen.queryByText("Take out trash")).not.toBeInTheDocument();
    expect(screen.queryByText("Water plants")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("filter"));
    expect(screen.getByText("Take out trash")).toBeInTheDocument();
    expect(screen.getByText("Water plants")).toBeInTheDocument();
  });

