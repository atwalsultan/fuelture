import comparisonDesktop from '../../static/images/comparison-desktop.png';
import comparisonMobile from '../../static/images/comparison-mobile.png';

const CalculateCost = () => {
    return (
        <section id="calculateCost">
            <h2>Compare fuel costs & emissions</h2>
            <div>
                <img src={comparisonDesktop} alt="Comparison of EVs with a gas car" id="comparisonDesktop"/>
                <img src={comparisonMobile} alt="Comparison of EVs with a gas car" id="comparisonMobile" />
            </div>
        </section>
    )
}

export default CalculateCost
