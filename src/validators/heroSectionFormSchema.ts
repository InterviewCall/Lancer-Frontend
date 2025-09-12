import z from 'zod';

export const HeroSectionFormSchema = z.object({
  program: z.string().min(1, { message: 'Program is required' }),
  fullName: z.string().min(1, { message: 'Full Name is required' }),
  email: z
    .string({ message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .min(1, { message: 'Phone is required' })
    .regex(/^\d{10}$/, { message: 'Phone must be a 10-digit number' }),
});