import comparisonDesktop from '../static/images/comparison-desktop.jpg';
import comparisonMobile from '../static/images/comparison-mobile.jpg';

const CalculateCost = () => {
    return (
        <section id="calculateCost">
            <h2>Calculate your cost and emission</h2>
            <div>
                <img src={comparisonDesktop} alt="Comparison of EVs with a gas car" id="comparisonDesktop"/>
                <img src={comparisonMobile} alt="Comparison of EVs with a gas car" id="comparisonMobile" />
            </div>
        </section>
    )
}

export default CalculateCost
