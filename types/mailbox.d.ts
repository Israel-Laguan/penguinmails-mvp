interface Mailbox {
  id: number;
  email: string;
  domain: string;
  status: string;
  campaign: string | null;
  warmupStatus: 'ready' | 'warming' | 'not started' | 'paused';
  dailyLimit: number;
  sent: number;
  lastActivity: string;
  warmupProgress: number;
  warmupDays: number;
  totalSent: number;
  replies: number;
  engagement: string;

}


