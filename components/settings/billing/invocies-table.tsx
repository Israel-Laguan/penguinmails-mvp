import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import DownloadButton from "./download-button";

const invoices = [
  {
    id: "INV-001",
    date: "2024-01-15",
    amount: "$55.00",
    status: "Paid" as const,
  },
  {
    id: "INV-002",
    date: "2024-12-15",
    amount: "$55.00",
    status: "Paid" as const,
  },
  {
    id: "INV-003",
    date: "2024-11-15",
    amount: "$55.00",
    status: "Paid" as const,
  },
  {
    id: "INV-004",
    date: "2024-10-15",
    amount: "$55.00",
    status: "Paid" as const,
  },
];

function InvoicesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium">Invoice ID</TableHead>
            <TableHead className="font-medium">Date</TableHead>
            <TableHead className="font-medium">Amount</TableHead>
            <TableHead className="font-medium">Status</TableHead>
            <TableHead className="font-medium">Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id} className="hover:bg-muted/50">
              <TableCell className="font-mono text-sm font-medium">
                {invoice.id}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {invoice.date}
              </TableCell>
              <TableCell className="font-medium">{invoice.amount}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={cn(
                    "bg-green-100 text-green-800 hover:bg-green-100",
                    "flex items-center w-fit gap-1"
                  )}
                >
                  <Check className="h-3 w-3" />
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DownloadButton invoiceId={invoice.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default InvoicesTable;
