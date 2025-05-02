import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";
import KpiCard from "@/components/KpiCard";
import CampaignPerformanceChart from "@/components/CampaignPerformanceChart";
import EmailStatusPieChart from "@/components/EmailStatusPieChart";
import RecentCampaignsList from "@/components/RecentCampaignsList";
import UpcomingTasksList from "@/components/UpcomingTasksList";
import { getDashboardMockDataAction } from "@/lib/actions/dashboardActions"; // Import the new server action
import { signOut } from "next-auth/react";

export default async function DashboardPage() {
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
  const dashboardData = await getDashboardMockDataAction(companyId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      
      {/* KPI Cards Grid - Pass data from fetched action */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <KpiCard 
          title="Open Rate" 
          value={dashboardData.kpi.openRate.value} 
          change={dashboardData.kpi.openRate.change} 
          changeType={dashboardData.kpi.openRate.changeType}
        />
        <KpiCard 
          title="Click Rate" 
          value={dashboardData.kpi.clickRate.value} 
          change={dashboardData.kpi.clickRate.change} 
          changeType={dashboardData.kpi.clickRate.changeType}
        />
        <KpiCard 
          title="Reply Rate" 
          value={dashboardData.kpi.replyRate.value} 
          change={dashboardData.kpi.replyRate.change} 
          changeType={dashboardData.kpi.replyRate.changeType}
        />
        <KpiCard 
          title="Bounce Rate" 
          value={dashboardData.kpi.bounceRate.value} 
          change={dashboardData.kpi.bounceRate.change} 
          changeType={dashboardData.kpi.bounceRate.changeType}
        />
      </div>

      {/* Dashboard Components Grid - Pass data from fetched action */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign Performance Chart (Col Span 2) */}
        <div className="lg:col-span-2">
          <CampaignPerformanceChart data={dashboardData.campaignPerformance} />
        </div>
        
        {/* Email Status Chart */}
        <div>
          <EmailStatusPieChart data={dashboardData.emailStatus} />
        </div>
        
        {/* Recent Campaigns List (Col Span 2) */}
        <div className="lg:col-span-2">
          <RecentCampaignsList campaigns={dashboardData.recentCampaigns} />
        </div>
        
        {/* Upcoming Tasks List */}
        <div>
          <UpcomingTasksList tasks={dashboardData.upcomingTasks} />
        </div>
      </div>

    </div>
  );
}
