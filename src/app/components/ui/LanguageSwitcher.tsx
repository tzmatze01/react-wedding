"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("components");
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const path = pathname.split("/").at(-1);
    console.log(`/${newLocale}/${path}`);
    router.push(`/${newLocale}/${path}`);
  };

  const languages = [
    { code: "en", name: t("localeSwitcher.english") },
    { code: "de", name: t("localeSwitcher.german") },
    { code: "es", name: t("localeSwitcher.spanish") },
  ];

  return (
    <Select defaultValue={locale} onValueChange={switchLocale}>
      <SelectTrigger className="w-[180px] text-black mt-[1rem] ml-[1rem]">
        <SelectValue placeholder="Bla" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-black">
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="de">{t("localeSwitcher.german")}</SelectItem>
          <SelectItem value="en">{t("localeSwitcher.english")}</SelectItem>
          <SelectItem value="es">{t("localeSwitcher.spanish")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
