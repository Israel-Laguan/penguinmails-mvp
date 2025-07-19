"use client";
import AddCampaignForm from "@/components/campaigns/steps/AddCampaignForm";
import AddCampaignHeader from "@/components/campaigns/steps/AddCampaignHeader";
import AddCampaignSteps from "@/components/campaigns/steps/AddCampaignSteps";
import { AddCampaignProvider } from "@/context/AddCampaignContext";

export default function CampaignCreatePage() {
  return (
    <AddCampaignProvider>
      <div className="space-y-6">
        <AddCampaignHeader />
        <AddCampaignSteps />
        <AddCampaignForm />
      </div>
    </AddCampaignProvider>
  );
}
