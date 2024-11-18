import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./components/Main";

test("Renders the home page", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Main />
        </MemoryRouter>
    );

    const callToActionElement = screen.getAllByText(/Chicago/i)[0];
    expect(callToActionElement).toBeInTheDocument();
});


test("Navigates to the booking page", () => {
    render(
        <MemoryRouter initialEntries={["/booking"]}>
            <Main />
        </MemoryRouter>
    );

    const bookingPageHeading = screen.getByText(/Reserve a table for your next meal/i);
    expect(bookingPageHeading).toBeInTheDocument();
});
