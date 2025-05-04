"use client";

import * as React from "react";
import { type CampaignStatus } from "@/app/api/generated/prisma";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowUpDown,
  Download,
  MoreHorizontal,
  Play,
  Pause,
  XCircle,
  Settings2,
  Copy,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { copyText as t } from "./copy";
import { CampaignResponse } from "@/types/campaign";
import { toast } from "sonner";

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000;

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
  return `${Math.floor(diff / 604800)} weeks ago`;
}

async function handleDeleteCampaign(id: number) {
  // Optimistically update the UI
  // Assuming you have a function to remove the campaign from the data array
  // and update the state.  For example:
  // removeCampaign(id);

  // Call the server action to delete the campaign
  // const result = await deleteCampaign(id);
  const result = { error: null }; // Mock result for demonstration

  if (result?.error) {
    console.error("Error deleting campaign:", id, "\n", result.error);
    toast.error("Error deleting campaign", {
      description: result.error,
    });
    // Optionally, revert the optimistic update here if the delete failed
  } else {
    toast.info("Campaign deleted", {
      description: "The campaign has been successfully deleted.",
    });
  }
}

async function handlePauseCampaign(id: number) {
  // Call the server action to pause the campaign
  // const result = await pauseCampaign(id);
  const result = { error: null }; // Mock result for demonstration

  if (result?.error) {
    console.error("Error pausing campaign:", id, "\n", result.error);
    toast.error("Error pausing campaign", {
      description: result.error,
    });
  } else {
    toast.info("Campaign paused", {
      description: "The campaign has been paused successfully.",
    });
  }
}

async function handleResumeCampaign(id: number) {
  // Call the server action to resume the campaign
  // const result = await resumeCampaign(id);
  const result = { error: null }; // Mock result for demonstration

  if (result?.error) {
    console.error("Error resuming campaign:", id, "\n", result.error);
    toast.error("Error resuming campaign", {
      description: result.error,
    });
  } else {
    toast.info("Campaign resumed", {
      description: "The campaign has been resumed successfully.",
    });
  }
}

async function handleDuplicateCampaign(id: number) {
  // Call the server action to duplicate the campaign
  // const result = await duplicateCampaign(id);
  const result = { error: null }; // Mock result for demonstration

  if (result?.error) {
    console.error("Error duplicating campaign:", id, "\n", result.error);
    toast.error("Error duplicating campaign", {
      description: result.error,
    });
  } else {
    toast.info("Campaign duplicated", {
      description: "A copy of the campaign has been created.",
    });
  }
}

