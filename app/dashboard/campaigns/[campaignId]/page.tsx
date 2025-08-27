import CampaignHeader from "@/components/campaigns/campaignData/CampaignHeader";
import CampiagnTabs from "@/components/campaigns/campaignData/CampaignTabs";
import LeadsTab from "@/components/campaigns/campaignData/LeadsTab";
import SequenceTab from "@/components/campaigns/campaignData/SequenceTab";
import StatsTab from "@/components/campaigns/campaignData/StatsTab";
import CampaignSKeleton from "@/components/campaigns/steps/CampaignSKeleton";
import { TabsContent } from "@/components/ui/tabs";
import { campaignsData } from "@/lib/data/campaigns";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function CampaignDetail({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const { campaignId } = await params;

  return (
    <Suspense fallback={<CampaignSKeleton />}>
      <CampaignContent campaignId={campaignId} />
    </Suspense>
  );
}

async function CampaignContent({ campaignId }: { campaignId: string }) {
  const campaign = campaignsData.find(
    (campaign) => campaign.id === parseInt(campaignId)
  );
  if (!campaign) {
    notFound();
  }
  return (
    <div className="space-y-6">
      <CampaignHeader backArrow={true} campaign={campaign}>
        <h1 className="text-xl font-semibold text-gray-900">{campaign.name}</h1>
      </CampaignHeader>
      <CampiagnTabs>
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <TabsContent value="sequence">
            <SequenceTab />
          </TabsContent>
          <TabsContent value="stats">
            <StatsTab />
          </TabsContent>
          <TabsContent value="leads">
            <LeadsTab />
          </TabsContent>
        </div>
      </CampiagnTabs>
    </div>
  );
}
