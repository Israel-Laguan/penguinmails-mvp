"use client";

import { useRef, useState } from "react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Cross,
  Filter,
  Mail,
  RefreshCcw,
  Search,
  User,
} from "lucide-react";
import { DataTableViewOptions } from "./datatable-view-options";
import { DataTableFacetedFilter } from "./datatable-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  selectedValues: string[];
  setSelectedValues: (values: string[]) => void;
}

export function DataTableToolbar<TData>({
  table,
  selectedValues,
  setSelectedValues
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
    new Set(table.getRowModel().rows.map((row) => row.getValue<string>("email")))
  ).map((emailValue) => ({
    label: emailValue,
    value: emailValue,
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
                table.setGlobalFilter(event.target.value);
              }}
              className="h-8 w-full md:w-[250px]"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                table.resetColumnFilters();
              }}
              className="px-2 ml-2 border-black"
            >
              <Search className="ml-2 siz-3" />
              Search
            </Button>
            {searchRef.current && searchRef.current?.value.length > 0 && (
              <Cross
                onClick={clearSearchInput}
                className="absolute right-0 top-0 m-2 size-4 text-muted-foreground hover:cursor-pointer"
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            {table.getColumn("from") && from.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("from")}
                title="From"
                options={from}
                selectedValues={selectedValues}
                setSelectedValues={setSelectedValues}
              />
            )}
            {table.getColumn("email") && emails.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("email")}
                title="Email"
                options={emails}
                selectedValues={selectedValues}
                setSelectedValues={setSelectedValues}
              />
            )}
            {
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  table.resetColumnFilters();
                  setSelectedValues([]);
                }}
                className="px-2"
              >
                <Filter className="ml-2 siz-3" />
                Apply Filters
              </Button>
            }
            {selectedValues.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedValues([]);
                }}
                className="px-2"
              >
                Restart
                <RefreshCcw className="ml-2 siz-3" />
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </>
  );
}
