import Button from "./Button"

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div>
                <h2>Everything You Need To Know About Electric Vehicles</h2>
                <p>Information, recommendation and comparison.</p>
                <Button text="Get Started"></Button>
            </div>

            <img src="https://picsum.photos/400?random=2" alt="" />
        </div>
    )
}

export default HomeBanner
