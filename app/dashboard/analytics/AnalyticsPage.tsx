
import { PrismaClient, EmailEventType } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";

const prisma = new PrismaClient();

async function getAnalyticsData(companyId: string) {
  // Fetch campaigns for the company
  const campaigns = await prisma.campaign.findMany({
    where: { companyId },
    select: { id: true, name: true },
    orderBy: { createdAt: "desc" },
  });

  // Fetch aggregated event counts for each campaign
  const campaignStats = await Promise.all(
    campaigns.map(async (campaign) => {
      const sentCount = await prisma.emailEvent.count({
        where: {
          campaignId: campaign.id,
          type: EmailEventType.SENT,
        },
      });
      const openedCount = await prisma.emailEvent.count({
        where: {
          campaignId: campaign.id,
          type: EmailEventType.OPENED,
        },
      });
      const clickedCount = await prisma.emailEvent.count({
        where: {
          campaignId: campaign.id,
          type: EmailEventType.CLICKED,
        },
      });
      const bouncedCount = await prisma.emailEvent.count({
        where: {
          campaignId: campaign.id,
          type: EmailEventType.BOUNCED,
        },
      });
      const unsubscribedCount = await prisma.emailEvent.count({
        where: {
          campaignId: campaign.id,
          type: EmailEventType.UNSUBSCRIBED,
        },
      });

      return {
        id: campaign.id,
        name: campaign.name,
        sent: sentCount,
        opened: openedCount,
        clicked: clickedCount,
        bounced: bouncedCount,
        unsubscribed: unsubscribedCount,
      };
    })
  );

  return campaignStats;
}

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    // Handle unauthorized access, though ProtectedRoute should cover this
    return <div>Unauthorized</div>;
  }

  const companyId = session.user.companyId;
    if (!companyId) {
      // You might want to import signOut from next-auth/react if not already imported
      await signOut({ callbackUrl: '/auth/signin' });
      return null;
    }
  interface CampaignStats {
    id: string;
    name: string;
    sent: number;
    opened: number;
    clicked: number;
    bounced: number;
    unsubscribed: number;
  }

  let campaignStats: CampaignStats[] = [];
  try {
    campaignStats = await getAnalyticsData(companyId);
  } catch (error) {
    console.error("Failed to fetch analytics data:", error);
    // Handle error display if needed
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>

      <div className="mt-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Campaign Performance</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Overview of email engagement metrics for your campaigns.
            </p>
          </div>

          <div className="border-t border-gray-200">
            {campaignStats.length === 0 ? (
              <div className="px-4 py-5 sm:px-6 text-center text-gray-500">
                No campaign data available yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Campaign
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sent
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Opened
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Clicked
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Bounced
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Unsubscribed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {campaignStats.map((campaign) => (
                      <tr key={campaign.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                          {campaign.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                          {campaign.sent}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                          {campaign.opened} 
                          {campaign.sent > 0 && 
                            <span className="text-xs text-gray-500"> ({Math.round((campaign.opened / campaign.sent) * 100)}%)</span>
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                          {campaign.clicked} 
                          {campaign.opened > 0 && 
                            <span className="text-xs text-gray-500"> ({Math.round((campaign.clicked / campaign.opened) * 100)}% CTR)</span>
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                          {campaign.bounced}
                          {campaign.sent > 0 && 
                            <span className="text-xs text-gray-500"> ({Math.round((campaign.bounced / campaign.sent) * 100)}%)</span>
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                          {campaign.unsubscribed}
                          {campaign.sent > 0 && 
                            <span className="text-xs text-gray-500"> ({Math.round((campaign.unsubscribed / campaign.sent) * 100)}%)</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Analytics Overview</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              This analytics dashboard provides a basic overview based on tracked email events.
              Actual event tracking (opens, clicks) requires integrating a tracking mechanism (e.g., pixel tracking) which is not implemented in this MVP.
              The data shown is based on counts from the `EmailEvent` table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

