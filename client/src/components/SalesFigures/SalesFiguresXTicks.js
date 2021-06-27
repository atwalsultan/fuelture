const SalesFiguresXTicks = ({xScale, innerHeight}) => {
    return (
        xScale.ticks().map(tickValue => (
            <g
                key={tickValue}
                transform={`translate(${xScale(tickValue)},0)`}
            >
                <line y2={innerHeight} stroke="lightgray" />
                <text textAnchor="middle" dy="1.5em" y={innerHeight}>
                    {`'${tickValue}`}
                </text>
            </g>
        ))
    )
}

export default SalesFiguresXTicks
