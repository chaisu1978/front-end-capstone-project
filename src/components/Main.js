import headerImage from '../assets/home-header.jpg';
import bruchetta from '../assets/bruchetta.jpg';
import greekSalad from '../assets/greek_salad.jpg';
import lemonDessert from '../assets/lemon_dessert.jpg';
import jake from '../assets/jake.jpg';
import paul from '../assets/paul.jpg';
import susan from '../assets/susan.jpg';
import michael from '../assets/michael.jpg';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import deliveryIcon from '../assets/delivery.png';

function Main() {
    return (
        <main>
            <div className="container-fluid hero">
                <div className="container">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We Are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a table</button>
                    </div>
                    <div className="hero-image">
                        <img src={headerImage} alt="Hero" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='highlights-title'><h2 className="highlights-h2">Specials</h2>
                    <button>Online Menu</button>
                </div>

            </div>
            <div className="container highlights">
                <div className="highlight-item">
                    <img src={bruchetta} alt="Bruchetta" />
                    <div className='highlight-info'>
                        <h3>Bruchetta <span>$12.99</span></h3>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <p><a href="#order"><b>Order a delivery</b>&nbsp;&nbsp;<img src={deliveryIcon} alt="delivery icon" /></a></p>
                    </div>
                </div>
                <div className="highlight-item">
                    <img src={greekSalad} alt="Greek Salad" />
                    <div className='highlight-info'>
                        <h3>Greek Salad<span>$9.99</span></h3>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p><a href="#order"><b>Order a delivery</b>&nbsp;&nbsp;<img src={deliveryIcon} alt="delivery icon" /></a></p>
                    </div>
                </div>
                <div className="highlight-item">
                    <img src={lemonDessert} alt="Lemon Dessert" />
                    <div className='highlight-info'>
                        <h3>Lemon Dessert<span>$11.50</span></h3>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p><a href="#order"><b>Order a delivery</b>&nbsp;&nbsp;<img src={deliveryIcon} alt="delivery icon" /></a></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid light-gray-bg">
                <div className="container">
                    <h2 className="testimonials-h2">Testimonials</h2>
                </div>
                <div className="container testimonials">
                    <div className="testimonial-item">
                        <img src={jake} alt="Jake" />
                        <div className="testimonial-text">
                            <p className="testimonial-name">Jake</p>
                            <p className="testimonial-comment">"Amazing experience! The food was wonderful."</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={paul} alt="Paul" />
                        <div className="testimonial-text">
                            <p className="testimonial-name">Paul</p>
                            <p className="testimonial-comment">"Best restaurant in town, hands down!"</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={susan} alt="Susan" />
                        <div className="testimonial-text">
                            <p className="testimonial-name">Susan</p>
                            <p className="testimonial-comment">"A menu that makes you come back for more, every time."</p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={michael} alt="Michael" />
                        <div className="testimonial-text">
                            <p className="testimonial-name">Michael</p>
                            <p className="testimonial-comment">"Highly recommend if you're into incredible service."</p>
                        </div>
                    </div>
                </div>
            </div>
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
        </main >
    );
}

export default Main;
