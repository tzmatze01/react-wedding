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
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Textarea } from "./ui/textarea";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function RegisterDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Dialog");

  // TODO https://www.radix-ui.com/primitives/docs/components/dialog#close-after-asynchronous-form-submission
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("on submit");

    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        questions: formData.get("questions"),
        coming_buenos_aires: true,
      };

      // console.log("formdata: " + JSON.stringify(data, null, 2));
      const response = await fetch("/api/wedding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        toast(t("register_positive"));
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // setError(error.message)
    } finally {
      // setLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="languageSwitcher w-[15rem]" variant="outline">
          {t("open")}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-black w-full h-[90vh] md:h-[70vh] lg:w-[70vw] lg:h-[70vh]">
        <form className="height-80 width-80 grid" onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>{t("title")}</DialogTitle>
            <DialogDescription>{t("description")}</DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="guest-name">{t("name")}</FieldLabel>
                  <Input id="guest-name" name="name" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="guest-surname">{t("surname")}</FieldLabel>
                  <Input id="guest-surname" name="surname" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="guest-email">{t("email")}</FieldLabel>
                  <Input id="guest-email" name="email" type="email" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="guest-questions">{t("comment")}</FieldLabel>
                  <Textarea
                    id="guest-questions"
                    name="questions"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>

          <DialogFooter className="self-end">
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
