import { useReducer, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from "./api";

import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
        const date = new Date(action.payload);
        return fetchAPI(date);
    }
    return state;
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [allBookings, setAllBookings] = useState(() => {
        const storedBookings = localStorage.getItem("allBookings");
        return storedBookings ? JSON.parse(storedBookings) : [];
    });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("allBookings", JSON.stringify(allBookings));
    }, [allBookings]);

    const submitForm = (formData) => {
        const isSuccess = submitAPI(formData);
        if (isSuccess) {
            setAllBookings((prevBookings) => [...prevBookings, formData]);

            navigate("/confirmation");
        } else {
            alert("Failed to submit booking. Please try again.");
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/booking"
                    element={<BookingPage
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={submitForm}
                        allBookings={allBookings} />}
                />
                <Route path="/confirmation" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;
