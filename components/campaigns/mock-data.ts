export const mockDailyData = [
  { name: "Apr 20", opens: 15, clicks: 8, replies: 3 },
  { name: "Apr 21", opens: 28, clicks: 12, replies: 5 },
  { name: "Apr 22", opens: 35, clicks: 19, replies: 8 },
  { name: "Apr 23", opens: 42, clicks: 22, replies: 10 },
  { name: "Apr 24", opens: 38, clicks: 20, replies: 7 },
  { name: "Apr 25", opens: 45, clicks: 25, replies: 12 },
  { name: "Apr 26", opens: 50, clicks: 28, replies: 15 },
];

export const mockSequenceData = [
  { name: "Email 1", opens: 840, clicks: 210, replies: 84 },
  { name: "Email 2", opens: 580, clicks: 145, replies: 62 },
  { name: "Email 3", opens: 320, clicks: 80, replies: 35 },
];

export const mockCampaign = {
  name: "Software CEOs Outreach",
  status: "Running",
  sent: 1285,
  total: 2500,
  opens: 840,
  clicks: 210,
  replies: 84,
  bounces: 12,
  openRate: 65.4,
  clickRate: 25.0,
  replyRate: 10.0,
  sequence: [
    {
      id: 1,
      name: "Initial Outreach",
      subject: "Quick question about {Company}'s software strategy",
      sent: 1285,
      opens: 840,
      clicks: 210,
      replies: 84,
    },
    {
      id: 2,
      name: "Follow Up #1",
      subject: "Following up on my message, {First Name}",
      sent: 880,
      opens: 580,
      clicks: 145,
      replies: 62,
    },
    {
      id: 3,
      name: "Last Attempt",
      subject: "Closing the loop, {First Name}",
      sent: 480,
      opens: 320,
      clicks: 80,
      replies: 35,
    }
  ]
};

export const mockStatsComparison = {
  openRate: { value: 12, type: 'increase' },
  clickRate: { value: 3, type: 'increase' },
  replyRate: { value: 1.5, type: 'increase' },
  bounceRate: { value: 0.3, type: 'decrease' },
};

export const mockChartConfig = {
  colors: {
    opens: '#0284c7',
    clicks: '#0ea5e9',
    replies: '#7dd3fc',
  },
  dataKeys: {
    opens: 'opens',
    clicks: 'clicks',
    replies: 'replies',
  }
};

export const mockSettings = {
  created: "April 20, 2023",
  sendingAccount: "john@example.com",
  sendingWindow: "9:00 AM - 5:00 PM",
  workingDays: "Monday - Friday",
  emailsPerDay: "Up to 200",
};
