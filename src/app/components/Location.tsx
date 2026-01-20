import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

export default function Location() {
  const t = useTranslations("Location");

  const Map = dynamic(() => import("@/components/ui/Map"), {
    ssr: false,
  });

  return (
    <div className="card w-[90vw] h-full lg:w-[70vw] lg:h-full xl:h-[70vh] mt-[6rem] grid gap-4 grid-row-3 md:grid-row-2 md:grid-cols-2">
      <div className="lg:col-span-1 flex flex-col lg:order-2">
        <span className="mb-2 lg:row-text-[1rem] text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-(--primary-blue)">
          {t("when")}
        </span>
        <span className="text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]">
          {t("date")}
        </span>
      </div>

      <div className="lg:col-span-1 lg:row-span-1 flex flex-col mt-4 md:mt-0 lg:order-3">
        <span className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-(--primary-green) mb-2">
          {t("where")}
        </span>
        <span className="text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]">
          {t("location")}
        </span>
        <span className="text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
          {t("city")}
        </span>
      </div>

      <div className="col-span-1  lg:col-span-1 lg:row-span-2 w-full lg:h-full mt-4 lg:mt-0 lg:order-1">
        <Map position={[-34.374077, -58.72908]} zoom={13} />
      </div>
    </div>
  );
}
