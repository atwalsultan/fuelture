import { useState, useEffect } from "react"

const Home = () => {

    const [salesFigures, setSalesFigures] = useState([])

    const getSalesFigures = async () => {
        const url = "/api/sales"
        const res = await fetch(url);
        const data = await res.json();
        setSalesFigures(data);
    };

    useEffect(() => {
        getSalesFigures();
    }, [])

    return (
        <div>
            <p>Home Component</p>
        </div>
    )
}

export default Home
