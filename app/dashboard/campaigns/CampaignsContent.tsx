import SummaryCard from "@/components/SummaryCard";
import CampaignsTable from "@/components/CampaignsTable";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

type CampaignsContentProps = {
  campaignsData: {
    summary: {
      totalCampaigns: number;
      activeCampaigns: number;
      emailsSent: number;
      totalReplies: number;
    };
    campaigns: any[];
  };
};

export default function CampaignsContent({ campaignsData }: CampaignsContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Campaigns</h1>
        <Button asChild={true}>
          <Link href="/dashboard/campaigns/create">
            New Campaign
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <SummaryCard title="Total Campaigns" value={campaignsData.summary.totalCampaigns} />
        <SummaryCard title="Active Campaigns" value={campaignsData.summary.activeCampaigns} />
        <SummaryCard title="Emails Sent" value={campaignsData.summary.emailsSent.toLocaleString()} />
        <SummaryCard title="Total Replies" value={campaignsData.summary.totalReplies} />
      </div>

      <CampaignsTable campaigns={campaignsData.campaigns} />
    </div>
  );
}
