"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Client, Email } from "../schemas/schemas";
import { Campaign } from "@/types/campaign";

export const inboxColumns: ColumnDef<Email>[] = [
  {
    accessorKey: "starred",
    header: "Starred",
    cell: ({ row }) => {
      const isStarred = row.getValue("starred");
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
    accessorKey: "client",
    header: "From",
    cell: ({ row }) => {
      const from: Client = row.getValue("client");
      return (
        <div className="flex items-center justify-center">
          <span className="text-blue-500">{`${from?.firstName} ${from?.lastName}`}</span>
        </div>
      );
    }
  },
  {
    accessorKey: "client",
    header: "Email",
    cell: ({ row }) => {
      const from: Client = row.getValue("client");
      return (
        <div className="flex items-center justify-center">
          <span className="text-blue-500">{from?.email}</span>
        </div>
      );
    }
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "body",
    header: "Preview",
    cell: ({ row }) => {
      const body: string = row.getValue("body");
      return (
        <div className="flex items-center justify-center">
          <span className="text-gray-500">{body.slice(0, 50)}...</span>
        </div>
      );
    }
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "campaign",
    header: "Campaign",
    cell: ({ row }) => {
      const campaign:Campaign = row.getValue("campaign");
      return (
        <div className="flex items-center justify-center">
          <span className="text-blue-500">{campaign.name}</span>
        </div>
      );
    }
  },
];
