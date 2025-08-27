"use client";
import KpiCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateData } from "@/lib/data/stats.mock";
import { ChartData, MetricToggle } from "@/types/campaign";
import {
  AlertTriangle,
  ChevronDown,
  Eye,
  EyeOff,
  Mail,
  MousePointer,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const date = new Date(data.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[140px]">
        <p className="font-medium text-gray-900 text-sm mb-2">
          {formattedDate}
        </p>
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-xs">Sent:</span>
            <span className="font-medium text-gray-700 text-xs">
              {data.sent}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 text-xs">Opened:</span>
            <span className="font-medium text-blue-700 text-xs">
              {data.opened}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-green-600 text-xs">Replied:</span>
            <span className="font-medium text-green-700 text-xs">
              {data.replied}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-600 text-xs">Clicked:</span>
            <span className="font-medium text-purple-700 text-xs">
              {data.clicked}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-red-600 text-xs">Bounced:</span>
            <span className="font-medium text-red-700 text-xs">
              {data.bounced}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

function StatsTab() {
  const [timeRange, setTimeRange] = useState<7 | 14 | 30>(14);
  const chartRef = useRef<HTMLDivElement>(null);

  const [metrics, setMetrics] = useState<MetricToggle[]>([
    { key: "sent", label: "Emails Sent", color: "#6B7280", visible: true },
    { key: "opened", label: "Opens", color: "#3B82F6", visible: true },
    { key: "replied", label: "Replies", color: "#10B981", visible: true },
    { key: "clicked", label: "Clicks", color: "#8B5CF6", visible: true },
    { key: "bounced", label: "Bounces", color: "#EF4444", visible: true },
  ]);

  const data = generateData(timeRange);

  const timeRangeOptions = [
    { value: 7, label: "Last 7 days" },
    { value: 14, label: "Last 14 days" },
    { value: 30, label: "Last 30 days" },
  ];

  const toggleMetric = (key: keyof ChartData) => {
    setMetrics((prev) =>
      prev.map((metric) =>
        metric.key === key ? { ...metric, visible: !metric.visible } : metric
      )
    );
  };

  // Calculate totals for percentage stats
  const totals = data.reduce(
    (acc, day) => ({
      sent: acc.sent + day.sent,
      opened: acc.opened + day.opened,
      replied: acc.replied + day.replied,
      clicked: acc.clicked + day.clicked,
      bounced: acc.bounced + day.bounced,
    }),
    { sent: 0, opened: 0, replied: 0, clicked: 0, bounced: 0 }
  );

  const openRate =
    totals.sent > 0 ? ((totals.opened / totals.sent) * 100).toFixed(1) : "0.0";
  const replyRate =
    totals.sent > 0 ? ((totals.replied / totals.sent) * 100).toFixed(1) : "0.0";
  const clickRate =
    totals.sent > 0 ? ((totals.clicked / totals.sent) * 100).toFixed(1) : "0.0";
  const bounceRate =
    totals.sent > 0 ? ((totals.bounced / totals.sent) * 100).toFixed(1) : "0.0";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Campaign Performance
      </h3>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Total Sent"
          value={totals.sent.toLocaleString()}
          icon={Mail}
          color="bg-gray-100 text-gray-600"
        />
        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Opens"
          value={`${totals.opened.toLocaleString()} (${openRate}%)`}
          icon={Eye}
          color="bg-blue-100 text-blue-600"
        />
        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Replies"
          value={`${totals.replied.toLocaleString()} (${replyRate}%)`}
          icon={TrendingUp}
          color="bg-green-100 text-green-600"
        />
        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Clicks"
          value={`${totals.clicked.toLocaleString()} (${clickRate}%)`}
          icon={MousePointer}
          color="bg-purple-100 text-purple-600"
        />
        <KpiCard
          className="flex-row-reverse justify-end gap-2"
          title="Bounces"
          value={`${totals.bounced.toLocaleString()} (${bounceRate}%)`}
          icon={AlertTriangle}
          color="bg-red-100 text-red-600"
        />
      </div>

      {/* Chart Container */}
      <Card ref={chartRef}>
        <CardContent className="p-6">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Performance Over Time
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Metric Toggle Buttons */}
              <div className="flex flex-wrap gap-2">
                {metrics.map((metric) => (
                  <Button
                    key={metric.key}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleMetric(metric.key)}
                    className={`flex items-center gap-1.5 h-8 ${
                      metric.visible
                        ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        : "border-gray-200 bg-gray-50 text-gray-400 hover:bg-gray-100"
                    }`}
                  >
                    {metric.visible ? <Eye size={12} /> : <EyeOff size={12} />}
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: metric.visible
                          ? metric.color
                          : "#D1D5DB",
                      }}
                    />
                    {metric.label}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                {/* Time Range Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      {
                        timeRangeOptions.find(
                          (option) => option.value === timeRange
                        )?.label
                      }
                      <ChevronDown size={14} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {timeRangeOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() =>
                          setTimeRange(option.value as 7 | 14 | 30)
                        }
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#F3F4F6"
                  vertical={false}
                />
                <XAxis
                  dataKey="formattedDate"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} />

                {metrics.map(
                  (metric) =>
                    metric.visible && (
                      <Line
                        key={metric.key}
                        type="monotone"
                        dataKey={metric.key}
                        stroke={metric.color}
                        strokeWidth={2}
                        dot={{ fill: metric.color, strokeWidth: 0, r: 3 }}
                        activeDot={{
                          r: 5,
                          stroke: metric.color,
                          strokeWidth: 2,
                          fill: "#fff",
                        }}
                      />
                    )
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Custom Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {metrics
              .filter((metric) => metric.visible)
              .map((metric) => (
                <div key={metric.key} className="flex items-center gap-2">
                  <div
                    className="w-3 h-0.5 rounded-full"
                    style={{ backgroundColor: metric.color }}
                  />
                  <span className="text-sm text-gray-600 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default StatsTab;
