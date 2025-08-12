import AnalyticsNavLinks from "@/components/analytics/AnalyticsNavLinks";
import AnalyticsStatistics from "@/components/analytics/analytics-statistics";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {CardContent} from "@mui/material";
import {Mail} from "lucide-react";
import {Separator} from "@/components/ui/separator";
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
        <AnalyticsNavLinks/>
        <Card>
          <CardHeader>
            <CardTitle>
              Mailbox Performance Breakdown
            </CardTitle>
          </CardHeader>
          <Separator/>
          <CardContent>
            <div className={"flex flex-col justify-center items-center min-h-[300px]"}>
              <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4"/>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Mailbox Analytics</h4>
              <p className="text-gray-600">Individual mailbox performance metrics will be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}

export default page;
