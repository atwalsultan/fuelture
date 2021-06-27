import { line, curveNatural } from 'd3';

const SalesFiguresLines = ({fuelTypes, colors, province, type, xScale, xValue, yScale, yValue, salesFigures}) => {
    return (
        <g>
            {
                fuelTypes.map((fuelType, index) => {
                    return (
                        <path key={index} strokeLinecap="round" strokeLinejoin="round" fill="none" stroke={colors[fuelType]} d={line().x(d => xScale(xValue(d))).y(d => yScale(yValue(d))).curve(curveNatural)(salesFigures.filter(figure => figure["Fuel type"] === `${fuelType}` && figure["GEO"] === `${province}` && figure["Vehicle type"] === `${type}`))} />
                    )
                })
            }
        </g>
    )
}

export default SalesFiguresLines
