const SalesFiguresYTicks = ({yScale, innerWidth}) => {
    return (
        yScale.ticks().map((tickValue, index) => (
            <g key={index} transform={`translate(0,${yScale(tickValue)})`}>
                <line x2={innerWidth} stroke="lightgray" />
                <text
                    key={tickValue}
                    textAnchor="end"
                    x={-3}
                    dx="-.75em"
                >
                    {tickValue}
                </text>
            </g>
        ))
    )
}

export default SalesFiguresYTicks
