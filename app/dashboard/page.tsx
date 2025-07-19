// import { getServerSession } from "next-auth/next";
// import { config as authOptions } from "@/lib/auth";
// import { signOut } from "next-auth/react";
import KpiCardSkeleton from "@/components/dashboard/StatsCardSkeleton";
import KpiCards from "@/components/dashboard/KpiCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentRepliesList from "@/components/dashboard/RecentReply/RecentReplyList";
import RecentReplySkeleton from "@/components/dashboard/RecentReply/RecentReplySkeleton";
import WarmupSummary from "@/components/dashboard/WarmupSummary";
import WarmupSummarySkeleton from "@/components/dashboard/WarmupSummarySkeleton";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Suspense} from "react";

export default async function DashboardPage() {
  // const session = await getServerSession(authOptions);
  // if (!session || !session.user) {
  //   return <div>Unauthorized</div>;
  // }

  // const companyId = session.user.companyId;
  // if (!companyId) {
  //   await signOut({ callbackUrl: '/auth/signin' });
  //   return null;
  // }

  // const dashboardData = await getDashboardMockDataAction("companyId");

  // return <DashboardContent dashboardData={dashboardData} />;
  return (
    <div className=" mx-auto  space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back! Here&quote;s what&quote;s happening with your campaigns.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({length: 4}).map((_, index) => (
              <KpiCardSkeleton key={index}/>
            ))}
          </div>
        }
      >
        <KpiCards/>
      </Suspense>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-white rounded-xl shadow-sm border border-gray-200 p-0 gap-0">
            <CardHeader className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Replies
              </h2>
            </CardHeader>
            <CardContent className="divide-y divide-gray-200 p-0">
              <Suspense
                fallback={
                  <div className="space-y-0">
                    {Array.from({length: 5}).map((_, index) => (
                      <RecentReplySkeleton key={index}/>
                    ))}
                  </div>
                }
              >
                <RecentRepliesList/>
              </Suspense>
            </CardContent>
          </Card>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Warmup Summary */}
          <Suspense fallback={<WarmupSummarySkeleton/>}>
            <WarmupSummary/>
          </Suspense>

          {/* Quick Actions */}
          <QuickActions/>
        </div>
      </div>
    </div>
  );
}
