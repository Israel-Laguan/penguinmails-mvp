import AnalyticsNavLinks from "@/components/analytics/AnalyticsNavLinks";
import AnalyticsStatistics from "@/components/analytics/analytics-statistics";
import CampaignPerformanceTable from "@/components/analytics/campaign/CampaignPerformanceTable";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

function page() {
  return (
      <div className="space-y-10">
        <div className={"grid grid-cols-responsive  gap-4"}>
          <AnalyticsStatistics
              totalSent={1000}
              openRate={75}
              replyRate={25}
              clickRate={50}
          />
        </div>
        <AnalyticsNavLinks/>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Campaign Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <CampaignPerformanceTable/>
          </CardContent>

        </Card>

      </div>
  );
}

export default page;
