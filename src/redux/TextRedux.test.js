import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { reducer } from "./reducer";
import TextRedux from "./TextRedux";

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Redux testing", () => {
  it("check initial state is iqual to 0", () => {
    expect(getByRole("heading")).toHaveTextContent("0");
  });

  it("increments the counter through redux", () => {
    const { getByRole } = renderWithRedux(<TextRedux />, {
      initialState: { count: 4 },
    });

    userEvent.click(getByText("+1"));
    expect(getByRole("heading")).toHaveTextContent("5");
  });

  it("decrements the counter through redux", () => {
    const { getByRole, getByText } = renderWithRedux(<TextRedux />, {
      initialState: { count: 5 },
    });
    userEvent.click(getByText("-1"));
    expect(getByRole("heading")).toHaveTextContent("6");
  });
});
