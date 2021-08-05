import { useState } from 'react';
import SalesFiguresViz from './SalesFiguresViz';

const SalesFigures = ({ salesFigures }) => {
    // Province state
    const [province, setProvince] = useState("Canada")

    return (
        <section id="salesFigures">
            <h2>Canadian EV Sales Figures</h2>
            <SalesFiguresViz salesFigures={salesFigures} province={province} setProvince={setProvince} />
            
        </section>
    )
}

export default SalesFigures
