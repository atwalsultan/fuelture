import {Link, useLocation} from 'react-router-dom';

const Button = ({text, color, link}) => {
    return (
        <Link to={link ? link : ``}>
            <button style={{backgroundColor: `${color}`}}>{text}</button>
        </Link>
    )
}

export default Button
