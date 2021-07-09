import Button from "./Button"
import Illustration from '../static/images/illustration-recommend.png';

const ToolsBanner2 = () => {
    return (
        <div className="tools-banner">
            <img src={Illustration} alt="Recommendation tool illustration" />

            <div>
                <h2>Considering an EV? Try our recommendation tool</h2>
                <p>Tell us your preferences, we will give you recommendations.</p>
                <Button text="Find me an EV"></Button>
            </div>
        </div>
    )
}

export default ToolsBanner2
