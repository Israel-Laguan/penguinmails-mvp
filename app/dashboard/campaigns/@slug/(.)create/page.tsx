import AddCampaignForm from "@/components/campaigns/steps/AddCampaignForm";
import AddCampaignHeader from "@/components/campaigns/steps/AddCampaignHeader";
import AddCampaignSteps from "@/components/campaigns/steps/AddCampaignSteps";
import NavigationButtons from "@/components/campaigns/steps/NavigationButtons";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { AddCampaignProvider } from "@/context/AddCampaignContext";
import {
  DialogContextProvider,
  DialogContextProviderContent,
} from "@/context/DialogContext";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function CampaignCreatePage() {
  return (
    <DialogContextProvider openDefault={true} forceOpen={true}>
      <AddCampaignProvider>
        <DialogContextProviderContent back={true}>
          <DialogHeader>
            <AddCampaignHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Create New Campaign
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
        </DialogContextProviderContent>
      </AddCampaignProvider>
    </DialogContextProvider>
  );
}
