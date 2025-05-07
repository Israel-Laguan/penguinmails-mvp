"use client"

import { copyText as t } from "@/components/clients/copy"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Client } from '@/app/api/generated/prisma'

export const createColumns = (
  maskPII: (text: string) => string,
  onEdit: (client: Client) => void,
  onRemove: (client: Client) => void
): ColumnDef<Client>[] => [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {t.table.email}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{maskPII(row.getValue("email"))}</div>,
  },
  {
    accessorKey: "firstName",
    header: t.table.firstName,
    cell: ({ row }) => <div>{maskPII(row.getValue("firstName") || '')}</div>,
  },
  {
    accessorKey: "lastName",
    header: t.table.lastName,
    cell: ({ row }) => <div>{maskPII(row.getValue("lastName") || '')}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">{t.menu.open}</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{t.actions.label}</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(JSON.stringify(client, null, 2))}>
              {t.actions.copyData}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onEdit(client)}>{t.actions.edit}</DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onRemove(client)}
              className="text-red-600"
            >
              {t.actions.remove}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
