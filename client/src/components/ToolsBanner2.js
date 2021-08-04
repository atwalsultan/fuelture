import Illustration from '../static/images/illustration-recommend.png';

const ToolsBanner2 = () => {
    return (
        <div className="tools-banner">
            <img src={Illustration} alt="Recommendation tool illustration" className="banner-illustration-large-screen"/>

            <div>
                <h2>Considering an EV? Try our recommendation tool</h2>
                <p>Tell us your preferences, we'll give you recommendations.</p>
                <img src={Illustration} alt="Recommendation tool illustration" className="banner-illustration-small-screen"/>
                <a href="#findEv"><button>Find Me An EV</button></a>
            </div>
        </div>
    )
}

export default ToolsBanner2
