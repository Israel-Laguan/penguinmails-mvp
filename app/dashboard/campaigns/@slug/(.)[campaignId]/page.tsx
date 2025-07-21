import CampaignHeader from "@/components/campaigns/campaignData/CampaignHeader";
import CampiagnTabs from "@/components/campaigns/campaignData/CampiagnTabs";
import LeadsTab from "@/components/campaigns/campaignData/LeadsTab";
import SequenceTab from "@/components/campaigns/campaignData/SequenceTab";
import StatsTab from "@/components/campaigns/campaignData/StatsTab";
import CampaignSKeleton from "@/components/campaigns/steps/CampaignSKeleton";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TabsContent } from "@/components/ui/tabs";
import {
  DialogContextProvider,
  DialogContextProviderContent,
} from "@/context/DialogContext";
import { campaignsData } from "@/lib/data/campaigns";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function CampaignDetail({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const { campaignId } = await params;

  return (
    <DialogContextProvider openDefault={true} forceOpen={true}>
      {/* <AddCampaignProvider initialValues={campaign }> */}
      <DialogContextProviderContent back={true} className="h-fit max-h-11/12">
        <Suspense
          fallback={
            <div className="overflow-hidden">
              <DialogHeader>
                <DialogTitle />
              </DialogHeader>
              <CampaignSKeleton />
            </div>
          }
        >
          <CampaignContent campaignId={campaignId} />
        </Suspense>
      </DialogContextProviderContent>
    </DialogContextProvider>
  );
}

async function CampaignContent({ campaignId }: { campaignId: string }) {
  const campaign = campaignsData.find(
    (campaign) => campaign.id === parseInt(campaignId)
  );
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate data fetching delay
  if (!campaign) {
    notFound();
  }
  return (
    <>
      <CampaignHeader campaign={campaign}>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            {campaign.name}
          </DialogTitle>
        </DialogHeader>
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
    </>
  );
}
