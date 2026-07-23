import "./VehiclePanel.css";

interface Vehicle {
  id: string;
  lat: number;
  lng: number;
  speed: number;
  status: string;
}

interface VehiclePanelProps {
  vehicle: Vehicle;
}

export default function VehiclePanel({ vehicle }: VehiclePanelProps) {
  return (
    <div className="vehicle-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span className={`status-badge ${vehicle.status}`}>
            ● {vehicle.status.toUpperCase()}
          </span>
          <h2>{vehicle.id}</h2>
        </div>
      </div>

      <div className="panel-content">
        <div className="info-group">
          <label>Speed</label>
          <div className="speed-display">
            <span className="speed-value">{vehicle.speed.toFixed(1)}</span>
            <span className="speed-unit">km/h</span>
          </div>
          <div className="speed-bar">
            <div 
              className="speed-bar-fill" 
              style={{ width: `${Math.min((vehicle.speed / 100) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="info-group">
          <label>Location</label>
          <div className="location-info">
            <div className="coord">
              <span className="coord-label">Latitude</span>
              <span className="coord-value">{vehicle.lat.toFixed(6)}</span>
            </div>
            <div className="coord">
              <span className="coord-label">Longitude</span>
              <span className="coord-value">{vehicle.lng.toFixed(6)}</span>
            </div>
          </div>
        </div>

        <div className="info-group">
          <label>Details</label>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Vehicle ID</span>
              <span className="detail-value">{vehicle.id}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className={`detail-value status-${vehicle.status}`}>
                {vehicle.status === "online" ? "🟢 Online" : "🔴 Offline"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel-footer">
        <button className="action-btn">📍 Track Route</button>
        <button className="action-btn">📞 Contact Driver</button>
      </div>
    </div>
  );
}