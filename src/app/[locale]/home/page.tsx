"use client";

import ColorSwipe from "@/components/ColorSwipe";
import Welcome from "@/components/Welcome";
import Location from "@/components/Location";
import CountDown from "@/components/CountDown";
import Registration from "@/components/Registration";
import ComingSoon from "@/components/ComingSoon";
import { useWindowSize } from "@/lib/hook";
import Image from "next/image";
import { toast } from "sonner";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Home() {
  const { width } = useWindowSize();
  const t = useTranslations("ComingSoon");

  useEffect(() => {
    toast(t("more_information"), {
      className: "text-center flex flex-col items-center",
      duration: Infinity,
    });
  });

  return (
    <div className="app">
      <div>
        {width > 768 ? (
          <>
            <ColorSwipe right="-50vw" top="-25vh" image="/green.webp" className="moveAnimationTop" />
            <ColorSwipe right="-50vw" top="-60vh" delay="0.3s" image="/green.webp" className="moveAnimationTop" />
            <ColorSwipe right="-70vw" top="-20vh" delay="0.6s" image="/green.webp" className="moveAnimationTop" />

            <ColorSwipe left="-65vw" top="50vh" delay="0.6s" image="/blue.webp" className="moveAnimationBottom" />
            <ColorSwipe left="-30vw" top="20vh" delay="0.3s" image="/blue.webp" className="moveAnimationBottom" />
            <ColorSwipe left="-40vw" top="70vh" image="/blue.webp" className="moveAnimationBottom" />
          </>
        ) : (
          <>
            <ColorSwipe right="-50vw" top="-25vh" image="/green.webp" className="moveAnimationTop" />
            <ColorSwipe right="-50vw" top="-40vh" delay="0.3s" image="/green.webp" className="moveAnimationTop" />
            <ColorSwipe right="-70vw" top="-20vh" delay="0.6s" image="/green.webp" className="moveAnimationTop" />

            <ColorSwipe left="-75vw" bottom="40vh" delay="0.6s" image="/blue.webp" className="moveAnimationBottom" />
            <ColorSwipe left="-40vw" bottom="25vh" delay="0.3s" image="/blue.webp" className="moveAnimationBottom" />
            <ColorSwipe left="-40vw" bottom="40vh" image="/blue.webp" className="moveAnimationBottom" />
          </>
        )}
      </div>

      <Welcome />

      <Location />

      <CountDown />

      <Registration />
    </div>
  );
}
