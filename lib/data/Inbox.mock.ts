export const conversations : Conversation[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    company: 'TechCorp',
    title: 'VP of Engineering',
    subject: 'Re: Partnership Opportunity',
    preview: 'Thanks for reaching out! I\'d love to schedule a call to discuss this further. Are you available next week?',
    time: '2024-01-15T14:30:00Z',
    status: 'unread',
    campaign: 'Q1 SaaS Outreach',
    tag: 'interested',
    isPinned: false,
    isStarred: true,
    avatar: 'SJ',
    lastMessage: 'incoming',
    notes: 'Very interested in our enterprise solution. Mentioned budget approval process.',
    followUpDate: '2024-01-18'
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike@startup.io',
    company: 'Startup.io',
    title: 'CEO',
    subject: 'Re: Product Demo Request',
    preview: 'Not interested at this time, but please keep us in mind for the future.',
    time: '2024-01-15T10:15:00Z',
    status: 'read',
    campaign: 'Enterprise Prospects',
    tag: 'not-interested',
    isPinned: false,
    isStarred: false,
    avatar: 'MC',
    lastMessage: 'incoming',
    notes: '',
    followUpDate: '2024-03-15'
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    email: 'lisa@enterprise.com',
    company: 'Enterprise Inc',
    title: 'Head of Operations',
    subject: 'Re: Solution for Enterprise Teams',
    preview: 'This looks interesting. Can you send me more information about pricing and implementation timeline?',
    time: '2024-01-15T08:45:00Z',
    status: 'unread',
    campaign: 'Q1 SaaS Outreach',
    tag: 'interested',
    isPinned: true,
    isStarred: false,
    avatar: 'LR',
    lastMessage: 'incoming',
    notes: 'Asking about pricing - seems ready to move forward. Large team (200+ employees).',
    followUpDate: '2024-01-16'
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'david@consulting.com',
    company: 'Kim Consulting',
    title: 'Managing Partner',
    subject: 'Re: Consulting Services Inquiry',
    preview: 'We\'re currently working with another vendor, but I\'ll reach out if anything changes.',
    time: '2024-01-14T16:20:00Z',
    status: 'read',
    campaign: 'SMB Follow-up',
    tag: 'maybe-later',
    isPinned: false,
    isStarred: false,
    avatar: 'DK',
    lastMessage: 'incoming',
    notes: 'Has existing vendor but open to future opportunities.',
    followUpDate: '2024-04-15'
  }
]

export const getTagColor = (tag: string) => {
  switch (tag) {
    case "interested":
      return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
    case "not-interested":
      return "bg-red-50 text-red-700 border-red-200 hover:bg-red-100";
    case "maybe-later":
      return "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100";
    case "replied":
      return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
    case "follow-up":
      return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100";
  }
};
