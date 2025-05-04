import { EmailEventType } from '@/app/api/generated/prisma';

export interface CampaignStats {
  id: number;
  name: string;
  stats: {
    [key in EmailEventType]?: number;
  }
}
