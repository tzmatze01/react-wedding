import { useEffect, useState } from "react";
import SplitText from "@/components/SplitText";

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
        console.log("Next text will be: " + texts[nextIndex]);
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
        }}
        className="border"
      />
      <img
        src="/border.webp"
        style={{
          transform: "scaleY(-1) scaleX(-1) rotate(270deg)",
          right: 0,
        }}
        className="border"
      />
      <img
        src="/border.webp"
        style={{ transform: "scaleY(1) rotate(270deg)", bottom: 0 }}
        className="border"
      />
      <img
        src="/border.webp"
        style={{
          transform: "scaleY(1) scaleX(-1) rotate(270deg)",
          bottom: 0,
          right: 0,
        }}
        className="border"
      />

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
  );
}
