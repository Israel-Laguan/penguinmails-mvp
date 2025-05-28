import CampaignsContent from "./content";
import { getCampaignsStatisticsAction, getCampaignsDataAction } from "@/lib/actions/campaignActions";

const companyId = 1;
interface CampaignsPageProps {
  searchParams: Promise<{
    page?: string;
    pageSize?: string;
  }>;
}

export default async function CampaignsPage({ searchParams }: CampaignsPageProps) {
  const { page: pageParam, pageSize: pageSizeParam } = await searchParams;
  const page = parseInt(pageParam || '1', 10);
  const pageSize = parseInt(pageSizeParam || '10', 10);
  const currentPage = Math.max(1, page);
  const currentPageSize = Math.max(1, Math.min(pageSize, 100));

  const { summary } = await getCampaignsStatisticsAction(companyId);
  const { totalCampaigns, campaigns } = await getCampaignsDataAction({ companyId, page: currentPage, pageSize: currentPageSize });

  return <CampaignsContent campaignsData={{ campaigns, summary, totalCampaigns, page, pageSize }} />;
}
