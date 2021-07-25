import { scaleLinear, extent, select, line, axisBottom, axisLeft, easeLinear } from "d3";
import { useRef, useEffect, useState } from "react";
import SalesFiguresFilters from './SalesFiguresFilters';
import SalesFiguresLegend from "./SalesFiguresLegend";
// import ResizeObserver from "resize-observer-polyfill"; // npm install resize-observer-polyfill

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

const SalesFiguresViz = ({ salesFigures, province, setProvince }) => {
    // Refs for SVG
    const salesFiguresRef = useRef(null);
    const wrapperRef = useRef(null);

    // For responsive chart
    const dimensions = useResizeObserver(wrapperRef);

    // Functions to get X and Y values from an object
    const xValue = (figure) => figure.REF_DATE % 2000;
    const yValue = (figure) => figure.VALUE / 1000;

    // Fuel types
    const fuelTypes = [
        "Battery electric",
        "Hybrid electric",
        "Plug-in hybrid electric",
    ];

    // Mapping fuel types to colors
    const colors = {
        "Battery electric": "#bdd237",
        "Hybrid electric": "#6e7542",
        "Plug-in hybrid electric": "#42b0f5",
    };

    useEffect(() => {
        // Select SVG for chart
        const svg = select(salesFiguresRef.current);

        // Return if dimensions are not accessible
        if (!dimensions) return;

        // Create X and Y scales
        const xScale = scaleLinear()
            .domain(
                extent(
                    salesFigures.filter(
                        (figure) =>
                            figure["GEO"] === `${province}`
                    ),
                    xValue
                )
            )
            .range([0, dimensions.width])
            .nice();

        const yScale = scaleLinear()
            .domain(
                extent(
                    salesFigures.filter(
                        (figure) =>
                            figure["GEO"] === `${province}`
                    ),
                    yValue
                )
            )
            .range([dimensions.height, 0])
            .nice();

        // Plot points
        let points = svg.selectAll("circle")
            .data(salesFigures.filter(figure => figure["GEO"] === `${province}`))
            .join("circle")
            .attr("r", 5)
            .attr("cx", value => xScale(xValue(value)))
            .attr("cy", value => yScale(yValue(value)))
            .attr("stroke", value => colors[value["Fuel type"]])
            .attr("fill", value => colors[value["Fuel type"]])
            .style("opacity", 0);
            
        points.transition()
        .delay(500)
        .duration(500)
        .style("opacity", 1);
        
        points.on("mouseover", (e) => {
            svg.append("text")
                .text(e.target.__data__.VALUE)
                .attr('class', 'tooltip')
                .style("font-size","16px")
                .attr("x", e.offsetX)
                .attr("y", e.offsetY - 10)
                .attr('fill', 'white');
        })                  
        .on("mouseout", () => {
            svg.selectAll(".tooltip").remove();
        });
        
        // Plot lines
        const myLine = line().x(d => xScale(xValue(d))).y(d => yScale(yValue(d)))
        svg.selectAll(".line")
            .data(fuelTypes.map(fuelType => salesFigures.filter(figure => figure["GEO"] === `${province}` && figure["Fuel type"] === `${fuelType}`)))
            .join("path")
            .attr("class", "line")
            .transition() // Call Transition Method
            .duration(500) // Set Duration timing (ms)
            .ease(easeLinear) // Set Easing option
            .attr("d", myLine)
            .attr("fill", "none")
            .attr("stroke", value => value.length > 0 && colors[value[0]["Fuel type"]]);

        // Plot X Axis
        const xAxis = axisBottom(xScale).ticks().tickFormat(year => `'${year}`).tickSize(-dimensions.height).tickPadding(12);
        svg.select(".x-axis")
            .style("transform", `translateY(${dimensions.height}px)`)
            .call(xAxis);

        // Plot Y Axis
        const yAxis = axisLeft(yScale).ticks().tickFormat(sales => `${sales}K`).tickSize(-dimensions.width).tickPadding(10);
        svg.select(".y-axis")
            .call(yAxis);

        // X Axis label
        svg.select(".x-label")
            .join("text")
            .attr('text-anchor', 'middle')
            .attr("y", dimensions.height + 40)
            .attr("x", dimensions.width / 2)
            .text("Year");

        // Y Axis label
        svg.select(".y-label")
            .join("text")
            .attr('text-anchor', 'middle')
            .attr("transform", `translate(${-40},${dimensions.height /2}) rotate(-90)`)
            .text("Sales");

    }, [salesFigures, province, dimensions])

    return (
        <div>
            <div className="filters-legend">
                <SalesFiguresFilters setProvince={setProvince}></SalesFiguresFilters>
                <SalesFiguresLegend type="large-screen-filters"></SalesFiguresLegend>
            </div>

            <div ref={wrapperRef} className="viz">
                <svg ref={salesFiguresRef}>
                    <g className="x-axis"></g>
                    <g className="y-axis"></g>
                    <text className="x-label"></text>
                    <text className="y-label"></text>
                </svg>
            </div>

            <SalesFiguresLegend type="small-screen-filters"></SalesFiguresLegend>
            
        </div>
    );
};

export default SalesFiguresViz;
