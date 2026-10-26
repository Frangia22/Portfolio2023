import { useContactForm } from "../hooks/useContactForm";
import type { FormMessages } from "../data/site/types";
import { InputField } from "./UI/forms/Input";
import { TextareaField } from "./UI/forms/TextArea";

interface Props {
  messages: FormMessages;
  whatsapp: string;
}

export function ContactForm({ messages, whatsapp }: Props) {
  const {
    form: {
      register,
      formState: { errors, isSubmitting },
    },
    onSubmit,
  } = useContactForm(messages, whatsapp);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-quinary border border-tertiary rounded-xl px-6 py-7 hover:border-primary hover:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] transition-all duration-200 ease-out text-left"
    >
      <InputField
        label={messages.nameLabel}
        name="name"
        placeholder={messages.namePlaceholder}
        register={register}
        error={errors.name}
      />
      <InputField
        label={messages.emailLabel}
        name="email"
        type="email"
        placeholder={messages.emailPlaceholder}
        register={register}
        error={errors.email}
      />
      <TextareaField
        label={messages.messageLabel}
        name="message"
        placeholder={messages.messagePlaceholder}
        rows={4}
        register={register}
        error={errors.message}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-background font-space-grotesk font-bold text-sm rounded-lg px-4 py-3 cursor-pointer transition-all duration-200 ease-out hover:bg-primary-hover hover:shadow-[0px_4px_32px_rgba(0,229,255,0.07)] hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {isSubmitting ? messages.submitting : messages.submit}
      </button>
    </form>
  );
}
