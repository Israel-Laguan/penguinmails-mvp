import SummaryCard from "@/components/SummaryCard";
import CampaignsTable from "@/components/campaigns/CampaignsTable";
import CampaignsHeader from "@/components/campaigns/CampaignsHeader";
import { copyText as t } from "@/components/campaigns/copy";

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
      <CampaignsHeader />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <SummaryCard title={t.summary.totalCampaigns} value={campaignsData.summary.totalCampaigns} />
        <SummaryCard title={t.summary.activeCampaigns} value={campaignsData.summary.activeCampaigns} />
        <SummaryCard title={t.summary.emailsSent} value={campaignsData.summary.emailsSent.toLocaleString()} />
        <SummaryCard title={t.summary.totalReplies} value={campaignsData.summary.totalReplies} />
      </div>

      <CampaignsTable campaigns={campaignsData.campaigns} />
    </div>
  );
}
