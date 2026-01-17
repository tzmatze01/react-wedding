"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Textarea } from "./ui/textarea";
import { FormEvent } from "react";

export default function RegisterDialog() {
  const t = useTranslations("Dialog");

  // TODO https://www.radix-ui.com/primitives/docs/components/dialog#close-after-asynchronous-form-submission
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("on submit");

    try {
      const formData = new FormData(event.currentTarget);
      const password = formData.get("password");
      console.log(JSON.stringify(formData, null, 2));
      const response = await fetch("/api/bla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // setError(error.message)
    } finally {
      // setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="languageSwitcher" variant="outline">
          {t("open")}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-black w-auto max-w-fit w-full">
        <form className="height-80" onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>{t("description")}</DialogTitle>
            <DialogDescription>{t("description")}</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="guest-name">{t("name")}</FieldLabel>
                  <Input id="guest-name" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="guest-name">{t("surname")}</FieldLabel>
                  <Input id="guest-name" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="guest-name">{t("email")}</FieldLabel>
                  <Input id="guest-name" type="email" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    {t("comment")}
                  </FieldLabel>
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("cancel")}</Button>
            </DialogClose>
            <Button type="submit">{t("open")}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
