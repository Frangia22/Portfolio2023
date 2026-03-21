import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../lib/contactSchema";

// Reemplazá con tu número en formato internacional sin "+" ni espacios
const WHATSAPP_NUMBER = "1234567890";

function buildWhatsAppUrl(data: ContactFormData): string {
  const text = [
    `Hola Fran! 👋`,
    ``,
    `*Nombre:* ${data.name}`,
    `*Email:* ${data.email}`,
    ``,
    `*Mensaje:*`,
    data.message,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function useContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  const onSubmit = form.handleSubmit((data) => {
    window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");
    form.reset();
  });

  return { form, onSubmit };
}
