import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test("renders learn react link", () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment(<App />)).toMatchSnapshot();
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

// describe("App", () => {
//   it("renders App component", async () => {
//     render(<App />);
//     screen.debug();
// expect(screen.queryByText(/Searches for React/i)).toBeNull();
// expect(screen.getByRole("textbox")).toBeInTheDocument();
// expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
// expect(screen.getByPlaceholderText("search text...")).toBeInTheDocument();
// expect(screen.getByAltText("search image")).toBeInTheDocument();
// expect(screen.getByDisplayValue("")).toBeInTheDocument();

//     expect(screen.queryByText(/Logged in as/i)).toBeNull();
//     screen.debug();
//     expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
//     screen.debug();
//     expect(screen.getByAltText(/search image/i)).toHaveClass("image");
//     expect(screen.getByLabelText(/search/i)).not.toBeRequired();
//     expect(screen.getByLabelText(/search/i)).toBeEmptyDOMElement();
//     expect(screen.getByLabelText(/search/i)).toHaveAttribute("id");
//   });
// });

// describe("App", () => {
//   test("renders App component", async () => {
//     render(<App />);
//     await screen.findByText(/Logged in as/i);
//     expect(screen.queryByText(/Searches for React/i)).toBeNull();
//     fireEvent.change(screen.getByRole("textbox"), {
//       target: { value: "React" },
//     });
//     expect(screen.queryByText(/Searches for React/i)).toBeInTheDocument();
//   });
// });

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);
    await screen.findByText(/Logged in as/i);
    expect(screen.queryByText(/Searches for React/i)).toBeNull();
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "React" },
    // });
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(screen.queryByText(/Searches for React/i)).toBeInTheDocument();
  });
});

describe("event", () => {
  it("checkbox click", () => {
    const { container } = render(<input type="checkbox" />);
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    // fireEvent.click(checkbox);
    userEvent.click(checkbox);
    // userEvent.click(checkbox, { ctrlKey: true, shiftKey: true });
    expect(checkbox).toBeChecked();
  });

  it("double click", () => {
    const onChange = jest.fn();
    const { container } = render(<input type="checkbox" onChange={onChange} />);
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    // fireEvent.click(checkbox);
    userEvent.dblClick(checkbox);
    // userEvent.click(checkbox, { ctrlKey: true, shiftKey: true });
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("focus", () => {
    const { getAllByTestId } = render(
      <div>
        <input data-testid="element" type="checkbox" />
        <input data-testid="element" type="radio" />
        <input data-testid="element" type="number" />
      </div>
    );
    const [checkbox, radio, number] = getAllByTestId("element");
    userEvent.tab();
    expect(checkbox).toHaveFocus();
    userEvent.tab();
    expect(radio).toHaveFocus();
    userEvent.tab();
    expect(number).toHaveFocus();
  });

  it("select option", () => {
    const { selectOptions, getByRole, getByText } = render(
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );
    userEvent.selectOptions(getByRole("combobox"), "1");
    expect(getByText("A").selected).toBeTruthy();

    userEvent.selectOptions(getByRole("combobox"), "2");
    expect(getByText("B").selected).toBeTruthy();
    expect(getByText("A").selected).toBeFalsy();

    userEvent.selectOptions(getByRole("combobox"), "3");
    expect(getByText("C").selected).toBeTruthy();
    expect(getByText("B").selected).toBeFalsy();
    expect(getByText("A").selected).toBeFalsy();
  });
  it("input focus", () => {
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    );
    const input = getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
afterEach(cleanup);
