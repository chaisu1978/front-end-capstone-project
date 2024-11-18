import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
    render(
        <BookingForm
            date=""
            setDate={() => { }}
            time=""
            setTime={() => { }}
            guests={1}
            setGuests={() => { }}
            occasion=""
            setOccasion={() => { }}
            availableTimes={["17:00", "18:00"]}
            handleSubmit={() => { }}
        />
    );

    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test("Form submission calls handleSubmit", () => {
    const mockHandleSubmit = jest.fn();

    render(
        <BookingForm
            date="2023-11-14"
            setDate={() => { }}
            time="18:00"
            setTime={() => { }}
            guests={2}
            setGuests={() => { }}
            occasion="Birthday"
            setOccasion={() => { }}
            availableTimes={["17:00", "18:00"]}
            handleSubmit={mockHandleSubmit}
        />
    );

    const submitButton = screen.getByLabelText("Submit your reservation");
    fireEvent.click(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalled();
});

// Test HTML5 validation attributes
test("HTML5 validation attributes are applied", () => {
    render(
        <BookingForm
            date=""
            setDate={() => { }}
            time=""
            setTime={() => { }}
            guests={1}
            setGuests={() => { }}
            occasion=""
            setOccasion={() => { }}
            availableTimes={["17:00", "18:00"]}
            handleSubmit={() => { }}
        />
    );

    const dateInput = screen.getByLabelText("Choose a date for reservation");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();

    const timeSelect = screen.getByLabelText("Choose a time for reservation");
    expect(timeSelect).toBeRequired();

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();

    const occasionSelect = screen.getByLabelText("Select the occasion");
    expect(occasionSelect).toBeRequired();
});

// Test disabling submit button based on form validation
test("Submit button is disabled when form is invalid", () => {
    render(
        <BookingForm
            date=""
            setDate={() => { }}
            time=""
            setTime={() => { }}
            guests={1}
            setGuests={() => { }}
            occasion=""
            setOccasion={() => { }}
            availableTimes={["17:00", "18:00"]}
            handleSubmit={() => { }}
        />
    );

    const submitButton = screen.getByText("Make Your Reservation");
    expect(submitButton).toBeDisabled(); // Should be disabled with invalid form inputs
});

test("Submit button is enabled when form is valid", () => {
    render(
        <BookingForm
            date="2023-11-14"
            setDate={() => { }}
            time="18:00"
            setTime={() => { }}
            guests={2}
            setGuests={() => { }}
            occasion="Birthday"
            setOccasion={() => { }}
            availableTimes={["17:00", "18:00"]}
            handleSubmit={() => { }}
        />
    );

    const submitButton = screen.getByText("Make Your Reservation");
    expect(submitButton).not.toBeDisabled(); // Should be enabled with valid form inputs
});
