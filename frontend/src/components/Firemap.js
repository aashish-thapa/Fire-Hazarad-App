import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const MapWrapper = styled.div`
  height: 80vh;
  width: 100%;
  margin-top: 1rem;
`;

function SetViewOnUserLocation({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView([coords.latitude, coords.longitude], 10);
    }
  }, [coords, map]);
  return null;
}

function FireMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    // Request user location access
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
    }
  }, []);
  //I just created sample data using lat and lng.. we need to find the data source to get fire prone data
  const fireData = [
    { lat: 31.3271, lng: -89.2903, radius: 3000 }, //Hattiesburg, Mississippi
    { lat: 34.0522, lng: -118.2437, radius: 5000 }, // Sample fire location

  ];

  return (
    <MapWrapper id="map">
      {locationError && <p>{locationError}</p>}
      <MapContainer
        center={userLocation ? [userLocation.latitude, userLocation.longitude] : [36.7783, -119.4179]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {userLocation && <SetViewOnUserLocation coords={userLocation} />}
        {fireData.map((fire, index) => (
          <Circle
            key={index}
            center={[fire.lat, fire.lng]}
            radius={fire.radius}
            pathOptions={{ color: 'red', fillOpacity: 0.3 }}
          />
        ))}
      </MapContainer>
    </MapWrapper>
  );
}

export default FireMap;
