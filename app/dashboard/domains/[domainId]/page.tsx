import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { EmailsTable } from "@/components/domains/emails-table";
import { EmailAccount } from "@/components/domains/types";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Mail,
  Settings,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default async function DomainPage({
  params,
}: {
  params: { domainId: string };
}) {
  const { domainId } = await params;
  // TODO: Fetch domain data based on domainId
  const domain = {
    id: parseInt(params.domainId),
    name: "example.com",
    provider: "Google Workspace",
    status: "VERIFIED",
    daysActive: 120,
    reputation: 88,
    spf: true,
    dkim: true,
    dmarc: true,
    emailAccounts: 3,
    metrics: {
      total24h: 245,
      bounceRate: 0.02,
      spamRate: 0.001,
      openRate: 0.45,
      replyRate: 0.12,
    },
    weeklyTrend: {
      reputation: [85, 86, 87, 88, 88, 88, 89],
      emailsSent: [200, 210, 225, 230, 240, 245, 245],
    },
  };

  // TODO: Fetch top 10 accounts for this domain
  const topAccounts: EmailAccount[] = [
    {
      id: 1,
      email: "sales@example.com",
      provider: "Google Workspace",
      status: "ACTIVE",
      reputation: 92,
      warmupStatus: "WARMED",
      dayLimit: 300,
      sent24h: 250,
      lastSync: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      spf: true,
      dkim: true,
      dmarc: true,
      createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
      companyId: 1,
      createdById: "user_1",
    },
    {
      id: 2,
      email: "support@example.com",
      provider: "Google Workspace",
      status: "ACTIVE",
      reputation: 88,
      warmupStatus: "WARMING",
      dayLimit: 200,
      sent24h: 150,
      lastSync: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
      spf: true,
      dkim: true,
      dmarc: true,
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
      companyId: 1,
      createdById: "user_1",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/domains">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{domain.name}</h1>
            <Button asChild>
              <Link href={`/dashboard/domains/${domain.id}/settings`}>
                <Settings className="mr-2 h-4 w-4" />
                Domain Settings
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground">{domain.provider}</p>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Reputation Score
                </CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{domain.reputation}%</div>
                  <Progress value={domain.reputation} className="w-16 h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Overall domain performance and authentication status
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Emails (24h)
                </CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {domain.metrics.total24h}
                </div>
                <p className="text-xs text-muted-foreground">
                  {(domain.metrics.bounceRate * 100).toFixed(1)}% bounce rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {(domain.metrics.openRate * 100).toFixed(1)}%
                </div>
                <p className="text-xs text-muted-foreground">
                  {(domain.metrics.replyRate * 100).toFixed(1)}% reply rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Spam Rate</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {(domain.metrics.spamRate * 100).toFixed(3)}%
                </div>
                <p className="text-xs text-muted-foreground">
                  Last 7 days average
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Authentication Status</CardTitle>
                <CardDescription>
                  Email authentication records and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium mb-1">SPF Record</div>
                      <div className="text-sm text-muted-foreground">
                        Validates sending servers
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        domain.spf
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }
                    >
                      {domain.spf ? "Configured" : "Not Configured"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium mb-1">DKIM Record</div>
                      <div className="text-sm text-muted-foreground">
                        Signs outgoing emails
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        domain.dkim
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }
                    >
                      {domain.dkim ? "Configured" : "Not Configured"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium mb-1">DMARC Record</div>
                      <div className="text-sm text-muted-foreground">
                        Email authentication policy
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        domain.dmarc
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }
                    >
                      {domain.dmarc ? "Configured" : "Not Configured"}
                    </Badge>
                  </div>
                </div>

                {(!domain.spf || !domain.dkim || !domain.dmarc) && (
                  <Button className="w-full mt-6" asChild>
                    <Link href={`/dashboard/domains/${domain.id}/setup`}>
                      Complete Setup
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Metrics</CardTitle>
                <CardDescription>
                  Performance trends over the last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* TODO: Add line charts for reputation and email volume trends */}
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  Charts coming soon
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Top Email Accounts</CardTitle>
                <CardDescription>
                  Best performing email accounts in this domain
                </CardDescription>
              </div>
              <Button variant="outline" asChild>
                <Link href={`/dashboard/domains/${domain.id}/accounts`}>
                  View All Accounts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <EmailsTable emailAccounts={topAccounts} domainId={domainId} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
