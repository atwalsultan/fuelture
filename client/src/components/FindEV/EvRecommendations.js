import EvRecommendation from "./EvRecommendation"

const EvRecommendations = ({ cars }) => {
    return (
        <div>
            <ul>
                {
                    cars.map(car => <li><EvRecommendation car={car} /></li>)
                }
            </ul>
        </div>
    )
}

export default EvRecommendations