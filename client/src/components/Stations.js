import {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Stations = () => {

    // State for stations
    const [stations, setStations] = useState([]);

    useEffect(() => {
        // Initially when the component renders the unmounted variable set to false.
		let unmounted = false;

		const getStations = async () => {
			// Set the state only when the component is mounted
			if (!unmounted) {
                const url = "/api/stations";
                const res = await fetch(url);
                const data = await res.json();
                
                // Set stations
				setStations(data.filter(station => station.geometry.type === "Point"));
			}
		};

        // Fetch stations
        getStations();

		// After this component gets unmounted unsubscribe any background calls.
		return () => {
			unmounted = true;
		};
    }, [])

    return (
        <MapContainer center={[49.2248, -123.1085]} zoom={5} scrollWheelZoom={true} style={{ height: "80vh" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                stations.map(station => (
                    <Marker key={station.id} position={[station.geometry.coordinates[1], station.geometry.coordinates[0]]} />
                ))
            }
        </MapContainer>
    )
}

export default Stations
