import { useState, useEffect } from "react"
import ElectricVehicleIntro from "./ElectricVehicleIntro"
import EvMarket from "./EvMarket"
import HomeBanner from "./HomeBanner"
import TypesOfEvs from "./TypesOfEvs"
import EvIncentives from "./EvIncentives"
import EvTimeline from "./EvTimeline"
import ReadEvNews from "./ReadEvNews"
import FindAnEv from "./FindAnEv"

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
            <HomeBanner></HomeBanner>
            <div className="page-content">
                <ElectricVehicleIntro></ElectricVehicleIntro>
                <TypesOfEvs></TypesOfEvs>
                <EvMarket></EvMarket>
                <EvIncentives></EvIncentives>
                <FindAnEv></FindAnEv>
                <EvTimeline></EvTimeline>
                <ReadEvNews></ReadEvNews>
            </div>
        </div>
    )
}

export default Home
