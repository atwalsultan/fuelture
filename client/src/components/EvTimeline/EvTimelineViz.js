import { Chrono } from "react-chrono";

const EvTimelineViz = () => {

    const items = [
        {
            "title": "1881",
            "cardDetailedText": "Gustave Trouvé's tricycle - the world's first electric car.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1884",
            "cardDetailedText": "Thomas Parker's high-capacity, rechargeable battery and electric car.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1888",
            "cardDetailedText": "The Flocken Elektrowagen.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1891",
            "cardDetailedText": "William Morrison–Strugis electric carriage.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1894",
            "cardDetailedText": "The Electrobat is invented.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1895",
            "cardDetailedText": "Sturgis' Morrison electric carriage modified for the Times-Herald automobile race with extra batteries added for power.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1896",
            "cardDetailedText": "Morris and Salom constructed their two-seater Electric Road Wagon and formed the Electric Carriage and Wagon Company, evidently the first electric car company in America.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1897",
            "cardDetailedText": "The Bersey Electric Cab (also known as the London Electrical Cab) was an early electric-powered vehicle and the first electric taxi cab in London.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1898",
            "cardDetailedText": "Porsche's P1 is developed.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1901",
            "cardDetailedText": "Porsche develops the first electric hybrid.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1910-1920's",
            "cardDetailedText": "Large reservoirs of petroleum and crude oil push electric vehicles to end the Golden Age. Many makers stop building EV's.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1947",
            "cardDetailedText": "Electric vehicle TAMA, produced by Tachikawa Aircraft Company.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1953",
            "cardDetailedText": "East German electric vans of the Deutsche Post.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1959-1960",
            "cardDetailedText": "The Henney Kilowatt, an electric car introduced in the United States of America for the 1959 model year.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1959",
            "cardDetailedText": "AMC and Sonotone Corp. join forces to develop a 'self-charging' battery-powered car.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1965",
            "cardDetailedText": "Scottish Aviation Scamp, a small concept electric city car designed by Scottish Aviation.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1966",
            "cardDetailedText": "General Motors’ Electrovair.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1966",
            "cardDetailedText": "Enfield 8000, a two-seater battery-electric city car, introduced in 1973 and developed in the United Kingdom by Isle of Wight company Enfield Automotive.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1971",
            "cardDetailedText": "The Lunar Roving Vehicle (LRV) is a battery-powered four-wheeled rover used on the Moon in the last three missions of the American Apollo program (15, 16, and 17) during 1971 and 1972.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1972",
            "cardDetailedText": "BMW developed its first electric car based on the 1602 model. The BMW 1602 Elektro-Antrieb was first unveiled at the 1972 Olympic Games in Munich, Germany.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1974-1982",
            "cardDetailedText": "Sebring-Vanguard Citicar, an electric car produced from 1974 to 1977 by Sebring, Florida-based Sebring-Vanguard, Inc.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1985",
            "cardDetailedText": "Sinclair C5, a small one-person battery electric velomobile, technically an 'electrically assisted pedal cycle'.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1990",
            "cardDetailedText": "GM Impact Electric Concept Car.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1990's",
            "cardDetailedText": "Many governments around the world produce 'Clean Air Acts' or amend existing ones and introduce Energy Policies. Major car manufacturers respond.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1996",
            "cardDetailedText": "GM EV1 produced. It was an electric car produced and leased by General Motors from 1996 to 1999.[6] It was the first ever mass-produced and purpose-designed electric vehicle of the modern era from a major automaker and the first GM car designed to be an electric vehicle from the outset.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1997",
            "cardDetailedText": "The Toyota Prius is born. The first-generation Prius (NHW10) was available only in Japan, though it has been imported privately to at least the United States, United Kingdom, Australia, and New Zealand.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "1997",
            "cardDetailedText": "The Honda EV Plus was the first battery electric vehicle from a major automaker that did not use lead acid batteries.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "2004-2008",
            "cardDetailedText": "Tesla Motors was founded. California electric car maker Tesla Motors began development in 2004 on the Tesla Roadster, which was first delivered to customers in 2008.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "2006",
            "cardDetailedText": "ZENN (Zero Emission, No Noise) is a two-seat battery electric vehicle that was produced by the ZENN Motor Company of Canada from 2006 to 2010.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "2009",
            "cardDetailedText": "i-MiEV, a five-door hatchback electric car produced by Mitsubishi Motors. It’s the world's first modern highway-capable mass production electric car.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "2010",
            "cardDetailedText": "GM releases the first Plug-in Hybrid the Chevy Bolt.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        },
        {
            "title": "2010's",
            "cardDetailedText": "EV battery costs plummet and various other major car brands begin developing their own long-range, highway-capable cars such as Nissan (Leaf), BMW, VW, etc. Many governments around the world legislate to promote EVs and phase out combustion engines within the next few decades.",
            "media": {
                name: "",
                source: {
                    url: "https://picsum.photos/200?random=2"
                },
                type: "IMAGE"
            }
        }
    ];

    return (
        <div>
            <Chrono items={items} mode="HORIZONTAL" theme={{ "primary": "#091821", "secondary": "#bbd237" }}>
                <div className="chrono-icons">
                    {
                        items.map(item => {
                            return (
                                <svg viewBox="0 0 10 16.4" style={{}}>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <polygon class="cls-1" points="6.4 0 0 8.63 4.01 10.09 3.61 16.4 10 7.73 5.99 6.25 6.4 0" />
                                        </g>
                                    </g>
                                </svg>
                            )
                        })
                    }
                </div>
            </Chrono>
        </div>
    )
}

export default EvTimelineViz
