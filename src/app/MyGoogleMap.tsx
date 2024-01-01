"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const key = "AIzaSyBRGfQVtpyeaLhZFyQd9k35OYOEoeW17yQ";

const containerStyle = {
  width: "100%",
  height: "40vh",
};

const center = {
  lat: 35.68077,
  lng: 139.77995,
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
};

function MyGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBRGfQVtpyeaLhZFyQd9k35OYOEoeW17yQ",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const locations = [
    { place: "후카이도 라멘", lat: 35.67948, lng: 139.78064 },
    { place: "팀랩 플래닛 도쿄", lat: 35.64912, lng: 139.78977 },
    { place: "도쿄 타워", lat: 35.65858, lng: 139.74543 },
    { place: "소바집", lat: 35.67985, lng: 139.77973 },
  ];

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    locations.forEach((location) => {
      bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
    });
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ disableDefaultUI: true }}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          label={location.place}
          
          // onClick={infoHandler}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyGoogleMap);
