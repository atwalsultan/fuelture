const SalesFiguresXLabel = ({innerWidth, innerHeight}) => {
    const xAxisLabel = 'Year';
    const xAxisLabelOffset = 50;
    
    return (
        <text
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
        >
            {xAxisLabel}
        </text>
    )
}

export default SalesFiguresXLabel
