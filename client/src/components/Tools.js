import { useState, useEffect } from "react";
import ToolsBanner1 from "./ToolsBanner1";
import ToolsBanner2 from "./ToolsBanner2";
import CalculateCost from "./CalculateCost";
import FindEv from "./FindEv";

const Tools = () => {
  const [specs, setSpecs] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const getSpecs = async () => {
      const response = await fetch("/api/specs");
      const fetchedSpecs = await response.json();
      if (unmounted) {
        setSpecs(fetchedSpecs);
      }
    };
    const getPrices = async () => {
      const response = await fetch("/api/prices");
      const fetchedPrices = await response.json();
      if (unmounted) {
        setPrices(fetchedPrices);
      }
    };
    getSpecs();
    getPrices();
    return () => {
      unmounted = true;
    };
  }, []);

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
