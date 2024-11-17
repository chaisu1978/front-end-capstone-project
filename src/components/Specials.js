import bruchetta from '../assets/bruchetta.jpg';
import greekSalad from '../assets/greek_salad.jpg';
import lemonDessert from '../assets/lemon_dessert.jpg';
import deliveryIcon from '../assets/delivery.png';

function Specials() {
    return (
        <>
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
        </>);
}


export default Specials;