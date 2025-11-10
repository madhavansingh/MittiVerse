import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function FarmMap({ farm }) {
  const position = [farm.latitude, farm.longitude];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Farm Location (India)</h2>
      <div className="h-96 rounded-lg overflow-hidden z-0">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
          attributionControl={false} // ✅ Disable default Leaflet attribution
        >
          <TileLayer
          
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {farm.name} <br /> {farm.location_text}, India
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* ✅ Custom attribution (optional) */}
      <p className="text-xs text-gray-400 text-center mt-2">
        Map data © <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap</a> contributors
      </p>
    </div>
  );
}

export default FarmMap;
