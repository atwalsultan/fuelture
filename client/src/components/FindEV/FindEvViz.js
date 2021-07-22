import { useState, useEffect } from "react";
import EvRecommendations from "./EvRecommendations";

const FindEvViz = () => {
    const [specs, setSpecs] = useState([]);

    useEffect(() => {
        let unmounted = false;

        const getSpecs = async () => {
            if (!unmounted) {
                const response = await fetch("/api/specs");
                const fetchedSpecs = await response.json();
                setSpecs(fetchedSpecs);
            }
        };

        getSpecs();

        return () => {
            unmounted = true;
        };
    }, []);

    const [budget, setBudget] = useState(0);
    const [brand, setBrand] = useState([]);
    const [seats, setSeats] = useState(0);
    const [range, setRange] = useState(10000);
    const [style, setStyle] = useState([]);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        let brands = specs.map(spec => spec.Brand).filter((x, i, a) => a.indexOf(x) === i);
        setBrand(brands);

        let styles = specs.map(spec => spec.BodyStyle).filter((x, i, a) => a.indexOf(x) === i);
        setStyle(styles);
    }, [specs]);

    const submitHandler = (e) => {
        e.preventDefault();

        let newCars = specs.filter(spec => spec.PriceEuro <= budget && brand.includes(spec.Brand) && parseInt(spec.Seats) === seats && parseInt(spec.Range) >= range && style.includes(spec.BodyStyle));

        setCars(newCars);
    }
    
    const brandChange = (e) => {
        if(e.target.value === "Any") {
            let brands = specs.map(spec => spec.Brand).filter((x, i, a) => a.indexOf(x) === i);
            setBrand(brands);
        }
        else {
            setBrand([e.target.value])
        }
    }
    
    const styleChange = (e) => {
        if(e.target.value === "Any") {
            let styles = specs.map(spec => spec.BodyStyle).filter((x, i, a) => a.indexOf(x) === i);
            setStyle(styles);
        }
        else {
            setStyle([e.target.value]);
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <div>    
                        <label htmlFor="budget">Budget</label>
                        <input type="number" id="budget" min={specs.map(spec => spec.PriceEuro).reduce((a,b)=>Math.min(a,b), Infinity)} onChange={(e) => setBudget(e.target.value)} required/>
                    </div>

                    <div> 
                        <label htmlFor="brand">Brand</label>
                        <select name="brand" id="brand" onChange={brandChange} required>
                            <option value="Any">Any</option>
                            {
                                specs.map(spec => spec.Brand).filter((x, i, a) => a.indexOf(x) === i).map((brand, index) => <option key={index} value={brand}>{brand}</option>)
                            }
                        </select>
                    </div>

                    <div>    
                        <label htmlFor="seats">Seats</label>
                        <input type="number" id="seats" min={specs.map(spec => spec.Seats).reduce((a,b)=>Math.min(a,b), Infinity)} max={specs.map(spec => spec.Seats).reduce((a,b)=>Math.max(a,b), -Infinity)} onChange={(e) => setSeats(parseInt(e.target.value))} required />
                    </div>

                    <div>    
                        <label htmlFor="range">Range</label>
                        <input type="number" id="range" min={specs.map(spec => spec.Range).reduce((a,b)=>Math.min(a,b), Infinity)} max={specs.map(spec => spec.Range).reduce((a,b)=>Math.max(a,b), -Infinity)} onChange={(e) => setRange(parseInt(e.target.value))} required />
                    </div>

                    <div>    
                        <label htmlFor="style">Body Style</label>
                        <select name="style" id="style" onChange={styleChange} required>
                            <option value="Any">Any</option>
                            {
                                specs.map(spec => spec.BodyStyle).filter((x, i, a) => a.indexOf(x) === i).map((style, index) => <option key={index} value={style}>{style}</option>)
                            }
                        </select>
                    </div>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <EvRecommendations cars={cars}/>
        </div>
    )
}

export default FindEvViz
