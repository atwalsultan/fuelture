const SalesFiguresYLabel = ({innerHeight}) => {
    const yAxisLabel = 'Sales (In Thousands)';
    const yAxisLabelOffset = 65;

    return (
        <text
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${innerHeight /
                2}) rotate(-90)`}
        >
            {yAxisLabel}
        </text>
    )
}

export default SalesFiguresYLabel
