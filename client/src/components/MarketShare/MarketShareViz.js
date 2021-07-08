import { select } from 'd3';
import { useRef, useEffect, useState } from 'react';
import MarketShareFilter from './MarketShareFilter';

// Custom hook for responsive chart
const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setDimensions(entry.contentRect);
            });
        });
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget);
        };
    }, [ref]);

    return dimensions;
};

const MarketShareViz = ({ salesFigures, order }) => {

    // Refs for wrapper and chart
    const wrapperRef = useRef(null);
    const marketShareRef = useRef(null);

    // For responsive chart
    const dimensions = useResizeObserver(wrapperRef);

    // Filter sales figures to only contain relevant data
    const data = salesFigures.filter(figure => figure.GEO === "Canada" && figure["Vehicle type"] === "Total, vehicle type" && figure["Fuel type"] !== "Gasoline" && figure["Fuel type"] !== "Diesel" && figure["Fuel type"] !== "Other fuel types");
        
    // Restructure data by year. For each year, add figures about total sales and EV sales (will be used to calculate proportion) 
    let yearData = {};
    data.map(figure => {
        if (!yearData.hasOwnProperty(figure.REF_DATE)) {
            if (figure["Fuel type"] === "All fuel types") {
                yearData[figure.REF_DATE] = {
                    total: parseInt(figure.VALUE),
                    electric: 0
                }
            }
            else {
                yearData[figure.REF_DATE] = {
                    total: 0,
                    electric: parseInt(figure.VALUE)
                }
            }
        }
        else {
            if (figure["Fuel type"] === "All fuel types") {
                yearData[figure.REF_DATE]["total"] = parseInt(figure.VALUE);
            }
            else {
                yearData[figure.REF_DATE]["electric"] += parseInt(figure.VALUE);
            }
        }
    });

    // const [yearlyData, setYearlyData] = useState({});
    const [dataTest, setDataTest] = useState([]);
    const [year, setYear] = useState(order === "ascending" ? 2011 : 2020);

    // Interval to move cars
    let animationInterval = null;

    // Everytime sales figures, year or parent container dimensions change
    useEffect(() => {
        // If dimensions are not yet accessible
        if(!dimensions) return;

        // Create coordinates for each car according to parent container size (number of cars depends on parent container size)
        let arr = [];
        for(let i=0; i < dimensions.width - 10; i+=15) {
            for(let j=10; j < dimensions.height - 10; j+=15) {
                arr.push({
                    x: i,
                    y: j
                })
            }
        }

        // Set new coordinates
        setDataTest(arr);

        // Select SVG for chart
        const svg = select(marketShareRef.current);

        // Display cars initially
        svg.selectAll("circle")
            .data(dataTest)
            .join("circle")
            .attr("r", 5)
            .attr("cx", value => value.x)
            .attr("cy", value => value.y)
            .attr("stroke", "red")
            .attr("fill", "none");

        // If sales figures are not yet accessible
        if (salesFigures.length === 0) return

        // Calculate proportion of EVs out of total cars
        let proportion = yearData[year]["electric"] / yearData[year]["total"];
        let numCars = svg.selectAll("circle").size();
        let proportionNumCars = Math.round(proportion * numCars);

        // Change color of EVs
        for (let i=0; i<proportionNumCars; i++) {
            let randCar = Math.floor(Math.random() * numCars) + 1;
            svg.select(`circle:nth-child(${randCar})`)
                .attr("stroke", "blue")
                .attr("fill", "blue");
        }

        // If animation interval previously existed
        if(animationInterval) clearInterval(animationInterval);

        // Create new animation interval
        animationInterval = setInterval(() => {
            setDataTest(dataTest => dataTest.map(coords => ({x: coords["x"] < dimensions.width ? coords["x"] + 5 : 0, y: coords["y"]})));
        }, 100);

        // Clear animation interval when component dismounts
        return () => clearInterval(animationInterval);

    }, [salesFigures, year, dimensions])

    // Every time co-ordinates change
    useEffect(() => {
        // Select chart
        const svg = select(marketShareRef.current);

        // Update co-ordinate of each car
        svg.selectAll("circle")
            .data(dataTest)
            .attr("cx", value => value.x)
    }, [dataTest])

    return (
        <div>
            <MarketShareFilter setYear={setYear} yearData={yearData} order={order}></MarketShareFilter>
            <div ref={wrapperRef}>
                <svg ref={marketShareRef}></svg>
            </div>
        </div>
    )
}

export default MarketShareViz
