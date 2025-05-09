"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CampaignForm } from "@/components/campaigns/CampaignForm";
import { copyText as t } from "@/components/campaigns/copy";
import { CampaignFormValues } from "@/components/campaigns/types";
import { createCampaignMockAction, getCampaignMockAction } from "@/lib/actions/campaignActions";
import { ParamValue } from "next/dist/server/request/params";

export default function CampaignCreatePage() {
  const router = useRouter();
  const { id } = useParams<{ id?: ParamValue }>();
  const [campaign, setCampaign] = useState<CampaignFormValues>();
  const [loading, setLoading] = useState<boolean>(true);

  const handleSubmit = async (data: CampaignFormValues) => {
    console.log("Form Submitted:", data);
    // TODO: Implement campaign creation
    await createCampaignMockAction(data);
  };

  const handleCancel = () => {
    router.back();
  };

  useEffect(() => {
    const fetchCampagingData = async () => {
      if (!id) return;
      if (loading) setLoading(true);

      const campaignId = (typeof id === 'string') ? Number(id) : 0;
      const campaign: CampaignFormValues = await getCampaignMockAction(campaignId);
      setCampaign(campaign);
      setLoading(false);
    };
    fetchCampagingData();

  }, [id]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{t.pageTitleEdition}</h1>
      </div>
      {loading && !campaign && 'Loading data...'}
      {
        !loading &&
        <CampaignForm
          initialData={campaign}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      }
    </div>
  );
}
