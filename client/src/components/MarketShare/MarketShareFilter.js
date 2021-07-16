const MarketShareFilter = ({ setYear, yearData, order }) => {
    return (
        <select onChange={(e) => setYear(parseInt(e.target.value))}>
            {
                Object.keys(yearData).sort((a, b) => {
                    if(order === "ascending") return a - b;
                    else return b - a;
                }).map((year, index) => <option key={index} value={year}>{year}</option>)
            }
        </select>
    )
}

export default MarketShareFilter
