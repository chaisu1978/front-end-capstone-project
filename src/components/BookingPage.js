import { useState } from 'react';
import BookingForm from "./BookingForm";
import PageTitle from './PageTitle';

function BookingPage({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    return (
        <>
            <PageTitle h1="Book a Table" h2="Reserve a table for your next meal" />
            <div className='container'>
                <div className="form-and-table">
                    <BookingForm
                        date={date}
                        setDate={(newDate) => {
                            setDate(newDate);
                            dispatch({ type: "UPDATE_TIMES", payload: newDate });
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
                    <div className="table-container">
                        <h2>Available Times</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {availableTimes.map((time, index) => (
                                    <tr key={index}>
                                        <td>{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingPage;