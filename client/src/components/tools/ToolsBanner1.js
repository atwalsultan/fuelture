import Illustration from '../../static/images/illustration-calculate.png';

const ToolsBanner1 = () => {
    return (
        <div className="tools-banner">
            <img src={Illustration} alt="Comparison tool illustration" className="banner-illustration-large-screen" />

            <div>
                <h2>Compare Costs and Emissions</h2>
                <p>Compare annual fuel costs and emissions of a gas car, a PHEV and a BEV</p>
                <img src={Illustration} alt="Comparison tool illustration" className="banner-illustration-small-screen" />
                <a href="#calculateCost"><button>Let's Figure It Out</button></a>
            </div>
        </div>
    )
}

export default ToolsBanner1
