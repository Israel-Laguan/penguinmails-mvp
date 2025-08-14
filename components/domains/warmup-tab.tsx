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
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Mail,
  Pause,
  Play,
  Settings,
} from "lucide-react";
import Link from "next/link";

function WarmupTab() {
  return (
    <div className="space-y-8">
      <WarmupMailboxesTable />
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <div className={cn("p-2 rounded-lg", "bg-blue-100")}>
              <AlertTriangle className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-2">Warmup Best Practices</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • Start with 5-10 emails per day and gradually increase volume
                </li>
                <li>
                  • Maintain consistent sending patterns to build reputation
                </li>
                <li>• Engage with warmup replies to improve deliverability</li>
                <li>• Monitor spam folder placement and adjust if needed</li>
                <li>
                  • Complete warmup process takes 2-4 weeks for optimal results
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WarmupTab;

const getStatusIcon = (status: string) => {
  switch (status) {
    case "ready":
      return <CheckCircle className="w-3 h-3" />;
    case "warming":
      return <Clock className="w-3 h-3" />;
    case "paused":
      return <Pause className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};

function WarmupMailboxesTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>Warmup Status</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
          <Link href={"/dashboard/analytics/mailboxes"}>
            <Button variant="ghost" size="icon">
              <BarChart3 className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>Mailbox</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Daily Count</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Days Active</TableHead>
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
                        mailbox.warmupStatus
                      )}`}
                    >
                      {getStatusIcon(mailbox.warmupStatus)}
                      <span className="capitalize">
                        {mailbox.warmupStatus === "ready"
                          ? "Ready"
                          : mailbox.warmupStatus}
                      </span>
                    </span>
                  </TableCell>

                  <TableCell className="px-6 py-6">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">
                        {mailbox.warmupStatus === "paused"
                          ? "0"
                          : Math.floor(
                              mailbox.dailyLimit *
                                (mailbox.warmupProgress / 100)
                            )}{" "}
                        emails
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Daily warmup count
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">
                          {mailbox.totalSent}
                        </span>
                        <span className="text-xs text-gray-500">
                          total sent
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {mailbox.replies} replies ({mailbox.engagement})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-6">
                    <span className="text-sm font-medium text-gray-900">
                      {mailbox.warmupDays} days
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      Active period
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-6 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      {mailbox.warmupStatus === "warming" ||
                      mailbox.warmupStatus === "ready" ? (
                        <Button variant="ghost" size="icon">
                          <Pause className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="icon">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon">
                        <Settings className="w-4 h-4" />
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
