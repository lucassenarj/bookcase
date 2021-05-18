import React from "react";
import { render } from "@testing-library/react";
import Loader from "./index";

describe("Loader Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toMatchSnapshot();
  });
});