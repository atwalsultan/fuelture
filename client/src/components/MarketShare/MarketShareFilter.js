const MarketShareFilter = ({ setYear, yearData, order }) => {
    return (
        <div id="shareYearFilter">
            <label htmlFor="shareYear">Year: </label>
            <select onChange={(e) => setYear(parseInt(e.target.value))} id="shareYear">
                {
                    Object.keys(yearData).sort((a, b) => {
                        if(order === "ascending") return a - b;
                        else return b - a;
                    }).map((year, index) => <option key={index} value={year}>{year}</option>)
                }
            </select>
        </div>
    )
}

export default MarketShareFilter
