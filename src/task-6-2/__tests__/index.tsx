import { render, screen } from "@testing-library/react";
import { Users } from "../pages";
import userEvent from "@testing-library/user-event";

describe("<Users />", () => {
  it("should be loading before rendering the list", async () => {
    render(<Users />);
    userEvent.click(screen.getByRole("button", { name: "get list of users" }));
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
  });
  it("should be render the list of users", async () => {
    render(<Users />);
    userEvent.click(screen.getByRole("button", { name: "get list of users" }));
    const dates = await screen.findAllByText(/Date/i);
    const names = await screen.findAllByText(/Name/i);
    const avatars = await screen.findAllByTestId(/avatar/i);
    const carNames = await screen.findAllByText(/Car/i);
    expect(await dates[0]).toBeInTheDocument();
    expect(await names[0]).toBeInTheDocument();
    expect(await avatars[0]).toBeInTheDocument();
    expect(await carNames[0]).toBeInTheDocument();
  });
  it("should be error", async () => {
    render(<Users />);
    userEvent.click(screen.getByRole("button", { name: "get list of users" }));
    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
  });
});
