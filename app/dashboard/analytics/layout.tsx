import AnalyticsHeaderActions from "@/components/analytics/AnalyticsHeaderActions";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Hub</h1>
          <p className="text-gray-600 mt-1">
            Comprehensive performance insights and campaign analytics
          </p>
        </div>
        <div>
          <AnalyticsHeaderActions />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
export default Layout;
