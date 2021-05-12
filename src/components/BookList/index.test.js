import React from "react";
import { render } from "@testing-library/react";
import BookList from "./";
import books from "./../../utils/mocks/bookList";


describe("BookList Component", () => {
  it("renders correctly", () => {
    const { container } = render(<BookList books={books.items} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});