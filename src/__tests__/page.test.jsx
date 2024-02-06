// https://nextjs.org/docs/app/building-your-application/testing/jest

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("renders the activity feed", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Activity Feed")).toBeInTheDocument();
  });
});
