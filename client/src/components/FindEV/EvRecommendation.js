import {useState} from 'react';

const EvRecommendation = ({ car }) => {
    const [details, setDetails] = useState(false);

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
                    <p>{car.PriceEuro}</p>
                </div>
                <div>
                    <p>Range</p>
                    <p>{car.Range}</p>
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

            <div className={`ev-additional-info${!details ? ' additional-info-hidden' : ''}`}>
                <div>
                    <div>
                        <p>Price</p>
                        <p>{car.PriceEuro}</p>
                    </div>

                    <div>
                        <p>Range</p>
                        <p>{car.Range}</p>
                    </div>

                    <div>
                        <p>Efficiency</p>
                        <p>{car.Efficiency}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Type</p>
                        <p>{car.Type}</p>
                    </div>

                    <div>
                        <p>Plug</p>
                        <p>{car.PlugType}</p>
                    </div>

                    <div>
                        <p>Battery</p>
                        <p>NA</p>
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
                        <p>{car.Segment}</p>
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
