import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { Table } from "../Table";

describe("Testing <Table />", () => {
  let component;

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
    component = render(<Table data={data} />);
  });

  test("should render the table", () => {
    expect(component.getByTestId("table")).toBeInTheDocument();
  });

  test("should render the table with the correct data", () => {
    expect(component.getByTestId("table-body")).toHaveTextContent("Bulbasaur");
  });
});
