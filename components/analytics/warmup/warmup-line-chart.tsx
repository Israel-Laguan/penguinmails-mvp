"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertTriangle,
  HelpCircle,
  Mail,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartData {
  date: string;
  totalWarmups: number;
  spamFlags: number;
  replies: number;
}

interface MetricToggle {
  totalWarmups: boolean;
  spamFlags: boolean;
  replies: boolean;
}

function WarmUpLineChart() {
  const [activeMetrics, setActiveMetrics] = useState<MetricToggle>({
    totalWarmups: true,
    spamFlags: true,
    replies: true,
  });

  // Mock data for the chart
  const chartData: ChartData[] = [
    { date: "Aug 5", totalWarmups: 245, spamFlags: 3, replies: 12 },
    { date: "Aug 6", totalWarmups: 267, spamFlags: 2, replies: 18 },
    { date: "Aug 7", totalWarmups: 289, spamFlags: 5, replies: 15 },
    { date: "Aug 8", totalWarmups: 312, spamFlags: 1, replies: 22 },
    { date: "Aug 9", totalWarmups: 298, spamFlags: 4, replies: 19 },
    { date: "Aug 10", totalWarmups: 334, spamFlags: 2, replies: 25 },
    { date: "Aug 11", totalWarmups: 356, spamFlags: 3, replies: 28 },
  ];

  const toggleMetric = (metric: keyof MetricToggle) => {
    setActiveMetrics((prev) => ({
      ...prev,
      [metric]: !prev[metric],
    }));
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              <span className="font-semibold">{entry.value}</span>
              <span className="ml-2 text-gray-600">
                {entry.dataKey === "totalWarmups" && "Total Warmups"}
                {entry.dataKey === "spamFlags" && "Spam Flags"}
                {entry.dataKey === "replies" && "Replies"}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const footerMetrics = [
    {
      key: 'totalWarmups',
      label: 'Total Warmups',
      color: 'text-blue-600',
      tooltip: 'Emails we sent from your mailbox as part of the warmup process to improve deliverability.',
      value: chartData.reduce((sum, d) => sum + d.totalWarmups, 0)
    },
    {
      key: 'spamFlags',
      label: 'Spam Flags',
      color: 'text-red-600',
      tooltip: 'Emails that landed in the spam folder during warmups. We then moved them to the inbox to help improve the reputation.',
      value: chartData.reduce((sum, d) => sum + d.spamFlags, 0)
    },
    {
      key: 'replies',
      label: 'Total Replies',
      color: 'text-green-600',
      tooltip: 'Replies we sent to emails received from your mailbox during the warmup process to simulate real conversations.',
      value: chartData.reduce((sum, d) => sum + d.replies, 0)
    }
  ];

  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold">
                Warmup Performance Over Time
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={activeMetrics.totalWarmups ? "default" : "outline"}
                size="sm"
                onClick={() => toggleMetric("totalWarmups")}
                className={
                  activeMetrics.totalWarmups
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    : ""
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Total Warmups
              </Button>

              <Button
                variant={activeMetrics.spamFlags ? "default" : "outline"}
                size="sm"
                onClick={() => toggleMetric("spamFlags")}
                className={
                  activeMetrics.spamFlags
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : ""
                }
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Spam Flags
              </Button>

              <Button
                variant={activeMetrics.replies ? "default" : "outline"}
                size="sm"
                onClick={() => toggleMetric("replies")}
                className={
                  activeMetrics.replies
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : ""
                }
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Replies
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <RechartsTooltip content={<CustomTooltip />} />

                {activeMetrics.totalWarmups && (
                  <Line
                    type="monotone"
                    dataKey="totalWarmups"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2 }}
                  />
                )}

                {activeMetrics.spamFlags && (
                  <Line
                    type="monotone"
                    dataKey="spamFlags"
                    stroke="#DC2626"
                    strokeWidth={2}
                    dot={{ fill: "#DC2626", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#DC2626", strokeWidth: 2 }}
                  />
                )}

                {activeMetrics.replies && (
                  <Line
                    type="monotone"
                    dataKey="replies"
                    stroke="#059669"
                    strokeWidth={2}
                    dot={{ fill: "#059669", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#059669", strokeWidth: 2 }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
          {footerMetrics.map((metric) => (
            <div key={metric.key} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <div className={`text-2xl font-bold ${metric.color}`}>
                  {metric.key === 'totalWarmups' ? metric.value.toLocaleString() : metric.value}
                </div>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>{metric.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}

export default WarmUpLineChart;
