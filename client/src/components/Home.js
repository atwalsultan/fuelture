import { useState, useEffect } from "react"

const Home = () => {

    const [salesFigures, setSalesFigures] = useState([])
    const [incentives, setIncentives] = useState([])

    const getSalesFigures = async () => {
        const url = "/api/sales"
        const res = await fetch(url);
        const data = await res.json();
        
        setSalesFigures(data);
    };

    const getIncentives = async () => {
        const url = "/api/incentives"
        const res = await fetch(url)
        const data = await res.json();

        setIncentives(data);
    }

    useEffect(() => {
        getSalesFigures();
        getIncentives();
    }, [])

    return (
        <div>
            <p>Home Component</p>
        </div>
    )
}

export default Home
