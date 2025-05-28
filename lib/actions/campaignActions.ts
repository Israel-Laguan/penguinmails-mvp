// src/lib/actions/campaignActions.ts
"use server";

import { CampaignStatus, EmailEventType } from "@/app/api/generated/prisma";
import { mockCampaignEditDetail, timezones } from "@/components/campaigns/mock-data";
import { CampaignFormValues } from "@/components/campaigns/types";
import { prisma } from "@/lib/prisma";

// Define the structure for campaign data based on the screenshot
export interface CampaignData {
  id: string;
  name: string;
  status: "Running" | "Paused" | "Draft" | "Completed";
  progressCurrent: number;
  progressTotal: number;
  opens: number;
  opensPercent: number;
  clicks: number;
  clicksPercent: number;
  replies: number;
  repliesPercent: number;
  lastActivity: string;
}

// Mock data matching the screenshot
const mockCampaigns: CampaignData[] = [
  {
    id: "1",
    name: "Software CEOs Outreach",
    status: "Running",
    progressCurrent: 1285,
    progressTotal: 2500,
    opens: 840,
    opensPercent: 65.4,
    clicks: 210,
    clicksPercent: 16.3,
    replies: 84,
    repliesPercent: 6.5,
    lastActivity: "2 hours ago",
  },
  {
    id: "2",
    name: "Marketing Directors Follow-up",
    status: "Paused",
    progressCurrent: 1800,
    progressTotal: 1800,
    opens: 1170,
    opensPercent: 65.0,
    clicks: 432,
    clicksPercent: 24.0,
    replies: 216,
    repliesPercent: 12.0,
    lastActivity: "Yesterday",
  },
  {
    id: "3",
    name: "Startup Founders Introduction",
    status: "Draft",
    progressCurrent: 0,
    progressTotal: 1200,
    opens: 0,
    opensPercent: 0,
    clicks: 0,
    clicksPercent: 0,
    replies: 0,
    repliesPercent: 0,
    lastActivity: "3 days ago",
  },
  {
    id: "4",
    name: "SaaS Decision Makers",
    status: "Running",
    progressCurrent: 450,
    progressTotal: 1500,
    opens: 280,
    opensPercent: 62.2,
    clicks: 85,
    clicksPercent: 18.9,
    replies: 42,
    repliesPercent: 9.3,
    lastActivity: "5 minutes ago",
  },
  {
    id: "5",
    name: "Enterprise IT Directors",
    status: "Completed",
    progressCurrent: 2000,
    progressTotal: 2000,
    opens: 1400,
    opensPercent: 70.0,
    clicks: 600,
    clicksPercent: 30.0,
    replies: 320,
    repliesPercent: 16.0,
    lastActivity: "1 week ago",
  },
];

export async function getCampaignsStatisticsAction(companyId: number) {
  try {
    const [totalCampaigns, activeCampaigns, emailsSent, totalReplies] = await Promise.all([
      prisma.campaign.count({
        where: { companyId }
      }),
      prisma.campaign.count({
        where: {
          companyId,
          status: CampaignStatus.ACTIVE,
        },
      }),
      prisma.emailEvent.count({
        where: {
          type: EmailEventType.SENT
        },
      }),
      prisma.emailEvent.count({
        where: {
          type: EmailEventType.REPLIED
        },
      }),
    ]);

    return {
      success: true,
      message: "",
      summary: {
        totalCampaigns,
        activeCampaigns,
        emailsSent,
        totalReplies,
      }
    };

  } catch (error) {
    return {
      success: false, message: "Error trying to fetch summary.",
      summary: {
        totalCampaigns: 0,
        activeCampaigns: 0,
        emailsSent: 0,
        totalReplies: 0,
      }
    };
  }
}

export async function getCampaignsDataAction({ companyId, page = 1, pageSize = 10 }: { companyId: number, page: number, pageSize: number }) {
  const skip = (page - 1) * pageSize;

  const [campaigns, totalCampaigns] = await Promise.all([
    await prisma.campaign.findMany({
      where: { companyId },
      include: {
        clients: true,
        emailEvents: {
          select: {
            type: true,
            timestamp: true
          }
        }
      },
      take: pageSize,
      skip,
      orderBy: {
        createdAt: 'asc'
      }
    }),
    prisma.campaign.count({
      where: { companyId },
    }),
  ]
  );

  return {
    campaigns,
    totalCampaigns,
    currentPage: page,
    pageSize,
    totalPages: Math.ceil(totalCampaigns / pageSize),
  };
}

// Mock action for creating a campaign (Phase 4)
export async function createCampaignAction(formData: CampaignFormValues) {
  const createdCampaign = await prisma.campaign.create({
    data: {
      fromEmail: formData.fromEmail,
      fromName: formData.fromName,
      status: formData.status,
      name: formData.name,
      sendDays: formData.sendDays,
      sendTimeEnd: formData.sendTimeEnd,
      sendTimeStart: formData.sendTimeStart,
      timezone: formData.timezone,
      companyId: 1,
    },
  });
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Simulate success
  return { success: true, message: "Campaign created successfully (simulation)." };
}

export async function updateCampaignAction(id: number, formData: CampaignFormValues) {

  try {
    const oldSteps = formData.steps.filter((step) => step.id);
    const newSteps = formData.steps.filter((step) => !step.id);
    await prisma.campaign.update({
      where: {
        id,
      },
      data: {
        fromEmail: formData.fromEmail,
        fromName: formData.fromName,
        status: formData.status,
        name: formData.name,
        sendDays: formData.sendDays,
        sendTimeEnd: formData.sendTimeEnd,
        sendTimeStart: formData.sendTimeStart,
        timezone: formData.timezone,
        companyId: 1,
        steps: {
          create: [...newSteps.map(({ id, campaignId, ...resStepInfo }) => (
            {
              condition: resStepInfo.condition,
              delayDays: resStepInfo.delayDays,
              delayHours: resStepInfo.delayHours,
              emailBody: resStepInfo.emailBody,
              emailSubject: resStepInfo.emailSubject,
              sequenceOrder: resStepInfo.sequenceOrder,
              templateId: 1
            })
          )],
          update: [
            ...oldSteps.map(({ id, templateId, campaignId, ...resStepInfo }) => (
              {
                where: { id },
                data: {
                  ...resStepInfo,
                }
              })
            )]
        }
      },
    });
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Campaign updated successfully." };

  } catch (error) {
    return { success: false, message: "Error trying update a campaign." };
  }
}

export async function getCampaignAction(id: number) {
  const campaign = await prisma.campaign.findFirst({
    where: {
      id,
    },
    include: {
      clients: {
        select: {
          client: true,
        }
      },
      steps: true,
    },
  });
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Simulate success
  return mockCampaignEditDetail;
}

export async function getCampaignSendingAccountsAction(companyId: number) {
  const emailAccounts = await prisma.emailAccount.findMany({
    where: {
      id: companyId,
    },
  });
  const mappedEmailAccount = emailAccounts.map(account => ({ value: account.email, label: account.email }))

  return mappedEmailAccount;
}

export async function getTimezonesMockAction() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 10000));
  // Simulate success
  return timezones;
}
