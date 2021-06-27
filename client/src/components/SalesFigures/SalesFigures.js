import { useState } from 'react';
import SalesFiguresFilters from './SalesFiguresFilters';
import SalesFiguresViz from './SalesFiguresViz';

const SalesFigures = ({ salesFigures }) => {
    // Province state
    const [province, setProvince] = useState("Canada")

    // Vehicle type
    const [type, setType] = useState("Total, vehicle type")

    return (
        <section id="salesFigures">
            <h2>Canadian EV Sales Figures</h2>

            <SalesFiguresFilters setProvince={setProvince} setType={setType}></SalesFiguresFilters>
            <SalesFiguresViz salesFigures={salesFigures} province={province} type={type}></SalesFiguresViz>
            
        </section>
    )
}

export default SalesFigures
