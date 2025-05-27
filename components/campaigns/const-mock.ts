import { CampaignEventContition } from "@/app/api/generated/prisma";

export const defaultSteps = [{
  sequenceOrder: 0,
  delayDays: 0,
  delayHours: 0,
  templateId: 0,
  campaignId: 0,
  emailSubject: "",
  emailBody: "",
  condition: CampaignEventContition.ALWAYS,
}];
