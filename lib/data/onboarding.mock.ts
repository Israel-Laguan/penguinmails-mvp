import {
    Globe,
    Mail,
    PenTool,
    Send,
    Settings,
    Target,
    Users,
    Zap
} from 'lucide-react';
export const onboardingSteps = [
  {
    id: 1,
    title: 'Connect Your Domain',
    subtitle: 'Set up your sending domain for professional email delivery',
    explanation:
      'Your domain is the foundation of your email campaigns. By connecting and verifying your domain (like yourcompany.com), you ensure your emails are delivered from a professional address and improve your sender reputation. This step involves adding DNS records to prove you own the domain.',
    icon: Globe,
    color: 'bg-blue-500',
    href: '/dashboard/domains',
    buttonText: 'Go to Domains Page',
    kbLink: 'How to connect a domain',
    videoId: 'dQw4w9WgXcQ',
    completed: false,
  },
  {
    id: 2,
    title: 'Create Mailboxes',
    subtitle: 'Create email accounts (mailboxes) to send campaigns from',
    explanation:
      'Mailboxes are the individual email accounts that will send your campaigns. You can create multiple mailboxes like john@yourcompany.com, sales@yourcompany.com to distribute your sending volume and appear more natural. Each mailbox needs to be properly configured with SMTP settings.',
    icon: Mail,
    color: 'bg-purple-500',
    href: '/dashboard/domains/mailboxes',
    buttonText: 'Go to Mailboxes Page',
    kbLink: 'Guide to mailbox setup',
    videoId: 'dQw4w9WgXcQ',
    completed: false,
  },
  {
    id: 3,
    title: 'Enable Warmup',
    subtitle: 'Warming up mailboxes boosts deliverability and reputation',
    explanation:
      'Email warmup is the process of gradually increasing your sending volume to build a positive sender reputation. Our automated warmup service sends and receives emails between real accounts to establish trust with email providers like Gmail and Outlook, ensuring your campaigns land in the inbox.',
    icon: Zap,
    color: 'bg-orange-500',
    href: '/dashboard/domains/warmup',
    buttonText: 'Go to Warmup Page',
    kbLink: 'How warmup works',
    videoId: 'dQw4w9WgXcQ',
    completed: false,
  },
  {
    id: 4,
    title: 'Upload Leads',
    subtitle: 'Upload your leads to start reaching potential clients',
    explanation:
      'Import your prospect list using our CSV upload tool. Your leads should include essential information like first name, last name, email, company, and job title. Quality leads are crucial for campaign success - make sure your list is clean, targeted, and relevant to your offering.',
    icon: Users,
    color: 'bg-green-500',
    href: '/dashboard/leads',
    buttonText: 'Go to Leads Page',
    kbLink: 'CSV format guide',
    videoId: 'dQw4w9WgXcQ',
    completed: false,
    promotion: {
      title: 'Need Quality Leads?',
      description:
        'Our lead generation service finds verified prospects in your target market.',
      link: 'Learn about Lead Generation',
    },
  },
  {
    id: 5,
    title: 'Create & Launch Your First Campaign',
    subtitle:
      'Put everything together and send your first cold outreach campaign',
    explanation:
      "Now you're ready to create your first campaign! Use our campaign builder to craft your email sequence, set up follow-ups, choose your leads, assign mailboxes, and configure sending schedules. Start with a small test batch to optimize your approach before scaling up.",
    icon: Send,
    color: 'bg-emerald-500',
    href: '/dashboard/campaigns',
    buttonText: 'Go to Campaign Builder',
    kbLink: 'How to create a campaign',
    videoId: 'dQw4w9WgXcQ',
    completed: false,
    promotion: {
      title: 'Need Help with Copy?',
      description:
        'Our copywriting experts create high-converting email sequences for you.',
      link: 'Learn about Copywriting Service',
    },
  },
];

export const faqItems = [
  {
    id: 1,
    question: 'How long does the setup process take?',
    answer:
      'Most users complete the entire onboarding in 30-60 minutes. Domain verification can take up to 24 hours, but you can continue with other steps while waiting.',
  },
  {
    id: 2,
    question: 'Do I need technical knowledge to set this up?',
    answer:
      'Not at all! Our step-by-step guides and video tutorials walk you through everything. For DNS setup, you might need access to your domain registrar, but we provide exact instructions.',
  },
  {
    id: 3,
    question: 'Can I skip steps and come back later?',
    answer:
      'While you can navigate away at any time, we recommend completing steps in order for the best experience. Each step builds on the previous one.',
  },
  {
    id: 4,
    question: 'What if I get stuck on a step?',
    answer:
      'Use the "Need Help?" button below to access our help center, or contact our support team. We\'re here to help you succeed!',
  },
];
