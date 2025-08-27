"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useAnalytics } from "@/context/AnalyticsContext";
import { metrics } from "@/lib/data/analytics.mock";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function OverviewLineChart() {
  const { chartData, visibleMetrics } = useAnalytics();

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-muted-foreground">
        No data available
      </div>
    );
  }

  // Create chart config for shadcn charts
  const chartConfig = metrics.reduce((config, metric) => {
    config[metric.key] = {
      label: metric.label,
      color: metric.color,
    };
    return config;
  }, {} as Record<string, { label: string; color: string }>);

  const visibleMetricKeys = metrics
    .filter((m) => visibleMetrics[m.key])
    .map((m) => m.key);

  return (
    <div className="h-80">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={true}
              horizontal={true}
            />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              tickLine={{ stroke: "hsl(var(--border))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              interval="preserveStartEnd"
              minTickGap={50}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              tickLine={{ stroke: "hsl(var(--border))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => [
                    Number(value).toLocaleString(),
                    chartConfig[name as string]?.label || name,
                  ]}
                  labelFormatter={(label) => `Date: ${label}`}
                />
              }
            />
            {visibleMetricKeys.map((metricKey) => (
              <Line
                key={metricKey}
                type="monotone"
                dataKey={metricKey}
                stroke={chartConfig[metricKey].color}
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: chartConfig[metricKey].color,
                  strokeWidth: 0,
                }}
                activeDot={{
                  r: 6,
                  fill: chartConfig[metricKey].color,
                  strokeWidth: 2,
                  stroke: "hsl(var(--background))",
                }}
                connectNulls={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

export default OverviewLineChart;
