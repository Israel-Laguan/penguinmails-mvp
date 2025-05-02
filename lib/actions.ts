// src/lib/actions.ts
"use server";

// Define the structure for campaign data based on the screenshot
interface CampaignData {
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

// Server action to fetch campaign data (using mock data)
export async function getCampaignsDataAction(companyId: string) {
  // Simulate fetching data based on companyId (though not used in mock)
  console.log(`Fetching campaign data for company: ${companyId}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500)); 

  // Calculate summary data from mock campaigns
  const totalCampaigns = mockCampaigns.length;
  const activeCampaigns = mockCampaigns.filter(c => c.status === "Running").length;
  const emailsSent = mockCampaigns.reduce((sum, c) => sum + c.progressTotal, 0);
  const totalReplies = mockCampaigns.reduce((sum, c) => sum + c.replies, 0);

  return {
    summary: {
      totalCampaigns,
      activeCampaigns,
      emailsSent,
      totalReplies,
    },
    campaigns: mockCampaigns,
  };
}

