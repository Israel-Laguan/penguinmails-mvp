"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  SortingState,
  getPaginationRowModel,
  getFilteredRowModel,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableToolbar } from "./datatable-toolbar";
import EmailTableSkeleton from "../EmailTableSkeleton";

interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data?: TData[];
  disabled: boolean;
  onDelete: (rows: Row<TData>[]) => void;
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

function highlightMatch(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-black text-white">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function InboxDataTable<TData>({
  columns,
  data = [],
  filterValue,
  setFilterValue,
  fetchAllMessages,
  setSearch
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [localData, setLocalData] = useState<TData[]>([]);

React.useEffect(() => {
  const loadData = async () => {
    try {
      setIsLoading(true);
      const messages = await fetchAllMessages();
      setLocalData(messages);
    } finally {
      setIsLoading(false);
    }
  };

  loadData();
}, []);


  const table = useReactTable({
    data: localData,
    columns,
    state: { sorting, globalFilter: filtering, rowSelection },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const renderTable = () => (
    <div className="rounded-md border h-[calc(100vh-33rem)] md:h-[calc(100vh-30rem)] lg:h-[calc(100vh-28rem)] overflow-y-scroll">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="font-semibold sticky top-0"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={
                  (row.original as any).read
                    ? "bg-white text-gray-500"
                    : "bg-blue-50 text-black font-semibold"
                }
              >
                {row.getVisibleCells().map((cell) => {
                  const value = cell.getValue();
                  const query = table.getState().globalFilter;

                  return (
                    <TableCell key={cell.id}>
                      {typeof value === "string"
                        ? highlightMatch(value, query)
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No result.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div>
      <div className="flex space-y-2 lg:items-center flex-col lg:flex-row py-4 items-start lg:justify-between">
        <DataTableToolbar
          table={table}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          fetchAllMessages={fetchAllMessages}
          setSearch={setSearch}
        />
      </div>
      <div className="w-full">{isLoading ? (<EmailTableSkeleton />): renderTable()}</div>
    </div>
  );
}
