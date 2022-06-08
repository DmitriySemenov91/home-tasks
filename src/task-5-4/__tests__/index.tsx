import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "../index";
import user from "@testing-library/user-event";

describe("Form initialize", () => {
  test("should render the basic fields", () => {
    render(<Form />);
    expect(
      screen.getByRole("input", { name: /firstName/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("input", { name: /secondName/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("input", { name: /email/i })).toBeInTheDocument();
    expect(
      screen.getByRole("input", { name: /password/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });
});

describe("Form functionality", () => {
  test("it should work", async () => {
    const USER_NAME = "usernameee";
    const USER_SURNAME = "usersURNAMEqqqqqqqwa";
    const EMAIL = "ddd@gmail.com";
    const PASS = "asdfghQ1";

    render(<Form />);

    const userName = screen.getByLabelText("firstName");
    user.type(userName, USER_NAME);

    const userSurname = screen.getByLabelText(/secondName/i);
    user.type(userSurname, USER_SURNAME);

    const email = screen.getByLabelText(/email/i);
    user.type(email, EMAIL);

    const password = screen.getByLabelText("password");
    user.type(password, PASS);

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    expect(await screen.findByText(/User Name/i)).toBeInTheDocument();
    expect(await screen.findByText(/User SecondName/i)).toBeInTheDocument();
    expect(await screen.findByText(/User E-mail/i)).toBeInTheDocument();
    expect(await screen.findByText(/User Password/i)).toBeInTheDocument();
  });

  test("it shouldn't work", async () => {
    const USER_NAME = "usernameee1";
    const USER_SURNAME = "usersURNAMEqqqqqqqwa2";
    const EMAIL = "ddd@gmail3com";
    const PASS = "asdfghQ";

    const errorMessages = "This field is required"

    render(<Form />);

    const userName = screen.getByLabelText("firstName");
    user.type(userName, USER_NAME);

    const userSurname = screen.getByLabelText(/secondName/i);
    user.type(userSurname, USER_SURNAME);

    const email = screen.getByLabelText(/email/i);
    user.type(email, EMAIL);

    const password = screen.getByLabelText("password");
    user.type(password, PASS);

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    expect(await screen.findAllByText(errorMessages)).toHaveLength(4)
    screen.debug()
  });
});
