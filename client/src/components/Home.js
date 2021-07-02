import { useState, useEffect } from "react";
import ElectricVehicleIntro from "./ElectricVehicleIntro";
import MarketShare from "./MarketShare/MarketShare";
import HomeBanner from "./HomeBanner";
import TypesOfEvs from "./TypesOfEvs";
import EvIncentives from "./EvIncentives/EvIncentives";
import EvTimeline from "./EvTimeline";
import ReadEvNews from "./ReadEvNews";
import FindAnEv from "./FindAnEv";
import SalesFigures from "./SalesFigures/SalesFigures";

const Home = () => {
	const [salesFigures, setSalesFigures] = useState([]);
	const [incentives, setIncentives] = useState([]);

	useEffect(() => {
		// Initially when the component renders the unmounted variable set to false.
		let unmounted = false;
		const getIncentives = async () => {
			const url = "/api/incentives";
			const res = await fetch(url);
			const data = await res.json();
			//   set the state only when the component is mounted
			if (!unmounted) {
				setIncentives(data);
			}
		};
		
		const getSalesFigures = async () => {
			const url = "/api/sales";
			const res = await fetch(url);
			const data = await res.json();
			if (!unmounted) {
				// set the state only when the component is mounted
				setSalesFigures(data);
			}
		};

		getSalesFigures();
		getIncentives();
		// After this component gets unmounted unsubscribe any background calls.
		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<div>
			<HomeBanner></HomeBanner>
			<div className="page-content">
				<ElectricVehicleIntro></ElectricVehicleIntro>
				<TypesOfEvs></TypesOfEvs>
				<SalesFigures salesFigures={salesFigures}></SalesFigures>
				<MarketShare salesFigures={salesFigures}></MarketShare>
				<EvIncentives></EvIncentives>
				<FindAnEv></FindAnEv>
				<EvTimeline></EvTimeline>
				<ReadEvNews></ReadEvNews>
			</div>
		</div>
	);
};

export default Home;
