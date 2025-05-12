import { z } from 'zod';

export const EmailSchema = z.object({
  id: z.number(),
  from: z.string(),
  email: z.string(),
  subject: z.string(),
  preview: z.string(),
  date: z.string(),
  isStarred: z.boolean(),
  isRead: z.boolean(),
  campaign: z.string(),
});

export type Email = z.infer<typeof EmailSchema>;

export const EmailsTypeSchema = z
  .object({
    emails: z.array(EmailSchema).nullable(),
  })
  .optional()
  .nullable();

export type EmailsType = z.infer<typeof EmailsTypeSchema>;
