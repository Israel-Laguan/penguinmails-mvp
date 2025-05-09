import { z } from "zod";
import { copyText as t } from "./copy";
import { CampaignEventContition, CampaignStatus } from "@/app/api/generated/prisma";
import { isValidTimeRange } from "@/lib/utils";

// Schema definitions
export const campaignStepSchema = z.object({
  id: z.number().optional(),
  sequenceOrder: z.number(),
  delayDays: z.number(),
  delayHours: z.number(),
  templateId: z.number(),
  campaignId: z.number(),
  emailSubject: z.string().min(1, t.validation.subject),
  emailBody: z.string().optional(),
  condition: z.nativeEnum(CampaignEventContition),
});

export const campaignFormSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, t.validation.campaignName),
  fromName: z.string().min(1, t.validation.fromName),
  fromEmail: z.string().email(t.validation.email),
  status: z.nativeEnum(CampaignStatus).default(CampaignStatus.DRAFT),
  companyId: z.number().optional(),
  createdById: z.string().optional(),
  steps: z.array(campaignStepSchema).min(1, t.validation.minSteps),
  sendDays: z.array(z.number()).optional(), // Array of weekday numbers (0-6)
  sendTimeStart: z.string().optional(), // HH:mm format
  sendTimeEnd: z.string().optional(), // HH:mm format
  emailsPerDay: z.number().optional(),
  timezone: z.string().optional().default("UTC"),
  clients: z.array(z.string().email(t.validation.email)),
  metrics: z.object({
    recipients: z.object({
      sent: z.number(),
      total: z.number(),
    }).optional(),
    opens: z.object({
      total: z.number(),
      rate: z.number(),
    }).optional(),
    clicks: z.object({
      total: z.number(),
      rate: z.number(),
    }).optional(),
    replies: z.object({
      total: z.number(),
      rate: z.number(),
    }).optional(),
    bounces: z.object({
      total: z.number(),
      rate: z.number(),
    }).optional(),
  }).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})
  .refine((data) => {
    const { sendTimeStart = '', sendTimeEnd = '' } = data;
    return isValidTimeRange(sendTimeStart, sendTimeEnd);
  }, {
    message: t.validation.startTimeLower,
    path: ['sendTimeStart'],
  })
  .refine((data) => {
    const { sendTimeStart = '', sendTimeEnd = '' } = data;
    return isValidTimeRange(sendTimeStart, sendTimeEnd);
  }, {
    message: t.validation.endTimeGreater,
    path: ['sendTimeEnd'],
  });
