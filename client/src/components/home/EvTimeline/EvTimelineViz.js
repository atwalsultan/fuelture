import { Chrono } from "react-chrono";

const EvTimelineViz = () => {
  const milestones = [
    {
      id: 1,
      title: "1881",
      cardDetailedText:
        "Gustave Trouvé's tricycle - the world's first electric car.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fgustave-trouves-tricycle.png?alt=media&token=e0b0bbf3-b82b-447e-ac1f-47f662b4cffd",
        },
        type: "IMAGE",
      },
    },
    {
      id: 2,
      title: "1884",
      cardDetailedText:
        "Thomas Parker's high-capacity, rechargeable battery and electric car.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fthomas-parkers-electric-car.jpg?alt=media&token=31d03254-bf9d-454d-bff0-7581f765d224",
        },
        type: "IMAGE",
      },
    },
    {
      id: 3,
      title: "1888",
      cardDetailedText: "The Flocken Elektrowagen.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fthe-flocken-electrowagen.jpg?alt=media&token=0a832728-8188-40bf-be70-20389832390b",
        },
        type: "IMAGE",
      },
    },
    {
      id: 4,
      title: "1891",
      cardDetailedText: "William Morrison–Strugis electric carriage.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fwilliam-morrison-sturgis-electric-carriage.jpg?alt=media&token=8966f92c-b272-48e4-82c4-3333492f68ed",
        },
        type: "IMAGE",
      },
    },
    {
      id: 5,
      title: "1894",
      cardDetailedText: "The Electrobat is invented.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fthe-electrobat.jpg?alt=media&token=c4cfb221-ac3f-4821-afde-2fe7003c0990",
        },
        type: "IMAGE",
      },
    },
    {
      id: 6,
      title: "1895",
      cardDetailedText:
        "Sturgis' Morrison electric carriage modified for the Times-Herald automobile race with extra batteries added for power.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fsturgis-modified-carriage.png?alt=media&token=a8707b59-3e3a-4a44-89a5-fd836c35ad92",
        },
        type: "IMAGE",
      },
    },
    {
      id: 7,
      title: "1896",
      cardDetailedText:
        "Morris and Salom constructed their two-seater Electric Road Wagon and formed the Electric Carriage and Wagon Company, evidently the first electric car company in America.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fmorris-salom-2-seater.jpg?alt=media&token=03a3f8f6-ecd0-43ca-bbe0-e069e28305d1",
        },
        type: "IMAGE",
      },
    },
    {
      id: 8,
      title: "1897",
      cardDetailedText:
        "The Bersey Electric Cab (also known as the London Electrical Cab) was an early electric-powered vehicle and the first electric taxi cab in London.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fbersey-cab.png?alt=media&token=bc9a98b4-8a38-443c-bd40-4528857b671a",
        },
        type: "IMAGE",
      },
    },
    {
      id: 9,
      title: "1898",
      cardDetailedText: "Porsche's P1 is developed.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fporsche-p1.jpg?alt=media&token=d7687cd2-1eda-4a2f-8dcb-0e036ce0d89d",
        },
        type: "IMAGE",
      },
    },
    {
      id: 10,
      title: "1901",
      cardDetailedText: "Porsche develops the first electric hybrid.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fporsche-1st-electric-hybrid.jpg?alt=media&token=2b741a1a-98f0-4957-a810-148d983805d4",
        },
        type: "IMAGE",
      },
    },
    {
      id: 11,
      title: "1910-1920's",
      cardDetailedText:
        "Large reservoirs of petroleum and crude oil push electric vehicles to end the Golden Age. Many makers stop building EV's.",
      media: {
        name: "",
        source: {
          url: "https://picsum.photos/200?random=2",
        },
        type: "IMAGE",
      },
    },
    {
      id: 12,
      title: "1947",
      cardDetailedText:
        "Electric vehicle TAMA, produced by Tachikawa Aircraft Company.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Ftama.jpg?alt=media&token=333a2450-d2c8-407e-85c0-6eb25cc4379d",
        },
        type: "IMAGE",
      },
    },
    {
      id: 13,
      title: "1953",
      cardDetailedText: "East German electric vans of the Deutsche Post.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fdeutsche-post-vans.jpg?alt=media&token=7f1b35bb-8dbc-4a91-9bc4-5eccf7970813",
        },
        type: "IMAGE",
      },
    },
    {
      id: 14,
      title: "1959-1960",
      cardDetailedText:
        "The Henney Kilowatt, an electric car introduced in the United States of America for the 1959 model year.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fhenney-kilowatt.jpg?alt=media&token=f3ab6382-9c6b-458a-8c12-5a8221443fc1",
        },
        type: "IMAGE",
      },
    },
    {
      id: 15,
      title: "1965",
      cardDetailedText:
        "Scottish Aviation Scamp, a small concept electric city car designed by Scottish Aviation.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fscamp.jpg?alt=media&token=d2fa0ed6-d8ec-4f45-987e-989b1c25d2b0",
        },
        type: "IMAGE",
      },
    },
    {
      id: 16,
      title: "1966",
      cardDetailedText: "General Motors’ Electrovair.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Felectrovair.jpg?alt=media&token=a00808b1-3d1a-4b36-a8ce-d8b4fd047c13",
        },
        type: "IMAGE",
      },
    },
    {
      id: 17,
      title: "1966",
      cardDetailedText:
        "Enfield 8000, a two-seater battery-electric city car, introduced in 1973 and developed in the United Kingdom by Isle of Wight company Enfield Automotive.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fenfield-8000.JPG?alt=media&token=b5747234-37dc-41f5-b6f4-9607924b6ec3",
        },
        type: "IMAGE",
      },
    },
    {
      id: 18,
      title: "1971",
      cardDetailedText:
        "The Lunar Roving Vehicle (LRV) is a battery-powered four-wheeled rover used on the Moon in the last three missions of the American Apollo program (15, 16, and 17) during 1971 and 1972.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Flrv.jpg?alt=media&token=f4230c31-6f67-4888-af6b-8a466e552ee2",
        },
        type: "IMAGE",
      },
    },
    {
      id: 19,
      title: "1972",
      cardDetailedText:
        "BMW developed its first electric car based on the 1602 model. The BMW 1602 Elektro-Antrieb was first unveiled at the 1972 Olympic Games in Munich, Germany.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fbmw-i3.jpg?alt=media&token=b0a27622-a1d4-4346-a6e0-5168d9425df5",
        },
        type: "IMAGE",
      },
    },
    {
      id: 20,
      title: "1974-1982",
      cardDetailedText:
        "Sebring-Vanguard Citicar, an electric car produced from 1974 to 1977 by Sebring, Florida-based Sebring-Vanguard, Inc.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fsebring-vanguard-citicar.jpg?alt=media&token=5dd2fca2-41b8-4982-bdf2-1f39e3ab791b",
        },
        type: "IMAGE",
      },
    },
    {
      id: 21,
      title: "1985",
      cardDetailedText:
        "Sinclair C5, a small one-person battery electric velomobile, technically an 'electrically assisted pedal cycle'.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fsinclair-c5.jpg?alt=media&token=c47c0335-27f6-448b-866c-0cc1710b68db",
        },
        type: "IMAGE",
      },
    },
    {
      id: 22,
      title: "1990",
      cardDetailedText: "GM Impact Electric Concept Car.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fgm-impact.jpeg?alt=media&token=c3701432-88ac-4ea9-b8de-6613f38d7f3f",
        },
        type: "IMAGE",
      },
    },
    {
      id: 23,
      title: "1990's",
      cardDetailedText:
        "Many governments around the world produce 'Clean Air Acts' or amend existing ones and introduce Energy Policies. Major car manufacturers respond.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fgovernment-acts.jpg?alt=media&token=1035a5d4-6a22-439d-8933-411dbbc10a40",
        },
        type: "IMAGE",
      },
    },
    {
      id: 24,
      title: "1996",
      cardDetailedText:
        "GM EV1 produced. It was an electric car produced and leased by General Motors from 1996 to 1999.[6] It was the first ever mass-produced and purpose-designed electric vehicle of the modern era from a major automaker and the first GM car designed to be an electric vehicle from the outset.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fgm-ev1.jpg?alt=media&token=bf16d3d5-f5e6-4d74-a959-bf853ffc2df8",
        },
        type: "IMAGE",
      },
    },
    {
      id: 25,
      title: "1997",
      cardDetailedText:
        "The Toyota Prius is born. The first-generation Prius (NHW10) was available only in Japan, though it has been imported privately to at least the United States, United Kingdom, Australia, and New Zealand.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Ftoyota-prius.jpg?alt=media&token=9058a119-1aa8-4d93-86ce-c4186e6e7985",
        },
        type: "IMAGE",
      },
    },
    {
      id: 26,
      title: "1997",
      cardDetailedText:
        "The Honda EV Plus was the first battery electric vehicle from a major automaker that did not use lead acid batteries.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fhonda-ev-plus.jpg?alt=media&token=dfd6d236-1665-4ad7-b120-0a1ec97f55a0",
        },
        type: "IMAGE",
      },
    },
    {
      id: 27,
      title: "2004-2008",
      cardDetailedText:
        "Tesla Motors was founded. California electric car maker Tesla Motors began development in 2004 on the Tesla Roadster, which was first delivered to customers in 2008.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Ftesla-roadster.jpg?alt=media&token=18a33c24-371b-497a-a361-216a47d82775",
        },
        type: "IMAGE",
      },
    },
    {
      id: 28,
      title: "2006",
      cardDetailedText:
        "ZENN (Zero Emission, No Noise) is a two-seat battery electric vehicle that was produced by the ZENN Motor Company of Canada from 2006 to 2010.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fzenn.JPG?alt=media&token=83f69930-058f-447e-bc70-fad3db31b4bf",
        },
        type: "IMAGE",
      },
    },
    {
      id: 29,
      title: "2009",
      cardDetailedText:
        "i-MiEV, a five-door hatchback electric car produced by Mitsubishi Motors. It’s the world's first modern highway-capable mass production electric car.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fi-miev.jpg?alt=media&token=f8b8e809-31f3-447e-83b8-db89a4e63212",
        },
        type: "IMAGE",
      },
    },
    {
      id: 30,
      title: "2010",
      cardDetailedText: "GM releases the first Plug-in Hybrid the Chevy Bolt.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Fchevy-bolt.JPG?alt=media&token=5e750667-73c1-44b1-bd71-db73a1a47ee2",
        },
        type: "IMAGE",
      },
    },
    {
      id: 31,
      title: "2010's",
      cardDetailedText:
        "EV battery costs plummet and various other major car brands begin developing their own long-range, highway-capable cars such as Nissan (Leaf), BMW, VW, etc. Many governments around the world legislate to promote EVs and phase out combustion engines within the next few decades.",
      media: {
        name: "",
        source: {
          url: "https://firebasestorage.googleapis.com/v0/b/fuelture-f1276.appspot.com/o/Cars%2Faudi-e-tron.jpg?alt=media&token=e1806f15-ad47-4a04-aa22-4123e1b2e13f",
        },
        type: "IMAGE",
      },
    },
  ];

  return (
    <div>
      {milestones.length > 0 ? (
        <Chrono
          items={milestones}
          mode="HORIZONTAL"
          theme={{ primary: "#091821", secondary: "#bbd237" }}
        >
          <div className="chrono-icons">
            {milestones.map((milestone, index) => {
              return (
                <svg viewBox="0 0 10 16.4" key={index}>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <polygon
                        className="cls-1"
                        points="6.4 0 0 8.63 4.01 10.09 3.61 16.4 10 7.73 5.99 6.25 6.4 0"
                      />
                    </g>
                  </g>
                </svg>
              );
            })}
          </div>
        </Chrono>
      ) : (
        <p>Timeline currently unavailable</p>
      )}
    </div>
  );
};

export default EvTimelineViz;
