import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';

function Chicago() {
    return (
        <div className="container-fluid about">
            <div className="container about-content">
                <div className="about-text">
                    <h2 className="about-h2">Little Lemon</h2>
                    <h3 className="about-h3">Chicago</h3>
                    <p>
                        We are a family-owned Mediterranean restaurant in Chicago, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <p>
                        We create delicious meals made from fresh, locally sourced ingredients.
                    </p>
                </div>
                <div className="about-images">
                    <img src={about2} alt="About Little Lemon 1" className="about-image" />
                    <img src={about1} alt="About Little Lemon 2" className="about-image overlay" />
                </div>
            </div>
        </div>
    )
}


export default Chicago;