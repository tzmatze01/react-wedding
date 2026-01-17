import { useMemo } from "react";
import CountUp from "./ui/CountUp";
import GradientText from "./ui/GradientText";
import { useTranslations } from "next-intl";

export default function CountDown() {
  const t = useTranslations("CountDown");
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
    <div className="card lg:w-[70vw] lg:h-[70vh] sm:w-[90vw] sm:h-[50vw] mt-[6em] flex flex-col items-center justify-center">
      <span className="lg:text-[5rem] sm:text-[3rem]">{t("see_you")}</span>
      <GradientText
        colors={["#8aaf7c", "#51627b", "#54654e", "#7ea0d3", "#8aaf7c"]}
        animationSpeed={3}
        showBorder={false}
          className="lg:text-[15rem] sm:text-[10rem]"
      >
        <CountUp direction="down" from={numDays} to={365} />
      </GradientText>
      <span className="lg:text-[5rem] sm:text-[3rem]">{t("days")}</span>
    </div>
  );
}
