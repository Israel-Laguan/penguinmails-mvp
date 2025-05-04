'use client';

import { CampaignStats } from "./types";
import { Header } from "./Header";
import { CampaignPerformance } from "./CampaignPerformance";
import { AnalyticsOverview } from "./AnalyticsOverview";

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
