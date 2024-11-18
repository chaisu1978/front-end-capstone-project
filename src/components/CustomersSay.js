import jake from '../assets/jake.jpg';
import paul from '../assets/paul.jpg';
import susan from '../assets/susan.jpg';
import michael from '../assets/michael.jpg';


function CustomersSay() {
    return (
        <div className="container-fluid light-gray-bg">
            <div className="container">
                <h2 className="testimonials-h2">Testimonials</h2>
            </div>
            <div className="container testimonials">
                <article className="testimonial-item">
                    <img src={jake} alt="Jake" />
                    <div className="testimonial-text">
                        <p className="testimonial-name">Jake</p>
                        <p className="testimonial-comment">"Amazing experience! The food was wonderful."</p>
                    </div>
                </article>
                <article className="testimonial-item">
                    <img src={paul} alt="Paul" />
                    <div className="testimonial-text">
                        <p className="testimonial-name">Paul</p>
                        <p className="testimonial-comment">"Best restaurant in town, hands down!"</p>
                    </div>
                </article>
                <article className="testimonial-item">
                    <img src={susan} alt="Susan" />
                    <div className="testimonial-text">
                        <p className="testimonial-name">Susan</p>
                        <p className="testimonial-comment">"A menu that makes you come back for more, every time."</p>
                    </div>
                </article>
                <article className="testimonial-item">
                    <img src={michael} alt="Michael" />
                    <div className="testimonial-text">
                        <p className="testimonial-name">Michael</p>
                        <p className="testimonial-comment">"Highly recommend if you're into incredible service."</p>
                    </div>
                </article>
            </div>
        </div>
    );
}


export default CustomersSay;