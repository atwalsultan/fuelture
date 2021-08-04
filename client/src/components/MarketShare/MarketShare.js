import MarketShareViz from "./MarketShareViz";

const MarketShare = ({salesFigures}) => {
    return (
        <section id="evMarket">
            <h2>Canadian EV Market Shares</h2>

            <div>
                {salesFigures && <MarketShareViz salesFigures={salesFigures} order="ascending"></MarketShareViz>}
                {salesFigures && <MarketShareViz salesFigures={salesFigures} order="descending"></MarketShareViz>}
            </div>
        </section>
    )
}

export default MarketShare
