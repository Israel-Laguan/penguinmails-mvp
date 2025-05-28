import CampaignsContent from "./content";
import { getCampaignsStatisticsAction, getCampaignsDataAction } from "@/lib/actions/campaignActions";

const companyId = 1;

export default async function CampaignsPage() {
  const { summary } = await getCampaignsStatisticsAction(companyId);
  const campaigns = await getCampaignsDataAction(companyId);

  return <CampaignsContent campaignsData={{ campaigns, summary }} />;
}
