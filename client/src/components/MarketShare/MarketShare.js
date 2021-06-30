import MarketShareViz from "./MarketShareViz";

const MarketShare = ({salesFigures}) => {
    return (
        <section id="evMarket">
            <h2>Canadian EV Market</h2>
            <MarketShareViz salesFigures={salesFigures}></MarketShareViz>
        </section>
    )
}

export default MarketShare
