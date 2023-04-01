import { useState } from "react";
import EvRecommendations from "./EvRecommendations";

const FindEvViz = () => {
  const specs = [
    {
      Brand: "Tesla",
      Model: "Model 3 Long Range Dual Motor",
      Accel: "4.4 sec",
      TopSpeed: "233 km/h",
      Range: 568,
      Efficiency: "161 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Sedan",
      Segment: "D",
      Seats: 5,
      Price: 63600,
      EvoxID: "14274",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14274/14274_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "BMW",
      Model: "iX3",
      Accel: "6.8 sec",
      TopSpeed: "180 km/h",
      Range: 458,
      Efficiency: "206 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "D",
      Seats: 5,
      Price: 52550,
      EvoxID: "14730",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14730/14730_cc2400_032_300.png",
      Type: "BEV",
    },
    {
      Brand: "Volkswagen",
      Model: "e-Golf",
      Accel: "9.6 sec",
      TopSpeed: "150 km/h",
      Range: 190,
      Efficiency: "168 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Hatchback",
      Segment: "C",
      Seats: 5,
      Price: 37895,
      EvoxID: "13526",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13526/13526_cc2400_032_0Q0Q.png",
      Type: "BEV",
    },
    {
      Brand: "Tesla",
      Model: "Model 3 Standard Range Plus",
      Accel: "5.6 sec",
      TopSpeed: "225 km/h",
      Range: 423,
      Efficiency: "153 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Sedan",
      Segment: "D",
      Seats: 5,
      Price: 44999,
      EvoxID: "14913",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14913/14913_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "Nissan",
      Model: "Leaf",
      Accel: "7.9 sec",
      TopSpeed: "144 km/h",
      Range: 220,
      Efficiency: "164 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CHAdeMO",
      BodyStyle: "Hatchback",
      Segment: "C",
      Seats: 5,
      Price: 44298,
      EvoxID: "14924",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14924/14924_cc2400_032_EBL.png",
      Type: "BEV",
    },
    {
      Brand: "Hyundai",
      Model: "Kona Electric ",
      Accel: "7.9 sec",
      TopSpeed: "167 km/h",
      Range: 415,
      Efficiency: "160 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "B",
      Seats: 5,
      Price: 43699,
      EvoxID: "14680",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14680/14680_cc2400_032_MZ2.png",
      Type: "BEV",
    },
    {
      Brand: "Hyundai",
      Model: "IONIQ Electric",
      Accel: "9.7 sec",
      TopSpeed: "165 km/h",
      Range: 274,
      Efficiency: "153 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Liftback",
      Segment: "C",
      Seats: 5,
      Price: 41599,
      EvoxID: "14375",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14375/14375_cc2400_032_NKA.png",
      Type: "BEV",
    },
    {
      Brand: "Porsche",
      Model: "Taycan Turbo S",
      Accel: "2.8 sec",
      TopSpeed: "260 km/h",
      Range: 309,
      Efficiency: "223 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Sedan",
      Segment: "F",
      Seats: 4,
      Price: 215000,
      EvoxID: "14387",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14387/14387_cc2400_032_0L.png",
      Type: "BEV",
    },
    {
      Brand: "Tesla",
      Model: "Model Y Long Range Dual Motor",
      Accel: "5.1 sec",
      TopSpeed: "217 km/h",
      Range: 525,
      Efficiency: "171 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "D",
      Seats: 5,
      Price: 68600,
      EvoxID: "14481",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14481/14481_cc2400_032_PBSB.png",
      Type: "BEV",
    },

    {
      Brand: "Tesla",
      Model: "Model 3 Long Range Performance",
      Accel: "3.1 sec",
      TopSpeed: "261 km/h",
      Range: 529,
      Efficiency: "167 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Sedan",
      Segment: "D",
      Seats: 5,
      Price: 65700,
      EvoxID: "14913",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14913/14913_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "Volkswagen",
      Model: "ID.4 ",
      Accel: "5.7 sec",
      TopSpeed: "180 km/h",
      Range: 400,
      Efficiency: "183 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "C",
      Seats: 5,
      Price: 45000,
      EvoxID: "15030",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/15030/15030_cc2400_032_1T1T.png",
      Type: "BEV",
    },
    {
      Brand: "BMW",
      Model: "i3 120 Ah",
      Accel: "7.3 sec",
      TopSpeed: "150 km/h",
      Range: 246,
      Efficiency: "161 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Hatchback",
      Segment: "B",
      Seats: 4,
      Price: 44950,
      EvoxID: "13495",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13495/13495_cc2400_032_B85.png",
      Type: "BEV",
    },
    {
      Brand: "Audi",
      Model: "e-tron 50 quattro",
      Accel: "6.8 sec",
      TopSpeed: "190 km/h",
      Range: 280,
      Efficiency: "231 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "E",
      Seats: 5,
      Price: 65600,
      EvoxID: "14701",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14701/14701_cc2400_032_0E0E.png",
      Type: "BEV",
    },
    {
      Brand: "Kia",
      Model: "e-Niro 64 kWh",
      Accel: "7.8 sec",
      TopSpeed: "167 km/h",
      Range: 385,
      Efficiency: "173 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "C",
      Seats: 5,
      Price: 44995,
      EvoxID: "13051",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13051/13051_cc2400_032_4SS.png",
      Type: "BEV",
    },
    {
      Brand: "Nissan",
      Model: "Leaf e+",
      Accel: "7.3 sec",
      TopSpeed: "157 km/h",
      Range: 384,
      Efficiency: "172 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CHAdeMO",
      BodyStyle: "Hatchback",
      Segment: "C",
      Seats: 5,
      Price: 44898,
      EvoxID: "14924",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14924/14924_cc2400_032_EBL.png",
      Type: "BEV",
    },
    {
      Brand: "Lexus",
      Model: "UX 300e",
      Accel: "7.5 sec",
      TopSpeed: "160 km/h",
      Range: 315,
      Efficiency: "193 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CHAdeMO",
      BodyStyle: "SUV",
      Segment: "C",
      Seats: 5,
      Price: 62500,
      EvoxID: "14962",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14962/14962_cc2400_032_083.png",
      Type: "BEV",
    },
    {
      Brand: "Tesla",
      Model: "Model S Long Range",
      Accel: "3.8 sec",
      TopSpeed: "250 km/h",
      Range: 663,
      Efficiency: "184 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2",
      BodyStyle: "Liftback",
      Segment: "F",
      Seats: 5,
      Price: 113600,
      EvoxID: "14359",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14359/14359_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "Audi",
      Model: "e-tron Sportback 55 quattro",
      Accel: "5.7 sec",
      TopSpeed: "200 km/h",
      Range: 350,
      Efficiency: "228 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "E",
      Seats: 5,
      Price: 88850,
      EvoxID: "14763",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14763/14763_cc2400_032_0E0E.png",
      Type: "BEV",
    },

    {
      Brand: "Porsche",
      Model: "Taycan 4S",
      Accel: "4.0 sec",
      TopSpeed: "250 km/h",
      Range: 323,
      Efficiency: "195 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Sedan",
      Segment: "F",
      Seats: 4,
      Price: 121700,
      EvoxID: "14387",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14387/14387_cc2400_032_0L.png",
      Type: "BEV",
    },
    {
      Brand: "Tesla",
      Model: "Roadster ",
      Accel: "2.1 sec",
      TopSpeed: "402 km/h",
      Range: 1000,
      Efficiency: "206 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Cabrio",
      Segment: "S",
      Seats: 4,
      Price: 257000,
      EvoxID: "7208",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2010/7208/7208_cc2400_032_EVOX01.png",
      Type: "BEV",
    },

    {
      Brand: "Tesla",
      Model: "Model X Long Range",
      Accel: "4.6 sec",
      TopSpeed: "250 km/h",
      Range: 547,
      Efficiency: "211 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2",
      BodyStyle: "SUV",
      Segment: "F",
      Seats: 5,
      Price: 123600,
      EvoxID: "13720",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13720/13720_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "Tesla",
      Model: "Model S Performance",
      Accel: "2.2 sec",
      TopSpeed: "261 km/h",
      Range: 505,
      Efficiency: "188 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2",
      BodyStyle: "Liftback",
      Segment: "F",
      Seats: 5,
      Price: 113600,
      EvoxID: "14359",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14359/14359_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "Tesla",
      Model: "Model Y Long Range Performance",
      Accel: "3.7 sec",
      TopSpeed: "249 km/h",
      Range: 410,
      Efficiency: "177 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "D",
      Seats: 7,
      Price: 78600,
      EvoxID: "14481",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14481/14481_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "Jaguar",
      Model: "I-Pace ",
      Accel: "4.8 sec",
      TopSpeed: "200 km/h",
      Range: 377,
      Efficiency: "232 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "E",
      Seats: 5,
      Price: 99800,
      EvoxID: "13621",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13621/13621_cc2400_032_1AA.png",
      Type: "BEV",
    },
    {
      Brand: "Ford",
      Model: "Mustang Mach-E ER RWD",
      Accel: "5.6 sec",
      TopSpeed: "178 km/h",
      Range: 490,
      Efficiency: "200 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "D",
      Seats: 5,
      Price: 50495,
      EvoxID: "14987",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14987/14987_cc2400_032_A3.png",
      Type: "BEV",
    },
    {
      Brand: "Porsche",
      Model: "Taycan 4S Plus",
      Accel: "4.0 sec",
      TopSpeed: "250 km/h",
      Range: 425,
      Efficiency: "197 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Sedan",
      Segment: "F",
      Seats: 4,
      Price: 135000,
      EvoxID: "14387",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14387/14387_cc2400_032_0L.png",
      Type: "BEV",
    },
    {
      Brand: "Nissan",
      Model: "e-NV200 Evalia ",
      Accel: "11.0 sec",
      TopSpeed: "123 km/h",
      Range: 300,
      Efficiency: "200 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 1 CHAdeMO",
      BodyStyle: "SPV",
      Segment: "N",
      Seats: 7,
      Price: 27698,
      EvoxID: "14919",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14919/14919_cc2400_032_K23.png",
      Type: "BEV",
    },
    {
      Brand: "Ford",
      Model: "Mustang Mach-E ER AWD",
      Accel: "5.1 sec",
      TopSpeed: "180 km/h",
      Range: 425,
      Efficiency: "209 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "D",
      Seats: 5,
      Price: 59495,
      EvoxID: "14987",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14987/14987_cc2400_032_A3.png",
      Type: "BEV",
    },
    {
      Brand: "BMW",
      Model: "i3s 120 Ah",
      Accel: "6.9 sec",
      TopSpeed: "160 km/h",
      Range: 246,
      Efficiency: "165 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Hatchback",
      Segment: "B",
      Seats: 4,
      Price: 44500,
      EvoxID: "13496",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13496/13496_cc2400_032_B85.png",
      Type: "BEV",
    },

    {
      Brand: "Kia",
      Model: "e-Niro 39 kWh",
      Accel: "9.8 sec",
      TopSpeed: "155 km/h",
      Range: 289,
      Efficiency: "167 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "C",
      Seats: 5,
      Price: 35000,
      EvoxID: "13051",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13051/13051_cc2400_032_4SS.png",
      Type: "BEV",
    },
    {
      Brand: "Ford",
      Model: "Mustang Mach-E SR AWD",
      Accel: "5.1 sec",
      TopSpeed: "180 km/h",
      Range: 340,
      Efficiency: "206 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "D",
      Seats: 5,
      Price: 50495,
      EvoxID: "14987",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14987/14987_cc2400_032_A3.png",
      Type: "BEV",
    },
    {
      Brand: "Porsche",
      Model: "Taycan Turbo",
      Accel: "2.8 sec",
      TopSpeed: "260 km/h",
      Range: 323,
      Efficiency: "215 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Sedan",
      Segment: "F",
      Seats: 4,
      Price: 175000,
      EvoxID: "14387",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14387/14387_cc2400_032_0L.png",
      Type: "BEV",
    },
    {
      Brand: "Tesla",
      Model: "Model X Performance",
      Accel: "2.6 sec",
      TopSpeed: "250 km/h",
      Range: 465,
      Efficiency: "216 Wh/km",
      PowerTrain: "AWD",
      PlugType: "Type 2",
      BodyStyle: "SUV",
      Segment: "F",
      Seats: 7,
      Price: 159500,
      EvoxID: "13720",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13720/13720_cc2400_032_PBSB.png",
      Type: "BEV",
    },
    {
      Brand: "Smart",
      Model: "EQ fortwo coupe",
      Accel: "11.6 sec",
      TopSpeed: "130 km/h",
      Range: 92,
      Efficiency: "167 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2",
      BodyStyle: "Hatchback",
      Segment: "A",
      Seats: 2,
      Price: 29050,
      EvoxID: "11252",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2016/11252/11252_cc2400_032_EAD.png",
      Type: "BEV",
    },
    {
      Brand: "Ford",
      Model: "Mustang Mach-E SR RWD",
      Accel: "6.1 sec",
      TopSpeed: "180 km/h",
      Range: 370,
      Efficiency: "194 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "SUV",
      Segment: "D",
      Seats: 5,
      Price: 50495,
      EvoxID: "14987",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/14987/14987_cc2400_032_A3.png",
      Type: "BEV",
    },
    {
      Brand: "Fiat",
      Model: "500e Hatchback",
      Accel: "9.0 sec",
      TopSpeed: "150 km/h",
      Range: 150,
      Efficiency: "168 Wh/km",
      PowerTrain: "FWD",
      PlugType: "Type 2 CCS",
      BodyStyle: "Hatchback",
      Segment: "B",
      Seats: 4,
      Price: 34900,
      EvoxID: "12927",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2018/12927/12927_cc2400_032_PAU.png",
      Type: "BEV",
    },
    {
      Brand: "Smart",
      Model: "EQ fortwo cabrio",
      Accel: "11.9 sec",
      TopSpeed: "130 km/h",
      Range: 95,
      Efficiency: "176 Wh/km",
      PowerTrain: "RWD",
      PlugType: "Type 2",
      BodyStyle: "Cabrio",
      Segment: "A",
      Seats: 2,
      Price: 32050,
      EvoxID: "9640",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2014/9640/9640_cc2400_032_EAA.png",
      Type: "BEV",
    },
    {
      Brand: "Hyundai",
      Model: "Sonata",
      Accel: "6.8 sec",
      TopSpeed: "217 km/h",
      Range: 1000,
      Efficiency: "",
      PowerTrain: "FWD",
      PlugType: "",
      BodyStyle: "Sedan",
      Segment: "",
      Seats: 5,
      Price: 40199,
      EvoxID: "13517",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2019/13517/13517_cc2400_032_NB9.png",
      Type: "PHEV",
    },
    {
      Brand: "Toyota",
      Model: "Prius Prime",
      Accel: "10.3 sec",
      TopSpeed: "160 km/h",
      Range: 853,
      Efficiency: "",
      PowerTrain: "FWD",
      PlugType: "",
      BodyStyle: "Hatchback",
      Segment: "",
      Seats: 5,
      Price: 33550,
      EvoxID: "13785",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/13785/13785_cc2400_032_040.png",
      Type: "PHEV",
    },
    {
      Brand: "Ford",
      Model: "Fusion",
      Accel: "8 sec",
      TopSpeed: "167 km/h",
      Range: 981.7,
      Efficiency: "",
      PowerTrain: "FWD",
      PlugType: "",
      BodyStyle: "Sedan",
      Segment: "",
      Seats: 5,
      Price: 32930,
      EvoxID: "13936",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/13936/13936_cc2400_032_D4.png",
      Type: "PHEV",
    },
    {
      Brand: "Hyundai",
      Model: "Ioniq",
      Accel: "8.9 sec",
      TopSpeed: "178 km/h",
      Range: 708,
      Efficiency: "",
      PowerTrain: "FWD",
      PlugType: "",
      BodyStyle: "Hatchback",
      Segment: "",
      Seats: 5,
      Price: 32649,
      EvoxID: "14250",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14250/14250_cc2400_032_NKA.png",
      Type: "PHEV",
    },
    {
      Brand: "Kia",
      Model: "Niro",
      Accel: "9.5 sec",
      TopSpeed: "177 km/h",
      Range: 836,
      Efficiency: "",
      PowerTrain: "FWD",
      PlugType: "",
      BodyStyle: "CUV",
      Segment: "",
      Seats: 5,
      Price: 26995,
      EvoxID: "15051",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2021/15051/15051_cc2400_032_4SS.png",
      Type: "PHEV",
    },
    {
      Brand: "Mercedes-Benz",
      Model: "S-Class S550e",
      Accel: "5 sec",
      TopSpeed: "300 km/h",
      Range: 724,
      Efficiency: "",
      PowerTrain: "RWD",
      PlugType: "",
      BodyStyle: "Sedan",
      Segment: "",
      Seats: 5,
      Price: 123948,
      EvoxID: "11768",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2017/11768/11768_cc2400_032_033.png",
      Type: "PHEV",
    },
    {
      Brand: "Mercedes-Benz",
      Model: "GLE-Class GLE550e 4Matic",
      Accel: "5.3 sec",
      TopSpeed: "244 km/h",
      Range: 740,
      Efficiency: "",
      PowerTrain: "AWD",
      PlugType: "",
      BodyStyle: "SUV",
      Segment: "",
      Seats: 5,
      Price: 84709,
      EvoxID: "11794",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2017/11794/11794_cc2400_032_040.png",
      Type: "PHEV",
    },
    {
      Brand: "Kia",
      Model: "Optima",
      Accel: "7.7 sec",
      TopSpeed: "242 km/h",
      Range: 997,
      Efficiency: "",
      PowerTrain: "FWD",
      PlugType: "",
      BodyStyle: "Sedan",
      Segment: "",
      Seats: 5,
      Price: 43995,
      EvoxID: "13714",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/13714/13714_cc2400_032_ABP.png",
      Type: "PHEV",
    },
    {
      Brand: "Volvo",
      Model: "XC90",
      Accel: "5.6 sec",
      TopSpeed: "189 km/h",
      Range: 756,
      Efficiency: "",
      PowerTrain: "AWD",
      PlugType: "",
      BodyStyle: "SUV",
      Segment: "",
      Seats: 7,
      Price: 64750,
      EvoxID: "12002",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2017/12002/12002_cc2400_032_467.png",
      Type: "PHEV",
    },
    {
      Brand: "Cadillac",
      Model: "CT6",
      Accel: "5.2 sec",
      TopSpeed: "244 km/h",
      Range: 708,
      Efficiency: "",
      PowerTrain: "RWD",
      PlugType: "",
      BodyStyle: "Sedan",
      Segment: "",
      Seats: 5,
      Price: 97000,
      EvoxID: "12675",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2018/12675/12675_cc2400_032_G1F.png",
      Type: "PHEV",
    },
    {
      Brand: "Volvo",
      Model: "S90,T8 Inscription eAWD",
      Accel: "4.7 sec",
      TopSpeed: "225 km/h",
      Range: 804,
      Efficiency: "",
      PowerTrain: "AWD",
      PlugType: "",
      BodyStyle: "Sedan",
      Segment: "",
      Seats: 5,
      Price: 78000,
      EvoxID: "14449",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14449/14449_cc2400_032_019.png",
      Type: "PHEV",
    },
    {
      Brand: "Honda",
      Model: "Clarity",
      Accel: "7.7 sec",
      TopSpeed: "162 km/h",
      Range: 514,
      Efficiency: "",
      PowerTrain: "FWD",
      PlugType: "",
      BodyStyle: "Sedan",
      Segment: "",
      Seats: 5,
      Price: 44000,
      EvoxID: "14305",
      Image:
        "https://dbhdyzvm8lm25.cloudfront.net/color_2400_032_png/MY2020/14305/14305_cc2400_032_BK.png",
      Type: "PHEV",
    },
  ];

  const brands = specs
    .map((spec) => spec.Brand)
    .filter((x, i, a) => a.indexOf(x) === i);

  const styles = specs
    .map((spec) => spec.BodyStyle)
    .filter((x, i, a) => a.indexOf(x) === i);

  const [budget, setBudget] = useState(0);
  const [brand, setBrand] = useState(brands);
  const [seats, setSeats] = useState(0);
  const [range, setRange] = useState(10000);
  const [style, setStyle] = useState(styles);
  const [cars, setCars] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    let newCars = specs.filter(
      (spec) =>
        spec.Price <= budget &&
        brand.includes(spec.Brand) &&
        parseInt(spec.Seats) >= seats &&
        parseInt(spec.Range) >= range &&
        style.includes(spec.BodyStyle)
    );

    setCars(newCars);
  };

  const brandChange = (e) => {
    if (e.target.value === "Any") {
      let brands = specs
        .map((spec) => spec.Brand)
        .filter((x, i, a) => a.indexOf(x) === i);
      setBrand(brands);
    } else {
      setBrand([e.target.value]);
    }
  };

  const styleChange = (e) => {
    if (e.target.value === "Any") {
      let styles = specs
        .map((spec) => spec.BodyStyle)
        .filter((x, i, a) => a.indexOf(x) === i);
      setStyle(styles);
    } else {
      setStyle([e.target.value]);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="budget">Budget</label>
            <input
              type="number"
              id="budget"
              min={specs
                .map((spec) => spec.Price)
                .reduce((a, b) => Math.min(a, b), Infinity)}
              placeholder={`${specs
                .map((spec) => spec.Price)
                .reduce((a, b) => Math.min(a, b), Infinity)} - ${specs
                .map((spec) => spec.Price)
                .reduce((a, b) => Math.max(a, b), -Infinity)}`}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="brand">Brand</label>
            <select name="brand" id="brand" onChange={brandChange} required>
              <option value="Any">Any</option>
              {specs
                .map((spec) => spec.Brand)
                .filter((x, i, a) => a.indexOf(x) === i)
                .sort()
                .map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label htmlFor="seats">Minimum Seats</label>
            <input
              type="number"
              id="seats"
              min={specs
                .map((spec) => spec.Seats)
                .reduce((a, b) => Math.min(a, b), Infinity)}
              max={specs
                .map((spec) => spec.Seats)
                .reduce((a, b) => Math.max(a, b), -Infinity)}
              placeholder={`${specs
                .map((spec) => spec.Seats)
                .reduce((a, b) => Math.min(a, b), Infinity)} - ${specs
                .map((spec) => spec.Seats)
                .reduce((a, b) => Math.max(a, b), -Infinity)}`}
              onChange={(e) => setSeats(parseInt(e.target.value))}
              required
            />
          </div>

          <div>
            <label htmlFor="range">Minimum Range</label>
            <input
              type="number"
              id="range"
              min={specs
                .map((spec) => spec.Range)
                .reduce((a, b) => Math.min(a, b), Infinity)}
              max={specs
                .map((spec) => spec.Range)
                .reduce((a, b) => Math.max(a, b), -Infinity)}
              onChange={(e) => setRange(parseInt(e.target.value))}
              placeholder={`${specs
                .map((spec) => spec.Range)
                .reduce((a, b) => Math.min(a, b), Infinity)} - ${specs
                .map((spec) => spec.Range)
                .reduce((a, b) => Math.max(a, b), -Infinity)}`}
              required
            />
          </div>

          <div>
            <label htmlFor="style">Body Style</label>
            <select name="style" id="style" onChange={styleChange} required>
              <option value="Any">Any</option>
              {specs
                .map((spec) => spec.BodyStyle)
                .filter((x, i, a) => a.indexOf(x) === i)
                .sort()
                .map((style, index) => (
                  <option key={index} value={style}>
                    {style}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <EvRecommendations cars={cars} />
    </div>
  );
};

export default FindEvViz;
