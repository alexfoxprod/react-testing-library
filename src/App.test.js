import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment(<App />)).toMatchSnapshot();
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  it("renders App component", async () => {
    render(<App />);
    screen.debug();
    // expect(screen.queryByText(/Searches for React/i)).toBeNull();
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    // expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("search text...")).toBeInTheDocument();
    // expect(screen.getByAltText("search image")).toBeInTheDocument();
    // expect(screen.getByDisplayValue("")).toBeInTheDocument();

    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
  });
});

afterEach(cleanup);
