import { statusCampaign } from "@/types/campaign";
import { Mail, Send, TrendingUp, Users } from "lucide-react";

export const campaignsData = [
  {
    id: 1,
    name: "Q1 SaaS Outreach",
    status: statusCampaign.active,
    mailboxes: 3,
    leadsSent: 847,
    replies: 73,
    openRate: "34.2%",
    replyRate: "8.6%",
    lastSent: "2 hours ago",
    createdDate: "2024-01-01",
    assignedMailboxes: [
      "john@mycompany.com",
      "sarah@mycompany.com",
      "mike@mycompany.com",
    ],
    leadsList :{
      id: 1,
      name: "Q1 SaaS Leads",
      description: "Leads collected from Q1 SaaS events and webinars",
      contacts: 1200,
    }
  },
  {
    id: 2,
    name: "Enterprise Prospects",
    status: statusCampaign.paused,
    mailboxes: 5,
    leadsSent: 1203,
    replies: 124,
    openRate: "41.7%",
    replyRate: "10.3%",
    lastSent: "1 day ago",
    createdDate: "2024-01-05",
    assignedMailboxes: [
      "john@mycompany.com",
      "sarah@mycompany.com",
      "mike@mycompany.com",
      "lisa@mycompany.com",
      "david@mycompany.com",
    ],
    leadsList :{
      id: 2,
      name: "Enterprise Leads",
      description: "High-value enterprise leads from industry reports",
      contacts: 2000,
    }
  },
  {
    id: 3,
    name: "SMB Follow-up",
    status: statusCampaign.active,
    mailboxes: 2,
    leadsSent: 492,
    replies: 38,
    openRate: "28.9%",
    replyRate: "7.7%",
    lastSent: "4 hours ago",
    createdDate: "2024-01-10",
    assignedMailboxes: ["lisa@mycompany.com", "david@mycompany.com"],
    leadsList :{
      id: 3,
      name: "SMB Leads",
      description: "Leads from small and medium businesses in Q1",
      contacts: 800,
    }
  },
  {
    id: 4,
    name: "Product Launch Outreach",
    status: statusCampaign.completed,
    mailboxes: 4,
    leadsSent: 2156,
    replies: 287,
    openRate: "39.4%",
    replyRate: "13.3%",
    lastSent: "1 week ago",
    createdDate: "2023-12-15",
    assignedMailboxes: [
      "john@mycompany.com",
      "sarah@mycompany.com",
      "mike@mycompany.com",
      "lisa@mycompany.com",
    ],
    leadsList :{
      id: 2,
      name: "Enterprise Leads",
      description: "High-value enterprise leads from industry reports",
      contacts: 2000,
    }
  },
  {
    id: 5,
    name: "Partnership Outreach",
    status: statusCampaign.active,
    mailboxes: 2,
    leadsSent: 324,
    replies: 45,
    openRate: "42.1%",
    replyRate: "13.9%",
    lastSent: "6 hours ago",
    createdDate: "2024-01-12",
    assignedMailboxes: ["sarah@mycompany.com", "david@mycompany.com"],
    leadsList :{
      id: 1,
      name: "Q1 SaaS Leads",
      description: "Leads collected from Q1 SaaS events and webinars",
      contacts: 1200,
    }
  },
];


export type Campaign = {
  id: number;
  name: string;
  status: statusCampaign; 
  mailboxes: number;
  leadsSent: number;
  replies: number;
  openRate: string;
  replyRate: string;
  lastSent: string;
  createdDate: string;
  assignedMailboxes: string[];
};



export const sequenceSteps = [
  {
    id: 1,
    type: "email",
    subject: "Quick question about {{company}}",
    sent: 847,
    opens: 289,
    clicks: 73,
    replies: 42,
    openRate: "34.1%",
    clickRate: "8.6%",
    replyRate: "5.0%",
  },
  {
    id: 2,
    type: "wait",
    duration: "2 days",
    completed: 805,
  },
  {
    id: 3,
    type: "email",
    subject: "Following up on my previous email",
    sent: 763,
    opens: 198,
    clicks: 31,
    replies: 18,
    openRate: "25.9%",
    clickRate: "4.1%",
    replyRate: "2.4%",
  },
];

export const campaignLeads = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    company: "TechCorp",
    status: "replied",
    currentStep: 1,
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@startup.io",
    company: "Startup.io",
    status: "opened",
    currentStep: 2,
    lastActivity: "4 hours ago",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    email: "lisa@enterprise.com",
    company: "Enterprise Inc",
    status: "sent",
    currentStep: 1,
    lastActivity: "6 hours ago",
  },
];

export const activityLog = [
  {
    id: 1,
    type: "sent",
    message: "Email sent to Sarah Johnson",
    timestamp: "2 hours ago",
    details: "Step 1: Quick question about {{company}}",
  },
  {
    id: 2,
    type: "reply",
    message: "Reply received from Mike Chen",
    timestamp: "4 hours ago",
    details: "Positive response - interested in demo",
  },
  {
    id: 3,
    type: "opened",
    message: "Email opened by Lisa Rodriguez",
    timestamp: "6 hours ago",
    details: "Step 1: Quick question about {{company}}",
  },
];


export const availableMailboxes = [
  "john@mycompany.com",
  "sarah@mycompany.com",
  "mike@mycompany.com",
  "lisa@mycompany.com",
  "david@mycompany.com",
];


export const statsCards = [
  { title: "Active Campaigns", value: "12", icon: Send, color: "bg-blue-500" },
  {
    title: "Leads Contacted",
    value: "2,847",
    icon: Users,
    color: "bg-green-500",
  },
  { title: "Open Rate", value: "34.2%", icon: Mail, color: "bg-purple-500" },
  {
    title: "Reply Rate",
    value: "8.7%",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
];
export const recentReplies = [
  {
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    company: "TechCorp",
    message:
        "Thanks for reaching out! I'd love to schedule a call to discuss this further.",
    time: "2 hours ago",
    type: "positive",
  },
  {
    name: "Mike Chen",
    email: "mike@startup.io",
    company: "Startup.io",
    message:
        "Not interested at this time, but please keep us in mind for the future.",
    time: "4 hours ago",
    type: "neutral",
  },
  {
    name: "Lisa Rodriguez",
    email: "lisa@enterprise.com",
    company: "Enterprise Inc",
    message:
        "This looks interesting. Can you send me more information about pricing?",
    time: "6 hours ago",
    type: "positive",
  },
];
