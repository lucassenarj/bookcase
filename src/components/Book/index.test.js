import React from "react";
import { render } from "@testing-library/react";
import Book from "./";
import bookItem from "./../../utils/mocks/book";


describe("Book Component", () => {
  it("renders correctly", () => {
    const { volumeInfo } = bookItem;
    const { container } = render(<Book book={volumeInfo} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});