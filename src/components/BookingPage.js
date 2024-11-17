import { useState, useEffect } from 'react';
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [formData, setFormData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ date, time, guests, occasion });
        alert('Reservation submitted!');
    };

    useEffect(() => {
        if (formData) {
            console.log('Form submitted:', formData);
        }
    }, [formData]);

    return (
        <div className="container">
            <h1>Booking Page</h1>
            <p>Reserve a table at Little Lemon.</p>
            <BookingForm
                date={date}
                setDate={(newDate) => {
                    setDate(newDate);
                    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
                }}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                availableTimes={availableTimes}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default BookingPage;