import { z } from "zod";
import type { FormMessages } from "../data/site/types";

export function createContactSchema(messages: FormMessages) {
  return z.object({
    name: z
      .string()
      .min(2, messages.nameMin)
      .max(80, messages.nameMax),
    email: z.email(messages.emailInvalid),
    message: z
      .string()
      .min(10, messages.messageMin)
      .max(1000, messages.messageMax),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
