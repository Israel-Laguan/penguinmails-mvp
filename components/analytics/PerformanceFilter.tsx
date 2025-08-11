"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAnalytics } from "@/context/AnalyticsContext";
import { campaignData, mailboxes } from "@/lib/data/analytics.mock";
import { ChevronDown, Mail, Settings, Target } from "lucide-react";
import { DropDownFilter, Filter } from "../Filter";

const dateRangeOptions = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "1y", label: "Last year" },
  { value: "custom", label: "Custom range" },
];

const granularityOptions = [
  { value: "day", label: "Daily" },
  { value: "week", label: "Weekly" },
  { value: "month", label: "Monthly" },
];

const sampleMetrics = ["Sent", "Delivered", "Opened", "Clicked", "Replied"];

function PerformanceFilter() {
  const {
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
  } = useAnalytics();

  const handleDateRangeChange = (value: string) => {
    setDateRange(value);
    setShowCustomDate(value === "custom");
  };

  return (
    <Filter className="shadow-none  border-none">
      <div className="flex items-center space-x-2">
        {/* Date Range Filter */}
        <DropDownFilter
          options={dateRangeOptions}
          placeholder="Select date range"
          value={dateRange}
          onValueChange={handleDateRangeChange}
        />

        {/* Custom Date Picker */}
        {showCustomDate && (
          <div className="flex items-center space-x-2">
            <Input
              type="date"
              value={customDateStart}
              onChange={(e) => setCustomDateStart(e.target.value)}
              className="w-auto"
            />
            <span className="text-muted-foreground">to</span>
            <Input
              type="date"
              value={customDateEnd}
              onChange={(e) => setCustomDateEnd(e.target.value)}
              className="w-auto"
            />
          </div>
        )}

        {/* Granularity Filter */}
        <DropDownFilter
          options={granularityOptions}
          placeholder="Granularity"
          value={granularity}
          onValueChange={(value) =>
            setGranularity(value as "day" | "week" | "month")
          }
        />

        {/* Campaign Filter */}
        <FilterPopover
          icon={<Target className="w-4 h-4" />}
          label="Campaigns"
          title="Filter by Campaign"
          items={campaignData.map((campaign) => campaign.name)}
          selectedItems={selectedCampaigns}
          onItemsChange={setSelectedCampaigns}
        />

        {/* Mailbox Filter */}
        <FilterPopover
          icon={<Mail className="w-4 h-4" />}
          label="Mailboxes"
          title="Filter by Mailbox"
          items={mailboxes.map((mailbox) => mailbox.name)}
          selectedItems={selectedMailboxes}
          onItemsChange={setSelectedMailboxes}
        />

        {/* Metrics Visibility Filter */}
        <FilterPopover
          icon={<Settings className="w-4 h-4" />}
          label="Metrics"
          title="Show/Hide Metrics"
          items={sampleMetrics}
          selectedItems={Object.keys(visibleMetrics).filter(
            (key) => visibleMetrics[key]
          )}
          onItemsChange={(items) => {
            const newVisibleMetrics = { ...visibleMetrics };
            Object.keys(newVisibleMetrics).forEach((key) => {
              newVisibleMetrics[key] = items.includes(key);
            });
            setVisibleMetrics(newVisibleMetrics);
          }}
        />
      </div>
    </Filter>
  );
}

function FilterPopover({
  icon,
  label,
  title,
  items,
  selectedItems = [],
  onItemsChange,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  items: string[];
  selectedItems?: string[];
  onItemsChange?: (items: string[]) => void;
}) {
  const handleItemToggle = (item: string) => {
    if (!onItemsChange) return;

    const newItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    onItemsChange(newItems);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium">{title}</h4>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={item}
                checked={selectedItems.includes(item)}
                onCheckedChange={() => handleItemToggle(item)}
              />
              <Label htmlFor={item} className="text-sm">
                {item}
              </Label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PerformanceFilter;
