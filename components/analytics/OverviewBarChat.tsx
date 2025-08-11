"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import { metrics } from "@/lib/data/analytics.mock";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function OverviewBarChat() {
  const { visibleMetrics, chartData } = useAnalytics();
  return (
    <>
      <div className="h-96 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis
              dataKey="label"
              className="text-xs text-muted-foreground"
              angle={-45}
              textAnchor="end"
              height={60}
              interval={0}
            />
            <YAxis className="text-xs text-muted-foreground" />
            <Tooltip />
            {metrics
              .filter((m) => visibleMetrics[m.key])
              .map((metric) => (
                <Bar
                  key={metric.key}
                  dataKey={metric.key}
                  name={metric.label}
                  fill={metric.color}
                  stackId="stack"
                  className="hover:opacity-80 transition-opacity"
                />
              ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    
    </>
  );
}

export default OverviewBarChat;
