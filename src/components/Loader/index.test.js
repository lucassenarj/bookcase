import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";
import store from "store";
import Loader from "./";

const mockStore = configureStore([]);

describe("Loader Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Loader />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("loading not showing", () => {
    const mockedStore = mockStore({
      app: {
        loading: false,
      },
    });
  
    const { container } = render(
      <Provider store={mockedStore}>
        <Loader />
      </Provider>
    );
  
    expect(container.firstChild).toBeNull();
  });
});