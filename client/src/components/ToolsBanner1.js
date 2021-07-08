import Button from "./Button"

const ToolsBanner1 = () => {
    return (
        <div className="tools-banner">
            <img src="https://picsum.photos/400?random=2" alt="" />

            <div>
                <h2>Know the money you paid and the emissions your car produced</h2>
                <p>Based on the data entered, we will help you calculate annual fuel cost and emission.</p>
                <Button text="Let's figure it out"></Button>
            </div>
        </div>
    )
}

export default ToolsBanner1
