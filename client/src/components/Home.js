import { useState, useEffect } from "react";
import ElectricVehicleIntro from "./ElectricVehicleIntro";
import MarketShare from "./MarketShare/MarketShare";
import HomeBanner from "./HomeBanner";
import TypesOfEvs from "./TypesOfEvs";
import EvIncentives from "./EvIncentives/EvIncentives";
import EvTimeline from "./EvTimeline/EvTimeline";
import ReadEvNews from "./ReadEvNews";
import FindAnEv from "./FindAnEv";
import SalesFigures from "./SalesFigures/SalesFigures";

const Home = () => {
	const [salesFigures, setSalesFigures] = useState([]);

	useEffect(() => {
		// Initially when the component renders the unmounted variable set to false.
		let unmounted = false;
		
		const getSalesFigures = async () => {

			// Fetch and set the state only when the component is mounted
			if (!unmounted) {
				const url = "/api/sales";
				const res = await fetch(url);
				const data = await res.json();
				
				setSalesFigures(data);
			}
		};

		getSalesFigures();

		// After this component gets unmounted unsubscribe any background calls.
		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<div>
			<HomeBanner></HomeBanner>
			<div className="page-content">
				<ElectricVehicleIntro />
				<TypesOfEvs />

				<div className="sales-share-projections-container">
					<SalesFigures salesFigures={salesFigures.filter(figure => (figure["Fuel type"] === "Battery electric" || figure["Fuel type"] === "Hybrid electric" || figure["Fuel type"] === "Plug-in hybrid electric") && figure["Vehicle type"] === "Total, vehicle type")} />
					<MarketShare salesFigures={salesFigures} />
				</div>
					
				
				<EvIncentives />
				<FindAnEv />
				<EvTimeline />
				<ReadEvNews />
			</div>
		</div>
	);
};

export default Home;
