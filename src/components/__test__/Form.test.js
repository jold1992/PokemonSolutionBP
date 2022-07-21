import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import "whatwg-fetch";

import { Form } from "../Form";

describe("Testing <Form />", () => {
  let component;
  let windowFetchSpy;
  const mockHandler = jest.fn();

  const data = [
    {
      id: 1,
      name: "Bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      attack: 49,
      defense: 69,
    },
  ];

  beforeEach(() => {
    windowFetchSpy = jest.spyOn(window, "fetch");
    component = render(
      <Form
        data={data}
        setData={mockHandler}
        pokemon={data[0]}
        setPokemon={mockHandler}
        onSubmit={mockHandler}
      />
    );
  });

  test("should render the form", () => {
    expect(component.getByTestId("form")).toBeInTheDocument();
  });

  test("should render the form with the correct data", () => {
    expect(component.getByTestId("input-name")).toHaveValue("Bulbasaur");
  });

  test("should clear the form", () => {
    const button = component.getByTestId("button-clear");
    fireEvent.click(button);
    expect(component.getByTestId("input-name")).toHaveValue("");
  });

  test("should call onSubmit", () => {
    const button = component.getByTestId("button-submit");
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalled();
  });
});
