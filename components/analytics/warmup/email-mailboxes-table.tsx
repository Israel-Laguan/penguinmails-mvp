import { DropDownFilter, Filter, SearchInput } from "@/components/Filter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockMailboxes } from "@/lib/data/analytics.mock";
import { Mail } from "lucide-react";
import Link from "next/link";

function EmailMailboxesTable() {
  const filteredMailboxes = mockMailboxes;
  if (filteredMailboxes.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-gray-900">
                Email Mailboxes
              </h2>
              <Badge className="bg-primary/20 text-primary">
                {filteredMailboxes.length} total
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              No mailboxes found matching your criteria
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-gray-900">
              Email Mailboxes
            </h2>
            <Badge className="bg-primary/20 text-primary">
              {filteredMailboxes.length} total
            </Badge>
          </div>
        </CardTitle>
        <Filter className="border-none shadow-none">
          <div className="flex-1">
            <SearchInput placeholder="Search Mailboxes" />
          </div>
          <div>
            <DropDownFilter
              placeholder="Select Status"
              options={[
                {
                  label: "All Status",
                  value: "all",
                  default: true,
                },
                {
                  label: "Active",
                  value: "active",
                },
                {
                  label: "Warming",
                  value: "warming",
                },
                {
                  label: "Paused",
                  value: "paused",
                },
              ]}
            />
          </div>
        </Filter>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mailbox</TableHead>

              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMailboxes.map((mailbox) => (
              <TableRow
                key={mailbox.id}
                className="hover:bg-muted/50  transition-colors"
              >
                <TableCell>
                  <div>
                    <div className="font-medium">{mailbox.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {mailbox.email}
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary"
                    asChild
                  >
                    <Link href={`/dashboard/analytics/warmup/${mailbox.id}`}>
                      View Details
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export default EmailMailboxesTable;
