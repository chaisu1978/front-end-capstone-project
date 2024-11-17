import { initializeTimes, updateTimes } from "./Main";
import * as api from "./api";

import { render, fireEvent } from "@testing-library/react";
import React, { useState, useEffect } from "react";

jest.mock("./api", () => ({
    fetchAPI: jest.fn(),
}));

beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(window, "localStorage", {
        value: {
            getItem: jest.fn(() => "[]"),
            setItem: jest.fn(),
        },
        writable: true,
    });
});

function TestComponent() {
    const [allBookings, setAllBookings] = useState(() => {
        const storedBookings = localStorage.getItem("allBookings");
        return storedBookings ? JSON.parse(storedBookings) : [];
    });

    useEffect(() => {
        localStorage.setItem("allBookings", JSON.stringify(allBookings));
    }, [allBookings]);

    return (
        <button
            onClick={() => setAllBookings([{ date: "2023-11-14", time: "18:00", guests: 2, occasion: "Birthday" }])}
        >
            Update
        </button>
    );
}

test("initializeTimes returns correct initial times", () => {
    jest.spyOn(api, "fetchAPI").mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    api.fetchAPI.mockRestore();
});

test("updateTimes returns the correct times for the given date", () => {
    jest.spyOn(api, "fetchAPI").mockReturnValue(["17:00", "18:30", "19:00", "20:30"]);

    const mockDate = "2023-11-14";
    const currentState = ["17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", payload: mockDate };

    const updatedTimes = updateTimes(currentState, action);

    expect(updatedTimes).toEqual(["17:00", "18:30", "19:00", "20:30"]);

    api.fetchAPI.mockRestore();
});

test("writes bookings to local storage without react-hooks library", () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText("Update"));

    expect(localStorage.setItem).toHaveBeenCalledWith(
        "allBookings",
        JSON.stringify([{ date: "2023-11-14", time: "18:00", guests: 2, occasion: "Birthday" }])
    );
});


test("reads bookings from local storage without react-hooks library", () => {
    const mockBookings = [{ date: "2023-11-14", time: "18:00", guests: 2, occasion: "Birthday" }];
    Object.defineProperty(window, "localStorage", {
        value: {
            getItem: jest.fn(() => JSON.stringify(mockBookings)),
            setItem: jest.fn(),
        },
        writable: true,
    });

    function TestComponent() {
        const [allBookings] = useState(() => {
            const storedBookings = localStorage.getItem("allBookings");
            return storedBookings ? JSON.parse(storedBookings) : [];
        });

        return <div>{JSON.stringify(allBookings)}</div>;
    }

    const { getByText } = render(<TestComponent />);

    expect(getByText(JSON.stringify(mockBookings))).toBeInTheDocument();

    expect(localStorage.getItem).toHaveBeenCalledWith("allBookings");
});
