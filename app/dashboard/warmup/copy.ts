export const copyText = {
  title: "Email Warmup",
  subtitle: "Warm up your email accounts to improve deliverability",
  settings: "Settings",
  
  // Stats cards
  accountsWarming: "Accounts Warming",
  goodProgress: "Good progress",
  averageInboxRate: "Average Inbox Rate",
  weeklyInboxChange: "2.5% this week",
  averageReputation: "Average Reputation",
  weeklyReputationChange: "5.2% this week",
  emailsSentToday: "Emails Sent Today",
  ofLimit: "of {0} limit",

  // Tabs
  overview: "Overview",
  accounts: "Accounts",
  settingsTab: "Settings",

  // Charts
  warmupProgress: "Warmup Progress",
  reputationGrowth: "Reputation Growth",
  dailyWarmupStats: "Daily Warmup Stats",

  // Table headers
  date: "Date",
  emailsSent: "Emails Sent",
  inbox: "Inbox",
  spam: "Spam",
  inboxRate: "Inbox Rate",
  reputation: "Reputation",
  email: "Email",
  status: "Status",
  sentToday: "Sent Today",
  daysActive: "Days Active",
  daysText: "days",
  actions: "Actions",
  details: "Details",

  // Settings sections
  warmupSettings: "Warmup Settings",
  warmupSchedule: "Warmup Schedule",
  warmupScheduleDesc: "Configure how your email accounts are warmed up over time.",
  initialDailyVolume: "Initial Daily Volume",
  initialVolumeDesc: "Number of emails sent on day one",
  dailyIncreaseRate: "Daily Increase Rate",
  increaseRateDesc: "Emails added each day",
  maxDailyVolume: "Maximum Daily Volume",
  maxVolumeDesc: "Maximum number of daily emails",
  warmupSpeed: "Warmup Speed",
  warmupSpeedDesc: "How aggressively to increase volume",

  // Speed options
  speedSlow: "Slow (Safe)",
  speedModerate: "Moderate",
  speedFast: "Fast (Aggressive)",

  // Seed network section
  seedNetwork: "Seed Network",
  seedNetworkDesc: "Configure how your emails interact with our network of seed accounts.",
  replyRate: "Reply Rate",
  replyRateDesc: "Percentage of emails that receive replies",
  threadDepth: "Thread Depth",
  threadDepthDesc: "How many back-and-forth replies in each thread",
  
  // Thread depth options
  threadDepthOne: "1 reply",
  threadDepthTwo: "2 replies",
  threadDepthThree: "3 replies",
  threadDepthFive: "5 replies",

  // Auto-adjust section
  autoAdjust: "Auto-adjust warmup based on performance",
  autoAdjustDesc: "Automatically adjust warmup parameters based on email performance",

  // Buttons
  resetDefaults: "Reset to Defaults",
  saveSettings: "Save Settings"
} as const;