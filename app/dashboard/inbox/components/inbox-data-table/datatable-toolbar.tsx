"use client";

import { useRef } from "react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross, Filter, Mail, Search, User } from "lucide-react";
import { DataTableViewOptions } from "./datatable-view-options";
import { DataTableFacetedFilter } from "./datatable-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterValue: {
    [key: string]: string[] | undefined;
  };
  setFilterValue: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string[] | undefined;
    }>
  >;
  fetchAllMessages: () => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function DataTableToolbar<TData>({
  table,
  filterValue,
  setFilterValue,
  fetchAllMessages,
  setSearch
}: DataTableToolbarProps<TData>) {
  const searchRef = useRef<HTMLInputElement>(null);

  const clearSearchInput = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
      table.setGlobalFilter("");
    }
  };

  const from = Array.from(
    new Set(table.getRowModel().rows.map((row) => row.getValue<string>("from")))
  ).map((fromValue) => ({
    label: fromValue,
    value: fromValue,
    icon: User,
  }));
  const emails = Array.from(
    new Set(
      table.getRowModel().rows.map((row) => row.getValue<string>("email"))
    )
  ).map((emailValue) => ({
    label: emailValue,
    value: emailValue,
    icon: Mail,
  }));
  const campaigns = Array.from(
    new Set(
      table.getRowModel().rows.map((row) => row.getValue<string>("campaign"))
    )
  ).map((campaignValue) => ({
    label: campaignValue,
    value: campaignValue,
    icon: Mail,
  }));

  return (
    <>
      <div className="flex items-start lg:items-center md:justify-between w-full flex-col md:flex-row space-y-2 md:space-y-0">
        <div className="flex items-start md:items-center gap-2 flex-col md:flex-row w-full md:w-fit">
          <div className="flex flex-row relative w-full">
            <Input
              ref={searchRef}
              placeholder="Search..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              className="h-8 w-full md:w-[250px]"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                fetchAllMessages();
              }}
              className="px-2 ml-2 border-black"
            >
              <Search className="ml-2 siz-3" />
              Search
            </Button>
          </div>
          <div className="flex items-center gap-2">
            {table.getColumn("campaign") && campaigns.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("campaign")}
                title="Campaign"
                options={campaigns}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            )}
            {table.getColumn("from") && from.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("from")}
                title="From"
                options={from}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            )}
            {table.getColumn("email") && emails.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("email")}
                title="Email"
                options={emails}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                table.resetColumnFilters();
                table.setGlobalFilter("");
                fetchAllMessages();
              }}
              className="px-2"
            >
              <Filter className="ml-2 siz-3" />
              Apply Filters
            </Button>
            {/*}
              <Button
                variant="ghost"
                size="sm"
                className="px-2"
              >
                Restart
                <RefreshCcw className="ml-2 siz-3" />
              </Button>
              */}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </>
  );
}
