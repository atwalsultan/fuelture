import Illustration from '../static/images/illustration-landing.png'

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div>
                <h2>Everything You Need To Know About Electric Vehicles</h2>
                <p>Information, recommendation and comparison.</p>
                <a href="#evIntro"><button>Get Started</button></a>
            </div>

            <img src={Illustration} alt="Home banner illustration" />
        </div>
    )
}

export default HomeBanner
