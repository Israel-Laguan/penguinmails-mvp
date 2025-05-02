import React from "react";
import { AccountsHeader } from "@/components/accounts/header";
import { OverviewCards } from "@/components/accounts/overview-cards";
import { EmailsTable } from "@/components/accounts/emails-table";
import { DomainsTable } from "@/components/accounts/domains-table";
import { type EmailAccount, type Domain } from "@/components/accounts/types";

type AccountsContentProps = {
  emailAccounts: EmailAccount[];
  domains: Domain[];
};

export default function AccountsContent({
  emailAccounts,
  domains,
}: AccountsContentProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <AccountsHeader />
      <OverviewCards emailAccounts={emailAccounts} domains={domains} />
      <EmailsTable emailAccounts={emailAccounts} />
      <DomainsTable domains={domains} />
    </div>
  );
}

export type { EmailAccount, Domain };
