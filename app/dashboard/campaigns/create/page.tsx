"use client";

import { redirect, useRouter } from "next/navigation";
import { CampaignForm } from "@/components/campaigns/CampaignForm";
import { copyText as t } from "@/components/campaigns/copy";
import { CampaignFormValues } from "@/components/campaigns/types";
import { createCampaignMockAction } from "@/lib/actions/campaignActions";
import { defaultSteps } from "@/components/campaigns/const-mock";
import { toast } from "sonner";

const defaultValues: CampaignFormValues = {
  name: "",
  fromName: "",
  fromEmail: "",
  status: 'DRAFT',
  steps: defaultSteps,
  clients: [],
  timezone: 'UTC',
  sendTimeStart: '09:03',
  sendTimeEnd: '17:00',
  sendDays: [0, 1, 2, 3, 4]
};

export default function CampaignCreatePage() {
  const router = useRouter();

  const handleSubmit = async (data: CampaignFormValues) => {
    const result = await createCampaignMockAction(data);

    if (!result.success) {
      toast.error('Error in campaign creation', {
        description: 'An error has occurred while trying to create a campaign.',
      });
      return;
    }

    toast.success('Campaign created', {
      description: 'Has been inserted into your campaigns.',
    });

    redirect('/dashboard/campaigns');
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
        initialData={defaultValues}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}
