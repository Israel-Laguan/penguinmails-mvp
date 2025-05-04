import { EmailEventType } from '@/app/api/generated/prisma';
import AnalyticsContent from '@/components/analytics/content';
import { CampaignStats } from '@/components/analytics/types';

// import { getServerSession } from "next-auth/next";
// import { config as authOptions } from "@/lib/auth";
// import { signOut } from "next-auth/react";

export default async function AnalyticsPage() {
  // const session = await getServerSession(authOptions);

  // if (!session || !session.user) {
  //   return <div>Unauthorized</div>;
  // }

  // const companyId = session.user.companyId;
  // if (!companyId) {
  //   await signOut({ callbackUrl: '/auth/signin' });
  //   return null;
  // }

  // Mock data adjusted to match schema types
  const campaignStats: CampaignStats[] = [
    {
      id: 1,
      name: 'Welcome Campaign',
      stats: {
        [EmailEventType.SENT]: 1000,
        [EmailEventType.OPENED]: 750,
        [EmailEventType.CLICKED]: 300,
        [EmailEventType.BOUNCED]: 50,
        [EmailEventType.UNSUBSCRIBED]: 10,
      }
    },
    {
      id: 2,
      name: 'Newsletter #1',
      stats: {
        [EmailEventType.SENT]: 2500,
        [EmailEventType.OPENED]: 1800,
        [EmailEventType.CLICKED]: 900,
        [EmailEventType.BOUNCED]: 75,
        [EmailEventType.UNSUBSCRIBED]: 25,
      }
    },
    {
      id: 3,
      name: 'Product Launch',
      stats: {
        [EmailEventType.SENT]: 5000,
        [EmailEventType.OPENED]: 3500,
        [EmailEventType.CLICKED]: 1200,
        [EmailEventType.BOUNCED]: 150,
        [EmailEventType.UNSUBSCRIBED]: 45,
      }
    }
  ];

  return <AnalyticsContent campaignStats={campaignStats} />;
}

