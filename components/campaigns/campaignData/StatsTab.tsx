import KpiCard from "@/components/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sequenceSteps } from "@/lib/data/campaigns";
import { Eye, Mail, TrendingUp } from "lucide-react";

function StatsTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Campaign Statistics
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Total Campaigns"
          value="12"
          icon={Mail}
          color="bg-blue-100 text-blue-600"
        />
        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Total Replies"
          value="73"
          icon={TrendingUp}
          color="text-purple-600 bg-purple-100"
        />

        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Open Rate"
          value="34.2%"
          icon={Eye}
          color="bg-green-100 text-green-600"
        />
      </div>

 
    </div>
  );
}
export default StatsTab;
