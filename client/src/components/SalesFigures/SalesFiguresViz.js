import { scaleLinear, extent, select, line, curveNatural, axisBottom, axisLeft } from "d3";
import { useRef, useEffect, useState } from "react";
import SalesFiguresFilters from './SalesFiguresFilters';
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

const SalesFiguresViz = ({ salesFigures, province, type, setProvince, setType }) => {
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
        "All fuel types",
        "Gasoline",
        "Diesel",
        "Battery electric",
        "Hybrid electric",
        "Plug-in hybrid electric",
        "Other fuel types",
    ];

    // Mapping fuel types to colors
    const colors = {
        "All fuel types": "blue",
        Gasoline: "red",
        Diesel: "orange",
        "Battery electric": "green",
        "Hybrid electric": "black",
        "Plug-in hybrid electric": "yellow",
        "Other fuel types": "brown",
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
                            figure["GEO"] === `${province}` &&
                            figure["Vehicle type"] === `${type}`
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
                            figure["GEO"] === `${province}` &&
                            figure["Vehicle type"] === `${type}`
                    ),
                    yValue
                )
            )
            .range([dimensions.height, 0])
            .nice();

        // Plot points
        svg.selectAll("circle")
            .data(salesFigures.filter(figure => figure["GEO"] === `${province}` && figure["Vehicle type"] === `${type}`))
            .join("circle")
            .attr("r", 5)
            .attr("cx", value => xScale(xValue(value)))
            .attr("cy", value => yScale(yValue(value)))
            .attr("stroke", value => colors[value["Fuel type"]])
            .attr("fill", "none");

        
        // Plot lines
        const myLine = line().x(d => xScale(xValue(d))).y(d => yScale(yValue(d))).curve(curveNatural)
        svg.selectAll(".line")
            .data(
                fuelTypes.map(fuelType => {
                    return salesFigures.filter(figure => figure["GEO"] === `${province}` && figure["Vehicle type"] === `${type}` && figure["Fuel type"] === `${fuelType}`)
                }))
            .join("path")
            .attr("class", "line")
            .attr("d", myLine)
            .attr("fill", "none")
            .attr("stroke", value => value.length > 0 && colors[value[0]["Fuel type"]]);

        // Plot X Axis
        const xAxis = axisBottom(xScale).ticks().tickFormat(year => `'${year}`).tickSize(-dimensions.height).tickPadding(12);
        svg.select(".x-axis")
            .style("transform", `translateY(${dimensions.height}px)`)
            .call(xAxis);

        // Plot Y Axis
        const yAxis = axisLeft(yScale).tickSize(-dimensions.width).tickPadding(10);
        svg.select(".y-axis")
            .call(yAxis);

        // X Axis label
        svg.select(".x-label")
            .join("text")
            .attr('text-anchor', 'middle')
            .attr("y", dimensions.height + 40)
            .attr("x", dimensions.width / 2)
            .text("Year (2K)");

        // Y Axis label
        svg.select(".y-label")
            .join("text")
            .attr('text-anchor', 'middle')
            .attr("transform", `translate(${-40},${dimensions.height /2}) rotate(-90)`)
            .text("Sales (In Thousands)");

    }, [salesFigures, province, type, dimensions])

    return (
        <div ref={wrapperRef}>
            <SalesFiguresFilters setProvince={setProvince} setType={setType}></SalesFiguresFilters>
            <svg ref={salesFiguresRef}>
                <g className="x-axis"></g>
                <g className="y-axis"></g>
                <text className="x-label"></text>
                <text className="y-label"></text>
            </svg>
        </div>
    );
};

export default SalesFiguresViz;
