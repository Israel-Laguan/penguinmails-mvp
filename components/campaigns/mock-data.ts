import { EmailEventType } from "@/app/api/generated/prisma";
import { CampaignResponse } from "@/types/campaign";
import { CampaignFormValues } from "./types";

export const mockCampaigns: CampaignResponse[] = [
  {
    id: 1,
    name: "Software CEOs Outreach",
    status: "ACTIVE",
    clients: Array.from({ length: 2500 }, (_, i) => ({
      campaignId: 1,
      clientId: i + 1,
      statusInCampaign: "ACTIVE"
    })),
    emailEvents: [
      ...Array.from({ length: 1285 }, () => ({ type: "SENT" as EmailEventType, timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) })),
      ...Array.from({ length: 840 }, () => ({ type: "OPENED" as EmailEventType, timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) })),
      ...Array.from({ length: 210 }, () => ({ type: "CLICKED" as EmailEventType, timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) })),
      ...Array.from({ length: 84 }, () => ({ type: "REPLIED" as EmailEventType, timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) })),
    ],
    updatedAt: new Date(Date.now() - (2 * 60 * 60 * 1000))
  },
  {
    id: 2,
    name: "Marketing Directors Follow-up",
    status: "PAUSED",
    clients: Array.from({ length: 1800 }, (_, i) => ({
      campaignId: 2,
      clientId: i + 1,
      statusInCampaign: "ACTIVE"
    })),
    emailEvents: [
      ...Array.from({ length: 1800 }, () => ({ type: "SENT" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 1170 }, () => ({ type: "OPENED" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 432 }, () => ({ type: "CLICKED" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 216 }, () => ({ type: "REPLIED" as EmailEventType, timestamp: new Date() })),
    ],
    updatedAt: new Date(Date.now() - (24 * 60 * 60 * 1000))
  },
  {
    id: 3,
    name: "Startup Founders Introduction",
    status: "DRAFT",
    clients: Array.from({ length: 1200 }, (_, i) => ({
      campaignId: 3,
      clientId: i + 1,
      statusInCampaign: "ACTIVE"
    })),
    emailEvents: [],
    updatedAt: new Date(Date.now() - (3 * 24 * 60 * 60 * 1000))
  },
  {
    id: 4,
    name: "SaaS Decision Makers",
    status: "ACTIVE",
    clients: Array.from({ length: 1500 }, (_, i) => ({
      campaignId: 4,
      clientId: i + 1,
      statusInCampaign: "ACTIVE"
    })),
    emailEvents: [
      ...Array.from({ length: 450 }, () => ({ type: "SENT" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 280 }, () => ({ type: "OPENED" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 85 }, () => ({ type: "CLICKED" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 42 }, () => ({ type: "REPLIED" as EmailEventType, timestamp: new Date() })),
    ],
    updatedAt: new Date(Date.now() - (5 * 60 * 1000))
  },
  {
    id: 5,
    name: "Enterprise IT Directors",
    status: "COMPLETED",
    clients: Array.from({ length: 2000 }, (_, i) => ({
      campaignId: 5,
      clientId: i + 1,
      statusInCampaign: "ACTIVE"
    })),
    emailEvents: [
      ...Array.from({ length: 2000 }, () => ({ type: "SENT" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 1400 }, () => ({ type: "OPENED" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 600 }, () => ({ type: "CLICKED" as EmailEventType, timestamp: new Date() })),
      ...Array.from({ length: 320 }, () => ({ type: "REPLIED" as EmailEventType, timestamp: new Date() })),
    ],
    updatedAt: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
  },
];

export const mockCampaignDetail = {
  ...mockCampaigns[0],
  sequence: [
    {
      id: 1,
      name: "Initial Outreach",
      subject: "Quick question about your software",
      sent: 2500,
      opens: 1625,
      clicks: 406,
      replies: 203,
    },
    {
      id: 2,
      name: "Follow-up 1",
      subject: "Re: Quick question about your software",
      sent: 2297,
      opens: 1608,
      clicks: 482,
      replies: 241,
    },
    {
      id: 3,
      name: "Break-up Email",
      subject: "Closing the loop",
      sent: 2056,
      opens: 1439,
      clicks: 288,
      replies: 144,
    },
  ],
  openRate: 65.4,
  clickRate: 16.3,
  replyRate: 6.5,
};

const editMockCampaign: Omit<CampaignResponse, 'event' | 'clients'> = mockCampaigns[0];

export const mockCampaignEditDetail: CampaignFormValues = {
  ...editMockCampaign,
  fromEmail: 'juan@gm.com',
  fromName: 'juan',
  timezone: '(GMT-01:00) Azores',
  clients: ['julio@mail.com', 'pedro@gmail.com'],
  sendDays: [0, 2, 4, 6],
  sendTimeStart: '07:30',
  sendTimeEnd: '15:25',
  steps: [
    {
      id: 1,
      campaignId: 1,
      emailSubject: "Initial Outreach",
      emailBody: "Quick question about your software",
      condition: 'IF_NOT_OPENED',
      delayDays: 1,
      delayHours: 2,
      sequenceOrder: 0,
      templateId: 0,
    },
    {
      id: 2,
      campaignId: 1,
      emailSubject: "Follow-up 1",
      emailBody: "Re: Quick question about your software",
      condition: 'IF_NOT_REPLIED',
      delayDays: 1,
      delayHours: 1,
      sequenceOrder: 1,
      templateId: 0,
    },
    {
      id: 3,
      campaignId: 1,
      emailSubject: "Break-up Email",
      emailBody: "Closing the loop",
      delayDays: 1,
      delayHours: 4,
      sequenceOrder: 2,
      condition: 'IF_NOT_CLICKED',
      templateId: 0
    },
  ],
  createdAt: new Date(Date.now() - (3 * 60 * 60 * 1000))
};

export const mockStatsComparison = {
  openRate: { value: 12.5, trend: "up" },
  clickRate: { value: 8.2, trend: "up" },
  replyRate: { value: 15.0, trend: "up" },
  bounceRate: { value: 35.0, trend: "down" },
};

export const mockDailyData = [
  { name: "Mon", opens: 650, clicks: 230, replies: 123 },
  { name: "Tue", opens: 730, clicks: 280, replies: 154 },
  { name: "Wed", opens: 810, clicks: 310, replies: 169 },
  { name: "Thu", opens: 590, clicks: 210, replies: 98 },
  { name: "Fri", opens: 730, clicks: 290, replies: 147 },
];

export const mockSequenceData = [
  { name: "Email 1", opens: 1625, clicks: 406, replies: 203 },
  { name: "Email 2", opens: 1608, clicks: 482, replies: 241 },
  { name: "Email 3", opens: 1439, clicks: 288, replies: 144 },
];

export const mockChartConfig = {
  colors: {
    opens: "#0284c7",
    clicks: "#0ea5e9",
    replies: "#7dd3fc",
  },
  dataKeys: {
    opens: "opens",
    clicks: "clicks",
    replies: "replies",
  },
};

export const mockSettings = {
  created: "Oct 15, 2023",
  sendingAccount: "john@acme.com",
  sendingWindow: "9:00 AM - 5:00 PM",
  workingDays: "Mon - Fri",
  emailsPerDay: "Up to 500 emails",
};
