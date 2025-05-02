'use client';

import KpiCard from "@/components/KpiCard";
import CampaignPerformanceChart from "@/components/CampaignPerformanceChart";
import EmailStatusPieChart from "@/components/EmailStatusPieChart";
import RecentCampaignsList from "@/components/RecentCampaignsList";
import UpcomingTasksList from "@/components/UpcomingTasksList";

interface DashboardContentProps {
  dashboardData: any; // You should define a proper type for this
}

export default function DashboardContent({ dashboardData }: DashboardContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CampaignPerformanceChart data={dashboardData.campaignPerformance} />
        </div>
        
        <div>
          <EmailStatusPieChart data={dashboardData.emailStatus} />
        </div>
        
        <div className="lg:col-span-2">
          <RecentCampaignsList campaigns={dashboardData.recentCampaigns} />
        </div>
        
        <div>
          <UpcomingTasksList tasks={dashboardData.upcomingTasks} />
        </div>
      </div>
    </div>
  );
}
