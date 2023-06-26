import React, { useReducer } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toHaveTextContent } from "@testing-library/jest-dom/matchers";

const initialState = {
  count: 0,
};

const reducer = ({ count }, { type }) => {
  switch (type) {
    case "INCREMENT":
      return {
        count: count + 1,
      };
    case "DECREMENT":
      return {
        count: count - 1,
      };
    default:
      return {};
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

describe("useReducer", () => {
  it("hook settings", () => {
    const { getByText, getByRole } = render(<Counter />);
    expect(getByRole("heading")).toHaveTextContent("0");
    userEvent.click(getByText("+1"));
    expect(getByRole("heading")).toHaveTextContent("1");
    userEvent.click(getByText("-1"));
    expect(getByRole("heading")).toHaveTextContent("0");
  });
});
