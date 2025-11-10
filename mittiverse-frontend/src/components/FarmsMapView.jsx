import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function FarmsMapView({ farms }) {
  const defaultCenter = [22.3511148, 78.6677428];

  return (
    <div className="relative h-[75vh] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer 
        center={defaultCenter} 
        zoom={7} 
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}  // <-- Disable Leaflet's default attribution
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          
        />
        {farms.map(farm => (
          <Marker key={farm.id} position={[farm.latitude, farm.longitude]}>
            <Popup>
              <div className="font-sans">
                <h4 className="font-bold text-md mb-1">{farm.name}</h4>
                <p className="text-sm text-gray-600">{farm.location_text}</p>
                <Link to={`/app/farms/${farm.id}`} className="text-primary text-sm font-semibold mt-2 block">
                  View Details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Custom attribution */}
      <div className="absolute bottom-2 right-2 bg-white/90 px-3 py-1 rounded text-sm text-gray-700 shadow-md pointer-events-none">
        🇮🇳 India | <span className="font-semibold text-green-600">MittiVerse</span>
      </div>
    </div>
  );
}

export default FarmsMapView;
