"use client";
import { DropDownFilter, Filter, SearchInput } from "@/components/Filter";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
        <div className="flex items-center space-x-4">
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
        <Table>
          <TableHeader>
            <TableRow>
              {listTableColumn.map((column) => (
                <TableHead
                  key={column.id}
                  className={cn({
                    "cursor-pointer": column.canSort,
                  })}
                >
                  <Button
                    variant={"ghost"}
                    className="flex items-center gap-2 h-auto p-0 hover:bg-transparent"
                    onClick={
                      column.canSort ? () => handleSortBy(column.id) : undefined
                    }
                  >
                    {column.label}
                    {column.canSort && <ArrowUpDown className="w-4 h-4 " />}
                  </Button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLists.map((list) => (
              <ListTableRow key={list.id} list={list} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default ListsTab;
