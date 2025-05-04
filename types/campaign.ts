import { CampaignStatus } from "@/app/api/generated/prisma"
import { EmailEventType } from "@/app/api/generated/prisma";

export type Campaign = {
  id: string
  name: string
  status: "DRAFT" | "ACTIVE" | "PAUSED" | "COMPLETED" | "ARCHIVED"
  recipients: { sent: number; total: number }
  opens: { total: number; rate: number }
  clicks: { total: number; rate: number }
  replies: { total: number; rate: number }
  lastUpdated: string
}

export type CampaignResponse = {
  id: number
  name: string
  status: CampaignStatus
  clients: {
    campaignId: number
    clientId: number
    statusInCampaign: string
  }[]
  emailEvents: {
    type: EmailEventType
    timestamp: Date
  }[]
  updatedAt: Date
}
