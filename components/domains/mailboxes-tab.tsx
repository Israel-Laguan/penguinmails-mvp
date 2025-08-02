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
import { getStatusColor, mailboxes } from "@/lib/data/domains.mock";
import { Mail, Plus, Settings, Trash2 } from "lucide-react";
import Link from "next/link";

function MailboxesTab() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>All Mailboxes</CardTitle>
        <div className="flex justify-end">
          <Button asChild>
            <Link
              href={"/dashboard/domains/mailboxes/new"}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4 " />
              Add Mailbox
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mailbox</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Campaign</TableHead>
                <TableHead>Daily Limit</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mailboxes.map((mailbox) => (
                <TableRow key={mailbox.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{mailbox.email}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {mailbox.domain}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(mailbox.status)}>
                      {mailbox.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{mailbox.campaign || "-"}</TableCell>
                  <TableCell>{mailbox.dailyLimit}/day</TableCell>
                  <TableCell>{mailbox.sent.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {mailbox.lastActivity}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
export default MailboxesTab;
