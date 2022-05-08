import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("App render", () => {
  const { getByText } = render(<App />);
  expect(getByText(/work/i)).toBeInTheDocument();
});
