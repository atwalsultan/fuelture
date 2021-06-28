import { useState } from 'react';
import SalesFiguresViz from './SalesFiguresViz';

const SalesFigures = ({ salesFigures }) => {
    // Province state
    const [province, setProvince] = useState("Canada")

    // Vehicle type
    const [type, setType] = useState("Total, vehicle type")

    return (
        <section id="salesFigures">
            <h2>Canadian EV Sales Figures</h2>
            <SalesFiguresViz salesFigures={salesFigures} province={province} type={type} setProvince={setProvince} setType={setType}></SalesFiguresViz>
            
        </section>
    )
}

export default SalesFigures
