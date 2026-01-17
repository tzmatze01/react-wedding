import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

export default function Location() {


      const t = useTranslations("Location");
    
  const Map = dynamic(() => import("@/components/ui/Map"), {
    ssr: false,
  });

  return (
    <div className="card lg:w-[70vw] lg:h-[70vh] sm:w-[90vw] sm:h-[50vw] mt-[6em] flex">
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-center h-full">
                <span className="lg:text-[1rem] sm:text-[0.3rem] font-bold text-(--primary-blue)">{t("when")}</span>
                <span className="lg:text-[3rem] sm:text-[1rem]">{t("date")}</span>
            </div>
              <div className="flex flex-col items-left justify-center h-full">
                <span className="lg:text-[1rem] sm:text-[0.3rem] font-bold text-(--primary-green)">{t("where")}</span>
                <span className="lg:text-[3rem] sm:text-[1rem]">{t("location")}</span>
                <span className="lg:text-[1rem] sm:text-[0.3rem]">{t("city")}</span>
            </div>
        </div>

            <Map position={[-34.374077, -58.72908]} zoom={13} height={"20em"}/>
    </div>
  );
}
