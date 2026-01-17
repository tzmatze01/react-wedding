"use client";

import ColorSwipe from "@/components/ColorSwipe";
import RegisterDialog from "@/components/Dialog";
import CountUp from "@/components/ui/CountUp";
import GradientText from "@/components/ui/GradientText";
import Welcome from "@/components/Welcome";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useMemo } from "react";

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
      <ColorSwipe
        right="-50vw"
        top="-25vh"
        image="/green.webp"
        className="moveAnimationTop"
      />
      <ColorSwipe
        right="-50vw"
        top="-60vh"
        delay="0.3s"
        image="/green.webp"
        className="moveAnimationTop"
      />
      <ColorSwipe
        right="-70vw"
        top="-20vh"
        delay="0.6s"
        image="/green.webp"
        className="moveAnimationTop"
      />
      <ColorSwipe
        left="-65vw"
        top="50vh"
        delay="0.6s"
        image="/blue.webp"
        className="moveAnimationBottom"
      />
      <ColorSwipe
        left="-30vw"
        top="20vh"
        delay="0.3s"
        image="/blue.webp"
        className="moveAnimationBottom"
      />
      <ColorSwipe
        left="-40vw"
        top="70vh"
        image="/blue.webp"
        className="moveAnimationBottom"
      />
      <Welcome />
      <h1>Matze and Lucia</h1>
      are getting married
      <div className="card lg:w-[70vw] lg:h-[70vh] sm:w-[90vw] sm:h-[50vw]">
        <Map position={[-34.374077, -58.72908]} zoom={13} height={"40em"}></Map>
      </div>
      <div className="card lg:w-[70vw] lg:h-[70vh] sm:w-[90vw] sm:h-[50vw]">
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
      <RegisterDialog />
    </div>
  );
}
