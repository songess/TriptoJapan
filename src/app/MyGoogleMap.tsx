"use client";

import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./MyGoogleMap.css";

const key = "AIzaSyBRGfQVtpyeaLhZFyQd9k35OYOEoeW17yQ";

const containerStyle = {
  width: "100%",
  height: "40vh",
};

const locations1 = [
  { place: "나리타 공항", lat: 35.77017, lng: 140.38432 },
  { place: "숙소", lat: 35.68077, lng: 139.77995 },
  { place: "후카이도 라멘", lat: 35.67948, lng: 139.78064 },
  { place: "팀랩 플래닛 도쿄", lat: 35.64912, lng: 139.78977 },
  { place: "도쿄 타워", lat: 35.65858, lng: 139.74543 },
];
const locations2 = [
  { place: "숙소", lat: 35.68077, lng: 139.77995 },
  { place: "쿠라 스시", lat: 35.6691, lng: 139.70621 },
  { place: "라포레 하라주쿠", lat: 35.66908, lng: 139.70543 },
  { place: "오모테산도 힐즈", lat: 35.66728, lng: 139.70861 },
  { place: "마리온 크레페", lat: 35.67126, lng: 139.70489 },
  { place: "타케시타 거리", lat: 35.67103, lng: 139.70518 },
  { place: "요요기 공원", lat: 35.67006, lng: 139.69496 },
  { place: "시부야 스카이", lat: 35.65844, lng: 139.70216 },
  { place: "규카츠 시부야점", lat: 35.65697, lng: 139.70399 },
  { place: "메가 돈키호테", lat: 35.66051, lng: 139.69787 },
];
const locations3 = [
  { place: "숙소", lat: 35.68077, lng: 139.77995 },
  { place: "디즈니랜드", lat: 35.63289, lng: 139.88041 },
  { place: "도쿄역", lat: 35.68123, lng: 139.76712 },
];

const locations4 = [
  { place: "숙소", lat: 35.68077, lng: 139.77995 },
  { place: "이세쥬 스키야키", lat: 35.69176, lng: 139.78066 },
  { place: "가미나리몬", lat: 35.70988, lng: 139.79492 },
  { place: "아사쿠사 멘츠카츠,요헤이", lat: 35.71291, lng: 139.79605 },
  { place: "센소지", lat: 35.71476, lng: 139.79665 },
  { place: "아사쿠사 타코마루, 이모핏피", lat: 35.71412, lng: 139.79447 },
  { place: "나리타 공항", lat: 35.77017, lng: 140.38432 },
];

type Location = {
  place: string;
  lat: number;
  lng: number;
};

interface MapProps {
  selectedIndex: number;
}

function MyGoogleMap({ selectedIndex }: MapProps) {
  const pathname = usePathname();
  const locaRef = useRef();
  let locations: Location[] = [];
  switch (pathname) {
    case "/day1":
      locations = locations1;
      break;
    case "/day2":
      locations = locations2;
      break;
    case "/day3":
      locations = locations3;
      break;
    case "/day4":
      locations = locations4;
      break;
  }
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBRGfQVtpyeaLhZFyQd9k35OYOEoeW17yQ",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [showInfo, setShowInfo] = useState(-1);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((location) => {
      if (location.place === "나리타 공항") return;
      bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
    });
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (selectedIndex != -1) {
      map?.setCenter({
        lat: locations[selectedIndex].lat,
        lng: locations[selectedIndex].lng,
      });
      setShowInfo(selectedIndex);
    }
  }, [selectedIndex]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ disableDefaultUI: true }}
    >
      {locations.map((location, index) => (
        <div key={index}>
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={location.place}
            onClick={(e) => {
              map?.setCenter({ lat: location.lat, lng: location.lng });
              setShowInfo(index);
            }}
          />
          {showInfo === index && (
            <InfoWindow position={{ lat: location.lat, lng: location.lng }}>
              <Link
                href={`https://www.google.com/maps/dir/Current+Location/${location.lat},${location.lng}`}
                className="infowindowStyle"
              >
                <p>{location.place}로 가는 방법</p>
              </Link>
            </InfoWindow>
          )}
        </div>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyGoogleMap);
