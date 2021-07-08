import {Link} from 'react-router-dom';

const Button = ({text, link}) => {
    return (
        <Link to={link ? link : ``}>
            <button>{text}</button>
        </Link>
    )
}

export default Button
