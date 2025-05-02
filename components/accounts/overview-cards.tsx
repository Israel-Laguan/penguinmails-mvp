import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield } from "lucide-react";
import { copyText as t } from "./copy";
import { EmailAccount, Domain } from "./types";

type OverviewCardsProps = {
  emailAccounts: EmailAccount[];
  domains: Domain[];
};

export function OverviewCards({ emailAccounts, domains }: OverviewCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t.cards.emailAccounts.title}
          </CardTitle>
          <Mail className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{emailAccounts.length}</div>
          <p className="text-xs text-muted-foreground">
            {emailAccounts.filter((a) => a.status === "ACTIVE").length}{" "}
            {t.cards.emailAccounts.activeText}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t.cards.domains.title}
          </CardTitle>
          <Shield className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{domains.length}</div>
          <p className="text-xs text-muted-foreground">
            {domains.filter((d) => d.status === "VERIFIED").length}{" "}
            {t.cards.domains.verifiedText}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t.cards.reputation.title}
          </CardTitle>
          <Shield className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round(
              [
                ...emailAccounts.map((a) => a.reputation),
                ...domains.map((d) => d.reputation),
              ].reduce((sum, score) => sum + score, 0) /
                (emailAccounts.length + domains.length)
            )}
            %
          </div>
          <p className="text-xs text-muted-foreground">
            {t.cards.reputation.subtitle}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
