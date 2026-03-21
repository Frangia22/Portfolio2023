import type { FieldError, UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "../../../lib/contactSchema";

// ─── Field primitives ────────────────────────────────────────────────────────

interface FieldWrapperProps {
  label: string;
  error?: FieldError;
  children: React.ReactNode;
}

export function FieldWrapper({ label, error, children }: FieldWrapperProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="font-space-grotesk text-secondary text-sm mb-2 block"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="font-space-grotesk text-red-400 text-xs mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

interface InputFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
}

export function InputField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}: InputFieldProps) {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full bg-background font-space-grotesk border border-tertiary rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-primary focus:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] focus:outline-none transition-all duration-200 ease-out aria-[invalid]:border-red-400"
        aria-invalid={error ? "true" : undefined}
      />
    </FieldWrapper>
  );
}
