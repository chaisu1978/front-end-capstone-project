import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

function ConfirmedBooking() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageTitle h1="Book a Table" h2="Booking Confirmed!" />
            <div className="container">
                <p>Thank you for reserving a table at Little Lemon. We look forward to serving you!</p>
                <Link to="/"><button>Back to Home</button></Link>
            </div>
        </>
    );
}

export default ConfirmedBooking;