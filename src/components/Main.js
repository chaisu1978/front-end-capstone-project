import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BookingPage from './BookingPage';

const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
];

const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {

        return initializeTimes();
    }
    return state;
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/booking"
                    element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
                />
            </Routes>
        </main>
    );
}

export default Main;
