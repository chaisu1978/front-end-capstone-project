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
