import {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Stations = () => {
    const data = {
        "type": "FeatureCollection",
        "generator": "overpass-ide",
        "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
        "timestamp": "2021-06-09T23:34:11Z",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "@id": "way/885743133",
                    "amenity": "charging_station",
                    "brand": "Electrify Canada",
                    "building": "yes",
                    "fee": "yes",
                    "man_made": "street_cabinet",
                    "socket:chademo": "1",
                    "socket:type2_combo": "5",
                    "start_date": "2020-10-05"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -122.3223357,
                                49.0519464
                            ],
                            [
                                -122.322336,
                                49.051907
                            ],
                            [
                                -122.3222016,
                                49.0519065
                            ],
                            [
                                -122.3222013,
                                49.051946
                            ],
                            [
                                -122.3223357,
                                49.0519464
                            ]
                        ]
                    ]
                },
                "id": "way/885743133"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/1037073521",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3170893,
                        48.4259751
                    ]
                },
                "id": "node/1037073521"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2121520444",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.7278729,
                        48.3564981
                    ]
                },
                "id": "node/2121520444"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2121520448",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4847767,
                        48.4199182
                    ]
                },
                "id": "node/2121520448"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2121520452",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3680871,
                        48.4223308
                    ]
                },
                "id": "node/2121520452"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2121520455",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4938504,
                        48.423213
                    ]
                },
                "id": "node/2121520455"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2121520458",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4689992,
                        48.4418607
                    ]
                },
                "id": "node/2121520458"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2121520462",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4166168,
                        48.6595421
                    ]
                },
                "id": "node/2121520462"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2144841711",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4667968,
                        48.4446621
                    ]
                },
                "id": "node/2144841711"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2189311481",
                    "amenity": "charging_station",
                    "authentication:none": "yes",
                    "capacity:car": "4",
                    "car": "yes",
                    "fixme": "Check charging station capacity"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3592312,
                        48.4549272
                    ]
                },
                "id": "node/2189311481"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723462",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.5356949,
                        48.3810207
                    ]
                },
                "id": "node/2297723462"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723464",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3852662,
                        48.4153375
                    ]
                },
                "id": "node/2297723464"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723492",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3848737,
                        48.4291305
                    ]
                },
                "id": "node/2297723492"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723499",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4742041,
                        48.4353728
                    ]
                },
                "id": "node/2297723499"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723500",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.521255,
                        48.4432153
                    ]
                },
                "id": "node/2297723500"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723502",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3746982,
                        48.4461792
                    ]
                },
                "id": "node/2297723502"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723503",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4648599,
                        48.4475393
                    ]
                },
                "id": "node/2297723503"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723504",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.5031647,
                        48.4493991
                    ]
                },
                "id": "node/2297723504"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723505",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3436194,
                        48.4498813
                    ]
                },
                "id": "node/2297723505"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723508",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3982158,
                        48.4542446
                    ]
                },
                "id": "node/2297723508"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723509",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3436887,
                        48.4557011
                    ]
                },
                "id": "node/2297723509"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723510",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3089013,
                        48.4667479
                    ]
                },
                "id": "node/2297723510"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723511",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3307877,
                        48.47828
                    ]
                },
                "id": "node/2297723511"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723512",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4157664,
                        48.4920868
                    ]
                },
                "id": "node/2297723512"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723513",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3885124,
                        48.5016047
                    ]
                },
                "id": "node/2297723513"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723514",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4484137,
                        48.5759752
                    ]
                },
                "id": "node/2297723514"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2297723515",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4205624,
                        48.5948231
                    ]
                },
                "id": "node/2297723515"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/2386927234",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.36534,
                        50.671172
                    ]
                },
                "id": "node/2386927234"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3005728050",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.6754079,
                        49.1152402
                    ]
                },
                "id": "node/3005728050"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3046887486",
                    "amenity": "charging_station",
                    "capacity": "6",
                    "name": "Tesla Supercharger Squamish",
                    "opening_hours": "24/7",
                    "operator": "Tesla Motors Inc.",
                    "tesla:ref": "squamishsupercharger"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1344342,
                        49.7368401
                    ]
                },
                "id": "node/3046887486"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3076163362",
                    "amenity": "charging_station",
                    "authentication:money_card": "yes",
                    "name": "Victoria Quay, Port Alberni"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.8129274,
                        49.2563717
                    ]
                },
                "id": "node/3076163362"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3089150959",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -121.4414708,
                        49.3796766
                    ]
                },
                "id": "node/3089150959"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3101275677",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.5136749,
                        48.4949516
                    ]
                },
                "id": "node/3101275677"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3377298705",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3951485,
                        48.4812459
                    ]
                },
                "id": "node/3377298705"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3539477914",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1289592,
                        49.2380524
                    ]
                },
                "id": "node/3539477914"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3624198393",
                    "amenity": "charging_station",
                    "description": "Level 3",
                    "motorcar": "yes",
                    "name": "EcoDairy ABB Fast-Charge",
                    "opening_hours": "24/7",
                    "operator": "Greenlots Canada",
                    "phone": "+1-604-547-5481",
                    "socket:chademo": "1",
                    "website": "https://greenlots.com/"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.264813,
                        49.0281998
                    ]
                },
                "id": "node/3624198393"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3672806360",
                    "amenity": "charging_station",
                    "name": "Tesla Supercharger",
                    "operator": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1336288,
                        49.7368036
                    ]
                },
                "id": "node/3672806360"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3722620457",
                    "amenity": "charging_station",
                    "description": "Greenlots app required on smartphone to enable charging. The charger is located on level P1 below Walmart. Station is located in front of the security office.",
                    "operator": "Greenlots",
                    "socket:chademo": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3742316,
                        48.4550307
                    ]
                },
                "id": "node/3722620457"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/3960674219",
                    "amenity": "charging_station",
                    "name": "Chilliwack Visitor Centre Charging Station",
                    "operator": "City of Chilliwack",
                    "source": "http://www.waymarking.com/waymarks/WMMKT1_Chilliwack_Visitor_Centre_Charging_Station_Chilliwack_British_Columbia_Canada"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.0019625,
                        49.1433904
                    ]
                },
                "id": "node/3960674219"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4117198390",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0892924,
                        49.1341667
                    ]
                },
                "id": "node/4117198390"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4249899929",
                    "amenity": "charging_station",
                    "capacity": "1",
                    "name": "Greenlots",
                    "opening_hours": "24/7",
                    "socket:chademo": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0770127,
                        49.3112738
                    ]
                },
                "id": "node/4249899929"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4249902481",
                    "amenity": "charging_station",
                    "opening_hours": "24/7",
                    "socket:chademo": "1",
                    "socket:type2_combo": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0338301,
                        49.2814408
                    ]
                },
                "id": "node/4249902481"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4249904301",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "fee": "no",
                    "name": "ChargePoint",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0435344,
                        49.2863928
                    ]
                },
                "id": "node/4249904301"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4249911171",
                    "amenity": "charging_station",
                    "capacity": "8",
                    "fee": "yes",
                    "name": "Electric Charging Station",
                    "opening_hours": "24/7",
                    "socket:chademo": "2",
                    "socket:type1": "6"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9994277,
                        49.2497468
                    ]
                },
                "id": "node/4249911171"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4249914908",
                    "amenity": "charging_station",
                    "capacity": "1",
                    "fee": "no",
                    "opening_hours": "24/7",
                    "socket:type1": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1527256,
                        49.7023623
                    ]
                },
                "id": "node/4249914908"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4249916164",
                    "amenity": "charging_station",
                    "capacity": "1",
                    "name": "Greenlots",
                    "opening_hours": "24/7",
                    "socket:chademo": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1553424,
                        49.6980291
                    ]
                },
                "id": "node/4249916164"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4278368690",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "fee": "no",
                    "name": "GE",
                    "operator": "TD Canada Trust",
                    "source": "http://www.newswire.ca/news-releases/td-launches-courtesy-electric-vehicle-charging-initiative-in-bc-561820261.html"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.3148725,
                        49.0515295
                    ]
                },
                "id": "node/4278368690"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4278776381",
                    "amenity": "charging_station",
                    "capacity": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.3133463,
                        49.0366844
                    ]
                },
                "id": "node/4278776381"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4278823823",
                    "amenity": "charging_station",
                    "capacity": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.3136344,
                        49.0364862
                    ]
                },
                "id": "node/4278823823"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4308247993",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3974991,
                        48.6477582
                    ]
                },
                "id": "node/4308247993"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4346317865",
                    "amenity": "charging_station",
                    "name": "Electric Vehicle"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.5119203,
                        48.8610932
                    ]
                },
                "id": "node/4346317865"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4351961028",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.8080358,
                        49.2307519
                    ]
                },
                "id": "node/4351961028"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4367137538",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.4506041,
                        49.3455518
                    ]
                },
                "id": "node/4367137538"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4562611047",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "description": "J-1772 Plug Level 2 13kW Chargers in front of Kamloops Visitor Centre.",
                    "name": "Sun Country Lvl 2 Chargers"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.368111,
                        50.6549596
                    ]
                },
                "id": "node/4562611047"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620106806",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "6",
                    "operator": "ChargePoint",
                    "socket:type1": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0838957,
                        49.0422714
                    ]
                },
                "id": "node/4620106806"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620106808",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "10",
                    "operator": "ChargePoint",
                    "socket:type1": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.086359,
                        49.0421427
                    ]
                },
                "id": "node/4620106808"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620106813",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0836266,
                        49.0375722
                    ]
                },
                "id": "node/4620106813"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620106814",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0850223,
                        49.0371495
                    ]
                },
                "id": "node/4620106814"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620106815",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0885,
                        49.0349
                    ]
                },
                "id": "node/4620106815"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620106817",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "4",
                    "operator": "ChargePoint",
                    "socket:type1": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0892713,
                        49.0421228
                    ]
                },
                "id": "node/4620106817"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620137724",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0862077,
                        49.0394797
                    ]
                },
                "id": "node/4620137724"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620137725",
                    "amenity": "charging_station",
                    "capacity": "4",
                    "operator": "Flo",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.081,
                        49.0386
                    ]
                },
                "id": "node/4620137725"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620137726",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0835209,
                        49.0405001
                    ]
                },
                "id": "node/4620137726"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620137730",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0887442,
                        49.0376956
                    ]
                },
                "id": "node/4620137730"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4620173035",
                    "amenity": "charging_station",
                    "socket:type1": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1358,
                        49.1623
                    ]
                },
                "id": "node/4620173035"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4685793854",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.8663924,
                        49.0326289
                    ]
                },
                "id": "node/4685793854"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4696712189",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.2683384,
                        49.0359657
                    ]
                },
                "id": "node/4696712189"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4709409820",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9110802,
                        49.2069215
                    ]
                },
                "id": "node/4709409820"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4773890095",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1258652,
                        49.2902322
                    ]
                },
                "id": "node/4773890095"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4777741121",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1372036,
                        49.2786363
                    ]
                },
                "id": "node/4777741121"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4824168921",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1397942,
                        49.2814695
                    ]
                },
                "id": "node/4824168921"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4839078104",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "level": "5",
                    "operator": "Chargepoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.850397,
                        49.1863894
                    ]
                },
                "id": "node/4839078104"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4839078105",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "chargepoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.846724,
                        49.1853184
                    ]
                },
                "id": "node/4839078105"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4842907224",
                    "amenity": "charging_station",
                    "capacity": "3",
                    "operator": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1188266,
                        49.2768255
                    ]
                },
                "id": "node/4842907224"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4866807262",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.7173261,
                        48.9234634
                    ]
                },
                "id": "node/4866807262"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/4952961137",
                    "amenity": "charging_station",
                    "capacity": "50",
                    "name": "BCHydro - Cranbrook"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -115.7666977,
                        49.5130792
                    ]
                },
                "id": "node/4952961137"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5037545751",
                    "amenity": "charging_station",
                    "name": "Electric Charging Station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0001406,
                        49.2537233
                    ]
                },
                "id": "node/5037545751"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5044438780",
                    "access": "customers",
                    "addr:city": "Hope",
                    "addr:housenumber": "835",
                    "addr:postcode": "V0X 1L0",
                    "addr:street": "Fraser Avenue",
                    "amenity": "charging_station",
                    "capacity": "6",
                    "description": "150kW Level 3 Superchargers",
                    "name": "Hope Supercharger",
                    "operator": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -121.442732,
                        49.3783582
                    ]
                },
                "id": "node/5044438780"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5048781558",
                    "amenity": "charging_station",
                    "name": "Electric Charging Station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0039381,
                        49.2512216
                    ]
                },
                "id": "node/5048781558"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5048806681",
                    "amenity": "charging_station",
                    "name": "Electric Charging Station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0041194,
                        49.2464535
                    ]
                },
                "id": "node/5048806681"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5093038941",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "fee": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0712507,
                        49.2760187
                    ]
                },
                "id": "node/5093038941"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5093528448",
                    "amenity": "charging_station",
                    "capacity": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1242412,
                        49.2826515
                    ]
                },
                "id": "node/5093528448"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5125116966",
                    "amenity": "charging_station",
                    "capacity": "3"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1137326,
                        49.2624543
                    ]
                },
                "id": "node/5125116966"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5159850173",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.3631226,
                        50.6701374
                    ]
                },
                "id": "node/5159850173"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5251176363",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4021034,
                        48.6443987
                    ]
                },
                "id": "node/5251176363"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5358058906",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1678327,
                        49.1936706
                    ]
                },
                "id": "node/5358058906"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5358058907",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.167905,
                        49.1936881
                    ]
                },
                "id": "node/5358058907"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5358059052",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1697835,
                        49.1939401
                    ]
                },
                "id": "node/5358059052"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5615933596",
                    "amenity": "charging_station",
                    "fee": "yes",
                    "parking:fee": "no"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.2224137,
                        49.2588778
                    ]
                },
                "id": "node/5615933596"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5726650821",
                    "amenity": "charging_station",
                    "capacity": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.112999,
                        49.2821222
                    ]
                },
                "id": "node/5726650821"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5726650921",
                    "amenity": "charging_station",
                    "capacity": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1128941,
                        49.2821862
                    ]
                },
                "id": "node/5726650921"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5810825284",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "City of Maple Ridge / ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.6013053,
                        49.2194694
                    ]
                },
                "id": "node/5810825284"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5810825293",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "City of Maple Ridge / ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.5988275,
                        49.2203566
                    ]
                },
                "id": "node/5810825293"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5855481260",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -117.8004393,
                        49.0776663
                    ]
                },
                "id": "node/5855481260"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/5872497085",
                    "amenity": "charging_station",
                    "car": "yes",
                    "operator": "BC Hydro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.9883679,
                        49.6981524
                    ]
                },
                "id": "node/5872497085"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6045219194",
                    "amenity": "charging_station",
                    "capacity": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.7925828,
                        50.3148296
                    ]
                },
                "id": "node/6045219194"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6116990407",
                    "access": "permit",
                    "amenity": "charging_station",
                    "authentication": "yes",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "fee": "yes",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.071317,
                        49.1748486
                    ]
                },
                "id": "node/6116990407"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6116990408",
                    "access": "permit",
                    "amenity": "charging_station",
                    "authentication": "yes",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "fee": "yes",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0722612,
                        49.1738469
                    ]
                },
                "id": "node/6116990408"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6116990409",
                    "access": "permit",
                    "amenity": "charging_station",
                    "authentication": "yes",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "fee": "yes",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0698856,
                        49.1733908
                    ]
                },
                "id": "node/6116990409"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6116990410",
                    "access": "permit",
                    "amenity": "charging_station",
                    "authentication": "yes",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "fee": "yes",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0705458,
                        49.1724975
                    ]
                },
                "id": "node/6116990410"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6160108283",
                    "amenity": "charging_station",
                    "brand": "Tesla Supercharger",
                    "brand:wikidata": "Q17089620",
                    "brand:wikipedia": "en:Tesla Supercharger",
                    "capacity": "12",
                    "fee": "yes",
                    "name": "Tesla Supercharger",
                    "opening_hours": "24/7",
                    "operator": "Tesla, Inc.",
                    "operator:wikidata": "Q478214",
                    "operator:wikipedia": "en:Tesla, Inc.",
                    "socket:tesla_supercharger": "12",
                    "socket:tesla_supercharger:output": "150 kW",
                    "website": "https://www.tesla.com/findus?location=tsawwassensupercharger"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0826558,
                        49.0380865
                    ]
                },
                "id": "node/6160108283"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6173799903",
                    "amenity": "charging_station",
                    "capacity": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3996268,
                        48.6419624
                    ]
                },
                "id": "node/6173799903"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6366648802",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.388327,
                        48.4931276
                    ]
                },
                "id": "node/6366648802"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6444403518",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.5106896,
                        48.4381735
                    ]
                },
                "id": "node/6444403518"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6444403541",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.5110193,
                        48.4397982
                    ]
                },
                "id": "node/6444403541"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6498992987",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.4428305,
                        49.3459866
                    ]
                },
                "id": "node/6498992987"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6575410245",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.3994303,
                        49.9396408
                    ]
                },
                "id": "node/6575410245"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6575410246",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.3994195,
                        49.9395718
                    ]
                },
                "id": "node/6575410246"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6575410262",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.394164,
                        49.9395204
                    ]
                },
                "id": "node/6575410262"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6593867924",
                    "amenity": "charging_station",
                    "car": "yes",
                    "operator": "BC Hydro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4038548,
                        48.6478392
                    ]
                },
                "id": "node/6593867924"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6612409992",
                    "amenity": "charging_station",
                    "capacity": "1",
                    "operator": "Chargepoint",
                    "socket:type1": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9540816,
                        50.1172042
                    ]
                },
                "id": "node/6612409992"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6612409993",
                    "amenity": "charging_station",
                    "capacity": "8",
                    "socket:type1": "8"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.952521,
                        50.1148332
                    ]
                },
                "id": "node/6612409993"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6612424929",
                    "amenity": "charging_station",
                    "capacity": "4",
                    "socket:type1": "4",
                    "socket:type1:current": "72"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.960017,
                        50.1439289
                    ]
                },
                "id": "node/6612424929"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6612426655",
                    "amenity": "charging_station",
                    "capacity": "5",
                    "level": "-1",
                    "socket:chademo": "1",
                    "socket:tesla_standard": "2",
                    "socket:type1": "1",
                    "socket:type1_combo": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9580596,
                        50.11525
                    ]
                },
                "id": "node/6612426655"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6655801383",
                    "amenity": "charging_station",
                    "name": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -121.3900602,
                        51.3178959
                    ]
                },
                "id": "node/6655801383"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6758201190",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.7858569,
                        49.0632826
                    ]
                },
                "id": "node/6758201190"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6765185922",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Chargepoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0949093,
                        49.1331473
                    ]
                },
                "id": "node/6765185922"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6833562237",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "charging_station:output": "13.2 kW"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -125.2447086,
                        50.027201
                    ]
                },
                "id": "node/6833562237"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6833575722",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "charging_station:output": "13.2 kW"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -125.2470002,
                        50.0014251
                    ]
                },
                "id": "node/6833575722"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6872286831",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "BC Hydro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.4435383,
                        49.3462379
                    ]
                },
                "id": "node/6872286831"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6939672822",
                    "access": "permit",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "fee": "yes",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0721936,
                        49.1749071
                    ]
                },
                "id": "node/6939672822"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/6939715559",
                    "access": "permit",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "fee": "yes",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0714465,
                        49.1764283
                    ]
                },
                "id": "node/6939715559"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7022981321",
                    "access": "private",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.6818945,
                        49.1095463
                    ]
                },
                "id": "node/7022981321"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7082535861",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.706998,
                        48.778546
                    ]
                },
                "id": "node/7082535861"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7090615735",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.9678503,
                        49.1909016
                    ]
                },
                "id": "node/7090615735"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7090621155",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.6990696,
                        48.7777902
                    ]
                },
                "id": "node/7090621155"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7090623624",
                    "amenity": "charging_station",
                    "socket:chademo": "yes",
                    "socket:type1_combo": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -125.2460701,
                        50.0257009
                    ]
                },
                "id": "node/7090623624"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7090624239",
                    "amenity": "charging_station",
                    "name": "CCS/CHAdeMO"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.9535605,
                        49.1826681
                    ]
                },
                "id": "node/7090624239"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7090638494",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.8555275,
                        49.5246751
                    ]
                },
                "id": "node/7090638494"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7347523500",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.4652644,
                        49.8828606
                    ]
                },
                "id": "node/7347523500"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7391383017",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.0629669,
                        48.8180583
                    ]
                },
                "id": "node/7391383017"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7393889981",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.6409254,
                        48.8650834
                    ]
                },
                "id": "node/7393889981"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7418148153",
                    "amenity": "charging_station",
                    "capacity": "10"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0815866,
                        49.0425154
                    ]
                },
                "id": "node/7418148153"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7464432406",
                    "amenity": "charging_station",
                    "authentication:nfc": "yes",
                    "capacity": "2",
                    "operator": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0894218,
                        49.0409547
                    ]
                },
                "id": "node/7464432406"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7535883822",
                    "access": "yes",
                    "amenity": "charging_station",
                    "authentication:none": "yes",
                    "capacity": "2",
                    "fee": "no",
                    "voltage": "230"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.009018,
                        49.1470634
                    ]
                },
                "id": "node/7535883822"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7535883823",
                    "access": "yes",
                    "amenity": "charging_station",
                    "authentication:none": "yes",
                    "capacity": "2",
                    "fee": "no",
                    "voltage": "230"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0087301,
                        49.1464608
                    ]
                },
                "id": "node/7535883823"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7560995630",
                    "access": "yes",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "6",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0148235,
                        49.1443218
                    ]
                },
                "id": "node/7560995630"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7576257904",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3668385,
                        48.4188078
                    ]
                },
                "id": "node/7576257904"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7576257905",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.3668426,
                        48.4188398
                    ]
                },
                "id": "node/7576257905"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7610499431",
                    "amenity": "charging_station",
                    "description": "this is temporary, currently surveying the Fraser Canyon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -121.44022,
                        49.8599934
                    ]
                },
                "id": "node/7610499431"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7633392432",
                    "access": "yes",
                    "amenity": "charging_station",
                    "capacity": "50",
                    "charge": "$0.35/kWh with a $2 minimum",
                    "fee": "yes",
                    "name": "Merritt Visitor Info Centre BC Hydro EV",
                    "payment:credit_cards": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.7875295,
                        50.1131609
                    ]
                },
                "id": "node/7633392432"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7633392433",
                    "access": "yes",
                    "amenity": "charging_station",
                    "capacity": "200",
                    "charge": "$0.27/min",
                    "fee": "yes",
                    "name": "Petro-Canada",
                    "payment:credit_cards": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.7653683,
                        50.123465
                    ]
                },
                "id": "node/7633392433"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7633392434",
                    "access": "yes",
                    "amenity": "charging_station",
                    "capacity": "350",
                    "charge": "$1 plus $1.07/min at 125kW or more, $0.77/min between 125kW and 75kW, $0.27/min at 75kW or less. Pass+ pricing: $0.82/min at 125kW or more, $0.59/min between 125kW and 75kW, $0.21/min at 75kW or less.",
                    "fee": "yes",
                    "name": "Electrify Canada",
                    "payment:credit_cards": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.7608884,
                        50.1226314
                    ]
                },
                "id": "node/7633392434"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7633392435",
                    "access": "customers",
                    "amenity": "charging_station",
                    "brand": "Tesla Supercharger",
                    "brand:wikidata": "Q17089620",
                    "brand:wikipedia": "en:Tesla Supercharger",
                    "capacity": "8",
                    "description": "150kW Level 3 Supercharger",
                    "fee": "yes",
                    "name": "Tesla Supercharger"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.750824,
                        50.1245938
                    ]
                },
                "id": "node/7633392435"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7639718605",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.507027,
                        49.4598594
                    ]
                },
                "id": "node/7639718605"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7640510148",
                    "access": "yes",
                    "amenity": "charging_station",
                    "capacity": "2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.8296205,
                        49.2049393
                    ]
                },
                "id": "node/7640510148"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7645412534",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.5496315,
                        49.1859741
                    ]
                },
                "id": "node/7645412534"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7657271409",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0416137,
                        49.0150469
                    ]
                },
                "id": "node/7657271409"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7658860359",
                    "amenity": "charging_station",
                    "socket:type1": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9545789,
                        50.131603
                    ]
                },
                "id": "node/7658860359"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7660062554",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.6904608,
                        49.1051437
                    ]
                },
                "id": "node/7660062554"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7686310038",
                    "access": "yes",
                    "amenity": "charging_station",
                    "authentication:membership_card": "yes",
                    "authentication:nfc": "yes",
                    "authentication:phone_call": "yes",
                    "capacity": "2",
                    "fee": "no",
                    "motorcar": "yes",
                    "name": "BC Hydro - Vancouver - Kerrisdale",
                    "opening_hours": "08:00-17:00",
                    "operator": "BC Hydro",
                    "ref": "BC1-00142",
                    "socket:chademo": "1",
                    "socket:type1_combo": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1553445,
                        49.235905
                    ]
                },
                "id": "node/7686310038"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7686399449",
                    "access": "yes",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "fee": "no",
                    "name": "City of Delta - Ladner Leisure Centre",
                    "operator": "Flo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0587586,
                        49.0868773
                    ]
                },
                "id": "node/7686399449"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7715250704",
                    "access": "private",
                    "amenity": "charging_station",
                    "capacity": "1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1331767,
                        49.2032248
                    ]
                },
                "id": "node/7715250704"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7750424944",
                    "amenity": "charging_station",
                    "operator": "Electrify Canada"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.3796874,
                        50.6546476
                    ]
                },
                "id": "node/7750424944"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7831016126",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.3103304,
                        49.3225021
                    ]
                },
                "id": "node/7831016126"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7882503381",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "2",
                    "name": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9135743,
                        49.2785204
                    ]
                },
                "id": "node/7882503381"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7883920769",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.4423958,
                        50.7054112
                    ]
                },
                "id": "node/7883920769"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7900899982",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.0582241,
                        48.8233302
                    ]
                },
                "id": "node/7900899982"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7932406880",
                    "amenity": "charging_station",
                    "note": "photo https://westnordost.de/p/18933.jpg",
                    "operator": "BC Hydro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -125.587964,
                        48.9922558
                    ]
                },
                "id": "node/7932406880"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7937407259",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -126.6492594,
                        54.4002973
                    ]
                },
                "id": "node/7937407259"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7937499545",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.9358253,
                        49.7506005
                    ]
                },
                "id": "node/7937499545"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7940334600",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.2285708,
                        53.0352994
                    ]
                },
                "id": "node/7940334600"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7943241158",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.5082456,
                        49.4004875
                    ]
                },
                "id": "node/7943241158"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7972068020",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1505231,
                        49.7025271
                    ]
                },
                "id": "node/7972068020"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/7985362826",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.8009267,
                        50.3194722
                    ]
                },
                "id": "node/7985362826"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8049282657",
                    "access": "yes",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "DC Fast Charger",
                    "charge": "0",
                    "fee": "yes",
                    "name": "ChargePoint",
                    "operator": "ChargePoint",
                    "socket:chademo": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.2852676,
                        49.0294736
                    ]
                },
                "id": "node/8049282657"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8049282869",
                    "access": "yes",
                    "amenity": "charging_station",
                    "amenity_1": "parking_space",
                    "capacity": "2",
                    "charge": "0",
                    "fee": "no",
                    "operator": "Flo",
                    "socket:type2": "j1772"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.264021,
                        49.0484198
                    ]
                },
                "id": "node/8049282869"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8049284517",
                    "access": "permissive",
                    "amenity": "charging_station",
                    "amenity_1": "parking_space",
                    "capacity": "2",
                    "charge": "0",
                    "fee": "yes",
                    "operator": "Flo",
                    "plug": "j1772"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.2989348,
                        49.0443904
                    ]
                },
                "id": "node/8049284517"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8049294054",
                    "access": "permissive",
                    "amenity": "charging_station",
                    "amenity_1": "parking_space",
                    "capacity": "2",
                    "charge": "0",
                    "fee": "yes",
                    "operator": "Flo",
                    "plug": "j1772"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.2550499,
                        49.0685191
                    ]
                },
                "id": "node/8049294054"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8059418514",
                    "amenity": "charging_station",
                    "brand": "ChargePoint",
                    "brand:wikidata": "Q5176149",
                    "brand:wikipedia": "en:ChargePoint",
                    "capacity": "4",
                    "name": "ChargePoint",
                    "parking_space": "4",
                    "socket:type2": "J1772"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.2617285,
                        49.0478586
                    ]
                },
                "id": "node/8059418514"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8076056535",
                    "amenity": "charging_station",
                    "website": "https://www.plugshare.com/location/175601"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.3150824,
                        49.0572649
                    ]
                },
                "id": "node/8076056535"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8076735054",
                    "amenity": "charging_station",
                    "website": "https://www.plugshare.com/location/180535"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.3146096,
                        49.0572339
                    ]
                },
                "id": "node/8076735054"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8140359891",
                    "amenity": "charging_station",
                    "capacity": "8",
                    "socket:type1": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9519909,
                        50.1156816
                    ]
                },
                "id": "node/8140359891"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8140359892",
                    "amenity": "charging_station",
                    "capacity": "8",
                    "socket:type1": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.9528465,
                        50.1188041
                    ]
                },
                "id": "node/8140359892"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8140359893",
                    "amenity": "charging_station",
                    "capacity": "4",
                    "level": "0",
                    "socket:type1": "4"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.95799,
                        50.1152208
                    ]
                },
                "id": "node/8140359893"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8171747193",
                    "amenity": "charging_station",
                    "operator": "BC Hydro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.7837222,
                        49.2674735
                    ]
                },
                "id": "node/8171747193"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8181576322",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.1706722,
                        49.1013527
                    ]
                },
                "id": "node/8181576322"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8186169693",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.4354187,
                        49.0286094
                    ]
                },
                "id": "node/8186169693"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8223167842",
                    "amenity": "charging_station",
                    "operator": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0130004,
                        49.2257169
                    ]
                },
                "id": "node/8223167842"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8276471945",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4790712,
                        48.4312679
                    ]
                },
                "id": "node/8276471945"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8276471946",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4791338,
                        48.4312444
                    ]
                },
                "id": "node/8276471946"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8282321734",
                    "access": "yes",
                    "amenity": "charging_station",
                    "brand": "Tesla Supercharger",
                    "brand:wikidata": "Q17089620",
                    "brand:wikipedia": "en:Tesla Supercharger",
                    "description": "4 Stalls",
                    "name": "Tesla Supercharger"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -116.9745976,
                        51.3127229
                    ]
                },
                "id": "node/8282321734"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8285094898",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4782164,
                        48.431708
                    ]
                },
                "id": "node/8285094898"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8325719513",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "charging_station:output": "13.2 kW",
                    "operator": "ChargePoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.9240141,
                        49.6739481
                    ]
                },
                "id": "node/8325719513"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8326635159",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Chargepoint"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0988651,
                        49.1322113
                    ]
                },
                "id": "node/8326635159"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8443742771",
                    "amenity": "charging_station",
                    "brand": "Flo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.046938,
                        49.0071874
                    ]
                },
                "id": "node/8443742771"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8444293570",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4163814,
                        48.493096
                    ]
                },
                "id": "node/8444293570"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8444293583",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.415387,
                        48.4900381
                    ]
                },
                "id": "node/8444293583"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8444293584",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4153453,
                        48.4900699
                    ]
                },
                "id": "node/8444293584"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8444293585",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.4152973,
                        48.4901114
                    ]
                },
                "id": "node/8444293585"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8591367834",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.6963576,
                        49.0624575
                    ]
                },
                "id": "node/8591367834"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8612588872",
                    "access": "yes",
                    "amenity": "charging_station",
                    "capacity": "4",
                    "name": "eBike Charging Station",
                    "operator": "District of North Vancouver"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0926395,
                        49.3362093
                    ]
                },
                "id": "node/8612588872"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8616704691",
                    "amenity": "charging_station",
                    "brand": "BC Hydro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.2751191,
                        49.3737154
                    ]
                },
                "id": "node/8616704691"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8648338276",
                    "access": "customers",
                    "amenity": "charging_station",
                    "capacity": "8",
                    "description": "250kW Level 3 Superchargers",
                    "name": "Princeton Supercharger",
                    "operator": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.506302,
                        49.4578951
                    ]
                },
                "id": "node/8648338276"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8648357960",
                    "access": "customers",
                    "amenity": "charging_station",
                    "capacity": "6",
                    "description": "150kW Level 3 Superchargers, one offset to allow Tesla's towing trailers to pull in for a recharge.",
                    "name": "Kamloops Supercharger",
                    "operator": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.36808,
                        50.6552522
                    ]
                },
                "id": "node/8648357960"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8648379469",
                    "access": "private",
                    "amenity": "charging_station",
                    "capacity": "20",
                    "description": "70kW Level 3 Urban Superchargers",
                    "name": "Surrey Supercharger",
                    "operator": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.8060562,
                        49.1922892
                    ]
                },
                "id": "node/8648379469"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8648615720",
                    "access": "private",
                    "address": "1090 Lougheed Hwy",
                    "amenity": "charging_station",
                    "capacity": "12",
                    "description": "250kW Level 3 Highway Supercharger's. Under construction in March-April 2021. Opening Soon!  Walking distance to Fast Food!!",
                    "name": "Coquitlam Supercharger",
                    "operator": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.86237,
                        49.2343195
                    ]
                },
                "id": "node/8648615720"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8648681216",
                    "access": "private",
                    "address": "2032 Lonsdale Avenue",
                    "amenity": "charging_station",
                    "brand": "Tesla",
                    "capacity": "8",
                    "description": "250kW Level 3 Highway Supercharger's.",
                    "name": "North Vancouver Supercharger",
                    "operator": "Tesla"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0708744,
                        49.3277949
                    ]
                },
                "id": "node/8648681216"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8653280005",
                    "amenity": "charging_station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.6409048,
                        49.1633599
                    ]
                },
                "id": "node/8653280005"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8727095505",
                    "access": "yes",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.905302,
                        49.1563645
                    ]
                },
                "id": "node/8727095505"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8732959685",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "Flo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.0662419,
                        49.0358985
                    ]
                },
                "id": "node/8732959685"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8732966028",
                    "amenity": "charging_station",
                    "capacity": "2",
                    "operator": "BC Hydro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -123.068096,
                        49.0355661
                    ]
                },
                "id": "node/8732966028"
            },
            {
                "type": "Feature",
                "properties": {
                    "@id": "node/8773968186",
                    "amenity": "charging_station",
                    "capacity": "4",
                    "operator": "Flo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.790446,
                        49.2864576
                    ]
                },
                "id": "node/8773968186"
            }
        ]
    }

    return (
        <MapContainer center={[49.2248, -123.1085]} zoom={5} scrollWheelZoom={true} style={{ height: "80vh" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                data.features.map(station => (
                    station.geometry.type === "Point" && <Marker key={station.id} position={[station.geometry.coordinates[1], station.geometry.coordinates[0]]} />
                ))
            }
        </MapContainer>
    )
}

export default Stations
