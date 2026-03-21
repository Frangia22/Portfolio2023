import type { FieldError, UseFormRegister } from "react-hook-form";
import { FieldWrapper } from "./Input";
import type { ContactFormData } from "../../../lib/contactSchema";

interface TextareaFieldProps {
  label: string;
  name: keyof ContactFormData;
  placeholder?: string;
  rows?: number;
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
}

export function TextareaField({
  label,
  name,
  placeholder,
  rows = 4,
  register,
  error,
}: TextareaFieldProps) {
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        placeholder={placeholder}
        rows={rows}
        {...register(name)}
        className="w-full bg-background font-space-grotesk border border-tertiary rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-primary focus:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] focus:outline-none transition-all duration-200 ease-out resize-none aria-[invalid]:border-red-400"
        aria-invalid={error ? "true" : undefined}
      />
    </FieldWrapper>
  );
}
