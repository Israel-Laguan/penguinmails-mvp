import AddCampaignForm from "@/components/campaigns/steps/AddCampaignForm";
import AddCampaignHeader from "@/components/campaigns/steps/AddCampaignHeader";
import AddCampaignSteps from "@/components/campaigns/steps/AddCampaignSteps";
import NavigationButtons from "@/components/campaigns/steps/NavigationButtons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AddCampaignProvider } from "@/context/AddCampaignContext";
import { campaignsData } from "@/lib/data/campaigns";
import { notFound } from "next/navigation";

export default async function CampaignCreatePage({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  const { campaignId } = await params;
  const campaign = campaignsData.find((c) => c.id === Number(campaignId));
  if (!campaign) {
    notFound();
  }
  return (
    <AddCampaignProvider initialValues={campaign}>
      <Card className="border-none shadow-none">
        <CardHeader>
          <AddCampaignHeader>
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Campaign {campaign.name || "New Campaign"}
            </h1>
          </AddCampaignHeader>
        </CardHeader>
        <CardContent className="space-y-8 ">
          <AddCampaignSteps />
          <AddCampaignForm />
        </CardContent>
        <CardFooter>
          <NavigationButtons />
        </CardFooter>
      </Card>
    </AddCampaignProvider>
  );
}
