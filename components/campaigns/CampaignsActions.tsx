"use client";
import { campaignsData } from "@/lib/data/campaigns";
import { Copy, Edit, Eye, Pause, Play } from "lucide-react";
import Link from "next/link";
import AlertDialogDelete from "../AlertDialogDelete";
import { Button } from "../ui/button";
export enum CampaignActionsEnum {
  VIEW = "view",
  EDIT = "edit",
  DELETE = "delete",
  PAUSE = "pause",
  RESUME = "resume",
  COPY = "copy",
}
function CampaignsActions({
  campaignId,
  actions = ["VIEW", "EDIT", "PAUSE", "COPY", "DELETE"],
}: {
  campaignId: number;
  actions?: (keyof typeof CampaignActionsEnum)[];
}) {
  const campaign = campaignsData.find((c) => c.id === campaignId);
  if (!campaign) return null;
  const actionComponents = {
    VIEW: <ViewAction campaignId={campaign.id} />,
    EDIT: <EditAction campaignId={campaign.id} />,
    DELETE: <DeleteAction campaignId={campaign.id} />,
    PAUSE: <PauseAction campaignId={campaign.id} />,
    RESUME: <ResumeAction campaignId={campaign.id} />,
    COPY: <CopyAction campaignId={campaign.id} />,
  };
  return (
    <div className="flex items-center space-x-3 space-x-reverse">
      {actions.map((action, index) => (
        <span key={`${action}-${index}`}>{actionComponents[action]}</span>
      ))}
    </div>
  );
}

function ViewAction({ campaignId }: { campaignId: number }) {
  return (
    <Button variant="ghost" size="icon" title="View Campaign" asChild>
      <Link
        href={`/dashboard/campaigns/${campaignId}`}
        className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors inline-flex items-center justify-center"
      >
        <Eye className="w-4 h-4" />
      </Link>
    </Button>
  );
}
function EditAction({ campaignId }: { campaignId: number }) {
  return (
    <Button variant="ghost" size="icon" title="Edit Campaign" asChild>
      <Link
        href={`/dashboard/campaigns/${campaignId}/edit`}
        className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors inline-flex items-center justify-center"
      >
        <Edit className="w-4 h-4" />
      </Link>
    </Button>
  );
}
function DeleteAction({ campaignId }: { campaignId: number }) {
  return (
    <AlertDialogDelete
      title="Delete Campaign"
      description="Are you sure you want to delete this campaign? This action cannot be undone."
      onDelete={async () => {
        console.log(`Deleting campaign with ID: ${campaignId}`);
      }}
    />
  );
}
function PauseAction({ campaignId }: { campaignId: number }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="p-2 text-gray-400 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
      title="Pause Campaign"
    >
      <Pause className="w-4 h-4" />
    </Button>
  );
}
function ResumeAction({ campaignId }: { campaignId: number }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors"
      title="Resume Campaign"
    >
      <Play className="w-4 h-4" />
    </Button>
  );
}
function CopyAction({ campaignId }: { campaignId: number }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
      title="Copy Campaign"
    >
      <Copy className="w-4 h-4" />
    </Button>
  );
}
export default CampaignsActions;
