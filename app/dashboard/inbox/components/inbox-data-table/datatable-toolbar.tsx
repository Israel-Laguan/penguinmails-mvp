"use client";

import React from "react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Search, User } from "lucide-react";
import { DataTableViewOptions } from "./datatable-view-options";
import { getUniqueFiltersAction } from "../../actions";
import { ModalFilter } from "./modal-filter";
import { useAuth } from "@/context/AuthContext";

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
  setSearch,
}: DataTableToolbarProps<TData>) {
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [filterOptions, setFilterOptions] = React.useState<{
    email: string[];
    from: string[];
    campaign: string[];
  }>({ email: [], from: [], campaign: [] });
  const { user } = useAuth();

  React.useEffect(() => {
    const fetchFilters = async () => {
      const filters = await getUniqueFiltersAction(user?.token);
      setFilterOptions(filters);
    };

    fetchFilters();
  }, []);

  const from = filterOptions.from.map((fromValue) => ({
    label: fromValue,
    value: fromValue,
    icon: User,
  }));

  const emails = filterOptions.email.map((emailValue) => ({
    label: emailValue,
    value: emailValue,
    icon: Mail,
  }));

  const campaigns = filterOptions.campaign.map((campaignValue) => ({
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
                setSearch("");
                if (searchRef.current) {
                  searchRef.current.value = "";
                }
              }}
              className="px-2 ml-2 border-black"
            >
              <Search className="ml-2 siz-3" />
              Search
            </Button>
          </div>
          <ModalFilter
            campaigns={campaigns}
            emails={emails}
            fetchAllMessages={fetchAllMessages}
            filterValue={filterValue}
            from={from}
            setFilterValue={setFilterValue}
            table={table}
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </>
  );
}
