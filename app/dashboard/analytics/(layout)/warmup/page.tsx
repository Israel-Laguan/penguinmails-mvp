import AnalyticsNavLinks from "@/components/analytics/AnalyticsNavLinks";
import EmailMailboxesTable from "@/components/analytics/warmup/email-mailboxes-table";
import WarmupAnalyticsFilter from "@/components/analytics/warmup/warmup-analytics-filter";
import WarmUpLineChart from "@/components/analytics/warmup/warmup-line-chart";
function page() {
  return (
    <div className="space-y-10">
      <AnalyticsNavLinks />
      <WarmupAnalyticsFilter />
      <WarmUpLineChart />
      <EmailMailboxesTable />
    </div>
  );
}
export default page;
