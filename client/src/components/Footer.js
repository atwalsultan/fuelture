import {Link, useLocation} from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer>
            <ul>
                {location.pathname !== "/" && <Link to="/">Home</Link>}
                {location.pathname !== "/articles" && <Link to="/articles">Articles</Link>}
                {location.pathname !== "/tools" && <Link to="/tools">Tools</Link>}
                {location.pathname !== "/about" && <Link to="/about">About</Link>}
            </ul>
        </footer>
    )
}

export default Footer
