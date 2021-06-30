import { select, easeLinear } from 'd3';
import { useRef, useEffect, useState } from 'react';

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

const MarketShareViz = ({ salesFigures }) => {

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
    const [year, setYear] = useState(2011);

    useEffect(() => {
        if(!dimensions) return;

        // Set coordinates
        let arr = [];
        for(let i=0; i < dimensions.width - 10; i+=15) {
            for(let j=10; j < dimensions.height - 10; j+=15) {
                arr.push({
                    x: i,
                    y: j
                })
            }
        }
        setDataTest(arr);

        // Select SVG for chart
        const svg = select(marketShareRef.current);

        svg.selectAll("circle")
            .data(dataTest)
            .join("circle")
            .attr("r", 5)
            // .transition()
            // .duration(500)
            // .ease(easeLinear)
            .attr("cx", value => value.x)
            .attr("cy", value => value.y)
            .attr("stroke", "red")
            .attr("fill", "none");

        if (salesFigures.length === 0) return

        let proportion = yearData[year]["electric"] / yearData[year]["total"];
        let numCars = svg.selectAll("circle").size();
        let proportionNumCars = Math.round(proportion * numCars);

        // Change color of proportionNumCars
        for (let i=0; i<proportionNumCars; i++) {
            let randCar = Math.floor(Math.random() * numCars) + 1;
            svg.select(`circle:nth-child(${randCar})`)
                .attr("stroke", "blue")
                .attr("fill", "blue");
        }

    }, [salesFigures, year, dimensions])

    useEffect(() => {
        // Return if dimensions are not accessible
        if (!dimensions) return;
        
        const interval = setInterval(() => {
            setDataTest(dataTest => dataTest.map(coords => ({x: coords["x"] < dimensions.width ? coords["x"] + 5 : 10, y: coords["y"]})));
            console.log(1);
        }, 100);

        return () => clearInterval(interval);

    }, [salesFigures]);

    useEffect(() => {
        const svg = select(marketShareRef.current);

        svg.selectAll("circle")
            .data(dataTest)
            // .transition()
            // .duration(500)
            // .ease(easeLinear)
            .attr("cx", value => value.x)
    }, [dataTest])

    return (
        <div ref={wrapperRef}>
            <select onChange={(e) => setYear(parseInt(e.target.value))}>
                {
                    Object.keys(yearData).map(year => <option value={year}>{year}</option>)
                }
            </select>
            <svg ref={marketShareRef}>
            </svg>
        </div>
    )
}

export default MarketShareViz
