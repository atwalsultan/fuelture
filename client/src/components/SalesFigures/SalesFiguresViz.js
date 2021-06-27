import { scaleLinear, extent } from "d3";
import { useRef, useEffect, useState } from "react";
import SalesFiguresLines from "./SalesFiguresLines";
import SalesFiguresPoints from "./SalesFiguresPoints";
import SalesFiguresXLabel from "./SalesFiguresXLabel";
import SalesFiguresXTicks from "./SalesFiguresXTicks";
import SalesFiguresYLabel from "./SalesFiguresYLabel";
import SalesFiguresYTicks from "./SalesFiguresYTicks";

const SalesFiguresViz = ({ salesFigures, province, type }) => {
  // Chart margins
  const margin = { top: 20, right: 18, bottom: 40, left: 85 };

  // Chart width
  const [width, setWidth] = useState(0);
  const innerWidth = width - margin.left - margin.right;

  // Chart height
  const [height, setHeight] = useState(0);
  const innerHeight = height - margin.bottom - margin.bottom;

  // Ref for SVG
  const salesFiguresRef = useRef(null);

  // Functions to get X and Y values from an object
  const xValue = (figure) => figure.REF_DATE % 2000;
  const yValue = (figure) => figure.VALUE / 1000;

  // Create X and Y scales
  const xScale = scaleLinear()
    .domain(
      extent(
        salesFigures.filter(
          (figure) =>
            figure["GEO"] === `${province}` &&
            figure["Vehicle type"] === `${type}`
        ),
        xValue
      )
    )
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(
      extent(
        salesFigures.filter(
          (figure) =>
            figure["GEO"] === `${province}` &&
            figure["Vehicle type"] === `${type}`
        ),
        yValue
      )
    )
    .range([innerHeight, 0])
    .nice();

  const fuelTypes = [
    "All fuel types",
    "Gasoline",
    "Diesel",
    "Battery electric",
    "Hybrid electric",
    "Plug-in hybrid",
    "Other fuel types",
  ];
  const colors = {
    "All fuel types": "blue",
    Gasoline: "red",
    Diesel: "orange",
    "Battery electric": "green",
    "Hybrid electric": "black",
    "Plug-in hybrid": "yellow",
    "Other fuel types": "brown",
  };

  // Update width and height initially
  useEffect(() => {
    setWidth(salesFiguresRef.current.clientWidth);
    setHeight(salesFiguresRef.current.clientHeight);
  }, []);

  // Update width and height on window resize
  useEffect(() => {
    let unmount = false;
    setWidth(salesFiguresRef.current.clientWidth);

    const handleResize = () => {
      if (!unmount) {
        setWidth(salesFiguresRef.current.clientWidth);
        setHeight(salesFiguresRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      unmount = true;
    };
  });

  return (
    <svg ref={salesFiguresRef}>
      <g transform={`translate(${margin.left}, 20)`}>
        <SalesFiguresXTicks
          xScale={xScale}
          innerHeight={innerHeight}
        ></SalesFiguresXTicks>
        <SalesFiguresYLabel innerHeight={innerHeight}></SalesFiguresYLabel>
        <SalesFiguresYTicks
          yScale={yScale}
          innerWidth={innerWidth}
        ></SalesFiguresYTicks>
        <SalesFiguresXLabel
          innerWidth={innerWidth}
          innerHeight={innerHeight}
        ></SalesFiguresXLabel>
        <SalesFiguresLines
          fuelTypes={fuelTypes}
          colors={colors}
          province={province}
          type={type}
          salesFigures={salesFigures}
          xValue={xValue}
          yValue={yValue}
          xScale={xScale}
          yScale={yScale}
        />
        <SalesFiguresPoints
          fuelTypes={fuelTypes}
          colors={colors}
          province={province}
          type={type}
          salesFigures={salesFigures}
          xValue={xValue}
          yValue={yValue}
          xScale={xScale}
          yScale={yScale}
        />
      </g>
    </svg>
  );
};

export default SalesFiguresViz;