const columns: ColumnDef<CampaignResponse>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {t.table.columns.name} <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <Link
        href={`/dashboard/campaigns/${row.original.id}`}
        className="hover:underline"
      >
        {row.getValue("name")}
      </Link>
    ),
  },
  {
    accessorKey: "status",
    header: t.table.columns.status,
    cell: ({ row }) => {
      const status = row.getValue("status") as CampaignStatus;
      return (
        <Badge
          variant={
            status === "ACTIVE"
              ? "default"
              : status === "PAUSED"
              ? "destructive"
              : status === "DRAFT"
              ? "outline"
              : "secondary"
          }
        >
          {t.status[status]}
        </Badge>
      );
    },
  },
  {
    id: "recipients",
    header: t.table.columns.progress,
    cell: ({ row }) => {
      const sent = row.original.emailEvents.filter((e) => e.type === "SENT").length;
      const total = row.original.clients.length;
      const progress = total > 0 ? (sent / total) * 100 : 0;
      return (
        <div className="flex items-center gap-2">
          <Progress value={progress} className="w-[60px]" />
          <span className="text-xs text-muted-foreground">
            {t.table.stats.progress(sent, total)}
          </span>
        </div>
      );
    },
  },
  {
    id: "opens",
    header: t.table.columns.opens,
    cell: ({ row }) => {
      const sent = row.original.emailEvents.filter(
        (e) => e.type === "SENT"
      ).length;
      const opens = row.original.emailEvents.filter(
        (e) => e.type === "OPENED"
      ).length;
      const rate = sent > 0 ? (opens / sent) * 100 : 0;
      return (
        <div className="text-right">
          {opens.toLocaleString()}
          <span className="text-xs text-muted-foreground ml-1">
            {t.table.stats.rate(rate)}
          </span>
        </div>
      );
    },
  },
  {
    id: "clicks",
    header: t.table.columns.clicks,
    cell: ({ row }) => {
      const sent = row.original.emailEvents.filter(
        (e) => e.type === "SENT"
      ).length;
      const clicks = row.original.emailEvents.filter(
        (e) => e.type === "CLICKED"
      ).length;
      const rate = sent > 0 ? (clicks / sent) * 100 : 0;
      return (
        <div className="text-right">
          {clicks.toLocaleString()}
          <span className="text-xs text-muted-foreground ml-1">
            {t.table.stats.rate(rate)}
          </span>
        </div>
      );
    },
  },
  {
    id: "replies",
    header: t.table.columns.replies,
    cell: ({ row }) => {
      const sent = row.original.emailEvents.filter(
        (e) => e.type === "SENT"
      ).length;
      const replies = row.original.emailEvents.filter(
        (e) => e.type === "REPLIED"
      ).length;
      const rate = sent > 0 ? (replies / sent) * 100 : 0;
      return (
        <div className="text-right">
          {replies.toLocaleString()}
          <span className="text-xs text-muted-foreground ml-1">
            {t.table.stats.rate(rate)}
          </span>
        </div>
      );
    },
  },
  {
    id: "bounces",
    header: t.table.columns.bounces,
    cell: ({ row }) => {
      const sent = row.original.emailEvents.filter(
        (e) => e.type === "SENT"
      ).length;
      const bounces = row.original.emailEvents.filter(
        (e) => e.type === "BOUNCED"
      ).length;
      const rate = sent > 0 ? (bounces / sent) * 100 : 0;
      return (
        <div className="text-right">
          {bounces.toLocaleString()}
          <span className="text-xs text-muted-foreground ml-1">
            {t.table.stats.rate(rate)}
          </span>
        </div>
      );
    },
  },
  {
    id: "spam",
    header: t.table.columns.spam,
    cell: ({ row }) => {
      const sent = row.original.emailEvents.filter(
        (e) => e.type === "SENT"
      ).length;
      const spam = row.original.emailEvents.filter(
        (e) => e.type === "SPAM_COMPLAINT"
      ).length;
      const rate = sent > 0 ? (spam / sent) * 100 : 0;
      return (
        <div className="text-right">
          {spam.toLocaleString()}
          <span className="text-xs text-muted-foreground ml-1">
            {t.table.stats.rate(rate)}
          </span>
        </div>
      );
    },
  },
  {
    id: "unsubscribed",
    header: t.table.columns.unsubscribed,
    cell: ({ row }) => {
      const sent = row.original.emailEvents.filter(
        (e) => e.type === "SENT"
      ).length;
      const unsubs = row.original.emailEvents.filter(
        (e) => e.type === "UNSUBSCRIBED"
      ).length;
      const rate = sent > 0 ? (unsubs / sent) * 100 : 0;
      return (
        <div className="text-right">
          {unsubs.toLocaleString()}
          <span className="text-xs text-muted-foreground ml-1">
            {t.table.stats.rate(rate)}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: t.table.columns.updatedAt,
    cell: ({ row }) => {
      const lastEvent = row.original.emailEvents.sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
      )[0];
      const lastActivity = lastEvent?.timestamp || row.original.updatedAt;
      return formatRelativeTime(lastActivity);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">{t.table.actions.tooltipLabel}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link
                  className={`w-full justify-start font-normal hover:underline ${buttonVariants(
                    {
                      variant: "ghost",
                    }
                  )} text-left`}
                  href={`/dashboard/campaigns/${row.original.id}`}
                >
                  <Eye className="mx-2 h-4 w-4" />
                  {t.table.actions.view}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  className={`w-full justify-start font-normal hover:underline ${buttonVariants(
                    {
                      variant: "ghost",
                    }
                  )}`}
                  href={`/dashboard/campaigns/${row.original.id}/edit`}
                >
                  <Settings2 className="mx-2 h-4 w-4" />
                  {t.table.actions.edit}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => handleDuplicateCampaign(row.original.id)}
                >
                  <Copy className="mr-2 h-4 w-4" /> {t.table.actions.duplicate}
                </Button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className={
                  row.original.status === "ACTIVE"
                    ? "bg-yellow-100 hover:bg-yellow-100 text-yellow-600 hover:text-yellow-600"
                    : "bg-green-100 hover:bg-green-100 text-green-600 hover:text-green-600"
                }
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start font-normal ${
                    row.original.status === "ACTIVE"
                      ? "bg-yellow-100 hover:bg-yellow-100 text-yellow-600 hover:text-yellow-600"
                      : "bg-green-100 hover:bg-green-100 text-green-600 hover:text-green-600"
                  }`}
                  onClick={() =>
                    row.original.status === "ACTIVE"
                      ? handlePauseCampaign(row.original.id)
                      : handleResumeCampaign(row.original.id)
                  }
                >
                  {row.original.status === "ACTIVE" ? (
                    <>
                      <Pause className="mr-2 h-4 w-4 bg-yellow-100 hover:bg-yellow-100 text-yellow-600 hover:text-yellow-600" />{" "}
                      {t.table.actions.pause}
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4 bg-green-100 hover:bg-green-100 text-green-600 hover:text-green-600" />{" "}
                      {t.table.actions.resume}
                    </>
                  )}
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-red-100 hover:bg-red-100 text-red-600 hover:text-red-600">
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal bg-red-100 hover:bg-red-100 text-red-600 hover:text-red-600"
                  onClick={() => handleDeleteCampaign(row.original.id)}
                >
                  <XCircle className="mr-2 h-4 w-4 text-red-600" />{" "}
                  {t.table.actions.delete}
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent>{t.table.actions.tooltipLabel}</TooltipContent>
      </Tooltip>
    ),
  },
];

export function CampaignsDataTable({ data }: { data: CampaignResponse[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      bounces: false,
      spam: false,
      unsubscribed: false,
    });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="space-y-4 p-2">
      <div className="flex items-center gap-4">
        <Input
          placeholder={t.table.searchPlaceholder}
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Settings2 className="mr-2 h-4 w-4" />
              {t.table.viewColumns}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuItem key={column.id} className="capitalize">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={column.getIsVisible()}
                        onChange={(e) =>
                          column.toggleVisibility(e.target.checked)
                        }
                      />
                      {(t.table.columns as Record<string, string>)[column.id] || column.id}
                    </label>
                  </DropdownMenuItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outline"
          size="sm"
          className="ml-auto"
          disabled={table.getFilteredRowModel().rows.length === 0}
        >
          <Download className="mr-2 h-4 w-4" />
          {t.table.exportCsv}
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-lg font-medium">{t.table.empty.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.table.empty.description}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between space-x-2 py-2">
        <div className="text-sm text-muted-foreground">
          {t.table.totalResults(table.getFilteredRowModel().rows.length)}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t.table.pagination.previous}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {t.table.pagination.next}
          </Button>
        </div>
      </div>
    </div>
  );
}
