// src/lib/actions/dashboardActions.ts
"use server";

// Define interfaces for the data structures
interface KpiData {
  value: string;
  change: string;
  changeType: "increase" | "decrease";
}

interface ChartDataPoint {
  name: string;
  [key: string]: unknown; // Allow other properties like opens, clicks, etc.
}

interface PieChartDataPoint {
  name: string;
  value: number;
}

interface RecentCampaignStat {
  id: number;
  name: string;
  total: number;
  opens: number;
  clicks: number;
  replies: number;
}

interface UpcomingTask {
  id: number;
  title: string;
  type: "campaign" | "email" | "template" | "domain";
  dueDate: string;
}

export interface DashboardMockData {
  kpi: {
    openRate: KpiData;
    clickRate: KpiData;
    replyRate: KpiData;
    bounceRate: KpiData;
  };
  campaignPerformance: ChartDataPoint[];
  emailStatus: PieChartDataPoint[];
  recentCampaigns: RecentCampaignStat[];
  upcomingTasks: UpcomingTask[];
}

// Server action to fetch mock dashboard data
export async function getDashboardMockDataAction(companyId: string): Promise<DashboardMockData> {
  console.log(`Fetching MOCK dashboard data for company: ${companyId}`);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Combine all mock data previously found in components
  const mockData: DashboardMockData = {
    kpi: {
      openRate: { value: "65.4%", change: "12% from last week", changeType: "increase" },
      clickRate: { value: "24.3%", change: "3% from last week", changeType: "increase" },
      replyRate: { value: "12.9%", change: "7% from last week", changeType: "increase" },
      bounceRate: { value: "2.4%", change: "0.5% from last week", changeType: "decrease" },
    },
    campaignPerformance: [
      { name: "Mon", opens: 40, clicks: 24, replies: 10 },
      { name: "Tue", opens: 30, clicks: 13, replies: 8 },
      { name: "Wed", opens: 20, clicks: 18, replies: 5 },
      { name: "Thu", opens: 27, clicks: 19, replies: 9 },
      { name: "Fri", opens: 18, clicks: 10, replies: 7 },
      { name: "Sat", opens: 23, clicks: 15, replies: 6 },
      { name: "Sun", opens: 34, clicks: 22, replies: 11 },
    ],
    emailStatus: [
      { name: "Delivered", value: 39 },
      { name: "Opens", value: 30 },
      { name: "Clicks", value: 18 },
      { name: "Replies", value: 11 },
      { name: "Bounced", value: 2 },
    ],
    recentCampaigns: [
      {
        id: 1,
        name: "Software CEOs Outreach",
        total: 2500,
        opens: 1625,
        clicks: 608,
        replies: 323,
      },
      {
        id: 2,
        name: "Marketing Directors Follow-up",
        total: 1800,
        opens: 1170,
        clicks: 432,
        replies: 216,
      },
      {
        id: 3,
        name: "Startup Founders Introduction",
        total: 1200,
        opens: 780,
        clicks: 288,
        replies: 144,
      },
    ],
    upcomingTasks: [
      {
        id: 1,
        title: "Review Campaign Results",
        type: "campaign",
        dueDate: "Today",
      },
      {
        id: 2,
        title: "Send Follow-ups",
        type: "email",
        dueDate: "Tomorrow",
      },
      {
        id: 3,
        title: "Update Templates",
        type: "template",
        dueDate: "May 2",
      },
      {
        id: 4,
        title: "Warm up new domain",
        type: "domain",
        dueDate: "May 3",
      },
    ],
  };

  return mockData;
}
