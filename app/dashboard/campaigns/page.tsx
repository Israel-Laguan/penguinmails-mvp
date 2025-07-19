import TableSkeleton from "@/components/TableSkeleton";
import CampaignsFilter from "@/components/campaigns/CampaignsFilter";
import CampaignsTable, {
  campaigncolums,
} from "@/components/campaigns/CampaignsTable";
import StatsCardSkeleton from "@/components/dashboard/StatsCardSkeleton";
import StatsCards from "@/components/dashboard/compaigns/StatsCards";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const companyId = 1;
interface CampaignsPageProps {
  searchParams: Promise<{
    page?: string;
    pageSize?: string;
  }>;
}

export default async function CampaignsPage({
  searchParams,
}: CampaignsPageProps) {
  // const { page: pageParam, pageSize: pageSizeParam } = await searchParams;
  // const page = parseInt(pageParam || "1", 10);
  // const pageSize = parseInt(pageSizeParam || "10", 10);
  // const currentPage = Math.max(1, page);
  // const currentPageSize = Math.max(1, Math.min(pageSize, 100));
  //
  // const { summary } = await getCampaignsStatisticsAction(companyId);
  // const { totalCampaigns, campaigns } = await getCampaignsDataAction({
  //   companyId,
  //   page: currentPage,
  //   pageSize: currentPageSize,
  // });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-600 mt-1">
            Manage your email outreach campaigns like a pro
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/campaigns/create">
            <Plus className="w-5 h-5" />
            <span className="font-semibold">New Campaign</span>
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <Suspense
          fallback={Array.from({ length: 5 }).map((_, index) => (
            <StatsCardSkeleton
              key={index}
              className="flex-row-reverse justify-end gap-2 "
            />
          ))}
        >
          <StatsCards />
        </Suspense>
      </div>
      <CampaignsFilter />

      <Suspense
        fallback={
          <TableSkeleton title="Campaigns Table" columns={campaigncolums} />
        }
      >
        <CampaignsTable />
      </Suspense>
    </div>
  );
}
