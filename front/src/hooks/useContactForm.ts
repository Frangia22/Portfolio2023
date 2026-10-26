import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createContactSchema,
  type ContactFormData,
} from "../lib/contactSchema";
import type { FormMessages } from "../data/site/types";

function buildWhatsAppUrl(number: string, data: ContactFormData): string {
  const text = [
    `Hola Fran! 👋`,
    ``,
    `*Nombre:* ${data.name}`,
    `*Email:* ${data.email}`,
    ``,
    `*Mensaje:*`,
    data.message,
  ].join("\n");

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function useContactForm(messages: FormMessages, whatsapp: string) {
  const schema = createContactSchema(messages);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  const onSubmit = form.handleSubmit((data) => {
    window.open(buildWhatsAppUrl(whatsapp, data), "_blank", "noopener,noreferrer");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click" });
    form.reset();
  });

  return { form, onSubmit };
}
