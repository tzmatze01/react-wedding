import RegisterDialog from "@/components/Dialog";
import { useTranslations } from "next-intl";

export default function Registration() {
  const t = useTranslations("Registration");

  return (
    <div className="card w-[90vw] h-full lg:w-[70vw] lg:h-[70vh] mt-[6rem] grid place-items-center">
      
      <div className="flex flex-col items-center justify-center h-full w-full">
        <span className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-bold">
          {t("title")}
        </span>
        <span className="text-[0.7rem] md:text-[1rem] lg:text-[2rem] mt-4 mb-4  ">
          {t("description")}
        </span>

      </div>

        <RegisterDialog />
    </div>
  );
}
