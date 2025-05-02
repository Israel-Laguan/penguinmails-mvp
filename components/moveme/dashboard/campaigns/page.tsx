import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";
import SummaryCard from "@/components/SummaryCard";
import CampaignsTable from "@/components/CampaignsTable";
import { getCampaignsDataAction } from "@/lib/actions"; // Import the server action
import { Button } from "@/components/ui/button"; // Import the new Button component
import Link from 'next/link'
import { signOut } from "next-auth/react";

export default async function CampaignsPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    // This should ideally be handled by middleware or a higher-level component
    return <div>Unauthorized</div>;
  }

  const companyId = session.user.companyId;
    if (!companyId) {
      // You might want to import signOut from next-auth/react if not already imported
      await signOut({ callbackUrl: '/auth/signin' });
      return null;
    }
  // Fetch data using the server action
  const campaignsData = await getCampaignsDataAction(companyId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Campaigns</h1>
        {/* Use the new Button component */}
        <Button asChild={true}>
          <Link href="/dashboard/campaigns/create">
            New Campaign
          </Link>
        </Button>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <SummaryCard title="Total Campaigns" value={campaignsData.summary.totalCampaigns} />
        <SummaryCard title="Active Campaigns" value={campaignsData.summary.activeCampaigns} />
        <SummaryCard title="Emails Sent" value={campaignsData.summary.emailsSent.toLocaleString()} />
        <SummaryCard title="Total Replies" value={campaignsData.summary.totalReplies} />
      </div>

      {/* Campaigns Table */}
      <CampaignsTable campaigns={campaignsData.campaigns} />
    </div>
  );
}
