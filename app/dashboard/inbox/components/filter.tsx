"use client";
import { Filter, SearchInput } from "@/components/Filter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Archive, Inbox, Mail, Send, Trash2, Users } from "lucide-react";
import { useState } from "react";

function InboxFilter() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [campaignFilter, setCampaignFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Messages", count: 156, icon: Inbox },
    { id: "unread", label: "Unread", count: 24, icon: Mail },
    { id: "sent", label: "Sent", count: 89, icon: Send },
    { id: "archived", label: "Archived", count: 43, icon: Archive },
    { id: "trash", label: "Trash", count: 12, icon: Trash2 },
    { id: "team", label: "Team", count: 8, icon: Users },
  ];

  return (
    <>
      <Filter
        className={cn(
          "bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out lg:flex-col rounded-none"
        )}
      >
        <SearchInput />

        {/* Filters */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  variant={selectedFilter === filter.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-between h-auto py-2.5 px-3",
                    selectedFilter === filter.id
                      ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                      : "text-gray-700"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      className={cn(
                        "w-4 h-4",
                        selectedFilter === filter.id
                          ? "text-blue-600"
                          : "text-gray-500"
                      )}
                    />
                    <span className="text-sm font-medium">{filter.label}</span>
                  </div>
                  <Badge
                    variant={
                      selectedFilter === filter.id ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {filter.count}
                  </Badge>
                </Button>
              );
            })}
          </div>

          {/* Additional Filters */}
          <div className="mt-6 space-y-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Filter By
            </h3>
            <Select value={campaignFilter} onValueChange={setCampaignFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Campaigns" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Campaigns</SelectItem>
                <SelectItem value="Q1 SaaS Outreach">
                  Q1 SaaS Outreach
                </SelectItem>
                <SelectItem value="Enterprise Prospects">
                  Enterprise Prospects
                </SelectItem>
                <SelectItem value="SMB Follow-up">SMB Follow-up</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Filter>
    </>
  );
}
export default InboxFilter;
