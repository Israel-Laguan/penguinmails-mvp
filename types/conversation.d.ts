interface Conversation {
  id: number;
  name: string;
  email: string;
  company: string;
  title: string;  
  subject: string;
  preview: string;
  time: string; // ISO date string
  status: 'unread' | 'read';
  campaign: string;
  tag: 'interested' | 'not-interested' | 'maybe-later'
  isPinned: boolean;
  isStarred: boolean;
  avatar: string; // Initials or avatar image
  lastMessage: 'incoming' | 'outgoing';
  notes: string; // Additional notes about the conversation
  followUpDate: string; // ISO date string for follow-up
}
