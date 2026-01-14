"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import "leaflet-defaulticon-compatibility";
import { useEffect, useRef } from "react";

interface MapProps {
  position: LatLngTuple;
  zoom: number;
  height: string;
}

export default function WeddingMap(props: MapProps) {
  const { position, zoom, height } = props;
  const popupRef = useRef<L.Popup | null>(null);

  useEffect(() => {
    const popup = popupRef.current;
    if (popup) {
      popup.openPopup();
    }
  }, []);

  const empanadaBrezel = L.icon({
    iconUrl: "/emprezel.webp",
    iconSize: [50, 50],
    popupAnchor: [0, -20],
  });

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: height }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        ref={(ref) => {
          setTimeout(() => ref?.openPopup(), 500);
        }}
        position={position}
        icon={empanadaBrezel}
      >
        <Popup>
          RP26 900 <br />
          B1623 Ingeniero Maschwitz <br />
          Provincia de Buenos Aires, Argentinien
        </Popup>
      </Marker>
    </MapContainer>
  );
}
