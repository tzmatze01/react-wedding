"use client";

import CountUp from "@/components/CountUp";
import GradientText from "@/components/GradientText";
import Welcome from "@/components/Welcome";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

// const alice = localFont({ src: 'Pixeboy.ttf' })

export default function Home() {
  const t = useTranslations("Home");


  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  const numDays = useMemo(() => {
    const currentDate = new Date();
    const end = new Date("2026-11-21");

    let utc1 = Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    let utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    const timeDiff = Math.abs(utc2 - utc1);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }, []);

  return (
    <div className="app">
      
      <Welcome/>

      <div className="card">
        <Map position={[-34.374077, -58.72908]} zoom={13} height={"40em"}></Map>
      </div>
      <div className="card">
        <span style={{ fontSize: "5rem" }}>{t("see_you")}</span>
        <GradientText
          colors={["#8aaf7c", "#51627b", "#54654e", "#7ea0d3", "#8aaf7c"]}
          animationSpeed={3}
          showBorder={false}
          className="counter"
        >
          <CountUp direction="down" from={numDays} to={365} />
        </GradientText>
        <span style={{ fontSize: "5rem" }}>{t("days")}</span>
      </div>
    </div>
  );
}
