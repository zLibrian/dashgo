import { z } from 'zod';

export const createUserFormSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Password doesn't match",
    path: ['passwordConfirmation'],
  });

export type CreateUserFormData = z.infer<typeof createUserFormSchema>;
