import Button from "./Button"

const ToolsBanner2 = () => {
    return (
        <div className="tools-banner">
            <img src="https://picsum.photos/400?random=2" alt="" />

            <div>
                <h2>Considering an EV? Try our recommendation tool</h2>
                <p>Tell us your preferences, we will give you recommendations.</p>
                <Button text="Find me an EV"></Button>
            </div>
        </div>
    )
}

export default ToolsBanner2
