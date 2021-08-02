import {useState} from 'react';

const EvRecommendation = ({ car }) => {
    const [details, setDetails] = useState(false);

    const colors = {
        "BEV": "#bdd237",
        "PHEV": "rgb(66, 176, 245)",
        "HEV": "rgb(110, 117, 66"
    }

    return (
        <div className="ev-recommendation">
            <div className="ev-brand-model" onClick={() => setDetails(!details)}>
                <p>{car.Brand}</p>
                <p>{car.Model}</p>
            </div>

            <div className="ev-image" onClick={() => setDetails(!details)}>
                <img alt={`${car.Brand} ${car.Model}`} src={car.Image}/>
            </div>

            <div className="ev-price-range">
                <div>
                    <p>Price</p>
                    <p>${car.Price}</p>
                </div>
                <div>
                    <p>Range</p>
                    <p>{car.Range} km</p>
                </div>
            </div>

            <div className="ev-type-seats-drivetrain" onClick={() => setDetails(!details)}>
                <div>
                    <p>Type</p>
                    <p>{car.Type}</p>
                </div>
                <div>
                    <p>Seats</p>
                    <p>{car.Seats}</p>
                </div>
                <div>
                    <p>Drivetrain</p>
                    <p>{car.PowerTrain}</p>
                </div>
            </div>

            <div className={`ev-additional-info${!details ? ' additional-info-hidden' : ''}`} style={{borderTop: `8px solid ${colors[car.Type]}`}}>
                <div>
                    <div>
                        <p>Price</p>
                        <p>{car.Price}</p>
                    </div>

                    <div>
                        <p>Range</p>
                        <p>{car.Range}</p>
                    </div>

                    <div>
                        <p>Efficiency</p>
                        <p>{car.Efficiency ? car.Efficiency : '- -'}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Type</p>
                        <p>{car.Type}</p>
                    </div>

                    <div>
                        <p>Plug</p>
                        <p>{car.PlugType ? car.PlugType : '- -'}</p>
                    </div>

                    <div>
                        <p>Battery</p>
                        <p>- -</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Seats</p>
                        <p>{car.Seats}</p>
                    </div>

                    <div>
                        <p>Style</p>
                        <p>{car.BodyStyle}</p>
                    </div>

                    <div>
                        <p>Top Speed</p>
                        <p>{car.TopSpeed}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Segment</p>
                        <p>{car.Segment ? car.Segment : '- -'}</p>
                    </div>

                    <div>
                        <p>Accel.</p>
                        <p>{car.Accel}</p>
                    </div>

                    <div>
                        <p>Drivetrain</p>
                        <p>{car.PowerTrain}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvRecommendation
