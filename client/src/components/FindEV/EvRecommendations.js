import EvRecommendation from "./EvRecommendation"
import evoxLogo from '../../static/images/evox-logo.jpeg'

const EvRecommendations = ({ cars }) => {
    return (
        <div>
            <ul>
                {
                    cars.map((car, index) => <li key={index}><EvRecommendation car={car} /></li>)
                }
            </ul>

            <footer className="recommendations-footer">
                <p>Partnered with</p>
                <div>
                    <img src={evoxLogo} alt="Evox Logo" />
                </div>
            </footer>
        </div>
    )
}

export default EvRecommendations
