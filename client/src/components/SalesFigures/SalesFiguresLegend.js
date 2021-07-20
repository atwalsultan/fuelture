const SalesFiguresLegend = ({type}) => {
    return (
        <ul className={type}>
            <li>
                <span style={{ backgroundColor: "#bdd237" }}></span>
                <span>BEV</span>
            </li>
            <li>
                <span style={{ backgroundColor: "#6e7542" }}></span>
                <span>HEV</span>
            </li>
            <li>
                <span style={{ backgroundColor: "#42b0f5" }}></span>
                <span>PHEV</span>
            </li>
        </ul>
    )
}

export default SalesFiguresLegend
