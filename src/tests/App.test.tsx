import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("header render", () => {
  const { getByRole } = render(<App />);
  expect(getByRole("heading", {name: "React Blog"}));
});

test("navs render", () => {
  const { getByRole } = render(<App />);
  expect(getByRole("link",{name: "Main"}));
  expect(getByRole("link",{name: "About"}));
  expect(getByRole("link",{name: "Login"}));
});
