import { Campaign } from "@/lib/data/campaigns";
import CampaignsActions, { CampaignActionsEnum } from "../CampaignsActions";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import BackArrow from "@/components/BackArrow";

function CampaignHeader({
  children,
  campaign,
  backArrow = false,
}: {
  children: ReactNode;
  campaign: Campaign;
  backArrow?: boolean;
}) {
  const actions = ["EDIT"] as (keyof typeof CampaignActionsEnum)[];

  return (
    <div className="px-6 py-4 border-b border-gray-200 flex flex-col gap-4">
      {backArrow && (
        <div className="self-end">
          <BackArrow/>
        </div>
      )}
      <div className="flex items-center justify-between">
        {children}
        <div className="flex items-center space-x-4 mt-1">
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              campaign.status === "active"
                ? "bg-green-100 text-green-800"
                : campaign.status === "paused"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
            )}
          >
            {campaign.status}
          </span>
          <span className="text-sm text-gray-500">
            {campaign.leadsSent} leads sent
          </span>
          <span className="text-sm text-gray-500">
            {campaign.replies} replies
          </span>
          <span className="text-sm text-gray-500">
            Last sent {campaign.lastSent}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <CampaignsActions campaignId={campaign.id} actions={actions} />
        </div>
      </div>
    </div>
  );
}
export default CampaignHeader;
