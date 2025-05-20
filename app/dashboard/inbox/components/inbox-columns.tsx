"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Email } from "../schemas/schemas";

export const inboxColumns: ColumnDef<Email>[] = [
  {
    accessorKey: "isStarred",
    header: "Starred",
    cell: ({ row }) => {
      const isStarred = row.getValue("isStarred");
      return (
        <div className="flex items-center justify-center">
          {isStarred ? (
            <span className="text-yellow-500">⭐</span>
          ) : (
            <span className="text-gray-400">☆</span>
          )}
        </div>
      );
    }
  },
  {
    accessorKey: "from",
    header: "From",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "preview",
    header: "Preview",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "isRead",
    header: "Read",
  },
  {
    accessorKey: "campaign",
    header: "Campaign",
  },
];
