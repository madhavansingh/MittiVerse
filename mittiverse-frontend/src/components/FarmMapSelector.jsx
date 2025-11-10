import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- Fix for default Leaflet icon ---

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;
// --- End icon fix ---



function MapClickHandler({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
}


function ChangeView({ center, zoom }) {
  const map = useMapEvents({});
  map.setView(center, zoom);
  return null;
}

function FarmMapSelector({ center, onSelect }) {
  const [position, setPosition] = useState(center || [22.3511148, 78.6677428]);



  
  const handleMapClick = useMemo(
    () => (latlng) => {
      setPosition([latlng.lat, latlng.lng]);
      onSelect(latlng);
    },
    [onSelect]
  );

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false} // Disable default attribution
      >
        <ChangeView center={position} zoom={13} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
        <MapClickHandler onSelect={handleMapClick} />
      </MapContainer>

      {/* Custom Attribution */}
      <div className="absolute bottom-2 right-2 bg-white/90 px-3 py-1 rounded text-sm text-gray-700 shadow-md pointer-events-none">
        🇮🇳 India | <span className="font-semibold text-green-600">MittiVerse</span>
      </div>
    </div>
  );
}

export default FarmMapSelector;
