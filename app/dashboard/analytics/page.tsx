import AnalyticChartsLegend from "@/components/analytics/AnalyticChartsLegend";
import AnalyticsOverview from "@/components/analytics/analytics-overview";
import AnalyticsNavLinks from "@/components/analytics/AnalyticsNavLinks";
import OverviewBarChat from "@/components/analytics/OverviewBarChat";
import OverviewLineChart from "@/components/analytics/OverviewLineChart";
import PerformanceFilter from "@/components/analytics/PerformanceFilter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnalyticsProvider } from "@/context/AnalyticsContext";

function AnalyticsPage() {
  return (
    <AnalyticsProvider>
      <div className="space-y-10">
        <AnalyticsOverview />
        <AnalyticsNavLinks />
        {/* Bar Chart  */}
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Performance Overview - Bar Chart</CardTitle>
            <PerformanceFilter />
          </CardHeader>
          <CardContent className="overflow-auto">
            <OverviewBarChat />
          </CardContent>
          <CardFooter className="flex items-center justify-center space-x-8 ">
            <AnalyticChartsLegend />
          </CardFooter>
        </Card>
        {/* line Chart  */}
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Performance Overview - Line Chart</CardTitle>
            <CardDescription>
              Same data, different visualization
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-auto">
            <OverviewLineChart />
          </CardContent>
          <CardFooter className="flex items-center justify-center space-x-8 ">
            <AnalyticChartsLegend />
          </CardFooter>
        </Card>
      </div>
    </AnalyticsProvider>
  );
}
export default AnalyticsPage;
