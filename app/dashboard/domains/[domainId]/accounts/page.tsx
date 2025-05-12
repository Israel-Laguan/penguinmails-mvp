import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmailsTable } from "@/components/domains/emails-table";
import { EmailAccount } from "@/components/accounts/types";
import { ArrowLeft, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function DomainAccountsPage({ params }: { params: { domainId: string } }) {
  // TODO: Fetch domain and accounts data based on domainId
  const domain = {
    id: parseInt(params.domainId),
    name: "example.com",
  };

  const emailAccounts: EmailAccount[] = [
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
          <Link href={`/dashboard/domains/${domain.id}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Email Accounts</h1>
            <Button asChild>
              <Link href={`/dashboard/domains/${domain.id}/accounts/new`}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Account
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground">{domain.name}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Accounts</CardTitle>
          <CardDescription>
            Manage email accounts associated with this domain
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmailsTable emailAccounts={emailAccounts} />
        </CardContent>
      </Card>
    </div>
  );
}