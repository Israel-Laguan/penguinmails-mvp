import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield, CheckCircle, Network } from "lucide-react";
import { copyText as t } from "./copy";
import { Domain } from "./types";

type OverviewCardsProps = {
  domains: Domain[];
};

export function OverviewCards({ domains }: OverviewCardsProps) {
  const getAuthenticatedCount = () => {
    return domains.filter(d => d.spf && d.dkim && d.dmarc).length;
  };

  const getAverageReputation = () => {
    if (domains.length === 0) return 0;
    return Math.round(
      domains.reduce((sum, d) => sum + d.reputation, 0) / domains.length
    );
  };

  const getTotalEmailAccounts = () => {
    return domains.reduce((sum, d) => sum + d.emailAccounts, 0);
  };

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t.cards.overview.domains.title}
          </CardTitle>
          <Network className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{domains.length}</div>
          <p className="text-xs text-muted-foreground">
            {domains.filter((d) => d.status === "VERIFIED").length}{" "}
            {t.cards.overview.domains.verifiedText}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t.cards.overview.authentication.title}
          </CardTitle>
          <Shield className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getAuthenticatedCount()}</div>
          <p className="text-xs text-muted-foreground">
            {t.cards.overview.authentication.subtitle}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t.cards.overview.reputation.title}
          </CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getAverageReputation()}%</div>
          <p className="text-xs text-muted-foreground">
            {t.cards.overview.reputation.subtitle}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t.cards.overview.accounts.title}
          </CardTitle>
          <Mail className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getTotalEmailAccounts()}</div>
          <p className="text-xs text-muted-foreground">
            {t.cards.overview.accounts.subtitle}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}