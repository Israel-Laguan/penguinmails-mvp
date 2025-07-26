"use client";
import { DropDownFilter, Filter, SearchInput } from "@/components/Filter";
import { Button } from "@/components/ui/button";
import { leadListsData } from "@/lib/data/leads";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import ListTableRow from "./ListTableRow";
import { cn } from "@/lib/utils";
const listTableColumn = [
  { id: "name", label: "List Name", canSort: true },
  { id: "contacts", label: "Contacts", canSort: true },
  { id: "status", label: "Status" },
  { id: "campaign", label: "Campaign" },
  { id: "performance", label: "Performance" },
  { id: "uploadDate", label: "Upload Date", canSort: true },
  { id: "actions", label: "Actions" },
];

function ListsTab() {
  const [filteredLists, setFilteredLists] = useState([...leadListsData]);
  const [sortById, setSortById] = useState<string | null>(null);
  function handleSortBy(columnId: string) {
    if (sortById === columnId) {
      setFilteredLists([...filteredLists].reverse());
      return;
    }
    const sortedLists = [...filteredLists].sort((a, b) => {
      if (a[columnId as keyof typeof a] < b[columnId as keyof typeof b])
        return -1;
      if (a[columnId as keyof typeof a] > b[columnId as keyof typeof b])
        return 1;
      return 0;
    });
    setFilteredLists(sortedLists);
    setSortById(columnId);
  }

  return (
    <div className="space-y-6">
      <Filter>
        <SearchInput />
        <div>
          <DropDownFilter
            options={[
              { value: "all", label: "All Lists" },
              { value: "active", label: "Active Lists" },
              { value: "complete", label: "Complete Lists" },
              { value: "paused", label: "Paused Lists" },
            ]}
            placeholder="Filter by List"
          />
          <DropDownFilter
            options={[
              { value: "all", label: "All Campaigns" },
              { value: "q1-saas", label: "Q1 SaaS Outreach" },
              { value: "enterprise", label: "Enterprise Outreach" },
              { value: "smb", label: "SMB Follow-up" },
            ]}
            placeholder="Filter by Campaign"
          />
        </div>
      </Filter>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {listTableColumn.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    "px-4 py-2 text-left text-sm font-medium text-gray-500",
                    {
                      "cursor-pointer": column.canSort,
                    }
                  )}
                >
                  <Button
                    variant={"ghost"}
                    className="flex items-center gap-2"
                    onClick={() => handleSortBy(column.id)}
                  >
                    {column.label}
                    {column.canSort && <ArrowUpDown className="w-4 h-4 " />}
                  </Button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredLists.map((list) => (
              <ListTableRow key={list.id} list={list} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListsTab;
