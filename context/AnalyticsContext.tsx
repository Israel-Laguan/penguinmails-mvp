"use client";
import {
  generateTimeSeriesData,
  getDaysFromRange,
  metrics,
} from "@/lib/data/analytics.mock";
import { createContext, useContext, useState } from "react";

interface AnalyticsContextType {
  totalSent: number | string;
  openRate: number | string;
  replyRate: number | string;
  clickRate: number | string;
  chartData: any;
  visibleMetrics: any;
  setVisibleMetrics: (value: any) => void;
  showCustomDate: boolean;
  setShowCustomDate: (value: boolean) => void;
  dateRange: string;
  setDateRange: (value: string) => void;
  granularity: "day" | "week" | "month";
  setGranularity: (value: "day" | "week" | "month") => void;
  customDateStart: string;
  setCustomDateStart: (value: string) => void;
  customDateEnd: string;
  setCustomDateEnd: (value: string) => void;
  selectedCampaigns: string[];
  setSelectedCampaigns: (value: string[]) => void;
  selectedMailboxes: string[];
  setSelectedMailboxes: (value: string[]) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
);

function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [dateRange, setDateRange] = useState("30d");
  const [customDateStart, setCustomDateStart] = useState("");
  const [customDateEnd, setCustomDateEnd] = useState("");
  const [showCustomDate, setShowCustomDate] = useState(false);
  const [granularity, setGranularity] = useState<"day" | "week" | "month">(
    "day"
  );
  const [selectedCampaigns, setSelectedCampaigns] = useState(["all"]);
  const [selectedMailboxes, setSelectedMailboxes] = useState(["all"]);
  const [visibleMetrics, setVisibleMetrics] = useState(
    metrics.reduce(
      (acc, metric) => ({ ...acc, [metric.key]: metric.visible }),
      {}
    )
  );
  const chartData = generateTimeSeriesData(
    getDaysFromRange(dateRange),
    granularity
  );

  const totalSent = chartData.reduce((sum, d) => sum + d.sent, 0);
  const totalOpens = chartData.reduce((sum, d) => sum + d.opens, 0);
  const totalClicks = chartData.reduce((sum, d) => sum + d.clicks, 0);
  const totalReplies = chartData.reduce((sum, d) => sum + d.replies, 0);
  const openRate =
    totalSent > 0 ? ((totalOpens / totalSent) * 100).toFixed(1) : "0";
  const clickRate =
    totalSent > 0 ? ((totalClicks / totalSent) * 100).toFixed(1) : "0";
  const replyRate =
    totalSent > 0 ? ((totalReplies / totalSent) * 100).toFixed(1) : "0";

  return (
    <AnalyticsContext.Provider
      value={{
        totalSent,
        openRate,
        replyRate,
        clickRate,
        chartData,
        visibleMetrics,
        setVisibleMetrics,
        showCustomDate,
        setShowCustomDate,
        dateRange,
        setDateRange,
        granularity,
        setGranularity,
        customDateStart,
        setCustomDateStart,
        customDateEnd,
        setCustomDateEnd,
        selectedCampaigns,
        setSelectedCampaigns,
        selectedMailboxes,
        setSelectedMailboxes,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
}

export { AnalyticsProvider, useAnalytics };
