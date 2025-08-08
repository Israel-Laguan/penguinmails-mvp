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
import { Mail, Plus } from "lucide-react";
import Link from "next/link";
import MailboxActions from "../MailboxActions";
import MailboxesFilter from "./MailboxesFilter";

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
      <MailboxesFilter />
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-100 ">
              <TableRow>
                <TableHead>Mailbox</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Daily Limit</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mailboxes.map((mailbox) => (
                <TableRow
                  key={mailbox.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <TableCell className="px-8 py-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors text-lg">
                        {mailbox.email}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Date Created :{" "}
                        {Intl.DateTimeFormat("en-US").format(
                          new Date(mailbox.createdAt)
                        )}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Domain: {mailbox.domain}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-6">
                    <span
                      className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(
                        mailbox.status
                      )}`}
                    >
                      <span className="capitalize">{mailbox.status}</span>
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-6">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">
                        {mailbox.dailyLimit}/day
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Daily sending limit
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">
                          {mailbox.sent.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-500">
                          total sent
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-6 text-sm text-gray-500">
                    {mailbox.lastActivity}
                  </TableCell>
                  <TableCell className="px-6 py-6 text-right">
                    <MailboxActions mailbox={mailbox} />
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
