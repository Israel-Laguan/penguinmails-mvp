import { AlertTriangle, BarChart3, Eye, Mail, MousePointer, Reply, Target } from "lucide-react";

export const tabs = [
    { id: '/', label: 'Overview', icon: BarChart3 },
    { id: 'campaigns', label: 'By Campaign', icon: Target },
    { id: 'mailboxes', label: 'By Mailbox', icon: Mail }
  ];

  export const getDaysFromRange = (range: string) => {
    switch (range) {
      case '7d': return 7;
      case '30d': return 30;
      case '90d': return 90;
      case '1y': return 365;
      case 'custom': return 30; // Default for custom
      default: return 30;
    }
  };
export const generateTimeSeriesData = (days: number, granularity: 'day' | 'week' | 'month') => {
  const data = [];
  const now = new Date();
  
  let periods = days;
  let periodLength = 1; // days per period
  
  // Calculate number of periods and period length based on granularity
  if (granularity === 'week') {
    periods = Math.ceil(days / 7);
    periodLength = 7;
  } else if (granularity === 'month') {
    periods = Math.ceil(days / 30);
    periodLength = 30;
  }
  
  for (let i = periods - 1; i >= 0; i--) {
    const date = new Date(now);
    
    if (granularity === 'day') {
      date.setDate(date.getDate() - i);
    } else if (granularity === 'week') {
      date.setDate(date.getDate() - (i * 7));
      // Set to start of week (Monday)
      const dayOfWeek = date.getDay();
      const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      date.setDate(date.getDate() + diff);
    } else if (granularity === 'month') {
      date.setMonth(date.getMonth() - i);
      date.setDate(1); // Set to first day of month
    }
    
    // Adjust base value for longer periods (weeks/months have more activity)
    const baseValue = (100 + Math.random() * 50) * periodLength;
    
    data.push({
      date: date.toISOString().split('T')[0],
      label: granularity === 'day' ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) :
             granularity === 'week' ? `Week of ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` :
             date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      sent: Math.floor(baseValue * (0.8 + Math.random() * 0.4)),
      opens: Math.floor(baseValue * (0.3 + Math.random() * 0.2)),
      clicks: Math.floor(baseValue * (0.08 + Math.random() * 0.05)),
      replies: Math.floor(baseValue * (0.05 + Math.random() * 0.03)),
      bounces: Math.floor(baseValue * (0.02 + Math.random() * 0.02))
    });
  }
  
  return data;
};

export const metrics = [
  { 
    key: 'sent', 
    label: 'Emails Sent', 
    color: '#3B82F6', 
    icon: Mail,
    visible: true 
  },
  { 
    key: 'opens', 
    label: 'Opens', 
    color: '#8B5CF6', 
    icon: Eye,
    visible: true 
  },
  { 
    key: 'clicks', 
    label: 'Clicks', 
    color: '#F59E0B', 
    icon: MousePointer,
    visible: true 
  },
  { 
    key: 'replies', 
    label: 'Replies', 
    color: '#10B981', 
    icon: Reply,
    visible: true 
  },
  { 
    key: 'bounces', 
    label: 'Bounces', 
    color: '#EF4444', 
    icon: AlertTriangle,
    visible: false 
  }
];


// Campaign comparison data
export const campaignData = [
  { name: 'Q1 SaaS Outreach', bounced: 10, sent: 847, opens: 289, clicks: 73, replies: 42, openRate: 34.1, replyRate: 5.0 },
  { name: 'Enterprise Prospects', bounced: 5, sent: 1203, opens: 502, clicks: 124, replies: 89, openRate: 41.7, replyRate: 7.4 },
  { name: 'SMB Follow-up', bounced: 8, sent: 492, opens: 142, clicks: 31, replies: 18, openRate: 28.9, replyRate: 3.7 },
  { name: 'Product Launch', bounced: 12, sent: 2156, opens: 849, clicks: 287, replies: 156, openRate: 39.4, replyRate: 7.2 }
];
export const campaigns = [
  { id: 'all', name: 'All Campaigns' },
  { id: 'q1-saas', name: 'Q1 SaaS Outreach' },
  { id: 'enterprise', name: 'Enterprise Prospects' },
  { id: 'smb', name: 'SMB Follow-up' },
  { id: 'product-launch', name: 'Product Launch' }
];

export const mailboxes = [
  { id: 'all', name: 'All Mailboxes' },
  { id: 'john', name: 'john@mycompany.com' },
  { id: 'sarah', name: 'sarah@mycompany.com' },
  { id: 'mike', name: 'mike@mycompany.com' },
  { id: 'lisa', name: 'lisa@mycompany.com' }
];

export const mockMailboxes = [
    {
      id: '1',
      name: 'Primary Sales',
      email: 'sales@company.com',
      status: 'active',
      warmupProgress: 95,
      dailyVolume: 45,
      healthScore: 92
    },
    {
      id: '2',
      name: 'Outreach Account',
      email: 'outreach@company.com',
      status: 'warming',
      warmupProgress: 67,
      dailyVolume: 30,
      healthScore: 78
    },
    {
      id: '3',
      name: 'Follow-up Bot',
      email: 'followup@company.com',
      status: 'active',
      warmupProgress: 88,
      dailyVolume: 35,
      healthScore: 85
    },
    {
      id: '4',
      name: 'Lead Generation',
      email: 'leads@company.com',
      status: 'paused',
      warmupProgress: 42,
      dailyVolume: 0,
      healthScore: 65
    }
  ];
