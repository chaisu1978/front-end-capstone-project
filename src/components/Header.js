import Nav from './Nav';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <div className="light-gray-bg">
            <div className="container" role="banner">
                <header>
                    <img src={logo} alt="Little Lemon Logo" />
                    <Nav />
                </header>
            </div >
        </div>
    );
}

export default Header;
