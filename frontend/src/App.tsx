import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const vehicles = [
  {
    id: "Vehicle-001",
    lat: 14.5995,
    lng: 120.9842
  },
  {
    id: "Vehicle-002",
    lat: 14.6050,
    lng: 120.9900
  },
  {
    id: "Vehicle-003",
    lat: 14.5930,
    lng: 120.9780
  }
];

export default function App() {
  return (
    <MapContainer
      center={[14.5995,120.9842]}
      zoom={13}
      style={{height:"100vh",width:"100%"}}
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {vehicles.map(vehicle=>(
        <Marker
          key={vehicle.id}
          position={[vehicle.lat,vehicle.lng]}
        >
          <Popup>
            <b>{vehicle.id}</b>
            <br/>
            Status: Online
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}