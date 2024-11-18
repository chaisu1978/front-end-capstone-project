function BookingForm({
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes,
    handleSubmit,
}) {
    const isFormValid = date && time && guests >= 1 && guests <= 10 && occasion;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                aria-label="Choose a date for reservation"
                aria-describedby="date-description"
            />
            <p id="date-description">Select a date for your table reservation.</p>

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                aria-label="Choose a time for reservation"
                aria-describedby="time-description"
            >
                <option value="" disabled>-- Select Time --</option>
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <p id="time-description">Select a time for your table reservation.</p>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => {
                    const guestsValue = parseInt(e.target.value);
                    if (guestsValue >= 1 && guestsValue <= 10) {
                        setGuests(guestsValue);
                    }
                }
                }
                required
                aria-label="Number of guests"
                aria-describedby="guests-description"
            />
            <p id="guests-description">Enter the number of guests for the reservation. <span>Minimum 1, maximum 10.</span></p>

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-label="Select the occasion"
                aria-describedby="occasion-description"
            >
                <option value="" disabled>-- Select Occasion --</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <p id="occasion-description">Select the occasion for the reservation.</p>

            <button
                type="submit"
                aria-label="Submit your reservation"
                disabled={!isFormValid}
            >
                Make Your Reservation
            </button>
        </form>
    );
}

export default BookingForm;
