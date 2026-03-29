"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import "leaflet-defaulticon-compatibility";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

interface MapProps {
  position: LatLngTuple;
  zoom: number;
}

export default function WeddingMap(props: MapProps) {
  const t = useTranslations("Location");

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
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
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
          <a href="https://maps.app.goo.gl/VYXkK2r66PQPccVF8" className="text-[0.4rem] md:text-[1rem]">
            Av. Italia 4208, B1621DZP <br />
            Benavidez <br />
            {t("adress")}
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
