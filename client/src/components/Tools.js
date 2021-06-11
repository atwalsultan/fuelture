import { useState, useEffect } from "react";

const Tools = () => {
  const [specs, setSpecs] = useState([]);
  const [prices, setPrices] = useState([]);

  const getSpecs = async () => {
    const response = await fetch("/api/specs");
    const fetchedSpecs = await response.json();

    setSpecs(fetchedSpecs);
  };
  const getPrices = async () => {
    const response = await fetch("/api/prices");
    const fetchedPrices = await response.json();

    setPrices(fetchedPrices);
  };

  useEffect(() => {
    getSpecs();
    getPrices();
  }, []);

  return <div>Tools Component</div>;
};

export default Tools;
