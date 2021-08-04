const SalesFiguresFilters = ({setProvince}) => {
    return (
        <div>
            <label htmlFor="salesRegion">Region: </label>
            <select onChange={e => setProvince(e.target.value)} id="salesRegion">
                <option value="Canada">Canada</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Quebec">Quebec</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="British Columbia and the Territories">BC & the Territories</option>
            </select>
        </div>
    )
}

export default SalesFiguresFilters
