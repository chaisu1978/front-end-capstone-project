import headerImage from '../assets/home-header.jpg';
import { Link } from 'react-router-dom';


function CallToAction() {
    return (
        <div className="container-fluid hero">
            <div className="container">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We Are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button>Reserve a table</button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src={headerImage} alt="Hero" />
                </div>
            </div>
        </div>
    );
}


export default CallToAction;
