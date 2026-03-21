import type { FieldError, UseFormRegister } from "react-hook-form";
import { useContactForm } from "../hooks/useContactForm";
import type { ContactFormData } from "../lib/contactSchema";
import { InputField } from "./UI/forms/Input";
import { TextareaField } from "./UI/forms/TextArea";

// ─── Form ────────────────────────────────────────────────────────────────────

export function ContactForm() {
  const {
    form: {
      register,
      formState: { errors, isSubmitting },
    },
    onSubmit,
  } = useContactForm();

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-quinary border border-tertiary rounded-xl px-6 py-7 hover:border-primary hover:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] transition-all duration-200 ease-out"
    >
      <InputField
        label="Nombre"
        name="name"
        placeholder="Tu nombre"
        register={register}
        error={errors.name}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Tu email"
        register={register}
        error={errors.email}
      />
      <TextareaField
        label="Mensaje"
        name="message"
        placeholder="Contame sobre tu proyecto..."
        rows={4}
        register={register}
        error={errors.message}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-background font-space-grotesk font-bold text-sm rounded-lg px-4 py-3 cursor-pointer transition-all duration-200 ease-out hover:bg-[#00B8CC] hover:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isSubmitting ? "Preparando..." : "Enviar mensaje →"}
      </button>
    </form>
  );
}
