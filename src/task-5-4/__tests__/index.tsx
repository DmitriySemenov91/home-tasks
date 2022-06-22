import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MultiStepForm } from "../steps";
import user from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

describe("<MultiStepForm />", () => {
  test("it should render the fields in first step", () => {
    render(
      <BrowserRouter>
        <MultiStepForm />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("button", { name: /First Step/i }));
    expect(screen.getByPlaceholderText(/firstName/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/secondName/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Welcome step/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Clean/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Next step/i })
    ).toBeInTheDocument();
  });
});

describe("Form functionality", () => {
  test("it should work", async () => {
    const USER_NAME = "usernameee";
    const USER_SURNAME = "usersURNAMEqqqqqqqwa";
    const EMAIL = "ddd@gmail.com";
    const PASS = "asdfghQ1";

    render(<MultiStepForm />);
    userEvent.click(screen.getByRole("button", { name: /First Step/i }));

    const userName = screen.getByLabelText("firstName");
    user.type(userName, USER_NAME);

    const userSurname = screen.getByLabelText(/secondName/i);
    user.type(userSurname, USER_SURNAME);

    const email = screen.getByLabelText(/email/i);
    user.type(email, EMAIL);

    const password = screen.getByLabelText("password");
    user.type(password, PASS);

    const submitButton = screen.getByRole("button", { name: /Next step/i });
    userEvent.click(submitButton);

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

    const errorMessages = "This field is required";

    render(<MultiStepForm />);

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

    expect(await screen.findAllByText(errorMessages)).toHaveLength(4);
    screen.debug();
  });
});
