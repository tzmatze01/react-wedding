"use client"

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {

  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
  })

  return (
    <div>
      <Map position={[-34.374077, -58.72908]} zoom={13} height={"40em"}/>
    </div>
  );
}
