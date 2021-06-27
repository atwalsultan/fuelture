const SalesFiguresPoints = ({fuelTypes, colors, province, type, xScale, xValue, yScale, yValue, salesFigures}) => {
    return (
        <g>
            {
                fuelTypes.map((fuelType) => {
                    return (
                        salesFigures.filter(figure => figure["Fuel type"] === `${fuelType}` && figure["GEO"] === `${province}` && figure["Vehicle type"] === `${type}`).map((figure, index) => <circle key={index} cx={xScale(xValue(figure))} cy={yScale(yValue(figure))} r={5} stroke={colors[fuelType]} fill="none" />)
                    )
                })
            }
        </g>
    )
}

export default SalesFiguresPoints
