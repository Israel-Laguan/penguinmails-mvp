import AnalyticsNavLinks from "@/components/analytics/AnalyticsNavLinks";
import AnalyticsStatistics from "@/components/analytics/analytics-statistics";
import CampaignPerformanceTable from "@/components/analytics/campaign/CampaignPerformanceTable";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CardContent } from "@mui/material";
function page() {
  return (
    <div className="space-y-10">
      <div className={"grid grid-cols-responsive gap-4"}>
        <AnalyticsStatistics
          totalSent={1000}
          openRate={75}
          replyRate={25}
          clickRate={50}
        />
      </div>
      <AnalyticsNavLinks />
      <Card>
        <CardHeader>
          <CardTitle>Mailbox Performance Breakdown</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <CampaignPerformanceTable />
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
