"use client";

import { useRef } from "react";
import { ColumnMeta, Row, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckIcon,
  Cross,
  Mail,
  RefreshCcw,
  TrashIcon,
  User,
  X,
} from "lucide-react";
import { DataTableViewOptions } from "./datatable-view-options";
import { DataTableFacetedFilter } from "./datatable-faceted-filter";

interface CustomColumnMeta<TData> extends ColumnMeta<TData, unknown> {
  name?: string;
}

export const priorityType = [
  {
    label: "Baja",
    value: "LOW",
    icon: CheckIcon,
  },
  {
    label: "Media",
    value: "MEDIUM",
    icon: X,
  },
  {
    label: "Alta",
    value: "HIGH",
    icon: X,
  },
];

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  disabled: boolean;
  onDelete: (rows: Row<TData>[]) => void;
}

export function DataTableToolbar<TData>({
  table,
  onDelete,
}:
DataTableToolbarProps<TData>) {
  const searchRef = useRef<HTMLInputElement>(null);
  const isFiltered = table.getState().columnFilters.length > 0;

  const clearSearchInput = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
      table.setGlobalFilter("");
    }
  };

  const handleBulkDelete = async () => {
    const ok = await confirm();
    if (ok) {
      onDelete(table.getFilteredSelectedRowModel().rows);
      table.resetRowSelection();
    }
  };

  const users = Array.from(
    new Set(table.getRowModel().rows.map((row) => row.getValue("name")))
  ).map((user: string) => ({
    label: user,
    value: user,
    icon: User,
  }));
  const emails = Array.from(
    new Set(table.getRowModel().rows.map((row) => row.getValue("email")))
  ).map((email: string) => ({
    label: email,
    value: email,
    icon: Mail,
  }));

  return (
    <>
      <div className="flex items-start lg:items-center md:justify-between w-full flex-col md:flex-row space-y-2 md:space-y-0">
        <div className="flex items-start md:items-center gap-2 flex-col md:flex-row w-full md:w-fit">
          <div className="relative w-full">
            <Input
              ref={searchRef}
              placeholder="Search..."
              onChange={(event) => {
                table.setGlobalFilter(event.target.value);
              }}
              className="h-8 w-full md:w-[250px]"
            />
            {searchRef.current && searchRef.current?.value.length > 0 && (
              <Cross
                onClick={clearSearchInput}
                className="absolute right-0 top-0 m-2 size-4 text-muted-foreground hover:cursor-pointer"
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            {table.getColumn("name") && users.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("name")}
                title="Name"
                options={users}
              />
            )}
            {table.getColumn("email") && emails.length > 0 && (
              <DataTableFacetedFilter
                column={table.getColumn("email")}
                title="Email"
                options={emails}
              />
            )}
            {isFiltered && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  table.resetColumnFilters();
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
          {table.getFilteredSelectedRowModel().rows.length > 0 ? (
            <Button variant="outline" size="sm" onClick={handleBulkDelete}>
              <TrashIcon className="mr-2 size-4" aria-hidden="true" />
              Delete ({table.getFilteredSelectedRowModel().rows.length})
            </Button>
          ) : null}
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </>
  );
}
