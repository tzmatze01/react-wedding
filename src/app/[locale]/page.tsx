"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useTranslations } from "use-intl/react";

export default function Login() {
  const router = useRouter()
  const t = useTranslations("Login");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-senter">
 
        {t('hello')}
       
      </main>
    </div>
  );
}
