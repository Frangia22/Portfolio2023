import type { FieldError, UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "../../../lib/contactSchema";

interface FieldWrapperProps {
  label: string;
  name: string;
  error?: FieldError;
  children: React.ReactNode;
}

export function FieldWrapper({ label, name, error, children }: FieldWrapperProps) {
  const errorId = `${name}-error`;
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="font-space-grotesk text-secondary text-sm mb-2 block"
      >
        {label}
      </label>
      {children}
      <div aria-live="polite">
        {error && (
          <p id={errorId} className="font-space-grotesk text-red-400 text-xs mt-1">
            {error.message}
          </p>
        )}
      </div>
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
  const errorId = `${name}-error`;
  return (
    <FieldWrapper label={label} name={name} error={error}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full bg-background font-space-grotesk border border-border-strong rounded-lg px-4 py-3 text-[#E2E8F0] focus:border-primary focus:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-out aria-[invalid]:border-red-400"
      />
    </FieldWrapper>
  );
}
