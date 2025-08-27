import { DropDownFilter, Filter, SearchInput } from "@/components/Filter";
import { Button } from "@/components/ui/button";

function MailboxesFilter() {
  return (
    <Filter className="shadow-none border-none">
      <div className="flex items-center gap-4">
        <SearchInput />

        <DropDownFilter
          placeholder="All Domains"
          options={[
            { value: "all", label: "All Domains" },
            // Domain options would be populated dynamically
          ]}
        />

        <DropDownFilter
          placeholder="All Status"
          options={[
            { value: "all", label: "All Status" },
            { value: "active", label: "Active" },
            { value: "paused", label: "Paused" },
          ]}
        />

        <DropDownFilter
          placeholder="Sort by Created"
          options={[
            { value: "created", label: "Sort by Created" },
            { value: "email", label: "Sort by Email" },
            { value: "status", label: "Sort by Status" },
            { value: "sent", label: "Sort by Sent" },
            { value: "dailyLimit", label: "Sort by Daily Limit" },
          ]}
        />

        <Button variant={"ghost"} size={"icon"}>
          ↑
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Show:</span>
        <DropDownFilter
          placeholder="10 per page"
          options={[
            { value: "5", label: "5 per page" },
            { value: "10", label: "10 per page" },
            { value: "25", label: "25 per page" },
            { value: "50", label: "50 per page" },
          ]}
        />
      </div>
    </Filter>
  );
}
export default MailboxesFilter;
