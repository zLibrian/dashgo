import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

export type SignInFormData = z.infer<typeof signInFormSchema>;
