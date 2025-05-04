import { EmailEventType } from "@/app/api/generated/prisma";
import { copyText as t } from "./copy";
import { CampaignStats } from "./types";

interface CampaignPerformanceProps {
  campaignStats: CampaignStats[];
}

export function CampaignPerformance({
  campaignStats,
}: CampaignPerformanceProps) {
  return (
    <div className="mt-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {t.campaignPerformance.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {t.campaignPerformance.description}
          </p>
        </div>

        <div className="border-t border-gray-200">
          {campaignStats.length === 0 ? (
            <div className="px-4 py-5 sm:px-6 text-center text-gray-500">
              {t.campaignPerformance.noData}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.tableHeaders.campaign}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.tableHeaders.sent}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.tableHeaders.opened}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.tableHeaders.clicked}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.tableHeaders.bounced}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.tableHeaders.unsubscribed}
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
                        {campaign.stats[EmailEventType.SENT]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {campaign.stats[EmailEventType.OPENED]}
                        &nbsp;
                        {Number(campaign.stats?.[EmailEventType.SENT]) > 0 && (
                          <span className="text-xs text-gray-500">
                            (
                            {Math.round(
                              ((campaign.stats[EmailEventType.OPENED] || 0) /
                                campaign.stats[EmailEventType.SENT]!) *
                                100
                            )}
                            %)
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {campaign.stats[EmailEventType.CLICKED]}
                        &nbsp;
                        {Number(campaign.stats?.[EmailEventType.OPENED]) >
                          0 && (
                          <span className="text-xs text-gray-500">
                            (
                            {Math.round(
                              ((campaign.stats[EmailEventType.CLICKED] || 0) /
                                campaign.stats[EmailEventType.OPENED]!) *
                                100
                            )}
                            % {t.metrics.ctr})
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {campaign.stats[EmailEventType.BOUNCED]}
                        &nbsp;
                        {Number(campaign.stats?.[EmailEventType.SENT]) > 0 && (
                          <span className="text-xs text-gray-500">
                            (
                            {Math.round(
                              ((campaign.stats[EmailEventType.BOUNCED] || 0) /
                                campaign.stats[EmailEventType.SENT]!) *
                                100
                            )}
                            %)
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {campaign.stats[EmailEventType.UNSUBSCRIBED]}
                        &nbsp;
                        {Number(campaign.stats?.[EmailEventType.SENT]) > 0 && (
                          <span className="text-xs text-gray-500">
                            (
                            {Math.round(
                              ((campaign.stats[EmailEventType.UNSUBSCRIBED] ||
                                0) /
                                campaign.stats[EmailEventType.SENT]!) *
                                100
                            )}
                            %)
                          </span>
                        )}
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
  );
}
