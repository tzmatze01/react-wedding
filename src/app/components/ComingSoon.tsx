import { useTranslations } from "next-intl";

import ColorSwipe from "@/components/ColorSwipe";
export default function CountDown() {
  const t = useTranslations("ComingSoon");

  return (
    <div className="card w-[90vw] h-full lg:w-[70vw] lg:h-full mt-[6rem]">
      <img
        src="/blue.webp"
        alt="Wedding Logo"
        style={{
          position: "relative",
          width: "90vw",
          height: "20vh",
        }}
      />
      <div className="flex flex-center items-center h-full ">
        <span className="text-[2rem] md:text-[3rem] lg:text-[5rem] ">{t("more_information")}</span>
      </div>
      <img
        src="/green.webp"
        alt="Wedding Logo"
        style={{
          position: "relative",
          width: "90vw",
          height: "20vh",
        }}
      />
    </div>
  );
}
