interface Template {
  id: number;
  name: string;
  subject: string;
  content: string;
  category: string;
  folderId: number | null;
  usage: number;
  openRate: string;
  replyRate: string;
  lastUsed: string;
  isStarred: boolean;
  type: 'quick-reply' | 'template';
}

interface TemplateFolder {
  id: number;
  name: string;
  type: 'quick-reply' | 'template';
  templateCount: number;
  isExpanded: boolean;
  children: (Template | TemplateFolder)[];
}
