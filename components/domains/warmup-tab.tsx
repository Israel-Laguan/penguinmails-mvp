import { getStatusColor, mailboxes } from "@/lib/data/domains.mock";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Pause,
  Play,
  Settings,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import StatsCard from "../StatsCard";

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

function OverViewWarmup() {
  const readyMailboxes = mailboxes.filter(
    (m) => m.warmupStatus === "ready"
  ).length;
  const warmingMailboxes = mailboxes.filter(
    (m) => m.warmupStatus === "warming"
  ).length;
  const pausedMailboxes = mailboxes.filter(
    (m) => m.warmupStatus === "paused"
  ).length;
  const avgEngagement =
    mailboxes.reduce((sum, m) => sum + parseFloat(m.engagement), 0) /
    mailboxes.length;

  const cards = [
    {
      icon: CheckCircle,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      label: "Ready to Send",
      value: readyMailboxes,
    },
    {
      icon: Clock,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      label: "Warming Up",
      value: warmingMailboxes,
    },
    {
      icon: Pause,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
      label: "Paused",
      value: pausedMailboxes,
    },
    {
      icon: TrendingUp,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      label: "Avg. Engagement",
      value: `${avgEngagement.toFixed(1)}%`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((item, index) => (
        <StatsCard
          key={index}
          title={item.label}
          value={item.value.toString()}
          icon={item.icon}
          color={cn(item.bgColor, item.iconColor)}
          className="flex-row-reverse gap-5 justify-end"
        />
      ))}
    </div>
  );
}

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

const getStatusVariant = (status: string) => {
  switch (status) {
    case "ready":
      return "default";
    case "warming":
      return "secondary";
    case "paused":
      return "outline";
    default:
      return "outline";
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
          <Button variant="ghost" size="icon">
            <BarChart3 className="w-4 h-4" />
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
                <TableHead>Progress</TableHead>
                <TableHead>Daily Count</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Days Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mailboxes.map((mailbox) => (
                <TableRow key={mailbox.id}>
                  <TableCell className="font-medium">{mailbox.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusVariant(mailbox.warmupStatus)}
                      className="gap-1"
                    >
                      {getStatusIcon(mailbox.warmupStatus)}
                      <span className="capitalize">
                        {mailbox.warmupStatus === "ready"
                          ? "Ready"
                          : mailbox.warmupStatus}
                      </span>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <Progress
                          value={mailbox.warmupProgress}
                          className={cn("h-2", {
                            "[&>div]:bg-green-500":
                              mailbox.warmupStatus === "ready",
                            "[&>div]:bg-orange-500":
                              mailbox.warmupStatus === "warming",
                            "[&>div]:bg-gray-400":
                              mailbox.warmupStatus === "paused",
                          })}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-10">
                        {mailbox.warmupProgress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {mailbox.warmupStatus === "paused"
                      ? "0"
                      : Math.floor(
                          mailbox.dailyLimit * (mailbox.warmupProgress / 100)
                        )}{" "}
                    emails
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{mailbox.totalSent} sent</div>
                      <div className="text-muted-foreground">
                        {mailbox.replies} replies ({mailbox.engagement})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{mailbox.warmupDays} days</TableCell>
                  <TableCell className="text-right">
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
