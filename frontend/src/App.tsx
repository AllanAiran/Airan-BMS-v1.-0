import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const initialVehicles = [
  { id: "Vehicle-001", lat: 14.5995, lng: 120.9842, speed: 35 },
  { id: "Vehicle-002", lat: 14.6050, lng: 120.9900, speed: 42 },
  { id: "Vehicle-003", lat: 14.5930, lng: 120.9780, speed: 28 }
];

export default function App() {
  const [vehicles, setVehicles] = useState(initialVehicles);

  useEffect(() => {
    const timer = setInterval(() => {
      setVehicles(prev =>
        prev.map(v => ({
          ...v,
          lat: v.lat + (Math.random() - 0.5) * 0.0005,
          lng: v.lng + (Math.random() - 0.5) * 0.0005
        }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <MapContainer
      center={[14.5995, 120.9842]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {vehicles.map(vehicle => (
        <Marker
          key={vehicle.id}
          icon={icon}
          position={[vehicle.lat, vehicle.lng]}
        >
          <Popup>
            <b>{vehicle.id}</b>
            <br />
            Speed: {vehicle.speed} km/h
            <br />
            Status: Online
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}