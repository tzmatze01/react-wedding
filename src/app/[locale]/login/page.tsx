"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useTranslations } from "use-intl/react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useLocale } from "next-intl";

export default function Login() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Login");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const password = formData.get("password");
      console.log(JSON.stringify(formData, null, 2));
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        router.push(`/${locale}/home`);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-senter">
        <Image
          src="/emprezel.webp"
          alt="wedding logo"
          width={180}
          height={38}
          priority
        />
        <div className="w-full max-w-md">
          {error && <div style={{ color: "red" }}>{error}</div>}
          <form onSubmit={onSubmit} className="flex flex-col gap-[32px]">
            <FieldGroup>
              <FieldSet>
                <FieldGroup className="text-black">
                  <Field>
                    <FieldLabel htmlFor="guest-name"></FieldLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </Field>
                  <Field>
                    <Button
                      variant="outline"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? t("loading") : t("login")}
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </form>
        </div>
      </main>
    </div>
  );
}
