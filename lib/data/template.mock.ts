import GalleryTab from "@/components/templates/gallery-tab";
import MyTemplatesTab from "@/components/templates/my-templates-tab";
import QuickRepliesTab from "@/components/templates/qucik-replies-tab";
import { Tab } from "@/types/tab";

export const initialFolders = [
  { id: 1, name: 'Cold Outreach', type: 'template', templateCount: 2, isExpanded: true  , children: [
     {
    id: 1,
    name: 'Cold Outreach - SaaS',
    subject: 'Quick question about {{company}} workflow',
    content: 'Hi {{first_name}},\n\nI hope this email finds you well. I noticed that {{company}} has been growing rapidly in the enterprise software space, and I thought our solution might be a great fit for your team.\n\nWe help companies like {{company}} streamline their workflow and increase productivity by 40% on average. Our recent client, similar to your company, saw remarkable results within just 3 months of implementation.\n\nWould you be interested in a quick 15-minute call to discuss how this could benefit {{company}}? I have some time available next week.\n\nBest regards,\n{{sender_name}}',
    category: 'Cold Outreach',
    folderId: 1,
    usage: 847,
    openRate: '34.2%',
    replyRate: '8.6%',
    lastUsed: '2 hours ago',
    isStarred: true,
    type: 'template'
  },
  {
    id: 6,
    name: 'Cold Outreach - E-commerce',
    subject: 'Boost {{company}} sales with our solution',
    content: 'Hi {{first_name}},\n\nI came across {{company}} and was impressed by your product line. As an e-commerce business, I imagine you\'re always looking for ways to increase conversions and customer lifetime value.\n\nOur platform has helped similar e-commerce companies increase their sales by 25-35% through better customer targeting and personalization.\n\nWould you be open to a brief 10-minute call to see how this could work for {{company}}?\n\nBest,\n{{sender_name}}',
    category: 'Cold Outreach',
    folderId: 1,
    usage: 425,
    openRate: '31.8%',
    replyRate: '7.2%',
    lastUsed: '1 day ago',
    isStarred: false,
    type: 'template'
  }
  ] },
  { id: 2, name: 'Follow-ups', type: 'template', templateCount: 1, isExpanded: true , children: [
    {
      id: 2,
      name: 'Follow-up #1',
      subject: 'Following up on my previous email',
      content: 'Hi {{first_name}},\n\nI wanted to follow up on my previous email about how we can help {{company}} streamline your workflow processes.\n\nI understand you\'re probably busy, but I believe this could save your team significant time and resources. Many companies in your industry have seen 40%+ productivity improvements.\n\nWould you have 10 minutes this week for a quick call? I can show you exactly how this would work for {{company}}.\n\nBest regards,\n{{sender_name}}',
      category: 'Follow-ups',
      folderId: 2,
      usage: 523,
      openRate: '28.9%',
      replyRate: '12.3%',
      lastUsed: '1 day ago',
      isStarred: false,
      type: 'template'
    }
  ] },
  { id: 3, name: 'Product Demo', type: 'template', templateCount: 0, isExpanded: true , children: [] },
  { id: 4, name: 'Partnerships', type: 'template', templateCount: 0, isExpanded: true , children: [] },
  { id: 5, name: 'Common Responses', type: 'quick-reply', templateCount: 2, isExpanded: true , children: [
    {
      id: 4,
      name: 'Thanks for your interest',
      subject: '',
      content: 'Thanks for your interest! I\'ll send over more details shortly.',
      category: 'Quick Replies',
      folderId: 5,
      usage: 234,
      openRate: '0%',
      replyRate: '0%',
      lastUsed: '3 hours ago',
      isStarred: false,
      type: 'quick-reply'
    },
    {
      id: 5,
      name: 'Schedule a call',
      subject: '',
      content: 'I\'d be happy to schedule a quick call to discuss this further. What does your calendar look like next week?',
      category: 'Quick Replies',
      folderId: 5,
      usage: 189,
      openRate: '0%',
      replyRate: '0%',
      lastUsed: '5 hours ago',
      isStarred: true,
      type: 'quick-reply'
    }
  ] },
  { id: 6, name: 'Objection Handling', type: 'quick-reply', templateCount: 0, isExpanded: true , children: [] }
];
export const initialQuickReplies  = initialFolders.flatMap(folder => folder.children).filter(child => child.type === 'quick-reply');
export const initialTemplates = initialFolders.flatMap(folder => folder.children).filter(child => child.type === 'template');

export const tabs : Tab[] = [
    { 
      id: 'quick-replies', 
      label: 'Quick Replies', 
      count: initialQuickReplies.length,
      Component: QuickRepliesTab
    },
    { 
      id: 'templates', 
      label: 'My Templates', 
      count: initialTemplates.length,
      Component: MyTemplatesTab 
    },
    { 
      id: 'gallery', 
      label: 'Gallery', 
      count: 0,
      Component: GalleryTab 
    }
  ];
