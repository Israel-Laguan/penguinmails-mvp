import AddCampaignForm from "@/components/campaigns/steps/AddCampaignForm";
import AddCampaignHeader from "@/components/campaigns/steps/AddCampaignHeader";
import AddCampaignSteps from "@/components/campaigns/steps/AddCampaignSteps";
import CampaignSKeleton from "@/components/campaigns/steps/CampaignSKeleton";
import NavigationButtons from "@/components/campaigns/steps/NavigationButtons";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { AddCampaignProvider } from "@/context/AddCampaignContext";
import {
  DialogContextProvider,
  DialogContextProviderContent,
} from "@/context/DialogContext";
import { getCampaignAction } from "@/lib/actions/campaignActions";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Suspense } from "react";

export default async function CampaignCreatePage({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const { campaignId } = await params;

  return (
    <DialogContextProvider openDefault={true} forceOpen={true}>
      {/* <AddCampaignProvider initialValues={campaign }> */}
      <AddCampaignProvider>
        <DialogContextProviderContent back={true}>
          <Suspense fallback={<CampaignSKeleton />}>
            <CampaignCreatePageContent campaignId={campaignId} />
          </Suspense>
        </DialogContextProviderContent>
      </AddCampaignProvider>
    </DialogContextProvider>
  );
}

async function CampaignCreatePageContent({
  campaignId,
}: {
  campaignId: string;
}) {
  const campaign = await getCampaignAction(Number(campaignId));

  return (
    <>
      <DialogHeader>
        <AddCampaignHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Edit Campaign {campaign.name}
          </DialogTitle>
        </AddCampaignHeader>
      </DialogHeader>

      <div className="overflow-y-auto space-y-8 p-6">
        <AddCampaignSteps />
        <AddCampaignForm />
      </div>
      <DialogFooter>
        <NavigationButtons />
      </DialogFooter>
    </>
  );
}
