import { z } from 'zod';

export const registerFormSchema = z.object({
    name: z.string().min(2, { message: 'Neplatné pole' }),
    email: z.string().email({ message: 'Invalid email address' }),
    field: z.string().min(2, { message: 'Neplatné pole' }),
    position: z.string().min(2, { message: 'Neplatné pole' }),
    phone: z.string().min(9, { message: 'Neplatné telefonní číslo' }),
    message: z.string().optional(),
    isCompany: z.boolean().optional(),
    companyName: z.string().optional(),
    companyNumber: z.string().optional(),
    companyAddress: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipNumber: z.string().optional(),
    agreement: z.boolean(),
})

export type RegisterFormValues = z.infer<typeof registerFormSchema>;