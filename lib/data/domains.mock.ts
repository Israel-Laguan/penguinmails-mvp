import DomainsTab from "@/components/domains/domains-tab";
import MailboxesTab from "@/components/domains/mailboxes/mailboxes-tab";
import WarmupTab from "@/components/domains/warmup-tab";
import { Globe, Mail, Zap } from "lucide-react";

export const domains = [
  {
    id: 1,
    domain: 'mycompany.com',
    status: 'verified',
    mailboxes: 5,
    records: {
      spf: 'verified',
      dkim: 'verified',
      dmarc: 'verified',
      mx: 'verified'
    },
    addedDate: '2 weeks ago'
  },
  {
    id: 2,
    domain: 'outreach.mycompany.com',
    status: 'pending',
    mailboxes: 0,
    records: {
      spf: 'verified',
      dkim: 'pending',
      dmarc: 'pending',
      mx: 'verified'
    },
    addedDate: '1 day ago'
  }
]
export const mailboxes : Mailbox[] = [
  {
    id: 1,
    email: 'john@mycompany.com',
    domain: 'mycompany.com',
    status: 'active',
    campaign: 'Q1 SaaS Outreach',
    warmupStatus: 'ready',
    dailyLimit: 50,
    sent: 847,
    lastActivity: '2 hours ago',
    warmupProgress: 100,
    warmupDays: 28,
    totalSent: 456,
    replies: 189,
    engagement: '41.4%',
    createdAt: '2023-10-01T12:00:00Z',
  },
  {
    id: 2,
    email: 'sarah@mycompany.com',
    domain: 'mycompany.com',
    status: 'active',
    campaign: 'Enterprise Prospects',
    warmupStatus: 'warming',
    dailyLimit: 30,
    sent: 432,
    lastActivity: '4 hours ago',
    warmupProgress: 60,
    warmupDays: 12,
    totalSent: 234,
    replies: 87,
    engagement: '37.2%',
    createdAt: '2023-10-01T12:00:00Z',
  },
  {
    id: 3,
    email: 'mike@mycompany.com',
    domain: 'mycompany.com',
    status: 'paused',
    campaign: null,
    warmupStatus: 'paused',
    dailyLimit: 25,
    sent: 298,
    lastActivity: '1 day ago',
    warmupProgress: 25,
    warmupDays: 5,
    totalSent: 89,
    replies: 31,
    engagement: '34.8%',
    createdAt: '2023-10-01T12:00:00Z'
  },
  {
    id: 4,
    email: 'lisa@mycompany.com',
    domain: 'mycompany.com',
    status: 'active',
    campaign: 'Product Launch',
    warmupStatus: 'warming',
    dailyLimit: 35,
    sent: 523,
    lastActivity: '6 hours ago',
    warmupProgress: 40,
    warmupDays: 8,
    totalSent: 167,
    replies: 62,
    engagement: '37.1%',
    createdAt: '2023-10-01T12:00:00Z'
  },
  {
    id: 5,
    email: 'david@mycompany.com',
    domain: 'mycompany.com',
    status: 'active',
    campaign: 'Partnership Outreach',
    warmupStatus: 'ready',
    dailyLimit: 40,
    sent: 689,
    lastActivity: '1 hour ago',
    warmupProgress: 100,
    warmupDays: 35,
    totalSent: 623,
    replies: 267,
    engagement: '42.9%',
    createdAt: '2023-10-01T12:00:00Z'
  }
];
export const tabs = [
    { id: '', label: 'Domains', count: domains.length, icon: Globe },
    { id: 'mailboxes', label: 'Mailboxes', count: mailboxes.length, icon: Mail  },
    { id: 'warmup', label: 'Warmup Hub', count: mailboxes.filter(m => m.warmupStatus !== 'ready').length, icon: Zap},
  ];


export const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
      case 'active':
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'pending':
      case 'warming':
        return 'bg-orange-100 text-orange-800';
      case 'failed':
      case 'paused':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };



