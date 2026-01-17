import { useEffect, useState } from "react";
import SplitText from "@/components/ui/SplitText";

export default function Home() {
  const texts = [
    <SplitText text="Welcome" />,
    <SplitText text="Willkommen" />,
    <SplitText text="Bienvenidx" />,
  ];
  const [index, setIndex] = useState(0);
  const words = ["Welcome", "Willkommen", "Bienvenidx"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % texts.length;
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <img
        src="/border.webp"
        style={{
          transform: "scaleX(-1) rotate(90deg)",
          top: 0,
          left: 0,
        }}
        className="cardBorder"
      />
      <img
        src="/border.webp"
        style={{
          transform: "scaleY(-1) scaleX(-1) rotate(270deg)",
          top: 0,
          right: 0,
        }}
        className="cardBorder"
      />
      <img
        src="/border.webp"
        style={{ transform: "scaleY(1) rotate(270deg)", 
          left: 0,
          bottom: 0 
        }}
        className="cardBorder"
      />
      <img
        src="/border.webp"
        style={{
          transform: "scaleY(1) scaleX(-1) rotate(270deg)",
          bottom: 0,
          right: 0,
        }}
        className="cardBorder"
      />
      <div className="flex flex-col flex-center items-center justify-center h-full">
        <img src="/emprezel.webp" alt="Wedding Logo" className="logo" />

        <SplitText
          key={words[index]}
          text={words[index]}
          className="subheading"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
    </div>
  );
}
