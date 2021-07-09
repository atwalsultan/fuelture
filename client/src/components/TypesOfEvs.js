import BEV from '../static/images/illustration-BEV.png';
import HEV from '../static/images/illustration-HEV.png';
import PHEV from '../static/images/illustration-PHEV.png';

const TypesOfEvs = () => {
    const types = [
        {
            title: "Battery EV (BEVs)",
            description: "Powered solely by an electric battery, with no gas engine parts. Most BEVs are capable of fast charging and L2 charging.",
            image: BEV
        },
        {
            title: "Plug-In-Hybrid EV (PHEVs)",
            description: "Similar to a Hybrid, but with a larger battery and electric motor. Has a gas tank and a charging port.",
            image: PHEV
        },
        {
            title: "Hybrid EV (HEVs)",
            description: "Low-emission vehicles that use an electric motor to assist gas-powered engines. All energy comes from gasoline.",
            image: HEV
        }
    ]

    return (
        <section id="typesOfEvs">
            <h2>Types of Electric Vehicles</h2>
            <ul className="ev-types">
                {
                    types.map((type, index) => {
                        return (
                            <li key={index}>
                                <img src={type.image} alt="" />
                                <p>{type.title}</p>
                                <p>{type.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default TypesOfEvs
