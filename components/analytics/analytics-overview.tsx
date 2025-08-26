"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import AnalyticsStatistics from "./analytics-statistics";

function AnalyticsOverview() {
  const { totalSent, openRate, replyRate, clickRate } = useAnalytics();

  return (
    <div className="grid grid-cols-responsive gap-4">
      <AnalyticsStatistics
        totalSent={totalSent}
        openRate={openRate}
        replyRate={replyRate}
        clickRate={clickRate}
      />
    </div>
  );
}
export default AnalyticsOverview;
