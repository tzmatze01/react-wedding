"use client";

import ColorSwipe from "@/components/ColorSwipe";
import Welcome from "@/components/Welcome";
import Location from "@/components/Location";
import CountDown from "@/components/CountDown";
import Registration from "@/components/Registration";


export default function Home() {
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

      <Location />

      <CountDown />

      <Registration />

    </div>
  );
}
