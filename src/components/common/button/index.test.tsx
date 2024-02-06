import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
  it("renders the button correctly", () => {
    const buttonText = "Test Button";
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });
});
