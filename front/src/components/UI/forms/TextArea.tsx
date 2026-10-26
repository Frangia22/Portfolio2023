import type { FieldError, UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "../../../lib/contactSchema";
import { FieldWrapper } from "./Input";

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
  const errorId = `${name}-error`;
  return (
    <FieldWrapper label={label} name={name} error={error}>
      <textarea
        id={name}
        placeholder={placeholder}
        rows={rows}
        {...register(name)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full bg-background font-space-grotesk border border-border-strong rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-primary focus:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out resize-none aria-[invalid]:border-red-400"
      />
    </FieldWrapper>
  );
}
