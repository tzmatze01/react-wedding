import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  console.log("reqeusted: " + requested);
  const locale = hasLocale(locales, requested) ? requested : "en";

  //if(!locales.includes(locale as any)) notFound();

  console.log("lcoale identified: " + locale);
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
