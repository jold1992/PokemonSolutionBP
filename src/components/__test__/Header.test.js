import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import { Header } from "../Header";

describe("Testing Header", () => {
  let component;
  const mockHandler = jest.fn();

  beforeEach(() => {
    component = render(
      <Header setShowNewPanel={mockHandler} setTitle={mockHandler} />
    );
  });

  test("should render the header", () => {
    expect(component.getByTestId("header")).toBeInTheDocument();
    expect(component.getByTestId("header")).toHaveTextContent(
      "Listado de Pokemon"
    );
  });

  test("should render the header with input", () => {
    expect(component.getByTestId("input-search")).toBeInTheDocument();
  });

  test("should render the header with button", () => {
    expect(component.getByTestId("button-new")).toBeInTheDocument();
  });

  test("click on button should call onClickNew", () => {
    const button = component.getByTestId("button-new");

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
