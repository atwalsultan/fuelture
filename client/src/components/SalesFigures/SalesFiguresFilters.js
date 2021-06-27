const SalesFiguresFilters = ({setProvince, setType}) => {
    return (
        <div>
            <select onChange={e => setProvince(e.target.value)}>
                <option value="Canada">Canada</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Quebec">Quebec</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="British Columbia and the Territories">British Columbia & the Territories</option>
            </select>

            <select onChange={e => setType(e.target.value)}>
                <option value="Total, vehicle type">All Types</option>
                <option value="Passenger cars">Passenger Cars</option>
                <option value="Pickup trucks">Pickup Trucks</option>
                <option value="Multi-purpose vehicles">Multi Purpose Vehicles</option>
                <option value="Vans">Vans</option>
            </select>
        </div>
    )
}

export default SalesFiguresFilters
