import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./index";

describe("Title", () => {
  it("renders the title correctly", () => {
    const titleText = "Test Title";
    const { getByText } = render(<Title>{titleText}</Title>);
    const titleElement = getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});
