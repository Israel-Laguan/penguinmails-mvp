import TableSkeleton from "@/components/TableSkeleton";
import CampaignsFilter from "@/components/campaigns/CampaignsFilter";
import CampaignsTable, {
  campaignColumns,
} from "@/components/campaigns/CampaignsTable";
import StatsCardSkeleton from "@/components/dashboard/StatsCardSkeleton";
import StatsCards from "@/components/dashboard/campaigns/StatsCards";
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
          <Link href="campaigns/create">
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
          <TableSkeleton title="Campaigns Table" columns={campaignColumns} />
        }
      >
        <CampaignsTable />
      </Suspense>
    </div>
  );
}
