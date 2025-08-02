import { FileText, Mail, Upload, Users } from "lucide-react";

export const leadLists = [
  {
    id: "1",
    name: "Q1 Tech Prospects",
    contacts: 847,
    description: "Technology decision makers and influencers",
  },
  {
    id: "2",
    name: "Enterprise Decision Makers",
    contacts: 1203,
    description: "C-level executives at enterprise companies",
  },
  {
    id: "3",
    name: "SMB Follow-up List",
    contacts: 492,
    description: "Small to medium business prospects",
  },
];


export const leadsStats = [
  {
    title: "Total Contacts",
    value: "2,542",
    icon: Users,
    color: "text-blue-600 bg-blue-100",
  },
    {
    title: "In Campaigns",
    value: "1,847",
    icon: Mail,
    color: "bg-purple-100 text-purple-600",
  },
 
]
export const leadsTabs = [
              { id: 'lists', label: 'Lead Lists', count: leadLists.length, icon: FileText },
              { id: 'upload', label: 'Upload CSV', icon: Upload },
              { id: 'contacts', label: 'All Contacts', count: 2542, icon: Users }
            ];

export const  leadListsData = [
  {
    id: 1,
    name: 'Q1 Tech Prospects',
    contacts: 847,
    status: 'used',
    campaign: 'Q1 SaaS Outreach',
    uploadDate: '2024-01-15',
    bounced: 24,
    tags: ['enterprise', 'tech'],
    performance: { openRate: 34.2, replyRate: 8.6 }
  },
  {
    id: 2,
    name: 'Enterprise Decision Makers',
    contacts: 1203,
    status: 'being-used',
    campaign: 'Enterprise Prospects',
    uploadDate: '2024-01-08',
    bounced: 47,
    tags: ['enterprise', 'c-level'],
    performance: { openRate: 41.7, replyRate: 10.3 }
  },
  {
    id: 3,
    name: 'SMB Follow-up List',
    contacts: 492,
    status: 'used',
    campaign: 'SMB Follow-up',
    uploadDate: '2024-01-01',
    bounced: 14,
    tags: ['smb', 'follow-up'],
    performance: { openRate: 28.9, replyRate: 7.7 }
  },
  {
    id: 4,
    name: 'Healthcare Prospects',
    contacts: 324,
    status: 'not-used',
    campaign: null,
    uploadDate: '2024-01-20',
    bounced: 0,
    tags: ['healthcare', 'prospects'],
    performance: { openRate: 0, replyRate: 0 }
  },
  {
    id: 5,
    name: 'Education Sector List',
    contacts: 156,
    status: 'not-used',
    campaign: null,
    uploadDate: '2024-01-22',
    bounced: 0,
    tags: ['education', 'institutions'],
    performance: { openRate: 0, replyRate: 0 }
  }
];

export const sampleLeads = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    company: 'TechCorp',
    title: 'VP of Engineering',
    status: 'sent',
    tags: ['enterprise', 'tech', 'decision-maker'],
    lastContact: '2024-01-15',
    campaign: 'Q1 SaaS Outreach',
    source: 'LinkedIn'
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike@startup.io',
    company: 'Startup.io',
    title: 'CEO',
    status: 'replied',
    tags: ['startup', 'ceo', 'hot-lead'],
    lastContact: '2024-01-14',
    campaign: 'Enterprise Prospects',
    source: 'Website'
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    email: 'lisa@enterprise.com',
    company: 'Enterprise Inc',
    title: 'Head of Operations',
    status: 'bounced',
    tags: ['enterprise', 'operations'],
    lastContact: '2024-01-13',
    campaign: 'Q1 SaaS Outreach',
    source: 'Cold Email'
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'david@consulting.com',
    company: 'Kim Consulting',
    title: 'Managing Partner',
    status: 'sent',
    tags: ['consulting', 'partner'],
    lastContact: '2024-01-12',
    campaign: 'SMB Follow-up',
    source: 'Referral'
  },
  {
    id: 5,
    name: 'Emily Zhang',
    email: 'emily@techstart.com',
    company: 'TechStart',
    title: 'CTO',
    status: 'not-used',
    tags: ['tech', 'startup', 'cto'],
    lastContact: null,
    campaign: null,
    source: 'Conference'
  }
] as const;

export type Lead = typeof sampleLeads[number];

export const CSV_COLUMNS = [
  { key: "email", label: "Email Address", required: true },
  { key: "first_name", label: "First Name", required: true },
  { key: "last_name", label: "Last Name", required: true },
  { key: "company", label: "Company Name", required: false },
  { key: "title", label: "Job Title", required: false },
  { key: "website", label: "Website", required: false },
  { key: "phone", label: "Phone Number", required: false },
];

export const SAMPLE_CSV_DATA = [
  ["Email Address", "First Name", "Last Name", "Company", "Job Title"],
  ["john.doe@example.com", "John", "Doe", "Example Inc.", "Software Engineer"],
  ["jane.smith@testcorp.com", "Jane", "Smith", "Test Corp.", "Product Manager"],
];
