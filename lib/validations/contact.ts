import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(150, { message: "Subject must not exceed 150 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(3000, { message: "Message must not exceed 3000 characters." }),
  honeypot: z.string().optional(), // Honeypot field for bot prevention
});

export type ContactFormData = z.infer<typeof contactSchema>;
