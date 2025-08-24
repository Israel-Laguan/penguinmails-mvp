"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import { metrics } from "@/lib/data/analytics.mock";

function AnalyticChartsLegend() {
  const { visibleMetrics } = useAnalytics();
  return metrics
    .filter((m) => visibleMetrics[m.key])
    .map((metric) => {
      const Icon = metric.icon;
      return (
        <div key={metric.key} className="flex items-center space-x-2">
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: metric.color }}
          />
          <Icon className="w-4 h-4" style={{ color: metric.color }} />
          <span className="text-sm text-gray-600">{metric.label}</span>
        </div>
      );
    });
}
export default AnalyticChartsLegend;
