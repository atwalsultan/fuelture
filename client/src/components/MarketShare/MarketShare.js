import MarketShareViz from "./MarketShareViz";

const MarketShare = ({salesFigures}) => {
    return (
        <section id="evMarket">
            <h2>Canadian EV Market</h2>

            <div>
                <MarketShareViz salesFigures={salesFigures} order="ascending"></MarketShareViz>
                <MarketShareViz salesFigures={salesFigures} order="descending"></MarketShareViz>
            </div>
        </section>
    )
}

export default MarketShare
