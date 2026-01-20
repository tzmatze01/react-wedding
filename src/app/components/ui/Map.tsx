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
}

export default function WeddingMap(props: MapProps) {
  const { position, zoom } = props;
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
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        ref={(ref) => {
          setTimeout(() => ref?.openPopup(), 300);
        }}
        position={position}
        icon={empanadaBrezel}
      >
        <Popup>
          <a
            href="https://maps.app.goo.gl/sB5wKwY2zz1sWhqV8"
            className="text-[0.4rem] md:text-[1rem]"
          >
            RP26 900 <br />
            B1623 Ingeniero Maschwitz <br />
            Provincia de Buenos Aires, Argentinien
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
