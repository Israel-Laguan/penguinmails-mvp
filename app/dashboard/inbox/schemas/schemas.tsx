import { z } from 'zod';

export const CampaignSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.enum(["DRAFT", "SCHEDULED", "RUNNING", "PAUSED", "COMPLETED", "CANCELLED"]), // ajustá los valores según tu enum real
  fromName: z.string(),
  fromEmail: z.string().email(),
  companyId: z.number(),
  createdById: z.string().optional(),
  metrics: z.any().optional(),
  sendDays: z.array(z.number().int().min(0).max(6)),
  sendTimeStart: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  sendTimeEnd: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  emailsPerDay: z.number().int().positive().optional(),
  timezone: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ClientSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional(),
  maskPII: z.boolean(),
  companyId: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}).optional();

export const EmailSchema = z.object({
  id: z.number(),
  subject: z.string(),
  starred: z.boolean(),
  read: z.boolean(),
  createdAt: z.coerce.date(),
  campaign: CampaignSchema,
  client: ClientSchema, 
});



export const EmailsTypeSchema = z
.object({
  emails: z.array(EmailSchema).optional(),
  unread: z.number().optional(),
})
.optional()

export type EmailsType = z.infer<typeof EmailsTypeSchema>;
export type Email = z.infer<typeof EmailSchema>;
export type Campaign = z.infer<typeof CampaignSchema>;
export type Client = z.infer<typeof ClientSchema>;
