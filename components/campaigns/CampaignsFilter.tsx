"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, CheckIcon, Search, Server } from "lucide-react";
import { useState } from "react";
import DatePicker from "../DatePicker";
import { availableMailboxes } from "@/lib/data/campaigns";

enum CampaignStatus {
  All = "all",
  Active = "active",
  Paused = "paused",
  Completed = "completed",
}
enum DateRange {
  AllTime = "all",
  Today = "today",
  ThisWeek = "week",
  ThisMonth = "month",
  ThisQuarter = "quarter",
  Custom = "custom",
}
function CampaignsFilter() {
  const [status, setStatus] = useState<CampaignStatus | undefined>(undefined);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [mailbox, setMailbox] = useState<string | undefined>(undefined);

  return (
    <div
      className={
        "flex flex-col lg:flex-row lg:justify-between lg:items-center bg-white p-4 rounded-lg shadow border gap-4"
      }
    >
      <div className="flex items-center space-x-2 border shadow-sm rounded-lg px-2 bg-gray-50 peer-focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 w-full lg:w-auto">
        <Search className="text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search campaigns..."
          className="w-full lg:max-w-md border-none shadow-none focus-visible:border-none focus-visible:ring-0 peer"
          onChange={(e) => {
            /* Handle search input */
          }}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-2">
        <Select
          value={status}
          onValueChange={(e) => setStatus(e as CampaignStatus)}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select a Status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(CampaignStatus).map((status) => (
              <SelectItem key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={dateRange}
          onValueChange={(e) => setDateRange(e as DateRange)}
        >
          <SelectTrigger className="w-full sm:w-auto">
            <Calendar />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[
              { value: DateRange.AllTime, label: "All Time" },
              { value: DateRange.Today, label: "Today" },
              { value: DateRange.ThisWeek, label: "This Week" },
              { value: DateRange.ThisMonth, label: "This Month" },
              { value: DateRange.ThisQuarter, label: "This Quarter" },
            ].map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
            <div
              onClick={() => setDateRange(DateRange.Custom)}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded text-sm flex justify-between"
            >
              <span>Custom Date</span>
              {dateRange === DateRange.Custom && (
                <CheckIcon className="size-4 text-gray-500" />
              )}
            </div>
            {dateRange === DateRange.Custom && (
              <div className="mt-2 flex flex-col gap-2">
                <DatePicker
                  date={startDate}
                  label="Start Date"
                  calendarProps={{
                    defaultMonth: startDate,
                    selected: startDate,
                    onSelect: setStartDate,
                    captionLayout: "dropdown",
                    navLayout: "after",
                    mode: "single",
                  }}
                />
                <DatePicker
                  date={endDate}
                  label="End Date"
                  calendarProps={{
                    defaultMonth: endDate,
                    selected: endDate,
                    onSelect: setEndDate,
                    captionLayout: "dropdown",
                    navLayout: "after",
                    mode: "single",
                  }}
                />
              </div>
            )}
          </SelectContent>
        </Select>
        <Select value={mailbox} onValueChange={setMailbox}>
          <SelectTrigger className="w-full sm:w-auto">
            <Server className="w-5 h-5" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All MailBox</SelectItem>
            {availableMailboxes.map((mailbox) => (
              <SelectItem key={mailbox} value={mailbox}>
                {mailbox}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default CampaignsFilter;
