import ToolsBanner1 from "./ToolsBanner1";
import ToolsBanner2 from "./ToolsBanner2";
import CalculateCost from "./CalculateCost";
import FindEv from "./FindEV/FindEv";

const Tools = () => {
	return (
		<div>
			<ToolsBanner1></ToolsBanner1>
			<div className="page-content">
				<CalculateCost></CalculateCost>
			</div>
			<ToolsBanner2></ToolsBanner2>
			<div className="page-content">
				<FindEv></FindEv>
			</div>
		</div>
	);
};

export default Tools;
