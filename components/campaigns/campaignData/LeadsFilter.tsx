"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Download, Search } from "lucide-react";

function LeadsFilter() {


  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 p-4 bg-white border rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
        <div className="flex items-center space-x-2 border shadow-sm rounded-lg px-2 bg-gray-50 peer-focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 w-full lg:w-auto">
          <Search className="text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search leads..."
            className="w-full lg:max-w-md border-none shadow-none focus-visible:border-none focus-visible:ring-0 peer"
            onChange={(e) => console.log("Search:", e.target.value)}
          />
        </div>

        <Select>
          <SelectTrigger className="w-full sm:w-auto">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            {[
              {
                value: "all",
                label: "All Statuses",
              },
              { value: "sent", label: "Sent" },
              { value: "opened", label: "Opened" },
              { value: "replied", label: "Replied" },
              { value: "bounced", label: "Bounced" },
            ].map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full sm:w-auto">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Sort by Activity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest Activity</SelectItem>
            <SelectItem value="oldest">Oldest Activity</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        variant="outline"
        className="flex items-center space-x-2 w-full sm:w-auto"
      >
        <Download className="w-4 h-4" />
        <span>Export CSV</span>
      </Button>
    </div>
  );
}
export default LeadsFilter;
