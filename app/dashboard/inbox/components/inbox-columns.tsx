import { ColumnDef } from "@tanstack/react-table";
import { Email } from "../schemas/schemas";

export const inboxColumns: ColumnDef<Email>[] = [
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
];
