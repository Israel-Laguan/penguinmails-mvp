"use client";

import { useRouter } from "next/navigation";
import { CampaignForm } from "@/components/campaigns/CampaignForm";
import { copyText as t } from "@/components/campaigns/copy";
import { CampaignFormValues } from "@/components/campaigns/types";
import { createCampaignMockAction } from "@/lib/actions/campaignActions";

export default function CampaignCreatePage() {
  const router = useRouter();

  const handleSubmit = async (data: CampaignFormValues) => {
    console.log("Form Submitted:", data);
    // TODO: Implement campaign creation
    await createCampaignMockAction(data);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{t.pageTitle}</h1>
      </div>
      <CampaignForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}
