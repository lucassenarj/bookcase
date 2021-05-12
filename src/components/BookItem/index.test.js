import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { generateSlug } from "./../../utils/helpers";
import BookItem from "./";
import book from "./../../utils/mocks/book";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("BookItem Component", () => {
  it("renders correctly", () => {
    const { volumeInfo } = book;
    const { container } = render(<BookItem book={volumeInfo} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  
  it("history push to details page", () => {
    const { volumeInfo } = book;
    const slug = generateSlug(volumeInfo.title);
    const location = {
      pathname: `/details/${slug}`,
      state: { book: volumeInfo }
    };

    const { getByTestId } = render(
      <MemoryRouter>
        <BookItem book={volumeInfo} />
      </MemoryRouter>
    );
  
    fireEvent.click(getByTestId("btn-click"));
  
    expect(mockHistoryPush).toHaveBeenCalledWith(location);
  });
});