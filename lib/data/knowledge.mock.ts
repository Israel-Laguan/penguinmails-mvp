import { PenTool, Shield, Target, TrendingUp, Users, Zap } from "lucide-react";

export const knowledgeBaseArticles = [
  {
    id: 1,
    title: 'Getting Started with Cold Email Campaigns',
    description: 'Learn how to create your first cold email campaign from setup to launch.',
    category: 'Campaigns',
    tag: 'Getting Started',
    url: 'https://penguinmails.com/help/getting-started-campaigns'
  },
  {
    id: 2,
    title: 'Domain Setup and DNS Configuration',
    description: 'Complete guide to setting up your domain with proper DNS records for email delivery.',
    category: 'Domains',
    tag: 'Setup',
    url: 'https://penguinmails.com/help/domain-setup'
  },
  {
    id: 3,
    title: 'Email Warmup Best Practices',
    description: 'How to properly warm up your mailboxes for optimal deliverability and inbox placement.',
    category: 'Warmup',
    tag: 'Best Practices',
    url: 'https://penguinmails.com/help/warmup-best-practices'
  },
  {
    id: 4,
    title: 'Understanding Email Deliverability',
    description: 'Learn about factors that affect email deliverability and how to improve your sender reputation.',
    category: 'Deliverability',
    tag: 'Advanced',
    url: 'https://penguinmails.com/help/email-deliverability'
  },
  {
    id: 5,
    title: 'Creating Effective Email Templates',
    description: 'Tips and strategies for writing compelling cold emails that get responses.',
    category: 'Templates',
    tag: 'Writing',
    url: 'https://penguinmails.com/help/email-templates'
  },
  {
    id: 6,
    title: 'Managing Lead Lists and Imports',
    description: 'How to import, organize, and manage your lead lists for maximum campaign effectiveness.',
    category: 'Leads',
    tag: 'Management',
    url: 'https://penguinmails.com/help/lead-management'
  }
];
export const videoTutorials = [
  {
    id: 1,
    title: 'Complete Campaign Setup Walkthrough',
    description: 'Step-by-step guide to creating your first campaign',
    category: 'Campaigns',
    duration: '12:34',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Domain and Mailbox Configuration',
    description: 'How to set up domains and create mailboxes',
    category: 'Setup',
    duration: '8:45',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'Warmup Process Explained',
    description: 'Understanding and optimizing email warmup',
    category: 'Warmup',
    duration: '15:22',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Advanced Analytics and Reporting',
    description: 'Making sense of your campaign data',
    category: 'Analytics',
    duration: '10:18',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoId: 'dQw4w9WgXcQ'
  }
]

export const glossaryTerms = [
  {
    id: 1,
    term: 'SPF Record',
    meaning: 'Sender Policy Framework - A DNS record that specifies which mail servers are authorized to send emails on behalf of your domain.',
    tag: 'DNS',
    type: 'Tech'
  },
  {
    id: 2,
    term: 'DKIM',
    meaning: 'DomainKeys Identified Mail - An email authentication method that allows the receiver to check that an email was actually sent by the domain it claims to be from.',
    tag: 'Authentication',
    type: 'Tech'
  },
  {
    id: 3,
    term: 'DMARC',
    meaning: 'Domain-based Message Authentication, Reporting & Conformance - An email authentication protocol that builds on SPF and DKIM.',
    tag: 'Authentication',
    type: 'Tech'
  },
  {
    id: 4,
    term: 'Open Rate',
    meaning: 'The percentage of recipients who opened your email out of the total number of emails delivered.',
    tag: 'Metrics',
    type: 'Email'
  },
  {
    id: 5,
    term: 'Reply Rate',
    meaning: 'The percentage of recipients who replied to your email out of the total number of emails sent.',
    tag: 'Metrics',
    type: 'Email'
  },
  {
    id: 6,
    term: 'Warmup',
    meaning: 'The process of gradually increasing email sending volume to build sender reputation and improve deliverability.',
    tag: 'Process',
    type: 'Email'
  },
  {
    id: 7,
    term: 'Bounce Rate',
    meaning: 'The percentage of emails that could not be delivered to the recipient\'s inbox.',
    tag: 'Metrics',
    type: 'Email'
  },
  {
    id: 8,
    term: 'MX Record',
    meaning: 'Mail Exchange record - A DNS record that specifies the mail server responsible for accepting email messages on behalf of a domain.',
    tag: 'DNS',
    type: 'Tech'
  }
];

export const services = [
  {
    id: 1,
    title: 'Iceberg Generation',
    description: 'Get high-quality, targeted lead lists generated specifically for your business needs.',
    icon: Target,
    color: 'bg-blue-500',
    cta: 'Learn More'
  },
  {
    id: 2,
    title: 'Lead Generation',
    description: 'Professional lead research and list building services to fuel your outreach campaigns.',
    icon: Users,
    color: 'bg-green-500',
    cta: 'Get Started'
  },
  {
    id: 3,
    title: 'Email Verification',
    description: 'Ensure your email lists are clean and deliverable with our advanced verification service.',
    icon: Shield, 
    color: 'bg-purple-500',
    cta: 'Verify Now'
  },
  {
    id: 4,
    title: 'Email / Lead Enrichment',
    description: 'Enhance your existing leads with additional contact information and company data.',
    icon: TrendingUp,
    color: 'bg-orange-500',
    cta: 'Enrich Data'
  },
  {
    id: 5,
    title: 'Copywriting',
    description: 'Professional email copywriting services to create high-converting cold email sequences.',
    icon: PenTool,
    color: 'bg-pink-500',
    cta: 'Get Copy'
  },
  {
    id: 6,
    title: 'Done-for-you Outreach',
    description: 'Complete outreach management service - we handle everything from setup to follow-ups.',
    icon: Zap,
    color: 'bg-indigo-500',
    cta: 'Book Call'
  }
];



export const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'Getting Started': 'bg-green-100 text-green-800',
      'Setup': 'bg-blue-100 text-blue-800',
      'Best Practices': 'bg-purple-100 text-purple-800',
      'Advanced': 'bg-orange-100 text-orange-800',
      'Writing': 'bg-pink-100 text-pink-800',
      'Management': 'bg-indigo-100 text-indigo-800',
      'DNS': 'bg-red-100 text-red-800',
      'Authentication': 'bg-yellow-100 text-yellow-800',
      'Metrics': 'bg-green-100 text-green-800',
      'Process': 'bg-blue-100 text-blue-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };
