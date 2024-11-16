import logo from '../assets/logo-bot.png';

function Footer() {
    return (
        <div className="dark-gray-bg">
            <div className="container">
                <footer>
                    <img src={logo} alt="Little Lemon Logo" />
                    <div><p><b>Navigation</b></p>
                        <p><a href="#home">Home</a></p>
                        <p><a href="#about">About</a></p>
                        <p><a href="#menu">Menu</a></p>
                        <p><a href="#reservations">Reservations</a></p>
                        <p><a href="#order-online">Order Online</a></p>
                        <p><a href="#login">Login</a></p>
                    </div>
                    <address><p><b>Contact</b></p>
                        3152 Point Street<br />
                        Chicago<br />
                        Illinois<br />
                        60654<br />
                        773-857-2696<br />
                        <a href="info@littlelemon.com">info@littlelemon.com</a>
                    </address>
                    <div><p><b>Social Media</b></p>
                        <p><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></p>
                        <p><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></p>
                        <p><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></p>
                    </div>
                </footer>
            </div >
        </div >
    );
}

export default Footer;
