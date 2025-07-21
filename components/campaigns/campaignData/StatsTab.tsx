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

      <Card className="bg-white border border-gray-200 rounded-lg p-6">
        <CardHeader>
          <CardTitle className="font-medium text-gray-900 mb-4">
            Performance by Step
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sequenceSteps
            .filter((step) => step.type === "email")
            .map((step, index) => (
              <div
                key={step.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <h5 className="font-medium text-gray-900">
                    Email {index + 1}
                  </h5>
                  <p className="text-sm text-gray-600">{step.subject}</p>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <p className="font-medium text-gray-900">{step.sent}</p>
                    <p className="text-gray-500">Sent</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-blue-600">{step.openRate}</p>
                    <p className="text-gray-500">Opens</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-green-600">
                      {step.replyRate}
                    </p>
                    <p className="text-gray-500">Replies</p>
                  </div>
                </div>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
export default StatsTab;
