import SummaryCard from "@/components/SummaryCard";
import CampaignsHeader from "@/components/campaigns/CampaignsHeader";
import { CampaignsDataTable } from "@/components/campaigns/CampaignsDataTable";
import { copyText as t } from "@/components/campaigns/copy";
import { type CampaignResponse } from "@/types/campaign";

type CampaignsContentProps = {
  campaignsData: {
    totalCampaigns: number;
    page: number;
    pageSize: number;
    summary: {
      totalCampaigns: number;
      activeCampaigns: number;
      emailsSent: number;
      totalReplies: number;
    };
    campaigns: CampaignResponse[];
  };
};

export default function CampaignsContent({ campaignsData }: CampaignsContentProps) {
  const { summary, campaigns, page, pageSize, totalCampaigns } = campaignsData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <CampaignsHeader />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <SummaryCard title={t.summary.totalCampaigns} value={summary.totalCampaigns} />
        <SummaryCard title={t.summary.activeCampaigns} value={summary.activeCampaigns} />
        <SummaryCard title={t.summary.emailsSent} value={summary.emailsSent.toLocaleString()} />
        <SummaryCard title={t.summary.totalReplies} value={summary.totalReplies} />
      </div>

      <div className="rounded-md border bg-white">
        <CampaignsDataTable data={campaigns} page={page} pageSize={pageSize} totalCount={totalCampaigns} />
      </div>
    </div>
  );
}
