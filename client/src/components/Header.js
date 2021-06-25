import {Link, useLocation} from 'react-router-dom';
import Logo from '../static/images/logo-light-bg.svg';

const Header = () => {
    const location = useLocation();

    return (
        <header className="site-header">
            <div>
                <Link to="/"><img src={Logo} alt="Fuelture Logo" /></Link>
            </div>

            <ul>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li><Link to="#">Stations</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    )
}

export default Header
