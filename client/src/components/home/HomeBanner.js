import Illustration from '../../static/images/illustration-landing.png'

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div>
                <h2>Everything You Need To Know About Electric Vehicles</h2>
                <p>Information, recommendations and comparisons.</p>
                <img src={Illustration} alt="Home banner illustration" className="banner-illustration-small-screen"/>
                <a href="#evIntro"><button>Get Started</button></a>
            </div>

            <img src={Illustration} alt="Home banner illustration" className="banner-illustration-large-screen"/>
        </div>
    )
}

export default HomeBanner
