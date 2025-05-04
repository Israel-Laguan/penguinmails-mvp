'use client';

import { CampaignStats } from "@/components/analytics/types";
import { Header } from "@/components/analytics/Header";
import { CampaignPerformance } from "@/components/analytics/CampaignPerformance";
import { AnalyticsOverview } from "@/components/analytics/AnalyticsOverview";

interface AnalyticsContentProps {
  campaignStats: CampaignStats[];
}

export default function AnalyticsContent({ campaignStats }: AnalyticsContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <CampaignPerformance campaignStats={campaignStats} />
      <AnalyticsOverview />
    </div>
  );
}
