import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../static/images/logo-dark-bg.svg';
import HamburgerIcon from '../static/images/hamburger-icon.svg';
import CloseIcon from '../static/images/close-icon.svg';

const Header = () => {
    const location = useLocation();

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className={`site-header-small-screen${menu ? '' : ' hidden'}`}>
                <nav>
                    <ul>
                        <li className={location.pathname === "/news" ? 'active-page' : ''}><Link to="/news">News</Link></li>
                        <li className={location.pathname === "/tools" ? 'active-page' : ''}><Link to="/tools">Tools</Link></li>
                        <li className={location.pathname === "/stations" ? 'active-page' : ''}><Link to="/stations">Stations</Link></li>
                        <li className={location.pathname === "/about" ? 'active-page' : ''}><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>

            <header className="site-header">
                <div>
                    <Link to="/"><img src={Logo} alt="Fuelture Logo" /></Link>
                </div>

                {menu ? <img src={CloseIcon} alt="Close Icon" className="close-icon" onClick={() => setMenu(false)} /> : <img src={HamburgerIcon} alt="Menu Icon" className="hamburger-icon" onClick={() => setMenu(true)} />}

                <ul>
                    <li className={location.pathname === "/news" ? 'active-page' : ''}><Link to="/news">News</Link></li>
                    <li className={location.pathname === "/tools" ? 'active-page' : ''}><Link to="/tools">Tools</Link></li>
                    <li className={location.pathname === "/stations" ? 'active-page' : ''}><Link to="/stations">Stations</Link></li>
                    <li className={location.pathname === "/about" ? 'active-page' : ''}><Link to="/about">About</Link></li>
                </ul>
            </header>
        </>
    )
}

export default Header
